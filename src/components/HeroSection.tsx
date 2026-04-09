import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import ParticleField from "./ParticleField";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden noise-bg">
      <ParticleField count={40} />

      {/* Gradient orbs */}
      <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-glow" />
              <span className="text-muted-foreground">Available for opportunities</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold mb-2 leading-tight">
              Al <span className="gradient-text text-glow">Rahit</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
              Computer Science & Engineering Student
            </p>
            <p className="text-secondary-foreground/70 max-w-md mb-8 leading-relaxed">
              A passionate CSE student at AIUB with deep interest in machine learning,
              deep learning, and programming. Dedicated to teamwork, time management,
              and continuous learning.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all box-glow"
              >
                View Portfolio
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass hover:border-primary/50 text-foreground transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/alrahit" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/al-rahit" },
                { icon: Mail, href: "mailto:alrahit4294@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary box-glow" />
              </motion.div>

              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden gradient-border box-glow">
                <img
                  src={profileImg}
                  alt="Al Rahit - CSE Student"
                  className="w-full h-full object-cover object-top"
                  width={512}
                  height={640}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 glass-strong rounded-xl px-5 py-3"
              >
                <p className="text-xs text-muted-foreground">8th Semester</p>
                <p className="font-display font-semibold gradient-text">AIUB</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-4 -left-8 glass-strong rounded-xl px-4 py-2"
              >
                <p className="text-xs font-medium text-primary">ML & DL</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
