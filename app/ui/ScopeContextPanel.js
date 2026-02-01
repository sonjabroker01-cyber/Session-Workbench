export function renderScopeBanner(el, model) {
  const s = model.scope;

  if (!s.enabled) {
    el.innerHTML = `
      <div class="card warn" style="margin-bottom:14px;">
        <div class="row" style="border-bottom:none;">
          <span class="small">Scope</span>
          <span class="badge warn">Not Set</span>
        </div>
        <div class="small">${s.note}</div>
      </div>
    `;
    return;
  }

  el.innerHTML = `
    <div class="card" style="margin-bottom:14px;">
      <div class="row" style="border-bottom:none;">
        <span class="small">Scope</span>
        <span class="badge">Enabled</span>
      </div>
      <div class="small">${s.note}</div>
    </div>
  `;
}