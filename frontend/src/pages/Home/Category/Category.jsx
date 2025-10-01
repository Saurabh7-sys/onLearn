import React from 'react'
import { motion, useAnimation, useInView } from "framer-motion";

import style from './category.module.css'
const Category = () => {

    const cards = [
        {
            id: 1,
            image: "",
            heading: "Beauty",
            subHeading: " One powerful online software suite that combines",
            link: ""
        },
        {
            id: 2,
            image: "",
            heading: "Medical",
            subHeading: "One powerful online software suite that combines",
            link: ""
        },
        {
            id: 3,
            image: "",
            heading: "Sports",
            subHeading: " One powerful online software suite that combines",
            link: ""
        },
        {
            id: 4,
            image: "",
            heading: "Nutrition",
            subHeading: " One powerful online software suite that combines",
            link: ""
        },
    ]
    return (
        <div className={style.categorySection}>
            <motion.h1 initial={{ opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ amount: 0.5 }}>Courses Category</motion.h1>
            <motion.h2 initial={{ opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ amount: 0.5 }}>Onlearing  is one powerful online software suite that combines all the tools <br /> needed to run a successful school or office.</motion.h2>
        </div>
    )
}

export default Category
