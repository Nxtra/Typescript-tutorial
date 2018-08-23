class Library {

    items:Array<Item>;
    // static books:Array<Book>;
    // static movies:Array<Movie>;

    constructor(public books: Array<Book>,public movies:Array<Movie>){

    }

    static fromJSON(data: any) : Library {
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books,movies);
    }
    getAll(): Array<Item> {
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }

    addMovie(): void{
        let movie:  Movie = new Movie("default","default","default", 1,"default")
        this.items.push(movie);
        let itemContainer: HTMLElement = document.getElementById("items");
        itemContainer.innerHTML="";
        this.items.forEach(movie => movie.render(itemContainer))
    }
}