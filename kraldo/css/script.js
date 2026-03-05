(function () {
    'use strict';

    /* Kraldo Orijinalleri / En Çok Oynanlar alanına ID ver — CSS sadece bu section’a uygulansın */
    function setKraldoOriginalsId() {
        var section = document.querySelector('section.app-ltr-zitybv:not(#kraldo-originals)');
        if (!section) return;
        var hasTitle = section.querySelector('p.app-ltr-vorshc, p.app-ltr-gfovjz');
        if (hasTitle) section.id = 'kraldo-originals';
    }
    var originalsObserver = new MutationObserver(setKraldoOriginalsId);
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            setKraldoOriginalsId();
            originalsObserver.observe(document.body, { childList: true, subtree: true });
        });
    } else {
        setKraldoOriginalsId();
        originalsObserver.observe(document.body, { childList: true, subtree: true });
    }

    var LICENSE_SEALS = [
        { url: 'https://jacknicholsan.github.io/kraldo/images/GCB_Seal.svg', alt: 'GCB Seal' },
        { url: 'https://jacknicholsan.github.io/kraldo/images/valid-seal.png', alt: 'Valid Seal' }
    ];

    function initFooterLicenses() {
        var footerBottom = document.querySelector('.app-ltr-13ukv3g .app-ltr-176106l');
        if (!footerBottom || document.querySelector('.kraldo-license-seals')) return;

        var wrap = document.createElement('div');
        wrap.className = 'kraldo-license-seals';

        LICENSE_SEALS.forEach(function (seal) {
            var a = document.createElement('a');
            a.href = '#';
            a.setAttribute('aria-label', seal.alt);

            var img = document.createElement('img');
            img.src = seal.url;
            img.alt = seal.alt;

            a.appendChild(img);
            wrap.appendChild(a);
        });

        footerBottom.appendChild(wrap);
    }

    var observer = new MutationObserver(function () {
        if (document.querySelector('.app-ltr-13ukv3g .app-ltr-176106l')) {
            initFooterLicenses();
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();