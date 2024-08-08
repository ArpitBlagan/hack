"use client";
import { motion } from "framer-motion";
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
      <div className="absolute flex flex-col justify-start items-center gap-10  w-full top-[40%] md:top-[50%] right-0 z-10">
        <motion.h1
          className="font-md font-mono text-[40px] text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, animation: "ease-in-out" }}
          transition={{ duration: 0.8 }}
        >
          Powered with ⚡️olana
        </motion.h1>
        <a
          className=" glow-on-hover flex items-center justify-center"
          href="https://github.com/ArpitBlagan"
          target="_blank"
          style={{ backgroundColor: "#121212" }}
        >
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Secondary;
