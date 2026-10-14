
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : revealVariants;

  const container = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : containerVariants;

  return (
    <section
      id="home"
      className="relative mt-7 flex items-center overflow-hidden px-6 font-serat text-white sm:mt-7 md:mt-0 lg:mt-0"
    >
      <div className="z-10 mx-auto my-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 lg:flex-row">
        {/* Left Content Side */}
        <motion.div
          className="flex-1 space-y-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Badge */}
          <motion.div
            variants={reveal}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#1E293B] bg-[#0D1926] px-3.5 py-1.5 shadow-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

            <span className="text-[11px] font-medium tracking-wide text-gray-300">
              Available for Internships & Junior Roles
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={reveal} className="space-y-1">
            <h2 className="text-xl font-normal text-gray-400 lg:text-2xl">
              Hello, I'm
            </h2>

            <h1 className="text-4xl font-extrabold tracking-wide text-white lg:text-6xl">
              Rizwan <span className="text-[#F97316]">Ali</span>
            </h1>

            <h2 className="pt-0.5 text-2xl font-bold text-white lg:text-4xl">
              Front-End{" "}
              <span className="text-[#F97316]">
                Web Developer
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={reveal}
            className="max-w-lg text-sm leading-relaxed text-gray-400 lg:text-base"
          >
            I'm a passionate Front-End Developer with a strong focus on
            building modern, responsive, and user-friendly web applications.
            I enjoy turning creative ideas into clean and functional digital
            experiences using technologies like React.js, JavaScript and
            modern web tools.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={reveal}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <motion.a
              href="#projects"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -3, scale: 1.02 }
              }
              whileTap={
                shouldReduceMotion ? undefined : { scale: 0.97 }
              }
              className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-colors duration-300 hover:bg-[#e0650d]"
            >
              <span>View My Projects</span>
              <FiArrowUpRight className="text-lg" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -3, scale: 1.02 }
              }
              whileTap={
                shouldReduceMotion ? undefined : { scale: 0.97 }
              }
              className="inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-[#0D1926]/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-gray-500"
            >
              <FiMail className="text-lg" />
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={reveal}
            className="flex items-center gap-4 border-t border-gray-800/60 pt-5 sm:gap-6"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-white lg:text-3xl">
                3+
              </h3>
              <p className="mt-0.5 text-[11px] text-gray-400">
                Projects Completed
              </p>
            </div>

            <div className="h-8 w-px bg-gray-800" />

            <div>
              <h3 className="text-2xl font-extrabold text-white lg:text-3xl">
                4+
              </h3>
              <p className="mt-0.5 text-[11px] text-gray-400">
                Technologies Used
              </p>
            </div>

            <div className="h-8 w-px bg-gray-800" />

            <div>
              <h3 className="text-2xl font-extrabold text-white lg:text-3xl">
                100%
              </h3>
              <p className="mt-0.5 text-[11px] text-gray-400">
                Dedication to Growth
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Side */}
        <motion.div
          className="relative flex flex-1 items-center justify-center"
          initial={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.94 }
          }
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : 0.25,
            ease: "easeOut",
          }}
        >
          {/* Orange Glow Background */}
          <motion.div
            className="absolute -z-10 h-70 w-70 rounded-full bg-secondary blur-3xl lg:left-45 lg:h-70 lg:w-70"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1, 1.08, 1],
                    opacity: [0.65, 0.85, 0.65],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Hero Image */}
          <motion.div
            className="relative w-full max-w-85 lg:max-w-133"
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -8, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/profile-glowing.png"
              alt="Rizwan Ali"
              fetchPriority="high"
              className="h-auto w-full rounded-3xl object-cover drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
