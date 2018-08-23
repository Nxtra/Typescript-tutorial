class Movie extends Item implements Rating{
    age: number;
    name: string;

    constructor(title: string, genre: string, description: string, age: number, name: string){
        super(title, genre, description)
        this.age = age;
        this.name = name;
    }

    render(element: HTMLElement) {
        let item: HTMLElement = document.createElement("item");
        item.innerHTML = `<h2>${this.name}</h2><h2>${this.age}</h2><h2>${this.genre}</h2><h2>${this.description}</h2>`;
        element.appendChild(item);

    }

}