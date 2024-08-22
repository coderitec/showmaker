import Image from "next/image";

import MovieLists from "./components/MovieLists";
import Header from "./components/Header";


export default function Home() {
  return (
    
    <>
        <Header/>  
        <MovieLists />
    </>
  )
}
