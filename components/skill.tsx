import React from 'react'
import { motion } from "framer-motion"

interface SkillProps {
    skillData: string[];
    skillTitle: string;
}

const Skill: React.FC<SkillProps> = ({ skillData, skillTitle }) => {
    const fadeInAnimation = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index
            }
        })
    }
    return (
        <div className="mt-6">
            < p className='mb-3 text-center font-semibold text-lg' > {skillTitle}</p >
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {
                    skillData.map((skill, index) => (
                        <motion.li key={index}
                            className='bg-white border border-black/[0.1] rounded-x1 px-5 py-3 dark:bg-white/10 dark:text-white/80'
                            variants={fadeInAnimation}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true
                            }}
                            custom={index}
                        >{skill}</motion.li>
                    ))}
            </ul>
        </div>
    )
}

export default Skill;