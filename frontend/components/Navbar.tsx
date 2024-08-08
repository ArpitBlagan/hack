import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { HammerIcon, MenuIcon } from "lucide-react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="flex flex-col items-start gap-5 mx-10 py-5 absolute top-0 right-0 w-full">
      <div className="flex-1 flex items-center w-full">
        <h1 className="font-mono md:text-[50px] text-[30px] px-20 section-heading">
          Finder
        </h1>
        <div className="hidden flex-1 md:flex items-center justify-end gap-4 font-semibold">
          <h1>Finder</h1>
          <h1>Nice</h1>
          <h1>Cool</h1>
        </div>
        <div className="block md:hidden flex-1 flex items-center justify-end relative">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
