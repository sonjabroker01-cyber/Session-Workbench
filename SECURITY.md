# Security Policy

## Supported Versions
This project is currently in early development. Only the latest version
published in the main branch is supported for security updates.

## Reporting a Vulnerability
If you discover a security vulnerability, please report it responsibly.

### How to Report
- Do NOT open a public GitHub issue for security vulnerabilities
- Contact the project maintainers privately
- Provide sufficient detail to reproduce the issue

### What to Include
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Affected components or files

### What This Project Considers a Vulnerability
- Leaks of network traffic outside the configured session
- Session isolation failures
- Fingerprinting surfaces behaving inconsistently within a session
- Kill switch or DNS isolation failures
- Unintended persistence of session state

### What Is Not a Vulnerability
- Lawful attribution by upstream providers
- Detection by external services
- Fingerprinting that remains possible by design
- User behavior or misuse

## Design Intent
This project intentionally prioritizes:
- Transparency over stealth
- Session isolation over evasion
- Lawful traceability over deniability

Security reports are evaluated within this context.