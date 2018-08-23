var Course = /** @class */ (function () {
    function Course(courseName, teacher) {
        this._studentList = [];
        this._courseName = courseName;
        this._teacher = teacher;
    }
    Object.defineProperty(Course.prototype, "teacher", {
        get: function () {
            return this._teacher;
        },
        set: function (value) {
            this._teacher = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "studentList", {
        get: function () {
            return this._studentList;
        },
        set: function (value) {
            this._studentList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "courseName", {
        get: function () {
            return this._courseName;
        },
        set: function (value) {
            this._courseName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Course;
}());
//# sourceMappingURL=Course.js.map