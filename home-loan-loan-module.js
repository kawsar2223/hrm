(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-loan-loan-module"],{

/***/ "./src/app/home/loan/cash-receive/cash-receive.component.html":
/*!********************************************************************!*\
  !*** ./src/app/home/loan/cash-receive/cash-receive.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"card\">\r\n      <h5 class=\"card-header\">Employee Basic Information</h5>\r\n      <div class=\"card-body row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group row\">\r\n                <label for=\"empCode\" class=\"col-md-4\">Employee Code</label>\r\n                <div class=\"input-group col-md-6\">\r\n                  <input type=\"text\" name=\"employeeCode\" id=\"empCode\" class=\"form-control\" placeholder=\"Employee Code\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                      <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"empName\" class=\"col-md-4\">Employee Name</label>\r\n            <div class=\"col-md-6\">\r\n              <input type=\"text\" name=\"employeeName\" id=\"empName\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-4\" for=\"joiningDate\">Joining Date</label>\r\n            <div class=\"input-group col-md-6\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"joiningDate\" name=\"joiningDate\" ngbDatepicker\r\n                [(ngModel)]=\"joiningDate\" [displayMonths]=\"1\" #d1=\"ngbDatepicker\" disabled>\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"designation\" class=\"col-md-4\">Designation</label>\r\n            <div class=\"col-md-6\">\r\n              <input type=\"text\" name=\"designation\" id=\"designation\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> <br>\r\n    <div class=\"card\">\r\n      <h5 class=\"card-header\">Employee Payment Information</h5>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 border padding-top\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"type\" class=\"col-md-4\">Loan Type</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"type\" id=\"type\" class=\"form-control\">\r\n                  <option value=\"\">Select Type</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"principalAmount\" class=\"col-md-4\">Principal Amount</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"number\" name=\"principalAmount\" id=\"principalAmount\" class=\"form-control\"\r\n                  placeholder=\"Principal Amount\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"netAmount\" class=\"col-md-4\">Net Amount</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"number\" name=\"netAmount\" id=\"netAmount\" class=\"form-control\" placeholder=\"Net Amount\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 border padding-top\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"form-label col-md-5\" for=\"paymentDate\">Payment Date</label>\r\n              <div class=\"input-group col-md-7\">\r\n                <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"paymentDate\" name=\"paymentDate\" ngbDatepicker\r\n                  [(ngModel)]=\"paymentDate\" [displayMonths]=\"1\" #d1=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"interest\" class=\"col-md-5\">Interest</label>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"number\" name=\"interest\" id=\"interest\" class=\"form-control\" placeholder=\"Interest\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"remarks\" class=\"col-md-5\">Remarks</label>\r\n              <div class=\"col-md-7\">\r\n                <textarea rows=\"2\" name=\"remarks\" id=\"remarks\" class=\"form-control\" placeholder=\"Remarks\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\"></div>\r\n          <div class=\"col-md-6 demo-inline-spacing\">\r\n            <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n            <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Clear</button>\r\n            <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card mb-4 center\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body py-0\">\r\n        <div class=\"row\">\r\n          <table class=\"table table-hover table-striped mb-2\">\r\n            <thead>\r\n              <tr>\r\n                <th>Payment Date</th>\r\n                <th>Principal Amount</th>\r\n                <th>Interest</th>\r\n                <th>Net Payment</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"tempItems.length==0\">\r\n                <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let item of tempItems\">\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <!-- Pagination -->\r\n        <div class=\"row\">\r\n          <div class=\"col-sm text-sm-left text-center pt-3\">\r\n            <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n          </div>\r\n          <div class=\"col-sm pt-3\">\r\n            <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n              (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n            </ngb-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- / Pagination -->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/loan/cash-receive/cash-receive.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/home/loan/cash-receive/cash-receive.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbG9hbi9jYXNoLXJlY2VpdmUvY2FzaC1yZWNlaXZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/loan/cash-receive/cash-receive.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/loan/cash-receive/cash-receive.component.ts ***!
  \******************************************************************/
/*! exports provided: CashReceiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashReceiveComponent", function() { return CashReceiveComponent; });
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


var CashReceiveComponent = /** @class */ (function (_super) {
    __extends(CashReceiveComponent, _super);
    function CashReceiveComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Employee Loan Cash Payment Information";
        return _this;
    }
    CashReceiveComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    CashReceiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cash-receive',
            template: __webpack_require__(/*! ./cash-receive.component.html */ "./src/app/home/loan/cash-receive/cash-receive.component.html"),
            styles: [__webpack_require__(/*! ./cash-receive.component.scss */ "./src/app/home/loan/cash-receive/cash-receive.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CashReceiveComponent);
    return CashReceiveComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/loan/loan-info/loan-info.component.html":
/*!**************************************************************!*\
  !*** ./src/app/home/loan/loan-info/loan-info.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"card\">\r\n      <h5 class=\"card-header\">Employee Basic Information</h5>\r\n      <div class=\"card-body row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"empCode\" class=\"col-md-4\">Employee Code</label>\r\n            <div class=\"input-group col-md-6\">\r\n              <input type=\"text\" name=\"employeeCode\" id=\"empCode\" class=\"form-control\" placeholder=\"Employee Code\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"empName\" class=\"col-md-4\">Employee Name</label>\r\n            <div class=\"col-md-6\">\r\n              <input type=\"text\" name=\"employeeName\" id=\"empName\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"location\" class=\"col-md-4\">Location</label>\r\n            <div class=\"col-md-6\">\r\n              <input type=\"text\" name=\"location\" id=\"location\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-4\" for=\"joiningDate\">Joining Date</label>\r\n            <div class=\"input-group col-md-6\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"joiningDate\" name=\"joiningDate\" ngbDatepicker\r\n                [(ngModel)]=\"joiningDate\" [displayMonths]=\"1\" #d1=\"ngbDatepicker\" disabled>\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"designation\" class=\"col-md-4\">Designation</label>\r\n            <div class=\"col-md-6\">\r\n              <input type=\"text\" name=\"designation\" id=\"designation\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> <br>\r\n    <div class=\"card\">\r\n      <h5 class=\"card-header\">Employee Loan Information</h5>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 border padding-top\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"type\" class=\"col-md-4\">Loan Type</label>\r\n              <div class=\"col-md-8\">\r\n                <select name=\"type\" id=\"type\" class=\"form-control\">\r\n                  <option value=\"\">Select Type</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group-row\">\r\n              <table class=\"table table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Salary Head</th>\r\n                    <th></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>Provident fund loan</td>\r\n                    <td><button class=\"btn btn-default\">Select</button></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Advance Salary</td>\r\n                    <td><button class=\"btn btn-default\">Select</button></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 border padding-top\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"form-label col-md-5\" for=\"loanDate\">Loan Date</label>\r\n              <div class=\"input-group col-md-7\">\r\n                <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"loanDate\" name=\"loanDate\" ngbDatepicker\r\n                  [(ngModel)]=\"loanDate\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                    <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"amount\" class=\"col-md-5\">Loan Amount</label>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"number\" name=\"amount\" id=\"amount\" class=\"form-control\" placeholder=\"Amount\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"downPayment\" class=\"col-md-5\">Down Payment</label>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"number\" name=\"downPayment\" id=\"downPayment\" class=\"form-control\"\r\n                  placeholder=\"Down Payment\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"netLoan\" class=\"col-md-5\">Net Loan</label>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"number\" name=\"netLoan\" id=\"netLoan\" class=\"form-control\" placeholder=\"Net Loan\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"remarks\" class=\"col-md-5\">Remarks</label>\r\n              <div class=\"col-md-7\">\r\n                <textarea rows=\"2\" name=\"remarks\" id=\"remarks\" class=\"form-control\" placeholder=\"Remarks\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 border padding-top\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"installment\" class=\"col-md-5\">Installment Start</label>\r\n              <div class=\"col-md-7\">\r\n                <select name=\"installment\" id=\"installment\" class=\"form-control\">\r\n                  <option value=\"\">Select Installment</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"noOfInst\" class=\"col-md-5\">No of Installment</label>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"number\" name=\"noOfInstallment\" id=\"noOfInst\" class=\"form-control\"\r\n                  placeholder=\"No Of Installment\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"installmentType\" class=\"col-md-5\">Installment Type</label>\r\n              <div class=\"col-md-7\">\r\n                <select name=\"installmentType\" id=\"installmentType\" class=\"form-control\">\r\n                  <option value=\"\">Select Type</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"interest\" class=\"col-md-5\">Interest</label>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"number\" name=\"interest\" id=\"interest\" class=\"form-control\" placeholder=\"Interest\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"size\" class=\"col-md-5\">Installment Size</label>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"number\" name=\"size\" id=\"size\" class=\"form-control\" placeholder=\"Installment Size\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\"></div>\r\n          <div class=\"col-md-4\"></div>\r\n          <div class=\"col-md-4 demo-inline-spacing\">\r\n            <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n            <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Clear</button>\r\n            <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card mb-4 center\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                Per page: &nbsp;\r\n                <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                  class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                  <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col\">\r\n                <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                  class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body py-0\">\r\n            <div class=\"row\">\r\n              <table class=\"table table-hover table-striped mb-2\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Loan Date</th>\r\n                    <th>Loan Amount</th>\r\n                    <th>Net Loan</th>\r\n                    <th>Monthly Adjust</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"row\">\r\n              <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n              </div>\r\n              <div class=\"col-sm pt-3\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                  (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                </ngb-pagination>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 padding-top\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"totalLoan\" class=\"col-md-5\">Total Loan</label>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"number\" name=\"totalLoan\" id=\"totalLoan\" class=\"form-control\" placeholder=\"Total Loan\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"totalLoanBack\" class=\"col-md-5\">Total Loan Back</label>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"number\" name=\"totalLoanBack\" id=\"totalLoanBack\" class=\"form-control\"\r\n                placeholder=\"Total Loan Back\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"totalDue\" class=\"col-md-5\">Total Due</label>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"number\" name=\"totalDue\" id=\"totalDue\" class=\"form-control\" placeholder=\"Total Due\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/loan/loan-info/loan-info.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/home/loan/loan-info/loan-info.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbG9hbi9sb2FuLWluZm8vbG9hbi1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/loan/loan-info/loan-info.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home/loan/loan-info/loan-info.component.ts ***!
  \************************************************************/
/*! exports provided: LoanInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanInfoComponent", function() { return LoanInfoComponent; });
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


var LoanInfoComponent = /** @class */ (function (_super) {
    __extends(LoanInfoComponent, _super);
    function LoanInfoComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Employee Loan Information";
        return _this;
    }
    LoanInfoComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    LoanInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loan-info',
            template: __webpack_require__(/*! ./loan-info.component.html */ "./src/app/home/loan/loan-info/loan-info.component.html"),
            styles: [__webpack_require__(/*! ./loan-info.component.scss */ "./src/app/home/loan/loan-info/loan-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoanInfoComponent);
    return LoanInfoComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/loan/loan-report/loan-report.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home/loan/loan-report/loan-report.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    {{title}}\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <form action=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7 center\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"type\" class=\"col-md-3\">Report Type</label>\r\n            <div class=\"col-md-6\">\r\n              <select name=\"type\" id=\"type\" class=\"form-control\">\r\n                <option value=\"\">Select Report</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <button class=\"btn btn-success center\"><span class=\"fas fa-file-download\"></span> Generate Report</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/loan/loan-report/loan-report.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/home/loan/loan-report/loan-report.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbG9hbi9sb2FuLXJlcG9ydC9sb2FuLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/loan/loan-report/loan-report.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/loan/loan-report/loan-report.component.ts ***!
  \****************************************************************/
/*! exports provided: LoanReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanReportComponent", function() { return LoanReportComponent; });
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

var LoanReportComponent = /** @class */ (function () {
    function LoanReportComponent() {
        this.title = "Loan Report";
    }
    LoanReportComponent.prototype.ngOnInit = function () {
    };
    LoanReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loan-report',
            template: __webpack_require__(/*! ./loan-report.component.html */ "./src/app/home/loan/loan-report/loan-report.component.html"),
            styles: [__webpack_require__(/*! ./loan-report.component.scss */ "./src/app/home/loan/loan-report/loan-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoanReportComponent);
    return LoanReportComponent;
}());



/***/ }),

/***/ "./src/app/home/loan/loan-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/loan/loan-routing.module.ts ***!
  \**************************************************/
/*! exports provided: LoanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanRoutingModule", function() { return LoanRoutingModule; });
/* harmony import */ var _loan_info_loan_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-info/loan-info.component */ "./src/app/home/loan/loan-info/loan-info.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cash_receive_cash_receive_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cash-receive/cash-receive.component */ "./src/app/home/loan/cash-receive/cash-receive.component.ts");
/* harmony import */ var _stop_deduction_stop_deduction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stop-deduction/stop-deduction.component */ "./src/app/home/loan/stop-deduction/stop-deduction.component.ts");
/* harmony import */ var _loan_report_loan_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loan-report/loan-report.component */ "./src/app/home/loan/loan-report/loan-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoanRoutingModule = /** @class */ (function () {
    function LoanRoutingModule() {
    }
    LoanRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'loan-info', component: _loan_info_loan_info_component__WEBPACK_IMPORTED_MODULE_0__["LoanInfoComponent"] },
                    { path: 'cash-receive', component: _cash_receive_cash_receive_component__WEBPACK_IMPORTED_MODULE_4__["CashReceiveComponent"] },
                    { path: 'stop-deduction', component: _stop_deduction_stop_deduction_component__WEBPACK_IMPORTED_MODULE_5__["StopDeductionComponent"] },
                    { path: 'loan-report', component: _loan_report_loan_report_component__WEBPACK_IMPORTED_MODULE_6__["LoanReportComponent"] },
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], LoanRoutingModule);
    return LoanRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/loan/loan.module.ts":
/*!******************************************!*\
  !*** ./src/app/home/loan/loan.module.ts ***!
  \******************************************/
/*! exports provided: LoanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanModule", function() { return LoanModule; });
/* harmony import */ var _loan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-routing.module */ "./src/app/home/loan/loan-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _loan_info_loan_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loan-info/loan-info.component */ "./src/app/home/loan/loan-info/loan-info.component.ts");
/* harmony import */ var _cash_receive_cash_receive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cash-receive/cash-receive.component */ "./src/app/home/loan/cash-receive/cash-receive.component.ts");
/* harmony import */ var _stop_deduction_stop_deduction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stop-deduction/stop-deduction.component */ "./src/app/home/loan/stop-deduction/stop-deduction.component.ts");
/* harmony import */ var _loan_report_loan_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loan-report/loan-report.component */ "./src/app/home/loan/loan-report/loan-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LoanModule = /** @class */ (function () {
    function LoanModule() {
    }
    LoanModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _loan_info_loan_info_component__WEBPACK_IMPORTED_MODULE_5__["LoanInfoComponent"],
                _cash_receive_cash_receive_component__WEBPACK_IMPORTED_MODULE_6__["CashReceiveComponent"],
                _stop_deduction_stop_deduction_component__WEBPACK_IMPORTED_MODULE_7__["StopDeductionComponent"],
                _loan_report_loan_report_component__WEBPACK_IMPORTED_MODULE_8__["LoanReportComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _loan_routing_module__WEBPACK_IMPORTED_MODULE_0__["LoanRoutingModule"]
            ]
        })
    ], LoanModule);
    return LoanModule;
}());



/***/ }),

/***/ "./src/app/home/loan/stop-deduction/stop-deduction.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/loan/stop-deduction/stop-deduction.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"card\">\r\n      <h5 class=\"card-header\">Employee Basic Information</h5>\r\n      <div class=\"card-body row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"empCode\" class=\"col-md-4\">Employee Code</label>\r\n            <div class=\"input-group col-md-6\">\r\n              <input type=\"text\" name=\"employeeCode\" id=\"empCode\" class=\"form-control\" placeholder=\"Employee Code\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"empName\" class=\"col-md-4\">Name</label>\r\n            <div class=\"col-md-6\">\r\n              <input type=\"text\" name=\"employeeName\" id=\"empName\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"form-label col-md-4\" for=\"joiningDate\">Joining Date</label>\r\n            <div class=\"input-group col-md-6\">\r\n              <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"joiningDate\" name=\"joiningDate\" ngbDatepicker\r\n                [(ngModel)]=\"joiningDate\" [displayMonths]=\"1\" #d1=\"ngbDatepicker\" disabled>\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"designation\" class=\"col-md-4\">Designation</label>\r\n            <div class=\"col-md-6\">\r\n              <input type=\"text\" name=\"designation\" id=\"designation\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> <br>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 center\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"type\" class=\"col-md-3\">Loan Type</label>\r\n              <div class=\"col-md-9\">\r\n                <select name=\"type\" id=\"type\" class=\"form-control\">\r\n                  <option value=\"\">Select Type</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"month\" class=\"col-md-3\">Month</label>\r\n              <div class=\"col-md-9\">\r\n                <select name=\"month\" id=\"month\" class=\"form-control\">\r\n                  <option value=\"\">Select Month</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"form-label col-md-3\" for=\"date\">Date</label>\r\n              <div class=\"input-group col-md-9\">\r\n                <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" id=\"date\" name=\"date\" ngbDatepicker\r\n                  [(ngModel)]=\"date\" [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                    <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"remarks\" class=\"col-md-3\">Remarks</label>\r\n              <div class=\"col-md-9\">\r\n                <textarea rows=\"2\" name=\"remarks\" id=\"remarks\" class=\"form-control\" placeholder=\"Remarks\"></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"demo-inline-spacing center\">\r\n                <button class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n                <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Clear</button>\r\n                <button class=\"btn btn-secondary\"><span class=\"ion ion-ios-close\"></span> Close</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card mb-4 center\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body py-0\">\r\n        <div class=\"row\">\r\n          <table class=\"table table-hover table-striped mb-2\">\r\n            <thead>\r\n              <tr>\r\n                <th>Employee Code</th>\r\n                <th>Name</th>\r\n                <th>Designation</th>\r\n                <th>Loan Type</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"tempItems.length==0\">\r\n                <td colspan=\"11\" class=\"font-italic text-center\">No Item available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let item of tempItems\">\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <!-- Pagination -->\r\n        <div class=\"row\">\r\n          <div class=\"col-sm text-sm-left text-center pt-3\">\r\n            <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n          </div>\r\n          <div class=\"col-sm pt-3\">\r\n            <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n              (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n            </ngb-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- / Pagination -->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/loan/stop-deduction/stop-deduction.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/loan/stop-deduction/stop-deduction.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbG9hbi9zdG9wLWRlZHVjdGlvbi9zdG9wLWRlZHVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/loan/stop-deduction/stop-deduction.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/loan/stop-deduction/stop-deduction.component.ts ***!
  \**********************************************************************/
/*! exports provided: StopDeductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopDeductionComponent", function() { return StopDeductionComponent; });
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


var StopDeductionComponent = /** @class */ (function (_super) {
    __extends(StopDeductionComponent, _super);
    function StopDeductionComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Loan Deduction Stop Information";
        return _this;
    }
    StopDeductionComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    StopDeductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stop-deduction',
            template: __webpack_require__(/*! ./stop-deduction.component.html */ "./src/app/home/loan/stop-deduction/stop-deduction.component.html"),
            styles: [__webpack_require__(/*! ./stop-deduction.component.scss */ "./src/app/home/loan/stop-deduction/stop-deduction.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StopDeductionComponent);
    return StopDeductionComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ })

}]);
//# sourceMappingURL=home-loan-loan-module.js.map