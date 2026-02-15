import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, ChevronDown } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Database Management",
  "Computer Networks",
  "Machine Learning",
  "Object Oriented Programming",
  "Software Engineering",
  "Web Development",
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showCourses, setShowCourses] = useState(false);

  return (
    <section id="education" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Education</p>
          <h2 className="section-heading">Academic Background</h2>
          <p className="section-subheading">My educational journey</p>
        </motion.div>

        <div className="max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={22} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-lg text-foreground">B.Tech in Computer Science</h3>
                <p className="text-muted-foreground text-sm">Pranveer Singh Institute of Technology</p>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-primary font-medium text-sm">CGPA: 8.7/10</span>
                  <span className="text-muted-foreground text-sm">2021 – 2025</span>
                </div>

                <button
                  onClick={() => setShowCourses(!showCourses)}
                  className="flex items-center gap-1 mt-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Relevant Coursework
                  <ChevronDown size={14} className={`transition-transform ${showCourses ? "rotate-180" : ""}`} />
                </button>

                {showCourses && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 flex flex-wrap gap-2"
                  >
                    {coursework.map((course) => (
                      <span key={course} className="skill-badge text-xs">{course}</span>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">Class XII (CBSE)</h3>
                <p className="text-muted-foreground text-sm">Senior Secondary Education</p>
                <span className="text-primary font-medium text-sm">93.87%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
