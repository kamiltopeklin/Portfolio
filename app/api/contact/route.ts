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

    // Escape HTML to prevent injection
    const escapeHtml = (str: string) => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    }

    const safeEmail = escapeHtml(email)
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

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
              <p><strong>From:</strong> ${safeEmail}</p>
              <p><strong>Subject:</strong> ${safeSubject}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2f80ed; margin: 10px 0;">
                ${safeMessage}
              </p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="margin-top: 20px;">Please reply directly to this email or contact the sender at: <a href="mailto:${safeEmail}" style="color: #2f80ed;">${safeEmail}</a></p>
            
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
    // Log detailed error information
    const errorDetails = {
      message: error.message,
      name: error.name,
      code: error.code,
      response: error.response?.body,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }
    
    console.error('Error in contact form API:', JSON.stringify(errorDetails, null, 2))
    
    // Provide more specific error messages based on error type
    let errorMessage = 'Failed to submit form. Please try again later.'
    let statusCode = 500

    // Check for specific error types
    if (error.response?.body?.errors) {
      const sendGridErrors = error.response.body.errors
      console.error('SendGrid API errors:', JSON.stringify(sendGridErrors, null, 2))
      
      // Check for common SendGrid errors
      const firstError = Array.isArray(sendGridErrors) ? sendGridErrors[0] : sendGridErrors
      if (firstError?.message?.includes('sender')) {
        errorMessage = 'Email sender not verified. Please contact the site administrator.'
      } else if (firstError?.message?.includes('API key')) {
        errorMessage = 'Email service configuration error. Please contact the site administrator.'
      } else {
        errorMessage = `Email service error: ${firstError?.message || 'Unknown error'}`
      }
    } else if (error.message?.includes('JSON')) {
      errorMessage = 'Invalid form data. Please check your input and try again.'
      statusCode = 400
    } else if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_USER) {
      errorMessage = 'Email service not configured. Please contact the site administrator.'
      statusCode = 500
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        // Include error details in development mode only
        ...(process.env.NODE_ENV === 'development' && { details: errorDetails })
      },
      { status: statusCode }
    )
  }
}
