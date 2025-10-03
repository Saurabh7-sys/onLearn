import React from "react";
import { motion } from "framer-motion";
import lipstick from "./assets/lipstick.png";
import injection from "./assets/injection.png";
import dumble from "./assets/dumble.png";
import brade from "./assets/brade.png";
import { useNavigate } from "react-router-dom";

import style from "./category.module.css";

const Category = () => {
  const navigate = useNavigate();
  const cards = [
    { id: 1, image: lipstick, heading: "Beauty", subHeading: " One powerful online software suite that combines", link: "/" },
    { id: 2, image: injection, heading: "Medical", subHeading: "One powerful online software suite that combines", link: "/" },
    { id: 3, image: dumble, heading: "Sports", subHeading: " One powerful online software suite that combines", link: "/" },
    { id: 4, image: brade, heading: "Nutrition", subHeading: " One powerful online software suite that combines", link: "/" },
  ];

  // Parent controls stagger timing
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25, // delay between each card
      },
    },
  };

  // Each card animates as if sliding out from behind the previous one
  const card = {
    hidden: { x: -100, opacity: 0, scale: 0.9 },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className={style.categorySection}>
      <motion.h1
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.5, once: false }}
      >
        Courses Category
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.5, once: false }}
      >
        Onlearing is one powerful online software suite that combines all the tools <br />
        needed to run a successful school or office.
      </motion.h2>

      {/* Parent container triggers children stagger */}
      <motion.section
        className={style.CategoryCards}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {cards.map((e, index) => (
          <motion.div
            key={e.id}
            className={style.cardWrapper}
            variants={card}
            style={{ zIndex: cards.length - index }} // ensures later cards look like they come from behind
          >
            <span>
              <img src={e.image} alt={e.heading} />
            </span>
            <h2>{e.heading}</h2>
            <h3>{e.subHeading}</h3>
            <button
              className={style.ctaBtn}
              onClick={() => navigate(e.link)}
              aria-label="Explore courses"
            />
          </motion.div>
        ))}
      </motion.section>

      <motion.button className={style.viewAllBtn} initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ amount: 0.5, once: false }}>view all</motion.button>
    </div>
  );
};

export default Category;
