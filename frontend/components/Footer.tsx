import { SearchCodeIcon } from "lucide-react";

const Footer = () => {
  return (
    <div
      className="min-h-[40dvh] flex md:flex-row flex-col bg- items-between md:justify-between md:mx-20 gap-5 rounded-t-3xl pb-5"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="flex flex-col items-center justify-center mt-10">
        <SearchCodeIcon height={150} width={150} className="text-gray-800" />
        <h1 className="font-mono text-[35px] md:text-[50px] mx-20 section-heading">
          Finder
        </h1>
      </div>
      <div className="flex-1 flex md:flex-row items-center justify-center md:justify-end gap-10 md:mr-10">
        <div className="flex flex-col items-center justify-center font-semibold text-md">
          <a href="https://github.com/ArpitBlagan" target="_blank">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/arpit-blagan-79081b193"
            target="_blank"
          >
            LindedIn
          </a>
          <a href="https://x.com/arpit_blagan" target="_blank">
            Twitter
          </a>
          <h1>By Arpit Blagan.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
