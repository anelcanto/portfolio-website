"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With a background in{" "}
        <span className="font-medium">Computer Science</span> and minors in{" "}
        <span className="font-medium">Entrepreneurship & Music</span>, I’ve
        built my career around technology, business, and problem-solving. My
        experience spans{" "}
        <span className="font-medium">full-stack web development</span>, project
        management, and technical recruiting.
      </p>

      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is
        solving complex problems and building scalable solutions. My core stack
        includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and AWS (including Amplify Gen 2)
        </span>
        . I’m also exploring{" "}
        <span className="font-medium">LLMs and AI applications</span> to enhance
        efficiency and automation.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, I enjoy playing
        pickleball and learning about{" "}
        <span className="font-medium">
          entrepreneurship and business strategy
        </span>
        . I’m always looking for ways to innovate and improve. I’m currently
        seeking a <span className="font-medium">full-time opportunity</span> as
        a software developer.
      </p>
    </motion.section>
  );
}
