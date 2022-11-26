import Paragraph from "../Pragraph/Pragraph";
import '../../App.css'

const MovieInformation = (props) => {
    return(
        <div className="App">
            <h1>{props.title}</h1>
            <Paragraph text={props.plot}/>
            <img src={props.poster} />
        </div>
    )
}


export default MovieInformation