import { Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 border-t border-gold/10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-5 h-5 text-gold" />
          <span className="font-display text-lg font-bold text-primary-foreground">
            Prof. Portal
          </span>
        </div>
        <p className="text-primary-foreground/50 font-body text-sm">
          © {new Date().getFullYear()} · Professor of Computer Engineering · Vedic Astrologer · Spiritual Guide
        </p>
      </div>
    </footer>
  );
};

export default Footer;
