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
      <div className="hero py-24 sm:py-32">
        <div className="hero-content text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                Charting the Future of AI. Together.
              </span>
            </h1>
            <p className="text-lg mt-6 text-base-content/70 max-w-3xl mx-auto">
              We build AI forecasters that rival the world&apos;s best experts,
              helping reduce AI risk and improve critical decision-making. As a
              nonprofit organization, our mission is to create a safer, more
              prosperous future for humanity through better predictions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/results" className="btn btn-primary btn-lg">
                View Our Results
              </Link>
              <a
                href="#how-it-works"
                className="btn btn-outline btn-primary btn-lg"
              >
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
                  <div className="stat-title">DelPy (Our AI)</div>
                  <div className="stat-value text-success">0.0823</div>
                  <div className="stat-desc">Brier Score (Lower = Better)</div>
                </div>
              </div>

              <p className="text-base mt-6 text-base-content/70 max-w-2xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                From Forecasting to Action
              </h2>
              <p className="text-lg text-base-content/70 mb-6">
                Our advanced AI systems use causal modelss to understand complex
                relationships and make accurate predictions about critical
                events. By focusing on AI Safety, we&apos;re working to reduce
                existential risks and ensure AI development benefits all of
                humanity.
              </p>
              <p className="text-lg text-base-content/70">
                Every prediction we make is a step toward better decision-making
                in high-stakes scenarios, from AI governance to global risk
                assessment. Together, we can build a safer future.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Causal Model Image */}
              <div className="max-w-lg">
                <Image
                  src="/forecastveto.png"
                  alt="Causal model explaining the veto of California Senate Bill 1047"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-base-content/60 mt-4 text-center italic">
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
      <div className="py-16 sm:py-24 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title text-2xl font-semibold mb-6 justify-center">
                Ready to Explore AI Safety Forecasting?
              </h3>
              <p className="text-lg text-base-content/70 mb-6 max-w-2xl mx-auto">
                Connect with our team to learn more about DelPy, our AI
                forecasting system, or discuss collaboration opportunities in AI
                Safety research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/results" className="btn btn-primary btn-lg">
                  View Full Results
                </Link>
                <a
                  href="mailto:delpy@forecastlabs.org"
                  className="btn btn-outline btn-primary btn-lg"
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
