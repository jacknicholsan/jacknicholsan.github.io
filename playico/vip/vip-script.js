(function() {
    const mainContent = document.getElementById('main__content');
    
    // URL ve dil kontrolü için daha güvenli bir yöntem
    function checkPathAndLanguage() {
        // URL'den dil ve sayfa bilgisini al
        const currentPath = window.location.pathname;
        alert(currentPath);
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        
        // Eğer VIP sayfası değilse çık
        if (!currentPath.includes('vip')) {
            return null;
        }

        // Dil kontrolü - önce URL parametresine bak, yoksa path'e bak
        let lang;
        if (langParam && (langParam === 'tr' || langParam === 'en')) {
            lang = langParam;
        } else if (currentPath.includes('/tr/')) {
            lang = 'tr';
        } else {
            lang = 'en';
        }

        return lang;
    }

    // Dil kontrolü yap
    const lang = checkPathAndLanguage();
    if (!lang) {
        return;
    }

    // Çoklu dil içeriği
    const content = {
        tr: {
            title: 'Gelişmiş VIP Sistemiyle',
            subtitle: 'Bonusların Tadını Çıkarın!',
            description: 'Süper VIP ile sunduğumuz ayrıcalıklara bir bakın',
            playButton: 'Hemen Oyna',
            detailsButton: 'Detayları Gör'
        },
        en: {
            title: 'With Advanced VIP System',
            subtitle: 'Enjoy Your Bonuses!',
            description: 'Check out our exclusive Super VIP privileges',
            playButton: 'Play Now',
            detailsButton: 'View Details'
        }
    };
    
    // Seçilen dile göre içeriği al
    const selectedContent = content[lang];
    
    // Footer'ı sakla
    const footer = mainContent.querySelector('footer');
    const footerHtml = footer ? footer.outerHTML : '';
    
    // İçeriği temizle
    mainContent.innerHTML = '';
    
    const vipContent = `
        <section class="playico-vip-section">
            <h1 class="playico-vip-title">${selectedContent.title}</h1>
            <h2 class="playico-vip-subtitle">${selectedContent.subtitle}</h2>
            <p class="playico-vip-description">${selectedContent.description}</p>
            <div class="playico-button-container">
                <a href="#" class="playico-btn playico-btn-primary">${selectedContent.playButton}</a>
                <a href="#" class="playico-btn playico-btn-secondary">${selectedContent.detailsButton}</a>
            </div>
        </section>
        ${footerHtml}
    `;
    
    mainContent.innerHTML = vipContent;

    // URL değişikliklerini dinle
    let lastPath = window.location.pathname;
    const observer = new MutationObserver(function(mutations) {
        if (window.location.pathname !== lastPath) {
            lastPath = window.location.pathname;
            const newLang = checkPathAndLanguage();
            if (newLang) {
                const newContent = content[newLang];
                updateContent(newContent);
            }
        }
    });

    // DOM değişikliklerini izle
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // İçerik güncelleme fonksiyonu
    function updateContent(newContent) {
        const footer = mainContent.querySelector('footer');
        const footerHtml = footer ? footer.outerHTML : '';
        
        const updatedContent = `
            <section class="playico-vip-section">
                <h1 class="playico-vip-title">${newContent.title}</h1>
                <h2 class="playico-vip-subtitle">${newContent.subtitle}</h2>
                <p class="playico-vip-description">${newContent.description}</p>
                <div class="playico-button-container">
                    <a href="#" class="playico-btn playico-btn-primary">${newContent.playButton}</a>
                    <a href="#" class="playico-btn playico-btn-secondary">${newContent.detailsButton}</a>
                </div>
            </section>
            ${footerHtml}
        `;
        
        mainContent.innerHTML = updatedContent;
        animateElements();
    }

    // Animasyon fonksiyonu
    function animateElements() {
        const elements = document.querySelectorAll('.playico-vip-title, .playico-vip-subtitle, .playico-vip-description, .playico-btn');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 * (index + 1));
        });
    }

    // İlk animasyonu başlat
    animateElements();
}); 