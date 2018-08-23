var jsonParser = new JSONParser();
jsonParser.getJSON("http://localhost:8080/db", function (data) {
    var library = Library.fromJSON(data);
    var itemContainer = document.getElementById("items");
    library.getAll().forEach(function (item) { return item.render(itemContainer); });
});
//# sourceMappingURL=app.js.map