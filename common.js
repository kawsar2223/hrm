(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/paginate.ts":
/*!************************************!*\
  !*** ./src/app/shared/paginate.ts ***!
  \************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
var Pagination = /** @class */ (function () {
    function Pagination() {
        this.perPage = 5;
        this.filterVal = '';
        this.currentPage = 1;
        this.totalItems = 0;
        this.sortBy = 'orderNo';
        this.sortDesc = true;
        this.searchKeys = ['name'];
        this.items = [];
        this.tempItems = [];
    }
    Pagination.prototype.ngOnInit = function () {
    };
    Object.defineProperty(Pagination.prototype, "totalPages", {
        get: function () {
            return Math.ceil(this.totalItems / this.perPage);
        },
        enumerable: true,
        configurable: true
    });
    Pagination.prototype.filterStatu = function (data) {
        var filter = this.filterVal.toLowerCase();
        var keys = ['statusText'];
        return !filter ?
            data.slice(0) :
            data.filter(function (d) {
                return Object.keys(d)
                    .filter(function (k) { return keys.includes(k); })
                    .map(function (k) { return String(d[k]); })
                    .join('|')
                    .toLowerCase()
                    .indexOf(filter) !== -1 || !filter;
            });
    };
    Pagination.prototype.filter = function (data) {
        var _this = this;
        var filter = this.filterVal.toLowerCase();
        return !filter ?
            data.slice(0) :
            data.filter(function (d) {
                return Object.keys(d)
                    .filter(function (k) { return _this.searchKeys.includes(k); })
                    .map(function (k) { return String(d[k]); })
                    .join('|')
                    .toLowerCase()
                    .indexOf(filter) !== -1 || !filter;
            });
    };
    Pagination.prototype.sort = function (data) {
        var _this = this;
        data.sort(function (a, b) {
            a = typeof (a[_this.sortBy]) === 'string' ? a[_this.sortBy].toUpperCase() : a[_this.sortBy];
            b = typeof (b[_this.sortBy]) === 'string' ? b[_this.sortBy].toUpperCase() : b[_this.sortBy];
            if (a < b) {
                return _this.sortDesc ? 1 : -1;
            }
            if (a > b) {
                return _this.sortDesc ? -1 : 1;
            }
            return 0;
        });
    };
    Pagination.prototype.update = function () {
        var data = this.filter(this.items);
        this.totalItems = data.length;
        this.sort(data);
        this.tempItems = this.paginate(data);
    };
    Pagination.prototype.paginate = function (data) {
        var perPage = parseInt(String(this.perPage), 10);
        var offset = (this.currentPage - 1) * perPage;
        return data.slice(offset, offset + perPage);
    };
    Pagination.prototype.changeStatus = function () {
        this.currentPage = 1;
        var data = this.filterStatu(this.items);
        this.totalItems = data.length;
        this.sort(data);
        this.tempItems = this.paginate(data);
    };
    return Pagination;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map