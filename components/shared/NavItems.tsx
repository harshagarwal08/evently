"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex flex-col items-start w-full gap-5 md:flex-row">
      {headerLinks?.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`$flex-center p-medium-16 whitespace-nowrap {
              isActive && "text-primary-500"
            } `}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
