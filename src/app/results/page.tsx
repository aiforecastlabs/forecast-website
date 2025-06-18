import Link from "next/link";

const resultsData = [
  {
    source: "manifold",
    category: "market",
    human_mean: 0.1343,
    bot_mean: 0.0823,
    difference: 0.0520,
    bootstrap_p: 0.4129,
    mann_whitney_p: 0.2648,
    significant: false,
    human_count: 22,
    bot_count: 22
  },
  {
    source: "polymarket",
    category: "market",
    human_mean: 0.0524,
    bot_mean: 0.1392,
    difference: -0.0868,
    bootstrap_p: 0.1811,
    mann_whitney_p: 0.5338,
    significant: false,
    human_count: 22,
    bot_count: 22
  },
  {
    source: "acled",
    category: "dataset",
    human_mean: 0.0354,
    bot_mean: 0.0492,
    difference: -0.0139,
    bootstrap_p: 0.5122,
    mann_whitney_p: 0.2484,
    significant: false,
    human_count: 88,
    bot_count: 88
  },
  {
    source: "dbnomics",
    category: "dataset",
    human_mean: 0.1191,
    bot_mean: 0.1680,
    difference: -0.0489,
    bootstrap_p: 0.0829,
    mann_whitney_p: 0.0436,
    significant: false,
    human_count: 72,
    bot_count: 72
  },
  {
    source: "fred",
    category: "dataset",
    human_mean: 0.1600,
    bot_mean: 0.1677,
    difference: -0.0077,
    bootstrap_p: 0.7749,
    mann_whitney_p: 0.0333,
    significant: false,
    human_count: 86,
    bot_count: 86
  },
  {
    source: "wikipedia",
    category: "dataset",
    human_mean: 0.0271,
    bot_mean: 0.0858,
    difference: -0.0587,
    bootstrap_p: 0.0190,
    mann_whitney_p: 0.2869,
    significant: true,
    human_count: 88,
    bot_count: 88
  },
  {
    source: "yfinance",
    category: "dataset",
    human_mean: 0.2554,
    bot_mean: 0.2272,
    difference: 0.0283,
    bootstrap_p: 0.0001,
    mann_whitney_p: 0.0002,
    significant: true,
    human_count: 88,
    bot_count: 88
  }
];

export default function Results() {
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

      {/* Page Header */}
      <div className="hero bg-base-100 py-16 sm:py-24">
        <div className="hero-content text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Transparency in Forecasting
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-base-content/70 py-6 max-w-3xl mx-auto leading-relaxed">
              A detailed breakdown of our experimental methodology and comprehensive results comparing 
              AI forecasters against human superforecasters across multiple domains and data sources.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents Sidebar */}
          <div className="lg:w-1/4">
            <div className="card bg-base-200 shadow-xl sticky top-24">
              <div className="card-body">
                <h3 className="card-title text-lg font-semibold mb-4">
                  Table of Contents
                </h3>
                <ul className="menu menu-compact">
                  <li>
                    <a href="#methodology" className="text-sm">
                      Experimental Framework
                    </a>
                  </li>
                  <li>
                    <a href="#results" className="text-sm">
                      Full Results Table
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-16">
            {/* Methodology Section */}
            <section id="methodology">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl font-semibold mb-6">
                    Our Experimental Framework
                  </h3>
                  <p className="text-lg text-base-content/70 mb-6">
                    Our methodology is based on questions and benchmarks from{" "}
                    <a href="https://www.forecastbench.org/" target="_blank" rel="noopener noreferrer" className="link link-primary">
                      ForecastBench
                    </a>
                    , a comprehensive forecasting evaluation framework.
                  </p>
                  <ul className="list-disc list-inside space-y-4 text-base text-base-content/70">
                    <li>
                      <strong>Questions:</strong> We used standardized forecasting questions from peer-reviewed research 
                      to ensure fair comparison between human and AI forecasters across multiple domains.
                    </li>
                    <li>
                      <strong>Data Leakage Prevention:</strong> We strictly limited data leakage by using models with 
                      training cutoffs before the forecast date, and only allowing searches for articles last updated 
                      before the forecast date to supplement knowledge.
                    </li>
                    <li>
                      <strong>Statistical Significance:</strong> We employed both bootstrap and Mann-Whitney U tests 
                      to determine statistical significance of performance differences, ensuring robust statistical validation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Full Results Table */}
            <section id="results">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl font-semibold mb-6">
                    Full Brier Score Comparison
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                      <thead>
                        <tr>
                          <th className="font-bold">Source</th>
                          <th className="font-bold">Category</th>
                          <th className="font-bold">Human Mean</th>
                          <th className="font-bold">Bot Mean</th>
                          <th className="font-bold">Difference</th>
                          <th className="font-bold">P-Value (Bootstrap)</th>
                          <th className="font-bold">P-Value (M-W)</th>
                          <th className="font-bold">Significant</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultsData.map((row, index) => (
                          <tr key={index} className={row.significant ? "active" : ""}>
                            <td className="font-medium">{row.source}</td>
                            <td>{row.category}</td>
                            <td>{row.human_mean.toFixed(4)}</td>
                            <td>{row.bot_mean.toFixed(4)}</td>
                            <td className={row.difference > 0 ? "text-error" : "text-success"}>
                              {row.difference > 0 ? "+" : ""}{row.difference.toFixed(4)}
                            </td>
                            <td>{row.bootstrap_p.toFixed(4)}</td>
                            <td>{row.mann_whitney_p.toFixed(4)}</td>
                            <td>
                              {row.significant ? (
                                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 text-sm text-base-content/70">
                    <p><strong>Note:</strong> Lower Brier scores indicate better forecasting accuracy. 
                    Negative differences show AI outperforming humans, positive differences show humans outperforming AI.</p>
                  </div>
                </div>
              </div>
            </section>
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