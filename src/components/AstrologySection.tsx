import { motion } from "framer-motion";
import { Star, Moon, Sun, Compass, Eye, Heart } from "lucide-react";

const services = [
  { icon: Star, title: "Vedic Astrology", desc: "Birth chart analysis using ancient Jyotish Shastra traditions and planetary positions" },
  { icon: Moon, title: "Nakshatra Analysis", desc: "Detailed lunar mansion readings for personality insights and life guidance" },
  { icon: Sun, title: "Kundali Matching", desc: "Compatibility analysis for relationships based on Vedic principles" },
  { icon: Compass, title: "Vastu Shastra", desc: "Harmonizing living and working spaces with cosmic energy flows" },
];

const spiritualTopics = [
  { icon: Eye, title: "Meditation & Mindfulness", desc: "Guided practices for inner peace and spiritual awakening" },
  { icon: Heart, title: "Vedantic Philosophy", desc: "Exploring the Upanishads, Bhagavad Gita, and paths to self-realization" },
];

const AstrologySection = () => {
  return (
    <section id="astrology" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm uppercase tracking-[0.2em] mb-3">
            Ancient Wisdom
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Astrology & Spirituality
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-lg">
            Bridging timeless Vedic knowledge with modern understanding
          </p>
        </motion.div>

        {/* Astrology cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-gold/30 hover:shadow-elevated transition-all flex gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <s.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">
                  {s.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spirituality section */}
        <div id="spirituality">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-foreground text-center mb-8"
          >
            Spiritual Guidance
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {spiritualTopics.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-primary rounded-xl p-6 shadow-elevated border border-gold/20"
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                  {s.title}
                </h4>
                <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstrologySection;
