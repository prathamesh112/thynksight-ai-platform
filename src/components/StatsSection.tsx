import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: 6, suffix: "M+", label: "Lives Covered", prefix: "" },
  { value: 60, suffix: "%", label: "Reduction in Ticket Load", prefix: "30–" },
  { value: 3, suffix: " Weeks", label: "Shorter Renewal Cycles", prefix: "2–" },
  { value: 99.9, suffix: "%", label: "Platform Uptime", prefix: "" },
];

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Number((eased * value).toFixed(value % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl font-bold text-gradient-gold">
      {prefix}{display}{suffix}
    </span>
  );
}

const StatsSection = () => {
  return (
    <section id="scale" className="section-padding relative bg-navy-deep">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="relative container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Proof in Production
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">
            Scale That <span className="text-gradient-gold">Speaks</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 text-center flex flex-col items-center"
            >
              <AnimatedCounter value={m.value} suffix={m.suffix} prefix={m.prefix} />
              <p className="text-sm text-muted-foreground mt-3 font-medium">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
