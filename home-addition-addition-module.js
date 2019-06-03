(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-addition-addition-module"],{

/***/ "./src/app/home/addition/addition-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/addition/addition-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AdditionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionRoutingModule", function() { return AdditionRoutingModule; });
/* harmony import */ var _driver_bonus_driver_bonus_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-bonus/driver-bonus.component */ "./src/app/home/addition/driver-bonus/driver-bonus.component.ts");
/* harmony import */ var _employee_allowance_employee_allowance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-allowance/employee-allowance.component */ "./src/app/home/addition/employee-allowance/employee-allowance.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _driver_allowance_driver_allowance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver-allowance/driver-allowance.component */ "./src/app/home/addition/driver-allowance/driver-allowance.component.ts");
/* harmony import */ var _import_addition_import_addition_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import-addition/import-addition.component */ "./src/app/home/addition/import-addition/import-addition.component.ts");
/* harmony import */ var _process_import_process_import_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./process-import/process-import.component */ "./src/app/home/addition/process-import/process-import.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdditionRoutingModule = /** @class */ (function () {
    function AdditionRoutingModule() {
    }
    AdditionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'employee-allowance', component: _employee_allowance_employee_allowance_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeAllowanceComponent"] },
                    { path: 'driver-allowance', component: _driver_allowance_driver_allowance_component__WEBPACK_IMPORTED_MODULE_5__["DriverAllowanceComponent"] },
                    { path: 'driver-bonus', component: _driver_bonus_driver_bonus_component__WEBPACK_IMPORTED_MODULE_0__["DriverBonusComponent"] },
                    { path: 'import-addition', component: _import_addition_import_addition_component__WEBPACK_IMPORTED_MODULE_6__["ImportAdditionComponent"] },
                    { path: 'process-import', component: _process_import_process_import_component__WEBPACK_IMPORTED_MODULE_7__["ProcessImportComponent"] },
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AdditionRoutingModule);
    return AdditionRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/addition/addition.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/addition/addition.module.ts ***!
  \**************************************************/
/*! exports provided: AdditionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionModule", function() { return AdditionModule; });
/* harmony import */ var _addition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addition-routing.module */ "./src/app/home/addition/addition-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _employee_allowance_employee_allowance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-allowance/employee-allowance.component */ "./src/app/home/addition/employee-allowance/employee-allowance.component.ts");
/* harmony import */ var _driver_allowance_driver_allowance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver-allowance/driver-allowance.component */ "./src/app/home/addition/driver-allowance/driver-allowance.component.ts");
/* harmony import */ var _driver_bonus_driver_bonus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./driver-bonus/driver-bonus.component */ "./src/app/home/addition/driver-bonus/driver-bonus.component.ts");
/* harmony import */ var _import_addition_import_addition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./import-addition/import-addition.component */ "./src/app/home/addition/import-addition/import-addition.component.ts");
/* harmony import */ var _process_import_process_import_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./process-import/process-import.component */ "./src/app/home/addition/process-import/process-import.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AdditionModule = /** @class */ (function () {
    function AdditionModule() {
    }
    AdditionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _employee_allowance_employee_allowance_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeAllowanceComponent"],
                _driver_allowance_driver_allowance_component__WEBPACK_IMPORTED_MODULE_6__["DriverAllowanceComponent"],
                _driver_bonus_driver_bonus_component__WEBPACK_IMPORTED_MODULE_7__["DriverBonusComponent"],
                _import_addition_import_addition_component__WEBPACK_IMPORTED_MODULE_8__["ImportAdditionComponent"],
                _process_import_process_import_component__WEBPACK_IMPORTED_MODULE_9__["ProcessImportComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _addition_routing_module__WEBPACK_IMPORTED_MODULE_0__["AdditionRoutingModule"]
            ]
        })
    ], AdditionModule);
    return AdditionModule;
}());



/***/ }),

/***/ "./src/app/home/addition/driver-allowance/driver-allowance.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/addition/driver-allowance/driver-allowance.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"period\" class=\"col-md-3\">Period</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"period\" id=\"period\" class=\"form-control\">\r\n                <option value=\"\">Select Period</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"salaryHead\" class=\"col-md-3\">Salary Head</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"salaryHead\" id=\"salaryHead\" class=\"form-control\">\r\n                <option value=\"\">Select Salary Head</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"department\" class=\"col-md-3\">Department</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"department\" id=\"department\" class=\"form-control\">\r\n                <option value=\"\">Select Department</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"reference\" class=\"col-md-3\">Reference</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" name=\"reference\" id=\"reference\" class=\"form-control\" placeholder=\"Reference\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary center\">Show Data</button>\r\n      </div>\r\n    </form>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Salary Head</th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td></td>\r\n              <td><button class=\"\">Select</button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card mb-4 center\">\r\n          <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                Per page: &nbsp;\r\n                <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                  class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                  <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col\">\r\n                <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                  class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body py-0\">\r\n            <div class=\"row\">\r\n              <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Code</th>\r\n                    <th>Employee Name</th>\r\n                    <th>Designation</th>\r\n                    <th>Department</th>\r\n                    <th>Amount</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td><button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"row\">\r\n              <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n              </div>\r\n              <div class=\"col-sm pt-3\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                  (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                </ngb-pagination>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- / Pagination -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing center\">\r\n        <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n        <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/addition/driver-allowance/driver-allowance.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/addition/driver-allowance/driver-allowance.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRkaXRpb24vZHJpdmVyLWFsbG93YW5jZS9kcml2ZXItYWxsb3dhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/addition/driver-allowance/driver-allowance.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/addition/driver-allowance/driver-allowance.component.ts ***!
  \******************************************************************************/
/*! exports provided: DriverAllowanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverAllowanceComponent", function() { return DriverAllowanceComponent; });
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


var DriverAllowanceComponent = /** @class */ (function (_super) {
    __extends(DriverAllowanceComponent, _super);
    function DriverAllowanceComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Driver Allowance";
        return _this;
    }
    DriverAllowanceComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    DriverAllowanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-driver-allowance',
            template: __webpack_require__(/*! ./driver-allowance.component.html */ "./src/app/home/addition/driver-allowance/driver-allowance.component.html"),
            styles: [__webpack_require__(/*! ./driver-allowance.component.scss */ "./src/app/home/addition/driver-allowance/driver-allowance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DriverAllowanceComponent);
    return DriverAllowanceComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/addition/driver-bonus/driver-bonus.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/addition/driver-bonus/driver-bonus.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"period\" class=\"col-md-3\">Period</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"period\" id=\"period\" class=\"form-control\">\r\n                <option value=\"\">Select Period</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"bonusType\" class=\"col-md-3\">Bonus Type</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"bonusType\" id=\"bonusType\" class=\"form-control\">\r\n                <option value=\"\">Select Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"bonusHead\" class=\"col-md-3\">Bonus Head</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"bonusHead\" id=\"bonusHead\" class=\"form-control\">\r\n                <option value=\"\">Select Bonus Head</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary center\">Show Data</button>\r\n      </div>\r\n    </form>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Code</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Designation</th>\r\n                  <th>Department</th>\r\n                  <th>Amount</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td><button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing center\">\r\n        <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n        <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/addition/driver-bonus/driver-bonus.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/addition/driver-bonus/driver-bonus.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRkaXRpb24vZHJpdmVyLWJvbnVzL2RyaXZlci1ib251cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/addition/driver-bonus/driver-bonus.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/addition/driver-bonus/driver-bonus.component.ts ***!
  \**********************************************************************/
/*! exports provided: DriverBonusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverBonusComponent", function() { return DriverBonusComponent; });
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


var DriverBonusComponent = /** @class */ (function (_super) {
    __extends(DriverBonusComponent, _super);
    function DriverBonusComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Driver Festival Bonus Info";
        return _this;
    }
    DriverBonusComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    DriverBonusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-bonus',
            template: __webpack_require__(/*! ./driver-bonus.component.html */ "./src/app/home/addition/driver-bonus/driver-bonus.component.html"),
            styles: [__webpack_require__(/*! ./driver-bonus.component.scss */ "./src/app/home/addition/driver-bonus/driver-bonus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DriverBonusComponent);
    return DriverBonusComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/addition/employee-allowance/employee-allowance.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/home/addition/employee-allowance/employee-allowance.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"period\" class=\"col-md-3\">Period</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"period\" id=\"period\" class=\"form-control\">\r\n                <option value=\"\">Select Period</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"salaryHead\" class=\"col-md-3\">Salary Head</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"salaryHead\" id=\"salaryHead\" class=\"form-control\">\r\n                <option value=\"\">Select Salary Head</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"department\" class=\"col-md-3\">Department</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"department\" id=\"department\" class=\"form-control\">\r\n                <option value=\"\">Select Department</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"reference\" class=\"col-md-3\">Reference</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" name=\"reference\" id=\"reference\" class=\"form-control\" placeholder=\"Reference\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary center\">Show Data</button>\r\n      </div>\r\n    </form>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Salary Head</th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td></td>\r\n              <td><button class=\"\">Select</button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card mb-4 center\">\r\n          <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                Per page: &nbsp;\r\n                <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                  class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                  <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col\">\r\n                <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                  class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body py-0\">\r\n            <div class=\"row\">\r\n              <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Code</th>\r\n                    <th>Employee Name</th>\r\n                    <th>Designation</th>\r\n                    <th>Department</th>\r\n                    <th>Amount</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td><button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"row\">\r\n              <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n              </div>\r\n              <div class=\"col-sm pt-3\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                  (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                </ngb-pagination>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- / Pagination -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing center\">\r\n        <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n        <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/addition/employee-allowance/employee-allowance.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/addition/employee-allowance/employee-allowance.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRkaXRpb24vZW1wbG95ZWUtYWxsb3dhbmNlL2VtcGxveWVlLWFsbG93YW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/addition/employee-allowance/employee-allowance.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/addition/employee-allowance/employee-allowance.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EmployeeAllowanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAllowanceComponent", function() { return EmployeeAllowanceComponent; });
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


var EmployeeAllowanceComponent = /** @class */ (function (_super) {
    __extends(EmployeeAllowanceComponent, _super);
    function EmployeeAllowanceComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Employee Allowance";
        return _this;
    }
    EmployeeAllowanceComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    EmployeeAllowanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-allowance',
            template: __webpack_require__(/*! ./employee-allowance.component.html */ "./src/app/home/addition/employee-allowance/employee-allowance.component.html"),
            styles: [__webpack_require__(/*! ./employee-allowance.component.scss */ "./src/app/home/addition/employee-allowance/employee-allowance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeAllowanceComponent);
    return EmployeeAllowanceComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/addition/import-addition/import-addition.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/home/addition/import-addition/import-addition.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"period\" class=\"col-md-3\">Period</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"period\" id=\"period\" class=\"form-control\">\r\n                <option value=\"\">Select Period</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"salaryHead\" class=\"col-md-3\">Salary Head</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"salaryHead\" id=\"salaryHead\" class=\"form-control\">\r\n                <option value=\"\">Select Salary Head</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"file\" class=\"col-md-3\">File</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"file\" name=\"file\" id=\"file\" class=\"form-control-file\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <button class=\"btn btn-success center\"><span class=\"fas fa-file-upload\"></span> Upload</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/addition/import-addition/import-addition.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/addition/import-addition/import-addition.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRkaXRpb24vaW1wb3J0LWFkZGl0aW9uL2ltcG9ydC1hZGRpdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/addition/import-addition/import-addition.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/addition/import-addition/import-addition.component.ts ***!
  \****************************************************************************/
/*! exports provided: ImportAdditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportAdditionComponent", function() { return ImportAdditionComponent; });
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

var ImportAdditionComponent = /** @class */ (function () {
    function ImportAdditionComponent() {
        this.title = "Upload Employee Salary";
    }
    ImportAdditionComponent.prototype.ngOnInit = function () {
    };
    ImportAdditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-addition',
            template: __webpack_require__(/*! ./import-addition.component.html */ "./src/app/home/addition/import-addition/import-addition.component.html"),
            styles: [__webpack_require__(/*! ./import-addition.component.scss */ "./src/app/home/addition/import-addition/import-addition.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImportAdditionComponent);
    return ImportAdditionComponent;
}());



/***/ }),

/***/ "./src/app/home/addition/process-import/process-import.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home/addition/process-import/process-import.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n    <div class=\"card-body\">\r\n      <form action=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 center\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"period\" class=\"col-md-3\">Period</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"period\" id=\"period\" class=\"form-control\">\r\n                  <option value=\"\">Select Period</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"salaryHead\" class=\"col-md-3\">Salary Head</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"salaryHead\" id=\"salaryHead\" class=\"form-control\">\r\n                  <option value=\"\">Select Salary Head</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <button class=\"btn btn-primary center\"> Show Data</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      \r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Code</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Designation</th>\r\n                  <th>Amount</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td><button class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing center\">\r\n        <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n        <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/addition/process-import/process-import.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/addition/process-import/process-import.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRkaXRpb24vcHJvY2Vzcy1pbXBvcnQvcHJvY2Vzcy1pbXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/addition/process-import/process-import.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/addition/process-import/process-import.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProcessImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessImportComponent", function() { return ProcessImportComponent; });
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


var ProcessImportComponent = /** @class */ (function (_super) {
    __extends(ProcessImportComponent, _super);
    function ProcessImportComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Process Employee Imported Salary";
        return _this;
    }
    ProcessImportComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    ProcessImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-process-import',
            template: __webpack_require__(/*! ./process-import.component.html */ "./src/app/home/addition/process-import/process-import.component.html"),
            styles: [__webpack_require__(/*! ./process-import.component.scss */ "./src/app/home/addition/process-import/process-import.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcessImportComponent);
    return ProcessImportComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ })

}]);
//# sourceMappingURL=home-addition-addition-module.js.map