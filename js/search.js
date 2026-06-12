// ========================================
// search.js - شريط البحث والقائمة المنسدلة
// ========================================

// القائمة المنسدلة
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');

if (dropdownBtn) {
    dropdownBtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });
}

// إغلاق القائمة عند النقر خارجها
window.addEventListener('click', (e) => {
    if (!dropdownBtn?.contains(e.target)) {
        dropdownContent?.classList.remove('show');
    }
});

// ========================================
// وظيفة البحث
// ========================================
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

function searchProducts() {
    const searchTerm = searchInput?.value.toLowerCase().trim();
    
    if (!searchTerm) {
        alert('الرجاء إدخال كلمة للبحث');
        return;
    }
    
    // البحث في المنتجات
    const results = allProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
    );
    
    if (results.length === 0) {
        alert(`⚠️ عذراً، لا توجد نتائج لـ "${searchTerm}"\n\nالمنتج غير متوفر حالياً في المخزون`);
    } else {
        alert(`✅ تم العثور على ${results.length} منتج/منتجات لـ "${searchTerm}"`);
        // يمكنك هنا توجيه المستخدم إلى صفحة النتائج
        console.log('نتائج البحث:', results);
    }
}

if (searchBtn) {
    searchBtn.addEventListener('click', searchProducts);
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
}

// ========================================
// رسالة "غير متوفر" للمنتجات غير الموجودة
// ========================================
function showOutOfStockMessage(productName) {
    alert(`⚠️ عذراً، المنتج "${productName}" غير متوفر حالياً في المخزون`);
}
