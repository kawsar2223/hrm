(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-recruitment-recruitment-module"],{

/***/ "./src/app/home/recruitment/approval-by-account/approval-by-account.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/recruitment/approval-by-account/approval-by-account.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">Approval Recruitment By Account</h4>\r\n    <div class=\"card-body\">\r\n      <!--1st Row -->\r\n      <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n    \r\n          <!-- column-->\r\n          <div class=\"col-8\">\r\n              <!--Reason-->\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Reason</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control\">\r\n                <option>Select</option>\r\n                <option>Option-1</option>\r\n                <option>Option-2</option>\r\n                <option>Option-3</option>\r\n                <option>Option-4</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n            </div>\r\n          \r\n        </div>\r\n      \r\n      <!-- Table-->\r\n\r\n          <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n          <div class=\"demo-vertical-spacing\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Application Name</th>\r\n                    <th>Reference</th>\r\n                    <th>Mobile</th>\r\n                    <th>Department</th>\r\n                    <th>Designation</th>\r\n                    <th>Total Experience</th>\r\n                    <th>Relevant Experience</th>\r\n                    <th>PayScale</th>\r\n                    <th>Salary</th>\r\n                    <th>File Name</th>\r\n                    <th>View</th>\r\n                    <th>Recommend</th>\r\n                    <th>Approve</th>\r\n                    <th>Cancel</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!--Button-->\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n          <div class=\"demo-inline-spacing mt-3\">\r\n            <label class=\"9\"></label>\r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n              <span class=\"fas fa-window-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <!--end Card body-->\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home/recruitment/approval-by-account/approval-by-account.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/recruitment/approval-by-account/approval-by-account.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVjcnVpdG1lbnQvYXBwcm92YWwtYnktYWNjb3VudC9hcHByb3ZhbC1ieS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/recruitment/approval-by-account/approval-by-account.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/home/recruitment/approval-by-account/approval-by-account.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ApprovalByAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalByAccountComponent", function() { return ApprovalByAccountComponent; });
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

var ApprovalByAccountComponent = /** @class */ (function () {
    function ApprovalByAccountComponent() {
    }
    ApprovalByAccountComponent.prototype.ngOnInit = function () {
    };
    ApprovalByAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approval-by-account',
            template: __webpack_require__(/*! ./approval-by-account.component.html */ "./src/app/home/recruitment/approval-by-account/approval-by-account.component.html"),
            styles: [__webpack_require__(/*! ./approval-by-account.component.scss */ "./src/app/home/recruitment/approval-by-account/approval-by-account.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApprovalByAccountComponent);
    return ApprovalByAccountComponent;
}());



/***/ }),

/***/ "./src/app/home/recruitment/approval-by-hr/approval-by-hr.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/home/recruitment/approval-by-hr/approval-by-hr.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">Approval Recruitment By HR</h4>\r\n    <div class=\"card-body\">\r\n      <!--1st Row -->\r\n      <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n    \r\n          <!-- column-->\r\n          <div class=\"col-8\">\r\n              <!--Reason-->\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Reason</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control\">\r\n                <option>Select</option>\r\n                <option>Option-1</option>\r\n                <option>Option-2</option>\r\n                <option>Option-3</option>\r\n                <option>Option-4</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n            </div>\r\n          \r\n        </div>\r\n      \r\n      <!-- Table-->\r\n\r\n          <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n          <div class=\"demo-vertical-spacing\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Application Name</th>\r\n                    <th>Reference</th>\r\n                    <th>Mobile</th>\r\n                    <th>Department</th>\r\n                    <th>Designation</th>\r\n                    <th>Total Experience</th>\r\n                    <th>Relevant Experience</th>\r\n                    <th>PayScale</th>\r\n                    <th>Salary</th>\r\n                    <th>File Name</th>\r\n                    <th>View</th>\r\n                    <th>Recommend</th>\r\n                    <th>Approve</th>\r\n                    <th>Cancel</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!--Button-->\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n          <div class=\"demo-inline-spacing mt-3\">\r\n            <label class=\"9\"></label>\r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n              <span class=\"fas fa-window-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <!--end Card body-->\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home/recruitment/approval-by-hr/approval-by-hr.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/home/recruitment/approval-by-hr/approval-by-hr.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVjcnVpdG1lbnQvYXBwcm92YWwtYnktaHIvYXBwcm92YWwtYnktaHIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/recruitment/approval-by-hr/approval-by-hr.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/recruitment/approval-by-hr/approval-by-hr.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ApprovalByHrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalByHrComponent", function() { return ApprovalByHrComponent; });
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

var ApprovalByHrComponent = /** @class */ (function () {
    function ApprovalByHrComponent() {
    }
    ApprovalByHrComponent.prototype.ngOnInit = function () {
    };
    ApprovalByHrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approval-by-hr',
            template: __webpack_require__(/*! ./approval-by-hr.component.html */ "./src/app/home/recruitment/approval-by-hr/approval-by-hr.component.html"),
            styles: [__webpack_require__(/*! ./approval-by-hr.component.scss */ "./src/app/home/recruitment/approval-by-hr/approval-by-hr.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApprovalByHrComponent);
    return ApprovalByHrComponent;
}());



/***/ }),

/***/ "./src/app/home/recruitment/recruitment-approval/recruitment-approval.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/recruitment/recruitment-approval/recruitment-approval.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">Approval Recruitment </h4>\r\n    <div class=\"card-body\">\r\n      <!--1st Row -->\r\n      <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n          <!--Left column-->\r\n          <div class=\"col-6\">\r\n            <!--Forward To-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Forward To</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Forward To\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                      <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Name-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\"> Name</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\" Name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n    \r\n          <!--Right column-->\r\n          <div class=\"col-6\">\r\n            <!--Designation-->\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Designation</label>\r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n                </div>\r\n              </div>\r\n              <!--Reason-->\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Reason</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control\">\r\n                <option>Select</option>\r\n                <option>Option-1</option>\r\n                <option>Option-2</option>\r\n                <option>Option-3</option>\r\n                <option>Option-4</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n            </div>\r\n          \r\n        </div>\r\n      \r\n      <!-- Table-->\r\n\r\n          <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n          <div class=\"demo-vertical-spacing\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Application Name</th>\r\n                    <th>Reference</th>\r\n                    <th>Mobile</th>\r\n                    <th>Department</th>\r\n                    <th>Designation</th>\r\n                    <th>Total Experience</th>\r\n                    <th>Relevant Experience</th>\r\n                    <th>PayScale</th>\r\n                    <th>Salary</th>\r\n                    <th>File Name</th>\r\n                    <th>View</th>\r\n                    <th>Recommend</th>\r\n                    <th>Approve</th>\r\n                    <th>Cancel</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!--Button-->\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n          <div class=\"demo-inline-spacing mt-3\">\r\n            <label class=\"9\"></label>\r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n              <span class=\"fas fa-window-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <!--end Card body-->\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home/recruitment/recruitment-approval/recruitment-approval.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/recruitment/recruitment-approval/recruitment-approval.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVjcnVpdG1lbnQvcmVjcnVpdG1lbnQtYXBwcm92YWwvcmVjcnVpdG1lbnQtYXBwcm92YWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/recruitment/recruitment-approval/recruitment-approval.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/recruitment/recruitment-approval/recruitment-approval.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RecruitmentApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentApprovalComponent", function() { return RecruitmentApprovalComponent; });
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

var RecruitmentApprovalComponent = /** @class */ (function () {
    function RecruitmentApprovalComponent() {
    }
    RecruitmentApprovalComponent.prototype.ngOnInit = function () {
    };
    RecruitmentApprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recruitment-approval',
            template: __webpack_require__(/*! ./recruitment-approval.component.html */ "./src/app/home/recruitment/recruitment-approval/recruitment-approval.component.html"),
            styles: [__webpack_require__(/*! ./recruitment-approval.component.scss */ "./src/app/home/recruitment/recruitment-approval/recruitment-approval.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RecruitmentApprovalComponent);
    return RecruitmentApprovalComponent;
}());



/***/ }),

/***/ "./src/app/home/recruitment/recruitment-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/recruitment/recruitment-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: RecruitmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentRoutingModule", function() { return RecruitmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recruitment/recruitment.component */ "./src/app/home/recruitment/recruitment/recruitment.component.ts");
/* harmony import */ var _recruitment_approval_recruitment_approval_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recruitment-approval/recruitment-approval.component */ "./src/app/home/recruitment/recruitment-approval/recruitment-approval.component.ts");
/* harmony import */ var _approval_by_hr_approval_by_hr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approval-by-hr/approval-by-hr.component */ "./src/app/home/recruitment/approval-by-hr/approval-by-hr.component.ts");
/* harmony import */ var _approval_by_account_approval_by_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approval-by-account/approval-by-account.component */ "./src/app/home/recruitment/approval-by-account/approval-by-account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RecruitmentRoutingModule = /** @class */ (function () {
    function RecruitmentRoutingModule() {
    }
    RecruitmentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'recruitment', component: _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_2__["RecruitmentComponent"] },
                    { path: 'recruitment-approval', component: _recruitment_approval_recruitment_approval_component__WEBPACK_IMPORTED_MODULE_3__["RecruitmentApprovalComponent"] },
                    { path: 'approval-by-hr', component: _approval_by_hr_approval_by_hr_component__WEBPACK_IMPORTED_MODULE_4__["ApprovalByHrComponent"] },
                    { path: 'approval-by-account', component: _approval_by_account_approval_by_account_component__WEBPACK_IMPORTED_MODULE_5__["ApprovalByAccountComponent"] },
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RecruitmentRoutingModule);
    return RecruitmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/recruitment/recruitment.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/recruitment/recruitment.module.ts ***!
  \********************************************************/
/*! exports provided: RecruitmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentModule", function() { return RecruitmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _recruitment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recruitment-routing.module */ "./src/app/home/recruitment/recruitment-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recruitment/recruitment.component */ "./src/app/home/recruitment/recruitment/recruitment.component.ts");
/* harmony import */ var _recruitment_approval_recruitment_approval_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recruitment-approval/recruitment-approval.component */ "./src/app/home/recruitment/recruitment-approval/recruitment-approval.component.ts");
/* harmony import */ var _approval_by_hr_approval_by_hr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./approval-by-hr/approval-by-hr.component */ "./src/app/home/recruitment/approval-by-hr/approval-by-hr.component.ts");
/* harmony import */ var _approval_by_account_approval_by_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./approval-by-account/approval-by-account.component */ "./src/app/home/recruitment/approval-by-account/approval-by-account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var RecruitmentModule = /** @class */ (function () {
    function RecruitmentModule() {
    }
    RecruitmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_5__["RecruitmentComponent"],
                _recruitment_approval_recruitment_approval_component__WEBPACK_IMPORTED_MODULE_6__["RecruitmentApprovalComponent"],
                _approval_by_hr_approval_by_hr_component__WEBPACK_IMPORTED_MODULE_7__["ApprovalByHrComponent"],
                _approval_by_account_approval_by_account_component__WEBPACK_IMPORTED_MODULE_8__["ApprovalByAccountComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _recruitment_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecruitmentRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ]
        })
    ], RecruitmentModule);
    return RecruitmentModule;
}());



/***/ }),

/***/ "./src/app/home/recruitment/recruitment/recruitment.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/home/recruitment/recruitment/recruitment.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Recruitment Request </h4>\r\n  <div class=\"card-body\">\r\n    <!--1st Row -->\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n        <!--Application Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Application Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Application Name\">\r\n          </div>\r\n        </div>\r\n        <!--Reference By-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Reference By</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Reference By\">\r\n          </div>\r\n        </div>\r\n        <!--Mobile No-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Mobile No</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <button class=\"input-group-text btn-primary\">\r\n                  <span class=\" ion ion-md-call\"></span>\r\n                </button>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Mobile No\" aria-label=\"Mobile No\"\r\n                aria-describedby=\"basic-addon1\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Address-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Address</label>\r\n          <div class=\"col-sm-8\">\r\n            <textarea class=\"form-control\" placeholder=\"Address\"></textarea>\r\n          </div>\r\n        </div>\r\n        <!--Reference By-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">File Name</label>\r\n          <div class=\"col-sm-6\">\r\n            <input type=\"file\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"col-sm-1\">\r\n            <button class=\"btn btn-success\">Add File</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <!--Department-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Designation-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Total Experience-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Total Experience</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Total Experience\">\r\n          </div>\r\n        </div>\r\n        <!--Relevant Experience-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Relevant Experience</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Relevant Experience\">\r\n          </div>\r\n        </div>\r\n        <!--Salary Level-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Salary Level</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Salary-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Salary</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Salary\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n        <!--Left column-->\r\n        <div class=\"col-8\">\r\n          <!--Employee Id-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                    <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--Employee Name-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n            </div>\r\n          </div>\r\n          <!--Designation-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Designation</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"vertical\"></div>\r\n        <!--Right column-->\r\n        <div class=\"col-4\">\r\n        </div>\r\n      </div>\r\n    <!--2nd End row-->\r\n    <!--Button-->\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"></span> Save</button>\r\n        <button type=\"clear\" class=\"btn btn-info\">\r\n          <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"fas fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n    <!-- Table-->\r\n    <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n    <div class=\"demo-vertical-spacing\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Application Name</th>\r\n              <th>Reference</th>\r\n              <th>Mobile</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th>1</th>\r\n              <td>Hamid</td>\r\n              <td>BITM</td>\r\n              <td>021999</td>\r\n            </tr>\r\n          </tbody>\r\n          <tbody>\r\n            <tr>\r\n              <th>2</th>\r\n              <td>Sumon</td>\r\n              <td>BITM</td>\r\n              <td>021999</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!--1st Table End -->\r\n        <!-- 2nd Table-->\r\n        <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n        <div class=\"demo-vertical-spacing\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Application Name</th>\r\n                  <th>Reference</th>\r\n                  <th>Mobile</th>\r\n                  <th>Last Position</th>\r\n                  <th>Remark</th>\r\n                  <th>Status</th>\r\n                  <th>Detail</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>Hamid</td>\r\n                  <td>BITM</td>\r\n                  <td>021999</td>\r\n                  <td>021999</td>\r\n                  <td>021999</td>\r\n                  <td>021999</td>\r\n                  <td>021999</td>\r\n                </tr>\r\n              </tbody>\r\n              <tbody>\r\n                <tr>\r\n                  <td>Sumon</td>\r\n                  <td>BITM</td>\r\n                  <td>021999</td>\r\n                  <td>021999</td>\r\n                  <td>021999</td>\r\n                  <td>021999</td>\r\n                  <td>021999</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n  </div>\r\n  <!--end Card body-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/recruitment/recruitment/recruitment.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/recruitment/recruitment/recruitment.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVjcnVpdG1lbnQvcmVjcnVpdG1lbnQvcmVjcnVpdG1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/recruitment/recruitment/recruitment.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/recruitment/recruitment/recruitment.component.ts ***!
  \***********************************************************************/
/*! exports provided: RecruitmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentComponent", function() { return RecruitmentComponent; });
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

var RecruitmentComponent = /** @class */ (function () {
    function RecruitmentComponent() {
    }
    RecruitmentComponent.prototype.ngOnInit = function () {
    };
    RecruitmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recruitment',
            template: __webpack_require__(/*! ./recruitment.component.html */ "./src/app/home/recruitment/recruitment/recruitment.component.html"),
            styles: [__webpack_require__(/*! ./recruitment.component.scss */ "./src/app/home/recruitment/recruitment/recruitment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RecruitmentComponent);
    return RecruitmentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-recruitment-recruitment-module.js.map