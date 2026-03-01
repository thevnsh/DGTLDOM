import { motion } from "motion/react";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeader({ label, title, description, light = false }: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-24">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4 ${
          light ? "text-navy/60" : "text-accent"
        }`}
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-6xl font-bold leading-tight max-w-3xl ${
          light ? "text-navy" : "text-paper"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-6 text-lg md:text-xl max-w-2xl leading-relaxed ${
            light ? "text-navy/70" : "text-muted"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
