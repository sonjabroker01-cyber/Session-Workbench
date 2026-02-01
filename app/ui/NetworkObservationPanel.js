export function renderNetworkInspector(el, model) {
  const n = model.network;

  el.innerHTML = `
    <h2>Network Inspector</h2>
    <div class="row"><span class="small">VPN</span><span class="small">${n.vpn}</span></div>
    <div class="row"><span class="small">Proxy</span><span class="small">${n.proxy}</span></div>
    <div class="row"><span class="small">DNS</span><span class="small">${n.dns}</span></div>
    <div class="row"><span class="small">Kill Switch</span><span class="small">${n.killswitch}</span></div>

    <p class="small" style="margin-top:10px;">
      Guardrail: rotate or reconfigure only between sessions.
    </p>
  `;
}