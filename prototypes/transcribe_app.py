"""
# Audio Transcriber — Gemini-Powered Speaker Diarization
# ======================================================
# Single-file Streamlit app: upload audio/video → Gemini transcribes
# with speaker separation → formatted output with copy button.
#
# Uses Gemini 2.5 Pro + Files API for unlimited file sizes.
# Requires: GEMINI_API_KEY (paste in the app or set as env var)
#
# Run with: streamlit run transcribe_app.py
"""

import streamlit as st
import os, json, time, pathlib

# ── Page config ─────────────────────────────────────────────────────────
st.set_page_config(
    page_title="Audio Transcriber",
    page_icon="🎙️",
    layout="wide",
)

st.title("🎙️ Audio Transcriber")
st.markdown(
    "Upload an audio/video file and Gemini will transcribe it with "
    "**speaker diarization** — perfect for your NotebookLM podcast chat."
)

# ── Sidebar: API Key ────────────────────────────────────────────────────
with st.sidebar:
    st.header("🔑 API Key")
    api_key = st.text_input(
        "Gemini API Key",
        type="password",
        help="Get one at https://aistudio.google.com/apikey",
        value=os.environ.get("GEMINI_API_KEY", ""),
    )
    st.divider()
    st.caption(
        "Uses **gemini-2.5-pro** — "
        "[pricing](https://ai.google.dev/pricing) "
        "(~$1.25/1M input tokens)."
    )

# ── Main area: File upload ──────────────────────────────────────────────
uploaded_file = st.file_uploader(
    "Choose an audio or video file",
    type=["mp4", "m4a", "wav", "mp3", "mov", "ogg", "webm"],
    help="Any size up to 2GB — Gemini Files API handles it.",
)

# ── The actual work ─────────────────────────────────────────────────────
if uploaded_file and api_key:
    with st.spinner("⏳ Uploading to Gemini Files API..."):
        try:
            # Save uploaded file temporarily
            import google.genai as genai

            client = genai.Client(api_key=api_key)

            # Get original filename
            orig_name = uploaded_file.name
            suffix = pathlib.Path(orig_name).suffix or ".mp4"

            # Save temp
            temp_path = f"/tmp/gemini_upload_{int(time.time())}{suffix}"
            with open(temp_path, "wb") as f:
                f.write(uploaded_file.getbuffer())

            # Upload via Files API (handles large files, 48h expiry)
            file_ref = client.files.upload(file=temp_path)
            st.success(f"✅ Uploaded: {file_ref.display_name or orig_name}")

            # Clean up temp
            os.remove(temp_path)

        except Exception as e:
            st.error(f"❌ Upload failed: {e}")
            st.stop()

    with st.spinner("🧠 Gemini is transcribing with speaker identification..."):
        try:
            prompt = (
                "Analyze this audio file. Provide a word-for-word verbatim "
                "transcription. Accurately separate the speakers, "
                "distinguishing between the two primary voices. Label them "
                "clearly as **Host 1** and **Host 2**. "
                "Start a new paragraph every time the speaker changes. "
                "Keep all casual conversation elements, pauses, and filler "
                "words intact."
            )

            response = client.models.generate_content(
                model="gemini-2.5-pro",
                contents=[file_ref, prompt],
            )

            transcript = response.text

            # File auto-expires after 48h — no manual delete needed
            st.success("✅ Transcription complete!")

        except Exception as e:
            st.error(f"❌ Transcription failed: {e}")
            st.stop()

    # ── Display formatted transcript ────────────────────────────────────
    st.divider()
    st.header("📝 Transcript")

    # Format: bold speaker labels, clean paragraphs
    formatted = transcript

    col1, col2 = st.columns([6, 1])
    with col1:
        st.markdown(formatted, unsafe_allow_html=False)

    # Copy button
    with col2:
        st.markdown("### ")
        st.markdown("**Copy**")
        clean_text = transcript.replace("**", "")
        st.code(clean_text, language="text", line_numbers=False)

    # Download option
    st.download_button(
        label="📥 Download as .txt",
        data=transcript.encode("utf-8"),
        file_name=f"transcript_{pathlib.Path(orig_name).stem}.txt",
        mime="text/plain",
    )

elif uploaded_file and not api_key:
    st.warning("⚠️ Paste your Gemini API key in the sidebar to proceed.")
elif not uploaded_file:
    st.info("👆 Upload a file to get started.")

# ── Footer ──────────────────────────────────────────────────────────────
st.divider()
st.caption(
    "Built with ❤️ by Theo · Powered by Gemini 2.5 Pro · "
    "Files auto-delete after 48h via Google's Files API."
)

# ── Usage instructions (collapsible) ────────────────────────────────────
with st.expander("📖 How to use"):
    st.markdown("""
    1. **Get a Gemini API key** at [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
    2. **Paste it** in the sidebar (stored only for this session)
    3. **Upload** your MP4/M4A/WAV/MP3 file (any size up to 2GB)
    4. **Wait** ~30-60s for transcription
    5. **Copy or download** the formatted transcript

    The output labels speakers as **Host 1** and **Host 2** with paragraph breaks
    on every speaker change. Perfect for feeding into the podcast generator!
    """)