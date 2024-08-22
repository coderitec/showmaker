import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
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
        </ul>

        <MobileNav />
    </nav>
  )
}
