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
        icon: '📺',
        class: 'header__btn-ukra',
        href: '#'
      },
      {
        text: 'Para Yatır',
        icon: '💳',
        class: 'header__btn-deposit',
        href: '#'
      },
      {
        icon: '☎️',
        class: 'header__btn-contact',
        href: '#'
      },
      {
        icon: '𝕏',
        class: 'header__btn-x',
        href: '#'
      },
      {
        icon: '✈️',
        class: 'header__btn-telegram',
        href: '#'
      },
      {
        icon: '💬',
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
      
      if (button.text) {
        // Metinli butonlar (Ukra Live, Para Yatır)
        const iconSpan = document.createElement('span');
        iconSpan.className = 'header__btn-icon';
        iconSpan.textContent = button.icon;
        btn.appendChild(iconSpan);
        
        const textSpan = document.createElement('span');
        textSpan.className = 'header__btn-text';
        textSpan.textContent = button.text;
        btn.appendChild(textSpan);
      } else {
        // Sadece ikonlu butonlar
        btn.textContent = button.icon;
      }
      
      buttonsContainer.appendChild(btn);
    });
    
    // Butonları "Giriş Yap" butonunun soluna ekle
    headerActions.insertBefore(buttonsContainer, signinButton);
  }
});

