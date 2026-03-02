import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-body text-sm uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Connect With Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-card-foreground">
                  Academic Affiliation
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Professor, Department of Computer Engineering
                  <br />
                  Army Institute of Technology
                  <br />
                  Savitribai Phule Pune University
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-card-foreground">
                  Location
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Pune, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-card-foreground">
                  Email
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Reach out for academic collaboration or astrological consultations
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
