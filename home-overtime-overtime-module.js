(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-overtime-overtime-module"],{

/***/ "./src/app/home/overtime/application-for-overtime/application-for-overtime.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/home/overtime/application-for-overtime/application-for-overtime.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Application For Overtime\r\n  </h4>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <br/>\r\n\r\n      <div class=\"col-md-6\">\r\n        <br/>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n          </div>\r\n        </div>\r\n        <div class=\"container border\">\r\n          <br />\r\n          <label class=\"col-form-label\" style=\"margin-left: 22%\"> Applied to</label>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n              <i class=\"text-danger\">*</i>\r\n            </label>\r\n\r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                  <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <br />\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">OT Date\r\n\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">In Time\r\n\r\n          </label>\r\n          <div class=\"input-group col-sm-8\">\r\n            <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"true\" [secondStep]=\"10\" [meridian]=\"true\"></ngb-timepicker>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Out Time\r\n\r\n          </label>\r\n          <div class=\"input-group col-sm-8\">\r\n            <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"true\" [secondStep]=\"10\" [meridian]=\"true\"></ngb-timepicker>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">OT Hour\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"OT Hour\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Night Allowance\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>Yes </option>\r\n              <option>No</option>\r\n              <option></option>\r\n              <option></option>\r\n\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Reason\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1</option>\r\n              <option>2</option>\r\n              <option></option>\r\n              <option></option>\r\n\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Note\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <textarea rows=\"3\" type=\"text\" class=\"form-control\" placeholder=\"Note\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n        <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n        <button type=\"\" class=\"btn btn-secondary \">\r\n          <span class=\"fas fa-window-close\"> Close</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Date</th>\r\n            <th>In Time</th>\r\n            <th>Out Time </th>\r\n            <th>Ot Hours</th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/overtime/application-for-overtime/application-for-overtime.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/home/overtime/application-for-overtime/application-for-overtime.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvYXBwbGljYXRpb24tZm9yLW92ZXJ0aW1lL2FwcGxpY2F0aW9uLWZvci1vdmVydGltZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/overtime/application-for-overtime/application-for-overtime.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/overtime/application-for-overtime/application-for-overtime.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ApplicationForOvertimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationForOvertimeComponent", function() { return ApplicationForOvertimeComponent; });
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

var ApplicationForOvertimeComponent = /** @class */ (function () {
    function ApplicationForOvertimeComponent() {
    }
    ApplicationForOvertimeComponent.prototype.ngOnInit = function () {
    };
    ApplicationForOvertimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-for-overtime',
            template: __webpack_require__(/*! ./application-for-overtime.component.html */ "./src/app/home/overtime/application-for-overtime/application-for-overtime.component.html"),
            styles: [__webpack_require__(/*! ./application-for-overtime.component.scss */ "./src/app/home/overtime/application-for-overtime/application-for-overtime.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplicationForOvertimeComponent);
    return ApplicationForOvertimeComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/assign-over-time-requisition/assign-over-time-requisition.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/home/overtime/assign-over-time-requisition/assign-over-time-requisition.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Assign Over Time Requisition\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Office Branch\r\n          </label>\r\n\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Unit\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">OT Date\r\n\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Shift\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Approved By\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Approved By\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Location\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Line\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Id\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Id\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">OT Hours\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"OT Hours\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-file-download\"></span>Get Employees\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-info \">\r\n          <span class=\"ion ion-ios-refresh\"> Refresh</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th><label class=\"custom-control custom-checkbox m-0\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-label\"></span>\r\n                  </label>Select</th>\r\n                <th>Code</th>\r\n                <th>Employee Name</th>\r\n                <th>Department</th>\r\n                <th>Designation</th>\r\n                <th>Ot hours</th>\r\n                <th>shift</th>\r\n                <th>Delete</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th> <label class=\"custom-control custom-checkbox m-0\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-label\"></span>\r\n                  </label></th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>0</td>\r\n                <td></td>\r\n                <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n              </tr>\r\n              <tr>\r\n                <th> <label class=\"custom-control custom-checkbox m-0\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-label\"></span>\r\n                  </label></th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>0</td>\r\n                <td></td>\r\n                <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n              </tr>\r\n              <tr>\r\n                <th> <label class=\"custom-control custom-checkbox m-0\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-label\"></span>\r\n                  </label></th>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>0</td>\r\n                <td></td>\r\n                <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"col-md-4\">\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-sm-4 text-sm-right\">Total Employee\r\n                  </label>\r\n                </div> \r\n          </div>\r\n          <div class=\"col-md-8\">\r\n              <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n                  <button type=\"\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-save\"> Save</span>\r\n                  </button>\r\n                  <button type=\"\" class=\"btn btn-secondary \">\r\n                    <span class=\"fas fa-window-close\"> Close</span>\r\n                  </button>\r\n                </div>\r\n          </div>\r\n          \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/overtime/assign-over-time-requisition/assign-over-time-requisition.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/home/overtime/assign-over-time-requisition/assign-over-time-requisition.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvYXNzaWduLW92ZXItdGltZS1yZXF1aXNpdGlvbi9hc3NpZ24tb3Zlci10aW1lLXJlcXVpc2l0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/overtime/assign-over-time-requisition/assign-over-time-requisition.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/home/overtime/assign-over-time-requisition/assign-over-time-requisition.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AssignOverTimeRequisitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignOverTimeRequisitionComponent", function() { return AssignOverTimeRequisitionComponent; });
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

var AssignOverTimeRequisitionComponent = /** @class */ (function () {
    function AssignOverTimeRequisitionComponent() {
    }
    AssignOverTimeRequisitionComponent.prototype.ngOnInit = function () {
    };
    AssignOverTimeRequisitionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-over-time-requisition',
            template: __webpack_require__(/*! ./assign-over-time-requisition.component.html */ "./src/app/home/overtime/assign-over-time-requisition/assign-over-time-requisition.component.html"),
            styles: [__webpack_require__(/*! ./assign-over-time-requisition.component.scss */ "./src/app/home/overtime/assign-over-time-requisition/assign-over-time-requisition.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssignOverTimeRequisitionComponent);
    return AssignOverTimeRequisitionComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/assign-over-time/assign-over-time.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/overtime/assign-over-time/assign-over-time.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Assign Over Time\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">OT Type\r\n            </label>\r\n      \r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Employee type\r\n            </label>\r\n      \r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Location\r\n            </label>\r\n      \r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"row\">\r\n    <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n      <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-file-download\"></span> Get Employees\r\n      </button>\r\n      <button type=\"clear\" class=\"btn btn-info\">\r\n          <span class=\"ion ion-ios-refresh\"></span> Refresh</button>\r\n    </div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th><label class=\"custom-control custom-checkbox m-0\">\r\n              <input type=\"checkbox\" class=\"custom-control-input\">\r\n              <span class=\"custom-control-label\"></span>\r\n            </label>Select</th>\r\n          <th>Designation</th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th>Delete</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th> <label class=\"custom-control custom-checkbox m-0\">\r\n              <input type=\"checkbox\" class=\"custom-control-input\">\r\n              <span class=\"custom-control-label\"></span>\r\n            </label></th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n        <tr>\r\n          <th> <label class=\"custom-control custom-checkbox m-0\">\r\n              <input type=\"checkbox\" class=\"custom-control-input\">\r\n              <span class=\"custom-control-label\"></span>\r\n            </label></th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n        <tr>\r\n          <th> <label class=\"custom-control custom-checkbox m-0\">\r\n              <input type=\"checkbox\" class=\"custom-control-input\">\r\n              <span class=\"custom-control-label\"></span>\r\n            </label></th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n         <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Total Employee\r\n            </label>\r\n          </div> \r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">\r\n                <span class=\"fas fa-edit\"></span> Update </button>\r\n            <button type=\"\" class=\"btn btn-secondary \">\r\n              <span class=\"fas fa-window-close\"> Close</span>\r\n            </button>\r\n          </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/overtime/assign-over-time/assign-over-time.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/overtime/assign-over-time/assign-over-time.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvYXNzaWduLW92ZXItdGltZS9hc3NpZ24tb3Zlci10aW1lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/overtime/assign-over-time/assign-over-time.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/overtime/assign-over-time/assign-over-time.component.ts ***!
  \******************************************************************************/
/*! exports provided: AssignOverTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignOverTimeComponent", function() { return AssignOverTimeComponent; });
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

var AssignOverTimeComponent = /** @class */ (function () {
    function AssignOverTimeComponent() {
    }
    AssignOverTimeComponent.prototype.ngOnInit = function () {
    };
    AssignOverTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-over-time',
            template: __webpack_require__(/*! ./assign-over-time.component.html */ "./src/app/home/overtime/assign-over-time/assign-over-time.component.html"),
            styles: [__webpack_require__(/*! ./assign-over-time.component.scss */ "./src/app/home/overtime/assign-over-time/assign-over-time.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssignOverTimeComponent);
    return AssignOverTimeComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/entitle-over-time/entitle-over-time.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/overtime/entitle-over-time/entitle-over-time.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Entitle Over Time\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Office Branch\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Unit\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Id\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Id\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Location\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Line\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-file-download\"></span>\r\n          Get Employees\r\n        </button>\r\n        <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span>Refresh</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row \">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th><label class=\"custom-control custom-checkbox m-0\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\">\r\n                <span class=\"custom-control-label\"></span>\r\n              </label>Select</th>\r\n            <th>Code</th>\r\n            <th>Employee Name</th>\r\n            <th>Department</th>\r\n            <th>Designation</th>\r\n            <th></th>\r\n            <th></th>\r\n            <th>Delete</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th> <label class=\"custom-control custom-checkbox m-0\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\">\r\n                <span class=\"custom-control-label\"></span>\r\n              </label></th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n          <tr>\r\n            <th> <label class=\"custom-control custom-checkbox m-0\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\">\r\n                <span class=\"custom-control-label\"></span>\r\n              </label></th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n          <tr>\r\n            <th> <label class=\"custom-control custom-checkbox m-0\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\">\r\n                <span class=\"custom-control-label\"></span>\r\n              </label></th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Total Employee\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-save\"> Save</span>\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"> Close</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/overtime/entitle-over-time/entitle-over-time.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/overtime/entitle-over-time/entitle-over-time.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvZW50aXRsZS1vdmVyLXRpbWUvZW50aXRsZS1vdmVyLXRpbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/overtime/entitle-over-time/entitle-over-time.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/overtime/entitle-over-time/entitle-over-time.component.ts ***!
  \********************************************************************************/
/*! exports provided: EntitleOverTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitleOverTimeComponent", function() { return EntitleOverTimeComponent; });
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

var EntitleOverTimeComponent = /** @class */ (function () {
    function EntitleOverTimeComponent() {
    }
    EntitleOverTimeComponent.prototype.ngOnInit = function () {
    };
    EntitleOverTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entitle-over-time',
            template: __webpack_require__(/*! ./entitle-over-time.component.html */ "./src/app/home/overtime/entitle-over-time/entitle-over-time.component.html"),
            styles: [__webpack_require__(/*! ./entitle-over-time.component.scss */ "./src/app/home/overtime/entitle-over-time/entitle-over-time.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EntitleOverTimeComponent);
    return EntitleOverTimeComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/ot-method/ot-method.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home/overtime/ot-method/ot-method.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n     Overtime Approve\r\n    </h4>\r\n    <div class=\"container\">\r\n       <div class=\"col-md-7 center\">\r\n          <br />\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Company Name\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n  \r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Type\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"custom-select \">\r\n                  <option>1 </option>\r\n                  <option>2</option>\r\n                  <option>3</option>\r\n                  <option>4</option>\r\n    \r\n                </select>\r\n              </div>\r\n            </div>\r\n       </div>\r\n          \r\n        </div>\r\n        <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n            <button type=\"\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"> Save</span>\r\n            </button>\r\n            <button type=\"\" class=\"btn btn-secondary \">\r\n              <span class=\"fas fa-window-close\"> Close</span>\r\n            </button>\r\n          </div>\r\n        </div>"

/***/ }),

/***/ "./src/app/home/overtime/ot-method/ot-method.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/home/overtime/ot-method/ot-method.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3QtbWV0aG9kL290LW1ldGhvZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/overtime/ot-method/ot-method.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/overtime/ot-method/ot-method.component.ts ***!
  \****************************************************************/
/*! exports provided: OtMethodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtMethodComponent", function() { return OtMethodComponent; });
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

var OtMethodComponent = /** @class */ (function () {
    function OtMethodComponent() {
    }
    OtMethodComponent.prototype.ngOnInit = function () {
    };
    OtMethodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ot-method',
            template: __webpack_require__(/*! ./ot-method.component.html */ "./src/app/home/overtime/ot-method/ot-method.component.html"),
            styles: [__webpack_require__(/*! ./ot-method.component.scss */ "./src/app/home/overtime/ot-method/ot-method.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OtMethodComponent);
    return OtMethodComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/over-time-auto/over-time-auto.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-auto/over-time-auto.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Assign Over Auto\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Office Branch\r\n          </label>\r\n\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Unit\r\n          </label>\r\n\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n          </label>\r\n\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Id\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Id\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Line\r\n          </label>\r\n\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n          </label>\r\n\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Date\r\n\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-file-download\"></span> Show Data\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Code</th>\r\n          <th>Employee Name</th>\r\n          <th>Designation</th>\r\n          <th>Department</th>\r\n          <th>hour</th>\r\n          <th>Minuit</th>\r\n          <th>Auto OT Hour</th>\r\n          <th>OT hour</th>\r\n          <th>Remarks</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th>1</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <th>2</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <th>3</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n   <div class=\"row\">\r\n    <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n      <button type=\"\" class=\"btn btn-success\">\r\n        <span class=\"fas fa-save\"> Save</span>\r\n      </button>\r\n      \r\n      <button type=\"\" class=\"btn btn-danger \">\r\n          <span class=\"fas fa-window-close\"> Close</span>\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-success \">\r\n          <span class=\"fas fa-plus\"> Add row </span>\r\n        </button>\r\n    </div>\r\n   </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/overtime/over-time-auto/over-time-auto.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-auto/over-time-auto.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3Zlci10aW1lLWF1dG8vb3Zlci10aW1lLWF1dG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/overtime/over-time-auto/over-time-auto.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-auto/over-time-auto.component.ts ***!
  \**************************************************************************/
/*! exports provided: OverTimeAutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverTimeAutoComponent", function() { return OverTimeAutoComponent; });
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

var OverTimeAutoComponent = /** @class */ (function () {
    function OverTimeAutoComponent() {
    }
    OverTimeAutoComponent.prototype.ngOnInit = function () {
    };
    OverTimeAutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-over-time-auto',
            template: __webpack_require__(/*! ./over-time-auto.component.html */ "./src/app/home/overtime/over-time-auto/over-time-auto.component.html"),
            styles: [__webpack_require__(/*! ./over-time-auto.component.scss */ "./src/app/home/overtime/over-time-auto/over-time-auto.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OverTimeAutoComponent);
    return OverTimeAutoComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/over-time-condition-setup/over-time-condition-setup.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-condition-setup/over-time-condition-setup.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Over Time Condition Setup\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Type\r\n            </label>\r\n      \r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Minimum OT Hour\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Minimum OT Hour\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Maximum OT Hour In a Day\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Maximum OT Hour In a Day\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Maximum OT Hour In a Month\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Maximum OT Hour In a Month\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Date\r\n      \r\n            </label>\r\n      \r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Note\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Note\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n                <button type=\"\" class=\"btn btn-success\" >\r\n                  <span class=\"fas fa-save\"> Save</span>\r\n                </button>\r\n                <button type=\"clear\" class=\"btn btn-info\">\r\n                    <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n                <button type=\"\" class=\"btn btn-secondary \">\r\n                  <span class=\"fas fa-window-close\"> Close</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"container\">\r\n      <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>OT Name</th>\r\n              <th>Minimum Hour</th>\r\n              <th>Maximum Hour</th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th>1</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n              <th>2</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n              <th>3</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n  </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/home/overtime/over-time-condition-setup/over-time-condition-setup.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-condition-setup/over-time-condition-setup.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3Zlci10aW1lLWNvbmRpdGlvbi1zZXR1cC9vdmVyLXRpbWUtY29uZGl0aW9uLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/overtime/over-time-condition-setup/over-time-condition-setup.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-condition-setup/over-time-condition-setup.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OverTimeConditionSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverTimeConditionSetupComponent", function() { return OverTimeConditionSetupComponent; });
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

var OverTimeConditionSetupComponent = /** @class */ (function () {
    function OverTimeConditionSetupComponent() {
    }
    OverTimeConditionSetupComponent.prototype.ngOnInit = function () {
    };
    OverTimeConditionSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-over-time-condition-setup',
            template: __webpack_require__(/*! ./over-time-condition-setup.component.html */ "./src/app/home/overtime/over-time-condition-setup/over-time-condition-setup.component.html"),
            styles: [__webpack_require__(/*! ./over-time-condition-setup.component.scss */ "./src/app/home/overtime/over-time-condition-setup/over-time-condition-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OverTimeConditionSetupComponent);
    return OverTimeConditionSetupComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/over-time-menual/over-time-menual.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-menual/over-time-menual.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Assign Over Manual\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Unit\r\n      </label>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <select class=\"custom-select \">\r\n          <option>1 </option>\r\n          <option>2</option>\r\n          <option>3</option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Line\r\n      </label>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <select class=\"custom-select \">\r\n          <option>1 </option>\r\n          <option>2</option>\r\n          <option>3</option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Date\r\n\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-4\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Code</th>\r\n          <th>Employee Name</th>\r\n          <th>Designation</th>\r\n          <th>Department</th>\r\n          <th>hour</th>\r\n          <th>Minuit</th>\r\n          <th>Auto OT Hour</th>\r\n          <th>OT hour</th>\r\n          <th>Remarks</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th>1</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <th>2</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <th>3</th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n        \r\n        <button type=\"\" class=\"btn btn-danger \">\r\n            <span class=\"fas fa-window-close\"> Close</span>\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-success \">\r\n            <span class=\"fas fa-plus\"> Add row </span>\r\n          </button>\r\n      </div>\r\n     </div>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/home/overtime/over-time-menual/over-time-menual.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-menual/over-time-menual.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3Zlci10aW1lLW1lbnVhbC9vdmVyLXRpbWUtbWVudWFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/overtime/over-time-menual/over-time-menual.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-menual/over-time-menual.component.ts ***!
  \******************************************************************************/
/*! exports provided: OverTimeMenualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverTimeMenualComponent", function() { return OverTimeMenualComponent; });
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

var OverTimeMenualComponent = /** @class */ (function () {
    function OverTimeMenualComponent() {
    }
    OverTimeMenualComponent.prototype.ngOnInit = function () {
    };
    OverTimeMenualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-over-time-menual',
            template: __webpack_require__(/*! ./over-time-menual.component.html */ "./src/app/home/overtime/over-time-menual/over-time-menual.component.html"),
            styles: [__webpack_require__(/*! ./over-time-menual.component.scss */ "./src/app/home/overtime/over-time-menual/over-time-menual.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OverTimeMenualComponent);
    return OverTimeMenualComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/over-time-payment-auto/over-time-payment-auto.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-payment-auto/over-time-payment-auto.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Over Time Payment Auto\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br/>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n        </label>\r\n  \r\n        <div class=\"col-sm-8\">\r\n          <select class=\"custom-select \">\r\n            <option>1 </option>\r\n            <option>2</option>\r\n            <option>3</option>\r\n            <option></option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Select Type\r\n        </label>\r\n  \r\n        <div class=\"col-sm-8\">\r\n          <select class=\"custom-select \">\r\n            <option>1 </option>\r\n            <option>2</option>\r\n            <option>3</option>\r\n            <option></option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">OT Month\r\n        </label>\r\n  \r\n        <div class=\"col-sm-8\">\r\n          <select class=\"custom-select \">\r\n            <option>1 </option>\r\n            <option>2</option>\r\n            <option>3</option>\r\n            <option></option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">OT Start Date\r\n\r\n        </label>\r\n\r\n        <div class=\"input-group col-sm-8\">\r\n          <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n              <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Code\r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Employee Code\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Office Branch\r\n        </label>\r\n  \r\n        <div class=\"col-sm-8\">\r\n          <select class=\"custom-select \">\r\n            <option>1 </option>\r\n            <option>2</option>\r\n            <option>3</option>\r\n            <option></option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n    \r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Date\r\n\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-8\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Month\r\n      </label>\r\n\r\n      <div class=\"col-sm-8\">\r\n        <select class=\"custom-select \">\r\n          <option>1 </option>\r\n          <option>2</option>\r\n          <option>3</option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">End Of Date\r\n\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-8\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Salary Head\r\n      </label>\r\n\r\n      <div class=\"col-sm-8\">\r\n        <select class=\"custom-select \">\r\n          <option>1 </option>\r\n          <option>2</option>\r\n          <option>3</option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n    <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n      <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-file-download\"></span>Show Data\r\n      </button>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>Code</th>\r\n          <th>Employee Name</th>\r\n          <th>Department</th>\r\n          <th>Designation</th>\r\n          <th>OT amount</th>\r\n          <th>Delete</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n        <tr>\r\n\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n        <tr>\r\n\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    \r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n          <span class=\"fas fa-save\"> Save</span>\r\n        </button>\r\n        \r\n        <button type=\"\" class=\"btn btn-secondary\">\r\n            <span class=\"far fa-window-close\"></span> Close\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-success \">\r\n            <span class=\"fas fa-plus\"> Add row </span>\r\n          </button>\r\n      </div>\r\n     \r\n  </div>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/home/overtime/over-time-payment-auto/over-time-payment-auto.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-payment-auto/over-time-payment-auto.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3Zlci10aW1lLXBheW1lbnQtYXV0by9vdmVyLXRpbWUtcGF5bWVudC1hdXRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/overtime/over-time-payment-auto/over-time-payment-auto.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-payment-auto/over-time-payment-auto.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OverTimePaymentAutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverTimePaymentAutoComponent", function() { return OverTimePaymentAutoComponent; });
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

var OverTimePaymentAutoComponent = /** @class */ (function () {
    function OverTimePaymentAutoComponent() {
    }
    OverTimePaymentAutoComponent.prototype.ngOnInit = function () {
    };
    OverTimePaymentAutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-over-time-payment-auto',
            template: __webpack_require__(/*! ./over-time-payment-auto.component.html */ "./src/app/home/overtime/over-time-payment-auto/over-time-payment-auto.component.html"),
            styles: [__webpack_require__(/*! ./over-time-payment-auto.component.scss */ "./src/app/home/overtime/over-time-payment-auto/over-time-payment-auto.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OverTimePaymentAutoComponent);
    return OverTimePaymentAutoComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/over-time-payment-manual/over-time-payment-manual.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-payment-manual/over-time-payment-manual.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n     Over Time Payment Manual\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Select Type\r\n      </label>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <select class=\"custom-select \">\r\n          <option>1 </option>\r\n          <option>2</option>\r\n          <option>3</option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Date\r\n\r\n      </label>\r\n\r\n      <div class=\"input-group col-sm-4\">\r\n        <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n            <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Payment Month\r\n      </label>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <select class=\"custom-select \">\r\n          <option>1 </option>\r\n          <option>2</option>\r\n          <option>3</option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-form-label col-sm-4 text-sm-right\">Salary Head\r\n      </label>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <select class=\"custom-select \">\r\n          <option>1 </option>\r\n          <option>2</option>\r\n          <option>3</option>\r\n          <option></option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>Code</th>\r\n          <th>Employee Name</th>\r\n          <th>Department</th>\r\n          <th>Designation</th>\r\n          <th>OT amount</th>\r\n          <th>Delete</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n        <tr>\r\n\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n        <tr>\r\n\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <div class=\"row\">\r\n    <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n      <button type=\"\" class=\"btn btn-success\">\r\n        <span class=\"fas fa-save\"> Save</span>\r\n      </button>\r\n      \r\n      <button type=\"\" class=\"btn btn-secondary\">\r\n          <span class=\"far fa-window-close\"></span> Close\r\n        </button>\r\n        <button type=\"\" class=\"btn btn-success \">\r\n          <span class=\"fas fa-plus\"> Add row </span>\r\n        </button>\r\n    </div>\r\n  </div>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/home/overtime/over-time-payment-manual/over-time-payment-manual.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-payment-manual/over-time-payment-manual.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3Zlci10aW1lLXBheW1lbnQtbWFudWFsL292ZXItdGltZS1wYXltZW50LW1hbnVhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/overtime/over-time-payment-manual/over-time-payment-manual.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-payment-manual/over-time-payment-manual.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: OverTimePaymentManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverTimePaymentManualComponent", function() { return OverTimePaymentManualComponent; });
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

var OverTimePaymentManualComponent = /** @class */ (function () {
    function OverTimePaymentManualComponent() {
    }
    OverTimePaymentManualComponent.prototype.ngOnInit = function () {
    };
    OverTimePaymentManualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-over-time-payment-manual',
            template: __webpack_require__(/*! ./over-time-payment-manual.component.html */ "./src/app/home/overtime/over-time-payment-manual/over-time-payment-manual.component.html"),
            styles: [__webpack_require__(/*! ./over-time-payment-manual.component.scss */ "./src/app/home/overtime/over-time-payment-manual/over-time-payment-manual.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OverTimePaymentManualComponent);
    return OverTimePaymentManualComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/over-time-report/over-time-report.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-report/over-time-report.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n   Over Time Report \r\n  </h4>\r\n  <div class=\"container\">\r\n    <br/>\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Report Type\r\n        </label>\r\n        <div class=\"col-sm-4\">\r\n          <select class=\"custom-select \">\r\n            <option>Select state</option>\r\n            <option>Type 1</option>\r\n            <option>Type 2</option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n            <option></option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n              <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-file-download\"></span> Generate Report \r\n                </button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/overtime/over-time-report/over-time-report.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-report/over-time-report.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3Zlci10aW1lLXJlcG9ydC9vdmVyLXRpbWUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/overtime/over-time-report/over-time-report.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-report/over-time-report.component.ts ***!
  \******************************************************************************/
/*! exports provided: OverTimeReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverTimeReportComponent", function() { return OverTimeReportComponent; });
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

var OverTimeReportComponent = /** @class */ (function () {
    function OverTimeReportComponent() {
    }
    OverTimeReportComponent.prototype.ngOnInit = function () {
    };
    OverTimeReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-over-time-report',
            template: __webpack_require__(/*! ./over-time-report.component.html */ "./src/app/home/overtime/over-time-report/over-time-report.component.html"),
            styles: [__webpack_require__(/*! ./over-time-report.component.scss */ "./src/app/home/overtime/over-time-report/over-time-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OverTimeReportComponent);
    return OverTimeReportComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/over-time-requisition-approve/over-time-requisition-approve.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-requisition-approve/over-time-requisition-approve.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Over Time Requisition Approve\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br/>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Office Branch\r\n          </label>\r\n\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">OT Date\r\n\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Type\r\n          </label>\r\n\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Type\r\n          </label>\r\n\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Id\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Id\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-file-download\"></span>  Get Employees\r\n        </button>\r\n        <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span> Refresh</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n      <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>requsition by</th>\r\n              <th>Unit</th>\r\n              <th>Line</th>\r\n              <th>Date</th>\r\n              <th>Total</th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th>1</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n              <th>2</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n              <th>3</th>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n  </div>\r\n  <div class=\"container\">\r\n    <br />\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th><label class=\"custom-control custom-checkbox m-0\">\r\n              <input type=\"checkbox\" class=\"custom-control-input\">\r\n              <span class=\"custom-control-label\"></span>\r\n            </label>Select</th>\r\n          <th>Code</th>\r\n          <th>Employee Name</th>\r\n          <th>Department</th>\r\n          <th>Designation</th>\r\n          <th>Matchine</th>\r\n          <th>Ot hours</th>\r\n          <th>shift</th>\r\n          <th>Total OT</th>\r\n          <th>Delete</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th> <label class=\"custom-control custom-checkbox m-0\">\r\n              <input type=\"checkbox\" class=\"custom-control-input\">\r\n              <span class=\"custom-control-label\"></span>\r\n            </label></th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n        <tr>\r\n          <th> <label class=\"custom-control custom-checkbox m-0\">\r\n              <input type=\"checkbox\" class=\"custom-control-input\">\r\n              <span class=\"custom-control-label\"></span>\r\n            </label></th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n        <tr>\r\n          <th> <label class=\"custom-control custom-checkbox m-0\">\r\n              <input type=\"checkbox\" class=\"custom-control-input\">\r\n              <span class=\"custom-control-label\"></span>\r\n            </label></th>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td></td>\r\n          <td>0</td>\r\n          <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Total Employee\r\n        </label>\r\n      </div>\r\n    </div>\r\n  \r\n  <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n      <button type=\"\" class=\"btn btn-success\">\r\n        <span class=\"fas fa-save\"> Approve</span>\r\n      </button>\r\n      <button type=\"\" class=\"btn btn-danger\">\r\n        <span class=\"fas fa-window-close\"> Not Approve</span>\r\n      </button>\r\n      <button type=\"\" class=\"btn btn-secondary \">\r\n          <span class=\"fas fa-window-close\"> Close</span>\r\n        </button>\r\n      \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/overtime/over-time-requisition-approve/over-time-requisition-approve.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-requisition-approve/over-time-requisition-approve.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3Zlci10aW1lLXJlcXVpc2l0aW9uLWFwcHJvdmUvb3Zlci10aW1lLXJlcXVpc2l0aW9uLWFwcHJvdmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/overtime/over-time-requisition-approve/over-time-requisition-approve.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-requisition-approve/over-time-requisition-approve.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: OverTimeRequisitionApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverTimeRequisitionApproveComponent", function() { return OverTimeRequisitionApproveComponent; });
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

var OverTimeRequisitionApproveComponent = /** @class */ (function () {
    function OverTimeRequisitionApproveComponent() {
    }
    OverTimeRequisitionApproveComponent.prototype.ngOnInit = function () {
    };
    OverTimeRequisitionApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-over-time-requisition-approve',
            template: __webpack_require__(/*! ./over-time-requisition-approve.component.html */ "./src/app/home/overtime/over-time-requisition-approve/over-time-requisition-approve.component.html"),
            styles: [__webpack_require__(/*! ./over-time-requisition-approve.component.scss */ "./src/app/home/overtime/over-time-requisition-approve/over-time-requisition-approve.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OverTimeRequisitionApproveComponent);
    return OverTimeRequisitionApproveComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/over-time-setup/over-time-setup.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-setup/over-time-setup.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Over Time Condition Setup\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Day Type\r\n            </label>\r\n      \r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Over Time Name\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Over Time Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Minimum OT Hours\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Minimum OT Hour\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Maximum OT Hours\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Maximum OT Hour\">\r\n            </div>\r\n          </div>\r\n    </div>\r\n  </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing mt-3\"  style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\" >\r\n            <span class=\"fas fa-save\"> Save</span>\r\n          </button>\r\n          <button type=\"clear\" class=\"btn btn-info\">\r\n              <span class=\"ion ion-ios-refresh\"></span> Reset\r\n            </button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"> Close</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>OT Name</th>\r\n            <th>Minimum Hour</th>\r\n            <th>Maximum Hour</th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>2</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <th>3</th>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/overtime/over-time-setup/over-time-setup.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-setup/over-time-setup.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3Zlci10aW1lLXNldHVwL292ZXItdGltZS1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/overtime/over-time-setup/over-time-setup.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/overtime/over-time-setup/over-time-setup.component.ts ***!
  \****************************************************************************/
/*! exports provided: OverTimeSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverTimeSetupComponent", function() { return OverTimeSetupComponent; });
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

var OverTimeSetupComponent = /** @class */ (function () {
    function OverTimeSetupComponent() {
    }
    OverTimeSetupComponent.prototype.ngOnInit = function () {
    };
    OverTimeSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-over-time-setup',
            template: __webpack_require__(/*! ./over-time-setup.component.html */ "./src/app/home/overtime/over-time-setup/over-time-setup.component.html"),
            styles: [__webpack_require__(/*! ./over-time-setup.component.scss */ "./src/app/home/overtime/over-time-setup/over-time-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OverTimeSetupComponent);
    return OverTimeSetupComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/overtime-approve-by-hr/overtime-approve-by-hr.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/home/overtime/overtime-approve-by-hr/overtime-approve-by-hr.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n     Overtime Approve By Hr\r\n    </h4>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <br />\r\n        <div class=\"form-group\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>Id</th>\r\n                    <th>Employee Name</th>\r\n                    <th>Department </th>\r\n                    <th>Designation</th>\r\n                    <th>Date</th>\r\n                    <th>In Time</th>\r\n                    <th>Out Time</th>\r\n                    <th>OT Hours</th>\r\n                    <th>OT Hours Approve</th>\r\n                    <th>Remarks</th>\r\n                    <th>Approve</th>\r\n                    <th>Cancel</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <th>1</th>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>2</th>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    \r\n                  </tr>\r\n                  <tr>\r\n                    <th>3</th>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    \r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n        </div>\r\n        <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n            <button type=\"\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"> Approve All</span>\r\n            </button>\r\n            <button type=\"\" class=\"btn btn-danger \"> Cancel All\r\n            </button>\r\n            <button type=\"\" class=\"btn btn-secondary \">\r\n              <span class=\"fas fa-window-close\"> Close</span>\r\n            </button>\r\n          </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/overtime/overtime-approve-by-hr/overtime-approve-by-hr.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/home/overtime/overtime-approve-by-hr/overtime-approve-by-hr.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3ZlcnRpbWUtYXBwcm92ZS1ieS1oci9vdmVydGltZS1hcHByb3ZlLWJ5LWhyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/overtime/overtime-approve-by-hr/overtime-approve-by-hr.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/home/overtime/overtime-approve-by-hr/overtime-approve-by-hr.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OvertimeApproveByHrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeApproveByHrComponent", function() { return OvertimeApproveByHrComponent; });
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

var OvertimeApproveByHrComponent = /** @class */ (function () {
    function OvertimeApproveByHrComponent() {
    }
    OvertimeApproveByHrComponent.prototype.ngOnInit = function () {
    };
    OvertimeApproveByHrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overtime-approve-by-hr',
            template: __webpack_require__(/*! ./overtime-approve-by-hr.component.html */ "./src/app/home/overtime/overtime-approve-by-hr/overtime-approve-by-hr.component.html"),
            styles: [__webpack_require__(/*! ./overtime-approve-by-hr.component.scss */ "./src/app/home/overtime/overtime-approve-by-hr/overtime-approve-by-hr.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OvertimeApproveByHrComponent);
    return OvertimeApproveByHrComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/overtime-approve/overtime-approve.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/overtime/overtime-approve/overtime-approve.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n   Overtime Approve\r\n  </h4>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <br />\r\n      <div class=\"form-group\">\r\n          <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Id</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Department </th>\r\n                  <th>Designation</th>\r\n                  <th>Date</th>\r\n                  <th>In Time</th>\r\n                  <th>Out Time</th>\r\n                  <th>OT Hours</th>\r\n                  <th>OT Hours Approve</th>\r\n                  <th>Remarks</th>\r\n                  <th>Approve</th>\r\n                  <th>Cancel</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th>1</th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n                <tr>\r\n                  <th>2</th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  \r\n                </tr>\r\n                <tr>\r\n                  <th>3</th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  \r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n      </div>\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-save\"> Approve All</span>\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-danger \">\r\n         Cancel All\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"> Close</span>\r\n          </button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/overtime/overtime-approve/overtime-approve.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/overtime/overtime-approve/overtime-approve.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3ZlcnRpbWUtYXBwcm92ZS9vdmVydGltZS1hcHByb3ZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/overtime/overtime-approve/overtime-approve.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/overtime/overtime-approve/overtime-approve.component.ts ***!
  \******************************************************************************/
/*! exports provided: OvertimeApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeApproveComponent", function() { return OvertimeApproveComponent; });
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

var OvertimeApproveComponent = /** @class */ (function () {
    function OvertimeApproveComponent() {
    }
    OvertimeApproveComponent.prototype.ngOnInit = function () {
    };
    OvertimeApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overtime-approve',
            template: __webpack_require__(/*! ./overtime-approve.component.html */ "./src/app/home/overtime/overtime-approve/overtime-approve.component.html"),
            styles: [__webpack_require__(/*! ./overtime-approve.component.scss */ "./src/app/home/overtime/overtime-approve/overtime-approve.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OvertimeApproveComponent);
    return OvertimeApproveComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/overtime-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/overtime/overtime-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: OvertimeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeRoutingModule", function() { return OvertimeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _overtime_supervisor_overtime_supervisor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overtime-supervisor/overtime-supervisor.component */ "./src/app/home/overtime/overtime-supervisor/overtime-supervisor.component.ts");
/* harmony import */ var _application_for_overtime_application_for_overtime_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application-for-overtime/application-for-overtime.component */ "./src/app/home/overtime/application-for-overtime/application-for-overtime.component.ts");
/* harmony import */ var _overtime_approve_by_hr_overtime_approve_by_hr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overtime-approve-by-hr/overtime-approve-by-hr.component */ "./src/app/home/overtime/overtime-approve-by-hr/overtime-approve-by-hr.component.ts");
/* harmony import */ var _overtime_approve_overtime_approve_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overtime-approve/overtime-approve.component */ "./src/app/home/overtime/overtime-approve/overtime-approve.component.ts");
/* harmony import */ var _ot_method_ot_method_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ot-method/ot-method.component */ "./src/app/home/overtime/ot-method/ot-method.component.ts");
/* harmony import */ var _entitle_over_time_entitle_over_time_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entitle-over-time/entitle-over-time.component */ "./src/app/home/overtime/entitle-over-time/entitle-over-time.component.ts");
/* harmony import */ var _update_over_time_allowance_update_over_time_allowance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-over-time-allowance/update-over-time-allowance.component */ "./src/app/home/overtime/update-over-time-allowance/update-over-time-allowance.component.ts");
/* harmony import */ var _assign_over_time_requisition_assign_over_time_requisition_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assign-over-time-requisition/assign-over-time-requisition.component */ "./src/app/home/overtime/assign-over-time-requisition/assign-over-time-requisition.component.ts");
/* harmony import */ var _update_over_time_requisition_update_over_time_requisition_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update-over-time-requisition/update-over-time-requisition.component */ "./src/app/home/overtime/update-over-time-requisition/update-over-time-requisition.component.ts");
/* harmony import */ var _over_time_report_over_time_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./over-time-report/over-time-report.component */ "./src/app/home/overtime/over-time-report/over-time-report.component.ts");
/* harmony import */ var _over_time_payment_manual_over_time_payment_manual_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./over-time-payment-manual/over-time-payment-manual.component */ "./src/app/home/overtime/over-time-payment-manual/over-time-payment-manual.component.ts");
/* harmony import */ var _over_time_payment_auto_over_time_payment_auto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./over-time-payment-auto/over-time-payment-auto.component */ "./src/app/home/overtime/over-time-payment-auto/over-time-payment-auto.component.ts");
/* harmony import */ var _over_time_auto_over_time_auto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./over-time-auto/over-time-auto.component */ "./src/app/home/overtime/over-time-auto/over-time-auto.component.ts");
/* harmony import */ var _assign_over_time_assign_over_time_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assign-over-time/assign-over-time.component */ "./src/app/home/overtime/assign-over-time/assign-over-time.component.ts");
/* harmony import */ var _over_time_setup_over_time_setup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./over-time-setup/over-time-setup.component */ "./src/app/home/overtime/over-time-setup/over-time-setup.component.ts");
/* harmony import */ var _over_time_condition_setup_over_time_condition_setup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./over-time-condition-setup/over-time-condition-setup.component */ "./src/app/home/overtime/over-time-condition-setup/over-time-condition-setup.component.ts");
/* harmony import */ var _over_time_requisition_approve_over_time_requisition_approve_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./over-time-requisition-approve/over-time-requisition-approve.component */ "./src/app/home/overtime/over-time-requisition-approve/over-time-requisition-approve.component.ts");
/* harmony import */ var _over_time_menual_over_time_menual_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./over-time-menual/over-time-menual.component */ "./src/app/home/overtime/over-time-menual/over-time-menual.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var OvertimeRoutingModule = /** @class */ (function () {
    function OvertimeRoutingModule() {
    }
    OvertimeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'overtime-supervisor', component: _overtime_supervisor_overtime_supervisor_component__WEBPACK_IMPORTED_MODULE_2__["OvertimeSupervisorComponent"] },
                    { path: 'application-for-overtime', component: _application_for_overtime_application_for_overtime_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationForOvertimeComponent"] },
                    { path: 'overtime-approve', component: _overtime_approve_overtime_approve_component__WEBPACK_IMPORTED_MODULE_5__["OvertimeApproveComponent"] },
                    { path: 'overtime-approve-by-hr', component: _overtime_approve_by_hr_overtime_approve_by_hr_component__WEBPACK_IMPORTED_MODULE_4__["OvertimeApproveByHrComponent"] },
                    { path: 'ot-method', component: _ot_method_ot_method_component__WEBPACK_IMPORTED_MODULE_6__["OtMethodComponent"] },
                    { path: 'entitle-over-time', component: _entitle_over_time_entitle_over_time_component__WEBPACK_IMPORTED_MODULE_7__["EntitleOverTimeComponent"] },
                    { path: 'update-over-time-allowance', component: _update_over_time_allowance_update_over_time_allowance_component__WEBPACK_IMPORTED_MODULE_8__["UpdateOverTimeAllowanceComponent"] },
                    { path: 'assign-over-time-requisition', component: _assign_over_time_requisition_assign_over_time_requisition_component__WEBPACK_IMPORTED_MODULE_9__["AssignOverTimeRequisitionComponent"] },
                    { path: 'update-over-time-requisition', component: _update_over_time_requisition_update_over_time_requisition_component__WEBPACK_IMPORTED_MODULE_10__["UpdateOverTimeRequisitionComponent"] },
                    { path: 'over-time-requisition-approve', component: _over_time_requisition_approve_over_time_requisition_approve_component__WEBPACK_IMPORTED_MODULE_18__["OverTimeRequisitionApproveComponent"] },
                    { path: 'Over-time-condition-setup', component: _over_time_condition_setup_over_time_condition_setup_component__WEBPACK_IMPORTED_MODULE_17__["OverTimeConditionSetupComponent"] },
                    { path: 'Over-time-setup', component: _over_time_setup_over_time_setup_component__WEBPACK_IMPORTED_MODULE_16__["OverTimeSetupComponent"] },
                    { path: 'assign-over-time', component: _assign_over_time_assign_over_time_component__WEBPACK_IMPORTED_MODULE_15__["AssignOverTimeComponent"] },
                    { path: 'over-time-auto', component: _over_time_auto_over_time_auto_component__WEBPACK_IMPORTED_MODULE_14__["OverTimeAutoComponent"] },
                    { path: 'over-time-menual', component: _over_time_menual_over_time_menual_component__WEBPACK_IMPORTED_MODULE_19__["OverTimeMenualComponent"] },
                    { path: 'over-time-payment-auto', component: _over_time_payment_auto_over_time_payment_auto_component__WEBPACK_IMPORTED_MODULE_13__["OverTimePaymentAutoComponent"] },
                    { path: 'over-time-payment-manual', component: _over_time_payment_manual_over_time_payment_manual_component__WEBPACK_IMPORTED_MODULE_12__["OverTimePaymentManualComponent"] },
                    { path: 'over-time-report', component: _over_time_report_over_time_report_component__WEBPACK_IMPORTED_MODULE_11__["OverTimeReportComponent"] }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OvertimeRoutingModule);
    return OvertimeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/overtime/overtime-supervisor/overtime-supervisor.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/home/overtime/overtime-supervisor/overtime-supervisor.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Over Time Supervisor\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"col-md-7 center\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n          <i class=\"text-danger\">*</i>\r\n        </label>\r\n\r\n        <div class=\"input-group col-sm-8\">\r\n          <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n              <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n        </label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Department\">\r\n        </div>\r\n      </div>\r\n      <div class=\"border\">\r\n        <br/>\r\n        <div class=\"form-group row \">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Id\r\n            <i class=\"text-danger\">*</i>\r\n          </label>\r\n\r\n          <div class=\"input-group col-sm-8\">\r\n            <input class=\"form-control\" name=\"\" placeholder=\"Employee-Id\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-save\"> Save</span>\r\n          </button>\r\n          <button type=\"clear\" class=\"btn btn-info\">\r\n              <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button type=\"\" class=\"btn btn-secondary \">\r\n            <span class=\"fas fa-window-close\"> Close</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/overtime/overtime-supervisor/overtime-supervisor.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/home/overtime/overtime-supervisor/overtime-supervisor.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvb3ZlcnRpbWUtc3VwZXJ2aXNvci9vdmVydGltZS1zdXBlcnZpc29yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/overtime/overtime-supervisor/overtime-supervisor.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/overtime/overtime-supervisor/overtime-supervisor.component.ts ***!
  \************************************************************************************/
/*! exports provided: OvertimeSupervisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeSupervisorComponent", function() { return OvertimeSupervisorComponent; });
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

var OvertimeSupervisorComponent = /** @class */ (function () {
    function OvertimeSupervisorComponent() {
    }
    OvertimeSupervisorComponent.prototype.ngOnInit = function () {
    };
    OvertimeSupervisorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overtime-supervisor',
            template: __webpack_require__(/*! ./overtime-supervisor.component.html */ "./src/app/home/overtime/overtime-supervisor/overtime-supervisor.component.html"),
            styles: [__webpack_require__(/*! ./overtime-supervisor.component.scss */ "./src/app/home/overtime/overtime-supervisor/overtime-supervisor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OvertimeSupervisorComponent);
    return OvertimeSupervisorComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/overtime.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/overtime/overtime.module.ts ***!
  \**************************************************/
/*! exports provided: OvertimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeModule", function() { return OvertimeModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _overtime_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overtime-routing.module */ "./src/app/home/overtime/overtime-routing.module.ts");
/* harmony import */ var _overtime_supervisor_overtime_supervisor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overtime-supervisor/overtime-supervisor.component */ "./src/app/home/overtime/overtime-supervisor/overtime-supervisor.component.ts");
/* harmony import */ var _application_for_overtime_application_for_overtime_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application-for-overtime/application-for-overtime.component */ "./src/app/home/overtime/application-for-overtime/application-for-overtime.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _overtime_approve_overtime_approve_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overtime-approve/overtime-approve.component */ "./src/app/home/overtime/overtime-approve/overtime-approve.component.ts");
/* harmony import */ var _overtime_approve_by_hr_overtime_approve_by_hr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overtime-approve-by-hr/overtime-approve-by-hr.component */ "./src/app/home/overtime/overtime-approve-by-hr/overtime-approve-by-hr.component.ts");
/* harmony import */ var _ot_method_ot_method_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ot-method/ot-method.component */ "./src/app/home/overtime/ot-method/ot-method.component.ts");
/* harmony import */ var _entitle_over_time_entitle_over_time_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entitle-over-time/entitle-over-time.component */ "./src/app/home/overtime/entitle-over-time/entitle-over-time.component.ts");
/* harmony import */ var _update_over_time_allowance_update_over_time_allowance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update-over-time-allowance/update-over-time-allowance.component */ "./src/app/home/overtime/update-over-time-allowance/update-over-time-allowance.component.ts");
/* harmony import */ var _assign_over_time_requisition_assign_over_time_requisition_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assign-over-time-requisition/assign-over-time-requisition.component */ "./src/app/home/overtime/assign-over-time-requisition/assign-over-time-requisition.component.ts");
/* harmony import */ var _update_over_time_requisition_update_over_time_requisition_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-over-time-requisition/update-over-time-requisition.component */ "./src/app/home/overtime/update-over-time-requisition/update-over-time-requisition.component.ts");
/* harmony import */ var _over_time_requisition_approve_over_time_requisition_approve_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./over-time-requisition-approve/over-time-requisition-approve.component */ "./src/app/home/overtime/over-time-requisition-approve/over-time-requisition-approve.component.ts");
/* harmony import */ var _over_time_condition_setup_over_time_condition_setup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./over-time-condition-setup/over-time-condition-setup.component */ "./src/app/home/overtime/over-time-condition-setup/over-time-condition-setup.component.ts");
/* harmony import */ var _over_time_setup_over_time_setup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./over-time-setup/over-time-setup.component */ "./src/app/home/overtime/over-time-setup/over-time-setup.component.ts");
/* harmony import */ var _assign_over_time_assign_over_time_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assign-over-time/assign-over-time.component */ "./src/app/home/overtime/assign-over-time/assign-over-time.component.ts");
/* harmony import */ var _over_time_auto_over_time_auto_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./over-time-auto/over-time-auto.component */ "./src/app/home/overtime/over-time-auto/over-time-auto.component.ts");
/* harmony import */ var _over_time_menual_over_time_menual_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./over-time-menual/over-time-menual.component */ "./src/app/home/overtime/over-time-menual/over-time-menual.component.ts");
/* harmony import */ var _over_time_payment_auto_over_time_payment_auto_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./over-time-payment-auto/over-time-payment-auto.component */ "./src/app/home/overtime/over-time-payment-auto/over-time-payment-auto.component.ts");
/* harmony import */ var _over_time_payment_manual_over_time_payment_manual_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./over-time-payment-manual/over-time-payment-manual.component */ "./src/app/home/overtime/over-time-payment-manual/over-time-payment-manual.component.ts");
/* harmony import */ var _over_time_report_over_time_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./over-time-report/over-time-report.component */ "./src/app/home/overtime/over-time-report/over-time-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var OvertimeModule = /** @class */ (function () {
    function OvertimeModule() {
    }
    OvertimeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _overtime_supervisor_overtime_supervisor_component__WEBPACK_IMPORTED_MODULE_4__["OvertimeSupervisorComponent"],
                _application_for_overtime_application_for_overtime_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationForOvertimeComponent"],
                _overtime_approve_overtime_approve_component__WEBPACK_IMPORTED_MODULE_7__["OvertimeApproveComponent"],
                _overtime_approve_by_hr_overtime_approve_by_hr_component__WEBPACK_IMPORTED_MODULE_8__["OvertimeApproveByHrComponent"],
                _ot_method_ot_method_component__WEBPACK_IMPORTED_MODULE_9__["OtMethodComponent"],
                _entitle_over_time_entitle_over_time_component__WEBPACK_IMPORTED_MODULE_10__["EntitleOverTimeComponent"],
                _update_over_time_allowance_update_over_time_allowance_component__WEBPACK_IMPORTED_MODULE_11__["UpdateOverTimeAllowanceComponent"],
                _assign_over_time_requisition_assign_over_time_requisition_component__WEBPACK_IMPORTED_MODULE_12__["AssignOverTimeRequisitionComponent"],
                _update_over_time_requisition_update_over_time_requisition_component__WEBPACK_IMPORTED_MODULE_13__["UpdateOverTimeRequisitionComponent"],
                _over_time_requisition_approve_over_time_requisition_approve_component__WEBPACK_IMPORTED_MODULE_14__["OverTimeRequisitionApproveComponent"],
                _over_time_condition_setup_over_time_condition_setup_component__WEBPACK_IMPORTED_MODULE_15__["OverTimeConditionSetupComponent"],
                _over_time_setup_over_time_setup_component__WEBPACK_IMPORTED_MODULE_16__["OverTimeSetupComponent"],
                _assign_over_time_assign_over_time_component__WEBPACK_IMPORTED_MODULE_17__["AssignOverTimeComponent"],
                _over_time_auto_over_time_auto_component__WEBPACK_IMPORTED_MODULE_18__["OverTimeAutoComponent"],
                _over_time_menual_over_time_menual_component__WEBPACK_IMPORTED_MODULE_19__["OverTimeMenualComponent"],
                _over_time_payment_auto_over_time_payment_auto_component__WEBPACK_IMPORTED_MODULE_20__["OverTimePaymentAutoComponent"],
                _over_time_payment_manual_over_time_payment_manual_component__WEBPACK_IMPORTED_MODULE_21__["OverTimePaymentManualComponent"],
                _over_time_report_over_time_report_component__WEBPACK_IMPORTED_MODULE_22__["OverTimeReportComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _overtime_routing_module__WEBPACK_IMPORTED_MODULE_3__["OvertimeRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
            ]
        })
    ], OvertimeModule);
    return OvertimeModule;
}());



/***/ }),

/***/ "./src/app/home/overtime/update-over-time-allowance/update-over-time-allowance.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/overtime/update-over-time-allowance/update-over-time-allowance.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Update Over Time Allowance\r\n  </h4>\r\n  <div class=\"container\">\r\n    <br />\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Office Branch\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Unit\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Id\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Id\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Location\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Line\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n          </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"custom-select \">\r\n              <option>1 </option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n        <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-file-download\"></span>Get Employees\r\n        </button>\r\n        <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span>Refresh\r\n          </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Code</th>\r\n            <th>Employee Name</th>\r\n            <th>Department</th>\r\n            <th>Designation</th>\r\n            <th></th>\r\n            <th></th>\r\n            <th>Delete</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n          <tr>\r\n\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n          <tr>\r\n\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"col-md-5\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-4 text-sm-right\">Total Employee\r\n              </label>\r\n            </div> \r\n      </div>\r\n      <div class=\"col-md-7\">\r\n          <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n              <button type=\"\" class=\"btn btn-secondary \">\r\n                <span class=\"fas fa-window-close\"> Close</span>\r\n              </button>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/overtime/update-over-time-allowance/update-over-time-allowance.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/overtime/update-over-time-allowance/update-over-time-allowance.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvdXBkYXRlLW92ZXItdGltZS1hbGxvd2FuY2UvdXBkYXRlLW92ZXItdGltZS1hbGxvd2FuY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/overtime/update-over-time-allowance/update-over-time-allowance.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/home/overtime/update-over-time-allowance/update-over-time-allowance.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: UpdateOverTimeAllowanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOverTimeAllowanceComponent", function() { return UpdateOverTimeAllowanceComponent; });
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

var UpdateOverTimeAllowanceComponent = /** @class */ (function () {
    function UpdateOverTimeAllowanceComponent() {
    }
    UpdateOverTimeAllowanceComponent.prototype.ngOnInit = function () {
    };
    UpdateOverTimeAllowanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-over-time-allowance',
            template: __webpack_require__(/*! ./update-over-time-allowance.component.html */ "./src/app/home/overtime/update-over-time-allowance/update-over-time-allowance.component.html"),
            styles: [__webpack_require__(/*! ./update-over-time-allowance.component.scss */ "./src/app/home/overtime/update-over-time-allowance/update-over-time-allowance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateOverTimeAllowanceComponent);
    return UpdateOverTimeAllowanceComponent;
}());



/***/ }),

/***/ "./src/app/home/overtime/update-over-time-requisition/update-over-time-requisition.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/home/overtime/update-over-time-requisition/update-over-time-requisition.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Update Over Time Requisition\r\n    </h4>\r\n    <div class=\"container\">\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Office Branch\r\n            </label>\r\n  \r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Unit\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Department\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">OT Date\r\n  \r\n            </label>\r\n  \r\n            <div class=\"input-group col-sm-8\">\r\n              <input class=\"form-control\" name=\"dp1\" placeholder=\"dd-mm-yyyy\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Shift\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Approved By\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Approved By\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Location\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Line\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Designation\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"custom-select \">\r\n                <option>1 </option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Id\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Employee Id\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">OT Hours\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"OT Hours\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n          <button type=\"\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-file-download\"></span> Get Employees\r\n          </button>\r\n          <button type=\"\" class=\"btn btn-info \">\r\n            <span class=\"ion ion-ios-refresh\"> Refresh</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th><label class=\"custom-control custom-checkbox m-0\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\">\r\n                      <span class=\"custom-control-label\"></span>\r\n                    </label>Select</th>\r\n                  <th>Code</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Department</th>\r\n                  <th>Designation</th>\r\n                  <th>Ot hours</th>\r\n                  <th>shift</th>\r\n                  <th>Delete</th>\r\n                  <th></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th> <label class=\"custom-control custom-checkbox m-0\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\">\r\n                      <span class=\"custom-control-label\"></span>\r\n                    </label></th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td>0</td>\r\n                  <td></td>\r\n                  <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                </tr>\r\n                <tr>\r\n                  <th> <label class=\"custom-control custom-checkbox m-0\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\">\r\n                      <span class=\"custom-control-label\"></span>\r\n                    </label></th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td>0</td>\r\n                  <td></td>\r\n                  <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                </tr>\r\n                <tr>\r\n                  <th> <label class=\"custom-control custom-checkbox m-0\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\">\r\n                      <span class=\"custom-control-label\"></span>\r\n                    </label></th>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td>0</td>\r\n                  <td></td>\r\n                  <td><button type=\"\" class=\"btn btn-danger\"><span class=\"fas fa-trash\"></span></button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-form-label col-sm-4 text-sm-right\">Total Employee\r\n                    </label>\r\n                  </div> \r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n                    <button type=\"\" class=\"btn btn-success\">\r\n                        <span class=\"fas fa-edit\"></span>Update\r\n                    </button>\r\n                    <button type=\"\" class=\"btn btn-secondary \">\r\n                      <span class=\"fas fa-window-close\"> Close</span>\r\n                    </button>\r\n                  </div>\r\n            </div>\r\n            \r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/overtime/update-over-time-requisition/update-over-time-requisition.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/home/overtime/update-over-time-requisition/update-over-time-requisition.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3ZlcnRpbWUvdXBkYXRlLW92ZXItdGltZS1yZXF1aXNpdGlvbi91cGRhdGUtb3Zlci10aW1lLXJlcXVpc2l0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/overtime/update-over-time-requisition/update-over-time-requisition.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/home/overtime/update-over-time-requisition/update-over-time-requisition.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: UpdateOverTimeRequisitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOverTimeRequisitionComponent", function() { return UpdateOverTimeRequisitionComponent; });
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

var UpdateOverTimeRequisitionComponent = /** @class */ (function () {
    function UpdateOverTimeRequisitionComponent() {
    }
    UpdateOverTimeRequisitionComponent.prototype.ngOnInit = function () {
    };
    UpdateOverTimeRequisitionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-over-time-requisition',
            template: __webpack_require__(/*! ./update-over-time-requisition.component.html */ "./src/app/home/overtime/update-over-time-requisition/update-over-time-requisition.component.html"),
            styles: [__webpack_require__(/*! ./update-over-time-requisition.component.scss */ "./src/app/home/overtime/update-over-time-requisition/update-over-time-requisition.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateOverTimeRequisitionComponent);
    return UpdateOverTimeRequisitionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-overtime-overtime-module.js.map