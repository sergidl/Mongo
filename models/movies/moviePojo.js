export default function movie(data) {

    let _movie = {}
    _movie.id = data.id;
    _movie.title = data.title;
    _movie.genres = data.genres;
    _movie.year = data.year;
    _movie.director = data.director;
    _movie.actors = data.actors;



    return _movie;
}