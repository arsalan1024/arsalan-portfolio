import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Brain } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Full Stack Development", desc: "End-to-end web & API development with modern frameworks" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform apps with Flutter and native integrations" },
  { icon: Brain, title: "Machine Learning", desc: "Data-driven solutions with classification and analysis models" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">About Me</p>
          <h2 className="section-heading">Who I Am</h2>
          <p className="text-muted-foreground max-w-2xl text-lg mb-12 leading-relaxed">
            I'm a Computer Science undergraduate at Pranveer Singh Institute of Technology with a{" "}
            <span className="text-foreground font-medium">CGPA of 8.7/10</span>, passionate about building products that make a difference.
            Currently working at <span className="text-foreground font-medium">Basta Neural Technologies</span> as a Full Stack Developer,
            I specialize in creating scalable applications from concept to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
