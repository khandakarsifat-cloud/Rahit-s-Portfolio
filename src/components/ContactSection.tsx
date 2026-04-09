import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send, MapPin, Sparkles } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Message sent! (Demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative noise-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Feel free to reach out for collaboration, project inquiries, or just to say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "alrahit4294@gmail.com",
                href: "mailto:alrahit4294@gmail.com",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Al Rahit",
                href: "https://www.linkedin.com/in/al-rahit",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Bangladesh",
                href: "#",
              },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-5 glass rounded-xl p-5 group gradient-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass rounded-xl p-5 flex items-center gap-4 gradient-border"
            >
              <Sparkles size={20} className="text-primary flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Open to internship and collaboration opportunities in ML & Software Development.
              </p>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 gradient-border space-y-5"
          >
            <h3 className="font-display text-lg font-semibold mb-2">Send a Message</h3>
            {["name", "email", "message"].map((field) => {
              const isTextarea = field === "message";
              const Component = isTextarea ? "textarea" : "input";
              return (
                <div key={field} className="relative">
                  <Component
                    type={field === "email" ? "email" : "text"}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    maxLength={field === "message" ? 1000 : field === "email" ? 255 : 100}
                    rows={isTextarea ? 5 : undefined}
                    value={form[field as keyof typeof form]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                      setForm({ ...form, [field]: e.target.value })
                    }
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    className={`w-full px-4 py-3.5 rounded-xl bg-secondary/50 border text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-all ${
                      isTextarea ? "resize-none" : ""
                    } ${
                      focused === field
                        ? "border-primary/60 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
                        : "border-border"
                    }`}
                  />
                </div>
              );
            })}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all box-glow"
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
