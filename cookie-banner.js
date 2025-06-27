// cookie-banner.js
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookiesAccepted")) {
    const banner = document.createElement("div");
    banner.innerHTML = `
      <div id="cookie-banner" style="
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.9);
        color: #fff;
        padding: 1rem;
        font-family: 'JetBrains Mono', monospace;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 9999;
        box-shadow: 0 -2px 10px rgba(0, 255, 255, 0.2);
      ">
        <span>
          This website uses cookies to enhance your experience. By using our site, you agree to our use of cookies.
        </span>
        <button id="accept-cookies" style="
          background: #00ffff;
          color: #000;
          font-weight: bold;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          margin-left: 1rem;
        ">Accept</button>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById("accept-cookies").onclick = function () {
      localStorage.setItem("cookiesAccepted", true);
      const bannerElement = document.getElementById("cookie-banner");
      if (bannerElement) bannerElement.remove();
    };
  }
});
