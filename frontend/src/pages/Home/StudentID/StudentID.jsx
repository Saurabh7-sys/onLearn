import React from 'react'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import idImg from './assets/OBJECTS.png'
import { motion } from "framer-motion";

import style from './studentID.module.css';

const StudentID = () => {
    return (
        <div className={style.studentIDSection}>
            <div className={style.idWrapper}>
                <section className={style.contentSection}>
                    <motion.h3 initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ amount: 0.5, once: false }}>Benefits</motion.h3>
                    <motion.h1 initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ amount: 0.5, once: false }}>Get Student ID card</motion.h1>
                    <ul>
                        <li>
                            <span><img src={icon1} alt="icons" /></span>
                            <motion.p initial={{ opacity: 0, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ amount: 0.5, once: false }}>Teachers don’t get lost in the grid view and have a dedicated Podium space.
                            </motion.p></li>
                        <li>
                            <span><img src={icon2} alt="icons" /></span>
                            <motion.p initial={{ opacity: 0, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ amount: 0.5, once: false }}>TA’s and presenters can be moved to the front of the class.
                            </motion.p></li>
                        <li>
                            <span><img src={icon3} alt="icons" /></span><motion.p initial={{ opacity: 0, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ amount: 0.5, once: false }}>Teachers can easily see all students and class data at one time.</motion.p></li>
                    </ul>
                </section>
                <section className={style.id}>
                    <img src={idImg} alt="idImg" />
                </section>
            </div>
        </div>
    )
}

export default StudentID
