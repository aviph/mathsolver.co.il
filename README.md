# MathSolver - אתר פורטפוליו של אבי פילוסוף

אתר פורטפוליו מקצועי למורה פרטי למתמטיקה - אבי פילוסוף.

## 🌟 תכונות

- **עיצוב מודרני** עם אלמנטים מתמטיים
- **רספונסיבי מלא** לכל גדלי המסכים
- **אנימציות מתקדמות** עם Framer Motion
- **SEO מותאם** לעברית
- **טופס יצירת קשר** עם ולידציה
- **סליידרים אינטראקטיביים**
- **ניווט חלק** בין הסעיפים

## 🚀 התקנה והפעלה

### דרישות מקדימות
- Node.js 18+ 
- pnpm (מומלץ) או npm

### התקנה
```bash
# התקנת תלויות
pnpm install

# הפעלת שרת פיתוח
pnpm dev

# בנייה לפרודקשן
pnpm build

# הפעלת שרת פרודקשן
pnpm start
```

האתר יהיה זמין בכתובת: `http://localhost:3000`

## 📁 מבנה הפרויקט

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # סגנונות גלובליים
│   ├── layout.tsx         # דף ראשי
│   └── page.tsx           # דף הבית
├── components/            # קומפוננטות React
│   ├── Header.tsx         # כותרת עליונה
│   ├── HeroSection.tsx    # סעיף ראשי
│   ├── TestimonialsSection.tsx  # המלצות
│   ├── AboutSection.tsx   # מי אני
│   ├── AdvantagesSection.tsx    # היתרונות
│   ├── YouTubeSection.tsx # ערוץ יוטיוב
│   ├── StudentsSection.tsx      # תלמידים
│   ├── ContactSection.tsx # יצירת קשר
│   └── ScrollProgress.tsx # סרגל התקדמות
└── lib/                   # ספריות עזר
```

## 🎨 עיצוב

### צבעים
- **כחול מתמטי** (#2C3E50) - צבע ראשי
- **תכלת רך** (#3498DB) - צבע משני
- **כתום חם** (#E67E22) - צבע דגש
- **ירוק מתמטי** (#27AE60) - הצלחה
- **סגול מתמטי** (#9B59B6) - יצירתיות

### גופנים
- **עברית**: Segoe UI, Tahoma, Arial
- **מתמטיקה**: Times New Roman

## 📱 רספונסיביות

האתר מותאם לכל גדלי המסכים:
- **מובייל**: 320px - 768px
- **טאבלט**: 768px - 1024px
- **דסקטופ**: 1024px+

## 🔧 טכנולוגיות

- **Next.js 15** - React Framework
- **TypeScript** - טיפוסים חזקים
- **Tailwind CSS** - עיצוב מהיר
- **Framer Motion** - אנימציות
- **React Hook Form** - טפסים
- **Zod** - ולידציה
- **Lucide React** - אייקונים

## 📊 SEO

- **Meta tags** מותאמים לעברית
- **Schema.org** structured data
- **Open Graph** tags
- **Twitter Cards**
- **Robots.txt** ו-sitemap
- **Canonical URLs**

## 🚀 פריסה

### Vercel (מומלץ)
```bash
# התקנת Vercel CLI
npm i -g vercel

# פריסה
vercel
```

### Netlify
```bash
# בנייה
pnpm build

# העלאה לתיקיית dist
```

## 📝 תוכן

### סעיפי האתר
1. **בית** - Hero section עם סליידר
2. **מספרים עלי...** - המלצות תלמידים
3. **מי אני?** - ביוגרפיה וניסיון
4. **היתרונות שלי** - מה מייחד אותי
5. **ערוץ היוטיוב** - סרטונים חינוכיים
6. **אני והתלמידים** - סיפורי הצלחה
7. **דברו איתי** - יצירת קשר

### עדכון תוכן
- תמונות: `public/images/`
- טקסטים: בתוך הקומפוננטות
- פרטי התקשרות: `ContactSection.tsx`

## 🔒 אבטחה

- **HTTPS** בלבד
- **Content Security Policy**
- **XSS Protection**
- **Form validation** חזק
- **Rate limiting** (בפרודקשן)

## 📈 ביצועים

- **Lighthouse Score**: 95+
- **Core Web Vitals**: מותאם
- **Image Optimization**: Next.js
- **Code Splitting**: אוטומטי
- **Caching**: אגרסיבי

## 🤝 תרומה

1. Fork את הפרויקט
2. צור branch חדש (`git checkout -b feature/amazing-feature`)
3. Commit את השינויים (`git commit -m 'Add amazing feature'`)
4. Push ל-branch (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## 📄 רישיון

פרויקט זה מוגן תחת רישיון ISC.

## 📞 יצירת קשר

- **אבי פילוסוף**: 052-8284808
- **אימייל**: avi@mathsolver.co.il
- **אתר**: www.mathsolver.co.il

---

**פותח עם ❤️ עבור אבי פילוסוף** 