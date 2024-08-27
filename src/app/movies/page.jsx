"use client"
import { movies } from "../data"
import Link from "next/link"
import MovieCard from "../components/MovieCard"
import {IoMdSearch} from 'react-icons/io'
import { useState } from "react"

export default function MoviePage() {
  const [searchMovie, setSearchMovie] = useState('')

  function filterSearch(e){
    setSearchMovie(e.target.value)
  }

  const filterLists = movies.filter(movie => movie.title.toLowerCase().includes(searchMovie.toLowerCase()) || movie.category.toLowerCase().includes(searchMovie.toLowerCase()) )
  
  const cards = filterLists.length == 0 ?(
    <h1>Sorry, search item does not exist</h1>
  ) : filterLists.map((card,index) => (
    <section key={index}>
        <Link href={`/movies/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer'>
       <MovieCard title={card.title} type={card.type} rat ={card.rating} img={card.category}/>
        </Link>
    </section>
))
  return (
    <>
    <div className="flex items-center justify-between p-3 border-4  rounded-full mt-4 border-slate-950 w-3/5 m-auto">
    <input type="text" name="search" id="search" 
    className=" outline-none  block mt-4 w-4/5 text-2xl" placeholder="Search for movie or category or actor" defaultValue={searchMovie}
    onChange={(e)=>filterSearch(e)}/>
    <IoMdSearch className="text-2xl"/>
    </div>
    <div  className='grid grid-cols-3 gap-4 px-16 py-32 capitalize'>
      {cards}
    </div>
    </>
  )
}
