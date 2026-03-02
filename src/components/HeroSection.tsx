import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
            Professor · Astrologer · Spiritual Guide
          </p>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Where{" "}
            <span className="text-gradient-gold">Technology</span>
            <br />
            Meets{" "}
            <span className="text-gradient-gold">Wisdom</span>
          </h1>

          <p className="max-w-2xl mx-auto text-primary-foreground/70 font-body text-lg md:text-xl leading-relaxed mb-10">
            Professor of Computer Engineering at Army Institute of Technology,
            Savitribai Phule Pune University — blending the precision of
            engineering with the depth of Vedic astrology and spiritual
            knowledge.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#academic"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-primary font-body font-semibold px-8 py-3 rounded-lg transition-all shadow-gold hover:shadow-elevated"
            >
              <BookOpen className="w-5 h-5" />
              Academic Work
            </a>
            <a
              href="#astrology"
              className="inline-flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold/10 font-body font-semibold px-8 py-3 rounded-lg transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Astrology & Spirituality
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
