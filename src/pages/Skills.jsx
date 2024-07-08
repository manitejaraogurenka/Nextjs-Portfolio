"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RatingComponent, AboutSkill } from "@/components/Rating";
import "../styles/Hologram.css";

const Skills = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" && window.innerWidth <= 1060
  );
  const [isSoSmallScreen, setIsSoSmallScreen] = useState(
    typeof window !== "undefined" && window.innerWidth <= 800
  );

  const [selectedSkill, setSelectedSkill] = useState(1);
  const skillImages = Array.from({ length: 11 }, (_, index) => index + 1);
  const { selected } = useSelector((state) => state.navbar);

  const skillRatings = [
    { key: 1, rating: 5 },
    { key: 2, rating: 5 },
    { key: 3, rating: 4.5 },
    { key: 4, rating: 5 },
    { key: 5, rating: 5 },
    { key: 6, rating: 4 },
    { key: 7, rating: 4 },
    { key: 8, rating: 4.5 },
    { key: 9, rating: 5 },
    { key: 10, rating: 4 },
    { key: 11, rating: 5 },
  ];

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 1060);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleResize = () => setIsSoSmallScreen(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const setSelectedSkillOnClick = (key) => {
    setSelectedSkill(key);
  };

  return (
    <div className={`relative h-screen w-screen bg-black flex justify-center`}>
      <div
        className={`absolute bottom-16 flex  h-[90%] w-[95%] items-center justify-around`}
      >
        {!isSmallScreen ? (
          <RatingComponent
            rating={skillRatings[selectedSkill - 1].rating}
            value={selectedSkill}
          />
        ) : (
          ""
        )}

        <div className="relative flex items-center flex-col">
          <div
            className={` absolute top-[26rem] ${
              !isSoSmallScreen ? "hidden" : "visible"
            }`}
          >
            <RatingComponent
              rating={skillRatings[selectedSkill - 1].rating}
              value={selectedSkill}
            />
          </div>
          <div className="relative animate-move pt-14 mt-[4.8rem] h-[100%] select-none">
            <img
              src="/Skillpose.png"
              className=" object-contain h-[570px] w-[405px] px-2"
              draggable={false}
              alt="Skillpose"
            />

            <AnimatePresence>
              {selected === "Skills" &&
                skillImages.map((key) => (
                  <motion.img
                    key={key}
                    onClick={() => setSelectedSkillOnClick(key)}
                    className={`absolute ${getSkillPosition(key)} ${
                      selectedSkill === key ? "shadowfilter" : ""
                    } z-20 hover:scale-110 transition-all ease`}
                    src={getSkillImage(key)}
                    alt={`Skill ${key}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ delay: (key - 1) * 0.15 }}
                  />
                ))}
            </AnimatePresence>
          </div>

          <div className="holocontainer z-10">
            <div className="hologram-container">
              <div className="hologram-rays-container">
                <div className="hologram-rays"></div>
              </div>
              <div className="holo-ctrl-container">
                <div className="holo-ctrl">
                  <div className="hologram"></div>
                  <div className="hologram-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!isSoSmallScreen ? (
          <div className=" flex flex-col gap-2">
            {isSmallScreen && !isSoSmallScreen ? (
              <RatingComponent
                rating={skillRatings[selectedSkill - 1].rating}
                value={selectedSkill}
              />
            ) : (
              ""
            )}
            <AboutSkill value={selectedSkill} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const getSkillPosition = (key) => {
  switch (key) {
    case 1:
      return "w-[8.5%] top-[14rem] left-[-0.44rem]";
    case 2:
      return "w-[11%] top-[10.5rem] left-[0.1rem]";
    case 3:
      return "w-[10%] top-[7.1rem] left-5 rounded-md";
    case 4:
      return "w-[10%] top-[4.3rem] left-14";
    case 5:
      return "w-[10%] top-[2.3rem] left-[6.6rem]";
    case 6:
      return "w-[12%] top-[1.5rem] left-[11rem]";
    case 7:
      return "w-[10%] top-[2.3rem] right-[6.6rem]";
    case 8:
      return "w-[10%] top-[4.3rem] right-[3.5rem]";
    case 9:
      return "w-[10%] top-[7.1rem] right-[1.25rem]";
    case 10:
      return "w-[10%] top-[10.5rem] right-[0.1rem]";
    case 11:
      return "w-[10%] top-[14rem] right-[-0.44rem]";
    default:
      return "";
  }
};

const getSkillImage = (key) => {
  switch (key) {
    case 1:
      return "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg";
    case 2:
      return "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg";
    case 3:
      return "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
    case 4:
      return "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
    case 5:
      return "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png";
    case 6:
      return "https://camo.githubusercontent.com/9771a2d4a7366d3c6d4793e17104eba9e88f0aec82f7165bfe6871455c26cb2c/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6461726b5f6261636b67726f756e642e706e67";
    case 7:
      return "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg";
    case 8:
      return "https://nodejs.org/static/logos/jsIconGreen.svg";
    case 9:
      return "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png";
    case 10:
      return "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png";
    case 11:
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png";
    default:
      return "";
  }
};

export default Skills;
