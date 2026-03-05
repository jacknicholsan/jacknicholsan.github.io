(function () {
    'use strict';

    var LICENSE_SEALS = [
        { url: 'https://jacknicholsan.github.io/kraldo/images/GCB_Seal.svg', alt: 'GCB Seal' },
        { url: 'https://jacknicholsan.github.io/kraldo/images/valid-seal.svg', alt: 'Valid Seal' }
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

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooterLicenses);
    } else {
        initFooterLicenses();
    }
})();
