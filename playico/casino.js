(function() {
    const BASE_URI = 'https://playicogiris.net/playico';

    // VIP Table Component
    const VipTableComponent = {
        render() {
            return `
                <div class="vip-table-container container">
                    <div class="vip-table-wrapper">
                        <h2 class="vip-table-title">Ayrıcalıklar</h2>
                        <div class="vip-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>VIP Rank</th>
                                        <th>Iron</th>
                                        <th>Iron <span class="ico-badge">ICO</span></th>
                                        <th>Bronze</th>
                                        <th>Bronz <span class="ico-badge">ICO</span></th>
                                        <th>Silver</th>
                                        <th>Silver <span class="ico-badge">ICO</span></th>
                                        <th>Gold</th>
                                        <th>Gold <span class="ico-badge">ICO</span></th>
                                        <th>Platinum</th>
                                        <th>Platinum <span class="ico-badge">ICO</span></th>
                                        <th>Emerald</th>
                                        <th>Emerald <span class="ico-badge">ICO</span></th>
                                        <th>Diamond</th>
                                        <th>Diamond <span class="ico-badge">ICO</span></th>
                                        <th>Playico</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Level Up Bonus</td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                    </tr>
                                    <tr>
                                        <td>Instant Rakeback</td>
                                        <td></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                    </tr>
                                    <tr>
                                        <td>Weekly Bonus</td>
                                        <td></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                    </tr>
                                    <tr>
                                        <td>Monthly Bonus</td>
                                        <td></td>
                                        <td></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                    </tr>
                                    <tr>
                                        <td>Birthday Bonus</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                    </tr>
                                    <tr>
                                        <td>Renewable Reloads</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                    </tr>
                                    <tr>
                                        <td>Unlimited Reloads</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                    </tr>
                                    <tr>
                                        <td>Personal VIP Manager</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                        <td><span class="check-icon">✓</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        }
    };

    // VIP Level Section Component
    const VipLevelSectionComponent = {
        render() {
            const rankings = document.querySelectorAll('.ranking');
            const levels = Array.from({ length: 15 }, (_, index) => ({
                number: index + 1,
                isActive: index === 0 // Örnek olarak ilk seviye aktif
            }));

            const crownSvg = `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.822 9.58261L21.5699 12.1397C21.1544 16.3529 20.9468 18.4595 19.6459 19.7297C18.345 21 16.3953 21 12.4959 21H9.50411C5.60469 21 3.65498 21 2.3541 19.7297C1.05323 18.4595 0.845513 16.3529 0.430098 12.1397L0.177988 9.58261C-0.0200226 7.57438 -0.119022 6.57026 0.240887 6.15517C0.435576 5.93064 0.700324 5.79306 0.983387 5.76933C1.50665 5.72546 2.16379 6.43954 3.47806 7.86772C4.15775 8.60632 4.49759 8.97561 4.87671 9.03284C5.08677 9.06444 5.30081 9.03189 5.49478 8.93875C5.84486 8.77054 6.07827 8.31403 6.54508 7.40095L9.00559 2.5881C9.88768 0.862701 10.3288 0 11 0C11.6712 0 12.1123 0.862701 12.9944 2.58809L15.4549 7.40093C15.9217 8.31402 16.1552 8.77054 16.5052 8.93875C16.6992 9.03189 16.9133 9.06444 17.1233 9.03284C17.5024 8.97561 17.8422 8.60632 18.5219 7.86772C19.8362 6.43954 20.4933 5.72546 21.0166 5.76933C21.2996 5.79306 21.5644 5.93064 21.7591 6.15517C22.119 6.57026 22.02 7.57438 21.822 9.58261ZM12.0476 11.2339L11.9395 11.0488C11.5215 10.333 11.3125 9.97521 11 9.97521C10.6875 9.97521 10.4785 10.333 10.0605 11.0488L9.95236 11.2339C9.83367 11.4373 9.77427 11.5391 9.68165 11.6062C9.58903 11.6733 9.47375 11.6982 9.24308 11.748L9.03309 11.7934C8.22136 11.9686 7.81551 12.0563 7.71895 12.3527C7.62239 12.6491 7.89907 12.9579 8.45243 13.5756L8.5956 13.7354C8.75284 13.9109 8.83146 13.9987 8.86688 14.1073C8.90219 14.2158 8.89031 14.3329 8.86655 14.5671L8.84488 14.7803C8.76124 15.6044 8.71941 16.0165 8.97215 16.1996C9.22504 16.3828 9.60498 16.2158 10.365 15.8818L10.5615 15.7954C10.7776 15.7004 10.8855 15.653 11 15.653C11.1145 15.653 11.2224 15.7004 11.4385 15.7954L11.635 15.8818C12.395 16.2158 12.775 16.3828 13.0279 16.1996C13.2806 16.0165 13.2387 15.6044 13.1551 14.7803L13.1335 14.5671C13.1097 14.3329 13.0978 14.2158 13.1331 14.1073C13.1685 13.9987 13.2472 13.9109 13.4044 13.7354L13.5476 13.5756C14.1009 12.9579 14.3777 12.6491 14.2811 12.3527C14.1845 12.0563 13.7786 11.9686 12.9669 11.7934L12.7569 11.748C12.5263 11.6982 12.411 11.6733 12.3184 11.6062C12.2257 11.5391 12.1663 11.4373 12.0476 11.2339Z" fill="currentColor"/>
            </svg>`;

            return `
                <div class="vip-steps-container">
                    ${levels.map((level, index) => `
                        <div class="vip-step ${level.isActive ? 'active' : ''}" data-level="${level.number}">
                            <div class="vip-crown-icon">${crownSvg}</div>
                            <div class="vip-step-tooltip">Level ${level.number}</div>
                        </div>
                        ${index < levels.length - 1 ? '<div class="vip-step-connector"></div>' : ''}
                    `).join('')}
                </div>
            `;
        }
    };

    // VIP Tab Component
    class VipTabComponent {
        constructor() {
            this.container = document.createElement('div');
            this.container.className = 'vip-tab-container';
        }

        render() {
            const tabContent = `
                <div class="vip-tab-header">
                    <button class="vip-tab-button" data-tab="vip-privileges">VIP Ayrıcalıkları</button>
                    <button class="vip-tab-button active" data-tab="vip-representative">Özel VIP Temsilcisi</button>
                    <button class="vip-tab-button" data-tab="extra-advantages">Ek Avantajlar</button>
                    <button class="vip-tab-button" data-tab="high-bonuses">Yüksek Bonuslar</button>
                </div>
                <div class="vip-tab-content">
                    <div class="vip-tab-pane" data-pane="vip-privileges">
                        <div class="vip-privileges-grid">
                            <div class="vip-privilege-card">
                                <div class="vip-privilege-content">
                                    
                                    <h3 class="vip-privilege-title">7/24 Müşteri Temsilcisi</h3>
                                    <p class="vip-privilege-description">Playico deneyiminizi en üst seviyeye çıkarmak için her an yanınızdayız. Sorularınızı yanıtlıyor, oyun keyfinize kesintisiz destek sağlıyoruz.</p>
                                </div>
                                <div class="vip-privilege-icon">
                                    <img src="https://jacknicholsan.github.io/playico/images/chat-bubbles.svg" alt="Chat Bubbles">
                                </div>
                            </div>
                            <div class="vip-privilege-card">
                                <div class="vip-privilege-content">
                                    
                                    <h3 class="vip-privilege-title">Haftalık, Aylık Bonuslar</h3>
                                    <p class="vip-privilege-description">Playico'da günlük, haftalık ve aylık düzenli bonuslarla oyun keyfinizi artırır. Ayrıca, şanssız anlarınızda veya seviye atladığınızda ekstra yüklemelerle yanınızda olur!</p>
                                </div>
                                <div class="vip-privilege-icon">
                                    <img src="https://jacknicholsan.github.io/playico/images/calendar.svg" alt="Calendar">
                                </div>
                            </div>
                            <div class="vip-privilege-card">
                                <div class="vip-privilege-content">
                                    
                                    <h3 class="vip-privilege-title">Seviye Atla & İlerle</h3>
                                    <p class="vip-privilege-description">Playico'da ne kadar çok oynarsan, o kadar fazla ödül kazanırsın! Seviyeni yükselt, ilerle ve avantajların tadını çıkar!</p>
                                </div>
                                <div class="vip-privilege-icon">
                                    <img src="https://jacknicholsan.github.io/playico/images/star.svg" alt="Star">
                                </div>
                            </div>
                            <div class="vip-privilege-card">
                                <div class="vip-privilege-content">
                                    
                                    <h3 class="vip-privilege-title">Özel VIP Temsilcileri</h3>
                                    <p class="vip-privilege-description">Üst düzey kullanıcılar için özel VIP host, kişiye özel bonuslar ve sık yenilenen avantajlarla Playico deneyiminizi eşsiz kılacak!</p>
                                </div>
                                <div class="vip-privilege-icon">
                                    <img src="https://jacknicholsan.github.io/playico/images/headphones.svg" alt="Headphones">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vip-tab-pane active" data-pane="vip-representative">
                        <div class="vip-representative-content">
                            <div class="vip-representative-header">
                                <div class="vip-representative-icon">
                                    <img src="https://jacknicholsan.github.io/playico/images/call.svg" alt="Phone Icon">
                                </div>
                                <h2 class="vip-representative-title">
                                    Kişisel VIP Temsilciniz size her durumda
                                    <span class="highlight">yardımcı olmak için yanınızda</span>
                                </h2>
                                <div class="vip-representative-icon">
                                    <img src="https://jacknicholsan.github.io/playico/images/chat.png" alt="Chat Icon">
                                </div>
                            </div>
                            <div class="vip-representative-features">
                                <div class="vip-feature">
                                    <div class="vip-feature-icon">✓</div>
                                    <div class="vip-feature-content">
                                        <h3>Tüm sorulara anında yanıt</h3>
                                        <p>Casino veya spor bahisleriyle ilgili her türlü sorunuzda size yardımcı olabilir.</p>
                                    </div>
                                </div>
                                <div class="vip-feature">
                                    <div class="vip-feature-icon">✓</div>
                                    <div class="vip-feature-content">
                                        <h3>Her şeyden ilk haberdar ol</h3>
                                        <p>Yeni özellikler, oyunlar ve etkinliklerden ilk sen, birinci ağızdan haberdar ol!</p>
                                    </div>
                                </div>
                                <div class="vip-feature">
                                    <div class="vip-feature-icon">☺</div>
                                    <div class="vip-feature-content">
                                        <h3>Gerçek bir arkadaş edin</h3>
                                        <p>Hayatın her alanı, evcil hayvanlarınız ve seyahatleriniz üzerine keyifli sohbetler edebileceğiniz harika bir dost!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="vip-representatives">
                                <div class="vip-representative-card">
                                    <div class="vip-user-info">
                                        <div class="vip-representative-avatar">
                                            <img src="https://jacknicholsan.github.io/playico/images/1.png" alt="Selin">
                                        </div>
                                        <h3>Selin</h3>
                                    </div>
                                    <p>Selin, Hayata pozitif bakan, keşfetmeyi seven ve sosyal biri. Spor yapmaktan, yeni yerler görmekten ve hayvanlarla vakit geçirmekten keyif alır. Tenis oynamak ve spor salonuna gitmek günlük rutinlerinin bir parçasıdır. Doğada yürüyüş yapmayı, araba sürerken müzik dinlemeyi ve farklı insanlarla derin sohbetler etmeyi sever.</p>
                                </div>
                                <div class="vip-representative-card">
                                    <div class="vip-user-info"> 
                                        <div class="vip-representative-avatar">
                                            <img src="https://jacknicholsan.github.io/playico/images/2.png" alt="Semih">
                                        </div>
                                        <h3>Semih</h3>
                                    </div>
                                    <p>Semih, eğlenceli biridir. Futbol oynamaktan, yeni şehirler keşfetmekten ve teknolojik yenilikleri takip etmekten keyif alır. Konuş yapmak ve bisiklete binmek günlük rutinlerinin bir parçasıdır. Arkadaşlarıyla araba modifiye ve tarih üzerine sohbetler etmekten oldukça keyif alır.</p>
                                </div>
                                <div class="vip-representative-card">
                                    <div class="vip-user-info">
                                        <div class="vip-representative-avatar">
                                            <img src="https://jacknicholsan.github.io/playico/images/4.png" alt="Nazar">
                                        </div>
                                        <h3>Nazar</h3>
                                    </div>
                                    <p>Nazar, yapıcı biridir. çözümler üreten ve her durumda bir çıkış yolu bulan biridir. Yeni şeyler öğrenmekten, el becerisi gerektiren işlerle uğraşmaktan ve yaratıcı projeler geliştirmekten keyif alır. Günlük hayatında düzenli olarak yoga yapar ve bahçeyle ilgilenir. İnsanları motive etmeyi, derin sohbetler etmeyi ve yaşam alanlarını daha verimli hale getirmeyi sever.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vip-tab-pane" data-pane="extra-advantages">
                        <div class="extra-advantages-grid">
                            <div class="vip-privilege-card large">
                                <div class="vip-privilege-content">
                                    
                                    <h3 class="vip-privilege-title">Büyük ödemelerle VIP'i hissedin.</h3>
                                    <p class="vip-privilege-description">Maksimum bahis limitlerini artırarak daha büyük kazançlar elde edin! VIP kullanıcılarımız için ödemeler her zamankinden daha yüksek.</p>
                                </div>
                                <div class="vip-privilege-icon">
                                    <img src="https://jacknicholsan.github.io/playico/images/money.png" alt="VIP Ödemeler">
                                </div>
                            </div>
                            <div class="vip-privilege-card small gold">
                                <div class="vip-privilege-content">
                                    
                                    <h3 class="vip-privilege-title">Para çekim önceliği</h3>
                                    <p class="vip-privilege-description">Artık beklemeye hiç gerek yok! Çekim önceliği sen de.</p>
                                </div>
                                <div class="vip-privilege-icon">
                                    <img src="https://jacknicholsan.github.io/playico/images/crown.png" alt="Crown">
                                </div>
                            </div>
                            <div class="vip-privilege-card small gold">
                                <div class="vip-privilege-content">
                                    
                                    <h3 class="vip-privilege-title">VIP sohbet</h3>
                                    <p class="vip-privilege-description">Özel tasarlanmış sohbet odamızda kapalı, prestijli sohbetlere katılın. Burada herkes değil, VIP konuşur!</p>
                                </div>
                                <div class="vip-privilege-icon">
                                    <img src="https://jacknicholsan.github.io/playico/images/vip-chat.png" alt="Chat">
                                </div>
                            </div>
                            <div class="vip-privilege-card large">
                                <div class="vip-privilege-content">
                                    
                                    <h3 class="vip-privilege-title">Son oynama bonusları</h3>
                                    <p class="vip-privilege-description">Şanssız mı döndün? Yeni seviyeye geçtikçe, belirli koşullarda kayıplarınızı geri alın!</p>
                                </div>
                                <div class="vip-privilege-icon">
                                    <img src="https://jacknicholsan.github.io/playico/images/rocket.png" alt="Bonus">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vip-tab-pane" data-pane="high-bonuses">
                        <div class="coming-soon-container">
                            <div class="coming-soon-content">
                                <div class="coming-soon-icon">
                                    <img src="https://jacknicholsan.github.io/playico/images/gift.png" alt="Coming Soon">
                                </div>
                                <h2 class="coming-soon-title">Çok Yakında!</h2>
                                <p class="coming-soon-description">Yüksek bonuslar için hazırlıklarımız devam ediyor. Çok yakında sizlerle!</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            this.container.innerHTML = tabContent;
            this.initializeTabFunctionality();
            return this.container;
        }

        initializeTabFunctionality() {
            const tabButtons = this.container.querySelectorAll('.vip-tab-button');
            const tabPanes = this.container.querySelectorAll('.vip-tab-pane');

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons and panes
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabPanes.forEach(pane => pane.classList.remove('active'));

                    // Add active class to clicked button and corresponding pane
                    button.classList.add('active');
                    const paneId = button.getAttribute('data-tab');
                    const pane = this.container.querySelector(`[data-pane="${paneId}"]`);
                    pane.classList.add('active');
                });
            });
        }
    }

    // Add VIP styles
    const vipStyles = document.createElement('style');
    vipStyles.textContent += `
        .vip-level-progress {
            background: #000;
            padding: 20px 0;
            margin: 20px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
        }

        .vip-level-item {
            display: flex;
            align-items: center;
            position: relative;
            flex: 1;
        }

        .crown-wrapper {
            width: 48px;
            height: 48px;
            background: #1A1A1A;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--crown-color);
            position: relative;
            z-index: 2;
        }

        .level-connector {
            flex: 1;
            height: 2px;
            background: linear-gradient(to right, 
                rgba(255,255,255,0.1) 0%,
                rgba(255,255,255,0.2) 50%,
                rgba(255,255,255,0.1) 100%
            );
            margin: 0 10px;
        }

        @media (max-width: 768px) {
            .vip-level-progress {
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
            }

            .vip-level-item {
                flex: 0 0 calc(33.333% - 20px);
            }

            .level-connector {
                display: none;
            }
        }

        @media (max-width: 480px) {
            .vip-level-item {
                flex: 0 0 calc(50% - 20px);
            }
        }
    `;

    // App State Management
    const AppState = {
        currentPage: '',
        currentLanguage: 'en',
        translations: {
            en: {
                casino: {
                    title: 'Casino Games',
                    allGames: 'All Games',
                    slots: 'Slots',
                    live: 'Live Casino',
                    table: 'Table Games',
                    lobby: 'Lobby',
                    playicoOriginals: 'Playico Originals',
                    tableGames: 'Table Games'
                },
                blog: {
                    title: 'Blog',
                    readMore: 'Read More',
                    back: 'Back'
                },
                payment: {
                    title: 'Make crypto payments easily and comfortably!',
                    cta: 'Sign Up & Buy Crypto',
                    wallet: 'Buy Crypto'
                },
                login: {
                    title: 'Oturum açmak',
                    email: 'E-posta veya kullanıcı adı',
                    password: 'Şifre',
                    login: 'Oturum açmak',
                    or: 'Veya',
                    forgotPassword: 'Parolanızı mı unuttunuz ?',
                    noAccount: 'Hesabın yok mu?',
                    register: 'Bir Hesap Kaydolun'
                }
            },
            tr: {
                casino: {
                    title: 'Casino Oyunları',
                    allGames: 'Tüm Oyunlar',
                    slots: 'Slot',
                    live: 'Canlı Casino',
                    table: 'Masa Oyunları',
                    lobby: 'Lobi',
                    playicoOriginals: 'Playico Orijinalleri',
                    tableGames: 'Masa Oyunları'
                },
                blog: {
                    title: 'Blog',
                    readMore: 'Devamını Oku',
                    back: 'Geri'
                },
                payment: {
                    title: 'Kolay ve rahatça kripto ödemesi yap!',
                    cta: 'Kayıt Ol & Kripto Al',
                    wallet: 'Kripto Al'
                },
                login: {
                    title: 'Oturum açmak',
                    email: 'E-posta veya kullanıcı adı',
                    password: 'Şifre',
                    login: 'Oturum açmak',
                    or: 'Veya',
                    forgotPassword: 'Parolanızı mı unuttunuz ?',
                    noAccount: 'Hesabın yok mu?',
                    register: 'Bir Hesap Kaydolun'
                }
            }
        }
    };

    // Route Handlers
    const RouteHandlers = {
        casino: {
            enter: () => {
                // TV içeriğini temizle
                const tvContainer = document.querySelector('.tv-iframe-container');
                if (tvContainer) {
                    tvContainer.remove();
                    // Gizlenmiş içeriği tekrar göster
                    const mainContent = document.querySelector('#main__content');
                    if (mainContent) {
                        Array.from(mainContent.children).forEach(child => {
                            child.style.display = '';
                        });
                    }
                }
                document.body.setAttribute('data-active-page', 'casino');
                AppState.currentPage = 'casino';
                PageManager.render();
                Router.insertPaymentBanner();

                // Add ID to div after high-rtp-games-wrapper
                const highRtpWrapper = document.querySelector('#high-rtp-games-wrapper');
                if (highRtpWrapper && highRtpWrapper.nextElementSibling) {
                    highRtpWrapper.nextElementSibling.id = 'jackpot-games-wrapper';
                }

                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            exit: () => {
                document.body.removeAttribute('data-active-page');
                PageManager.cleanup();
            }
        },
        blog: {
            enter: () => {
                // TV içeriğini temizle
                const tvContainer = document.querySelector('.tv-iframe-container');
                if (tvContainer) {
                    tvContainer.remove();
                    // Gizlenmiş içeriği tekrar göster
                    const mainContent = document.querySelector('#main__content');
                    if (mainContent) {
                        Array.from(mainContent.children).forEach(child => {
                            child.style.display = '';
                        });
                    }
                }
                document.body.setAttribute('data-active-page', 'blog');
                AppState.currentPage = 'blog';
                PageManager.render();

                // Check if we're on a blog detail page
                const path = window.location.pathname;
                if (path.includes('/blog/') && path !== '/blog/') {

                    // Try multiple times to find and add the back button
                    let attempts = 0;
                    const maxAttempts = 10;

                    const tryAddBackButton = () => {
                        const sectionTitle = document.querySelector('.section__title');
                        if (sectionTitle) {
                            // Remove existing back button if any
                            const existingButton = document.querySelector('.blog-back-button');
                            if (existingButton) {
                                existingButton.remove();
                            }

                            // Create back button
                            const backButton = document.createElement('a');
                            backButton.href = path.substring(0, path.indexOf('/blog/')) + '/blog';
                            backButton.className = 'blog-back-button';
                            backButton.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                                </svg>
                                ${AppState.translations[AppState.currentLanguage].blog.back}
                            `;

                            backButton.style.cssText = `
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                color: #fff;
                                text-decoration: none;
                                padding: 8px 16px;
                                background: #1E1E1E;
                                border-radius: 8px;
                                transition: all 0.3s ease;
                                margin-bottom: 16px;
                            `;

                            sectionTitle.insertAdjacentElement('beforebegin', backButton);
                        } else if (attempts < maxAttempts) {
                            attempts++;
                            setTimeout(tryAddBackButton, 200);
                        }
                    };

                    // Start trying to add the back button
                    tryAddBackButton();
                }

                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            exit: () => {
                document.body.removeAttribute('data-active-page');
                PageManager.cleanup();
                // Remove back button if exists
                const backButton = document.querySelector('.blog-back-button');
                if (backButton) {
                    backButton.remove();
                }
            }
        },
        sportsbook: {
            enter: () => {
                // TV içeriğini temizle
                const tvContainer = document.querySelector('.tv-iframe-container');
                if (tvContainer) {
                    tvContainer.remove();
                    // Gizlenmiş içeriği tekrar göster
                    const mainContent = document.querySelector('#main__content');
                    if (mainContent) {
                        Array.from(mainContent.children).forEach(child => {
                            child.style.display = '';
                        });
                    }
                }
                document.body.setAttribute('data-active-page', 'sportsbook');
                const mainElement = document.querySelector('.main');
                if (mainElement && window.innerWidth >= 1200) {
                    //mainElement.style.marginLeft = '0';
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            exit: () => {
                document.body.removeAttribute('data-active-page');
                const mainElement = document.querySelector('.main');
                if (mainElement) {
                    mainElement.style.marginLeft = '';
                }
            }
        },
        vip: {
            enter: () => {
                document.body.setAttribute('data-active-page', 'vip');

                const mainContent = document.querySelector('#main__content');
                if (mainContent) {
                    const footer = document.querySelector('footer');
                    if (footer) {
                        // VIP Level Section komponenti
                        const vipLevelSection = document.createElement('div');
                        vipLevelSection.innerHTML = VipLevelSectionComponent.render();
                        vipLevelSection.classList.add('vip-component');

                        // Banner container'ı bul
                        const bannerContainer = document.querySelector('.vip-banner-container');
                        if (bannerContainer) {
                            // Level section'ı banner'dan sonra ekle
                            bannerContainer.insertAdjacentElement('afterend', vipLevelSection.firstElementChild);
                        }

                        // Diğer VIP komponentleri
                        const vipTab = new VipTabComponent();
                        const vipTabElement = vipTab.container;
                        vipTabElement.classList.add('vip-component');
                        vipTab.render();

                        const vipTable = document.createElement('div');
                        vipTable.innerHTML = VipTableComponent.render();
                        vipTable.classList.add('vip-component');

                        footer.insertAdjacentElement('beforebegin', vipTabElement);
                        footer.insertAdjacentElement('beforebegin', vipTable.firstElementChild);

                        vipTab.initializeTabFunctionality();
                    }
                }

                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            exit: async () => {
                document.body.removeAttribute('data-active-page');
                const vipComponents = document.querySelectorAll('.vip-table-container, .vip-tab-container, .vip-level-progress, .vip-steps-container');
                vipComponents.forEach(component => {
                    component.remove();
                });
            }
        },
        home: {
            enter: () => {


                /*
                const topGamesWrapper = document.querySelector('#top-games-wrapper');
                const featuresContainer = document.querySelector('.features-container');
                if (topGamesWrapper && featuresContainer) {
                    featuresContainer.insertAdjacentElement('afterend', topGamesWrapper);
                }
                */

                const tvContainer = document.querySelector('.tv-iframe-container');
                if (tvContainer) {
                    tvContainer.remove();
                    // Gizlenmiş içeriği tekrar göster
                    const mainContent = document.querySelector('#main__content');
                    if (mainContent) {
                        Array.from(mainContent.children).forEach(child => {
                            child.style.display = '';
                        });
                    }
                }
                document.body.setAttribute('data-active-page', 'home');
                AppState.currentPage = 'home';
                PageManager.render();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            exit: () => {
                document.body.removeAttribute('data-active-page');
                PageManager.cleanup();
            }
        },
        tv: {
            enter: () => {
                document.body.setAttribute('data-active-page', 'tv');
                Router.showTvContent();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            exit: () => {
                document.body.removeAttribute('data-active-page');
                const tvContainer = document.querySelector('.tv-iframe-container');
                if (tvContainer) {
                    tvContainer.remove();
                    // Gizlenmiş içeriği tekrar göster
                    const mainContent = document.querySelector('#main__content');
                    if (mainContent) {
                        Array.from(mainContent.children).forEach(child => {
                            child.style.display = '';
                        });
                    }
                }
            }
        },
        promotions: {
            enter: () => {
                // TV içeriğini temizle
                const tvContainer = document.querySelector('.tv-iframe-container');
                if (tvContainer) {
                    tvContainer.remove();
                    // Gizlenmiş içeriği tekrar göster
                    const mainContent = document.querySelector('#main__content');
                    if (mainContent) {
                        Array.from(mainContent.children).forEach(child => {
                            child.style.display = '';
                        });
                    }
                }
                document.body.setAttribute('data-active-page', 'promotions');
                AppState.currentPage = 'promotions';

                // Remove any existing promotions content first
                const existingPromotions = document.querySelectorAll('.promotions-wrapper, .promotions-banner');
                existingPromotions.forEach(el => el.remove());

                // Add animation class for enter transition
                const mainContent = document.querySelector('#main__content');
                if (mainContent) {
                    //const promotionsContent = PromotionsComponent.render();
                    const container = document.createElement('div');
                    container.className = 'promotions-wrapper';
                    container.innerHTML = promotionsContent;
                    mainContent.prepend(container.firstElementChild);
                }

                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            exit: () => {
                document.body.removeAttribute('data-active-page');

                // Remove promotions content immediately
                const promotionsElements = document.querySelectorAll('.promotions-wrapper, .promotions-banner');
                promotionsElements.forEach(el => el.remove());

                PageManager.cleanup();
            }
        },
        trade: {
            enter: () => {
                document.body.setAttribute('data-active-page', 'trade');
                AppState.currentPage = 'trade';
                PageManager.render();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            exit: () => {
                document.body.removeAttribute('data-active-page');
                PageManager.cleanup();
            }
        },
        favorites: {
            enter: () => {
                // TV içeriğini temizle
                const tvContainer = document.querySelector('.tv-iframe-container');
                if (tvContainer) {
                    tvContainer.remove();
                    // Gizlenmiş içeriği tekrar göster
                    const mainContent = document.querySelector('#main__content');
                    if (mainContent) {
                        Array.from(mainContent.children).forEach(child => {
                            child.style.display = '';
                        });
                    }
                }
                document.body.setAttribute('data-active-page', 'favorites');
                AppState.currentPage = 'favorites';
                PageManager.render();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            exit: () => {
                document.body.removeAttribute('data-active-page');
                PageManager.cleanup();
            }
        },
        slots: {
            enter: () => {
                // TV içeriğini temizle
                const tvContainer = document.querySelector('.tv-iframe-container');
                if (tvContainer) {
                    tvContainer.remove();
                    // Gizlenmiş içeriği tekrar göster
                    const mainContent = document.querySelector('#main__content');
                    if (mainContent) {
                        Array.from(mainContent.children).forEach(child => {
                            child.style.display = '';
                        });
                    }
                }
                document.body.setAttribute('data-active-page', 'slots');
                AppState.currentPage = 'casino';
                PageManager.render();
                Router.insertPaymentBanner();

                // Add ID to div after high-rtp-games-wrapper
                const highRtpWrapper = document.querySelector('#high-rtp-games-wrapper');
                if (highRtpWrapper && highRtpWrapper.nextElementSibling) {
                    highRtpWrapper.nextElementSibling.id = 'jackpot-games-wrapper';
                }

                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            exit: () => {
                document.body.removeAttribute('data-active-page');
                PageManager.cleanup();
            }
        }
    };

    // Router
    const Router = {
        currentRoute: null,

        getRouteFromPath(path) {
            // Remove language prefix and trailing slashes for route matching
            const cleanPath = path.replace(/^\/[a-z]{2}\//, '/').replace(/\/$/, '');

            // Check if it's a game detail page
            if (cleanPath.startsWith('/games/')) {
                return 'game';
            }

            // Check if it's a blog detail page
            if (cleanPath.startsWith('/blog/')) {
                return 'blog';
            }

            if(cleanPath.startsWith('/casino/slots')) {
                return 'slots';
            }

            switch (cleanPath) {
                case '':
                case '/':
                    return 'home';
                case '/casino':
                    return 'casino';
                case '/blog':
                    return 'blog';
                case '/promotions':
                    return 'promotions';
                case '/sportsbook':
                    return 'sportsbook';
                case '/vip':
                    return 'vip';
                case '/trade':
                    return 'trade';
                case '/favorites':
                    return 'favorites';
                case '/canli-tv':
                case '/live-tv':
                    return 'tv';
                default:
                    return null;
            }
        },

        // TV iframe işleme fonksiyonu
        handleTvClick() {
            const tvUrl = AppState.currentLanguage === 'tr' ? '/tr/canli-tv' : '/en/live-tv';
            window.history.pushState('', '', tvUrl);
            window.history.pushState('', '', tvUrl);
            window.history.go(-1);
        },

        insertPlayicoTvButton() {
            // Remove lucky wheel SVGs
            const luckWheelSvg = document.querySelectorAll('#lucky-wheel');
            luckWheelSvg.forEach(svg => {
                const luckButton = svg.parentElement;
                luckButton.remove();
            });

            // Check if gif already exists
            const existingGif = document.querySelector('.sidebar__link--bonus[style*="5jHvdCAjyUFaihtN7nBsVty8ClgXX3ZqYckxiOeL.gif"]');
            if (existingGif) return;

            // Find all sidebar__links elements
            const sidebarLinks = document.querySelectorAll('.sidebar__links');
            if (!sidebarLinks.length) return;
            
            // Get the last sidebar__links element
            const lastSidebarLinks = sidebarLinks[sidebarLinks.length - 1];
            
            const newLinks = document.createElement('div');
            newLinks.className = 'sidebar__links';
            newLinks.innerHTML = `
                <a class="sidebar__link sidebar__link--bonus w-100" onclick="event.preventDefault(); window.open('https://t2m.io/PlayicoTV', '_blank');" style="background: url(https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/kvlkxlvkasdqGVADVQE/statics/5jHvdCAjyUFaihtN7nBsVty8ClgXX3ZqYckxiOeL.gif) left center / cover no-repeat;"></a>
            `;
            lastSidebarLinks.insertAdjacentElement('afterend', newLinks);
        },

        insertPlayicoWheelButton() {
            // Remove lucky wheel SVGs
            const luckWheelSvg = document.querySelectorAll('#lucky-wheel');
            luckWheelSvg.forEach(svg => {
                const luckButton = svg.parentElement;
                luckButton.remove();
            });

            // Check if gif already exists
            const existingGif = document.querySelector('.sidebar__link--bonus[style*="Cark_Button.gif"]');
            if (existingGif) return;

            // Find all sidebar__links elements
            const sidebarLinks = document.querySelectorAll('.sidebar__links');
            if (!sidebarLinks.length) return;
            
            // Get the last sidebar__links element
            const lastSidebarLinks = sidebarLinks[sidebarLinks.length - 1];
            
            const newLinks = document.createElement('div');
            newLinks.className = 'sidebar__links';
            newLinks.innerHTML = `
                <a class="sidebar__link sidebar__link--bonus w-100" onclick="event.preventDefault(); const path = document.documentElement.lang === 'tr' ? '/tr/wheel' : '/en/wheel'; window.history.pushState('', '', path); window.history.pushState('', '', path); window.history.go(-1);" style="background: url(https://jacknicholsan.github.io/playico/images/Cark_Button.gif) left center / cover no-repeat;"></a>
            `;
            lastSidebarLinks.insertAdjacentElement('afterend', newLinks);
        },

        async init() {
            try {
                // Mark initial page load
                document.documentElement.setAttribute('data-initial-load', 'true');

                this.insertPlayicoWheelButton();
                // Insert Playico TV button only once during initialization
                this.insertPlayicoTvButton();

                // Handle window resize for responsive layouts
                window.addEventListener('resize', () => this.handleResize());

                // İlk yüklemede mevcut path'i kontrol et
                const currentPath = window.location.pathname;
                this.handleRoute(currentPath);

                // URL değişikliklerini izle
                this.initializeObserver();

                // Remove initial load marker after a delay
                setTimeout(() => {
                    document.documentElement.removeAttribute('data-initial-load');
                }, 1000);
            } catch (error) {
                console.error('Error initializing app:', error);
            }
        },

        handleResize() {
            const currentRoute = this.getRouteFromPath(window.location.pathname);
            if (currentRoute === 'sportsbook') {
                const mainElement = document.querySelector('.main');
                if (mainElement) {
                    mainElement.style.marginLeft = window.innerWidth >= 1200 ? '0' : '';
                }
            }
        },

        async handleRoute(path) {
            try {
                const newRoute = this.getRouteFromPath(path);

                // Check if login modal should be shown
                if (path.includes('modal=login')) {
                    document.body.insertAdjacentHTML('beforeend', LoginModalComponent.render());
                    LoginModalComponent.init();
                }

                // Exit current route if exists
                if (this.currentRoute && RouteHandlers[this.currentRoute]?.exit) {
                    RouteHandlers[this.currentRoute].exit();
                }

                // Update language
                AppState.currentLanguage = path.startsWith('/tr/') ? 'tr' : 'en';

                // TV sayfasından başka bir sayfaya geçildiğinde iframe'i temizle
                if (newRoute !== 'tv') {
                    const tvContainer = document.querySelector('.tv-iframe-container');
                    if (tvContainer) {
                        tvContainer.remove();
                        // Gizlenmiş içeriği tekrar göster
                        const mainContent = document.querySelector('#main__content');
                        if (mainContent) {
                            Array.from(mainContent.children).forEach(child => {
                                child.style.display = '';
                            });
                        }
                    }
                }

                // Enter new route if exists
                if (newRoute && RouteHandlers[newRoute]?.enter) {
                    RouteHandlers[newRoute].enter();

                    // If we're on home page, move top-games-wrapper
                    if (newRoute === 'home') {
                        const moveTopGames = () => {
                            const topGamesWrapper = document.querySelector('#top-games-wrapper');
                            const featuresContainer = document.querySelector('.features-container');
                            if (topGamesWrapper && featuresContainer) {
                                featuresContainer.insertAdjacentElement('afterend', topGamesWrapper);
                            }
                        };

                        // Try immediately
                        moveTopGames();

                        // Also try after a short delay in case of dynamic content
                        setTimeout(moveTopGames, 100);
                    }

                    // Blog detail page back button
                    if (newRoute === 'blog' && path.includes('/blog/') && path !== '/blog/') {
                        const addBackButton = () => {
                            // Remove existing back button if any
                            const existingButton = document.querySelector('.blog-back-button');
                            if (existingButton) {
                                existingButton.remove();
                            }

                            const sectionTitle = document.querySelector('.section__title');
                            if (sectionTitle) {
                                const backButton = document.createElement('a');
                                backButton.href = path.substring(0, path.indexOf('/blog/')) + '/blog';
                                backButton.className = 'blog-back-button';
                                backButton.innerHTML = `
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                                    </svg>
                                    ${AppState.translations[AppState.currentLanguage].blog.back}
                                `;

                                backButton.style.cssText = `
                                    display: inline-flex;
                                    align-items: center;
                                    gap: 8px;
                                    color: #fff;
                                    text-decoration: none;
                                    padding: 8px 16px;
                                    background: #1E1E1E;
                                    border-radius: 8px;
                                    transition: all 0.3s ease;
                                    margin-bottom: 16px;
                                `;

                                // If we're navigating dynamically, replace the title with back button
                                if (!document.documentElement.hasAttribute('data-initial-load')) {
                                    sectionTitle.innerHTML = '';
                                    sectionTitle.appendChild(backButton);
                                } else {
                                    sectionTitle.insertAdjacentElement('beforebegin', backButton);
                                }
                            }
                        };

                        addBackButton();
                    }

                    // Casino sayfasında SVG'yi değiştir
                    if (newRoute === 'casino') {
                        setTimeout(() => this.replaceTopGamesSvg(), 100);
                    }
                }

                // Playico TV butonunu ekle
                //this.insertPlayicoTvButton();
                //this.findBlogLinkElement();
                this.moveSportsBookElement();

                this.currentRoute = newRoute;
            } catch (error) {
                console.error('Error handling route:', error);
            }
        },

        initializeObserver() {
            let lastUrl = location.href;
            new MutationObserver(() => {
                const url = location.href;
                if (url !== lastUrl) {
                    lastUrl = url;
                    this.handleRoute(window.location.pathname);
                }
            }).observe(document, {subtree: true, childList: true});
        },

        insertPaymentBanner() {
            try {
                const existingBanner = document.querySelector('.payment-banner');
                if (existingBanner) {
                    existingBanner.remove();
                }

                const observer = new MutationObserver((mutations, obs) => {
                    const topGamesWrapper = document.querySelector('#top-games-wrapper');
                    if (topGamesWrapper) {
                        const paymentBanner = PaymentBannerComponent.render();
                        topGamesWrapper.insertAdjacentHTML('afterend', paymentBanner);
                        obs.disconnect();
                    }
                });

                const topGamesWrapper = document.querySelector('#top-games-wrapper');
                if (topGamesWrapper) {
                    const paymentBanner = PaymentBannerComponent.render();
                    topGamesWrapper.insertAdjacentHTML('afterend', paymentBanner);
                } else {
                    observer.observe(document.body, {
                        childList: true,
                        subtree: true
                    });
                }
            } catch (error) {
                console.error('Error inserting payment banner:', error);
            }
        },

        // TV içeriğini göster
        showTvContent() {
            // Ana içerik alanını bul
            const mainContent = document.querySelector('#main__content');
            if (!mainContent) return;

            // Mevcut tüm içeriği gizle
            Array.from(mainContent.children).forEach(child => {
                child.style.display = 'none';
            });

            // TV container oluştur
            const tvContainer = document.createElement('div');
            tvContainer.className = 'tv-iframe-container';
            tvContainer.style.cssText = 'width: 100%; height: calc(100vh - 100px); position: relative; margin: 20px auto;';

            // iframe oluştur
            const iframe = document.createElement('iframe');
            iframe.src = 'https://goplay1.live';
            iframe.style.cssText = 'width: 100%; height: 100%; border: none; background: #000; border-radius: 8px;';
            iframe.allowFullscreen = true;

            // Elementleri container'a ekle
            tvContainer.appendChild(iframe);

            // Yeni section oluştur
            const tvSection = document.createElement('section');
            tvSection.className = 'section section--first';
            tvSection.appendChild(tvContainer);

            // Ana içerik alanına ekle
            mainContent.appendChild(tvSection);

            // Active page'i ayarla
            document.body.setAttribute('data-active-page', 'tv');

            // Sayfayı en üste kaydır
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        // TV URL'ini kontrol et ve gerekirse içeriği göster
        checkTvUrl() {
            const path = window.location.pathname;
            if (path.endsWith('/canli-tv') || path.endsWith('/live-tv')) {
                this.showTvContent();
            } else {
                // TV sayfasından ayrıldığımızda
                const tvContainer = document.querySelector('.tv-iframe-container');
                if (tvContainer) {
                    tvContainer.remove();
                    // Gizlenmiş içeriği tekrar göster
                    const mainContent = document.querySelector('#main__content');
                    if (mainContent) {
                        Array.from(mainContent.children).forEach(child => {
                            child.style.display = '';
                        });
                    }
                }
            }
        },

        // Yeni fonksiyon ekliyoruz
        replaceTopGamesSvg() {
            const topGamesWrapper = document.querySelector('#top-games-wrapper');
            if (topGamesWrapper) {
                const svgIcons = topGamesWrapper.querySelectorAll('svg.svg-icon');
                svgIcons.forEach(oldSvg => {
                    const newSvg = `<svg class="svg-icon" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.87301 5.1951L9.29915 4.43089C10.9457 1.47698 11.7691 0 13 0C14.2308 0 15.0542 1.47695 16.7008 4.43089L17.127 5.19513C17.5947 6.03451 17.8287 6.4542 18.1935 6.73113C18.5583 7.00805 19.0127 7.11086 19.9214 7.31644L20.7485 7.50361C23.9462 8.22712 25.545 8.58885 25.9253 9.81212C26.3057 11.0352 25.2158 12.3097 23.036 14.859L22.4718 15.5183C21.8525 16.2427 21.5428 16.6049 21.4034 17.0531C21.2641 17.5011 21.3109 17.9844 21.4045 18.9508L21.4898 19.8307C21.8194 23.2317 21.984 24.9324 20.9882 25.6882C19.9924 26.4443 18.4956 25.755 15.5017 24.3765L14.7272 24.0198C13.8762 23.6282 13.4508 23.4322 13 23.4322C12.5491 23.4322 12.1238 23.6282 11.2728 24.0198L10.4983 24.3765C7.50445 25.755 6.00753 26.4443 5.01168 25.6882C4.01585 24.9324 4.18064 23.2317 4.51022 19.8307L4.59547 18.9508C4.68912 17.9844 4.73595 17.5011 4.59662 17.0531C4.45728 16.6049 4.14754 16.2427 3.5281 15.5183L2.96413 14.859C0.784214 12.3097 -0.30573 11.0352 0.074649 9.81212C0.455029 8.58885 2.05384 8.22709 5.2514 7.50361L6.07864 7.31644C6.98731 7.11086 7.44163 7.00805 7.80649 6.73113C8.17127 6.4542 8.40527 6.03451 8.87301 5.1951Z" fill="#A7A7A7"/>
                    </svg>`;
                    oldSvg.outerHTML = newSvg;
                });
            }
        },

        // Blog link li elementini yakalama ve taşıma fonksiyonu
        findBlogLinkElement() {
            const sidebarMenu = document.querySelector('.sidebar__menu');
            //sidebarMenu.querySelector('li a[href="/en/blog"], li a[href="/tr/blog"]')?.closest('li').remove();
            //sidebarMenu.querySelector('li a[href="/en/trade"], li a[href="/tr/trade"]')?.closest('li').remove();

            return null;
        },

        moveSportsBookElement() {
            const sidebarMenu = document.querySelector('.sidebar__menu');
            if (sidebarMenu) {
                // Dropdown menülü sportsbook elementini bul
                const sportsBookDropdown = sidebarMenu.querySelector('li a[href="/en/sportsbook"].no-bg, li a[href="/tr/sportsbook"].no-bg')?.closest('li');
                // Collapse menüsünü bul
                const sportsBookCollapse = document.querySelector('#collapse-menu4');
                // Standalone sportsbook elementini bul
                const standaloneSportsBook = sidebarMenu.querySelector('li a[href="/en/sportsbook"]:not(.no-bg), li a[href="/tr/sportsbook"]:not(.no-bg)')?.closest('li');

                if (sportsBookDropdown && standaloneSportsBook && sportsBookCollapse) {
                    // Önce collapse menüsünü taşı
                    standaloneSportsBook.after(sportsBookCollapse);
                    // Sonra dropdown menüyü taşı
                    standaloneSportsBook.replaceWith(sportsBookDropdown);
                }

                // Add sidebar image with progress bar
               
            }
        }
    };

    // Payment Banner Component
    const PaymentBannerComponent = {
        render() {
            try {
                const t = AppState.translations[AppState.currentLanguage].payment;

                return `
                    <div class="payment-banner container">
                        <div class="payment-text">
                            ${t.title}
                        </div>
                        <div class="payment-methods">
                            <img src="${BASE_URI}/payment_methods.png" alt="Payment Methods">
                        </div>
                        <div class="payment-cta-wrapper">
                            ${getUserFromLocalStorage() ? `
                                <a class="payment-cta" onclick="event.preventDefault(); const path = document.documentElement.lang === 'tr' ? '?modal=wallet' : '?modal=wallet'; window.history.pushState('', '', path); window.history.pushState('', '', path); window.history.go(-1);">
                                    ${t.wallet}
                                </a>
                            ` : `
                                <a class="payment-cta" onclick="event.preventDefault(); const path = document.documentElement.lang === 'tr' ? '?modal=register' : '?modal=register'; window.history.pushState('', '', path); window.history.pushState('', '', path); window.history.go(-1);">
                                    ${t.cta}
                                </a>
                            `}
                        </div>
                    </div>
                `;
            } catch (error) {
                console.error('Error rendering payment banner:', error);
                return '';
            }
        }
    };

    // Games Component
    const GamesComponent = {
        render(games) {
            try {
                if (!games || !games.length) {
                    return `
                        <div class="no-games-found">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <p>No games found</p>
                        </div>
                    `;
                }

                return `
                    <div class="games-container">
                        ${games.map(game => `
                            <a href="/casino/games/${game.slug}" class="game-card" data-game-slug="${game.slug}" data-rr="true" onclick="event.preventDefault(); const path = document.documentElement.lang === 'tr' ? '/tr/casino/games/${game.slug}' : '/en/casino/games/${game.slug}'; window.history.pushState('', '', path); window.history.pushState('', '', path); window.history.go(-1);">
                                <div class="game-image">
                                    <img src="${game.image}" alt="${game.name}">
                                </div>
                                <div class="game-info">
                                    <h3 class="game-name">${game.name || 'Game Name'}</h3>
                                    <span class="game-provider">${game.provider || 'Provider'}</span>
                                </div>
                                <div class="play-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                `;
            } catch (error) {
                console.error('Error rendering games:', error);
                return '';
            }
        }
    };

    // Casino Component
    const CasinoComponent = {
        providers: [],
        selectedProvider: null,

        async fetchProviders() {
            try {
                const timestamp = Math.floor(Date.now() / 1000);
                const response = await fetch('https://api1.jukd049944jdjdh333ikslisspoelerss44shh334opodjd4ssd.com/api/player/public/providers/index', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        type: null,
                        rt: '1744988812'
                    })
                });

                const result = await response.json();
                const providers = result.data || [];

                const providerFilter = document.querySelector('.provider-filter-grid');
                if (!providerFilter) return;

                providerFilter.innerHTML = providers.map(provider => {
                    const isPragmatic = provider.identifier.toLowerCase() === 'pragmaticplay';
                    const darkLogoProviders = ['hacksaw', 'ebetlab','pgsoft'];
                    const isDarkLogo = darkLogoProviders.includes(provider.identifier.toLowerCase());

                    return `
                        <div class="provider-option ${isPragmatic ? 'selected' : ''} ${isDarkLogo ? 'dark-logo' : ''}" data-provider="${provider.id}">
                            <div class="provider-option-logo">
                                <img src="${provider.image}" alt="${provider.name}" loading="lazy">
                            </div>
                        </div>
                    `;
                }).join('');

                // Initialize event listeners after adding providers
                this.initializeSearch();

                return providers;
            } catch (error) {
                console.error('Error fetching providers:', error);
                return [];
            }
        },

        async fetchGames(type, provider = null) {
            try {
                let url, body;
                const timestamp = Math.floor(Date.now() / 1000);

                switch(type) {
                    case 'playico-originals':
                        url = 'https://api1.jukd049944jdjdh333ikslisspoelerss44shh334opodjd4ssd.com/api/player/public/games2/provider/177';
                        body = {
                            type: "free-spins",
                            page: 1,
                            limit: 24,
                            //providers: provider ? [provider] : [],
                            sortBy: "sort",
                            direction: "desc",
                            rt: "1745885727"
                        };
                        break;
                    case 'slots':
                        url = 'https://api1.jukd049944jdjdh333ikslisspoelerss44shh334opodjd4ssd.com/api/player/public/games2/group/new-releases';
                        body = {
                            type: "new-releases",
                            page: 1,
                            limit: 24,
                            providers: provider ? [provider] : [],
                            sortBy: "sort",
                            direction: "desc",
                            rt: timestamp
                        };
                        break;
                    case 'table':
                        url = 'https://api1.jukd049944jdjdh333ikslisspoelerss44shh334opodjd4ssd.com/api/player/public/games2/group/table-games';
                        body = {
                            type: "table-games",
                            page: 1,
                            limit: 24,
                            providers: provider ? [provider] : [],
                            sortBy: "sort",
                            direction: "desc",
                            rt: timestamp
                        };
                        break;
                    case 'live':
                        url = 'https://api1.jukd049944jdjdh333ikslisspoelerss44shh334opodjd4ssd.com/api/player/public/games2/group/live-lobby';
                        body = {
                            type: "live",
                            page: 1,
                            limit: 24,
                            providers: provider ? [provider] : [],
                            sortBy: "sort",
                            direction: "desc",
                            rt: timestamp
                        };
                        break;


                    default:
                        url = 'https://api1.jukd049944jdjdh333ikslisspoelerss44shh334opodjd4ssd.com/api/player/public/games2/group/lobby';
                        body = {
                            type: "lobby",
                            page: 1,
                            limit: 24,
                            providers: provider ? [provider] : [],
                            sortBy: "sort",
                            direction: "desc",
                            rt: timestamp
                        };
                }

                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                if(type === 'slots1' || type === 'table1' || type === 'live1') {
                    return data?.data || [];
                }
                return data.data?.data || [];
            } catch (error) {
                console.error('Error fetching games:', error);
                return [];
            }
        },

        toggleMainContentVisibility(isLobby) {
            const mainContent = document.querySelector('#main__content');
            if (!mainContent) return;

            Array.from(mainContent.children).forEach(child => {
                // Always hide specific containers
                if (child.classList.contains('welcome-container') ||
                    child.classList.contains('brand-container') ||
                    child.classList.contains('payment-container') ||
                    child.classList.contains('features-container') ||
                    child.classList.contains('banner-container') ||
                    child.classList.contains('banner-slider') ||
                    child.classList.contains('popular-sports-container')) {
                    child.style.display = 'none';
                    return;
                }

                // Handle other containers
                if (child.classList.contains('casino-container')) {
                    child.style.display = ''; // Always show casino container
                } else {
                    child.style.display = isLobby ? '' : 'none';
                }
            });
        },

        async searchGames(query) {
            try {
                const timestamp = Math.floor(Date.now() / 1000);
                const response = await fetch('https://api1.jukd049944jdjdh333ikslisspoelerss44shh334opodjd4ssd.com/api/player/public/games2/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: query,
                        rt: '1744988812'
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                return data.data || [];
            } catch (error) {
                console.error('Error searching games:', error);
                return [];
            }
        },

        initializeSearch() {
            const searchInput = document.querySelector('.custom-search__input');
            const searchResults = document.querySelector('.custom-search__results');
            const gamesContainer = document.querySelector('#games-container');
            const filterBtn = document.querySelector('.custom-search__filter-btn');
            const providerFilter = document.querySelector('.provider-filter');
            let searchTimeout;
            let lastActiveFilter = 'lobby';

            if (!searchInput || !searchResults) return;

            // Önce tüm event listener'ları kaldır
            const newFilterBtn = filterBtn.cloneNode(true);
            filterBtn.parentNode.replaceChild(newFilterBtn, filterBtn);

            const newProviderFilter = providerFilter.cloneNode(true);
            providerFilter.parentNode.replaceChild(newProviderFilter, providerFilter);

            // Yeni ve basit event listener'lar ekle
            newFilterBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                newProviderFilter.classList.toggle('active');
                newFilterBtn.classList.toggle('active');
            });

            // Dışarı tıklandığında kapat
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.custom-search')) {
                    newProviderFilter.classList.remove('active');
                    newFilterBtn.classList.remove('active');
                }
            });

            // Provider filter içine tıklandığında event'i durdur
            newProviderFilter.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            // Provider options için event listener'ları ekle
            const providerGrid = newProviderFilter.querySelector('.provider-filter-grid');
            if (providerGrid) {
                // Önce tüm selected class'larını kaldır
                providerGrid.querySelectorAll('.provider-option').forEach(opt => {
                    opt.classList.remove('selected');
                });

                // Sadece pragmaticplay'i seçili yap (varsayılan olarak)
                const defaultProvider = providerGrid.querySelector('[data-provider="pragmaticplay"]');
                if (defaultProvider) {
                    defaultProvider.classList.add('selected');
                    this.selectedProvider = 'pragmaticplay';
                }

                // Click event'lerini ekle
                providerGrid.addEventListener('click', async (e) => {
                    const clickedOption = e.target.closest('.provider-option');
                    if (!clickedOption) return;

                    const provider = clickedOption.dataset.provider;

                    // Tüm seçimleri kaldır
                    providerGrid.querySelectorAll('.provider-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });

                    // Eğer zaten seçili olan provider'a tıklandıysa seçimi kaldır
                    if (this.selectedProvider === provider) {
                        this.selectedProvider = null;
                        newFilterBtn.classList.remove('active');

                        this.toggleMainContentVisibility(true);
                        const activeFilterItem = document.querySelector('.filter-item.active');
                        if (activeFilterItem && activeFilterItem.getAttribute('data-filter') !== 'lobby') {
                            const filterType = activeFilterItem.getAttribute('data-filter');
                            const games = await this.fetchGames(filterType);
                            if (gamesContainer) {
                                gamesContainer.innerHTML = '<div class="loading-games"></div>';
                                setTimeout(() => {
                                    gamesContainer.innerHTML = GamesComponent.render(games);
                                }, 300);
                            }
                        } else {
                            if (gamesContainer) {
                                gamesContainer.innerHTML = '';
                            }
                        }
                    } else {
                        // Yeni seçim yap
                        this.selectedProvider = provider;
                        clickedOption.classList.add('selected');
                        newFilterBtn.classList.add('active');

                        this.toggleMainContentVisibility(false);

                        const activeFilterItem = document.querySelector('.filter-item.active');
                        const filterType = activeFilterItem ? activeFilterItem.getAttribute('data-filter') : 'slots';

                        if (gamesContainer) {
                            gamesContainer.innerHTML = '<div class="loading-games"></div>';
                            const games = await this.fetchGames(filterType, this.selectedProvider);
                            setTimeout(() => {
                                gamesContainer.innerHTML = GamesComponent.render(games);
                            }, 300);
                        }
                    }
                });
            }

            const renderGamesInContainer = (games) => {
                if (!games.length) {
                    gamesContainer.innerHTML = `
                        <div class="no-games-found">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <p>No games found</p>
                        </div>
                    `;
                    return;
                }

                gamesContainer.innerHTML = `
                    <div class="games-container">
                        ${games.map(game => `
                            <a href="/casino/games/${game.slug}" class="game-card" data-game-slug="${game.slug}" data-rr="true" onclick="event.preventDefault(); const path = document.documentElement.lang === 'tr' ? '/tr/casino/games/${game.slug}' : '/en/casino/games/${game.slug}'; window.history.pushState('', '', path); window.history.pushState('', '', path); window.history.go(-1);">
                                <div class="game-image">
                                    <img src="${game.image}" alt="${game.name}">
                                </div>
                                <div class="game-info">
                                    <h3 class="game-name">${game.name || 'Game Name'}</h3>
                                    <span class="game-provider">${game.provider || 'Provider'}</span>
                                </div>
                                <div class="play-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                `;
            };

            const handleSearch = async (query) => {
                // Arama yapılıyorsa
                if (query.length >= 2) {
                    // Loading state göster
                    gamesContainer.innerHTML = '<div class="loading-games"></div>';

                    // Arama sonuçlarını kapat
                    searchResults.classList.remove('active');

                    // Oyunları getir ve göster
                    const games = await this.searchGames(query);
                    renderGamesInContainer(games);

                    // İçeriği gizle ve search aktif
                    this.toggleMainContentVisibility(false);

                    // Tüm filtrelerin active durumunu kaldır ve search'i active yap
                    document.querySelectorAll('.filter-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    searchInput.classList.add('active');
                } else {
                    // Arama temizlendiyse
                    searchInput.classList.remove('active');

                    // Son aktif filtreyi bul ve aktifleştir
                    const filterItems = document.querySelectorAll('.filter-items-wrapper .filter-item');
                    filterItems.forEach(item => {
                        if (item.getAttribute('data-filter') === lastActiveFilter) {
                            item.classList.add('active');
                            // Eğer lobby ise içeriği göster, değilse gizle
                            this.toggleMainContentVisibility(lastActiveFilter === 'lobby');

                            // Eğer lobby değilse oyunları yükle
                            if (lastActiveFilter !== 'lobby') {
                                this.fetchGames(lastActiveFilter).then(games => {
                                    renderGamesInContainer(games);
                                });
                            } else {
                                gamesContainer.innerHTML = ''; // Lobby'de oyunları temizle
                            }
                        }
                    });
                }
            };

            searchInput.addEventListener('input', async (e) => {
                const query = e.target.value.trim();
                clearTimeout(searchTimeout);

                // Aktif filtreyi kaydet (eğer search aktif değilse)
                if (!searchInput.classList.contains('active')) {
                    const activeFilter = document.querySelector('.filter-item.active');
                    if (activeFilter) {
                        lastActiveFilter = activeFilter.getAttribute('data-filter');
                    }
                }

                searchTimeout = setTimeout(() => handleSearch(query), 300);
            });

            // Enter tuşuna basıldığında
            searchInput.addEventListener('keypress', async (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const query = searchInput.value.trim();
                    handleSearch(query);
                }
            });

            // Close search results when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.custom-search')) {
                    searchResults.classList.remove('active');
                }
            });

            // Add filter button visibility toggle based on active filter
            const filterItems = document.querySelectorAll('.filter-item');
            filterItems.forEach(item => {
                item.addEventListener('click', () => {
                    const filterType = item.getAttribute('data-filter');

                    // Only show filter button for slots
                    if (filterType === 'slots') {
                        filterBtn.style.display = '';
                    } else {
                        filterBtn.style.display = 'none';
                        // Reset provider filter if active
                        if (this.selectedProvider) {
                            this.selectedProvider = null;
                            document.querySelector('.provider-option.selected')?.classList.remove('selected');
                            filterBtn.classList.remove('active');
                        }
                        providerFilter.classList.remove('active');
                    }
                });
            });

            // Initially hide filter button if not on slots
            const activeFilter = document.querySelector('.filter-item.active');
            if (activeFilter && activeFilter.getAttribute('data-filter') !== 'slots') {
                filterBtn.style.display = 'none';
            }

            // Add click outside handler for mobile modal
            document.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    if (!e.target.closest('.custom-search__filter-btn') &&
                        !e.target.closest('.provider-filter') &&
                        providerFilter.classList.contains('active')) {
                        providerFilter.classList.remove('active');
                    }
                }
            });
        },

        async moveSearch() {
            try {
                // Initialize search functionality
                this.initializeSearch();

                // Add click handlers for filter items
                const filterItems = document.querySelectorAll('.filter-items-wrapper .filter-item');
                const gamesContainer = document.querySelector('#games-container');

                // Initial state - check URL parameter
                const urlParams = new URLSearchParams(window.location.search);
                const tabParam = urlParams.get('tab');

                // Function to handle tab switching
                const switchTab = async (filterType) => {
                    // Update active state
                    filterItems.forEach(fi => fi.classList.remove('active'));
                    const activeTab = Array.from(filterItems).find(item => item.getAttribute('data-filter') === filterType);
                    if (activeTab) {
                        activeTab.classList.add('active');
                    }

                    // Toggle main content visibility
                    this.toggleMainContentVisibility(filterType === 'lobby');

                    // Handle games container
                    if (filterType !== 'lobby') {
                        gamesContainer.innerHTML = '<div class="loading-games"></div>';
                        const games = await this.fetchGames(filterType);
                        setTimeout(() => {
                            gamesContainer.innerHTML = GamesComponent.render(games);
                        }, 300);
                    } else {
                        gamesContainer.innerHTML = '';
                    }

                    // Payment Banner sadece lobby'de gösterilsin
                    const existingBanner = document.querySelector('.payment-banner');
                    if (filterType === 'lobby') {
                        if (!existingBanner) {
                            Router.insertPaymentBanner();
                        }
                    } else {
                        if (existingBanner) {
                            existingBanner.remove();
                        }
                    }
                };

                // Initial tab switch if parameter exists
                if (tabParam) {
                    await switchTab(tabParam);
                } else {
                    this.toggleMainContentVisibility(true);
                    gamesContainer.innerHTML = '';
                }

                // Click handlers for tabs
                filterItems.forEach(item => {
                    item.addEventListener('click', async (e) => {
                        e.preventDefault();
                        const filterType = item.getAttribute('data-filter');

                        // Update URL without page reload
                        const newUrl = new URL(window.location);
                        if (filterType === 'lobby') {
                            newUrl.searchParams.delete('tab');
                        } else {
                            newUrl.searchParams.set('tab', filterType);
                        }
                        window.history.pushState({}, '', newUrl);

                        await switchTab(filterType);
                    });
                });

            } catch (error) {
                console.error('Error moving search:', error);
            }
        },

        render() {
            try {
                this.fetchProviders();

                const t = AppState.translations[AppState.currentLanguage].casino;

                return `
                    <div class="casino-container container">
                        <div class="casino-filter">
                            <div class="custom-search">
                                <div style="position: relative; flex-grow: 1;">
                                    <input type="text" class="custom-search__input" placeholder="Search games...">
                                    <svg class="custom-search__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                                <button class="custom-search__filter-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                    </svg>
                                </button>
                                <div class="provider-filter">
                                    <div class="provider-filter-grid">
                                        <!-- Provider options will be dynamically added here -->
                                    </div>
                                </div>
                                <div class="custom-search__results"></div>
                            </div>
                            <div class="filter-items-wrapper">
                                <a href="#" data-filter="lobby" class="filter-item active" data-rr="true">${t.lobby}</a>
                                <a href="#" data-filter="playico-originals" class="filter-item" data-rr="true">
                                    <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.8827 0.64232C14.896 1.0623 15.7827 1.65521 16.5427 2.37164C17.3027 3.11278 17.9107 3.97744 18.3413 4.94092C18.772 5.92911 19 6.9667 19 8.10312C19 9.23953 18.772 10.2771 18.3413 11.2653C17.9107 12.2535 17.3027 13.0934 16.5427 13.8346C15.7827 14.551 14.896 15.1439 13.8827 15.5639C12.8693 15.9839 11.8053 16.2062 10.64 16.2062H8.00533L5.44667 11.6112H10.64C11.1213 11.6112 11.6027 11.5124 12.0333 11.3394C12.464 11.1418 12.844 10.8947 13.1733 10.5489C13.4773 10.203 13.7307 9.80773 13.9333 9.33835C14.136 8.86896 14.212 8.35016 14.212 7.78195C14.212 7.21375 14.1107 6.84318 13.9333 6.37379C13.7307 5.92911 13.4773 5.53383 13.1733 5.16327C12.8693 4.8174 12.4893 4.52095 12.0333 4.2986C11.6027 4.07626 11.1213 3.97744 10.64 3.97744H4.68667V23H0V0H10.64C11.78 0 12.8693 0.222342 13.8827 0.64232Z" fill="white"/>
                                    </svg>
                                    ${t.playicoOriginals}
                                </a>
                                <a href="#" data-filter="slots" class="filter-item" data-rr="true">
                                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.28163 21.6409C5.70502 21.6409 5.23779 22.1669 5.23779 22.8154C5.23779 23.4639 5.70531 23.99 6.28163 23.99C6.85794 23.99 7.32546 23.4642 7.32546 22.8154C7.32546 22.1667 6.85823 21.6409 6.28163 21.6409Z" fill="white"/>
                                        <path d="M14.9115 21.6409C14.3349 21.6409 13.8677 22.1669 13.8677 22.8154C13.8677 23.4639 14.3349 23.99 14.9115 23.99C15.4881 23.99 15.9553 23.4642 15.9553 22.8154C15.9553 22.1667 15.4881 21.6409 14.9115 21.6409Z" fill="white"/>
                                        <path d="M10.5971 21.6409C10.0204 21.6409 9.55322 22.1669 9.55322 22.8154C9.55322 23.4639 10.0207 23.99 10.5971 23.99C11.1737 23.99 11.6409 23.4642 11.6409 22.8154C11.6409 22.1667 11.1737 21.6409 10.5971 21.6409Z" fill="white"/>
                                        <path d="M22.4836 8.49604C22.7915 8.49604 23.0701 8.35569 23.2719 8.1286C23.4737 7.90151 23.5985 7.58796 23.5985 7.24151C23.5985 6.54866 23.0993 5.9873 22.4836 5.9873C21.8678 5.9873 21.3687 6.54899 21.3687 7.24151C21.3687 7.93435 21.8678 8.49604 22.4836 8.49604Z" fill="white"/>
                                        <path d="M22.4832 9.31546C22.2495 9.31546 21.9849 9.46671 21.9849 9.70036V18.8003C21.9849 19.0755 22.2079 19.2986 22.4831 19.2986C22.7583 19.2986 22.9814 19.0755 22.9814 18.8003V9.70034C22.9814 9.46692 22.7166 9.31546 22.4832 9.31546Z" fill="white"/>
                                        <path d="M19.9883 0.654907H1.03505C0.713033 0.654907 0.452148 0.948464 0.452148 1.31081V24.9674C0.452148 26.072 1.34758 26.9674 2.45215 26.9674H18.5715C19.6761 26.9674 20.5715 26.072 20.5715 24.9674V1.31081C20.5712 0.948464 20.3103 0.654907 19.9883 0.654907ZM14.0736 2.25457C14.5583 2.25457 14.9512 2.69656 14.9512 3.24203C14.9512 3.7875 14.5583 4.22949 14.0736 4.22949C13.5889 4.22949 13.1961 3.7875 13.1961 3.24203C13.1961 2.69656 13.5889 2.25457 14.0736 2.25457ZM10.5966 1.47626C11.463 1.47626 12.1655 2.26675 12.1655 3.24164C12.1655 4.21652 11.463 5.00701 10.5966 5.00701C9.73026 5.00701 9.02774 4.21652 9.02774 3.24164C9.02774 2.26675 9.73026 1.47626 10.5966 1.47626ZM7.11965 2.25457C7.60435 2.25457 7.99721 2.69656 7.99721 3.24203C7.99721 3.7875 7.60435 4.22949 7.11965 4.22949C6.63495 4.22949 6.24209 3.7875 6.24209 3.24203C6.24244 2.69656 6.63524 2.25457 7.11965 2.25457ZM6.28245 24.6712C5.37177 24.6712 4.63372 23.8407 4.63372 22.816C4.63372 21.7913 5.37206 20.9608 6.28245 20.9608C7.19314 20.9608 7.93119 21.7916 7.93119 22.816C7.93119 23.8404 7.19314 24.6712 6.28245 24.6712ZM10.5966 24.6712C9.68596 24.6712 8.9479 23.8407 8.9479 22.816C8.9479 21.7913 9.68596 20.9608 10.5966 20.9608C11.5073 20.9608 12.2454 21.7916 12.2454 22.816C12.2454 23.8404 11.5073 24.6712 10.5966 24.6712ZM14.9108 24.6712C14.0001 24.6712 13.2621 23.8407 13.2621 22.816C13.2621 21.7913 14.0001 20.9608 14.9108 20.9608C15.8215 20.9608 16.5596 21.7916 16.5596 22.816C16.5595 23.8404 15.8215 24.6712 14.9108 24.6712ZM19.2991 18.4477H3.89419C2.78962 18.4477 1.89419 17.5522 1.89419 16.4477V7.90695C1.89419 6.80238 2.78962 5.90695 3.89419 5.90695H17.299C18.4036 5.90695 19.299 6.80238 19.299 7.90695V18.4476C19.299 18.4476 19.2991 18.4477 19.2991 18.4477Z" fill="white"/>
                                        <path d="M7.11925 7.03386C7.11925 7.0337 7.11912 7.03357 7.11895 7.03357H4.60596C3.50139 7.03357 2.60596 7.929 2.60596 9.03357V15.3035C2.60596 16.4081 3.50139 17.3035 4.60596 17.3035H5.11925C6.22382 17.3035 7.11925 16.4081 7.11925 15.3035V7.03386ZM6.53723 11.2772C6.53658 11.2772 6.53605 11.2778 6.53606 11.2784C6.53618 11.285 6.53723 11.2905 6.53723 11.2972C6.53723 12.2055 5.62676 12.6788 5.45597 13.5923C5.35968 14.1073 5.02214 14.6548 4.49822 14.6548C4.12483 14.6548 3.78919 14.3709 3.87965 14.0086C4.08515 13.1857 4.87871 12.6028 5.33725 12.0723C5.52883 11.8507 5.30442 11.6478 5.01146 11.6478C4.5319 11.6478 4.41781 11.4249 3.93173 11.3254C3.76538 11.2913 3.6209 11.4289 3.6209 11.5987V11.6759C3.6209 11.7956 3.52392 11.8925 3.40429 11.8925C3.28466 11.8925 3.18768 11.7956 3.18768 11.6759V10.7387C3.18768 10.6191 3.28466 10.5221 3.40429 10.5221H3.61704C3.61917 10.5221 3.6209 10.5238 3.6209 10.526C3.6209 10.528 3.62258 10.5297 3.62461 10.5298C4.38838 10.5811 4.44454 10.8922 5.01146 10.8922C5.50881 10.8922 5.71242 10.6517 6.16182 10.5583C6.36607 10.5158 6.53729 10.6909 6.53729 10.8995V11.2772C6.53729 11.2772 6.53726 11.2772 6.53723 11.2772Z" fill="white"/>
                                        <path d="M22.8895 19.9618C21.9654 19.9618 21.2163 20.7109 21.2163 21.6349V23.5064C21.2163 24.4305 21.9654 25.1796 22.8895 25.1796C24.1701 25.1796 25.2079 24.0115 25.2079 22.5708C25.2081 21.1299 24.1701 19.9618 22.8895 19.9618Z" fill="white"/>
                                        <path d="M18.2984 7.03386C18.2984 7.0337 18.2983 7.03357 18.2982 7.03357H15.7852C14.6806 7.03357 13.7852 7.929 13.7852 9.03357V15.3035C13.7852 16.4081 14.6806 17.3035 15.7852 17.3035H16.2984C17.403 17.3035 18.2984 16.4081 18.2984 15.3035V7.03386ZM17.7164 11.2766C17.7164 11.277 17.7161 11.2772 17.7157 11.2772C17.7154 11.2772 17.7153 11.2775 17.7153 11.2778C17.7153 11.2846 17.7164 11.2903 17.7164 11.2972C17.7164 12.2055 16.806 12.6788 16.6352 13.5923C16.5389 14.1073 16.2013 14.6548 15.6774 14.6548C15.304 14.6548 14.9683 14.3709 15.0588 14.0086C15.2643 13.1857 16.0579 12.6028 16.5164 12.0723C16.708 11.8507 16.4836 11.6478 16.1906 11.6478C15.711 11.6478 15.597 11.4249 15.1109 11.3254C14.9445 11.2913 14.8 11.4289 14.8 11.5987V11.6759C14.8 11.7956 14.7031 11.8925 14.5834 11.8925C14.4638 11.8925 14.3668 11.7956 14.3668 11.6759V10.7387C14.3668 10.6191 14.4638 10.5221 14.5834 10.5221H14.7962C14.7983 10.5221 14.8 10.5238 14.8 10.526C14.8 10.528 14.8017 10.5297 14.8037 10.5298C15.5675 10.5811 15.624 10.8922 16.1906 10.8922C16.688 10.8922 16.8916 10.6517 17.341 10.5583C17.5452 10.5158 17.7164 10.6909 17.7164 10.8995V11.2766C17.7164 11.2766 17.7164 11.2766 17.7164 11.2766Z" fill="white"/>
                                        <path d="M12.7096 9.03357C12.7096 7.929 11.8141 7.03357 10.7096 7.03357H10.1963C9.09172 7.03357 8.19629 7.929 8.19629 9.03357V15.3035C8.19629 16.4081 9.09172 17.3035 10.1963 17.3035H10.7096C11.8141 17.3035 12.7096 16.4081 12.7096 15.3035V9.03357ZM12.1279 11.2766C12.1279 11.277 12.1275 11.2772 12.1271 11.2772C12.1268 11.2772 12.1266 11.2775 12.1266 11.2779C12.1267 11.2847 12.1279 11.2903 12.1279 11.2972C12.1279 12.2055 11.2174 12.6788 11.0466 13.5923C10.9503 14.1073 10.6127 14.6548 10.0888 14.6548C9.71541 14.6548 9.37975 14.3709 9.47022 14.0086C9.67573 13.1857 10.4693 12.6028 10.9278 12.0723C11.1194 11.8507 10.895 11.6478 10.602 11.6478C10.1227 11.6478 10.0085 11.4248 9.5223 11.3253C9.35595 11.2913 9.21147 11.4289 9.21147 11.5987V11.6759C9.21147 11.7956 9.11449 11.8925 8.99486 11.8925C8.87523 11.8925 8.77825 11.7956 8.77825 11.6759V10.7387C8.77825 10.6191 8.87523 10.5221 8.99486 10.5221H9.2076C9.20974 10.5221 9.21147 10.5238 9.21147 10.526C9.21147 10.528 9.21314 10.5297 9.21517 10.5298C9.97895 10.5811 10.0354 10.8922 10.602 10.8922C11.0994 10.8922 11.303 10.6517 11.7524 10.5583C11.9566 10.5158 12.1279 10.6909 12.1279 10.8995V11.2766Z" fill="white"/>
                                    </svg>
                                    ${t.slots}
                                </a>
                                <a href="#" data-filter="live" class="filter-item" data-rr="true">
                                    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.04 3.81333C20.61 1.47333 17.19 0 13.5 0C9.81 0 6.39 1.47333 3.96 3.81333C1.53 6.15333 0 9.44667 0 13C0 16.5533 1.53 19.8467 3.96 22.1867C6.39 24.5267 9.81 26 13.5 26C17.19 26 20.61 24.5267 23.04 22.1867C25.47 19.8467 27 16.5533 27 13C27 9.44667 25.47 6.15333 23.04 3.81333Z" fill="#F0F0F0"/>
                                    </svg>
                                    ${t.live}
                                </a>
                                <a href="#" data-filter="table" class="filter-item" data-rr="true">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0363 0H2.96229C1.32505 0 0 1.32833 0 2.96331V19.0381C0 20.673 1.32505 22 2.96229 22H19.0363C20.6749 22 22 20.673 22 19.0381V2.96331C21.9986 1.32833 20.6736 0 19.0363 0Z" fill="white"/>
                                    </svg>
                                    ${t.tableGames}
                                </a>
                            </div>
                        </div>
                        <div id="games-container"></div>
                    </div>
                `;
            } catch (error) {
                console.error('Error rendering casino component:', error);
                return '';
            }
        }
    };

    // Blog Component
    const BlogComponent = {
        render() {
            try {
                const t = AppState.translations[AppState.currentLanguage].blog;
                return ` 
                    <div class="blog-container">
                    </div>
                `;


            } catch (error) {
                console.error('Error rendering blog component:', error);
                return '';
            }
        }
    };

    // Login Modal Component
    const LoginModalComponent = {
        render() {
            try {
                const t = AppState.translations[AppState.currentLanguage].login || {
                    title: 'Oturum açmak',
                    email: 'E-posta veya kullanıcı adı',
                    password: 'Şifre',
                    login: 'Oturum açmak',
                    or: 'Veya',
                    forgotPassword: 'Parolanızı mı unuttunuz ?',
                    noAccount: 'Hesabın yok mu?',
                    register: 'Bir Hesap Kaydolun'
                };

                return `
                    <div class="modal fade show modal-fade" id="signin-modal" tabindex="-1" aria-labelledby="signin-modal" style="display: block;">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal__content">
                                    <div class="modal__head">
                                        <h6 class="modal__title">${t.title}</h6>
                                        <button class="modal__close" type="button">
                                            <svg class="svg-icon">
                                                <use href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#x" xlink:href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#x"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="modal__form">
                                        <div class="form__group">
                                            <label for="email" class="form__label">${t.email} <b>*</b></label>
                                            <input type="text" id="email" class="form__input" value="">
                                        </div>
                                        <div class="form__group form__group--pass0">
                                            <label for="password" class="form__label">${t.password} <b>*</b></label>
                                            <input autocomplete="current-password" type="password" class="form__input" id="password" value="">
                                            <button class="form__pass" type="button">
                                                <svg class="svg-icon">
                                                    <use href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#eye-show" xlink:href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#eye-show"></use>
                                                </svg>
                                            </button>
                                        </div>
                                        <button class="form__btn justify-center">
                                            <span class="padding-horiz--1">${t.login}</span>
                                        </button>
                                        <span class="form__delimiter">
                                            <span>${t.or}</span>
                                        </span>
                                        <div class="form__text">
                                            <p>
                                                <button type="button">${t.forgotPassword}</button>
                                            </p>
                                            <p>
                                                ${t.noAccount} <button type="button">${t.register}</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } catch (error) {
                console.error('Error rendering login modal:', error);
                return '';
            }
        },

        init() {
            try {
                // Add event listeners for password visibility toggle
                const passwordToggles = document.querySelectorAll('.form__pass');
                passwordToggles.forEach(toggle => {
                    toggle.addEventListener('click', function() {
                        const input = this.previousElementSibling;
                        const icon = this.querySelector('.svg-icon use');
                        if (input.type === 'password') {
                            input.type = 'text';
                            icon.setAttribute('href', '/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#eye-hide');
                            icon.setAttribute('xlink:href', '/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#eye-hide');
                        } else {
                            input.type = 'password';
                            icon.setAttribute('href', '/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#eye-show');
                            icon.setAttribute('xlink:href', '/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#eye-show');
                        }
                    });
                });

                // Add event listener for close button
                const closeButton = document.querySelector('#signin-modal .modal__close');
                if (closeButton) {
                    closeButton.addEventListener('click', function() {
                        const modal = document.querySelector('#signin-modal');
                        if (modal) {
                            modal.remove();
                            // Update URL to remove modal parameter
                            const url = new URL(window.location);
                            url.searchParams.delete('modal');
                            window.history.replaceState({}, '', url);
                        }
                    });
                }

                // Add event listener for clicking outside modal to close
                const modal = document.querySelector('#signin-modal');
                if (modal) {
                    modal.addEventListener('click', function(e) {
                        if (e.target === this) {
                            modal.remove();
                            // Update URL to remove modal parameter
                            const url = new URL(window.location);
                            url.searchParams.delete('modal');
                            window.history.replaceState({}, '', url);
                        }
                    });
                }

                // Add event listeners for form submission
                const form = document.querySelector('#signin-modal .modal__form');
                if (form) {
                    form.addEventListener('submit', function(e) {
                        e.preventDefault();
                        // Add your login logic here
                    });
                }

                // Focus on email input when modal opens
                const emailInput = document.querySelector('#signin-modal #email');
                if (emailInput) {
                    emailInput.focus();
                }
            } catch (error) {
                console.error('Error initializing login modal:', error);
            }
        }
    };

    // Promotions Component
    const PromotionsComponent = {
        render() {
            try {
                return `
                    <div class="promotions-banner">
                        <div class="promotions-banner__content">
                            <div class="promotions-banner__left">
                                <h2 class="promotions-banner__title">
                                    <span>BONUSU</span>
                                    <span>ŞİMDİ AL</span>
                                </h2>
                                <div class="promotions-banner__percentage">250%</div>
                                <div class="promotions-banner__subtitle">15.000₺'ye kadar</div>
                                <a href="#" class="promotions-banner__link">Detayları gör ></a>
                            </div>
                            <div class="promotions-banner__center">
                                <div class="bonus-boxes">
                                    <div class="bonus-box">
                                        <div class="bonus-box__title">İlk Yatırım Bonusu | Min 200₺</div>
                                        <div class="bonus-box__percentage">150%</div>
                                        <div class="bonus-box__label">Bonus</div>
                                        <button class="bonus-box__button">Bonusu Al</button>
                                    </div>
                                    <div class="bonus-box">
                                        <div class="bonus-box__title">İlk Yatırım Bonusu | Min 200₺</div>
                                        <div class="bonus-box__percentage">150%</div>
                                        <div class="bonus-box__label">Bonus</div>
                                        <button class="bonus-box__button">Bonusu Al</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="promotions-banner__right">
                            <img src="https://playicogiris.net/playico/mascot.png" alt="Mascot" class="promotions-banner__mascot">
                        </div>
                    </div>
                `;
            } catch (error) {
                console.error('Error rendering promotions component:', error);
                return '';
            }
        }
    };

    // Page Manager
    const PageManager = {
        render() {
            try {
                const mainContent = document.querySelector('#main__content');
                if (!mainContent) return;

                this.cleanup();

                let pageContent = '';
                if (AppState.currentPage === 'casino') {
                    pageContent = CasinoComponent.render();
                    const container = document.createElement('div');
                    container.innerHTML = pageContent;
                    mainContent.prepend(container.firstElementChild);
                    CasinoComponent.moveSearch();
                } else if (AppState.currentPage === 'blog') {
                    pageContent = BlogComponent.render();
                    const container = document.createElement('div');
                    container.innerHTML = pageContent;
                    mainContent.prepend(container.firstElementChild);
                }
                // Remove promotions rendering from PageManager since it's handled in RouteHandler
            } catch (error) {
                console.error('Error rendering page:', error);
            }
        },

        cleanup() {
            try {
                const containers = document.querySelectorAll('.casino-container, .blog-container, .payment-banner, .promotions-wrapper, .promotions-banner');
                containers.forEach(container => container.remove());
            } catch (error) {
                console.error('Error cleaning up:', error);
            }
        }
    };

    // Initialize App
    async function initApp() {
        try {
            // Get bearer token from localStorage
            const bearerToken = localStorage.getItem('bearer');

            // Make API call to get user data
            /*
            const response = await fetch('https://api1.ebetlab.com/api/player/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${bearerToken}`
                },
                body: JSON.stringify({ rt: 1744988812 })
            });


            const data = await response.json();

            if (data.success && data.data.username) {
                window.user = data.data;
            }
            */

            // Initialize router
            Router.init().catch(error => {
                console.error('Error initializing app:', error);
            });
        } catch (error) {
            console.error('Error in app initialization:', error);
            // Still try to initialize router even if API call fails
            Router.init().catch(error => {
                console.error('Error initializing app:', error);
            });
        }
    }

    // Start the app
    initApp();

    function initializeHeaderLinks() {
        // Header search içindeki linkleri seç
        const headerLinks = document.querySelector('.header__search .sidebar__links').querySelectorAll('a');

        headerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('http') && !href.startsWith('https')) {
                    e.preventDefault();
                    window.history.pushState("", "", href);
                    window.history.pushState("", "", href);
                    window.history.go(-1);
                }
            });
        });
    }

    // Sayfa yüklendiğinde initialize et
    //document.addEventListener('DOMContentLoaded', initializeHeaderLinks);

    // DOM değişikliklerini izle
    const observer = new MutationObserver(() => {
        //initializeHeaderLinks();
    });

    observer.observe(document.querySelector('.header__search'), {
        childList: true,
        subtree: true
    });

    function getUserFromLocalStorage() {
        try {
            const userStr = localStorage.getItem('user');
            if (!userStr) return null;
            const userObj = JSON.parse(userStr);
            // Beklenen yapıda mı kontrolü (ör: success ve data var mı)
            if (userObj && typeof userObj === 'object' && userObj.success && userObj.data) {
                return userObj;
            }
            return null;
        } catch (e) {
            return null;
        }
    }
})();