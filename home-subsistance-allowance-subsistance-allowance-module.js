(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-subsistance-allowance-subsistance-allowance-module"],{

/***/ "./src/app/home/subsistance-allowance/allowance-auto/allowance-auto.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/allowance-auto/allowance-auto.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Subsistence Allowance Auto\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br/>\r\n    <div class=\"row\">\r\n<div class=\"col-md-6\">\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Subsistence Month\r\n    </label>\r\n    <div class=\"col-sm-8\">\r\n      <select class=\"custom-select \">\r\n        <option>Select state</option>\r\n        <option>Type 1</option>\r\n        <option>Type 2</option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Select Type\r\n    </label>\r\n    <div class=\"col-sm-8\">\r\n      <select class=\"custom-select \">\r\n        <option>Select state</option>\r\n        <option>Type 1</option>\r\n        <option>Type 2</option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n          <i class=\"text-danger\">*</i>\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-8\">\r\n        <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n            <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Date\r\n\r\n    </label>\r\n\r\n    <div class=\"input-group col-sm-8\">\r\n      <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n          <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"col-md-6\">\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Month\r\n    </label>\r\n    <div class=\"col-sm-8\">\r\n      <select class=\"custom-select \">\r\n        <option>Select state</option>\r\n        <option>Type 1</option>\r\n        <option>Type 2</option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Date\r\n\r\n    </label>\r\n\r\n    <div class=\"input-group col-sm-8\">\r\n      <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n          <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n    </label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n    </label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n    </div>\r\n  </div>\r\n</div>\r\n    </div>\r\n    <div class=\"row\">\r\n    <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n      <button type=\"\" class=\"btn btn-success\" >\r\n        <span class=\"fas fa-calculator\">Calculate</span>\r\n      </button>\r\n    </div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Description</th>\r\n          <th>Salary head</th>\r\n          <th>Amount</th>\r\n          <th>Sub Amount</th>\r\n          <th>Paid Days </th>\r\n          <th>Days Of Month</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th>1</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th>2</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th>3</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\" >\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-secondary \">\r\n          <span class=\"fas fa-window-close\"> Close</span>\r\n        </button>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/home/subsistance-allowance/allowance-auto/allowance-auto.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/allowance-auto/allowance-auto.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3Vic2lzdGFuY2UtYWxsb3dhbmNlL2FsbG93YW5jZS1hdXRvL2FsbG93YW5jZS1hdXRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/subsistance-allowance/allowance-auto/allowance-auto.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/allowance-auto/allowance-auto.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AllowanceAutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowanceAutoComponent", function() { return AllowanceAutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllowanceAutoComponent = /** @class */ (function () {
    function AllowanceAutoComponent() {
    }
    AllowanceAutoComponent.prototype.ngOnInit = function () {
    };
    AllowanceAutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allowance-auto',
            template: __webpack_require__(/*! ./allowance-auto.component.html */ "./src/app/home/subsistance-allowance/allowance-auto/allowance-auto.component.html"),
            styles: [__webpack_require__(/*! ./allowance-auto.component.scss */ "./src/app/home/subsistance-allowance/allowance-auto/allowance-auto.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AllowanceAutoComponent);
    return AllowanceAutoComponent;
}());



/***/ }),

/***/ "./src/app/home/subsistance-allowance/allowance-manual/allowance-manual.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/allowance-manual/allowance-manual.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Subsistence Allowance Manual\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br/>\r\n    <div class=\"row\">\r\n<div class=\"col-md-6\">\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Subsistence Month\r\n    </label>\r\n    <div class=\"col-sm-8\">\r\n      <select class=\"custom-select \">\r\n        <option>Select state</option>\r\n        <option>Type 1</option>\r\n        <option>Type 2</option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Select Type\r\n    </label>\r\n    <div class=\"col-sm-8\">\r\n      <select class=\"custom-select \">\r\n        <option>Select state</option>\r\n        <option>Type 1</option>\r\n        <option>Type 2</option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n          <i class=\"text-danger\">*</i>\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-8\">\r\n        <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n            <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Date\r\n\r\n    </label>\r\n\r\n    <div class=\"input-group col-sm-8\">\r\n      <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n          <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"col-md-6\">\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Month\r\n    </label>\r\n    <div class=\"col-sm-8\">\r\n      <select class=\"custom-select \">\r\n        <option>Select state</option>\r\n        <option>Type 1</option>\r\n        <option>Type 2</option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Date\r\n\r\n    </label>\r\n\r\n    <div class=\"input-group col-sm-8\">\r\n      <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n          <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n    </label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n    </label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n    </div>\r\n  </div>\r\n</div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Description</th>\r\n          <th>Salary head</th>\r\n          <th>Amount</th>\r\n          <th>Sub Amount</th>\r\n          <th>Paid Days </th>\r\n          <th>Days Of Month</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th>1</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th>2</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th>3</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\" >\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-secondary \">\r\n          <span class=\"fas fa-window-close\"> Close</span>\r\n        </button>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/home/subsistance-allowance/allowance-manual/allowance-manual.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/allowance-manual/allowance-manual.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3Vic2lzdGFuY2UtYWxsb3dhbmNlL2FsbG93YW5jZS1tYW51YWwvYWxsb3dhbmNlLW1hbnVhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/subsistance-allowance/allowance-manual/allowance-manual.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/allowance-manual/allowance-manual.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AllowanceManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowanceManualComponent", function() { return AllowanceManualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllowanceManualComponent = /** @class */ (function () {
    function AllowanceManualComponent() {
    }
    AllowanceManualComponent.prototype.ngOnInit = function () {
    };
    AllowanceManualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allowance-manual',
            template: __webpack_require__(/*! ./allowance-manual.component.html */ "./src/app/home/subsistance-allowance/allowance-manual/allowance-manual.component.html"),
            styles: [__webpack_require__(/*! ./allowance-manual.component.scss */ "./src/app/home/subsistance-allowance/allowance-manual/allowance-manual.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AllowanceManualComponent);
    return AllowanceManualComponent;
}());



/***/ }),

/***/ "./src/app/home/subsistance-allowance/allowance-report/allowance-report.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/allowance-report/allowance-report.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n   Subsistence Allowance Report \r\n  </h4>\r\n  <div class=\"container\">\r\n    <br/>\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Report Type\r\n        </label>\r\n        <div class=\"col-sm-4\">\r\n          <select class=\"custom-select \">\r\n            <option>Select state</option>\r\n            <option>Type 1</option>\r\n            <option>Type 2</option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n              <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/subsistance-allowance/allowance-report/allowance-report.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/allowance-report/allowance-report.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3Vic2lzdGFuY2UtYWxsb3dhbmNlL2FsbG93YW5jZS1yZXBvcnQvYWxsb3dhbmNlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/subsistance-allowance/allowance-report/allowance-report.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/allowance-report/allowance-report.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AllowanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowanceReportComponent", function() { return AllowanceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllowanceReportComponent = /** @class */ (function () {
    function AllowanceReportComponent() {
    }
    AllowanceReportComponent.prototype.ngOnInit = function () {
    };
    AllowanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allowance-report',
            template: __webpack_require__(/*! ./allowance-report.component.html */ "./src/app/home/subsistance-allowance/allowance-report/allowance-report.component.html"),
            styles: [__webpack_require__(/*! ./allowance-report.component.scss */ "./src/app/home/subsistance-allowance/allowance-report/allowance-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AllowanceReportComponent);
    return AllowanceReportComponent;
}());



/***/ }),

/***/ "./src/app/home/subsistance-allowance/amount-setup/amount-setup.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/amount-setup/amount-setup.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Subsistence Allowance Amount Setup\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br/>\r\n   <div class=\"col-md-7 center\">\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Type\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Allowance\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Number Of Time Guilty\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Number Of Time Guilty\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Number Of time Guiltless\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Number Of time Guiltless\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Date\r\n    \r\n          </label>\r\n    \r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Note\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Note\">\r\n          </div>\r\n        </div>\r\n   </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\" >\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-info \">\r\n          <span class=\"ion ion-ios-refresh\"> Reset</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-secondary \">\r\n          <span class=\"fas fa-window-close\"> Close</span>\r\n        </button>\r\n      </div>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Code</th>\r\n            <th>Employee Name</th>\r\n            <th>Designation</th>\r\n            <th>Department</th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      </div>\r\n    |</div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/home/subsistance-allowance/amount-setup/amount-setup.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/amount-setup/amount-setup.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3Vic2lzdGFuY2UtYWxsb3dhbmNlL2Ftb3VudC1zZXR1cC9hbW91bnQtc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/subsistance-allowance/amount-setup/amount-setup.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/amount-setup/amount-setup.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AmountSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountSetupComponent", function() { return AmountSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmountSetupComponent = /** @class */ (function () {
    function AmountSetupComponent() {
    }
    AmountSetupComponent.prototype.ngOnInit = function () {
    };
    AmountSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amount-setup',
            template: __webpack_require__(/*! ./amount-setup.component.html */ "./src/app/home/subsistance-allowance/amount-setup/amount-setup.component.html"),
            styles: [__webpack_require__(/*! ./amount-setup.component.scss */ "./src/app/home/subsistance-allowance/amount-setup/amount-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AmountSetupComponent);
    return AmountSetupComponent;
}());



/***/ }),

/***/ "./src/app/home/subsistance-allowance/subsistance-allowance-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/subsistance-allowance-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: SubsistanceAllowanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubsistanceAllowanceRoutingModule", function() { return SubsistanceAllowanceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _allowance_report_allowance_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allowance-report/allowance-report.component */ "./src/app/home/subsistance-allowance/allowance-report/allowance-report.component.ts");
/* harmony import */ var _allowance_manual_allowance_manual_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allowance-manual/allowance-manual.component */ "./src/app/home/subsistance-allowance/allowance-manual/allowance-manual.component.ts");
/* harmony import */ var _allowance_auto_allowance_auto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allowance-auto/allowance-auto.component */ "./src/app/home/subsistance-allowance/allowance-auto/allowance-auto.component.ts");
/* harmony import */ var _amount_setup_amount_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./amount-setup/amount-setup.component */ "./src/app/home/subsistance-allowance/amount-setup/amount-setup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SubsistanceAllowanceRoutingModule = /** @class */ (function () {
    function SubsistanceAllowanceRoutingModule() {
    }
    SubsistanceAllowanceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'amount-setup', component: _amount_setup_amount_setup_component__WEBPACK_IMPORTED_MODULE_5__["AmountSetupComponent"] },
                    { path: 'allowance-auto', component: _allowance_auto_allowance_auto_component__WEBPACK_IMPORTED_MODULE_4__["AllowanceAutoComponent"] },
                    { path: 'allowance-manual', component: _allowance_manual_allowance_manual_component__WEBPACK_IMPORTED_MODULE_3__["AllowanceManualComponent"] },
                    { path: 'allowance-report', component: _allowance_report_allowance_report_component__WEBPACK_IMPORTED_MODULE_2__["AllowanceReportComponent"] }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SubsistanceAllowanceRoutingModule);
    return SubsistanceAllowanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/subsistance-allowance/subsistance-allowance.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/subsistance-allowance/subsistance-allowance.module.ts ***!
  \****************************************************************************/
/*! exports provided: SubsistanceAllowanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubsistanceAllowanceModule", function() { return SubsistanceAllowanceModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _subsistance_allowance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subsistance-allowance-routing.module */ "./src/app/home/subsistance-allowance/subsistance-allowance-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _amount_setup_amount_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./amount-setup/amount-setup.component */ "./src/app/home/subsistance-allowance/amount-setup/amount-setup.component.ts");
/* harmony import */ var _allowance_auto_allowance_auto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allowance-auto/allowance-auto.component */ "./src/app/home/subsistance-allowance/allowance-auto/allowance-auto.component.ts");
/* harmony import */ var _allowance_manual_allowance_manual_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allowance-manual/allowance-manual.component */ "./src/app/home/subsistance-allowance/allowance-manual/allowance-manual.component.ts");
/* harmony import */ var _allowance_report_allowance_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./allowance-report/allowance-report.component */ "./src/app/home/subsistance-allowance/allowance-report/allowance-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SubsistanceAllowanceModule = /** @class */ (function () {
    function SubsistanceAllowanceModule() {
    }
    SubsistanceAllowanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _amount_setup_amount_setup_component__WEBPACK_IMPORTED_MODULE_5__["AmountSetupComponent"],
                _allowance_auto_allowance_auto_component__WEBPACK_IMPORTED_MODULE_6__["AllowanceAutoComponent"],
                _allowance_manual_allowance_manual_component__WEBPACK_IMPORTED_MODULE_7__["AllowanceManualComponent"],
                _allowance_report_allowance_report_component__WEBPACK_IMPORTED_MODULE_8__["AllowanceReportComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _subsistance_allowance_routing_module__WEBPACK_IMPORTED_MODULE_3__["SubsistanceAllowanceRoutingModule"]
            ]
        })
    ], SubsistanceAllowanceModule);
    return SubsistanceAllowanceModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-subsistance-allowance-subsistance-allowance-module.js.map