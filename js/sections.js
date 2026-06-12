// ========================================
// sections.js - إدارة صفحات الأقسام
// ========================================

let currentSection = 'all';
let codProducts = [];
let amazonProducts = [];

function showSection(section) {
    currentSection = section;
    const productsGrid = document.getElementById('productsGrid');
    const sectionHeader = document.getElementById('products-title');
    
    if (section === 'cod') {
        sectionHeader.innerText = translations[currentLang].cashOnDelivery;
        if (codProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="empty-section">
                    <i class="fas fa-box-open"></i>
                    <h3>${translations[currentLang].noProducts}</h3>
                    <p>${translations[currentLang].comingSoon}</p>
                </div>
            `;
        } else {
            renderProductsGrid(codProducts);
        }
    } 
    else if (section === 'amazon') {
        sectionHeader.innerText = translations[currentLang].amazonSection;
        if (amazonProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="empty-section">
                    <i class="fas fa-microchip"></i>
                    <h3>${translations[currentLang].noProducts}</h3>
                    <p>${translations[currentLang].comingSoon}</p>
                </div>
            `;
        } else {
            renderProductsGrid(amazonProducts);
        }
    }
    else if (section === 'all') {
        sectionHeader.innerText = translations[currentLang].featuredProducts;
        renderProducts();
    }
    else {
        const titles = {
            electronics: translations[currentLang].electronics,
            home: translations[currentLang].home,
            fashion: translations[currentLang].fashion,
            sports: translations[currentLang].sports
        };
        sectionHeader.innerText = titles[section] || section;
        const filtered = allProducts.filter(p => p.category === section);
        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div class="empty-section">
                    <i class="fas fa-tag"></i>
                    <h3>${translations[currentLang].noProducts}</h3>
                    <p>${translations[currentLang].comingSoon}</p>
                </div>
            `;
        } else {
            renderProductsGrid(filtered);
        }
    }
}

function getSectionTitle(section) {
    const titles = {
        electronics: translations[currentLang].electronics,
        home: translations[currentLang].home,
        fashion: translations[currentLang].fashion,
        sports: translations[currentLang].sports
    };
    return titles[section] || section;
}

function renderProductsGrid(products) {
    const gridContainer = document.getElementById('productsGrid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = '';
    
    products.forEach(product => {
        const discountValue = product.discount.replace('% off', '');
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="product-image">
                <span class="discount-badge">-${discountValue}%</span>
                <img src="${product.image}" alt="${product.title}" onerror="this.src='https://placehold.co/300x300?text=Product'">
            </div>
            <div class="product-info">
                <div class="brand">${product.brand}</div>
                <h3 class="product-title">${product.title}</h3>
                ${product.colourPatterns ? `<div class="colour-patterns">${product.colourPatterns}</div>` : ''}
                <div class="price">
                    <span class="old-price">${product.oldPrice}</span>
                    <span class="current-price">${product.price}</span>
                </div>
                <a href="${product.amazonLink}" target="_blank" class="view-btn">${translations[currentLang].shopNow} →</a>
            </div>
        `;
        
        gridContainer.appendChild(card);
    });
}

const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');

if (dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
    });
}

document.querySelectorAll('#dropdownContent a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        showSection(section);
        dropdownContent.classList.remove('show');
        dropdownBtn.innerHTML = link.innerText + ' <i class="fas fa-chevron-down"></i>';
    });
});

window.addEventListener('click', (e) => {
    if (!dropdownBtn?.contains(e.target)) {
        dropdownContent?.classList.remove('show');
    }
});
