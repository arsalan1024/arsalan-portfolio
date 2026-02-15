import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "C", "Python", "Java", "Dart", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["Flutter", "React", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["NodeJS", "Flask", "REST APIs", "Express"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Firebase", "SQL", "Cloud Firestore"],
  },
  {
    title: "Tools",
    skills: ["Git", "Linux", "Android Studio", "Jupyter", "AutoCAD"],
  },
  {
    title: "Specializations",
    skills: ["Machine Learning", "Data Analysis", "Razorpay Integration", "Matplotlib", "Seaborn"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Technical Skills</p>
          <h2 className="section-heading">My Toolkit</h2>
          <p className="section-subheading">Technologies and tools I work with daily</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card"
            >
              <h3 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
