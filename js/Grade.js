var Grade = /** @class */ (function () {
    function Grade(points, course, student) {
        this._points = points;
        this._course = course;
        this._student = student;
    }
    Object.defineProperty(Grade.prototype, "points", {
        get: function () {
            return this._points;
        },
        set: function (value) {
            this._points = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grade.prototype, "course", {
        get: function () {
            return this._course;
        },
        set: function (value) {
            this._course = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grade.prototype, "student", {
        get: function () {
            return this._student;
        },
        set: function (value) {
            this._student = value;
        },
        enumerable: true,
        configurable: true
    });
    return Grade;
}());
//# sourceMappingURL=Grade.js.map