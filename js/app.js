var _this = this;
var jsonParser = new JSONParser();
var lib;
jsonParser.getJSON("http://localhost:8080/db", function (data) {
    lib = Library.fromJSON(data);
    var itemContainer = document.getElementById("items");
    lib.getAll().forEach(function (item) { return item.render(itemContainer); });
});
var addMovieButton = document.getElementById("add-movie-button");
addMovieButton.addEventListener("click", function (e) { return _this.lib.addMovie(); });
var addBookButton = document.getElementById("add-book-button");
addBookButton.addEventListener("click", function (e) { return _this.lib.addBook(); });
//# sourceMappingURL=app.js.map