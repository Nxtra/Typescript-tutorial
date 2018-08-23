(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message, null, 2) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

let service: Service = new Service();
console.log(service.getAllGrades());

let newStudent: Student = new Student("Jo", 4);
service.addStudent(newStudent);

console.log(service.getAllGrades());


