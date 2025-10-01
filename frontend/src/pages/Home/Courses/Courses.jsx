import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import style from "./courses.module.css";
import CourseDisplay from "../../../components/CourseDisplay/CourseDisplay";
import data from "./data.json";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0
    }
  }
};

const itemVariants = {
  hidden: { y: -24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 }
  }
};

const Courses = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = data.tabs;
  const activeTabData = tabs.find((t) => t.id === activeTab);

  // ref to the <ul> so we can observe it
  const listRef = useRef(null);

  // controls for animation
  const controls = useAnimation();

  // useInView (framer-motion) to detect visibility of the ref
  // amount: 0.25 means 25% visible triggers inView true
  const isInView = useInView(listRef, { amount: 0.25 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      // reverse the animation when it goes out of view
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div className={style.coursesSection}>
      <motion.h1 initial={{ opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ amount: 0.5 }} >Popular Courses</motion.h1>

      <nav className={style.tabsBar}>
        <motion.ul
          className={style.tabsList}
          ref={listRef}
          variants={listVariants}
          initial="hidden"
          animate={controls}      /* controlled by isInView */
        >
          {tabs.map((e) => (
            <motion.li
              key={e.id}
              className={activeTab === e.id ? style.activeTab : ""}
              onClick={() => setActiveTab(e.id)}
              variants={itemVariants}
              role="button"
              tabIndex={0}
              onKeyDown={(ev) => {
                if (ev.key === "Enter" || ev.key === " ") setActiveTab(e.id);
              }}
            >
              {e.label}
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      <div className={style.tabsSection}>
        <CourseDisplay API={activeTabData.API} />
      </div>
    </div>
  );
};

export default Courses;
