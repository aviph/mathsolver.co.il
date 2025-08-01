# הגדרת שליחת אימיילים

## שלב 1: הגדרת סיסמת אפליקציה ב-Gmail

1. היכנס לחשבון Google שלך
2. לך ל-[Google Account Settings](https://myaccount.google.com/)
3. לחץ על "Security" (אבטחה)
4. הפעל "2-Step Verification" אם לא מופעל
5. לחץ על "App passwords" (סיסמאות אפליקציה)
6. בחר "Mail" ו-"Other (Custom name)"
7. תן שם כמו "MathSolver Website"
8. העתק את הסיסמה שנוצרה (16 תווים)

## שלב 2: הגדרת משתני הסביבה

עדכן את הקובץ `.env` עם הפרטים שלך:

```env
EMAIL_USER=click808@gmail.com
EMAIL_PASS=your_16_character_app_password_here
```

## שלב 3: בדיקה

1. הפעל את השרת: `pnpm dev`
2. היכנס לטופס יצירת קשר
3. מלא את הטופס ולחץ "שלח הודעה"
4. בדוק שהאימייל התקבל ב-click808@gmail.com

## הערות חשובות

- אל תשתמש בסיסמה הרגילה של Gmail
- השתמש רק בסיסמת אפליקציה
- שמור על קובץ `.env` בטוח ואל תעלה אותו לגיט
- אם יש בעיות, בדוק את הלוגים בקונסול 