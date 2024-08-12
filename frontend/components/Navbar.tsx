"use client";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { CircleX, CrossIcon, HammerIcon, MenuIcon } from "lucide-react";
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
          Finder
        </h1>
        <div className="hidden flex-1 md:flex items-center justify-end gap-4 font-semibold">
          <Link href="/playground" className="hover:underline">
            Playground
          </Link>
          <Link href="/register" className="hover:underline">
            Register
          </Link>
          <Link href="/login" className="hover:underline">
            Login
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
                  {links.map(({ name, to, id }) => (
                    <a key={id} href={to}>
                      {name}
                    </a>
                  ))}
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
