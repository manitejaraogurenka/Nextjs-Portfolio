"use client";

"use client";

import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import useIntersectionObserver from "../utils/useIntersectionObserver";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import { Toaster } from "react-hot-toast";

export default function Index() {
  const sectionNames = ["home", "about", "skills", "portfolio", "contact"];
  const sectionRefs = sectionNames.map(() => useRef(null));

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    sectionRefs.forEach((ref, index) => {
      useIntersectionObserver(ref.current, sectionNames[index], options);
    });
  }, []);

  return (
    <main className="w-screen h-screen">
      <Toaster position="bottom-left" reverseOrder={false}></Toaster>
      <Cursor />
      <Navbar />
      <div id="home" ref={sectionRefs[0]}>
        <Home />
      </div>
      <div id="about" ref={sectionRefs[1]}>
        <About />
      </div>
      <div id="skills" ref={sectionRefs[2]}>
        <Skills />
      </div>
      <div id="portfolio" ref={sectionRefs[3]}>
        <Portfolio />
      </div>
      <div id="contact" ref={sectionRefs[4]}>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
