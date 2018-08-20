function printHelloName(person: string){

    let spanElement = document.getElementById("welcome-text");
    spanElement.innerHTML = "Hello " + person + "!";
}

let person = "Nick";

printHelloName(person);