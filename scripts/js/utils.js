// *=========================================
// ** Cookie Warning  **
// *=========================================

function cookieWarning() {
  const cookieBanner = document.querySelector('.cookie-warning-wrapper');
  const cookieWarningButton = document.querySelector('.cookie-warning-button');

  if (localStorage.getItem('cookieSeen') !== 'shown') {
    cookieBanner.classList.add('show-cookie-warning');
  } else {
    cookieBanner.style.display = 'none';
  }

  cookieWarningButton.addEventListener(
    'click',
    () => {
      localStorage.setItem('cookieSeen', 'shown');
      cookieBanner.classList.remove('show-cookie-warning');
      cookieBanner.addEventListener('transitionend', () => {
        cookieBanner.style.display = 'none';
      });
    },
    { once: true }
  );
}

// *=========================================
// ** Clean Text  **
// *=========================================

function cleanText(e) {
  if (typeof e === 'string') {
    return cleanText(document.querySelectorAll(e));
  }
  if (e[0] && e[0].innerHTML) {
    for (let i = 0; i < e.length; i += 1) {
      cleanText(e[i]);
    }
    return;
  }
  e.innerHTML = e.innerHTML
    .replace(/\-/g, '‑')
    .replace(/V/g, '‌V‌')
    .replace(/\./g, '‌.‌')
    .replace(/,/g, '‌,‌')
    .replace(/A/g, '‌A‌')
    .replace(/fi/g, 'f‌i');
}

// *==============================================================================
// ** Exports  **
// *==============================================================================

export { cookieWarning, cleanText };
