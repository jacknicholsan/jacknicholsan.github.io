// Header'a butonları ekle
function addHeaderButtons() {
  const headerActions = document.querySelector('.header__actions');
  const signinButton = document.querySelector('.header__signin');
  
  // Eğer butonlar zaten eklenmişse tekrar ekleme
  if (document.querySelector('.header__custom-buttons')) {
    return;
  }
  
  if (headerActions && signinButton) {
    // Mevcut butonları oluştur
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'header__custom-buttons';
    
    // Butonların verileri
    const buttons = [
      {
        text: 'Ukra Live',
        iconUrl: 'https://jacknicholsan.github.io/playicov2/icons/svg/tv.svg',
        class: 'header__btn-ukra',
        href: '#'
      },
      {
        text: 'Para Yatır',
        iconUrl: 'https://jacknicholsan.github.io/playicov2/icons/svg/money.svg',
        class: 'header__btn-deposit',
        href: '#'
      },
      {
        iconUrl: 'https://jacknicholsan.github.io/playicov2/icons/svg/call.svg',
        class: 'header__btn-contact',
        href: '#'
      },
      {
        iconUrl: 'https://jacknicholsan.github.io/playicov2/icons/svg/x.svg',
        class: 'header__btn-x',
        href: '#'
      },
      {
        iconUrl: 'https://jacknicholsan.github.io/playicov2/icons/svg/telegram.svg',
        class: 'header__btn-telegram',
        href: '#'
      },
      {
        iconUrl: 'https://jacknicholsan.github.io/playicov2/icons/svg/wp.svg',
        class: 'header__btn-whatsapp',
        href: '#'
      }
    ];
    
    // Butonları oluştur
    buttons.forEach(button => {
      const btn = document.createElement('a');
      btn.className = `header__custom-btn ${button.class}`;
      btn.href = button.href;
      btn.setAttribute('aria-label', button.text || button.class.replace('header__btn-', ''));
      
      // SVG ikon oluştur
      const iconImg = document.createElement('img');
      iconImg.src = button.iconUrl;
      iconImg.className = 'header__btn-icon-svg';
      iconImg.alt = button.text || '';
      iconImg.setAttribute('aria-hidden', 'true');
      
      if (button.text) {
        // Metinli butonlar (Ukra Live, Para Yatır)
        btn.appendChild(iconImg);
        
        const textSpan = document.createElement('span');
        textSpan.className = 'header__btn-text';
        textSpan.textContent = button.text;
        btn.appendChild(textSpan);
      } else {
        // Sadece ikonlu butonlar
        btn.appendChild(iconImg);
      }
      
      buttonsContainer.appendChild(btn);
    });
    
    // Butonları "Giriş Yap" butonunun soluna ekle
    headerActions.insertBefore(buttonsContainer, signinButton);
  } else {
    // Elementler henüz hazır değilse, kısa bir süre sonra tekrar dene
    setTimeout(addHeaderButtons, 100);
  }
}

// Sayfa yüklendiğinde çalıştır
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addHeaderButtons);
} else {
  // DOM zaten yüklenmişse hemen çalıştır
  addHeaderButtons();
}

// Ek güvenlik: Sayfa tamamen yüklendikten sonra da kontrol et
window.addEventListener('load', function() {
  if (!document.querySelector('.header__custom-buttons')) {
    addHeaderButtons();
  }
});

// MutationObserver: Header dinamik olarak eklendiğinde de çalışsın
const observer = new MutationObserver(function(mutations) {
  if (!document.querySelector('.header__custom-buttons')) {
    const headerActions = document.querySelector('.header__actions');
    const signinButton = document.querySelector('.header__signin');
    if (headerActions && signinButton) {
      addHeaderButtons();
    }
  }
});

// Observer'ı başlat
if (document.body) {
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
} else {
  // Body henüz yoksa, DOMContentLoaded'da başlat
  document.addEventListener('DOMContentLoaded', function() {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

