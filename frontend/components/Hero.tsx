"use client";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { motion } from "framer-motion";
export const Hero = () => {
  const dd = useRef(null);
  function createStars(type: any, quantity: any) {
    for (let i = 0; i < quantity; i++) {
      var star = document.createElement("div");
      star.classList.add("star", `type-${type}`);
      star.style.left = `${randomNumber(1, 99)}%`;
      star.style.bottom = `${randomNumber(1, 99)}%`;
      star.style.animationDuration = `${randomNumber(50, 200)}s`;
      //@ts-ignore
      dd?.current?.appendChild(star);
    }
  }
  function randomNumber(min: any, max: any) {
    return Math.floor(Math.random() * max) + min;
  }
  useEffect(() => {
    createStars(1, 100);
    createStars(2, 35);
    createStars(3, 20);
  }, []);
  return (
    <div className="relative mx-0 h-[100dvh] w-full" ref={dd}>
      <Navbar />
      <img
        src="https://superteam.fun/_app/immutable/assets/hero_home.03808f14.webp"
        sizes="(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 2560px"
        loading="eager"
        alt=""
        className="object-cover w-full h-full z-90"
      ></img>
      <div className="absolute font-md flex flex-col justify-start items-center w-full top-[20%] md:top-[25%] z-10 gap-5">
        <motion.h1 className=" font-mono text-[25px] md:text-[40px] text-center leading-30">
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0, animation: "ease-in-out" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="block overflow-hidden"
          >
            Find Yourself
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, animation: "ease-in-out" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            ⚡️ome Work
          </motion.span>
        </motion.h1>
        <p className="font-md md:text-[20px] text-[16px] text-center">
          <span className="block">
            Introducing a new freelancing platform Finder but
          </span>
          <span>exclusively utilizes Solana (SOL) for payments.</span>
        </p>
        <div className="flex items-center justify-center">
          <a
            className=" glow-on-hover flex items-center justify-center"
            href="https://github.com/ArpitBlagan"
            target="_blank"
            style={{ backgroundColor: "#121212" }}
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
