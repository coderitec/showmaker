import MovieCard from "@/app/components/MovieCard";
import { movies } from "@/app/data"
import { Hachi_Maru_Pop } from "next/font/google";
import Link from "next/link";

const haa = Hachi_Maru_Pop({ subsets: ["latin"] , weight: ['400']});

export default function MovieDetails({params}) {
    const details = movies.find(movie => movie.title.split(' ').join('-') == params.id)

    const relatedMovies = movies.filter((card => card.category == details.category && details.title !== card.title))

    const relatedCard = relatedMovies.map((card,index) => 
      <Link href={`/movies/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer'  key={index}>
      <MovieCard title={card.title} type={card.type} rat ={card.rating} img={card.category}/>
      </Link>
  )
  return (
    <div>
        <h1 className={`${haa.className} text-2xl`} style={{paddingBlock: '20px', backgroundColor: 'blue'}}>{details.title}</h1>
        <p>{details.epilogue}</p>


        <div>
          <h2 className="text-4xl font-bold">related movies</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {relatedCard}
          </div>
        </div>
    </div>
  )
}
