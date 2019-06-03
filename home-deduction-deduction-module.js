(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-deduction-deduction-module"],{

/***/ "./src/app/home/deduction/deduction-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/home/deduction/deduction-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DeductionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeductionRoutingModule", function() { return DeductionRoutingModule; });
/* harmony import */ var _loan_deduct_loan_deduct_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-deduct/loan-deduct.component */ "./src/app/home/deduction/loan-deduct/loan-deduct.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _salary_deduct_salary_deduct_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salary-deduct/salary-deduct.component */ "./src/app/home/deduction/salary-deduct/salary-deduct.component.ts");
/* harmony import */ var _lwp_deduct_lwp_deduct_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lwp-deduct/lwp-deduct.component */ "./src/app/home/deduction/lwp-deduct/lwp-deduct.component.ts");
/* harmony import */ var _other_deduct_other_deduct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-deduct/other-deduct.component */ "./src/app/home/deduction/other-deduct/other-deduct.component.ts");
/* harmony import */ var _import_deduction_import_deduction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./import-deduction/import-deduction.component */ "./src/app/home/deduction/import-deduction/import-deduction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DeductionRoutingModule = /** @class */ (function () {
    function DeductionRoutingModule() {
    }
    DeductionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'salary-deduct', component: _salary_deduct_salary_deduct_component__WEBPACK_IMPORTED_MODULE_4__["SalaryDeductComponent"] },
                    { path: 'loan-deduct', component: _loan_deduct_loan_deduct_component__WEBPACK_IMPORTED_MODULE_0__["LoanDeductComponent"] },
                    { path: 'lwp-deduct', component: _lwp_deduct_lwp_deduct_component__WEBPACK_IMPORTED_MODULE_5__["LwpDeductComponent"] },
                    { path: 'other-deduct', component: _other_deduct_other_deduct_component__WEBPACK_IMPORTED_MODULE_6__["OtherDeductComponent"] },
                    { path: 'import-deduction', component: _import_deduction_import_deduction_component__WEBPACK_IMPORTED_MODULE_7__["ImportDeductionComponent"] },
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DeductionRoutingModule);
    return DeductionRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/deduction/deduction.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/deduction/deduction.module.ts ***!
  \****************************************************/
/*! exports provided: DeductionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeductionModule", function() { return DeductionModule; });
/* harmony import */ var _deduction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deduction-routing.module */ "./src/app/home/deduction/deduction-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _salary_deduct_salary_deduct_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salary-deduct/salary-deduct.component */ "./src/app/home/deduction/salary-deduct/salary-deduct.component.ts");
/* harmony import */ var _loan_deduct_loan_deduct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loan-deduct/loan-deduct.component */ "./src/app/home/deduction/loan-deduct/loan-deduct.component.ts");
/* harmony import */ var _lwp_deduct_lwp_deduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lwp-deduct/lwp-deduct.component */ "./src/app/home/deduction/lwp-deduct/lwp-deduct.component.ts");
/* harmony import */ var _other_deduct_other_deduct_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./other-deduct/other-deduct.component */ "./src/app/home/deduction/other-deduct/other-deduct.component.ts");
/* harmony import */ var _import_deduction_import_deduction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./import-deduction/import-deduction.component */ "./src/app/home/deduction/import-deduction/import-deduction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DeductionModule = /** @class */ (function () {
    function DeductionModule() {
    }
    DeductionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_salary_deduct_salary_deduct_component__WEBPACK_IMPORTED_MODULE_5__["SalaryDeductComponent"], _loan_deduct_loan_deduct_component__WEBPACK_IMPORTED_MODULE_6__["LoanDeductComponent"], _lwp_deduct_lwp_deduct_component__WEBPACK_IMPORTED_MODULE_7__["LwpDeductComponent"], _other_deduct_other_deduct_component__WEBPACK_IMPORTED_MODULE_8__["OtherDeductComponent"], _import_deduction_import_deduction_component__WEBPACK_IMPORTED_MODULE_9__["ImportDeductionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                _deduction_routing_module__WEBPACK_IMPORTED_MODULE_0__["DeductionRoutingModule"]
            ]
        })
    ], DeductionModule);
    return DeductionModule;
}());



/***/ }),

/***/ "./src/app/home/deduction/import-deduction/import-deduction.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/deduction/import-deduction/import-deduction.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n    <div class=\"card-body\">\r\n      <form action=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 center\">\r\n            <p><b>Excel Format:</b> Code, Name, Designation, Amount</p>\r\n            <div class=\"form-group row\">\r\n              <label for=\"period\" class=\"col-md-3\">Period</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"period\" id=\"period\" class=\"form-control\">\r\n                  <option value=\"\">Select Period</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"salaryHead\" class=\"col-md-3\">Salary Head</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"salaryHead\" id=\"salaryHead\" class=\"form-control\">\r\n                  <option value=\"\">Select Salary Head</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"file\" class=\"col-md-3\">File</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"file\" name=\"file\" id=\"file\" class=\"form-control-file\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <button class=\"btn btn-success center\"><span class=\"fas fa-file-upload\"></span> Upload</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/deduction/import-deduction/import-deduction.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/deduction/import-deduction/import-deduction.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGVkdWN0aW9uL2ltcG9ydC1kZWR1Y3Rpb24vaW1wb3J0LWRlZHVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/deduction/import-deduction/import-deduction.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/deduction/import-deduction/import-deduction.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ImportDeductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportDeductionComponent", function() { return ImportDeductionComponent; });
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

var ImportDeductionComponent = /** @class */ (function () {
    function ImportDeductionComponent() {
        this.title = "Upload Employee Salary";
    }
    ImportDeductionComponent.prototype.ngOnInit = function () {
    };
    ImportDeductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-deduction',
            template: __webpack_require__(/*! ./import-deduction.component.html */ "./src/app/home/deduction/import-deduction/import-deduction.component.html"),
            styles: [__webpack_require__(/*! ./import-deduction.component.scss */ "./src/app/home/deduction/import-deduction/import-deduction.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImportDeductionComponent);
    return ImportDeductionComponent;
}());



/***/ }),

/***/ "./src/app/home/deduction/loan-deduct/loan-deduct.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/deduction/loan-deduct/loan-deduct.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n    <div class=\"card-body\">\r\n      <form action=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"period\" class=\"col-md-3\">Period</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"period\" id=\"period\" class=\"form-control\">\r\n                  <option value=\"\">Select Period</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"salaryHead\" class=\"col-md-3\">Salary Head</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"salaryHead\" id=\"salaryHead\" class=\"form-control\">\r\n                  <option value=\"\">Select Salary Head</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"department\" class=\"col-md-3\">Department</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"department\" id=\"department\" class=\"form-control\">\r\n                  <option value=\"\">Select Department</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"reference\" class=\"col-md-3\">Reference</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"text\" name=\"reference\" id=\"reference\" class=\"form-control\" placeholder=\"Reference\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <button class=\"btn btn-primary center\">Show Data</button>\r\n        </div>\r\n      </form>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Salary Head</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td></td>\r\n                <td><button class=\"\">Select</button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n          <div class=\"card mb-4 center\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  Per page: &nbsp;\r\n                  <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                    class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                    <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                    class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Code</th>\r\n                      <th>Employee Name</th>\r\n                      <th>Designation</th>\r\n                      <th>Department</th>\r\n                      <th>Amount</th>\r\n                      <th>Action</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td><button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- Pagination -->\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"demo-inline-spacing center\">\r\n          <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n          <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/deduction/loan-deduct/loan-deduct.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/deduction/loan-deduct/loan-deduct.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGVkdWN0aW9uL2xvYW4tZGVkdWN0L2xvYW4tZGVkdWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/deduction/loan-deduct/loan-deduct.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/deduction/loan-deduct/loan-deduct.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoanDeductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanDeductComponent", function() { return LoanDeductComponent; });
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


var LoanDeductComponent = /** @class */ (function (_super) {
    __extends(LoanDeductComponent, _super);
    function LoanDeductComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Employee Loan Deduct";
        return _this;
    }
    LoanDeductComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    LoanDeductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loan-deduct',
            template: __webpack_require__(/*! ./loan-deduct.component.html */ "./src/app/home/deduction/loan-deduct/loan-deduct.component.html"),
            styles: [__webpack_require__(/*! ./loan-deduct.component.scss */ "./src/app/home/deduction/loan-deduct/loan-deduct.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoanDeductComponent);
    return LoanDeductComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/deduction/lwp-deduct/lwp-deduct.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/deduction/lwp-deduct/lwp-deduct.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"period\" class=\"col-md-3\">Period</label>\r\n            <div class=\"col-md-7\">\r\n              <select name=\"period\" id=\"period\" class=\"form-control\">\r\n                <option value=\"\">Select Period</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"department\" class=\"col-md-3\">Department</label>\r\n            <div class=\"col-md-7\">\r\n              <select name=\"department\" id=\"department\" class=\"form-control\">\r\n                <option value=\"\">Select Department</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-3\" for=\"startDate\">Start Date</label>\r\n            <div class=\"input-group col-md-7\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"startDate\" name=\"startDate\" ngbDatepicker\r\n                [(ngModel)]=\"startDate\" [displayMonths]=\"1\" #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-3\" for=\"endDate\">End Date</label>\r\n            <div class=\"input-group col-md-7\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"endDate\" name=\"endtDate\" ngbDatepicker\r\n                [(ngModel)]=\"endDate\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary center\">Show Data</button>\r\n      </div>\r\n    </form>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Code</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Designation</th>\r\n                  <th>Department</th>\r\n                  <th>Amount</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td><button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing center\">\r\n        <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n        <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/deduction/lwp-deduct/lwp-deduct.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/deduction/lwp-deduct/lwp-deduct.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGVkdWN0aW9uL2x3cC1kZWR1Y3QvbHdwLWRlZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/deduction/lwp-deduct/lwp-deduct.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/deduction/lwp-deduct/lwp-deduct.component.ts ***!
  \*******************************************************************/
/*! exports provided: LwpDeductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LwpDeductComponent", function() { return LwpDeductComponent; });
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


var LwpDeductComponent = /** @class */ (function (_super) {
    __extends(LwpDeductComponent, _super);
    function LwpDeductComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Employee LWP Deduct";
        return _this;
    }
    LwpDeductComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    LwpDeductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lwp-deduct',
            template: __webpack_require__(/*! ./lwp-deduct.component.html */ "./src/app/home/deduction/lwp-deduct/lwp-deduct.component.html"),
            styles: [__webpack_require__(/*! ./lwp-deduct.component.scss */ "./src/app/home/deduction/lwp-deduct/lwp-deduct.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LwpDeductComponent);
    return LwpDeductComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/deduction/other-deduct/other-deduct.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/home/deduction/other-deduct/other-deduct.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"period\" class=\"col-md-3\">Period</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"period\" id=\"period\" class=\"form-control\">\r\n                <option value=\"\">Select Period</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"salaryHead\" class=\"col-md-3\">Salary Head</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"salaryHead\" id=\"salaryHead\" class=\"form-control\">\r\n                <option value=\"\">Select Salary Head</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"department\" class=\"col-md-3\">Department</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"department\" id=\"department\" class=\"form-control\">\r\n                <option value=\"\">Select Department</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"days\" class=\"col-md-3\">Days</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"number\" name=\"days\" id=\"days\" class=\"form-control\" placeholder=\"Days\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary center\">Show Data</button>\r\n      </div>\r\n    </form>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Code</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Designation</th>\r\n                  <th>Department</th>\r\n                  <th>Amount</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td><button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing center\">\r\n        <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n        <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/deduction/other-deduct/other-deduct.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/deduction/other-deduct/other-deduct.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGVkdWN0aW9uL290aGVyLWRlZHVjdC9vdGhlci1kZWR1Y3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/deduction/other-deduct/other-deduct.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/deduction/other-deduct/other-deduct.component.ts ***!
  \***********************************************************************/
/*! exports provided: OtherDeductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDeductComponent", function() { return OtherDeductComponent; });
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


var OtherDeductComponent = /** @class */ (function (_super) {
    __extends(OtherDeductComponent, _super);
    function OtherDeductComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Employee Other Deduct";
        return _this;
    }
    OtherDeductComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    OtherDeductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-other-deduct',
            template: __webpack_require__(/*! ./other-deduct.component.html */ "./src/app/home/deduction/other-deduct/other-deduct.component.html"),
            styles: [__webpack_require__(/*! ./other-deduct.component.scss */ "./src/app/home/deduction/other-deduct/other-deduct.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherDeductComponent);
    return OtherDeductComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/deduction/salary-deduct/salary-deduct.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/home/deduction/salary-deduct/salary-deduct.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n    <div class=\"card-body\">\r\n      <form action=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"period\" class=\"col-md-3\">Period</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"period\" id=\"period\" class=\"form-control\">\r\n                  <option value=\"\">Select Period</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"salaryHead\" class=\"col-md-3\">Salary Head</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"salaryHead\" id=\"salaryHead\" class=\"form-control\">\r\n                  <option value=\"\">Select Salary Head</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"department\" class=\"col-md-3\">Department</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"department\" id=\"department\" class=\"form-control\">\r\n                  <option value=\"\">Select Department</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"reference\" class=\"col-md-3\">Reference</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"text\" name=\"reference\" id=\"reference\" class=\"form-control\" placeholder=\"Reference\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <button class=\"btn btn-primary center\">Show Data</button>\r\n        </div>\r\n      </form>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Salary Head</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td></td>\r\n                <td><button class=\"\">Select</button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n          <div class=\"card mb-4 center\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  Per page: &nbsp;\r\n                  <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                    class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                    <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                    class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Code</th>\r\n                      <th>Employee Name</th>\r\n                      <th>Designation</th>\r\n                      <th>Department</th>\r\n                      <th>Amount</th>\r\n                      <th>Action</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td><button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- Pagination -->\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"demo-inline-spacing center\">\r\n          <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n          <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/deduction/salary-deduct/salary-deduct.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/deduction/salary-deduct/salary-deduct.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGVkdWN0aW9uL3NhbGFyeS1kZWR1Y3Qvc2FsYXJ5LWRlZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/deduction/salary-deduct/salary-deduct.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/deduction/salary-deduct/salary-deduct.component.ts ***!
  \*************************************************************************/
/*! exports provided: SalaryDeductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryDeductComponent", function() { return SalaryDeductComponent; });
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


var SalaryDeductComponent = /** @class */ (function (_super) {
    __extends(SalaryDeductComponent, _super);
    function SalaryDeductComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Employee Salary Deduct";
        return _this;
    }
    SalaryDeductComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    SalaryDeductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-deduct',
            template: __webpack_require__(/*! ./salary-deduct.component.html */ "./src/app/home/deduction/salary-deduct/salary-deduct.component.html"),
            styles: [__webpack_require__(/*! ./salary-deduct.component.scss */ "./src/app/home/deduction/salary-deduct/salary-deduct.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryDeductComponent);
    return SalaryDeductComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ })

}]);
//# sourceMappingURL=home-deduction-deduction-module.js.map