import axios from "axios";

class MovieServices {
    searchMovie(searchString) {
        var options = {
            method: 'GET',
            url: `https://${process.env.MOVIE_API_HOST}`,
            params: {
                type: 'get-movies-by-title', title: searchString
            },
            headers: {
                'x-rapidapi-host': process.env.MOVIE_API_HOST,
                'x-rapidapi-key': process.env.MOVIE_API_KEY
            }
        };

        return axios.request(options);

    }
}

export default new MovieServices();
