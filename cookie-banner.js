window.onload = () => {
  if (!localStorage.getItem('cookieConsent')) {
    const banner = document.createElement('div');
    banner.innerHTML = `
      <div style="position:fixed;bottom:0;width:100%;background:#111;color:#fff;padding:10px;text-align:center;z-index:1000">
        We use cookies to enhance your experience. <a href='privacy.html' style='color:#1EE8B7'>Learn more</a>.
        <button style='margin-left:10px' onclick='this.parentNode.remove();localStorage.setItem("cookieConsent",true)'>Accept</button>
      </div>`;
    document.body.appendChild(banner);
  }
};
