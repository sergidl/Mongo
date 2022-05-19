import movie from './movies/movies.js';
// import actor from './actors/actors.js';
import moviePojo from '../models/movies/moviePojo.js';
// import actorPojo from '../models/actors/actorPojo.js';
import messageapp from '../data/messages.js';


class MoviesModel {


    async getMovies() {

        console.log("---> moviesModel::getMovies");

        const movies = await movie.getMovies();



        return movies;
    }
    async getMovieById(id) {

        console.log(`---> moviesModel::getMovieById = ${id}`);

        const _movie = await movie.getMovieById(id);
        if (typeof _movie == 'undefined')
            throw new Error(messageapp.movie_dosent_exist);

        return _movie;
    }

    async removeMovie(id) {

        console.log(`---> moviesModel::removeMovie = ${id}`);

        const index = await movie.removeMovie(id);
        return index;
    }


    async getMovieBy(elem) {
        console.log(`---> moviesModel::getMovieBy = ${elem.value}`);


        const _movies = await movie.getMovieBy(elem);


        return _movies;
    }


    async createMovie(req) {

        console.log(`---> moviesModel::createMovie = ${req.id}`);

        const new_movie = await moviePojo(req);
        if (typeof new_movie == 'undefined')
            throw new Error(messageapp.parameter_not_especified);



        movie.createMovie(new_movie);
    }


    async updateMovie(req) {
        console.log(`---> moviesModel::updateMovie = ${req.id}`);

        const new_movie = await moviePojo(req);
        if (typeof new_movie == 'undefined')
            throw new Error(messageapp.parameter_not_especified);



        const _movie = await movie.updateMovie(new_movie);
        if (typeof _movie == 'undefined')
            throw new Error(messageapp.movie_error_update);




    }

    async getMoviesFromActor(req) {
        console.log(`---> moviesModel::getMoviesFromActor = ${req.value}`);

        let _movies = [];

        const movies_id = actor.getIDFromActor(req)
        movies_id.forEach(element => {
            _movies.push(movie.getMovieById(element.id));
        });

        return _movies;
    }

    async addActors(req) {
        console.log(`---> moviesModel::addActors = ${req.id}`);

        actor.addActorToMovie(req)
        return this.getMovieById(req.id);

    }

}

export default new MoviesModel()