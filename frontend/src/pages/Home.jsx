import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section pt-32 pb-20 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-dark-lighter border border-gray-700 rounded-full text-sm font-medium text-gray-300 mb-6">
              ⚡ Intelligent Support Prioritization for E-commerce
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Never Miss a <span className="gradient-text">Critical</span> Customer Issue Again
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              AI-powered query prioritization that analyzes, categorizes, and ranks every customer query automatically—so your team focuses on what matters most.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to={localStorage.getItem('token') ? "/dashboard" : "/signup"} className="btn btn-primary text-lg px-8 py-4">
                {localStorage.getItem('token') ? "Go to Dashboard" : "Get Started Free"}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="#how-it-works" className="btn btn-secondary text-lg px-8 py-4">
                View Product
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-dark-card/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for <span className="gradient-text">Smarter Support</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to prioritize customer issues intelligently and resolve them faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Priority Engine</h3>
              <p className="text-gray-400">
                Automatically analyzes customer queries and assigns priority based on urgency, issue type, and your custom business rules.
              </p>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Business Rules</h3>
              <p className="text-gray-400">
                Define what matters to your store—payment issues, high-value orders, VIP customers, refund delays, and more.
              </p>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Easy API Integration</h3>
              <p className="text-gray-400">
                Simple RESTful API that integrates seamlessly with your e-commerce website in minutes.
              </p>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Dashboard</h3>
              <p className="text-gray-400">
                Clean, intuitive dashboard where your team can see all queries sorted by priority in real time with instant updates.
              </p>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Encrypted</h3>
              <p className="text-gray-400">
                All customer data is encrypted end-to-end with industry-standard security protocols to keep your information safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple integration, intelligent automation, instant results
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: '01',
                title: 'Customer Submits Request',
                description: 'A customer submits a support request through your e-commerce website contact or support form.'
              },
              {
                step: '02',
                title: 'Secure API Transmission',
                description: 'The request is securely transmitted to our platform via our RESTful API or integrated plugin.'
              },
              {
                step: '03',
                title: 'AI Analysis',
                description: 'Our AI analyzes the message content, context, and applies your custom-defined business rules.'
              },
              {
                step: '04',
                title: 'Priority Assignment',
                description: 'The query is automatically categorized and assigned a priority level: High, Medium, or Low.'
              },
              {
                step: '05',
                title: 'Team Action',
                description: 'Your support team sees the query instantly in the correct priority order and can take action immediately.'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={localStorage.getItem('token') ? "/dashboard" : "/signup"} className="btn btn-primary text-lg px-8 py-4">
              {localStorage.getItem('token') ? "Go to Dashboard" : "Start Prioritizing Smarter Today"}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-dark-card/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="gradient-text">PriorityAI</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-400">
              <p className="text-xl leading-relaxed">
                We are building intelligent infrastructure for customer support that helps e-commerce businesses resolve critical issues faster and deliver exceptional customer experiences.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="card">
                  <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                  <p>
                    To empower e-commerce teams with AI that works alongside them, making support smarter, faster, and more efficient—without replacing the human touch.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-2xl font-bold text-white mb-3">Our Values</h3>
                  <p>
                    We prioritize reliability, security, scalability, and AI transparency. Built for startups, growing stores, and enterprises alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
