class Library {


    public books: Array<Book> = [];
    public movies: Array<Movie> = [];

    constructor(books: Array<Book>, movies:Array<Movie>){
        this.books = books;
        this.movies = movies;
    }

    static fromJSON(data: any) : Library {

        let books:Array<Book> = data.books.map(book => Book.fromJson(book));
        let movies:Array<Movie> = data.movies.map(movie => Movie.fromJson(movie));

        return new Library(books, movies)
    }

    getBooksAndMovies(): Array<Item> {
        let items: Array<Item> = [];
        this.books.forEach(book => items.push(book));
        this.movies.forEach(movie => items.push(movie));

        //let items = (<Item[]>this.books).concat(this.movies);
        return items;
    }


}
