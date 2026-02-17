import { motion } from "framer-motion";
import { Briefcase, Building2, Heart } from "lucide-react";

const stakeholders = [
  {
    icon: Briefcase,
    title: "Brokers",
    description: "Accelerate renewals, reduce manual effort, and deliver data-backed advisory to clients.",
    benefits: ["Automated renewal workflows", "Portfolio analytics dashboard", "Client risk profiling"],
  },
  {
    icon: Building2,
    title: "HR Teams",
    description: "Simplify benefits administration with self-service portals and real-time enrollment tracking.",
    benefits: ["One-click enrollment", "Employee communication hub", "Cost benchmarking tools"],
  },
  {
    icon: Heart,
    title: "Employees",
    description: "Empower individuals with clarity, choice, and instant access to their benefits ecosystem.",
    benefits: ["Mobile-first benefits access", "AI-powered claims assistant", "Personalized plan recommendations"],
  },
];

const ValueProposition = () => {
  return (
    <section id="value" className="section-padding relative">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="relative container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Stakeholder Value
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Built for <span className="text-gradient-gold">Everyone</span> in the Chain
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stakeholders.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 flex flex-col group hover:glow-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{s.description}</p>
              <ul className="mt-auto space-y-2">
                {s.benefits.map((b, j) => (
                  <li key={j} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
