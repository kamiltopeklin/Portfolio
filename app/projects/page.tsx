'use client'

import Image from 'next/image'

export default function Projects() {

  // Helper function to get image path based on project name
  const getImagePath = (projectName: string): string => {
    // Get basePath for GitHub Pages
    const basePath = typeof window !== 'undefined' && window.location.pathname.startsWith('/Portfolio') 
      ? '/Portfolio' 
      : ''
    
    const imageMap: { [key: string]: string } = {
      'Zendesk Agent Workspace': '/images/Zendesk Agent Workspace.png',
      'Zendesk Adaptable Agent Workspace': '/images/Zendesk Adaptable Agent.png',
      'Intercom Inbox': '/images/Intercom Inbox.png',
      'Freshworks Dashboard': '/images/Freshworks Dashboard.png',
      'Freshdesk Dashboards': '/images/Freshdesk Dashboard.png',
      'Twilio Flex': '/images/Twilio Flex.png',
      'HubSpot Help Desk': '/images/Hubspot Help Desk.png',
      'Genesys Contact Center': '/images/Genesys Contact Center.png',
      'Losant IoT Platform': '/images/Losant IoT Platform.png',
      'Ubidots IoT Dashboards': '/images/Ubidots IoT Dashboards.png',
      'ThingsBoard': '/images/ThingsBoard.png',
      'ThingsBoard Dashboards': '/images/ThingsBoard Dashboards.png',
      'Azure IoT Central': '/images/Azure IoT Central.png',
      'Datacake': '/images/Datacake.png',
      'Revolut Web App': '/images/Revolut Web App.png',
      'N26 Web App': '/images/N26 Web App.png',
      'Wise Money Transfer': '/images/Wise Money Transfer.png',
      'Bank of Hawaii Online Banking': '/images/Bank of Hawaii Online Banking.png',
      'Segment': '/images/Twilo Segment.png',
      'Amplitude': '/images/Amplitude.png'
    }
    const path = imageMap[projectName] || '/images/default.png'
    // Encode the filename part to handle spaces in URLs
    const parts = path.split('/')
    const filename = parts.pop() || ''
    const encodedPath = [...parts, encodeURIComponent(filename)].join('/')
    // Add basePath prefix for GitHub Pages
    return `${basePath}${encodedPath}`
  }

  const projects = [
    {
      name: 'Zendesk Agent Workspace',
      description: 'Modern customer support workspace with advanced agent tools and workflows. Built with React and TypeScript for optimal performance and user experience.',
      url: 'https://www.zendesk.com/blog/agent-workspace/',
      category: 'Customer Support',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Zendesk Adaptable Agent Workspace',
      description: 'Flexible and customizable agent workspace solution. Adaptive interface that adjusts to different support workflows and team needs.',
      url: 'https://www.zendesk.com/blog/adaptable-agent-workspace/',
      category: 'Customer Support',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Intercom Inbox',
      description: 'Customer messaging platform with inbox management. Real-time communication features built with modern web technologies for seamless customer engagement.',
      url: 'https://www.intercom.com/help/en/articles/6274899-get-started-with-intercom-inbox',
      category: 'Customer Support',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Freshworks Dashboard',
      description: 'Comprehensive help desk dashboard with reporting and analytics. Data visualization and real-time metrics for support teams to track performance.',
      url: 'https://www.freshworks.com/freshdesk/reporting/dashboard/',
      category: 'Help Desk',
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Freshdesk Dashboards',
      description: 'Advanced dashboard features for help desk management. Customizable widgets and real-time data updates for comprehensive ticket tracking.',
      url: 'https://support.freshdesk.com/support/solutions/articles/50000011779-dashboards-in-freshdesk',
      category: 'Help Desk',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Twilio Flex',
      description: 'Cloud-based contact center platform. Scalable solution for customer engagement with advanced routing capabilities and real-time analytics.',
      url: 'https://www.twilio.com/en-us/flex',
      category: 'Contact Center',
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'HubSpot Help Desk',
      description: 'Help desk workspace with ticket management. Integrated CRM features for seamless customer support and relationship management.',
      url: 'https://knowledge.hubspot.com/help-desk/overview-of-the-help-desk-workspace',
      category: 'Help Desk',
      color: 'from-orange-500 to-yellow-600'
    },
    {
      name: 'Genesys Contact Center',
      description: 'Contact center dashboards and management tools. Enterprise-grade solution for managing customer interactions across multiple channels.',
      url: 'https://www.genesys.com/blog/post/back-to-basics-contact-center-dashboards',
      category: 'Contact Center',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      name: 'Losant IoT Platform',
      description: 'Enterprise IoT platform for device management and data visualization. Real-time monitoring and analytics dashboard for connected devices.',
      url: 'https://www.losant.com/iot-platform',
      category: 'IoT Platform',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Ubidots IoT Dashboards',
      description: 'IoT dashboard solutions for data visualization. Customizable dashboards for monitoring and analyzing IoT device data in real-time.',
      url: 'https://ubidots.com/blog/iot-dashboards/',
      category: 'IoT Platform',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'ThingsBoard',
      description: 'Open-source IoT platform for data collection and visualization. Scalable solution for managing IoT devices and processing telemetry data.',
      url: 'https://thingsboard.io/',
      category: 'IoT Platform',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'ThingsBoard Dashboards',
      description: 'Advanced dashboard features for IoT data management. Real-time widgets and customizable layouts for comprehensive device monitoring.',
      url: 'https://thingsboard.io/docs/user-guide/dashboards/',
      category: 'IoT Platform',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      name: 'Azure IoT Central',
      description: 'Microsoft Azure IoT application platform. Cloud-based solution for building, deploying, and managing IoT applications at scale.',
      url: 'https://apps.azureiotcentral.com/',
      category: 'IoT Platform',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Datacake',
      description: 'IoT platform for device management and analytics. Low-code platform for building IoT applications with powerful data visualization tools.',
      url: 'https://datacake.co/',
      category: 'IoT Platform',
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Revolut Web App',
      description: 'Modern banking web application with full financial services. Secure, responsive design for seamless user experience across all devices.',
      url: 'https://www.revolut.com/blog/post/introducing-the-revolut-web-app/',
      category: 'Banking',
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: 'N26 Web App',
      description: 'Digital banking platform web application. Modern fintech solution with intuitive interface for managing finances and transactions.',
      url: 'https://n26.com/en-eu/webapp',
      category: 'Banking',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Wise Money Transfer',
      description: 'International money transfer application. Fast and transparent cross-border payments with real-time exchange rates and low fees.',
      url: 'https://wise.com/gb/money-transfer-app/',
      category: 'Banking',
      color: 'from-green-600 to-emerald-600'
    },
    {
      name: 'Bank of Hawaii Online Banking',
      description: 'Banking portal with comprehensive financial management. Secure online banking platform with full account management and transaction capabilities.',
      url: 'https://www.boh.com/personal/online-mobile/demos/overview',
      category: 'Banking',
      color: 'from-blue-700 to-blue-900'
    },
    {
      name: 'Segment',
      description: 'Customer data platform for collecting and routing data. Advanced analytics and integration capabilities for unified customer profiles.',
      url: 'https://segment.com/',
      category: 'Analytics',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      name: 'Amplitude',
      description: 'Product analytics platform for user behavior insights. Real-time data processing and visualization tools for understanding user journeys.',
      url: 'https://amplitude.com/',
      category: 'Analytics',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="section-title mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Projects</h1>
          <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            Below are some of the platforms and applications I&apos;ve worked on. These projects 
            demonstrate my expertise in building scalable, modern web applications across 
            various industries including customer support, IoT, financial services, and analytics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => handleProjectClick(project.url)}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-200 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Project Screenshot Container */}
                <div className="relative w-full h-80 overflow-hidden bg-gray-200">
                  {/* Screenshot-style placeholder with browser frame */}
                  <div className="w-full h-full relative">
                    {/* Browser frame simulation */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gray-300 flex items-center px-2 z-10 group-hover:opacity-0 transition-opacity duration-200">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    
                    {/* Project screenshot area with actual image */}
                    <div className="w-full h-full pt-8 relative">
                      <Image
                        src={getImagePath(project.name)}
                        alt={project.name}
                        fill
                        className="object-contain"
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        unoptimized={true}
                      />
                    </div>
                  </div>
                  
                  {/* Hover Overlay with Description */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-purple-700/95 via-purple-600/95 to-indigo-700/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ transition: 'opacity 0.2s ease' }}
                  >
                    <div className="text-center flex flex-col items-center justify-center h-full space-y-4 px-4">
                      <h3 className="text-xl font-bold uppercase tracking-wide leading-tight break-words max-w-full">
                        {project.name}
                      </h3>
                      <p 
                        className="text-base leading-6 text-gray-50 font-normal max-w-md"
                        style={{
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          wordBreak: 'break-all',
                          textAlign: 'left'
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Title Bar (visible when not hovering) */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-5 transform transition-opacity duration-200 group-hover:opacity-0 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 truncate mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {project.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
