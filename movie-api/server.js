const express = require('express');
const app = express();
const env = require('dotenv').config()

const port = process.env.PORT

app.listen(port, () => console.log(`server is listening on port: ${port}`))

// puts the JSON data into req.body
app.use(express.json())

// you can replace this with a database
let history = []

app.get('/', (req, res) => {
    res.send('Api is running...')
})

app.get('/api/movie-history', (req, res) => {
    res.json({history})
    console.log('history has been sent')
})

app.post('/api/search-movie', async (req, res) => {
    // console.log(req.body)
    const movieTitle = req.body.movieSearch.movie
    const result =  await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.MOVIE_API_KEY}`)
    .then(res => res.json())
    .then(res => res)
    history.push(result)
    res.json({result})
})

// const path = require('path')
//   app.use(express.static(path.join(__dirname, 'build')));

//   app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
// http://www.omdbapi.com/?i=tt3896198&apikey=721ba629