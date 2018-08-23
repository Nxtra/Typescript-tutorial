var Library = /** @class */ (function () {
    function Library(books, movies) {
        this.books = new Array();
        this.movies = new Array();
        this.books = books;
        this.movies = movies;
    }
    Library.fromJSON = function (data) {
        var movies = new Array();
        for (var _i = 0, _a = data.movies; _i < _a.length; _i++) {
            var movie = _a[_i];
            movies.push(Movie.fromJson(movie));
        }
        var books = data.books.map(function (book) { return Book.fromJson(book); });
        //let movies:Array<Movie> = data.movies.map(movie => Movie.fromJson(movie));
        return new Library(books, movies);
    };
    Library.prototype.getBooksAndMovies = function () {
        var items = [];
        this.books.forEach(function (book) { return items.push(book); });
        this.movies.forEach(function (movie) { return items.push(movie); });
        //let items = (<Item[]>this.books).concat(this.movies);
        return items;
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map