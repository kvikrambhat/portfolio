"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { methodology, technicalSkills, tools } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import Skill from '@/components/skill'




export default function Skills() {
    const { ref } = useSectionInView("Skills");
    return (
        <section id="skills" ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
            <SectionHeading>Skills</SectionHeading>
            <Skill skillData={technicalSkills} skillTitle='Technical Expertise' />
            <Skill skillData={methodology} skillTitle='Methodology / Approach' />
            <Skill skillData={tools} skillTitle='Tools' />
        </section >
    )
}
