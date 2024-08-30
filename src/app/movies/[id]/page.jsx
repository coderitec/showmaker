"use client"
import MovieCard from "@/app/components/MovieCard";
import { movies } from "@/app/data"
import { SidebarContext } from "@/app/providers";
import { Hachi_Maru_Pop } from "next/font/google";
import Link from "next/link";
import { useContext } from "react";

const haa = Hachi_Maru_Pop({ subsets: ["latin"] , weight: ['400']});

export default function MovieDetails({params}) {
  const {setVal,movieItem, setMovieItem} = useContext(SidebarContext)

  const details = movies.find(movie => movie.title.split(' ').join('-') == params.id)

  function handleMovieAdd(){
    setVal(prev => prev + 1)
    setMovieItem([...movieItem, {title: details.title,epi: details.epilogue, cat:details.category}])
  }

    const relatedMovies = movies.filter((card => card.category == details.category && details.title !== card.title))

    const relatedCard = relatedMovies.map((card,index) => 
      <Link href={`/movies/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer'  key={index}>
      <MovieCard title={card.title} type={card.type} rat ={card.rating} img={card.category}/>
      </Link>
  )
  return (
    <div className="px-16"> 
        <h1 className={`${haa.className} text-2xl`} style={{paddingBlock: '20px', backgroundColor: 'blue'}}>{details.title}</h1>
        <p>{details.epilogue}</p>
        <button
        onClick={handleMovieAdd} 
        className="bg-slate-950 text-slate-50 p-3 rounded-md">add movie</button>


        <div>
          <h2 className="text-4xl font-bold">related movies</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {relatedCard}
          </div>
        </div>
    </div>
  )
}
