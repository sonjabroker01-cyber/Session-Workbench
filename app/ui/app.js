import { renderSessionPanel } from "./panels/SessionPanel.js";
import { renderNetworkInspector } from "./panels/NetworkInspector.js";
import { renderFingerprintInspector } from "./panels/FingerprintInspector.js";
import { renderScopeBanner } from "./panels/ScopeBanner.js";
import { renderLogsPanel } from "./panels/LogsPanel.js";

/**
 * Pull data from preload (stubbed for now).
 * Next step is IPC wiring to the Rust core.
 */
const model = {
  session: window.workbench.getSessionInfo(),
  network: window.workbench.getNetworkInfo(),
  fingerprint: window.workbench.getFingerprintInfo(),
  scope: window.workbench.getScopeInfo(),
  logs: window.workbench.getLocalAudit()
};

renderScopeBanner(document.getElementById("scopeBanner"), model);
renderSessionPanel(document.getElementById("sessionPanel"), model);
renderNetworkInspector(document.getElementById("networkInspector"), model);
renderFingerprintInspector(document.getElementById("fingerprintInspector"), model);
renderLogsPanel(document.getElementById("logsPanel"), model);