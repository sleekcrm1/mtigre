// i18n - Internationalization handler
let currentLanguage = localStorage.getItem('language') || 'fr';
let translations = {};

async function loadLanguage(lang) {
    try {
        const response = await fetch(`../lang/${lang}.json`);
        translations[lang] = await response.json();
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updatePageLanguage();
    } catch (error) {
        console.error(`Error loading language ${lang}:`, error);
    }
}

function updatePageLanguage() {
    const t = translations[currentLanguage];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(t, key);
        if (value) {
            el.textContent = value;
        }
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

function setLanguage(lang) {
    loadLanguage(lang);
}

// Load initial language
loadLanguage(currentLanguage);
