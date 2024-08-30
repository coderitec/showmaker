"use client"
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useContext } from "react";
import { SidebarContext } from "../providers";

export default function Navbar() {
    const {val} = useContext(SidebarContext)
  return (
    <nav className=" bg-slate-950 text-white text-lg">
        <ul className="md:flex h-36 hidden justify-around items-center ">
            <Link href={'/'}>
                <li>home</li>
            </Link>

            <Link href={'/about'}>
                <li>about</li>
            </Link>

            <Link href={'/contact'}>
                <li>contact</li>
            </Link>

            <Link href={'/movies'}>
                <li>movies</li>
            </Link>
            
            <Link href={'/help'}>
                <li>help</li>
            </Link>
            <Link href={'/wishes'}>
                <li>{val}</li>
            </Link>
        </ul>

        <MobileNav />
    </nav>
  )
}
