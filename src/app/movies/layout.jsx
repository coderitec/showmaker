import { Satisfy } from "next/font/google";

const poo = Satisfy({ subsets: ["latin"] , weight: ['400']});

export default function MovieLayout({children}) {
  return (
    <div className={poo.className}>
        {children}
    </div> 
  )
}
