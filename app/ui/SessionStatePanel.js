export function renderSessionPanel(el, model) {
  const s = model.session;
  const active = s.status === "active";

  el.innerHTML = `
    <h2>Session Control</h2>
    <div class="row"><span class="small">Mode</span><span class="small">${s.mode}</span></div>
    <div class="row"><span class="small">Status</span><span class="badge">${s.status}</span></div>
    <div class="row"><span class="small">Session ID</span><span class="small">${s.sessionId ?? "—"}</span></div>
    <div class="row"><span class="small">Identity Profile</span><span class="small">${s.identityProfile ?? "—"}</span></div>

    <div style="margin-top:10px; display:flex; gap:10px;">
      <button ${active ? "disabled" : ""} id="btnStart">Start Session</button>
      <button ${active ? "" : "disabled"} id="btnEnd">End Session</button>
    </div>

    <p class="small" style="margin-top:10px;">
      Guardrail: identity/network changes require ending the session first.
    </p>
  `;

  // Stubbed behavior for now (real wiring comes via IPC)
  const btnStart = el.querySelector("#btnStart");
  const btnEnd = el.querySelector("#btnEnd");

  if (btnStart) btnStart.onclick = () => alert("Stub: Start Session (wire to Rust core via IPC next)");
  if (btnEnd) btnEnd.onclick = () => alert("Stub: End Session (wire to Rust core via IPC next)");
}