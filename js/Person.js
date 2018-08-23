var Person = /** @class */ (function () {
    function Person(name, id) {
        this._name = name;
        this._id = id;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
//# sourceMappingURL=Person.js.map