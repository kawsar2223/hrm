(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-system-setup-setup-module"],{

/***/ "./src/app/home/system-setup/assign-dept-gl/assign-dept-gl.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/system-setup/assign-dept-gl/assign-dept-gl.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        {{title}}\r\n    </h4>\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7 center\">\r\n              <form>\r\n                  <div class=\"form-group row\">\r\n                      <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"department\">Department</label>\r\n                      <div class=\"col-sm-6\">\r\n                          <select class=\"custom-select\" name=\"department\" id=\"department\">\r\n                              <option>Select Department</option>\r\n                          </select>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                      <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"glDepartment\">GL Department</label>\r\n                      <div class=\"col-sm-6\">\r\n                          <select class=\"custom-select\" name=\"glDepartment\" id=\"glDepartment\">\r\n                              <option>Select GL Department</option>\r\n                          </select>\r\n                      </div>\r\n                  </div>\r\n                 \r\n              </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <label for=\"\" class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n            <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Assign</button>\r\n                <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n                <button class=\"btn btn-secondary\"><span class=\"fas fa-window-close\"></span> Close</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      Per page: &nbsp;\r\n                      <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                        class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                        <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                        class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <table class=\"table table-hover table-striped mb-0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>ID</th>\r\n                      <th>Description</th>\r\n                      <th>Sort Order</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"3\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <!-- Pagination -->\r\n                <div class=\"card-body py-0\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                      <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                    </div>\r\n                    <div class=\"col-sm pt-3\">\r\n                      <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                        (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                      </ngb-pagination>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- / Pagination -->\r\n              </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/system-setup/assign-dept-gl/assign-dept-gl.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/system-setup/assign-dept-gl/assign-dept-gl.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Fzc2lnbi1kZXB0LWdsL2Fzc2lnbi1kZXB0LWdsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/system-setup/assign-dept-gl/assign-dept-gl.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/system-setup/assign-dept-gl/assign-dept-gl.component.ts ***!
  \******************************************************************************/
/*! exports provided: AssignDeptGlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignDeptGlComponent", function() { return AssignDeptGlComponent; });
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


var AssignDeptGlComponent = /** @class */ (function (_super) {
    __extends(AssignDeptGlComponent, _super);
    function AssignDeptGlComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Assign Department GL";
        return _this;
    }
    AssignDeptGlComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    AssignDeptGlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-dept-gl',
            template: __webpack_require__(/*! ./assign-dept-gl.component.html */ "./src/app/home/system-setup/assign-dept-gl/assign-dept-gl.component.html"),
            styles: [__webpack_require__(/*! ./assign-dept-gl.component.scss */ "./src/app/home/system-setup/assign-dept-gl/assign-dept-gl.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssignDeptGlComponent);
    return AssignDeptGlComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/bank-branch/bank-branch.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/system-setup/bank-branch/bank-branch.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        {{title}}\r\n    </h4>\r\n    <div class=\"card-body col-md-9\" style=\"margin: 0 auto\">\r\n        <form>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"branchName\">Branch Name</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"text\" name=\"branchName\" id=\"branchName\" class=\"form-control\" placeholder=\"Branch Name\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"address\">Address</label>\r\n                <div class=\"col-sm-6\">\r\n                    <textarea class=\"form-control\" name=\"address\" id=\"address\" placeholder=\"Description\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"bank\">Bank</label>\r\n                <div class=\"col-sm-6\">\r\n                    <select class=\"custom-select\" name=\"bank\" id=\"bank\">\r\n                        <option>Select Bank</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <label for=\"\" class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n            <div class=\"demo-inline-spacing mt-3\">\r\n                <button type=\"submit\" class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n                <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n                <button class=\"btn btn-secondary\"><span class=\"fas fa-window-close\"></span> Close</button>\r\n                <button class=\"btn btn-danger\"><span class=\"fas fa-trash-alt\"></span> Delete</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      Per page: &nbsp;\r\n                      <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                        class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                        <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                        class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <table class=\"table table-hover table-striped mb-0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>ID</th>\r\n                      <th>Description</th>\r\n                      <th>Sort Order</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"3\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <!-- Pagination -->\r\n                <div class=\"card-body py-0\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                      <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                    </div>\r\n                    <div class=\"col-sm pt-3\">\r\n                      <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                        (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                      </ngb-pagination>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- / Pagination -->\r\n              </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/system-setup/bank-branch/bank-branch.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/system-setup/bank-branch/bank-branch.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2JhbmstYnJhbmNoL2JhbmstYnJhbmNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/system-setup/bank-branch/bank-branch.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/system-setup/bank-branch/bank-branch.component.ts ***!
  \************************************************************************/
/*! exports provided: BankBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankBranchComponent", function() { return BankBranchComponent; });
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


var BankBranchComponent = /** @class */ (function (_super) {
    __extends(BankBranchComponent, _super);
    function BankBranchComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Bank Branch";
        return _this;
    }
    BankBranchComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    BankBranchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank-branch',
            template: __webpack_require__(/*! ./bank-branch.component.html */ "./src/app/home/system-setup/bank-branch/bank-branch.component.html"),
            styles: [__webpack_require__(/*! ./bank-branch.component.scss */ "./src/app/home/system-setup/bank-branch/bank-branch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BankBranchComponent);
    return BankBranchComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/division/division.component.html":
/*!********************************************************************!*\
  !*** ./src/app/home/system-setup/division/division.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        {{title}}\r\n    </h4>\r\n    <div class=\"card-body col-md-9\" style=\"margin: 0 auto\">\r\n        <form>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"division\">Division</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"text\" name=\"division\" id=\"division\" class=\"form-control\" placeholder=\"Division\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"code\">Code</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"text\" name=\"code\" id=\"code\" class=\"form-control\" placeholder=\"Code\">\r\n                </div>\r\n            </div>\r\n           \r\n        </form>\r\n        <div class=\"row\">\r\n            <label for=\"\" class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n            <div class=\"demo-inline-spacing mt-3\">\r\n                <button type=\"submit\" class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n                <!-- <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button> -->\r\n                <button class=\"btn btn-secondary\"><span class=\"fas fa-window-close\"></span> Close</button>\r\n                <button class=\"btn btn-danger\"><span class=\"fas fa-trash-alt\"></span> Delete</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      Per page: &nbsp;\r\n                      <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                        class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                        <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                        class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <table class=\"table table-hover table-striped mb-0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>ID</th>\r\n                      <th>Description</th>\r\n                      <th>Sort Order</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"3\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <!-- Pagination -->\r\n                <div class=\"card-body py-0\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                      <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                    </div>\r\n                    <div class=\"col-sm pt-3\">\r\n                      <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                        (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                      </ngb-pagination>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- / Pagination -->\r\n              </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/system-setup/division/division.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/home/system-setup/division/division.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2RpdmlzaW9uL2RpdmlzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/system-setup/division/division.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/system-setup/division/division.component.ts ***!
  \******************************************************************/
/*! exports provided: DivisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionComponent", function() { return DivisionComponent; });
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


var DivisionComponent = /** @class */ (function (_super) {
    __extends(DivisionComponent, _super);
    function DivisionComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Division";
        return _this;
    }
    DivisionComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    DivisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-division',
            template: __webpack_require__(/*! ./division.component.html */ "./src/app/home/system-setup/division/division.component.html"),
            styles: [__webpack_require__(/*! ./division.component.scss */ "./src/app/home/system-setup/division/division.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DivisionComponent);
    return DivisionComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/group/group.component.html":
/*!**************************************************************!*\
  !*** ./src/app/home/system-setup/group/group.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        {{title}}\r\n    </h4>\r\n    <div class=\"card-body col-md-9\" style=\"margin: 0 auto\">\r\n        <form>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"groupName\">Group Name</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"text\" name=\"groupName\" id=\"groupName\" class=\"form-control\" placeholder=\"Group Name\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"code\">Code</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"text\" name=\"code\" id=\"code\" class=\"form-control\" placeholder=\"Code\">\r\n                </div>\r\n            </div>\r\n           \r\n        </form>\r\n        <div class=\"row\">\r\n            <label for=\"\" class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n            <div class=\"demo-inline-spacing mt-3\">\r\n                <button type=\"submit\" class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n                <!-- <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button> -->\r\n                <button class=\"btn btn-secondary\"><span class=\"fas fa-window-close\"></span> Close</button>\r\n                <button class=\"btn btn-danger\"><span class=\"fas fa-trash-alt\"></span> Delete</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  Per page: &nbsp;\r\n                  <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                    class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                    <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                    class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <table class=\"table table-hover table-striped mb-0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>ID</th>\r\n                  <th>Description</th>\r\n                  <th>Sort Order</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"3\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <!-- Pagination -->\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/system-setup/group/group.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/home/system-setup/group/group.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/system-setup/group/group.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home/system-setup/group/group.component.ts ***!
  \************************************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
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


var GroupComponent = /** @class */ (function (_super) {
    __extends(GroupComponent, _super);
    function GroupComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Major/Group Name";
        return _this;
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    GroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/home/system-setup/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.scss */ "./src/app/home/system-setup/group/group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GroupComponent);
    return GroupComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/holyday-calender/holyday-calender.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/home/system-setup/holyday-calender/holyday-calender.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card  section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    {{title}}\r\n  </h4>\r\n  <div class=\"card-body col-md-9\" style=\"margin: 0 auto\">\r\n    <form>\r\n      <div class=\"form-group row\">\r\n        <label class=\"form-label col-sm-3\">Select Month/Date</label>\r\n        <div class=\"input-group col-sm-6\">\r\n          <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" name=\"holyday\" ngbDatepicker [(ngModel)]=\"holyday\"\r\n            [displayMonths]=\"1\" #d1=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n              <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n    <div class=\"card mb-4\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <table class=\"table table-hover table-striped mb-0\">\r\n          <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>Description</th>\r\n              <th>Sort Order</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"tempItems.length==0\">\r\n              <td colspan=\"3\" class=\"font-italic text-center\">No Item available</td>\r\n            </tr>\r\n            <tr *ngFor=\"let item of tempItems\">\r\n              <td>{{item}}</td>\r\n              <td>{{item}}</td>\r\n              <td>{{item}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <!-- Pagination -->\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/system-setup/holyday-calender/holyday-calender.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/system-setup/holyday-calender/holyday-calender.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2hvbHlkYXktY2FsZW5kZXIvaG9seWRheS1jYWxlbmRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/holyday-calender/holyday-calender.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/holyday-calender/holyday-calender.component.ts ***!
  \**********************************************************************************/
/*! exports provided: HolydayCalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolydayCalenderComponent", function() { return HolydayCalenderComponent; });
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


var HolydayCalenderComponent = /** @class */ (function (_super) {
    __extends(HolydayCalenderComponent, _super);
    function HolydayCalenderComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Holyday Calender";
        return _this;
    }
    HolydayCalenderComponent.prototype.ngOnInit = function () {
        this.items = [1, 2, 3, 4, 5, 6, 7];
        this.update();
    };
    HolydayCalenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-holyday-calender',
            template: __webpack_require__(/*! ./holyday-calender.component.html */ "./src/app/home/system-setup/holyday-calender/holyday-calender.component.html"),
            styles: [__webpack_require__(/*! ./holyday-calender.component.scss */ "./src/app/home/system-setup/holyday-calender/holyday-calender.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HolydayCalenderComponent);
    return HolydayCalenderComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/production-floor/production-floor.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/home/system-setup/production-floor/production-floor.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card  section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        {{title}}\r\n    </h4>\r\n    <div class=\"card-body col-md-9\" style=\"margin: 0 auto\">\r\n        <form>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"productionUnit\">Production Unit</label>\r\n                <div class=\"col-sm-6\">\r\n                    <select class=\"custom-select\" name=\"productionUnit\" id=\"productionUnit\">\r\n                        <option>Select Production Unit</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"productionFloor\">Production Floor</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"text\" name=\"productionFloor\" id=\"productionFloor\" class=\"form-control\" placeholder=\"Production Floor\">\r\n                </div>\r\n            </div>\r\n           \r\n        </form>\r\n        <div class=\"row\">\r\n            <label for=\"\" class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n            <div class=\"demo-inline-spacing mt-3\">\r\n                <button type=\"submit\" class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n                <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n                <button class=\"btn btn-secondary\"><span class=\"fas fa-window-close\"></span> Close</button>\r\n                <!-- <button class=\"btn btn-danger\"><span class=\"fas fa-trash-alt\"></span> Delete</button> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      Per page: &nbsp;\r\n                      <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                        class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                        <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                        class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <table class=\"table table-hover table-striped mb-0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th># S/N</th>\r\n                      <th>Production Floor</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"3\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <!-- Pagination -->\r\n                <div class=\"card-body py-0\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                      <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                    </div>\r\n                    <div class=\"col-sm pt-3\">\r\n                      <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                        (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                      </ngb-pagination>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- / Pagination -->\r\n              </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/system-setup/production-floor/production-floor.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/system-setup/production-floor/production-floor.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL3Byb2R1Y3Rpb24tZmxvb3IvcHJvZHVjdGlvbi1mbG9vci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/production-floor/production-floor.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/production-floor/production-floor.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductionFloorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionFloorComponent", function() { return ProductionFloorComponent; });
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


var ProductionFloorComponent = /** @class */ (function (_super) {
    __extends(ProductionFloorComponent, _super);
    function ProductionFloorComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Production Floor";
        return _this;
    }
    ProductionFloorComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    ProductionFloorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-production-floor',
            template: __webpack_require__(/*! ./production-floor.component.html */ "./src/app/home/system-setup/production-floor/production-floor.component.html"),
            styles: [__webpack_require__(/*! ./production-floor.component.scss */ "./src/app/home/system-setup/production-floor/production-floor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductionFloorComponent);
    return ProductionFloorComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/production-line/production-line.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/production-line/production-line.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        {{title}}\r\n    </h4>\r\n    <div class=\"card-body col-md-9\" style=\"margin: 0 auto\">\r\n        <form>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"productionUnit\">Production Unit</label>\r\n                <div class=\"col-sm-6\">\r\n                    <select class=\"custom-select\" name=\"productionUnit\" id=\"productionUnit\">\r\n                        <option>Select Production Unit</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"productionFloor\">Production Floor</label>\r\n                <div class=\"col-sm-6\">\r\n                    <select class=\"custom-select\" name=\"productionFloor\" id=\"productionFloor\">\r\n                        <option>Select Production Floor</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"productivityLine\">Productivity Line</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"text\" name=\"productivityLine\" id=\"productivityLine\" class=\"form-control\" placeholder=\"Production Line\">\r\n                </div>\r\n            </div>\r\n           \r\n        </form>\r\n        <div class=\"row\">\r\n            <label for=\"\" class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n            <div class=\"demo-inline-spacing mt-3\">\r\n                <button type=\"submit\" class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n                <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n                <button class=\"btn btn-secondary\"><span class=\"fas fa-window-close\"></span> Close</button>\r\n                <!-- <button class=\"btn btn-danger\"><span class=\"fas fa-trash-alt\"></span> Delete</button> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      Per page: &nbsp;\r\n                      <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                        class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                        <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                        class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <table class=\"table table-hover table-striped mb-0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th># S/N</th>\r\n                      <th>Production Line</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"3\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <!-- Pagination -->\r\n                <div class=\"card-body py-0\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                      <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                    </div>\r\n                    <div class=\"col-sm pt-3\">\r\n                      <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                        (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                      </ngb-pagination>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- / Pagination -->\r\n              </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/system-setup/production-line/production-line.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/production-line/production-line.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL3Byb2R1Y3Rpb24tbGluZS9wcm9kdWN0aW9uLWxpbmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/production-line/production-line.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/system-setup/production-line/production-line.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductionLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionLineComponent", function() { return ProductionLineComponent; });
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


var ProductionLineComponent = /** @class */ (function (_super) {
    __extends(ProductionLineComponent, _super);
    function ProductionLineComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Production Line";
        return _this;
    }
    ProductionLineComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    ProductionLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-production-line',
            template: __webpack_require__(/*! ./production-line.component.html */ "./src/app/home/system-setup/production-line/production-line.component.html"),
            styles: [__webpack_require__(/*! ./production-line.component.scss */ "./src/app/home/system-setup/production-line/production-line.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductionLineComponent);
    return ProductionLineComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/production-machine/production-machine.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/home/system-setup/production-machine/production-machine.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        {{title}}\r\n    </h4>\r\n    <div class=\"card-body col-md-9\" style=\"margin: 0 auto\">\r\n        <form>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"productionUnit\">Production Unit</label>\r\n                <div class=\"col-sm-6\">\r\n                    <select class=\"custom-select\" name=\"productionUnit\" id=\"productionUnit\">\r\n                        <option>Select Production Unit</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"productionFloor\">Production Floor</label>\r\n                <div class=\"col-sm-6\">\r\n                    <select class=\"custom-select\" name=\"productionFloor\" id=\"productionFloor\">\r\n                        <option>Select Production Floor</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"productionLine\">Production Line</label>\r\n                <div class=\"col-sm-6\">\r\n                    <select class=\"custom-select\" name=\"productionLine\" id=\"productionLine\">\r\n                        <option>Select Production Line</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"productionMachine\">Production Machine</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"text\" name=\"productionMachine\" id=\"productionMachine\" class=\"form-control\" placeholder=\"Production Machine\">\r\n                </div>\r\n            </div>\r\n           \r\n        </form>\r\n        <div class=\"row\">\r\n            <label for=\"\" class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n            <div class=\"demo-inline-spacing mt-3\">\r\n                <button type=\"submit\" class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n                <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n                <button class=\"btn btn-secondary\"><span class=\"fas fa-window-close\"></span> Close</button>\r\n                <!-- <button class=\"btn btn-danger\"><span class=\"fas fa-trash-alt\"></span> Delete</button> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      Per page: &nbsp;\r\n                      <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                        class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                        <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                        class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <table class=\"table table-hover table-striped mb-0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th># S/N</th>\r\n                      <th>Production Machine</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"3\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <!-- Pagination -->\r\n                <div class=\"card-body py-0\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                      <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                    </div>\r\n                    <div class=\"col-sm pt-3\">\r\n                      <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                        (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                      </ngb-pagination>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- / Pagination -->\r\n              </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/system-setup/production-machine/production-machine.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/system-setup/production-machine/production-machine.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL3Byb2R1Y3Rpb24tbWFjaGluZS9wcm9kdWN0aW9uLW1hY2hpbmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/production-machine/production-machine.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/system-setup/production-machine/production-machine.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductionMachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionMachineComponent", function() { return ProductionMachineComponent; });
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


var ProductionMachineComponent = /** @class */ (function (_super) {
    __extends(ProductionMachineComponent, _super);
    function ProductionMachineComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Production Machine";
        return _this;
    }
    ProductionMachineComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    ProductionMachineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-production-machine',
            template: __webpack_require__(/*! ./production-machine.component.html */ "./src/app/home/system-setup/production-machine/production-machine.component.html"),
            styles: [__webpack_require__(/*! ./production-machine.component.scss */ "./src/app/home/system-setup/production-machine/production-machine.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductionMachineComponent);
    return ProductionMachineComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/production-unit/production-unit.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/production-unit/production-unit.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        {{title}}\r\n    </h4>\r\n    <div class=\"card-body col-md-9\" style=\"margin: 0 auto\">\r\n        <form>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\" for=\"productionUnit\">Production Unit</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"text\" name=\"productionUnit\" id=\"productionUnit\" class=\"form-control\" placeholder=\"Production Unit\">\r\n                </div>\r\n            </div>\r\n           \r\n        </form>\r\n        <div class=\"row\">\r\n            <label for=\"\" class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n            <div class=\"demo-inline-spacing mt-3\">\r\n                <button type=\"submit\" class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n                <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n                <button class=\"btn btn-secondary\"><span class=\"fas fa-window-close\"></span> Close</button>\r\n                <!-- <button class=\"btn btn-danger\"><span class=\"fas fa-trash-alt\"></span> Delete</button> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      Per page: &nbsp;\r\n                      <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                        class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                        <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                        class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <table class=\"table table-hover table-striped mb-0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th># S/N</th>\r\n                      <th>Product Unit</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"3\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <!-- Pagination -->\r\n                <div class=\"card-body py-0\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                      <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                    </div>\r\n                    <div class=\"col-sm pt-3\">\r\n                      <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                        (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                      </ngb-pagination>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- / Pagination -->\r\n              </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/system-setup/production-unit/production-unit.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/production-unit/production-unit.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL3Byb2R1Y3Rpb24tdW5pdC9wcm9kdWN0aW9uLXVuaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/production-unit/production-unit.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/system-setup/production-unit/production-unit.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductionUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionUnitComponent", function() { return ProductionUnitComponent; });
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


var ProductionUnitComponent = /** @class */ (function (_super) {
    __extends(ProductionUnitComponent, _super);
    function ProductionUnitComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Production Unit";
        return _this;
    }
    ProductionUnitComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    ProductionUnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-production-unit',
            template: __webpack_require__(/*! ./production-unit.component.html */ "./src/app/home/system-setup/production-unit/production-unit.component.html"),
            styles: [__webpack_require__(/*! ./production-unit.component.scss */ "./src/app/home/system-setup/production-unit/production-unit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductionUnitComponent);
    return ProductionUnitComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/setup-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/system-setup/setup-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupRoutingModule", function() { return SetupRoutingModule; });
/* harmony import */ var _production_floor_production_floor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./production-floor/production-floor.component */ "./src/app/home/system-setup/production-floor/production-floor.component.ts");
/* harmony import */ var _assign_dept_gl_assign_dept_gl_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assign-dept-gl/assign-dept-gl.component */ "./src/app/home/system-setup/assign-dept-gl/assign-dept-gl.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bank_branch_bank_branch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bank-branch/bank-branch.component */ "./src/app/home/system-setup/bank-branch/bank-branch.component.ts");
/* harmony import */ var _division_division_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./division/division.component */ "./src/app/home/system-setup/division/division.component.ts");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group/group.component */ "./src/app/home/system-setup/group/group.component.ts");
/* harmony import */ var _holyday_calender_holyday_calender_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./holyday-calender/holyday-calender.component */ "./src/app/home/system-setup/holyday-calender/holyday-calender.component.ts");
/* harmony import */ var _production_unit_production_unit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./production-unit/production-unit.component */ "./src/app/home/system-setup/production-unit/production-unit.component.ts");
/* harmony import */ var _production_line_production_line_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./production-line/production-line.component */ "./src/app/home/system-setup/production-line/production-line.component.ts");
/* harmony import */ var _production_machine_production_machine_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./production-machine/production-machine.component */ "./src/app/home/system-setup/production-machine/production-machine.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SetupRoutingModule = /** @class */ (function () {
    function SetupRoutingModule() {
    }
    SetupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'bank-branch', component: _bank_branch_bank_branch_component__WEBPACK_IMPORTED_MODULE_4__["BankBranchComponent"] },
                    { path: 'division', component: _division_division_component__WEBPACK_IMPORTED_MODULE_5__["DivisionComponent"] },
                    { path: 'group', component: _group_group_component__WEBPACK_IMPORTED_MODULE_6__["GroupComponent"] },
                    { path: 'holyday-calender', component: _holyday_calender_holyday_calender_component__WEBPACK_IMPORTED_MODULE_7__["HolydayCalenderComponent"] },
                    { path: 'assign-dept-gl', component: _assign_dept_gl_assign_dept_gl_component__WEBPACK_IMPORTED_MODULE_1__["AssignDeptGlComponent"] },
                    { path: 'production-unit', component: _production_unit_production_unit_component__WEBPACK_IMPORTED_MODULE_8__["ProductionUnitComponent"] },
                    { path: 'production-floor', component: _production_floor_production_floor_component__WEBPACK_IMPORTED_MODULE_0__["ProductionFloorComponent"] },
                    { path: 'production-line', component: _production_line_production_line_component__WEBPACK_IMPORTED_MODULE_9__["ProductionLineComponent"] },
                    { path: 'production-machine', component: _production_machine_production_machine_component__WEBPACK_IMPORTED_MODULE_10__["ProductionMachineComponent"] }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], SetupRoutingModule);
    return SetupRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/system-setup/setup.module.ts":
/*!***************************************************!*\
  !*** ./src/app/home/system-setup/setup.module.ts ***!
  \***************************************************/
/*! exports provided: SetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModule", function() { return SetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bank_branch_bank_branch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-branch/bank-branch.component */ "./src/app/home/system-setup/bank-branch/bank-branch.component.ts");
/* harmony import */ var _setup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup-routing.module */ "./src/app/home/system-setup/setup-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _division_division_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./division/division.component */ "./src/app/home/system-setup/division/division.component.ts");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./group/group.component */ "./src/app/home/system-setup/group/group.component.ts");
/* harmony import */ var _holyday_calender_holyday_calender_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./holyday-calender/holyday-calender.component */ "./src/app/home/system-setup/holyday-calender/holyday-calender.component.ts");
/* harmony import */ var _assign_dept_gl_assign_dept_gl_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assign-dept-gl/assign-dept-gl.component */ "./src/app/home/system-setup/assign-dept-gl/assign-dept-gl.component.ts");
/* harmony import */ var _production_unit_production_unit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./production-unit/production-unit.component */ "./src/app/home/system-setup/production-unit/production-unit.component.ts");
/* harmony import */ var _production_floor_production_floor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./production-floor/production-floor.component */ "./src/app/home/system-setup/production-floor/production-floor.component.ts");
/* harmony import */ var _production_line_production_line_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./production-line/production-line.component */ "./src/app/home/system-setup/production-line/production-line.component.ts");
/* harmony import */ var _production_machine_production_machine_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./production-machine/production-machine.component */ "./src/app/home/system-setup/production-machine/production-machine.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SetupModule = /** @class */ (function () {
    function SetupModule() {
    }
    SetupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _setup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SetupRoutingModule"]
            ],
            declarations: [
                _bank_branch_bank_branch_component__WEBPACK_IMPORTED_MODULE_2__["BankBranchComponent"],
                _division_division_component__WEBPACK_IMPORTED_MODULE_8__["DivisionComponent"],
                _group_group_component__WEBPACK_IMPORTED_MODULE_9__["GroupComponent"],
                _holyday_calender_holyday_calender_component__WEBPACK_IMPORTED_MODULE_10__["HolydayCalenderComponent"],
                _assign_dept_gl_assign_dept_gl_component__WEBPACK_IMPORTED_MODULE_11__["AssignDeptGlComponent"],
                _production_unit_production_unit_component__WEBPACK_IMPORTED_MODULE_12__["ProductionUnitComponent"],
                _production_floor_production_floor_component__WEBPACK_IMPORTED_MODULE_13__["ProductionFloorComponent"],
                _production_line_production_line_component__WEBPACK_IMPORTED_MODULE_14__["ProductionLineComponent"],
                _production_machine_production_machine_component__WEBPACK_IMPORTED_MODULE_15__["ProductionMachineComponent"]
            ]
        })
    ], SetupModule);
    return SetupModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-system-setup-setup-module.js.map