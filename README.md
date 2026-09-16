# ABADÁ Capoeira Belgique - Multilingual Static Website

A fully responsive, animated static HTML website for ABADÁ Capoeira Belgique with support for French, English, and Portuguese.

## 📁 Folder Structure

```
abada-multilang/
├── index.html                 # Main page
├── css/
│   └── styles.css            # Global styles + animations
├── js/
│   ├── i18n.js               # Internationalization handler
│   └── main.js               # Main JavaScript
├── lang/
│   ├── fr.json               # French translations
│   ├── en.json               # English translations
│   └── pt.json               # Portuguese translations
├── images/                    # Image placeholders
│   ├── hero-placeholder.jpg
│   ├── mestre-placeholder.jpg
│   ├── gymnasium-placeholder.jpg
│   ├── sportcity-placeholder.jpg
│   └── etterbeek-placeholder.jpg
├── config/
│   └── config.json           # Site configuration
├── staticwebapp.config.json  # Azure Static Web Apps config
└── .gitignore
```

## 🌐 Languages Supported

- 🇫🇷 Français (French) - Default
- 🇬🇧 English
- 🇵🇹 Português (Portuguese)

## ✨ Features

- ✅ Fully responsive (mobile-first)
- ✅ Dark mode support
- ✅ Scroll animations (AOS library)
- ✅ Multi-language support with localStorage persistence
- ✅ Smooth transitions & hover effects
- ✅ Parallax backgrounds
- ✅ Floating animations
- ✅ Zero build step - pure HTML/CSS/JS

## 🚀 Deployment

### Azure Static Web Apps
```bash
git push origin main
```

The site auto-deploys via GitHub Actions.

### Local Testing
```bash
python3 -m http.server 8000
# or
npx http-server
```

Visit: `http://localhost:8000`

## 📝 Translations

To add or update translations, edit files in `lang/`:

```json
{
  "section": {
    "key": "value"
  }
}
```

Use `data-i18n="section.key"` in HTML to make elements translatable.

## 🎨 Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --capoeira-red: #C41E3A;
    --capoeira-gold: #D4AF37;
    --capoeira-dark: #1A1A1A;
    --brazil-green: #009B3A;
}
```

### Animations
Modify durations in `js/main.js`:
```javascript
AOS.init({
    duration: 800,  // Change this
    easing: 'ease-in-out-quad',
    once: false
});
```

## 📞 Contact

Email: info@capoeirabelgique.be
Phone: +32 483 14 17 58
Instagram: @capoeira_abada_belgique

## 📄 License

© 2025 ABADÁ Capoeira Belgique
