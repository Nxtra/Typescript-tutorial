var Library = /** @class */ (function () {
    // static books:Array<Book>;
    // static movies:Array<Movie>;
    function Library(books, movies) {
        this.books = books;
        this.movies = movies;
    }
    Library.fromJSON = function (data) {
        var books = data.books.map(function (val) { return Book.fromJSON(val); });
        var movies = data.movies.map(function (val) { return Movie.fromJSON(val); });
        return new Library(books, movies);
    };
    Library.prototype.getAll = function () {
        this.items = this.books.concat(this.movies);
        return this.items;
    };
    Library.prototype.addMovie = function () {
        var movie = new Movie("default", "default", "default", 1, "default");
        this.items.push(movie);
        var itemContainer = document.getElementById("items");
        itemContainer.innerHTML = "";
        this.items.forEach(function (movie) { return movie.render(itemContainer); });
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map