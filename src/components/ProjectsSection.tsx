import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Users, Database, Gamepad2, StickyNote } from "lucide-react";

const projects = [
  {
    title: "Sports Booking Facility Portal",
    description: "Real-time sports facility booking platform with authentication and scalable architecture serving 3000+ users.",
    tech: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
    highlight: "3000+ Users",
    icon: Users,
  },
  {
    title: "Loan Default Classification",
    description: "Machine learning project analyzing 200K+ tuples using Random Forest, AdaBoost, ANN, and Regression models.",
    tech: ["Python", "ML", "Matplotlib", "Seaborn"],
    highlight: "200K+ Dataset",
    icon: Database,
  },
  {
    title: "Noted – Note Keeping App",
    description: "Feature-rich note-taking app with bookmarking, categorization, and full CRUD operations backed by MongoDB.",
    tech: ["Flutter", "NodeJS", "MongoDB", "Firebase"],
    highlight: "Full Stack",
    icon: StickyNote,
  },
  {
    title: "The Lost Prince Game",
    description: "Action-adventure game with custom game mechanics, scene integration, and combat system built in Unity.",
    tech: ["C#", "Unity", "Game Design"],
    highlight: "Game Dev",
    icon: Gamepad2,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Projects</p>
          <h2 className="section-heading">Featured Work</h2>
          <p className="section-subheading">Some of the projects I'm most proud of</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <project.icon size={20} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {project.highlight}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
