(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message, null, 2) : message) + '<br />';
        }
        else {
            logger.innerHTML += message + '<br />';
        }
    };
})();
var service = new Service();
console.log(service.getAllGrades());
var newStudent = new Student("Jo", 4);
service.addStudent(newStudent);
console.log(service.getAllGrades());
//# sourceMappingURL=app.js.map