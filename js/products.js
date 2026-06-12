// ========================================
// products.js - عرض المنتجات
// ========================================

function renderProducts() {
    const gridContainer = document.getElementById('productsGrid');
    if (!gridContainer) return;
    
    const displayProducts = allProducts.slice(0, 12);
    
    gridContainer.innerHTML = '';
    
    displayProducts.forEach(product => {
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
                <a href="${product.amazonLink}" target="_blank" class="view-btn">${translations[currentLang]?.shopNow || 'تسوق الآن'} →</a>
            </div>
        `;
        
        gridContainer.appendChild(card);
    });
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
                <a href="${product.amazonLink}" target="_blank" class="view-btn">${translations[currentLang]?.shopNow || 'تسوق الآن'} →</a>
            </div>
        `;
        
        gridContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof renderProducts === 'function') {
        renderProducts();
    }
});
