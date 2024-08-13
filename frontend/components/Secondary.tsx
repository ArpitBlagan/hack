"use client";
import { motion } from "framer-motion";
import { GithubIcon } from "lucide-react";
import { useEffect, useState } from "react";
const skills = [
  "React",
  "Express",
  "Node",
  "Next-JS",
  "Docker",
  "Aws",
  "Redis",
  "MongoDB",
  "Postgres",
  "Prisma",
  "Kafka",
  "Websocket/WebRTC",
];
const Secondary = () => {
  return (
    <div className="h-[100dvh] w-full relative">
      <img
        src="https://superteam.fun/_app/immutable/assets/collabpic2.25b59e64.png"
        sizes="(max-width: 640px) 100vw, 1024px"
        loading="lazy"
        alt=""
        className="object-cover h-full w-full rounded-xl"
      ></img>
      <div className="absolute flex flex-col justify-start items-center gap-10  w-full top-[10%]  right-0 z-10">
        <motion.h1
          className="font-md font-mono text-[40px] text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, animation: "ease-in-out" }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h1>
      </div>
      <div className="absolute w-full top-[15%]  flex items-center justify-center gap-4">
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <div className="container backdrop-blur-sm rounded-lg shadow-lg px-10 grid md:grid-cols-3 items-center py-2">
            {skills.map((ele, index) => {
              return (
                <h1
                  key={index}
                  className="text-semibold text-[20px] text-gray-400 text-center"
                >
                  {"> "}
                  {ele}
                </h1>
              );
            })}
          </div>
          <div className="flex items-center justify-center">
            <a
              className=" glow-on-hover flex items-center justify-center"
              href="https://github.com/ArpitBlagan?tab=repositories"
              target="_blank"
              style={{ backgroundColor: "#121212" }}
            >
              Repositories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondary;
