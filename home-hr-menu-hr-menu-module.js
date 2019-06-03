(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-hr-menu-hr-menu-module"],{

/***/ "./src/app/home/hr-menu/additional-duties/additional-duties.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/hr-menu/additional-duties/additional-duties.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employment Additional Duties Information\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <form>\r\n\r\n      <div class=\"row\">\r\n        <br />\r\n        <div class=\"col-md-6\">\r\n          <br />\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n\r\n            </label>\r\n\r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                  <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <br />\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Joining Date\r\n            </label>\r\n\r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Type/Catagory\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select type</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Responsibilities\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\" style=\"height: 40px\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Responsibilities\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">From Date\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n\r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp2\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Duration\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\" style=\"height: 40px\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Duration\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Remarks\r\n            </label>\r\n            <div class=\"col-sm-8\" style=\"height: 40px\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Remarks\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Department/sub committee\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select type</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">School/Office/Committee\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select type</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Notice Issue Date\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">To Date\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp3\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d3=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d3.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Amount\r\n\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Payment Amount\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-save\"></span> Save\r\n          </button>\r\n          <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span> Reset\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"></span> Close\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Responsibilities</th>\r\n              <th>Duration</th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th>1</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n              <th>2</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n              <th>3</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/additional-duties/additional-duties.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/hr-menu/additional-duties/additional-duties.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  -webkit-box-shadow: 1px 1px 3px 0px;\n          box-shadow: 1px 1px 3px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oci1tZW51L2FkZGl0aW9uYWwtZHV0aWVzL0M6XFxVc2Vyc1xcQW5kcm9pZFxcRGVza3RvcFxcR2l0YnVpbGRcXEhSTVMvc3JjXFxhcHBcXGhvbWVcXGhyLW1lbnVcXGFkZGl0aW9uYWwtZHV0aWVzXFxhZGRpdGlvbmFsLWR1dGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9hZGRpdGlvbmFsLWR1dGllcy9hZGRpdGlvbmFsLWR1dGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9ue1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/hr-menu/additional-duties/additional-duties.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/hr-menu/additional-duties/additional-duties.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdditionalDutiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalDutiesComponent", function() { return AdditionalDutiesComponent; });
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

var AdditionalDutiesComponent = /** @class */ (function () {
    function AdditionalDutiesComponent() {
    }
    AdditionalDutiesComponent.prototype.ngOnInit = function () {
    };
    AdditionalDutiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-additional-duties',
            template: __webpack_require__(/*! ./additional-duties.component.html */ "./src/app/home/hr-menu/additional-duties/additional-duties.component.html"),
            styles: [__webpack_require__(/*! ./additional-duties.component.scss */ "./src/app/home/hr-menu/additional-duties/additional-duties.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdditionalDutiesComponent);
    return AdditionalDutiesComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/basic-hr-report/basic-hr-report.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/home/hr-menu/basic-hr-report/basic-hr-report.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n     Basic HR Report \r\n    </h4>\r\n    <div class=\"container\">\r\n      <br/>\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Report Type\r\n          </label>\r\n          <div class=\"col-sm-4\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>Type 1</option>\r\n              <option>Type 2</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n              <button type=\"\" class=\"btn btn-success\" >\r\n                <span class=\"fas fa-file-download\" > Generate Report</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/home/hr-menu/basic-hr-report/basic-hr-report.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/home/hr-menu/basic-hr-report/basic-hr-report.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9iYXNpYy1oci1yZXBvcnQvYmFzaWMtaHItcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/hr-menu/basic-hr-report/basic-hr-report.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/home/hr-menu/basic-hr-report/basic-hr-report.component.ts ***!
  \***************************************************************************/
/*! exports provided: BasicHrReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicHrReportComponent", function() { return BasicHrReportComponent; });
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

var BasicHrReportComponent = /** @class */ (function () {
    function BasicHrReportComponent() {
    }
    BasicHrReportComponent.prototype.ngOnInit = function () {
    };
    BasicHrReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-hr-report',
            template: __webpack_require__(/*! ./basic-hr-report.component.html */ "./src/app/home/hr-menu/basic-hr-report/basic-hr-report.component.html"),
            styles: [__webpack_require__(/*! ./basic-hr-report.component.scss */ "./src/app/home/hr-menu/basic-hr-report/basic-hr-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicHrReportComponent);
    return BasicHrReportComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/casual-join-date/casual-join-date.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/home/hr-menu/casual-join-date/casual-join-date.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Non Management Casual Date Of Joining\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n            <i class=\"text-danger\">*</i>\r\n        </label>\r\n\r\n        <div class=\"input-group col-sm-6\">\r\n          <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n              <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right \">Joining Date\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-6\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right \">Casual Date\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-6\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\"> Date\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-6\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <br/>\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\" >\r\n            <span class=\"fas fa-save\"></span> Save\r\n          </button>\r\n          <button type=\"clear\" class=\"btn btn-info\">\r\n              <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"></span> Close\r\n          </button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/casual-join-date/casual-join-date.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/home/hr-menu/casual-join-date/casual-join-date.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  -webkit-box-shadow: 1px 1px 3px 0px;\n          box-shadow: 1px 1px 3px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oci1tZW51L2Nhc3VhbC1qb2luLWRhdGUvQzpcXFVzZXJzXFxBbmRyb2lkXFxEZXNrdG9wXFxHaXRidWlsZFxcSFJNUy9zcmNcXGFwcFxcaG9tZVxcaHItbWVudVxcY2FzdWFsLWpvaW4tZGF0ZVxcY2FzdWFsLWpvaW4tZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9jYXN1YWwtam9pbi1kYXRlL2Nhc3VhbC1qb2luLWRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/hr-menu/casual-join-date/casual-join-date.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/hr-menu/casual-join-date/casual-join-date.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CasualJoinDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasualJoinDateComponent", function() { return CasualJoinDateComponent; });
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

var CasualJoinDateComponent = /** @class */ (function () {
    function CasualJoinDateComponent() {
    }
    CasualJoinDateComponent.prototype.ngOnInit = function () {
    };
    CasualJoinDateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-casual-join-date',
            template: __webpack_require__(/*! ./casual-join-date.component.html */ "./src/app/home/hr-menu/casual-join-date/casual-join-date.component.html"),
            styles: [__webpack_require__(/*! ./casual-join-date.component.scss */ "./src/app/home/hr-menu/casual-join-date/casual-join-date.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CasualJoinDateComponent);
    return CasualJoinDateComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/download-certificate/download-certificate.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/home/hr-menu/download-certificate/download-certificate.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n   Download Certificate\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Emp Code\r\n      </label>\r\n      <div class=\"col-sm-4\">\r\n        <select class=\"custom-select \">\r\n          <option>Select state</option>\r\n          <option>Type 1</option>\r\n          <option>Type 2</option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n    <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n      <button type=\"\" class=\"btn btn-success\" >\r\n        <span class=\"fas fa-eye\"> Show Name</span>\r\n      </button>\r\n      <button type=\"\" class=\"btn btn-info \">\r\n        <span class=\"fas fa-file-download\" > View Files</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/hr-menu/download-certificate/download-certificate.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/home/hr-menu/download-certificate/download-certificate.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9kb3dubG9hZC1jZXJ0aWZpY2F0ZS9kb3dubG9hZC1jZXJ0aWZpY2F0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/hr-menu/download-certificate/download-certificate.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home/hr-menu/download-certificate/download-certificate.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DownloadCertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCertificateComponent", function() { return DownloadCertificateComponent; });
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

var DownloadCertificateComponent = /** @class */ (function () {
    function DownloadCertificateComponent() {
    }
    DownloadCertificateComponent.prototype.ngOnInit = function () {
    };
    DownloadCertificateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-certificate',
            template: __webpack_require__(/*! ./download-certificate.component.html */ "./src/app/home/hr-menu/download-certificate/download-certificate.component.html"),
            styles: [__webpack_require__(/*! ./download-certificate.component.scss */ "./src/app/home/hr-menu/download-certificate/download-certificate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadCertificateComponent);
    return DownloadCertificateComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/download-img-signature/download-img-signature.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/hr-menu/download-img-signature/download-img-signature.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Download Image & Signature\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Emp Code\r\n      </label>\r\n      <div class=\"col-sm-4\">\r\n        <select class=\"custom-select \">\r\n          <option>Select state</option>\r\n          <option>Type 1</option>\r\n          <option>Type 2</option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n      <button type=\"\" class=\"btn btn-success\">\r\n        <span class=\"fas fa-eye\"> Show Name</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Type\r\n      </label>\r\n      <div class=\"col-sm-4\">\r\n        <select class=\"custom-select \">\r\n          <option>Select</option>\r\n          <option>Type 1</option>\r\n          <option>Type 2</option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-info \">\r\n          <span class=\"fas fa-file-download\"> View Files</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/download-img-signature/download-img-signature.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/hr-menu/download-img-signature/download-img-signature.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9kb3dubG9hZC1pbWctc2lnbmF0dXJlL2Rvd25sb2FkLWltZy1zaWduYXR1cmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/hr-menu/download-img-signature/download-img-signature.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/hr-menu/download-img-signature/download-img-signature.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DownloadImgSignatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadImgSignatureComponent", function() { return DownloadImgSignatureComponent; });
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

var DownloadImgSignatureComponent = /** @class */ (function () {
    function DownloadImgSignatureComponent() {
    }
    DownloadImgSignatureComponent.prototype.ngOnInit = function () {
    };
    DownloadImgSignatureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-img-signature',
            template: __webpack_require__(/*! ./download-img-signature.component.html */ "./src/app/home/hr-menu/download-img-signature/download-img-signature.component.html"),
            styles: [__webpack_require__(/*! ./download-img-signature.component.scss */ "./src/app/home/hr-menu/download-img-signature/download-img-signature.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadImgSignatureComponent);
    return DownloadImgSignatureComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/emp-block-info/emp-block-info.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-block-info/emp-block-info.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Block Information\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n            <i class=\"text-danger\">*</i>\r\n        </label>\r\n\r\n        <div class=\"input-group col-sm-6\">\r\n          <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n              <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right \">Joining Date\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-6\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"\" class=\"col-form-label col-sm-4 text-sm-right \">Do Block ?\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n      <div class=\"col-md-6\">\r\n        <select class=\"custom-select \">\r\n          <option>select</option>\r\n          <option>Yes</option>\r\n          <option>NO</option>\r\n\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right \">Block Date\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-6\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <br/>\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\" >\r\n            <span class=\"fas fa-save\"></span> Save\r\n          </button>\r\n          <button type=\"clear\" class=\"btn btn-info\">\r\n              <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"></span> Close\r\n          </button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-block-info/emp-block-info.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-block-info/emp-block-info.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  -webkit-box-shadow: 1px 1px 3px 0px;\n          box-shadow: 1px 1px 3px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oci1tZW51L2VtcC1ibG9jay1pbmZvL0M6XFxVc2Vyc1xcQW5kcm9pZFxcRGVza3RvcFxcR2l0YnVpbGRcXEhSTVMvc3JjXFxhcHBcXGhvbWVcXGhyLW1lbnVcXGVtcC1ibG9jay1pbmZvXFxlbXAtYmxvY2staW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9lbXAtYmxvY2staW5mby9lbXAtYmxvY2staW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9ue1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-block-info/emp-block-info.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-block-info/emp-block-info.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmpBlockInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpBlockInfoComponent", function() { return EmpBlockInfoComponent; });
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

var EmpBlockInfoComponent = /** @class */ (function () {
    function EmpBlockInfoComponent() {
    }
    EmpBlockInfoComponent.prototype.ngOnInit = function () {
    };
    EmpBlockInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-block-info',
            template: __webpack_require__(/*! ./emp-block-info.component.html */ "./src/app/home/hr-menu/emp-block-info/emp-block-info.component.html"),
            styles: [__webpack_require__(/*! ./emp-block-info.component.scss */ "./src/app/home/hr-menu/emp-block-info/emp-block-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpBlockInfoComponent);
    return EmpBlockInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/emp-certificate-upload/emp-certificate-upload.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-certificate-upload/emp-certificate-upload.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4  section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Certificate Upload\r\n  </h4>\r\n  <div class=\"container \">\r\n    <br />\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 center\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n                  <i class=\"text-danger\">*</i>\r\n              </label>\r\n      \r\n              <div class=\"input-group col-sm-8\">\r\n                <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                    <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n        \r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n        \r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Level Of Education\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"custom-select \">\r\n                  <option>Select</option>\r\n                  <option>Type 1</option>\r\n                  <option>Type 2</option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-form-label col-sm-4 text-sm-right\">\r\n                <label>Picture\r\n                </label>\r\n              </div>\r\n              <div class=\"col-form-label col-sm-4 text-sm-right\">\r\n                <img id=\"preview\" class=\"\" src=\"../../../../assets/img/default.png\" alt=\"image preview place\" name=\"Picture\"\r\n                  class=\"form-control\" style=\"height: 100px; width: 120px;\">\r\n              </div>\r\n              <div class=\"form group col-sm-4\">\r\n                <label class=\"form-label w-100\">File input</label>\r\n                <input type=\"file\">\r\n                <small class=\"form-text text-muted\"></small>\r\n                <button type=\"\" class=\"btn btn-danger\">\r\n                  <span class=\"fas fa-trash-alt\"> Remove</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n                <button type=\"\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-save\"> Save</span>\r\n                </button>\r\n                <button type=\"\" class=\"btn btn-info \">\r\n                  <span class=\"ion ion-ios-refresh\"> Reset</span>\r\n                </button>\r\n                <button type=\"\" class=\"btn btn-secondary \">\r\n                  <span class=\"fas fa-window-close\"> Close</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"container \">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Level Of Education</th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-certificate-upload/emp-certificate-upload.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-certificate-upload/emp-certificate-upload.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9lbXAtY2VydGlmaWNhdGUtdXBsb2FkL2VtcC1jZXJ0aWZpY2F0ZS11cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-certificate-upload/emp-certificate-upload.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-certificate-upload/emp-certificate-upload.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EmpCertificateUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpCertificateUploadComponent", function() { return EmpCertificateUploadComponent; });
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

var EmpCertificateUploadComponent = /** @class */ (function () {
    function EmpCertificateUploadComponent() {
    }
    EmpCertificateUploadComponent.prototype.ngOnInit = function () {
    };
    EmpCertificateUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-certificate-upload',
            template: __webpack_require__(/*! ./emp-certificate-upload.component.html */ "./src/app/home/hr-menu/emp-certificate-upload/emp-certificate-upload.component.html"),
            styles: [__webpack_require__(/*! ./emp-certificate-upload.component.scss */ "./src/app/home/hr-menu/emp-certificate-upload/emp-certificate-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpCertificateUploadComponent);
    return EmpCertificateUploadComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/emp-company-transfer/emp-company-transfer.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-company-transfer/emp-company-transfer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Company Transfer\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row \">\r\n      <div class=\"col-sm-6\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n                  <i class=\"text-danger\">*</i>\r\n              </label>\r\n      \r\n              <div class=\"input-group col-sm-8\">\r\n                <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                    <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Type\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select type</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-4\">\r\n        <h6>Before Transfer</h6>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <h6>After Transfer</h6>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <label class=\"col-form-label\">Company\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <label class=\"col-form-label\">Salary Location\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <label class=\"col-form-label\">Project Name\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <label class=\"col-form-label \">Department\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <label class=\"col-form-label\">Unit/Area\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <label class=\"col-form-label\">Work Station\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <label class=\"col-form-label\">Designation\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <label class=\" col-form-label\">Employee Type\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <label class=\"col-form-label \">Salary Grade\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-md-9\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<br/>\r\n  <div class=\"container\">\r\n    <div class=\"row \">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 \">Transfer Date\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 \">Job Responsibilities\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Job Responsibilities\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 \">Note\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Note\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 \">Report To\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Note\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4\">Bank\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select type</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 \">Branch\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select type</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n    <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\" >\r\n          <span class=\"fas fa-save\"></span> Save\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-secondary \">\r\n          <span class=\"fas fa-window-close\"></span> Close\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-company-transfer/emp-company-transfer.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-company-transfer/emp-company-transfer.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  -webkit-box-shadow: 1px 1px 3px 0px;\n          box-shadow: 1px 1px 3px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oci1tZW51L2VtcC1jb21wYW55LXRyYW5zZmVyL0M6XFxVc2Vyc1xcQW5kcm9pZFxcRGVza3RvcFxcR2l0YnVpbGRcXEhSTVMvc3JjXFxhcHBcXGhvbWVcXGhyLW1lbnVcXGVtcC1jb21wYW55LXRyYW5zZmVyXFxlbXAtY29tcGFueS10cmFuc2Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9lbXAtY29tcGFueS10cmFuc2Zlci9lbXAtY29tcGFueS10cmFuc2Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9ue1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-company-transfer/emp-company-transfer.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-company-transfer/emp-company-transfer.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EmpCompanyTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpCompanyTransferComponent", function() { return EmpCompanyTransferComponent; });
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

var EmpCompanyTransferComponent = /** @class */ (function () {
    function EmpCompanyTransferComponent() {
    }
    EmpCompanyTransferComponent.prototype.ngOnInit = function () {
    };
    EmpCompanyTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-company-transfer',
            template: __webpack_require__(/*! ./emp-company-transfer.component.html */ "./src/app/home/hr-menu/emp-company-transfer/emp-company-transfer.component.html"),
            styles: [__webpack_require__(/*! ./emp-company-transfer.component.scss */ "./src/app/home/hr-menu/emp-company-transfer/emp-company-transfer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpCompanyTransferComponent);
    return EmpCompanyTransferComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/emp-for-attendance/emp-for-attendance.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-for-attendance/emp-for-attendance.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Select For Attendance\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n            <i class=\"text-danger\">*</i>\r\n        </label>\r\n\r\n        <div class=\"input-group col-sm-6\">\r\n          <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n              <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\" >\r\n            <span class=\"fas fa-save\"></span> Save\r\n          </button>\r\n          <button type=\"clear\" class=\"btn btn-info\">\r\n              <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"></span> Close\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Code</th>\r\n                  <th>Name</th>\r\n                  <th>Department </th>\r\n                  <th>Designation</th>\r\n                  <th>Button</th>\r\n                  <th></th>\r\n                  <th></th>\r\n                  <th></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th>1</th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                </tr>\r\n                <tr>\r\n                  <th>2</th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                </tr>\r\n                <tr>\r\n                  <th>3</th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-for-attendance/emp-for-attendance.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-for-attendance/emp-for-attendance.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  -webkit-box-shadow: 1px 1px 3px 0px;\n          box-shadow: 1px 1px 3px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oci1tZW51L2VtcC1mb3ItYXR0ZW5kYW5jZS9DOlxcVXNlcnNcXEFuZHJvaWRcXERlc2t0b3BcXEdpdGJ1aWxkXFxIUk1TL3NyY1xcYXBwXFxob21lXFxoci1tZW51XFxlbXAtZm9yLWF0dGVuZGFuY2VcXGVtcC1mb3ItYXR0ZW5kYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9lbXAtZm9yLWF0dGVuZGFuY2UvZW1wLWZvci1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-for-attendance/emp-for-attendance.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-for-attendance/emp-for-attendance.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmpForAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpForAttendanceComponent", function() { return EmpForAttendanceComponent; });
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

var EmpForAttendanceComponent = /** @class */ (function () {
    function EmpForAttendanceComponent() {
    }
    EmpForAttendanceComponent.prototype.ngOnInit = function () {
    };
    EmpForAttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-for-attendance',
            template: __webpack_require__(/*! ./emp-for-attendance.component.html */ "./src/app/home/hr-menu/emp-for-attendance/emp-for-attendance.component.html"),
            styles: [__webpack_require__(/*! ./emp-for-attendance.component.scss */ "./src/app/home/hr-menu/emp-for-attendance/emp-for-attendance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpForAttendanceComponent);
    return EmpForAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/emp-for-resignation/emp-for-resignation.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-for-resignation/emp-for-resignation.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee  For Resignation\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>Id</th>\r\n          <th>Employee Name</th>\r\n          <th>Department </th>\r\n          <th>Designation</th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th>1</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <th>2</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <th>3</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <th>4</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <th>5</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <th>6</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"row\">\r\n        <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n            <button type=\"\" class=\"btn btn-secondary \">\r\n              <span class=\"fas fa-window-close\"></span> Close\r\n            </button>\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-for-resignation/emp-for-resignation.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-for-resignation/emp-for-resignation.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9lbXAtZm9yLXJlc2lnbmF0aW9uL2VtcC1mb3ItcmVzaWduYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-for-resignation/emp-for-resignation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-for-resignation/emp-for-resignation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmpForResignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpForResignationComponent", function() { return EmpForResignationComponent; });
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

var EmpForResignationComponent = /** @class */ (function () {
    function EmpForResignationComponent() {
    }
    EmpForResignationComponent.prototype.ngOnInit = function () {
    };
    EmpForResignationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-for-resignation',
            template: __webpack_require__(/*! ./emp-for-resignation.component.html */ "./src/app/home/hr-menu/emp-for-resignation/emp-for-resignation.component.html"),
            styles: [__webpack_require__(/*! ./emp-for-resignation.component.scss */ "./src/app/home/hr-menu/emp-for-resignation/emp-for-resignation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpForResignationComponent);
    return EmpForResignationComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/emp-gen-info/emp-gen-info.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-gen-info/emp-gen-info.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee General Information\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n\r\n            <div class=\"input-group col-sm-6\">\r\n              <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                  <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <button type=\"submit\" class=\"btn btn-success\">\r\n                <span class=\"fas fa-plus\"></span> new</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">State</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>California</option>\r\n                <option>Hawaii</option>\r\n                <option>Florida</option>\r\n                <option>Texas</option>\r\n                <option>Massachusetts</option>\r\n                <option>Alabama</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">First Name\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"First Name\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Last Name\r\n\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"Last Name\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Surname\r\n\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"Surname\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Suffix\r\n\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>California</option>\r\n                <option>Hawaii</option>\r\n                <option>Florida</option>\r\n                <option>Texas</option>\r\n                <option>Massachusetts</option>\r\n                <option>Alabama</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Gender\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Male</option>\r\n                <option>Female</option>\r\n                <option>Other</option>\r\n\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Birth Date\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n\r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Blood Group\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>A+</option>\r\n                <option>B+</option>\r\n                <option>Ab+</option>\r\n                <option>Ab+</option>\r\n                <option>Ab-</option>\r\n\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Hight In Inch\r\n\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"Hight In Inch\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Weight In Kg\r\n\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"Weight In Kg\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Religion\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Muslim</option>\r\n                <option>Hindu</option>\r\n                <option>Buddhist</option>\r\n                <option>Khristan</option>\r\n\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Nationality\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Bangladeshi</option>\r\n                <option>Indian</option>\r\n                <option>Pakhistani</option>\r\n\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">National Id\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"National Id\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Passport No\r\n\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"Passport No\">\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Issue Date\r\n            </label>\r\n\r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Expire Date\r\n\r\n            </label>\r\n\r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Tin no\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"Tin No\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-md-4 text-sm-right\">Picture\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-md-8\">\r\n              <div class=\"row\">\r\n                <input type=\"file\" class=\"form-input-file\">\r\n              </div>\r\n              <br />\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"\" class=\"btn btn-danger\">\r\n                    Remove\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <img id=\"preview\" class=\"\" src=\"../../../../assets/img/default.png\" alt=\"image preview place\"\r\n                    name=\"Picture\" class=\"form-control\" style=\"height: 100px; width:100px;\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-md-4 text-sm-right\">Picture\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-md-8\">\r\n              <div class=\"row\">\r\n                <input type=\"file\" class=\"form-input-file\">\r\n              </div>\r\n              <br />\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"\" class=\"btn btn-danger\">\r\n                    Remove\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <img id=\"preview\" class=\"\" src=\"../../../../assets/img/default.png\" alt=\"image preview place\"\r\n                    name=\"Picture\" class=\"form-control\" style=\"height: 100px; width:100px;\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Maritial Status\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Single </option>\r\n                <option>mrried</option>\r\n                <option></option>\r\n                <option></option>\r\n\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Age\r\n\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"Age\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Spouse Name\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"Spouse Name\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Father's Name\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"Father's Name\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Father's Occupation\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Mother's Name\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"Mother's Name\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Mother's Occupation\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>Select</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Remarks\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input id=\"\" type=\"text\" class=\"form-control\" placeholder=\"Remarks\">\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\" row\">\r\n\r\n        <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-save\"></span> Save\r\n          </button>\r\n          <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span> Reset\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"></span> Close\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-danger\">\r\n            <span class=\"fas fa-trash-alt\"></span> Delete\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <div class=\"row\">\r\n    <div class=\"demo-inline-spacing mt-3 center\">\r\n        <button type=\"\" class=\"btn btn-secondary\">Contact</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">Family</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">Reference</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">Education</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">Experience</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      \r\n    <div class=\"demo-inline-spacing mt-3 center\">\r\n        <button type=\"\" class=\"btn btn-secondary\">Professional</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">Award</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">Publication</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">Scholarship</button>\r\n        <button type=\"\" class=\"btn btn-secondary\">Training</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-gen-info/emp-gen-info.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-gen-info/emp-gen-info.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9lbXAtZ2VuLWluZm8vZW1wLWdlbi1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-gen-info/emp-gen-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-gen-info/emp-gen-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmpGenInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpGenInfoComponent", function() { return EmpGenInfoComponent; });
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

var EmpGenInfoComponent = /** @class */ (function () {
    function EmpGenInfoComponent() {
    }
    EmpGenInfoComponent.prototype.ngOnInit = function () {
    };
    EmpGenInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-gen-info',
            template: __webpack_require__(/*! ./emp-gen-info.component.html */ "./src/app/home/hr-menu/emp-gen-info/emp-gen-info.component.html"),
            styles: [__webpack_require__(/*! ./emp-gen-info.component.scss */ "./src/app/home/hr-menu/emp-gen-info/emp-gen-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpGenInfoComponent);
    return EmpGenInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/emp-objective-info/emp-objective-info.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-objective-info/emp-objective-info.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Objective Information\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n   <div class=\"row\">\r\n      <div class=\"col-md-7 center\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n                  <i class=\"text-danger\">*</i>\r\n              </label>\r\n      \r\n              <div class=\"input-group col-sm-8\">\r\n                <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                    <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n      \r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n      \r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Joining Date\r\n            </label>\r\n      \r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" disabled name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Year\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n      \r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Comment\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <textarea rows=\"5\" class=\"form-control\" placeholder=\"Comment\"></textarea>\r\n            </div>\r\n          </div>\r\n      </div>\r\n   </div>\r\n    <div class=\"row\"> \r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\" >\r\n            <span class=\"fas fa-save\"> Save</span>\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-info \">\r\n            <span class=\"ion ion-ios-refresh\"> Reset</span>\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"> Close</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\">\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th> Code</th>\r\n                <th>Separation type</th>\r\n                <th>Date </th>\r\n                <th>Delete</th>\r\n                <th></th>\r\n                <th></th>\r\n                <th></th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th>1</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n               \r\n              </tr>\r\n              <tr>\r\n                <th>2</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n               \r\n              </tr>\r\n              <tr>\r\n                <th>3</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>   \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n    </div>\r\n    </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-objective-info/emp-objective-info.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-objective-info/emp-objective-info.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9lbXAtb2JqZWN0aXZlLWluZm8vZW1wLW9iamVjdGl2ZS1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-objective-info/emp-objective-info.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-objective-info/emp-objective-info.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmpObjectiveInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpObjectiveInfoComponent", function() { return EmpObjectiveInfoComponent; });
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

var EmpObjectiveInfoComponent = /** @class */ (function () {
    function EmpObjectiveInfoComponent() {
    }
    EmpObjectiveInfoComponent.prototype.ngOnInit = function () {
    };
    EmpObjectiveInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-objective-info',
            template: __webpack_require__(/*! ./emp-objective-info.component.html */ "./src/app/home/hr-menu/emp-objective-info/emp-objective-info.component.html"),
            styles: [__webpack_require__(/*! ./emp-objective-info.component.scss */ "./src/app/home/hr-menu/emp-objective-info/emp-objective-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpObjectiveInfoComponent);
    return EmpObjectiveInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/emp-pro-info/emp-pro-info.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-pro-info/emp-pro-info.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Promotion Information\r\n  </h4>\r\n  <div class=\"container\">\r\n    <div class=\"row \">\r\n      <div class=\"col-sm-6\">\r\n        <br/>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n                  <i class=\"text-danger\">*</i>\r\n              </label>\r\n      \r\n              <div class=\"input-group col-sm-8\">\r\n                <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                    <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <br/>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<br/>\r\n  <div class=\"container \" style=\"border: 1px solid black\">\r\n    <br/>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-4\"></div>\r\n          <div class=\"col-md-4\">\r\n            <h6>Before Transfer</h6>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <h6>After Transfer</h6>\r\n          </div>\r\n        </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <label class=\"col-form-label\">Designation\r\n            </label>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n              <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n                <i class=\"text-danger\">*</i>\r\n              </label>\r\n              <div class=\"col-md-9\">\r\n                <select class=\"custom-select \">\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n              <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n                <i class=\"text-danger\">*</i>\r\n              </label>\r\n              <div class=\"col-md-9\">\r\n                <select class=\"custom-select \">\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                  <option></option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n       \r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label class=\"col-form-label\">Employee Type\r\n              </label>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"row\">\r\n                <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n                  <i class=\"text-danger\">*</i>\r\n                </label>\r\n                <div class=\"col-md-9\">\r\n                  <select class=\"custom-select \">\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"row\">\r\n                <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n                  <i class=\"text-danger\">*</i>\r\n                </label>\r\n                <div class=\"col-md-9\">\r\n                  <select class=\"custom-select \">\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                    <option></option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <label class=\"col-form-label\">Salary Grade\r\n                </label>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"row\">\r\n                  <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">From\r\n                    <i class=\"text-danger\">*</i>\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <select class=\"custom-select \">\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"row\">\r\n                  <label for=\"\" class=\"col-form-label col-md-3 text-sm-right\">To\r\n                    <i class=\"text-danger\">*</i>\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <select class=\"custom-select \">\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n            <br/>\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                  <div class=\"form-group row\">\r\n                      <label class=\"col-form-label col-sm-4 \">Transfer Date\r\n                          <i class=\"text-danger\">*</i>\r\n                      </label>\r\n            \r\n                      <div class=\"input-group col-sm-8\">\r\n                        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                        <div class=\"input-group-append\">\r\n                          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-form-label col-sm-4 \">Job Responsibilities\r\n                        </label>\r\n                        <div class=\"col-sm-8\">\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Job Responsibilities\">\r\n                        </div>\r\n                      </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                  <div class=\"form-group row\">\r\n                      <label class=\"col-form-label col-sm-4 \">Note\r\n                      </label>\r\n                      <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Note\">\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n             <div class=\"row\">\r\n                <div class=\"demo-inline-spacing mt-3 \"  style=\"margin:0 auto\">\r\n                    <button type=\"\" class=\"btn btn-success\" >\r\n                      <span class=\"fas fa-save\"></span> Save\r\n                    </button>\r\n                    <button type=\"\" class=\"btn btn-secondary \">\r\n                      <span class=\"fas fa-window-close\"></span> Close\r\n                    </button>\r\n                  </div>\r\n             </div>\r\n             <div class=\"row\">\r\n\r\n                <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>#</th>\r\n                        <th>From Designation</th>\r\n                        <th>To Designation</th>\r\n                        <th>From Grade </th>\r\n                        <th>To grade</th>\r\n                        <th>Date</th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <th>1</th>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>2</th>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>3</th>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n             </div>\r\n            </div>\r\n  \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-pro-info/emp-pro-info.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-pro-info/emp-pro-info.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  -webkit-box-shadow: 1px 1px 3px 0px;\n          box-shadow: 1px 1px 3px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oci1tZW51L2VtcC1wcm8taW5mby9DOlxcVXNlcnNcXEFuZHJvaWRcXERlc2t0b3BcXEdpdGJ1aWxkXFxIUk1TL3NyY1xcYXBwXFxob21lXFxoci1tZW51XFxlbXAtcHJvLWluZm9cXGVtcC1wcm8taW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9lbXAtcHJvLWluZm8vZW1wLXByby1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-pro-info/emp-pro-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-pro-info/emp-pro-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmpProInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpProInfoComponent", function() { return EmpProInfoComponent; });
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

var EmpProInfoComponent = /** @class */ (function () {
    function EmpProInfoComponent() {
    }
    EmpProInfoComponent.prototype.ngOnInit = function () {
    };
    EmpProInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-pro-info',
            template: __webpack_require__(/*! ./emp-pro-info.component.html */ "./src/app/home/hr-menu/emp-pro-info/emp-pro-info.component.html"),
            styles: [__webpack_require__(/*! ./emp-pro-info.component.scss */ "./src/app/home/hr-menu/emp-pro-info/emp-pro-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpProInfoComponent);
    return EmpProInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/emp-separation-info/emp-separation-info.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-separation-info/emp-separation-info.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Separation Information\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n            <i class=\"text-danger\">*</i>\r\n        </label>\r\n\r\n        <div class=\"input-group col-sm-6\">\r\n          <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n              <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right \">Joining Date\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-6\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Separation Type\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <select class=\"custom-select \">\r\n          <option>Select state</option>\r\n          <option>Type 1</option>\r\n          <option>Type 2</option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right \">Separation Date\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-6\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Service Duration\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Service Duration\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">joining Date\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" disabled class=\"form-control\" placeholder=\"Joining Date\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Joining Day\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" disabled class=\"form-control\" placeholder=\"joining Day\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Comment\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <textarea rows=\"5\" class=\"form-control\" placeholder=\"Comment\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\"> \r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\" >\r\n            <span class=\"fas fa-save\"> Save</span>\r\n          </button>\r\n          \r\n      <button type=\"clear\" class=\"btn btn-info\">\r\n          <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"> Close</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th> Code</th>\r\n                <th>Separation type</th>\r\n                <th>Date </th>\r\n                <th>Undo</th>\r\n                <th></th>\r\n                <th></th>\r\n                <th></th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th>1</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n               \r\n              </tr>\r\n              <tr>\r\n                <th>2</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n               \r\n              </tr>\r\n              <tr>\r\n                <th>3</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>   \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-separation-info/emp-separation-info.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-separation-info/emp-separation-info.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9lbXAtc2VwYXJhdGlvbi1pbmZvL2VtcC1zZXBhcmF0aW9uLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/hr-menu/emp-separation-info/emp-separation-info.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/hr-menu/emp-separation-info/emp-separation-info.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmpSeparationInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpSeparationInfoComponent", function() { return EmpSeparationInfoComponent; });
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

var EmpSeparationInfoComponent = /** @class */ (function () {
    function EmpSeparationInfoComponent() {
    }
    EmpSeparationInfoComponent.prototype.ngOnInit = function () {
    };
    EmpSeparationInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-separation-info',
            template: __webpack_require__(/*! ./emp-separation-info.component.html */ "./src/app/home/hr-menu/emp-separation-info/emp-separation-info.component.html"),
            styles: [__webpack_require__(/*! ./emp-separation-info.component.scss */ "./src/app/home/hr-menu/emp-separation-info/emp-separation-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpSeparationInfoComponent);
    return EmpSeparationInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/employent-info/employent-info.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/home/hr-menu/employent-info/employent-info.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employment Information\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <form>\r\n      <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n                  <i class=\"text-danger\">*</i>\r\n              </label>\r\n      \r\n              <div class=\"input-group col-sm-8\">\r\n                <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                    <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Unit/area</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>California</option>\r\n              <option>Hawaii</option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right \">Department\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>California</option>\r\n              <option>Hawaii</option>\r\n              <option>Florida</option>\r\n              <option>Texas</option>\r\n              <option>Massachusetts</option>\r\n              <option>Alabama</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right \">Designation\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>California</option>\r\n              <option>Hawaii</option>\r\n              <option>Florida</option>\r\n              <option>Texas</option>\r\n              <option>Massachusetts</option>\r\n              <option>Alabama</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Joining Date\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right \">Job Type\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>California</option>\r\n              <option>Hawaii</option>\r\n              <option>Florida</option>\r\n              <option>Texas</option>\r\n              <option>Massachusetts</option>\r\n              <option>Alabama</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right \">Employee Type\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Select state</option>\r\n              <option>California</option>\r\n              <option>Hawaii</option>\r\n              <option>Florida</option>\r\n              <option>Texas</option>\r\n              <option>Massachusetts</option>\r\n              <option>Alabama</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Job Description\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-sm-6\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Job Description\">\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n              <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-plus\"></span> Add</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right \">Over Time Entitle\r\n\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right \">Project Name\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right \">Salary Location\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right \">Work Station\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right \">Section\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Confirmation Date\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Confirmation Due Date\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Card No\r\n             \r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Card No\">\r\n            </div>\r\n           \r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Fields Of Experience\r\n               \r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Fields Of Experience\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Report To\r\n                    <i class=\"text-danger\">*</i>\r\n                </label>\r\n        \r\n                <div class=\"input-group col-sm-8\">\r\n                  <input class=\"form-control\" name=\"\" placeholder=\"Report To\" >\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                      <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n    <div >\r\n        <div class=\" row\">\r\n    \r\n            <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n              <button type=\"\" class=\"btn btn-success\" >\r\n                <span class=\"fas fa-save\"></span> Save\r\n              </button>\r\n              <button type=\"clear\" class=\"btn btn-info\">\r\n                  <span class=\"ion ion-ios-refresh\"></span> Reset\r\n                </button>\r\n              <button type=\"\" class=\"btn btn-secondary \">\r\n                <span class=\"fas fa-window-close\"></span> Close\r\n              </button>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    </form>\r\n\r\n  </div>\r\n  <div class=\"card-footer\">\r\n      <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Employee  Name</th>\r\n              <th>Department</th>\r\n              <th>Designation</th>\r\n              <th></th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th>1</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n              <th>2</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n              <th>3</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/employent-info/employent-info.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/hr-menu/employent-info/employent-info.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9lbXBsb3llbnQtaW5mby9lbXBsb3llbnQtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/hr-menu/employent-info/employent-info.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/hr-menu/employent-info/employent-info.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmployentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployentInfoComponent", function() { return EmployentInfoComponent; });
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

var EmployentInfoComponent = /** @class */ (function () {
    function EmployentInfoComponent() {
    }
    EmployentInfoComponent.prototype.ngOnInit = function () {
    };
    EmployentInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employent-info',
            template: __webpack_require__(/*! ./employent-info.component.html */ "./src/app/home/hr-menu/employent-info/employent-info.component.html"),
            styles: [__webpack_require__(/*! ./employent-info.component.scss */ "./src/app/home/hr-menu/employent-info/employent-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployentInfoComponent);
    return EmployentInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/holiday-info/holiday-info.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/hr-menu/holiday-info/holiday-info.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Holiday Information\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 center\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 \">Start Date\r\n              </label>\r\n        \r\n              <div class=\"input-group col-sm-8\">\r\n                <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 \">End Date\r\n              </label>\r\n        \r\n              <div class=\"input-group col-sm-8\">\r\n                <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"demo-inline-spacing mt-3 \" style=\"margin:0 auto\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n              </div>\r\n            </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/home/hr-menu/holiday-info/holiday-info.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/hr-menu/holiday-info/holiday-info.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  -webkit-box-shadow: 1px 1px 3px 0px;\n          box-shadow: 1px 1px 3px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oci1tZW51L2hvbGlkYXktaW5mby9DOlxcVXNlcnNcXEFuZHJvaWRcXERlc2t0b3BcXEdpdGJ1aWxkXFxIUk1TL3NyY1xcYXBwXFxob21lXFxoci1tZW51XFxob2xpZGF5LWluZm9cXGhvbGlkYXktaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9ob2xpZGF5LWluZm8vaG9saWRheS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/hr-menu/holiday-info/holiday-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/hr-menu/holiday-info/holiday-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: HolidayInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayInfoComponent", function() { return HolidayInfoComponent; });
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

var HolidayInfoComponent = /** @class */ (function () {
    function HolidayInfoComponent() {
    }
    HolidayInfoComponent.prototype.ngOnInit = function () {
    };
    HolidayInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-holiday-info',
            template: __webpack_require__(/*! ./holiday-info.component.html */ "./src/app/home/hr-menu/holiday-info/holiday-info.component.html"),
            styles: [__webpack_require__(/*! ./holiday-info.component.scss */ "./src/app/home/hr-menu/holiday-info/holiday-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HolidayInfoComponent);
    return HolidayInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/hr-menu-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/hr-menu/hr-menu-routing.module.ts ***!
  \********************************************************/
/*! exports provided: HrMenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrMenuRoutingModule", function() { return HrMenuRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emp_gen_info_emp_gen_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emp-gen-info/emp-gen-info.component */ "./src/app/home/hr-menu/emp-gen-info/emp-gen-info.component.ts");
/* harmony import */ var _employent_info_employent_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employent-info/employent-info.component */ "./src/app/home/hr-menu/employent-info/employent-info.component.ts");
/* harmony import */ var _additional_duties_additional_duties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./additional-duties/additional-duties.component */ "./src/app/home/hr-menu/additional-duties/additional-duties.component.ts");
/* harmony import */ var _emp_company_transfer_emp_company_transfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emp-company-transfer/emp-company-transfer.component */ "./src/app/home/hr-menu/emp-company-transfer/emp-company-transfer.component.ts");
/* harmony import */ var _emp_pro_info_emp_pro_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emp-pro-info/emp-pro-info.component */ "./src/app/home/hr-menu/emp-pro-info/emp-pro-info.component.ts");
/* harmony import */ var _holiday_info_holiday_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./holiday-info/holiday-info.component */ "./src/app/home/hr-menu/holiday-info/holiday-info.component.ts");
/* harmony import */ var _casual_join_date_casual_join_date_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./casual-join-date/casual-join-date.component */ "./src/app/home/hr-menu/casual-join-date/casual-join-date.component.ts");
/* harmony import */ var _emp_block_info_emp_block_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emp-block-info/emp-block-info.component */ "./src/app/home/hr-menu/emp-block-info/emp-block-info.component.ts");
/* harmony import */ var _emp_for_attendance_emp_for_attendance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./emp-for-attendance/emp-for-attendance.component */ "./src/app/home/hr-menu/emp-for-attendance/emp-for-attendance.component.ts");
/* harmony import */ var _resignation_letter_resignation_letter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resignation-letter/resignation-letter.component */ "./src/app/home/hr-menu/resignation-letter/resignation-letter.component.ts");
/* harmony import */ var _resignation_letter_approve_resignation_letter_approve_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resignation-letter-approve/resignation-letter-approve.component */ "./src/app/home/hr-menu/resignation-letter-approve/resignation-letter-approve.component.ts");
/* harmony import */ var _emp_for_resignation_emp_for_resignation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./emp-for-resignation/emp-for-resignation.component */ "./src/app/home/hr-menu/emp-for-resignation/emp-for-resignation.component.ts");
/* harmony import */ var _notice_by_company_notice_by_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notice-by-company/notice-by-company.component */ "./src/app/home/hr-menu/notice-by-company/notice-by-company.component.ts");
/* harmony import */ var _emp_separation_info_emp_separation_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./emp-separation-info/emp-separation-info.component */ "./src/app/home/hr-menu/emp-separation-info/emp-separation-info.component.ts");
/* harmony import */ var _emp_objective_info_emp_objective_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./emp-objective-info/emp-objective-info.component */ "./src/app/home/hr-menu/emp-objective-info/emp-objective-info.component.ts");
/* harmony import */ var _production_position_info_production_position_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./production-position-info/production-position-info.component */ "./src/app/home/hr-menu/production-position-info/production-position-info.component.ts");
/* harmony import */ var _download_certificate_download_certificate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./download-certificate/download-certificate.component */ "./src/app/home/hr-menu/download-certificate/download-certificate.component.ts");
/* harmony import */ var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./upload-file/upload-file.component */ "./src/app/home/hr-menu/upload-file/upload-file.component.ts");
/* harmony import */ var _download_img_signature_download_img_signature_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./download-img-signature/download-img-signature.component */ "./src/app/home/hr-menu/download-img-signature/download-img-signature.component.ts");
/* harmony import */ var _basic_hr_report_basic_hr_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./basic-hr-report/basic-hr-report.component */ "./src/app/home/hr-menu/basic-hr-report/basic-hr-report.component.ts");
/* harmony import */ var _upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./upload-files/upload-files.component */ "./src/app/home/hr-menu/upload-files/upload-files.component.ts");
/* harmony import */ var _personal_file_personal_file_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./personal-file/personal-file.component */ "./src/app/home/hr-menu/personal-file/personal-file.component.ts");
/* harmony import */ var _emp_certificate_upload_emp_certificate_upload_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./emp-certificate-upload/emp-certificate-upload.component */ "./src/app/home/hr-menu/emp-certificate-upload/emp-certificate-upload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var HrMenuRoutingModule = /** @class */ (function () {
    function HrMenuRoutingModule() {
    }
    HrMenuRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'emp-gen-info', component: _emp_gen_info_emp_gen_info_component__WEBPACK_IMPORTED_MODULE_2__["EmpGenInfoComponent"] },
                    { path: 'employent-info', component: _employent_info_employent_info_component__WEBPACK_IMPORTED_MODULE_3__["EmployentInfoComponent"] },
                    { path: 'additional-duties', component: _additional_duties_additional_duties_component__WEBPACK_IMPORTED_MODULE_4__["AdditionalDutiesComponent"] },
                    { path: 'emp-company-transfer', component: _emp_company_transfer_emp_company_transfer_component__WEBPACK_IMPORTED_MODULE_5__["EmpCompanyTransferComponent"] },
                    { path: 'emp-pro-info', component: _emp_pro_info_emp_pro_info_component__WEBPACK_IMPORTED_MODULE_6__["EmpProInfoComponent"] },
                    { path: 'holiday-info', component: _holiday_info_holiday_info_component__WEBPACK_IMPORTED_MODULE_7__["HolidayInfoComponent"] },
                    { path: 'casual-join-date', component: _casual_join_date_casual_join_date_component__WEBPACK_IMPORTED_MODULE_8__["CasualJoinDateComponent"] },
                    { path: 'emp-block-info', component: _emp_block_info_emp_block_info_component__WEBPACK_IMPORTED_MODULE_9__["EmpBlockInfoComponent"] },
                    { path: 'emp-for-attendance', component: _emp_for_attendance_emp_for_attendance_component__WEBPACK_IMPORTED_MODULE_10__["EmpForAttendanceComponent"] },
                    { path: 'resignation-letter', component: _resignation_letter_resignation_letter_component__WEBPACK_IMPORTED_MODULE_11__["ResignationLetterComponent"] },
                    { path: 'resignation-letter-approve', component: _resignation_letter_approve_resignation_letter_approve_component__WEBPACK_IMPORTED_MODULE_12__["ResignationLetterApproveComponent"] },
                    { path: 'emp-for-resignation', component: _emp_for_resignation_emp_for_resignation_component__WEBPACK_IMPORTED_MODULE_13__["EmpForResignationComponent"] },
                    { path: 'notice-by-company', component: _notice_by_company_notice_by_company_component__WEBPACK_IMPORTED_MODULE_14__["NoticeByCompanyComponent"] },
                    { path: 'emp-separation-info', component: _emp_separation_info_emp_separation_info_component__WEBPACK_IMPORTED_MODULE_15__["EmpSeparationInfoComponent"] },
                    { path: 'emp-objective-info', component: _emp_objective_info_emp_objective_info_component__WEBPACK_IMPORTED_MODULE_16__["EmpObjectiveInfoComponent"] },
                    { path: 'production-position-info', component: _production_position_info_production_position_info_component__WEBPACK_IMPORTED_MODULE_17__["ProductionPositionInfoComponent"] },
                    { path: 'download-certificate', component: _download_certificate_download_certificate_component__WEBPACK_IMPORTED_MODULE_18__["DownloadCertificateComponent"] },
                    { path: 'upload-file', component: _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_19__["UploadFileComponent"] },
                    { path: 'download-img-signature', component: _download_img_signature_download_img_signature_component__WEBPACK_IMPORTED_MODULE_20__["DownloadImgSignatureComponent"] },
                    { path: 'basic-hr-report', component: _basic_hr_report_basic_hr_report_component__WEBPACK_IMPORTED_MODULE_21__["BasicHrReportComponent"] },
                    { path: 'upload-files', component: _upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_22__["UploadFilesComponent"] },
                    { path: 'personal-file', component: _personal_file_personal_file_component__WEBPACK_IMPORTED_MODULE_23__["PersonalFileComponent"] },
                    { path: 'emp-certificate-upload', component: _emp_certificate_upload_emp_certificate_upload_component__WEBPACK_IMPORTED_MODULE_24__["EmpCertificateUploadComponent"] }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HrMenuRoutingModule);
    return HrMenuRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/hr-menu.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/hr-menu/hr-menu.module.ts ***!
  \************************************************/
/*! exports provided: HrMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrMenuModule", function() { return HrMenuModule; });
/* harmony import */ var _hr_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hr-menu-routing.module */ "./src/app/home/hr-menu/hr-menu-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _emp_gen_info_emp_gen_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emp-gen-info/emp-gen-info.component */ "./src/app/home/hr-menu/emp-gen-info/emp-gen-info.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _employent_info_employent_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employent-info/employent-info.component */ "./src/app/home/hr-menu/employent-info/employent-info.component.ts");
/* harmony import */ var _additional_duties_additional_duties_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./additional-duties/additional-duties.component */ "./src/app/home/hr-menu/additional-duties/additional-duties.component.ts");
/* harmony import */ var _emp_company_transfer_emp_company_transfer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emp-company-transfer/emp-company-transfer.component */ "./src/app/home/hr-menu/emp-company-transfer/emp-company-transfer.component.ts");
/* harmony import */ var _emp_pro_info_emp_pro_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./emp-pro-info/emp-pro-info.component */ "./src/app/home/hr-menu/emp-pro-info/emp-pro-info.component.ts");
/* harmony import */ var _holiday_info_holiday_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./holiday-info/holiday-info.component */ "./src/app/home/hr-menu/holiday-info/holiday-info.component.ts");
/* harmony import */ var _casual_join_date_casual_join_date_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./casual-join-date/casual-join-date.component */ "./src/app/home/hr-menu/casual-join-date/casual-join-date.component.ts");
/* harmony import */ var _emp_block_info_emp_block_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./emp-block-info/emp-block-info.component */ "./src/app/home/hr-menu/emp-block-info/emp-block-info.component.ts");
/* harmony import */ var _emp_for_attendance_emp_for_attendance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./emp-for-attendance/emp-for-attendance.component */ "./src/app/home/hr-menu/emp-for-attendance/emp-for-attendance.component.ts");
/* harmony import */ var _resignation_letter_resignation_letter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resignation-letter/resignation-letter.component */ "./src/app/home/hr-menu/resignation-letter/resignation-letter.component.ts");
/* harmony import */ var _resignation_letter_approve_resignation_letter_approve_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resignation-letter-approve/resignation-letter-approve.component */ "./src/app/home/hr-menu/resignation-letter-approve/resignation-letter-approve.component.ts");
/* harmony import */ var _emp_for_resignation_emp_for_resignation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./emp-for-resignation/emp-for-resignation.component */ "./src/app/home/hr-menu/emp-for-resignation/emp-for-resignation.component.ts");
/* harmony import */ var _notice_by_company_notice_by_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notice-by-company/notice-by-company.component */ "./src/app/home/hr-menu/notice-by-company/notice-by-company.component.ts");
/* harmony import */ var _emp_separation_info_emp_separation_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./emp-separation-info/emp-separation-info.component */ "./src/app/home/hr-menu/emp-separation-info/emp-separation-info.component.ts");
/* harmony import */ var _emp_objective_info_emp_objective_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./emp-objective-info/emp-objective-info.component */ "./src/app/home/hr-menu/emp-objective-info/emp-objective-info.component.ts");
/* harmony import */ var _production_position_info_production_position_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./production-position-info/production-position-info.component */ "./src/app/home/hr-menu/production-position-info/production-position-info.component.ts");
/* harmony import */ var _download_certificate_download_certificate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./download-certificate/download-certificate.component */ "./src/app/home/hr-menu/download-certificate/download-certificate.component.ts");
/* harmony import */ var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./upload-file/upload-file.component */ "./src/app/home/hr-menu/upload-file/upload-file.component.ts");
/* harmony import */ var _download_img_signature_download_img_signature_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./download-img-signature/download-img-signature.component */ "./src/app/home/hr-menu/download-img-signature/download-img-signature.component.ts");
/* harmony import */ var _basic_hr_report_basic_hr_report_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./basic-hr-report/basic-hr-report.component */ "./src/app/home/hr-menu/basic-hr-report/basic-hr-report.component.ts");
/* harmony import */ var _upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./upload-files/upload-files.component */ "./src/app/home/hr-menu/upload-files/upload-files.component.ts");
/* harmony import */ var _personal_file_personal_file_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./personal-file/personal-file.component */ "./src/app/home/hr-menu/personal-file/personal-file.component.ts");
/* harmony import */ var _emp_certificate_upload_emp_certificate_upload_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./emp-certificate-upload/emp-certificate-upload.component */ "./src/app/home/hr-menu/emp-certificate-upload/emp-certificate-upload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var HrMenuModule = /** @class */ (function () {
    function HrMenuModule() {
    }
    HrMenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _hr_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__["HrMenuRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"]
            ],
            declarations: [
                _emp_gen_info_emp_gen_info_component__WEBPACK_IMPORTED_MODULE_3__["EmpGenInfoComponent"],
                _employent_info_employent_info_component__WEBPACK_IMPORTED_MODULE_7__["EmployentInfoComponent"],
                _additional_duties_additional_duties_component__WEBPACK_IMPORTED_MODULE_8__["AdditionalDutiesComponent"],
                _emp_company_transfer_emp_company_transfer_component__WEBPACK_IMPORTED_MODULE_9__["EmpCompanyTransferComponent"],
                _emp_pro_info_emp_pro_info_component__WEBPACK_IMPORTED_MODULE_10__["EmpProInfoComponent"],
                _holiday_info_holiday_info_component__WEBPACK_IMPORTED_MODULE_11__["HolidayInfoComponent"],
                _casual_join_date_casual_join_date_component__WEBPACK_IMPORTED_MODULE_12__["CasualJoinDateComponent"],
                _emp_block_info_emp_block_info_component__WEBPACK_IMPORTED_MODULE_13__["EmpBlockInfoComponent"],
                _emp_for_attendance_emp_for_attendance_component__WEBPACK_IMPORTED_MODULE_14__["EmpForAttendanceComponent"],
                _resignation_letter_resignation_letter_component__WEBPACK_IMPORTED_MODULE_15__["ResignationLetterComponent"],
                _resignation_letter_approve_resignation_letter_approve_component__WEBPACK_IMPORTED_MODULE_16__["ResignationLetterApproveComponent"],
                _emp_for_resignation_emp_for_resignation_component__WEBPACK_IMPORTED_MODULE_17__["EmpForResignationComponent"],
                _notice_by_company_notice_by_company_component__WEBPACK_IMPORTED_MODULE_18__["NoticeByCompanyComponent"],
                _emp_separation_info_emp_separation_info_component__WEBPACK_IMPORTED_MODULE_19__["EmpSeparationInfoComponent"],
                _emp_objective_info_emp_objective_info_component__WEBPACK_IMPORTED_MODULE_20__["EmpObjectiveInfoComponent"],
                _production_position_info_production_position_info_component__WEBPACK_IMPORTED_MODULE_21__["ProductionPositionInfoComponent"],
                _download_certificate_download_certificate_component__WEBPACK_IMPORTED_MODULE_22__["DownloadCertificateComponent"],
                _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_23__["UploadFileComponent"],
                _download_img_signature_download_img_signature_component__WEBPACK_IMPORTED_MODULE_24__["DownloadImgSignatureComponent"],
                _basic_hr_report_basic_hr_report_component__WEBPACK_IMPORTED_MODULE_25__["BasicHrReportComponent"],
                _upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_26__["UploadFilesComponent"],
                _personal_file_personal_file_component__WEBPACK_IMPORTED_MODULE_27__["PersonalFileComponent"],
                _emp_certificate_upload_emp_certificate_upload_component__WEBPACK_IMPORTED_MODULE_28__["EmpCertificateUploadComponent"]
            ],
        })
    ], HrMenuModule);
    return HrMenuModule;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/notice-by-company/notice-by-company.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/hr-menu/notice-by-company/notice-by-company.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Notice By Company\r\n  </h4>\r\n  <div class=\"container \">\r\n    <br />\r\n\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n            <i class=\"text-danger\">*</i>\r\n        </label>\r\n\r\n        <div class=\"input-group col-sm-6\">\r\n          <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n              <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right \">Effective Date\r\n        <i class=\"text-danger\">*</i>\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-6\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Reason\r\n          <i class=\"text-danger\">*</i>\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Reason\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Letter\r\n          <i class=\"text-danger\">*</i>\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <textarea rows=\"5\" class=\"form-control\" placeholder=\"Letter\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-save\"> Save</span>\r\n          </button>\r\n\r\n          <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"> Close</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Employee Code</th>\r\n            <th>Letter</th>\r\n            <th> </th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/hr-menu/notice-by-company/notice-by-company.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/hr-menu/notice-by-company/notice-by-company.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9ub3RpY2UtYnktY29tcGFueS9ub3RpY2UtYnktY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/hr-menu/notice-by-company/notice-by-company.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/hr-menu/notice-by-company/notice-by-company.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NoticeByCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeByCompanyComponent", function() { return NoticeByCompanyComponent; });
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

var NoticeByCompanyComponent = /** @class */ (function () {
    function NoticeByCompanyComponent() {
    }
    NoticeByCompanyComponent.prototype.ngOnInit = function () {
    };
    NoticeByCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice-by-company',
            template: __webpack_require__(/*! ./notice-by-company.component.html */ "./src/app/home/hr-menu/notice-by-company/notice-by-company.component.html"),
            styles: [__webpack_require__(/*! ./notice-by-company.component.scss */ "./src/app/home/hr-menu/notice-by-company/notice-by-company.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoticeByCompanyComponent);
    return NoticeByCompanyComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/personal-file/personal-file.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/home/hr-menu/personal-file/personal-file.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Personal File\r\n  </h4>\r\n  <div class=\"container\">\r\n    <div class=\"col-md-7 center\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n    <div class=\"col-md-4\">\r\n\r\n    </div>\r\n    <div class=\"col-sm-5\">\r\n      <select class=\"custom-select \">\r\n        <option>Select state</option>\r\n        <option>Type 1</option>\r\n        <option>Type 2</option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n        <option></option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-4\">\r\n\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n    </div>\r\n  </div>\r\n    <div class=\"row\">\r\n        <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n            <button type=\"button\" class=\" btn btn-success \">\r\n                <span class=\"fas fa-file-download\">Load Book</span>\r\n              </button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/personal-file/personal-file.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/hr-menu/personal-file/personal-file.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9wZXJzb25hbC1maWxlL3BlcnNvbmFsLWZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/hr-menu/personal-file/personal-file.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/hr-menu/personal-file/personal-file.component.ts ***!
  \***********************************************************************/
/*! exports provided: PersonalFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalFileComponent", function() { return PersonalFileComponent; });
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

var PersonalFileComponent = /** @class */ (function () {
    function PersonalFileComponent() {
    }
    PersonalFileComponent.prototype.ngOnInit = function () {
    };
    PersonalFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-file',
            template: __webpack_require__(/*! ./personal-file.component.html */ "./src/app/home/hr-menu/personal-file/personal-file.component.html"),
            styles: [__webpack_require__(/*! ./personal-file.component.scss */ "./src/app/home/hr-menu/personal-file/personal-file.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalFileComponent);
    return PersonalFileComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/production-position-info/production-position-info.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/home/hr-menu/production-position-info/production-position-info.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n   Production Position Information\r\n  </h4>\r\n  <div class=\"container row\">\r\n    <br />\r\n   <div class=\"col-md-7 center\">\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n              <i class=\"text-danger\">*</i>\r\n          </label>\r\n  \r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n  \r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n  \r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Unit\r\n          <i class=\"text-danger\">*</i>\r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"custom-select \">\r\n            <option>Select state</option>\r\n            <option>Type 1</option>\r\n            <option>Type 2</option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Floor\r\n          <i class=\"text-danger\">*</i>\r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"custom-select \">\r\n            <option>Select state</option>\r\n            <option>Type 1</option>\r\n            <option>Type 2</option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Line\r\n          <i class=\"text-danger\">*</i>\r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"custom-select \">\r\n            <option>Select state</option>\r\n            <option>Type 1</option>\r\n            <option>Type 2</option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Machine\r\n          <i class=\"text-danger\">*</i>\r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"custom-select \">\r\n            <option>Select state</option>\r\n            <option>Type 1</option>\r\n            <option>Type 2</option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right \"> Date\r\n          <i class=\"text-danger\">*</i>\r\n        </label>\r\n  \r\n        <div class=\"input-group col-sm-8\">\r\n          <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n              <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Remarks\r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <textarea rows=\"5\" class=\"form-control\" placeholder=\"Remarks\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\"> \r\n        <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n            <button type=\"\" class=\"btn btn-success\" >\r\n              <span class=\"fas fa-save\"> Save</span>\r\n            </button>\r\n            \r\n            <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n            <button type=\"\" class=\"btn btn-secondary \">\r\n              <span class=\"fas fa-window-close\"> Close</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n   </div>\r\n      <div class=\"container\">\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th> Unite</th>\r\n                <th>Line</th>\r\n                <th>Date </th>\r\n                <th></th>\r\n                <th></th>\r\n                <th></th>\r\n                <th></th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th>1</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n               \r\n              </tr>\r\n              <tr>\r\n                <th>2</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n               \r\n              </tr>\r\n              <tr>\r\n                <th>3</th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>   \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n    </div>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/home/hr-menu/production-position-info/production-position-info.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/home/hr-menu/production-position-info/production-position-info.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9wcm9kdWN0aW9uLXBvc2l0aW9uLWluZm8vcHJvZHVjdGlvbi1wb3NpdGlvbi1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/hr-menu/production-position-info/production-position-info.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/hr-menu/production-position-info/production-position-info.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductionPositionInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionPositionInfoComponent", function() { return ProductionPositionInfoComponent; });
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

var ProductionPositionInfoComponent = /** @class */ (function () {
    function ProductionPositionInfoComponent() {
    }
    ProductionPositionInfoComponent.prototype.ngOnInit = function () {
    };
    ProductionPositionInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-production-position-info',
            template: __webpack_require__(/*! ./production-position-info.component.html */ "./src/app/home/hr-menu/production-position-info/production-position-info.component.html"),
            styles: [__webpack_require__(/*! ./production-position-info.component.scss */ "./src/app/home/hr-menu/production-position-info/production-position-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductionPositionInfoComponent);
    return ProductionPositionInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/resignation-letter-approve/resignation-letter-approve.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/home/hr-menu/resignation-letter-approve/resignation-letter-approve.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Resignation Letter For Approve\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n            <i class=\"text-danger\">*</i>\r\n        </label>\r\n\r\n        <div class=\"input-group col-sm-6\">\r\n          <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n              <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" disabled class=\"form-control\" placeholder=\"Employee Name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" disabled class=\"form-control\" placeholder=\"Designation\">\r\n        </div>\r\n      </div>\r\n      <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Id</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Department </th>\r\n                  <th>Designation</th>\r\n                  <th>Reason</th>\r\n                  <th>Remarks</th>\r\n                  <th>Recommend</th>\r\n                  <th>Approve</th>\r\n                  <th>cancel</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th>1</th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  \r\n                </tr>\r\n                <tr>\r\n                  <th>2</th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  \r\n                </tr>\r\n                <tr>\r\n                  <th>3</th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  \r\n                </tr>\r\n                <tr>\r\n                    <th>4</th>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    \r\n                  </tr>\r\n                  <tr>\r\n                      <th>5</th>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      \r\n                    </tr>\r\n                    <tr>\r\n                        <th>6</th>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        \r\n                      </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"row\">\r\n            <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                <button type=\"\" class=\"btn btn-secondary \">\r\n                  <span class=\"fas fa-window-close\"> Close</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/resignation-letter-approve/resignation-letter-approve.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/home/hr-menu/resignation-letter-approve/resignation-letter-approve.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9yZXNpZ25hdGlvbi1sZXR0ZXItYXBwcm92ZS9yZXNpZ25hdGlvbi1sZXR0ZXItYXBwcm92ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/hr-menu/resignation-letter-approve/resignation-letter-approve.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/home/hr-menu/resignation-letter-approve/resignation-letter-approve.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ResignationLetterApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResignationLetterApproveComponent", function() { return ResignationLetterApproveComponent; });
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

var ResignationLetterApproveComponent = /** @class */ (function () {
    function ResignationLetterApproveComponent() {
    }
    ResignationLetterApproveComponent.prototype.ngOnInit = function () {
    };
    ResignationLetterApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resignation-letter-approve',
            template: __webpack_require__(/*! ./resignation-letter-approve.component.html */ "./src/app/home/hr-menu/resignation-letter-approve/resignation-letter-approve.component.html"),
            styles: [__webpack_require__(/*! ./resignation-letter-approve.component.scss */ "./src/app/home/hr-menu/resignation-letter-approve/resignation-letter-approve.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResignationLetterApproveComponent);
    return ResignationLetterApproveComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/resignation-letter/resignation-letter.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/home/hr-menu/resignation-letter/resignation-letter.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Resignation Letter\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    \r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n                <i class=\"text-danger\">*</i>\r\n            </label>\r\n    \r\n            <div class=\"input-group col-sm-6\">\r\n              <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                  <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right \">Effective Date\r\n          <i class=\"text-danger\">*</i>\r\n        </label>\r\n\r\n        <div class=\"input-group col-sm-6\">\r\n          <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n              <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n   \r\n  \r\n    <div class=\"form-group\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Reason\r\n          <i class=\"text-danger\">*</i>\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Reason\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Letter\r\n          <i class=\"text-danger\">*</i>\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <textarea rows=\"5\" class=\"form-control\" placeholder=\"Letter\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"container\">\r\n    \r\n      <label class=\"col-form-label col-sm-5 text-sm-right\">Apply to\r\n      </label>\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n              <i class=\"text-danger\">*</i>\r\n          </label>\r\n  \r\n          <div class=\"input-group col-sm-6\">\r\n            <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\" >\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-md-4 text-sm-right \">Employee Name\r\n        </label>\r\n        <div class=\"col-md-6\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-md-4 text-sm-right\">Designation\r\n        </label>\r\n        <div class=\"col-md-6\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n        </div>\r\n      </div>\r\n    \r\n  \r\n    <div class=\"row\"> \r\n        <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n            <button type=\"\" class=\"btn btn-success\" >\r\n              <span class=\"fas fa-save\"> Save</span>\r\n            </button>\r\n            <button type=\"clear\" class=\"btn btn-info\">\r\n                <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n            <button type=\"\" class=\"btn btn-secondary \">\r\n              <span class=\"fas fa-window-close\"> Close</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n  </div>\r\n  <div class=\"container\">\r\n      <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Employee Code</th>\r\n              <th>Letter</th>\r\n              <th> </th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th>1</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n             \r\n            </tr>\r\n            <tr>\r\n              <th>2</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n             \r\n            </tr>\r\n            <tr>\r\n              <th>3</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>   \r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/home/hr-menu/resignation-letter/resignation-letter.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/home/hr-menu/resignation-letter/resignation-letter.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  -webkit-box-shadow: 1px 1px 3px 0px;\n          box-shadow: 1px 1px 3px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oci1tZW51L3Jlc2lnbmF0aW9uLWxldHRlci9DOlxcVXNlcnNcXEFuZHJvaWRcXERlc2t0b3BcXEdpdGJ1aWxkXFxIUk1TL3NyY1xcYXBwXFxob21lXFxoci1tZW51XFxyZXNpZ25hdGlvbi1sZXR0ZXJcXHJlc2lnbmF0aW9uLWxldHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS9yZXNpZ25hdGlvbi1sZXR0ZXIvcmVzaWduYXRpb24tbGV0dGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/hr-menu/resignation-letter/resignation-letter.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/hr-menu/resignation-letter/resignation-letter.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ResignationLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResignationLetterComponent", function() { return ResignationLetterComponent; });
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

var ResignationLetterComponent = /** @class */ (function () {
    function ResignationLetterComponent() {
    }
    ResignationLetterComponent.prototype.ngOnInit = function () {
    };
    ResignationLetterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resignation-letter',
            template: __webpack_require__(/*! ./resignation-letter.component.html */ "./src/app/home/hr-menu/resignation-letter/resignation-letter.component.html"),
            styles: [__webpack_require__(/*! ./resignation-letter.component.scss */ "./src/app/home/hr-menu/resignation-letter/resignation-letter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResignationLetterComponent);
    return ResignationLetterComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/upload-file/upload-file.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/hr-menu/upload-file/upload-file.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n   Upload Word,Excle,PDF,Jpg,PNG Files\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Emp Code\r\n      </label>\r\n      <div class=\"col-sm-4\">\r\n        <select class=\"custom-select \">\r\n          <option>Select state</option>\r\n          <option>Type 1</option>\r\n          <option>Type 2</option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n      <button type=\"\" class=\"btn btn-success\" >\r\n        <span class=\"fas fa-eye\" > Show Name</span>\r\n      </button>\r\n    </div>\r\n   \r\n      <div class=\"form group \">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">File\r\n            </label>\r\n        <label class=\"\"></label>\r\n        <input type=\"file\">\r\n        <small class=\"form-text text-muted\"></small>\r\n      </div>\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\" >\r\n          <span class=\"fas fa-upload\" > Upload</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-info \">\r\n          <span class=\"fas fa-file\" > View Files</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/hr-menu/upload-file/upload-file.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/hr-menu/upload-file/upload-file.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/hr-menu/upload-file/upload-file.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/hr-menu/upload-file/upload-file.component.ts ***!
  \*******************************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
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

var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent() {
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-file',
            template: __webpack_require__(/*! ./upload-file.component.html */ "./src/app/home/hr-menu/upload-file/upload-file.component.html"),
            styles: [__webpack_require__(/*! ./upload-file.component.scss */ "./src/app/home/hr-menu/upload-file/upload-file.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "./src/app/home/hr-menu/upload-files/upload-files.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/hr-menu/upload-files/upload-files.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n        <h4 class=\"card-header text-center bg-light\">\r\n         Upload File JPG\r\n        </h4>\r\n        <div class=\"container\">\r\n          <br />\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Emp Code\r\n            </label>\r\n            <div class=\"col-sm-4\">\r\n              <select class=\"custom-select \">\r\n                <option>Select state</option>\r\n                <option>Type 1</option>\r\n                <option>Type 2</option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n            <button type=\"\" class=\"btn btn-success\" >\r\n              <span  class=\"fas fa-eye\"> Show Name</span>\r\n            </button>\r\n          </div>\r\n         \r\n            <div class=\"form group \">\r\n                <label class=\"col-form-label col-sm-4 text-sm-right\">Emp Code\r\n                  </label>\r\n              <label class=\"\"></label>\r\n              <input type=\"file\">\r\n              <small class=\"form-text text-muted\"></small>\r\n            </div>\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n              <button type=\"\" class=\"btn btn-success\" >\r\n                <span class=\"fas fa-file-upload\" >Upload</span>\r\n              </button>\r\n              <button type=\"\" class=\"btn btn-info \">\r\n                <span  class=\"fas fa-file-download\" >View Files</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      "

/***/ }),

/***/ "./src/app/home/hr-menu/upload-files/upload-files.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/hr-menu/upload-files/upload-files.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaHItbWVudS91cGxvYWQtZmlsZXMvdXBsb2FkLWZpbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/hr-menu/upload-files/upload-files.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/hr-menu/upload-files/upload-files.component.ts ***!
  \*********************************************************************/
/*! exports provided: UploadFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFilesComponent", function() { return UploadFilesComponent; });
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

var UploadFilesComponent = /** @class */ (function () {
    function UploadFilesComponent() {
    }
    UploadFilesComponent.prototype.ngOnInit = function () {
    };
    UploadFilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-files',
            template: __webpack_require__(/*! ./upload-files.component.html */ "./src/app/home/hr-menu/upload-files/upload-files.component.html"),
            styles: [__webpack_require__(/*! ./upload-files.component.scss */ "./src/app/home/hr-menu/upload-files/upload-files.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadFilesComponent);
    return UploadFilesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-hr-menu-hr-menu-module.js.map