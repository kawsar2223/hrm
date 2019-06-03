(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-apprisal-apprisal-module"],{

/***/ "./src/app/home/apprisal/apprisal-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/apprisal/apprisal-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ApprisalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprisalRoutingModule", function() { return ApprisalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emp_apprisal_emp_apprisal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emp-apprisal/emp-apprisal.component */ "./src/app/home/apprisal/emp-apprisal/emp-apprisal.component.ts");
/* harmony import */ var _point_point_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point/point.component */ "./src/app/home/apprisal/point/point.component.ts");
/* harmony import */ var _competencies_competencies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./competencies/competencies.component */ "./src/app/home/apprisal/competencies/competencies.component.ts");
/* harmony import */ var _competencies_type_competencies_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./competencies-type/competencies-type.component */ "./src/app/home/apprisal/competencies-type/competencies-type.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ApprisalRoutingModule = /** @class */ (function () {
    function ApprisalRoutingModule() {
    }
    ApprisalRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'competencies-type', component: _competencies_type_competencies_type_component__WEBPACK_IMPORTED_MODULE_5__["CompetenciesTypeComponent"] },
                    { path: 'competencies', component: _competencies_competencies_component__WEBPACK_IMPORTED_MODULE_4__["CompetenciesComponent"] },
                    { path: 'point', component: _point_point_component__WEBPACK_IMPORTED_MODULE_3__["PointComponent"] },
                    { path: 'emp-apprisal', component: _emp_apprisal_emp_apprisal_component__WEBPACK_IMPORTED_MODULE_2__["EmpApprisalComponent"] }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ApprisalRoutingModule);
    return ApprisalRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/apprisal/apprisal.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/apprisal/apprisal.module.ts ***!
  \**************************************************/
/*! exports provided: ApprisalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprisalModule", function() { return ApprisalModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _apprisal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apprisal-routing.module */ "./src/app/home/apprisal/apprisal-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _competencies_type_competencies_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./competencies-type/competencies-type.component */ "./src/app/home/apprisal/competencies-type/competencies-type.component.ts");
/* harmony import */ var _competencies_competencies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./competencies/competencies.component */ "./src/app/home/apprisal/competencies/competencies.component.ts");
/* harmony import */ var _point_point_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./point/point.component */ "./src/app/home/apprisal/point/point.component.ts");
/* harmony import */ var _emp_apprisal_emp_apprisal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emp-apprisal/emp-apprisal.component */ "./src/app/home/apprisal/emp-apprisal/emp-apprisal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ApprisalModule = /** @class */ (function () {
    function ApprisalModule() {
    }
    ApprisalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _competencies_type_competencies_type_component__WEBPACK_IMPORTED_MODULE_5__["CompetenciesTypeComponent"],
                _competencies_competencies_component__WEBPACK_IMPORTED_MODULE_6__["CompetenciesComponent"],
                _point_point_component__WEBPACK_IMPORTED_MODULE_7__["PointComponent"],
                _emp_apprisal_emp_apprisal_component__WEBPACK_IMPORTED_MODULE_8__["EmpApprisalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _apprisal_routing_module__WEBPACK_IMPORTED_MODULE_3__["ApprisalRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
            ]
        })
    ], ApprisalModule);
    return ApprisalModule;
}());



/***/ }),

/***/ "./src/app/home/apprisal/competencies-type/competencies-type.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/apprisal/competencies-type/competencies-type.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n    Competencies Type\r\n  </h4>\r\n    <div class=\"container\">\r\n      <br/>\r\n      <div class=\"col-md-7 center\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Type Name\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Type Name\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Short Order\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Short Order\">\r\n                </div>\r\n              </div>\r\n      </div>\r\n          <div class=\"row\">\r\n              <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                  <button type=\"\" class=\"btn btn-success\" >\r\n                    <span class=\"fas fa-save\"> Save</span>\r\n                  </button>\r\n                  <button type=\"\" class=\"btn btn-secondary \">\r\n                    <span class=\"fas fa-window-close\"> Close</span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <table class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>#</th>\r\n                      <th>Emp.code</th>\r\n                      <th>Emp Name</th>\r\n                      <th></th>\r\n                      <th></th>\r\n                      <th></th>\r\n                     \r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <th>1</th>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>2</th>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>3</th>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n      </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/home/apprisal/competencies-type/competencies-type.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/apprisal/competencies-type/competencies-type.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwcmlzYWwvY29tcGV0ZW5jaWVzLXR5cGUvY29tcGV0ZW5jaWVzLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/apprisal/competencies-type/competencies-type.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/apprisal/competencies-type/competencies-type.component.ts ***!
  \********************************************************************************/
/*! exports provided: CompetenciesTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciesTypeComponent", function() { return CompetenciesTypeComponent; });
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

var CompetenciesTypeComponent = /** @class */ (function () {
    function CompetenciesTypeComponent() {
    }
    CompetenciesTypeComponent.prototype.ngOnInit = function () {
    };
    CompetenciesTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-competencies-type',
            template: __webpack_require__(/*! ./competencies-type.component.html */ "./src/app/home/apprisal/competencies-type/competencies-type.component.html"),
            styles: [__webpack_require__(/*! ./competencies-type.component.scss */ "./src/app/home/apprisal/competencies-type/competencies-type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompetenciesTypeComponent);
    return CompetenciesTypeComponent;
}());



/***/ }),

/***/ "./src/app/home/apprisal/competencies/competencies.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/apprisal/competencies/competencies.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n    Competencies\r\n  </h4>\r\n    <div class=\"container\">\r\n      <br/>\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Type\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Competencies\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Competencies\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Description\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Description\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Short Order\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Short Order\">\r\n                </div>\r\n              </div>\r\n    </div>\r\n            <div class=\"row\">\r\n                <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                    <button type=\"\" class=\"btn btn-success\" >\r\n                      <span class=\"fas fa-save\"> Save</span>\r\n                    </button>\r\n                    <button type=\"\" class=\"btn btn-secondary \">\r\n                      <span class=\"fas fa-window-close\"> Close</span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>#</th>\r\n                        <th>Competencies</th>\r\n                        <th>Description</th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                       \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <th>1</th>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>2</th>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>3</th>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n      </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/home/apprisal/competencies/competencies.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/apprisal/competencies/competencies.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwcmlzYWwvY29tcGV0ZW5jaWVzL2NvbXBldGVuY2llcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/apprisal/competencies/competencies.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/apprisal/competencies/competencies.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompetenciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciesComponent", function() { return CompetenciesComponent; });
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

var CompetenciesComponent = /** @class */ (function () {
    function CompetenciesComponent() {
    }
    CompetenciesComponent.prototype.ngOnInit = function () {
    };
    CompetenciesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-competencies',
            template: __webpack_require__(/*! ./competencies.component.html */ "./src/app/home/apprisal/competencies/competencies.component.html"),
            styles: [__webpack_require__(/*! ./competencies.component.scss */ "./src/app/home/apprisal/competencies/competencies.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompetenciesComponent);
    return CompetenciesComponent;
}());



/***/ }),

/***/ "./src/app/home/apprisal/emp-apprisal/emp-apprisal.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/apprisal/emp-apprisal/emp-apprisal.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Appraisal\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <br/>\r\n      <div class=\"col-md-6\">\r\n        <br />\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n  \r\n            </label>\r\n  \r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                  <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Joining Date\r\n\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Location\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Location\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <br/>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Year\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> Date\r\n\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">competencies\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-file-download\">Show</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-primary \">\r\n          <span class=\"fas fa-edit\">Edit</span>\r\n        </button>\r\n      </div>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>competencies</th>\r\n            <th>Details</th>\r\n            <th>Point</th>\r\n            <th>Delete</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td></td>\r\n            <td></td>\r\n            <td>0</td>\r\n            <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n          <tr>\r\n            <td></td>\r\n            <td></td>\r\n            <td>0</td>\r\n            <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n          <tr>\r\n            <td></td>\r\n            <td></td>\r\n            <td>0</td>\r\n            <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-info \">\r\n          <span class=\"ion ion-ios-refresh\"> Reset</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-secondary \">\r\n          <span class=\"fas fa-window-close\"> Close</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/apprisal/emp-apprisal/emp-apprisal.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/apprisal/emp-apprisal/emp-apprisal.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwcmlzYWwvZW1wLWFwcHJpc2FsL2VtcC1hcHByaXNhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/apprisal/emp-apprisal/emp-apprisal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/apprisal/emp-apprisal/emp-apprisal.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmpApprisalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpApprisalComponent", function() { return EmpApprisalComponent; });
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

var EmpApprisalComponent = /** @class */ (function () {
    function EmpApprisalComponent() {
    }
    EmpApprisalComponent.prototype.ngOnInit = function () {
    };
    EmpApprisalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-apprisal',
            template: __webpack_require__(/*! ./emp-apprisal.component.html */ "./src/app/home/apprisal/emp-apprisal/emp-apprisal.component.html"),
            styles: [__webpack_require__(/*! ./emp-apprisal.component.scss */ "./src/app/home/apprisal/emp-apprisal/emp-apprisal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpApprisalComponent);
    return EmpApprisalComponent;
}());



/***/ }),

/***/ "./src/app/home/apprisal/point/point.component.html":
/*!**********************************************************!*\
  !*** ./src/app/home/apprisal/point/point.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n    Point\r\n  </h4>\r\n    <div class=\"container\">\r\n      <br/>\r\n      <div class=\"col-md-7 center\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Competencies\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"custom-select \">\r\n                  <option>Select state</option>\r\n                  <option>Type 1</option>\r\n                  <option>Type 2</option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Point Type\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                  <select class=\"custom-select \">\r\n                    <option>Select state</option>\r\n                    <option>Type 1</option>\r\n                    <option>Type 2</option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-4 text-sm-right\">Description\r\n                  </label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Description\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-form-label col-sm-4 text-sm-right\">Point\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Point\">\r\n                    </div>\r\n                  </div>\r\n      </div>\r\n              <div class=\"row\">\r\n                  <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                      <button type=\"\" class=\"btn btn-success\" >\r\n                        <span class=\"fas fa-save\"> Save</span>\r\n                      </button>\r\n                      <button type=\"\" class=\"btn btn-info \">\r\n                        <span class=\"ion ion-ios-refresh\"> Reset</span>\r\n                      </button>\r\n                      <button type=\"\" class=\"btn btn-secondary \">\r\n                        <span class=\"fas fa-window-close\"> Close</span>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                  <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>#</th>\r\n                          <th>Point Type</th>\r\n                          <th>Description</th>\r\n                          <th></th>\r\n                          <th></th>\r\n                          <th></th>\r\n                         \r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr>\r\n                          <th>1</th>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>2</th>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>3</th>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n      </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/home/apprisal/point/point.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/home/apprisal/point/point.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwcmlzYWwvcG9pbnQvcG9pbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/apprisal/point/point.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/apprisal/point/point.component.ts ***!
  \********************************************************/
/*! exports provided: PointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointComponent", function() { return PointComponent; });
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

var PointComponent = /** @class */ (function () {
    function PointComponent() {
    }
    PointComponent.prototype.ngOnInit = function () {
    };
    PointComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-point',
            template: __webpack_require__(/*! ./point.component.html */ "./src/app/home/apprisal/point/point.component.html"),
            styles: [__webpack_require__(/*! ./point.component.scss */ "./src/app/home/apprisal/point/point.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PointComponent);
    return PointComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-apprisal-apprisal-module.js.map