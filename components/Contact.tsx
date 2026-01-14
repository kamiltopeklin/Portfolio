'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
    acceptPrivacy: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.acceptPrivacy) {
      alert('Please accept the privacy policy to continue.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // FormSubmit - Simple form submission service (no API key needed!)
      // Just needs your email address
      const recipientEmail = 'Kamiltopeklin@gmail.com'
      
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.email,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFormData({
          email: '',
          subject: '',
          message: '',
          acceptPrivacy: false
        })
        const form = e.target as HTMLFormElement
        form.reset()
        setIsSubmitting(false)
        return
      } else {
        console.error('FormSubmit error:', result)
        throw new Error(result.message || 'Failed to send message')
      }
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen relative overflow-hidden pt-20">
      {/* Dark background with world map texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.4'%3E%3Cpath d='M50,50 Q80,30 120,50 T200,50'/%3E%3Cpath d='M50,80 Q100,60 150,80 T250,80'/%3E%3Cpath d='M200,40 Q220,30 240,40 T280,40'/%3E%3Cpath d='M180,100 Q200,90 220,100 T260,100'/%3E%3Cpath d='M100,120 Q130,110 160,120 T220,120'/%3E%3Cpath d='M250,60 Q270,50 290,60 T330,60'/%3E%3Cpath d='M280,90 Q300,80 320,90 T360,90'/%3E%3Cpath d='M300,130 Q320,120 340,130 T380,130'/%3E%3C/g%3E%3Ccircle cx='80' cy='60' r='1.5' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='150' cy='70' r='1.5' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='220' cy='50' r='1.5' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='280' cy='80' r='1.5' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='320' cy='110' r='1.5' fill='%23ffffff' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Contact
          </h2>
          
          {/* Intro text */}
          <p className="text-white text-center mb-12 text-lg">
            Please contact me at <a href="mailto:Kamiltopeklin@gmail.com" className="text-blue-400 hover:text-blue-300 underline">Kamiltopeklin@gmail.com</a> or use this contact form.
          </p>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-600 text-white rounded-lg text-center">
              Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-600 text-white rounded-lg text-center">
              Sorry, there was an error sending your message. Please try again or email me directly at Kamiltopeklin@gmail.com
            </div>
          )}

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className="space-y-8"
          >
            {/* Email Field */}
            <div>
              <div className="flex items-center mb-2">
                <label htmlFor="email" className="text-white text-sm font-medium w-24">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@domain.com"
                  className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 border-b border-white ml-4 pb-2"
                  style={{
                    backgroundColor: 'transparent !important',
                    WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
                    boxShadow: '0 0 0 1000px transparent inset !important'
                  }}
                  required
                />
              </div>
              <p className="text-white text-xs mt-2 ml-28">
                The email address will only be used to respond to your request. It will not be used for any other purpose.
              </p>
            </div>

            {/* Subject Field */}
            <div className="flex items-center">
              <label htmlFor="subject" className="text-white text-sm font-medium w-24">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 border-b border-white ml-4 pb-2"
                style={{
                  backgroundColor: 'transparent !important',
                  WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
                  boxShadow: '0 0 0 1000px transparent inset !important'
                }}
                required
              />
            </div>

            {/* Message Field */}
            <div className="flex items-start">
              <label htmlFor="message" className="text-white text-sm font-medium w-24 pt-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 border-b border-white ml-4 pb-2 resize-none"
                style={{
                  backgroundColor: 'transparent !important',
                  WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
                  boxShadow: '0 0 0 1000px transparent inset !important'
                }}
                required
              />
            </div>

            {/* reCAPTCHA Notice */}
            <p className="text-white text-xs text-center">
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                Terms of Service
              </a>{' '}
              apply.
            </p>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-center relative">
              <div className="relative">
                <input
                  type="checkbox"
                  id="acceptPrivacy"
                  name="acceptPrivacy"
                  checked={formData.acceptPrivacy}
                  onChange={handleChange}
                  className="w-5 h-5 bg-transparent border-2 border-white focus:ring-purple-500 focus:ring-2 rounded cursor-pointer"
                  style={{ 
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none'
                  }}
                  required
                />
                {formData.acceptPrivacy && (
                  <svg className="absolute top-0 left-0 w-5 h-5 pointer-events-none" fill="white" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                )}
              </div>
              <label htmlFor="acceptPrivacy" className="text-white text-sm ml-3 cursor-pointer">
                I accept privacy policy
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-purple-900 border-2 border-purple-600 text-white font-semibold uppercase rounded-lg hover:bg-purple-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

