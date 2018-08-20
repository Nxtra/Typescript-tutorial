var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Movie = /** @class */ (function (_super) {
    __extends(Movie, _super);
    function Movie(title, genre, description, age, name) {
        return _super.call(this, title, genre, description) || this;
    }
    Movie.prototype.render = function (element) {
        var article = document.createElement("article");
        var text = this.name + ", " + this.age + ", " + this.genre + ", " + this.description;
        article.innerText = text;
        element.appendChild(article);
    };
    return Movie;
}(Item));
//# sourceMappingURL=Movie.js.map