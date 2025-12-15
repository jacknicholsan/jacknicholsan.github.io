(function () {
    function hideSlider() {
        const slider = document.querySelector('#main-slider');
        if (slider) {
            slider.style.display = 'none';
            localStorage.setItem('sliderHidden', 'true');
        }
    }
    //hideSlider();

    function hideTopGames() {
        const topGames = document.querySelector('#top-games-wrapper');
        const newGames = document.querySelector('#new-games-wrapper');
        if (topGames) {
            topGames.style.display = 'none';
        }
        if (newGames) {
            newGames.style.display = 'none';
        }
    }

    function hideBannersWrapper() {
        const bannersWrapper = document.querySelector('#banners-wrapper');
        if (bannersWrapper) {
            bannersWrapper.style.display = 'none';
        }
    }

    function updateWelcomeTexts() {
        const cPath = window.location.pathname;
        const isEnglish = cPath.startsWith('/en/');

        const welcomeTexts = {
            en: {
                title: 'Play Without Limits',
                subtitle: 'Only at Playico',
                registerButton: "Join on Telegram",
            },
            tr: {
                title: 'Global Lisanslı, Yüksek Güvenlikli',
                subtitle: 'Casino ve Spor Bahisleri Platformu',
                registerButton: "Telegram'a Katıl",
            },
        };

        const texts = isEnglish ? welcomeTexts.en : welcomeTexts.tr;

        // Mevcut metinleri güncelle
        const titleWhite = document.querySelector('.welcome-title-white');
        const titleOrange = document.querySelector('.welcome-title-orange');
        const registerButton = document.querySelector('.register-button');

        if (titleWhite) titleWhite.textContent = texts.title;
        if (titleOrange) titleOrange.textContent = texts.subtitle;
        if (registerButton) registerButton.textContent = texts.registerButton;
    }

    function showWelcome() {
        const mainContent = document.querySelector('#main__content');
        if (!mainContent) return;

        let welcomeElement = document.querySelector('.welcome-container');

        if (welcomeElement) {
            // Mevcut elemanı göster
            welcomeElement.style.display = ''; // Varsayılan display değerine döner (genellikle 'block' veya 'flex')
        } else {
            const cPath = window.location.pathname;
            const isEnglish = cPath.startsWith('/en/');
            const componentTexts = {
                en: {
                    title: 'Play Without Limits',
                    subtitle: 'Only at Playico',
                    registerButton: "Join on Telegram",
                },
                tr: {
                    title: 'Playico, Artık',
                    subtitle: 'Türkiye\'de!',
                    registerButton: "Telegram'a Katıl",
                },
            };

            const texts = isEnglish ? componentTexts.en : componentTexts.tr;

            const WelcomeComponent = `
                <div class="welcome-container">
                    <div class="welcome-inner container">
                        <!-- Sol Taraf -->
                        <div class="welcome-left">
                            <h1 class="welcome-title">
                                        <span class="welcome-title-white">${texts.title}</span><br/>
                                        <span class="welcome-title-orange">${texts.subtitle}</span>
                            </h1>
                            
                            <div class="welcome-buttons">
                                <button class="register-button" id="register-button-custom" onclick="window.open('https://t.me/playico', '_blank')">
                                        ${texts.registerButton}
                                </button>
                                
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
                                    <img src="https://jacknicholsan.github.io/playico/images/Hompage_Casino_Banner.webp" alt="Casino" class="game-image">
                                <div class="game-title">Casino</div>
                            </div>
                            
                            <div class="game-box sports">
                                    <img src="https://jacknicholsan.github.io/playico/images/Hompage_Spor_Banner.webp" alt="Sports" class="game-image">
                                <div class="game-title">Sports</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;


            document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Lexend&display=swap">');
            const welcomeComponentDiv = document.createElement('div');
            welcomeComponentDiv.innerHTML = WelcomeComponent;
            welcomeElement = welcomeComponentDiv.firstElementChild;
            if (welcomeElement) {
                mainContent.prepend(welcomeElement);
            }

        }
        const gameBoxes = document.querySelectorAll('.game-box');
        gameBoxes.forEach(box => {
            box.addEventListener('click', (e) => {
                e.preventDefault();
                const isSports = box.classList.contains('sports');
                const url = isSports ? `/sportsbook` : `/casino`;
                window.history.pushState("", "", url);
                window.history.pushState("", "", url);
                window.history.go(-1);
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 150);
            });
        });
    }

    function hideWelcome() {
        const welcome = document.querySelector('.welcome-container');
        if (welcome) {
            welcome.style.display = 'none'; // Gizlemek için display:none kullan
        }
    }

    function showBrands() {
        const mainContent = document.querySelector('#main__content');
        if (!mainContent) return;

        let brandsElement = document.querySelector('.brand-container');

        if (brandsElement) {
            brandsElement.style.display = ''; // Varsayılan display değerine döner
        } else {
            const BrandComponent = `
            <div class="brand-container">
                <div class="brand-inner">
                    <div class="brand-slider">
                        <div class="brand-slider-group">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-atalanta.png" alt="Atalanta" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-galaxy.png" alt="LA-Galaxy" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-hullcity.png" alt="Hullcity" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-toronto.png" alt="Toronro" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-atalanta.png" alt="Atalanta" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-galaxy.png" alt="LA-Galaxy" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-hullcity.png" alt="Hullcity" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-toronto.png" alt="Toronro" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-atalanta.png" alt="Atalanta" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-galaxy.png" alt="LA-Galaxy" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-hullcity.png" alt="Hullcity" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-toronto.png" alt="Toronro" class="brand-logo">
                        </div>
                        <div class="brand-slider-group">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-atalanta.png" alt="Atalanta" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-galaxy.png" alt="LA-Galaxy" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-hullcity.png" alt="Hullcity" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-toronto.png" alt="Toronto" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-atalanta.png" alt="Atalanta" class="brand-logo">
                                <img srcz="https://cdn.lexcore.space/playico/assets/partner-galaxy.png" alt="LA-Galaxy" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-hullcity.png" alt="Hullcity" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-toronto.png" alt="Toronto" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-atalanta.png" alt="Atalanta" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-galaxy.png" alt="LA-Galaxy" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-hullcity.png" alt="Hullcity" class="brand-logo">
                                <img src="https://cdn.lexcore.space/playico/assets/partner-toronto.png" alt="Toronro" class="brand-logo">
                        </div>
                    </div>
                </div>
            </div>
        `;
            const brandsComponentDiv = document.createElement('div');
            brandsComponentDiv.innerHTML = BrandComponent;
            brandsElement = brandsComponentDiv.firstElementChild;
            if (brandsElement) {
                // Welcome'dan sonra eklemek için bir referans noktası bulalım veya prepend kullanalım
                const welcomeContainer = mainContent.querySelector('.welcome-container');
                if (welcomeContainer) {
                    welcomeContainer.after(brandsElement); // Welcome varsa sonrasına ekle
                } else {
                    mainContent.prepend(brandsElement); // Welcome yoksa başa ekle
                }
            }
        }
    }

    function hideBrands() {
        const brands = document.querySelector('.brand-container');
        if (brands) {
            brands.style.display = 'none'; // Gizlemek için display:none kullan
        }
    }

    function updatePaymentTexts() {
        const cPath = window.location.pathname;
        const isEnglish = cPath.startsWith('/en/');
        const componentTexts = {
            en: {
                paymentTitle: 'Easy crypto payments',
                paymentSubtitle: 'bet with your local currency.',
                paymentButton: 'Learn More',
            },
            tr: {
                paymentTitle: 'Güvenli kripto ödemesi &',
                paymentSubtitle: 'yerel para birimiyle rahatlık.',
                paymentButton: 'Daha Fazla Bilgi Al',
            }
        }
        const texts = isEnglish ? componentTexts.en : componentTexts.tr;
        const paymentTitle = document.querySelector('.payment-title');
        const paymentSubtitle = document.querySelector('.payment-subtitle');
        const paymentButton = document.querySelector('.payment-button');

        if (paymentTitle) paymentTitle.textContent = texts.paymentTitle;
        if (paymentSubtitle) paymentSubtitle.textContent = texts.paymentSubtitle;
        if (paymentButton) paymentButton.textContent = texts.paymentButton;
    }

    function showPaymentSection() {
        const mainContent = document.querySelector('#main__content');
        if (!mainContent) return;

        let paymentElement = document.querySelector('.payment-container');

        if (paymentElement) {
            paymentElement.style.display = ''; // Varsayılan display değerine döner
            initCoinAnimation(); // Animasyonu tekrar başlat (varsa)
        } else {
            const cPath = window.location.pathname;
            const isEnglish = cPath.startsWith('/en/');
            const componentTexts = {
                en: {
                    paymentTitle: 'Easy crypto payments',
                    paymentSubtitle: 'bet with your local currency.',
                    paymentButton: 'Learn More',
                },
                tr: {
                    paymentTitle: 'Güvenli kripto ödemesi &',
                    paymentSubtitle: 'Yerel para birimiyle rahatlık.',
                    paymentButton: 'Daha Fazla Bilgi Al',
                }
            }
            const texts = isEnglish ? componentTexts.en : componentTexts.tr;
            const PaymentComponent = `
            <div class="payment-container">
                <div class="payment-inner">
                    <div class="payment-content">
                        <div class="coin-images">
                                    <img src="https://jacknicholsan.github.io/playico/images/Bitcoin-3.png" alt="Bitcoin" class="coin-image">
                                    <img src="https://jacknicholsan.github.io/playico/images/Etherium-3.png" alt="Ethereum" class="coin-image">
                                    <img src="https://jacknicholsan.github.io/playico/images/Litecoin-3.png" alt="Litecoin" class="coin-image">
                                    <img src="https://jacknicholsan.github.io/playico/images/Bnb-3.png" alt="BNB" class="coin-image">
                        </div>
                        <div class="payment-text">
                                <h2 class="payment-title">${texts.paymentTitle}</h2>
                                <p class="payment-subtitle">${texts.paymentSubtitle}</p>
                                <button class="payment-button">${texts.paymentButton}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
            const paymentComponentDiv = document.createElement('div');
            paymentComponentDiv.innerHTML = PaymentComponent;
            paymentElement = paymentComponentDiv.firstElementChild;
            if (paymentElement) {
                // Brands'den sonra ekle
                const brandsContainer = mainContent.querySelector('.brand-container');
                if (brandsContainer) {
                    brandsContainer.after(paymentElement);
                } else {
                    mainContent.prepend(paymentElement); // Önceki eleman yoksa başa ekle
                }
                initCoinAnimation(); // Animasyonu başlat
            }
        }
    }

    function hidePaymentSection() {
        const payment = document.querySelector('.payment-container');
        if (payment) {
            payment.style.display = 'none'; // Gizlemek için display:none kullan
            // Animasyonları durdurmaya gerek kalmayabilir, çünkü görünmüyorlar.
            // const coins = payment.querySelectorAll('.coin-image');
            // coins.forEach(coin => {
            //     coin.style.animation = 'none';
            // });
        }
    }

    function initCoinAnimation() {
        const coins = document.querySelectorAll('.coin-image');
        coins.forEach((coin, index) => {
            coin.style.transform = 'translateZ(0)';
            coin.style.willChange = 'transform';
        });
    }

    function updateFeaturesTexts() {
        const cPath = window.location.pathname;
        const isEnglish = cPath.startsWith('/en/');
        const componentTexts = {
            en: {
                featureTitle1: 'Weekly Bonuses',
                featureTitle2: 'Level Bonus',
                featureTitle3: 'Personal Representatives',
                featureTitle4: 'Return Bonus',
            },
            tr: {
                featureTitle1: 'Haftalık Bonuslar',
                featureTitle2: 'Seviye Bonusu',
                featureTitle3: 'Size Özel Temsilciler',
                featureTitle4: 'Geri Kazanma Bonusu',
            }
        }
        const texts = isEnglish ? componentTexts.en : componentTexts.tr;
        const featureTitle1 = document.querySelector('#feature-title-1');
        const featureTitle2 = document.querySelector('#feature-title-2');
        const featureTitle3 = document.querySelector('#feature-title-3');
        const featureTitle4 = document.querySelector('#feature-title-4');

        if (featureTitle1) featureTitle1.textContent = texts.featureTitle1;
        if (featureTitle2) featureTitle2.textContent = texts.featureTitle2;
        if (featureTitle3) featureTitle3.textContent = texts.featureTitle3;
        if (featureTitle4) featureTitle4.textContent = texts.featureTitle4;
    }

    function showFeatures() {
        const mainContent = document.querySelector('#main__content');
        if (!mainContent) return;

        let featuresElement = document.querySelector('.features-container');

        if (featuresElement) {
            featuresElement.style.display = ''; // Varsayılan display değerine döner
        } else {
            const componentTexts = {
                en: {
                    featureTitle1: 'Weekly Bonuses',
                    featureTitle2: 'Level Bonus',
                    featureTitle3: 'Personal Representatives',
                    featureTitle4: 'Return Bonus',
                },
                tr: {
                    featureTitle1: 'Haftalık Bonuslar',
                    featureTitle2: 'Seviye Bonusu',
                    featureTitle3: 'Size Özel Temsilciler',
                    featureTitle4: 'Geri Kazanma Bonusu',
                }
            }
            const cPath = window.location.pathname;
            const isEnglish = cPath.startsWith('/en/');
            const texts = isEnglish ? componentTexts.en : componentTexts.tr;
            const FeaturesComponent = `
            <div class="features-container">
                <div class="features-inner">
                    <div class="features-content">
                        <div class="feature-item">
                            <div class="feature-icon-wrapper">
                                <div class="feature-icon-bg">
                                    <img src="https://cdn.lexcore.space/playico/assets/rocket-black.png" alt="Hızlı" class="feature-icon">
                                </div>
                            </div>
                            <div class="feature-text">
                                <h3 class="feature-title" id="feature-title-1">${texts.featureTitle1}</h3>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon-wrapper">
                                <div class="feature-icon-bg">
                                    <img src="https://cdn.lexcore.space/playico/assets/diamond.png" alt="Güvenli" class="feature-icon">
                                </div>
                            </div>
                            <div class="feature-text">
                                <h3 class="feature-title" id="feature-title-2">${texts.featureTitle2}</h3>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon-wrapper">
                                <div class="feature-icon-bg">
                                    <img src="https://cdn.lexcore.space/playico/assets/king.png" alt="VIP" class="feature-icon">
                                </div>
                            </div>
                            <div class="feature-text">
                                <h3 class="feature-title" id="feature-title-3">${texts.featureTitle3}</h3>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon-wrapper">
                                <div class="feature-icon-bg">
                                    <img src="https://cdn.lexcore.space/playico/assets/coins.png" alt="Bonus" class="feature-icon">
                                </div>
                            </div>
                            <div class="feature-text">
                                <h3 class="feature-title" id="feature-title-4">${texts.featureTitle4}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
            const featuresComponentDiv = document.createElement('div'); // Geçici div
            featuresComponentDiv.innerHTML = FeaturesComponent;
            featuresElement = featuresComponentDiv.firstElementChild; // Asıl elemanı al

            if (featuresElement) {
                // Payment'dan sonra ekle
                const paymentContainer = mainContent.querySelector('.payment-container');
                if (paymentContainer) {
                    paymentContainer.after(featuresElement);
                } else {
                    mainContent.prepend(featuresElement); // Önceki eleman yoksa başa ekle
                }
            }
        }
    }

    function hideFeatures() {
        const features = document.querySelector('.features-container');
        if (features) {
            features.style.display = 'none'; // Gizlemek için display:none kullan
        }
    }

    function showBackgroundSplit() {
        const BackgroundComponent = `
            <div class="background-container">
                <img src="https://cdn.lexcore.space/playico/assets/pink.png" class="background-glow" alt="background effect">
            </div>
        `;
        const backgroundDiv = document.createElement('div');
        backgroundDiv.innerHTML = BackgroundComponent;
        const backgroundElement = backgroundDiv.firstElementChild;

        const mainContent = document.querySelector('#body');
        if (mainContent && backgroundElement) {
            mainContent.prepend(backgroundElement);
        }
    }

    function hideBackgroundSplit() {
        const background = document.querySelector('.background-container');
        if (background) {
            background.style.display = 'none';
        }
    }

    function updateBannerTexts() {
        const cPath = window.location.pathname;
        const isEnglish = cPath.startsWith('/en/');
        const componentTexts = {
            en: {
                bannerTitle: 'Watch all sports',
                bannerSubtitle: 'and place live bets.',
                football: 'Football',
                basketball: 'Basketball',
                tennis: 'Tennis',
            },
            tr: {
                bannerTitle: 'Tüm sporları izleyin',
                bannerSubtitle: 've canlı bahis yapın.',
                football: 'Futbol',
                basketball: 'Basketbol',
                tennis: 'Tenis',
            }
        }
        const texts = isEnglish ? componentTexts.en : componentTexts.tr;
        const bannerTitle = document.querySelector('.banner-title');
        const bannerSubtitle = document.querySelector('.banner-subtitle');
        const footballText = document.querySelector('#football-text');
        const basketballText = document.querySelector('#basketball-text');
        const tennisText = document.querySelector('#tennis-text');

        if (bannerTitle) bannerTitle.textContent = texts.bannerTitle;
        if (bannerSubtitle) bannerSubtitle.textContent = texts.bannerSubtitle;
        if (footballText) footballText.textContent = texts.football;
        if (basketballText) basketballText.textContent = texts.basketball;
        if (tennisText) tennisText.textContent = texts.tennis;
    }

    function showBannerSection() {
        const mainContent = document.querySelector('#main__content');
        if (!mainContent) return;

        let bannerElement = document.querySelector('.banner-container');

        if (bannerElement) {
            bannerElement.style.display = ''; // Varsayılan display değerine döner
        } else {
            const cPath = window.location.pathname;
            const isEnglish = cPath.startsWith('/en/');
            const componentTexts = {
                en: {
                    bannerTitle: 'Watch all sports',
                    bannerSubtitle: 'and place live bets.',
                    football: 'Football',
                    basketball: 'Basketball',
                    tennis: 'Tennis',
                },
                tr: {
                    bannerTitle: 'Tüm sporları izleyin',
                    bannerSubtitle: 've canlı bahis yapın.',
                    football: 'Futbol',
                    basketball: 'Basketbol',
                    tennis: 'Tenis',
                }
            }
            const texts = isEnglish ? componentTexts.en : componentTexts.tr;

            const navigate = (path) => {
                window.history.pushState('', '', path);
                window.history.pushState('', '', path);
                window.history.go(-1);
            }

            const BannerComponent = `
            <div class="banner-container">
                <div class="banner-inner">
                    <div class="banner-content">
                        <div class="banner-left">
                            <div class="banner-text-wrapper">
                                <div class="banner-text">
                                        <h2 class="banner-title">${texts.bannerTitle}</h2>
                                        <p class="banner-subtitle">${texts.bannerSubtitle}</p>
                                </div>
                            </div>
                            
                            <div class="sports-buttons">
                                    <button class="sports-button" onclick="window.history.pushState('', '', '/sportsbook'); window.history.pushState('', '', '/sportsbook'); window.history.go(-1);">
                                    <img src="https://cdn.lexcore.space/playico/assets/football-2.png" alt="Futbol" class="sports-icon">
                                        <span id="football-text">${texts.football}</span>
                                </button>
                                <span class="separator">|</span>
                                <button class="sports-button">
                                    <img src="https://cdn.lexcore.space/playico/assets/basketball-2.png" alt="Basketbol" class="sports-icon">
                                        <span id="basketball-text">${texts.basketball}</span>
                                </button>
                                <span class="separator">|</span>
                                <button class="sports-button">
                                    <img src="https://cdn.lexcore.space/playico/assets/tennis-2.png" alt="Tenis" class="sports-icon">
                                        <span id="tennis-text">${texts.tennis}</span>
                                </button>
                            </div>
                        </div>
                        <div class="banner-right">
                                <img src="https://cdn.lexcore.space/playico/assets/players-3.png" alt="Players" class="players-image">
                        </div>
                    </div>
                </div>
            </div>
        `;
            const bannerComponentDiv = document.createElement('div');
            bannerComponentDiv.innerHTML = BannerComponent;
            bannerElement = bannerComponentDiv.firstElementChild;
            if (bannerElement) {
                // ticker-swiper-container'dan sonra ekle
                const tickerContainer = document.querySelector('.ticker-swiper-container');
                if (tickerContainer) {
                    tickerContainer.after(bannerElement);
                } else {
                    // ticker container yoksa features'dan sonra ekle
                    const featuresContainer = mainContent.querySelector('.features-container');
                    if (featuresContainer) {
                        featuresContainer.after(bannerElement);
                    } else {
                        mainContent.prepend(bannerElement); // Önceki eleman yoksa başa ekle
                    }
                }
            }
        }
    }

    function hideBannerSection() {
        const banner = document.querySelector('.banner-container');
        if (banner) {
            banner.style.display = 'none'; // Gizlemek için display:none kullan
        }
    }

    function removeHeaderContainerClass() {
        const header = document.querySelector('.header');
        if (header) {
            const firstChild = header.querySelector('.container');
            if (firstChild) {
                firstChild.classList.remove('container');
                firstChild.style.width = '100%';
            }
        }
    }

    function updateSliderTexts() {
        const cPath = window.location.pathname;
        const isEnglish = cPath.startsWith('/en/');
        const componentTexts = {
            en: {
                sliderTitle1: 'Weekly Bonus',
                sliderTitle2: 'Personal Assistant',
                sliderTitle3: 'Deposit & Withdrawal',
                sliderDescription1: 'Increase your earnings with weekly bonuses.',
                sliderDescription2: 'We provide 24/7 VIP support to our VIP members.',
                sliderDescription3: 'Your deposits and withdrawals are instantly credited to your account.',
            },
            tr: {
                sliderTitle1: 'Haftalık Bonuslar',
                sliderTitle2: 'Özel VIP Asistan',
                sliderTitle3: 'Yatırım & Çekim',
                sliderDescription1: 'Sizlere özel haftalık ödüllerle kazancınızı artırın.',
                sliderDescription2: 'VIP üyelerimize 7/24 özel destek sağlıyoruz.',
                sliderDescription3: 'Yatırım ve çekimleriniz anında hesabınıza yansır.',
            }
        }
        const texts = isEnglish ? componentTexts.en : componentTexts.tr;
        const sliderTitle1 = document.querySelector('#slider-title-1');
        const sliderTitle2 = document.querySelector('#slider-title-2');
        const sliderTitle3 = document.querySelector('#slider-title-3');
        const sliderDescription1 = document.querySelector('#slider-description-1');
        const sliderDescription2 = document.querySelector('#slider-description-2');
        const sliderDescription3 = document.querySelector('#slider-description-3');

        if (sliderTitle1) sliderTitle1.textContent = texts.sliderTitle1;
        if (sliderTitle2) sliderTitle2.textContent = texts.sliderTitle2;
        if (sliderTitle3) sliderTitle3.textContent = texts.sliderTitle3;
        if (sliderDescription1) sliderDescription1.textContent = texts.sliderDescription1;
        if (sliderDescription2) sliderDescription2.textContent = texts.sliderDescription2;
        if (sliderDescription3) sliderDescription3.textContent = texts.sliderDescription3;
    }

    function showBannerSlider() {
        const mainContent = document.querySelector('#main__content');
        if (!mainContent) return;

        let sliderElement = document.querySelector('.banner-slider');

        if (sliderElement) {
            sliderElement.style.display = 'flex'; // Slider için 'flex' kullanılmıştı
            // initSlider(); // Slider zaten varsa tekrar init etmeye gerek olmayabilir, içeriği değişmiyorsa. Eğer içerik değişiyorsa veya state sıfırlanmalıysa çağırılabilir.
        } else {
            const cPath = window.location.pathname;
            const isEnglish = cPath.startsWith('/en/');
            const componentTexts = {
                en: {
                    sliderTitle1: 'Weekly Bonus',
                    sliderTitle2: 'Personal Assistant',
                    sliderTitle3: 'Deposit & Withdrawal',
                    sliderDescription1: 'Increase your earnings with weekly bonuses.',
                    sliderDescription2: 'We provide 24/7 VIP support to our VIP members.',
                    sliderDescription3: 'Your deposits and withdrawals are instantly credited to your account.',
                },
                tr: {
                    sliderTitle1: 'Haftalık Bonuslar',
                    sliderTitle2: 'Özel VIP Asistan',
                    sliderTitle3: 'Yatırım & Çekim',
                    sliderDescription1: 'Sizlere özel haftalık ödüllerle kazancınızı artırın.',
                    sliderDescription2: 'VIP üyelerimize 7/24 özel destek sağlıyoruz.',
                    sliderDescription3: 'Yatırım ve çekimleriniz anında hesabınıza yansır.',
                }
            }
            const texts = isEnglish ? componentTexts.en : componentTexts.tr;

            const SliderComponent = `
            <div class="banner-slider">
                <div class="slider-item active" data-index="0">
                    <div class="slider-content">
                        <div class="slider-icon">
                            <img src="https://cdn.lexcore.space/playico/assets/star-icon-2.png" alt="Star">
                        </div>
                        <div class="slider-text">
                                <h3 class="slider-title" id="slider-title-1">${texts.sliderTitle1}</h3>
                                    <p class="slider-description" id="slider-description-1">${texts.sliderDescription1}</p>
                        </div>
                    </div>
                    <div class="slider-image">
                        <img src="https://cdn.lexcore.space/playico/assets/gift-banner.png" alt="Gift">
                    </div>
                </div>
    
                <div class="slider-item active" data-index="1">
                    <div class="slider-content">
                        <div class="slider-icon">
                            <img src="https://cdn.lexcore.space/playico/assets/king-icon.png" alt="King">
                        </div>
                        <div class="slider-text">
                                <h3 class="slider-title" id="slider-title-2">${texts.sliderTitle2}</h3>
                                    <p class="slider-description" id="slider-description-2">${texts.sliderDescription2}</p>
                        </div>
                    </div>
                    <div class="slider-image">
                        <img src="https://cdn.lexcore.space/playico/assets/support-banner-2.png" alt="Support">
                    </div>
                </div>
    
                <div class="slider-item active" data-index="2">
                    <div class="slider-content">
                        <div class="slider-icon">
                            <img src="https://cdn.lexcore.space/playico/assets/vip-icon.png" alt="VIP">
                        </div>
                        <div class="slider-text">
                                    <h3 class="slider-title" id="slider-title-3">${texts.sliderTitle3}</h3>
                                    <p class="slider-description" id="slider-description-3">${texts.sliderDescription3}</p>
                        </div>
                    </div>
                    <div class="slider-image">
                                <img src="https://cdn.lexcore.space/playico/assets/vip-icon-9.png" alt="VIP">
                    </div>
                </div>
            </div>
        `;

            const bannerComponentDiv = document.createElement('div');
            bannerComponentDiv.innerHTML = SliderComponent;
            sliderElement = bannerComponentDiv.firstElementChild;
            if (sliderElement) {
                // Banner Section'dan sonra ekle
                const bannerContainer = mainContent.querySelector('.banner-container');
                if (bannerContainer) {
                    bannerContainer.after(sliderElement);
                } else {
                    mainContent.prepend(sliderElement); // Önceki eleman yoksa başa ekle
                }
                //initSlider(); // Yeni eklendiğinde slider'ı başlat
            }
        }
    }

    function initSlider() {
        const items = document.querySelectorAll('.slider-item');
        let currentIndex = 0;
        let progressInterval;
        let isPlaying = true;
        let currentProgress = 0;

        function activateItem(index) {
            if (progressInterval) clearInterval(progressInterval);

            items.forEach((item, i) => {
                item.classList.remove('active');
                const progress = item.querySelector('.progress');
                if (i !== index) {
                    progress.style.width = '0%';
                }
            });

            const activeItem = items[index];
            activeItem.classList.add('active');
            currentProgress = 0;
            startProgress(activeItem);
        }

        function startProgress(activeItem) {
            const progress = activeItem.querySelector('.progress');
            progress.style.width = currentProgress + '%';

            // Her slider için toplam 3000ms (3 saniye) süre
            // Her 30ms'de bir %1 ilerlesin (100 adımda tamamlansın)
            progressInterval = setInterval(() => {
                currentProgress += 1; // Her adımda %1 artış
                progress.style.width = currentProgress + '%';

                if (currentProgress >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => {
                        currentIndex = (currentIndex + 1) % items.length;
                        activateItem(currentIndex);
                    }, 200); // Geçiş süresi
                }
            }, 30); // 30ms × 100 adım = 3000ms toplam süre
        }

        // Sayfa görünürlüğü değiştiğinde
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                isPlaying = false;
                if (progressInterval) clearInterval(progressInterval);
            } else {
                isPlaying = true;
                startProgress(items[currentIndex]);
            }
        });

        // İlk item'ı aktif et
        activateItem(currentIndex);
    }

    function hideBannerSlider() {
        const bannerSlider = document.querySelector('.banner-slider');
        if (bannerSlider) {
            bannerSlider.style.display = 'none'; // Gizlemek için display:none kullan
            // Slider interval'lerini durdurmak gerekebilir
            // Bu kısım initSlider içinde visibilitychange ile yönetiliyor olabilir, kontrol etmek lazım.
        }
    }

    function initFakeBets() {
        const pragmaticGames = [
            "Sweet Bonanza", "Gates of Olympus", "Fruit Party", "Big Bass Bonanza",
            "Wolf Gold", "The Dog House", "Great Rhino Megaways", "Pyramid King",
            "Wild West Gold", "John Hunter", "5 Lions Megaways", "Madame Destiny",
            "Buffalo King", "Release the Kraken", "Wild Wild Riches", "Christmas Carol",
            "Dance Party", "Hot to Burn", "Mysterious Egypt", "Pirate Gold",
            "Dragon Kingdom", "Master Joker", "Ultra Hold & Spin", "Lucky Dragon",
            "Gems Bonanza", "Lucky Lightning", "Star Bounty", "Empty the Bank",
            "Power of Thor", "Chicken Drop", "Crystal Caverns", "Big Juan"
        ];

        function generateRandomBet() {
            const rand = Math.random();
            if (rand < 0.05) { // %5 ihtimalle 100-500 USDT
                return Math.floor(Math.random() * 400 + 100);
            } else if (rand < 0.10) { // %5 ihtimalle 50-100 USDT
                return Math.floor(Math.random() * 50 + 50);
            } else { // %90 ihtimalle 0.20, 1 veya 2 USDT
                const smallBets = [0.20, 1, 2];
                return smallBets[Math.floor(Math.random() * smallBets.length)];
            }
        }

        function generateRandomMultiplier() {
            // %60 ihtimalle kaybetsin (0x)
            if (Math.random() < 0.6) return 0;
            // Kazandıysa 3x-10x arası
            return Math.floor(Math.random() * 8 + 3);
        }

        function formatTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        }

        function generateUsername() {
            // %85 ihtimalle Anonim User
            if (Math.random() < 0.85) return "Anonim User";

            const names = [
                "Player", "Crypto", "Lucky", "Winner", "Gold", "Pro", "Star", "Vip",
                "Tiger", "Dragon", "Phoenix", "Eagle", "Lion", "Wolf", "Bear", "Shark",
                "Master", "King", "Queen", "Royal", "Elite", "Prime", "Ultra", "Mega"
            ];
            const numbers = Math.floor(Math.random() * 9999);
            return names[Math.floor(Math.random() * names.length)] + numbers;
        }

        function addNewBet() {
            const table = document.querySelector('.xtable tbody');
            if (!table) return;

            const bet = generateRandomBet();
            const multiplier = generateRandomMultiplier();
            const profit = multiplier === 0
                ? -bet
                : (bet * multiplier - bet);

            const newRow = document.createElement('tr');
            newRow.style.opacity = '0';
            newRow.style.transform = 'translateY(20px)';
            newRow.style.transition = 'all 0.3s ease';

            newRow.innerHTML = `
                <td>${pragmaticGames[Math.floor(Math.random() * pragmaticGames.length)]}</td>
                <td>${generateUsername()}</td>
                <td>${formatTime()}</td>
                <td class="text-right">${typeof bet === 'number' ? bet.toFixed(2) : bet} USDT</td>
                <td class="text-right" style="color: ${multiplier === 0 ? '#ff4444' : '#44ff44'}">${multiplier}x</td>
                <td style="color: ${profit < 0 ? '#ff4444' : '#44ff44'}">${typeof profit === 'number' ? profit.toFixed(2) : profit} USDT</td>
            `;

            // Tablonun başına yeni satırı ekle
            table.insertBefore(newRow, table.firstChild);

            // Animasyon için setTimeout
            setTimeout(() => {
                newRow.style.opacity = '1';
                newRow.style.transform = 'translateY(0)';
            }, 50);

            // Maksimum 10 satır göster
            if (table.children.length > 10) {
                const lastRow = table.lastElementChild;
                lastRow.style.opacity = '0';
                lastRow.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    table.removeChild(lastRow);
                }, 300);
            }
        }

        function getRandomInterval() {
            // 1000ms (1 saniye) ile 5000ms (5 saniye) arasında rastgele bir süre
            return Math.floor(Math.random() * 4000) + 1000;
        }

        // İlk yüklemede 10 adet veri oluştur
        function initializeTable() {
            const table = document.querySelector('.xtable tbody');
            if (!table) return;

            // Mevcut satırları temizle
            table.innerHTML = '';

            // 10 adet başlangıç verisi ekle
            for (let i = 0; i < 10; i++) {
                const bet = generateRandomBet();
                const multiplier = generateRandomMultiplier();
                const profit = multiplier === 0
                    ? -bet
                    : (bet * multiplier - bet);

                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${pragmaticGames[Math.floor(Math.random() * pragmaticGames.length)]}</td>
                    <td>${generateUsername()}</td>
                    <td>${formatTime()}</td>
                    <td class="text-right">${typeof bet === 'number' ? bet.toFixed(2) : bet} USDT</td>
                    <td class="text-right" style="color: ${multiplier === 0 ? '#ff4444' : '#44ff44'}">${multiplier}x</td>
                    <td style="color: ${profit < 0 ? '#ff4444' : '#44ff44'}">${typeof profit === 'number' ? profit.toFixed(2) : profit} USDT</td>
                `;
                table.appendChild(newRow);
            }
        }

        // Tabloyu başlangıç verileriyle doldur
        initializeTable();

        // Sonraki güncellemeler için zamanlayıcıyı başlat
        function scheduleNextBet() {
            const interval = getRandomInterval();
            setTimeout(() => {
                addNewBet();
                scheduleNextBet();
            }, interval);
        }

        // İlk güncellemeyi başlat
        scheduleNextBet();
    }

    function updateVIPBannerTexts() {
        const cPath = window.location.pathname;
        const isEnglish = cPath.startsWith('/en/');
        const currentLang = isEnglish ? 'en' : 'tr';
        const componentTexts = {
            en: {
                title: 'Advanced VIP System',
                subtitle: 'Experience the Taste of Bonuses!',
            },
            tr: {
                title: 'Gelişmiş VIP Sistemiyle',
                subtitle: 'Bonusların Tadını Çıkarın!',
            }
        }
        const vipTitle = document.querySelector('.vip-title');
        const vipSubtitle = document.querySelector('.vip-subtitle');
        if (vipTitle) {
            vipTitle.innerHTML = componentTexts[currentLang].title;
        }
        if (vipSubtitle) {
            vipSubtitle.innerHTML = componentTexts[currentLang].subtitle;
        }
    }

    function showVIPBanner() {

        document.querySelectorAll('h2.section__title.section__title--center').forEach(h2 => {
            const colDiv = h2.closest('.col-12');
            if (colDiv) colDiv.remove();
        });

        // vip sayfasında kaldırılacak alanlar
        const defaultVipSection = document.querySelector('.vip');
        if (defaultVipSection) {
            defaultVipSection.style.display = 'none';
        }

        const vipTitle = document.querySelector('.section__title--center');
        if (vipTitle) {
            vipTitle.style.display = 'none';
        }

        const mainContent = document.querySelector('#main__content');
        if (!mainContent) return;

        let vipBannerElement = document.querySelector('.vip-banner-container');

        if (vipBannerElement) {
            vipBannerElement.style.display = ''; // Varsayılan display değerine döner
        } else {
            // Butonları içeren yeni HTML yapısı
            const cPath = window.location.pathname;
            const isEnglish = cPath.startsWith('/en/');
            const currentLang = isEnglish ? 'en' : 'tr';
            const componentTexts = {
                en: {
                    title: 'Advanced VIP System',
                    subtitle: 'Experience the Taste of Bonuses!',
                    playButton: 'Play Now',
                },
                tr: {
                    title: 'Gelişmiş VIP Sistemiyle',
                    subtitle: 'Bonusların Tadını Çıkarın!',
                    playButton: 'Hemen Oyna',
                }
            }
            const VIPBannerComponent = `
                <div class="vip-banner-container">
                    <div class="vip-banner-inner">
                        <img src="https://jacknicholsan.github.io/playico/images/vip-banner-3.webp" alt="VIP Banner" class="vip-banner-image">
                        <div class="vip-banner-text">
                            <h2 class="vip-title">${componentTexts[currentLang].title}</h2>
                            <p class="vip-subtitle">${componentTexts[currentLang].subtitle}</p>
                            <div class="vip-banner-buttons">
                                 <button class="payment-button" onclick="event.preventDefault(); const path = '/${currentLang}/casino'; window.history.pushState('', '', path); window.history.pushState('', '', path); window.history.go(-1);">${componentTexts[currentLang].playButton}</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            const vipBannerDiv = document.createElement('div');
            vipBannerDiv.innerHTML = VIPBannerComponent;
            vipBannerElement = vipBannerDiv.firstElementChild;
            if (vipBannerElement) {
                mainContent.prepend(vipBannerElement);
            }
        }
    }

    function hideVIPBanner() {
        const vipBanner = document.querySelector('.vip-banner-container');
        if (vipBanner) {
            vipBanner.style.display = 'none'; // Gizlemek için display:none kullan
        }
    }



    function showPopularSports() {
        const mainContent = document.querySelector('#main__content');
        if (!mainContent) return;

        let sportsElement = document.querySelector('.popular-sports-container');

        if (sportsElement) {
            sportsElement.style.display = ''; // Varsayılan display değerine döner
        } else {
            const cPath = window.location.pathname;
            const isEnglish = cPath.startsWith('/en/');
            const currentLang = isEnglish ? 'en' : 'tr';
            const componentTexts = {
                en: {
                    title: 'Popular Sports',
                    link: 'All Sports',
                    sports: {
                        futbol: 'Football',
                        basketbol: 'Basketball',
                        voleybol: 'Volleyball',
                        tenis: 'Tennis',
                        atYarisi: 'Horse Racing',
                        espor: 'E-spor',
                        formula1: 'Formula 1'
                    }
                },
                tr: {
                    title: 'Popüler Sporlar',
                    link: 'Tümü',
                    sports: {
                        futbol: 'Futbol',
                        basketbol: 'Basketbol',
                        voleybol: 'Voleybol',
                        tenis: 'Tenis',
                        atYarisi: 'At Yarışı',
                        espor: 'E-spor',
                        formula1: 'Formula 1'
                    }
                }
            }
            const PopularSportsComponent = `
                <div class="popular-sports-container">
                    <div class="popular-sports-title-wrap">
                        <div class="popular-sports-title">
                            <img src="https://cdn.lexcore.space/playico/assets/sports-icon-2.png" alt="Sports" style="width: 22px; height: 22px; margin-right: 2px; object-fit: contain;">
                            ${componentTexts[currentLang].title}
                        </div>
                        <a href="/${currentLang}/sportsbook" class="popular-sports-link">${componentTexts[currentLang].link}</a>
                    </div>
                    <div class="popular-sports-grid">
                        <div class="sport-box" onclick="event.preventDefault(); const path = '/${currentLang}/sportsbook/soccer'; window.history.pushState('', '', path); window.history.pushState('', '', path); window.history.go(-1);">
                            <img src="https://cdn.lexcore.space/playico/mascot/Football.png" alt="Futbol" class="sport-icon">
                            <div class="sport-name">${componentTexts[currentLang].sports.futbol}</div>
                        </div>
                        <div class="sport-box" onclick="event.preventDefault(); const path = '/${currentLang}/sportsbook/basketball'; window.history.pushState('', '', path); window.history.pushState('', '', path); window.history.go(-1);">
                            <img src="https://cdn.lexcore.space/playico/mascot/Basketball.png" alt="Basketbol" class="sport-icon">
                            <div class="sport-name">${componentTexts[currentLang].sports.basketbol}</div>
                        </div>
                        <div class="sport-box" onclick="event.preventDefault(); const path = '/${currentLang}/sportsbook/volleyball'; window.history.pushState('', '', path); window.history.pushState('', '', path); window.history.go(-1);">
                            <img src="https://cdn.lexcore.space/playico/mascot/Voleyball.png" alt="Voleybol" class="sport-icon">
                            <div class="sport-name">${componentTexts[currentLang].sports.voleybol}</div>
                        </div>
                        <div class="sport-box" onclick="event.preventDefault(); const path = '/${currentLang}/sportsbook/tennis'; window.history.pushState('', '', path); window.history.pushState('', '', path); window.history.go(-1);">
                            <img src="https://cdn.lexcore.space/playico/mascot/Tennis.png" alt="Tenis" class="sport-icon">
                            <div class="sport-name">${componentTexts[currentLang].sports.tenis}</div>
                        </div>
                       
                        <div class="sport-box" onclick="event.preventDefault(); const path = '/${currentLang}/sportsbook/esports'; window.history.pushState('', '', path); window.history.pushState('', '', path); window.history.go(-1);">
                            <img src="https://cdn.lexcore.space/playico/mascot/E-sports.png" alt="Espor" class="sport-icon">
                            <div class="sport-name">${componentTexts[currentLang].sports.espor}</div>
                        </div>
                    </div>
                </div>
            `;

            const sportsComponentDiv = document.createElement('div');
            sportsComponentDiv.innerHTML = PopularSportsComponent;
            sportsElement = sportsComponentDiv.firstElementChild;

            if (sportsElement) {
                // Banner Slider'dan sonra ekle
                const bannerSlider = mainContent.querySelector('.originals-container');
                if (bannerSlider) {
                    bannerSlider.after(sportsElement);
                } else {
                    mainContent.prepend(sportsElement);
                }
            }
        }
    }

    function hidePopularSports() {
        const popularSports = document.querySelector('.popular-sports-container');
        if (popularSports) {
            popularSports.style.display = 'none';
        }
    }

    // function addPlayButtons() {
    //     const slots = document.querySelectorAll('.slot');

    //     slots.forEach(slot => {
    //         // Eğer zaten play butonu varsa ekleme
    //         if (slot.querySelector('.slot-play-button')) return;

    //         // Oyun başlığı ve sağlayıcı bilgisini al
    //         const gameTitle = slot.querySelector('.slot__title h3')?.textContent || '';
    //         const providerName = slot.querySelector('.slot__title .game-provider')?.textContent || '';

    //         // Yeni başlık elementi oluştur
    //         const titleElement = document.createElement('div');
    //         titleElement.className = 'slot__title-new';
    //         titleElement.innerHTML = `
    //             <h3>${gameTitle}</h3>
    //             <span class="provider">${providerName == 'Ebatlab' ? 'Playico Orginals' : providerName}</span>
    //         `;

    //         // Play butonu oluştur
    //         const playButton = document.createElement('button');
    //         playButton.className = 'slot-play-button';
    //         playButton.innerHTML = `
    //             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
    //             </svg>
    //         `;

    //         // Hover overlay ekle
    //         const overlay = document.createElement('div');
    //         overlay.className = 'slot-hover-overlay';

    //         // Elementleri slot'a ekle
    //         slot.appendChild(overlay);
    //         slot.appendChild(playButton);
    //         slot.appendChild(titleElement);

    //         // Mevcut başlığı gizle
    //         const existingTitle = slot.querySelector('.slot__title');
    //         if (existingTitle) {
    //             existingTitle.style.display = 'none';
    //         }
    //     });
    // }

    function showVipPageSystemSection() {
        if (!document.querySelector('.vip-system-section')) {
            const vipBanner = document.querySelector('.vip-banner-container');
            if (vipBanner) {
                const vipSystemDiv = document.createElement('div');
                vipSystemDiv.className = 'vip-system-section';
                vipSystemDiv.innerHTML = `
                        <div class="vip-system-title">Playico VIP Sistem</div>
                        <img class="vip-system-hr" src="https://jacknicholsan.github.io/playico/images/vip-hr.png" alt="VIP HR" />
                    `;
                vipBanner.after(vipSystemDiv);
            }
        }
    }

    function hideVipPageSystemSection() {
        const vipSystemSection = document.querySelector('.vip-system-section');
        if (vipSystemSection) {
            vipSystemSection.style.display = 'none';
        }
    }

    const currentPath = window.location.pathname;

    // DOM hazır olana kadar bekleme fonksiyonu
    function waitForElement(selector, timeout = 5000) {
        return new Promise((resolve, reject) => {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
                return;
            }

            const observer = new MutationObserver((mutations, obs) => {
                const element = document.querySelector(selector);
                if (element) {
                    obs.disconnect();
                    resolve(element);
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });

            setTimeout(() => {
                observer.disconnect();
                reject(new Error(`Element ${selector} not found within ${timeout}ms`));
            }, timeout);
        });
    }

    function hideMiniSliderWrapper() {
        const miniSliderWrapper = document.querySelector('#mini-slider-wrapper');
        if (miniSliderWrapper) {
            miniSliderWrapper.style.display = 'none';
        }
    }

    function moveTopGamesAfterBrands() {
        const brandContainer = document.querySelector('.brand-container');
        const topGamesWrapper = document.querySelector('#top-games-wrapper');

        if (brandContainer && topGamesWrapper) {
            brandContainer.parentNode.insertBefore(topGamesWrapper, brandContainer.nextSibling);
        }
    }

    function showOriginalGames() {
        const mainContent = document.querySelector('#main__content');
        if (!mainContent) return;

        let originalsElement = document.querySelector('.originals-container');
        const currentLang = window.location.pathname.startsWith('/en/') ? 'en' : 'tr';

        const componentText = currentLang == 'en' ? 'Playico Originals' : 'Playico Orijinalleri';

        if (originalsElement) {
            originalsElement.style.display = ''; // Varsayılan display değerine döner
        } else {
            const OriginalsComponent = `
                <div class="originals-container">
                    <div class="originals-title-wrap">
                        <div class="originals-title">
                            <img src="https://cdn.lexcore.space/playico/assets/fire-icon.png" alt="Playico" style="width: 22px; height: 22px;">
                            ${componentText}
                        </div>
                    </div>
                    <div class="originals-grid">
                        <a href="/${currentLang}/casino/games/ebetlab-dice-originals" class="original-game">
                            <img src="https://cdn.lexcore.space/playico/assets/playico-dice-1.png" alt="Dice">
                        </a>
                        <a href="/${currentLang}/casino/games/ebetlab-mines-originals" class="original-game">
                            <img src="https://cdn.lexcore.space/playico/assets/playico-mines-1.png" alt="Mines">
                        </a>
                        <a href="/${currentLang}/casino/games/ebetlab-limbo-originals" class="original-game">
                            <img src="https://cdn.lexcore.space/playico/assets/playico-limbo-1.png" alt="Limbo">
                        </a>
                        <a href="/${currentLang}/casino/games/ebetlab-plinko-originals" class="original-game">
                            <img src="https://cdn.lexcore.space/playico/assets/playico-plinko-1.png" alt="Plinko">
                        </a>
                    </div>
                    <div class="originals-grid">
                        <a href="/${currentLang}/casino/games/ebetlab-crash-originals" class="original-game">
                            <img src="https://cdn.lexcore.space/playico/assets/playico-crash-1.png" alt="Crash">
                        </a>
                        <a href="/${currentLang}/casino/games/ebetlab-wheel-originals" class="original-game">
                            <img src="https://cdn.lexcore.space/playico/assets/playico-wheel-2.png" alt="Wheel">
                        </a>
                        <a href="/${currentLang}/casino/games/ebetlab-coinflip-originals" class="original-game">
                            <img src="https://cdn.lexcore.space/playico/assets/playico-coinflip-1.png" alt="Coinflip">
                        </a>
                        <a href="/${currentLang}/casino/games/ebetlab-night-tower-originals" class="original-game">
                            <img src="https://cdn.lexcore.space/playico/assets/playico-tower-1.png" alt="Tower">
                        </a>
                    </div>
                </div>
            `;

            const originalsComponentDiv = document.createElement('div');
            originalsComponentDiv.innerHTML = OriginalsComponent;
            originalsElement = originalsComponentDiv.firstElementChild;

            if (originalsElement) {
                // Popular Sports'dan sonra ekle
                const bannerSection = mainContent.querySelector('#last-bets-wrapper');
                if (bannerSection && originalsElement) {
                    bannerSection.parentNode.insertBefore(originalsElement, bannerSection);
                }
            }
        }
        const originalsLinks = document.querySelectorAll('.originals-container a');
        originalsLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const url = link.getAttribute('href');
                window.history.pushState("", "", url);
                window.history.pushState("", "", url);
                window.history.go(-1);
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 150);
            });
        });
    }

    function hideOriginalGames() {
        const originals = document.querySelector('.originals-container');
        if (originals) {
            originals.style.display = 'none';
        }
    }

    // İlk yükleme için DOM hazır olana kadar bekle
    function initializePage() {
        waitForElement('#main__content', 3000).then(() => {
            if (
                currentPath == '/en/' ||
                currentPath == '/tr/' ||
                currentPath == '/en' ||
                currentPath == '/tr' ||
                currentPath == '/en/?modal=login' ||
                currentPath == '/tr/?modal=login' ||
                currentPath == '/en/?modal=register' ||
                currentPath == '/tr/?modal=register' ||
                currentPath == '/tr/?modal=wallet-settings' ||
                currentPath == '/en/?modal=wallet-settings' ||
                currentPath == '/tr/?modal=wallet' ||
                currentPath == '/en/?modal=wallet') {
                // Ana Sayfa Yüklemesi
                // initFakeBets();
                //showBannerSlider();
                //showPopularSports();
                showBannerSection();
                showFeatures();
                showPaymentSection();
                //showBrands();
                setTimeout(() => {
                    moveTopGamesAfterBrands();
                }, 100);
                initCoinAnimation();
                showWelcome();

                removeHeaderContainerClass();
                //hideSlider();
                // hideTopGames();
                hideBannersWrapper();
                hideVIPBanner();
                hideMiniSliderWrapper();
                //showOriginalGames(); // Yeni eklenen

            } else if (currentPath == '/en/vip' ||
        currentPath == '/tr/vip'  ||
        currentPath == '/en/vip/' ||
        currentPath == '/tr/vip/' ||
        currentPath == '/en/vip?modal=login' ||
        currentPath == '/tr/vip?modal=login' ||
        currentPath == '/en/vip?modal=register' ||
        currentPath == '/tr/vip?modal=register' ||
        currentPath == '/en/vip?modal=wallet-settings' ||
        currentPath == '/tr/vip?modal=wallet-settings' ||
        currentPath == '/en/vip?modal=wallet' ||
        currentPath == '/tr/vip?modal=wallet') {
        // VIP Sayfası Yüklemesi
        showVIPBanner(); // VIP banner'ını göster
        showVipPageSystemSection();
        // section__title--center başlığını içeren col-12'yi sil
       

        // Ana sayfa bileşenlerini gizle
        hidePopularSports();
        //hideBannerSlider();
        hideBannerSection();
        hideFeatures();
        hidePaymentSection();
        hideWelcome();
        hideBrands();
        // hideBackgroundSplit();

        // Genel gizlemeler
        removeHeaderContainerClass();
        //hideSlider();
        hideTopGames();
        hideBannersWrapper();
    } else {
        // Diğer Tüm Sayfalar Yüklemesi
        //hideBannerSlider();
        hideBannerSection();
        hideFeatures();
        hidePaymentSection();
        hideWelcome();
        hideBrands();
        // hideBackgroundSplit();
        removeHeaderContainerClass();
        //hideSlider();
        // hideTopGames();
        // hideBannersWrapper();
        hideVIPBanner();
        hidePopularSports();
        //hideOriginalGames(); // Yeni eklenen
            }
        }).catch(() => {
            // Element bulunamazsa, kısa bir gecikme ile tekrar dene
            setTimeout(initializePage, 200);
        });
    }

    // DOMContentLoaded veya mevcut DOM durumuna göre başlat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePage);
    } else {
        // DOM zaten yüklüyse hemen çalıştır
        initializePage();
    }


    function updateSidebarLinks() {
        const sidebarLinks = document.querySelectorAll('.sidebar__link');

        sidebarLinks.forEach((link, index) => {
            // Mevcut içeriği sakla
            const currentContent = link.innerHTML;

            // SVG ikonlarını oluştur
            const casinoSvg = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3333 3.52C19.0833 1.36 15.9167 0 12.5 0C9.08333 0 5.91667 1.36 3.66667 3.52C1.41667 5.68 0 8.72 0 12C0 15.28 1.41667 18.32 3.66667 20.48C5.91667 22.64 9.08333 24 12.5 24C15.9167 24 19.0833 22.64 21.3333 20.48C23.5833 18.32 25 15.28 25 12C25 8.72 23.5833 5.68 21.3333 3.52ZM20.75 5.28C22.1667 6.88 23.1667 8.96 23.3333 11.2H21.6667C21.5 9.36 20.75 7.68 19.5833 6.4L20.75 5.28ZM11.6667 1.68V3.28C9.75 3.44 8 4.16 6.66667 5.28L5.5 4.08C7.16667 2.72 9.33333 1.84 11.6667 1.68ZM4.25 18.72C2.83333 17.12 1.83333 15.04 1.66667 12.8H3.33333C3.5 14.64 4.25 16.32 5.41667 17.6L4.25 18.72ZM3.41667 11.2H1.75C1.91667 8.96 2.83333 6.88 4.33333 5.28L5.5 6.4C4.33333 7.68 3.58333 9.36 3.41667 11.2ZM11.6667 22.32C9.33333 22.16 7.16667 21.28 5.5 19.84L6.66667 18.72C8.08333 19.84 9.83333 20.56 11.6667 20.72V22.32ZM12.5 16.8C12.25 16.8 12 16.72 11.8333 16.48L8.5 12.48C8.25 12.16 8.25 11.76 8.5 11.52L11.8333 7.52C12.1667 7.12 12.8333 7.12 13.1667 7.52L16.5 11.52C16.75 11.84 16.75 12.24 16.5 12.48L13.1667 16.48C13 16.72 12.75 16.8 12.5 16.8ZM13.3333 22.32V20.72C15.25 20.56 17 19.84 18.3333 18.72L19.5 19.84C17.8333 21.28 15.6667 22.16 13.3333 22.32ZM18.3333 5.28C16.9167 4.16 15.1667 3.44 13.3333 3.28V1.68C15.6667 1.84 17.8333 2.72 19.5 4.16L18.3333 5.28ZM20.75 18.72L19.5 17.6C20.6667 16.24 21.4167 14.56 21.5833 12.8H23.25C23.0833 15.04 22.1667 17.12 20.75 18.72Z"/>
            </svg>`;

            const sportsSvg = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 0C5.15877 0 0 5.15867 0 11.5004C0 17.8416 5.15869 23 11.5 23C17.8416 23 23 17.8417 23 11.5004C23 5.15867 17.8416 0 11.5 0ZM4.11535 19.2193C2.08041 17.272 0.809169 14.5323 0.809169 11.5004C0.809169 11.4364 0.812755 11.374 0.813899 11.3112L3.79169 12.3365L5.87523 17.7074L4.11535 19.2193ZM6.55324 3.4442L11.9601 1.49892L15.8306 5.10969L12.6501 9.6633L6.73338 8.53886L6.55324 3.4442ZM18.6406 19.4481C18.4169 19.6496 18.1846 19.8412 17.9452 20.0233L13.5004 21.9222L10.5889 18.8878L14.368 14.6347L19.4165 15.2557L18.6406 19.4481ZM20.0645 5.1077C21.3999 6.89199 22.1917 9.10531 22.1917 11.5003C22.1917 11.5643 22.1877 11.628 22.1866 11.6915L21.5841 11.5391L19.7658 6.4113L20.0645 5.1077Z"/>
            </svg>`;

            // İlk link için casino ikonu, ikinci link için sports ikonu
            if (index === 0) {
                link.innerHTML = casinoSvg + currentContent;
            } else if (index === 1) {
                link.innerHTML = sportsSvg + currentContent;
            }
        });
    }

    //updateSidebarLinks();

    function replaceEbetlabWithPlayico() {
        // Sadece metin nodlarını tara
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while (node = walker.nextNode()) {
            // script ve style taglerini atla
            if (node.parentElement &&
                (node.parentElement.tagName === 'SCRIPT' ||
                    node.parentElement.tagName === 'STYLE')) {
                continue;
            }

            // Hem "Ebetlab" hem de "ebetlab" için kontrol et
            if (node.nodeValue.match(/ebetlab/i)) {
                node.nodeValue = node.nodeValue.replace(/ebetlab/gi, 'Playico');
            }
        }

        // Sadece görünür attribute'ları değiştir (alt ve title)
        const elements = document.querySelectorAll('[alt*="ebetlab" i], [title*="ebetlab" i]');
        elements.forEach(el => {
            ['alt', 'title'].forEach(attr => {
                if (el.hasAttribute(attr)) {
                    el.setAttribute(attr, el.getAttribute(attr).replace(/ebetlab/gi, 'Playico'));
                }
            });
        });
    }

    // replaceEbetlabWithPlayico();

    // Sayfa ilk yüklendiğinde genel ayarlar (bu blok eskisi gibi kalabilir veya kaldırılabilir, çünkü artık yukarıda ele alınıyor)
    // if (localStorage.getItem('sliderHidden') === 'true') {
    //     removeHeaderContainerClass();
    //     hideSlider();
    //     hideTopGames();
    //     hideBannersWrapper();
    // }

    // URL değişikliklerini izle (History API)
    let lastUrl = location.href;

    // Debounce fonksiyonu - çok sık tetiklenmeyi önler
    let urlCheckTimeout;
    function debouncedUrlCheck() {
        clearTimeout(urlCheckTimeout);
        urlCheckTimeout = setTimeout(() => {
            const url = location.href;
            if (url !== lastUrl) {
                lastUrl = url;
            updateWelcomeTexts();
            updatePaymentTexts();
            //updateFeaturesTexts();
            updateBannerTexts();
            //updateSliderTexts();
            updateVIPBannerTexts();
            // Ana sayfa bileşenlerini seç
            const welcome = document.querySelector('.welcome-container');
            const brands = document.querySelector('.brand-container');
            const payment = document.querySelector('.payment-container');
            const features = document.querySelector('.features-container');
            const banner = document.querySelector('.banner-container');
            const bannerSlider = document.querySelector('.banner-slider');
            const lastBets = document.querySelector('#last-bets-wrapper');
            const popularSports = document.querySelector('.popular-sports-container');
            const originalGames = document.querySelector('.originals-container');

            // URL'den path kısmını al
            const urlPath = new URL(url).pathname + new URL(url).search;
            window.urlPath = urlPath;

            // Ana sayfa kontrolleri
            if (urlPath === '/en/' ||
                urlPath === '/tr/' ||
                urlPath === '/tr' ||
                urlPath === '/en' ||
                urlPath === '/en/?modal=login' ||
                urlPath === '/tr/?modal=login' ||
                urlPath === '/en/?modal=register' ||
                urlPath === '/tr/?modal=register' ||
                urlPath === '/en/?modal=wallet-settings' ||
                urlPath === '/tr/?modal=wallet-settings' ||
                urlPath === '/tr/?modal=wallet' ||
                urlPath === '/en/?modal=wallet') {
                // Ana sayfa işlemleri
                if (!lastBets || lastBets.style.display == 'none') {
                    // initFakeBets();
                }
                if (!bannerSlider || bannerSlider.style.display == 'none') {
                    //showBannerSlider();
                    //showPopularSports();
                }
                if (!originalGames || originalGames.style.display == 'none') {
                    //showOriginalGames();
                }
                // #main__content'in varlığını kontrol et
                const mainContent = document.querySelector('#main__content');
                if (!mainContent) {
                    // Element yoksa kısa bir süre bekle ve tekrar dene
                    setTimeout(() => debouncedUrlCheck(), 200);
                    return;
                }

                if (!banner || banner.style.display == 'none') {
                    showBannerSection();
                }
                if (!features || features.style.display == 'none') {
                    showFeatures();
                }
                if (!payment || payment.style.display == 'none') {
                    showPaymentSection();
                    initCoinAnimation();
                }
                if (!brands || brands.style.display == 'none') {
                    //showBrands();
                }
                if (!welcome || welcome.style.display == 'none') {
                    showWelcome();
                }
                removeHeaderContainerClass();
                hideSlider();
                // hideTopGames();
                hideBannersWrapper();
                hideVIPBanner();
                hideVipPageSystemSection();
                hideMiniSliderWrapper();

                // Features container'ı bul
            } else if (urlPath === "/en/vip/" ||
                urlPath === "/tr/vip/" ||
                urlPath === "/en/vip" ||
                urlPath === "/tr/vip" ||
                urlPath === "/en/vip?modal=login" ||
                urlPath === "/tr/vip?modal=login" ||
                urlPath === "/en/vip?modal=register" ||
                urlPath === "/tr/vip?modal=register" ||
                urlPath === "/en/vip?modal=wallet-settings" ||
                urlPath === "/tr/vip?modal=wallet-settings") {
                // VIP sayfası işlemleri

                showVIPBanner();
                showVipPageSystemSection();
              
                // Ana sayfa bileşenlerini gizle
                if (welcome) welcome.style.display = 'none';
                if (brands) brands.style.display = 'none';
                if (payment) payment.style.display = 'none';
                if (features) features.style.display = 'none';
                if (banner) banner.style.display = 'none';
                if (bannerSlider) bannerSlider.style.display = 'none';
                if (lastBets) lastBets.style.display = 'none';
                if (popularSports) popularSports.style.display = 'none';
                if (originalGames) originalGames.style.display = 'none';
            } else {
                // Diğer sayfalar için
                //hideOriginalGames();
                //hideBannerSlider();
                hideBannerSection();
                hideFeatures();
                hidePaymentSection();
                hideWelcome();
                hideBrands();
                hidePopularSports();
                removeHeaderContainerClass();
                hideSlider();
                hideVIPBanner();
                hideVipPageSystemSection();
                // hideTopGames();
                // hideBannersWrapper();
                //hideOriginalGames(); // Yeni eklenen
            }
            
            // Ek kontrol - ana sayfa için
            if (url == '/en/' || url == '/tr/' || url == '/en' || url == '/tr') {
                // initFakeBets();
                //showBannerSlider();
                //showPopularSports();
                showBannerSection();
                showFeatures();
                showPaymentSection();
                //showBrands();
                showWelcome();
                // showBackgroundSplit();
                initCoinAnimation();
                hideSlider();
                // hideTopGames();
                hideBannersWrapper();
            }
        }
        }, 100); // 100ms debounce
    }

    // MutationObserver'ı daha spesifik hale getir - sadece #main__content değişikliklerini izle
    const mainContentObserver = new MutationObserver((mutations) => {
        // Sadece #main__content içinde değişiklik varsa kontrol et
        const hasMainContentChange = mutations.some(mutation => {
            const target = mutation.target;
            return target.id === 'main__content' || 
                   target.closest('#main__content') || 
                   Array.from(mutation.addedNodes).some(node => 
                       node.nodeType === 1 && (node.id === 'main__content' || node.closest('#main__content'))
                   );
        });
        
        if (hasMainContentChange) {
            debouncedUrlCheck();
        }
    });

    // İlk yüklemede #main__content'i bekle
    waitForElement('#main__content').then(() => {
        mainContentObserver.observe(document.querySelector('#main__content'), { 
            childList: true, 
            subtree: false // Sadece direkt çocukları izle
        });
        debouncedUrlCheck(); // İlk kontrolü yap
    }).catch(() => {
        // Element bulunamazsa, document.body'yi izle ama daha az sıklıkla
        const fallbackObserver = new MutationObserver(() => {
            debouncedUrlCheck();
        });
        fallbackObserver.observe(document.body, { 
            childList: true, 
            subtree: false 
        });
    });

    function updateSidebarNavIcons() {
        // Tüm sidebar nav li elementlerini seç
        const sidebarNavItems = document.querySelectorAll('.sidebar__nav li');

        // İlk iki öğe için SVG'leri güncelle
        if (sidebarNavItems.length >= 2) {
            // İlk öğe için ev/ana sayfa ikonu
            const firstLink = sidebarNavItems[0].querySelector('a');
            if (firstLink) {
                const oldSvg = firstLink.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                firstLink.insertAdjacentHTML('afterbegin', `
                    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.63789 26.2827V22.0019C9.63789 20.9091 10.5638 20.0232 11.7059 20.0232H15.8811C16.4295 20.0232 16.9556 20.2317 17.3434 20.6028C17.7312 20.9738 17.9491 21.4771 17.9491 22.0019V26.2827C17.9456 26.737 18.1318 27.1738 18.4664 27.4963C18.8009 27.8187 19.2562 28 19.731 28H22.5795C23.9098 28.0033 25.1868 27.5 26.1287 26.6011C27.0706 25.7023 27.6 24.4818 27.6 23.209V11.0136C27.6 9.98544 27.1236 9.01018 26.2993 8.35054L16.6094 0.946217C14.9238 -0.352014 12.5088 -0.310097 10.8735 1.04577L1.40471 8.35054C0.541455 8.99073 0.025497 9.96889 0 11.0136V23.1965C0 25.8494 2.24778 28 5.02055 28H7.80396C8.7902 28 9.59172 27.2387 9.59887 26.2951L9.63789 26.2827Z" fill="#9A9CA4"/>
                    </svg>
                `);
            }

            // İkinci öğe için spor ikonu
            const secondLink = sidebarNavItems[1].querySelector('a');
            if (secondLink) {
                const oldSvg = secondLink.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                secondLink.insertAdjacentHTML('afterbegin', `
                    <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.332 5.57273H8.61615L7.17895 0H21.7692L20.332 5.57273Z" fill="#9A9CA4"/>
                        <path d="M20.3644 5.07171L14.5809 26L8.6362 4.94133L20.3644 5.07171Z" fill="#100D08" class="vip-svg" />
                        <path d="M8.6362 4.94133L14.5809 26L0 4.94133H8.6362Z" fill="#9A9CA4"/>
                        <path d="M20.3644 5.07171L29 5.07171L14.5809 26L20.3644 5.07171Z" fill="#9A9CA4"/>
                    </svg>
                `);
            }

            const thirdLink = sidebarNavItems[2].querySelector('a');
            if (thirdLink) {
                const oldSvg = thirdLink.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                thirdLink.insertAdjacentHTML('afterbegin', `
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3333 3.52C19.0833 1.36 15.9167 0 12.5 0C9.08333 0 5.91667 1.36 3.66667 3.52C1.41667 5.68 0 8.72 0 12C0 15.28 1.41667 18.32 3.66667 20.48C5.91667 22.64 9.08333 24 12.5 24C15.9167 24 19.0833 22.64 21.3333 20.48C23.5833 18.32 25 15.28 25 12C25 8.72 23.5833 5.68 21.3333 3.52ZM20.75 5.28C22.1667 6.88 23.1667 8.96 23.3333 11.2H21.6667C21.5 9.36 20.75 7.68 19.5833 6.4L20.75 5.28ZM11.6667 1.68V3.28C9.75 3.44 8 4.16 6.66667 5.28L5.5 4.08C7.16667 2.72 9.33333 1.84 11.6667 1.68ZM4.25 18.72C2.83333 17.12 1.83333 15.04 1.66667 12.8H3.33333C3.5 14.64 4.25 16.32 5.41667 17.6L4.25 18.72ZM3.41667 11.2H1.75C1.91667 8.96 2.83333 6.88 4.33333 5.28L5.5 6.4C4.33333 7.68 3.58333 9.36 3.41667 11.2ZM11.6667 22.32C9.33333 22.16 7.16667 21.28 5.5 19.84L6.66667 18.72C8.08333 19.84 9.83333 20.56 11.6667 20.72V22.32ZM12.5 16.8C12.25 16.8 12 16.72 11.8333 16.48L8.5 12.48C8.25 12.16 8.25 11.76 8.5 11.52L11.8333 7.52C12.1667 7.12 12.8333 7.12 13.1667 7.52L16.5 11.52C16.75 11.84 16.75 12.24 16.5 12.48L13.1667 16.48C13 16.72 12.75 16.8 12.5 16.8ZM13.3333 22.32V20.72C15.25 20.56 17 19.84 18.3333 18.72L19.5 19.84C17.8333 21.28 15.6667 22.16 13.3333 22.32ZM18.3333 5.28C16.9167 4.16 15.1667 3.44 13.3333 3.28V1.68C15.6667 1.84 17.8333 2.72 19.5 4.16L18.3333 5.28ZM20.75 18.72L19.5 17.6C20.6667 16.24 21.4167 14.56 21.5833 12.8H23.25C23.0833 15.04 22.1667 17.12 20.75 18.72Z"/>
            </svg>
                `);
            }

            const fourthLink = sidebarNavItems[3].querySelector('a');
            if (fourthLink) {
                const oldSvg = fourthLink.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                fourthLink.insertAdjacentHTML('afterbegin', `
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3333 3.52C19.0833 1.36 15.9167 0 12.5 0C9.08333 0 5.91667 1.36 3.66667 3.52C1.41667 5.68 0 8.72 0 12C0 15.28 1.41667 18.32 3.66667 20.48C5.91667 22.64 9.08333 24 12.5 24C15.9167 24 19.0833 22.64 21.3333 20.48C23.5833 18.32 25 15.28 25 12C25 8.72 23.5833 5.68 21.3333 3.52ZM20.75 5.28C22.1667 6.88 23.1667 8.96 23.3333 11.2H21.6667C21.5 9.36 20.75 7.68 19.5833 6.4L20.75 5.28ZM11.6667 1.68V3.28C9.75 3.44 8 4.16 6.66667 5.28L5.5 4.08C7.16667 2.72 9.33333 1.84 11.6667 1.68ZM4.25 18.72C2.83333 17.12 1.83333 15.04 1.66667 12.8H3.33333C3.5 14.64 4.25 16.32 5.41667 17.6L4.25 18.72ZM3.41667 11.2H1.75C1.91667 8.96 2.83333 6.88 4.33333 5.28L5.5 6.4C4.33333 7.68 3.58333 9.36 3.41667 11.2ZM11.6667 22.32C9.33333 22.16 7.16667 21.28 5.5 19.84L6.66667 18.72C8.08333 19.84 9.83333 20.56 11.6667 20.72V22.32ZM12.5 16.8C12.25 16.8 12 16.72 11.8333 16.48L8.5 12.48C8.25 12.16 8.25 11.76 8.5 11.52L11.8333 7.52C12.1667 7.12 12.8333 7.12 13.1667 7.52L16.5 11.52C16.75 11.84 16.75 12.24 16.5 12.48L13.1667 16.48C13 16.72 12.75 16.8 12.5 16.8ZM13.3333 22.32V20.72C15.25 20.56 17 19.84 18.3333 18.72L19.5 19.84C17.8333 21.28 15.6667 22.16 13.3333 22.32ZM18.3333 5.28C16.9167 4.16 15.1667 3.44 13.3333 3.28V1.68C15.6667 1.84 17.8333 2.72 19.5 4.16L18.3333 5.28ZM20.75 18.72L19.5 17.6C20.6667 16.24 21.4167 14.56 21.5833 12.8H23.25C23.0833 15.04 22.1667 17.12 20.75 18.72Z" fill="#999EA7"/>
                    </svg>
                `);
            }

            const fifthLink = sidebarNavItems[4].querySelector('a');
            if (fifthLink) {
                const oldSvg = fifthLink.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                fifthLink.insertAdjacentHTML('afterbegin', `
                    <svg width="23" height="23" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 0C5.15877 0 0 5.15867 0 11.5004C0 17.8416 5.15869 23 11.5 23C17.8416 23 23 17.8417 23 11.5004C23 5.15867 17.8416 0 11.5 0ZM4.11535 19.2193C2.08041 17.272 0.809169 14.5323 0.809169 11.5004C0.809169 11.4364 0.812755 11.374 0.813899 11.3112L3.79169 12.3365L5.87523 17.7074L4.11535 19.2193ZM6.55324 3.4442L11.9601 1.49892L15.8306 5.10969L12.6501 9.6633L6.73338 8.53886L6.55324 3.4442ZM18.6406 19.4481C18.4169 19.6496 18.1846 19.8412 17.9452 20.0233L13.5004 21.9222L10.5889 18.8878L14.368 14.6347L19.4165 15.2557L18.6406 19.4481ZM20.0645 5.1077C21.3999 6.89199 22.1917 9.10531 22.1917 11.5003C22.1917 11.5643 22.1877 11.628 22.1866 11.6915L21.5841 11.5391L19.7658 6.4113L20.0645 5.1077Z" fill="#999EA7"/>
                    </svg>
                `);
            }

            const sixthLink = sidebarNavItems[5].querySelector('a');
            if (sixthLink) {
                const oldSvg = sixthLink.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                sixthLink.insertAdjacentHTML('afterbegin', `
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6669 6.13443L10.165 5.77922C9.44862 5.27225 8.59264 5 7.71504 5H7.10257C6.69838 5 6.29009 5.02549 5.90915 5.16059C3.52645 6.00566 1.88749 9.09504 2.00604 16.1026C2.02992 17.5145 2.3603 19.075 3.63423 19.6842C4.03121 19.8741 4.49667 20 5.02671 20C5.66273 20 6.1678 19.8187 6.55763 19.5632C6.96641 19.2953 7.32633 18.9471 7.68612 18.599C8.13071 18.1688 8.57511 17.7389 9.11125 17.4609C9.69519 17.1581 10.3434 17 11.0011 17H12.9989C13.6566 17 14.3048 17.1581 14.8888 17.4609C15.4249 17.7389 15.8693 18.1688 16.3139 18.599C16.6737 18.9471 17.0336 19.2953 17.4424 19.5632C17.8322 19.8187 18.3373 20 18.9733 20C19.5033 20 19.9688 19.8741 20.3658 19.6842C21.6397 19.075 21.9701 17.5145 21.994 16.1026C22.1125 9.09503 20.4735 6.00566 18.0908 5.16059C17.7099 5.02549 17.3016 5 16.8974 5H16.2849C15.4074 5 14.5514 5.27225 13.8351 5.77922L13.3332 6.13441C12.9434 6.41029 12.4776 6.55844 12 6.55844C11.5225 6.55844 11.0567 6.41029 10.6669 6.13443ZM16.75 9C17.1642 9 17.5 9.33579 17.5 9.75C17.5 10.1642 17.1642 10.5 16.75 10.5C16.3358 10.5 16 10.1642 16 9.75C16 9.33579 16.3358 9 16.75 9ZM7.5 9.25C7.91421 9.25 8.25 9.58579 8.25 10V10.75H9C9.41421 10.75 9.75 11.0858 9.75 11.5C9.75 11.9142 9.41421 12.25 9 12.25H8.25V13C8.25 13.4142 7.91421 13.75 7.5 13.75C7.08579 13.75 6.75 13.4142 6.75 13V12.25H6C5.58579 12.25 5.25 11.9142 5.25 11.5C5.25 11.0858 5.58579 10.75 6 10.75H6.75V10C6.75 9.58579 7.08579 9.25 7.5 9.25ZM19 11.25C19 11.6642 18.6642 12 18.25 12C17.8358 12 17.5 11.6642 17.5 11.25C17.5 10.8358 17.8358 10.5 18.25 10.5C18.6642 10.5 19 10.8358 19 11.25ZM15.25 12C15.6642 12 16 11.6642 16 11.25C16 10.8358 15.6642 10.5 15.25 10.5C14.8358 10.5 14.5 10.8358 14.5 11.25C14.5 11.6642 14.8358 12 15.25 12ZM17.5 12.75C17.5 12.3358 17.1642 12 16.75 12C16.3358 12 16 12.3358 16 12.75C16 13.1642 16.3358 13.5 16.75 13.5C17.1642 13.5 17.5 13.1642 17.5 12.75Z" fill="#9a9ca4"/> </g>
                    </svg>
                `);
            }

            const seventhLink = sidebarNavItems[6].querySelector('a');
            if (seventhLink) {
                const oldSvg = seventhLink.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                seventhLink.insertAdjacentHTML('afterbegin', `
                    <svg width="19" height="26" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5621 0.370508L18.6285 5.43159C19.0853 5.8879 19.1209 6.60627 18.7349 7.10335L18.6296 7.22273L13.5632 12.2958C13.0688 12.7908 12.2669 12.7913 11.7719 12.297C11.315 11.8407 11.2794 11.1223 11.6655 10.6251L11.7707 10.5057L14.672 7.60092L1.26661 7.60094C0.617047 7.60094 0.0816878 7.11198 0.00852197 6.48204L0 6.33433C0 5.68477 0.488962 5.14941 1.1189 5.07624L1.26661 5.06772L14.6809 5.06771L11.7718 2.16271C11.315 1.70636 11.2795 0.987919 11.6655 0.490835L11.7709 0.371455C12.2272 -0.0853788 12.9456 -0.120881 13.4427 0.265204L13.5621 0.370508ZM18.9874 18.8527L18.9959 19.0004C18.9959 19.65 18.507 20.1853 17.877 20.2585L17.7293 20.267L4.3238 20.267L7.22911 23.1708C7.68592 23.6272 7.72138 24.3456 7.33527 24.8427L7.22995 24.9621C6.77358 25.4189 6.05513 25.4543 5.55807 25.0682L5.4387 24.9629L0.37226 19.9012C-0.0845471 19.4449 -0.120008 18.7264 0.266106 18.2294L0.371418 18.11L5.43786 13.0388C5.93227 12.5439 6.73424 12.5435 7.22911 13.0379C7.68592 13.4943 7.72138 14.2128 7.33527 14.7098L7.22995 14.8292L4.32886 17.7338L17.7293 17.7338C18.3789 17.7338 18.9142 18.2228 18.9874 18.8527Z" fill="#9A9CA4"/>
                    </svg>
                `);
            }

            const Link8 = sidebarNavItems[7].querySelector('a');
            if (Link8) {
                const oldSvg = Link8.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                Link8.insertAdjacentHTML('afterbegin', `
                    <svg width="26" height="28" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.12266 22.0405C5.51707 22.0405 5.02637 22.593 5.02637 23.2741C5.02637 23.9552 5.51738 24.5077 6.12266 24.5077C6.72793 24.5077 7.21895 23.9555 7.21895 23.2741C7.21895 22.5928 6.72824 22.0405 6.12266 22.0405Z" fill="#999EA7"/>
                        <path d="M15.1856 22.0405C14.5801 22.0405 14.0894 22.593 14.0894 23.2741C14.0894 23.9552 14.5801 24.5077 15.1856 24.5077C15.7912 24.5077 16.2819 23.9555 16.2819 23.2741C16.2819 22.5928 15.7912 22.0405 15.1856 22.0405Z" fill="#999EA7"/>
                        <path d="M10.6544 22.0405C10.0488 22.0405 9.55811 22.593 9.55811 23.2741C9.55811 23.9552 10.0491 24.5077 10.6544 24.5077C11.26 24.5077 11.7507 23.9555 11.7507 23.2741C11.7507 22.5928 11.26 22.0405 10.6544 22.0405Z" fill="#999EA7"/>
                        <path d="M23.1382 8.2354C23.4616 8.2354 23.7542 8.08799 23.9662 7.84949C24.1782 7.61099 24.3092 7.28168 24.3092 6.91782C24.3092 6.19016 23.7849 5.60059 23.1382 5.60059C22.4915 5.60059 21.9673 6.1905 21.9673 6.91782C21.9673 7.64548 22.4915 8.2354 23.1382 8.2354Z" fill="#999EA7"/>
                        <path d="M23.1381 9.09571C22.8927 9.09571 22.6147 9.25456 22.6147 9.49995V19.0572C22.6147 19.3462 22.849 19.5805 23.138 19.5805C23.4271 19.5805 23.6614 19.3462 23.6614 19.0572V9.49993C23.6614 9.25478 23.3832 9.09571 23.1381 9.09571Z" fill="#999EA7"/>
                        <path d="M20.5179 0H0.612194C0.273995 0 0 0.308309 0 0.688863V25.6348C0 26.7394 0.895431 27.6348 2 27.6348H19.1304C20.235 27.6348 21.1304 26.7394 21.1304 25.6348V0.688863C21.1301 0.308309 20.8561 0 20.5179 0ZM14.306 1.68006C14.8151 1.68006 15.2277 2.14426 15.2277 2.71714C15.2277 3.29002 14.8151 3.75422 14.306 3.75422C13.797 3.75422 13.3844 3.29002 13.3844 2.71714C13.3844 2.14426 13.797 1.68006 14.306 1.68006ZM10.6543 0.862626C11.5642 0.862626 12.302 1.69285 12.302 2.71672C12.302 3.74059 11.5642 4.57082 10.6543 4.57082C9.74438 4.57082 9.00656 3.74059 9.00656 2.71672C9.00656 1.69285 9.74438 0.862626 10.6543 0.862626ZM7.00257 1.68006C7.51163 1.68006 7.92423 2.14426 7.92423 2.71714C7.92423 3.29002 7.51163 3.75422 7.00257 3.75422C6.49351 3.75422 6.08091 3.29002 6.08091 2.71714C6.08128 2.14426 6.49382 1.68006 7.00257 1.68006ZM6.1233 25.2232C5.16685 25.2232 4.39171 24.351 4.39171 23.2748C4.39171 22.1985 5.16716 21.3263 6.1233 21.3263C7.07975 21.3263 7.8549 22.1989 7.8549 23.2748C7.8549 24.3506 7.07975 25.2232 6.1233 25.2232ZM10.6543 25.2232C9.69785 25.2232 8.9227 24.351 8.9227 23.2748C8.9227 22.1985 9.69785 21.3263 10.6543 21.3263C11.6107 21.3263 12.3859 22.1989 12.3859 23.2748C12.3859 24.3506 11.6107 25.2232 10.6543 25.2232ZM15.1853 25.2232C14.2288 25.2232 13.4537 24.351 13.4537 23.2748C13.4537 22.1985 14.2288 21.3263 15.1853 21.3263C16.1417 21.3263 16.9169 22.1989 16.9169 23.2748C16.9168 24.3506 16.1417 25.2232 15.1853 25.2232ZM19.7941 18.6869H3.51452C2.40995 18.6869 1.51451 17.7915 1.51451 16.6869V7.51598C1.51451 6.41141 2.40994 5.51598 3.51451 5.51598H17.794C18.8986 5.51598 19.794 6.41141 19.794 7.51598V18.6869C19.794 18.6869 19.794 18.6869 19.7941 18.6869Z" fill="#999EA7"/>
                        <path d="M7.00231 6.69977C7.00231 6.6996 7.00217 6.69946 7.002 6.69946H4.26221C3.15764 6.69946 2.26221 7.59489 2.26221 8.69946V15.4855C2.26221 16.5901 3.15764 17.4855 4.26221 17.4855H5.00231C6.10688 17.4855 7.00231 16.5901 7.00231 15.4855V6.69977ZM6.39104 11.1564C6.39036 11.1564 6.38981 11.1569 6.38982 11.1576C6.38994 11.1645 6.39104 11.1704 6.39104 11.1774C6.39104 12.1313 5.43482 12.6284 5.25544 13.5878C5.15432 14.1287 4.79981 14.7037 4.24956 14.7037C3.85741 14.7037 3.5049 14.4055 3.59991 14.025C3.81573 13.1608 4.64918 12.5485 5.13076 11.9914C5.33197 11.7586 5.09628 11.5456 4.7886 11.5456C4.28493 11.5456 4.16512 11.3114 3.65461 11.2069C3.4799 11.1712 3.32816 11.3157 3.32816 11.4941V11.5751C3.32816 11.7008 3.2263 11.8026 3.10066 11.8026C2.97502 11.8026 2.87317 11.7008 2.87317 11.5751V10.5908C2.87317 10.4651 2.97502 10.3633 3.10066 10.3633H3.3241C3.32634 10.3633 3.32816 10.3651 3.32816 10.3674C3.32816 10.3695 3.32992 10.3713 3.33205 10.3714C4.1342 10.4253 4.19318 10.7521 4.7886 10.7521C5.31094 10.7521 5.52478 10.4994 5.99676 10.4013C6.21128 10.3567 6.39111 10.5406 6.39111 10.7597V11.1563C6.39111 11.1564 6.39108 11.1564 6.39104 11.1564Z" fill="#999EA7"/>
                        <path d="M23.5649 20.2771C22.5944 20.2771 21.8076 21.0638 21.8076 22.0343V23.9999C21.8076 24.9704 22.5944 25.7571 23.5649 25.7571C24.9098 25.7571 25.9998 24.5304 25.9998 23.0173C26 21.5039 24.9098 20.2771 23.5649 20.2771Z" fill="#999EA7"/>
                        <path d="M18.743 6.69977C18.743 6.6996 18.7429 6.69946 18.7427 6.69946H16.0029C14.8984 6.69946 14.0029 7.59489 14.0029 8.69946V15.4855C14.0029 16.5901 14.8984 17.4855 16.0029 17.4855H16.743C17.8476 17.4855 18.743 16.5901 18.743 15.4855V6.69977ZM18.1318 11.1558C18.1318 11.1561 18.1314 11.1564 18.131 11.1564C18.1307 11.1564 18.1305 11.1567 18.1305 11.157C18.1306 11.1642 18.1318 11.1702 18.1318 11.1774C18.1318 12.1313 17.1756 12.6284 16.9962 13.5877C16.895 14.1286 16.5405 14.7037 15.9902 14.7037C15.5981 14.7037 15.2456 14.4055 15.3406 14.025C15.5564 13.1608 16.3898 12.5485 16.8714 11.9914C17.0726 11.7586 16.8369 11.5456 16.5293 11.5456C16.0256 11.5456 15.9058 11.3114 15.3953 11.2069C15.2206 11.1712 15.0688 11.3157 15.0688 11.4941V11.5751C15.0688 11.7008 14.967 11.8026 14.8413 11.8026C14.7157 11.8026 14.6138 11.7008 14.6138 11.5751V10.5908C14.6138 10.4651 14.7157 10.3633 14.8413 10.3633H15.0648C15.067 10.3633 15.0688 10.3651 15.0688 10.3674C15.0688 10.3695 15.0706 10.3713 15.0727 10.3714C15.8749 10.4253 15.9342 10.7521 16.5293 10.7521C17.0516 10.7521 17.2654 10.4994 17.7374 10.4013C17.9519 10.3567 18.1318 10.5406 18.1318 10.7597V11.1558Z" fill="#999EA7"/>
                        <path d="M12.8729 8.69947C12.8729 7.5949 11.9775 6.69946 10.8729 6.69946H10.1328C9.02824 6.69946 8.13281 7.59489 8.13281 8.69946V15.4855C8.13281 16.5901 9.02824 17.4855 10.1328 17.4855H10.8729C11.9775 17.4855 12.8729 16.5901 12.8729 15.4855V8.69947ZM12.262 11.1557C12.262 11.1561 12.2616 11.1564 12.2612 11.1564C12.2609 11.1564 12.2607 11.1567 12.2607 11.157C12.2607 11.1642 12.262 11.1702 12.262 11.1774C12.262 12.1313 11.3058 12.6284 11.1264 13.5877C11.0252 14.1286 10.6707 14.7037 10.1204 14.7037C9.72827 14.7037 9.37575 14.4055 9.47077 14.025C9.6866 13.1608 10.52 12.5485 11.0016 11.9914C11.2028 11.7586 10.9671 11.5456 10.6595 11.5456C10.156 11.5456 10.036 11.3114 9.52546 11.2069C9.35075 11.1712 9.19901 11.3157 9.19901 11.4941V11.5751C9.19901 11.7008 9.09716 11.8026 8.97151 11.8026C8.84587 11.8026 8.74402 11.7008 8.74402 11.5751V10.5908C8.74402 10.4651 8.84587 10.3633 8.97151 10.3633H9.19495C9.19719 10.3633 9.19901 10.3651 9.19901 10.3674C9.19901 10.3695 9.20077 10.3713 9.2029 10.3714C10.0051 10.4253 10.0643 10.7521 10.6595 10.7521C11.1818 10.7521 11.3956 10.4994 11.8676 10.4013C12.0821 10.3567 12.262 10.5406 12.262 10.7597V11.1557Z" fill="#999EA7"/>
                    </svg>
                `);
            }

            const Link9 = sidebarNavItems[15].querySelector('a');
            if (Link9) {
                const oldSvg = Link9.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                Link9.insertAdjacentHTML('afterbegin', `
                    <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8235 0C18.5129 0 19.8824 1.36948 19.8824 3.05882V22.9412C19.8824 24.6305 18.5129 26 16.8235 26H3.05882C1.36948 26 0 24.6305 0 22.9412V3.05882C0 1.36948 1.36948 0 3.05882 0H16.8235ZM16.0588 21.4118H14.5294C14.1071 21.4118 13.7647 21.7541 13.7647 22.1765C13.7647 22.5988 14.1071 22.9412 14.5294 22.9412H16.0588C16.4812 22.9412 16.8235 22.5988 16.8235 22.1765C16.8235 21.7541 16.4812 21.4118 16.0588 21.4118ZM11.6109 9.17647C11.0508 9.17647 10.5099 9.36169 10.07 9.69831L9.94118 9.80379C9.48042 9.40061 8.8873 9.17647 8.27109 9.17647C7.59845 9.17647 6.95331 9.44355 6.47783 9.91903C6.00236 10.3945 5.73529 11.0396 5.73529 11.7123C5.73529 12.381 5.99936 13.0225 6.46994 13.4973L9.38534 16.5841C9.52947 16.7369 9.73085 16.8235 9.94118 16.8235C10.1515 16.8235 10.3529 16.7369 10.4972 16.5839L13.4184 13.4906C13.8828 13.0227 14.1471 12.3811 14.1471 11.7123C14.1471 11.0398 13.8797 10.3946 13.4041 9.91903C12.9285 9.44345 12.2838 9.17647 11.6109 9.17647ZM11.6109 10.7056C11.8779 10.7056 12.1341 10.8117 12.3229 11.0006C12.5115 11.1895 12.6176 11.4454 12.6176 11.7123C12.6176 11.941 12.5397 12.1618 12.3985 12.3392L12.3151 12.4319L9.94118 14.9452L7.56622 12.431L7.48795 12.3436C7.34256 12.1619 7.2648 11.9413 7.2648 11.7123C7.2648 11.4451 7.37066 11.1893 7.55941 11.0006C7.74836 10.8116 8.0042 10.7056 8.27109 10.7056C8.53809 10.7056 8.79419 10.8117 8.98259 11.0004L9.40041 11.4182L9.47238 11.4818C9.77218 11.7149 10.2057 11.6937 10.4816 11.4186L10.8993 11.0005L10.9842 10.9247C11.1614 10.7836 11.3823 10.7056 11.6109 10.7056ZM6.5 11.7123L6.50565 11.8526L6.50294 11.8143L6.5 11.7123ZM7.12179 10.3646L7.03302 10.4459L7.06938 10.4111C7.08658 10.3952 7.10404 10.3797 7.12179 10.3646ZM11.2435 9.98017L11.0629 10.0279L11.2031 9.98848L11.2435 9.98017ZM11.3467 9.96071L11.2435 9.98017L11.2637 9.9755L11.3467 9.96071ZM5.35294 3.05882H3.82353C3.40119 3.05882 3.05882 3.40119 3.05882 3.82353C3.05882 4.24586 3.40119 4.58824 3.82353 4.58824H5.35294C5.77528 4.58824 6.11765 4.24586 6.11765 3.82353C6.11765 3.40119 5.77528 3.05882 5.35294 3.05882Z" fill="#999EA7"/>
                    </svg>
                `);
            }

            const Link10 = sidebarNavItems[22].querySelector('a');
            if (Link10) {
                const oldSvg = Link10.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                Link10.insertAdjacentHTML('afterbegin', `
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 0C5.15877 0 0 5.15867 0 11.5004C0 17.8416 5.15869 23 11.5 23C17.8416 23 23 17.8417 23 11.5004C23 5.15867 17.8416 0 11.5 0ZM4.11535 19.2193C2.08041 17.272 0.809169 14.5323 0.809169 11.5004C0.809169 11.4364 0.812755 11.374 0.813899 11.3112L3.79169 12.3365L5.87523 17.7074L4.11535 19.2193ZM6.55324 3.4442L11.9601 1.49892L15.8306 5.10969L12.6501 9.6633L6.73338 8.53886L6.55324 3.4442ZM18.6406 19.4481C18.4169 19.6496 18.1846 19.8412 17.9452 20.0233L13.5004 21.9222L10.5889 18.8878L14.368 14.6347L19.4165 15.2557L18.6406 19.4481ZM20.0645 5.1077C21.3999 6.89199 22.1917 9.10531 22.1917 11.5003C22.1917 11.5643 22.1877 11.628 22.1866 11.6915L21.5841 11.5391L19.7658 6.4113L20.0645 5.1077Z" fill="#999EA7"/>
                    </svg>
                `);
            }

            const Link11 = sidebarNavItems[34].querySelector('a');
            if (Link11) {
                const oldSvg = Link11.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                Link11.insertAdjacentHTML('afterbegin', `
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_215_470)">
                        <path d="M19.6875 1.3125H15.75C15.75 0.585703 15.163 0 14.4375 0H6.5625C5.83702 0 5.25 0.585703 5.25 1.3125H1.3125C0.587016 1.3125 0 1.8982 0 2.625V5.25C0 8.14931 2.35069 10.5 5.25 10.5C5.31169 10.5 5.36911 10.4833 5.42948 10.4806C5.901 12.3277 7.34311 13.7724 9.1875 14.2505V18.375H6.5625C5.83702 18.375 5.25 18.9607 5.25 19.6875V21H15.75V19.6875C15.75 18.9607 15.163 18.375 14.4375 18.375H11.8125V14.2505C13.6569 13.7724 15.099 12.328 15.5705 10.481C15.6309 10.4833 15.6883 10.5 15.75 10.5C18.6493 10.5 21 8.14931 21 5.25V2.625C21 1.8982 20.413 1.3125 19.6875 1.3125ZM2.625 5.25V3.9375H5.25V7.875C3.80034 7.875 2.625 6.69834 2.625 5.25ZM18.375 5.25C18.375 6.69834 17.1997 7.875 15.75 7.875V3.9375H18.375V5.25Z" fill="#9C9C9C"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_215_470">
                        <rect width="21" height="21" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                `);
            }

            const Link12 = sidebarNavItems[41].querySelector('a');
            if (Link12) {
                const oldSvg = Link12.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                Link12.insertAdjacentHTML('afterbegin', `
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.86469 20.5828C5.44869 19.7374 4.22245 18.5294 3.33931 16.9997C2.45687 15.4713 2.02377 13.8067 1.99902 12.159L2.14358 12.1875C5.09262 12.7683 8.44759 11.7182 11.2053 10.0251C11.5679 9.8024 11.9235 9.56661 12.2695 9.31944C12.6827 9.83542 13.0527 10.3587 13.3508 10.875C13.7245 11.5223 14.0626 12.2923 14.3647 13.1149C13.8473 13.3653 13.3429 13.641 12.8569 13.9368C10.065 15.6356 7.68322 18.1135 6.86513 20.5815L6.86469 20.5828ZM16.2596 21.0475C13.6547 22.2776 10.7413 22.2853 8.22087 21.2588L8.28894 21.0535C8.95248 19.0517 11.0084 16.8174 13.6366 15.2182C14.0314 14.9779 14.4347 14.7547 14.8433 14.5507C15.0955 15.3805 15.314 16.2223 15.4984 17.0128C15.7377 18.0383 15.9153 18.9575 16.033 19.6201C16.0918 19.9512 16.1356 20.2176 16.1645 20.4004C16.179 20.4919 16.1898 20.5624 16.1969 20.6096L16.2047 20.6626L16.2066 20.6755L16.2071 20.6791L16.2596 21.0475Z" fill="#9A9CA4"/> <path d="M16.2259 13.9425C18.1134 13.2236 20.0374 12.9473 21.7027 13.3127L21.9074 13.3576C21.7856 14.2418 21.5463 15.1071 21.1961 15.9286C20.4717 17.6278 19.273 19.1396 17.6585 20.2451L17.6461 20.166C17.6158 19.9748 17.5705 19.699 17.5099 19.3578C17.3887 18.6757 17.206 17.7295 16.9592 16.672C16.7602 15.8192 16.5167 14.8803 16.2259 13.9425Z" fill="#9A9CA4"/> <path d="M13.4525 8.39743C15.1812 6.92819 16.5396 5.18651 17.1247 3.44818L17.1351 3.41705C18.5508 4.26242 19.7768 5.47033 20.6598 6.99972C21.5426 8.52873 21.9757 10.194 22.0001 11.8423C20.0045 11.4109 17.8139 11.7412 15.7443 12.5213C15.4235 11.6577 15.0594 10.8345 14.6498 10.125C14.3136 9.54274 13.9035 8.96194 13.4525 8.39743Z" fill="#9A9CA4"/> <path d="M8.31859 3.45405C8.06656 3.25473 7.86132 3.09745 7.71835 2.98945L7.69599 2.97258C9.45843 2.13001 11.3643 1.84893 13.1954 2.07088C14.0827 2.17844 14.9525 2.40412 15.7799 2.74129L15.703 2.96973C15.2258 4.38768 14.0529 5.92038 12.4746 7.26043C11.7443 6.46537 10.9739 5.7288 10.2721 5.09932C9.5149 4.42018 8.82228 3.85238 8.31859 3.45405Z" fill="#9A9CA4"/> <path d="M10.4204 8.74678C7.83381 10.3349 4.87005 11.1956 2.43343 10.7157L2.09084 10.6483C2.46012 7.95488 3.91943 5.43745 6.28141 3.7952L6.60935 4.03361L6.61139 4.0351L6.62073 4.04194L6.65977 4.07072C6.6946 4.09652 6.74673 4.13536 6.81423 4.18635C6.94926 4.28834 7.14566 4.43883 7.38814 4.63059C7.8735 5.01443 8.54149 5.56206 9.27055 6.21597C9.93035 6.80777 10.6282 7.47615 11.2825 8.18057C11.0033 8.37645 10.7155 8.5656 10.4204 8.74678Z" fill="#9A9CA4"/> </g>
                    </svg>
                `);
            }

            const Link13 = sidebarNavItems[42].querySelector('a');
            if (Link13) {
                const oldSvg = Link13.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                Link13.insertAdjacentHTML('afterbegin', `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8954 12.2611V6.24409H9.03584C6.97655 6.24409 5.89073 5.02933 5.89073 3.84863C5.89073 2.62249 6.88922 1.8959 8.22463 1.8959C9.75972 1.8959 10.9578 2.97445 10.9578 4.77953V6.24409H13.0421V4.77953C13.0421 2.97445 14.2402 1.8959 15.7753 1.8959C17.1107 1.8959 18.1216 2.62249 18.1216 3.84863C18.1216 5.02933 16.9984 6.24409 14.9641 6.24409H13.1045V12.2611H21.9032C23.2637 12.2611 24 11.7843 24 10.5695V7.93567C24 6.73225 23.2637 6.24409 21.9032 6.24409H18.9952C19.769 5.60832 20.2309 4.74548 20.2309 3.76914C20.2309 1.57805 18.3213 0 15.9001 0C14.103 0 12.6427 0.908184 12.0062 2.52033C11.3697 0.908184 9.897 0 8.09981 0C5.6911 0 3.76909 1.57805 3.76909 3.76914C3.76909 4.74548 4.21836 5.60832 5.00465 6.24409H2.09672C0.811211 6.24409 0 6.73225 0 7.93567V10.5695C0 11.7843 0.748802 12.2611 2.09672 12.2611H10.8954ZM10.8954 24V13.4758H1.78468V21.1164C1.78468 23.0123 3.00777 24 5.09198 24H10.8954ZM13.1045 13.4758V24H18.9079C20.9921 24 22.2152 23.0123 22.2152 21.1164V13.4758H13.1045Z" fill="#9C9C9C"/>
                    </svg>
                `);
            }

            const Link14 = sidebarNavItems[43].querySelector('a');
            if (Link14) {
                const oldSvg = Link14.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                Link14.insertAdjacentHTML('afterbegin', `
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.4375 1.5625H18.75C18.75 0.697266 18.0512 0 17.1875 0H7.8125C6.94883 0 6.25 0.697266 6.25 1.5625H1.5625C0.698828 1.5625 0 2.25977 0 3.125V6.25C0 9.70156 2.79844 12.5 6.25 12.5C6.32344 12.5 6.3918 12.4801 6.46367 12.477C7.025 14.6758 8.7418 16.3957 10.9375 16.9648V21.875H7.8125C6.94883 21.875 6.25 22.5723 6.25 23.4375V25H18.75V23.4375C18.75 22.5723 18.0512 21.875 17.1875 21.875H14.0625V16.9648C16.2582 16.3957 17.975 14.6762 18.5363 12.4773C18.6082 12.4801 18.6766 12.5 18.75 12.5C22.2016 12.5 25 9.70156 25 6.25V3.125C25 2.25977 24.3012 1.5625 23.4375 1.5625ZM3.125 6.25V4.6875H6.25V9.375C4.52422 9.375 3.125 7.97422 3.125 6.25ZM21.875 6.25C21.875 7.97422 20.4758 9.375 18.75 9.375V4.6875H21.875V6.25Z" fill="#9C9C9C"/>
                    </svg>
                `);
            }

            const Link15 = sidebarNavItems[44].querySelector('a');
            if (Link15) {
                const oldSvg = Link15.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                Link15.insertAdjacentHTML('afterbegin', `
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.4 0 0 4.73214 0 10.625V13.75C0 13.8393 0 13.8393 0 13.9286C0 14.0179 0 14.1964 0 14.2857C0 16.7857 2.2 18.75 5 18.75C5.6 18.75 6 18.3929 6 17.8571V10.7143C6 10.1786 5.6 9.82143 5 9.82143C3.9 9.82143 2.8 10.1786 2 10.7143V10.5357C2 5.71429 6.5 1.78571 12 1.78571C17.5 1.78571 22 5.71429 22 10.625V10.7143C21.2 10.1786 20.1 9.82143 19 9.82143C18.4 9.82143 18 10.1786 18 10.7143V17.8571C18 18.3929 18.4 18.75 19 18.75C19.7 18.75 20.4 18.5714 21 18.3929C20 20.2679 18.2 21.6964 16 22.5C16 22.4107 16 22.4107 16 22.3214C16 21.7857 15.6 21.4286 15 21.4286H12C11.4 21.4286 11 21.7857 11 22.3214V24.1071C11 24.6429 11.4 25 12 25C18.6 25 24 20.3571 24 14.6429V13.75V11.6071V10.625C24 4.73214 18.6 0 12 0Z" fill="#9C9C9C"/>
                    </svg>
                `);
            }

            const Link16 = sidebarNavItems[45].querySelector('a');
            if (Link16) {
                const oldSvg = Link16.querySelector('svg');
                if (oldSvg) oldSvg.remove();

                Link16.insertAdjacentHTML('afterbegin', `
                    <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.683422 0.732237C-6.95387e-08 1.46446 0 2.64298 0 5V17.5C0 21.0355 0 22.8032 1.02513 23.9016C1.77331 24.7032 2.85431 24.9199 4.66667 24.9784V21.25C4.66667 20.5596 5.18901 20 5.83333 20C6.47766 20 7 20.5596 7 21.25V25H14V21.25C14 20.5596 14.5223 20 15.1667 20C15.811 20 16.3333 20.5596 16.3333 21.25V24.9784C18.1456 24.9199 19.2267 24.7032 19.9748 23.9016C21 22.8032 21 21.0355 21 17.5V5C21 2.64298 21 1.46446 20.3166 0.732237C19.6331 -7.45058e-08 18.5332 0 16.3333 0H4.66667C2.46678 0 1.36683 -7.45058e-08 0.683422 0.732237ZM5.83333 7.5C5.18901 7.5 4.66667 8.05965 4.66667 8.75C4.66667 9.44035 5.18901 10 5.83333 10H15.1667C15.811 10 16.3333 9.44035 16.3333 8.75C16.3333 8.05965 15.811 7.5 15.1667 7.5H5.83333ZM5.83333 15H15.1667C15.811 15 16.3333 14.4404 16.3333 13.75C16.3333 13.0596 15.811 12.5 15.1667 12.5H5.83333C5.18901 12.5 4.66667 13.0596 4.66667 13.75C4.66667 14.4404 5.18901 15 5.83333 15Z" fill="#9C9C9C"/>
                    </svg>
                `);
            }

        }
    }

    // Fonksiyonu direkt çağır
    //updateSidebarNavIcons();

    // Bu MutationObserver kaldırıldı - yukarıdaki tek bir observer yeterli
    // window.cleanPath hesaplaması için ayrı bir fonksiyon
    function updateCleanPath() {
        const url = location.href;
        window.cleanPath = url.replace(/^\/[a-z]{2}\//, '/').replace(/\/$/, '');
    }
    
    // İlk yüklemede cleanPath'i hesapla
    updateCleanPath();

   


    function addPlayButtonToSlots() {
        const slots = document.querySelectorAll('.slot');

        slots.forEach(slot => {
            // Eğer slot'un içinde zaten play butonu varsa ekleme
            if (slot.querySelector('.slot-play-button')) return;

            // Hover overlay ekle
            const overlay = document.createElement('div');
            overlay.className = 'slot-hover-overlay';
            slot.appendChild(overlay);

            // Play butonu ekle
            const playButton = document.createElement('button');
            playButton.className = 'slot-play-button';
            playButton.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            `;
            slot.appendChild(playButton);
        });
    }

    // URL değişikliklerini dinle
    window.addEventListener('popstate', function () {
        setTimeout(addPlayButtonToSlots, 500);
    });

    // AJAX sonrası içerik yüklendiğinde
    const originalFetch = window.fetch;
    window.fetch = async function (...args) {
        const response = await originalFetch.apply(this, args);
        setTimeout(addPlayButtonToSlots, 500);
        return response;
    };

    // Sayfa ilk yüklendiğinde ve route değişimlerinde
    if (typeof routeObserver === 'function') {
        const originalRouteObserver = routeObserver;
        routeObserver = function (...args) {
            originalRouteObserver.apply(this, args);
            setTimeout(addPlayButtonToSlots, 500);
        };
    }

    // İlk yükleme için
    setTimeout(addPlayButtonToSlots, 500);

    // Dinamik slot eklemeleri için MutationObserver
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                setTimeout(addPlayButtonToSlots, 100);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });


})();