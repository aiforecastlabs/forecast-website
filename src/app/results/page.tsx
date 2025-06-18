"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/*
   source category  human_mean  bot_mean  difference  bootstrap_p_value  mann_whitney_p_value  ci_lower  ci_upper  significant    direction  human_count  bot_count
     acled  dataset      0.0354    0.0492     -0.0139             0.5225                0.2484   -0.0429    0.0420        False Human better           88         88
  dbnomics  dataset      0.1191    0.1680     -0.0489             0.0883                0.0436   -0.0552    0.0561        False Human better           72         72
      fred  dataset      0.1600    0.1656     -0.0057             0.8338                0.0274   -0.0520    0.0524        False Human better           86         88
     infer   market      0.0720    0.0860     -0.0140             0.8467                0.0302   -0.1704    0.1732        False Human better           11         11
  manifold   market      0.1343    0.0823      0.0520             0.4099                0.2648   -0.1232    0.1256        False   Bot better           22         22
 metaculus   market      0.0355    0.0419     -0.0064             0.8147                0.6750   -0.0585    0.0595        False Human better           20         20
polymarket   market      0.0524    0.1392     -0.0868             0.1705                0.5338   -0.1251    0.1258        False Human better           22         22
 wikipedia  dataset      0.0271    0.0858     -0.0587             0.0189                0.2869   -0.0486    0.0493         True Human better           88         88
  yfinance  dataset      0.2554    0.2272      0.0283             0.0001                0.0002   -0.0153    0.0151         True   Bot better           88         88
  */

const resultsData = [
  {
    source: "acled",
    source_name: "ACLED",
    source_url: "acleddata.com",
    human_mean: 0.0354,
    bot_mean: 0.0492,
    difference: -0.0139,
    bootstrap_p: 0.5225,
    mann_whitney_p: 0.2484,
    significant: false,
    direction: "Human better",
    human_count: 88,
  },
  {
    source: "dbnomics",
    source_name: "DBnomics",
    source_url: "db.nomics.world",
    human_mean: 0.1191,
    bot_mean: 0.168,
    difference: -0.0489,
    bootstrap_p: 0.0883,
    mann_whitney_p: 0.0436,
    significant: false,
    direction: "Human better",
    human_count: 72,
  },
  {
    source: "fred",
    source_name: "FRED Economic Data",
    source_url: "fred.stlouisfed.org",
    human_mean: 0.16,
    bot_mean: 0.1656,
    difference: -0.0057,
    bootstrap_p: 0.8338,
    mann_whitney_p: 0.0274,
    significant: false,
    direction: "Human better",
    human_count: 86,
  },
  {
    source: "infer",
    source_name: "RFI",
    source_url: "randforecastinginitiative.org",
    human_mean: 0.072,
    bot_mean: 0.086,
    difference: -0.014,
    bootstrap_p: 0.8467,
    mann_whitney_p: 0.0302,
    significant: false,
    direction: "Human better",
    human_count: 11,
  },
  {
    source: "manifold",
    source_name: "Manifold Markets",
    source_url: "manifold.markets",
    human_mean: 0.1343,
    bot_mean: 0.0823,
    difference: 0.052,
    bootstrap_p: 0.4099,
    mann_whitney_p: 0.2648,
    significant: false,
    direction: "Bot better",
    human_count: 22,
  },
  {
    source: "metaculus",
    source_name: "Metaculus",
    source_url: "metaculus.com",
    human_mean: 0.0355,
    bot_mean: 0.0419,
    difference: -0.0064,
    bootstrap_p: 0.8147,
    mann_whitney_p: 0.675,
    significant: false,
    direction: "Human better",
    human_count: 20,
  },
  {
    source: "polymarket",
    source_name: "Polymarket",
    source_url: "polymarket.com",
    human_mean: 0.0524,
    bot_mean: 0.1392,
    difference: -0.0868,
    bootstrap_p: 0.1705,
    mann_whitney_p: 0.5338,
    significant: false,
    direction: "Human better",
    human_count: 22,
  },
  {
    source: "wikipedia",
    source_name: "Wikipedia",
    source_url: "wikipedia.org",
    human_mean: 0.0271,
    bot_mean: 0.0858,
    difference: -0.0587,
    bootstrap_p: 0.0189,
    mann_whitney_p: 0.2869,
    significant: true,
    direction: "Human better",
    human_count: 88,
  },
  {
    source: "yfinance",
    source_name: "Yahoo! Finance",
    source_url: "finance.yahoo.com",
    human_mean: 0.2554,
    bot_mean: 0.2272,
    difference: 0.0283,
    bootstrap_p: 0.0001,
    mann_whitney_p: 0.0002,
    significant: true,
    direction: "Bot better",
    human_count: 88,
  },
];

export default function Results() {
  const [activeSection, setActiveSection] = useState("methodology");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <Header />

      <div className="flex flex-col lg:flex-row">
        {/* Table of Contents Sidebar */}
        <div className="lg:hidden bg-base-200/30 p-4">
          <details className="collapse collapse-arrow">
            <summary className="collapse-title text-lg font-semibold">
              Contents
            </summary>
            <div className="collapse-content">
              <ul className="space-y-2 mt-2">
                <li>
                  <button
                    onClick={() => scrollToSection("methodology")}
                    className={`text-left w-full p-2 rounded hover:bg-base-300 transition-colors ${
                      activeSection === "methodology"
                        ? "bg-base-300 text-primary"
                        : ""
                    }`}
                  >
                    Methodology
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("results")}
                    className={`text-left w-full p-2 rounded hover:bg-base-300 transition-colors ${
                      activeSection === "results"
                        ? "bg-base-300 text-primary"
                        : ""
                    }`}
                  >
                    Full Results
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`text-left w-full p-2 rounded hover:bg-base-300 transition-colors ${
                      activeSection === "contact"
                        ? "bg-base-300 text-primary"
                        : ""
                    }`}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </details>
        </div>

        {/* Desktop Table of Contents Sidebar */}
        <div className="hidden lg:block w-64 bg-base-200/30 flex-shrink-0">
          <div className="sticky top-20 p-6 pt-12">
            <h3 className="text-lg font-semibold mb-4">Contents</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("methodology")}
                  className={`text-left w-full p-2 rounded hover:bg-base-300 transition-colors ${
                    activeSection === "methodology"
                      ? "bg-base-300 text-primary"
                      : ""
                  }`}
                >
                  Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("results")}
                  className={`text-left w-full p-2 rounded hover:bg-base-300 transition-colors ${
                    activeSection === "results"
                      ? "bg-base-300 text-primary"
                      : ""
                  }`}
                >
                  Full Results
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`text-left w-full p-2 rounded hover:bg-base-300 transition-colors ${
                    activeSection === "contact"
                      ? "bg-base-300 text-primary"
                      : ""
                  }`}
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
          <div className="hero py-12 sm:py-16 lg:py-24">
            <div className="hero-content text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
                  Transparency in Forecasting
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                  A detailed breakdown of our experimental methodology and
                  comprehensive results comparing AI forecasters against top
                  human superforecasters across multiple prediction markets and
                  datasets.
                </p>
              </div>
            </div>
          </div>

          {/* Methodology Section */}
          <div id="methodology" className="py-12 sm:py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body p-6 sm:p-8">
                  <h3 className="card-title text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                    Our Experimental Framework
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-base-content/70 mb-4 sm:mb-6 leading-relaxed">
                    Our methodology uses questions from{" "}
                    <a
                      href="https://forecastbench.org"
                      className="link link-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ForecastBench.org
                    </a>
                    . We ensure fair comparison between human and AI forecasters
                    through careful experimental controls.
                  </p>
                  <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-base-content/70">
                    <li>
                      <strong>Questions:</strong> We use standardized
                      forecasting questions from established benchmarks to
                      ensure consistency and comparability across different
                      forecasting methods.
                    </li>
                    <li>
                      <strong>Data Leakage Prevention:</strong> We strictly
                      limit data leakage by using models with training cutoffs
                      before forecast dates, and only allow access to articles
                      last updated before the forecast date to supplement
                      knowledge.
                    </li>
                    <li>
                      <strong>Statistical Significance:</strong> All results are
                      tested for statistical significance using both bootstrap
                      methods and Mann-Whitney U tests to ensure robust
                      conclusions.
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
                <div className="card-body p-4 sm:p-6 lg:p-8">
                  <h3 className="card-title text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                    Full Brier Score Comparison
                  </h3>
                  <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <div className="inline-block min-w-full align-middle">
                      <table className="table table-zebra w-full min-w-[800px]">
                        <thead>
                          <tr>
                            <th className="font-bold text-xs sm:text-sm">
                              Source
                            </th>
                            <th className="font-bold text-xs sm:text-sm">
                              Winner
                            </th>
                            <th className="font-bold text-xs sm:text-sm">
                              Questions
                            </th>
                            <th className="font-bold text-xs sm:text-sm">
                              Human Mean
                            </th>
                            <th className="font-bold text-xs sm:text-sm">
                              DelPy Mean
                            </th>
                            <th className="font-bold text-xs sm:text-sm">
                              P-Value (Bootstrap)
                            </th>
                            <th className="font-bold text-xs sm:text-sm">
                              P-Value (M-W)
                            </th>
                            <th className="font-bold text-xs sm:text-sm">
                              Significant
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {resultsData.map((row, index) => (
                            <tr
                              key={index}
                              className={row.significant ? "active" : ""}
                            >
                              <td className="font-medium">
                                <div>
                                  <div className="font-semibold text-xs sm:text-sm">
                                    {row.source_name}
                                  </div>
                                  <div className="text-xs text-base-content/60">
                                    <a
                                      href={`https://${row.source_url}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="link link-primary hover:link-hover"
                                    >
                                      {row.source_url}
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">
                                <div className="flex flex-col items-center gap-1">
                                  <span className="text-lg">
                                    {row.direction === "Bot better"
                                      ? "🤖"
                                      : "👨"}
                                  </span>
                                  <span
                                    className={`text-xs sm:text-sm ${
                                      row.direction === "Bot better"
                                        ? "text-success"
                                        : "text-error"
                                    }`}
                                  >
                                    {row.difference > 0 ? "+" : ""}
                                    {row.difference.toFixed(4)}
                                  </span>
                                </div>
                              </td>
                              <td className="text-xs sm:text-sm">
                                {row.human_count}
                              </td>
                              <td className="text-xs sm:text-sm">
                                {row.human_mean.toFixed(4)}
                              </td>
                              <td className="text-xs sm:text-sm">
                                {row.bot_mean.toFixed(4)}
                              </td>
                              <td className="text-xs sm:text-sm">
                                {row.bootstrap_p.toFixed(4)}
                              </td>
                              <td className="text-xs sm:text-sm">
                                {row.mann_whitney_p.toFixed(4)}
                              </td>
                              <td>
                                {row.significant ? (
                                  <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-success"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-error"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                  </svg>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-base-content/70">
                    <p>
                      <strong>Note:</strong> Lower Brier scores indicate better
                      forecasting accuracy. Green differences show DelPy (our
                      AI) outperforming top human superforecasters, red shows
                      humans performing better. Rows with check indicate
                      statistically significant results (p=0.05).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact" className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body text-center p-6 sm:p-8">
                  <h3 className="card-title text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 justify-center">
                    Get in Touch
                  </h3>
                  <p className="text-sm sm:text-lg text-base-content/70 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                    Interested in learning more about DelPy, our AI forecasting
                    system, or collaborating on AI Safety research? We&apos;d
                    love to hear from you.
                  </p>
                  <div className="flex justify-center">
                    <a
                      href="mailto:delpy@forecastlabs.org"
                      className="btn btn-primary btn-lg w-full sm:w-auto"
                    >
                      Contact DelPy Team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
