import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <div className="hero py-16 sm:py-24 lg:py-32">
        <div className="hero-content text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                There Is an Optimal Path. We Find It.
              </span>
            </h1>
            <p className="text-base sm:text-lg mt-4 sm:mt-6 text-base-content/70 max-w-3xl mx-auto leading-relaxed">
              We deploy elite forecasting agents with predictive power on par
              with top human superforecasters, designed to discover and chart
              the optimal course for a secure AI future.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/results"
                className="btn btn-primary btn-lg w-full sm:w-auto"
              >
                View Our Results
              </Link>
              <a
                href="#how-it-works"
                className="btn btn-outline btn-primary btn-lg w-full sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Result Showcase */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-base-200/50 shadow-xl w-full max-w-4xl mx-auto">
            <div className="card-body items-center text-center p-6 sm:p-8">
              <h3 className="card-title text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                AI Forecasters Outperform on Prediction Markets
              </h3>

              <div className="stats bg-transparent w-full flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-4">
                <div className="stat p-4">
                  <div className="stat-title text-sm sm:text-base">
                    Human Forecasters
                  </div>
                  <div className="stat-value text-error text-2xl sm:text-3xl">
                    0.1343
                  </div>
                  <div className="stat-desc text-xs sm:text-sm">
                    Brier Score (Higher = Worse)
                  </div>
                </div>
                <div className="stat p-4">
                  <div className="stat-title text-sm sm:text-base">
                    DelPy (Our AI)
                  </div>
                  <div className="stat-value text-success text-2xl sm:text-3xl">
                    0.0823
                  </div>
                  <div className="stat-desc text-xs sm:text-sm">
                    Brier Score (Lower = Better)
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base mt-4 sm:mt-6 text-base-content/70 max-w-2xl leading-relaxed">
                DelPy demonstrated significantly higher accuracy than human
                experts on Manifold Markets, with a 38% improvement in
                prediction accuracy. This represents a major step forward in
                AI-assisted decision making for AI Safety.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works & Vision Section */}
      <div id="how-it-works" className="py-16 sm:py-24 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-center lg:text-left">
                From Forecasting to Action
              </h2>
              <p className="text-base sm:text-lg text-base-content/70 mb-4 sm:mb-6 text-center lg:text-left">
                Our advanced AI systems use causal models to understand complex
                relationships and make accurate predictions about critical
                events. By focusing on AI Safety, we&apos;re working to reduce
                existential risks and ensure AI development benefits all of
                humanity.
              </p>
              <p className="text-base sm:text-lg text-base-content/70 text-center lg:text-left">
                Every prediction we make is a step toward better decision-making
                in high-stakes scenarios, from AI governance to global risk
                assessment. Together, we can build a safer future.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              {/* Causal Model Image */}
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <Image
                  src="/forecastveto.png"
                  alt="Causal model explaining the veto of California Senate Bill 1047"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-xs sm:text-sm text-base-content/60 mt-3 sm:mt-4 text-center italic leading-relaxed">
                  A causal model explaining the veto of California Senate Bill
                  1047. The bill, which aimed to regulate the development of
                  large-scale AI models, ultimately failed due to significant
                  concerns that it posed a major threat to open-source AI, would
                  stifle innovation, and was built on a flawed and burdensome
                  regulatory framework. Note probabilities here are not actual
                  probabilities predicted by DelPy, they are here for reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center p-6 sm:p-8">
              <h3 className="card-title text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 justify-center">
                Ready to Explore AI Safety Forecasting?
              </h3>
              <p className="text-sm sm:text-lg text-base-content/70 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                Connect with our team to learn more about DelPy, our AI
                forecasting system, or discuss collaboration opportunities in AI
                Safety research.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/results"
                  className="btn btn-primary btn-lg w-full sm:w-auto"
                >
                  View Full Results
                </Link>
                <a
                  href="mailto:delpy@forecastlabs.org"
                  className="btn btn-outline btn-primary btn-lg w-full sm:w-auto"
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
  );
}
