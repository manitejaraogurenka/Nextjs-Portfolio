"use client";

import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { GrDocumentDownload } from "react-icons/gr";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

import "../styles/SocialCircle.css";
import {
  tranname,
  trangreet,
  tranintro,
  tranhire,
  trandoc,
} from "../utils/translateText";
import { useSelector } from "react-redux";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  const audio = new Audio("/Audio/My_name_is_maniteja_Gurenka.mp3");

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { lang } = useSelector((state) => state.language);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 542);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume Maniteja Gurenka.docx";
    link.download = "Resume Maniteja Gurenka.docx";
    link.click();
  };

  return (
    <div className=" relative flex justify-start items-center bg-black w-screen h-screen overflow-clip shadow-lg shadow-black select-none">
      <motion.div
        className="absolute flex flex-col bg-transparent z-10 ml-16 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <span className="text-white text-4xl mb-2 font-Oxanium drop-shadow-2xl">
          {trangreet(lang)}
        </span>
        <span
          className="text-white font-Orbitron font-black specialFont cursor-pointer cursor-scale small"
          onClick={() => audio.play()}
        >
          {tranname(lang)}
        </span>
        <span className="text-white mt-1 font-Poppins">
          <TypeAnimation
            key={lang}
            sequence={tranintro(lang)}
            speed={50}
            style={{ fontSize: "1.5em" }}
            repeat={Infinity}
          />
        </span>
        <span className="mt-7 flex gap-12">
          <button
            onClick={downloadResume}
            className="resume-btn inline-flex gap-1 items-center px-2 py-1 rounded-3xl active:scale-105"
          >
            <GrDocumentDownload />
            {trandoc(lang)}
          </button>
          <Link
            href="#about"
            className="resume-btn inline-flex gap-1 items-center px-2 py-1 rounded-3xl active:scale-105"
          >
            <TbHeartHandshake size={20} />
            {tranhire(lang)}
          </Link>
        </span>
        <div className=" flex gap-4 items-center lg:invisible text-white mt-16">
          <Link
            href="https://www.youtube.com/channel/UCCG6BUMTVsGhxmUsTpLKkCQ"
            className="p-1 rounded-full resume-btn"
          >
            <FaYoutube
              size={40}
              className=" bg-white p-1 rounded-full hover:scale-125 active:scale-125 transition-all ease-in hover:rotate-12"
              color="red"
            />
          </Link>

          <Link
            href="https://www.instagram.com/manitejarao.gurenka/"
            className="p-1 rounded-full resume-btn"
          >
            <FaInstagram
              size={40}
              className=" bg-white p-1 rounded-full hover:scale-125 active:scale-125 transition-all ease-in hover:rotate-12 "
              color="#e1306c"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/manitejagurenka/"
            className="p-1 rounded-full resume-btn"
          >
            <BsLinkedin
              size={40}
              className=" bg-white p-1 rounded-full hover:scale-125 active:scale-125 transition-all ease-in hover:rotate-12"
              color="blue"
            />
          </Link>

          <Link
            href="https://x.com/Gurenkamaniteja"
            className="p-1 rounded-full resume-btn"
          >
            <FaTwitter
              size={40}
              className=" bg-white p-1 rounded-[45%] hover:scale-125 active:scale-125 transition-all ease-in hover:rotate-12"
              color="#1DA1F2"
            />
          </Link>

          <Link
            href="https://github.com/ManitejaraoGurenka"
            className="p-1 rounded-full resume-btn mr-4"
          >
            <FaGithub
              size={40}
              className="bg-white p-1 rounded-full hover:scale-125 active:scale-125 transition-all ease-in hover:rotate-12"
              color="black"
            />
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative w-full h-full overflow-y-hidden"
      >
        <video
          src="/Video/Pose.mp4"
          className={`absolute top-5 left-0 right-0 bottom-0 w-screen h-screen object-bottom ${
            isSmallScreen ? "object-contain" : "object-cover"
          }`}
          autoPlay
          muted
          loop
        />
        <div className="bottom-0 absolute bg-gradient-to-t from-black w-full h-[70%] shadow-lg shadow-black"></div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="invisible lg:visible absolute -right-36 overflow-x-clip pl-[8rem]"
      >
        <div className="relative Wheel font-normal mt-8">
          <div className=" absolute border-8 border-white -m-4 w-[30rem] h-[29rem] rounded-full"></div>
          <div className="WheelInner rounded-full w-80">
            <img
              className="WheelImage border-8 rounded-full"
              alt="Profile"
              src="/Social_profile.png"
            />
            <ol className="WheelList">
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <Link
                    className="WheelLink"
                    href="https://www.instagram.com/manitejarao.gurenka/"
                  >
                    <span className="WheelIcon p-3 rounded-ful">
                      <FaInstagram
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="#e1306c"
                      />
                    </span>
                  </Link>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <Link
                    className="WheelLink"
                    href="https://www.youtube.com/channel/UCCG6BUMTVsGhxmUsTpLKkCQ"
                  >
                    <span className="WheelIcon p-3 rounded-ful">
                      <FaYoutube
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="red"
                      />
                    </span>
                  </Link>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <Link
                    className="WheelLink"
                    href="https://www.linkedin.com/in/manitejagurenka/"
                  >
                    <span className="WheelIcon  p-3 rounded-ful">
                      <BsLinkedin
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="blue"
                      />
                    </span>
                  </Link>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <Link
                    className="WheelLink"
                    href="https://x.com/Gurenkamaniteja"
                  >
                    <span className="WheelIcon  p-3 rounded-ful">
                      <FaTwitter
                        size={50}
                        className=" bg-white p-1 rounded-[45%]"
                        color="#1DA1F2"
                      />
                    </span>
                  </Link>
                </div>
              </li>

              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <Link
                    className="WheelLink"
                    href="https://github.com/ManitejaraoGurenka"
                  >
                    <span className="WheelIcon  p-3 rounded-ful">
                      <FaGithub
                        size={50}
                        className="bg-white p-1 rounded-full"
                        color="black"
                      />
                    </span>
                  </Link>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <Link
                    className="WheelLink"
                    href="https://leetcode.com/manitejaraogurenka/"
                  >
                    <span className="WheelIcon  p-3 rounded-ful">
                      <SiLeetcode
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="#FEA016"
                      />
                    </span>
                  </Link>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <Link
                    className="WheelLink"
                    href="https://t.me/manitejaraogurenka"
                  >
                    <span className="WheelIcon  p-3 rounded-ful">
                      <FaTelegram
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="#0088cc"
                      />
                    </span>
                  </Link>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <Link className="WheelLink" href="#">
                    <span className="WheelIcon  p-3 rounded-ful">
                      <TiSocialFacebook
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="blue"
                      />
                    </span>
                  </Link>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
