import axios from "axios";

class MovieServices {

    getConnectionString(option){
        var connectionString = {
            method: 'GET',
            url: `https://${process.env.MOVIE_API_HOST}/${option}`,
            params: {},
            headers: {
                'x-rapidapi-host': process.env.MOVIE_API_HOST,
                'x-rapidapi-key': process.env.MOVIE_API_KEY
            }
        }
        return connectionString;
    }
    

    searchMovie(searchString) {
        var options = this.getConnectionString('title/find');
        options.params = {q: searchString}
        return axios.request(options);

    }
    /*getMoreDetails(movieId) {

        var options = this.connectionString;
        options.params = {type: 'get-movie-details', imdb: movieId}
        return axios.request(options);

    }
    getImages(movieId) {
        var options = this.connectionString;
        options.params = { type: 'get-movies-images-by-imdb', imdb: movieId }
        return axios.request(options);

    }*/
}

export default new MovieServices();
