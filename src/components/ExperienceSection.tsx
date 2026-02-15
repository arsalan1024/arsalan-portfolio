import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Experience</p>
          <h2 className="section-heading">Where I've Worked</h2>
          <p className="section-subheading">Professional experience in software development</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card max-w-3xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground">Full Stack Developer Intern</h3>
              <p className="text-primary font-medium text-sm">Basta Neural Technologies</p>
              <p className="text-muted-foreground text-sm mt-1 mb-4">Feb 2025 – Apr 2025</p>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Integrated Razorpay payment gateway for seamless transaction processing
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Developed and maintained REST APIs for full-stack application features
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Full-stack application maintenance, debugging, and feature implementation
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
