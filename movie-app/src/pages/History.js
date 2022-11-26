import { useEffect, useState } from "react"
import MovieInformation from "../componenets/MovieInformation/MovieInformation"
import Paragraph from "../componenets/Pragraph/Pragraph"

const History = (props) => {
    const [movieHistory, setMovieHistory] = useState(null)
    const getMovies = async () => {
        await fetch('/api/movie-history')
            .then(res => res.json())
            .then(res => setMovieHistory(res.history))
    }

    useEffect(()=> {
       getMovies()
    }, [])

    console.log(movieHistory)


    return(
        <>
            <h1>History</h1>
            { movieHistory ? 
            movieHistory.map((movie, i) => 
                <ul key={i}>
                    <MovieInformation 
                        title = {movie.Title}
                        plot = {movie.Plot}
                        poster = {movie.Poster}
                    />
                </ul>
            )
                :
                <Paragraph text = {'Search History is empty'} />
            }
        </>
    )
}

export default History