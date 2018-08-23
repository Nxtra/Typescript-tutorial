class Book extends Item {

    author:Author;
    constructor(title:string,author:Author,genre:string,description:string){
        super(title,genre,description)
        this.author = author;
    }


    render(element: HTMLElement) {
        let item: HTMLElement = document.createElement("item");
        item.innerHTML = `<h2>${this.title}</h2><h2>${this.author.name}</h2><h2>${this.genre}</h2><h2>${this.description}</h2>`;
        element.appendChild(item);

    }
}