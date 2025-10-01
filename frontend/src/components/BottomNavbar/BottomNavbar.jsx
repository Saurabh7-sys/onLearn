import React from "react";
import {
    BsHouse,
    BsHouseFill,
    BsBriefcase,
    BsBriefcaseFill,
    BsBook,
    BsBookFill,
    BsInfoCircle,
    BsInfoCircleFill,
} from "react-icons/bs";
import style from "./bottomNavbar.module.css";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
    const navLinks = [
        { id: 1, label: "Home", link: "/", outline: <BsHouse size={24} />, filled: <BsHouseFill size={24} /> },
        { id: 2, label: "Careers", link: "/careers", outline: <BsBriefcase size={24} />, filled: <BsBriefcaseFill size={24} /> },
        { id: 3, label: "Blog", link: "/blog", outline: <BsBook size={24} />, filled: <BsBookFill size={24} /> },
        { id: 4, label: "About Us", link: "/aboutUs", outline: <BsInfoCircle size={24} />, filled: <BsInfoCircleFill size={24} /> },
    ];

    return (
        <nav className={style.BottomNavbar}>
            <ul>
                {navLinks.map((e) => (
                    <li key={e.id}>
                        <NavLink
                            to={e.link}
                            end={e.link === "/"}
                            className={({ isActive }) => `${style.link} ${isActive ? style.active : ""}`}
                        >
                            {({ isActive }) => (isActive ? e.filled : e.outline)}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default BottomNavbar;
