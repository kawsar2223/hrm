(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-income-tax-income-tax-module"],{

/***/ "./src/app/home/income-tax/additional-tax-info/additional-tax-info.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/home/income-tax/additional-tax-info/additional-tax-info.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n    Additional Tax Information\r\n  </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Year\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"custom-select \">\r\n                  <option>Select state</option>\r\n                  <option>Type 1</option>\r\n                  <option>Type 2</option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Item Name\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Item Name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Code\r\n                      <i class=\"text-danger\">*</i>\r\n                  </label>\r\n          \r\n                  <div class=\"input-group col-sm-8\">\r\n                    <input class=\"form-control\" name=\"\" placeholder=\"Employee-code\" >\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                        <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-form-label col-sm-4 text-sm-right\">Emp Name\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Emp Name\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                      <label class=\"col-form-label col-sm-4 text-sm-right\">Exemption Rule\r\n                      </label>\r\n                      <div class=\"col-sm-8\">\r\n                        <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Exemption Rule\"></textarea>\r\n                      </div>\r\n                    </div>\r\n      </div>\r\n    \r\n                <div class=\"row\">\r\n                    <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                        <button type=\"\" class=\"btn btn-success\" >\r\n                          <span class=\"fas fa-save\"> Save</span>\r\n                        </button>\r\n                        <button type=\"\" class=\"btn btn-secondary \">\r\n                          <span class=\"fas fa-window-close\"> Close</span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th>#</th>\r\n                            <th>Emp.code</th>\r\n                            <th>Emp Name</th>\r\n                            <th>Item Name</th>\r\n                            <th>Exempt Amount</th>\r\n                            <th></th>\r\n                           \r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr>\r\n                            <th>1</th>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>2</th>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>3</th>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n      </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/home/income-tax/additional-tax-info/additional-tax-info.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/income-tax/additional-tax-info/additional-tax-info.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC9hZGRpdGlvbmFsLXRheC1pbmZvL2FkZGl0aW9uYWwtdGF4LWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/income-tax/additional-tax-info/additional-tax-info.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/income-tax/additional-tax-info/additional-tax-info.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdditionalTaxInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalTaxInfoComponent", function() { return AdditionalTaxInfoComponent; });
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

var AdditionalTaxInfoComponent = /** @class */ (function () {
    function AdditionalTaxInfoComponent() {
    }
    AdditionalTaxInfoComponent.prototype.ngOnInit = function () {
    };
    AdditionalTaxInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-additional-tax-info',
            template: __webpack_require__(/*! ./additional-tax-info.component.html */ "./src/app/home/income-tax/additional-tax-info/additional-tax-info.component.html"),
            styles: [__webpack_require__(/*! ./additional-tax-info.component.scss */ "./src/app/home/income-tax/additional-tax-info/additional-tax-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdditionalTaxInfoComponent);
    return AdditionalTaxInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/block-tax-calculation/block-tax-calculation.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/home/income-tax/block-tax-calculation/block-tax-calculation.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n     Block Tax Calculation\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <br/>\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Period\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Period\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"custom-select \">\r\n                  <option>Select state</option>\r\n                  <option>Type 1</option>\r\n                  <option>Type 2</option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Emp Code\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Emp Code\">\r\n                </div>\r\n              </div>\r\n    </div>\r\n            <div class=\"row\">\r\n                <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                    <button type=\"\" class=\"btn btn-success\" >\r\n                      <span class=\"fas fa-spinner\"></span> Process\r\n                    </button>\r\n                    <button type=\"\" class=\"btn btn-secondary \">\r\n                      <span class=\"fas fa-window-close\"> Close</span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n      </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/home/income-tax/block-tax-calculation/block-tax-calculation.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/home/income-tax/block-tax-calculation/block-tax-calculation.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC9ibG9jay10YXgtY2FsY3VsYXRpb24vYmxvY2stdGF4LWNhbGN1bGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/income-tax/block-tax-calculation/block-tax-calculation.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/home/income-tax/block-tax-calculation/block-tax-calculation.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BlockTaxCalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTaxCalculationComponent", function() { return BlockTaxCalculationComponent; });
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

var BlockTaxCalculationComponent = /** @class */ (function () {
    function BlockTaxCalculationComponent() {
    }
    BlockTaxCalculationComponent.prototype.ngOnInit = function () {
    };
    BlockTaxCalculationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-tax-calculation',
            template: __webpack_require__(/*! ./block-tax-calculation.component.html */ "./src/app/home/income-tax/block-tax-calculation/block-tax-calculation.component.html"),
            styles: [__webpack_require__(/*! ./block-tax-calculation.component.scss */ "./src/app/home/income-tax/block-tax-calculation/block-tax-calculation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockTaxCalculationComponent);
    return BlockTaxCalculationComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/challan-number-assign/challan-number-assign.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/home/income-tax/challan-number-assign/challan-number-assign.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Challan Number Assign\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Period\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"custom-select \">\r\n                  <option>Select state</option>\r\n                  <option>Type 1</option>\r\n                  <option>Type 2</option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Challan Group\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                  <select class=\"custom-select \">\r\n                    <option>Select state</option>\r\n                    <option>Type 1</option>\r\n                    <option>Type 2</option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-4 text-sm-right\">Challan Number\r\n                  </label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Challan Number\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-form-label col-sm-4 text-sm-right\"> Challan Date\r\n                \r\n                    </label>\r\n                \r\n                    <div class=\"input-group col-sm-8\">\r\n                      <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                      <div class=\"input-group-append\">\r\n                        <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                          <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-form-label col-sm-4 text-sm-right\">Challan Type\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                      <select class=\"custom-select \">\r\n                        <option>Select state</option>\r\n                        <option>Type 1</option>\r\n                        <option>Type 2</option>\r\n                        <option></option>\r\n                        <option></option>\r\n                        <option></option>\r\n                        <option></option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n      </div>\r\n              <div class=\"row\">\r\n                  <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                      <button type=\"\" class=\"btn btn-success\" >\r\n                        <span class=\"fas fa-save\"> Process</span>\r\n                      </button>\r\n                      <button type=\"\" class=\"btn btn-info \">\r\n                        <span class=\"ion ion-ios-refresh\"> Reset</span>\r\n                      </button>\r\n                      <button type=\"\" class=\"btn btn-secondary \">\r\n                        <span class=\"fas fa-window-close\"> Close</span>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n      </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/home/income-tax/challan-number-assign/challan-number-assign.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/home/income-tax/challan-number-assign/challan-number-assign.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC9jaGFsbGFuLW51bWJlci1hc3NpZ24vY2hhbGxhbi1udW1iZXItYXNzaWduLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/income-tax/challan-number-assign/challan-number-assign.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/home/income-tax/challan-number-assign/challan-number-assign.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChallanNumberAssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallanNumberAssignComponent", function() { return ChallanNumberAssignComponent; });
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

var ChallanNumberAssignComponent = /** @class */ (function () {
    function ChallanNumberAssignComponent() {
    }
    ChallanNumberAssignComponent.prototype.ngOnInit = function () {
    };
    ChallanNumberAssignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-challan-number-assign',
            template: __webpack_require__(/*! ./challan-number-assign.component.html */ "./src/app/home/income-tax/challan-number-assign/challan-number-assign.component.html"),
            styles: [__webpack_require__(/*! ./challan-number-assign.component.scss */ "./src/app/home/income-tax/challan-number-assign/challan-number-assign.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChallanNumberAssignComponent);
    return ChallanNumberAssignComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/challan-prepare/challan-prepare.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/income-tax/challan-prepare/challan-prepare.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Challan Prepare\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <br />\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Salary Period\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\"> Branch\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Type\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\"> Tax Type\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n         <span class=\"fas fa-spinner\"></span> Process\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>Code</th>\r\n          <th>Employee Name</th>\r\n          <th>Department</th>\r\n          <th>Designation</th>\r\n          <th>Department</th>\r\n          <th>Amount</th>\r\n          <th>Delete</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n        <tr>\r\n\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n        <tr>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label text-sm-right\"> Challan Group\r\n            </label>\r\n            \r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n           \r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label text-sm-right\">Number\r\n            </label>\r\n            \r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Number\">\r\n            \r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label  text-sm-right\">Total Amount\r\n            </label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Total Amount\">\r\n          </div>\r\n    </div>\r\n  </div>\r\n    \r\n    \r\n    \r\n\r\n    <div class=\"row\">\r\n        <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n            <button type=\"\" class=\"btn btn-success\" >\r\n              <span class=\"fas fa-save\">Process</span>\r\n            </button>\r\n            <button type=\"\" class=\"btn btn-secondary \">\r\n              <span class=\"fas fa-window-close\"> Close</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/income-tax/challan-prepare/challan-prepare.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/income-tax/challan-prepare/challan-prepare.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC9jaGFsbGFuLXByZXBhcmUvY2hhbGxhbi1wcmVwYXJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/income-tax/challan-prepare/challan-prepare.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/income-tax/challan-prepare/challan-prepare.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChallanPrepareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallanPrepareComponent", function() { return ChallanPrepareComponent; });
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

var ChallanPrepareComponent = /** @class */ (function () {
    function ChallanPrepareComponent() {
    }
    ChallanPrepareComponent.prototype.ngOnInit = function () {
    };
    ChallanPrepareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-challan-prepare',
            template: __webpack_require__(/*! ./challan-prepare.component.html */ "./src/app/home/income-tax/challan-prepare/challan-prepare.component.html"),
            styles: [__webpack_require__(/*! ./challan-prepare.component.scss */ "./src/app/home/income-tax/challan-prepare/challan-prepare.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChallanPrepareComponent);
    return ChallanPrepareComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/income-tax-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/income-tax/income-tax-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: IncomeTaxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTaxRoutingModule", function() { return IncomeTaxRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tax_year_info_tax_year_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax-year-info/tax-year-info.component */ "./src/app/home/income-tax/tax-year-info/tax-year-info.component.ts");
/* harmony import */ var _income_tax_slab_income_tax_slab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income-tax-slab/income-tax-slab.component */ "./src/app/home/income-tax/income-tax-slab/income-tax-slab.component.ts");
/* harmony import */ var _income_tax_setup_income_tax_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income-tax-setup/income-tax-setup.component */ "./src/app/home/income-tax/income-tax-setup/income-tax-setup.component.ts");
/* harmony import */ var _minimum_tax_setup_minimum_tax_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./minimum-tax-setup/minimum-tax-setup.component */ "./src/app/home/income-tax/minimum-tax-setup/minimum-tax-setup.component.ts");
/* harmony import */ var _surcharge_assign_surcharge_assign_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./surcharge-assign/surcharge-assign.component */ "./src/app/home/income-tax/surcharge-assign/surcharge-assign.component.ts");
/* harmony import */ var _tax_challan_tax_challan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tax-challan/tax-challan.component */ "./src/app/home/income-tax/tax-challan/tax-challan.component.ts");
/* harmony import */ var _block_tax_calculation_block_tax_calculation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block-tax-calculation/block-tax-calculation.component */ "./src/app/home/income-tax/block-tax-calculation/block-tax-calculation.component.ts");
/* harmony import */ var _search_charge_setup_search_charge_setup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-charge-setup/search-charge-setup.component */ "./src/app/home/income-tax/search-charge-setup/search-charge-setup.component.ts");
/* harmony import */ var _additional_tax_info_additional_tax_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./additional-tax-info/additional-tax-info.component */ "./src/app/home/income-tax/additional-tax-info/additional-tax-info.component.ts");
/* harmony import */ var _other_tax_calculation_other_tax_calculation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./other-tax-calculation/other-tax-calculation.component */ "./src/app/home/income-tax/other-tax-calculation/other-tax-calculation.component.ts");
/* harmony import */ var _challan_prepare_challan_prepare_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./challan-prepare/challan-prepare.component */ "./src/app/home/income-tax/challan-prepare/challan-prepare.component.ts");
/* harmony import */ var _challan_number_assign_challan_number_assign_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./challan-number-assign/challan-number-assign.component */ "./src/app/home/income-tax/challan-number-assign/challan-number-assign.component.ts");
/* harmony import */ var _txt_card_report_txt_card_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./txt-card-report/txt-card-report.component */ "./src/app/home/income-tax/txt-card-report/txt-card-report.component.ts");
/* harmony import */ var _tax_report_tax_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tax-report/tax-report.component */ "./src/app/home/income-tax/tax-report/tax-report.component.ts");
/* harmony import */ var _tax_paid_payroll_tax_paid_payroll_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tax-paid-payroll/tax-paid-payroll.component */ "./src/app/home/income-tax/tax-paid-payroll/tax-paid-payroll.component.ts");
/* harmony import */ var _tax_adjust_tax_adjust_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tax-adjust/tax-adjust.component */ "./src/app/home/income-tax/tax-adjust/tax-adjust.component.ts");
/* harmony import */ var _process_income_tax_process_income_tax_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./process-income-tax/process-income-tax.component */ "./src/app/home/income-tax/process-income-tax/process-income-tax.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var IncomeTaxRoutingModule = /** @class */ (function () {
    function IncomeTaxRoutingModule() {
    }
    IncomeTaxRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'tax-year-info', component: _tax_year_info_tax_year_info_component__WEBPACK_IMPORTED_MODULE_2__["TaxYearInfoComponent"] },
                    { path: 'income-tax-slab', component: _income_tax_slab_income_tax_slab_component__WEBPACK_IMPORTED_MODULE_3__["IncomeTaxSlabComponent"] },
                    { path: 'income-tax-setup', component: _income_tax_setup_income_tax_setup_component__WEBPACK_IMPORTED_MODULE_4__["IncomeTaxSetupComponent"] },
                    { path: 'minimum-tax-setup', component: _minimum_tax_setup_minimum_tax_setup_component__WEBPACK_IMPORTED_MODULE_5__["MinimumTaxSetupComponent"] },
                    { path: 'surcharge-assign', component: _surcharge_assign_surcharge_assign_component__WEBPACK_IMPORTED_MODULE_6__["SurchargeAssignComponent"] },
                    { path: 'search-charge-setup', component: _search_charge_setup_search_charge_setup_component__WEBPACK_IMPORTED_MODULE_9__["SearchChargeSetupComponent"] },
                    { path: 'block-tax-calculation', component: _block_tax_calculation_block_tax_calculation_component__WEBPACK_IMPORTED_MODULE_8__["BlockTaxCalculationComponent"] },
                    { path: 'tax-challan', component: _tax_challan_tax_challan_component__WEBPACK_IMPORTED_MODULE_7__["TaxChallanComponent"] },
                    { path: 'additional-tax-info', component: _additional_tax_info_additional_tax_info_component__WEBPACK_IMPORTED_MODULE_10__["AdditionalTaxInfoComponent"] },
                    { path: 'other-tax-calculation', component: _other_tax_calculation_other_tax_calculation_component__WEBPACK_IMPORTED_MODULE_11__["OtherTaxCalculationComponent"] },
                    { path: 'challan-prepare', component: _challan_prepare_challan_prepare_component__WEBPACK_IMPORTED_MODULE_12__["ChallanPrepareComponent"] },
                    { path: 'challan-number-assign', component: _challan_number_assign_challan_number_assign_component__WEBPACK_IMPORTED_MODULE_13__["ChallanNumberAssignComponent"] },
                    { path: 'txt-card-report', component: _txt_card_report_txt_card_report_component__WEBPACK_IMPORTED_MODULE_14__["TxtCardReportComponent"] },
                    { path: 'tax-report', component: _tax_report_tax_report_component__WEBPACK_IMPORTED_MODULE_15__["TaxReportComponent"] },
                    { path: 'tax-paid-payroll', component: _tax_paid_payroll_tax_paid_payroll_component__WEBPACK_IMPORTED_MODULE_16__["TaxPaidPayrollComponent"] },
                    { path: 'tax-adjust', component: _tax_adjust_tax_adjust_component__WEBPACK_IMPORTED_MODULE_17__["TaxAdjustComponent"] },
                    { path: 'process-income-tax', component: _process_income_tax_process_income_tax_component__WEBPACK_IMPORTED_MODULE_18__["ProcessIncomeTaxComponent"] }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IncomeTaxRoutingModule);
    return IncomeTaxRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/income-tax/income-tax-setup/income-tax-setup.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/income-tax/income-tax-setup/income-tax-setup.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Income Tax Setup\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <br/>\r\n   <div class=\"col-md-7 center\">\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Income Your Name\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Slab Number\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Slab Number\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Item\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Tax Item\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Exemption\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Exemption Amount\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Exemption Amount\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Exemption percent\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Exemption percent\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Exemption percent of\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Exemption Maximum Amount\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Exemption Maximum Amount\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Exemption rule text\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Exemption rule text\">\r\n          </div>\r\n        </div>\r\n   </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\" >\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-secondary \">\r\n          <span class=\"fas fa-window-close\"> Close</span>\r\n        </button>\r\n      </div>\r\n      </div>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Tax Item</th>\r\n            <th>Exemption</th>\r\n            <th>Exemption Amount</th>\r\n            <th>Exemption Percent</th>\r\n            <th>Max Exemption Amount</th>\r\n           \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/home/income-tax/income-tax-setup/income-tax-setup.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/income-tax/income-tax-setup/income-tax-setup.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC9pbmNvbWUtdGF4LXNldHVwL2luY29tZS10YXgtc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/income-tax/income-tax-setup/income-tax-setup.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/income-tax/income-tax-setup/income-tax-setup.component.ts ***!
  \********************************************************************************/
/*! exports provided: IncomeTaxSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTaxSetupComponent", function() { return IncomeTaxSetupComponent; });
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

var IncomeTaxSetupComponent = /** @class */ (function () {
    function IncomeTaxSetupComponent() {
    }
    IncomeTaxSetupComponent.prototype.ngOnInit = function () {
    };
    IncomeTaxSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-income-tax-setup',
            template: __webpack_require__(/*! ./income-tax-setup.component.html */ "./src/app/home/income-tax/income-tax-setup/income-tax-setup.component.html"),
            styles: [__webpack_require__(/*! ./income-tax-setup.component.scss */ "./src/app/home/income-tax/income-tax-setup/income-tax-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IncomeTaxSetupComponent);
    return IncomeTaxSetupComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/income-tax-slab/income-tax-slab.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/income-tax/income-tax-slab/income-tax-slab.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n     Tax Year Slab\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <br/>\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Info Name\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Slab Type\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Slab Number\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Slab Number\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Slab Amount\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Slab Amount\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Rate\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Tax Rate\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Slab Text\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Slab Text\">\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\" >\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-secondary \">\r\n          <span class=\"fas fa-window-close\"> Close</span>\r\n        </button>\r\n      </div>\r\n      </div>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Slab Amount</th>\r\n            <th>Tax Rate</th>\r\n            <th>Slab Text</th>\r\n           \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/income-tax/income-tax-slab/income-tax-slab.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/income-tax/income-tax-slab/income-tax-slab.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC9pbmNvbWUtdGF4LXNsYWIvaW5jb21lLXRheC1zbGFiLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/income-tax/income-tax-slab/income-tax-slab.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/income-tax/income-tax-slab/income-tax-slab.component.ts ***!
  \******************************************************************************/
/*! exports provided: IncomeTaxSlabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTaxSlabComponent", function() { return IncomeTaxSlabComponent; });
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

var IncomeTaxSlabComponent = /** @class */ (function () {
    function IncomeTaxSlabComponent() {
    }
    IncomeTaxSlabComponent.prototype.ngOnInit = function () {
    };
    IncomeTaxSlabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-income-tax-slab',
            template: __webpack_require__(/*! ./income-tax-slab.component.html */ "./src/app/home/income-tax/income-tax-slab/income-tax-slab.component.html"),
            styles: [__webpack_require__(/*! ./income-tax-slab.component.scss */ "./src/app/home/income-tax/income-tax-slab/income-tax-slab.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IncomeTaxSlabComponent);
    return IncomeTaxSlabComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/income-tax.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/income-tax/income-tax.module.ts ***!
  \******************************************************/
/*! exports provided: IncomeTaxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTaxModule", function() { return IncomeTaxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _income_tax_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income-tax-routing.module */ "./src/app/home/income-tax/income-tax-routing.module.ts");
/* harmony import */ var _tax_year_info_tax_year_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tax-year-info/tax-year-info.component */ "./src/app/home/income-tax/tax-year-info/tax-year-info.component.ts");
/* harmony import */ var _income_tax_slab_income_tax_slab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./income-tax-slab/income-tax-slab.component */ "./src/app/home/income-tax/income-tax-slab/income-tax-slab.component.ts");
/* harmony import */ var _income_tax_setup_income_tax_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./income-tax-setup/income-tax-setup.component */ "./src/app/home/income-tax/income-tax-setup/income-tax-setup.component.ts");
/* harmony import */ var _minimum_tax_setup_minimum_tax_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./minimum-tax-setup/minimum-tax-setup.component */ "./src/app/home/income-tax/minimum-tax-setup/minimum-tax-setup.component.ts");
/* harmony import */ var _surcharge_assign_surcharge_assign_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./surcharge-assign/surcharge-assign.component */ "./src/app/home/income-tax/surcharge-assign/surcharge-assign.component.ts");
/* harmony import */ var _search_charge_setup_search_charge_setup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-charge-setup/search-charge-setup.component */ "./src/app/home/income-tax/search-charge-setup/search-charge-setup.component.ts");
/* harmony import */ var _block_tax_calculation_block_tax_calculation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block-tax-calculation/block-tax-calculation.component */ "./src/app/home/income-tax/block-tax-calculation/block-tax-calculation.component.ts");
/* harmony import */ var _tax_challan_tax_challan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tax-challan/tax-challan.component */ "./src/app/home/income-tax/tax-challan/tax-challan.component.ts");
/* harmony import */ var _additional_tax_info_additional_tax_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./additional-tax-info/additional-tax-info.component */ "./src/app/home/income-tax/additional-tax-info/additional-tax-info.component.ts");
/* harmony import */ var _other_tax_calculation_other_tax_calculation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./other-tax-calculation/other-tax-calculation.component */ "./src/app/home/income-tax/other-tax-calculation/other-tax-calculation.component.ts");
/* harmony import */ var _challan_prepare_challan_prepare_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./challan-prepare/challan-prepare.component */ "./src/app/home/income-tax/challan-prepare/challan-prepare.component.ts");
/* harmony import */ var _challan_number_assign_challan_number_assign_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./challan-number-assign/challan-number-assign.component */ "./src/app/home/income-tax/challan-number-assign/challan-number-assign.component.ts");
/* harmony import */ var _txt_card_report_txt_card_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./txt-card-report/txt-card-report.component */ "./src/app/home/income-tax/txt-card-report/txt-card-report.component.ts");
/* harmony import */ var _tax_report_tax_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tax-report/tax-report.component */ "./src/app/home/income-tax/tax-report/tax-report.component.ts");
/* harmony import */ var _tax_paid_payroll_tax_paid_payroll_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tax-paid-payroll/tax-paid-payroll.component */ "./src/app/home/income-tax/tax-paid-payroll/tax-paid-payroll.component.ts");
/* harmony import */ var _tax_adjust_tax_adjust_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tax-adjust/tax-adjust.component */ "./src/app/home/income-tax/tax-adjust/tax-adjust.component.ts");
/* harmony import */ var _process_income_tax_process_income_tax_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./process-income-tax/process-income-tax.component */ "./src/app/home/income-tax/process-income-tax/process-income-tax.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var IncomeTaxModule = /** @class */ (function () {
    function IncomeTaxModule() {
    }
    IncomeTaxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _tax_year_info_tax_year_info_component__WEBPACK_IMPORTED_MODULE_5__["TaxYearInfoComponent"],
                _income_tax_slab_income_tax_slab_component__WEBPACK_IMPORTED_MODULE_6__["IncomeTaxSlabComponent"],
                _income_tax_setup_income_tax_setup_component__WEBPACK_IMPORTED_MODULE_7__["IncomeTaxSetupComponent"],
                _minimum_tax_setup_minimum_tax_setup_component__WEBPACK_IMPORTED_MODULE_8__["MinimumTaxSetupComponent"],
                _surcharge_assign_surcharge_assign_component__WEBPACK_IMPORTED_MODULE_9__["SurchargeAssignComponent"],
                _search_charge_setup_search_charge_setup_component__WEBPACK_IMPORTED_MODULE_10__["SearchChargeSetupComponent"],
                _block_tax_calculation_block_tax_calculation_component__WEBPACK_IMPORTED_MODULE_11__["BlockTaxCalculationComponent"],
                _tax_challan_tax_challan_component__WEBPACK_IMPORTED_MODULE_12__["TaxChallanComponent"],
                _additional_tax_info_additional_tax_info_component__WEBPACK_IMPORTED_MODULE_13__["AdditionalTaxInfoComponent"],
                _other_tax_calculation_other_tax_calculation_component__WEBPACK_IMPORTED_MODULE_14__["OtherTaxCalculationComponent"],
                _challan_prepare_challan_prepare_component__WEBPACK_IMPORTED_MODULE_15__["ChallanPrepareComponent"],
                _challan_number_assign_challan_number_assign_component__WEBPACK_IMPORTED_MODULE_16__["ChallanNumberAssignComponent"],
                _txt_card_report_txt_card_report_component__WEBPACK_IMPORTED_MODULE_17__["TxtCardReportComponent"],
                _tax_report_tax_report_component__WEBPACK_IMPORTED_MODULE_18__["TaxReportComponent"],
                _tax_paid_payroll_tax_paid_payroll_component__WEBPACK_IMPORTED_MODULE_19__["TaxPaidPayrollComponent"],
                _tax_adjust_tax_adjust_component__WEBPACK_IMPORTED_MODULE_20__["TaxAdjustComponent"],
                _process_income_tax_process_income_tax_component__WEBPACK_IMPORTED_MODULE_21__["ProcessIncomeTaxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _income_tax_routing_module__WEBPACK_IMPORTED_MODULE_4__["IncomeTaxRoutingModule"]
            ]
        })
    ], IncomeTaxModule);
    return IncomeTaxModule;
}());



/***/ }),

/***/ "./src/app/home/income-tax/minimum-tax-setup/minimum-tax-setup.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/home/income-tax/minimum-tax-setup/minimum-tax-setup.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Minimum Tax Setup\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <br/>\r\n   <div class=\"col-md-7 center\">\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Year\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Minimum Tax\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Minimum Tax\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Invest Rate\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Invest Rate\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Invest Amount Limit\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Invest Amount Limit\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Rebate Rate\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Rebate Rate\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Car Percentage\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\" Car Percentage\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">House Percentage\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"House Percentage\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Note\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Note\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> From Date\r\n      \r\n          </label>\r\n      \r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n   </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\" >\r\n            <span class=\"fas fa-save\"> Save</span>\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-info \">\r\n            <span class=\"ion ion-ios-refresh\"> Reset</span>\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"> Close</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Minimum Tax</th>\r\n            <th>Invest Rate</th>\r\n            <th>Rebate Rate</th>\r\n            <th>car Percent</th>\r\n            <th>House Present</th>\r\n           \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/income-tax/minimum-tax-setup/minimum-tax-setup.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/income-tax/minimum-tax-setup/minimum-tax-setup.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC9taW5pbXVtLXRheC1zZXR1cC9taW5pbXVtLXRheC1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/income-tax/minimum-tax-setup/minimum-tax-setup.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/income-tax/minimum-tax-setup/minimum-tax-setup.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MinimumTaxSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimumTaxSetupComponent", function() { return MinimumTaxSetupComponent; });
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

var MinimumTaxSetupComponent = /** @class */ (function () {
    function MinimumTaxSetupComponent() {
    }
    MinimumTaxSetupComponent.prototype.ngOnInit = function () {
    };
    MinimumTaxSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-minimum-tax-setup',
            template: __webpack_require__(/*! ./minimum-tax-setup.component.html */ "./src/app/home/income-tax/minimum-tax-setup/minimum-tax-setup.component.html"),
            styles: [__webpack_require__(/*! ./minimum-tax-setup.component.scss */ "./src/app/home/income-tax/minimum-tax-setup/minimum-tax-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MinimumTaxSetupComponent);
    return MinimumTaxSetupComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/other-tax-calculation/other-tax-calculation.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/home/income-tax/other-tax-calculation/other-tax-calculation.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n    Other Tax Calculation\r\n  </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\"> Period\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"custom-select \">\r\n                  <option>Select state</option>\r\n                  <option>Type 1</option>\r\n                  <option>Type 2</option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Income Year\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                  <select class=\"custom-select \">\r\n                    <option>Select state</option>\r\n                    <option>Type 1</option>\r\n                    <option>Type 2</option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-4 text-sm-right\">Bonus Type\r\n                  </label>\r\n                  <div class=\"col-sm-8\">\r\n                    <select class=\"custom-select \">\r\n                      <option>Select state</option>\r\n                      <option>Type 1</option>\r\n                      <option>Type 2</option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Code\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Employee Code\">\r\n                    </div>\r\n                  </div>\r\n      </div>\r\n              <div class=\"row\">\r\n                  <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                      <button type=\"\" class=\"btn btn-success\" >\r\n                        <span class=\"fas fa-save\">Process</span>\r\n                      </button>\r\n                      <button type=\"\" class=\"btn btn-secondary \">\r\n                        <span class=\"fas fa-window-close\"> Close</span>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n      </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/home/income-tax/other-tax-calculation/other-tax-calculation.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/home/income-tax/other-tax-calculation/other-tax-calculation.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC9vdGhlci10YXgtY2FsY3VsYXRpb24vb3RoZXItdGF4LWNhbGN1bGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/income-tax/other-tax-calculation/other-tax-calculation.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/home/income-tax/other-tax-calculation/other-tax-calculation.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OtherTaxCalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherTaxCalculationComponent", function() { return OtherTaxCalculationComponent; });
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

var OtherTaxCalculationComponent = /** @class */ (function () {
    function OtherTaxCalculationComponent() {
    }
    OtherTaxCalculationComponent.prototype.ngOnInit = function () {
    };
    OtherTaxCalculationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-other-tax-calculation',
            template: __webpack_require__(/*! ./other-tax-calculation.component.html */ "./src/app/home/income-tax/other-tax-calculation/other-tax-calculation.component.html"),
            styles: [__webpack_require__(/*! ./other-tax-calculation.component.scss */ "./src/app/home/income-tax/other-tax-calculation/other-tax-calculation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherTaxCalculationComponent);
    return OtherTaxCalculationComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/process-income-tax/process-income-tax.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/home/income-tax/process-income-tax/process-income-tax.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Process Income Tax\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <br />\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">period\r\n                </label>\r\n                <div class=\"col-sm-6\">\r\n                  <select class=\"custom-select \">\r\n                    <option>Select state</option>\r\n                    <option>Type 1</option>\r\n                    <option>Type 2</option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Year\r\n                  </label>\r\n                  <div class=\"col-sm-6\">\r\n                    <select class=\"custom-select \">\r\n                      <option>Select state</option>\r\n                      <option>Type 1</option>\r\n                      <option>Type 2</option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Emp Name\r\n                </label>\r\n                <div class=\"col-sm-6\">\r\n                  <select class=\"custom-select \">\r\n                    <option>Select state</option>\r\n                    <option>Type 1</option>\r\n                    <option>Type 2</option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-4 text-sm-right\">Emp Code\r\n                  </label>\r\n                  <div class=\"col-sm-6\">\r\n                    <select class=\"custom-select \">\r\n                      <option>Select state</option>\r\n                      <option>Type 1</option>\r\n                      <option>Type 2</option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n        </div>\r\n        \r\n            <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n              <button type=\"\" class=\"btn btn-success\">\r\n                <span class=\"fas fa-save\">Pre Process Income Tax</span>\r\n              </button>\r\n              <button type=\"\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-save\"> Process Income Tax</span>\r\n                </button>\r\n            </div>\r\n    </div>\r\n      </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/home/income-tax/process-income-tax/process-income-tax.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/home/income-tax/process-income-tax/process-income-tax.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC9wcm9jZXNzLWluY29tZS10YXgvcHJvY2Vzcy1pbmNvbWUtdGF4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/income-tax/process-income-tax/process-income-tax.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/income-tax/process-income-tax/process-income-tax.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProcessIncomeTaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessIncomeTaxComponent", function() { return ProcessIncomeTaxComponent; });
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

var ProcessIncomeTaxComponent = /** @class */ (function () {
    function ProcessIncomeTaxComponent() {
    }
    ProcessIncomeTaxComponent.prototype.ngOnInit = function () {
    };
    ProcessIncomeTaxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-process-income-tax',
            template: __webpack_require__(/*! ./process-income-tax.component.html */ "./src/app/home/income-tax/process-income-tax/process-income-tax.component.html"),
            styles: [__webpack_require__(/*! ./process-income-tax.component.scss */ "./src/app/home/income-tax/process-income-tax/process-income-tax.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcessIncomeTaxComponent);
    return ProcessIncomeTaxComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/search-charge-setup/search-charge-setup.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/home/income-tax/search-charge-setup/search-charge-setup.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section \">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Search Charge Setup\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <br/>\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Year\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Slab Name\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Slab Name\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Slab Amount\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Slab Amount\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-4 text-sm-right\">Percentage\r\n                  </label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Percentage\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-form-label col-sm-4 text-sm-right\">Note\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Note\">\r\n                    </div>\r\n                  </div>\r\n               \r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-4 text-sm-right\"> From Date\r\n              \r\n                  </label>\r\n              \r\n                  <div class=\"input-group col-sm-8\">\r\n                    <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                        <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n    </div>\r\n              <div class=\"row\">\r\n                  <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                      <button type=\"\" class=\"btn btn-success\" >\r\n                        <span class=\"fas fa-save\"> Save</span>\r\n                      </button>\r\n                      <button type=\"\" class=\"btn btn-info \">\r\n                        <span class=\"ion ion-ios-refresh\"> Reset</span>\r\n                      </button>\r\n                      <button type=\"\" class=\"btn btn-secondary \">\r\n                        <span class=\"fas fa-window-close\"> Close</span>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                  <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>#</th>\r\n                          <th>Slab Name</th>\r\n                          <th>Slab Amount</th>\r\n                          <th>Percentage</th>\r\n                          <th></th>\r\n                          <th></th>\r\n                         \r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr>\r\n                          <th>1</th>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>2</th>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>3</th>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td></td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n            </div>\r\n    </div>\r\n    \r\n"

/***/ }),

/***/ "./src/app/home/income-tax/search-charge-setup/search-charge-setup.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/income-tax/search-charge-setup/search-charge-setup.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC9zZWFyY2gtY2hhcmdlLXNldHVwL3NlYXJjaC1jaGFyZ2Utc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/income-tax/search-charge-setup/search-charge-setup.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/income-tax/search-charge-setup/search-charge-setup.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SearchChargeSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchChargeSetupComponent", function() { return SearchChargeSetupComponent; });
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

var SearchChargeSetupComponent = /** @class */ (function () {
    function SearchChargeSetupComponent() {
    }
    SearchChargeSetupComponent.prototype.ngOnInit = function () {
    };
    SearchChargeSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-charge-setup',
            template: __webpack_require__(/*! ./search-charge-setup.component.html */ "./src/app/home/income-tax/search-charge-setup/search-charge-setup.component.html"),
            styles: [__webpack_require__(/*! ./search-charge-setup.component.scss */ "./src/app/home/income-tax/search-charge-setup/search-charge-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchChargeSetupComponent);
    return SearchChargeSetupComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/surcharge-assign/surcharge-assign.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/income-tax/surcharge-assign/surcharge-assign.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Search Charge Assain\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <br/>\r\n    <div class=\"col-md-7 center \">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n                <i class=\"text-danger\">*</i>\r\n            </label>\r\n    \r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                  <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Year\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Surcharge percentage \r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> From Date\r\n      \r\n          </label>\r\n      \r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\" >\r\n            <span class=\"fas fa-save\"> Save</span>\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-info \">\r\n            <span class=\"ion ion-ios-refresh\"> Reset</span>\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"> Close</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Slab Name</th>\r\n            <th>Slab Amount</th>\r\n            <th>Percentage</th>\r\n            <th></th>\r\n            <th></th>\r\n           \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/income-tax/surcharge-assign/surcharge-assign.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/income-tax/surcharge-assign/surcharge-assign.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC9zdXJjaGFyZ2UtYXNzaWduL3N1cmNoYXJnZS1hc3NpZ24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/income-tax/surcharge-assign/surcharge-assign.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/income-tax/surcharge-assign/surcharge-assign.component.ts ***!
  \********************************************************************************/
/*! exports provided: SurchargeAssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurchargeAssignComponent", function() { return SurchargeAssignComponent; });
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

var SurchargeAssignComponent = /** @class */ (function () {
    function SurchargeAssignComponent() {
    }
    SurchargeAssignComponent.prototype.ngOnInit = function () {
    };
    SurchargeAssignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-surcharge-assign',
            template: __webpack_require__(/*! ./surcharge-assign.component.html */ "./src/app/home/income-tax/surcharge-assign/surcharge-assign.component.html"),
            styles: [__webpack_require__(/*! ./surcharge-assign.component.scss */ "./src/app/home/income-tax/surcharge-assign/surcharge-assign.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SurchargeAssignComponent);
    return SurchargeAssignComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/tax-adjust/tax-adjust.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/home/income-tax/tax-adjust/tax-adjust.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Tax Adjust\r\n    </h4>\r\n    <div class=\"card-body\">\r\n     <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Year\r\n            </label>\r\n            <div class=\"col-sm-6\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n     </div>\r\n        <div class=\"row\">\r\n            <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n              <button type=\"\" class=\"btn btn-success\">\r\n                <span class=\"fas fa-save\">Adjust</span>\r\n              </button>\r\n              <button type=\"\" class=\"btn btn-secondary \">\r\n                <span class=\"fas fa-window-close\"> Close</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/home/income-tax/tax-adjust/tax-adjust.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/home/income-tax/tax-adjust/tax-adjust.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC90YXgtYWRqdXN0L3RheC1hZGp1c3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/income-tax/tax-adjust/tax-adjust.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/income-tax/tax-adjust/tax-adjust.component.ts ***!
  \********************************************************************/
/*! exports provided: TaxAdjustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxAdjustComponent", function() { return TaxAdjustComponent; });
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

var TaxAdjustComponent = /** @class */ (function () {
    function TaxAdjustComponent() {
    }
    TaxAdjustComponent.prototype.ngOnInit = function () {
    };
    TaxAdjustComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-adjust',
            template: __webpack_require__(/*! ./tax-adjust.component.html */ "./src/app/home/income-tax/tax-adjust/tax-adjust.component.html"),
            styles: [__webpack_require__(/*! ./tax-adjust.component.scss */ "./src/app/home/income-tax/tax-adjust/tax-adjust.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaxAdjustComponent);
    return TaxAdjustComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/tax-challan/tax-challan.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/income-tax/tax-challan/tax-challan.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n    Tax Challan\r\n    </h4>\r\n    <div class=\"card-body\">\r\n     <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Year\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Challan No\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Tax Challan No\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\"> Challan Date\r\n            \r\n                </label>\r\n            \r\n                <div class=\"input-group col-sm-8\">\r\n                  <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                      <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Salary Period\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"custom-select \">\r\n                  <option>Select state</option>\r\n                  <option>Type 1</option>\r\n                  <option>Type 2</option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n     </div>\r\n          <div class=\"row\">\r\n              <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                  <button type=\"\" class=\"btn btn-success\" >\r\n                    <span class=\"fas fa-save\"> Save</span>\r\n                  </button>\r\n                  <button type=\"\" class=\"btn btn-secondary \">\r\n                    <span class=\"fas fa-window-close\"> Close</span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <table class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>#</th>\r\n                      <th>Challan No</th>\r\n                      <th>Challan Date</th>\r\n                      <th>Period</th>\r\n                      <th>Txt Year</th>\r\n                      <th></th>\r\n                     \r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <th>1</th>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>2</th>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>3</th>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n      </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/home/income-tax/tax-challan/tax-challan.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/income-tax/tax-challan/tax-challan.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC90YXgtY2hhbGxhbi90YXgtY2hhbGxhbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/income-tax/tax-challan/tax-challan.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/income-tax/tax-challan/tax-challan.component.ts ***!
  \**********************************************************************/
/*! exports provided: TaxChallanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxChallanComponent", function() { return TaxChallanComponent; });
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

var TaxChallanComponent = /** @class */ (function () {
    function TaxChallanComponent() {
    }
    TaxChallanComponent.prototype.ngOnInit = function () {
    };
    TaxChallanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-challan',
            template: __webpack_require__(/*! ./tax-challan.component.html */ "./src/app/home/income-tax/tax-challan/tax-challan.component.html"),
            styles: [__webpack_require__(/*! ./tax-challan.component.scss */ "./src/app/home/income-tax/tax-challan/tax-challan.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaxChallanComponent);
    return TaxChallanComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/tax-paid-payroll/tax-paid-payroll.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/income-tax/tax-paid-payroll/tax-paid-payroll.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Tax Paid Payroll\r\n  </h4>\r\n  <div class=\"card-body\">\r\n<div class=\"col-md-7 center\">\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n            <i class=\"text-danger\">*</i>\r\n        </label>\r\n\r\n        <div class=\"input-group col-sm-8\">\r\n          <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n              <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n      </label>\r\n      <div class=\"col-sm-8\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n      </label>\r\n      <div class=\"col-sm-8\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n      </label>\r\n      <div class=\"col-sm-8\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Year\r\n      </label>\r\n      <div class=\"col-sm-8\">\r\n        <select class=\"custom-select \">\r\n          <option>Select state</option>\r\n          <option>Type 1</option>\r\n          <option>Type 2</option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Amount\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Amount\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Remarks\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <textarea rows=\"4\" type=\"text\" class=\"form-control\" placeholder=\"Remarks\"></textarea>\r\n            </div>\r\n          </div>\r\n</div>\r\n          <div class=\"row\">\r\n              <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n                <button type=\"\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-save\"> Process</span>\r\n                </button>\r\n                <button type=\"\" class=\"btn btn-info \">\r\n                  <span class=\"ion ion-ios-refresh\"> Reset</span>\r\n                </button>\r\n                <button type=\"\" class=\"btn btn-secondary \">\r\n                  <span class=\"fas fa-window-close\"> Close</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/income-tax/tax-paid-payroll/tax-paid-payroll.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/income-tax/tax-paid-payroll/tax-paid-payroll.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC90YXgtcGFpZC1wYXlyb2xsL3RheC1wYWlkLXBheXJvbGwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/income-tax/tax-paid-payroll/tax-paid-payroll.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/income-tax/tax-paid-payroll/tax-paid-payroll.component.ts ***!
  \********************************************************************************/
/*! exports provided: TaxPaidPayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxPaidPayrollComponent", function() { return TaxPaidPayrollComponent; });
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

var TaxPaidPayrollComponent = /** @class */ (function () {
    function TaxPaidPayrollComponent() {
    }
    TaxPaidPayrollComponent.prototype.ngOnInit = function () {
    };
    TaxPaidPayrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-paid-payroll',
            template: __webpack_require__(/*! ./tax-paid-payroll.component.html */ "./src/app/home/income-tax/tax-paid-payroll/tax-paid-payroll.component.html"),
            styles: [__webpack_require__(/*! ./tax-paid-payroll.component.scss */ "./src/app/home/income-tax/tax-paid-payroll/tax-paid-payroll.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaxPaidPayrollComponent);
    return TaxPaidPayrollComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/tax-report/tax-report.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/home/income-tax/tax-report/tax-report.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Tax Report\r\n    </h4>\r\n    <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Report Name\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n    </div>\r\n        <div class=\"row\">\r\n            <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n              </div>\r\n            </div>\r\n      </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/home/income-tax/tax-report/tax-report.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/home/income-tax/tax-report/tax-report.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC90YXgtcmVwb3J0L3RheC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/income-tax/tax-report/tax-report.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/income-tax/tax-report/tax-report.component.ts ***!
  \********************************************************************/
/*! exports provided: TaxReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxReportComponent", function() { return TaxReportComponent; });
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

var TaxReportComponent = /** @class */ (function () {
    function TaxReportComponent() {
    }
    TaxReportComponent.prototype.ngOnInit = function () {
    };
    TaxReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-report',
            template: __webpack_require__(/*! ./tax-report.component.html */ "./src/app/home/income-tax/tax-report/tax-report.component.html"),
            styles: [__webpack_require__(/*! ./tax-report.component.scss */ "./src/app/home/income-tax/tax-report/tax-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaxReportComponent);
    return TaxReportComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/tax-year-info/tax-year-info.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home/income-tax/tax-year-info/tax-year-info.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Create Tax Year\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <br/>\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Income Year Name\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Income Year Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\"> Start Date\r\n        \r\n            </label>\r\n        \r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">End Date\r\n        \r\n            </label>\r\n        \r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Tax Info\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\" >\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-secondary \">\r\n          <span class=\"fas fa-window-close\"> Close</span>\r\n        </button>\r\n      </div>\r\n      </div>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Tax Year Name</th>\r\n           \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/home/income-tax/tax-year-info/tax-year-info.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/income-tax/tax-year-info/tax-year-info.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC90YXgteWVhci1pbmZvL3RheC15ZWFyLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/income-tax/tax-year-info/tax-year-info.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/income-tax/tax-year-info/tax-year-info.component.ts ***!
  \**************************************************************************/
/*! exports provided: TaxYearInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxYearInfoComponent", function() { return TaxYearInfoComponent; });
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

var TaxYearInfoComponent = /** @class */ (function () {
    function TaxYearInfoComponent() {
    }
    TaxYearInfoComponent.prototype.ngOnInit = function () {
    };
    TaxYearInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-year-info',
            template: __webpack_require__(/*! ./tax-year-info.component.html */ "./src/app/home/income-tax/tax-year-info/tax-year-info.component.html"),
            styles: [__webpack_require__(/*! ./tax-year-info.component.scss */ "./src/app/home/income-tax/tax-year-info/tax-year-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaxYearInfoComponent);
    return TaxYearInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/income-tax/txt-card-report/txt-card-report.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/income-tax/txt-card-report/txt-card-report.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Tax Card Report\r\n  </h4>\r\n  <div class=\"card-body\">\r\n   <div class=\"col-md-7 center\">\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n              <i class=\"text-danger\">*</i>\r\n          </label>\r\n  \r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Select Tax Year\r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"custom-select \">\r\n            <option>Select state</option>\r\n            <option>Type 1</option>\r\n            <option>Type 2</option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n   </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/income-tax/txt-card-report/txt-card-report.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/income-tax/txt-card-report/txt-card-report.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jb21lLXRheC90eHQtY2FyZC1yZXBvcnQvdHh0LWNhcmQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/income-tax/txt-card-report/txt-card-report.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/income-tax/txt-card-report/txt-card-report.component.ts ***!
  \******************************************************************************/
/*! exports provided: TxtCardReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxtCardReportComponent", function() { return TxtCardReportComponent; });
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

var TxtCardReportComponent = /** @class */ (function () {
    function TxtCardReportComponent() {
    }
    TxtCardReportComponent.prototype.ngOnInit = function () {
    };
    TxtCardReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-txt-card-report',
            template: __webpack_require__(/*! ./txt-card-report.component.html */ "./src/app/home/income-tax/txt-card-report/txt-card-report.component.html"),
            styles: [__webpack_require__(/*! ./txt-card-report.component.scss */ "./src/app/home/income-tax/txt-card-report/txt-card-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TxtCardReportComponent);
    return TxtCardReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-income-tax-income-tax-module.js.map