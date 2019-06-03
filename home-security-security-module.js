(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-security-security-module"],{

/***/ "./src/app/home/security/assign-branch/assign-branch.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/security/assign-branch/assign-branch.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 center\">\r\n          <form action=\"\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"userName\" class=\"col-md-4\">User Name</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"userName\" id=\"userName\" class=\"form-control\">\r\n                  <option value=\"\">Select User</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"compName\" class=\"col-md-4\">Company Name</label>\r\n                <div class=\"col-md-8\">\r\n                  <select name=\"companyName\" id=\"compName\" class=\"form-control\">\r\n                    <option value=\"\">Select Company</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            <div class=\"row\">\r\n              <table class=\"table table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Select</th>\r\n                    <th>Company Name</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td><input type=\"checkbox\"></td>\r\n                    <td>The Daily Star</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\"></div>\r\n              <div class=\"col-md-6 demo-inline-spacing\">\r\n                <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n                <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/security/assign-branch/assign-branch.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/security/assign-branch/assign-branch.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VjdXJpdHkvYXNzaWduLWJyYW5jaC9hc3NpZ24tYnJhbmNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/security/assign-branch/assign-branch.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/security/assign-branch/assign-branch.component.ts ***!
  \************************************************************************/
/*! exports provided: AssignBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignBranchComponent", function() { return AssignBranchComponent; });
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

var AssignBranchComponent = /** @class */ (function () {
    function AssignBranchComponent() {
        this.title = "Assign branch to User";
    }
    AssignBranchComponent.prototype.ngOnInit = function () {
    };
    AssignBranchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-branch',
            template: __webpack_require__(/*! ./assign-branch.component.html */ "./src/app/home/security/assign-branch/assign-branch.component.html"),
            styles: [__webpack_require__(/*! ./assign-branch.component.scss */ "./src/app/home/security/assign-branch/assign-branch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssignBranchComponent);
    return AssignBranchComponent;
}());



/***/ }),

/***/ "./src/app/home/security/assign-company/assign-company.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home/security/assign-company/assign-company.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 center\">\r\n        <form action=\"\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"userName\" class=\"col-md-4\">User Name</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"userName\" id=\"userName\" class=\"form-control\">\r\n                <option value=\"\">Select User</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <table class=\"table table-bordered\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Select</th>\r\n                  <th>Company Name</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td><input type=\"checkbox\"></td>\r\n                  <td>The Daily Star</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\"></div>\r\n            <div class=\"col-md-6 demo-inline-spacing\">\r\n              <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n              <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/security/assign-company/assign-company.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/security/assign-company/assign-company.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VjdXJpdHkvYXNzaWduLWNvbXBhbnkvYXNzaWduLWNvbXBhbnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/security/assign-company/assign-company.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/security/assign-company/assign-company.component.ts ***!
  \**************************************************************************/
/*! exports provided: AssignCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignCompanyComponent", function() { return AssignCompanyComponent; });
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

var AssignCompanyComponent = /** @class */ (function () {
    function AssignCompanyComponent() {
        this.title = "Assign Company to User";
    }
    AssignCompanyComponent.prototype.ngOnInit = function () {
    };
    AssignCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-company',
            template: __webpack_require__(/*! ./assign-company.component.html */ "./src/app/home/security/assign-company/assign-company.component.html"),
            styles: [__webpack_require__(/*! ./assign-company.component.scss */ "./src/app/home/security/assign-company/assign-company.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssignCompanyComponent);
    return AssignCompanyComponent;
}());



/***/ }),

/***/ "./src/app/home/security/assign-page-access/assign-page-access.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/home/security/assign-page-access/assign-page-access.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 center\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"userName\" class=\"col-md-4\">User Name</label>\r\n          <div class=\"col-md-8\">\r\n            <select name=\"userName\" id=\"userName\" class=\"form-control\">\r\n              <option value=\"\">Select User</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\">\r\n            <input type=\"checkbox\" name=\"system\" id=\"system\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n            <label (click)=\"toggle()\" for=\"system\" class=\"\">System Setup </label>\r\n            <span class=\"fas fa-caret-down\" style=\"float:right\"></span>\r\n            <ul *ngIf=\"isCollapse\" class=\"list-group\">\r\n              <li @listAnimation class=\"list-group-item\">\r\n                <input type=\"checkbox\" name=\"basicEntry\" id=\"basicEntry\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n                <label for=\"basicEntry\" class=\"\">Basic Entry </label>\r\n                <span class=\"fas fa-caret-down\" style=\"float:right\"></span>\r\n              </li>\r\n              <li @listAnimation class=\"list-group-item\">\r\n                <input type=\"checkbox\" name=\"bankBranch\" id=\"bankBranch\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n                <label for=\"bankBranch\" class=\"\">Bank Branch </label>\r\n              </li>\r\n              <li @listAnimation class=\"list-group-item\">\r\n                <input type=\"checkbox\" name=\"division\" id=\"division\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n                <label for=\"division\" class=\"\">Division </label>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <input type=\"checkbox\" name=\"attendance\" id=\"attendance\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n            <label for=\"attendance\" class=\"\">Attendance </label>\r\n            <span class=\"fas fa-caret-down\" style=\"float:right\"></span>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <input type=\"checkbox\" name=\"shift\" id=\"shift\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n            <label for=\"shift\" class=\"\">Shift Allowance </label>\r\n            <span class=\"fas fa-caret-down\" style=\"float:right\"></span>\r\n          </li>\r\n        </ul>\r\n        <br>\r\n        <div class=\"row\">\r\n          <button class=\"btn btn-success center\"><span class=\"fas fa-save\"></span> Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/security/assign-page-access/assign-page-access.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/security/assign-page-access/assign-page-access.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item label {\n  font-size: 18px; }\n\n.list-group-item {\n  background: #475e52;\n  color: #fff; }\n\nspan {\n  font-size: 20px; }\n\nul li ul li {\n  background: #fff;\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zZWN1cml0eS9hc3NpZ24tcGFnZS1hY2Nlc3MvQzpcXFVzZXJzXFxBbmRyb2lkXFxEZXNrdG9wXFxHaXRidWlsZFxcSFJNUy9zcmNcXGFwcFxcaG9tZVxcc2VjdXJpdHlcXGFzc2lnbi1wYWdlLWFjY2Vzc1xcYXNzaWduLXBhZ2UtYWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VjdXJpdHkvYXNzaWduLXBhZ2UtYWNjZXNzL2Fzc2lnbi1wYWdlLWFjY2Vzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0gbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICAgIGJhY2tncm91bmQ6ICM0NzVlNTI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5zcGFue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbnVsIGxpIHVsIGxpe1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/security/assign-page-access/assign-page-access.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/security/assign-page-access/assign-page-access.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AssignPageAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignPageAccessComponent", function() { return AssignPageAccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/animations */ "./src/app/shared/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssignPageAccessComponent = /** @class */ (function () {
    function AssignPageAccessComponent() {
        this.title = "Assign Page Access";
    }
    AssignPageAccessComponent.prototype.ngOnInit = function () {
        this.isCollapse = false;
    };
    AssignPageAccessComponent.prototype.toggle = function () {
        this.isCollapse = !this.isCollapse;
    };
    AssignPageAccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-page-access',
            template: __webpack_require__(/*! ./assign-page-access.component.html */ "./src/app/home/security/assign-page-access/assign-page-access.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_shared_animations__WEBPACK_IMPORTED_MODULE_2__["show"], {
                            params: {
                                duration: '2000ms'
                            }
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_shared_animations__WEBPACK_IMPORTED_MODULE_2__["hide"], {
                            params: {
                                duration: '2000ms'
                            }
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200)
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./assign-page-access.component.scss */ "./src/app/home/security/assign-page-access/assign-page-access.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssignPageAccessComponent);
    return AssignPageAccessComponent;
}());



/***/ }),

/***/ "./src/app/home/security/change-password/change-password.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/home/security/change-password/change-password.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 center\">\r\n        <form action=\"\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"loginId\" class=\"col-md-4\">Login Id</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" name=\"loginId\" id=\"loginId\" class=\"form-control\" placeholder=\"Login Id\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"oldPass\" class=\"col-md-4\">Old Password</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"password\" name=\"oldPass\" id=\"oldPass\" class=\"form-control\" placeholder=\"Old Password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"newPass\" class=\"col-md-4\">New Password</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"password\" name=\"newPass\" id=\"newPass\" class=\"form-control\" placeholder=\"New Password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"reenterPass\" class=\"col-md-4\">Re-enter Password</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"password\" name=\"reenterPass\" id=\"reenterPass\" class=\"form-control\" placeholder=\"Re-enter Password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-md-4\"></label>\r\n            <div class=\"col-md-8 demo-inline-spacing\">\r\n              <button class=\"btn btn-success\">Change</button>\r\n              <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/security/change-password/change-password.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/security/change-password/change-password.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VjdXJpdHkvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/security/change-password/change-password.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/security/change-password/change-password.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
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

var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
        this.title = "Change Password";
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/home/security/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/home/security/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/home/security/create-company/create-company.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home/security/create-company/create-company.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-body text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 center\">\r\n        <form action=\"\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"compName\" class=\"col-md-3\">Company Name</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" name=\"compName\" id=\"compName\" class=\"form-control\" placeholder=\"Company Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"address\" class=\"col-md-3\">Address</label>\r\n            <div class=\"col-md-8\">\r\n              <textarea rows=\"2\" name=\"address\" id=\"address\" class=\"form-control\" placeholder=\"Address\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"phone\" class=\"col-md-3\">Phone</label>\r\n            <div class=\"input-group col-md-8\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\">\r\n                  <span class=\"ion ion-md-call\"></span>\r\n                </button>\r\n              </div>\r\n              <input type=\"number\" name=\"phone\" id=\"phone\" class=\"form-control\" placeholder=\"Phone Number\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"web\" class=\"col-md-3\">Web Address</label>\r\n            <div class=\"input-group col-md-8\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\">\r\n                  https://\r\n                </button>\r\n              </div>\r\n              <input type=\"text\" name=\"web\" id=\"web\" class=\"form-control\" placeholder=\"Web Address\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"code\" class=\"col-md-3\">Code</label>\r\n            <div class=\"col-md-5\">\r\n              <input type=\"text\" name=\"code\" id=\"code\" class=\"form-control\" placeholder=\"Code\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"mainLogo\" class=\"col-md-3\">Main Logo</label>\r\n            <div class=\"col-md-8\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"file\" accept=\"image/\" (change)=\"onFileSelected($event.target.files)\"\r\n                    class=\"form-input-file\">\r\n                </div>\r\n                <div *ngIf=\"showMainLogo\" class=\"col-md-6 demo-inline-spacing\">\r\n                  <img style=\"margin-left:15px;\" src=\"data:image/jpg;base64,{{mainLogo}}\"\r\n                    style=\"height: 100px; width:100px\" alt=\"Preview image\">\r\n                  <button class=\"btn btn-danger\" (click)=\"clearImg()\">Remove</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"reportLogo\" class=\"col-md-3\">Report Logo</label>\r\n            <div class=\"col-md-8\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"file\" name=\"reportLogo\" id=\"reportLogo\" accept=\"image/\"\r\n                    (change)=\"onFileSelected2($event.target.files)\" class=\"form-input-file\">\r\n                </div>\r\n                <div *ngIf=\"showReportLogo\" class=\"col-md-6 demo-inline-spacing\">\r\n                  <img style=\"margin-left:15px;\" src=\"data:image/jpg;base64,{{reportLogo}}\"\r\n                    style=\"height: 100px; width:100px\" alt=\"Preview image\">\r\n                  <button class=\"btn btn-danger\" (click)=\"clearImg2()\">Remove</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-md-3\"></label>\r\n            <div class=\"col-md-8 demo-inline-spacing\">\r\n              <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n              <button class=\"btn btn-secondary\"><span class=\"ion ion-md-close\"></span> Close</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"row\">\r\n          <div class=\"card mb-4 center\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  Per page: &nbsp;\r\n                  <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                    class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                    <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                    class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <table class=\"table table-hover table-striped mb-2\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Company Name</th>\r\n                      <th>Address</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- Pagination -->\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/security/create-company/create-company.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/security/create-company/create-company.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VjdXJpdHkvY3JlYXRlLWNvbXBhbnkvY3JlYXRlLWNvbXBhbnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/security/create-company/create-company.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/security/create-company/create-company.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
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


var CreateCompanyComponent = /** @class */ (function (_super) {
    __extends(CreateCompanyComponent, _super);
    function CreateCompanyComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Create Company";
        _this.previewMainLogo = "";
        _this.showMainLogo = false;
        _this.previewReportLogo = "";
        _this.showReportLogo = false;
        return _this;
    }
    CreateCompanyComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    CreateCompanyComponent.prototype.onFileSelected = function (files) {
        this.showImage(files);
        this.getFiles(files);
        this.showMainLogo = true;
    };
    CreateCompanyComponent.prototype.showImage = function (files) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.previewMainLogo = event.target.result;
        };
        reader.readAsDataURL(files.item(0));
    };
    CreateCompanyComponent.prototype.getFiles = function (files) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(files[0]);
    };
    CreateCompanyComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.mainLogo = btoa(binaryString); // Converting binary string data.
        console.log(this.mainLogo);
    };
    CreateCompanyComponent.prototype.clearImg = function () {
        this.mainLogo = null;
        this.showMainLogo = false;
    };
    CreateCompanyComponent.prototype.onFileSelected2 = function (files) {
        this.showImage2(files);
        this.getFiles2(files);
        this.showReportLogo = true;
    };
    CreateCompanyComponent.prototype.showImage2 = function (files) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.previewReportLogo = event.target.result;
        };
        reader.readAsDataURL(files.item(0));
    };
    CreateCompanyComponent.prototype.getFiles2 = function (files) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded2.bind(this);
        reader.readAsBinaryString(files[0]);
    };
    CreateCompanyComponent.prototype._handleReaderLoaded2 = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.reportLogo = btoa(binaryString); // Converting binary string data.
        console.log(this.reportLogo);
    };
    CreateCompanyComponent.prototype.clearImg2 = function () {
        this.reportLogo = null;
        this.showReportLogo = false;
    };
    CreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-company',
            template: __webpack_require__(/*! ./create-company.component.html */ "./src/app/home/security/create-company/create-company.component.html"),
            styles: [__webpack_require__(/*! ./create-company.component.scss */ "./src/app/home/security/create-company/create-company.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/security/create-user-type/create-user-type.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/security/create-user-type/create-user-type.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 center\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"type\" class=\"col-md-3\">User type</label>\r\n          <div class=\"col-md-9\">\r\n            <input type=\"text\" name=\"type\" id=\"type\" class=\"form-control\" placeholder=\"User Type\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"\" class=\"col-md-3\"></label>\r\n          <div class=\"col-md-9 demo-inline-spacing\">\r\n            <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n            <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>User Type</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>Admin</td>\r\n                <td><span class=\"btn btn-info fas fa-edit\"></span></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/security/create-user-type/create-user-type.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/security/create-user-type/create-user-type.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VjdXJpdHkvY3JlYXRlLXVzZXItdHlwZS9jcmVhdGUtdXNlci10eXBlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/security/create-user-type/create-user-type.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/security/create-user-type/create-user-type.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateUserTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserTypeComponent", function() { return CreateUserTypeComponent; });
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

var CreateUserTypeComponent = /** @class */ (function () {
    function CreateUserTypeComponent() {
        this.title = "Create User Type";
    }
    CreateUserTypeComponent.prototype.ngOnInit = function () {
    };
    CreateUserTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-user-type',
            template: __webpack_require__(/*! ./create-user-type.component.html */ "./src/app/home/security/create-user-type/create-user-type.component.html"),
            styles: [__webpack_require__(/*! ./create-user-type.component.scss */ "./src/app/home/security/create-user-type/create-user-type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateUserTypeComponent);
    return CreateUserTypeComponent;
}());



/***/ }),

/***/ "./src/app/home/security/create-user/create-user.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/home/security/create-user/create-user.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"company\" class=\"col-md-3\">Company</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"company\" id=\"company\" class=\"form-control\">\r\n                <option value=\"\">Select Company</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"userName\" class=\"col-md-3\">User Name</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" name=\"userName\" id=\"userName\" class=\"form-control\" placeholder=\"User Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"loginId\" class=\"col-md-3\">Login Id</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" name=\"loginId\" id=\"loginId\" class=\"form-control\" placeholder=\"Login Id\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"password\" class=\"col-md-3\">Password</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"userType\" class=\"col-md-3\">User Type</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"userType\" id=\"userType\" class=\"form-control\">\r\n                <option value=\"\">Select User Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"empCode\" class=\"col-md-3\">Employee Code</label>\r\n            <div class=\"input-group col-md-8\">\r\n              <input type=\"text\" name=\"employeeCode\" id=\"empCode\" class=\"form-control\" placeholder=\"Employee Code\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"accessArea\" class=\"col-md-3\">Access Area</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"accessArea\" id=\"accessArea\" class=\"form-control\">\r\n                <option value=\"\">Select Area</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-md-3\"></label>\r\n            <div class=\"col-md-8 demo-inline-spacing\">\r\n              <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n              <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 demo-inline-spacing\">\r\n              <input type=\"radio\" name=\"type\" id=\"adminUser\">\r\n              <label for=\"adminUser\"> Admin/User</label>\r\n            </div>\r\n            <div class=\"col-md-6 demo-inline-spacing\">\r\n              <input type=\"radio\" name=\"type\" id=\"empUser\">\r\n              <label for=\"empUser\"> Employee</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2\">\r\n              <thead>\r\n                <tr>\r\n                  <th>User Name</th>\r\n                  <th>User Type</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/security/create-user/create-user.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/home/security/create-user/create-user.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VjdXJpdHkvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/security/create-user/create-user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/security/create-user/create-user.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
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


var CreateUserComponent = /** @class */ (function (_super) {
    __extends(CreateUserComponent, _super);
    function CreateUserComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Create User";
        return _this;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    CreateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/home/security/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.scss */ "./src/app/home/security/create-user/create-user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateUserComponent);
    return CreateUserComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/security/lock-unlock-salary/lock-unlock-salary.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/home/security/lock-unlock-salary/lock-unlock-salary.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 center\">\r\n        <form action=\"\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"empType\" class=\"col-md-4\">Employee Type</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"employeeType\" id=\"employeeType\" class=\"form-control\">\r\n                <option value=\"\">Select Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label for=\"salaryMonth\" class=\"col-md-4\">Salary Month</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"salaryMonth\" id=\"salaryMonth\" class=\"form-control\">\r\n                  <option value=\"\">Select Month</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-md-4\"></label>\r\n                <div class=\"col-md-8 demo-inline-spacing\">\r\n                  <button class=\"btn btn-success\"><span class=\"fas fa-lock\"></span> Lock</button>\r\n                  <button class=\"btn btn-primary\" disabled><span class=\"fas fa-key\"></span> Unlock</button>\r\n                  <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n                </div>\r\n              </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/security/lock-unlock-salary/lock-unlock-salary.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/security/lock-unlock-salary/lock-unlock-salary.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VjdXJpdHkvbG9jay11bmxvY2stc2FsYXJ5L2xvY2stdW5sb2NrLXNhbGFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/security/lock-unlock-salary/lock-unlock-salary.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/security/lock-unlock-salary/lock-unlock-salary.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LockUnlockSalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockUnlockSalaryComponent", function() { return LockUnlockSalaryComponent; });
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

var LockUnlockSalaryComponent = /** @class */ (function () {
    function LockUnlockSalaryComponent() {
        this.title = "Lock/Unlock Salary Process";
    }
    LockUnlockSalaryComponent.prototype.ngOnInit = function () {
    };
    LockUnlockSalaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock-unlock-salary',
            template: __webpack_require__(/*! ./lock-unlock-salary.component.html */ "./src/app/home/security/lock-unlock-salary/lock-unlock-salary.component.html"),
            styles: [__webpack_require__(/*! ./lock-unlock-salary.component.scss */ "./src/app/home/security/lock-unlock-salary/lock-unlock-salary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LockUnlockSalaryComponent);
    return LockUnlockSalaryComponent;
}());



/***/ }),

/***/ "./src/app/home/security/log-history/log-history.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/home/security/log-history/log-history.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"type\" class=\"col-md-4\">History Type</label>\r\n          <div class=\"col-md-6\">\r\n            <select name=\"type\" id=\"type\" class=\"form-control\">\r\n              <option value=\"\">Select Type</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <button class=\"btn btn-primary\">View History</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Name</th>\r\n                  <th>Login Time</th>\r\n                  <th>Logout Time</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/security/log-history/log-history.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/home/security/log-history/log-history.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VjdXJpdHkvbG9nLWhpc3RvcnkvbG9nLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/security/log-history/log-history.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/security/log-history/log-history.component.ts ***!
  \********************************************************************/
/*! exports provided: LogHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogHistoryComponent", function() { return LogHistoryComponent; });
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


var LogHistoryComponent = /** @class */ (function (_super) {
    __extends(LogHistoryComponent, _super);
    function LogHistoryComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Log History";
        return _this;
    }
    LogHistoryComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    LogHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-history',
            template: __webpack_require__(/*! ./log-history.component.html */ "./src/app/home/security/log-history/log-history.component.html"),
            styles: [__webpack_require__(/*! ./log-history.component.scss */ "./src/app/home/security/log-history/log-history.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LogHistoryComponent);
    return LogHistoryComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/security/password-show/password-show.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/security/password-show/password-show.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 center\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"empCode\" class=\"col-md-4\">Employee Code</label>\r\n          <div class=\"input-group col-md-8\">\r\n            <input type=\"text\" name=\"employeeCode\" id=\"empCode\" class=\"form-control\" placeholder=\"Employee Code\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-info\"><span class=\"fas fa-search\"></span></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>User Name</th>\r\n                <th>Password</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>admin</td>\r\n                <td>AxsJKyDwoiuQ</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/security/password-show/password-show.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/security/password-show/password-show.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VjdXJpdHkvcGFzc3dvcmQtc2hvdy9wYXNzd29yZC1zaG93LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/security/password-show/password-show.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/security/password-show/password-show.component.ts ***!
  \************************************************************************/
/*! exports provided: PasswordShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordShowComponent", function() { return PasswordShowComponent; });
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

var PasswordShowComponent = /** @class */ (function () {
    function PasswordShowComponent() {
        this.title = "Password Show";
    }
    PasswordShowComponent.prototype.ngOnInit = function () {
    };
    PasswordShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-show',
            template: __webpack_require__(/*! ./password-show.component.html */ "./src/app/home/security/password-show/password-show.component.html"),
            styles: [__webpack_require__(/*! ./password-show.component.scss */ "./src/app/home/security/password-show/password-show.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordShowComponent);
    return PasswordShowComponent;
}());



/***/ }),

/***/ "./src/app/home/security/security-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/security/security-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: SecurityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRoutingModule", function() { return SecurityRoutingModule; });
/* harmony import */ var _password_show_password_show_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-show/password-show.component */ "./src/app/home/security/password-show/password-show.component.ts");
/* harmony import */ var _assign_branch_assign_branch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assign-branch/assign-branch.component */ "./src/app/home/security/assign-branch/assign-branch.component.ts");
/* harmony import */ var _assign_company_assign_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign-company/assign-company.component */ "./src/app/home/security/assign-company/assign-company.component.ts");
/* harmony import */ var _web_portal_page_access_web_portal_page_access_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-portal-page-access/web-portal-page-access.component */ "./src/app/home/security/web-portal-page-access/web-portal-page-access.component.ts");
/* harmony import */ var _lock_unlock_salary_lock_unlock_salary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock-salary/lock-unlock-salary.component */ "./src/app/home/security/lock-unlock-salary/lock-unlock-salary.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/home/security/change-password/change-password.component.ts");
/* harmony import */ var _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-company/create-company.component */ "./src/app/home/security/create-company/create-company.component.ts");
/* harmony import */ var _create_user_type_create_user_type_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-user-type/create-user-type.component */ "./src/app/home/security/create-user-type/create-user-type.component.ts");
/* harmony import */ var _assign_page_access_assign_page_access_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assign-page-access/assign-page-access.component */ "./src/app/home/security/assign-page-access/assign-page-access.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/home/security/create-user/create-user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_history_log_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./log-history/log-history.component */ "./src/app/home/security/log-history/log-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SecurityRoutingModule = /** @class */ (function () {
    function SecurityRoutingModule() {
    }
    SecurityRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild([
                    { path: 'create-user', component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_9__["CreateUserComponent"] },
                    { path: 'create-user-type', component: _create_user_type_create_user_type_component__WEBPACK_IMPORTED_MODULE_7__["CreateUserTypeComponent"] },
                    { path: 'create-company', component: _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_6__["CreateCompanyComponent"] },
                    { path: 'log-history', component: _log_history_log_history_component__WEBPACK_IMPORTED_MODULE_12__["LogHistoryComponent"] },
                    { path: 'assign-page-access', component: _assign_page_access_assign_page_access_component__WEBPACK_IMPORTED_MODULE_8__["AssignPageAccessComponent"] },
                    { path: 'change-password', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"] },
                    { path: 'lock-unlock-salary', component: _lock_unlock_salary_lock_unlock_salary_component__WEBPACK_IMPORTED_MODULE_4__["LockUnlockSalaryComponent"] },
                    { path: 'web-portal-page-access', component: _web_portal_page_access_web_portal_page_access_component__WEBPACK_IMPORTED_MODULE_3__["WebPortalPageAccessComponent"] },
                    { path: 'assign-company', component: _assign_company_assign_company_component__WEBPACK_IMPORTED_MODULE_2__["AssignCompanyComponent"] },
                    { path: 'assign-branch', component: _assign_branch_assign_branch_component__WEBPACK_IMPORTED_MODULE_1__["AssignBranchComponent"] },
                    { path: 'password-show', component: _password_show_password_show_component__WEBPACK_IMPORTED_MODULE_0__["PasswordShowComponent"] },
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
        })
    ], SecurityRoutingModule);
    return SecurityRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/security/security.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/security/security.module.ts ***!
  \**************************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security-routing.module */ "./src/app/home/security/security-routing.module.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/home/security/create-user/create-user.component.ts");
/* harmony import */ var _log_history_log_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-history/log-history.component */ "./src/app/home/security/log-history/log-history.component.ts");
/* harmony import */ var _assign_page_access_assign_page_access_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assign-page-access/assign-page-access.component */ "./src/app/home/security/assign-page-access/assign-page-access.component.ts");
/* harmony import */ var _create_user_type_create_user_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-user-type/create-user-type.component */ "./src/app/home/security/create-user-type/create-user-type.component.ts");
/* harmony import */ var _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-company/create-company.component */ "./src/app/home/security/create-company/create-company.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/home/security/change-password/change-password.component.ts");
/* harmony import */ var _lock_unlock_salary_lock_unlock_salary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lock-unlock-salary/lock-unlock-salary.component */ "./src/app/home/security/lock-unlock-salary/lock-unlock-salary.component.ts");
/* harmony import */ var _web_portal_page_access_web_portal_page_access_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web-portal-page-access/web-portal-page-access.component */ "./src/app/home/security/web-portal-page-access/web-portal-page-access.component.ts");
/* harmony import */ var _assign_company_assign_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assign-company/assign-company.component */ "./src/app/home/security/assign-company/assign-company.component.ts");
/* harmony import */ var _assign_branch_assign_branch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assign-branch/assign-branch.component */ "./src/app/home/security/assign-branch/assign-branch.component.ts");
/* harmony import */ var _password_show_password_show_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./password-show/password-show.component */ "./src/app/home/security/password-show/password-show.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_5__["CreateUserComponent"], _log_history_log_history_component__WEBPACK_IMPORTED_MODULE_6__["LogHistoryComponent"], _assign_page_access_assign_page_access_component__WEBPACK_IMPORTED_MODULE_7__["AssignPageAccessComponent"], _create_user_type_create_user_type_component__WEBPACK_IMPORTED_MODULE_8__["CreateUserTypeComponent"], _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_9__["CreateCompanyComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"], _lock_unlock_salary_lock_unlock_salary_component__WEBPACK_IMPORTED_MODULE_11__["LockUnlockSalaryComponent"], _web_portal_page_access_web_portal_page_access_component__WEBPACK_IMPORTED_MODULE_12__["WebPortalPageAccessComponent"], _assign_company_assign_company_component__WEBPACK_IMPORTED_MODULE_13__["AssignCompanyComponent"], _assign_branch_assign_branch_component__WEBPACK_IMPORTED_MODULE_14__["AssignBranchComponent"], _password_show_password_show_component__WEBPACK_IMPORTED_MODULE_15__["PasswordShowComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _security_routing_module__WEBPACK_IMPORTED_MODULE_4__["SecurityRoutingModule"]
            ]
        })
    ], SecurityModule);
    return SecurityModule;
}());



/***/ }),

/***/ "./src/app/home/security/web-portal-page-access/web-portal-page-access.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/home/security/web-portal-page-access/web-portal-page-access.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"userName\" class=\"col-md-4\">User Name</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"userName\" id=\"userName\" class=\"form-control\">\r\n                <option value=\"\">Select User</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">\r\n              <input type=\"checkbox\" name=\"system\" id=\"system\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n              <label (click)=\"toggle()\" for=\"system\" class=\"\">System Setup </label>\r\n              <span class=\"fas fa-caret-down\" style=\"float:right\"></span>\r\n              <ul *ngIf=\"isCollapse\" class=\"list-group\">\r\n                <li @listAnimation class=\"list-group-item\">\r\n                  <input type=\"checkbox\" name=\"basicEntry\" id=\"basicEntry\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n                  <label for=\"basicEntry\" class=\"\">Basic Entry </label>\r\n                  <span class=\"fas fa-caret-down\" style=\"float:right\"></span>\r\n                </li>\r\n                <li @listAnimation class=\"list-group-item\">\r\n                  <input type=\"checkbox\" name=\"bankBranch\" id=\"bankBranch\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n                  <label for=\"bankBranch\" class=\"\">Bank Branch </label>\r\n                </li>\r\n                <li @listAnimation class=\"list-group-item\">\r\n                  <input type=\"checkbox\" name=\"division\" id=\"division\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n                  <label for=\"division\" class=\"\">Division </label>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <input type=\"checkbox\" name=\"attendance\" id=\"attendance\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n              <label for=\"attendance\" class=\"\">Attendance </label>\r\n              <span class=\"fas fa-caret-down\" style=\"float:right\"></span>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <input type=\"checkbox\" name=\"shift\" id=\"shift\" class=\"form-input-check\"> &nbsp; &nbsp;\r\n              <label for=\"shift\" class=\"\">Shift Allowance </label>\r\n              <span class=\"fas fa-caret-down\" style=\"float:right\"></span>\r\n            </li>\r\n          </ul>\r\n          <br>\r\n          <div class=\"row\">\r\n            <button class=\"btn btn-success center\"><span class=\"fas fa-save\"></span> Save</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/security/web-portal-page-access/web-portal-page-access.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/home/security/web-portal-page-access/web-portal-page-access.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item label {\n  font-size: 18px; }\n\n.list-group-item {\n  background: #475e52;\n  color: #fff; }\n\nspan {\n  font-size: 20px; }\n\nul li ul li {\n  background: #fff;\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zZWN1cml0eS93ZWItcG9ydGFsLXBhZ2UtYWNjZXNzL0M6XFxVc2Vyc1xcQW5kcm9pZFxcRGVza3RvcFxcR2l0YnVpbGRcXEhSTVMvc3JjXFxhcHBcXGhvbWVcXHNlY3VyaXR5XFx3ZWItcG9ydGFsLXBhZ2UtYWNjZXNzXFx3ZWItcG9ydGFsLXBhZ2UtYWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VjdXJpdHkvd2ViLXBvcnRhbC1wYWdlLWFjY2Vzcy93ZWItcG9ydGFsLXBhZ2UtYWNjZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbSBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubGlzdC1ncm91cC1pdGVte1xyXG4gICAgYmFja2dyb3VuZDogIzQ3NWU1MjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbnNwYW57XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxudWwgbGkgdWwgbGl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/security/web-portal-page-access/web-portal-page-access.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/home/security/web-portal-page-access/web-portal-page-access.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WebPortalPageAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPortalPageAccessComponent", function() { return WebPortalPageAccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/animations */ "./src/app/shared/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebPortalPageAccessComponent = /** @class */ (function () {
    function WebPortalPageAccessComponent() {
        this.title = "Web Portal Page Access";
        this.isCollapse = false;
    }
    WebPortalPageAccessComponent.prototype.ngOnInit = function () {
    };
    WebPortalPageAccessComponent.prototype.toggle = function () {
        this.isCollapse = !this.isCollapse;
    };
    WebPortalPageAccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-portal-page-access',
            template: __webpack_require__(/*! ./web-portal-page-access.component.html */ "./src/app/home/security/web-portal-page-access/web-portal-page-access.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_shared_animations__WEBPACK_IMPORTED_MODULE_2__["show"], {
                            params: {
                                duration: '2000ms'
                            }
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_shared_animations__WEBPACK_IMPORTED_MODULE_2__["hide"], {
                            params: {
                                duration: '2000ms'
                            }
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200)
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./web-portal-page-access.component.scss */ "./src/app/home/security/web-portal-page-access/web-portal-page-access.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WebPortalPageAccessComponent);
    return WebPortalPageAccessComponent;
}());



/***/ }),

/***/ "./src/app/shared/animations.ts":
/*!**************************************!*\
  !*** ./src/app/shared/animations.ts ***!
  \**************************************/
/*! exports provided: bounceOutLeftAnimation, show, hide, fadeInAnimation, fade, slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutLeftAnimation", function() { return bounceOutLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return slide; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var bounceOutLeftAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            offset: .1,
            opacity: 1,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            offset: 1,
            opacity: 0,
        })
    ]))
]);
var show = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(0, -20%)' })
]);
var hide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(0, +50%)' })
]);
var fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000)
]);
var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(fadeInAnimation, {
            params: {
                duration: '5s',
                easing: 'ease in'
            }
        })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
]);
var slide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slide', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(show)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', 
    //   animate('1s cubic-bezier(.41,.92,.82,.58)', style({transform: 'translateX(+30%'}))
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(bounceOutLeftAnimation))
]);


/***/ })

}]);
//# sourceMappingURL=home-security-security-module.js.map