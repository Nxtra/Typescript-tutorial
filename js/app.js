//activate when you finished exercise 3
var jsonParser = new JSONParser();
jsonParser.getJSON("http://localhost:8090/db", function (data) {
    var library = Library.fromJSON(data);
    var itemContainer = document.getElementById("items");
    library.getBooksAndMovies().forEach(function (item) { return item.render(itemContainer); });
});
//# sourceMappingURL=app.js.map