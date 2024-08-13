"use client";
import { motion } from "framer-motion";
import InfoDialog from "./InfoDialog";
import ping from "../images/Screenshot 2024-08-13 at 10.21.50 AM.png";
import anPing from "../images/Screenshot 2024-08-13 at 10.22.22 AM.png";
import blog from "../images/Screenshot 2024-08-13 at 10.23.01 AM.png";
import anBlog from "../images/Screenshot 2024-08-13 at 10.23.34 AM.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Features = () => {
  return (
    <div className="mb-10">
      <h1 className="font-mono md:text-[50px] text-[30px] text-center font-semibold ">
        Projects
      </h1>
      <div className="flex flex-col gap-2 md:mx-10">
        <div className="flex flex-col justify-center items-center gap-5 relative mt-10">
          <div className="absolute top-[5%] w-full flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0, animation: "ease-in-out" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-mono text-[30px] text-center"
            >
              PingMe
            </motion.h1>
          </div>
          <div
            className="flex items-center mt-20 h-[50dvh] relative w-full rounded-t-xl border overflow-hidden md:overflow-visible"
            style={{ backgroundColor: "#111222" }}
          >
            <Image
              src={ping}
              className="absolute left-10 lg:left-40 top-5"
              alt="home"
              width={600}
              height={600}
            />
            <Image
              src={anPing}
              alt="another"
              className="absolute bottom-5 right-10 lg:right-40 z-10"
              width={600}
              height={600}
            />
          </div>
          <a
            className=" glow-on-hover flex items-center justify-center"
            href="https://chat-assignment-lyart.vercel.app/"
            target="_blank"
            style={{ backgroundColor: "#121212" }}
          >
            See
          </a>
        </div>
        <div className="my-5">
          <hr />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 relative overflow-hidden md:overflow-visible">
          <div className="absolute top-[5%] w-full flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0, animation: "ease-in-out" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-mono text-[30px] text-center"
            >
              Belog
            </motion.h1>
          </div>
          <div
            className="flex items-center mt-20 h-[50dvh] relative w-full rounded-b-xl border"
            style={{ backgroundColor: "#111222" }}
          >
            <Image
              src={blog}
              className="absolute left-10 md:left-40 top-5"
              alt="home"
              width={600}
              height={600}
            />
            <Image
              src={anBlog}
              alt="another"
              className="absolute bottom-5 right-10 md:right-40 z-10"
              width={600}
              height={600}
            />
          </div>
          <a
            className=" glow-on-hover flex items-center justify-center"
            href="https://next-fullstack-belog-phi.vercel.app/"
            target="_blank"
            style={{ backgroundColor: "#121212" }}
          >
            See
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
