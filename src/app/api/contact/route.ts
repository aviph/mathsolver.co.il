import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, subject, message } = body

    // בדיקת משתני הסביבה
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('חסרים משתני סביבה לאימייל')
      return NextResponse.json(
        { message: 'שגיאה בהגדרת השרת' },
        { status: 500 }
      )
    }

    // יצירת transporter לאימייל
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // תוכן האימייל
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'click808@gmail.com',
      subject: `הודעה חדשה מ-${name}: ${subject}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">הודעה חדשה מאתר מתמטיקה</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">פרטי השולח:</h3>
            <p><strong>שם:</strong> ${name}</p>
            <p><strong>טלפון:</strong> ${phone}</p>
            <p><strong>אימייל:</strong> ${email}</p>
            <p><strong>נושא:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">תוכן ההודעה:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              הודעה זו נשלחה אוטומטית מאתר מתמטיקה
            </p>
          </div>
        </div>
      `
    }

    // שליחת האימייל לך
    await transporter.sendMail(mailOptions)

    // שליחת אימייל אישור למשתמש
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'תודה על פנייתך - מתמטיקה',
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">תודה על פנייתך!</h2>
          
          <p>שלום ${name},</p>
          
          <p>קיבלתי את ההודעה שלך ואחזור אליך בהקדם האפשרי.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">פרטי הפנייה שלך:</h3>
            <p><strong>נושא:</strong> ${subject}</p>
            <p><strong>הודעה:</strong> ${message}</p>
          </div>
          
          <p>בברכה,<br>צוות מתמטיקה</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              זהו אימייל אוטומטי, אנא אל תשיב עליו
            </p>
          </div>
        </div>
      `
    }

    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json(
      { message: 'ההודעה נשלחה בהצלחה' },
      { status: 200 }
    )

  } catch (error) {
    console.error('שגיאה בשליחת האימייל:', error)
    return NextResponse.json(
      { message: 'שגיאה בשליחת ההודעה' },
      { status: 500 }
    )
  }
} 