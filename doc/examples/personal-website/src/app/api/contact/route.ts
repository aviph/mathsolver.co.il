import { NextResponse } from 'next/server'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'

export async function POST(request: Request) {
  try {
    const apiKey = process.env.MAILERSEND_API_KEY
    console.log('API Key exists:', !!apiKey)
    
    if (!apiKey) {
      console.error('MailerSend API key is not set')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const mailerSend = new MailerSend({
      apiKey: apiKey
    })

    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const sentFrom = new Sender('noreply@trial-k68zxl2n32mlj905.mlsender.net', 'Shayki Abramczyk')
    const recipients = [
      new Recipient('shayki5@gmail.com', 'Shayki Abramczyk')
    ]

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(`New Contact Form Message from ${name}`)
      .setHtml(`
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `)
      .setText(`
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `)

    console.log('Attempting to send email with config:', {
      to: recipients[0].email,
      from: sentFrom.email,
      subject: `New Contact Form Message from ${name}`,
      apiKeyExists: !!apiKey
    })

    // Send email
    await mailerSend.email.send(emailParams)

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
