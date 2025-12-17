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
  
  // CANLI butonunu swiper dışına çıkar ve sabit yap
  const firstKush = firstSlide.querySelector('.kush');
  if (firstKush && !bigWinsWrapper.querySelector('.big-wins-live-button')) {
    // CANLI butonu container oluştur
    const liveButtonContainer = document.createElement('div');
    liveButtonContainer.className = 'big-wins-live-button';
    
    // KUSH elementini klonla
    const clonedKush = firstKush.cloneNode(true);
    liveButtonContainer.appendChild(clonedKush);
    
    // Big wins wrapper'a ekle (swiper'dan önce)
    const swiper = bigWinsWrapper.querySelector('.swiper');
    if (swiper) {
      bigWinsWrapper.insertBefore(liveButtonContainer, swiper);
    } else {
      bigWinsWrapper.appendChild(liveButtonContainer);
    }
    
    // Klonlanan kush içindeki winner div'i bul
    const winnerDiv = clonedKush.querySelector('.kush__winner');
    if (winnerDiv) {
      // Mevcut içeriği temizle
      winnerDiv.innerHTML = '';
      
      // Kupa ikonu için container
      const trophyContainer = document.createElement('div');
      trophyContainer.className = 'kush__trophy-icon';
      const trophyImg = document.createElement('img');
      trophyImg.src = 'https://jacknicholsan.github.io/playicov2/images/cup.gif';
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
  
  // Diğer slide'lar için ödül miktarlarını TL'ye çevir ve düzenle (ilk slide'ı atla)
  allSlides.forEach((slide, index) => {
    if (index === 0) return; // İlk slide'ı atla (CANLI butonu artık swiper dışında)
    
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
    
    // İçeriği dikey göster: Kullanıcı adı yukarıda, Ödül altta
    winnerDiv.innerHTML = '';
    winnerDiv.style.display = 'flex';
    winnerDiv.style.flexDirection = 'column';
    winnerDiv.style.alignItems = 'center';
    winnerDiv.style.justifyContent = 'center';
    winnerDiv.style.gap = '4px';
    
    // Kullanıcı adı - minimalist
    const usernameSpan = document.createElement('span');
    usernameSpan.className = 'chat__name username-win';
    usernameSpan.style.color = 'rgba(255, 255, 255, 0.7)';
    usernameSpan.style.fontSize = '12px';
    usernameSpan.style.fontWeight = '400';
    usernameSpan.style.whiteSpace = 'nowrap';
    usernameSpan.style.lineHeight = '1.2';
    usernameSpan.textContent = usernameText;
    
    // Ödül miktarı - minimalist
    const prizeSpan = document.createElement('span');
    prizeSpan.className = 'kush__prize';
    prizeSpan.style.color = '#e25f3c';
    prizeSpan.style.fontSize = '15px';
    prizeSpan.style.fontWeight = '600';
    prizeSpan.style.whiteSpace = 'nowrap';
    prizeSpan.style.lineHeight = '1.2';
    prizeSpan.textContent = prizeText;
    
    winnerDiv.appendChild(usernameSpan);
    winnerDiv.appendChild(prizeSpan);
  });
}

// Big Wins stillerini uygula
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    styleBigWins();
    speedUpBigWinsSwiper();
  });
} else {
  styleBigWins();
  speedUpBigWinsSwiper();
}

window.addEventListener('load', function() {
  styleBigWins();
  speedUpBigWinsSwiper();
});

// Swiper hızını artır ve autoplay'i aktif et
function speedUpBigWinsSwiper() {
  const bigWinsWrapper = document.querySelector('#big-wins-wrapper');
  if (!bigWinsWrapper) {
    setTimeout(speedUpBigWinsSwiper, 100);
    return;
  }
  
  const swiperElement = bigWinsWrapper.querySelector('.swiper');
  if (!swiperElement) {
    setTimeout(speedUpBigWinsSwiper, 100);
    return;
  }
  
  // Swiper instance'ını bul - farklı yolları dene
  let swiperInstance = null;
  
  // Yöntem 1: Swiper.js instance'ını kontrol et (en yaygın)
  if (swiperElement.swiper) {
    swiperInstance = swiperElement.swiper;
  }
  // Yöntem 2: Swiper'in kendi instance property'si
  else if (swiperElement.__swiper__) {
    swiperInstance = swiperElement.__swiper__;
  }
  // Yöntem 3: Swiper initialized ise, instance'ı bul
  else if (swiperElement.classList.contains('swiper-initialized')) {
    // Tüm olası swiper instance'larını kontrol et
    for (let key in swiperElement) {
      if (swiperElement[key] && swiperElement[key].params && swiperElement[key].slideTo) {
        swiperInstance = swiperElement[key];
        break;
      }
    }
  }
  
  // Swiper instance bulunduysa ayarları güncelle
  if (swiperInstance && swiperInstance.params) {
    // Autoplay ayarlarını güncelle
    if (!swiperInstance.params.autoplay) {
      swiperInstance.params.autoplay = {
        delay: 2000,
        disableOnInteraction: false,
      };
    } else {
      swiperInstance.params.autoplay.delay = 2000;
      swiperInstance.params.autoplay.disableOnInteraction = false;
    }
    swiperInstance.params.speed = 800;
    swiperInstance.update();
    
    // Autoplay'i başlat
    if (swiperInstance.autoplay) {
      if (typeof swiperInstance.autoplay.start === 'function') {
        swiperInstance.autoplay.start();
      } else if (swiperInstance.autoplay.running === false) {
        swiperInstance.autoplay.running = true;
        swiperInstance.autoplay.run();
      }
    }
  } else {
    // Swiper henüz initialize edilmemişse, tekrar dene
    setTimeout(speedUpBigWinsSwiper, 500);
  }
  
  // CSS transition süresini kısalt
  const swiperWrapper = bigWinsWrapper.querySelector('.swiper-wrapper');
  if (swiperWrapper) {
    swiperWrapper.style.transitionDuration = '0.5s';
  }
}

// MutationObserver: Big Wins bölümü dinamik olarak eklendiğinde de çalışsın
const bigWinsObserver = new MutationObserver(function(mutations) {
  const bigWinsWrapper = document.querySelector('#big-wins-wrapper');
  if (bigWinsWrapper) {
    // CANLI butonu yoksa oluştur
    if (!bigWinsWrapper.querySelector('.big-wins-live-button')) {
      styleBigWins();
    }
    speedUpBigWinsSwiper();
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

