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
    
    // Swiper'ın parent'ını bul (col-12) ve flex wrapper oluştur
    const swiper = bigWinsWrapper.querySelector('.swiper');
    
    if (swiper) {
      const swiperParent = swiper.parentElement;
      
      // Eğer zaten wrapper yoksa oluştur
      if (!swiperParent.classList.contains('big-wins-live-wrapper')) {
        // Wrapper oluştur
        const liveWrapper = document.createElement('div');
        liveWrapper.className = 'big-wins-live-wrapper';
        
        // CANLI butonunu wrapper'a ekle
        liveWrapper.appendChild(liveButtonContainer);
        
        // Swiper'ı parent'tan çıkar ve wrapper'a ekle
        swiperParent.removeChild(swiper);
        liveWrapper.appendChild(swiper);
        
        // Wrapper'ı parent'a ekle
        swiperParent.appendChild(liveWrapper);
      } else {
        // Wrapper zaten varsa, sadece CANLI butonunu ekle
        swiperParent.insertBefore(liveButtonContainer, swiper);
      }
    } else {
      // Swiper yoksa, big wins wrapper'a ekle
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
      trophyImg.src = 'https://jacknicholsan.github.io/playicov2/icons/cup.gif';
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
    // Hemen başlat ve kısa aralıklarla tekrar dene
    speedUpBigWinsSwiper();
    setTimeout(speedUpBigWinsSwiper, 300);
    setTimeout(speedUpBigWinsSwiper, 600);
    setTimeout(speedUpBigWinsSwiper, 1000);
  });
} else {
  styleBigWins();
  speedUpBigWinsSwiper();
  setTimeout(speedUpBigWinsSwiper, 300);
  setTimeout(speedUpBigWinsSwiper, 600);
}

window.addEventListener('load', function() {
  styleBigWins();
  speedUpBigWinsSwiper();
  setTimeout(speedUpBigWinsSwiper, 200);
  setTimeout(speedUpBigWinsSwiper, 500);
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
    // Autoplay ayarlarını güncelle - daha hızlı ama okunabilir
    if (!swiperInstance.params.autoplay) {
      swiperInstance.params.autoplay = {
        delay: 600, // 0.6 saniye (daha hızlı ama okunabilir)
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      };
    } else {
      swiperInstance.params.autoplay.delay = 600; // 0.6 saniye
      swiperInstance.params.autoplay.disableOnInteraction = false;
      swiperInstance.params.autoplay.pauseOnMouseEnter = false;
    }
    swiperInstance.params.speed = 350; // Daha hızlı geçiş (okunabilir)
    swiperInstance.update();
    
    // Autoplay'i hemen başlat
    if (swiperInstance.autoplay) {
      if (typeof swiperInstance.autoplay.start === 'function') {
        swiperInstance.autoplay.start();
      } else if (swiperInstance.autoplay.running === false) {
        swiperInstance.autoplay.running = true;
        if (typeof swiperInstance.autoplay.run === 'function') {
          swiperInstance.autoplay.run();
        }
      }
    }
    
    // Eğer autoplay başlamadıysa, manuel olarak başlat
    if (!swiperInstance.autoplay || !swiperInstance.autoplay.running) {
      setTimeout(() => {
        if (swiperInstance && swiperInstance.slideNext) {
          const autoplayInterval = setInterval(() => {
            if (swiperInstance && swiperInstance.slideNext) {
              swiperInstance.slideNext();
            } else {
              clearInterval(autoplayInterval);
            }
          }, 600);
        }
      }, 300);
    }
  } else {
    // Swiper henüz initialize edilmemişse, daha sık tekrar dene
    setTimeout(speedUpBigWinsSwiper, 200);
  }
  
  // CSS transition süresini kısalt - daha hızlı ama okunabilir
  const swiperWrapper = bigWinsWrapper.querySelector('.swiper-wrapper');
  if (swiperWrapper) {
    swiperWrapper.style.transitionDuration = '0.35s';
    swiperWrapper.style.transitionTimingFunction = 'ease-out';
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

// Popüler Oyunlar Swiper'ı 10 Sütun x 2 Satır Grid'e Çevir (Sadece Desktop)
function convertPopularGamesToGrid() {
  // Mobilde orijinal swiper'ı koru (768px altı)
  if (window.innerWidth <= 768) {
    return;
  }

  // Popüler Oyunlar section'ını bul (img src'ye göre)
  const popularSection = document.querySelector('.section__title img[src*="MKv6AV6BjjCUY6PfEac32Ho6z8mTwNebByfeZMIj"]');
  if (!popularSection) {
    setTimeout(convertPopularGamesToGrid, 200);
    return;
  }

  const section = popularSection.closest('.section');
  if (!section) {
    setTimeout(convertPopularGamesToGrid, 200);
    return;
  }

  const swiper = section.querySelector('.swiper');
  if (!swiper) {
    setTimeout(convertPopularGamesToGrid, 200);
    return;
  }

  // Swiper instance'ını bul ve destroy et
  let swiperInstance = null;
  if (swiper.swiper) {
    swiperInstance = swiper.swiper;
  } else if (swiper.__swiper__) {
    swiperInstance = swiper.__swiper__;
  }

  if (swiperInstance && typeof swiperInstance.destroy === 'function') {
    swiperInstance.destroy(true, true);
  }

  // Swiper wrapper'ı al
  const swiperWrapper = swiper.querySelector('.swiper-wrapper');
  if (!swiperWrapper) return;

  // Navigation butonlarını gizle
  const prevButton = swiper.querySelector('.swiper-button-prev');
  const nextButton = swiper.querySelector('.swiper-button-next');
  if (prevButton) prevButton.style.display = 'none';
  if (nextButton) nextButton.style.display = 'none';

  // Swiper wrapper'ı grid yapısına çevir - 10 sütun x 2 satır (10 üstte, 10 altta)
  swiperWrapper.style.display = 'grid';
  swiperWrapper.style.gridTemplateColumns = 'repeat(10, 1fr)';
  swiperWrapper.style.gridAutoRows = 'auto';
  swiperWrapper.style.gap = '3px';
  swiperWrapper.style.rowGap = '8px';
  swiperWrapper.style.transform = 'none';
  swiperWrapper.style.width = '100%';
  swiperWrapper.style.flexWrap = 'wrap';

  // Tüm slide'ları düzenle
  const slides = swiperWrapper.querySelectorAll('.swiper-slide');
  slides.forEach((slide) => {
    slide.style.width = '100%';
    slide.style.marginRight = '0';
    slide.style.marginBottom = '0';
    slide.style.height = 'auto';
  });

  // Swiper container'a overflow visible ekle
  swiper.style.overflow = 'visible';
}

// Popüler Oyunlar grid dönüşümünü başlat
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    convertPopularGamesToGrid();
  });
} else {
  convertPopularGamesToGrid();
}

window.addEventListener('load', function() {
  convertPopularGamesToGrid();
});

// Window resize event - ekran boyutu değiştiğinde kontrol et
let resizeTimeout;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function() {
    const popularSection = document.querySelector('.section__title img[src*="MKv6AV6BjjCUY6PfEac32Ho6z8mTwNebByfeZMIj"]');
    if (popularSection) {
      const section = popularSection.closest('.section');
      if (section) {
        const swiper = section.querySelector('.swiper');
        if (swiper) {
          const wrapper = swiper.querySelector('.swiper-wrapper');
          // Mobilde grid'i kaldır, desktop'ta uygula
          if (window.innerWidth <= 768) {
            // Mobilde orijinal swiper'a geri dön
            wrapper.style.display = '';
            wrapper.style.gridTemplateColumns = '';
            wrapper.style.gap = '';
            wrapper.style.transform = '';
            wrapper.style.width = '';
            wrapper.style.flexWrap = '';
            swiper.style.overflow = '';
            // Slide'ları orijinal haline getir
            const slides = wrapper.querySelectorAll('.swiper-slide');
            slides.forEach((slide) => {
              slide.style.width = '';
              slide.style.marginRight = '';
              slide.style.marginBottom = '';
              slide.style.height = '';
            });
            // Navigation butonlarını göster
            const prevButton = swiper.querySelector('.swiper-button-prev');
            const nextButton = swiper.querySelector('.swiper-button-next');
            if (prevButton) prevButton.style.display = '';
            if (nextButton) nextButton.style.display = '';
          } else {
            // Desktop'ta grid uygula
            convertPopularGamesToGrid();
          }
        }
      }
    }
  }, 250);
});

// MutationObserver ile dinamik içerik için
const popularGamesObserver = new MutationObserver(function(mutations) {
  // Sadece desktop'ta grid uygula
  if (window.innerWidth > 768) {
    const popularSection = document.querySelector('.section__title img[src*="MKv6AV6BjjCUY6PfEac32Ho6z8mTwNebByfeZMIj"]');
    if (popularSection) {
      const section = popularSection.closest('.section');
      if (section) {
        const swiper = section.querySelector('.swiper');
        if (swiper && swiper.classList.contains('swiper-initialized')) {
          const wrapper = swiper.querySelector('.swiper-wrapper');
          if (wrapper && wrapper.style.display !== 'grid') {
            convertPopularGamesToGrid();
          }
        }
      }
    }
  }
});

if (document.body) {
  popularGamesObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    popularGamesObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

// Live Casino Swiper'ı 2 Satır Grid'e Çevir (Sadece Desktop)
function convertLiveCasinoToGrid() {
  // Mobilde orijinal swiper'ı koru (768px altı)
  if (window.innerWidth <= 768) {
    return;
  }

  // Live Casino section'ını bul (img src'ye göre)
  const liveCasinoSection = document.querySelector('.section__title img[src*="KmXybc8QaAS8Wph7Q29KO2W2GCnxqkqHLVrgxZm3"]');
  if (!liveCasinoSection) {
    setTimeout(convertLiveCasinoToGrid, 200);
    return;
  }

  const section = liveCasinoSection.closest('.section');
  if (!section) {
    setTimeout(convertLiveCasinoToGrid, 200);
    return;
  }

  const swiper = section.querySelector('.swiper');
  if (!swiper) {
    setTimeout(convertLiveCasinoToGrid, 200);
    return;
  }

  // Swiper instance'ını bul ve destroy et
  let swiperInstance = null;
  if (swiper.swiper) {
    swiperInstance = swiper.swiper;
  } else if (swiper.__swiper__) {
    swiperInstance = swiper.__swiper__;
  }

  if (swiperInstance && typeof swiperInstance.destroy === 'function') {
    swiperInstance.destroy(true, true);
  }

  // Swiper wrapper'ı al
  const swiperWrapper = swiper.querySelector('.swiper-wrapper');
  if (!swiperWrapper) return;

  // İçerik sayısını say
  const slides = swiperWrapper.querySelectorAll('.swiper-slide');
  const slideCount = slides.length;
  
  // 2 satır için sütun sayısını hesapla (yukarı yuvarla)
  const columnsPerRow = Math.ceil(slideCount / 2);

  // Navigation butonlarını gizle
  const prevButton = swiper.querySelector('.swiper-button-prev');
  const nextButton = swiper.querySelector('.swiper-button-next');
  if (prevButton) prevButton.style.display = 'none';
  if (nextButton) nextButton.style.display = 'none';

  // Swiper wrapper'ı grid yapısına çevir - 2 satır (Popüler Oyunlar ile aynı gap)
  swiperWrapper.style.display = 'grid';
  swiperWrapper.style.gridTemplateColumns = `repeat(${columnsPerRow}, 1fr)`;
  swiperWrapper.style.gridTemplateRows = 'repeat(2, auto)';
  swiperWrapper.style.gap = '3px';
  swiperWrapper.style.rowGap = '8px';
  swiperWrapper.style.transform = 'none';
  swiperWrapper.style.width = '100%';
  swiperWrapper.style.flexWrap = 'wrap';

  // Tüm slide'ları düzenle
  slides.forEach((slide) => {
    slide.style.width = '100%';
    slide.style.marginRight = '0';
    slide.style.marginBottom = '0';
    slide.style.height = 'auto';
  });

  // Swiper container'a overflow visible ekle
  swiper.style.overflow = 'visible';
}

// Live Casino grid dönüşümünü başlat
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    convertLiveCasinoToGrid();
  });
} else {
  convertLiveCasinoToGrid();
}

window.addEventListener('load', function() {
  convertLiveCasinoToGrid();
});

// Window resize event - ekran boyutu değiştiğinde kontrol et
let liveCasinoResizeTimeout;
window.addEventListener('resize', function() {
  clearTimeout(liveCasinoResizeTimeout);
  liveCasinoResizeTimeout = setTimeout(function() {
    const liveCasinoSection = document.querySelector('.section__title img[src*="KmXybc8QaAS8Wph7Q29KO2W2GCnxqkqHLVrgxZm3"]');
    if (liveCasinoSection) {
      const section = liveCasinoSection.closest('.section');
      if (section) {
        const swiper = section.querySelector('.swiper');
        if (swiper) {
          const wrapper = swiper.querySelector('.swiper-wrapper');
          // Mobilde grid'i kaldır, desktop'ta uygula
          if (window.innerWidth <= 768) {
            // Mobilde orijinal swiper'a geri dön
            wrapper.style.display = '';
            wrapper.style.gridTemplateColumns = '';
            wrapper.style.gridTemplateRows = '';
            wrapper.style.gap = '';
            wrapper.style.rowGap = '';
            wrapper.style.transform = '';
            wrapper.style.width = '';
            wrapper.style.flexWrap = '';
            swiper.style.overflow = '';
            // Slide'ları orijinal haline getir
            const slides = wrapper.querySelectorAll('.swiper-slide');
            slides.forEach((slide) => {
              slide.style.width = '';
              slide.style.marginRight = '';
              slide.style.marginBottom = '';
              slide.style.height = '';
            });
            // Navigation butonlarını göster
            const prevButton = swiper.querySelector('.swiper-button-prev');
            const nextButton = swiper.querySelector('.swiper-button-next');
            if (prevButton) prevButton.style.display = '';
            if (nextButton) nextButton.style.display = '';
          } else {
            // Desktop'ta grid uygula
            convertLiveCasinoToGrid();
          }
        }
      }
    }
  }, 250);
});

// MutationObserver ile dinamik içerik için
const liveCasinoObserver = new MutationObserver(function(mutations) {
  // Sadece desktop'ta grid uygula
  if (window.innerWidth > 768) {
    const liveCasinoSection = document.querySelector('.section__title img[src*="KmXybc8QaAS8Wph7Q29KO2W2GCnxqkqHLVrgxZm3"]');
    if (liveCasinoSection) {
      const section = liveCasinoSection.closest('.section');
      if (section) {
        const swiper = section.querySelector('.swiper');
        if (swiper && swiper.classList.contains('swiper-initialized')) {
          const wrapper = swiper.querySelector('.swiper-wrapper');
          if (wrapper && wrapper.style.display !== 'grid') {
            convertLiveCasinoToGrid();
          }
        }
      }
    }
  }
});

if (document.body) {
  liveCasinoObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    liveCasinoObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

// Welcome Section - Main Slider'ın Altına Ekle
function createWelcomeSection() {
  // Main slider'ı bul
  const mainSlider = document.querySelector('#main-slider');
  if (!mainSlider) {
    setTimeout(createWelcomeSection, 200);
    return;
  }

  // Welcome section zaten varsa güncelle, yoksa oluştur
  let welcomeContainer = document.querySelector('.welcome-container');
  
  if (!welcomeContainer) {
    // Welcome section oluştur
    welcomeContainer = document.createElement('div');
    welcomeContainer.className = 'welcome-container';
    
    // Main slider'ın hemen altına ekle
    mainSlider.insertAdjacentElement('afterend', welcomeContainer);
  }

  // Dil değerini localStorage'dan oku
  const language = localStorage.getItem('language') || 'tr';
  const isEnglish = language.toLowerCase() === 'en';

  // İçerikleri dil'e göre ayarla
  const welcomeTitleWhite = isEnglish 
    ? 'Globally Licensed, High Security' 
    : 'Global Lisanslı, Yüksek Güvenlikli';
  
  const welcomeTitleOrange = isEnglish 
    ? 'Casino and Sports Betting Platform' 
    : 'Casino ve Spor Bahisleri Platformu';

  const telegramButtonText = isEnglish 
    ? 'Join Telegram' 
    : 'Telegram\'a Katıl';

  const casinoLabel = isEnglish ? 'Casino' : 'Casino';
  const sportsLabel = isEnglish ? 'Sports' : 'Spor';
  const sportsTitle = isEnglish ? 'Sports' : 'Sports';

  // HTML içeriğini oluştur
  welcomeContainer.innerHTML = `
    <div class="welcome-inner container">
      <!-- Sol Taraf -->
      <div class="welcome-left">
        <h1 class="welcome-title">
          <span class="welcome-title-white">${welcomeTitleWhite}</span><br>
          <span class="welcome-title-orange">${welcomeTitleOrange}</span>
        </h1>
        
        <div class="welcome-buttons">
          <button class="register-button" id="register-button-custom" onclick="window.open('https://t.me/playico', '_blank')">${telegramButtonText}</button>
          
          <div class="social-buttons">
            <button class="social-button" onclick="window.open('https://instagram.com/playicoglobal', '_blank')">
              <img src="https://jacknicholsan.github.io/playico/images/instagram-white.png" alt="Instagram" class="social-icon">
            </button>
            <button class="social-button" onclick="window.open('https://x.com/playicotr', '_blank')">
              <img src="https://jacknicholsan.github.io/playico/images/twitter.png" alt="Twitter" class="social-icon">
            </button>
          </div>
        </div>
      </div>
      
      <!-- Sağ Taraf -->
      <div class="welcome-right">
        <div class="game-box">
          <div class="game-box-label">${casinoLabel}</div>
          <img src="https://jacknicholsan.github.io/playico/images/Hompage_Casino_Banner.webp" alt="Casino" class="game-image">
          <div class="game-title">Casino</div>
        </div>
        
        <div class="game-box sports">
          <div class="game-box-label">${sportsLabel}</div>
          <img src="https://jacknicholsan.github.io/playico/images/Hompage_Spor_Banner.webp" alt="Sports" class="game-image">
          <div class="game-title">${sportsTitle}</div>
        </div>
      </div>
    </div>
  `;
}

// Dil değişikliğini dinle
function updateWelcomeSectionOnLanguageChange() {
  // Storage event listener (başka tab'da değişiklik olursa)
  window.addEventListener('storage', function(e) {
    if (e.key === 'language') {
      createWelcomeSection();
    }
  });

  // Custom event listener (aynı sayfada değişiklik olursa)
  window.addEventListener('languagechange', function() {
    createWelcomeSection();
  });

  // localStorage değişikliklerini izle (polling)
  let lastLanguage = localStorage.getItem('language') || 'tr';
  setInterval(function() {
    const currentLanguage = localStorage.getItem('language') || 'tr';
    if (currentLanguage !== lastLanguage) {
      lastLanguage = currentLanguage;
      createWelcomeSection();
    }
  }, 500);
}

// Welcome section'ı başlat
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    createWelcomeSection();
    updateWelcomeSectionOnLanguageChange();
  });
} else {
  createWelcomeSection();
  updateWelcomeSectionOnLanguageChange();
}

window.addEventListener('load', function() {
  createWelcomeSection();
});

// MutationObserver ile dinamik içerik için
const welcomeObserver = new MutationObserver(function(mutations) {
  const mainSlider = document.querySelector('#main-slider');
  if (mainSlider && !document.querySelector('.welcome-container')) {
    createWelcomeSection();
  }
});

if (document.body) {
  welcomeObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    welcomeObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

