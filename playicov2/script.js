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
      // Mevcut içeriği temizle.
      link.innerHTML = '';
      
      // Yeni SVG img oluştur-asdasdassa
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

// Big Wins bölümünü görseldeki tasarıma göre düzenle
function styleBigWins() {
  const bigWinsWrapper = document.querySelector('#big-wins-wrapper');
  
  if (!bigWinsWrapper) {
    setTimeout(styleBigWins, 100);
    return;
  }
  
  const firstSlide = bigWinsWrapper.querySelector('.swiper-slide:first-child');
  const allSlides = bigWinsWrapper.querySelectorAll('.swiper-slide');
  
  if (!firstSlide) {
    setTimeout(styleBigWins, 100);
    return;
  }
  
  // İlk slide için CANLI butonu oluştur
  const firstKush = firstSlide.querySelector('.kush');
  if (firstKush) {
    const winnerDiv = firstKush.querySelector('.kush__winner');
    if (winnerDiv) {
      // Mevcut içeriği temizle
      winnerDiv.innerHTML = '';
      
      // Kupa ikonu için container
      const trophyContainer = document.createElement('div');
      trophyContainer.className = 'kush__trophy-icon';
      const trophyImg = document.createElement('img');
      // Kullanıcı bu URL'yi kendi gif URL'si ile değiştirecek
      trophyImg.src = ''; // Kullanıcı buraya gif URL'sini ekleyecek
      trophyImg.alt = 'Trophy';
      trophyContainer.appendChild(trophyImg);
      
      // CANLI yazısı
      const liveText = document.createElement('div');
      liveText.className = 'kush__live-text';
      liveText.textContent = 'CANLI';
      
      winnerDiv.appendChild(trophyContainer);
      winnerDiv.appendChild(liveText);
    }
  }
  
  // Diğer slide'lar için ödül miktarlarını TL'ye çevir ve düzenle
  allSlides.forEach((slide, index) => {
    if (index === 0) return; // İlk slide'ı atla
    
    const winnerDiv = slide.querySelector('.kush__winner');
    if (!winnerDiv) return;
    
    // Mevcut içeriği al
    const prizeElement = slide.querySelector('.kush__prize');
    const usernameBtn = slide.querySelector('.chat__name.username-win');
    
    // Ödül miktarını TL'ye çevir
    let prizeText = '';
    if (prizeElement) {
      const originalPrizeText = prizeElement.textContent.trim();
      // $ işaretini kaldır ve TL'ye çevir
      const amount = originalPrizeText.replace('$', '').trim();
      // Basit dönüşüm: 1$ = ~30 TL (kullanıcı isterse değiştirebilir)
      const tlAmount = (parseFloat(amount) * 30).toLocaleString('tr-TR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      prizeText = `${tlAmount} TL`;
    }
    
    // Kullanıcı adını al
    let usernameText = 'K***';
    if (usernameBtn) {
      const usernameSpan = usernameBtn.querySelector('span');
      if (usernameSpan) {
        // SVG ikonunu kaldır
        const svgIcon = usernameSpan.querySelector('.svg-icon');
        if (svgIcon) {
          svgIcon.remove();
        }
        // Metin içeriğini al
        const textContent = usernameSpan.textContent.trim();
        if (textContent && textContent !== 'Gizlenmiş') {
          usernameText = textContent;
        }
      }
    }
    
    // İçeriği tek satırda göster: Kullanıcı adı + Ödül
    winnerDiv.innerHTML = '';
    winnerDiv.style.display = 'flex';
    winnerDiv.style.flexDirection = 'row';
    winnerDiv.style.alignItems = 'center';
    winnerDiv.style.justifyContent = 'center';
    winnerDiv.style.gap = '8px';
    winnerDiv.style.whiteSpace = 'nowrap';
    
    // Kullanıcı adı
    const usernameSpan = document.createElement('span');
    usernameSpan.className = 'chat__name username-win';
    usernameSpan.style.color = '#ffffff';
    usernameSpan.style.fontSize = '13px';
    usernameSpan.style.fontWeight = '500';
    usernameSpan.style.whiteSpace = 'nowrap';
    usernameSpan.textContent = usernameText;
    
    // Ödül miktarı
    const prizeSpan = document.createElement('span');
    prizeSpan.className = 'kush__prize';
    prizeSpan.style.color = '#e25f3c';
    prizeSpan.style.fontSize = '16px';
    prizeSpan.style.fontWeight = '700';
    prizeSpan.style.whiteSpace = 'nowrap';
    prizeSpan.textContent = prizeText;
    
    winnerDiv.appendChild(usernameSpan);
    winnerDiv.appendChild(prizeSpan);
  });
}

// Big Wins stillerini uygula
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', styleBigWins);
} else {
  styleBigWins();
}

window.addEventListener('load', function() {
  styleBigWins();
});

// MutationObserver: Big Wins bölümü dinamik olarak eklendiğinde de çalışsın
const bigWinsObserver = new MutationObserver(function(mutations) {
  const bigWinsWrapper = document.querySelector('#big-wins-wrapper');
  if (bigWinsWrapper) {
    const firstSlide = bigWinsWrapper.querySelector('.swiper-slide:first-child');
    if (firstSlide && !firstSlide.querySelector('.kush__trophy-icon')) {
      styleBigWins();
    }
  }
});

if (document.body) {
  bigWinsObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    bigWinsObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

