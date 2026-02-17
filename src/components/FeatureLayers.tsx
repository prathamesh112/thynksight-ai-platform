import { motion } from "framer-motion";
import { Brain, Settings, Users, Plug, ShieldCheck } from "lucide-react";

const layers = [
  {
    icon: Brain,
    title: "AI Engine Layer",
    description: "Predictive analytics, NLP-driven claims triage, and anomaly detection powering upstream prevention.",
    color: "text-primary",
    glowClass: "glow-gold",
  },
  {
    icon: Settings,
    title: "Operations Layer",
    description: "Automated workflows for enrollment, renewals, and claims processing with real-time status tracking.",
    color: "text-electric",
    glowClass: "glow-electric",
  },
  {
    icon: Users,
    title: "Experience Layer",
    description: "Unified portals for brokers, HR teams, and employees with role-based dashboards and self-service tools.",
    color: "text-primary",
    glowClass: "glow-gold",
  },
  {
    icon: Plug,
    title: "Integration Layer",
    description: "Pre-built connectors for HRIS, payroll, TPA, and insurer systems with secure API orchestration.",
    color: "text-electric",
    glowClass: "glow-electric",
  },
  {
    icon: ShieldCheck,
    title: "Control Layer",
    description: "RBAC, audit trails, encryption-at-rest, and compliance dashboards for enterprise governance.",
    color: "text-primary",
    glowClass: "glow-gold",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeatureLayers = () => {
  return (
    <section id="platform" className="section-padding relative">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="relative container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Platform Architecture
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Five Layers of <span className="text-gradient-gold">Intelligence</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A vertically integrated stack purpose-built for benefits delivery at enterprise scale.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 group hover:scale-[1.01] transition-transform duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 ${layer.glowClass}`}>
                <layer.icon size={22} className={layer.color} />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-foreground mb-1">
                  {layer.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {layer.description}
                </p>
              </div>
              <div className="hidden md:block ml-auto shrink-0">
                <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">
                  Layer {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureLayers;
