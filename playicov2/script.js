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
        text: 'Playico TV',
        iconUrl: 'https://jacknicholsan.github.io/playicov2/icons/svg/tv.svg',
        class: 'header__btn-playicotv',
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
        iconUrl: 'https://jacknicholsan.github.io/playicov2/icons/svg/tiktok.svg',
        class: 'header__btn-tiktok',
        href: '#'
      }
    ];
    
    // Butonları oluştur.
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

// Footer'a Partners ve Awards bölümlerini ekle
function addFooterPartnersAndAwards() {
  const footerCurrencies = document.querySelector('.footer__currencies');
  
  if (!footerCurrencies) {
    setTimeout(addFooterPartnersAndAwards, 100);
    return;
  }
  
  // Eğer zaten eklenmişse tekrar ekleme
  if (document.querySelector('.footer__partners-section')) {
    return;
  }
  
  // Partners bölümü oluştur
  const partnersSection = document.createElement('div');
  partnersSection.className = 'footer__partners-section';
  
  const partnersContainer = document.createElement('div');
  partnersContainer.className = 'footer__partners';
  
  // Partner görselleri
  const partnerUrls = [
    'https://jacknicholsan.github.io/playicov2/sponsors/sponsor.png',
  ];
  
  partnerUrls.forEach(url => {
    if (url) {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Partner';
      img.loading = 'lazy';
      partnersContainer.appendChild(img);
    }
  });
  
  partnersSection.appendChild(partnersContainer);
  
  // Awards bölümü oluştur
  const awardsContainer = document.createElement('div');
  awardsContainer.className = 'footer__awards';
  
  // Award görselleri
  const awardUrls = [
    'https://jacknicholsan.github.io/playicov2/awards/1.png',
    'https://jacknicholsan.github.io/playicov2/awards/2.png',
    'https://jacknicholsan.github.io/playicov2/awards/3.png',
    'https://jacknicholsan.github.io/playicov2/awards/4.png',
    'https://jacknicholsan.github.io/playicov2/awards/5.png',
  ];
  
  awardUrls.forEach(url => {
    if (url) {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Award';
      img.loading = 'lazy';
      awardsContainer.appendChild(img);
    }
  });
  
  // Partners ve Awards'ı currencies'den önce ekle
  const currenciesParent = footerCurrencies.parentElement;
  currenciesParent.insertBefore(partnersSection, footerCurrencies);
  currenciesParent.insertBefore(awardsContainer, footerCurrencies);
}

// Footer bölümlerini ekle
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addFooterPartnersAndAwards);
} else {
  addFooterPartnersAndAwards();
}

window.addEventListener('load', function() {
  if (!document.querySelector('.footer__partners-section')) {
    addFooterPartnersAndAwards();
  }
});

// Footer sosyal medya ikonlarını SVG ile değiştir
function replaceFooterSocialIcons() {
  const footerSocial = document.querySelector('.footer__social');
  
  if (!footerSocial) {
    setTimeout(replaceFooterSocialIcons, 100);
    return;
  }
  
  const socialLinks = footerSocial.querySelectorAll('a');
  
  socialLinks.forEach(link => {
    const href = link.getAttribute('href');
    let iconUrl = '';
    
    // Hangi sosyal medya olduğunu belirle
    if (href && href.includes('instagram')) {
      iconUrl = 'https://jacknicholsan.github.io/playicov2/icons/svg/instagram.svg';
    } else if (href && href.includes('X') || href && href.includes('twitter')) {
      iconUrl = 'https://jacknicholsan.github.io/playicov2/icons/svg/x.svg';
    } else if (href && href.includes('telegram') || link.querySelector('svg[viewBox="0 0 240 240"]')) {
      iconUrl = 'https://jacknicholsan.github.io/playicov2/icons/svg/telegram.svg';
    }
    
    if (iconUrl) {
      // Mevcut içeriği temizle
      link.innerHTML = '';
      
      // Yeni SVG img oluştur
      const img = document.createElement('img');
      img.src = iconUrl;
      img.alt = link.getAttribute('href') || 'Social Media';
      img.className = 'footer__social-icon';
      img.loading = 'lazy';
      
      link.appendChild(img);
    }
  });
}

// Footer sosyal medya ikonlarını değiştir
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', replaceFooterSocialIcons);
} else {
  replaceFooterSocialIcons();
}

window.addEventListener('load', function() {
  replaceFooterSocialIcons();
});

