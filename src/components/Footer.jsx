

import React from "react";
import {
  FiArrowUpRight,
  FiArrowUp,
  FiHeart,
  FiCode,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const hoverMotion = shouldReduceMotion
    ? {}
    : {
      whileHover: { y: -3, scale: 1.04 },
      whileTap: { scale: 0.97 },
    };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] px-6 pb-6 pt-14 font-serat text-white sm:pt-16">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <motion.div
          className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:gap-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Brand */}
          <motion.div variants={reveal}>
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight"
              whileHover={shouldReduceMotion ? {} : { x: 3 }}
            >
              RIZWAN<span className="text-secondary">.</span>
            </motion.a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Front-End Developer passionate about building clean,
              responsive, and user-friendly digital experiences.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <motion.a
                href="https://github.com/Rizwan-Codes"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-gray-400 transition-colors hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary"
                {...hoverMotion}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-gray-400 transition-colors hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary"
                {...hoverMotion}
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={reveal}>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  variants={reveal}
                  custom={index}
                >
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-secondary"
                  >
                    <span className="h-1 w-1 rounded-full bg-secondary/70 transition-transform duration-200 group-hover:scale-150" />
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Availability */}
          <motion.div variants={reveal}>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em]">
              Let's Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Open to frontend internships, junior developer roles, and
              exciting collaborations.
            </p>

            <motion.a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              whileHover={
                shouldReduceMotion ? {} : { y: -3, scale: 1.02 }
              }
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            >
              Get in Touch
              <motion.span
                animate={
                  shouldReduceMotion ? {} : { x: [0, 3, 0] }
                }
                transition={{
                  duration: 1.5,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  repeatDelay: 1.5,
                }}
              >
                <FiArrowUpRight />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
            ease: "easeOut",
          }}
        >
          <p className="text-xs leading-6 text-gray-500">
            © {currentYear} Rizwan Ali. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            Built with
            <motion.span
              className="inline-flex text-secondary"
              animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.2,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatDelay: 2,
              }}
            >
              <FiHeart />
            </motion.span>
            and
            <FiCode className="text-secondary" />
            using React
          </p>

          <motion.a
            href="#home"
            aria-label="Back to top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="flex h-10 w-10 items-center justify-center self-start rounded-xl border border-white/10 text-gray-400 transition-colors hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary sm:self-auto"
            whileHover={
              shouldReduceMotion ? {} : { y: -3, scale: 1.05 }
            }
            whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
          >
            <motion.span
              animate={shouldReduceMotion ? {} : { y: [0, -2, 0] }}
              transition={{
                duration: 1.5,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatDelay: 2,
              }}
            >
              <FiArrowUp className="text-lg" />
            </motion.span>
          </motion.a>

        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;

