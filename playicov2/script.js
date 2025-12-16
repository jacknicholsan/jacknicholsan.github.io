// Header'a butonları ekle
document.addEventListener('DOMContentLoaded', function() {
  const headerActions = document.querySelector('.header__actions');
  const signinButton = document.querySelector('.header__signin');
  
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
  }
});

