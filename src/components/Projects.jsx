

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    number: "01",
    name: "ShopSphere",
    category: "E-COMMERCE WEB APP",
    image: "/projects/ShopSphere-SS.JPG",
    description:
      "A modern shopping experience with product filtering, live search, sorting, and a functional cart with quantity controls.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Context API", icon: null },
    ],
    type: "shop",
    liveUrl: "https://your-shopsphere-demo.vercel.app",
    githubUrl: "https://github.com/Rizwan-Codes/shopsphere",
    projdeta: "/projects/shopsphere",
  },
  {
    number: "02",
    name: "OMDB Movie App",
    category: "API-DRIVEN APPLICATION",
    image: "/projects/RealRate.JPG",
    description:
      "A movie discovery app with API-powered search, debounced queries, favorites, and a personal watchlist.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "REST API", icon: null },
    ],
    type: "movies",
    liveUrl: "https://reel-rate-movie-ratings-3wnb.vercel.app",
    githubUrl: "https://github.com/Rizwan-Codes/omdb-movie-app",
    projdeta: "/projects/omdb",
  },
  {
    number: "03",
    name: "Expense Tracker",
    category: "PERSONAL FINANCE TOOL",
    image: "/projects/SpendWise.JPG",
    description:
      "A practical expense management interface designed to help users record transactions and keep track of their spending.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    type: "expense",
    liveUrl: "https://spendwise-expense-tracker-app.vercel.app",
    githubUrl: "https://github.com/Rizwan-Codes/expense-tracker",
    projdeta: "/projects/expense-tracker",
  },
];

function ProjectPreview({ type }) {
  if (type === "shop") {
    return (
      <div className="relative flex h-full min-h-52 flex-col overflow-hidden rounded-xl p-4 sm:min-h-60 sm:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-sm font-extrabold tracking-tight text-white">
            shop<span className="text-secondary">sphere.</span>
          </span>
          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
        </div>

        <div className="grid flex-1 grid-cols-[1fr_0.8fr] items-center gap-3 py-5">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-secondary">
              New collection
            </p>
            <p className="mt-2 text-xl font-extrabold leading-tight text-white sm:text-2xl">
              Find your
              <br />
              everyday style.
            </p>
            <div className="mt-4 h-6 w-20 rounded-md bg-secondary" />
          </div>

          <div className="relative flex h-32 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#243B53] to-[#101C2B] sm:h-36">
            <div className="flex h-20 w-20 rotate-[-12deg] items-center justify-center rounded-2xl border border-white/10 bg-[#304960] shadow-xl">
              <span className="text-4xl text-white/80">S</span>
            </div>
            <span className="absolute bottom-2 right-2 text-[9px] text-white/40">
              COLLECTION 01
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="h-1 flex-1 rounded-full bg-secondary" />
          <div className="h-1 flex-1 rounded-full bg-white/10" />
          <div className="h-1 flex-1 rounded-full bg-white/10" />
        </div>
      </div>
    );
  }

  if (type === "movies") {
    return (
      <div className="relative flex h-full min-h-52 flex-col overflow-hidden rounded-xl bg-[#100E19] p-4 sm:min-h-60 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-black tracking-wide text-white">
            CINE<span className="text-secondary">SCOPE</span>
          </span>
          <span className="rounded-full border border-white/10 px-2 py-1 text-[9px] text-gray-400">
            DISCOVER
          </span>
        </div>

        <div className="mt-4 flex flex-1 gap-3">
          <div className="flex flex-1 flex-col justify-end rounded-lg bg-gradient-to-b from-[#8B6475] via-[#453449] to-[#171321] p-3">
            <span className="text-[9px] uppercase tracking-widest text-white/60">
              Featured movie
            </span>
            <p className="mt-1 text-base font-black text-white sm:text-xl">
              CINEMA
            </p>
            <p className="text-[9px] text-white/60">
              Discover something new
            </p>
          </div>

          <div className="flex w-[31%] flex-col gap-2">
            <div className="flex flex-1 items-end rounded-lg bg-gradient-to-b from-[#617B8A] to-[#172A38] p-2">
              <span className="text-[9px] font-bold text-white">DRAMA</span>
            </div>
            <div className="flex flex-1 items-end rounded-lg bg-gradient-to-b from-[#A37D4C] to-[#35271C] p-2">
              <span className="text-[9px] font-bold text-white">ACTION</span>
            </div>
          </div>
        </div>

        <div className="mt-3 h-7 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[9px] text-gray-500">
          Search movies and explore...
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-52 flex-col overflow-hidden rounded-xl p-4 sm:min-h-60 sm:p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-white">My Finances</span>
        <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-[9px] text-emerald-300">
          OVERVIEW
        </span>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
        <p className="text-[10px] text-gray-400">Available balance</p>
        <p className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
          $2,450.00
        </p>
        <div className="mt-3 flex h-2 gap-1 overflow-hidden rounded-full">
          <div className="w-[45%] rounded-full bg-emerald-400" />
          <div className="w-[30%] rounded-full bg-teal-700" />
          <div className="w-[25%] rounded-full bg-white/15" />
        </div>
      </div>

      <div className="mt-3 grid flex-1 grid-cols-2 gap-3">
        <div className="rounded-lg border border-white/10 p-3">
          <p className="text-[9px] text-gray-500">Income</p>
          <p className="mt-1 text-sm font-bold text-emerald-300">$3,200</p>
        </div>
        <div className="rounded-lg border border-white/10 p-3">
          <p className="text-[9px] text-gray-500">Expenses</p>
          <p className="mt-1 text-sm font-bold text-white">$750</p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
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
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
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

  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.16,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 font-serat text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-2xl">
            <motion.div
              variants={revealVariants}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              variants={revealVariants}
              className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Ideas turned into{" "}
              <span className="text-secondary">real projects.</span>
            </motion.h2>

            <motion.p
              variants={revealVariants}
              className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base"
            >
              A selection of projects where I practice building useful
              features, solving problems, and creating clean user interfaces.
            </motion.p>
          </div>

          <motion.a
            variants={revealVariants}
            href="https://github.com/Rizwan-Codes"
            target="_blank"
            rel="noreferrer"
            whileHover={shouldReduceMotion ? undefined : { x: 4 }}
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-secondary"
          >
            More on GitHub <FiArrowUpRight className="text-lg" />
          </motion.a>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.number}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-back2/70 transition-colors duration-300 hover:border-secondary/40"
            >
              {/* Preview */}
              {/* <div className="relative overflow-hidden p-3 pb-0">
                <motion.div
                  className="origin-center"
                  whileHover={
                    shouldReduceMotion ? undefined : { scale: 1.035 }
                  }
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <ProjectPreview type={project.type} />
                </motion.div>

                <span className="absolute right-6 top-6 rounded-md border border-white/10 bg-[#08111D]/80 px-2 py-1 text-[10px] font-medium text-white/70 backdrop-blur">
                  {project.number} / 03
                </span>
              </div> */}

              {/* Preview */}
              <div className="relative overflow-hidden p-3 pb-0">
                <motion.div
                  className="origin-center overflow-hidden rounded-xl"
                  whileHover={
                    shouldReduceMotion ? undefined : { scale: 1.035 }
                  }
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    loading="lazy"
                    className="aspect-video w-full rounded-xl object-cover object-top"
                  />
                </motion.div>

                <span className="absolute right-6 top-6 rounded-md border border-white/10 bg-[#08111D]/80 px-2 py-1 text-[10px] font-medium text-white/70 backdrop-blur">
                  {project.number} / 03
                </span>
              </div>


              {/* Project Information */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-secondary">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold transition-colors duration-300 group-hover:text-secondary">
                  {project.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-gray-300"
                    >
                      {tech.icon && (
                        <span className="text-secondary">{tech.icon}</span>
                      )}
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/[0.08] pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-secondary"
                  >
                    Live Demo <FiExternalLink />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 transition-colors hover:text-white"
                  >
                    <FaGithub className="text-sm" /> Source Code
                  </a>

                  <Link
                    to={project.projdeta}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 transition-colors hover:text-white"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center sm:flex-row sm:p-8 sm:text-left"
        >
          <div>
            <h3 className="text-lg font-bold">Have a project in mind?</h3>
            <p className="mt-1 text-sm text-gray-400">
              Let’s create something useful and meaningful together.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Let’s Talk <FiArrowUpRight className="text-lg" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;