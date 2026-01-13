'use client'

import Link from 'next/link'

export default function Hero() {
  const handleScrollDown = () => {
    // Scroll immediately
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20 relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Kamil Toporek
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-8">
          Senior Full Stack Engineer & AI Developer
        </p>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Building high-performing React/TypeScript applications and SaaS platforms.
          Through innovative design and modern architecture, your brand gains exceptional value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Portfolio/projects/"
            className="btn bg-gray-900 text-white px-8 py-3 rounded-lg text-lg transition-transform duration-100 hover:scale-105"
            style={{ backgroundColor: 'rgb(17 24 39)' }}
          >
            View Projects
          </a>
          <a
            href="/Portfolio/contact/"
            className="btn bg-gray-900 text-white px-8 py-3 rounded-lg text-lg transition-transform duration-100 hover:scale-105"
            style={{ backgroundColor: 'rgb(17 24 39)' }}
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      {/* Scroll down button */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-16 h-16 rounded-full bg-transparent border-2 border-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group"
        aria-label="Scroll to about section"
      >
        {/* Black chevron pointing down */}
        <svg 
          className="w-5 h-5 text-black relative z-10" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}

