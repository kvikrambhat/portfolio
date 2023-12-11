"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("About");

    return (


        <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I am a {" "}
                <span className="font-medium">Computer Science</span>, graduate driven by
                the relentless pursuit of problem-solving in programming.{" "}
                <span className="italic">My favorite part of programming</span> is the
                indescribable rush when I unravel complex challenges and arrive at elegant solutions.
                More than just writing code, I find profound satisfaction in <span className="underline"> mentoring and guiding budding engineers,</span>
                nurturing their talents to foster a team that excels not only in code but in innovation.
                My passion lies in orchestrating teams that are more than the sum of their parts.
                I revel in the art of assembling diverse talents, melding distinct skill sets and
                experiences to forge a crucible of innovation. Whether it's harnessing the capabilities
                of <span className="font-medium">C#, Python, React, Angular, Blazor, or Azure,</span> I'm constantly exploring new technologies
                to widen my toolset and gain new contexts in finding solutions.
            </p>
            <p className="mb-3">
                <span className="font-medium">My journey in programming isn't just about the code;</span> it's about crafting an environment where excellence thrives.
                I am always open to engaging discussions, driven by the pursuit of fascinating opportunities and challenges that
                push the boundaries of what's possible.
            </p>
            <p className="mb-3">
                <span className="italic">Beyond my coding pursuits,</span> I engage in diverse interests—gaming, exploring new destinations, and immersing myself in audiobooks.
                Movies and quality family time are essential to me. Currently delving into psychology and philosophy to broaden my understanding.
                <span className="font-medium">I believe in continual learning </span> and embracing life's unfolding chapters.
            </p>
        </motion.section >
    )
}
