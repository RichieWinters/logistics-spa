# 🚀 Быстрая справка по SEO

## 📋 Основные файлы для редактирования

### 1. 🏢 Информация о компании

**Файл:** `src/utils/seo.js` → раздел `COMPANY_INFO`

```javascript
name: "Название компании",
phone: "+375 29 123-45-67",
email: "info@domain.by",
address: "Полный адрес",
website: "https://domain.by",
```

### 2. 🖼️ Favicon (иконка сайта)

**Файлы:** Поместите в папку `public/`

- `favicon.ico`
- `apple-touch-icon.png`
- `icon-192.png`

**Обновить:** `index.html` → секция `<head>`

### 3. 🌐 Домен сайта

**Файлы для обновления:**

- `src/utils/seo.js` → `website`
- `public/robots.txt` → `Sitemap: https://...`

---

## 🔧 Как добавить SEO к новой странице

### Шаг 1: Добавьте конфигурацию в `src/utils/seo.js`

```javascript
// В раздел PAGE_SEO_CONFIG добавьте:
новаяСтраница: {
  title: "Заголовок страницы",
  description: "Описание 150-160 символов",
  keywords: "ключевые, слова",
},
```

### Шаг 2: Подключите к странице

```javascript
// В начало файла страницы:
import { useSEO } from "@/hooks/useSEO";
import { PAGE_SEO_CONFIG } from "@/utils/seo";

// В компонент:
export const НоваяСтраница = () => {
  useSEO(PAGE_SEO_CONFIG.новаяСтраница);
  // ...
```

---

## 📱 Где искать номера телефонов

```bash
# Команда для поиска всех телефонов:
grep -r "+375" src/
grep -r "phone" src/
```

**Основные места:**

- `src/utils/seo.js` → `COMPANY_INFO.phone`
- `src/components/footer.jsx`
- Формы обратной связи

---

## 🗺️ Обновление Sitemap

### В консоли браузера (F12):

```javascript
// Скопируйте и выполните:
import { logSitemap } from "./src/utils/sitemap.js";
logSitemap();

// Затем скопируйте результат и сохраните как public/sitemap.xml
```
