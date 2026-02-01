export function renderFingerprintInspector(el, model) {
  const f = model.fingerprint;

  el.innerHTML = `
    <h2>Fingerprint Inspector</h2>
    <div class="row"><span class="small">Profile</span><span class="small">${f.profile}</span></div>
    <div class="row"><span class="small">User-Agent</span><span class="small">${f.ua}</span></div>
    <div class="row"><span class="small">Platform</span><span class="small">${f.platform}</span></div>
    <div class="row"><span class="small">Language</span><span class="small">${f.language}</span></div>
    <div class="row"><span class="small">Timezone</span><span class="small">${f.timezone}</span></div>
    <div class="row"><span class="small">Screen</span><span class="small">${f.screen}</span></div>
    <div class="row"><span class="small">Normalization</span><span class="small">${f.normalization}</span></div>

    <p class="small" style="margin-top:10px;">
      Guardrail: reduces entropy without impersonating specific real devices or users.
    </p>
  `;
}