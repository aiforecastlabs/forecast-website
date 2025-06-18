import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation Bar */}
      <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="navbar-start">
            <Link href="/" className="btn btn-ghost text-2xl font-bold">
              {/* Custom SVG Logo */}
              <svg width="32" height="32" viewBox="0 0 32 32" className="mr-2">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.4"/>
                  </linearGradient>
                </defs>
                {/* Forward-pointing arrow */}
                <path d="M8 16 L20 8 L20 12 L28 12 L28 20 L20 20 L20 24 Z" fill="url(#logoGradient)"/>
                {/* Stylized nodes */}
                <circle cx="6" cy="10" r="2" fill="currentColor" opacity="0.6"/>
                <circle cx="6" cy="22" r="2" fill="currentColor" opacity="0.6"/>
                <circle cx="26" cy="16" r="2" fill="currentColor" opacity="0.8"/>
                {/* Connecting lines */}
                <line x1="8" y1="10" x2="18" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                <line x1="8" y1="22" x2="18" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
              </svg>
              Forecast Labs
            </Link>
          </div>
          <div className="navbar-end">
            <Link href="/" className="btn btn-ghost">
              Home
            </Link>
            <Link href="/results" className="btn btn-ghost">
              Results & Methodology
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                Charting the Future with AI. Together.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-base-content/70 py-6 max-w-3xl mx-auto leading-relaxed">
              Forecast Labs is a nonprofit organization building AI forecasters to help with AI Safety by creating 
              the path most likely to reduce AI risk and allocating resources accordingly. We use causal Bayesian 
              networks to chart a safer future for humanity through improved high-stakes decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-10">
              <Link href="/results" className="btn btn-primary btn-lg w-full sm:w-auto">
                Explore Our Results
              </Link>
              <Link href="/results" className="btn btn-outline btn-primary btn-lg w-full sm:w-auto">
                Learn Our Methodology
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Result Showcase Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-base-200/50 shadow-xl w-full max-w-4xl mx-auto">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-2xl font-semibold mb-6">
                AI Forecasters Outperform on Prediction Markets
              </h3>
              
              <div className="stats bg-transparent shadow-none">
                <div className="stat">
                  <div className="stat-title">Human Forecasters</div>
                  <div className="stat-value text-error">0.1343</div>
                  <div className="stat-desc">Brier Score (Higher = Worse)</div>
                </div>
                
                <div className="stat">
                  <div className="stat-title">AI Forecasters</div>
                  <div className="stat-value text-success">0.0823</div>
                  <div className="stat-desc">Brier Score (Lower = Better)</div>
                </div>
              </div>
              
              <p className="text-base text-base-content/70 mt-6 max-w-2xl">
                Our AI demonstrated significantly higher accuracy in prediction market forecasting, 
                outperforming human superforecasters with a lower Brier score across 22 matched questions 
                from Manifold Markets data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works & Vision Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                From Forecasting to Action
              </h2>
              <p className="text-lg text-base-content/70 mb-6">
                Our mission extends beyond accurate predictions. We're building AI systems focused on AI Safety—helping humanity navigate the path most likely to reduce AI risk and allocate resources accordingly.
              </p>
              <p className="text-lg text-base-content/70 mb-6">
                By leveraging causal Bayesian networks, our AI doesn't just predict outcomes—it understands the underlying mechanisms that drive them, enabling more robust forecasting for critical AI safety decisions.
              </p>
              <p className="text-lg text-base-content/70">
                Together, we can chart a safer future for humanity through improved decision-making powered by advanced AI forecasting focused on reducing existential risks.
              </p>
            </div>
            
            <div className="flex justify-center">
              {/* Stylized SVG of causal graph */}
              <svg width="300" height="300" viewBox="0 0 300 300" className="text-primary">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                   refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
                
                {/* Nodes */}
                <circle cx="75" cy="75" r="25" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
                <text x="75" y="80" textAnchor="middle" className="text-sm font-medium fill-current">Data</text>
                
                <circle cx="225" cy="75" r="25" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
                <text x="225" y="80" textAnchor="middle" className="text-sm font-medium fill-current">Model</text>
                
                <circle cx="75" cy="225" r="25" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
                <text x="75" y="230" textAnchor="middle" className="text-sm font-medium fill-current">Context</text>
                
                <circle cx="225" cy="225" r="25" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
                <text x="225" y="230" textAnchor="middle" className="text-sm font-medium fill-current">Forecast</text>
                
                <circle cx="150" cy="150" r="30" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="3"/>
                <text x="150" y="155" textAnchor="middle" className="text-sm font-bold fill-current">Causal</text>
                
                {/* Edges */}
                <line x1="100" y1="75" x2="200" y2="75" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <line x1="75" y1="100" x2="75" y2="200" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <line x1="100" y1="100" x2="125" y2="125" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <line x1="175" y1="125" x2="200" y2="200" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <line x1="100" y1="225" x2="200" y2="225" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2025 Forecast Labs. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
