import React from "react";
import { main_logo } from "../assets/header";
import { headerArr } from "../utils/header";
import Link from "next/link";

export default function Header() {
  return (
    <section className="w-full h-20 sticky bg-white top-0 z-[999] hidden lg:block">
      <div className="w-full h-full main-container flex items-center justify-between">
        <picture className="w-full h-full flex items-center justify-start">
          <Link href={"#home"}>
          <img src={main_logo.src} alt="" className="h-16 w-auto" />
          </Link>
        </picture>
        <div className="w-full h-full flex items-center justify-between">
          {headerArr.map((item: any) => (
            <Link href={`${item.path}`}  key={item.id}>
            <span className="h-full p-3 center cursor-pointer group">
              <p className="text-lg font-bold text-blue-900 uppercase group-hover:text-red-600 !transition-all !duration-500 !ease-in-out">{item.title}</p>
            </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
