import HttpError from "http-errors";
import moviesModel from '../models/moviesModel.js';
import messageapp from '../data/messages.js';

const getAllMovies = async (req, res) => {

    console.log("---> moviesController::getAllMovies");

    const movies = await moviesModel.getMovies();
    res.json(movies);
}

const getMovieById =async (req, res, next) => {

    console.log("---> moviesController::getMovieById");

    if (!req.params.id)
        next(HttpError(400, { message: messageapp.parameter_not_especified }));
    try {

        const id = req.params.id;
        let movie =await moviesModel.getMovieById(id);
        // movie=movie.find(element => element.id == id);
        res.json(movie);

    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }

}

const removeMovie =async (req, res, next) => {
    console.log("---> moviesController::removeMovie");

    if (!req.params.id)
        next(HttpError(400, { message: messageapp.parameter_not_especified }));

    const id = req.params.id;
    if (moviesModel.removeMovie(id) == -1) {
        next(HttpError(400, { message: messageapp.movie_dosent_exist }));

    }

    getAllMovies(req, res);


}

const createMovie =async (req, res, next) => {
    console.log(`---> moviesController::createMovie`);

    if (!req.body)
        next(HttpError(400, { message: messageapp.parameter_not_especified }));

    try {

       await moviesModel.createMovie(req.body);
        getAllMovies(req, res);

    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }

}

const updateMovie =async (req, res, next) => {
    console.log(`---> moviesController::updateMovie`);


    try {
        if (!req.body)
            next(HttpError(400, { message: messageapp.parameter_not_especified }));

       await moviesModel.updateMovie(req.body);
        getAllMovies(req, res);

    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }
}


const getMovieBy =async (req, res, next) => {
    console.log(`---> moviesController::getMovieBy`);

    if (!req.body)
        next(HttpError(400, { message: messageapp.parameter_not_especified }));

    let movies =await moviesModel.getMovieBy(req.body);
    movies=movies.filter(element => element[req.body.key] == req.body.value)
    res.json(movies);
}

//TODO: Actuaizar API
const addActors =async (req, res, next) => {
    console.log(`---> moviesController::addActors`);
    if (!req.body)
        next(HttpError(400, { message: messageapp.parameter_not_especified }));

    const _movie =await moviesModel.addActors(req.body);
    res.json(_movie);
}


// TODO: Nueva API devuelve todas las películas donde participa un actor
const getMoviesFromActor =async (req, res, next) => {
    console.log(`---> moviesController::getMoviesFromActor`);

    if (!req.body)
        next(HttpError(400, { message: messageapp.parameter_not_especified }));

    const movies =await moviesModel.getMoviesFromActor(req.body);
    res.json(movies);
};


export default {
    getAllMovies,
    getMovieById,
    removeMovie,
    createMovie,
    updateMovie,
    getMovieBy,
    addActors,
    getMoviesFromActor
}