import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/CircularMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { navbarActions } from "../store/navbarSlice";
import { tranmenu } from "../utils/translateText";
import logoStyles from "../styles/LogoTitle.module.css";

const CircularMenu = ({ selected, selectedItem }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleItemClick = (itemName, link) => {
    selectedItem(itemName);
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu(); // Close the menu after navigation
  };

  const menuItems = [
    {
      name: tranmenu(lang)[0],
      link: "#contact",
      circleClass: styles.circleOne,
    },
    {
      name: tranmenu(lang)[1],
      link: "#portfolio",
      circleClass: styles.circleFour,
    },
    { name: tranmenu(lang)[2], link: "#skills", circleClass: styles.circleTwo },
    {
      name: tranmenu(lang)[3],
      link: "#about",
      circleClass: styles.circleThree,
    },
    { name: tranmenu(lang)[4], link: "#home", circleClass: styles.circleFive },
  ];

  return (
    <>
      <div className="absolute top-4 left-4 z-50 select-none">
        <div className="font-Orbitron w-9 flex items-center text-3xl font-bold gap-1">
          <img src="/Logo.png" className="border-2 rounded-full" alt="Logo" />
          <div className={`${logoStyles.environment}`}></div>
          <h2
            className={`${logoStyles.hero} ${logoStyles.glitch} ${logoStyles.layers} bg-opacity-0 bg-white bg-blur-lg backdrop-blur-md rounded-md`}
            data-text="MG"
          >
            <span>MG</span>
          </h2>
        </div>
      </div>

      <div>
        <div
          className={`bars ${menuOpen ? "active" : ""}`}
          id="nav-action"
          onClick={toggleMenu}
        >
          <span className="bar barspan"></span>
        </div>
      </div>

      <nav id="nav" className={menuOpen ? "visible" : ""}>
        <ul className="font-Orbitron text-md" onClick={toggleMenu}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`shape-circle ${item.circleClass}`}
              onClick={() => handleItemClick(item.name, item.link)}
            >
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default CircularMenu;
