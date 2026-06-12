// ========================================
// products.js - عرض المنتجات
// ========================================

// جميع المنتجات موجودة في ملف data.js (const allProducts)

function renderProducts() {
    const gridContainer = document.getElementById('productsGrid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = '';
    
    allProducts.forEach(product => {
        // استخراج نسبة الخصم من النص (مثال: "29% off" -> 29)
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
                <a href="${product.amazonLink}" target="_blank" class="view-btn">عرض على أمازون →</a>
            </div>
        `;
        
        gridContainer.appendChild(card);
    });
}

// تشغيل عرض المنتجات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderProducts);
