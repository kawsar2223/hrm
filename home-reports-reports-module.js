(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-reports-reports-module"],{

/***/ "./src/app/home/reports/asset-under-emp/asset-under-emp.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/home/reports/asset-under-emp/asset-under-emp.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Asset Under Employee Report\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n      <form>\r\n        <!--Employee Code-->\r\n        <div class=\"form-group row \">\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\">Employee Code</label>\r\n          <div class=\"col-sm-5\">\r\n            <select class=\"form-control\">\r\n              <option>Select Report Type</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Code\">\r\n          </div>\r\n          <button type=\"button\" class=\"btn icon-btn btn-outline-primary\">\r\n            <span class=\"fas fa-search\"></span>\r\n          </button>\r\n        </div>\r\n        <!--Button-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n          <div class=\"demo-inline-spacing mt-3\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/reports/asset-under-emp/asset-under-emp.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/home/reports/asset-under-emp/asset-under-emp.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9hc3NldC11bmRlci1lbXAvYXNzZXQtdW5kZXItZW1wLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/reports/asset-under-emp/asset-under-emp.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/home/reports/asset-under-emp/asset-under-emp.component.ts ***!
  \***************************************************************************/
/*! exports provided: AssetUnderEmpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetUnderEmpComponent", function() { return AssetUnderEmpComponent; });
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

var AssetUnderEmpComponent = /** @class */ (function () {
    function AssetUnderEmpComponent() {
    }
    AssetUnderEmpComponent.prototype.ngOnInit = function () {
    };
    AssetUnderEmpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-under-emp',
            template: __webpack_require__(/*! ./asset-under-emp.component.html */ "./src/app/home/reports/asset-under-emp/asset-under-emp.component.html"),
            styles: [__webpack_require__(/*! ./asset-under-emp.component.scss */ "./src/app/home/reports/asset-under-emp/asset-under-emp.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssetUnderEmpComponent);
    return AssetUnderEmpComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/bank-account/bank-account.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/reports/bank-account/bank-account.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Bank Account Report\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n      <form>\r\n        <!--Report Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\">Report Type</label>\r\n          <div class=\"col-sm-9\">\r\n            <select class=\"form-control\">\r\n              <option>Select Report Type</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Button-->\r\n        <div class=\"form-group row\">\r\n          <div class=\"demo-inline-spacing mt-3 center\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/reports/bank-account/bank-account.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/reports/bank-account/bank-account.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9iYW5rLWFjY291bnQvYmFuay1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/reports/bank-account/bank-account.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/reports/bank-account/bank-account.component.ts ***!
  \*********************************************************************/
/*! exports provided: BankAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccountComponent", function() { return BankAccountComponent; });
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

var BankAccountComponent = /** @class */ (function () {
    function BankAccountComponent() {
    }
    BankAccountComponent.prototype.ngOnInit = function () {
    };
    BankAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank-account',
            template: __webpack_require__(/*! ./bank-account.component.html */ "./src/app/home/reports/bank-account/bank-account.component.html"),
            styles: [__webpack_require__(/*! ./bank-account.component.scss */ "./src/app/home/reports/bank-account/bank-account.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BankAccountComponent);
    return BankAccountComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/bank-advice/bank-advice.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/reports/bank-advice/bank-advice.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        Bank Advice\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Report Name-->\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-3 text-sm-right\">Report Type</label>\r\n                  <div class=\"col-sm-7\">\r\n                      <select class=\"form-control\">\r\n                          <option>Select Report Type</option>\r\n                          <option>Option-1</option>\r\n                          <option>Option-2</option>\r\n                          <option>Option-3</option>\r\n                          <option>Option-4</option>\r\n                        </select>\r\n                  </div>\r\n                </div>\r\n              <!--Button-->\r\n                <div class=\"form-group row\">\r\n                    <div class=\"demo-inline-spacing mt-3 center\">\r\n                    <button type=\"submit\" class=\"btn btn-success\">\r\n                      <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n      </div>\r\n     \r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/home/reports/bank-advice/bank-advice.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/reports/bank-advice/bank-advice.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9iYW5rLWFkdmljZS9iYW5rLWFkdmljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/reports/bank-advice/bank-advice.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/reports/bank-advice/bank-advice.component.ts ***!
  \*******************************************************************/
/*! exports provided: BankAdviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAdviceComponent", function() { return BankAdviceComponent; });
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

var BankAdviceComponent = /** @class */ (function () {
    function BankAdviceComponent() {
    }
    BankAdviceComponent.prototype.ngOnInit = function () {
    };
    BankAdviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank-advice',
            template: __webpack_require__(/*! ./bank-advice.component.html */ "./src/app/home/reports/bank-advice/bank-advice.component.html"),
            styles: [__webpack_require__(/*! ./bank-advice.component.scss */ "./src/app/home/reports/bank-advice/bank-advice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BankAdviceComponent);
    return BankAdviceComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/basic-information/basic-information.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/reports/basic-information/basic-information.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center\">\r\n        Basic Information Report\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <form>\r\n      <!--Button-->\r\n        <div class=\"form-group row\">\r\n            <div class=\"demo-inline-spacing mt-3 center\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-eye\"></span> View </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n     \r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/home/reports/basic-information/basic-information.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/reports/basic-information/basic-information.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9iYXNpYy1pbmZvcm1hdGlvbi9iYXNpYy1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/reports/basic-information/basic-information.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/reports/basic-information/basic-information.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInformationComponent", function() { return BasicInformationComponent; });
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

var BasicInformationComponent = /** @class */ (function () {
    function BasicInformationComponent() {
    }
    BasicInformationComponent.prototype.ngOnInit = function () {
    };
    BasicInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-information',
            template: __webpack_require__(/*! ./basic-information.component.html */ "./src/app/home/reports/basic-information/basic-information.component.html"),
            styles: [__webpack_require__(/*! ./basic-information.component.scss */ "./src/app/home/reports/basic-information/basic-information.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicInformationComponent);
    return BasicInformationComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/employee-cv/employee-cv.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/reports/employee-cv/employee-cv.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        View Employee CV\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <form>\r\n      <!--Button-->\r\n        <div class=\"form-group row\">\r\n            <div class=\"demo-inline-spacing mt-3 center\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-eye\"></span> View Employee CV</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n     \r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/home/reports/employee-cv/employee-cv.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/reports/employee-cv/employee-cv.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9lbXBsb3llZS1jdi9lbXBsb3llZS1jdi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/reports/employee-cv/employee-cv.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/reports/employee-cv/employee-cv.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCvComponent", function() { return EmployeeCvComponent; });
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

var EmployeeCvComponent = /** @class */ (function () {
    function EmployeeCvComponent() {
    }
    EmployeeCvComponent.prototype.ngOnInit = function () {
    };
    EmployeeCvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-cv',
            template: __webpack_require__(/*! ./employee-cv.component.html */ "./src/app/home/reports/employee-cv/employee-cv.component.html"),
            styles: [__webpack_require__(/*! ./employee-cv.component.scss */ "./src/app/home/reports/employee-cv/employee-cv.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeCvComponent);
    return EmployeeCvComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/employee-loan/employee-loan.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/home/reports/employee-loan/employee-loan.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Employee Loan Report\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <form>\r\n        <!--Button-->\r\n        <div class=\"form-group row\">\r\n          <div class=\"demo-inline-spacing mt-3 center\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n  \r\n  \r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/home/reports/employee-loan/employee-loan.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/reports/employee-loan/employee-loan.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9lbXBsb3llZS1sb2FuL2VtcGxveWVlLWxvYW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/reports/employee-loan/employee-loan.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/reports/employee-loan/employee-loan.component.ts ***!
  \***********************************************************************/
/*! exports provided: EmployeeLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeLoanComponent", function() { return EmployeeLoanComponent; });
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

var EmployeeLoanComponent = /** @class */ (function () {
    function EmployeeLoanComponent() {
    }
    EmployeeLoanComponent.prototype.ngOnInit = function () {
    };
    EmployeeLoanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-loan',
            template: __webpack_require__(/*! ./employee-loan.component.html */ "./src/app/home/reports/employee-loan/employee-loan.component.html"),
            styles: [__webpack_require__(/*! ./employee-loan.component.scss */ "./src/app/home/reports/employee-loan/employee-loan.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeLoanComponent);
    return EmployeeLoanComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/fooding-own/fooding-own.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/reports/fooding-own/fooding-own.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        Fooding Own\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Salary year -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Year</label>\r\n                <div class=\"col-sm-7\">\r\n                  <select class=\"form-control\">\r\n                    <option>Select Year</option>\r\n                    <option>Option-1</option>\r\n                    <option>Option-2</option>\r\n                    <option>Option-3</option>\r\n                    <option>Option-4</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!--Button-->\r\n              <div class=\"form-group row\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/home/reports/fooding-own/fooding-own.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/reports/fooding-own/fooding-own.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9mb29kaW5nLW93bi9mb29kaW5nLW93bi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/reports/fooding-own/fooding-own.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/reports/fooding-own/fooding-own.component.ts ***!
  \*******************************************************************/
/*! exports provided: FoodingOwnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodingOwnComponent", function() { return FoodingOwnComponent; });
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

var FoodingOwnComponent = /** @class */ (function () {
    function FoodingOwnComponent() {
    }
    FoodingOwnComponent.prototype.ngOnInit = function () {
    };
    FoodingOwnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fooding-own',
            template: __webpack_require__(/*! ./fooding-own.component.html */ "./src/app/home/reports/fooding-own/fooding-own.component.html"),
            styles: [__webpack_require__(/*! ./fooding-own.component.scss */ "./src/app/home/reports/fooding-own/fooding-own.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FoodingOwnComponent);
    return FoodingOwnComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/in-out-own/in-out-own.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/reports/in-out-own/in-out-own.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    In Out Single Employee Report\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Start Date-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Start Date</label>\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                    #d1=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                      <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--End Date-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">End Date</label>\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" name=\"endDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"endDate\"\r\n                    #d2=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                      <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Button-->\r\n            <div class=\"form-group row\">\r\n              <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/reports/in-out-own/in-out-own.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/reports/in-out-own/in-out-own.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9pbi1vdXQtb3duL2luLW91dC1vd24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/reports/in-out-own/in-out-own.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/reports/in-out-own/in-out-own.component.ts ***!
  \*****************************************************************/
/*! exports provided: InOutOwnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InOutOwnComponent", function() { return InOutOwnComponent; });
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

var InOutOwnComponent = /** @class */ (function () {
    function InOutOwnComponent() {
    }
    InOutOwnComponent.prototype.ngOnInit = function () {
    };
    InOutOwnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-in-out-own',
            template: __webpack_require__(/*! ./in-out-own.component.html */ "./src/app/home/reports/in-out-own/in-out-own.component.html"),
            styles: [__webpack_require__(/*! ./in-out-own.component.scss */ "./src/app/home/reports/in-out-own/in-out-own.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InOutOwnComponent);
    return InOutOwnComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/payslip/payslip.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/reports/payslip/payslip.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n      PaySlip Report\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Salary Period -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Period</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select Period</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Button-->\r\n            <div class=\"form-group row\">\r\n              <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-eye\"></span> View </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/reports/payslip/payslip.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/reports/payslip/payslip.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9wYXlzbGlwL3BheXNsaXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/reports/payslip/payslip.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/reports/payslip/payslip.component.ts ***!
  \***********************************************************/
/*! exports provided: PayslipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayslipComponent", function() { return PayslipComponent; });
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

var PayslipComponent = /** @class */ (function () {
    function PayslipComponent() {
    }
    PayslipComponent.prototype.ngOnInit = function () {
    };
    PayslipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payslip',
            template: __webpack_require__(/*! ./payslip.component.html */ "./src/app/home/reports/payslip/payslip.component.html"),
            styles: [__webpack_require__(/*! ./payslip.component.scss */ "./src/app/home/reports/payslip/payslip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PayslipComponent);
    return PayslipComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/provident-fund/provident-fund.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/home/reports/provident-fund/provident-fund.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        Provident Fund Sheet Report\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Salary year -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Year</label>\r\n                <div class=\"col-sm-7\">\r\n                  <select class=\"form-control\">\r\n                    <option>Select Year</option>\r\n                    <option>Option-1</option>\r\n                    <option>Option-2</option>\r\n                    <option>Option-3</option>\r\n                    <option>Option-4</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!--Button-->\r\n              <div class=\"form-group row\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/home/reports/provident-fund/provident-fund.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/reports/provident-fund/provident-fund.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9wcm92aWRlbnQtZnVuZC9wcm92aWRlbnQtZnVuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/reports/provident-fund/provident-fund.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/reports/provident-fund/provident-fund.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProvidentFundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidentFundComponent", function() { return ProvidentFundComponent; });
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

var ProvidentFundComponent = /** @class */ (function () {
    function ProvidentFundComponent() {
    }
    ProvidentFundComponent.prototype.ngOnInit = function () {
    };
    ProvidentFundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provident-fund',
            template: __webpack_require__(/*! ./provident-fund.component.html */ "./src/app/home/reports/provident-fund/provident-fund.component.html"),
            styles: [__webpack_require__(/*! ./provident-fund.component.scss */ "./src/app/home/reports/provident-fund/provident-fund.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProvidentFundComponent);
    return ProvidentFundComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/reports-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/reports/reports-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _salary_report_salary_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salary-report/salary-report.component */ "./src/app/home/reports/salary-report/salary-report.component.ts");
/* harmony import */ var _bank_advice_bank_advice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-advice/bank-advice.component */ "./src/app/home/reports/bank-advice/bank-advice.component.ts");
/* harmony import */ var _salary_reconciliation_salary_reconciliation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salary-reconciliation/salary-reconciliation.component */ "./src/app/home/reports/salary-reconciliation/salary-reconciliation.component.ts");
/* harmony import */ var _salary_summary_salary_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salary-summary/salary-summary.component */ "./src/app/home/reports/salary-summary/salary-summary.component.ts");
/* harmony import */ var _basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-information/basic-information.component */ "./src/app/home/reports/basic-information/basic-information.component.ts");
/* harmony import */ var _payslip_payslip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payslip/payslip.component */ "./src/app/home/reports/payslip/payslip.component.ts");
/* harmony import */ var _employee_cv_employee_cv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee-cv/employee-cv.component */ "./src/app/home/reports/employee-cv/employee-cv.component.ts");
/* harmony import */ var _provident_fund_provident_fund_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./provident-fund/provident-fund.component */ "./src/app/home/reports/provident-fund/provident-fund.component.ts");
/* harmony import */ var _fooding_own_fooding_own_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fooding-own/fooding-own.component */ "./src/app/home/reports/fooding-own/fooding-own.component.ts");
/* harmony import */ var _in_out_own_in_out_own_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./in-out-own/in-out-own.component */ "./src/app/home/reports/in-out-own/in-out-own.component.ts");
/* harmony import */ var _asset_under_emp_asset_under_emp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./asset-under-emp/asset-under-emp.component */ "./src/app/home/reports/asset-under-emp/asset-under-emp.component.ts");
/* harmony import */ var _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bank-account/bank-account.component */ "./src/app/home/reports/bank-account/bank-account.component.ts");
/* harmony import */ var _salary_yearly_detail_salary_yearly_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./salary-yearly-detail/salary-yearly-detail.component */ "./src/app/home/reports/salary-yearly-detail/salary-yearly-detail.component.ts");
/* harmony import */ var _yearly_summary_yearly_summary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./yearly-summary/yearly-summary.component */ "./src/app/home/reports/yearly-summary/yearly-summary.component.ts");
/* harmony import */ var _employee_loan_employee_loan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./employee-loan/employee-loan.component */ "./src/app/home/reports/employee-loan/employee-loan.component.ts");
/* harmony import */ var _single_emp_salary_single_emp_salary_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./single-emp-salary/single-emp-salary.component */ "./src/app/home/reports/single-emp-salary/single-emp-salary.component.ts");
/* harmony import */ var _single_emp_leave_single_emp_leave_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./single-emp-leave/single-emp-leave.component */ "./src/app/home/reports/single-emp-leave/single-emp-leave.component.ts");
/* harmony import */ var _single_emp_increment_single_emp_increment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./single-emp-increment/single-emp-increment.component */ "./src/app/home/reports/single-emp-increment/single-emp-increment.component.ts");
/* harmony import */ var _single_emp_income_tax_single_emp_income_tax_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./single-emp-income-tax/single-emp-income-tax.component */ "./src/app/home/reports/single-emp-income-tax/single-emp-income-tax.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'salary-report', component: _salary_report_salary_report_component__WEBPACK_IMPORTED_MODULE_2__["SalaryReportComponent"] },
                    { path: 'bank-advice', component: _bank_advice_bank_advice_component__WEBPACK_IMPORTED_MODULE_3__["BankAdviceComponent"] },
                    { path: 'salary-reconciliation', component: _salary_reconciliation_salary_reconciliation_component__WEBPACK_IMPORTED_MODULE_4__["SalaryReconciliationComponent"] },
                    { path: 'salary-summary', component: _salary_summary_salary_summary_component__WEBPACK_IMPORTED_MODULE_5__["SalarySummaryComponent"] },
                    { path: 'basic-information', component: _basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_6__["BasicInformationComponent"] },
                    { path: 'payslip', component: _payslip_payslip_component__WEBPACK_IMPORTED_MODULE_7__["PayslipComponent"] },
                    { path: 'employee-cv', component: _employee_cv_employee_cv_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeCvComponent"] },
                    { path: 'provident-fund', component: _provident_fund_provident_fund_component__WEBPACK_IMPORTED_MODULE_9__["ProvidentFundComponent"] },
                    { path: 'fooding-own', component: _fooding_own_fooding_own_component__WEBPACK_IMPORTED_MODULE_10__["FoodingOwnComponent"] },
                    { path: 'in-out-own', component: _in_out_own_in_out_own_component__WEBPACK_IMPORTED_MODULE_11__["InOutOwnComponent"] },
                    { path: 'asset-under-emp', component: _asset_under_emp_asset_under_emp_component__WEBPACK_IMPORTED_MODULE_12__["AssetUnderEmpComponent"] },
                    { path: 'bank-account', component: _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_13__["BankAccountComponent"] },
                    { path: 'salary-yearly-detail', component: _salary_yearly_detail_salary_yearly_detail_component__WEBPACK_IMPORTED_MODULE_14__["SalaryYearlyDetailComponent"] },
                    { path: 'yearly-summary', component: _yearly_summary_yearly_summary_component__WEBPACK_IMPORTED_MODULE_15__["YearlySummaryComponent"] },
                    { path: 'employee-loan', component: _employee_loan_employee_loan_component__WEBPACK_IMPORTED_MODULE_16__["EmployeeLoanComponent"] },
                    { path: 'single-emp-salary', component: _single_emp_salary_single_emp_salary_component__WEBPACK_IMPORTED_MODULE_17__["SingleEmpSalaryComponent"] },
                    { path: 'single-emp-leave', component: _single_emp_leave_single_emp_leave_component__WEBPACK_IMPORTED_MODULE_18__["SingleEmpLeaveComponent"] },
                    { path: 'single-emp-increment', component: _single_emp_increment_single_emp_increment_component__WEBPACK_IMPORTED_MODULE_19__["SingleEmpIncrementComponent"] },
                    { path: 'single-emp-income-tax', component: _single_emp_income_tax_single_emp_income_tax_component__WEBPACK_IMPORTED_MODULE_20__["SingleEmpIncomeTaxComponent"] },
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/reports/reports.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/reports/reports.module.ts ***!
  \************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/home/reports/reports-routing.module.ts");
/* harmony import */ var _salary_report_salary_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salary-report/salary-report.component */ "./src/app/home/reports/salary-report/salary-report.component.ts");
/* harmony import */ var _bank_advice_bank_advice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bank-advice/bank-advice.component */ "./src/app/home/reports/bank-advice/bank-advice.component.ts");
/* harmony import */ var _salary_reconciliation_salary_reconciliation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./salary-reconciliation/salary-reconciliation.component */ "./src/app/home/reports/salary-reconciliation/salary-reconciliation.component.ts");
/* harmony import */ var _salary_summary_salary_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./salary-summary/salary-summary.component */ "./src/app/home/reports/salary-summary/salary-summary.component.ts");
/* harmony import */ var _basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic-information/basic-information.component */ "./src/app/home/reports/basic-information/basic-information.component.ts");
/* harmony import */ var _payslip_payslip_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payslip/payslip.component */ "./src/app/home/reports/payslip/payslip.component.ts");
/* harmony import */ var _employee_cv_employee_cv_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employee-cv/employee-cv.component */ "./src/app/home/reports/employee-cv/employee-cv.component.ts");
/* harmony import */ var _provident_fund_provident_fund_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./provident-fund/provident-fund.component */ "./src/app/home/reports/provident-fund/provident-fund.component.ts");
/* harmony import */ var _fooding_own_fooding_own_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fooding-own/fooding-own.component */ "./src/app/home/reports/fooding-own/fooding-own.component.ts");
/* harmony import */ var _in_out_own_in_out_own_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./in-out-own/in-out-own.component */ "./src/app/home/reports/in-out-own/in-out-own.component.ts");
/* harmony import */ var _asset_under_emp_asset_under_emp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./asset-under-emp/asset-under-emp.component */ "./src/app/home/reports/asset-under-emp/asset-under-emp.component.ts");
/* harmony import */ var _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bank-account/bank-account.component */ "./src/app/home/reports/bank-account/bank-account.component.ts");
/* harmony import */ var _salary_yearly_detail_salary_yearly_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./salary-yearly-detail/salary-yearly-detail.component */ "./src/app/home/reports/salary-yearly-detail/salary-yearly-detail.component.ts");
/* harmony import */ var _yearly_summary_yearly_summary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./yearly-summary/yearly-summary.component */ "./src/app/home/reports/yearly-summary/yearly-summary.component.ts");
/* harmony import */ var _employee_loan_employee_loan_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./employee-loan/employee-loan.component */ "./src/app/home/reports/employee-loan/employee-loan.component.ts");
/* harmony import */ var _single_emp_salary_single_emp_salary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./single-emp-salary/single-emp-salary.component */ "./src/app/home/reports/single-emp-salary/single-emp-salary.component.ts");
/* harmony import */ var _single_emp_leave_single_emp_leave_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./single-emp-leave/single-emp-leave.component */ "./src/app/home/reports/single-emp-leave/single-emp-leave.component.ts");
/* harmony import */ var _single_emp_increment_single_emp_increment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./single-emp-increment/single-emp-increment.component */ "./src/app/home/reports/single-emp-increment/single-emp-increment.component.ts");
/* harmony import */ var _single_emp_income_tax_single_emp_income_tax_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./single-emp-income-tax/single-emp-income-tax.component */ "./src/app/home/reports/single-emp-income-tax/single-emp-income-tax.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _salary_report_salary_report_component__WEBPACK_IMPORTED_MODULE_5__["SalaryReportComponent"],
                _bank_advice_bank_advice_component__WEBPACK_IMPORTED_MODULE_6__["BankAdviceComponent"],
                _salary_reconciliation_salary_reconciliation_component__WEBPACK_IMPORTED_MODULE_7__["SalaryReconciliationComponent"],
                _salary_summary_salary_summary_component__WEBPACK_IMPORTED_MODULE_8__["SalarySummaryComponent"],
                _basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_9__["BasicInformationComponent"],
                _payslip_payslip_component__WEBPACK_IMPORTED_MODULE_10__["PayslipComponent"],
                _employee_cv_employee_cv_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeCvComponent"],
                _provident_fund_provident_fund_component__WEBPACK_IMPORTED_MODULE_12__["ProvidentFundComponent"],
                _fooding_own_fooding_own_component__WEBPACK_IMPORTED_MODULE_13__["FoodingOwnComponent"],
                _in_out_own_in_out_own_component__WEBPACK_IMPORTED_MODULE_14__["InOutOwnComponent"],
                _asset_under_emp_asset_under_emp_component__WEBPACK_IMPORTED_MODULE_15__["AssetUnderEmpComponent"],
                _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_16__["BankAccountComponent"],
                _salary_yearly_detail_salary_yearly_detail_component__WEBPACK_IMPORTED_MODULE_17__["SalaryYearlyDetailComponent"],
                _yearly_summary_yearly_summary_component__WEBPACK_IMPORTED_MODULE_18__["YearlySummaryComponent"],
                _employee_loan_employee_loan_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeLoanComponent"],
                _single_emp_salary_single_emp_salary_component__WEBPACK_IMPORTED_MODULE_20__["SingleEmpSalaryComponent"],
                _single_emp_leave_single_emp_leave_component__WEBPACK_IMPORTED_MODULE_21__["SingleEmpLeaveComponent"],
                _single_emp_increment_single_emp_increment_component__WEBPACK_IMPORTED_MODULE_22__["SingleEmpIncrementComponent"],
                _single_emp_income_tax_single_emp_income_tax_component__WEBPACK_IMPORTED_MODULE_23__["SingleEmpIncomeTaxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReportsRoutingModule"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ }),

/***/ "./src/app/home/reports/salary-reconciliation/salary-reconciliation.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/reports/salary-reconciliation/salary-reconciliation.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        Salary Reconciliation\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Report Name-->\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-3 text-sm-right\">Report Type</label>\r\n                  <div class=\"col-sm-7\">\r\n                      <select class=\"form-control\">\r\n                          <option>Select Report Type</option>\r\n                          <option>Option-1</option>\r\n                          <option>Option-2</option>\r\n                          <option>Option-3</option>\r\n                          <option>Option-4</option>\r\n                        </select>\r\n                  </div>\r\n                </div>\r\n              <!--Button-->\r\n                <div class=\"form-group row\">\r\n                    <div class=\"demo-inline-spacing mt-3 center\">\r\n                    <button type=\"submit\" class=\"btn btn-success\">\r\n                      <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n             \r\n      </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/home/reports/salary-reconciliation/salary-reconciliation.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/reports/salary-reconciliation/salary-reconciliation.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9zYWxhcnktcmVjb25jaWxpYXRpb24vc2FsYXJ5LXJlY29uY2lsaWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/reports/salary-reconciliation/salary-reconciliation.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/home/reports/salary-reconciliation/salary-reconciliation.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SalaryReconciliationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryReconciliationComponent", function() { return SalaryReconciliationComponent; });
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

var SalaryReconciliationComponent = /** @class */ (function () {
    function SalaryReconciliationComponent() {
    }
    SalaryReconciliationComponent.prototype.ngOnInit = function () {
    };
    SalaryReconciliationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-reconciliation',
            template: __webpack_require__(/*! ./salary-reconciliation.component.html */ "./src/app/home/reports/salary-reconciliation/salary-reconciliation.component.html"),
            styles: [__webpack_require__(/*! ./salary-reconciliation.component.scss */ "./src/app/home/reports/salary-reconciliation/salary-reconciliation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryReconciliationComponent);
    return SalaryReconciliationComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/salary-report/salary-report.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/home/reports/salary-report/salary-report.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Salary Report\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n      <form>\r\n        <!--Report Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\">Report Type</label>\r\n          <div class=\"col-sm-7\">\r\n            <select class=\"form-control\">\r\n              <option>Select Report Type</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Button-->\r\n        <div class=\"form-group row\">\r\n          <div class=\"demo-inline-spacing mt-3 center\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/reports/salary-report/salary-report.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/reports/salary-report/salary-report.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9zYWxhcnktcmVwb3J0L3NhbGFyeS1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/reports/salary-report/salary-report.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/reports/salary-report/salary-report.component.ts ***!
  \***********************************************************************/
/*! exports provided: SalaryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryReportComponent", function() { return SalaryReportComponent; });
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

var SalaryReportComponent = /** @class */ (function () {
    function SalaryReportComponent() {
    }
    SalaryReportComponent.prototype.ngOnInit = function () {
    };
    SalaryReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-report',
            template: __webpack_require__(/*! ./salary-report.component.html */ "./src/app/home/reports/salary-report/salary-report.component.html"),
            styles: [__webpack_require__(/*! ./salary-report.component.scss */ "./src/app/home/reports/salary-report/salary-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryReportComponent);
    return SalaryReportComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/salary-summary/salary-summary.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/home/reports/salary-summary/salary-summary.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        Salary Summary\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Report Name-->\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-3 text-sm-right\">Report Type</label>\r\n                  <div class=\"col-sm-7\">\r\n                      <select class=\"form-control\">\r\n                          <option>Select Report Type</option>\r\n                          <option>Option-1</option>\r\n                          <option>Option-2</option>\r\n                          <option>Option-3</option>\r\n                          <option>Option-4</option>\r\n                        </select>\r\n                  </div>\r\n                </div>\r\n              <!--Button-->\r\n                <div class=\"form-group row\">\r\n                    <div class=\"demo-inline-spacing mt-3 center\">\r\n                    <button type=\"submit\" class=\"btn btn-success\">\r\n                      <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n      </div>\r\n     \r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/home/reports/salary-summary/salary-summary.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/reports/salary-summary/salary-summary.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9zYWxhcnktc3VtbWFyeS9zYWxhcnktc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/reports/salary-summary/salary-summary.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/reports/salary-summary/salary-summary.component.ts ***!
  \*************************************************************************/
/*! exports provided: SalarySummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalarySummaryComponent", function() { return SalarySummaryComponent; });
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

var SalarySummaryComponent = /** @class */ (function () {
    function SalarySummaryComponent() {
    }
    SalarySummaryComponent.prototype.ngOnInit = function () {
    };
    SalarySummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-summary',
            template: __webpack_require__(/*! ./salary-summary.component.html */ "./src/app/home/reports/salary-summary/salary-summary.component.html"),
            styles: [__webpack_require__(/*! ./salary-summary.component.scss */ "./src/app/home/reports/salary-summary/salary-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalarySummaryComponent);
    return SalarySummaryComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/salary-yearly-detail/salary-yearly-detail.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/home/reports/salary-yearly-detail/salary-yearly-detail.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Salary Sheet Section -108 Report\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Report Name-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Report Type</label>\r\n                <div class=\"col-sm-7\">\r\n                  <select class=\"form-control\">\r\n                    <option>Select Report Type</option>\r\n                    <option>Option-1</option>\r\n                    <option>Option-2</option>\r\n                    <option>Option-3</option>\r\n                    <option>Option-4</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!--Button-->\r\n              <div class=\"form-group row\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/home/reports/salary-yearly-detail/salary-yearly-detail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/home/reports/salary-yearly-detail/salary-yearly-detail.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9zYWxhcnkteWVhcmx5LWRldGFpbC9zYWxhcnkteWVhcmx5LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/reports/salary-yearly-detail/salary-yearly-detail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home/reports/salary-yearly-detail/salary-yearly-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SalaryYearlyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryYearlyDetailComponent", function() { return SalaryYearlyDetailComponent; });
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

var SalaryYearlyDetailComponent = /** @class */ (function () {
    function SalaryYearlyDetailComponent() {
    }
    SalaryYearlyDetailComponent.prototype.ngOnInit = function () {
    };
    SalaryYearlyDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-yearly-detail',
            template: __webpack_require__(/*! ./salary-yearly-detail.component.html */ "./src/app/home/reports/salary-yearly-detail/salary-yearly-detail.component.html"),
            styles: [__webpack_require__(/*! ./salary-yearly-detail.component.scss */ "./src/app/home/reports/salary-yearly-detail/salary-yearly-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryYearlyDetailComponent);
    return SalaryYearlyDetailComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/single-emp-income-tax/single-emp-income-tax.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-income-tax/single-emp-income-tax.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Single Employee Income Tax Report\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Salary Year-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Year</label>\r\n                <div class=\"col-sm-7\">\r\n                  <select class=\"form-control\">\r\n                    <option>Select Year</option>\r\n                    <option>Option-1</option>\r\n                    <option>Option-2</option>\r\n                    <option>Option-3</option>\r\n                    <option>Option-4</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!--Button-->\r\n              <div class=\"form-group row\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n      </div>\r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/home/reports/single-emp-income-tax/single-emp-income-tax.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-income-tax/single-emp-income-tax.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9zaW5nbGUtZW1wLWluY29tZS10YXgvc2luZ2xlLWVtcC1pbmNvbWUtdGF4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/reports/single-emp-income-tax/single-emp-income-tax.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-income-tax/single-emp-income-tax.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SingleEmpIncomeTaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleEmpIncomeTaxComponent", function() { return SingleEmpIncomeTaxComponent; });
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

var SingleEmpIncomeTaxComponent = /** @class */ (function () {
    function SingleEmpIncomeTaxComponent() {
    }
    SingleEmpIncomeTaxComponent.prototype.ngOnInit = function () {
    };
    SingleEmpIncomeTaxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-emp-income-tax',
            template: __webpack_require__(/*! ./single-emp-income-tax.component.html */ "./src/app/home/reports/single-emp-income-tax/single-emp-income-tax.component.html"),
            styles: [__webpack_require__(/*! ./single-emp-income-tax.component.scss */ "./src/app/home/reports/single-emp-income-tax/single-emp-income-tax.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleEmpIncomeTaxComponent);
    return SingleEmpIncomeTaxComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/single-emp-increment/single-emp-increment.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-increment/single-emp-increment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Single Employee Increment Report\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Salary Year-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Year</label>\r\n                <div class=\"col-sm-7\">\r\n                  <select class=\"form-control\">\r\n                    <option>Select Year</option>\r\n                    <option>Option-1</option>\r\n                    <option>Option-2</option>\r\n                    <option>Option-3</option>\r\n                    <option>Option-4</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!--Button-->\r\n              <div class=\"form-group row\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/home/reports/single-emp-increment/single-emp-increment.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-increment/single-emp-increment.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9zaW5nbGUtZW1wLWluY3JlbWVudC9zaW5nbGUtZW1wLWluY3JlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/reports/single-emp-increment/single-emp-increment.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-increment/single-emp-increment.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SingleEmpIncrementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleEmpIncrementComponent", function() { return SingleEmpIncrementComponent; });
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

var SingleEmpIncrementComponent = /** @class */ (function () {
    function SingleEmpIncrementComponent() {
    }
    SingleEmpIncrementComponent.prototype.ngOnInit = function () {
    };
    SingleEmpIncrementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-emp-increment',
            template: __webpack_require__(/*! ./single-emp-increment.component.html */ "./src/app/home/reports/single-emp-increment/single-emp-increment.component.html"),
            styles: [__webpack_require__(/*! ./single-emp-increment.component.scss */ "./src/app/home/reports/single-emp-increment/single-emp-increment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleEmpIncrementComponent);
    return SingleEmpIncrementComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/single-emp-leave/single-emp-leave.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-leave/single-emp-leave.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Single Employee Leave\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Period-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\"> Period</label>\r\n                <div class=\"col-sm-7\">\r\n                  <select class=\"form-control\">\r\n                    <option>Select Period</option>\r\n                    <option>Option-1</option>\r\n                    <option>Option-2</option>\r\n                    <option>Option-3</option>\r\n                    <option>Option-4</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!--Button-->\r\n              <div class=\"form-group row\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/home/reports/single-emp-leave/single-emp-leave.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-leave/single-emp-leave.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9zaW5nbGUtZW1wLWxlYXZlL3NpbmdsZS1lbXAtbGVhdmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/reports/single-emp-leave/single-emp-leave.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-leave/single-emp-leave.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SingleEmpLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleEmpLeaveComponent", function() { return SingleEmpLeaveComponent; });
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

var SingleEmpLeaveComponent = /** @class */ (function () {
    function SingleEmpLeaveComponent() {
    }
    SingleEmpLeaveComponent.prototype.ngOnInit = function () {
    };
    SingleEmpLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-emp-leave',
            template: __webpack_require__(/*! ./single-emp-leave.component.html */ "./src/app/home/reports/single-emp-leave/single-emp-leave.component.html"),
            styles: [__webpack_require__(/*! ./single-emp-leave.component.scss */ "./src/app/home/reports/single-emp-leave/single-emp-leave.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleEmpLeaveComponent);
    return SingleEmpLeaveComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/single-emp-salary/single-emp-salary.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-salary/single-emp-salary.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Single Employee Salary Report\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Report Name-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Period</label>\r\n                <div class=\"col-sm-7\">\r\n                  <select class=\"form-control\">\r\n                    <option>Select Period</option>\r\n                    <option>Option-1</option>\r\n                    <option>Option-2</option>\r\n                    <option>Option-3</option>\r\n                    <option>Option-4</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!--Button-->\r\n              <div class=\"form-group row\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/home/reports/single-emp-salary/single-emp-salary.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-salary/single-emp-salary.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy9zaW5nbGUtZW1wLXNhbGFyeS9zaW5nbGUtZW1wLXNhbGFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/reports/single-emp-salary/single-emp-salary.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/reports/single-emp-salary/single-emp-salary.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SingleEmpSalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleEmpSalaryComponent", function() { return SingleEmpSalaryComponent; });
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

var SingleEmpSalaryComponent = /** @class */ (function () {
    function SingleEmpSalaryComponent() {
    }
    SingleEmpSalaryComponent.prototype.ngOnInit = function () {
    };
    SingleEmpSalaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-emp-salary',
            template: __webpack_require__(/*! ./single-emp-salary.component.html */ "./src/app/home/reports/single-emp-salary/single-emp-salary.component.html"),
            styles: [__webpack_require__(/*! ./single-emp-salary.component.scss */ "./src/app/home/reports/single-emp-salary/single-emp-salary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleEmpSalaryComponent);
    return SingleEmpSalaryComponent;
}());



/***/ }),

/***/ "./src/app/home/reports/yearly-summary/yearly-summary.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/home/reports/yearly-summary/yearly-summary.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Yearly Summary Report\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Report Name-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Report Type</label>\r\n                <div class=\"col-sm-9\">\r\n                  <select class=\"form-control\">\r\n                    <option>Select Report Type</option>\r\n                    <option>Option-1</option>\r\n                    <option>Option-2</option>\r\n                    <option>Option-3</option>\r\n                    <option>Option-4</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!--Button-->\r\n              <div class=\"form-group row\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/home/reports/yearly-summary/yearly-summary.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/reports/yearly-summary/yearly-summary.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0cy95ZWFybHktc3VtbWFyeS95ZWFybHktc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/reports/yearly-summary/yearly-summary.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/reports/yearly-summary/yearly-summary.component.ts ***!
  \*************************************************************************/
/*! exports provided: YearlySummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearlySummaryComponent", function() { return YearlySummaryComponent; });
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

var YearlySummaryComponent = /** @class */ (function () {
    function YearlySummaryComponent() {
    }
    YearlySummaryComponent.prototype.ngOnInit = function () {
    };
    YearlySummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-yearly-summary',
            template: __webpack_require__(/*! ./yearly-summary.component.html */ "./src/app/home/reports/yearly-summary/yearly-summary.component.html"),
            styles: [__webpack_require__(/*! ./yearly-summary.component.scss */ "./src/app/home/reports/yearly-summary/yearly-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], YearlySummaryComponent);
    return YearlySummaryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-reports-reports-module.js.map