(() => {
  const allowed = new Set([
    "1de610488f00bcc1f559fbc35906c2153c150f2f19e48521b566283fabdd0cab",
    "d4df850641c4b24902905d2bfff1347ae2f68fa216dfa893d9e5df6f4d9f86a9"
  ]);
  const sessionKey = "shoman-desk-unlocked-v1";
  try { if (sessionStorage.getItem(sessionKey) === "1") return; } catch (_) {}
  document.documentElement.classList.add("desk-locked");
  const style = document.createElement("style");
  style.textContent = `
    html.desk-locked,html.desk-locked body{height:100%;overflow:hidden;background:#211a14}
    html.desk-locked body>*:not(#desk-auth-gate){visibility:hidden!important}
    #desk-auth-gate{position:fixed;inset:0;z-index:999999;display:grid;place-items:center;padding:22px;background:radial-gradient(ellipse at 50% 30%,#4a3828 0%,#211a14 62%,#110e0b 100%);color:#f1e7d4;font-family:Georgia,serif;visibility:visible!important}
    #desk-auth-gate .auth-card{width:min(380px,100%);padding:38px 34px 32px;border:1px solid #a98a5e;background:linear-gradient(145deg,#2c2821f5,#181914f5);box-shadow:0 28px 90px #0009;text-align:center}
    #desk-auth-gate .auth-eyebrow{font:700 9px Arial,sans-serif;letter-spacing:.26em;color:#c5a36c}
    #desk-auth-gate h1{margin:14px 0 5px;font:600 35px 'Playfair Display',Georgia,serif;letter-spacing:.13em}
    #desk-auth-gate p{margin:0 0 23px;color:#bfb19a;font:12px/1.6 Arial,sans-serif}
    #desk-auth-gate input{display:block;width:100%;height:44px;padding:0 13px;border:1px solid #79674c;background:#171812;color:#f4ead7;outline:none;font:13px Arial,sans-serif}
    #desk-auth-gate input:focus{border-color:#d0b47d;box-shadow:0 0 0 2px #c5a36c22}
    #desk-auth-gate button{width:100%;height:43px;margin-top:10px;border:1px solid #c5a36c;background:linear-gradient(120deg,#c2a06a,#9c7849);color:#20180f;font:700 10px Arial,sans-serif;letter-spacing:.16em;text-transform:uppercase;cursor:pointer}
    #desk-auth-gate .auth-error{min-height:17px;margin:12px 0 0;color:#e5a28f;font:11px Arial,sans-serif}
  `;
  document.head.appendChild(style);

  function releaseProtectedAssets() {
    document.querySelectorAll("[data-protected-src]").forEach(element => {
      const source = element.getAttribute("data-protected-src");
      if (!source) return;
      element.setAttribute("src", source);
      element.removeAttribute("data-protected-src");
    });
    if (document.querySelector(".desk-stage")) {
      const scene = document.createElement("script");
      scene.src = "./desk-scene.js";
      scene.defer = true;
      document.head.appendChild(scene);
    }
  }
  const mount = () => {
    if (document.getElementById("desk-auth-gate")) return;
    const gate = document.createElement("section");
    gate.id = "desk-auth-gate";
    gate.innerHTML = '<form class="auth-card" autocomplete="on"><div class="auth-eyebrow">PRIVATE VIEW</div><h1>SHOMAN</h1><p>Enter the password to open the desk.</p><input type="password" name="password" autocomplete="current-password" placeholder="Password" aria-label="Password" required><button type="submit">Unlock</button><div class="auth-error" role="status" aria-live="polite"></div></form>';
    document.body.appendChild(gate);
    const form = gate.querySelector("form");
    const input = form.querySelector("input");
    const error = gate.querySelector(".auth-error");
    form.addEventListener("submit", async event => {
      event.preventDefault();
      error.textContent = "";
      const value = input.value.trim();
      try {
        const bytes = new TextEncoder().encode(value);
        const digest = await crypto.subtle.digest("SHA-256", bytes);
        const hash = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2,"0")).join("");
        if (allowed.has(hash)) {
          try { sessionStorage.setItem(sessionKey,"1"); } catch (_) {}
          document.documentElement.classList.remove("desk-locked");
          releaseProtectedAssets();
          gate.remove();
        } else {
          error.textContent = "That password doesn't unlock this desk.";
          input.select();
        }
      } catch (_) {
        error.textContent = "Password check unavailable. Open the site over HTTPS.";
      }
    });
    input.focus();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded",mount,{once:true});
  else mount();
  document.addEventListener("contextmenu",event=>{if(event.target.closest(".travel-frame,.image-grid,.certificate,.desk-stage"))event.preventDefault();});
  document.addEventListener("dragstart",event=>{if(event.target.closest("img"))event.preventDefault();});
})();