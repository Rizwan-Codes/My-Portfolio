
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";


const projectData = {
  shopsphere: {
    title: "ShopSphere",
    category: "E-commerce Web App",
    image: '/projects/ShopSphere-SS.JPG',
    description:
      "A responsive e-commerce experience designed to make product discovery, filtering and cart management simple and intuitive.",

    overview:
      "ShopSphere is a frontend e-commerce project built to practice reusable React components, shared state and responsive interface design.",

    features: [
      "Search products by name",
      "Filter products by category",
      "Sort products by price",
      "Add and remove products from the cart",
      "Update cart quantities and calculate totals",
      "Persist cart data using LocalStorage",
    ],

    challenge:
      "Keeping cart items, quantities and the overall price synchronized as users add, remove or update products.",

    solution:
      "Using React state and shared application data to keep cart interactions and displayed totals consistent.",

    learned:
      "This project strengthened my understanding of React state management, Context API, reusable components, derived values and LocalStorage.",

    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Context API",
    ],

    live: "",
    github: "",
  },

  omdb: {
    title: "OMDB Movie App",
    category: "Movie Discovery App",
    image: '/projects/RealRate.JPG',
    description:
      "A movie discovery application that lets users search for movies and maintain a personal favourites list.",

    overview:
      "The OMDB Movie App uses movie API data to create a practical search experience while demonstrating API integration and persistent user preferences.",

    features: [
      "Search movies using the OMDb API",
      "Debounce search input",
      "Display movie information from API results",
      "Add and remove favourite movies",
      "Save favourites using LocalStorage",
      "View saved movies in a personal list",
    ],

    challenge:
      "Handling changing search queries efficiently and keeping favourite movies available after the page is refreshed.",

    solution:
      "Using debounced search logic to reduce unnecessary requests and LocalStorage to preserve favourite movie data.",

    learned:
      "This project improved my understanding of API integration, asynchronous data handling, search debouncing, custom hooks and persistent state.",

    tech: [
      "React",
      "JavaScript",
      "OMDb API",
      "Tailwind CSS",
      "React Router",
    ],

    live: "",
    github: "",
  },

  "expense-tracker": {
    title: "Expense Tracker",
    category: "Personal Finance App",
    image: '/projects/SpendWise.JPG',
    description:
      "A personal finance project focused on presenting expense information through a clear and user-friendly interface.",

    overview:
      "This project can showcase practical frontend development skills through organized data presentation, reusable components and responsive layouts.",

    features: [
      "Expense management interface",
      "Clear presentation of expense information",
      "Spending totals, if implemented",
      "Responsive page layout",
    ],

    challenge:
      "Presenting financial information in a way that is easy to scan and understand.",

    solution:
      "Organizing the interface into clear sections and reusable UI components.",

    learned:
      "The project provides an opportunity to practice component composition, state handling, data presentation and responsive design.",

    tech: ["React", "JavaScript", "Tailwind CSS"],

    live: "",
    github: "",
  },
};

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectData[projectId];
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const hoverEffect = shouldReduceMotion
    ? {}
    : {
      whileHover: { y: -3 },
      whileTap: { scale: 0.98 },
    };

  if (!project) {
    return (
      <motion.main
        className="flex min-h-screen flex-col items-center justify-center bg-back px-5 text-center text-white"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.4,
        }}
      >
        <motion.p
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="text-sm uppercase tracking-[0.25em] text-secondary"
        >
          404 — Project Not Found
        </motion.p>

        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: shouldReduceMotion ? 0 : 0.1 }}
          className="mt-5 font-serat text-4xl sm:text-5xl"
        >
          This project doesn't exist.
        </motion.h1>

        <motion.div {...hoverEffect} className="mt-8">
          <Link
            to="/#projects"
            className="inline-flex rounded-full bg-secondary px-6 py-3 font-medium text-black transition hover:opacity-80"
          >
            Back to Projects
          </Link>
        </motion.div>
      </motion.main>
    );
  }

  return (
    <motion.main
      className="min-h-screen px-5 pb-20 pt-28 text-white sm:px-10 sm:pt-32 lg:px-20"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: "easeOut",
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Back Navigation */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-secondary"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Heading */}
        <motion.header
          className="mt-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={reveal}
            className="text-xs uppercase tracking-[0.25em] text-secondary sm:text-sm"
          >
            {project.category}
          </motion.p>

          <motion.h1
            variants={reveal}
            className="mt-4 font-serat text-4xl sm:text-6xl lg:text-7xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8"
          >
            {project.description}
          </motion.p>

          {/* Project Actions */}
          <motion.div
            variants={reveal}
            className="mt-7 flex flex-wrap gap-3"
          >
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                {...hoverEffect}
                className="rounded-full bg-secondary px-6 py-3 text-sm font-medium text-black transition hover:opacity-80"
              >
                Live Demo ↗
              </motion.a>
            )}

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                {...hoverEffect}
                className="rounded-full border border-white/15 px-6 py-3 text-sm transition-colors hover:border-secondary hover:text-secondary"
              >
                View Source ↗
              </motion.a>
            )}
          </motion.div>
        </motion.header>

        {/* Browser-Style Project Preview */}
        <motion.section
          aria-label="Project preview"
          className="group mt-12 overflow-hidden rounded-2xl border border-white/10 bg-back2 shadow-2xl sm:mt-16"
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 30, scale: 0.98 }
          }
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            ease: "easeOut",
          }}
        >
          {/* Browser Header */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-4 sm:px-5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />

            <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-2 text-xs text-gray-500 sm:ml-4 sm:px-4">
              {project.title} — Project Preview
            </div>
          </div>

          {/* Placeholder Preview */}
          {/* <motion.div
            className="flex min-h-64 flex-col items-center justify-center px-5 py-14 text-center sm:min-h-96 sm:px-10"
            whileHover={
              shouldReduceMotion ? {} : { scale: 1.01 }
            }
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">
              Featured Project
            </p>

            <h2 className="mt-5 font-serat text-4xl sm:text-6xl">
              {project.title}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {project.tech.slice(0, 4).map((item) => (
                <motion.span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-2 text-xs text-gray-300"
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { y: -2, borderColor: "rgba(255,255,255,0.3)" }
                  }
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <p className="mt-8 text-xs text-gray-500">
              Replace this placeholder with an actual project screenshot.
            </p>
          </motion.div> */}

          {/* Actual Project Screenshot */}
          <motion.div
            className="overflow-hidden"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={`${project.title} website screenshot`}
              className="block h-auto w-full object-cover object-top"
              loading="lazy"
            />
          </motion.div>

        </motion.section>

        {/* Project Overview */}
        <motion.section
          className="mt-12 rounded-2xl border border-white/10 bg-back2 p-6 sm:mt-16 sm:p-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.p
            variants={reveal}
            className="text-xs uppercase tracking-[0.25em] text-secondary"
          >
            Introduction
          </motion.p>

          <motion.h2
            variants={reveal}
            className="mt-3 font-serat text-3xl sm:text-4xl"
          >
            Project Overview
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-5 max-w-3xl text-sm leading-8 text-gray-400 sm:text-base"
          >
            {project.overview}
          </motion.p>

          <div className="mt-10">
            <motion.h3
              variants={reveal}
              className="font-serat text-2xl sm:text-3xl"
            >
              Key Features
            </motion.h3>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-5 space-y-4"
            >
              {project.features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={reveal}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-300 sm:text-base"
                >
                  <span className="mt-0.5 text-secondary">✦</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.section>

        {/* Challenges and Solutions */}
        <motion.section
          className="mt-14 sm:mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.p
            variants={reveal}
            className="text-xs uppercase tracking-[0.25em] text-secondary"
          >
            Development Process
          </motion.p>

          <motion.h2
            variants={reveal}
            className="mt-3 font-serat text-3xl sm:text-4xl"
          >
            Challenges &amp; Solutions
          </motion.h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {/* Challenge */}
            <motion.article
              variants={reveal}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="rounded-2xl border border-white/10 bg-back2 p-6 sm:p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-xl text-secondary">
                !
              </div>

              <h3 className="text-lg font-semibold">
                The Challenge
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                {project.challenge}
              </p>
            </motion.article>

            {/* Solution */}
            <motion.article
              variants={reveal}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="rounded-2xl border border-white/10 bg-back2 p-6 sm:p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-xl text-secondary">
                ✓
              </div>

              <h3 className="text-lg font-semibold">
                The Solution
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                {project.solution}
              </p>
            </motion.article>
          </div>
        </motion.section>

        {/* What I Learned */}
        <motion.section
          className="mt-8 rounded-2xl border border-white/10 bg-back2 p-6 sm:mt-10 sm:p-10"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-secondary">
            Key Takeaways
          </p>

          <h2 className="mt-3 font-serat text-3xl sm:text-4xl">
            What I Learned
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-8 text-gray-400 sm:text-base">
            {project.learned}
          </p>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          className="mt-12 sm:mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p
            variants={reveal}
            className="text-xs uppercase tracking-[0.25em] text-secondary"
          >
            Tools &amp; Technologies
          </motion.p>

          <motion.h2
            variants={reveal}
            className="mt-3 font-serat text-3xl sm:text-4xl"
          >
            Tech Stack
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="mt-6 flex flex-wrap gap-3"
          >
            {project.tech.map((item) => (
              <motion.span
                key={item}
                variants={reveal}
                whileHover={
                  shouldReduceMotion ? {} : { y: -3, scale: 1.03 }
                }
                className="rounded-full border border-white/10 bg-back2 px-4 py-2.5 text-sm text-gray-300 transition-colors hover:border-secondary/60"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Bottom CTA */}
        <motion.section
          className="mt-16 rounded-2xl border border-white/10 bg-back2 px-6 py-10 text-center sm:mt-20 sm:px-10 sm:py-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={reveal}
            className="text-xs uppercase tracking-[0.25em] text-secondary"
          >
            Explore More
          </motion.p>

          <motion.h2
            variants={reveal}
            className="mt-4 font-serat text-3xl sm:text-4xl"
          >
            Interested in my other work?
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-400"
          >
            Explore more projects and see what I've been building as a
            frontend developer.
          </motion.p>

          <motion.div variants={reveal} className="mt-7 inline-flex">
            <Link
              to="/#projects"
              className="inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-medium text-black transition hover:opacity-80"
            >
              Explore Projects →
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  );
}

export default ProjectDetails;
