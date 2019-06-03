(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-salary-process-salary-process-module"],{

/***/ "./src/app/home/salary-process/allowance-add-deduct/allowance-add-deduct.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/salary-process/allowance-add-deduct/allowance-add-deduct.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Allowance Add Deduct\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Employee Id-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Employee ID</label>\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                      <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Allowance-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Allowance</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Effect From-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Effect From</label>\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                    #d1=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                      <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Monthly Amount-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Monthly Amount</label>\r\n              <div class=\"col-sm-7\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Monthly Amount\">\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!--Table-->\r\n<div class=\"card mb-4\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        Per page: &nbsp;\r\n        <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n          <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n          class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form-group\">\r\n        <div class=\"table-responsive mb-4\">\r\n          <table class=\"table table-hover table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th>Allowance</th>\r\n                <th>Date</th>\r\n                <th>Amount</th>\r\n                <th>Delete</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"tempItems.length==0\">\r\n                <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <!-- Pagination -->\r\n        <div class=\"card-body py-0\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n  <!--Button-->\r\n  <div class=\"form-group row m-auto\">\r\n    <div class=\"demo-inline-spacing mt-3 center\">\r\n      <button type=\"submit\" class=\"btn btn-success\">\r\n        <span class=\"fas fa-save\"></span> Save</button>\r\n      <button type=\"clear\" class=\"btn btn-info\">\r\n        <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n      <button type=\"\" class=\"btn btn-secondary\">\r\n        <span class=\"far fa-window-close\"></span> Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/allowance-add-deduct/allowance-add-deduct.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/salary-process/allowance-add-deduct/allowance-add-deduct.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvYWxsb3dhbmNlLWFkZC1kZWR1Y3QvYWxsb3dhbmNlLWFkZC1kZWR1Y3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/salary-process/allowance-add-deduct/allowance-add-deduct.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/home/salary-process/allowance-add-deduct/allowance-add-deduct.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AllowanceAddDeductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowanceAddDeductComponent", function() { return AllowanceAddDeductComponent; });
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


var AllowanceAddDeductComponent = /** @class */ (function (_super) {
    __extends(AllowanceAddDeductComponent, _super);
    function AllowanceAddDeductComponent() {
        return _super.call(this) || this;
    }
    AllowanceAddDeductComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    AllowanceAddDeductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allowance-add-deduct',
            template: __webpack_require__(/*! ./allowance-add-deduct.component.html */ "./src/app/home/salary-process/allowance-add-deduct/allowance-add-deduct.component.html"),
            styles: [__webpack_require__(/*! ./allowance-add-deduct.component.scss */ "./src/app/home/salary-process/allowance-add-deduct/allowance-add-deduct.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AllowanceAddDeductComponent);
    return AllowanceAddDeductComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-process/block-salary-process/block-salary-process.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/salary-process/block-salary-process/block-salary-process.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Block Salary Process</h4>\r\n  <div class=\"card-body\">\r\n    <!--Row -->\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n        <!--Period-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Period</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Payment Type-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Type</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row m-auto\">\r\n      <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-eye\"></span> Show Data</button>\r\n      </div>\r\n    </div>\r\n    <!--End 1st Row-->\r\n    <!--2nd Row-->\r\n    <div style=\"border: 1px solid lightgray;\">\r\n      <!--Table-->\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <div class=\"table-responsive mb-4\">\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Code</th>\r\n                    <th> Employee Name</th>\r\n                    <th>Designation</th>\r\n                    <th>Department</th>\r\n                    <th></th>\r\n\r\n\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"11\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td><button class=\"btn btn-danger\"> <span class=\"fas fa-trash\">Delete</span></button>></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row m-auto\">\r\n      <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-spinner\"></span> Process</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"far fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/block-salary-process/block-salary-process.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/salary-process/block-salary-process/block-salary-process.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvYmxvY2stc2FsYXJ5LXByb2Nlc3MvYmxvY2stc2FsYXJ5LXByb2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/salary-process/block-salary-process/block-salary-process.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/home/salary-process/block-salary-process/block-salary-process.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BlockSalaryProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSalaryProcessComponent", function() { return BlockSalaryProcessComponent; });
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


var BlockSalaryProcessComponent = /** @class */ (function (_super) {
    __extends(BlockSalaryProcessComponent, _super);
    function BlockSalaryProcessComponent() {
        return _super.call(this) || this;
    }
    BlockSalaryProcessComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    BlockSalaryProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-salary-process',
            template: __webpack_require__(/*! ./block-salary-process.component.html */ "./src/app/home/salary-process/block-salary-process/block-salary-process.component.html"),
            styles: [__webpack_require__(/*! ./block-salary-process.component.scss */ "./src/app/home/salary-process/block-salary-process/block-salary-process.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockSalaryProcessComponent);
    return BlockSalaryProcessComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-process/change-report/change-report.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/salary-process/change-report/change-report.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Change Report\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Start Date-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Start Date</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Start Date\">\r\n              </div>\r\n            </div>\r\n            <!--End Date-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">End Date</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"End Date\">\r\n              </div>\r\n            </div>\r\n      \r\n            <!--Select Branch-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Select Branch</label>\r\n              <div class=\"col-sm-9\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Button-->\r\n            <div class=\"form-group row\">\r\n              <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n      \r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/change-report/change-report.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/salary-process/change-report/change-report.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvY2hhbmdlLXJlcG9ydC9jaGFuZ2UtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/salary-process/change-report/change-report.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/salary-process/change-report/change-report.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChangeReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeReportComponent", function() { return ChangeReportComponent; });
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

var ChangeReportComponent = /** @class */ (function () {
    function ChangeReportComponent() {
    }
    ChangeReportComponent.prototype.ngOnInit = function () {
    };
    ChangeReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-report',
            template: __webpack_require__(/*! ./change-report.component.html */ "./src/app/home/salary-process/change-report/change-report.component.html"),
            styles: [__webpack_require__(/*! ./change-report.component.scss */ "./src/app/home/salary-process/change-report/change-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangeReportComponent);
    return ChangeReportComponent;
}());



/***/ }),

/***/ "./src/app/home/salary-process/confirm-or-inc/confirm-or-inc.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/salary-process/confirm-or-inc/confirm-or-inc.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Confirmation Or Increment Information</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n      <!--Employee Id-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <!-- Present Grade-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Present Grade</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Present Pay Scale-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Present Pay Scale</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Payment Method-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Method</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Provident Fund-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Provident Fund</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Increment Grade-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Increment Grade</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Increment Pay Scale-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Increment Pay Scale</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Button-->\r\n        <div class=\"form-group row m-auto\">\r\n          <label class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n          <div class=\"demo-inline-spacing mt-3\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"></span> Save</button>\r\n            <button type=\"clear\" class=\"btn btn-info\">\r\n              <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n              <span class=\"far fa-window-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--End row-->\r\n  </div>\r\n  <!--end body Card-->\r\n</div>\r\n<!--Table-->\r\n<div class=\"card mb-4\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        Per page: &nbsp;\r\n        <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n          <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n          class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form-group\">\r\n        <div class=\"table-responsive mb-4\">\r\n          <table class=\"table table-hover table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th>Type</th>\r\n                <th>Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"tempItems.length==0\">\r\n                <td colspan=\"2\" class=\"font-italic text-center\">No item available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <!-- Pagination -->\r\n        <div class=\"card-body py-0\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/confirm-or-inc/confirm-or-inc.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/salary-process/confirm-or-inc/confirm-or-inc.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvY29uZmlybS1vci1pbmMvY29uZmlybS1vci1pbmMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/salary-process/confirm-or-inc/confirm-or-inc.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/salary-process/confirm-or-inc/confirm-or-inc.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConfirmOrIncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrIncComponent", function() { return ConfirmOrIncComponent; });
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


var ConfirmOrIncComponent = /** @class */ (function (_super) {
    __extends(ConfirmOrIncComponent, _super);
    function ConfirmOrIncComponent() {
        return _super.call(this) || this;
    }
    ConfirmOrIncComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    ConfirmOrIncComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-or-inc',
            template: __webpack_require__(/*! ./confirm-or-inc.component.html */ "./src/app/home/salary-process/confirm-or-inc/confirm-or-inc.component.html"),
            styles: [__webpack_require__(/*! ./confirm-or-inc.component.scss */ "./src/app/home/salary-process/confirm-or-inc/confirm-or-inc.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmOrIncComponent);
    return ConfirmOrIncComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-process/edit-emp-salary-structure/edit-emp-salary-structure.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/home/salary-process/edit-emp-salary-structure/edit-emp-salary-structure.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center  bg-light\">Salary Structure</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n        <!--Code-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Code </label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Code\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Salary Structure-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Salary Structure</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!-- Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\" Name\">\r\n          </div>\r\n        </div>\r\n        <!--Pay Amount-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Pay Amount</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Pay Amount\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--End row-->\r\n  </div>\r\n  <!--end body Card-->\r\n</div>\r\n<!--Table-->\r\n<div class=\"row\">\r\n  <!--Left Table-->\r\n  <div class=\"col-6\">\r\n    <div class=\"card mb-4\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <div class=\"table-responsive mb-4\">\r\n              <h5>Addition </h5>\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Salary Head</th>\r\n                    <th>Amount</th>\r\n                    <th>Type</th>\r\n                    <th>Based On</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n          <!--Addition Amount-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Addition Amount</label>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Addition Amount\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-success\" type=\"button\">\r\n                    <span class=\"fas fa-plus\" style=\"cursor: pointer;\"> Add</span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!--Right  Table-->\r\n  <div class=\"col-6\">\r\n    <div class=\"card mb-4\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <h5>Dedication </h5>\r\n            <div class=\"table-responsive mb-4\">\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Salary Head</th>\r\n                    <th>Amount</th>\r\n                    <th>Type</th>\r\n                    <th>Based On</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n          <!--Dedication Amount-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Dedication Amount</label>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Dedication Amount\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-success\" type=\"button\">\r\n                    <span class=\"fas fa-plus\" style=\"cursor: pointer;\"> Add</span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row m-auto\">\r\n      <label class=\"col-form-label col-sm-7 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"></span> Save</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"far fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/edit-emp-salary-structure/edit-emp-salary-structure.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/home/salary-process/edit-emp-salary-structure/edit-emp-salary-structure.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvZWRpdC1lbXAtc2FsYXJ5LXN0cnVjdHVyZS9lZGl0LWVtcC1zYWxhcnktc3RydWN0dXJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/salary-process/edit-emp-salary-structure/edit-emp-salary-structure.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/home/salary-process/edit-emp-salary-structure/edit-emp-salary-structure.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EditEmpSalaryStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmpSalaryStructureComponent", function() { return EditEmpSalaryStructureComponent; });
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


var EditEmpSalaryStructureComponent = /** @class */ (function (_super) {
    __extends(EditEmpSalaryStructureComponent, _super);
    function EditEmpSalaryStructureComponent() {
        return _super.call(this) || this;
    }
    EditEmpSalaryStructureComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    EditEmpSalaryStructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-emp-salary-structure',
            template: __webpack_require__(/*! ./edit-emp-salary-structure.component.html */ "./src/app/home/salary-process/edit-emp-salary-structure/edit-emp-salary-structure.component.html"),
            styles: [__webpack_require__(/*! ./edit-emp-salary-structure.component.scss */ "./src/app/home/salary-process/edit-emp-salary-structure/edit-emp-salary-structure.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditEmpSalaryStructureComponent);
    return EditEmpSalaryStructureComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-process/emp-salary-structure/emp-salary-structure.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/salary-process/emp-salary-structure/emp-salary-structure.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Salary Structure</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n        <!--Employee Id-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Salary Structure-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Salary Structure</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <!--Pay Amount-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Pay Amount</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Pay Amount\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--End row-->\r\n  </div>\r\n  <!--end body Card-->\r\n</div>\r\n<!--Table-->\r\n<div class=\"row\">\r\n  <!--Left Table-->\r\n  <div class=\"col-6\">\r\n    <div class=\"card mb-4\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <div class=\"table-responsive mb-4\">\r\n              <h5>Addition </h5>\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Salary Head</th>\r\n                    <th>Amount</th>\r\n                    <th>Type</th>\r\n                    <th>Based On</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n          <!--Addition Amount-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Addition Amount</label>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Addition Amount\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-success\" type=\"button\">\r\n                    <span class=\"fas fa-plus\" style=\"cursor: pointer;\"> Add</span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!--Right  Table-->\r\n  <div class=\"col-6\">\r\n    <div class=\"card mb-4\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <h5>Dedication </h5>\r\n            <div class=\"table-responsive mb-4\">\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Salary Head</th>\r\n                    <th>Amount</th>\r\n                    <th>Type</th>\r\n                    <th>Based On</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n          <!--Dedication Amount-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Dedication Amount</label>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Dedication Amount\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-success\" type=\"button\">\r\n                    <span class=\"fas fa-plus\" style=\"cursor: pointer;\"> Add</span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row m-auto\">\r\n      <label class=\"col-form-label col-sm-7 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"></span> Save</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"far fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/emp-salary-structure/emp-salary-structure.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/salary-process/emp-salary-structure/emp-salary-structure.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvZW1wLXNhbGFyeS1zdHJ1Y3R1cmUvZW1wLXNhbGFyeS1zdHJ1Y3R1cmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/salary-process/emp-salary-structure/emp-salary-structure.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/home/salary-process/emp-salary-structure/emp-salary-structure.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EmpSalaryStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpSalaryStructureComponent", function() { return EmpSalaryStructureComponent; });
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


var EmpSalaryStructureComponent = /** @class */ (function (_super) {
    __extends(EmpSalaryStructureComponent, _super);
    function EmpSalaryStructureComponent() {
        return _super.call(this) || this;
    }
    EmpSalaryStructureComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    EmpSalaryStructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-salary-structure',
            template: __webpack_require__(/*! ./emp-salary-structure.component.html */ "./src/app/home/salary-process/emp-salary-structure/emp-salary-structure.component.html"),
            styles: [__webpack_require__(/*! ./emp-salary-structure.component.scss */ "./src/app/home/salary-process/emp-salary-structure/emp-salary-structure.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpSalaryStructureComponent);
    return EmpSalaryStructureComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-process/enrolment-information/enrolment-information.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/home/salary-process/enrolment-information/enrolment-information.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Enrolment Information</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n      <!--Employee Id-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        <!--Empty Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"></label>\r\n          <label class=\"col-form-label col-sm-8 text-sm-right\"></label>\r\n        </div>\r\n        <!-- Bank-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Bank</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Bank Branch-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Bank Branch</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Account No-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Account No</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Account No\">\r\n          </div>\r\n        </div>\r\n        <!--Account Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Account Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Account Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Payment Method-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Method</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Provident Fund-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Provident Fund</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Income Tax-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Income Tax</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Tax Payby Company-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Payby Company</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Pay Scale Grade-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Pay Scale Grade</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Pay Scale -->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Pay Scale </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Button-->\r\n        <div class=\"form-group row m-auto\">\r\n          <label class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n          <div class=\"demo-inline-spacing mt-3\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"></span> Save</button>\r\n            <button type=\"clear\" class=\"btn btn-info\">\r\n              <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n              <span class=\"far fa-window-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--End row-->\r\n  </div>\r\n  <!--end body Card-->\r\n</div>\r\n<!--Table-->\r\n  <div class=\"card mb-4\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          Per page: &nbsp;\r\n          <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n            <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col\">\r\n          <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n            class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form autocomplete=\"off\">\r\n        <div class=\"form-group\">\r\n          <div class=\"table-responsive mb-4\">\r\n            <table class=\"table table-hover table-striped mb-0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Bank Name</th>\r\n                  <th>Bank Branch</th>\r\n                  <th>Payment Method</th>\r\n                  <th>Account No</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n  \r\n  \r\n          <!-- Pagination -->\r\n          <div class=\"card-body py-0\">\r\n  \r\n            <div class=\"row\">\r\n              <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n              </div>\r\n              <div class=\"col-sm pt-3\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                  (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                </ngb-pagination>\r\n              </div>\r\n            </div>\r\n  \r\n          </div>\r\n          <!-- / Pagination -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home/salary-process/enrolment-information/enrolment-information.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/home/salary-process/enrolment-information/enrolment-information.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvZW5yb2xtZW50LWluZm9ybWF0aW9uL2Vucm9sbWVudC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/salary-process/enrolment-information/enrolment-information.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/salary-process/enrolment-information/enrolment-information.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EnrolmentInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrolmentInformationComponent", function() { return EnrolmentInformationComponent; });
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


var EnrolmentInformationComponent = /** @class */ (function (_super) {
    __extends(EnrolmentInformationComponent, _super);
    function EnrolmentInformationComponent() {
        return _super.call(this) || this;
    }
    EnrolmentInformationComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    EnrolmentInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enrolment-information',
            template: __webpack_require__(/*! ./enrolment-information.component.html */ "./src/app/home/salary-process/enrolment-information/enrolment-information.component.html"),
            styles: [__webpack_require__(/*! ./enrolment-information.component.scss */ "./src/app/home/salary-process/enrolment-information/enrolment-information.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EnrolmentInformationComponent);
    return EnrolmentInformationComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-process/extra-salary/extra-salary.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/home/salary-process/extra-salary/extra-salary.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\"> Employee Extra Salary</h4>\r\n  <div class=\"card-body\">\r\n    <!--Row -->\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n        <!--Period -->\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Period </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control\">\r\n                <option>Select</option>\r\n                <option>Option-1</option>\r\n                <option>Option-2</option>\r\n                <option>Option-3</option>\r\n                <option>Option-4</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Payment type -->\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Type </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control\">\r\n                <option>Select</option>\r\n                <option>Option-1</option>\r\n                <option>Option-2</option>\r\n                <option>Option-3</option>\r\n                <option>Option-4</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <!--End 1st Row-->\r\n    <!--2nd Row-->\r\n    <div style=\"border: 1px solid lightgray;\">\r\n      <!--Table-->\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <div class=\"table-responsive mb-4\">\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Code</th>\r\n                    <th> Employee Name</th>\r\n                    <th>Designation</th>\r\n                    <th>Department</th>\r\n                    <th>Salary Head</th>\r\n                    <th>Amount</th>\r\n                    <th>Note</th>\r\n\r\n\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"7\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n          <!--Button-->\r\n          <div class=\"form-group row m-auto\">\r\n            <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n            <div class=\"demo-inline-spacing mt-3\">\r\n              <button type=\"submit\" class=\"btn btn-success\">\r\n                <span class=\"fas fa-save\"></span> Save</button>\r\n              <button type=\"\" class=\"btn btn-secondary\">\r\n                <span class=\"far fa-window-close\"></span> Close</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/extra-salary/extra-salary.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/salary-process/extra-salary/extra-salary.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvZXh0cmEtc2FsYXJ5L2V4dHJhLXNhbGFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/salary-process/extra-salary/extra-salary.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/salary-process/extra-salary/extra-salary.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExtraSalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraSalaryComponent", function() { return ExtraSalaryComponent; });
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


var ExtraSalaryComponent = /** @class */ (function (_super) {
    __extends(ExtraSalaryComponent, _super);
    function ExtraSalaryComponent() {
        return _super.call(this) || this;
    }
    ExtraSalaryComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    ExtraSalaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extra-salary',
            template: __webpack_require__(/*! ./extra-salary.component.html */ "./src/app/home/salary-process/extra-salary/extra-salary.component.html"),
            styles: [__webpack_require__(/*! ./extra-salary.component.scss */ "./src/app/home/salary-process/extra-salary/extra-salary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtraSalaryComponent);
    return ExtraSalaryComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-process/new-join/new-join.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/home/salary-process/new-join/new-join.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">New Employee Information</h4>\r\n  <div class=\"card-body\">\r\n    <!--Row -->\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n        <!--Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> From Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> To Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"toDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"toDate\"\r\n                #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row m-auto\">\r\n      <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-eye\"></span> Show Data</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"far fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n    <!--End 1st Row-->\r\n    <!--2nd Row-->\r\n    <div style=\"border: 1px solid lightgray;\">\r\n      <!--Table-->\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <div class=\"table-responsive mb-4\">\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Code</th>\r\n                    <th> Employee Name</th>\r\n                    <th>Designation</th>\r\n                    <th>Department</th>\r\n                    <th>Joining Date</th>\r\n                    <th>Type</th>\r\n\r\n\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"6\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td> \r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/new-join/new-join.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/home/salary-process/new-join/new-join.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvbmV3LWpvaW4vbmV3LWpvaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/salary-process/new-join/new-join.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/salary-process/new-join/new-join.component.ts ***!
  \********************************************************************/
/*! exports provided: NewJoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewJoinComponent", function() { return NewJoinComponent; });
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


var NewJoinComponent = /** @class */ (function (_super) {
    __extends(NewJoinComponent, _super);
    function NewJoinComponent() {
        return _super.call(this) || this;
    }
    NewJoinComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    NewJoinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-join',
            template: __webpack_require__(/*! ./new-join.component.html */ "./src/app/home/salary-process/new-join/new-join.component.html"),
            styles: [__webpack_require__(/*! ./new-join.component.scss */ "./src/app/home/salary-process/new-join/new-join.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewJoinComponent);
    return NewJoinComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-process/pay-slip-email/pay-slip-email.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/salary-process/pay-slip-email/pay-slip-email.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Process Pay Slip To Send Employee Email\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Employee Code-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Employee Code</label>\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Employee Code\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                      <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Salary Period-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Period</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Button-->\r\n            <div class=\"form-group row\">\r\n              <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-spinner\"></span> Process Pay Slip </button>\r\n                <button type=\"submit\" class=\"btn btn-info\">\r\n                  <span class=\"fa fa-paper-plane\"></span> Send Pay Slip </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/pay-slip-email/pay-slip-email.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/salary-process/pay-slip-email/pay-slip-email.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvcGF5LXNsaXAtZW1haWwvcGF5LXNsaXAtZW1haWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/salary-process/pay-slip-email/pay-slip-email.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/salary-process/pay-slip-email/pay-slip-email.component.ts ***!
  \********************************************************************************/
/*! exports provided: PaySlipEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaySlipEmailComponent", function() { return PaySlipEmailComponent; });
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

var PaySlipEmailComponent = /** @class */ (function () {
    function PaySlipEmailComponent() {
    }
    PaySlipEmailComponent.prototype.ngOnInit = function () {
    };
    PaySlipEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay-slip-email',
            template: __webpack_require__(/*! ./pay-slip-email.component.html */ "./src/app/home/salary-process/pay-slip-email/pay-slip-email.component.html"),
            styles: [__webpack_require__(/*! ./pay-slip-email.component.scss */ "./src/app/home/salary-process/pay-slip-email/pay-slip-email.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaySlipEmailComponent);
    return PaySlipEmailComponent;
}());



/***/ }),

/***/ "./src/app/home/salary-process/salary-inc/salary-inc.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-inc/salary-inc.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">Salary Increment</h4>\r\n    <div class=\"card-body\">\r\n      <!--Row -->\r\n      <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n        <!--Left column-->\r\n        <div class=\"col-6\">\r\n          <!--Period-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Period</label>\r\n            <div class=\"col-sm-8\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n          </div>\r\n          <!--Project-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Payscal Grade</label>\r\n            <div class=\"col-sm-8\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n          </div>\r\n\r\n        </div>\r\n  \r\n        <div class=\"vertical\"></div>\r\n        <!--Right column-->\r\n        <div class=\"col-6\">\r\n          <!--Leave Type-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Department</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control\">\r\n                <option>Select</option>\r\n                <option>Option-1</option>\r\n                <option>Option-2</option>\r\n                <option>Option-3</option>\r\n                <option>Option-4</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Button-->\r\n      <div class=\"form-group row m-auto\">\r\n        <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n        <div class=\"demo-inline-spacing mt-3\">\r\n          <button type=\"submit\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-eye\"></span> Show Data</button>\r\n        </div>\r\n        <div class=\"demo-inline-spacing mt-3\">\r\n          <button type=\"submit\" class=\"btn btn-info\">\r\n            <span class=\"fas fa-edit\"></span> For Edit</button>\r\n        </div>\r\n      </div>\r\n      <!--End 1st Row-->\r\n      <!--2nd Row-->\r\n      <div style=\"border: 1px solid lightgray;\">\r\n        <!--Table-->\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form autocomplete=\"off\">\r\n            <div class=\"form-group\">\r\n              <div class=\"table-responsive mb-4\">\r\n                <table class=\"table table-hover table-striped mb-0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Code</th>\r\n                      <th></th>\r\n                      <th>Employee Name</th>\r\n                      <th>Designation</th>\r\n                      <th>Department</th>\r\n                      <th>Gross Salary</th>\r\n                      <th>Increment Amount</th>\r\n                      <th>Total Amount</th>\r\n                      <th></th>\r\n  \r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"11\" class=\"font-italic text-center\">No item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                      <td>{{item}}</td>\r\n                      <td><button class=\"btn btn-danger\"> <span class=\"fas fa-trash\"> Delete</span></button></td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n  \r\n  \r\n              <!-- Pagination -->\r\n              <div class=\"card-body py-0\">\r\n  \r\n                <div class=\"row\">\r\n                  <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                    <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                  </div>\r\n                  <div class=\"col-sm pt-3\">\r\n                    <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                      (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                    </ngb-pagination>\r\n                  </div>\r\n                </div>\r\n  \r\n              </div>\r\n              <!-- / Pagination -->\r\n  \r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home/salary-process/salary-inc/salary-inc.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-inc/salary-inc.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3Mvc2FsYXJ5LWluYy9zYWxhcnktaW5jLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/salary-process/salary-inc/salary-inc.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-inc/salary-inc.component.ts ***!
  \************************************************************************/
/*! exports provided: SalaryIncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryIncComponent", function() { return SalaryIncComponent; });
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


var SalaryIncComponent = /** @class */ (function (_super) {
    __extends(SalaryIncComponent, _super);
    function SalaryIncComponent() {
        return _super.call(this) || this;
    }
    SalaryIncComponent.prototype.ngOnInit = function () {
        this.items = [1, 2, 3];
        this.update;
    };
    SalaryIncComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-inc',
            template: __webpack_require__(/*! ./salary-inc.component.html */ "./src/app/home/salary-process/salary-inc/salary-inc.component.html"),
            styles: [__webpack_require__(/*! ./salary-inc.component.scss */ "./src/app/home/salary-process/salary-inc/salary-inc.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryIncComponent);
    return SalaryIncComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-process/salary-process-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/salary-process/salary-process-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SalaryProcessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryProcessRoutingModule", function() { return SalaryProcessRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enrolment_information_enrolment_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enrolment-information/enrolment-information.component */ "./src/app/home/salary-process/enrolment-information/enrolment-information.component.ts");
/* harmony import */ var _allowance_add_deduct_allowance_add_deduct_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allowance-add-deduct/allowance-add-deduct.component */ "./src/app/home/salary-process/allowance-add-deduct/allowance-add-deduct.component.ts");
/* harmony import */ var _confirm_or_inc_confirm_or_inc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-or-inc/confirm-or-inc.component */ "./src/app/home/salary-process/confirm-or-inc/confirm-or-inc.component.ts");
/* harmony import */ var _salary_inc_salary_inc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salary-inc/salary-inc.component */ "./src/app/home/salary-process/salary-inc/salary-inc.component.ts");
/* harmony import */ var _salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salary-view/salary-view.component */ "./src/app/home/salary-process/salary-view/salary-view.component.ts");
/* harmony import */ var _salary_structure_salary_structure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./salary-structure/salary-structure.component */ "./src/app/home/salary-process/salary-structure/salary-structure.component.ts");
/* harmony import */ var _emp_salary_structure_emp_salary_structure_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emp-salary-structure/emp-salary-structure.component */ "./src/app/home/salary-process/emp-salary-structure/emp-salary-structure.component.ts");
/* harmony import */ var _edit_emp_salary_structure_edit_emp_salary_structure_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-emp-salary-structure/edit-emp-salary-structure.component */ "./src/app/home/salary-process/edit-emp-salary-structure/edit-emp-salary-structure.component.ts");
/* harmony import */ var _salary_process_salary_process_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./salary-process/salary-process.component */ "./src/app/home/salary-process/salary-process/salary-process.component.ts");
/* harmony import */ var _undo_salary_process_undo_salary_process_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./undo-salary-process/undo-salary-process.component */ "./src/app/home/salary-process/undo-salary-process/undo-salary-process.component.ts");
/* harmony import */ var _block_salary_process_block_salary_process_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./block-salary-process/block-salary-process.component */ "./src/app/home/salary-process/block-salary-process/block-salary-process.component.ts");
/* harmony import */ var _update_salary_update_salary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-salary/update-salary.component */ "./src/app/home/salary-process/update-salary/update-salary.component.ts");
/* harmony import */ var _pay_slip_email_pay_slip_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pay-slip-email/pay-slip-email.component */ "./src/app/home/salary-process/pay-slip-email/pay-slip-email.component.ts");
/* harmony import */ var _new_join_new_join_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./new-join/new-join.component */ "./src/app/home/salary-process/new-join/new-join.component.ts");
/* harmony import */ var _change_report_change_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./change-report/change-report.component */ "./src/app/home/salary-process/change-report/change-report.component.ts");
/* harmony import */ var _extra_salary_extra_salary_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./extra-salary/extra-salary.component */ "./src/app/home/salary-process/extra-salary/extra-salary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var SalaryProcessRoutingModule = /** @class */ (function () {
    function SalaryProcessRoutingModule() {
    }
    SalaryProcessRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'enrolment-information', component: _enrolment_information_enrolment_information_component__WEBPACK_IMPORTED_MODULE_2__["EnrolmentInformationComponent"] },
                    { path: 'allowance-add-deduct', component: _allowance_add_deduct_allowance_add_deduct_component__WEBPACK_IMPORTED_MODULE_3__["AllowanceAddDeductComponent"] },
                    { path: 'confirm-or-inc', component: _confirm_or_inc_confirm_or_inc_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmOrIncComponent"] },
                    { path: 'salary-Inc', component: _salary_inc_salary_inc_component__WEBPACK_IMPORTED_MODULE_5__["SalaryIncComponent"] },
                    { path: 'salary-view', component: _salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_6__["SalaryViewComponent"] },
                    { path: 'salary-structure', component: _salary_structure_salary_structure_component__WEBPACK_IMPORTED_MODULE_7__["SalaryStructureComponent"] },
                    { path: 'emp-salary-structure', component: _emp_salary_structure_emp_salary_structure_component__WEBPACK_IMPORTED_MODULE_8__["EmpSalaryStructureComponent"] },
                    { path: 'edit-emp-salary-structure', component: _edit_emp_salary_structure_edit_emp_salary_structure_component__WEBPACK_IMPORTED_MODULE_9__["EditEmpSalaryStructureComponent"] },
                    { path: 'salary-process', component: _salary_process_salary_process_component__WEBPACK_IMPORTED_MODULE_10__["SalaryProcessComponent"] },
                    { path: 'undo-salary-process', component: _undo_salary_process_undo_salary_process_component__WEBPACK_IMPORTED_MODULE_11__["UndoSalaryProcessComponent"] },
                    { path: 'block-salary-process', component: _block_salary_process_block_salary_process_component__WEBPACK_IMPORTED_MODULE_12__["BlockSalaryProcessComponent"] },
                    { path: 'update-salary', component: _update_salary_update_salary_component__WEBPACK_IMPORTED_MODULE_13__["UpdateSalaryComponent"] },
                    { path: 'pay-slip-email', component: _pay_slip_email_pay_slip_email_component__WEBPACK_IMPORTED_MODULE_14__["PaySlipEmailComponent"] },
                    { path: 'new-join', component: _new_join_new_join_component__WEBPACK_IMPORTED_MODULE_15__["NewJoinComponent"] },
                    { path: 'change-report', component: _change_report_change_report_component__WEBPACK_IMPORTED_MODULE_16__["ChangeReportComponent"] },
                    { path: 'extra-salary', component: _extra_salary_extra_salary_component__WEBPACK_IMPORTED_MODULE_17__["ExtraSalaryComponent"] },
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SalaryProcessRoutingModule);
    return SalaryProcessRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/salary-process/salary-process.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/salary-process/salary-process.module.ts ***!
  \**************************************************************/
/*! exports provided: SalaryProcessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryProcessModule", function() { return SalaryProcessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _salary_process_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salary-process-routing.module */ "./src/app/home/salary-process/salary-process-routing.module.ts");
/* harmony import */ var _enrolment_information_enrolment_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enrolment-information/enrolment-information.component */ "./src/app/home/salary-process/enrolment-information/enrolment-information.component.ts");
/* harmony import */ var _allowance_add_deduct_allowance_add_deduct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allowance-add-deduct/allowance-add-deduct.component */ "./src/app/home/salary-process/allowance-add-deduct/allowance-add-deduct.component.ts");
/* harmony import */ var _confirm_or_inc_confirm_or_inc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirm-or-inc/confirm-or-inc.component */ "./src/app/home/salary-process/confirm-or-inc/confirm-or-inc.component.ts");
/* harmony import */ var _salary_inc_salary_inc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./salary-inc/salary-inc.component */ "./src/app/home/salary-process/salary-inc/salary-inc.component.ts");
/* harmony import */ var _salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./salary-view/salary-view.component */ "./src/app/home/salary-process/salary-view/salary-view.component.ts");
/* harmony import */ var _salary_structure_salary_structure_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./salary-structure/salary-structure.component */ "./src/app/home/salary-process/salary-structure/salary-structure.component.ts");
/* harmony import */ var _emp_salary_structure_emp_salary_structure_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emp-salary-structure/emp-salary-structure.component */ "./src/app/home/salary-process/emp-salary-structure/emp-salary-structure.component.ts");
/* harmony import */ var _edit_emp_salary_structure_edit_emp_salary_structure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-emp-salary-structure/edit-emp-salary-structure.component */ "./src/app/home/salary-process/edit-emp-salary-structure/edit-emp-salary-structure.component.ts");
/* harmony import */ var _salary_process_salary_process_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./salary-process/salary-process.component */ "./src/app/home/salary-process/salary-process/salary-process.component.ts");
/* harmony import */ var _undo_salary_process_undo_salary_process_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./undo-salary-process/undo-salary-process.component */ "./src/app/home/salary-process/undo-salary-process/undo-salary-process.component.ts");
/* harmony import */ var _block_salary_process_block_salary_process_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./block-salary-process/block-salary-process.component */ "./src/app/home/salary-process/block-salary-process/block-salary-process.component.ts");
/* harmony import */ var _update_salary_update_salary_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./update-salary/update-salary.component */ "./src/app/home/salary-process/update-salary/update-salary.component.ts");
/* harmony import */ var _pay_slip_email_pay_slip_email_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pay-slip-email/pay-slip-email.component */ "./src/app/home/salary-process/pay-slip-email/pay-slip-email.component.ts");
/* harmony import */ var _new_join_new_join_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./new-join/new-join.component */ "./src/app/home/salary-process/new-join/new-join.component.ts");
/* harmony import */ var _change_report_change_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./change-report/change-report.component */ "./src/app/home/salary-process/change-report/change-report.component.ts");
/* harmony import */ var _extra_salary_extra_salary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./extra-salary/extra-salary.component */ "./src/app/home/salary-process/extra-salary/extra-salary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var SalaryProcessModule = /** @class */ (function () {
    function SalaryProcessModule() {
    }
    SalaryProcessModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _enrolment_information_enrolment_information_component__WEBPACK_IMPORTED_MODULE_5__["EnrolmentInformationComponent"],
                _allowance_add_deduct_allowance_add_deduct_component__WEBPACK_IMPORTED_MODULE_6__["AllowanceAddDeductComponent"],
                _confirm_or_inc_confirm_or_inc_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmOrIncComponent"],
                _salary_inc_salary_inc_component__WEBPACK_IMPORTED_MODULE_8__["SalaryIncComponent"],
                _salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_9__["SalaryViewComponent"],
                _salary_structure_salary_structure_component__WEBPACK_IMPORTED_MODULE_10__["SalaryStructureComponent"],
                _emp_salary_structure_emp_salary_structure_component__WEBPACK_IMPORTED_MODULE_11__["EmpSalaryStructureComponent"],
                _edit_emp_salary_structure_edit_emp_salary_structure_component__WEBPACK_IMPORTED_MODULE_12__["EditEmpSalaryStructureComponent"],
                _salary_process_salary_process_component__WEBPACK_IMPORTED_MODULE_13__["SalaryProcessComponent"],
                _undo_salary_process_undo_salary_process_component__WEBPACK_IMPORTED_MODULE_14__["UndoSalaryProcessComponent"],
                _block_salary_process_block_salary_process_component__WEBPACK_IMPORTED_MODULE_15__["BlockSalaryProcessComponent"],
                _update_salary_update_salary_component__WEBPACK_IMPORTED_MODULE_16__["UpdateSalaryComponent"],
                _pay_slip_email_pay_slip_email_component__WEBPACK_IMPORTED_MODULE_17__["PaySlipEmailComponent"],
                _new_join_new_join_component__WEBPACK_IMPORTED_MODULE_18__["NewJoinComponent"],
                _change_report_change_report_component__WEBPACK_IMPORTED_MODULE_19__["ChangeReportComponent"],
                _extra_salary_extra_salary_component__WEBPACK_IMPORTED_MODULE_20__["ExtraSalaryComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _salary_process_routing_module__WEBPACK_IMPORTED_MODULE_4__["SalaryProcessRoutingModule"]
            ]
        })
    ], SalaryProcessModule);
    return SalaryProcessModule;
}());



/***/ }),

/***/ "./src/app/home/salary-process/salary-process/salary-process.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-process/salary-process.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Salary Process\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!-- Period-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Period</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!-- Process-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Process</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Employee-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Employee</label>\r\n              <div class=\"col-sm-7\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Employee\">\r\n              </div>\r\n            </div>\r\n            <!--Button-->\r\n            <div class=\"form-group row m-auto\">\r\n              <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-spinner\"></span> Process</button>\r\n                <button type=\"\" class=\"btn btn-secondary\">\r\n                  <span class=\"far fa-window-close\"></span> Close</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/salary-process/salary-process.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-process/salary-process.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3Mvc2FsYXJ5LXByb2Nlc3Mvc2FsYXJ5LXByb2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/salary-process/salary-process/salary-process.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-process/salary-process.component.ts ***!
  \********************************************************************************/
/*! exports provided: SalaryProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryProcessComponent", function() { return SalaryProcessComponent; });
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

var SalaryProcessComponent = /** @class */ (function () {
    function SalaryProcessComponent() {
    }
    SalaryProcessComponent.prototype.ngOnInit = function () {
    };
    SalaryProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-process',
            template: __webpack_require__(/*! ./salary-process.component.html */ "./src/app/home/salary-process/salary-process/salary-process.component.html"),
            styles: [__webpack_require__(/*! ./salary-process.component.scss */ "./src/app/home/salary-process/salary-process/salary-process.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryProcessComponent);
    return SalaryProcessComponent;
}());



/***/ }),

/***/ "./src/app/home/salary-process/salary-structure/salary-structure.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-structure/salary-structure.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Salary Structure\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Salary Type-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Type</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--Table-->\r\n<div class=\"row\">\r\n  <!--Left Table-->\r\n  <div class=\"col-6\">\r\n    <div class=\"card mb-4\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <h5>Addition </h5>\r\n            <div class=\"table-responsive mb-4\">\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Salary Head</th>\r\n                    <th>Amount</th>\r\n                    <th>Type</th>\r\n                    <th>Based On</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-10 text-sm-right\"></label>\r\n            <button type=\"submit\" class=\"col-sm-2 btn btn-success\">\r\n              <span class=\"fas fa-plus\"></span> </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!--Right  Table-->\r\n  <div class=\"col-6\">\r\n    <div class=\"card mb-4\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form autocomplete=\"off\">\r\n          <div class=\"form-group\">\r\n            <h5>Dedication </h5>\r\n            <div class=\"table-responsive mb-4\">\r\n              <table class=\"table table-hover table-striped mb-0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Salary Head</th>\r\n                    <th>Amount</th>\r\n                    <th>Type</th>\r\n                    <th>Based On</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n          <!--Add button-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-10 text-sm-right\"></label>\r\n            <button type=\"submit\" class=\"col-sm-2 btn btn-success\">\r\n              <span class=\"fas fa-plus\"></span> </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n    <div class=\"form-group row m-auto\">\r\n      <div class=\"demo-inline-spacing mt-3 center\">\r\n        <button type=\"submit\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"></span> Save</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"far fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/salary-structure/salary-structure.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-structure/salary-structure.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3Mvc2FsYXJ5LXN0cnVjdHVyZS9zYWxhcnktc3RydWN0dXJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/salary-process/salary-structure/salary-structure.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-structure/salary-structure.component.ts ***!
  \************************************************************************************/
/*! exports provided: SalaryStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryStructureComponent", function() { return SalaryStructureComponent; });
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


var SalaryStructureComponent = /** @class */ (function (_super) {
    __extends(SalaryStructureComponent, _super);
    function SalaryStructureComponent() {
        return _super.call(this) || this;
    }
    SalaryStructureComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    SalaryStructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-structure',
            template: __webpack_require__(/*! ./salary-structure.component.html */ "./src/app/home/salary-process/salary-structure/salary-structure.component.html"),
            styles: [__webpack_require__(/*! ./salary-structure.component.scss */ "./src/app/home/salary-process/salary-structure/salary-structure.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryStructureComponent);
    return SalaryStructureComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-process/salary-view/salary-view.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-view/salary-view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Salary View\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Employee Id-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Employee ID</label>\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                      <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Name-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Name</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\r\n              </div>\r\n            </div>\r\n            <!--Designation-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Designation</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--Table-->\r\n<div class=\"card mb-4\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        Per page: &nbsp;\r\n        <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n          <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n          class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form-group\">\r\n        <div class=\"table-responsive mb-4\">\r\n          <table class=\"table table-hover table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th>Salary Head</th>\r\n                <th>Amount</th>\r\n                <th>Salary</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"tempItems.length==0\">\r\n                <td colspan=\"3\" class=\"font-italic text-center\">No item available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <!-- Pagination -->\r\n        <div class=\"card-body py-0\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n  <!--Button-->\r\n  <div class=\"form-group row m-auto\">\r\n    <div class=\"demo-inline-spacing mt-3 center\">\r\n      <button type=\"\" class=\"btn btn-secondary\">\r\n        <span class=\"far fa-window-close\"></span> Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/salary-view/salary-view.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-view/salary-view.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3Mvc2FsYXJ5LXZpZXcvc2FsYXJ5LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/salary-process/salary-view/salary-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/salary-process/salary-view/salary-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: SalaryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryViewComponent", function() { return SalaryViewComponent; });
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


var SalaryViewComponent = /** @class */ (function (_super) {
    __extends(SalaryViewComponent, _super);
    function SalaryViewComponent() {
        return _super.call(this) || this;
    }
    SalaryViewComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    SalaryViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-view',
            template: __webpack_require__(/*! ./salary-view.component.html */ "./src/app/home/salary-process/salary-view/salary-view.component.html"),
            styles: [__webpack_require__(/*! ./salary-view.component.scss */ "./src/app/home/salary-process/salary-view/salary-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryViewComponent);
    return SalaryViewComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-process/undo-salary-process/undo-salary-process.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/home/salary-process/undo-salary-process/undo-salary-process.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Undo Salary Process\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!-- Period-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Period</label>\r\n                <div class=\"col-sm-7\">\r\n                  <select class=\"form-control\">\r\n                    <option>Select</option>\r\n                    <option>Option-1</option>\r\n                    <option>Option-2</option>\r\n                    <option>Option-3</option>\r\n                    <option>Option-4</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!--Button-->\r\n              <div class=\"form-group row m-auto\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-spinner\"></span> Process</button>\r\n                  <button type=\"\" class=\"btn btn-secondary\">\r\n                    <span class=\"far fa-window-close\"></span> Close</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home/salary-process/undo-salary-process/undo-salary-process.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/home/salary-process/undo-salary-process/undo-salary-process.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvdW5kby1zYWxhcnktcHJvY2Vzcy91bmRvLXNhbGFyeS1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/salary-process/undo-salary-process/undo-salary-process.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/home/salary-process/undo-salary-process/undo-salary-process.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UndoSalaryProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoSalaryProcessComponent", function() { return UndoSalaryProcessComponent; });
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

var UndoSalaryProcessComponent = /** @class */ (function () {
    function UndoSalaryProcessComponent() {
    }
    UndoSalaryProcessComponent.prototype.ngOnInit = function () {
    };
    UndoSalaryProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-undo-salary-process',
            template: __webpack_require__(/*! ./undo-salary-process.component.html */ "./src/app/home/salary-process/undo-salary-process/undo-salary-process.component.html"),
            styles: [__webpack_require__(/*! ./undo-salary-process.component.scss */ "./src/app/home/salary-process/undo-salary-process/undo-salary-process.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UndoSalaryProcessComponent);
    return UndoSalaryProcessComponent;
}());



/***/ }),

/***/ "./src/app/home/salary-process/update-salary/update-salary.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/salary-process/update-salary/update-salary.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Update Salary\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n      <form>\r\n        <!--Employee Id-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\">Employee ID</label>\r\n          <div class=\"col-sm-7\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Salary Period-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Period</label>\r\n          <div class=\"col-sm-7\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Department-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\">Department</label>\r\n          <div class=\"col-sm-7\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Designation-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\">Department</label>\r\n          <div class=\"col-sm-7\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Salary Head-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Head</label>\r\n          <div class=\"col-sm-7\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Button-->\r\n        <div class=\"form-group row m-auto\">\r\n          <div class=\"demo-inline-spacing mt-3 center\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">\r\n              <span class=\"fas fa-search\"></span> Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!--Table-->\r\n<div class=\"card mb-4\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        Per page: &nbsp;\r\n        <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n          <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n          class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form-group\">\r\n        <div class=\"table-responsive mb-4\">\r\n          <table class=\"table table-hover table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th>Employee</th>\r\n                <th>Designation</th>\r\n                <th>Salary Head </th>\r\n                <th>Amount</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"tempItems.length==0\">\r\n                <td colspan=\"4\" class=\"font-italic text-center\">No item available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <!-- Pagination -->\r\n        <div class=\"card-body py-0\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n  <!--Button-->\r\n  <div class=\"form-group row m-auto\">\r\n    <div class=\"demo-inline-spacing mt-3 center\">\r\n      <button type=\"submit\" class=\"btn btn-success\">\r\n        <span class=\"fas fa-edit\"></span> Update</button>\r\n      <button type=\"\" class=\"btn btn-secondary\">\r\n        <span class=\"far fa-window-close\"></span> Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-process/update-salary/update-salary.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/salary-process/update-salary/update-salary.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXByb2Nlc3MvdXBkYXRlLXNhbGFyeS91cGRhdGUtc2FsYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/salary-process/update-salary/update-salary.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/salary-process/update-salary/update-salary.component.ts ***!
  \******************************************************************************/
/*! exports provided: UpdateSalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSalaryComponent", function() { return UpdateSalaryComponent; });
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


var UpdateSalaryComponent = /** @class */ (function (_super) {
    __extends(UpdateSalaryComponent, _super);
    function UpdateSalaryComponent() {
        return _super.call(this) || this;
    }
    UpdateSalaryComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    UpdateSalaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-salary',
            template: __webpack_require__(/*! ./update-salary.component.html */ "./src/app/home/salary-process/update-salary/update-salary.component.html"),
            styles: [__webpack_require__(/*! ./update-salary.component.scss */ "./src/app/home/salary-process/update-salary/update-salary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateSalaryComponent);
    return UpdateSalaryComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ })

}]);
//# sourceMappingURL=home-salary-process-salary-process-module.js.map