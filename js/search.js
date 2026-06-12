// ========================================
// search.js - نظام البحث
// ========================================

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function performSearch() {
    const searchTerm = searchInput?.value.toLowerCase().trim();
    
    if (!searchTerm) {
        alert(translations[currentLang]?.noResults || 'الرجاء إدخال كلمة للبحث');
        return;
    }
    
    const results = allProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
    );
    
    const productsGrid = document.getElementById('productsGrid');
    const sectionHeader = document.getElementById('products-title');
    
    if (results.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-section">
                <i class="fas fa-search"></i>
                <h3>${translations[currentLang]?.noResults || 'لم يتم العثور على أي نتائج'}</h3>
                <p>${translations[currentLang]?.comingSoon || 'جرب كلمة بحث مختلفة'}</p>
            </div>
        `;
        sectionHeader.innerText = `نتائج البحث: "${searchTerm}"`;
    } else {
        sectionHeader.innerText = `نتائج البحث: ${results.length} منتج`;
        if (typeof renderProductsGrid === 'function') {
            renderProductsGrid(results);
        }
    }
}

if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}
