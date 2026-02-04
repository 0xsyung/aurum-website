import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Lock, Zap, Globe, Rocket } from "lucide-react";
import { useState } from "react";

/**
 * Aurum Labs Landing Page
 * Design: Modern Fintech Minimalism with Precision Accents
 * Color Palette: Deep Navy (#0F1729), Amber Gold (#FFB81C), Off-white (#FAFBFC)
 * Typography: Poppins (headlines), Inter (body)
 */

// Get dApp URL from environment variable, fallback to localhost for development
const DAPP_URL = import.meta.env.VITE_DAPP_URL || "http://localhost:5173";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleLaunchApp = () => {
    window.open(DAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>
              Aurum Labs
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-accent transition-colors">
              Features
            </a>
            <a href="#vision" className="text-sm hover:text-accent transition-colors">
              Vision
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join Waitlist
            </Button>
            <a
              href={import.meta.env.VITE_DAPP_URL || 'https://aurum-app.pages.dev'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Launch App <ArrowRight className="ml-1 w-3 h-3" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url(/images/hero-background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Poppins" }}
            >
              The Future of Prediction Markets
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Aurum Labs is building the next generation of decentralized prediction markets.
              Harness the power of collective intelligence to make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={handleLaunchApp}
              >
                <Rocket className="mr-2 w-5 h-5" />
                Launch App
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Early Access <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <a
                href={(import.meta.env.VITE_DAPP_URL as string | undefined) || 'https://aurum-app.pages.dev'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  Launch App <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Why Aurum Labs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're reimagining prediction markets with cutting-edge technology and user-centric design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Poppins" }}>
                Real-Time Markets
              </h3>
              <p className="text-muted-foreground">
                Access live prediction markets with instant settlement and transparent pricing powered by blockchain technology.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Poppins" }}>
                Secure & Transparent
              </h3>
              <p className="text-muted-foreground">
                Your assets are protected by smart contracts. Every transaction is auditable and verifiable on-chain.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Poppins" }}>
                Lightning Fast
              </h3>
              <p className="text-muted-foreground">
                Experience sub-second order execution and minimal latency. Trade with confidence at any market condition.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Poppins" }}>
                Global Access
              </h3>
              <p className="text-muted-foreground">
                Participate from anywhere in the world. No geographic restrictions, just pure prediction market innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Vision Section */}
      <section id="vision" className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "Poppins" }}
              >
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We believe prediction markets represent the future of decision-making. By aggregating collective intelligence,
                we can unlock unprecedented insights into future outcomes.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Aurum Labs is committed to building infrastructure that democratizes access to prediction markets,
                enabling anyone to participate in shaping the future.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Read Our Manifesto <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div
              className="hidden md:block rounded-xl overflow-hidden aspect-square bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center"
              style={{
                backgroundImage: "url(/images/feature-cards-bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-primary text-primary-foreground">
        <div className="container max-w-2xl text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Ready to Trade?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Launch the app to start trading on prediction markets, or join our waitlist for updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={handleLaunchApp}
            >
              <Rocket className="mr-2 w-5 h-5" />
              Launch App
            </Button>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 mt-8">
            <p className="text-sm mb-4 opacity-80">Or subscribe for updates:</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <Button
                type="submit"
                variant="outline"
                className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 px-8"
              >
                {submitted ? "✓ Subscribed" : "Subscribe"}
              </Button>
            </form>
          </div>

          {submitted && (
            <p className="mt-4 text-sm text-primary-foreground/80">
              Thank you! Check your email for updates.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4" style={{ fontFamily: "Poppins" }}>
                Aurum Labs
              </h3>
              <p className="text-sm text-muted-foreground">
                Building the future of prediction markets.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
                <li><button onClick={handleLaunchApp} className="hover:text-accent transition-colors">Launch App</button></li>
                <li><a href="#" className="hover:text-accent transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#vision" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Aurum Labs. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Twitter</a>
              <a href="#" className="hover:text-accent transition-colors">Discord</a>
              <a href="#" className="hover:text-accent transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
