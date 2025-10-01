import React from "react";
import style from "./CourseDisplay.module.css";
import CoursesCard from "../CoursesCard/CoursesCard";
import { useNavigate } from "react-router-dom";

const CourseDisplay = ({ API }) => {
  const navigate = useNavigate();

  return (
    <div className={style.displayWrapper}>
      {API.map((e) => (
        <CoursesCard
          key={e.id}
          cardImg={e.courseImg}
          lengthOfStudent={e.lengthOfStudent}
          duration={e.duration}
          title={e.title}
          description={e.description}
          discountPrice={e.discountPrice}
          price={e.price}
          enroll={() => navigate(`/courses/${e.slug || e.id}`, { state: e })}
        />
      ))}
    </div>
  );
};

export default CourseDisplay;
