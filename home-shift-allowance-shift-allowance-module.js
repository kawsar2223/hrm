(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-shift-allowance-shift-allowance-module"],{

/***/ "./src/app/home/shift-allowance/assign/assign.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/shift-allowance/assign/assign.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    {{title}}\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"col-md-8 center\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"branch\" class=\"col-md-3\">Office Branch</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"branch\" id=\"branch\" class=\"form-control\">\r\n              <option value=\"\">Select Branch</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"location\" class=\"col-md-3\">Location</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"location\" id=\"location\" class=\"form-control\">\r\n              <option value=\"\">Select Location</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"unit\" class=\"col-md-3\">Unit</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"unit\" id=\"unit\" class=\"form-control\">\r\n              <option value=\"\">Select Unit</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"line\" class=\"col-md-3\">Line</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"line\" id=\"line\" class=\"form-control\">\r\n              <option value=\"\">Select Line</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"department\" class=\"col-md-3\">Department</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"department\" id=\"department\" class=\"form-control\">\r\n              <option value=\"\">Select Department</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"designation\" class=\"col-md-3\">Designation</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"designation\" id=\"designation\" class=\"form-control\">\r\n              <option value=\"\">Select Designation</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"empId\" class=\"col-md-3\">Employee Id</label>\r\n          <div class=\"col-md-6\">\r\n            <input type=\"text\" name=\"employeeId\" id=\"empId\" class=\"form-control\" placeholder=\"Employee Id\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"demo-inline-spacing center\">\r\n            <button class=\"btn btn-primary\"><span class=\"fas fa-save\"></span> Get Employee(s)</button>\r\n            <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Refresh</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"card mb-4\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <table class=\"table table-hover table-striped mb-2\">\r\n        <thead>\r\n          <tr>\r\n            <th>\r\n              <input type=\"checkbox\"> Select\r\n            </th>\r\n            <th>Code</th>\r\n            <th>Employee Name</th>\r\n            <th>Department</th>\r\n            <th>Designation</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"tempItems.length==0\">\r\n            <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n          </tr>\r\n          <tr *ngFor=\"let item of tempItems\">\r\n            <td><input type=\"checkbox\"></td>\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td><button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- Pagination -->\r\n      <div class=\"card-body py-0\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm text-sm-left text-center pt-3\">\r\n            <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n          </div>\r\n          <div class=\"col-sm pt-3\">\r\n            <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n              (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n            </ngb-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- / Pagination -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <p>Total Employee (s) : 0</p>\r\n      </div>\r\n      <div class=\"demo-inline-spacing col-md-6\">\r\n        <button class=\"btn btn-primary\">Save</button>\r\n        <button class=\"btn btn-secondary\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/shift-allowance/assign/assign.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/shift-allowance/assign/assign.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2hpZnQtYWxsb3dhbmNlL2Fzc2lnbi9hc3NpZ24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/shift-allowance/assign/assign.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/shift-allowance/assign/assign.component.ts ***!
  \*****************************************************************/
/*! exports provided: AssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignComponent", function() { return AssignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/paginate */ "./src/app/shared/paginate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssignComponent = /** @class */ (function (_super) {
    __extends(AssignComponent, _super);
    function AssignComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Assign Shift Allowance";
        return _this;
    }
    AssignComponent.prototype.ngOnInit = function () {
        this.items = [1, 2];
        this.update();
    };
    AssignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign',
            template: __webpack_require__(/*! ./assign.component.html */ "./src/app/home/shift-allowance/assign/assign.component.html"),
            styles: [__webpack_require__(/*! ./assign.component.scss */ "./src/app/home/shift-allowance/assign/assign.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssignComponent);
    return AssignComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/shift-allowance/auto-payment/auto-payment.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/home/shift-allowance/auto-payment/auto-payment.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    {{title}}\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"branch\" class=\"col-md-3\">Office Branch</label>\r\n            <div class=\"col-md-6\">\r\n              <select name=\"branch\" id=\"branch\" class=\"form-control\">\r\n                <option value=\"\">Select Branch</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"department\" class=\"col-md-3\">Department</label>\r\n            <div class=\"col-md-6\">\r\n              <select name=\"department\" id=\"department\" class=\"form-control\">\r\n                <option value=\"\">Select Department</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"unit\" class=\"col-md-3\">Unit</label>\r\n            <div class=\"col-md-6\">\r\n              <select name=\"unit\" id=\"unit\" class=\"form-control\">\r\n                <option value=\"\">Select Unit</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"line\" class=\"col-md-3\">Line</label>\r\n            <div class=\"col-md-6\">\r\n              <select name=\"line\" id=\"line\" class=\"form-control\">\r\n                <option value=\"\">Select Line</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"type\" class=\"col-md-3\">Select Type</label>\r\n            <div class=\"col-md-6\">\r\n              <select name=\"type\" id=\"type\" class=\"form-control\">\r\n                <option value=\"\">Select type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"date\" class=\"col-md-3\">Payment Date</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"date\" id=\"date\" class=\"form-control\">\r\n              <option value=\"\">Select Payment Date</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"month\" class=\"col-md-3\">Payment Month</label>\r\n            <div class=\"col-md-6\">\r\n              <select name=\"month\" id=\"month\" class=\"form-control\">\r\n                <option value=\"\">Select Payment Month</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"salaryHead\" class=\"col-md-3\">Salary Head</label>\r\n            <div class=\"col-md-6\">\r\n              <select name=\"salaryHead\" id=\"salaryHead\" class=\"form-control\">\r\n                <option value=\"\">Select Salary Head</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-3\" for=\"startDate\">Shift Start Date</label>\r\n            <div class=\"input-group col-md-6\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"startDate\" name=\"startDate\" ngbDatepicker\r\n                [(ngModel)]=\"startDate\" [displayMonths]=\"1\" #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-3\" for=\"endtDate\">Shift End Date</label>\r\n            <div class=\"input-group col-md-6\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"endtDate\" name=\"endtDate\" ngbDatepicker\r\n                [(ngModel)]=\"endtDate\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"empCode\" class=\"col-md-3\">Employee Code</label>\r\n            <div class=\"col-md-6\">\r\n              <input type=\"text\" name=\"employeeCode\" id=\"empCode\" class=\"form-control\" placeholder=\"Employee Code\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <button class=\"btn btn-primary\">Show Data</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"card mb-4\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <table class=\"table table-hover table-striped mb-2\">\r\n        <thead>\r\n          <tr>\r\n            <th>Code</th>\r\n            <th>Employee Name</th>\r\n            <th>Designation</th>\r\n            <th>Department</th>\r\n            <th>Shift Amount</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"tempItems.length==0\">\r\n            <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n          </tr>\r\n          <tr *ngFor=\"let item of tempItems\">\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td><button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- Pagination -->\r\n      <div class=\"card-body py-0\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm text-sm-left text-center pt-3\">\r\n            <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n          </div>\r\n          <div class=\"col-sm pt-3\">\r\n            <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n              (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n            </ngb-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- / Pagination -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <p>Total Employee (s) : 0</p>\r\n      </div>\r\n      <div class=\"demo-inline-spacing col-md-6\">\r\n        <button class=\"btn btn-success\">Save</button>\r\n        <button class=\"btn btn-secondary\">Close</button>\r\n        <button class=\"btn btn-info\"><span class=\"fas fa-plus\"></span> Add Row</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/shift-allowance/auto-payment/auto-payment.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/home/shift-allowance/auto-payment/auto-payment.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2hpZnQtYWxsb3dhbmNlL2F1dG8tcGF5bWVudC9hdXRvLXBheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/shift-allowance/auto-payment/auto-payment.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/shift-allowance/auto-payment/auto-payment.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AutoPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoPaymentComponent", function() { return AutoPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/paginate */ "./src/app/shared/paginate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoPaymentComponent = /** @class */ (function (_super) {
    __extends(AutoPaymentComponent, _super);
    function AutoPaymentComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Shift Allowance Payment Auto";
        return _this;
    }
    AutoPaymentComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    AutoPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auto-payment',
            template: __webpack_require__(/*! ./auto-payment.component.html */ "./src/app/home/shift-allowance/auto-payment/auto-payment.component.html"),
            styles: [__webpack_require__(/*! ./auto-payment.component.scss */ "./src/app/home/shift-allowance/auto-payment/auto-payment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AutoPaymentComponent);
    return AutoPaymentComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/shift-allowance/manual-payment/manual-payment.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/home/shift-allowance/manual-payment/manual-payment.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    {{title}}\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"col-md-8 center\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"type\" class=\"col-md-3\">Select Type</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"type\" id=\"type\" class=\"form-control\">\r\n              <option value=\"\">Select type</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"date\" class=\"col-md-3\">Payment Date</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"date\" id=\"date\" class=\"form-control\">\r\n              <option value=\"\">Select Payment Date</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"month\" class=\"col-md-3\">Payment Month</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"month\" id=\"month\" class=\"form-control\">\r\n              <option value=\"\">Select Payment Month</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"salaryHead\" class=\"col-md-3\">Salary Head</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"salaryHead\" id=\"salaryHead\" class=\"form-control\">\r\n              <option value=\"\">Select Salary Head</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"card mb-4\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <table class=\"table table-hover table-striped mb-2\">\r\n        <thead>\r\n          <tr>\r\n            <th>Code</th>\r\n            <th>Employee Name</th>\r\n            <th>Designation</th>\r\n            <th>Department</th>\r\n            <th>Shift Amount</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"tempItems.length==0\">\r\n            <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n          </tr>\r\n          <tr *ngFor=\"let item of tempItems\">\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td><button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- Pagination -->\r\n      <div class=\"card-body py-0\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm text-sm-left text-center pt-3\">\r\n            <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n          </div>\r\n          <div class=\"col-sm pt-3\">\r\n            <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n              (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n            </ngb-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- / Pagination -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <p>Total Employee (s) : 0</p>\r\n      </div>\r\n      <div class=\"demo-inline-spacing col-md-6\">\r\n        <button class=\"btn btn-success\">Save</button>\r\n        <button class=\"btn btn-secondary\">Close</button>\r\n        <button class=\"btn btn-info\"><span class=\"fas fa-plus\"></span> Add Row</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/shift-allowance/manual-payment/manual-payment.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/home/shift-allowance/manual-payment/manual-payment.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2hpZnQtYWxsb3dhbmNlL21hbnVhbC1wYXltZW50L21hbnVhbC1wYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/shift-allowance/manual-payment/manual-payment.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/shift-allowance/manual-payment/manual-payment.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ManualPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPaymentComponent", function() { return ManualPaymentComponent; });
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/paginate */ "./src/app/shared/paginate.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManualPaymentComponent = /** @class */ (function (_super) {
    __extends(ManualPaymentComponent, _super);
    function ManualPaymentComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Shift Allowance Payment Manual";
        return _this;
    }
    ManualPaymentComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    ManualPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manual-payment',
            template: __webpack_require__(/*! ./manual-payment.component.html */ "./src/app/home/shift-allowance/manual-payment/manual-payment.component.html"),
            styles: [__webpack_require__(/*! ./manual-payment.component.scss */ "./src/app/home/shift-allowance/manual-payment/manual-payment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManualPaymentComponent);
    return ManualPaymentComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/shift-allowance/setup/setup.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/shift-allowance/setup/setup.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      {{title}}\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <form action=\"\">\r\n        <div class=\"col-md-8 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"empType\" class=\"col-md-3\">Employee Type</label>\r\n            <div class=\"col-md-6\">\r\n              <select name=\"employeeType\" id=\"empType\" class=\"form-control\">\r\n                <option value=\"\">Select Employee Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"shiftName\" class=\"col-md-3\">Shift Name</label>\r\n            <div class=\"col-md-6\">\r\n              <select name=\"shiftName\" id=\"shiftName\" class=\"form-control\">\r\n                <option value=\"\">Select ShiftName</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"amount\" class=\"col-md-3\">Amount</label>\r\n            <div class=\"col-md-6\">\r\n              <input type=\"number\" name=\"amount\" id=\"amount\" class=\"form-control\" placeholder=\"Ammount\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"demo-inline-spacing center\">\r\n              <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n              <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n              <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n  \r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <table class=\"table table-hover table-striped mb-2\">\r\n          <thead>\r\n            <tr>\r\n              <th>Shift Name</th>\r\n              <th>Employee Type</th>\r\n              <th>Amount</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"tempItems.length==0\">\r\n              <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n            </tr>\r\n            <tr *ngFor=\"let item of tempItems\">\r\n              <td>{{item}}</td>\r\n              <td>{{item}}</td>\r\n              <td>{{item}}</td>\r\n              <td>\r\n                <button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <!-- Pagination -->\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/shift-allowance/setup/setup.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home/shift-allowance/setup/setup.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2hpZnQtYWxsb3dhbmNlL3NldHVwL3NldHVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/shift-allowance/setup/setup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/shift-allowance/setup/setup.component.ts ***!
  \***************************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/paginate */ "./src/app/shared/paginate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetupComponent = /** @class */ (function (_super) {
    __extends(SetupComponent, _super);
    function SetupComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Shift Allowance Setup";
        return _this;
    }
    SetupComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    SetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/home/shift-allowance/setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.scss */ "./src/app/home/shift-allowance/setup/setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SetupComponent);
    return SetupComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/shift-allowance/shift-allowance-report/shift-allowance-report.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/home/shift-allowance/shift-allowance-report/shift-allowance-report.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      {{title}}\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <form action=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7 center\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"type\" class=\"col-md-3\">Report Type</label>\r\n              <div class=\"col-md-6\">\r\n                <select name=\"type\" id=\"type\" class=\"form-control\">\r\n                  <option value=\"\">Select Type</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <button class=\"btn btn-success center\"><span class=\"fas fa-file-download\"></span> Generate Report</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/shift-allowance/shift-allowance-report/shift-allowance-report.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/home/shift-allowance/shift-allowance-report/shift-allowance-report.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2hpZnQtYWxsb3dhbmNlL3NoaWZ0LWFsbG93YW5jZS1yZXBvcnQvc2hpZnQtYWxsb3dhbmNlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/shift-allowance/shift-allowance-report/shift-allowance-report.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/home/shift-allowance/shift-allowance-report/shift-allowance-report.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ShiftAllowanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftAllowanceReportComponent", function() { return ShiftAllowanceReportComponent; });
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

var ShiftAllowanceReportComponent = /** @class */ (function () {
    function ShiftAllowanceReportComponent() {
        this.title = "Shift Allowance Report";
    }
    ShiftAllowanceReportComponent.prototype.ngOnInit = function () {
    };
    ShiftAllowanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shift-allowance-report',
            template: __webpack_require__(/*! ./shift-allowance-report.component.html */ "./src/app/home/shift-allowance/shift-allowance-report/shift-allowance-report.component.html"),
            styles: [__webpack_require__(/*! ./shift-allowance-report.component.scss */ "./src/app/home/shift-allowance/shift-allowance-report/shift-allowance-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShiftAllowanceReportComponent);
    return ShiftAllowanceReportComponent;
}());



/***/ }),

/***/ "./src/app/home/shift-allowance/shift-allowance-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/shift-allowance/shift-allowance-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ShiftAllowanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftAllowanceRoutingModule", function() { return ShiftAllowanceRoutingModule; });
/* harmony import */ var _manual_payment_manual_payment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual-payment/manual-payment.component */ "./src/app/home/shift-allowance/manual-payment/manual-payment.component.ts");
/* harmony import */ var _auto_payment_auto_payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-payment/auto-payment.component */ "./src/app/home/shift-allowance/auto-payment/auto-payment.component.ts");
/* harmony import */ var _assign_assign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign/assign.component */ "./src/app/home/shift-allowance/assign/assign.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setup/setup.component */ "./src/app/home/shift-allowance/setup/setup.component.ts");
/* harmony import */ var _shift_allowance_report_shift_allowance_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shift-allowance-report/shift-allowance-report.component */ "./src/app/home/shift-allowance/shift-allowance-report/shift-allowance-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ShiftAllowanceRoutingModule = /** @class */ (function () {
    function ShiftAllowanceRoutingModule() {
    }
    ShiftAllowanceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'setup', component: _setup_setup_component__WEBPACK_IMPORTED_MODULE_6__["SetupComponent"] },
                    { path: 'assign', component: _assign_assign_component__WEBPACK_IMPORTED_MODULE_2__["AssignComponent"] },
                    { path: 'auto-payment', component: _auto_payment_auto_payment_component__WEBPACK_IMPORTED_MODULE_1__["AutoPaymentComponent"] },
                    { path: 'manual-payment', component: _manual_payment_manual_payment_component__WEBPACK_IMPORTED_MODULE_0__["ManualPaymentComponent"] },
                    { path: 'shift-allowance-report', component: _shift_allowance_report_shift_allowance_report_component__WEBPACK_IMPORTED_MODULE_7__["ShiftAllowanceReportComponent"] }
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ]
        })
    ], ShiftAllowanceRoutingModule);
    return ShiftAllowanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/shift-allowance/shift-allowance.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/shift-allowance/shift-allowance.module.ts ***!
  \****************************************************************/
/*! exports provided: ShiftAllowanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftAllowanceModule", function() { return ShiftAllowanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shift_allowance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shift-allowance-routing.module */ "./src/app/home/shift-allowance/shift-allowance-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setup/setup.component */ "./src/app/home/shift-allowance/setup/setup.component.ts");
/* harmony import */ var _assign_assign_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assign/assign.component */ "./src/app/home/shift-allowance/assign/assign.component.ts");
/* harmony import */ var _auto_payment_auto_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auto-payment/auto-payment.component */ "./src/app/home/shift-allowance/auto-payment/auto-payment.component.ts");
/* harmony import */ var _manual_payment_manual_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manual-payment/manual-payment.component */ "./src/app/home/shift-allowance/manual-payment/manual-payment.component.ts");
/* harmony import */ var _shift_allowance_report_shift_allowance_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shift-allowance-report/shift-allowance-report.component */ "./src/app/home/shift-allowance/shift-allowance-report/shift-allowance-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ShiftAllowanceModule = /** @class */ (function () {
    function ShiftAllowanceModule() {
    }
    ShiftAllowanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _setup_setup_component__WEBPACK_IMPORTED_MODULE_5__["SetupComponent"],
                _assign_assign_component__WEBPACK_IMPORTED_MODULE_6__["AssignComponent"],
                _auto_payment_auto_payment_component__WEBPACK_IMPORTED_MODULE_7__["AutoPaymentComponent"],
                _manual_payment_manual_payment_component__WEBPACK_IMPORTED_MODULE_8__["ManualPaymentComponent"],
                _shift_allowance_report_shift_allowance_report_component__WEBPACK_IMPORTED_MODULE_9__["ShiftAllowanceReportComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shift_allowance_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShiftAllowanceRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ]
        })
    ], ShiftAllowanceModule);
    return ShiftAllowanceModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-shift-allowance-shift-allowance-module.js.map