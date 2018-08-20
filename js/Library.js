var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
        var matrix = new Movie("Matrix", "thriller", "tell em some", 16, "PG");
        var mobyDick = new Book("Moby Dick", new Author("Herman Malville"), "Drama", "About a big fish");
        this.items.push(matrix);
        this.items.push(mobyDick);
    }
    Library.fromJSON = function (data) {
        // todo Initialise the two arrays with the external json resource
        return null;
    };
    Library.prototype.publishItems = function () {
        var itemContainer = document.getElementById("items");
        this.items.forEach(function (item) { return item.render(itemContainer); });
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map