// JS-only “core engine” for v0.
// Enforces: session-based only, no mid-session mutation, local metadata audit only.

const { randomUUID } = require("crypto");

const identityProfiles = {
  windows_chrome_us: {
    profile: "windows_chrome_us",
    ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    platform: "Win32",
    language: "en-US",
    timezone: "America/New_York",
    screen: "1920x1080 @1",
    normalization: "webrtc_disabled=true, canvas_limited=true, locale_locked=true"
  },
  macos_safari_us: {
    profile: "macos_safari_us",
    ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_0)",
    platform: "MacIntel",
    language: "en-US",
    timezone: "America/Denver",
    screen: "2560x1600 @2",
    normalization: "webrtc_disabled=true, canvas_limited=true, locale_locked=true"
  }
};

let state = {
  mode: "pentester",
  scope: { enabled: false, note: "No scope set. Use authorized targets only." },
  session: { status: "inactive", sessionId: null, identityProfile: null, configHash: null },
  network: { vpn: "disconnected", proxy: "none", dns: "system_default", killswitch: "enabled=true, allow_only_tunnel=true" },
  fingerprint: null,
  audit: []
};

function audit(kind, detail) {
  const ts = Math.floor(Date.now() / 1000);
  state.audit.unshift(`ts=${ts} kind=${kind} detail=${detail}`);
  state.audit = state.audit.slice(0, 200);
}

function simpleHash(obj) {
  // Not cryptographic, used only for reproducible “config hash” display.
  const s = JSON.stringify(obj);
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return `H${h.toString(16)}`;
}

function getFingerprintFor(profileName) {
  return identityProfiles[profileName] || identityProfiles.windows_chrome_us;
}

module.exports = {
  getState() {
    return state;
  },

  startSession(profileName) {
    if (state.session.status === "active") {
      audit("session_start_rejected", "Session already active; must end before starting a new one.");
      return state;
    }

    const fp = getFingerprintFor(profileName);
    const sessionId = randomUUID();

    const config = {
      identityProfile: fp.profile,
      network: state.network,
      fingerprint: { ...fp }
    };

    state.session = {
      status: "active",
      sessionId,
      identityProfile: fp.profile,
      configHash: simpleHash(config)
    };

    state.fingerprint = fp;

    audit("session_started", `id=${sessionId} profile=${fp.profile} config=${state.session.configHash}`);
    return state;
  },

  endSession() {
    if (state.session.status !== "active") {
      audit("session_end_noop", "No active session to end.");
      return state;
    }

    audit("session_ended", `id=${state.session.sessionId}`);

    // Destroy session-only state
    state.session = { status: "inactive", sessionId: null, identityProfile: null, configHash: null };
    state.fingerprint = null;

    return state;
  },

  setScope(enabled, note) {
    state.scope = { enabled: !!enabled, note: String(note || "") };
    audit("scope_set", `enabled=${state.scope.enabled}`);
    return state;
  }
};
