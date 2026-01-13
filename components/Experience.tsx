export default function Experience() {
  const careerHighlights = [
    'Built reactive data layers with RxJS (query streams, event buses, retry/backoff pipelines), simplifying state and reducing UI race conditions.',
    'Led development of React/Next.js frontends for data-intensive and AI-powered platforms, improving UX, load times, and engagement for thousands of users.',
    'Built TypeScript-based component libraries and shared UI patterns, standardizing frontend development and reducing duplicate effort across teams.',
    'Implemented stream-based caching and multicasting (shareReplay) to cut redundant requests and stabilize rendering under heavy data loads.',
    'Standardized observable contracts for API calls, WebSocket feeds, and UI events, improving testability and making complex flows easier to reason about.',
    'Introduced operator patterns (debounce/throttle, switch/exhaust mapping, error handling, retry/backoff) that improved responsiveness and user experience on data-heavy screens.',
    'Drove adoption of component composition + RxJS services, enabling clean separation of concerns and smoother feature delivery across teams.'
  ]

  const experiences = [
    {
      title: 'Senior Software Engineer & AI Developer',
      company: 'Concentrix',
      period: 'Oct 2023 – Present',
      location: 'Remote',
      achievements: [
        'Built React/TypeScript UIs with RxJS-driven services for search, filtering, and live results; modeled API/WebSocket flows as observables with clear cancellation.',
        'Created shared observable utilities (request deduping, retry/backoff, error channels) and multicast caches (shareReplay) to stabilize data-heavy dashboards.',
        'Integrated frontends with REST/GraphQL; composed React Query with RxJS where appropriate for consistent loading/error semantics.',
        'Applied SSR/SSG selectively; profiled and removed render bottlenecks (memoization, virtualization) on complex tables and timelines.',
        'Collaborated with product/design to convert UX specs into testable, accessible components with clear reactive boundaries.',
        'Ensured responsiveness with Tailwind CSS design tokens and layout primitives.',
        'Added Jest unit tests for operators/streams and Cypress/Playwright E2E for critical user paths; enforced CI quality gates.',
        'Coordinated with backend/platform on observable API contracts, error envelopes, and observability for client-consumed endpoints.',
        'Mentored engineers in RxJS patterns, stream debugging, and review discipline.'
      ]
    },
    {
      title: 'Full Stack Engineer',
      company: 'Synox',
      period: 'Aug 2020 – Sep 2023',
      location: 'Remote',
      achievements: [
        'Delivered React + TypeScript portals using RxJS-style reactive patterns for live dashboards, filters, and event streams.',
        'Structured stream pipelines to merge server events, user intent, and route changes without race conditions.',
        'Built reusable admin components capable of handling large datasets with debounce/throttle and smart pagination.',
        'Integrated React with Go/.NET/Django REST APIs; implemented robust error boundaries and fallbacks in reactive flows.',
        'Tuned performance via memoization, lazy loading, and virtualized lists for heavy data views.',
        'Introduced Jest & Cypress pipelines; documented reactive conventions for the team.',
        'Worked with stakeholders to encode compliance requirements into predictable, testable UI behavior.'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Look4IT',
      period: 'May 2018 – Mar 2020',
      location: 'Remote',
      achievements: [
        'Shipped React and Angular frontends for banking portals; extracted async logic into service/observable layers to keep components lean.',
        'Implemented TypeScript forms, validation, and dashboards backed by .NET Core APIs with consistent reactive error handling.',
        'Built reusable components/layouts and standardized data-fetch patterns for multi-client projects.',
        'Optimized perceived performance and API usage on complex financial data screens.',
        'Participated in Agile delivery, code reviews, and close design/business collaboration.'
      ]
    },
    {
      title: 'Junior Software Engineer',
      company: 'Kenja K.K.',
      period: 'Apr 2015 – Jan 2018',
      location: 'Remote',
      achievements: [
        'Built high-volume event ingestion services using Node.js/TypeScript and MongoDB, processing millions of events per day.',
        'Designed Kafka-based pipelines powering personalization, analytics, and customer journey tracking features.',
        'Implemented APIs for segmentation, cohorts, and event queries with efficient data access patterns.',
        'Optimized critical queries, indexes, and caching to keep response times low under high traffic.',
        'Worked closely with product teams to turn tracking requirements into reliable backend capabilities and clear documentation.'
      ]
    }
  ]

  return (
    <section id="experience" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Professional Experience</h2>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Career Highlights</h3>
          <ul className="space-y-4">
            {careerHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-600">
                  {exp.period} | {exp.location}
                </p>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Education</h3>
          <p className="text-lg text-gray-700">
            <strong>Bachelor&apos;s Degree in Computer Science</strong>
          </p>
          <p className="text-gray-600">Kyoto University, Kyoto, Japan</p>
        </div>

        <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <p className="text-gray-700"><strong>English</strong> — C2</p>
            <p className="text-gray-700"><strong>Polish</strong> — B2</p>
            <p className="text-gray-700"><strong>Japanese</strong> — B1</p>
          </div>
        </div>
      </div>
    </section>
  )
}

