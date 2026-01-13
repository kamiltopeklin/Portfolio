import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

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
    const sendGridApiKey = process.env.SENDGRID_API_KEY
    const emailUser = process.env.EMAIL_USER

    if (!sendGridApiKey || !emailUser) {
      console.error('SendGrid configuration missing:', {
        hasApiKey: !!sendGridApiKey,
        hasEmailUser: !!emailUser
      })
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the site administrator.' },
        { status: 500 }
      )
    }

    // Initialize SendGrid with API key
    sgMail.setApiKey(sendGridApiKey)

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
    // Send to Kamil's email, but use EMAIL_USER as the sender (must be verified in SendGrid)
    const recipientEmail = 'Kamiltopeklin@gmail.com'
    const msg = {
      to: recipientEmail,
      from: emailUser,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `New contact form submission\n\nFrom: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: html,
    }

    // Send email via SendGrid
    try {
      await sgMail.send(msg)
      console.log('Contact form email sent successfully:', {
        to: recipientEmail,
        from: email,
        subject,
        timestamp: new Date().toISOString()
      })
    } catch (sendError: any) {
      console.error('SendGrid API error:', {
        message: sendError.message,
        code: sendError.code,
        response: sendError.response?.body
      })
      throw sendError
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    })
  } catch (error: any) {
    console.error('Error in contact form API:', {
      message: error.message,
      stack: error.stack,
      response: error.response?.body
    })
    
    // Provide more specific error messages
    let errorMessage = 'Failed to submit form. Please try again later.'
    if (error.response?.body?.errors) {
      const sendGridErrors = error.response.body.errors
      console.error('SendGrid errors:', sendGridErrors)
      errorMessage = 'Email service error. Please try again or contact directly.'
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
