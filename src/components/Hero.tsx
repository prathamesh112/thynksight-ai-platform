import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroMesh from "@/assets/hero-mesh.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroMesh}
          alt="AI mesh network"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
              Thynksight Technologies
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          AI-Driven Benefits
          <br />
          <span className="text-gradient-gold">Delivery Platform</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Empowering brokers and insurers with intelligent automation,
          real-time analytics, and seamless benefits orchestration for
          6&nbsp;million+ lives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#demo"
            className="group px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2"
          >
            Request a Demo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#platform"
            className="px-8 py-3.5 rounded-lg glass-card text-foreground font-semibold hover:scale-105 transition-all duration-300 glow-border"
          >
            Explore MB360.AI
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
