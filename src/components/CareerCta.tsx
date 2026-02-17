import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";

const CareerCta = () => {
  return (
    <section id="careers" className="section-padding relative bg-navy-deep overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Rocket size={24} className="text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            We Hire for <span className="text-gradient-gold">Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join a team that's redefining benefits technology for millions. We value builders,
            thinkers, and those who challenge the status quo.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
          >
            View Open Positions
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerCta;
