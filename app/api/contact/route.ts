import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, subject, message, acceptPrivacy } = body

    // Validate required fields
    if (!email || !subject || !message || !acceptPrivacy) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate SendGrid configuration
    if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_USER) {
      console.error('SendGrid configuration missing')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create HTML email template
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: sans-serif; font-size: 16px; color: #000; background-color: #ffffff; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: auto;">
            <h2 style="color: #000;">New Contact Form Submission</h2>
            <p>You have received a new message from your portfolio contact form.</p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2f80ed; margin-top: 0;">Message Details:</h3>
              <p><strong>From:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2f80ed; margin: 10px 0;">
                ${message.replace(/\n/g, '<br>')}
              </p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="margin-top: 20px;">Please reply directly to this email or contact the sender at: <a href="mailto:${email}" style="color: #2f80ed;">${email}</a></p>
            
            <br />
            <p>Thanks,<br />Portfolio Contact Form</p>
          </div>
        </body>
      </html>
    `

    // Prepare email message
    const msg = {
      to: process.env.EMAIL_USER!,
      from: process.env.EMAIL_USER!,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `New contact form submission\n\nFrom: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: html,
    }

    // Send email via SendGrid
    await sgMail.send(msg)

    console.log('Contact form email sent successfully:', {
      to: process.env.EMAIL_USER,
      from: email,
      subject,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    })
  } catch (error: any) {
    console.error('Error sending contact form email:', error.response?.body?.errors || error)
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    )
  }
}
