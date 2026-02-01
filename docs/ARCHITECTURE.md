# Architecture Overview

## High-Level Components
- Electron-based desktop UI
- Rust core engine
- Session-scoped network stack
- Identity and fingerprint normalization layer

## Design Characteristics
- Explicit user control
- No background automation
- No hidden state
- No mid-session mutation

## Separation of Concerns
- UI: transparency and control
- Core engine: enforcement and guardrails
- Network layer: isolation and leak prevention