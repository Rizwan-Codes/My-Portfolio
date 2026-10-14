
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowUpRight,
  FiCode,
  FiLayout,
  FiMonitor,
} from "react-icons/fi";

const strengths = [
  {
    icon: <FiCode />,
    title: "Clean Development",
    description:
      "I focus on readable, maintainable code and reusable React components that are easy to improve over time.",
  },
  {
    icon: <FiLayout />,
    title: "Thoughtful UI",
    description:
      "I care about visual hierarchy, spacing, typography, and the small details that make interfaces feel polished.",
  },
  {
    icon: <FiMonitor />,
    title: "Responsive by Design",
    description:
      "I build layouts that adapt smoothly across mobile, tablet, and desktop instead of treating responsiveness as an afterthought.",
  },
];

function About() {
  const shouldReduceMotion = useReducedMotion();

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-36 top-24 h-72 w-72 rounded-full bg-secondary/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-36 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <motion.div
          className="mb-12 flex items-center gap-4"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className="h-px w-10 bg-secondary" />
          <p className="font-serat text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
            A little about me
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={revealVariants}
              className="max-w-2xl font-serat text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Turning ideas into
              <span className="text-secondary"> meaningful</span> digital
              experiences.
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="mt-7 max-w-2xl space-y-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
            >
              <motion.p variants={revealVariants}>
                Hey, I’m Rizwan Ali — a Computer Science graduate and
                Front-End Developer who enjoys bringing ideas to life on the
                web. I build clean, responsive interfaces with a focus on
                usability and thoughtful visual design.
              </motion.p>

              <motion.p variants={revealVariants}>
                I’m currently sharpening my skills in React.js, JavaScript, and
                Tailwind CSS by building practical projects and learning how
                real-world applications are structured. For me, good frontend
                work is where useful functionality and a clear user experience
                come together.
              </motion.p>

              <motion.p variants={revealVariants}>
                I’m looking for an opportunity to contribute, learn from a
                team, and grow into a stronger developer through meaningful
                work.
              </motion.p>
            </motion.div>

            <motion.a
              href="#contact"
              variants={revealVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/10 transition-colors duration-300 hover:bg-orange-600"
            >
              Let’s work together
              <FiArrowUpRight className="text-lg" />
            </motion.a>
          </motion.div>

          {/* Right cards */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {strengths.map((item, index) => (
              <motion.article
                key={item.title}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -4, x: 2 }
                }
                className="group rounded-2xl border border-white/[0.08] bg-back2/70 p-5 transition-colors duration-300 hover:border-secondary/40 hover:bg-[#0b1b2b] sm:p-6"
              >
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-secondary/20 bg-secondary/10 text-xl text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                    {item.icon}
                  </div>

                  <div>
                    <div className="mb-1 flex items-center gap-3">
                      <h3 className="font-serat text-base font-semibold text-white sm:text-lg">
                        {item.title}
                      </h3>
                      <span className="font-serat text-xs text-slate-600">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Bottom highlight cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 pt-1"
            >
              <motion.div
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -4 }
                }
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
              >
                <p className="font-serat text-2xl font-bold text-white">
                  React.js
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Main UI library
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -4 }
                }
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
              >
                <p className="font-serat text-2xl font-bold text-white">
                  Always
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Learning & improving
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;