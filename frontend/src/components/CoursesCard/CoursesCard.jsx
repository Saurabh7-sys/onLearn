import React from 'react';
import emojis from './assets/Group 36639.png'
import defaultImg from './assets/defaultImg.png'
import { motion, useAnimation, useInView } from "framer-motion";
import style from './coursesCard.module.css';

const CoursesCard = ({
    cardImg = defaultImg,
    lengthOfStudent = 20,
    duration = "6 Months",
    title = "Untitled Course",
    description = "No description available",
    discountPrice = 0,
    price = 0,
    enroll = () => alert("Enroll function not provided") }) => {



    return (
        <div className={style.cardWrapper}>
            <section className={style.CardImage}>
                <img src={cardImg} alt="cardImg" />
            </section>
            <section className={style.courseDetails}>
                <span className={style.lengthOfStudent}> <img src={emojis} alt="emojis" /> <motion.h2 initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ amount: 0.5 }} >{`+ ${lengthOfStudent}students`}</motion.h2></span>
                <motion.h3 initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ amount: 0.5 }}>{duration}</motion.h3>
                <motion.h1 initial={{ opacity: 0, filter: 'blur(5px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ amount: 0.4 }}>{title}</motion.h1>
                <motion.p initial={{ opacity: 0, filter: 'blur(5px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ amount: 0.4 }}>{description}</motion.p>
                <div className={style.priceAndBtn}>
                    <span>
                        <h2>₹ {discountPrice}</h2>
                        <h2>₹ {price}</h2>
                    </span>

                    <button onClick={enroll}>Enroll Now</button>
                </div>
            </section>


        </div>
    )
}

export default CoursesCard
