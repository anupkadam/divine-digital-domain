import { motion } from "framer-motion";
import { Monitor, Database, Shield, Cpu, Code, Network } from "lucide-react";

const subjects = [
  { icon: Monitor, title: "Operating Systems", desc: "Process management, memory allocation, and system architecture" },
  { icon: Database, title: "Database Management", desc: "Relational databases, SQL, normalization, and data modeling" },
  { icon: Shield, title: "Cyber Security", desc: "Network security, cryptography, and ethical hacking fundamentals" },
  { icon: Cpu, title: "Computer Architecture", desc: "Processor design, memory hierarchy, and hardware principles" },
  { icon: Code, title: "Data Structures & Algorithms", desc: "Efficient problem solving, trees, graphs, and complexity analysis" },
  { icon: Network, title: "Computer Networks", desc: "TCP/IP, routing protocols, and network design principles" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const AcademicSection = () => {
  return (
    <section id="academic" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm uppercase tracking-[0.2em] mb-3">
            Teaching Excellence
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Computer Engineering
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-lg">
            Army Institute of Technology, Savitribai Phule Pune University
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, i) => (
            <motion.div
              key={subject.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-gold/30"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <subject.icon className="w-6 h-6 text-secondary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                {subject.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {subject.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
