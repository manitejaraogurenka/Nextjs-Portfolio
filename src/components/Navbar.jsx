"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { IoLanguageSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import CircularMenu from "./CircularMenu";
import LanguageModal from "./LanguageModal";
import { navbarActions } from "../store/navbarSlice";
import { trannav } from "../utils/translateText";
import styles from "../styles/LogoTitle.module.css";

const Navbar = () => {
  const { selected } = useSelector((state) => state.navbar);
  const { lang } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" && window.innerWidth <= 900
  );

  const menu = ["Home", "About", "Skills", "Portfolio", "Contact"];

  const selectedItem = (itemName) => {
    dispatch(navbarActions.setSelected(itemName));
  };

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gradientStyle = {
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: "gradientbutton 15s ease infinite",
  };

  const styled =
    "border-b-2 border-blue-500 rounded-3xl shadow-blue-500 shadow-md text-blue-300 bg-black";

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      {isSmallScreen ? (
        <>
          <LanguageModal>
            <motion.span
              className="absolute z-50 right-16 top-4 active:scale-95 py-2.5 px-2.5 ml-1 cursor-pointer rounded-full"
              style={gradientStyle}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <IoLanguageSharp color="white" />
            </motion.span>
          </LanguageModal>
          <CircularMenu selected={selected} selectedItem={selectedItem} />
        </>
      ) : (
        <motion.nav
          className="absolute z-[100] w-screen flex bg-transparent justify-between px-6 py-3 items-center text-white select-none overflow-clip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="font-Orbitron w-9 flex items-center text-3xl font-bold gap-1">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={36}
              height={36}
              className="border-2 rounded-full"
            />
            <div className={styles.environment}></div>
            <h2
              className={`${styles.hero} ${styles.glitch} ${styles.layers} bg-opacity-0 bg-white bg-blur-lg backdrop-blur-md rounded-md`}
              data-text="MG"
            >
              <span>MG</span>
            </h2>
          </div>
          <ul className="flex gap-1 font-semibold font-Orbitron bg-opacity-0 bg-white bg-blur-lg backdrop-blur-md backdrop-filter rounded-full py-2 px-4">
            {trannav(lang).map((item, index) => (
              <motion.li
                key={item}
                className={`active:scale-95 py-1.5 px-4 cursor-pointer ${
                  selected === menu[index] && styled
                }`}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  selectedItem(item);
                  scrollToSection(menu[index].toLowerCase());
                }}
              >
                {item}
              </motion.li>
            ))}
            <LanguageModal>
              <motion.li
                className="active:scale-95 py-2.5 px-2.5 ml-1 cursor-pointer rounded-full"
                style={gradientStyle}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <IoLanguageSharp color="white" />
              </motion.li>
            </LanguageModal>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
