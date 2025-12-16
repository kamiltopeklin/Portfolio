'use client'

import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiRedux, 
  SiMui,
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiNestjs, 
  SiGo, 
  SiDotnet, 
  SiPython, 
  SiDjango, 
  SiFastapi, 
  SiSpring, 
  SiGooglecloud, 
  SiDocker, 
  SiKubernetes, 
  SiTerraform, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiRedis, 
  SiJest, 
  SiCypress, 
  SiKotlin, 
  SiAndroidstudio,
  SiOpenai,
  SiHtml5,
} from 'react-icons/si'
import { 
  FaGitAlt, 
  FaCodeBranch,
  FaBrain,
  FaVectorSquare,
  FaAws,
  FaJava,
  FaCode,
  FaSearch,
  FaMobileAlt,
  FaRocket,
  FaCheckCircle,
  FaMicrosoft,
  FaWindowMaximize
} from 'react-icons/fa'
import { 
  HiOutlineCube
} from 'react-icons/hi'

export default function Skills() {
  const technologies = [
    {
      name: 'React',
      description: 'A JavaScript library for building user interfaces, particularly single-page applications',
      Icon: SiReact
    },
    {
      name: 'JavaScript',
      description: 'A scripting programming language that can run on both the client and server side (node.js)',
      Icon: SiJavascript
    },
    {
      name: 'TypeScript',
      description: 'A typed superset of JavaScript that compiles to plain JavaScript, adding static type definitions',
      Icon: SiTypescript
    },
    {
      name: 'Next',
      description: 'A React framework for production with server-side rendering and static site generation',
      Icon: SiNextdotjs
    },
    {
      name: 'Redux',
      description: 'A predictable state container for JavaScript applications, helping manage application state',
      Icon: SiRedux
    },
    {
      name: 'Material UI',
      description: 'A popular React UI framework implementing Google\'s Material Design principles',
      Icon: SiMui
    },
    {
      name: 'Tailwind CSS',
      description: 'A utility-first CSS framework for rapidly building custom user interfaces',
      Icon: SiTailwindcss
    },
    {
      name: 'Node',
      description: 'A JavaScript runtime environment that executes JavaScript code outside of a web browser',
      Icon: SiNodedotjs
    },
    {
      name: 'Express',
      description: 'A minimal and flexible Node.js web application framework for building APIs and web servers',
      Icon: SiExpress
    },
    {
      name: 'Nest',
      description: 'A progressive Node.js framework for building efficient and scalable server-side applications',
      Icon: SiNestjs
    },
    {
      name: 'GO',
      description: 'A statically typed, compiled programming language designed for simplicity and efficiency',
      Icon: SiGo
    },
    {
      name: 'C#',
      description: 'A modern, object-oriented programming language developed by Microsoft for .NET applications',
      Icon: FaCode
    },
    {
      name: '.NET',
      description: 'A free, cross-platform, open-source developer platform for building many types of applications',
      Icon: SiDotnet
    },
    {
      name: 'Python',
      description: 'A high-level, interpreted programming language known for its simplicity and versatility',
      Icon: SiPython
    },
    {
      name: 'Django',
      description: 'A high-level Python web framework that encourages rapid development and clean design',
      Icon: SiDjango
    },
    {
      name: 'FastAPI',
      description: 'A modern, fast web framework for building APIs with Python based on standard type hints',
      Icon: SiFastapi
    },
    {
      name: 'Java',
      description: 'A class-based, object-oriented programming language designed for portability and reliability',
      Icon: FaJava
    },
    {
      name: 'Spring Boot',
      description: 'An open-source Java-based framework used to create microservices and web applications',
      Icon: SiSpring
    },
    {
      name: 'Microservices',
      description: 'An architectural approach where applications are built as a collection of loosely coupled services',
      Icon: FaCodeBranch
    },
    {
      name: 'LLM',
      description: 'Large Language Models - AI systems that understand and generate human-like text',
      Icon: SiOpenai
    },
    {
      name: 'RAG',
      description: 'Retrieval-Augmented Generation - AI technique combining information retrieval with text generation',
      Icon: FaCodeBranch
    },
    {
      name: 'Embeddings',
      description: 'Vector representations of text that capture semantic meaning for AI and search applications',
      Icon: FaVectorSquare
    },
    {
      name: 'AWS',
      description: 'Amazon Web Services - A comprehensive cloud computing platform offering various services',
      Icon: FaAws
    },
    {
      name: 'Azure',
      description: 'Microsoft\'s cloud computing platform providing a range of cloud services and solutions',
      Icon: FaMicrosoft
    },
    {
      name: 'GCP',
      description: 'Google Cloud Platform - A suite of cloud computing services running on Google infrastructure',
      Icon: SiGooglecloud
    },
    {
      name: 'Docker',
      description: 'A platform for developing, shipping, and running applications using containerization technology',
      Icon: SiDocker
    },
    {
      name: 'Kubernetes',
      description: 'An open-source container orchestration platform for automating deployment and scaling',
      Icon: SiKubernetes
    },
    {
      name: 'CI/CD',
      description: 'Continuous Integration and Continuous Deployment - Automation of software delivery pipelines',
      Icon: FaGitAlt
    },
    {
      name: 'Terraform',
      description: 'An infrastructure as code tool for building, changing, and versioning cloud infrastructure',
      Icon: SiTerraform
    },
    {
      name: 'PostgreSQL',
      description: 'A powerful, open-source relational database management system with advanced features',
      Icon: SiPostgresql
    },
    {
      name: 'MySQL',
      description: 'A popular open-source relational database management system used in web applications',
      Icon: SiMysql
    },
    {
      name: 'MongoDB',
      description: 'A NoSQL document database designed for ease of development and scaling',
      Icon: SiMongodb
    },
    {
      name: 'Redis',
      description: 'An in-memory data structure store used as a database, cache, and message broker',
      Icon: SiRedis
    },
    {
      name: 'Jest',
      description: 'A JavaScript testing framework designed for testing React applications and Node.js code',
      Icon: SiJest
    },
    {
      name: 'pytest',
      description: 'A testing framework for Python that makes it easy to write simple and scalable test cases',
      Icon: SiPython
    },
    {
      name: 'Cypress',
      description: 'An end-to-end testing framework for web applications running in the browser',
      Icon: SiCypress
    },
    {
      name: 'Playwright',
      description: 'A framework for end-to-end testing that enables reliable cross-browser web automation',
      Icon: FaWindowMaximize
    },
    {
      name: 'Kotlin',
      description: 'A modern programming language that runs on the Java Virtual Machine, used for Android development',
      Icon: SiKotlin
    },
    {
      name: 'Android Studio',
      description: 'The official integrated development environment for Google\'s Android operating system',
      Icon: SiAndroidstudio
    },
    {
      name: 'Android SDK',
      description: 'Software Development Kit for developing applications for the Android platform',
      Icon: SiAndroidstudio
    }
  ]

  const capabilities = [
    {
      title: 'Web Development',
      description: 'Creating static or dynamic websites and web applications compliant with W3C standards',
      Icon: SiHtml5
    },
    {
      title: 'SEO Consultation',
      description: 'Optimizing websites for SEO, creating SEO-compliant pages',
      Icon: FaSearch
    },
    {
      title: 'Technologies',
      description: 'Using the latest available technologies in projects',
      Icon: FaCode
    },
    {
      title: 'Applications',
      description: 'Creating advanced web applications for all mobile and desktop devices',
      Icon: null,
      letter: 'A'
    },
    {
      title: 'Responsiveness',
      description: 'All websites I create are responsive (RWD) - they display correctly on all mobile devices',
      Icon: FaMobileAlt
    },
    {
      title: 'Code Quality',
      description: 'Code of websites I create is compliant with modern standards, has an organized, "clean" structure',
      Icon: FaCheckCircle
    },
    {
      title: 'Performance',
      description: 'I use advanced caching and code minimization techniques, making your website work much faster!',
      Icon: FaRocket
    }
  ]

  return (
    <section id="skills" className="section">
      {/* Skills Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Skills</h2>
          
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            As new technologies are introduced to the market, I use them in my projects. 
            This makes the websites I create more functional and modern, and their appearance 
            is not inferior to websites created by large, professional companies.
          </p>

        <div className="flex flex-col items-center gap-8 mb-16">
          {/* First row: 3 cards */}
          <div className="flex flex-wrap justify-center gap-0 w-full max-w-7xl">
            {capabilities.slice(0, 3).map((capability, index) => (
              <div 
                key={index} 
                className="group bg-black border border-gray-300 rounded-lg flex flex-col items-center text-center w-[255px] h-[293px] m-0 px-5 py-[30px] transition-all duration-300 hover:bg-purple-900 hover:border-purple-400"
              >
                <div className="mb-6">
                  {capability.Icon ? (
                    <capability.Icon className="w-20 h-20 text-white group-hover:text-white transition-colors duration-300" />
                  ) : (
                    <div className="w-20 h-20 flex items-center justify-center">
                      <span className="text-white text-7xl font-bold">{capability.letter}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-5 text-white">
                  {capability.title}
                </h3>
                <p className="text-white text-sm leading-relaxed mb-4 flex-grow">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Second row: 4 cards */}
          <div className="flex flex-wrap justify-center gap-0 w-full max-w-7xl">
            {capabilities.slice(3, 7).map((capability, index) => (
              <div 
                key={index + 3} 
                className="group bg-black border border-gray-300 rounded-lg flex flex-col items-center text-center w-[255px] h-[293px] m-0 px-5 py-[30px] transition-all duration-300 hover:bg-purple-900 hover:border-purple-400"
              >
                <div className="mb-6">
                  {capability.Icon ? (
                    <capability.Icon className="w-20 h-20 text-white group-hover:text-white transition-colors duration-300" />
                  ) : (
                    <div className="w-20 h-20 flex items-center justify-center">
                      <span className="text-white text-7xl font-bold">{capability.letter}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-5 text-white">
                  {capability.title}
                </h3>
                <p className="text-white text-sm leading-relaxed mb-4 flex-grow">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Technologies</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            My skills encompass both programming and design, spanning front-end technologies 
            (HTML5, CSS3, JavaScript, Angular, React, Vue, Ember, Next) and back-end technologies 
            (PHP, Symfony, Yii, Laravel). Below is an overview of the technologies I work with.
          </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white shadow-lg relative overflow-hidden">
                {tech.Icon ? (
                  <tech.Icon className="w-16 h-16 text-white z-10" />
                ) : (
                  <span className="text-2xl font-bold z-10">{tech.name.substring(0, 2).toUpperCase()}</span>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
