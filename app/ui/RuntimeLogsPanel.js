export function renderLogsPanel(el, model) {
  const lines = model.logs || [];
  const htmlLines = lines
    .map(l => `<div class="small" style="padding:4px 0; border-bottom:1px dashed #23304a;">${escapeHtml(l)}</div>`)
    .join("");

  el.innerHTML = `
    <h2>Local Audit (Minimal)</h2>
    <div class="small" style="margin-bottom:8px;">
      Local-only metadata. No URLs, no content, no credentials.
    </div>
    <div style="max-height:260px; overflow:auto;">
      ${htmlLines || "<div class='small'>No events yet.</div>"}
    </div>
  `;
}

function escapeHtml(str) {
  return (str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}