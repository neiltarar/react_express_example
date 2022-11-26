import Paragraph from "../componenets/Pragraph/Pragraph"

const About = () => {
    const text = "This is a place holder script which I can change the contents whenever I want. But it will always look the same because I will be embedding it into the same paragraph component each time."

    return(
        <>
            <h1>About</h1>
            <Paragraph text = {text}/>
        </>
    )
}

export default About