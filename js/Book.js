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
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(title, author, genre, description) {
        var _this = _super.call(this, title, genre, description) || this;
        _this.author = author;
        return _this;
    }
    Book.prototype.render = function (element) {
        var item = document.createElement("item");
        item.innerHTML = "<h2>" + this.title + "</h2><h2>" + this.author.name + "</h2><h2>" + this.genre + "</h2><h2>" + this.description + "</h2>";
        element.appendChild(item);
    };
    return Book;
}(Item));
//# sourceMappingURL=Book.js.map