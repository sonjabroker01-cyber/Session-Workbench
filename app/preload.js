const { contextBridge } = require("electron");

/**
 * Preload exposes only safe, minimal surfaces.
 * No automation hooks, no browsing data, no stealth.
 */
contextBridge.exposeInMainWorld("workbench", {
  getSessionInfo: () => ({
    status: "inactive",
    mode: "pentester",
    sessionId: null,
    identityProfile: null
  }),

  getNetworkInfo: () => ({
    vpn: "disconnected",
    proxy: "none",
    dns: "system_default",
    killswitch: "enabled=true, allow_only_tunnel=true"
  }),

  getFingerprintInfo: () => ({
    profile: "windows_chrome_us",
    ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    platform: "Win32",
    language: "en-US",
    timezone: "America/New_York",
    screen: "1920x1080 @1",
    normalization: "webrtc_disabled=true, canvas_limited=true, locale_locked=true"
  }),

  getScopeInfo: () => ({
    enabled: false,
    note: "No scope set. Use authorized targets only."
  }),

  getLocalAudit: () => ([
    "ts=0 kind=boot detail=ui_loaded",
    "ts=0 kind=guardrails detail=no_automation,no_mid_session_mutation"
  ])
});