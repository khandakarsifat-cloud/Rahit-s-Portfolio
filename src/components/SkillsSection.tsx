import { motion } from "framer-motion";
import { Code, Brain, Users, Clock, Zap, Target, Sparkles } from "lucide-react";

const programmingSkills = [
  { name: "C++", level: 85, color: "from-blue-500 to-cyan-400" },
  { name: "Java", level: 75, color: "from-orange-500 to-yellow-400" },
  { name: "C#", level: 70, color: "from-purple-500 to-pink-400" },
  { name: "Python", level: 55, color: "from-green-500 to-emerald-400" },
];

const softSkills = [
  { icon: Users, name: "Teamwork", desc: "Collaborative mindset" },
  { icon: Zap, name: "Under Pressure", desc: "Calm & effective" },
  { icon: Clock, name: "Time Management", desc: "Efficient planning" },
  { icon: Target, name: "Hardworking", desc: "Dedicated & focused" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative noise-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">What I Can Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Programming Languages</h3>
            </div>
            <div className="space-y-6">
              {programmingSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm font-medium gradient-text">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-secondary/80 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map(({ icon: Icon, name, desc }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl p-5 gradient-border group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} className="text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="font-semibold text-foreground mb-1">{name}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 glass rounded-xl p-5 flex items-center gap-4 gradient-border"
            >
              <Sparkles size={20} className="text-primary flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Always eager to learn new technologies and expand my skill set.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
