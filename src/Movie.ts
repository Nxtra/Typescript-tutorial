class Movie extends Item implements Rating{
    age: number;
    name: string;

    constructor(title: string, genre: string, description: string, age: number, name: string){
        super(title, genre, description)
    }

    render(element: HTMLElement) {
        let article: HTMLElement = document.createElement("article");
        let text: string = `${this.name}, ${this.age}, ${this.genre}, ${this.description}`;
        article.innerText = text;

        element.appendChild(article);

    }

}