import { motion } from "framer-motion";
import { GraduationCap, Camera, Gamepad2, Users, Calendar, Award } from "lucide-react";

const timeline = [
  { year: "2016", title: "PSC", school: "Bogura Cantonment Public School & College", result: "GPA 5.00" },
  { year: "2019", title: "JSC", school: "Bogura Cantonment Public School & College", result: "GPA 5.00" },
  { year: "2020", title: "SSC", school: "Dhaka Residential Model College", result: "GPA 4.61" },
  { year: "2022", title: "HSC", school: "Dhaka Residential Model College", result: "GPA 5.00" },
  { year: "Present", title: "BSc in CSE", school: "American International University-Bangladesh", result: "8th Semester" },
];

const stats = [
  { value: "5.00", label: "Highest GPA" },
  { value: "8th", label: "Semester" },
  { value: "2+", label: "Club Roles" },
  { value: "3+", label: "Projects" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative noise-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Get to Know Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center gradient-border"
            >
              <p className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              I'm Al Rahit, a Bangladeshi Computer Science and Engineering student born on
              16 August 2004. Currently in my 8th semester at American International
              University-Bangladesh, I have a strong interest in machine learning, deep
              learning, and programming.
            </p>
            <p className="text-secondary-foreground/80 leading-relaxed mb-8">
              Beyond academics, I'm an active volunteer at the DRMC Photography Club and
              serve as the External Affairs Secretary of Remians Art Club. I believe in
              teamwork, staying calm under pressure, and managing time effectively.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Camera, label: "Photography", desc: "DRMC Club" },
                { icon: Gamepad2, label: "Gaming", desc: "Enthusiast" },
                { icon: Users, label: "Volunteering", desc: "Active" },
                { icon: GraduationCap, label: "Learning", desc: "Continuous" },
              ].map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-4 hover:border-primary/40 transition-all group cursor-default"
                >
                  <Icon size={22} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Academic Timeline
              </h3>
            </div>
            <div className="relative pl-8 border-l-2 border-primary/20 space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary group-hover:bg-primary transition-colors" />
                  <div className="glass rounded-xl p-4 hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <Award size={14} className="text-primary" />
                      <span className="text-xs font-semibold text-primary tracking-wider uppercase">{item.year}</span>
                    </div>
                    <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.school}</p>
                    <span className="text-sm font-medium gradient-text">{item.result}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
