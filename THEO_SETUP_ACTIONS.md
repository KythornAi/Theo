# Theo Setup Actions — Session 38 (2026-05-10)

*Everything Kyle needs to run on the Pi (via SSH) and on his Mac to fix the cron, set up GitHub, install Codex, and deploy the new skills. Follow the sections in order.*

---

## 1. Fix the cron failure (OPENAI_BASE_URL)

**The problem:** Theo's `sk-or-v1-*` key is an OpenRouter key, but the `monthly-skill-audit` cron skill is sending it to OpenAI's API endpoint directly, which rejects it. Fix: tell the environment that this key belongs to OpenRouter.

**SSH to Pi and run:**

```bash
ssh kyle@hermes-theo-pi

# View current .env to see what's already there
cat ~/.hermes/.env

# Add the OpenRouter base URL (only if OPENAI_BASE_URL is not already set)
echo 'OPENAI_BASE_URL=https://openrouter.ai/api/v1' >> ~/.hermes/.env

# Verify it landed
grep OPENAI ~/.hermes/.env

# Restart Hermes so it picks up the new env var
# (Ctrl+C existing session first, then:)
hermes
```

**After restart:** Send Theo a test message in Telegram. Then trigger the cron manually:
```bash
# Ask Theo in Telegram: "Run the monthly-skill-audit now and tell me what happens"
```

If the 401 error is gone, the cron is fixed. If it still fails, the skill has a hardcoded OpenAI endpoint — run this to check:
```bash
cat ~/.hermes/skills/monthly-skill-audit/SKILL.md
```
and share the output with Claude in the Theo Support project.

---

## 2. Set up Theo's GitHub repository

**Who does what:** Kyle handles the two browser steps (2a and 2c). Theo handles everything else via Telegram.

---

### 2a. KYLE — Create the repo on GitHub (browser)

1. Go to https://github.com/KythornAi
2. New repository → name it `theo`
3. Set to **Private**
4. Do NOT initialise with README — Theo will push the first commit
5. Done — move to 2b

---

### 2b. THEO — Generate SSH key

Send this message in Telegram:

> "Theo, I need you to generate a dedicated SSH key for GitHub on the Pi. Run this:
> `ssh-keygen -t ed25519 -C "theo@paper-n-pixels" -f ~/.ssh/theo_github`
> Use no passphrase (press Enter twice). Then show me the contents of `~/.ssh/theo_github.pub` so I can add it to GitHub."

Wait for Theo to reply with the public key before moving to 2c.

---

### 2c. KYLE — Add the public key to GitHub (browser)

1. Go to https://github.com/settings/ssh/new
2. Title: `Theo Pi — theo`
3. Key type: Authentication Key
4. Paste the public key Theo sent you
5. Click Add SSH key — then tell Theo it's done

---

### 2d. THEO — Configure SSH and test the connection

Send this message in Telegram:

> "Great, the key is added. Now append this to your `~/.ssh/config` file:
>
> ```
> Host github-theo
>     HostName github.com
>     User git
>     IdentityFile ~/.ssh/theo_github
>     IdentitiesOnly yes
> ```
>
> Then run `ssh -T github-theo` and tell me what it says."

Expected reply: "Hi KythornAi! You've successfully authenticated..."

---

### 2e. THEO — Initialise git and push first commit

Send this message in Telegram:

> "Perfect. Now initialise the git repo in your workspace and push the baseline commit:
>
> ```
> cd ~/hermes_files/theo
> git init
> git branch -M main
> git config user.name "Theo"
> git config user.email "blessed4evr@gmail.com"
> git remote add origin github-theo:KythornAi/theo.git
> ```
>
> Then create a `.gitignore` file with these contents:
>
> ```
> .env
> *.env
> ~/.hermes/
> .stfolder/
> .stversions/
> .DS_Store
> *.sync-conflict-*
> brain_out/*.sync-conflict-*
> syncthing.log
> research/*.tmp
> *.swp
> __pycache__/
> *.pyc
> ```
>
> Then stage and commit — do NOT use git add -A, only these files:
>
> ```
> git add research/ skills/ memory/ notes/ prototypes/
> git add SOUL.md AGENTS.md THEO_OPS.md THEO_RUNLOG.md HERMES_INBOX.md
> git add THEO_CLI_CHEATSHEET.md THEO_SETUP_ACTIONS.md migration-baseline-2026-05-09.md
> git add .gitignore
> git commit -m "chore: initial commit — Theo workspace baseline 2026-05-10"
> git push -u origin main
> ```
>
> Tell me when it's pushed and I'll verify on GitHub."

**Kyle:** confirm at https://github.com/KythornAi/theo that the files are there.

---

### 2f. THEO — Deploy the git-commit skill

Send this message in Telegram:

> "Last step — copy the git-commit skill into your Hermes runtime folder:
> `cp -r ~/hermes_files/theo/skills/git-commit ~/.hermes/skills/`
> Then confirm what's in `~/.hermes/skills/git-commit/` and re-read AGENTS.md. Tell me when you can see the GitHub section."

---

## 3. Install Codex CLI and authenticate

### 3a. Check Node is installed on Pi

```bash
ssh kyle@hermes-theo-pi
node --version
npm --version
```

If not installed:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 3b. Install Codex CLI on the Pi

```bash
ssh kyle@hermes-theo-pi
npm install -g @openai/codex
codex --version
```

### 3c. Authenticate with ChatGPT Plus (headless approach)

Codex uses browser-based OAuth which won't work directly on the Pi. Do the auth on your Mac first, then copy the token to the Pi.

**On your Mac:**
```bash
# Install Codex on Mac if not already there
npm install -g @openai/codex

# Authenticate — this will open a browser
codex

# After logging in, check where the auth token was saved
ls ~/.codex/
# Look for auth.json or similar — note the exact filename
```

**If the auth token is a file in `~/.codex/` (not macOS Keychain):**
```bash
# Copy the auth config to the Pi
scp -r ~/.codex/ kyle@hermes-theo-pi:~/.codex/

# Test on Pi
ssh kyle@hermes-theo-pi "codex --version && echo 'auth check: ok'"
```

**If the auth token is in macOS Keychain (no file in ~/.codex/):**
This approach won't work directly. Come back to this — note it as a blocker and use `OPENAI_API_KEY` as a temporary fallback if you have API credits, or ask in the Theo Support Claude project for the current Codex headless auth pattern.

### 3d. Deploy the codex-think skill

```bash
ssh kyle@hermes-theo-pi
cp -r ~/hermes_files/theo/skills/codex-think ~/.hermes/skills/
ls ~/.hermes/skills/codex-think/
```

Tell Theo in Telegram: "New skill installed: codex-think. You can now use Codex CLI for deep thinking tasks."

---

## 4. Set up the Claude Support Project (Mac, in browser)

1. Go to https://claude.ai → Projects → New Project
2. Name: `Theo — Hermes Agent Support`
3. Open `Side_Hustle/theo/CLAUDE_PROJECT_BRIEF.md` — paste the **Project Instructions** section into the project's custom instructions field
4. Upload the knowledge files listed in that document from your local `Side_Hustle/theo/` folder

---

## 5. Side Hustle repo — handle nested git repo

The `theo/` folder in your Side Hustle repo will now contain a `.git/` folder (Theo's GitHub repo). Add an exception to the Side Hustle root `.gitignore` so it doesn't confuse git:

This is already handled — see your root `.gitignore`. If you ever see `theo/.git/` appearing in `git status` for the Side Hustle repo, add `theo/.git` to the root `.gitignore`.

---

## Summary checklist

- [ ] **1.** OPENAI_BASE_URL added to ~/.hermes/.env, Hermes restarted, cron tested
- [ ] **2a.** `theo` repo created on GitHub (private)
- [ ] **2b–2c.** SSH key generated on Pi, added to GitHub
- [ ] **2d.** SSH config updated, `ssh -T github-theo` confirms auth
- [ ] **2e.** git init, first commit pushed to `KythornAi/theo`
- [ ] **2f.** `git-commit` skill copied to `~/.hermes/skills/`
- [ ] **3a–3b.** Node + Codex CLI installed on Pi
- [ ] **3c.** ChatGPT Plus OAuth completed (Mac first, copy to Pi)
- [ ] **3d.** `codex-think` skill copied to `~/.hermes/skills/`
- [ ] **4.** Claude Support Project created at claude.ai with instructions + knowledge files

*Created: 2026-05-10 by Claude*
