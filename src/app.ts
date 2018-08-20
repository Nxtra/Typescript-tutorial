
 //activate when you finished exercise 3
let jsonParser = new JSONParser();

jsonParser.getJSON("http://localhost:8080/db", data => {

    let library:Library = Library.fromJSON(data);

    var itemContainer: HTMLElement = document.getElementById("items");
    library.getBooksAndMovies().forEach(item => item.render(itemContainer));

});