(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-settlement-settlement-module"],{

/***/ "./src/app/home/settlement/final-settlement/final-settlement.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/settlement/final-settlement/final-settlement.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"form-group row\">\r\n                <label for=\"empId\" class=\"\">Employee Id</label>\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" name=\"employeeId\" id=\"empId\" class=\"form-control\" placeholder=\"Employee Id\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                      <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div> \r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"salaryPeriod\" class=\"\">Salary Period</label>\r\n            <select name=\"salaryPeriod\" id=\"salaryPeriod\" class=\"form-control\">\r\n              <option value=\"\">Select Period</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"lastWorkingDate\" class=\"\">Last Working Date</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"lastWorkingDate\" name=\"lastWorkingDate\"\r\n                ngbDatepicker [(ngModel)]=\"date\" [displayMonths]=\"1\" #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary center\">Calculate</button>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <h6 class=\"card-header\">Payable to Employee Salary</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"form-group row\">\r\n                <label for=\"dueSalary\" class=\"col-md-6\">Dues Salary of Month</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"number\" name=\"dueSalary\" id=\"dueSalary\" class=\"form-control\"\r\n                    placeholder=\"Dues Salary of Month\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"noticePay\" class=\"col-md-6\">Notice Pay</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"number\" name=\"noticePay\" id=\"noticePay\" class=\"form-control\" placeholder=\"Notice Pay\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"elEncashment\" class=\"col-md-6\">Encashment of EL</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"text\" name=\"elEncashment\" id=\"elEncashment\" class=\"form-control\"\r\n                    placeholder=\"Encashment of EL\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"driverAllowance\" class=\"col-md-6\">Driver Allowance</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"text\" name=\"driverAllowance\" id=\"driverAllowance\" class=\"form-control\"\r\n                    placeholder=\"Driver Allowance\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\">\r\n            <h6 class=\"card-header\">Gratuity</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"form-group row\">\r\n                <label for=\"amount\" class=\"col-md-6\">Amount</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"number\" name=\"amount\" id=\"amount\" class=\"form-control\" placeholder=\"Amount\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\">\r\n            <h6 class=\"card-header\">Death Benefit</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"form-group row\">\r\n                <label for=\"amount\" class=\"col-md-6\">Amount</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"number\" name=\"amount\" id=\"amount\" class=\"form-control\" placeholder=\"Amount\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-md-6\">Exgratia</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"Exgratia\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\">\r\n            <h6 class=\"card-header\">Overtime and Shift Allowance</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"form-group row\">\r\n                <label for=\"\" class=\"\">Overtime/Shift-Allowance/Others</label>\r\n                <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"Overtime/Shift-Allowance/Others\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <h6 class=\"card-header\">Payable to Company</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"form-group row\">\r\n                <label for=\"compNoticePay\" class=\"col-md-6\">Notice Pay</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"number\" name=\"compNoticePay\" id=\"compNoticePay\" class=\"form-control\"\r\n                    placeholder=\"Notice Pay\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"excessSalary\" class=\"col-md-6\">Excess Salary</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"number\" name=\"excessSalary\" id=\"excessSalary\" class=\"form-control\"\r\n                    placeholder=\"Excess Salary\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"epsOutstanding\" class=\"col-md-6\">EPS Outstanding</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"text\" name=\"epsOutstanding\" id=\"epsOutstanding\" class=\"form-control\"\r\n                    placeholder=\"EPS Outstanding\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"billOutstanding\" class=\"col-md-6\">Mobile Bill Outstanding</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"text\" name=\"billOutstanding\" id=\"billOutstanding\" class=\"form-control\"\r\n                    placeholder=\"Mobile Bill Outstanding\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"iou\" class=\"col-md-6\">Advance to Staff and Others (IOU)</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"text\" name=\"iou\" id=\"iou\" class=\"form-control\" placeholder=\"Advance to Staff and Others\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"incomeTax\" class=\"col-md-6\">Income Tax</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"number\" name=\"incomeTax\" id=\"incomeTax\" class=\"form-control\" placeholder=\"Income Tax\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"providentFund\" class=\"col-md-6\">WPPF Portion Provident Fund</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"number\" name=\"providentFund\" id=\"providentFund\" class=\"form-control\"\r\n                    placeholder=\"WPPF Portion Provident Fund\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"ownContribution\" class=\"col-md-6\">Own Contribution</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"number\" name=\"ownContribution\" id=\"ownContribution\" class=\"form-control\"\r\n                    placeholder=\"Own Contribution\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"compContribution\" class=\"col-md-6\">Company Contribution</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"number\" name=\"compContribution\" id=\"compContribution\" class=\"form-control\"\r\n                    placeholder=\"Comp Contribution\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\">\r\n            <h6 class=\"card-header\">Less</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"form-group row\">\r\n                <label for=\"loanAdjust\" class=\"col-md-6\">Loan Adjusted</label>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"number\" name=\"loanAdjust\" id=\"loanAdjust\" class=\"form-control\" placeholder=\"Loan Adjusted\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                  <label for=\"interestAdjust\" class=\"col-md-6\">Interested Adjusted</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"number\" name=\"interestAdjust\" id=\"interestAdjust\" class=\"form-control\" placeholder=\"Interest Adjusted\">\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n          <div class=\"center demo-inline-spacing\">\r\n            <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n            <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Clear</button>\r\n            <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/settlement/final-settlement/final-settlement.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/settlement/final-settlement/final-settlement.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2V0dGxlbWVudC9maW5hbC1zZXR0bGVtZW50L2ZpbmFsLXNldHRsZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/settlement/final-settlement/final-settlement.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/settlement/final-settlement/final-settlement.component.ts ***!
  \********************************************************************************/
/*! exports provided: FinalSettlementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalSettlementComponent", function() { return FinalSettlementComponent; });
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

var FinalSettlementComponent = /** @class */ (function () {
    function FinalSettlementComponent() {
        this.title = "Final Settlement";
    }
    FinalSettlementComponent.prototype.ngOnInit = function () {
    };
    FinalSettlementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-final-settlement',
            template: __webpack_require__(/*! ./final-settlement.component.html */ "./src/app/home/settlement/final-settlement/final-settlement.component.html"),
            styles: [__webpack_require__(/*! ./final-settlement.component.scss */ "./src/app/home/settlement/final-settlement/final-settlement.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FinalSettlementComponent);
    return FinalSettlementComponent;
}());



/***/ }),

/***/ "./src/app/home/settlement/gratuity-setup/gratuity-setup.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/home/settlement/gratuity-setup/gratuity-setup.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"empType\" class=\"col-md-4\">Employee Type</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"employeeType\" id=\"empType\" class=\"form-control\">\r\n                <option value=\"\">Select Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"allowances\" class=\"col-md-4\">Allowances</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"allowances\" id=\"allowances\" class=\"form-control\">\r\n                <option value=\"\">Select Allowances</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"numOfAllowance\" class=\"col-md-4\">Number of Allowance</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"number\" name=\"numOfAllowance\" id=\"numOfAllowance\" class=\"form-control\"\r\n                placeholder=\"Number of Allowance\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"date\" class=\"col-md-4\">Date</label>\r\n            <div class=\"input-group col-md-8\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"date\" name=\"date\" ngbDatepicker\r\n                [(ngModel)]=\"date\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"note\" class=\"col-md-4\">Note</label>\r\n            <div class=\"col-md-8\">\r\n              <textarea name=\"note\" id=\"note\" rows=\"2\" class=\"form-control\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"center demo-inline-spacing\">\r\n          <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n          <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Employee Type</th>\r\n                  <th>Salary Head</th>\r\n                  <th>Number of Allowance</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/settlement/gratuity-setup/gratuity-setup.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/settlement/gratuity-setup/gratuity-setup.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2V0dGxlbWVudC9ncmF0dWl0eS1zZXR1cC9ncmF0dWl0eS1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/settlement/gratuity-setup/gratuity-setup.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/settlement/gratuity-setup/gratuity-setup.component.ts ***!
  \****************************************************************************/
/*! exports provided: GratuitySetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GratuitySetupComponent", function() { return GratuitySetupComponent; });
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


var GratuitySetupComponent = /** @class */ (function (_super) {
    __extends(GratuitySetupComponent, _super);
    function GratuitySetupComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Gratuity Setup";
        return _this;
    }
    GratuitySetupComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    GratuitySetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gratuity-setup',
            template: __webpack_require__(/*! ./gratuity-setup.component.html */ "./src/app/home/settlement/gratuity-setup/gratuity-setup.component.html"),
            styles: [__webpack_require__(/*! ./gratuity-setup.component.scss */ "./src/app/home/settlement/gratuity-setup/gratuity-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GratuitySetupComponent);
    return GratuitySetupComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/settlement/gratuity-year-setup/gratuity-year-setup.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/home/settlement/gratuity-year-setup/gratuity-year-setup.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n    <div class=\"card-body\">\r\n      <form action=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 center\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"empType\" class=\"col-md-4\">Employee Type</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"employeeType\" id=\"empType\" class=\"form-control\">\r\n                  <option value=\"\">Select Type</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"year\" class=\"col-md-4\">Year</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"number\" name=\"year\" id=\"year\" class=\"form-control\"\r\n                  placeholder=\"Year\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"date\" class=\"col-md-4\">Date</label>\r\n              <div class=\"input-group col-md-8\">\r\n                <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"date\" name=\"date\" ngbDatepicker\r\n                  [(ngModel)]=\"date\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                    <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"note\" class=\"col-md-4\">Note</label>\r\n              <div class=\"col-md-8\">\r\n                <textarea name=\"note\" id=\"note\" rows=\"2\" class=\"form-control\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"center demo-inline-spacing\">\r\n              <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n              <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n              <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n            </div>\r\n          </div>\r\n      </form>\r\n      <div class=\"row\">\r\n          <div class=\"card mb-4 center\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  Per page: &nbsp;\r\n                  <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                    class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                    <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                    class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Employee Type</th>\r\n                      <th>Years</th>\r\n                      <th>Note</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- Pagination -->\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/settlement/gratuity-year-setup/gratuity-year-setup.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/settlement/gratuity-year-setup/gratuity-year-setup.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2V0dGxlbWVudC9ncmF0dWl0eS15ZWFyLXNldHVwL2dyYXR1aXR5LXllYXItc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/settlement/gratuity-year-setup/gratuity-year-setup.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/settlement/gratuity-year-setup/gratuity-year-setup.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GratuityYearSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GratuityYearSetupComponent", function() { return GratuityYearSetupComponent; });
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


var GratuityYearSetupComponent = /** @class */ (function (_super) {
    __extends(GratuityYearSetupComponent, _super);
    function GratuityYearSetupComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Gratuity Year Setup";
        return _this;
    }
    GratuityYearSetupComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    GratuityYearSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gratuity-year-setup',
            template: __webpack_require__(/*! ./gratuity-year-setup.component.html */ "./src/app/home/settlement/gratuity-year-setup/gratuity-year-setup.component.html"),
            styles: [__webpack_require__(/*! ./gratuity-year-setup.component.scss */ "./src/app/home/settlement/gratuity-year-setup/gratuity-year-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GratuityYearSetupComponent);
    return GratuityYearSetupComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/settlement/notice-day-setup/notice-day-setup.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/settlement/notice-day-setup/notice-day-setup.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"empType\" class=\"col-md-4\">Employee Type</label>\r\n            <div class=\"col-md-8\">\r\n              <select name=\"employeeType\" id=\"empType\" class=\"form-control\">\r\n                <option value=\"\">Select Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"daysForCompany\" class=\"col-md-4\">Days For Company</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"number\" name=\"daysForCompany\" id=\"daysForCompany\" class=\"form-control\"\r\n                placeholder=\"Days for Company\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"daysForEmp\" class=\"col-md-4\">Days For Employee</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"number\" name=\"daysForEmployee\" id=\"daysForEmp\" class=\"form-control\"\r\n                placeholder=\"Days for Employee\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"date\" class=\"col-md-4\">Date</label>\r\n            <div class=\"input-group col-md-8\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"date\" name=\"date\" ngbDatepicker\r\n                [(ngModel)]=\"date\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"note\" class=\"col-md-4\">Note</label>\r\n            <div class=\"col-md-8\">\r\n              <textarea name=\"note\" id=\"note\" rows=\"2\" class=\"form-control\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"center demo-inline-spacing\">\r\n          <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n          <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"row\">\r\n      <div class=\"card mb-4 center\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body py-0\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Employee Type</th>\r\n                  <th>Days</th>\r\n                  <th>Note</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- Pagination -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/settlement/notice-day-setup/notice-day-setup.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/settlement/notice-day-setup/notice-day-setup.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2V0dGxlbWVudC9ub3RpY2UtZGF5LXNldHVwL25vdGljZS1kYXktc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/settlement/notice-day-setup/notice-day-setup.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/settlement/notice-day-setup/notice-day-setup.component.ts ***!
  \********************************************************************************/
/*! exports provided: NoticeDaySetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeDaySetupComponent", function() { return NoticeDaySetupComponent; });
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


var NoticeDaySetupComponent = /** @class */ (function (_super) {
    __extends(NoticeDaySetupComponent, _super);
    function NoticeDaySetupComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Notice Day Setup";
        return _this;
    }
    NoticeDaySetupComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    NoticeDaySetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice-day-setup',
            template: __webpack_require__(/*! ./notice-day-setup.component.html */ "./src/app/home/settlement/notice-day-setup/notice-day-setup.component.html"),
            styles: [__webpack_require__(/*! ./notice-day-setup.component.scss */ "./src/app/home/settlement/notice-day-setup/notice-day-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoticeDaySetupComponent);
    return NoticeDaySetupComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/settlement/notice-pay-amount/notice-pay-amount.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/home/settlement/notice-pay-amount/notice-pay-amount.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n    <div class=\"card-body\">\r\n      <form action=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 center\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"empType\" class=\"col-md-4\">Employee Type</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"employeeType\" id=\"empType\" class=\"form-control\">\r\n                  <option value=\"\">Select Type</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"allowances\" class=\"col-md-4\">Allowances</label>\r\n                <div class=\"col-md-8\">\r\n                  <select name=\"allowances\" id=\"allowances\" class=\"form-control\">\r\n                    <option value=\"\">Select Allowances</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"numOfTime\" class=\"col-md-4\">Number of Times</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"numOfTime\" name=\"numOfTime\" id=\"daysForEmp\" class=\"form-control\"\r\n                  placeholder=\"Number of Times\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"date\" class=\"col-md-4\">Date</label>\r\n              <div class=\"input-group col-md-8\">\r\n                <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"date\" name=\"date\" ngbDatepicker\r\n                  [(ngModel)]=\"date\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                    <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"note\" class=\"col-md-4\">Note</label>\r\n              <div class=\"col-md-8\">\r\n                <textarea name=\"note\" id=\"note\" rows=\"2\" class=\"form-control\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"center demo-inline-spacing\">\r\n              <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n              <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n              <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n            </div>\r\n          </div>\r\n      </form>\r\n      <div class=\"row\">\r\n          <div class=\"card mb-4 center\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  Per page: &nbsp;\r\n                  <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                    class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                    <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                    class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Employee Type</th>\r\n                      <th>Salary Head</th>\r\n                      <th>Number</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- Pagination -->\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/settlement/notice-pay-amount/notice-pay-amount.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/settlement/notice-pay-amount/notice-pay-amount.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2V0dGxlbWVudC9ub3RpY2UtcGF5LWFtb3VudC9ub3RpY2UtcGF5LWFtb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/settlement/notice-pay-amount/notice-pay-amount.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/settlement/notice-pay-amount/notice-pay-amount.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NoticePayAmountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticePayAmountComponent", function() { return NoticePayAmountComponent; });
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


var NoticePayAmountComponent = /** @class */ (function (_super) {
    __extends(NoticePayAmountComponent, _super);
    function NoticePayAmountComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Notice Pay Amount Setup";
        return _this;
    }
    NoticePayAmountComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    NoticePayAmountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice-pay-amount',
            template: __webpack_require__(/*! ./notice-pay-amount.component.html */ "./src/app/home/settlement/notice-pay-amount/notice-pay-amount.component.html"),
            styles: [__webpack_require__(/*! ./notice-pay-amount.component.scss */ "./src/app/home/settlement/notice-pay-amount/notice-pay-amount.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoticePayAmountComponent);
    return NoticePayAmountComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/settlement/settlement-report/settlement-report.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/home/settlement/settlement-report/settlement-report.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-header\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"type\" class=\"col-md-5\">Report Name</label>\r\n            <div class=\"col-md-7\">\r\n              <select name=\"type\" id=\"type\" class=\"form-control\">\r\n                <option value=\"\">Select Report Type</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-md-5\"></label>\r\n            <div class=\"col-md-7\">\r\n              <button class=\"btn btn-success\"><span class=\"fas fa-file-download\"></span> Generate Report</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/settlement/settlement-report/settlement-report.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/settlement/settlement-report/settlement-report.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2V0dGxlbWVudC9zZXR0bGVtZW50LXJlcG9ydC9zZXR0bGVtZW50LXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/settlement/settlement-report/settlement-report.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/settlement/settlement-report/settlement-report.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SettlementReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementReportComponent", function() { return SettlementReportComponent; });
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

var SettlementReportComponent = /** @class */ (function () {
    function SettlementReportComponent() {
        this.title = "Final Settlement Report";
    }
    SettlementReportComponent.prototype.ngOnInit = function () {
    };
    SettlementReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settlement-report',
            template: __webpack_require__(/*! ./settlement-report.component.html */ "./src/app/home/settlement/settlement-report/settlement-report.component.html"),
            styles: [__webpack_require__(/*! ./settlement-report.component.scss */ "./src/app/home/settlement/settlement-report/settlement-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettlementReportComponent);
    return SettlementReportComponent;
}());



/***/ }),

/***/ "./src/app/home/settlement/settlement-routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/settlement/settlement-routing.ts ***!
  \*******************************************************/
/*! exports provided: SettlementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementRoutingModule", function() { return SettlementRoutingModule; });
/* harmony import */ var _final_settlement_final_settlement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final-settlement/final-settlement.component */ "./src/app/home/settlement/final-settlement/final-settlement.component.ts");
/* harmony import */ var _gratuity_setup_gratuity_setup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gratuity-setup/gratuity-setup.component */ "./src/app/home/settlement/gratuity-setup/gratuity-setup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notice_day_setup_notice_day_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notice-day-setup/notice-day-setup.component */ "./src/app/home/settlement/notice-day-setup/notice-day-setup.component.ts");
/* harmony import */ var _notice_pay_amount_notice_pay_amount_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notice-pay-amount/notice-pay-amount.component */ "./src/app/home/settlement/notice-pay-amount/notice-pay-amount.component.ts");
/* harmony import */ var _gratuity_year_setup_gratuity_year_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gratuity-year-setup/gratuity-year-setup.component */ "./src/app/home/settlement/gratuity-year-setup/gratuity-year-setup.component.ts");
/* harmony import */ var _settlement_report_settlement_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settlement-report/settlement-report.component */ "./src/app/home/settlement/settlement-report/settlement-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SettlementRoutingModule = /** @class */ (function () {
    function SettlementRoutingModule() {
    }
    SettlementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'notice-day-setup', component: _notice_day_setup_notice_day_setup_component__WEBPACK_IMPORTED_MODULE_4__["NoticeDaySetupComponent"] },
                    { path: 'notice-pay-amount', component: _notice_pay_amount_notice_pay_amount_component__WEBPACK_IMPORTED_MODULE_5__["NoticePayAmountComponent"] },
                    { path: 'gratuity-setup', component: _gratuity_setup_gratuity_setup_component__WEBPACK_IMPORTED_MODULE_1__["GratuitySetupComponent"] },
                    { path: 'gratuity-year-setup', component: _gratuity_year_setup_gratuity_year_setup_component__WEBPACK_IMPORTED_MODULE_6__["GratuityYearSetupComponent"] },
                    { path: 'final-settlement', component: _final_settlement_final_settlement_component__WEBPACK_IMPORTED_MODULE_0__["FinalSettlementComponent"] },
                    { path: 'settlement-report', component: _settlement_report_settlement_report_component__WEBPACK_IMPORTED_MODULE_7__["SettlementReportComponent"] },
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettlementRoutingModule);
    return SettlementRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/settlement/settlement.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/settlement/settlement.module.ts ***!
  \******************************************************/
/*! exports provided: SettlementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementModule", function() { return SettlementModule; });
/* harmony import */ var _settlement_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settlement-routing */ "./src/app/home/settlement/settlement-routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _notice_day_setup_notice_day_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notice-day-setup/notice-day-setup.component */ "./src/app/home/settlement/notice-day-setup/notice-day-setup.component.ts");
/* harmony import */ var _notice_pay_amount_notice_pay_amount_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notice-pay-amount/notice-pay-amount.component */ "./src/app/home/settlement/notice-pay-amount/notice-pay-amount.component.ts");
/* harmony import */ var _gratuity_setup_gratuity_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gratuity-setup/gratuity-setup.component */ "./src/app/home/settlement/gratuity-setup/gratuity-setup.component.ts");
/* harmony import */ var _gratuity_year_setup_gratuity_year_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gratuity-year-setup/gratuity-year-setup.component */ "./src/app/home/settlement/gratuity-year-setup/gratuity-year-setup.component.ts");
/* harmony import */ var _final_settlement_final_settlement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./final-settlement/final-settlement.component */ "./src/app/home/settlement/final-settlement/final-settlement.component.ts");
/* harmony import */ var _settlement_report_settlement_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settlement-report/settlement-report.component */ "./src/app/home/settlement/settlement-report/settlement-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SettlementModule = /** @class */ (function () {
    function SettlementModule() {
    }
    SettlementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _notice_day_setup_notice_day_setup_component__WEBPACK_IMPORTED_MODULE_5__["NoticeDaySetupComponent"],
                _notice_pay_amount_notice_pay_amount_component__WEBPACK_IMPORTED_MODULE_6__["NoticePayAmountComponent"],
                _gratuity_setup_gratuity_setup_component__WEBPACK_IMPORTED_MODULE_7__["GratuitySetupComponent"],
                _gratuity_year_setup_gratuity_year_setup_component__WEBPACK_IMPORTED_MODULE_8__["GratuityYearSetupComponent"],
                _final_settlement_final_settlement_component__WEBPACK_IMPORTED_MODULE_9__["FinalSettlementComponent"],
                _settlement_report_settlement_report_component__WEBPACK_IMPORTED_MODULE_10__["SettlementReportComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _settlement_routing__WEBPACK_IMPORTED_MODULE_0__["SettlementRoutingModule"]
            ]
        })
    ], SettlementModule);
    return SettlementModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-settlement-settlement-module.js.map