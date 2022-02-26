const Form = ({setKeyword, searchPhoto}) => {
    return (
        <form className="search-form">
            <input
                type="text"
                name="keyword"
                placeholder="e.g. cat"
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" onClick={searchPhoto}>Search</button>
        </form>
    );
}

export default Form;