import { useState } from "react"
import Paragraph from "../componenets/Pragraph/Pragraph"
import SearchBar from "../componenets/SearchBar/SearchBar"
import MovieInformation from "../componenets/MovieInformation/MovieInformation"
import TextAnimation from "../componenets/TextAnimation/TextAnimation"

const Home = ({name}) => {
    const homePageTitle = `Welcome ${name} to my Movies App`
    const [movieInformation, setMovieInformation] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const movieSearch = Object.fromEntries(new FormData(form))
        // console.log(data)
        const response = await fetch('/api/search-movie', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({movieSearch})
        })
            .then(res => res.json())
            .then(res => res)
        // console.log(response)
        setMovieInformation(response.result)
    }

    const text = "Hey I am using the same component over and over again!!!"
    
    return(
        <div style={{textAlign: "center"}}>
            <TextAnimation 
                animationText = {homePageTitle} 
            />
            {/* <Paragraph text={text} /> */}
            <SearchBar 
                handleSubmit = {handleSubmit}
            />
            {
                movieInformation &&
                <MovieInformation 
                    title = {movieInformation.Title}
                    plot = {movieInformation.Plot}
                    poster = {movieInformation.Poster}
                />
            }
        </div>
    )
}

export default Home