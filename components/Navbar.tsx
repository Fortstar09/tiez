import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const links = [
  {
    name: "Events",
    link: "/",
  },
  {
    name: "My Tickets",
    link: "/",
  },
  {
    name: "About Project",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[#05252C]/40 rounded-[24px] border border-stroke px-[16px] py-3 mx-5 md:mx-14 lg:mx-[120px] my-4 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <a href="#"><Image src="/icons/logo.svg" width={100} height={100} alt="logo" /></a>
          <ul className="hidden justify-center items-center gap-4 md:flex">
            {links.map((link) => (
              <li
                key={link.name}
                className="text-[18px] text-[#B3B3B3] p-[10px]"
              >
                <a href="#">{link.name}</a>
              </li>
            ))}
          </ul>
          <Button className="bg-white text-[#0A0C11] rounded-[12px] px-4 py-6 text-base">
            MY TICKETS <MoveRight strokeWidth={1} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
