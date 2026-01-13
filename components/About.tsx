export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Web Application Developer</h2>
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 italic text-center mb-12 mt-8">
            &ldquo;Great work is achieved not by adding more, but by refining until only value remains.&rdquo;
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <div className="space-y-6">
              <p className="leading-relaxed">
                I&apos;m passionate about challenging myself to grow and deliver exceptional solutions. There are no bad ideas—with time and dedication, anything can be improved. What matters most is not giving up, pushing forward, gaining experience, and creating with higher quality. I find inspiration in life and the people around me to build meaningful digital products.
              </p>
              
              <p className="leading-relaxed">
                My clients&apos; primary goal is usually to promote a business or product. My mission is to understand their goals and deliver solutions that exceed expectations. My work is characterized by the highest quality and professionalism. No detail is overlooked. To create a successful website, I develop a clear customer journey vision. I study who your customers are and plan your website to create an emotional connection with them. Layout, typography, structure, colors, and content are crafted with precision.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="leading-relaxed">
                I carefully plan, test, and refine each idea to meet the highest standards. One of the most important keys to a successful website or project is user experience. A well-designed experience improves engagement, builds trust, and drives business growth. Websites I create are intuitive, visually appealing, and easy to navigate for any visitor, encouraging them to return. The goal is to create a positive, lasting impression for your clients.
              </p>
              
              <p className="leading-relaxed">
                Every project I build is tailored to represent your identity and values with precision and quality. I use modern design principles and the latest technologies to ensure your digital presence is both strong and high-performing.
              </p>
              
              <p className="leading-relaxed">
                I look forward to collaborating with you.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Full width dark banner */}
      <div className="relative overflow-hidden w-full mt-16">
        {/* Dark background with subtle texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Content */}
        <div className="relative p-12 text-center text-white">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Kamil Toporek</h3>
            <p className="text-2xl md:text-3xl font-semibold mb-1 text-gray-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Full Stack Web Developer
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-2">
              Front-End and Back-End Web Developer, specializing in creating secure interactive web pages and web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

