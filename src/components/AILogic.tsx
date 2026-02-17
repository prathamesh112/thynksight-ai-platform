import { motion } from "framer-motion";
import { ShieldAlert, Zap, ArrowUpRight, ArrowDownRight } from "lucide-react";

const AILogic = () => {
  return (
    <section id="why-ai" className="section-padding relative bg-navy-deep">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="relative container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-electric mb-3">
            The AI Advantage
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient-electric">AI</span> Changes Everything
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Traditional systems only react. MB360.AI prevents problems before they occur.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Upstream */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 glow-electric group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                <ArrowUpRight size={20} className="text-electric" />
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground">Upstream AI</h3>
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-electric mb-4">
              Operational Prevention
            </p>
            <ul className="space-y-3">
              {[
                "Predict enrollment anomalies before they cascade",
                "Auto-flag policy mismatches at data ingestion",
                "Proactive risk scoring on claims submissions",
                "Intelligent document validation at source",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Zap size={14} className="text-electric shrink-0 mt-0.5" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Downstream */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 glow-gold group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ArrowDownRight size={20} className="text-primary" />
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground">Downstream AI</h3>
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              Decision Correction
            </p>
            <ul className="space-y-3">
              {[
                "ML-assisted claims adjudication recommendations",
                "NLP-driven query resolution for employee support",
                "Dynamic benefits optimization based on utilization",
                "Real-time compliance deviation alerts",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ShieldAlert size={14} className="text-primary shrink-0 mt-0.5" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AILogic;
