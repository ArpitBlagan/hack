"use client";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import {
  CircleX,
  CrossIcon,
  GithubIcon,
  HammerIcon,
  LinkedinIcon,
  MenuIcon,
  TwitterIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [visi, setVisi] = useState(false);
  const links = [
    { name: "Home", to: "#", id: 1 },
    { name: "About", to: "#", id: 2 },
    { name: "Blog", to: "#", id: 3 },
    { name: "Contact", to: "#", id: 4 },
  ];
  return (
    <div className="flex flex-col items-start gap-5 mx-10 py-5 absolute top-0 right-0 w-full">
      <div className="flex-1 flex items-center w-full">
        <h1 className="font-mono md:text-[50px] text-[30px] mx-20 section-heading">
          Arpit
        </h1>
        <div className="hidden flex-1 md:flex items-center justify-end gap-4 font-semibold">
          <a
            href="https://github.com/ArpitBlagan"
            target="_blank"
            className="hover:text-red-500"
          >
            <GithubIcon />
          </a>
          <Link
            href="https://www.linkedin.com/in/arpit-blagan-79081b193/"
            target="_blank"
            className="hover:text-red-500"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="https://x.com/arpit_blagan"
            target="_blank"
            className="hover:text-red-500"
          >
            <TwitterIcon />
          </Link>
        </div>
        <div className="block md:hidden flex-1 flex items-center justify-end relative">
          <MenuIcon
            onClick={() => {
              setVisi(true);
            }}
          />
          {visi && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              exit={{ x: "-100%" }}
              className="absolute top-0 right-0 w-[200px] z-10 rounded-xl border px-3 pt-3 pb-10"
              style={{ backgroundColor: "#121212" }}
            >
              <div className="flex flex-col item-center justify-center">
                <p className="flex items-center justify-end">
                  <CircleX
                    onClick={() => {
                      setVisi(false);
                    }}
                  />
                </p>
                <div className="flex flex-col gap-5 items-center">
                  <a href="https://github.com/ArpitBlagan" target="_blank">
                    <GithubIcon />
                  </a>
                  <Link
                    href="https://www.linkedin.com/in/arpit-blagan-79081b193/"
                    target="_blank"
                  >
                    <LinkedinIcon />
                  </Link>
                  <Link href="https://x.com/arpit_blagan" target="_blank">
                    <TwitterIcon />
                  </Link>
                </div>
              </div>
            </motion.aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
