
// import React from "react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaGitAlt,
//   FaGithub,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiVite,
//   SiReactrouter,
//   SiFigma,
// } from "react-icons/si";

// const skillGroups = [
//   {
//     title: "Frontend Development",
//     description: "Building responsive and interactive user interfaces.",
//     skills: [
//       { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
//       { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
//       { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
//       { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
//       { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
//     ],
//   },
//   {
//     title: "Tools & Ecosystem",
//     description: "Tools and libraries I use in my development workflow.",
//     skills: [
//       { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
//       { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
//       { name: "Vite", icon: <SiVite />, color: "#A78BFA" },
//       { name: "React Router", icon: <SiReactrouter />, color: "#F87171" },
//       { name: "Figma", icon: <SiFigma />, color: "#A78BFA" },
//     ],
//   },
// ];

// function Skills() {
//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden px-6 py-24 font-serat text-white sm:py-28 lg:py-32"
//     >
//       {/* Subtle background glow */}
//       <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />
//       <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl">
//         {/* Section Heading */}
//         <div className="mb-14 max-w-2xl">
//           <div className="mb-5 flex items-center gap-3">
//             <span className="h-px w-10 bg-secondary" />
//             <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
//               My Skill Set
//             </span>
//           </div>

//           <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//             Tools I use to bring{" "}
//             <span className="text-secondary">ideas to life.</span>
//           </h2>

//           <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
//             The technologies and tools I use to build modern, responsive,
//             and user-friendly web experiences — while continuously improving
//             my development skills.
//           </p>
//         </div>

//         {/* Skill Categories */}
//         <div className="grid gap-6 lg:grid-cols-2">
//           {skillGroups.map((group, index) => (
//             <div
//               key={group.title}
//               className="rounded-2xl border border-white/[0.08] bg-back2/70 p-6 transition-all duration-300 hover:border-secondary/30 sm:p-8"
//             >
//               <div className="mb-7 flex items-start justify-between gap-4">
//                 <div>
//                   <h3 className="text-lg font-bold sm:text-xl">
//                     {group.title}
//                   </h3>
//                   <p className="mt-2 text-sm leading-6 text-gray-400">
//                     {group.description}
//                   </p>
//                 </div>

//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-secondary/20 bg-secondary/10 text-sm font-bold text-secondary">
//                   0{index + 1}
//                 </span>
//               </div>

//               <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
//                 {group.skills.map((skill) => (
//                   <div
//                     key={skill.name}
//                     className="group flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.06] bg-[#080E18] px-3 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:bg-[#0D1926]"
//                   >
//                     <span
//                       className="text-3xl transition-transform duration-300 group-hover:scale-110"
//                       style={{ color: skill.color }}
//                     >
//                       {skill.icon}
//                     </span>

//                     <span className="text-center text-xs font-medium text-gray-300 transition-colors group-hover:text-white sm:text-sm">
//                       {skill.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Learning Mindset */}
//         <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-secondary/20 bg-secondary/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
//               Always learning
//             </p>
//             <h3 className="mt-2 text-lg font-bold sm:text-xl">
//               Growing with every project.
//             </h3>
//             <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
//               My focus is on strengthening JavaScript and React fundamentals,
//               writing better code, and building practical projects.
//             </p>
//           </div>

//           <a
//             href="#projects"
//             className="inline-flex w-fit shrink-0 items-center justify-center rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600"
//           >
//             Explore My Work ↗
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;


import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiReactrouter,
  SiFigma,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    description: "Tools and libraries I use in my development workflow.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "Vite", icon: <SiVite />, color: "#A78BFA" },
      { name: "React Router", icon: <SiReactrouter />, color: "#F87171" },
      { name: "Figma", icon: <SiFigma />, color: "#A78BFA" },
    ],
  },
];

function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const groupVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
      scale: shouldReduceMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 font-serat text-white sm:py-28 lg:py-32"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-14 max-w-2xl"
          variants={groupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={revealVariants}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-secondary" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              My Skill Set
            </span>
          </motion.div>

          <motion.h2
            variants={revealVariants}
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Tools I use to bring{" "}
            <span className="text-secondary">ideas to life.</span>
          </motion.h2>

          <motion.p
            variants={revealVariants}
            className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base"
          >
            The technologies and tools I use to build modern, responsive,
            and user-friendly web experiences — while continuously improving
            my development skills.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={groupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={revealVariants}
              whileHover={
                shouldReduceMotion ? undefined : { y: -3 }
              }
              className="rounded-2xl border border-white/[0.08] bg-back2/70 p-6 transition-colors duration-300 hover:border-secondary/30 sm:p-8"
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold sm:text-xl">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {group.description}
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-secondary/20 bg-secondary/10 text-sm font-bold text-secondary">
                  0{index + 1}
                </span>
              </div>

              {/* Individual Skill Cards */}
              <motion.div
                variants={groupVariants}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { y: -5, scale: 1.03 }
                    }
                    whileTap={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 0.98 }
                    }
                    className="group flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.06] bg-[#080E18] px-3 py-4 transition-colors duration-300 hover:border-secondary/40 hover:bg-[#0D1926]"
                  >
                    <motion.span
                      className="text-3xl"
                      style={{ color: skill.color }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { rotate: 5, scale: 1.12 }
                      }
                      transition={{ duration: 0.2 }}
                    >
                      {skill.icon}
                    </motion.span>

                    <span className="text-center text-xs font-medium text-gray-300 transition-colors group-hover:text-white sm:text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Mindset */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-secondary/20 bg-secondary/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Always learning
            </p>
            <h3 className="mt-2 text-lg font-bold sm:text-xl">
              Growing with every project.
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
              My focus is on strengthening JavaScript and React fundamentals,
              writing better code, and building practical projects.
            </p>
          </div>

          <motion.a
            href="#projects"
            whileHover={
              shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }
            }
            whileTap={
              shouldReduceMotion ? undefined : { scale: 0.97 }
            }
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-600"
          >
            Explore My Work ↗
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
