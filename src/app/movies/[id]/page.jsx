import { movies } from "@/app/data"

export default function MovieDetails({params}) {
    const details = movies.find(movie => movie.title.split(' ').join('-') == params.id)
  return (
    <div>
        <h1>{details.title}</h1>
        <p>{details.epilogue}</p>
    </div>
  )
}
