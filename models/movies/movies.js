import { ManagerFs } from '../../managers/manager-fs.js';

//'./data/movies.json'


class Movies {

    constructor() {
        this.mgfl = new ManagerFs();
    
        
        

    }

    async getMovies() {

        return this.mgfl.main()
    }

    async getMovieById(id) {

        console.log(`---> movies::getMovieById = ${id}`);

        let _movie = await this.getMovies();
        let check = _movie.find(element => element.id == id);
        return check;


    }

    async getMovieBy(elem) {
        console.log(`---> movies::getMovieBy = ${elem.value}`);

        return this.getMovies();
    }

    async removeMovie(id) {
       
        this.mgfl.delete(id);
        console.log(`---> movies::removeMovie = ${id}`);
        let _movie = await this.getMovies();
        const index = _movie.findIndex(element => element.id == id);
        if (index != -1) _movie.splice(index, 1);
        return index;
    }

   async createMovie(req) {
    this.mgfl.insert(req)
        console.log(`---> movies::removeMovie = ${req.id}`);
        let _movie = await this.getMovies();
        _movie.push(req);
        return req;
    }

    async updateMovie(req) {
        console.log(`---> movies::updateMovie`);

        const movie = this.getMovieById(req.id);
        if (typeof movie != 'undefined') {
            this.removeMovie(req.id);
            this.createMovie(req);
        }
        return movie;
    }

}

export default new Movies()