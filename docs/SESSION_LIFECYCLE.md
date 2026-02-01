# Session Lifecycle

1. User initiates session
2. Identity profile selected
3. Network path established
4. Identity and network locked
5. User operates within session
6. Session ends
7. All state destroyed

## Guardrails
- Identity changes require session restart
- Network changes require session restart
- No background rotation