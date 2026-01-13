import { NextRequest, NextResponse } from 'next/server'

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

    // For now, log the form submission
    // In production, you can integrate with an email service like Resend, SendGrid, etc.
    console.log('Contact form submission:', {
      email,
      subject,
      message,
      acceptPrivacy,
      timestamp: new Date().toISOString()
    })

    // Return success - form data is logged
    // TODO: Integrate with email service or Netlify Forms API
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
