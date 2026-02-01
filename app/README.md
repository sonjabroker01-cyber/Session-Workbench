# Electron Application

This directory contains the Electron-based desktop application for the
Privacy-Isolated Networking Workbench.

The application is intentionally minimal and hardened. It exists to render
a local UI and expose **explicit, read-only session context** via a constrained
preload bridge.

---

## Purpose

The Electron app serves as a controlled execution shell for:

- Displaying session and network posture information
- Demonstrating safe Electron hardening patterns
- Supporting local, non-automated security research workflows

It does **not** perform browsing, automation, interception, or background
network activity.

---

## Security Posture

The application is configured with the following non-negotiable constraints:

- `contextIsolation: true`
- `nodeIntegration: false`
- No remote content loading
- No dynamic code execution
- No renderer access beyond the preload bridge

The renderer process is treated as untrusted.

---

## Main Process (`main.js`)

Responsibilities:

- Application lifecycle management
- Window creation and configuration
- Loading the local UI entry point

The main process does **not**:
- Inspect traffic
- Modify system state
- Inject scripts
- Expose privileged APIs

---

## Preload Layer (`preload.js`)

The preload script exposes a **narrow, descriptive interface** under
`window.workbench`.

Design principles:

- Read-only data
- No mutation methods
- No automation hooks
- No access to browsing history, input events, or identifiers

All exposed fields are static or declarative by design and intended to be
auditable.

---

## Renderer / UI (`ui/`)

The UI is a local HTML-based interface loaded from disk.

Characteristics:

- No remote resources
- No external scripts
- No telemetry
- No background networking

The UI may display state but cannot alter application behavior or session
configuration.

---

## Directory Structure
---

## Development Notes

- This app is expected to run in trusted, local environments only.
- Any future expansion of the preload surface must be explicitly justified
  and documented.
- Features that require stealth, automation, or implicit behavior are
  considered out of scope by design.

---

## Relationship to Project Documentation

This application implements the constraints defined in:

- `session-workbench/docs/SECURITY.md`
- `session-workbench/docs/ETHICAL_USE.md`
- `session-workbench/docs/TERMS.md`

The Electron app should be read as an **enforcement mechanism**, not a bypass.
