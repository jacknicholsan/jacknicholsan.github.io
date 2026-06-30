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
    function runSectionIds() {
        setKraldoOriginalsId();
        setPopulerSaglayicilarId();
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
        {
            url: 'https://jacknicholsan.github.io/kraldo/images/kraldo_footer_web_award.webp',
            alt: 'Kraldo Web Award',
            className: 'kraldo-web-award'
        },
        { url: 'https://jacknicholsan.github.io/kraldo/images/GCB_Seal.svg', alt: 'GCB Seal' },
        { url: 'https://jacknicholsan.github.io/kraldo/images/valid-seal.png', alt: 'Valid Seal' }
    ];

    function initFooterLicenses() {
        var footerBottom = document.querySelector('.app-ltr-13ukv3g .app-ltr-176106l');
        if (!footerBottom) return;

        var wrap = document.querySelector('.kraldo-license-seals');
        if (!wrap) {
            wrap = document.createElement('div');
            wrap.className = 'kraldo-license-seals';
            footerBottom.appendChild(wrap);
        }

        LICENSE_SEALS.forEach(function (seal) {
            // Aynı görsel zaten varsa tekrar ekleme
            if (wrap.querySelector('img[src="' + seal.url + '"]')) {
                return;
            }

            var a = document.createElement('a');
            a.href = '#';
            a.setAttribute('aria-label', seal.alt);
            if (seal.className) {
                a.className = seal.className;
            }

            var img = document.createElement('img');
            img.src = seal.url;
            img.alt = seal.alt;

            a.appendChild(img);
            wrap.appendChild(a);
        });
    }

    var observer = new MutationObserver(function () {
        if (document.querySelector('.app-ltr-13ukv3g .app-ltr-176106l')) {
            initFooterLicenses();
            observer.disconnect();
        }
    });

    // document.body henüz yoksa (script erken/head'de çalışırsa) DOMContentLoaded'a ertele
    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            observer.observe(document.body, { childList: true, subtree: true });
        });
    }

    /* ============================================================
       STAKE-STİL SOL MENÜ — JS kısmı
       Sadece üst blok (Casino/Spor toggle + arama) DOM'a enjekte edilir;
       görsel stil ve bölüm başlıkları CSS'te. React/SPA'ya karşı savunmacı:
       idempotent (tekrar eklemez), MutationObserver ile yeniden render'a
       dayanıklı, try/catch ile sarılı.
       ============================================================ */

    // Arama: sitenin kendi lobby-games API'sini taklit eden tam ekran MODAL.
    // Sonuç tıklanınca sitenin kendi oyun sayfası/modalı açılır (giriş yoksa login'e yönlendirir — native).
    var KR_SEARCH_API = '/api/integration/api/v1.0/webSites/pages/casino/lobby-games?page=1&countPerPage=48&query=';
    var KR_SEARCH_NAV = '/tr/casino?search=';
    var KR_GAME_URL = '/tr/casino/game/';
    var KR_GAME_IMG = '/api/cmsgateway/api/v1/AssetsSite/gameimage/';
    var KR_GAME_IMG_GRID = '.webp?folder=VerticalGameImages&width=240&height=320&Quality=90&format=webp';

    function krEsc(s) {
        return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
    }

    function krBuildModal() {
        var existing = document.getElementById('kr-search-modal');
        if (existing) return existing;
        var overlay = document.createElement('div');
        overlay.id = 'kr-search-modal';
        overlay.className = 'kr-modal';
        overlay.style.display = 'none';
        overlay.innerHTML =
            '<div class="kr-modal-box" role="dialog" aria-modal="true">' +
            '<div class="kr-modal-head">' + KR_ICON_SEARCH +
            '<input class="kr-modal-input" type="text" placeholder="Oyun ara…" autocomplete="off" spellcheck="false">' +
            '<button class="kr-modal-close" type="button" aria-label="Kapat">&times;</button></div>' +
            '<div class="kr-modal-body">' +
            '<div class="kr-modal-hint">Oyun aramak için yazmaya başla…</div>' +
            '<div class="kr-modal-grid"></div></div></div>';
        document.body.appendChild(overlay);

        var input = overlay.querySelector('.kr-modal-input');
        var grid = overlay.querySelector('.kr-modal-grid');
        var hint = overlay.querySelector('.kr-modal-hint');
        var timer = null;
        input.addEventListener('input', function () {
            var q = input.value.trim();
            if (timer) clearTimeout(timer);
            if (q.length < 2) {
                grid.innerHTML = '';
                hint.style.display = 'block';
                hint.textContent = 'Oyun aramak için en az 2 harf yaz…';
                return;
            }
            grid.setAttribute('data-q', q);
            timer = setTimeout(function () { krModalFetch(q, grid, hint); }, 260);
        });
        overlay.querySelector('.kr-modal-close').addEventListener('click', krCloseModal);
        overlay.addEventListener('mousedown', function (e) { if (e.target === overlay) krCloseModal(); });
        return overlay;
    }

    function krModalFetch(q, grid, hint) {
        fetch(KR_SEARCH_API + encodeURIComponent(q), { headers: { Accept: 'application/json' }, credentials: 'same-origin' })
            .then(function (r) { return r.ok ? r.json() : []; })
            .then(function (games) {
                if (grid.getAttribute('data-q') !== q) return; // eski yanıtı yok say
                if (!Array.isArray(games) || !games.length) {
                    grid.innerHTML = '';
                    hint.style.display = 'block';
                    hint.textContent = '"' + q + '" için sonuç bulunamadı.';
                    return;
                }
                hint.style.display = 'none';
                var html = '';
                games.forEach(function (g) {
                    var img = KR_GAME_IMG + encodeURIComponent(g.id) + KR_GAME_IMG_GRID;
                    html += '<a class="kr-game-card" href="' + KR_GAME_URL + encodeURIComponent(g.id) + '">' +
                        '<div class="kr-game-thumb"><img src="' + img + '" alt="" loading="lazy" ' +
                        'onerror="this.style.visibility=\'hidden\'"></div>' +
                        '<div class="kr-game-name">' + krEsc(g.name) + '</div>' +
                        '<div class="kr-game-prov">' + krEsc(g.providerName) + '</div></a>';
                });
                grid.innerHTML = html;
            })
            .catch(function () { hint.style.display = 'block'; hint.textContent = 'Arama başarısız oldu.'; });
    }

    function krOpenModal() {
        var m = krBuildModal();
        m.style.display = 'flex';
        document.documentElement.style.overflow = 'hidden';
        var inp = m.querySelector('.kr-modal-input');
        setTimeout(function () { inp.focus(); }, 30);
    }
    function krCloseModal() {
        var m = document.getElementById('kr-search-modal');
        if (m) m.style.display = 'none';
        document.documentElement.style.overflow = '';
    }
    // Esc ile kapat (tek sefer bağla)
    if (!window.__krEsc) {
        window.__krEsc = true;
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                var m = document.getElementById('kr-search-modal');
                if (m && m.style.display !== 'none') krCloseModal();
            }
        });
    }

    var KR_ICON_CASINO =
        '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>' +
        '<circle cx="12" cy="12" r="3.1" stroke="currentColor" stroke-width="2"/>' +
        '<path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    var KR_ICON_SPORT =
        '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>' +
        '<path d="M12 7.2l3.4 2.5-1.3 4h-4.2l-1.3-4L12 7.2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>';
    var KR_ICON_SEARCH =
        '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>' +
        '<path d="M20 20l-3.6-3.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

    function krBuildTopBlock(nav) {
        var top = document.createElement('div');
        top.className = 'kr-stake-top';

        var seg = document.createElement('div');
        seg.className = 'kr-seg';
        [
            { label: 'Casino', href: '/tr/casino', icon: KR_ICON_CASINO, sport: false },
            { label: 'Spor', href: '/tr/sports/demo', icon: KR_ICON_SPORT, sport: true }
        ].forEach(function (it) {
            var a = document.createElement('a');
            a.className = 'kr-seg-btn';
            a.href = it.href;
            a.setAttribute('data-kr-sport', it.sport ? '1' : '0');
            a.innerHTML = it.icon + '<span>' + it.label + '</span>';
            seg.appendChild(a);
        });
        top.appendChild(seg);

        // Arama kutusu = modal tetikleyici (tıklanınca tam ekran arama modalı açılır)
        var search = document.createElement('div');
        search.className = 'kr-search';
        search.setAttribute('role', 'button');
        search.setAttribute('tabindex', '0');
        search.innerHTML = KR_ICON_SEARCH + '<span class="kr-search-ph">Oyun ara…</span>';
        search.addEventListener('click', krOpenModal);
        search.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); krOpenModal(); }
        });
        top.appendChild(search);

        nav.parentNode.insertBefore(top, nav);
        return top;
    }

    function krUpdateSegActive(root) {
        root = root || document;
        var path = window.location.pathname || '';
        var isSport = path.indexOf('/sports') !== -1 ||
            path.indexOf('/live/') !== -1 ||
            path.indexOf('/sport') !== -1;
        var btns = root.querySelectorAll('.kr-seg-btn');
        for (var i = 0; i < btns.length; i++) {
            var wantsSport = btns[i].getAttribute('data-kr-sport') === '1';
            if ((wantsSport && isSport) || (!wantsSport && !isSport)) {
                btns[i].classList.add('kr-active');
            } else {
                btns[i].classList.remove('kr-active');
            }
        }
    }

    // Daraltılmış durumu .kr-collapsed class'ı ile işaretle. React sidebar'ın
    // className'ini yenileyip class'ı silebildiği için, her sidebar'a className
    // değişimini izleyen bir observer bağlanır → silinirse anında geri eklenir.
    function krApplyCollapsed(sidebar) {
        var w = sidebar.offsetWidth;
        var collapsed = w > 0 && w < 150;
        if (collapsed) {
            if (!sidebar.classList.contains('kr-collapsed')) sidebar.classList.add('kr-collapsed');
        } else {
            if (sidebar.classList.contains('kr-collapsed')) sidebar.classList.remove('kr-collapsed');
        }
    }
    function krWatchSidebar(sidebar) {
        if (sidebar.__krWatched) { krApplyCollapsed(sidebar); return; }
        sidebar.__krWatched = true;
        krApplyCollapsed(sidebar);
        try {
            // Genişlik değişimini izle — collapse animasyonu bitince doğru ölçümle tetiklenir
            // (collapse yalnızca className değiştirdiği için childList observer'ı tetiklemiyor).
            if (window.ResizeObserver) {
                var ro = new ResizeObserver(function () { krApplyCollapsed(sidebar); });
                ro.observe(sidebar);
            }
            // React className'i sıfırlarsa kr-collapsed'ı geri ekle
            var mo = new MutationObserver(function () { krApplyCollapsed(sidebar); });
            mo.observe(sidebar, { attributes: true, attributeFilter: ['class', 'style'] });
        } catch (e) { /* sessiz */ }
    }

    function krSyncSidebar() {
        try {
            // Masaüstü dış kapsayıcı varsa daraltma (collapse) izlemesini bağla.
            // Mobil hamburger drawer'da [data-mj="sidebar"] yoktur — orada collapse olmaz.
            var sidebar = document.querySelector('[data-mj="sidebar"]');
            if (sidebar) krWatchSidebar(sidebar);

            // Menü nav'ı hem masaüstü sidebar'da hem mobil drawer'da bulunur.
            var nav = document.querySelector('nav[data-mj="sidebar-nav"]');
            if (!nav) return;

            // Üst blok (Casino/Spor toggle + arama) yoksa nav'ın üstüne ekle (idempotent).
            if (!nav.parentNode.querySelector('.kr-stake-top')) {
                krBuildTopBlock(nav);
            }
            krUpdateSegActive(document);
        } catch (e) {
            // Sessizce geç — sitenin kendi akışını asla bozma.
        }
    }

    // Mobil alt navbar: "Promosyonlar" metnini "Canlı Destek" yap (text node — React-güvenli)
    function krSyncBottomNav() {
        try {
            var a = document.querySelector('a[data-mj="bottom-nav-item"][href="/tr/promotions"]');
            if (!a) return;
            for (var i = 0; i < a.childNodes.length; i++) {
                var n = a.childNodes[i];
                if (n.nodeType === 3 && n.nodeValue && n.nodeValue.replace(/\s/g, '') &&
                    n.nodeValue.indexOf('Canlı Destek') === -1) {
                    n.nodeValue = 'Canlı Destek';
                }
            }
        } catch (e) { /* sessiz */ }
    }

    // Günün Maçları — yavaş otomatik carousel (ping-pong); hover/touch'ta durur
    function krInitMatchCarousel() {
        var track = document.querySelector('[data-mj="widget-phoenix-sport"] .top-events');
        if (!track || track.__krCarousel) return;
        track.__krCarousel = true;
        var hover = false, touchPaused = false, dir = 1, idle = 0;
        track.addEventListener('mouseenter', function () { hover = true; });
        track.addEventListener('mouseleave', function () { hover = false; });
        track.addEventListener('touchstart', function () { touchPaused = true; idle = 0; }, { passive: true });
        function step() {
            if (!document.body.contains(track)) return; // DOM'dan çıktıysa döngüyü bitir
            if (touchPaused && ++idle > 180) { touchPaused = false; idle = 0; } // dokunmadan ~3sn sonra devam
            var max = track.scrollWidth - track.clientWidth;
            if (!hover && !touchPaused && max > 5) {
                track.scrollLeft += 0.5 * dir;        // yavaş (~30px/sn)
                if (track.scrollLeft >= max - 1) dir = -1;
                else if (track.scrollLeft <= 1) dir = 1;
            }
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }

    var krFrame = null;
    function krScheduleSync() {
        if (krFrame) return;
        krFrame = window.requestAnimationFrame(function () {
            krFrame = null;
            krSyncSidebar();
            krSyncBottomNav();
            krInitMatchCarousel();
        });
    }

    // Daraltılmış menüde tooltip (Stake gibi) — fixed konum, overflow'a takılmaz
    function krTipText(el) {
        var lbl = el.querySelector('span:last-child');
        return lbl ? lbl.textContent.trim() : (el.getAttribute('aria-label') || '');
    }
    function krInitTooltips() {
        if (window.__krTip) return;
        window.__krTip = true;
        var SEL = '[data-mj="sidebar"] a.sl-navlink, [data-mj="sidebar"] .kr-seg-btn, [data-mj="sidebar"] .kr-search';
        document.addEventListener('mouseover', function (e) {
            var sb = document.querySelector('[data-mj="sidebar"]');
            if (!sb || sb.offsetWidth >= 150) return; // sadece daraltılmışken göster
            var el = e.target.closest && e.target.closest(SEL);
            if (!el || !sb.contains(el)) return;
            var txt = krTipText(el);
            if (!txt) return;
            var tip = document.getElementById('kr-tip');
            if (!tip) { tip = document.createElement('div'); tip.id = 'kr-tip'; tip.className = 'kr-tip'; document.body.appendChild(tip); }
            tip.textContent = txt;
            var r = el.getBoundingClientRect();
            tip.style.top = (r.top + r.height / 2) + 'px';
            tip.style.left = (r.right + 10) + 'px';
            tip.classList.add('kr-tip-on');
        });
        document.addEventListener('mouseout', function (e) {
            var el = e.target.closest && e.target.closest(SEL);
            if (el) { var t = document.getElementById('kr-tip'); if (t) t.classList.remove('kr-tip-on'); }
        });
    }
    krInitTooltips();

    function krInitAll() {
        krSyncSidebar();
        krSyncBottomNav();
        krInitMatchCarousel();
    }

    // Güvenlik ağı: bazı değişimler (collapse className'i, mobil drawer'ın açılması)
    // childList observer'ını tetiklemiyor. Tam senkronu periyodik tekrar et —
    // hepsi idempotent olduğu için ucuz: collapse durumu + toggle/arama enjeksiyonu + carousel.
    if (!window.__krSyncPoll) {
        window.__krSyncPoll = true;
        window.setInterval(function () {
            try { krInitAll(); } catch (e) { /* sessiz */ }
        }, 500);
    }
    var krObserver = new MutationObserver(krScheduleSync);
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            krInitAll();
            krObserver.observe(document.body, { childList: true, subtree: true });
        });
    } else {
        krInitAll();
        krObserver.observe(document.body, { childList: true, subtree: true });
    }
    window.addEventListener('resize', krScheduleSync);

    /* ============================================================
       CANLI DESTEK — Chatwoot'u kendi butonumuzla kontrol et
       Varsayılan baloncuk gizli; masaüstünde kendi butonumuz,
       mobilde alt navbar'daki "Canlı Destek" (Promosyonlar yerine).
       ============================================================ */
    var KR_ICON_CHAT =
        '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M4.5 12a7.5 7.5 0 0 1 15 0v4.5a3 3 0 0 1-3 3H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<rect x="2.4" y="11.4" width="4.2" height="6.2" rx="2" stroke="currentColor" stroke-width="2"/>' +
        '<rect x="17.4" y="11.4" width="4.2" height="6.2" rx="2" stroke="currentColor" stroke-width="2"/></svg>';

    function krChatToggle() {
        if (window.$chatwoot && typeof window.$chatwoot.toggle === 'function') {
            window.$chatwoot.toggle();
        }
    }
    function krBuildChatButton() {
        if (document.getElementById('kr-chat-btn') || !document.body) return;
        var b = document.createElement('button');
        b.id = 'kr-chat-btn';
        b.className = 'kr-chat-btn';
        b.type = 'button';
        b.setAttribute('aria-label', 'Canlı Destek');
        b.innerHTML = KR_ICON_CHAT + '<span>Canlı Destek</span>';
        b.addEventListener('click', krChatToggle);
        document.body.appendChild(b);
    }
    // Mobil alt navbar: Promosyonlar → Canlı Destek (tıklamayı yakala, tek sefer bağla)
    if (!window.__krBottomChat) {
        window.__krBottomChat = true;
        document.addEventListener('click', function (e) {
            var a = e.target.closest && e.target.closest('a[data-mj="bottom-nav-item"][href="/tr/promotions"]');
            if (a) { e.preventDefault(); e.stopPropagation(); krChatToggle(); }
        }, true);
    }

    function loadChatwoot() {
        var BASE_URL = 'https://livechatsystem.net';
        // Varsayılan baloncuğu gizle — kontrolü kendi butonumuza ver
        window.chatwootSettings = window.chatwootSettings || {};
        window.chatwootSettings.hideMessageBubble = true;

        krBuildChatButton();

        // SDK zaten yüklüyse tekrar ekleme
        if (document.getElementById('kraldo-chatwoot-sdk')) return;

        var g = document.createElement('script');
        var s = document.getElementsByTagName('script')[0];
        g.id = 'kraldo-chatwoot-sdk';
        g.src = BASE_URL + '/packs/js/sdk.js';
        g.async = true;
        s.parentNode.insertBefore(g, s);
        g.onload = function () {
            window.chatwootSDK.run({
                websiteToken: 'TPyYbWGeMLnMWCPY29ZvAZfP',
                baseUrl: BASE_URL
            });
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadChatwoot);
    } else {
        loadChatwoot();
    }
})();