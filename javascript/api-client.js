const API_KEY = "702761b5338341d2bc327b396af85641";
const base_endpoint = "https://api.themoviedb.org/3/genre/movie/list";


const getMovieGenres = async () => {
    const APIEndpoint = `${base_endpoint}/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(APIEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};
