// AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Leaf,
  ShieldCheck,
  Users,
  Lightbulb,
  CheckCircle,
  Mail
} from 'lucide-react';
import Marquee from 'react-fast-marquee';

import Pranav from '../Images/Pranav.jpg';
import rounak from '../Images/rounak.jpg';
import drishthi from '../Images/drishthi.jpg';
import mishthi from '../Images/mishthi.jpg';
import nishant from '../Images/nishant.jpg';

const teamMembers = [
  { name: "Pranav Pandit", role: "UI Developer", image: Pranav, desc: "Pranav is a keen UI developer, passionate about crafting intuitive web presentations.", email: "mailto:panditpm@rknec.edu" },
  { name: "Rounak Nagwani", role: "Data Analyst", image: rounak, desc: "Rounak gathered essential crop data and transformed it into valuable insights for farmers.", email: "mailto:nagwanirv@rknec.edu" },
  { name: "Drishthi Behune", role: "Frontend Developer", image: drishthi, desc: "Drishthi contributed to creating a user-friendly and engaging frontend experience.", email: "mailto:behunedp@rknec.edu" },
  { name: "Mishthi Jain", role: "UI/UX Designer", image: mishthi, desc: "Mishthi played a key role in designing UI and integrating data through APIs seamlessly.", email: "mailto:jainm_2@rknec.edu" },
  { name: "Nishant Giri", role: "Full Stack Developer", image: nishant, desc: "Nishant ensured end-to-end functionality by managing both frontend and backend efficiently.", email: "mailto:girinb@rknec.edu" }
];

const testimonials = [
  { name: "Suresh Jadhav", feedback: "Agro made it so easy to identify the right treatment for my crops. It’s like having a farming expert in my pocket!", role: "Farmer, Maharashtra" },
  { name: "Meena Patil", feedback: "I love the local language support. Makes it much easier for me and my neighbors to use.", role: "Farmer, Karnataka" },
  { name: "Rajveer Chauhan", feedback: "I never thought comparing fertilizers could be this simple. Agro really helps save money.", role: "Farmer, Rajasthan" },
  { name: "Kavita Yellurkar", feedback: "The clean design and clear info make this my go-to farming tool now.", role: "Farmer, Gujarat" },
  { name: "Amit Bhosale", feedback: "I was able to treat my tomato crops faster thanks to Agro’s disease detection!", role: "Farmer, Telangana" },
  { name: "Neha Pandey", feedback: "Very helpful and intuitive. Every farmer should give this platform a try.", role: "Farmer, Madhya Pradesh" },
  { name: "Lalit Sharma", feedback: "Fertilizer suggestions are on point and it’s super affordable to follow the advice.", role: "Farmer, Haryana" },
  { name: "Pooja Rane", feedback: "My crop output improved after using Agro’s recommendations. Grateful!", role: "Farmer, Maharashtra" },
  { name: "Harish Nayak", feedback: "Reliable, fast, and very easy to understand — even for someone like me who isn’t tech-savvy.", role: "Farmer, Chhattisgarh" }
];

const features = [
  { icon: Leaf, title: "Crop Disease Detection", desc: "Identify diseases quickly with accurate visuals and detailed descriptions." },
  { icon: BadgeCheck, title: "Fertilizer Comparison", desc: "Compare fertilizers by price, efficiency, and effectiveness." },
  { icon: ShieldCheck, title: "Reliable Information", desc: "Sourced from agricultural experts and validated databases." },
  { icon: Users, title: "Farmer-Centric Design", desc: "Built with input from real farmers to ensure usability." }
];

const stats = [
  { label: "Farmers Helped", value: "10,000+" },
  { label: "Diseases Covered", value: "120+" },
  { label: "Fertilizers Compared", value: "200+" }
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white min-h-screen py-10 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">About Agro</h1>
        <p className="text-lg text-slate-300">
          Agro empowers Indian farmers by providing expert-verified crop disease detection and smart fertilizer comparisons in multiple languages.
        </p>
      </motion.div>

      {/* Features */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[#222] p-6 rounded-xl shadow-xl border border-purple-600/40"
          >
            <f.icon className="text-purple-400 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold text-purple-200 mb-2">{f.title}</h3>
            <p className="text-slate-400 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Stats */}
      <section className="grid sm:grid-cols-3 gap-6 text-center mb-20">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1e1e2f] p-6 rounded-lg border border-purple-500/30 shadow-lg"
          >
            <p className="text-3xl font-bold text-purple-300">{s.value}</p>
            <p className="text-slate-400">{s.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Developers */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-center text-purple-300 mb-10"
      >
        Meet the Developers
      </motion.h2>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
        {teamMembers.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-[#292945] rounded-2xl p-6 shadow-lg text-center border border-purple-500/20"
          >
            <img src={m.image} alt={m.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-purple-400" />
            <h4 className="text-lg font-semibold text-purple-200">{m.name}</h4>
            <p className="text-sm text-slate-400">{m.role}</p>
            <p className="text-slate-300 text-xs mt-2 mb-3">{m.desc}</p>
            <a href={m.email} target="_blank" rel="noreferrer" className="text-pink-400 hover:text-pink-500 transition">
              <Mail className="w-5 h-5 inline" />
            </a>
          </motion.div>
        ))}
      </section>

      {/* Testimonials */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-center text-purple-300 mb-10"
      >
        What Farmers Say
      </motion.h2>
      <section>
        <Marquee gradient={false} speed={60} className="mb-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#1e1e2f] p-5 mx-4 rounded-xl border border-purple-400/20 shadow-md w-[280px] hover:scale-105 transition-transform"
            >
              <p className="text-slate-300 italic text-sm mb-3">"{t.feedback}"</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-purple-300 font-medium">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
                <CheckCircle className="text-green-400 w-5 h-5" />
              </div>
            </div>
          ))}
          
        </Marquee>
      </section>
    </div>
  );
};

export default AboutUs;
