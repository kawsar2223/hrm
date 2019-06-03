(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-incentive-incentive-module"],{

/***/ "./src/app/home/incentive/arrear-payment-auto/arrear-payment-auto.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/home/incentive/arrear-payment-auto/arrear-payment-auto.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"startMonth\" class=\"col-md-4\">Start Month</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"startMonth\" id=\"startMonth\" class=\"form-control\">\r\n                <option value=\"\">Select Start Month</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"compareMonth\" class=\"col-md-4\">Compare Month</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"compareMonth\" id=\"compareMonth\" class=\"form-control\">\r\n                <option value=\"\">Select Compare Month</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"paymentMonth\" class=\"col-md-4\">Payment Month</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"paymentMonth\" id=\"paymentMonth\" class=\"form-control\">\r\n                <option value=\"\">Select Payment Month</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-4\" for=\"incrDate\">Increment Effective Date</label>\r\n            <div class=\"input-group col-md-8\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"incrDate\" name=\"incrDate\" ngbDatepicker\r\n                [(ngModel)]=\"incrDate\" [displayMonths]=\"1\" #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-4\" for=\"paymentDate\">Payment Date</label>\r\n            <div class=\"input-group col-md-8\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"paymentDate\" name=\"paymentDate\" ngbDatepicker\r\n                [(ngModel)]=\"paymentDate\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"demo-inline-spacing center\">\r\n              <button class=\"btn btn-success\">Auto Process Access</button>\r\n              <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/incentive/arrear-payment-auto/arrear-payment-auto.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/home/incentive/arrear-payment-auto/arrear-payment-auto.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jZW50aXZlL2FycmVhci1wYXltZW50LWF1dG8vYXJyZWFyLXBheW1lbnQtYXV0by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/incentive/arrear-payment-auto/arrear-payment-auto.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home/incentive/arrear-payment-auto/arrear-payment-auto.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ArrearPaymentAutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrearPaymentAutoComponent", function() { return ArrearPaymentAutoComponent; });
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


var ArrearPaymentAutoComponent = /** @class */ (function (_super) {
    __extends(ArrearPaymentAutoComponent, _super);
    function ArrearPaymentAutoComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Employee Arrear Information";
        return _this;
    }
    ArrearPaymentAutoComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    ArrearPaymentAutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arrear-payment-auto',
            template: __webpack_require__(/*! ./arrear-payment-auto.component.html */ "./src/app/home/incentive/arrear-payment-auto/arrear-payment-auto.component.html"),
            styles: [__webpack_require__(/*! ./arrear-payment-auto.component.scss */ "./src/app/home/incentive/arrear-payment-auto/arrear-payment-auto.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArrearPaymentAutoComponent);
    return ArrearPaymentAutoComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/incentive/arrear-payment-manual/arrear-payment-manual.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/incentive/arrear-payment-manual/arrear-payment-manual.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"paymentMonth\" class=\"col-md-4\">Payment Month</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"paymentMonth\" id=\"paymentMonth\" class=\"form-control\">\r\n                <option value=\"\">Select Payment Month</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-4\" for=\"paymentDate\">Payment Date</label>\r\n            <div class=\"input-group col-md-8\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"paymentDate\" name=\"paymentDate\" ngbDatepicker\r\n                [(ngModel)]=\"paymentDate\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"type\" class=\"col-md-4\">Type</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"type\" id=\"type\" class=\"form-control\">\r\n                <option value=\"\">Select Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Code</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Designation</th>\r\n                  <th>Department</th>\r\n                  <th>Amount</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing center\">\r\n        <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n        <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/incentive/arrear-payment-manual/arrear-payment-manual.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/incentive/arrear-payment-manual/arrear-payment-manual.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jZW50aXZlL2FycmVhci1wYXltZW50LW1hbnVhbC9hcnJlYXItcGF5bWVudC1tYW51YWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/incentive/arrear-payment-manual/arrear-payment-manual.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/incentive/arrear-payment-manual/arrear-payment-manual.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ArrearPaymentManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrearPaymentManualComponent", function() { return ArrearPaymentManualComponent; });
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


var ArrearPaymentManualComponent = /** @class */ (function (_super) {
    __extends(ArrearPaymentManualComponent, _super);
    function ArrearPaymentManualComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Employee Arrear Information";
        return _this;
    }
    ArrearPaymentManualComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    ArrearPaymentManualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arrear-payment-manual',
            template: __webpack_require__(/*! ./arrear-payment-manual.component.html */ "./src/app/home/incentive/arrear-payment-manual/arrear-payment-manual.component.html"),
            styles: [__webpack_require__(/*! ./arrear-payment-manual.component.scss */ "./src/app/home/incentive/arrear-payment-manual/arrear-payment-manual.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArrearPaymentManualComponent);
    return ArrearPaymentManualComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/incentive/encashment-payment/encashment-payment.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/home/incentive/encashment-payment/encashment-payment.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-header\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"branch\" class=\"col-md-4\">Branch</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"branch\" id=\"branch\" class=\"form-control\">\r\n                <option value=\"\">Select Branch</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"department\" class=\"col-md-4\">Department</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"department\" id=\"department\" class=\"form-control\">\r\n                <option value=\"\">Select Department</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"period\" class=\"col-md-4\">Salary Period</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"salaryPeriod\" id=\"period\" class=\"form-control\">\r\n                <option value=\"\">Select Period</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"toYear\" class=\"col-md-4\">Carry to Year</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"number\" name=\"toYear\" id=\"toYear\" class=\"form-control\" placeholder=\"Carry to Year\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"bonusType\" class=\"col-md-4\">Bonus Type</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"bonusType\" id=\"bonusType\" class=\"form-control\">\r\n                <option value=\"\">Select Bonus Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"bonusHead\" class=\"col-md-4\">Bonus Head</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"bonusHead\" id=\"bonusHead\" class=\"form-control\">\r\n                <option value=\"\">Select Bonus Head</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"paymentPeriod\" class=\"col-md-4\">Payment Period</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"salaryPeriod\" id=\"period\" class=\"form-control\">\r\n                <option value=\"\">Select Period</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-4\" for=\"paymentDate\">Payment Date</label>\r\n            <div class=\"input-group col-md-8\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" value=\"datetime\" id=\"paymentDate\" name=\"paymentDate\"\r\n                ngbDatepicker [(ngModel)]=\"paymentDate\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary center\">Show Data</button>\r\n      </div>\r\n    </form>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Code</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Designation</th>\r\n                  <th>Department</th>\r\n                  <th>Amount</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing center\">\r\n        <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n        <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/incentive/encashment-payment/encashment-payment.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/home/incentive/encashment-payment/encashment-payment.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jZW50aXZlL2VuY2FzaG1lbnQtcGF5bWVudC9lbmNhc2htZW50LXBheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/incentive/encashment-payment/encashment-payment.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/incentive/encashment-payment/encashment-payment.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EncashmentPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncashmentPaymentComponent", function() { return EncashmentPaymentComponent; });
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


var EncashmentPaymentComponent = /** @class */ (function (_super) {
    __extends(EncashmentPaymentComponent, _super);
    function EncashmentPaymentComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Leave Encashment Payment";
        return _this;
    }
    EncashmentPaymentComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    EncashmentPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-encashment-payment',
            template: __webpack_require__(/*! ./encashment-payment.component.html */ "./src/app/home/incentive/encashment-payment/encashment-payment.component.html"),
            styles: [__webpack_require__(/*! ./encashment-payment.component.scss */ "./src/app/home/incentive/encashment-payment/encashment-payment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EncashmentPaymentComponent);
    return EncashmentPaymentComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/incentive/incentive-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/home/incentive/incentive-routing.module.ts ***!
  \************************************************************/
/*! exports provided: IncentiveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveRoutingModule", function() { return IncentiveRoutingModule; });
/* harmony import */ var _arrear_payment_manual_arrear_payment_manual_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrear-payment-manual/arrear-payment-manual.component */ "./src/app/home/incentive/arrear-payment-manual/arrear-payment-manual.component.ts");
/* harmony import */ var _arrear_payment_auto_arrear_payment_auto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrear-payment-auto/arrear-payment-auto.component */ "./src/app/home/incentive/arrear-payment-auto/arrear-payment-auto.component.ts");
/* harmony import */ var _leave_payment_leave_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-payment/leave-payment.component */ "./src/app/home/incentive/leave-payment/leave-payment.component.ts");
/* harmony import */ var _leave_type_setup_leave_type_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave-type-setup/leave-type-setup.component */ "./src/app/home/incentive/leave-type-setup/leave-type-setup.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _leave_amount_setup_leave_amount_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leave-amount-setup/leave-amount-setup.component */ "./src/app/home/incentive/leave-amount-setup/leave-amount-setup.component.ts");
/* harmony import */ var _sales_commission_sales_commission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales-commission/sales-commission.component */ "./src/app/home/incentive/sales-commission/sales-commission.component.ts");
/* harmony import */ var _encashment_payment_encashment_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./encashment-payment/encashment-payment.component */ "./src/app/home/incentive/encashment-payment/encashment-payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var IncentiveRoutingModule = /** @class */ (function () {
    function IncentiveRoutingModule() {
    }
    IncentiveRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    { path: 'leave-type-setup', component: _leave_type_setup_leave_type_setup_component__WEBPACK_IMPORTED_MODULE_3__["LeaveTypeSetupComponent"] },
                    { path: 'leave-amount-setup', component: _leave_amount_setup_leave_amount_setup_component__WEBPACK_IMPORTED_MODULE_7__["LeaveAmountSetupComponent"] },
                    { path: 'leave-payment', component: _leave_payment_leave_payment_component__WEBPACK_IMPORTED_MODULE_2__["LeavePaymentComponent"] },
                    { path: 'sales-commission', component: _sales_commission_sales_commission_component__WEBPACK_IMPORTED_MODULE_8__["SalesCommissionComponent"] },
                    { path: 'encashment-payment', component: _encashment_payment_encashment_payment_component__WEBPACK_IMPORTED_MODULE_9__["EncashmentPaymentComponent"] },
                    { path: 'arrear-payment-auto', component: _arrear_payment_auto_arrear_payment_auto_component__WEBPACK_IMPORTED_MODULE_1__["ArrearPaymentAutoComponent"] },
                    { path: 'arrear-payment-manual', component: _arrear_payment_manual_arrear_payment_manual_component__WEBPACK_IMPORTED_MODULE_0__["ArrearPaymentManualComponent"] }
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], IncentiveRoutingModule);
    return IncentiveRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/incentive/incentive.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/incentive/incentive.module.ts ***!
  \****************************************************/
/*! exports provided: IncentiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveModule", function() { return IncentiveModule; });
/* harmony import */ var _arrear_payment_auto_arrear_payment_auto_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrear-payment-auto/arrear-payment-auto.component */ "./src/app/home/incentive/arrear-payment-auto/arrear-payment-auto.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _incentive_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./incentive-routing.module */ "./src/app/home/incentive/incentive-routing.module.ts");
/* harmony import */ var _leave_type_setup_leave_type_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leave-type-setup/leave-type-setup.component */ "./src/app/home/incentive/leave-type-setup/leave-type-setup.component.ts");
/* harmony import */ var _leave_amount_setup_leave_amount_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leave-amount-setup/leave-amount-setup.component */ "./src/app/home/incentive/leave-amount-setup/leave-amount-setup.component.ts");
/* harmony import */ var _leave_payment_leave_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leave-payment/leave-payment.component */ "./src/app/home/incentive/leave-payment/leave-payment.component.ts");
/* harmony import */ var _sales_commission_sales_commission_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sales-commission/sales-commission.component */ "./src/app/home/incentive/sales-commission/sales-commission.component.ts");
/* harmony import */ var _encashment_payment_encashment_payment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./encashment-payment/encashment-payment.component */ "./src/app/home/incentive/encashment-payment/encashment-payment.component.ts");
/* harmony import */ var _arrear_payment_manual_arrear_payment_manual_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./arrear-payment-manual/arrear-payment-manual.component */ "./src/app/home/incentive/arrear-payment-manual/arrear-payment-manual.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var IncentiveModule = /** @class */ (function () {
    function IncentiveModule() {
    }
    IncentiveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _leave_type_setup_leave_type_setup_component__WEBPACK_IMPORTED_MODULE_6__["LeaveTypeSetupComponent"],
                _leave_amount_setup_leave_amount_setup_component__WEBPACK_IMPORTED_MODULE_7__["LeaveAmountSetupComponent"],
                _leave_payment_leave_payment_component__WEBPACK_IMPORTED_MODULE_8__["LeavePaymentComponent"],
                _sales_commission_sales_commission_component__WEBPACK_IMPORTED_MODULE_9__["SalesCommissionComponent"],
                _encashment_payment_encashment_payment_component__WEBPACK_IMPORTED_MODULE_10__["EncashmentPaymentComponent"],
                _arrear_payment_auto_arrear_payment_auto_component__WEBPACK_IMPORTED_MODULE_0__["ArrearPaymentAutoComponent"],
                _arrear_payment_manual_arrear_payment_manual_component__WEBPACK_IMPORTED_MODULE_11__["ArrearPaymentManualComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _incentive_routing_module__WEBPACK_IMPORTED_MODULE_5__["IncentiveRoutingModule"]
            ]
        })
    ], IncentiveModule);
    return IncentiveModule;
}());



/***/ }),

/***/ "./src/app/home/incentive/leave-amount-setup/leave-amount-setup.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/home/incentive/leave-amount-setup/leave-amount-setup.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n    <div class=\"card-body\">\r\n      <form action=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 center\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"empType\" class=\"col-md-4\">Employee Type</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"employeeType\" id=\"empType\" class=\"form-control\">\r\n                  <option value=\"\">Select Employee Type</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"allowance\" class=\"col-md-4\">Allowances</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"allowance\" id=\"allowance\" class=\"form-control\">\r\n                  <option value=\"\">Select Allowances</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"numberOfTimes\" class=\"col-md-4\">Number of Times</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"numberOfTimes\" id=\"numberOfTimes\" class=\"form-control\">\r\n                  <option value=\"\">Select Number of Type</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"form-label col-md-4\" for=\"date\">Date</label>\r\n              <div class=\"input-group col-md-8\">\r\n                <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"date\" name=\"date\" ngbDatepicker\r\n                  [(ngModel)]=\"date\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                    <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"note\" class=\"col-md-4\">Note</label>\r\n                <div class=\"col-md-8\">\r\n                  <textarea name=\"note\" id=\"note\" rows=\"2\" class=\"form-control\"></textarea>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"center demo-inline-spacing\">\r\n              <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n              <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n              <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n            </div>\r\n          </div>\r\n      </form>\r\n      <div class=\"row\">\r\n          <div class=\"card mb-4 center\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  Per page: &nbsp;\r\n                  <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                    class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                    <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                    class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Employee Type</th>\r\n                      <th>Salary Head</th>\r\n                      <th>Number</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- Pagination -->\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/incentive/leave-amount-setup/leave-amount-setup.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/home/incentive/leave-amount-setup/leave-amount-setup.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jZW50aXZlL2xlYXZlLWFtb3VudC1zZXR1cC9sZWF2ZS1hbW91bnQtc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/incentive/leave-amount-setup/leave-amount-setup.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/incentive/leave-amount-setup/leave-amount-setup.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LeaveAmountSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveAmountSetupComponent", function() { return LeaveAmountSetupComponent; });
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


var LeaveAmountSetupComponent = /** @class */ (function (_super) {
    __extends(LeaveAmountSetupComponent, _super);
    function LeaveAmountSetupComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Leave Encashment Amount Setup";
        return _this;
    }
    LeaveAmountSetupComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    LeaveAmountSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-amount-setup',
            template: __webpack_require__(/*! ./leave-amount-setup.component.html */ "./src/app/home/incentive/leave-amount-setup/leave-amount-setup.component.html"),
            styles: [__webpack_require__(/*! ./leave-amount-setup.component.scss */ "./src/app/home/incentive/leave-amount-setup/leave-amount-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaveAmountSetupComponent);
    return LeaveAmountSetupComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/incentive/leave-payment/leave-payment.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/home/incentive/leave-payment/leave-payment.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-header\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"branch\" class=\"col-md-4\">Branch</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"branch\" id=\"branch\" class=\"form-control\">\r\n                <option value=\"\">Select Branch</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"department\" class=\"col-md-4\">Department</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"department\" id=\"department\" class=\"form-control\">\r\n                <option value=\"\">Select Department</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"period\" class=\"col-md-4\">Salary Period</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"salaryPeriod\" id=\"period\" class=\"form-control\">\r\n                <option value=\"\">Select Period</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"toYear\" class=\"col-md-4\">Substitute to Year</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"number\" name=\"toYear\" id=\"toYear\" class=\"form-control\" placeholder=\"Substitute to Year\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"bonusType\" class=\"col-md-4\">Bonus Type</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"bonusType\" id=\"bonusType\" class=\"form-control\">\r\n                <option value=\"\">Select Bonus Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"bonusHead\" class=\"col-md-4\">Bonus Head</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"bonusHead\" id=\"bonusHead\" class=\"form-control\">\r\n                <option value=\"\">Select Bonus Head</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"paymentPeriod\" class=\"col-md-4\"></label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"salaryPeriod\" id=\"period\" class=\"form-control\">\r\n                <option value=\"\">Select Period</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-4\" for=\"paymentDate\">Payment Date</label>\r\n            <div class=\"input-group col-md-8\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"paymentDate\" name=\"paymentDate\" ngbDatepicker\r\n                [(ngModel)]=\"paymentDate\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-success center\">Show Data</button>\r\n      </div>\r\n    </form>\r\n    <div class=\"row\">\r\n        <div class=\"card mb-4 center\">\r\n          <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                Per page: &nbsp;\r\n                <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                  class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                  <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col\">\r\n                <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                  class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body py-0\">\r\n            <div class=\"row\">\r\n              <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Code</th>\r\n                    <th>Employee Name</th>\r\n                    <th>Designation</th>\r\n                    <th>Department</th>\r\n                    <th>Amount</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"row\">\r\n              <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n              </div>\r\n              <div class=\"col-sm pt-3\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                  (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                </ngb-pagination>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- / Pagination -->\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"demo-inline-spacing center\">\r\n          <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n          <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/incentive/leave-payment/leave-payment.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/incentive/leave-payment/leave-payment.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jZW50aXZlL2xlYXZlLXBheW1lbnQvbGVhdmUtcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/incentive/leave-payment/leave-payment.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/incentive/leave-payment/leave-payment.component.ts ***!
  \*************************************************************************/
/*! exports provided: LeavePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavePaymentComponent", function() { return LeavePaymentComponent; });
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


var LeavePaymentComponent = /** @class */ (function (_super) {
    __extends(LeavePaymentComponent, _super);
    function LeavePaymentComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Substitute Leave Payment";
        return _this;
    }
    LeavePaymentComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    LeavePaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-payment',
            template: __webpack_require__(/*! ./leave-payment.component.html */ "./src/app/home/incentive/leave-payment/leave-payment.component.html"),
            styles: [__webpack_require__(/*! ./leave-payment.component.scss */ "./src/app/home/incentive/leave-payment/leave-payment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeavePaymentComponent);
    return LeavePaymentComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/incentive/leave-type-setup/leave-type-setup.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/incentive/leave-type-setup/leave-type-setup.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"empType\" class=\"col-md-4\">Employee Type</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"employeeType\" id=\"empType\" class=\"form-control\">\r\n                <option value=\"\">Select Employee Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"leaveType\" class=\"col-md-4\">Leave Type</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"leaveType\" id=\"leaveType\" class=\"form-control\">\r\n                <option value=\"\">Select Leave Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"numberOfTimes\" class=\"col-md-4\">Number of Times</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"numberOfTimes\" id=\"numberOfTimes\" class=\"form-control\">\r\n                <option value=\"\">Select Number of Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-4\" for=\"date\">Date</label>\r\n            <div class=\"input-group col-md-8\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"date\" name=\"date\" ngbDatepicker\r\n                [(ngModel)]=\"date\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"note\" class=\"col-md-4\">Note</label>\r\n            <div class=\"col-md-8\">\r\n              <textarea name=\"note\" id=\"note\" rows=\"2\" class=\"form-control\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"center demo-inline-spacing\">\r\n          <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n          <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Employee Type</th>\r\n                  <th>Leave Type Name</th>\r\n                  <th>Number</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/incentive/leave-type-setup/leave-type-setup.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/incentive/leave-type-setup/leave-type-setup.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jZW50aXZlL2xlYXZlLXR5cGUtc2V0dXAvbGVhdmUtdHlwZS1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/incentive/leave-type-setup/leave-type-setup.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/incentive/leave-type-setup/leave-type-setup.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LeaveTypeSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypeSetupComponent", function() { return LeaveTypeSetupComponent; });
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


var LeaveTypeSetupComponent = /** @class */ (function (_super) {
    __extends(LeaveTypeSetupComponent, _super);
    function LeaveTypeSetupComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Leave Encashment Leave Type Setup";
        return _this;
    }
    LeaveTypeSetupComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    LeaveTypeSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-type-setup',
            template: __webpack_require__(/*! ./leave-type-setup.component.html */ "./src/app/home/incentive/leave-type-setup/leave-type-setup.component.html"),
            styles: [__webpack_require__(/*! ./leave-type-setup.component.scss */ "./src/app/home/incentive/leave-type-setup/leave-type-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaveTypeSetupComponent);
    return LeaveTypeSetupComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/incentive/sales-commission/sales-commission.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/incentive/sales-commission/sales-commission.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-header\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"period\" class=\"col-md-4\">Period</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"period\" id=\"period\" class=\"form-control\">\r\n                <option value=\"\">Select Period</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"department\" class=\"col-md-4\">Department</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"department\" id=\"department\" class=\"form-control\">\r\n                <option value=\"\">Select Department</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"bonusType\" class=\"col-md-4\">Bonus Type</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"bonusType\" id=\"bonusType\" class=\"form-control\">\r\n                <option value=\"\">Select Bonus Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"commissionHead\" class=\"col-md-4\">Commission Head</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"commissionHead\" id=\"commissionHead\" class=\"form-control\">\r\n                <option value=\"\">Select Commission Head</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary center\">Show Data</button>\r\n      </div>\r\n    </form>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Code</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Designation</th>\r\n                  <th>Department</th>\r\n                  <th>Amount</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"demo-inline-spacing center\">\r\n        <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n        <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/incentive/sales-commission/sales-commission.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/incentive/sales-commission/sales-commission.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5jZW50aXZlL3NhbGVzLWNvbW1pc3Npb24vc2FsZXMtY29tbWlzc2lvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/incentive/sales-commission/sales-commission.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/incentive/sales-commission/sales-commission.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SalesCommissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesCommissionComponent", function() { return SalesCommissionComponent; });
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


var SalesCommissionComponent = /** @class */ (function (_super) {
    __extends(SalesCommissionComponent, _super);
    function SalesCommissionComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Employee Sales Commission Information";
        return _this;
    }
    SalesCommissionComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    SalesCommissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-commission',
            template: __webpack_require__(/*! ./sales-commission.component.html */ "./src/app/home/incentive/sales-commission/sales-commission.component.html"),
            styles: [__webpack_require__(/*! ./sales-commission.component.scss */ "./src/app/home/incentive/sales-commission/sales-commission.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesCommissionComponent);
    return SalesCommissionComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ })

}]);
//# sourceMappingURL=home-incentive-incentive-module.js.map