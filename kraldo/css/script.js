(function () {
    'use strict';

    /* Section'lara ID ver — CSS sadece ilgili alana uygulansın */
    function setKraldoOriginalsId() {
        var sections = document.querySelectorAll('section');
        for (var i = 0; i < sections.length; i++) {
            var s = sections[i];
            if (s.id === 'kraldo-originals') continue;
            if (s.textContent.indexOf('Kraldo Orijinalleri') !== -1) {
                s.id = 'kraldo-originals';
                break;
            }
        }
    }
    function setPopulerSaglayicilarId() {
        var sections = document.querySelectorAll('section');
        for (var i = 0; i < sections.length; i++) {
            var s = sections[i];
            if (s.id === 'populer-saglayicilar') continue;
            if (s.textContent.indexOf('Popüler Sağlayıcılar') !== -1) {
                s.id = 'populer-saglayicilar';
                break;
            }
        }
    }
    function setPhoenixSportId() {
        var section = document.querySelector('section[data-mj="widget-phoenix-sport"]');
        if (section && !section.id) {
            section.id = 'kraldo-phoenix-sport';
        }
    }
    function runSectionIds() {
        setKraldoOriginalsId();
        setPopulerSaglayicilarId();
        setPhoenixSportId();
    }
    var sectionObserver = new MutationObserver(runSectionIds);
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            runSectionIds();
            sectionObserver.observe(document.body, { childList: true, subtree: true });
        });
    } else {
        runSectionIds();
        sectionObserver.observe(document.body, { childList: true, subtree: true });
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