import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-300">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl font-bold flex items-center gap-2">
            {/* Custom SVG Logo */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16L12 8L20 16L28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4" cy="16" r="2" fill="currentColor"/>
              <circle cx="12" cy="8" r="2" fill="currentColor"/>
              <circle cx="20" cy="16" r="2" fill="currentColor"/>
              <circle cx="28" cy="8" r="2" fill="currentColor"/>
              <path d="M8 24L16 16L24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="8" cy="24" r="2" fill="currentColor"/>
              <circle cx="16" cy="16" r="2" fill="currentColor"/>
              <circle cx="24" cy="24" r="2" fill="currentColor"/>
            </svg>
            Forecast Labs
          </a>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost">Home</a>
          <Link href="/results" className="btn btn-ghost">Results & Methodology</Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero py-24 sm:py-32">
        <div className="hero-content text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                Charting the Future of AI. Together.
              </span>
            </h1>
            <p className="text-lg mt-6 text-base-content/70 max-w-3xl mx-auto">
              We build AI forecasters that rival the world's best experts, helping reduce AI risk and improve critical decision-making. 
              As a nonprofit organization, our mission is to create a safer, more prosperous future for humanity through better predictions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/results" className="btn btn-primary btn-lg">
                View Our Results
              </Link>
              <a href="#how-it-works" className="btn btn-outline btn-primary btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Result Showcase */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-base-200/50 shadow-xl w-full max-w-4xl mx-auto">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-2xl font-semibold mb-6">
                AI Forecasters Outperform on Prediction Markets
              </h3>
              
              <div className="stats bg-transparent grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
              
              <p className="text-base mt-6 text-base-content/70 max-w-2xl">
                Our AI demonstrated significantly higher accuracy than human experts on Manifold Markets, 
                with a 38% improvement in prediction accuracy. This represents a major step forward in AI-assisted decision making.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works & Vision Section */}
      <div id="how-it-works" className="py-16 sm:py-24 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                From Forecasting to Action
              </h2>
              <p className="text-lg text-base-content/70 mb-6">
                Our advanced AI systems use causal Bayesian networks to understand complex relationships 
                and make accurate predictions about critical events. By focusing on AI Safety, we're working 
                to reduce existential risks and ensure AI development benefits all of humanity.
              </p>
              <p className="text-lg text-base-content/70">
                Every prediction we make is a step toward better decision-making in high-stakes scenarios, 
                from AI governance to global risk assessment. Together, we can build a safer future.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Stylized Causal Graph SVG */}
              <svg width="300" height="200" viewBox="0 0 300 200" className="text-primary">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                   refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
                
                {/* Nodes */}
                <circle cx="60" cy="60" r="20" fill="currentColor" opacity="0.8"/>
                <circle cx="180" cy="40" r="20" fill="currentColor" opacity="0.8"/>
                <circle cx="240" cy="100" r="20" fill="currentColor" opacity="0.8"/>
                <circle cx="120" cy="140" r="20" fill="currentColor" opacity="0.8"/>
                <circle cx="200" cy="160" r="20" fill="currentColor" opacity="0.8"/>
                
                {/* Edges */}
                <line x1="80" y1="60" x2="160" y2="40" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <line x1="200" y1="40" x2="220" y2="100" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <line x1="80" y1="60" x2="100" y2="140" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <line x1="140" y1="140" x2="180" y2="160" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <line x1="220" y1="100" x2="200" y2="160" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                
                {/* Labels */}
                <text x="60" y="95" textAnchor="middle" className="text-xs fill-current">Data</text>
                <text x="180" y="25" textAnchor="middle" className="text-xs fill-current">AI Model</text>
                <text x="240" y="85" textAnchor="middle" className="text-xs fill-current">Prediction</text>
                <text x="120" y="175" textAnchor="middle" className="text-xs fill-current">Decision</text>
                <text x="200" y="195" textAnchor="middle" className="text-xs fill-current">Outcome</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2025 Forecast Labs. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}