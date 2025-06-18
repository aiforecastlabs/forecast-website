'use client';

import Link from 'next/link';
import { useState } from 'react';

const resultsData = [
  { source: 'acled', source_name: 'ACLED', source_url: 'acleddata.com', human_mean: 0.0354, bot_mean: 0.0492, difference: -0.0139, bootstrap_p: 0.5225, mann_whitney_p: 0.2484, significant: false, direction: 'Human better', human_count: 88 },
  { source: 'dbnomics', source_name: 'DBnomics', source_url: 'db.nomics.world', human_mean: 0.1191, bot_mean: 0.1680, difference: -0.0489, bootstrap_p: 0.0883, mann_whitney_p: 0.0436, significant: false, direction: 'Human better', human_count: 72 },
  { source: 'fred', source_name: 'FRED Economic Data', source_url: 'fred.stlouisfed.org', human_mean: 0.1600, bot_mean: 0.1656, difference: -0.0057, bootstrap_p: 0.8338, mann_whitney_p: 0.0274, significant: false, direction: 'Human better', human_count: 86 },
  { source: 'infer', source_name: 'RFI', source_url: 'randforecastinginitiative.org', human_mean: 0.0720, bot_mean: 0.0860, difference: -0.0140, bootstrap_p: 0.8467, mann_whitney_p: 0.0302, significant: false, direction: 'Human better', human_count: 11 },
  { source: 'manifold', source_name: 'Manifold Markets', source_url: 'manifold.markets', human_mean: 0.1343, bot_mean: 0.0823, difference: 0.0520, bootstrap_p: 0.4099, mann_whitney_p: 0.2648, significant: false, direction: 'Bot better', human_count: 22 },
  { source: 'metaculus', source_name: 'Metaculus', source_url: 'metaculus.com', human_mean: 0.0355, bot_mean: 0.0419, difference: -0.0064, bootstrap_p: 0.8147, mann_whitney_p: 0.6750, significant: false, direction: 'Human better', human_count: 20 },
  { source: 'polymarket', source_name: 'Polymarket', source_url: 'polymarket.com', human_mean: 0.0524, bot_mean: 0.1392, difference: -0.0868, bootstrap_p: 0.1705, mann_whitney_p: 0.5338, significant: false, direction: 'Human better', human_count: 22 },
  { source: 'wikipedia', source_name: 'Wikipedia', source_url: 'wikipedia.org', human_mean: 0.0271, bot_mean: 0.0858, difference: -0.0587, bootstrap_p: 0.0189, mann_whitney_p: 0.2869, significant: true, direction: 'Human better', human_count: 88 },
  { source: 'yfinance', source_name: 'Yahoo! Finance', source_url: 'finance.yahoo.com', human_mean: 0.2554, bot_mean: 0.2272, difference: 0.0283, bootstrap_p: 0.0001, mann_whitney_p: 0.0002, significant: true, direction: 'Bot better', human_count: 88 },
];

export default function Results() {
  const [activeSection, setActiveSection] = useState('methodology');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-300">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-2xl font-bold flex items-center gap-2">
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
          </Link>
        </div>
        <div className="navbar-end">
          <Link href="/" className="btn btn-ghost">Home</Link>
          <a className="btn btn-ghost">Results & Methodology</a>
        </div>
      </div>

      <div className="flex">
        {/* Table of Contents Sidebar */}
        <div className="hidden lg:block w-64 bg-base-200/30 min-h-screen sticky top-16">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Contents</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('methodology')}
                  className={`text-left w-full p-2 rounded hover:bg-base-300 transition-colors ${activeSection === 'methodology' ? 'bg-base-300 text-primary' : ''}`}
                >
                  Methodology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('results')}
                  className={`text-left w-full p-2 rounded hover:bg-base-300 transition-colors ${activeSection === 'results' ? 'bg-base-300 text-primary' : ''}`}
                >
                  Full Results
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`text-left w-full p-2 rounded hover:bg-base-300 transition-colors ${activeSection === 'contact' ? 'bg-base-300 text-primary' : ''}`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Page Header */}
          <div className="hero py-16 sm:py-24">
            <div className="hero-content text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                  Transparency in Forecasting
                </h1>
                <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
                  A detailed breakdown of our experimental methodology and comprehensive results 
                  comparing AI forecasters against human experts across multiple prediction markets and datasets.
                </p>
              </div>
            </div>
          </div>

          {/* Methodology Section */}
          <div id="methodology" className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl font-semibold mb-6">
                    Our Experimental Framework
                  </h3>
                  <p className="text-lg text-base-content/70 mb-6">
                    Our methodology is based on rigorous experimental design principles, following the framework 
                    established by <a href="https://forecastbench.org" className="link link-primary" target="_blank" rel="noopener noreferrer">ForecastBench.org</a>. 
                    We ensure fair comparison between human and AI forecasters through careful experimental controls.
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-base-content/70">
                    <li>
                      <strong>Questions:</strong> We use standardized forecasting questions from established benchmarks 
                      to ensure consistency and comparability across different forecasting methods.
                    </li>
                    <li>
                      <strong>Data Leakage Prevention:</strong> We strictly limit data leakage by using models with 
                      training cutoffs before forecast dates, and only allow access to articles last updated before 
                      the forecast date to supplement knowledge.
                    </li>
                    <li>
                      <strong>Statistical Significance:</strong> All results are tested for statistical significance 
                      using both bootstrap methods and Mann-Whitney U tests to ensure robust conclusions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Full Results Table */}
          <div id="results" className="py-16 sm:py-24 bg-base-200/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                          <th className="font-bold">Questions</th>
                          <th className="font-bold">Human Mean</th>
                          <th className="font-bold">DelPy Mean</th>
                          <th className="font-bold">Difference</th>
                          <th className="font-bold">P-Value (Bootstrap)</th>
                          <th className="font-bold">P-Value (M-W)</th>
                          <th className="font-bold">Significant</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultsData.map((row, index) => (
                          <tr key={index} className={row.significant ? 'active' : ''}>
                            <td className="font-medium">
                              <div>
                                <div className="font-semibold">{row.source_name}</div>
                                <div className="text-sm text-base-content/60">{row.source_url}</div>
                              </div>
                            </td>
                            <td>{row.human_count}</td>
                            <td>{row.human_mean.toFixed(4)}</td>
                            <td>{row.bot_mean.toFixed(4)}</td>
                            <td className={row.direction === 'Bot better' ? 'text-success' : 'text-error'}>
                              {row.difference > 0 ? '+' : ''}{row.difference.toFixed(4)}
                            </td>
                            <td>{row.bootstrap_p.toFixed(4)}</td>
                            <td>{row.mann_whitney_p.toFixed(4)}</td>
                            <td>
                              {row.significant ? (
                                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
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
                    Green differences show DelPy (our AI) outperforming humans, red shows humans performing better. 
                    Highlighted rows indicate statistically significant results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact" className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body text-center">
                  <h3 className="card-title text-2xl font-semibold mb-6 justify-center">
                    Get in Touch
                  </h3>
                  <p className="text-lg text-base-content/70 mb-6 max-w-2xl mx-auto">
                    Interested in learning more about DelPy, our AI forecasting system, or collaborating 
                    on AI Safety research? We'd love to hear from you.
                  </p>
                  <div className="flex justify-center">
                    <a 
                      href="mailto:delpy@forecastlabs.org" 
                      className="btn btn-primary btn-lg"
                    >
                      Contact DelPy Team
                    </a>
                  </div>
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
      </div>
    </div>
  );
}