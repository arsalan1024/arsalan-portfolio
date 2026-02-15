import { motion } from "framer-motion";
import { Mail, Phone, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-primary font-medium mb-4 tracking-wide text-sm uppercase">Full Stack Developer & CS Undergraduate</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6 text-foreground">
            Md Arsalan<br />
            <span className="gradient-text">Malik</span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            Building scalable solutions with modern technologies
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-10 flex-wrap">
            <a href="mailto:arsal24malik01@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={15} /> arsal24malik01@gmail.com
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href="tel:+919798852101" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone size={15} /> +91-9798852101
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
