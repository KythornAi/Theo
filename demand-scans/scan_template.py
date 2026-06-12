#!/usr/bin/env python3
"""Demand scan template — reusable structure for Upwork, Fiverr, Reddit scans."""

import json
import os
from datetime import datetime
from hermes_tools import web_search, write_file

RESULTS_DIR = "/home/kylemoore/theo/demand-scans/results"
os.makedirs(RESULTS_DIR, exist_ok=True)

today = datetime.now().strftime("%Y-%m-%d")

def save_scan(source, content):
    path = os.path.join(RESULTS_DIR, f"{source}-{today}.md")
    write_file(path=path, content=content)

def scan_upwork():
    """Search Upwork for trending service categories."""
    results = web_search(query="site:upwork.com freelance services demand 2024 2025", limit=5)
    return results

def scan_fiverr():
    """Search Fiverr for high-demand gig categories."""
    results = web_search(query="site:fiverr.com most popular gig categories 2024 2025", limit=5)
    return results

def scan_reddit_business():
    """Search Reddit for business problems people need solved."""
    queries = [
        "site:reddit.com r/smallbusiness what problem can I solve",
        "site:reddit.com r/Entrepreneur what service do you wish existed",
        "site:reddit.com r/freelance biggest pain point automation",
    ]
    results = []
    for q in queries:
        r = web_search(query=q, limit=3)
        results.append(r)
    return results

def scan_service_demand():
    """Broader scan: what services are in demand across platforms."""
    queries = [
        "freelance services high demand 2024 2025",
        "automation service small business pain point",
        "freelancer tool gap what people need",
    ]
    results = []
    for q in queries:
        r = web_search(query=q, limit=3)
        results.append(r)
    return results

if __name__ == "__main__":
    # This is a template — actual cron jobs call specific scan functions
    # and write results to the results directory
    pass