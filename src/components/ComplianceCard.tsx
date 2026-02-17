import { motion } from "framer-motion";
import { ShieldCheck, KeyRound, FileSearch, Lock, Server, Eye } from "lucide-react";

const features = [
  { icon: FileSearch, title: "Audit Trails", description: "Immutable logs for every action across the platform." },
  { icon: KeyRound, title: "RBAC", description: "Role-based access control with granular permissions." },
  { icon: Lock, title: "Encryption", description: "AES-256 encryption at rest and TLS 1.3 in transit." },
  { icon: ShieldCheck, title: "ISO Aligned", description: "Processes aligned with ISO 27001 and SOC 2 frameworks." },
  { icon: Server, title: "Data Residency", description: "Configurable data residency for regulatory compliance." },
  { icon: Eye, title: "Monitoring", description: "24/7 threat detection and real-time security dashboards." },
];

const ComplianceCard = () => {
  return (
    <section id="security" className="section-padding relative">
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="relative container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-electric mb-3">
            Enterprise-Aligned
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Security & <span className="text-gradient-electric">Compliance</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built on zero-trust principles with defense-in-depth architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 group hover:glow-electric transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center mb-4">
                <f.icon size={18} className="text-electric" />
              </div>
              <h3 className="font-sans text-sm font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceCard;
