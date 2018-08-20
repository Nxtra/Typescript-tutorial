var Library = /** @class */ (function () {
    function Library(books, movies) {
        this.books = [];
        this.movies = [];
        this.books = books;
        this.movies = movies;
    }
    Library.fromJSON = function (data) {
        var books = data.books.map(function (book) { return Book.fromJson(book); });
        var movies = data.movies.map(function (movie) { return Movie.fromJson(movie); });
        return new Library(books, movies);
    };
    Library.prototype.getBooksAndMovies = function () {
        var allItems = [];
        allItems.concat(this.books);
        allItems.concat(this.movies);
        return allItems;
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map