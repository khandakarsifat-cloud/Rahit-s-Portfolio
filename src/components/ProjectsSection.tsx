import { motion } from "framer-motion";
import { TreePine, Wind, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: TreePine,
    title: "Forest Management System",
    description:
      "A comprehensive system designed to manage and monitor forest resources efficiently. Built to track tree inventory, manage conservation activities, and generate reports for sustainable forest management.",
    tools: ["Java", "Database", "OOP"],
    gradient: "from-emerald-500/20 to-green-600/20",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: Wind,
    title: "Envirosense – Air Quality Detector",
    description:
      "An IoT-based air quality monitoring system that detects pollutant levels in real-time. The project aims to raise environmental awareness and provide actionable data for improving air quality in urban areas.",
    tools: ["C++", "IoT", "Sensors"],
    gradient: "from-sky-500/20 to-blue-600/20",
    iconBg: "bg-sky-500/10",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative noise-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-40 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">My Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl overflow-hidden gradient-border"
            >
              {/* Top gradient accent */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl ${project.iconBg} flex items-center justify-center`}>
                    <project.icon size={26} className="text-primary" />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <ArrowUpRight size={18} className="text-primary" />
                  </motion.div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1.5 rounded-full glass text-primary font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
