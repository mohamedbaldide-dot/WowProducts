// ========================================
// my-products-data.js - منتجات الدفع عند الاستلام
// ========================================

const myProducts = [
    {
        id: 101,
        title: "مسدس تدليك عضلات محمول",
        badge: "الأكثر مبيعاً",
        badgeColor: "#cc0c39",
        price: 199,
        oldPrice: 399,
        discount: 50,
        image: "images/my-products/product1.webp",
        category: "تدليك",
        stock: true
    },
    {
        id: 102,
        title: "ساعة رياضية ذكية",
        badge: "جديد",
        badgeColor: "#007185",
        price: 149,
        oldPrice: 299,
        discount: 50,
        image: "images/my-products/product2.webp",
        category: "ساعات",
        stock: true
    },
    {
        id: 103,
        title: "سماعات لاسلكية عزل ضوضاء",
        badge: "عرض محدود",
        badgeColor: "#ff9900",
        price: 89,
        oldPrice: 199,
        discount: 55,
        image: "images/my-products/product3.webp",
        category: "سماعات",
        stock: true
    },
    {
        id: 104,
        title: "باور بانك 20000mAh شحن سريع",
        badge: "الأكثر مبيعاً",
        badgeColor: "#cc0c39",
        price: 59,
        oldPrice: 129,
        discount: 54,
        image: "images/my-products/product4.webp",
        category: "شواحن",
        stock: true
    }
];

// عرض منتجات الدفع عند الاستلام
function renderMyProducts() {
    const gridContainer = document.getElementById('myProductsGrid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = '';
    
    myProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'my-product-card';
        // تعديل الرابط إلى products.html (وليس product.html)
        card.onclick = () => {
            window.location.href = `products.html?id=${product.id}`;
        };
        
        card.innerHTML = `
            <div class="my-product-image">
                <span class="my-product-badge" style="background: ${product.badgeColor}">${product.badge}</span>
                <img src="${product.image}" alt="${product.title}" onerror="this.src='https://placehold.co/400x400?text=Product'">
            </div>
            <div class="my-product-info">
                <h3 class="my-product-title">${product.title}</h3>
                <div class="my-product-price">
                    <span class="my-current-price">${product.price} ر.س</span>
                    <span class="my-old-price">${product.oldPrice} ر.س</span>
                    <span class="my-discount">-${product.discount}%</span>
                </div>
                <button class="my-order-btn">اطلب الآن</button>
            </div>
        `;
        
        // تعديل الرابط للزر أيضاً
        const btn = card.querySelector('.my-order-btn');
        if (btn) {
            btn.onclick = (e) => {
                e.stopPropagation();
                window.location.href = `products.html?id=${product.id}`;
            };
        }
        
        gridContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderMyProducts);
