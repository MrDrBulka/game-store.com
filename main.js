// Общие данные и функции для всех страниц
const games = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        image: "img/cyberpunk.jpg",
        genres: ["RPG","Открытый мир", "Киберпанк","Шутер"],
        price: 7190,
        discount: 60,
        platforms: ["pc", "ps", "xbox"],
        badge: "Скидка",
        bestseller: true
    },
    {
        id: 2,
        title: "Elden Ring",
        image: "img/ering.jpg",
        genres: ["RPG", "Dark Fantasy", "Открытый мир"],
        price: 18000,
        platforms: ["pc", "ps", "xbox"],
        badge: "Хит",
        bestseller: true,
        
        
    },
    {
        id: 3,
        title: "FIFA 23",
        image: "img/fifa.jpg",
        genres: ["Спорт", "Футбол", "Симулятор"],
        price: 16299,
        platforms: ["pc", "ps", "xbox"]
    },
    {
        id: 4,
        title: "The Witcher 3: Wild Hunt",
        image: "img/wedmak.jpg",
        genres: ["RPG", "Открытый мир", "Фэнтези"],
        price: 2990,
        discount: 80,
        platforms: ["pc", "ps", "xbox", "switch"],
        badge: "Скидка",
        bestseller: true
    },
    {
        id: 5,
        title: "Call of Duty: Modern Warfare II",
        image: "img/cod.jpeg",
        genres: ["Шутер","Экшен", "Мультиплеер"],
        price: 31600,
        platforms: ["pc", "ps", "xbox"]
    },
    {
        id: 6,
        title: "The Legend of Zelda: Tears of the Kingdom",
        image: "img/zelda.jpg",
        genres: ["Приключения", "Открытый мир", "Экшен","Фэнтези"],
        price: 33000,
        platforms: ["switch"],
        badge: "Новинка"
    },
    {
        id: 7,
        title: "Starfield",
        image: "img/starfield.jpg",
        genres: ["RPG", "Открытый мир", "Космос"],
        price: 24999,
        platforms: ["pc", "xbox"],
        
    },
    {
        id: 8,
        title: "Hogwarts Legacy",
        image: "img/HOg.jpeg",
        genres: ["RPG", "Открытый мир", "Фэнтези"],
        price: 23990,
        platforms: ["pc", "ps", "xbox", "switch"]
    },
    {
        id: 9,
        title: "Red Dead Redemption 2",
        image: "img/rdr.jpeg",
        genres: ["Экшен", "Приключения","Шутер","Открытый мир"],
        platforms: ["pc", "ps", "xbox"],
        price: 7499,
        discount: 75,
        isNew: false,
        badge: "Скидка",
        bestseller: true,
        badge:"Топ продаж"
    },
    {
        id: 10,
        title: "Assassin's Creed Valhalla",
        image: "img/assassins creed.jpg",
        genres: ["Экшен", "RPG","Открытый мир"],
        platforms: ["pc", "ps", "xbox"],
        price: 14699,
        isNew: false
    },
    {
        id: 11,
        title: "God of War",
        image: "img/GOw.png",
        genres: ["Экшен", "Приключения"],
        platforms: ["ps"],
        price: 18999,
        isNew: true,
        
    },
    {
        id: 12,
        title: "Forza Horizon 5",
        image: "img/forza.jpg",
        genres: ["Гонки", "Спорт"],
        platforms: ["pc", "xbox"],
        price: 19900,
        isNew: false,
        bestseller: true,
        badge:"Топ продаж"
    },
    {
        id: 13,
        title: "Resident Evil 4 Remake",
        image: "img/rez.jpg",
        genres: ["Экшен", "Survival Horror","Шутер"],
        platforms: ["pc", "ps", "xbox"],
        price: 12799,
        isNew: true,
        badge: "Новинка",
        bestseller: true
    },
    {
        id: 14,
        title: "Dead Space Remake",
        image: "img/dps.jpg",
        genres: ["Survival Horror", "Экшен"],
        platforms: ["pc", "ps", "xbox"],
        price: 19590,
        isNew: true
    },
    {
        id: 15,
        title: "Street Fighter 6",
        image: "img/sf.jpg",
        genres: ["Файтинг"],
        platforms: ["pc", "ps", "xbox"],
        price: 15499,
        isNew: true,
        badge: "Хит"
    },
    {
        id: 16,
        title: "Diablo IV",
        image: "img/diablo.jpg",
        genres: ["RPG", "Экшен"],
        platforms: ["pc", "ps", "xbox"],
        price: 22500,
        isNew: true,
    },
    {
        id: 17,
        title: "Tekken 8",
        image: "img/tekken.jpg",
        genres: ["Файтинг"],
        platforms: ["ps", "xbox","pc"],
        price: 24200,
        isNew: true,
        badge: "Хит",
    },
    {
        id: 18,
        title: "Sekiro:Shadow Die Twice",
        image: "img/sekiro.jpg",
        genres: ["Приключения","Экшен"],
        platforms: ["pc", "ps"],
        price: 27100,
        isNew: false
    },
    {
        id: 19,
        title: "Black myth:Wukong",
        image: "img/bibizan.jpg",
        genres: ["Экшен", "Приключения"],
        platforms: ["pc", "ps"],
        price: 19900,
        isNew: true,
        badge: "Хит",
        bestseller: true
    },
    {
        id: 20,
        title: "Marvel's Spider-Man Remastered",
        image: "img/spider.jpeg",
        genres: ["Экшен", "Приключения","Открытый мир"],
        platforms: ["ps", "xbox","pc"],
        price: 23400,
        isNew: false,
    },
    {
        id:21,
        title: "DOOM: The Dark Ages",
        image: "img/doom.jpg",
        genres: ["Экшен", "Приключения","Шутер"],
        platforms: ["ps", "xbox","pc"],
        price: 29999,
        isNew: true,
        badge: "Новинка",
      
    },
    {
        id:22,
        title: "StelLar Blade",
        image: "img/stellarblade.jpg",
        genres: ["Экшен","Приключения",],
        platforms: ["ps","xbox","pc"],
        price: 27299,
        isNew: true,
        badge: "Предзаказ",
        bestseller: true
    }
];



const categories = [
    { name: "Экшен", icon: "fa-explosion", genre: "Экшен" },
    { name: "Шутеры", icon: "fa-gun", genre: "Шутер" },
    { name: "RPG", icon: "fa-magic-wand-sparkles", genre: "rpg" },
    { name: "Файтинг", icon: "fa-hand-fist", genre: "Файтинг" },
    { name: "Приключения", icon: "fa-mountain", genre: "Приключения" },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Общие функции
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => el.textContent = count);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    let icon = '';
    let bgColor = '';
    
    switch(type) {
        case 'success':
            icon = 'fa-check-circle';
            bgColor = 'var(--success)';
            break;
        case 'warning':
            icon = 'fa-exclamation-circle';
            bgColor = 'var(--warning)';
            break;
        case 'danger':
            icon = 'fa-times-circle';
            bgColor = 'var(--danger)';
            break;
        default:
            icon = 'fa-info-circle';
            bgColor = 'var(--primary)';
    }
    
    notification.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = bgColor;
    notification.style.color = 'white';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    notification.style.display = 'flex';
    notification.style.alignItems = 'center';
    notification.style.gap = '10px';
    notification.style.animation = 'fadeIn 0.3s';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Функции для работы с корзиной
function addToCart(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    const existingItem = cart.find(item => item.id === gameId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: game.id,
            title: game.title,
            price: game.price,
            image: game.image,
            quantity: 1
        });
    }
    
    updateCartCount();
    saveCart();
    showNotification(`"${game.title}" добавлен в корзину`);
}

function removeFromCart(gameId) {
    cart = cart.filter(item => item.id !== gameId);
    updateCartCount();
    saveCart();
    showNotification('Товар удален из корзины', 'warning');
}

function renderCart(cartItemsElement, cartTotalElement) {
    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<div class="empty-cart">Ваша корзина пуста</div>';
        cartTotalElement.textContent = '0 ₸';
        return;
    }
    
    let itemsHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        itemsHTML += `
            <div class="cart-item">
                <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${item.price} ₸ × ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    cartItemsElement.innerHTML = itemsHTML;
    cartTotalElement.textContent = `${total} ₸`;
}

// Функции для главной страницы
function initHomePage() {
    const gamesGrid = document.getElementById('gamesGrid');
    const categoriesGrid = document.getElementById('categoriesGrid');
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const closeCartModal = cartModal.querySelector('.close-modal');
    const authBtn = document.getElementById('authBtn');
    const authModal = document.getElementById('authModal');
    
    if (gamesGrid) renderGames(gamesGrid, games.slice(0, 8));
    if (categoriesGrid) renderCategories(categoriesGrid);
    
    // Обработчики для корзины
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
        renderCart(cartItems, cartTotal);
    });
    
    closeCartModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Обработчики для модального окна авторизации
    if (authBtn && authModal) {
        setupAuthModal(authBtn, authModal);
    }
    
    // Обработчик добавления в корзину
    document.addEventListener('click', (event) => {
        if (event.target.closest('.add-to-cart')) {
            const button = event.target.closest('.add-to-cart');
            const gameId = parseInt(button.getAttribute('data-id'));
            addToCart(gameId);
        }
        
        if (event.target.closest('.cart-item-remove')) {
            const button = event.target.closest('.cart-item-remove');
            const gameId = parseInt(button.getAttribute('data-id'));
            removeFromCart(gameId);
            renderCart(cartItems, cartTotal);
        }
    });
}

function renderGames(container, gamesToRender) {
    container.innerHTML = '';
    
    gamesToRender.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        
        let badge = '';
        if (game.badge) {
            badge = `<div class="game-badge">${game.badge}</div>`;
        }
        
        let oldPrice = '';
        if (game.oldPrice) {
            oldPrice = `<span class="old-price">${game.oldPrice} ₸</span>`;
        }
        
        let platforms = '';
        game.platforms.forEach(platform => {
            let icon = '';
            switch(platform) {
                case 'pc': icon = 'fa-steam'; break;
                case 'ps': icon = 'fa-playstation'; break;
                case 'xbox': icon = 'fa-xbox'; break;
                case 'switch': icon = 'fa-swift'; break;
            }
            platforms += `<div class="platform-icon"><i class="fab ${icon}"></i></div>`;
        });
        
        gameCard.innerHTML = `
            ${badge}
            <div class="game-image" style="background-image: url('${game.image}')">
                <div class="game-platform">${platforms}</div>
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-genre">${game.genres.map(genre => `<span>${genre}</span>`).join('')}</p>
                <div class="game-price">
                    <div>
                        <span class="price">${game.price} ₸</span>
                        ${oldPrice}
                    </div>
                    <button class="add-to-cart" data-id="${game.id}">
                        <i class="fas fa-cart-plus"></i> В корзину
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(gameCard);
    });
}

function renderCategories(container) {
    container.innerHTML = '';
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        
        categoryCard.innerHTML = `
            <div class="category-icon">
                <i class="fas ${category.icon}"></i>
            </div>
            <h3 class="category-name">${category.name}</h3>
        `;
        
        //обработчик клика
        categoryCard.addEventListener('click', () => {
            // Сохранение выбранного жанра в localStorage
            localStorage.setItem('selectedGenre', category.genre);
            // Перенаправление на страницу магазина
            window.location.href = 'magazin.html';
        });
        
        container.appendChild(categoryCard);
    });
}

function setupAuthModal(authBtn, authModal) {
    const closeAuthModal = authModal.querySelector('.close-modal');
    const authTabs = authModal.querySelectorAll('.auth-tab');
    const authForms = authModal.querySelectorAll('.auth-form');
    const switchToRegister = authModal.querySelector('#switchToRegister');
    const switchToLogin = authModal.querySelector('#switchToLogin');
    
    authBtn.addEventListener('click', () => {
        authModal.style.display = 'block';
    });
    
    closeAuthModal.addEventListener('click', () => {
        authModal.style.display = 'none';
    });
    
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            
            tab.classList.add('active');
            const tabName = tab.getAttribute('data-tab');
            document.getElementById(`${tabName}Form`).classList.add('active');
        });
    });
    
    if (switchToRegister) {
        switchToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            
            document.querySelector('[data-tab="register"]').classList.add('active');
            document.getElementById('registerForm').classList.add('active');
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            
            document.querySelector('[data-tab="login"]').classList.add('active');
            document.getElementById('loginForm').classList.add('active');
        });
    }
    
    window.addEventListener('click', (event) => {
        if (event.target === authModal) {
            authModal.style.display = 'none';
        }
    });
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Вы успешно вошли в систему');
            authModal.style.display = 'none';
        });
    }
    
    const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Здесь должна быть ваша логика регистрации
        showNotification('Регистрация прошла успешно');
        authModal.style.display = 'none';
        // Перенаправление на страницу профиля
        window.location.href = 'profile.html';
    });
}
}

// Функции для страницы магазина
function initShopPage() {
    const gamesGrid = document.getElementById('gamesGrid');
    const priceRange = document.getElementById('priceRange');
    const maxPriceDisplay = document.getElementById('maxPrice');
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const closeModal = document.querySelector('.close-modal');
    const headerSearch = document.getElementById('headerSearch');
    const authBtn = document.getElementById('authBtn');
    const authModal = document.getElementById('authModal');
    const pagination = document.getElementById('pagination');
    
    let currentPage = 1;
    const gamesPerPage = 9;
    let filteredGames = []; // Инициализируем переменную здесь
    
    // 1. Сначала инициализируем основные параметры
    if (priceRange && games.length > 0) {
        const allGamePrices = games.map(g => g.price);
        const validPrices = allGamePrices.filter(p => typeof p === 'number' && isFinite(p));
        
        if (validPrices.length > 0) {
            const maxGamePrice = Math.max(...validPrices);
            priceRange.max = maxGamePrice;
            priceRange.value = maxGamePrice;
            
            if (maxPriceDisplay) {
                maxPriceDisplay.textContent = maxGamePrice + ' ₸';
            }
        } else if (maxPriceDisplay) {
            maxPriceDisplay.textContent = priceRange.value + ' ₸';
        }
    }
    
    // 2. Затем обрабатываем сохраненный жанр
    const selectedGenre = localStorage.getItem('selectedGenre');
    if (selectedGenre) {
        // Устанавливаем только выбранный жанр
        document.querySelectorAll('input[name="genre"]').forEach(checkbox => {
            checkbox.checked = (checkbox.value === selectedGenre);
        });
        
        // Удаляем сохраненное значение
        localStorage.removeItem('selectedGenre');
    }
    
    // 3. Инициализируем остальные обработчики
    setupEventListeners();
    updateCartCount();
    
    if (authBtn && authModal) {
        setupAuthModal(authBtn, authModal);
    }
    
    // Применяем начальные фильтры
    applyFilters();
    
    function setupEventListeners() {
        // Поиск
        if (headerSearch) {
            headerSearch.addEventListener('input', () => {
                currentPage = 1;
                applyFilters(headerSearch.value.trim().toLowerCase());
            });
        }
        
        // Фильтр по цене
        if (priceRange) {
            priceRange.addEventListener('input', () => {
                if (maxPriceDisplay) maxPriceDisplay.textContent = priceRange.value + ' ₸';
                applyFilters();
            });
        }
        
        // Чекбоксы фильтров
        document.querySelectorAll('input[type="checkbox"][name="platform"], input[type="checkbox"][name="genre"], input[type="checkbox"][name="discount"], input[type="checkbox"][name="new"]')
            .forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    applyFilters();
                });
            });
        
        // Корзина
        if (cartIcon) {
            cartIcon.addEventListener('click', () => {
                cartModal.style.display = 'block';
                renderCart(cartItems, cartTotal);
            });
        }
        
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                cartModal.style.display = 'none';
            });
        }
        
        window.addEventListener('click', (event) => {
            if (event.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });
        
        // Обработчики для кнопок добавления в корзину
        document.addEventListener('click', (event) => {
            if (event.target.closest('.add-to-cart')) {
                const button = event.target.closest('.add-to-cart');
                const gameId = parseInt(button.getAttribute('data-id'));
                addToCart(gameId);
            }
            
            if (event.target.closest('.cart-item-remove')) {
                const button = event.target.closest('.cart-item-remove');
                const gameId = parseInt(button.getAttribute('data-id'));
                removeFromCart(gameId);
                renderCart(cartItems, cartTotal);
            }
        });
    }
    
    function applyFilters(searchTerm = '') {
        const filters = {
            maxPrice: parseInt(priceRange.value),
            platforms: getSelectedValues('platform'),
            genres: getSelectedValues('genre'),
            onlyDiscount: document.getElementById('discount').checked,
            onlyNew: document.getElementById('new').checked,
            searchTerm
        };
        
        filteredGames = games.filter(game => {
            if (filters.searchTerm && !game.title.toLowerCase().includes(filters.searchTerm)) {
                return false;
            }
            
            if (game.price > filters.maxPrice) return false;
            
            if (filters.platforms.length > 0) {
                const gamePlatforms = game.platforms.map(p => p.toLowerCase());
                const selectedPlatforms = filters.platforms.map(p => p.toLowerCase());
                
                if (!selectedPlatforms.some(platform => gamePlatforms.includes(platform))) {
                    return false;
                }
            }
            
            if (filters.genres.length > 0) {
                const gameGenres = game.genres.map(g => g.toLowerCase());
                const selectedGenres = filters.genres.map(g => g.toLowerCase());
                
                if (!selectedGenres.some(genre => gameGenres.includes(genre))) {
                    return false;
                }
            }
            
            if (filters.onlyDiscount && (!game.discount || game.discount <= 0)) return false;
            
            if (filters.onlyNew && !game.isNew) return false;
            
            return true;
        });
        
        currentPage = 1;
        renderGames(gamesGrid, filteredGames.slice(0, gamesPerPage));
        setupPagination();
    }
    
    function getSelectedValues(name) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        return Array.from(checkboxes).map(el => el.value);
    }
    
    function renderGames(container, gamesToRender) {
        container.innerHTML = '';
        
        if (gamesToRender.length === 0) {
            container.innerHTML = '<div class="empty-games">Игры не найдены. Попробуйте изменить параметры поиска.</div>';
            return;
        }
        
        gamesToRender.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            
            let badgeHTML = '';
            if (game.badge) {
                badgeHTML = `<div class="game-badge">${game.badge}</div>`;
            }
            
            let discountHTML = '';
            if (game.discount && game.discount > 0) {
                const oldPrice = Math.round(game.price / (1 - game.discount/100));
                discountHTML = `<span class="old-price">${oldPrice} ₸</span>`;
            }
            
            let platformsHTML = '';
            game.platforms.forEach(platform => {
                let icon = '';
                switch(platform.toLowerCase()) {
                    case 'pc': icon = 'fa-desktop'; break;
                    case 'ps': icon = 'fa-playstation'; break;
                    case 'xbox': icon = 'fa-xbox'; break;
                    case 'switch': icon = 'fa-gamepad'; break;
                }
                if (icon) {
                    platformsHTML += `<div class="platform-icon"><i class="fab ${icon}"></i></div>`;
                }
            });
            
            gameCard.innerHTML = `
                ${badgeHTML}
                <div class="game-image" style="background-image: url('${game.image}')">
                    <div class="game-platform">${platformsHTML}</div>
                </div>
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <p class="game-genre">${game.genres.map(genre => `<span>${genre}</span>`).join('')}</p>
                    <div class="game-price">
                        <div>
                            <span class="price">${game.price} ₸</span> ${discountHTML}
                        </div>
                        <button class="add-to-cart" data-id="${game.id}">
                            <i class="fas fa-cart-plus"></i> В корзину
                        </button>
                    </div>
                </div>
            `;
            
            container.appendChild(gameCard);
        });
    }
    
    function setupPagination() {
        if (!pagination) return;
        
        pagination.innerHTML = '';
        const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
        
        if (totalPages <= 1) return;
        
        // Кнопка "Назад"
        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn';
        prevBtn.innerHTML = '&larr;';
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderGames(gamesGrid, getPaginatedGames());
                updatePaginationButtons();
            }
        });
        pagination.appendChild(prevBtn);
        
        // Кнопки страниц
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                renderGames(gamesGrid, getPaginatedGames());
                updatePaginationButtons();
            });
            pagination.appendChild(pageBtn);
        }
        
        // Кнопка "Вперед"
        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn';
        nextBtn.innerHTML = '&rarr;';
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderGames(gamesGrid, getPaginatedGames());
                updatePaginationButtons();
            }
        });
        pagination.appendChild(nextBtn);
        
        updatePaginationButtons();
    }
    
    function getPaginatedGames() {
        const startIndex = (currentPage - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        return filteredGames.slice(startIndex, endIndex);
    }
    
    function updatePaginationButtons() {
        const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
        const buttons = pagination.querySelectorAll('.page-btn');
        
        if (buttons.length > 0) {
            buttons[0].disabled = currentPage === 1;
            buttons[buttons.length - 1].disabled = currentPage === totalPages;
        }

        buttons.forEach((btn, index) => {
            if (index === 0 || index === buttons.length - 1) return;
            const pageNum = parseInt(btn.textContent);
            btn.classList.toggle('active', pageNum === currentPage);
        });
    }
}

// Функции для страницы корзины
function initCartPage() {
    const cartItemsList = document.getElementById('cartItemsList');
    const summaryDetails = document.getElementById('summaryDetails');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const closeModal = document.querySelector('.close-modal');
    
    // Инициализация
    renderCartPage();
    updateCartCount();
    
    // Обработчики событий
    document.addEventListener('click', (event) => {
        if (event.target.closest('.remove-item')) {
            const button = event.target.closest('.remove-item');
            const gameId = parseInt(button.getAttribute('data-id'));
            removeFromCart(gameId);
            renderCartPage();
        }
    });
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                window.location.href = 'oplata.html';
            }
        });
    }
    
    if (cartIcon && cartModal) {
        cartIcon.addEventListener('click', () => {
            cartModal.style.display = 'block';
            renderCart(cartItems, cartTotal);
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    function renderCartPage() {
        if (cart.length === 0) {
            cartItemsList.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Ваша корзина пуста</p>
                    <a href="magazin.html" class="btn">
                        <i class="fas fa-gamepad"></i> Перейти в магазин
                    </a>
                </div>
            `;
            
            summaryDetails.innerHTML = `
                <div class="summary-row">
                    <span>Товары (0)</span>
                    <span>0 ₸</span>
                </div>
            `;
            
            if (checkoutBtn) checkoutBtn.disabled = true;
            return;
        }
        
        let itemsHTML = '';
        let subtotal = 0;
        let totalItems = 0;
        
        cart.forEach(item => {
            const game = games.find(g => g.id === item.id);
            if (!game) return;
            
            subtotal += game.price * item.quantity;
            totalItems += item.quantity;
            
            let platforms = '';
            game.platforms.forEach(platform => {
                let icon = '';
                switch(platform) {
                    case 'pc': icon = 'fa-steam'; break;
                    case 'ps': icon = 'fa-playstation'; break;
                    case 'xbox': icon = 'fa-xbox'; break;
                    case 'switch': icon = 'fa-swift'; break;
                }
                platforms += `<div class="platform-icon"><i class="fab ${icon}"></i></div>`;
            });
            
            itemsHTML += `
                <div class="cart-item" data-id="${game.id}">
                    <div class="cart-item-image" style="background-image: url('${game.image}')"></div>
                    <div class="cart-item-details">
                        <h3 class="cart-item-title">${game.title}</h3>
                        <div class="cart-item-platforms">${platforms}</div>
                        <div class="cart-item-price">${game.price} ₸ × ${item.quantity}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="remove-item" data-id="${game.id}">
                            <i class="fas fa-trash"></i> Удалить
                        </button>
                    </div>
                </div>
            `;
        });
        
        cartItemsList.innerHTML = itemsHTML;
        
        summaryDetails.innerHTML = `
            <div class="summary-row">
                <span>Товары (${totalItems})</span>
                <span>${subtotal} ₸</span>
            </div>
            <div class="summary-row">
                <span>Скидка</span>
                <span>0 ₸</span>
            </div>
            <div class="summary-row summary-total">
                <span>Итого</span>
                <span>${subtotal} ₸</span>
            </div>
        `;
        
        if (checkoutBtn) checkoutBtn.disabled = false;
    }
}

// Функции для страницы оплаты
function initPaymentPage() {
    const orderItems = document.getElementById('orderItems');
    const orderSummaryDetails = document.getElementById('orderSummaryDetails');
    const paymentForm = document.getElementById('paymentForm');
    const cardNumber = document.getElementById('cardNumber');
    const cardExpiry = document.getElementById('cardExpiry');
    const cardCvv = document.getElementById('cardCvv');
    const successModal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close-modal');
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    const orderNumber = document.getElementById('orderNumber');
    
    // Инициализация
    renderOrderSummary();
    updateCartCount();
    
    // Обработчики событий
    if (cardNumber) {
        cardNumber.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formatted = '';
            
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formatted += ' ';
                }
                formatted += value[i];
            }
            
            e.target.value = formatted;
        });
    }
    
    if (cardExpiry) {
        cardExpiry.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            
            e.target.value = value;
        });
    }
    
    if (cardCvv) {
        cardCvv.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/gi, '');
        });
    }
    
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            processPayment();
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            successModal.style.display = 'none';
        });
    }
    
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            window.location.href = 'magazin.html';
        });
    }
    
    window.addEventListener('click', (event) => {
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });
    
    function renderOrderSummary() {
        if (cart.length === 0) {
            orderItems.innerHTML = '<p>Ваша корзина пуста</p>';
            orderSummaryDetails.innerHTML = '';
            return;
        }
        
        let itemsHTML = '';
        let subtotal = 0;
        let totalItems = 0;
        
        cart.forEach(item => {
            const game = games.find(g => g.id === item.id);
            if (!game) return;
            
            subtotal += game.price * item.quantity;
            totalItems += item.quantity;
            
            itemsHTML += `
                <div class="order-item">
                    <div class="order-item-image" style="background-image: url('${game.image}')"></div>
                    <div class="order-item-details">
                        <div class="order-item-title">${game.title}</div>
                        <div class="order-item-price">${game.price} ₸ × ${item.quantity}</div>
                    </div>
                </div>
            `;
        });
        
        orderItems.innerHTML = itemsHTML;
        
        orderSummaryDetails.innerHTML = `
            <div class="order-summary-row">
                <span>Товары (${totalItems})</span>
                <span>${subtotal} ₸</span>
            </div>
            <div class="order-summary-row">
                <span>Доставка</span>
                <span>0 ₸</span>
            </div>
            <div class="order-summary-row order-total">
                <span>Итого</span>
                <span>${subtotal} ₸</span>
            </div>
        `;
    }
    
    function processPayment() {
        const payButton = document.getElementById('payButton');
        if (!payButton) return;
        
        payButton.disabled = true;
        payButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Обработка платежа...';
        
        setTimeout(() => {
            const randomOrderNumber = Math.floor(Math.random() * 90000) + 10000;
            if (orderNumber) orderNumber.textContent = `#${randomOrderNumber}`;
            
            if (successModal) successModal.style.display = 'block';
            
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        }, 2000);
    }
}


// Функции для страницы профиля
function initProfilePage() {
    
    // Данные пользователя
    let user = {
        id: 1,
        firstName: "Виталий",
        lastName: "Цаль",
        email: "P4psnazzz@gmail.com",
        phone: "+7 (228) 133-76-66",
        birthday: "1981-03-22",
        gender: "male",
        avatar: "https://sun9-22.vkuserphoto.ru/s/v1/ig2/-r_QtyvuWKLTcC6kH8-MuDKlhz_yuy4FJULVK2yIZdSL2LPCUlsuFKkP_-xXDmpXCqpSN91lc4e6Wv06OE1u4Iyy.jpg?quality=95&as=32x40,48x60,72x90,108x135,160x200,240x300,360x450,480x600,540x675,630x787&from=bu&cs=630x787",
        orders: [
            {
                id: 12345,
                date: "15.05.2025",
                items: [
                    { id: 1, title: "Cyberpunk 2077", price: 7990, quantity: 1 },
                    { id: 4, title: "The Witcher 3: Wild Hunt", price: 2990, quantity: 1 }
                ],
                total: 10980,
                status: "completed"
            },
            {
                id: 12346,
                date: "20.05.2025",
                items: [
                    { id: 2, title: "Elden Ring", price: 6900, quantity: 1 }
                ],
                total: 6900,
                status: "completed"
            }
        ],
        wishlist: [1, 19, 5]
    };

    // DOM элементы
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    const closeModal = document.querySelectorAll('.close-modal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const navLinks = document.querySelectorAll('.profile-nav a');
    const profileSections = document.querySelectorAll('.profile-section');
    const profileForm = document.getElementById('profileForm');
    const passwordForm = document.getElementById('passwordForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const wishlistGrid = document.getElementById('wishlistGrid');
    const ordersTable = document.getElementById('ordersTable').querySelector('tbody');
    const userNameDisplay = document.getElementById('usernameDisplay');
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const ordersCount = document.getElementById('ordersCount');
    const wishlistCount = document.getElementById('wishlistCount');
    
    // Элементы для смены аватара
    const changeAvatarBtn = document.getElementById('changeAvatarBtn');
    const avatarUpload = document.getElementById('avatarUpload');
    const avatarModal = document.getElementById('avatarModal');
    const avatarPreview = document.getElementById('avatarPreview');
    const uploadAvatarBtn = document.getElementById('uploadAvatarBtn');
    const avatarFileInput = document.getElementById('avatarFileInput');
    const defaultAvatarBtn = document.getElementById('defaultAvatarBtn');
    const saveAvatarBtn = document.getElementById('saveAvatarBtn');

    // Текущий загружаемый аватар
    let newAvatar = null;

    // Инициализация страницы
    loadUserData();
    renderWishlist();
    renderOrders();
    updateCartCount();
    renderCart(cartItems, cartTotal);
    setupEventListeners();

    function loadUserData() {
        const savedAvatar = localStorage.getItem('userAvatar');
        if (savedAvatar) {
            user.avatar = savedAvatar;
        }
        
        document.getElementById('firstName').value = user.firstName;
        document.getElementById('lastName').value = user.lastName;
        document.getElementById('email').value = user.email;
        document.getElementById('phone').value = user.phone;
        document.getElementById('birthday').value = user.birthday;
        document.getElementById('gender').value = user.gender;
        
        userNameDisplay.textContent = `${user.firstName} ${user.lastName}`;
        userName.textContent = `${user.firstName} ${user.lastName}`;
        userEmail.textContent = user.email;
        userAvatar.src = user.avatar;
        
        ordersCount.textContent = user.orders.length;
        wishlistCount.textContent = user.wishlist.length;
    }

    function renderWishlist() {
        wishlistGrid.innerHTML = '';
        
        if (user.wishlist.length === 0) {
            wishlistGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--gray);">Ваш список желаний пуст</p>';
            return;
        }
        
        user.wishlist.forEach(gameId => {
            const game = games.find(g => g.id === gameId);
            if (!game) return;
            
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item';
            wishlistItem.innerHTML = `
                <div class="wishlist-image" style="background-image: url('${game.image}')"></div>
                <div class="wishlist-info">
                    <h3 class="wishlist-title">${game.title}</h3>
                    <div class="wishlist-price">${game.price} ₸</div>
                    <div class="wishlist-actions">
                        <button class="btn btn-outline" data-id="${game.id}" style="padding: 5px 10px; font-size: 12px;">В корзину</button>
                        <button class="remove-wishlist" data-id="${game.id}"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
            
            wishlistGrid.appendChild(wishlistItem);
        });
    }

    function renderOrders() {
        ordersTable.innerHTML = '';
        
        if (user.orders.length === 0) {
            ordersTable.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--gray);">У вас пока нет заказов</td></tr>';
            return;
        }
        
        user.orders.forEach(order => {
            const row = document.createElement('tr');
            
            let statusClass = '';
            let statusText = '';
            
            switch(order.status) {
                case 'completed':
                    statusClass = 'status-completed';
                    statusText = 'Завершен';
                    break;
                case 'pending':
                    statusClass = 'status-pending';
                    statusText = 'В обработке';
                    break;
                case 'cancelled':
                    statusClass = 'status-cancelled';
                    statusText = 'Отменен';
                    break;
            }
            
            row.innerHTML = `
                <td>#${order.id}</td>
                <td>${order.date}</td>
                <td>${order.items.length}</td>
                <td>${order.total.toLocaleString('ru-RU')} ₸</td>
                <td><span class="order-status ${statusClass}">${statusText}</span></td>
            `;
            
            ordersTable.appendChild(row);
        });
    }

    function setupEventListeners() {
        // Навигация по профилю
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                profileSections.forEach(section => {
                    section.style.display = 'none';
                });
                
                const sectionId = this.getAttribute('data-section');
                document.getElementById(sectionId).style.display = 'block';
            });
        });
        
        // Корзина
        setupCartHandlers();
        
        // Форма профиля
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveProfile();
        });
        
        // Форма смены пароля
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            changePassword();
        });
        
        // Выход из профиля
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
        
        // Смена аватара
        setupAvatarHandlers();
        
        // Обработчики для списка желаний
        document.addEventListener('click', function(e) {
            if (e.target.closest('.wishlist-actions .btn-outline')) {
                const button = e.target.closest('.btn-outline');
                const gameId = parseInt(button.getAttribute('data-id'));
                addToCart(gameId);
            }
            
            if (e.target.closest('.remove-wishlist')) {
                const button = e.target.closest('.remove-wishlist');
                const gameId = parseInt(button.getAttribute('data-id'));
                removeFromWishlist(gameId);
            }
        });
    }

    function setupAvatarHandlers() {
        if (!changeAvatarBtn) return;
        
        changeAvatarBtn.addEventListener('click', function() {
            avatarModal.style.display = 'block';
            avatarPreview.src = user.avatar;
            newAvatar = null;
        });
        
        closeModal.forEach(btn => {
            btn.addEventListener('click', function() {
                if (this.closest('.modal')) {
                    this.closest('.modal').style.display = 'none';
                }
            });
        });
        
        window.addEventListener('click', function(event) {
            if (event.target === avatarModal) {
                avatarModal.style.display = 'none';
            }
            if (event.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });
        
        if (uploadAvatarBtn) {
            uploadAvatarBtn.addEventListener('click', function() {
                avatarFileInput.click();
            });
        }
        
        if (avatarFileInput) {
            avatarFileInput.addEventListener('change', function(e) {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    
                    reader.onload = function(event) {
                        avatarPreview.src = event.target.result;
                        newAvatar = event.target.result;
                    }
                    
                    reader.readAsDataURL(e.target.files[0]);
                }
            });
        }
        
        if (defaultAvatarBtn) {
            defaultAvatarBtn.addEventListener('click', function() {
                newAvatar = `https://sun9-22.vkuserphoto.ru/s/v1/ig2/-r_QtyvuWKLTcC6kH8-MuDKlhz_yuy4FJULVK2yIZdSL2LPCUlsuFKkP_-xXDmpXCqpSN91lc4e6Wv06OE1u4Iyy.jpg?quality=95&as=32x40,48x60,72x90,108x135,160x200,240x300,360x450,480x600,540x675,630x787&from=bu&cs=630x787`;
                avatarPreview.src = newAvatar;
            });
        }
        
        if (saveAvatarBtn) {
            saveAvatarBtn.addEventListener('click', function() {
                if (newAvatar) {
                    user.avatar = newAvatar;
                    userAvatar.src = newAvatar;
                    
                    localStorage.setItem('userAvatar', newAvatar);
                    
                    showNotification('Аватар успешно изменен');
                    avatarModal.style.display = 'none';
                } else {
                    showNotification('Выберите новый аватар', 'warning');
                }
            });
        }
    }

    function setupCartHandlers() {
        if (!cartIcon) return;
        
        cartIcon.addEventListener('click', function() {
            cartModal.style.display = 'block';
            renderCart(cartItems, cartTotal);
        });
        
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', checkout);
        }
        
        document.addEventListener('click', function(e) {
            if (e.target.closest('.cart-item-remove')) {
                const button = e.target.closest('.cart-item-remove');
                const gameId = parseInt(button.getAttribute('data-id'));
                removeFromCart(gameId);
                renderCart(cartItems, cartTotal);
            }
        });
    }
    
    function checkout() {
    if (cart.length === 0) {
        showNotification('Ваша корзина пуста', 'warning');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderId = Math.floor(Math.random() * 90000) + 10000;
    const orderDate = new Date().toLocaleDateString('ru-RU');

    const newOrder = {
        id: orderId,
        date: orderDate,
        items: [...cart],
        total: total,
        status: 'completed'
    };

    user.orders.unshift(newOrder);
    ordersCount.textContent = user.orders.length;

    // Сохраняем корзину перед переходом
    saveCart();

    // Переходим на страницу корзины
    window.location.href = 'korzina.html';

        
        renderOrders();
        
        if (cartModal) cartModal.style.display = 'none';
        
        showNotification(`Заказ #${orderId} оформлен! Сумма: ${total.toLocaleString('ru-RU')} ₸`);
    }

    function removeFromWishlist(gameId) {
        user.wishlist = user.wishlist.filter(id => id !== gameId);
        wishlistCount.textContent = user.wishlist.length;
        renderWishlist();
        
        const game = games.find(g => g.id === gameId);
        if (game) {
            showNotification(`"${game.title}" удален из списка желаний`, 'warning');
        }
    }

    function saveProfile() {
        user.firstName = document.getElementById('firstName').value;
        user.lastName = document.getElementById('lastName').value;
        user.email = document.getElementById('email').value;
        user.phone = document.getElementById('phone').value;
        user.birthday = document.getElementById('birthday').value;
        user.gender = document.getElementById('gender').value;
        
        userNameDisplay.textContent = `${user.firstName} ${user.lastName}`;
        userName.textContent = `${user.firstName} ${user.lastName}`;
        userEmail.textContent = user.email;
        
        showNotification('Профиль успешно обновлен');
    }

    function changePassword() {
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (newPassword !== confirmPassword) {
            showNotification('Пароли не совпадают', 'danger');
            return;
        }
        
        passwordForm.reset();
        showNotification('Пароль успешно изменен');
    }

    function logout() {
        window.location.href = 'glavnaya stranica.html';
    }
}

// Обновляем последний блок в main.js:

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    const path = window.location.pathname.split('/').pop() || '';
    
    if (path.includes('glavnaya') || path === '') {
        initHomePage();
    } else if (path.includes('magazin')) {
        initShopPage();
    } else if (path.includes('korzina')) {
        initCartPage();
    } else if (path.includes('oplata')) {
        initPaymentPage();
    } else if (path.includes('profile')) {
        initProfilePage();
    } else if (path.includes('bestsellers')) {
        initBestsellersPage(); // Добавлен новый обработчик
    } else if (path.includes('support')) {
        initSupportPage();
    }
});
function initSupportPage() {
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const closeModal = document.querySelector('.close-modal');
    const authBtn = document.getElementById('authBtn');
    const authModal = document.getElementById('authModal');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartModal.style.display = 'block';
            renderCart(cartItems, cartTotal);
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Обработчики для кнопок добавления в корзину
    document.addEventListener('click', (event) => {
        if (event.target.closest('.add-to-cart')) {
            const button = event.target.closest('.add-to-cart');
            const gameId = parseInt(button.getAttribute('data-id'));
            addToCart(gameId);
        }
        
        if (event.target.closest('.cart-item-remove')) {
            const button = event.target.closest('.cart-item-remove');
            const gameId = parseInt(button.getAttribute('data-id'));
            removeFromCart(gameId);
            renderCart(cartItems, cartTotal);
        }
    });
    // Инициализация FAQ
     const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // Обработка формы поддержки
   const supportForm = document.getElementById('supportForm');
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Ваше сообщение отправлено! Мы ответим вам в ближайшее время.');
            this.reset();
        });
    }
    
    
    // Общие обработчики
    updateCartCount();
    
    if (authBtn && authModal) {
        setupAuthModal(authBtn, authModal);
    }
    
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartModal.style.display = 'block';
            renderCart(cartItems, cartTotal);
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
        if (event.target === authModal) {
            authModal.style.display = 'none';
        }
    });
}

function initCartAndAuth() {
    // Инициализация корзины
    updateCartCount();
    
    // Обработчики для корзины
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cartIcon && cartModal) {
        cartIcon.addEventListener('click', () => {
            cartModal.style.display = 'block';
            renderCart(cartItems, cartTotal);
        });
        
        // Закрытие модального окна
        cartModal.querySelector('.close-modal').addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) cartModal.style.display = 'none';
        });
    }
    
    // Обработчики для кнопок корзины
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart')) {
            const gameId = parseInt(e.target.closest('.add-to-cart').getAttribute('data-id'));
            addToCart(gameId);
        }
        
        if (e.target.closest('.cart-item-remove')) {
            const gameId = parseInt(e.target.closest('.cart-item-remove').getAttribute('data-id'));
            removeFromCart(gameId);
            if (cartItems && cartTotal) renderCart(cartItems, cartTotal);
        }
    });
    
    // Инициализация авторизации
    const authBtn = document.getElementById('authBtn');
    const authModal = document.getElementById('authModal');
    
    if (authBtn && authModal) {
        authBtn.addEventListener('click', () => authModal.style.display = 'block');
        
        // Закрытие модального окна
        authModal.querySelector('.close-modal').addEventListener('click', () => {
            authModal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === authModal) authModal.style.display = 'none';
        });
        
        // Переключение между вкладками
        authModal.querySelectorAll('.auth-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.getAttribute('data-tab');
                authModal.querySelectorAll('.auth-tab, .auth-form').forEach(el => {
                    el.classList.remove('active');
                });
                tab.classList.add('active');
                document.getElementById(`${tabName}Form`).classList.add('active');
            });
        });
        
        // Обработка форм
        document.getElementById('loginForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Вход выполнен успешно');
            authModal.style.display = 'none';
        });
        
        document.getElementById('registerForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Регистрация прошла успешно');
            authModal.style.display = 'none';
        });
    }
}

// Сделаем функцию доступной глобально
window.initCartAndAuth = initCartAndAuth;


function initBestsellersPage() {
    const newGamesGrid = document.getElementById('newGamesGrid');
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const closeModal = document.querySelector('.close-modal');
    const authBtn = document.getElementById('authBtn');
    const authModal = document.getElementById('authModal');
    
    // Фильтруем игры по бестселлерам
    const bestsellers = games.filter(game => game.bestseller);
    
    // Рендерим бестселлеры
    if (newGamesGrid) {
        if (bestsellers.length > 0) {
            renderGames(newGamesGrid, bestsellers);
        } else {
            newGamesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Бестселлеры не найдены</p>';
        }
    }
    
    // Остальной код для работы корзины и авторизации
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartModal.style.display = 'block';
            renderCart(cartItems, cartTotal);
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
        if (event.target === authModal) {
            authModal.style.display = 'none';
        }
    });
    
    if (authBtn && authModal) {
        setupAuthModal(authBtn, authModal);
    }
    
    // Обработчики для кнопок добавления в корзину
    document.addEventListener('click', (event) => {
        if (event.target.closest('.add-to-cart')) {
            const button = event.target.closest('.add-to-cart');
            const gameId = parseInt(button.getAttribute('data-id'));
            addToCart(gameId);
        }
        
        if (event.target.closest('.cart-item-remove')) {
            const button = event.target.closest('.cart-item-remove');
            const gameId = parseInt(button.getAttribute('data-id'));
            removeFromCart(gameId);
            renderCart(cartItems, cartTotal);
        }
    });
}