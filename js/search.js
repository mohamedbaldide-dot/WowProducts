// ========================================
// translations.js - نظام ترجمة الموقع
// ========================================

const translations = {
    ar: {
        logo: "متجرك",
        searchPlaceholder: "البحث في متجرك...",
        all: "الكل",
        allSections: "جميع الأقسام",
        cod: "الدفع عند الاستلام",
        amazonDevices: "أجهزة Amazon",
        electronics: "إلكترونيات",
        home: "منزل",
        fashion: "موضة",
        sports: "رياضة",
        featuredProducts: "منتجات مميزة",
        footer: "© 2025 متجرك. جميع الحقوق محفوظة",
        noProducts: "لا توجد منتجات متاحة حالياً.",
        comingSoon: "سيتم إضافة المنتجات قريباً.",
        noResults: "لم يتم العثور على أي نتائج.",
        shopNow: "تسوق الآن",
        viewMore: "شاهد المزيد",
        cashOnDelivery: "منتجات الدفع عند الاستلام",
        amazonSection: "منتجات أجهزة Amazon"
    },
    en: {
        logo: "MyStore",
        searchPlaceholder: "Search in MyStore...",
        all: "All",
        allSections: "All Departments",
        cod: "Cash on Delivery",
        amazonDevices: "Amazon Devices",
        electronics: "Electronics",
        home: "Home",
        fashion: "Fashion",
        sports: "Sports",
        featuredProducts: "Featured Products",
        footer: "© 2025 MyStore. All rights reserved.",
        noProducts: "No products available at the moment.",
        comingSoon: "Products will be added soon.",
        noResults: "No results found.",
        shopNow: "Shop Now",
        viewMore: "View More",
        cashOnDelivery: "Cash on Delivery Products",
        amazonSection: "Amazon Devices Products"
    }
};

let currentLang = 'ar';

// تغيير اللغة
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // تحديث النصوص
    document.getElementById('logo-text').innerText = translations[lang].logo;
    document.getElementById('searchInput').placeholder = translations[lang].searchPlaceholder;
    document.getElementById('dropdownBtn').innerHTML = translations[lang].all + ' <i class="fas fa-chevron-down"></i>';
    document.getElementById('products-title').innerText = translations[lang].featuredProducts;
    document.getElementById('footer-text').innerHTML = translations[lang].footer;
    document.getElementById('currentLang').innerText = lang.toUpperCase();
    
    // تحديث القائمة المنسدلة
    const dropdownItems = document.querySelectorAll('#dropdownContent a');
    if (dropdownItems.length >= 7) {
        dropdownItems[0].innerText = translations[lang].allSections;
        dropdownItems[1].innerText = translations[lang].cod;
        dropdownItems[2].innerText = translations[lang].amazonDevices;
        dropdownItems[3].innerText = translations[lang].electronics;
        dropdownItems[4].innerText = translations[lang].home;
        dropdownItems[5].innerText = translations[lang].fashion;
        dropdownItems[6].innerText = translations[lang].sports;
    }
    
    // إعادة عرض المنتجات
    if (typeof renderProducts === 'function') {
        renderProducts();
    }
}

// تحميل اللغة المخزنة
const savedLang = localStorage.getItem('language');
if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
    changeLanguage(savedLang);
}

// ========================================
// نافذة تغيير اللغة
// ========================================
const languageSelector = document.getElementById('languageSelector');
const langDropdown = document.getElementById('langDropdown');

if (languageSelector) {
    languageSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });
}

// اختيار اللغة
document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
        langDropdown.classList.remove('show');
    });
});

// إغلاق نافذة اللغة عند النقر خارجها
window.addEventListener('click', (e) => {
    if (!languageSelector?.contains(e.target)) {
        langDropdown?.classList.remove('show');
    }
});
