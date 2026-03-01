import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, Instagram, Mail, X } from "lucide-react";
import { FormEvent, useState } from "react";
import Navbar from "./components/Navbar";
import SectionHeader from "./components/SectionHeader";

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      id: "ignite",
      title: "IGNITE",
      description: "Structured content and ads to kickstart your social presence.",
      icon: "01",
      pricing: {
        title: "🔹 Starter – ₹20,000 / month",
        included: [
          "4 Reels",
          "4 Posts",
          "4 Stories",
          "Total 12 Creations / Month",
          "Ad Management Included",
        ],
        notIncluded: [
          "No Instagram Handling",
          "No Strategy Call",
          "No Analytics Report",
        ],
      }
    },
    {
      id: "growth",
      title: "Growth",
      description: "Expanded content and handling to scale your presence faster.",
      icon: "02",
      pricing: {
        title: "🔹 Growth – ₹30,000 / month",
        included: [
          "6 Reels",
          "6 Posts",
          "6 Stories",
          "Total 18 Creations / Month",
          "Ad Management Included",
          "Instagram Handling Included (Posting, DM, Comments)",
        ],
        notIncluded: [
          "No Strategy Call",
          "No Analytics Report",
        ],
      }
    },
    {
      id: "dominance",
      title: "Dominance",
      description: "Full management, strategic direction, and performance-driven growth.",
      icon: "03",
      pricing: {
        title: "🔥 Dominance – ₹45,000 / month (Most Popular)",
        included: [
          "10 Reels",
          "7 Posts",
          "10 Stories",
          "Total 27 Creations / Month",
          "Ad Management Included",
          "Full Instagram Handling",
          "Monthly Strategy Call",
          "Detailed Analytics Report",
        ],
        notIncluded: [],
      }
    },
  ];

  const projects = [
    {
      id: "vnsh",
      title: "VNSH",
      category: "Founder – DGTLDØM",
      image: "https://i.postimg.cc/tCrMqVVq/chat-gpt-creation-5.png",
      bio: "Founder of DGTLDØM, he blends strategy with creativity to build high-performing digital brands. As a Social Media Manager and Generative AI specialist, he leverages data, automation, and innovation to create impactful content systems. With a strong foundation in cinematography and editing, he ensures every visual not only looks premium but performs with purpose.\n\nHe doesn’t just create content — he engineers digital growth."
    },
    {
      id: "lalit",
      title: "LALIT RAWAT",
      category: "Creative Director",
      image: "https://i.postimg.cc/1XF3mZv5/lalti-image.jpg",
      bio: "A visual storyteller at heart, he specializes in cinematography, photography, and narrative-driven content creation. His strength lies in transforming ideas into compelling visual experiences that connect emotionally with audiences.\n\nThrough powerful storytelling and cinematic execution, he brings brands to life on screen."
    },
  ];

  const experience = [
    {
      company: "",
      role: "SUBSCRIPTIONS",
      period: "",
      impact: "First, select your subscription plan",
    },
    {
      company: "",
      role: "ACTIVATE",
      period: "",
      impact: "Once you select your plan, A 60% advance payment confirms your project and allows us to finalize the strategy and timeline. Upon confirmation, we immediately begin execution. The remaining 40% is payable once 90% of the agreed deliverables have been completed, prior to final submission.",
    },
    {
      company: "",
      role: "Launch",
      period: "",
      impact: "We shoot and design content, run ads, and manage your social presence. You receive regular updates while we focus on delivering measurable growth",
    },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xlgwkpqy", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert("Thanks for your message! We'll get back to you soon.");
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    }
  };

  const handleEmailClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setActiveModal(null); // Close modal if open
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="grid-container grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8">
                DGTLDØM
              </h1>
              <p className="text-xl md:text-2xl text-muted max-w-xl mb-10 leading-relaxed">
                DGTLDØM is a results-driven digital marketing agency helping brands build powerful online presence and dominate the digital space.
              </p>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={handleEmailClick}
                  className="group px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm rounded-full flex items-center gap-3 hover:bg-white hover:text-navy transition-all duration-300"
                >
                  Let's Talk
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="md:col-span-4 hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square flex items-center justify-center"
            >
              {/* Using the uploaded logo image - placeholder for now, user should replace with actual path if needed */}
              <img
                src="/logo.png"
                alt="DGTLDØM Logo"
                className="w-full h-full object-contain mix-blend-screen opacity-90"
                onError={(e) => {
                  // Fallback to a styled text logo if image fails
                  e.currentTarget.style.display = 'none';
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/20 pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
      </section>

      {/* About Section */}
      <section id="about" className="bg-paper text-navy section-padding">
        <div className="grid-container">
          <SectionHeader
            label="About DGTLDØM"
            title="At DGTLDØM, we build digital presence that speaks louder than words."
            description="We specialize in building powerful social media presence through strategic content creation, performance-driven ads, and complete Instagram management. Our focus is simple — helping brands connect with India’s youth in a way that feels authentic, engaging, and impactful."
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg leading-relaxed text-navy/80"
            >
              <p>
                We combine strategy, creativity, and data to deliver measurable growth. Every reel, every campaign, and every post is designed with one goal in mind: performance.
              </p>
              <p>
                We don’t just manage social media — we build digital influence.
              </p>
              <p className="font-bold text-accent">
                Powered by creativity & strategy.<br />
                We Speak Social. You Win Big. 🚀
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="grid-container">
          <SectionHeader
            label="Services"
            title="Start. Scale. Dominate."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveModal(service.id)}
                className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <span className="text-6xl font-display font-bold text-accent/20 group-hover:text-accent transition-colors duration-300">
                  {service.icon}
                </span>
                <h3 className="text-2xl font-bold mt-8 mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-padding bg-paper text-navy">
        <div className="grid-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="mb-16 md:mb-24">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-navy"
              >
                WHO WE ARE
              </motion.span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveModal(project.id)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight size={32} />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold uppercase tracking-tighter">{project.title}</h3>
                    <p className="text-navy/60 font-medium mt-1">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="grid-container">
          <SectionHeader
            label="HOW WE WORK"
            title="HOW WE WORK"
          />
          
          <div className="max-w-4xl space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-white/10 pb-12 last:pb-0"
              >
                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-accent rounded-full" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    {exp.company && <p className="text-accent font-medium">{exp.company}</p>}
                  </div>
                  {exp.period && <span className="text-sm font-mono text-muted">{exp.period}</span>}
                </div>
                <p className="text-muted text-lg leading-relaxed max-w-2xl">
                  {exp.impact}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="grid-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader
                label="Contact"
                title="Let's make you extraordinary together."
              />
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent border border-white/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted mb-1">Email Me</p>
                    <a href="mailto:dgtldom.contact@gmail.com" className="text-xl font-bold hover:text-accent transition-colors">dgtldom.contact@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent border border-white/10">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted mb-1">Follow Me</p>
                    <a href="https://www.instagram.com/dgtldom" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-accent transition-colors">@dgtldom</a>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.form
              action="https://formspree.io/f/xlgwkpqy"
              method="POST"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 p-10 bg-white/5 rounded-3xl border border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-muted">Name</label>
                  <input name="name" type="text" required className="w-full bg-navy border border-white/10 rounded-xl p-4 focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-muted">Email</label>
                  <input name="email" type="email" required className="w-full bg-navy border border-white/10 rounded-xl p-4 focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted">Subject</label>
                <input name="subject" type="text" required className="w-full bg-navy border border-white/10 rounded-xl p-4 focus:border-accent outline-none transition-colors" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted">Message</label>
                <textarea name="message" rows={4} required className="w-full bg-navy border border-white/10 rounded-xl p-4 focus:border-accent outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-white hover:text-navy transition-all duration-300">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="grid-container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm">D</span>
            DGTLDØM
          </div>
          
          <div className="flex gap-8">
            <a href="#contact" className="text-muted hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#contact" className="text-muted hover:text-accent transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>

      {/* Modals for Services and Team */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] max-w-2xl w-full relative overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-muted hover:text-accent transition-colors"
              >
                <X size={32} />
              </button>

              {/* Service Modal Content */}
              {services.find(s => s.id === activeModal) && (
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-accent">
                    {services.find(s => s.id === activeModal)?.pricing.title}
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold text-muted mb-4">What’s Included:</h4>
                      <ul className="space-y-3">
                        {services.find(s => s.id === activeModal)?.pricing.included.map(item => (
                          <li key={item} className="flex items-center gap-3 text-lg">
                            <span className="text-accent">✔</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {services.find(s => s.id === activeModal)?.pricing.notIncluded.length! > 0 && (
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold text-muted mb-4">Not Included:</h4>
                        <ul className="space-y-3">
                          {services.find(s => s.id === activeModal)?.pricing.notIncluded.map(item => (
                            <li key={item} className="flex items-center gap-3 text-lg opacity-50">
                              <span className="text-muted">✖</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <button 
                      onClick={handleEmailClick}
                      className="w-full py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm rounded-xl mt-8"
                    >
                      Get Subscription
                    </button>
                  </div>
                </div>
              )}

              {/* Team Modal Content */}
              {projects.find(p => p.id === activeModal) && (
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden">
                    <img 
                      src={projects.find(p => p.id === activeModal)?.image} 
                      alt={projects.find(p => p.id === activeModal)?.title}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-2">{projects.find(p => p.id === activeModal)?.title}</h2>
                    <p className="text-accent font-bold uppercase tracking-widest text-xs mb-6">
                      {projects.find(p => p.id === activeModal)?.category}
                    </p>
                    <div className="text-lg leading-relaxed text-muted whitespace-pre-line">
                      {projects.find(p => p.id === activeModal)?.bio}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
