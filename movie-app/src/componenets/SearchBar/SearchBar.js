const SearchBar = ({handleSubmit}) => {
    return(
        <div>
            <h1>Movie Name</h1>
            <form
                onSubmit = {handleSubmit}
            >
                <input type="text" name="movie" />
                <button type="">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;