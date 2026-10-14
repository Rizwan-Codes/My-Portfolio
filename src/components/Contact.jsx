

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const shouldReduceMotion = useReducedMotion();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-[#080E18] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-secondary/60 focus:ring-1 focus:ring-secondary/30";

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 font-serat text-white sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          className="mb-14 max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-secondary" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Let's build something{" "}
            <span className="text-secondary">great together.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base"
          >
            Have an opportunity, a project idea, or just want to connect?
            I'd love to hear from you. Drop me a message and let's talk.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Contact information */}
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/[0.08] bg-back2/70 p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Choose your preferred way to get in touch.
              </p>

              {/* Email */}
              <motion.a
                href="mailto:your-email@example.com"
                whileHover={
                  shouldReduceMotion ? undefined : { x: 4 }
                }
                className="mt-8 flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-secondary/30"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-xl text-secondary">
                  <FiMail />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-gray-500">
                    Email me at
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-white">
                    your-email@example.com
                  </span>
                </span>

                <FiArrowUpRight className="ml-auto shrink-0 text-gray-500" />
              </motion.a>

              {/* Location */}
              <motion.div
                variants={itemVariants}
                className="mt-4 flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-xl text-secondary">
                  <FiMapPin />
                </span>

                <span>
                  <span className="block text-xs text-gray-500">
                    Based in
                  </span>
                  <span className="mt-1 block text-sm font-medium text-white">
                    Punjab, Pakistan
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    Open to remote opportunities
                  </span>
                </span>
              </motion.div>

              {/* Social links */}
              <motion.div
                variants={itemVariants}
                className="mt-8 border-t border-white/[0.08] pt-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Find me online
                </p>

                <div className="mt-4 flex gap-3">
                  <motion.a
                    href="https://github.com/Rizwan-Codes"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    whileHover={
                      shouldReduceMotion ? undefined : {
                        y: -4,
                        scale: 1.05,
                      }
                    }
                    whileTap={
                      shouldReduceMotion ? undefined : { scale: 0.95 }
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-gray-300 transition-colors hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary"
                  >
                    <FaGithub />
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    whileHover={
                      shouldReduceMotion ? undefined : {
                        y: -4,
                        scale: 1.05,
                      }
                    }
                    whileTap={
                      shouldReduceMotion ? undefined : { scale: 0.95 }
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-gray-300 transition-colors hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary"
                  >
                    <FaLinkedinIn />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Availability card */}
            <motion.div
              variants={itemVariants}
              whileHover={
                shouldReduceMotion ? undefined : { y: -3 }
              }
              className="mt-5 rounded-2xl border border-secondary/20 bg-secondary/[0.06] p-5"
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <p className="text-sm font-semibold text-white">
                  Open to opportunities
                </p>
              </div>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Looking for frontend internships, junior roles, and
                opportunities to collaborate on meaningful projects.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="rounded-2xl border border-white/[0.08] bg-back2/70 p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold">Send me a message</h3>
            <p className="mt-2 text-sm text-gray-400">
              Fill in the details below to start a conversation.
            </p>

            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-8 space-y-5"
            >
              {/* Name and email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-gray-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClasses}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium text-gray-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClasses}
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Let's discuss an opportunity"
                  className={inputClasses}
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-medium text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your idea..."
                  className={`${inputClasses} resize-y`}
                />
              </motion.div>

              {/* Submit button */}
              <motion.button
                variants={itemVariants}
                type="submit"
                whileHover={
                  shouldReduceMotion ? undefined : { y: -3, scale: 1.01 }
                }
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.98 }
                }
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-orange-600 sm:w-auto"
              >
                Send Message <FiSend />
              </motion.button>

              <motion.p
                variants={itemVariants}
                className="text-xs leading-5 text-gray-500"
              >
                Your email app will open with your message prepared. Nothing
                is sent automatically from this website.
              </motion.p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;