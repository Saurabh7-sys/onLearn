import React from 'react'
import exploreMore from './assets/Group 10.png'
import Boy from './assets/image-uM5ZOTW7R-transformed 1.png';
import Reviews from './assets/Button.png';
import { MdCalendarMonth } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
// import { IoIosStar } from "react-icons/io";
// import { IoIosStarHalf } from "react-icons/io";
import { motion } from 'framer-motion'


import style from './hero.module.css'
const Hero = () => {
  return (
    <main className={style.main}>
      <div className={style.homeSection}>

        <div className={style.contentSection}>



          <div className={`${style.countStudents} ${style.countStudentsMobile}`}>
            <span className={style.calIconBox}>
              <MdCalendarMonth />
            </span>
            <span>
              <motion.h3
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ amount: 0.5 }}
              >
                250k
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ amount: 0.5 }}
              >
                Assisted Student
              </motion.h4>
            </span>
          </div>




          <div className={`${style.statsIcon} ${style.statsIconMobile}`}>
            <div>
              <MdBarChart />
            </div>
          </div>
          <div className={`${style.bulbIcon} ${style.bulbIconMobile}`}>
            <div>
              <HiOutlineLightBulb />
            </div>
          </div>




          <section className={style.textContent}>
            <span className={style.subHeading}> <motion.h2 initial={{ opacity: 0, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ amount: 0.6 }}>Never stop learning</motion.h2> </span>
            <motion.h1 initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ amount: 0.5 }}>Grow up your skills by <br /> online courses with <br /> Onlearning</motion.h1>
            <span className={style.explorePathSection}>
              <button> <motion.span initial={{ opacity: 0, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ amount: 0.4 }} >EXPLORE&nbsp;PATH</motion.span></button>
              <span className={style.reviews}>
                <img src={Reviews} alt="Reviews" />
              </span>
            </span>
          </section>


          <section className={style.imgsContent}>
            <div className={style.boyImg}>
              <img src={Boy} alt="Boy" />
            </div>

            <div className={style.countStudents}>
              <span className={style.calIconBox}>
                <MdCalendarMonth />
              </span>
              <span>
                <motion.h3 initial={{ opacity: 0, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ amount: 0.5 }}>250k</motion.h3>
                <motion.h4 initial={{ opacity: 0, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ amount: 0.5 }}>Assisted Student</motion.h4>
              </span>
            </div>

            <div className={style.statsIcon}>
              <div>
                <MdBarChart />
              </div>
            </div>
          </section>


        </div>

      </div>
      <div className={style.circle}>
        <div className={style.exploreMore}>
          <img src={exploreMore} alt="exploreMore" />
        </div>
      </div>
    </main>
  )
}

export default Hero
