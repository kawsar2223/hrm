(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-bonus-bonus-module"],{

/***/ "./src/app/home/bonus/allowance-setup/allowance-setup.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/home/bonus/allowance-setup/allowance-setup.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n   Bonus And Allowance Setup\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Bonus Name\r\n      </label>\r\n      <div class=\"col-sm-\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Bonus Name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n    <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n      <button type=\"\" class=\"btn btn-success\" >\r\n        <span class=\"fas fa-save\"> Save</span>\r\n      </button>\r\n      <button type=\"clear\" class=\"btn btn-info\">\r\n          <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n      <button type=\"\" class=\"btn btn-secondary \">\r\n        <span class=\"fas fa-window-close\"> Close</span>\r\n      </button>\r\n    </div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Bonus Name</th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th>1</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <th>2</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <th>3</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/bonus/allowance-setup/allowance-setup.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/bonus/allowance-setup/allowance-setup.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYm9udXMvYWxsb3dhbmNlLXNldHVwL2FsbG93YW5jZS1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/bonus/allowance-setup/allowance-setup.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/bonus/allowance-setup/allowance-setup.component.ts ***!
  \*************************************************************************/
/*! exports provided: AllowanceSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowanceSetupComponent", function() { return AllowanceSetupComponent; });
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

var AllowanceSetupComponent = /** @class */ (function () {
    function AllowanceSetupComponent() {
    }
    AllowanceSetupComponent.prototype.ngOnInit = function () {
    };
    AllowanceSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allowance-setup',
            template: __webpack_require__(/*! ./allowance-setup.component.html */ "./src/app/home/bonus/allowance-setup/allowance-setup.component.html"),
            styles: [__webpack_require__(/*! ./allowance-setup.component.scss */ "./src/app/home/bonus/allowance-setup/allowance-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AllowanceSetupComponent);
    return AllowanceSetupComponent;
}());



/***/ }),

/***/ "./src/app/home/bonus/bonus-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/bonus/bonus-routing.module.ts ***!
  \****************************************************/
/*! exports provided: BonusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusRoutingModule", function() { return BonusRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _allowance_setup_allowance_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allowance-setup/allowance-setup.component */ "./src/app/home/bonus/allowance-setup/allowance-setup.component.ts");
/* harmony import */ var _bonus_setup_bonus_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bonus-setup/bonus-setup.component */ "./src/app/home/bonus/bonus-setup/bonus-setup.component.ts");
/* harmony import */ var _emp_festival_bonus_emp_festival_bonus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emp-festival-bonus/emp-festival-bonus.component */ "./src/app/home/bonus/emp-festival-bonus/emp-festival-bonus.component.ts");
/* harmony import */ var _emp_performance_bonus_emp_performance_bonus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emp-performance-bonus/emp-performance-bonus.component */ "./src/app/home/bonus/emp-performance-bonus/emp-performance-bonus.component.ts");
/* harmony import */ var _update_bonus_update_bonus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-bonus/update-bonus.component */ "./src/app/home/bonus/update-bonus/update-bonus.component.ts");
/* harmony import */ var _process_import_bonus_process_import_bonus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./process-import-bonus/process-import-bonus.component */ "./src/app/home/bonus/process-import-bonus/process-import-bonus.component.ts");
/* harmony import */ var _upload_emp_payment_upload_emp_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload-emp-payment/upload-emp-payment.component */ "./src/app/home/bonus/upload-emp-payment/upload-emp-payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BonusRoutingModule = /** @class */ (function () {
    function BonusRoutingModule() {
    }
    BonusRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    // { path: 'emp-gen-info', component: EmpGenInfoComponent },
                    { path: 'allowance-setup', component: _allowance_setup_allowance_setup_component__WEBPACK_IMPORTED_MODULE_2__["AllowanceSetupComponent"] },
                    { path: 'bonus-setup', component: _bonus_setup_bonus_setup_component__WEBPACK_IMPORTED_MODULE_3__["BonusSetupComponent"] },
                    { path: 'emp-festival-bonus', component: _emp_festival_bonus_emp_festival_bonus_component__WEBPACK_IMPORTED_MODULE_4__["EmpFestivalBonusComponent"] },
                    { path: 'emp-performance-bonus', component: _emp_performance_bonus_emp_performance_bonus_component__WEBPACK_IMPORTED_MODULE_5__["EmpPerformanceBonusComponent"] },
                    { path: 'update-bonus', component: _update_bonus_update_bonus_component__WEBPACK_IMPORTED_MODULE_6__["UpdateBonusComponent"] },
                    { path: 'upload-emp-payment', component: _upload_emp_payment_upload_emp_payment_component__WEBPACK_IMPORTED_MODULE_8__["UploadEmpPaymentComponent"] },
                    { path: 'process-import-bonus', component: _process_import_bonus_process_import_bonus_component__WEBPACK_IMPORTED_MODULE_7__["ProcessImportBonusComponent"] }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BonusRoutingModule);
    return BonusRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/bonus/bonus-setup/bonus-setup.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/bonus/bonus-setup/bonus-setup.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Bonus Setup\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Job Type\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Type\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Type\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Allowance Type\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Number Of Times\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Number Of Times\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Date\r\n            </label>\r\n      \r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Note\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Note\">\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\" >\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n        <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n        <button type=\"\" class=\"btn btn-secondary \">\r\n          <span class=\"fas fa-window-close\"> Close</span>\r\n        </button>\r\n      </div>\r\n      </div>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Employee Type</th>\r\n            <th>Allowance</th>\r\n            <th>Payment Type</th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/bonus/bonus-setup/bonus-setup.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/bonus/bonus-setup/bonus-setup.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYm9udXMvYm9udXMtc2V0dXAvYm9udXMtc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/bonus/bonus-setup/bonus-setup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/bonus/bonus-setup/bonus-setup.component.ts ***!
  \*****************************************************************/
/*! exports provided: BonusSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusSetupComponent", function() { return BonusSetupComponent; });
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

var BonusSetupComponent = /** @class */ (function () {
    function BonusSetupComponent() {
    }
    BonusSetupComponent.prototype.ngOnInit = function () {
    };
    BonusSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bonus-setup',
            template: __webpack_require__(/*! ./bonus-setup.component.html */ "./src/app/home/bonus/bonus-setup/bonus-setup.component.html"),
            styles: [__webpack_require__(/*! ./bonus-setup.component.scss */ "./src/app/home/bonus/bonus-setup/bonus-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BonusSetupComponent);
    return BonusSetupComponent;
}());



/***/ }),

/***/ "./src/app/home/bonus/bonus.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/bonus/bonus.module.ts ***!
  \********************************************/
/*! exports provided: BonusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusModule", function() { return BonusModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bonus_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bonus-routing.module */ "./src/app/home/bonus/bonus-routing.module.ts");
/* harmony import */ var _allowance_setup_allowance_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allowance-setup/allowance-setup.component */ "./src/app/home/bonus/allowance-setup/allowance-setup.component.ts");
/* harmony import */ var _bonus_setup_bonus_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bonus-setup/bonus-setup.component */ "./src/app/home/bonus/bonus-setup/bonus-setup.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _emp_festival_bonus_emp_festival_bonus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emp-festival-bonus/emp-festival-bonus.component */ "./src/app/home/bonus/emp-festival-bonus/emp-festival-bonus.component.ts");
/* harmony import */ var _emp_performance_bonus_emp_performance_bonus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emp-performance-bonus/emp-performance-bonus.component */ "./src/app/home/bonus/emp-performance-bonus/emp-performance-bonus.component.ts");
/* harmony import */ var _update_bonus_update_bonus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-bonus/update-bonus.component */ "./src/app/home/bonus/update-bonus/update-bonus.component.ts");
/* harmony import */ var _upload_emp_payment_upload_emp_payment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./upload-emp-payment/upload-emp-payment.component */ "./src/app/home/bonus/upload-emp-payment/upload-emp-payment.component.ts");
/* harmony import */ var _process_import_bonus_process_import_bonus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./process-import-bonus/process-import-bonus.component */ "./src/app/home/bonus/process-import-bonus/process-import-bonus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var BonusModule = /** @class */ (function () {
    function BonusModule() {
    }
    BonusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _allowance_setup_allowance_setup_component__WEBPACK_IMPORTED_MODULE_4__["AllowanceSetupComponent"],
                _bonus_setup_bonus_setup_component__WEBPACK_IMPORTED_MODULE_5__["BonusSetupComponent"],
                _emp_festival_bonus_emp_festival_bonus_component__WEBPACK_IMPORTED_MODULE_7__["EmpFestivalBonusComponent"],
                _emp_performance_bonus_emp_performance_bonus_component__WEBPACK_IMPORTED_MODULE_8__["EmpPerformanceBonusComponent"],
                _update_bonus_update_bonus_component__WEBPACK_IMPORTED_MODULE_9__["UpdateBonusComponent"],
                _upload_emp_payment_upload_emp_payment_component__WEBPACK_IMPORTED_MODULE_10__["UploadEmpPaymentComponent"],
                _process_import_bonus_process_import_bonus_component__WEBPACK_IMPORTED_MODULE_11__["ProcessImportBonusComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _bonus_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonusRoutingModule"]
            ]
        })
    ], BonusModule);
    return BonusModule;
}());



/***/ }),

/***/ "./src/app/home/bonus/emp-festival-bonus/emp-festival-bonus.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/bonus/emp-festival-bonus/emp-festival-bonus.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Festival Bonus\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Period\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Bonus Type\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Bonus Head\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Job Type\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-file-download\"></span> Show Data\r\n        </button>\r\n      </div>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Employee Name</th>\r\n            <th>Designation</th>\r\n            <th>Department</th>\r\n            <th>Basic Amount</th>\r\n            <th>Bonus</th>\r\n            <th>Tax</th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"far fa-window-close\"></span> Close</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/bonus/emp-festival-bonus/emp-festival-bonus.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/bonus/emp-festival-bonus/emp-festival-bonus.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYm9udXMvZW1wLWZlc3RpdmFsLWJvbnVzL2VtcC1mZXN0aXZhbC1ib251cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/bonus/emp-festival-bonus/emp-festival-bonus.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/bonus/emp-festival-bonus/emp-festival-bonus.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmpFestivalBonusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpFestivalBonusComponent", function() { return EmpFestivalBonusComponent; });
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

var EmpFestivalBonusComponent = /** @class */ (function () {
    function EmpFestivalBonusComponent() {
    }
    EmpFestivalBonusComponent.prototype.ngOnInit = function () {
    };
    EmpFestivalBonusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-festival-bonus',
            template: __webpack_require__(/*! ./emp-festival-bonus.component.html */ "./src/app/home/bonus/emp-festival-bonus/emp-festival-bonus.component.html"),
            styles: [__webpack_require__(/*! ./emp-festival-bonus.component.scss */ "./src/app/home/bonus/emp-festival-bonus/emp-festival-bonus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpFestivalBonusComponent);
    return EmpFestivalBonusComponent;
}());



/***/ }),

/***/ "./src/app/home/bonus/emp-performance-bonus/emp-performance-bonus.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/home/bonus/emp-performance-bonus/emp-performance-bonus.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Performance Bonus\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Period\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Bonus Type\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Bonus Head\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Code</th>\r\n          <th>Employee Name</th>\r\n          <th>Designation</th>\r\n          <th>Department</th>\r\n          <th>Amount</th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th>1</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <th>2</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <th>3</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"far fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/bonus/emp-performance-bonus/emp-performance-bonus.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/home/bonus/emp-performance-bonus/emp-performance-bonus.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYm9udXMvZW1wLXBlcmZvcm1hbmNlLWJvbnVzL2VtcC1wZXJmb3JtYW5jZS1ib251cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/bonus/emp-performance-bonus/emp-performance-bonus.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home/bonus/emp-performance-bonus/emp-performance-bonus.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EmpPerformanceBonusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpPerformanceBonusComponent", function() { return EmpPerformanceBonusComponent; });
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

var EmpPerformanceBonusComponent = /** @class */ (function () {
    function EmpPerformanceBonusComponent() {
    }
    EmpPerformanceBonusComponent.prototype.ngOnInit = function () {
    };
    EmpPerformanceBonusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-performance-bonus',
            template: __webpack_require__(/*! ./emp-performance-bonus.component.html */ "./src/app/home/bonus/emp-performance-bonus/emp-performance-bonus.component.html"),
            styles: [__webpack_require__(/*! ./emp-performance-bonus.component.scss */ "./src/app/home/bonus/emp-performance-bonus/emp-performance-bonus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpPerformanceBonusComponent);
    return EmpPerformanceBonusComponent;
}());



/***/ }),

/***/ "./src/app/home/bonus/process-import-bonus/process-import-bonus.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/home/bonus/process-import-bonus/process-import-bonus.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 center\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Process Import Bonus\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Period\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Bonus Type\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Bonus Head\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-file-download\">Show Data</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Code</th>\r\n          <th>Employee Name</th>\r\n          <th>Designation</th>\r\n          <th>Department</th>\r\n          <th>Basic Amount</th>\r\n          <th>Bonus</th>\r\n          <th>Tax</th>\r\n          <th></th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th>1</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <th>2</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <th>3</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n\r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"far fa-window-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/bonus/process-import-bonus/process-import-bonus.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/home/bonus/process-import-bonus/process-import-bonus.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYm9udXMvcHJvY2Vzcy1pbXBvcnQtYm9udXMvcHJvY2Vzcy1pbXBvcnQtYm9udXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/bonus/process-import-bonus/process-import-bonus.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/bonus/process-import-bonus/process-import-bonus.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProcessImportBonusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessImportBonusComponent", function() { return ProcessImportBonusComponent; });
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

var ProcessImportBonusComponent = /** @class */ (function () {
    function ProcessImportBonusComponent() {
    }
    ProcessImportBonusComponent.prototype.ngOnInit = function () {
    };
    ProcessImportBonusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-process-import-bonus',
            template: __webpack_require__(/*! ./process-import-bonus.component.html */ "./src/app/home/bonus/process-import-bonus/process-import-bonus.component.html"),
            styles: [__webpack_require__(/*! ./process-import-bonus.component.scss */ "./src/app/home/bonus/process-import-bonus/process-import-bonus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcessImportBonusComponent);
    return ProcessImportBonusComponent;
}());



/***/ }),

/***/ "./src/app/home/bonus/update-bonus/update-bonus.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/bonus/update-bonus/update-bonus.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Update Bonus\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n              </label>\r\n      \r\n              <div class=\"input-group col-sm-8\">\r\n                <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                    <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Salary Period\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Salary Head\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Bonus Type\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-file-download\">Show Data</span>\r\n          </button>\r\n        </div>\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Code</th>\r\n                <th>Employee Name</th>\r\n                <th>Designation</th>\r\n                <th>Department</th>\r\n                <th>Basic Amount</th>\r\n                <th>Bonus</th>\r\n                <th>Tax</th>\r\n                <th></th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th>1</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                <th>2</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                <th>3</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n            <button type=\"\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"> Save</span>\r\n            </button>\r\n      \r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n            <span class=\"far fa-window-close\"></span> Close</button>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/bonus/update-bonus/update-bonus.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/bonus/update-bonus/update-bonus.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYm9udXMvdXBkYXRlLWJvbnVzL3VwZGF0ZS1ib251cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/bonus/update-bonus/update-bonus.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/bonus/update-bonus/update-bonus.component.ts ***!
  \*******************************************************************/
/*! exports provided: UpdateBonusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBonusComponent", function() { return UpdateBonusComponent; });
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

var UpdateBonusComponent = /** @class */ (function () {
    function UpdateBonusComponent() {
    }
    UpdateBonusComponent.prototype.ngOnInit = function () {
    };
    UpdateBonusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-bonus',
            template: __webpack_require__(/*! ./update-bonus.component.html */ "./src/app/home/bonus/update-bonus/update-bonus.component.html"),
            styles: [__webpack_require__(/*! ./update-bonus.component.scss */ "./src/app/home/bonus/update-bonus/update-bonus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateBonusComponent);
    return UpdateBonusComponent;
}());



/***/ }),

/***/ "./src/app/home/bonus/upload-emp-payment/upload-emp-payment.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/bonus/upload-emp-payment/upload-emp-payment.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Upload Employee Payment Information\r\n    </h4>\r\n    <div class=\"container\">\r\n      <br />\r\n      <div class=\"col-md-7 center\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Period\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"custom-select \">\r\n                  <option>Select state</option>\r\n                  <option>Type 1</option>\r\n                  <option>Type 2</option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Select Salary Head\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                  <select class=\"custom-select \">\r\n                    <option>Select state</option>\r\n                    <option>Type 1</option>\r\n                    <option>Type 2</option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-4 text-sm-right\">Select Payment Type\r\n                  </label>\r\n                  <div class=\"col-sm-8\">\r\n                    <select class=\"custom-select \">\r\n                      <option>Select state</option>\r\n                      <option>Type 1</option>\r\n                      <option>Type 2</option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-form-label col-sm-4 text-sm-right\">Upload File\r\n                      </label>\r\n                  <div class=\"col-sm-8\">\r\n                <input type=\"file\">\r\n              </div>\r\n      </div>\r\n          </div>\r\n          <div class=\"row\">\r\n          <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n              <button type=\"\" class=\"btn btn-success\">\r\n                <span class=\"fas fa-file-upload\">Upload</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/home/bonus/upload-emp-payment/upload-emp-payment.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/bonus/upload-emp-payment/upload-emp-payment.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYm9udXMvdXBsb2FkLWVtcC1wYXltZW50L3VwbG9hZC1lbXAtcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/bonus/upload-emp-payment/upload-emp-payment.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/bonus/upload-emp-payment/upload-emp-payment.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UploadEmpPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadEmpPaymentComponent", function() { return UploadEmpPaymentComponent; });
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

var UploadEmpPaymentComponent = /** @class */ (function () {
    function UploadEmpPaymentComponent() {
    }
    UploadEmpPaymentComponent.prototype.ngOnInit = function () {
    };
    UploadEmpPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-emp-payment',
            template: __webpack_require__(/*! ./upload-emp-payment.component.html */ "./src/app/home/bonus/upload-emp-payment/upload-emp-payment.component.html"),
            styles: [__webpack_require__(/*! ./upload-emp-payment.component.scss */ "./src/app/home/bonus/upload-emp-payment/upload-emp-payment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadEmpPaymentComponent);
    return UploadEmpPaymentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-bonus-bonus-module.js.map