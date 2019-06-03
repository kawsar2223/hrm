(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-gl-integration-gl-integration-module"],{

/***/ "./src/app/home/gl-integration/cost-head/cost-head.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/gl-integration/cost-head/cost-head.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    GL Cost Head\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n      <form>\r\n        <!-- Description-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\">Description</label>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"GL Description\">\r\n          </div>\r\n        </div>\r\n\r\n        <!--Button-->\r\n        <div class=\"form-group row\">\r\n          <div class=\"demo-inline-spacing mt-3 center\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"></span> Save</button>\r\n            <button type=\"clear\" class=\"btn btn-info\">\r\n              <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n              <span class=\"fas fa-window-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!--Table-->\r\n  <div class=\"card mb-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\" style=\"margin: 0 auto\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form autocomplete=\"off\">\r\n            <div class=\"form-group\">\r\n              <div class=\"table-responsive mb-4\">\r\n                <table class=\"table table-hover table-striped mb-0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Cost Head</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"1\" class=\"font-italic text-center\">No item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n\r\n\r\n              <!-- Pagination -->\r\n              <div class=\"card-body py-0\">\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                    <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                  </div>\r\n                  <div class=\"col-sm pt-3\">\r\n                    <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                      (pageChange)=\"update()\" size=\"sm\"\r\n                      class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                    </ngb-pagination>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <!-- / Pagination -->\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/gl-integration/cost-head/cost-head.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/gl-integration/cost-head/cost-head.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ2wtaW50ZWdyYXRpb24vY29zdC1oZWFkL2Nvc3QtaGVhZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/gl-integration/cost-head/cost-head.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/gl-integration/cost-head/cost-head.component.ts ***!
  \**********************************************************************/
/*! exports provided: CostHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostHeadComponent", function() { return CostHeadComponent; });
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


var CostHeadComponent = /** @class */ (function (_super) {
    __extends(CostHeadComponent, _super);
    function CostHeadComponent() {
        return _super.call(this) || this;
    }
    CostHeadComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    CostHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-head',
            template: __webpack_require__(/*! ./cost-head.component.html */ "./src/app/home/gl-integration/cost-head/cost-head.component.html"),
            styles: [__webpack_require__(/*! ./cost-head.component.scss */ "./src/app/home/gl-integration/cost-head/cost-head.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CostHeadComponent);
    return CostHeadComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/gl-integration/gl-code/gl-code.component.html":
/*!********************************************************************!*\
  !*** ./src/app/home/gl-integration/gl-code/gl-code.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    GL Code\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Cost Head-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-9 text-sm-right\">Cost Head</label>\r\n              <div class=\"col-sm-3\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--GL Department-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">GL Department</label>\r\n              <div class=\"col-sm-9\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!-- Location -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\"> Location</label>\r\n              <div class=\"col-sm-9\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--GL Code-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">GL Code</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"GL Code\">\r\n              </div>\r\n            </div>\r\n            <!--GL Description-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">GL Description</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"GL Description\">\r\n              </div>\r\n            </div>\r\n      \r\n            <!--Button-->\r\n            <div class=\"form-group row\">\r\n              <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-save\"></span> Save</button>\r\n                <button type=\"clear\" class=\"btn btn-info\">\r\n                  <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n                <button type=\"\" class=\"btn btn-secondary\">\r\n                  <span class=\"fas fa-window-close\"></span> Close</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n  </div>\r\n  <!--Table-->\r\n  <div class=\"card mb-4\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          Per page: &nbsp;\r\n          <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n            class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n            <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col\">\r\n          <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n            class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form autocomplete=\"off\">\r\n        <div class=\"form-group\">\r\n          <div class=\"table-responsive mb-4\">\r\n            <table class=\"table table-hover table-striped mb-0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Cost Head</th>\r\n                  <th>GL Dep</th>\r\n                  <th>Location</th>\r\n                  <th>GL Code</th>\r\n                  <th>GL Description</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"card-body py-0\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n              </div>\r\n              <div class=\"col-sm pt-3\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                  (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                </ngb-pagination>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- / Pagination --> \r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/gl-integration/gl-code/gl-code.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/home/gl-integration/gl-code/gl-code.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ2wtaW50ZWdyYXRpb24vZ2wtY29kZS9nbC1jb2RlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/gl-integration/gl-code/gl-code.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/gl-integration/gl-code/gl-code.component.ts ***!
  \******************************************************************/
/*! exports provided: GlCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlCodeComponent", function() { return GlCodeComponent; });
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


var GlCodeComponent = /** @class */ (function (_super) {
    __extends(GlCodeComponent, _super);
    function GlCodeComponent() {
        return _super.call(this) || this;
    }
    GlCodeComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    GlCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gl-code',
            template: __webpack_require__(/*! ./gl-code.component.html */ "./src/app/home/gl-integration/gl-code/gl-code.component.html"),
            styles: [__webpack_require__(/*! ./gl-code.component.scss */ "./src/app/home/gl-integration/gl-code/gl-code.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GlCodeComponent);
    return GlCodeComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/gl-integration/gl-integration-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/gl-integration/gl-integration-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: GlIntegrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlIntegrationRoutingModule", function() { return GlIntegrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cost_head_cost_head_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cost-head/cost-head.component */ "./src/app/home/gl-integration/cost-head/cost-head.component.ts");
/* harmony import */ var _gl_code_gl_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gl-code/gl-code.component */ "./src/app/home/gl-integration/gl-code/gl-code.component.ts");
/* harmony import */ var _salary_head_assign_salary_head_assign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salary-head-assign/salary-head-assign.component */ "./src/app/home/gl-integration/salary-head-assign/salary-head-assign.component.ts");
/* harmony import */ var _gl_report_gl_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gl-report/gl-report.component */ "./src/app/home/gl-integration/gl-report/gl-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GlIntegrationRoutingModule = /** @class */ (function () {
    function GlIntegrationRoutingModule() {
    }
    GlIntegrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'cost-head', component: _cost_head_cost_head_component__WEBPACK_IMPORTED_MODULE_2__["CostHeadComponent"] },
                    { path: 'gl-code', component: _gl_code_gl_code_component__WEBPACK_IMPORTED_MODULE_3__["GlCodeComponent"] },
                    { path: 'salary-head-assign', component: _salary_head_assign_salary_head_assign_component__WEBPACK_IMPORTED_MODULE_4__["SalaryHeadAssignComponent"] },
                    { path: 'gl-report', component: _gl_report_gl_report_component__WEBPACK_IMPORTED_MODULE_5__["GlReportComponent"] },
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GlIntegrationRoutingModule);
    return GlIntegrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/gl-integration/gl-integration.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/gl-integration/gl-integration.module.ts ***!
  \**************************************************************/
/*! exports provided: GlIntegrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlIntegrationModule", function() { return GlIntegrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cost_head_cost_head_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cost-head/cost-head.component */ "./src/app/home/gl-integration/cost-head/cost-head.component.ts");
/* harmony import */ var _gl_integration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gl-integration-routing.module */ "./src/app/home/gl-integration/gl-integration-routing.module.ts");
/* harmony import */ var _gl_code_gl_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gl-code/gl-code.component */ "./src/app/home/gl-integration/gl-code/gl-code.component.ts");
/* harmony import */ var _salary_head_assign_salary_head_assign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./salary-head-assign/salary-head-assign.component */ "./src/app/home/gl-integration/salary-head-assign/salary-head-assign.component.ts");
/* harmony import */ var _gl_report_gl_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gl-report/gl-report.component */ "./src/app/home/gl-integration/gl-report/gl-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var GlIntegrationModule = /** @class */ (function () {
    function GlIntegrationModule() {
    }
    GlIntegrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _cost_head_cost_head_component__WEBPACK_IMPORTED_MODULE_4__["CostHeadComponent"],
                _gl_code_gl_code_component__WEBPACK_IMPORTED_MODULE_6__["GlCodeComponent"],
                _salary_head_assign_salary_head_assign_component__WEBPACK_IMPORTED_MODULE_7__["SalaryHeadAssignComponent"],
                _gl_report_gl_report_component__WEBPACK_IMPORTED_MODULE_8__["GlReportComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _gl_integration_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlIntegrationRoutingModule"]
            ]
        })
    ], GlIntegrationModule);
    return GlIntegrationModule;
}());



/***/ }),

/***/ "./src/app/home/gl-integration/gl-report/gl-report.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/gl-integration/gl-report/gl-report.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    GL Report\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n      <form>\r\n        <!--Report Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-3 text-sm-right\">Report Type</label>\r\n          <div class=\"col-sm-9\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Button-->\r\n        <div class=\"form-group row\">\r\n          <div class=\"demo-inline-spacing mt-3 center\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/gl-integration/gl-report/gl-report.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/gl-integration/gl-report/gl-report.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ2wtaW50ZWdyYXRpb24vZ2wtcmVwb3J0L2dsLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/gl-integration/gl-report/gl-report.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/gl-integration/gl-report/gl-report.component.ts ***!
  \**********************************************************************/
/*! exports provided: GlReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlReportComponent", function() { return GlReportComponent; });
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

var GlReportComponent = /** @class */ (function () {
    function GlReportComponent() {
    }
    GlReportComponent.prototype.ngOnInit = function () {
    };
    GlReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gl-report',
            template: __webpack_require__(/*! ./gl-report.component.html */ "./src/app/home/gl-integration/gl-report/gl-report.component.html"),
            styles: [__webpack_require__(/*! ./gl-report.component.scss */ "./src/app/home/gl-integration/gl-report/gl-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GlReportComponent);
    return GlReportComponent;
}());



/***/ }),

/***/ "./src/app/home/gl-integration/salary-head-assign/salary-head-assign.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/home/gl-integration/salary-head-assign/salary-head-assign.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Salary Head Assign\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Cost Head-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Cost Head</label>\r\n              <div class=\"col-sm-9\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Salary Head -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Head</label>\r\n              <div class=\"col-sm-9\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Date-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Date</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                    #d1=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                      <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Note-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Note</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Note\">\r\n              </div>\r\n            </div>\r\n      \r\n            <!--Button-->\r\n            <div class=\"form-group row\">\r\n              <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-save\"></span> Save</button>\r\n                <button type=\"clear\" class=\"btn btn-info\">\r\n                  <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n                <button type=\"\" class=\"btn btn-secondary\">\r\n                  <span class=\"fas fa-window-close\"></span> Close</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n  </div>\r\n  <!--Table-->\r\n  <div class=\"card mb-4\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          Per page: &nbsp;\r\n          <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n            class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n            <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col\">\r\n          <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n            class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form autocomplete=\"off\">\r\n        <div class=\"form-group\">\r\n          <div class=\"table-responsive mb-4\">\r\n            <table class=\"table table-hover table-striped mb-0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Allowance</th>\r\n                  <th>Payment Type</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"2\" class=\"font-italic text-center\">No item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"card-body py-0\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n              </div>\r\n              <div class=\"col-sm pt-3\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                  (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                </ngb-pagination>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- / Pagination -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/gl-integration/salary-head-assign/salary-head-assign.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/home/gl-integration/salary-head-assign/salary-head-assign.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ2wtaW50ZWdyYXRpb24vc2FsYXJ5LWhlYWQtYXNzaWduL3NhbGFyeS1oZWFkLWFzc2lnbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/gl-integration/salary-head-assign/salary-head-assign.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/home/gl-integration/salary-head-assign/salary-head-assign.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SalaryHeadAssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryHeadAssignComponent", function() { return SalaryHeadAssignComponent; });
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


var SalaryHeadAssignComponent = /** @class */ (function (_super) {
    __extends(SalaryHeadAssignComponent, _super);
    function SalaryHeadAssignComponent() {
        return _super.call(this) || this;
    }
    SalaryHeadAssignComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    SalaryHeadAssignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-head-assign',
            template: __webpack_require__(/*! ./salary-head-assign.component.html */ "./src/app/home/gl-integration/salary-head-assign/salary-head-assign.component.html"),
            styles: [__webpack_require__(/*! ./salary-head-assign.component.scss */ "./src/app/home/gl-integration/salary-head-assign/salary-head-assign.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryHeadAssignComponent);
    return SalaryHeadAssignComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ })

}]);
//# sourceMappingURL=home-gl-integration-gl-integration-module.js.map