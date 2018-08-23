function printHelloName(person: string){

    let spanElement = document.getElementById("welcome-text");
    spanElement.innerHTML = "<h1>Hello " + person + "!</h1>";
}

let person = "Nick";

printHelloName(person);