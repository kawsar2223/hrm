(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-leave-leave-module"],{

/***/ "./src/app/home/leave/emp-leave-opening-balance/emp-leave-opening-balance.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/home/leave/emp-leave-opening-balance/emp-leave-opening-balance.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Employee Leave Opening Balance</h4>\r\n  <div class=\"card-body\">\r\n    <!--Row -->\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n        <!--Designation Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Department Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Job Location-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Job Location</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--From Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">From Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Year-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Year</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Year\">\r\n          </div>\r\n        </div>\r\n        <!--Leave Type-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Leave Type</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row m-auto\">\r\n      <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">\r\n          <span class=\"fas fa-edit\"></span> Get Edit</button>\r\n      </div>\r\n    </div>\r\n    <!--End 1st Row-->\r\n    <!--2nd Row-->\r\n    <div style=\"border: 1px solid lightgray;\">\r\n      <div class=\"row pt-3\">\r\n        <div class=\"col-6\">\r\n          <!--Employee Id-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                    <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Table-->\r\n\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <div class=\"table-responsive mb-4\">\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>ID</th>\r\n                    <th>Employee Name</th>\r\n                    <th>Department</th>\r\n                    <th>Designation</th>\r\n                    <th>Day(s)</th>\r\n                    <th>Note</th>\r\n                    <th>Action</th>\r\n\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"7\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td><button class=\"btn btn-danger\"> <span class=\"fas fa-trash\"></span></button></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- / Pagination -->\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-9 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"></span> Save</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"fas fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/emp-leave-opening-balance/emp-leave-opening-balance.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/home/leave/emp-leave-opening-balance/emp-leave-opening-balance.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvZW1wLWxlYXZlLW9wZW5pbmctYmFsYW5jZS9lbXAtbGVhdmUtb3BlbmluZy1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/leave/emp-leave-opening-balance/emp-leave-opening-balance.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/leave/emp-leave-opening-balance/emp-leave-opening-balance.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EmpLeaveOpeningBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpLeaveOpeningBalanceComponent", function() { return EmpLeaveOpeningBalanceComponent; });
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


var EmpLeaveOpeningBalanceComponent = /** @class */ (function (_super) {
    __extends(EmpLeaveOpeningBalanceComponent, _super);
    function EmpLeaveOpeningBalanceComponent() {
        return _super.call(this) || this;
    }
    EmpLeaveOpeningBalanceComponent.prototype.ngOnInit = function () {
        this.items = [1, 3];
        this.update;
    };
    EmpLeaveOpeningBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-leave-opening-balance',
            template: __webpack_require__(/*! ./emp-leave-opening-balance.component.html */ "./src/app/home/leave/emp-leave-opening-balance/emp-leave-opening-balance.component.html"),
            styles: [__webpack_require__(/*! ./emp-leave-opening-balance.component.scss */ "./src/app/home/leave/emp-leave-opening-balance/emp-leave-opening-balance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpLeaveOpeningBalanceComponent);
    return EmpLeaveOpeningBalanceComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/leave/leave-approval-by-hr/leave-approval-by-hr.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/home/leave/leave-approval-by-hr/leave-approval-by-hr.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Leave Approve By HR\r\n  </h4>\r\n</div>\r\n<div class=\"card mb-4\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        Per page: &nbsp;\r\n        <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n          <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n          class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form-group\">\r\n        <div class=\"table-responsive mb-4\">\r\n          <table class=\"table table-hover table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th>ID</th>\r\n                <th>Employee Name</th>\r\n                <th>Department</th>\r\n                <th>Designation</th>\r\n                <th>Apply Date</th>\r\n                <th>Start Date</th>\r\n                <th>End Date</th>\r\n                <th>LeaveType</th>\r\n                <th>Day(s)</th>\r\n                <th>PayType</th>\r\n                <th>Approve</th>\r\n                <th>Cancel</th>\r\n                <th>Edit</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"tempItems.length==0\">\r\n                <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <!-- Pagination -->\r\n        <div class=\"card-body py-0\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- / Pagination -->\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n      <!--Button-->\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-10 text-sm-right\"></label>\r\n          <div class=\"demo-inline-spacing mt-3\">\r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n              <span class=\"fas fa-window-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/leave-approval-by-hr/leave-approval-by-hr.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/home/leave/leave-approval-by-hr/leave-approval-by-hr.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvbGVhdmUtYXBwcm92YWwtYnktaHIvbGVhdmUtYXBwcm92YWwtYnktaHIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/leave/leave-approval-by-hr/leave-approval-by-hr.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/leave/leave-approval-by-hr/leave-approval-by-hr.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LeaveApprovalByHrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveApprovalByHrComponent", function() { return LeaveApprovalByHrComponent; });
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


var LeaveApprovalByHrComponent = /** @class */ (function (_super) {
    __extends(LeaveApprovalByHrComponent, _super);
    function LeaveApprovalByHrComponent() {
        return _super.call(this) || this;
    }
    LeaveApprovalByHrComponent.prototype.ngOnInit = function () {
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.update();
    };
    LeaveApprovalByHrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-approval-by-hr',
            template: __webpack_require__(/*! ./leave-approval-by-hr.component.html */ "./src/app/home/leave/leave-approval-by-hr/leave-approval-by-hr.component.html"),
            styles: [__webpack_require__(/*! ./leave-approval-by-hr.component.scss */ "./src/app/home/leave/leave-approval-by-hr/leave-approval-by-hr.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaveApprovalByHrComponent);
    return LeaveApprovalByHrComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/leave/leave-approval/leave-approval.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/home/leave/leave-approval/leave-approval.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Leave Approve\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Employee Id-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Employee ID</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                      <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Name-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Name</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\r\n              </div>\r\n            </div>\r\n            <!--Designation-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Designation</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n              </div>\r\n            </div>\r\n            <!--Remark-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Remark</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Remark\">\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--Table Pagination-->\r\n\r\n<div class=\"card mb-4\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        Per page: &nbsp;\r\n        <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n          <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n          class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form-group\">\r\n        <div class=\"table-responsive mb-4\">\r\n          <table class=\"table table-hover table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th>ID</th>\r\n                <th>Employee Name</th>\r\n                <th>Department</th>\r\n                <th>Designation</th>\r\n                <th>Apply Date</th>\r\n                <th>Start Date</th>\r\n                <th>End Date</th>\r\n                <th>LeaveType</th>\r\n                <th>Day(s)</th>\r\n                <th>PayType</th>\r\n                <th>Recommend</th>\r\n                <th>Approve</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"tempItems.length==0\">\r\n                <td colspan=\"12\" class=\"font-italic text-center\">No item available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <!-- Pagination -->\r\n        <div class=\"card-body py-0\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- / Pagination -->\r\n\r\n      </div>\r\n    </form>\r\n    <!--Button-->\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-10 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"fas fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/leave-approval/leave-approval.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/leave/leave-approval/leave-approval.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvbGVhdmUtYXBwcm92YWwvbGVhdmUtYXBwcm92YWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/leave/leave-approval/leave-approval.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/leave/leave-approval/leave-approval.component.ts ***!
  \***********************************************************************/
/*! exports provided: LeaveApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveApprovalComponent", function() { return LeaveApprovalComponent; });
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


var LeaveApprovalComponent = /** @class */ (function (_super) {
    __extends(LeaveApprovalComponent, _super);
    function LeaveApprovalComponent() {
        return _super.call(this) || this;
    }
    LeaveApprovalComponent.prototype.ngOnInit = function () {
        this.items = [1, 2, 3];
        this.update;
    };
    LeaveApprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-approval',
            template: __webpack_require__(/*! ./leave-approval.component.html */ "./src/app/home/leave/leave-approval/leave-approval.component.html"),
            styles: [__webpack_require__(/*! ./leave-approval.component.scss */ "./src/app/home/leave/leave-approval/leave-approval.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaveApprovalComponent);
    return LeaveApprovalComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/leave/leave-carry-forward/leave-carry-forward.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/home/leave/leave-carry-forward/leave-carry-forward.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Leave Carry Forward</h4>\r\n  <div class=\"card-body\">\r\n    <!--Row -->\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n        <!--Emp Code-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Emp Code</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Code\">\r\n          </div>\r\n        </div>\r\n        <!-- Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Carry From Year-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Carry From Year</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Carry From Year\">\r\n          </div>\r\n        </div>\r\n        <!--Carry To Year-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Carry To Year</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Carry To Year\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row m-auto\">\r\n      <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">\r\n          <span class=\"fas fa-search\"></span> Search</button>\r\n      </div>\r\n    </div>\r\n    <!--End 1st Row-->\r\n    <!--2nd Row-->\r\n    <div style=\"border: 1px solid lightgray;\">\r\n      <!--Table-->\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <div class=\"table-responsive mb-4\">\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>ID</th>\r\n                    <th>Employee Name</th>\r\n                    <th>Department</th>\r\n                    <th>Designation</th>\r\n                    <th>Leave Type</th>\r\n                    <th>Total Days</th>\r\n                    <th>Entitle Days</th>\r\n                    <th>Availed Days</th>\r\n                    <th>Carry Days</th>\r\n                    <th></th>\r\n\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td><button class=\"btn btn--large\"> <span class=\"fas fa-trash\"></span></button>></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- / Pagination -->\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-9\">Total Employee:</label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"></span> Save</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"fas fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/leave-carry-forward/leave-carry-forward.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/home/leave/leave-carry-forward/leave-carry-forward.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvbGVhdmUtY2FycnktZm9yd2FyZC9sZWF2ZS1jYXJyeS1mb3J3YXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/leave/leave-carry-forward/leave-carry-forward.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/leave/leave-carry-forward/leave-carry-forward.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LeaveCarryForwardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveCarryForwardComponent", function() { return LeaveCarryForwardComponent; });
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


var LeaveCarryForwardComponent = /** @class */ (function (_super) {
    __extends(LeaveCarryForwardComponent, _super);
    function LeaveCarryForwardComponent() {
        return _super.call(this) || this;
    }
    LeaveCarryForwardComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    LeaveCarryForwardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-carry-forward',
            template: __webpack_require__(/*! ./leave-carry-forward.component.html */ "./src/app/home/leave/leave-carry-forward/leave-carry-forward.component.html"),
            styles: [__webpack_require__(/*! ./leave-carry-forward.component.scss */ "./src/app/home/leave/leave-carry-forward/leave-carry-forward.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaveCarryForwardComponent);
    return LeaveCarryForwardComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/leave/leave-encashment/leave-encashment.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/home/leave/leave-encashment/leave-encashment.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Leave Encashment</h4>\r\n  <div class=\"card-body\">\r\n    <!--Row -->\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n        <!--Emp Code-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Emp Code</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Code\">\r\n          </div>\r\n        </div>\r\n        <!-- Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Encash Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Carry From Year-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Encash Year</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Carry From Year\">\r\n          </div>\r\n        </div>\r\n        <!--Leave Type-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Period</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row m-auto\">\r\n      <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">\r\n          <span class=\"fas fa-search\"></span> Search</button>\r\n      </div>\r\n    </div>\r\n    <!--End 1st Row-->\r\n    <!--2nd Row-->\r\n    <div style=\"border: 1px solid lightgray;\">\r\n      <!--Table-->\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <div class=\"table-responsive mb-4\">\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>ID</th>\r\n                    <th>Employee Name</th>\r\n                    <th>Department</th>\r\n                    <th>Designation</th>\r\n                    <th>Leave Type</th>\r\n                    <th>Total Days</th>\r\n                    <th>Entitle Days</th>\r\n                    <th>Availed Days</th>\r\n                    <th>Encash Days</th>\r\n                    <th></th>\r\n\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td><button class=\"btn btn--large\"> <span class=\"fas fa-trash\">Delete</span></button>></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- / Pagination -->\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-9\">Total Employee:</label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"></span> Save</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"fas fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/leave-encashment/leave-encashment.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/home/leave/leave-encashment/leave-encashment.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvbGVhdmUtZW5jYXNobWVudC9sZWF2ZS1lbmNhc2htZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/leave/leave-encashment/leave-encashment.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/home/leave/leave-encashment/leave-encashment.component.ts ***!
  \***************************************************************************/
/*! exports provided: LeaveEncashmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveEncashmentComponent", function() { return LeaveEncashmentComponent; });
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


var LeaveEncashmentComponent = /** @class */ (function (_super) {
    __extends(LeaveEncashmentComponent, _super);
    function LeaveEncashmentComponent() {
        return _super.call(this) || this;
    }
    LeaveEncashmentComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    LeaveEncashmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-encashment',
            template: __webpack_require__(/*! ./leave-encashment.component.html */ "./src/app/home/leave/leave-encashment/leave-encashment.component.html"),
            styles: [__webpack_require__(/*! ./leave-encashment.component.scss */ "./src/app/home/leave/leave-encashment/leave-encashment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaveEncashmentComponent);
    return LeaveEncashmentComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/leave/leave-entry/leave-entry.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/leave/leave-entry/leave-entry.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Leave Entry</h4>\r\n  <div class=\"card-body\">\r\n    <!--1st Row -->\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n        <!--Employee Id-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <!--Designation Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation Name\">\r\n          </div>\r\n        </div>\r\n        <!--Department Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Department Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Leave Type-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Leave Type</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--From Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">From Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--To Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">To Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"toDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"toDate\"\r\n                #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Leave Duration-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Leave Duration</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Leave Duration\">\r\n          </div>\r\n        </div>\r\n        <!--Apply Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Apply Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"applyDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker\r\n                [(ngModel)]=\"applyDate\" #d3=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d3.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Reason-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Reason</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Reason\">\r\n          </div>\r\n        </div>\r\n        <!--Emergency Contact-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Emergency Contact No</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Emergency Contact\">\r\n          </div>\r\n        </div>\r\n        <!--Address-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Address</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Address\">\r\n          </div>\r\n        </div>\r\n        <!--Radios-->\r\n        <div class=\"form-group row \">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"></label>\r\n          <div class=\"col-sm-4\">\r\n            <label class=\"custom-control custom-radio\">\r\n              <input name=\"custom-radio-3\" type=\"radio\" class=\"custom-control-input\" checked>\r\n              <span class=\"custom-control-label\"> With Pay</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <label class=\"custom-control custom-radio\">\r\n              <input name=\"custom-radio-3\" type=\"radio\" class=\"custom-control-input\">\r\n              <span class=\"custom-control-label\"> Without Pay</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--1st End row-->\r\n    <!--2nd row-->\r\n    <div class=\"row pt-3\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\" style=\"border: 1px solid lightgray; \">\r\n        <!-- Table-->\r\n        <div class=\"demo-vertical-spacing card-footer\">\r\n          <div class=\"table-responsive\" style=\"height: 229px;\">\r\n            <table class=\"table table-bordered \">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Leave Type</th>\r\n                  <th>Total</th>\r\n                  <th>Availed</th>\r\n                  <th>Balance</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th></th>\r\n                  <td> </td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- end Left column-->\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6 p-3\" style=\"border: 1px solid lightgray;\">\r\n        <!--Employee Id-->\r\n        <h5>Apply To</h5>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <!--Designation Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--end 2nd row-->\r\n\r\n    <!--Start 3rd row-->\r\n    <div class=\"row pt-3\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\" style=\"border: 1px solid lightgray; \">\r\n        <!-- Table-->\r\n        <div class=\"demo-vertical-spacing card-footer\">\r\n          <div class=\"table-responsive\" style=\"height: 229px;\">\r\n            <table class=\"table table-bordered \">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Apply Date</th>\r\n                  <th>Start Date</th>\r\n                  <th>End Date</th>\r\n                  <th>Duration</th>\r\n                  <th>Print</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th></th>\r\n                  <td> </td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end Left column-->\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6 p-3\" style=\"border: 1px solid lightgray;\">\r\n        <!--Employee Id-->\r\n        <h5>Duties will be performed by:</h5>\r\n        <!--Employee Id-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <!--Designation Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--End 3rd row-->\r\n    <!--Start 4th row-->\r\n    <div class=\"row pt-3\">\r\n      <!--Left column-->\r\n      <div class=\"col-8\" style=\"border: 1px solid lightgray; \">\r\n        <!-- Table-->\r\n        <div class=\"demo-vertical-spacing card-footer\">\r\n          <div class=\"table-responsive\" style=\"height: 229px;\">\r\n            <table class=\"table table-bordered \">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Leave Name</th>\r\n                  <th>Duration</th>\r\n                  <th>Last Position</th>\r\n                  <th>Remark</th>\r\n                  <th>Status</th>\r\n                  <th>Details</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th></th>\r\n                  <td> </td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end Left column-->\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-4 p-3\">\r\n        <!--Button-->\r\n        <div class=\"form-group row m-auto\">\r\n          <label class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n          <div class=\"demo-inline-spacing mt-3\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"></span> Apply</button>\r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n              <span class=\"far fa-window-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--End 4th row-->\r\n\r\n  </div>\r\n  <!--end Card body-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/leave-entry/leave-entry.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/leave/leave-entry/leave-entry.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvbGVhdmUtZW50cnkvbGVhdmUtZW50cnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/leave/leave-entry/leave-entry.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/leave/leave-entry/leave-entry.component.ts ***!
  \*****************************************************************/
/*! exports provided: LeaveEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveEntryComponent", function() { return LeaveEntryComponent; });
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

var LeaveEntryComponent = /** @class */ (function () {
    function LeaveEntryComponent() {
    }
    LeaveEntryComponent.prototype.ngOnInit = function () {
    };
    LeaveEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-entry',
            template: __webpack_require__(/*! ./leave-entry.component.html */ "./src/app/home/leave/leave-entry/leave-entry.component.html"),
            styles: [__webpack_require__(/*! ./leave-entry.component.scss */ "./src/app/home/leave/leave-entry/leave-entry.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaveEntryComponent);
    return LeaveEntryComponent;
}());



/***/ }),

/***/ "./src/app/home/leave/leave-info-details/leave-info-details.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/leave/leave-info-details/leave-info-details.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Leave Info Details Report\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Employee Code-->\r\n            <div class=\"form-group row \">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Employee Code</label>\r\n              <div class=\"col-sm-6\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-sm-3\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" type=\"text\" placeholder=\"\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                      <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Start Date-->\r\n            <div class=\"form-group row \">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Start Date</label>\r\n              <div class=\"col-sm-7\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Start Date\">\r\n              </div>\r\n            </div>\r\n            <!--End Date-->\r\n            <div class=\"form-group row \">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">End Date</label>\r\n              <div class=\"col-sm-7\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"End Date\">\r\n              </div>\r\n            </div>\r\n            <!--Select Department-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Select Department</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Select Branch-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Select Branch</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Select Project-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Select Project</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Button-->\r\n            <div class=\"form-group row\">\r\n              <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/leave-info-details/leave-info-details.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/leave/leave-info-details/leave-info-details.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvbGVhdmUtaW5mby1kZXRhaWxzL2xlYXZlLWluZm8tZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/leave/leave-info-details/leave-info-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/leave/leave-info-details/leave-info-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LeaveInfoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveInfoDetailsComponent", function() { return LeaveInfoDetailsComponent; });
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

var LeaveInfoDetailsComponent = /** @class */ (function () {
    function LeaveInfoDetailsComponent() {
    }
    LeaveInfoDetailsComponent.prototype.ngOnInit = function () {
    };
    LeaveInfoDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-info-details',
            template: __webpack_require__(/*! ./leave-info-details.component.html */ "./src/app/home/leave/leave-info-details/leave-info-details.component.html"),
            styles: [__webpack_require__(/*! ./leave-info-details.component.scss */ "./src/app/home/leave/leave-info-details/leave-info-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaveInfoDetailsComponent);
    return LeaveInfoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/leave/leave-report/leave-report.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/leave/leave-report/leave-report.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Leave Report\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n      <form>\r\n        <!--Report Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\">Report Type</label>\r\n          <div class=\"col-sm-9\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Button-->\r\n        <div class=\"form-group row\">\r\n          <div class=\"demo-inline-spacing mt-3 center\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/leave-report/leave-report.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/leave/leave-report/leave-report.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvbGVhdmUtcmVwb3J0L2xlYXZlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/leave/leave-report/leave-report.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/leave/leave-report/leave-report.component.ts ***!
  \*******************************************************************/
/*! exports provided: LeaveReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveReportComponent", function() { return LeaveReportComponent; });
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

var LeaveReportComponent = /** @class */ (function () {
    function LeaveReportComponent() {
    }
    LeaveReportComponent.prototype.ngOnInit = function () {
    };
    LeaveReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-report',
            template: __webpack_require__(/*! ./leave-report.component.html */ "./src/app/home/leave/leave-report/leave-report.component.html"),
            styles: [__webpack_require__(/*! ./leave-report.component.scss */ "./src/app/home/leave/leave-report/leave-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaveReportComponent);
    return LeaveReportComponent;
}());



/***/ }),

/***/ "./src/app/home/leave/leave-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/leave/leave-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LeaveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveRoutingModule", function() { return LeaveRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _leave_setup_leave_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-setup/leave-setup.component */ "./src/app/home/leave/leave-setup/leave-setup.component.ts");
/* harmony import */ var _leave_entry_leave_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave-entry/leave-entry.component */ "./src/app/home/leave/leave-entry/leave-entry.component.ts");
/* harmony import */ var _manual_leave_entry_manual_leave_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manual-leave-entry/manual-leave-entry.component */ "./src/app/home/leave/manual-leave-entry/manual-leave-entry.component.ts");
/* harmony import */ var _update_leave_entry_update_leave_entry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-leave-entry/update-leave-entry.component */ "./src/app/home/leave/update-leave-entry/update-leave-entry.component.ts");
/* harmony import */ var _leave_approval_leave_approval_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leave-approval/leave-approval.component */ "./src/app/home/leave/leave-approval/leave-approval.component.ts");
/* harmony import */ var _leave_approval_by_hr_leave_approval_by_hr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leave-approval-by-hr/leave-approval-by-hr.component */ "./src/app/home/leave/leave-approval-by-hr/leave-approval-by-hr.component.ts");
/* harmony import */ var _emp_leave_opening_balance_emp_leave_opening_balance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emp-leave-opening-balance/emp-leave-opening-balance.component */ "./src/app/home/leave/emp-leave-opening-balance/emp-leave-opening-balance.component.ts");
/* harmony import */ var _leave_carry_forward_leave_carry_forward_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leave-carry-forward/leave-carry-forward.component */ "./src/app/home/leave/leave-carry-forward/leave-carry-forward.component.ts");
/* harmony import */ var _leave_encashment_leave_encashment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leave-encashment/leave-encashment.component */ "./src/app/home/leave/leave-encashment/leave-encashment.component.ts");
/* harmony import */ var _recreation_leave_encashment_recreation_leave_encashment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recreation-leave-encashment/recreation-leave-encashment.component */ "./src/app/home/leave/recreation-leave-encashment/recreation-leave-encashment.component.ts");
/* harmony import */ var _substitute_leave_substitute_leave_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./substitute-leave/substitute-leave.component */ "./src/app/home/leave/substitute-leave/substitute-leave.component.ts");
/* harmony import */ var _leave_report_leave_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./leave-report/leave-report.component */ "./src/app/home/leave/leave-report/leave-report.component.ts");
/* harmony import */ var _leave_info_details_leave_info_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./leave-info-details/leave-info-details.component */ "./src/app/home/leave/leave-info-details/leave-info-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var LeaveRoutingModule = /** @class */ (function () {
    function LeaveRoutingModule() {
    }
    LeaveRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'leave-setup', component: _leave_setup_leave_setup_component__WEBPACK_IMPORTED_MODULE_2__["LeaveSetupComponent"] },
                    { path: 'leave-entry', component: _leave_entry_leave_entry_component__WEBPACK_IMPORTED_MODULE_3__["LeaveEntryComponent"] },
                    { path: 'manual-leave-entry', component: _manual_leave_entry_manual_leave_entry_component__WEBPACK_IMPORTED_MODULE_4__["ManualLeaveEntryComponent"] },
                    { path: 'update-leave-entry', component: _update_leave_entry_update_leave_entry_component__WEBPACK_IMPORTED_MODULE_5__["UpdateLeaveEntryComponent"] },
                    { path: 'leave-approval', component: _leave_approval_leave_approval_component__WEBPACK_IMPORTED_MODULE_6__["LeaveApprovalComponent"] },
                    { path: 'leave-approval-by-hr', component: _leave_approval_by_hr_leave_approval_by_hr_component__WEBPACK_IMPORTED_MODULE_7__["LeaveApprovalByHrComponent"] },
                    { path: 'emp-leave-opening-balance', component: _emp_leave_opening_balance_emp_leave_opening_balance_component__WEBPACK_IMPORTED_MODULE_8__["EmpLeaveOpeningBalanceComponent"] },
                    { path: 'leave-carry-forward', component: _leave_carry_forward_leave_carry_forward_component__WEBPACK_IMPORTED_MODULE_9__["LeaveCarryForwardComponent"] },
                    { path: 'leave-encashment', component: _leave_encashment_leave_encashment_component__WEBPACK_IMPORTED_MODULE_10__["LeaveEncashmentComponent"] },
                    { path: 'recreation-leave-encashment', component: _recreation_leave_encashment_recreation_leave_encashment_component__WEBPACK_IMPORTED_MODULE_11__["RecreationLeaveEncashmentComponent"] },
                    { path: 'substitute-leave', component: _substitute_leave_substitute_leave_component__WEBPACK_IMPORTED_MODULE_12__["SubstituteLeaveComponent"] },
                    { path: 'leave-report', component: _leave_report_leave_report_component__WEBPACK_IMPORTED_MODULE_13__["LeaveReportComponent"] },
                    { path: 'leave-info-details', component: _leave_info_details_leave_info_details_component__WEBPACK_IMPORTED_MODULE_14__["LeaveInfoDetailsComponent"] },
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LeaveRoutingModule);
    return LeaveRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/leave/leave-setup/leave-setup.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/leave/leave-setup/leave-setup.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Leave Type Setup\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Employee Type-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Employee Type</label>\r\n              <div class=\"col-sm-9\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Leave Type Name-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Leave Type Name</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Leave Type Name\">\r\n              </div>\r\n            </div>\r\n            <!--Leave Day-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Leave Day</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Leave Day\">\r\n              </div>\r\n            </div>\r\n            <!--Short Name-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Short Name</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Short Name\">\r\n              </div>\r\n            </div>\r\n            <!--Apply Maximum-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Apply Maximum</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Apply Maximum\">\r\n              </div>\r\n            </div>\r\n            <!--Button-->\r\n            <div class=\"form-group row\">\r\n              <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-save\"></span> Save</button>\r\n                <button type=\"clear\" class=\"btn btn-info\">\r\n                  <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n                <button type=\"\" class=\"btn btn-secondary\">\r\n                  <span class=\"fas fa-window-close\"></span> Close</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n   </div>\r\n\r\n    <!-- Table-->\r\n    <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n\r\n    <div class=\"demo-vertical-spacing\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Leave Type Name</th>\r\n              <th>Leave Days</th>\r\n              <th>Apply Max</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th>1</th>\r\n              <td>a</td>\r\n              <td>b</td>\r\n              <td>c</td>\r\n            </tr>\r\n          </tbody>\r\n          <tbody>\r\n            <tr>\r\n              <th>2</th>\r\n              <td>aa</td>\r\n              <td>bb</td>\r\n              <td>cc</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/leave-setup/leave-setup.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/leave/leave-setup/leave-setup.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvbGVhdmUtc2V0dXAvbGVhdmUtc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/leave/leave-setup/leave-setup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/leave/leave-setup/leave-setup.component.ts ***!
  \*****************************************************************/
/*! exports provided: LeaveSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveSetupComponent", function() { return LeaveSetupComponent; });
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

var LeaveSetupComponent = /** @class */ (function () {
    function LeaveSetupComponent() {
    }
    LeaveSetupComponent.prototype.ngOnInit = function () {
    };
    LeaveSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-setup',
            template: __webpack_require__(/*! ./leave-setup.component.html */ "./src/app/home/leave/leave-setup/leave-setup.component.html"),
            styles: [__webpack_require__(/*! ./leave-setup.component.scss */ "./src/app/home/leave/leave-setup/leave-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaveSetupComponent);
    return LeaveSetupComponent;
}());



/***/ }),

/***/ "./src/app/home/leave/leave.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/leave/leave.module.ts ***!
  \********************************************/
/*! exports provided: LeaveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveModule", function() { return LeaveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _leave_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-routing.module */ "./src/app/home/leave/leave-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _leave_setup_leave_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leave-setup/leave-setup.component */ "./src/app/home/leave/leave-setup/leave-setup.component.ts");
/* harmony import */ var _leave_entry_leave_entry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leave-entry/leave-entry.component */ "./src/app/home/leave/leave-entry/leave-entry.component.ts");
/* harmony import */ var _manual_leave_entry_manual_leave_entry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manual-leave-entry/manual-leave-entry.component */ "./src/app/home/leave/manual-leave-entry/manual-leave-entry.component.ts");
/* harmony import */ var _update_leave_entry_update_leave_entry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-leave-entry/update-leave-entry.component */ "./src/app/home/leave/update-leave-entry/update-leave-entry.component.ts");
/* harmony import */ var _leave_approval_leave_approval_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leave-approval/leave-approval.component */ "./src/app/home/leave/leave-approval/leave-approval.component.ts");
/* harmony import */ var _leave_approval_by_hr_leave_approval_by_hr_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leave-approval-by-hr/leave-approval-by-hr.component */ "./src/app/home/leave/leave-approval-by-hr/leave-approval-by-hr.component.ts");
/* harmony import */ var _emp_leave_opening_balance_emp_leave_opening_balance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emp-leave-opening-balance/emp-leave-opening-balance.component */ "./src/app/home/leave/emp-leave-opening-balance/emp-leave-opening-balance.component.ts");
/* harmony import */ var _leave_carry_forward_leave_carry_forward_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./leave-carry-forward/leave-carry-forward.component */ "./src/app/home/leave/leave-carry-forward/leave-carry-forward.component.ts");
/* harmony import */ var _leave_encashment_leave_encashment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./leave-encashment/leave-encashment.component */ "./src/app/home/leave/leave-encashment/leave-encashment.component.ts");
/* harmony import */ var _recreation_leave_encashment_recreation_leave_encashment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recreation-leave-encashment/recreation-leave-encashment.component */ "./src/app/home/leave/recreation-leave-encashment/recreation-leave-encashment.component.ts");
/* harmony import */ var _substitute_leave_substitute_leave_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./substitute-leave/substitute-leave.component */ "./src/app/home/leave/substitute-leave/substitute-leave.component.ts");
/* harmony import */ var _leave_report_leave_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./leave-report/leave-report.component */ "./src/app/home/leave/leave-report/leave-report.component.ts");
/* harmony import */ var _leave_info_details_leave_info_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./leave-info-details/leave-info-details.component */ "./src/app/home/leave/leave-info-details/leave-info-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var LeaveModule = /** @class */ (function () {
    function LeaveModule() {
    }
    LeaveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _leave_setup_leave_setup_component__WEBPACK_IMPORTED_MODULE_5__["LeaveSetupComponent"],
                _leave_entry_leave_entry_component__WEBPACK_IMPORTED_MODULE_6__["LeaveEntryComponent"],
                _manual_leave_entry_manual_leave_entry_component__WEBPACK_IMPORTED_MODULE_7__["ManualLeaveEntryComponent"],
                _update_leave_entry_update_leave_entry_component__WEBPACK_IMPORTED_MODULE_8__["UpdateLeaveEntryComponent"],
                _leave_approval_leave_approval_component__WEBPACK_IMPORTED_MODULE_9__["LeaveApprovalComponent"],
                _leave_approval_by_hr_leave_approval_by_hr_component__WEBPACK_IMPORTED_MODULE_10__["LeaveApprovalByHrComponent"],
                _emp_leave_opening_balance_emp_leave_opening_balance_component__WEBPACK_IMPORTED_MODULE_11__["EmpLeaveOpeningBalanceComponent"],
                _leave_carry_forward_leave_carry_forward_component__WEBPACK_IMPORTED_MODULE_12__["LeaveCarryForwardComponent"],
                _leave_encashment_leave_encashment_component__WEBPACK_IMPORTED_MODULE_13__["LeaveEncashmentComponent"],
                _recreation_leave_encashment_recreation_leave_encashment_component__WEBPACK_IMPORTED_MODULE_14__["RecreationLeaveEncashmentComponent"],
                _substitute_leave_substitute_leave_component__WEBPACK_IMPORTED_MODULE_15__["SubstituteLeaveComponent"],
                _leave_report_leave_report_component__WEBPACK_IMPORTED_MODULE_16__["LeaveReportComponent"],
                _leave_info_details_leave_info_details_component__WEBPACK_IMPORTED_MODULE_17__["LeaveInfoDetailsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _leave_routing_module__WEBPACK_IMPORTED_MODULE_2__["LeaveRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ]
        })
    ], LeaveModule);
    return LeaveModule;
}());



/***/ }),

/***/ "./src/app/home/leave/manual-leave-entry/manual-leave-entry.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/leave/manual-leave-entry/manual-leave-entry.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n      Manual Leave Entry\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <!--Employee Id-->\r\n        <div class=\"form-group row \">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Employee Id</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Id\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Employee Name</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Designation Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Designation Name</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Department Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Department Name</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Department Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Leave Type-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Leave Type</label>\r\n          <div class=\"col-sm-7\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Apply Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Apply Date</label>\r\n          <div class=\"col-sm-7\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"applyDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker\r\n                [(ngModel)]=\"applyDate\" #d3=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d3.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Start Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Start Date</label>\r\n          <div class=\"col-sm-7\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--End Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">End Date</label>\r\n          <div class=\"col-sm-7\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"toDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"toDate\"\r\n                #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Duration-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Duration</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Duration\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Duration-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Duration</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Duration\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Contact No</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Designation Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Address</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">With Pay</label>\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\"></label>\r\n          <div class=\"col-4\" style=\"padding-top: 10px\"> <input class=\"form-check-input\" type=\"checkbox\" checked></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\"></div>\r\n    </div>\r\n    <!--End Row-->\r\n    <!--Button-->\r\n    <div class=\"row\">\r\n      <button type=\"submit\" class=\"btn btn-success\" style=\"margin:0 auto\">\r\n        <span class=\"fas fa-plus\"></span> Add</button>\r\n    </div>\r\n    <!-- Table-->\r\n    <th>Departent</th>\r\n    <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n    <div class=\"demo-vertical-spacing\">\r\n      <div class=\"table-responsive \">\r\n        <table class=\"table table-bordered\" style=\"width: auto\">\r\n          <thead>\r\n            <tr class=\"text-center\">\r\n              <th>ID</th>\r\n              <th>Employee Name</th>\r\n              <th>Designation</th>\r\n              <th>Leave Type</th>\r\n              <th>Apply Date</th>\r\n              <th>Start Date</th>\r\n              <th>End Date</th>\r\n              <th>With Pay</th>\r\n              <th>Duration</th>\r\n              <th>Reason</th>\r\n              <th>Contact No</th>\r\n              <th>Address</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th>1</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/manual-leave-entry/manual-leave-entry.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/leave/manual-leave-entry/manual-leave-entry.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvbWFudWFsLWxlYXZlLWVudHJ5L21hbnVhbC1sZWF2ZS1lbnRyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/leave/manual-leave-entry/manual-leave-entry.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/leave/manual-leave-entry/manual-leave-entry.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ManualLeaveEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualLeaveEntryComponent", function() { return ManualLeaveEntryComponent; });
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

var ManualLeaveEntryComponent = /** @class */ (function () {
    function ManualLeaveEntryComponent() {
    }
    ManualLeaveEntryComponent.prototype.ngOnInit = function () {
    };
    ManualLeaveEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manual-leave-entry',
            template: __webpack_require__(/*! ./manual-leave-entry.component.html */ "./src/app/home/leave/manual-leave-entry/manual-leave-entry.component.html"),
            styles: [__webpack_require__(/*! ./manual-leave-entry.component.scss */ "./src/app/home/leave/manual-leave-entry/manual-leave-entry.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManualLeaveEntryComponent);
    return ManualLeaveEntryComponent;
}());



/***/ }),

/***/ "./src/app/home/leave/recreation-leave-encashment/recreation-leave-encashment.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/home/leave/recreation-leave-encashment/recreation-leave-encashment.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Recreation Leave Encashment</h4>\r\n  <div class=\"card-body\">\r\n    <!--1st Row -->\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n      <!--Employee Id-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <!--Department Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Department Name\">\r\n          </div>\r\n        </div>\r\n        <!--Designation Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation Name\">\r\n          </div>\r\n        </div>\r\n        <!--Joining Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Joining Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"toDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"toDate\"\r\n                #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Available RL/E-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Available RL/E</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Available RL/E\">\r\n          </div>\r\n        </div>\r\n        <!--Encash RL/E-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Encash RL/E</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Encash RL/E\">\r\n          </div>\r\n        </div>\r\n        <!--Payment Period-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Period</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Gross Salary-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Gross Salary</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Gross Salary\">\r\n          </div>\r\n        </div>\r\n        <!--Payment Amount-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Amount</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Payment Amount\">\r\n          </div>\r\n        </div>\r\n        <!--Payment Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"applyDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker\r\n                [(ngModel)]=\"applyDate\" #d3=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d3.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--1st End row-->\r\n    <!--Button-->\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"></span> Save</button>\r\n        <button type=\"clear\" class=\"btn btn-info\">\r\n          <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"fas fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--end Card body-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/recreation-leave-encashment/recreation-leave-encashment.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/home/leave/recreation-leave-encashment/recreation-leave-encashment.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvcmVjcmVhdGlvbi1sZWF2ZS1lbmNhc2htZW50L3JlY3JlYXRpb24tbGVhdmUtZW5jYXNobWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/leave/recreation-leave-encashment/recreation-leave-encashment.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/home/leave/recreation-leave-encashment/recreation-leave-encashment.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: RecreationLeaveEncashmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecreationLeaveEncashmentComponent", function() { return RecreationLeaveEncashmentComponent; });
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

var RecreationLeaveEncashmentComponent = /** @class */ (function () {
    function RecreationLeaveEncashmentComponent() {
    }
    RecreationLeaveEncashmentComponent.prototype.ngOnInit = function () {
    };
    RecreationLeaveEncashmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recreation-leave-encashment',
            template: __webpack_require__(/*! ./recreation-leave-encashment.component.html */ "./src/app/home/leave/recreation-leave-encashment/recreation-leave-encashment.component.html"),
            styles: [__webpack_require__(/*! ./recreation-leave-encashment.component.scss */ "./src/app/home/leave/recreation-leave-encashment/recreation-leave-encashment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RecreationLeaveEncashmentComponent);
    return RecreationLeaveEncashmentComponent;
}());



/***/ }),

/***/ "./src/app/home/leave/substitute-leave/substitute-leave.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/home/leave/substitute-leave/substitute-leave.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Substitute Leave</h4>\r\n  <div class=\"card-body\">\r\n    <!--Row -->\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n        <!--Department-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Job Location-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Job Location </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!-- Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Substitute From Year-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Substitute From Year</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Substitute From Year\">\r\n          </div>\r\n        </div>\r\n        <!--Substitute To Year-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Substitute To Year</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Substitute To Year\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row m-auto\">\r\n      <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">\r\n          <span class=\"fas fa-search\"></span> Search</button>\r\n      </div>\r\n    </div>\r\n    <!--End 1st Row-->\r\n    <!--2nd Row-->\r\n    <div style=\"border: 1px solid lightgray;\">\r\n      <!--Table-->\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <div class=\"table-responsive mb-4\">\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>ID</th>\r\n                    <th>Employee Name</th>\r\n                    <th>Department</th>\r\n                    <th>Designation</th>\r\n                    <th>Days</th>\r\n                    <th></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"6\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td><button class=\"btn btn--large\"> <span class=\"fas fa-trash\"></span>Delete</button>></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-9\">Total Employee:</label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"></span> Save</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"fas fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/substitute-leave/substitute-leave.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/home/leave/substitute-leave/substitute-leave.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvc3Vic3RpdHV0ZS1sZWF2ZS9zdWJzdGl0dXRlLWxlYXZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/leave/substitute-leave/substitute-leave.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/home/leave/substitute-leave/substitute-leave.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubstituteLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstituteLeaveComponent", function() { return SubstituteLeaveComponent; });
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


var SubstituteLeaveComponent = /** @class */ (function (_super) {
    __extends(SubstituteLeaveComponent, _super);
    function SubstituteLeaveComponent() {
        return _super.call(this) || this;
    }
    SubstituteLeaveComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    SubstituteLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-substitute-leave',
            template: __webpack_require__(/*! ./substitute-leave.component.html */ "./src/app/home/leave/substitute-leave/substitute-leave.component.html"),
            styles: [__webpack_require__(/*! ./substitute-leave.component.scss */ "./src/app/home/leave/substitute-leave/substitute-leave.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubstituteLeaveComponent);
    return SubstituteLeaveComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/leave/update-leave-entry/update-leave-entry.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/leave/update-leave-entry/update-leave-entry.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n      Update Leave Entry\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <!--Employee Id-->\r\n        <div class=\"form-group row \">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Employee Id</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Id\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Employee Name</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Designation Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Designation Name</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--Start Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">Leave Start From Date</label>\r\n          <div class=\"col-sm-7\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <!--End Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\">To Date</label>\r\n          <div class=\"col-sm-7\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"toDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"toDate\"\r\n                #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!--End Row-->\r\n    <!--Button-->\r\n    <div class=\"row\">\r\n      <button type=\"submit\" class=\"btn btn-success\" style=\"margin:0 auto\">\r\n        <span class=\"fas fa-eye\"></span> Show</button>\r\n    </div>\r\n    <!-- Table-->\r\n    <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n\r\n    <div class=\"demo-vertical-spacing\">\r\n      <div class=\"table-responsive \">\r\n        <table class=\"table table-bordered w-100\">\r\n          <thead>\r\n            <tr class=\"text-center\">\r\n              <th>ID</th>\r\n              <th>Employee Name</th>\r\n              <th>Designation</th>\r\n              <th>Department</th>\r\n              <th>Leave Type</th>\r\n              <th>Apply Date</th>\r\n              <th>Start Date</th>\r\n              <th>End Date</th>\r\n              <th>With Pay</th>\r\n              <th>Duration</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th>1</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row text-right\">\r\n      <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"></span> Save</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"fas fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/leave/update-leave-entry/update-leave-entry.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/leave/update-leave-entry/update-leave-entry.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGVhdmUvdXBkYXRlLWxlYXZlLWVudHJ5L3VwZGF0ZS1sZWF2ZS1lbnRyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/leave/update-leave-entry/update-leave-entry.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/leave/update-leave-entry/update-leave-entry.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UpdateLeaveEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLeaveEntryComponent", function() { return UpdateLeaveEntryComponent; });
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

var UpdateLeaveEntryComponent = /** @class */ (function () {
    function UpdateLeaveEntryComponent() {
    }
    UpdateLeaveEntryComponent.prototype.ngOnInit = function () {
    };
    UpdateLeaveEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-leave-entry',
            template: __webpack_require__(/*! ./update-leave-entry.component.html */ "./src/app/home/leave/update-leave-entry/update-leave-entry.component.html"),
            styles: [__webpack_require__(/*! ./update-leave-entry.component.scss */ "./src/app/home/leave/update-leave-entry/update-leave-entry.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateLeaveEntryComponent);
    return UpdateLeaveEntryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-leave-leave-module.js.map