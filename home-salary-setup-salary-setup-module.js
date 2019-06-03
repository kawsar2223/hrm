(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-salary-setup-salary-setup-module"],{

/***/ "./src/app/home/salary-setup/other-allowance/other-allowance.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/salary-setup/other-allowance/other-allowance.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Other Allowance\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Pay Scale Grade-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Pay Scale Grade</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Salary Head-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Head</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"card mb-4\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        Per page: &nbsp;\r\n        <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n          <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n          class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form-group\">\r\n        <div class=\"table-responsive mb-4\">\r\n          <table class=\"table table-hover table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th>Pay Scale</th>\r\n                <th>Amount</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"tempItems.length==0\">\r\n                <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <!-- Pagination -->\r\n        <div class=\"card-body py-0\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- / Pagination -->\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--Button-->\r\n  <div class=\"form-group row text-right\">\r\n    <div class=\"demo-inline-spacing mt-3 center\">\r\n      <button type=\"submit\" class=\"btn btn-success\">\r\n        <span class=\"fas fa-save\"></span> Save</button>\r\n      <button type=\"\" class=\"btn btn-secondary\">\r\n        <span class=\"fas fa-window-close\"></span> Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-setup/other-allowance/other-allowance.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/salary-setup/other-allowance/other-allowance.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXNldHVwL290aGVyLWFsbG93YW5jZS9vdGhlci1hbGxvd2FuY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/salary-setup/other-allowance/other-allowance.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/salary-setup/other-allowance/other-allowance.component.ts ***!
  \********************************************************************************/
/*! exports provided: OtherAllowanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherAllowanceComponent", function() { return OtherAllowanceComponent; });
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


var OtherAllowanceComponent = /** @class */ (function (_super) {
    __extends(OtherAllowanceComponent, _super);
    function OtherAllowanceComponent() {
        return _super.call(this) || this;
    }
    OtherAllowanceComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    OtherAllowanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-other-allowance',
            template: __webpack_require__(/*! ./other-allowance.component.html */ "./src/app/home/salary-setup/other-allowance/other-allowance.component.html"),
            styles: [__webpack_require__(/*! ./other-allowance.component.scss */ "./src/app/home/salary-setup/other-allowance/other-allowance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherAllowanceComponent);
    return OtherAllowanceComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-setup/payscal-setup/payscal-setup.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/home/salary-setup/payscal-setup/payscal-setup.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">PayScal Setup</h4>\r\n    <div class=\"card-body\">\r\n      <!--Row -->\r\n      <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n        <!--Left column-->\r\n        <div class=\"col-6\">\r\n          <!--Employee Type-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Type</label>\r\n            <div class=\"col-sm-8\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n          </div>\r\n          <!--Payscal Grade-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Payscal Grade</label>\r\n            <div class=\"col-sm-8\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n          </div>\r\n\r\n        </div>\r\n  \r\n        <div class=\"vertical\"></div>\r\n        <!--Right column-->\r\n        <div class=\"col-6\">\r\n          <!--Leave Type-->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\">Salary Year</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control\">\r\n                <option>Select</option>\r\n                <option>Option-1</option>\r\n                <option>Option-2</option>\r\n                <option>Option-3</option>\r\n                <option>Option-4</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Button-->\r\n      <div class=\"form-group row m-auto\">\r\n        <label class=\"col-form-label col-sm-5 text-sm-right\"></label>\r\n        <div class=\"demo-inline-spacing mt-3\">\r\n          <button type=\"submit\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-eye\"></span> Show</button>\r\n        </div>\r\n      </div>\r\n      <!--End 1st Row-->\r\n      <!--2nd Row-->\r\n      <div style=\"border: 1px solid lightgray;\">\r\n        <!--Table-->\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              Per page: &nbsp;\r\n              <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form autocomplete=\"off\">\r\n            <div class=\"form-group\">\r\n              <div class=\"table-responsive mb-4\">\r\n                <table class=\"table table-hover table-striped mb-0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Grade Description</th>\r\n                      <th>Increment Amount</th>\r\n                      <th>Basic</th>\r\n                      <th>Hrent</th>\r\n                      <th>DA</th>\r\n                      <th>Others</th>\r\n                      <th>Convance</th>\r\n                      <th>Medical</th>\r\n                      <th>Beverage</th>\r\n                      <th>Incentive</th>\r\n                      <th>Entertainment</th>\r\n  \r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"11\" class=\"font-italic text-center\">No item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td><button class=\"btn btn--large\"> <span class=\"fas fa-trash\">Delete</span></button>></td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n  \r\n  \r\n              <!-- Pagination -->\r\n              <div class=\"card-body py-0\">\r\n  \r\n                <div class=\"row\">\r\n                  <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                    <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                  </div>\r\n                  <div class=\"col-sm pt-3\">\r\n                    <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                      (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                    </ngb-pagination>\r\n                  </div>\r\n                </div>\r\n  \r\n              </div>\r\n              <!-- / Pagination -->\r\n  \r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!--Button-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-8\">Total Employee:</label>\r\n        <div class=\"demo-inline-spacing mt-3\">\r\n          <button type=\"\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-save\"></span> Save</button>\r\n          <button type=\"\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button type=\"\" class=\"btn btn-secondary\">\r\n            <span class=\"fas fa-window-close\"></span> Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home/salary-setup/payscal-setup/payscal-setup.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/salary-setup/payscal-setup/payscal-setup.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXNldHVwL3BheXNjYWwtc2V0dXAvcGF5c2NhbC1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/salary-setup/payscal-setup/payscal-setup.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/salary-setup/payscal-setup/payscal-setup.component.ts ***!
  \****************************************************************************/
/*! exports provided: PayscalSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayscalSetupComponent", function() { return PayscalSetupComponent; });
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


var PayscalSetupComponent = /** @class */ (function (_super) {
    __extends(PayscalSetupComponent, _super);
    function PayscalSetupComponent() {
        return _super.call(this) || this;
    }
    PayscalSetupComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    PayscalSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payscal-setup',
            template: __webpack_require__(/*! ./payscal-setup.component.html */ "./src/app/home/salary-setup/payscal-setup/payscal-setup.component.html"),
            styles: [__webpack_require__(/*! ./payscal-setup.component.scss */ "./src/app/home/salary-setup/payscal-setup/payscal-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PayscalSetupComponent);
    return PayscalSetupComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-setup/payscale-grade/payscale-grade.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/salary-setup/payscale-grade/payscale-grade.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Payscale Grade\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Payscal Grade-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Payscal Grade</label>\r\n                <div class=\"col-sm-7\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Payscal Grade\">\r\n                </div>\r\n              </div>\r\n      \r\n              <!--Button-->\r\n              <div class=\"form-group row text-right\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-save\"></span> Save</button>\r\n                  <button type=\"\" class=\"btn btn-info\">\r\n                    <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n                  <button type=\"\" class=\"btn btn-secondary\">\r\n                    <span class=\"fas fa-window-close\"></span> Close</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card mb-4\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          Per page: &nbsp;\r\n          <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n            <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col\">\r\n          <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n            class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form autocomplete=\"off\">\r\n        <div class=\"form-group\">\r\n          <div class=\"table-responsive mb-4\">\r\n            <table class=\"table table-hover table-striped mb-0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Payscal Grade</th>\r\n                  <th></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"2\" class=\"font-italic text-center\">No item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                  <td>{{item}}</td>\r\n                  <td></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n  \r\n  \r\n          <!-- Pagination -->\r\n          <div class=\"card-body py-0\">\r\n  \r\n            <div class=\"row\">\r\n              <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n              </div>\r\n              <div class=\"col-sm pt-3\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                  (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                </ngb-pagination>\r\n              </div>\r\n            </div>\r\n  \r\n          </div>\r\n          <!-- / Pagination -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home/salary-setup/payscale-grade/payscale-grade.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/salary-setup/payscale-grade/payscale-grade.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXNldHVwL3BheXNjYWxlLWdyYWRlL3BheXNjYWxlLWdyYWRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/salary-setup/payscale-grade/payscale-grade.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/salary-setup/payscale-grade/payscale-grade.component.ts ***!
  \******************************************************************************/
/*! exports provided: PayscaleGradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayscaleGradeComponent", function() { return PayscaleGradeComponent; });
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


var PayscaleGradeComponent = /** @class */ (function (_super) {
    __extends(PayscaleGradeComponent, _super);
    function PayscaleGradeComponent() {
        return _super.call(this) || this;
    }
    PayscaleGradeComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    PayscaleGradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payscale-grade',
            template: __webpack_require__(/*! ./payscale-grade.component.html */ "./src/app/home/salary-setup/payscale-grade/payscale-grade.component.html"),
            styles: [__webpack_require__(/*! ./payscale-grade.component.scss */ "./src/app/home/salary-setup/payscale-grade/payscale-grade.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PayscaleGradeComponent);
    return PayscaleGradeComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-setup/salary-grade/salary-grade.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-grade/salary-grade.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Salary Grade\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Salary Grade-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Grade</label>\r\n                <div class=\"col-sm-7\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Salary Grade\">\r\n                </div>\r\n              </div>\r\n              <!--Sort Order-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Sort Order</label>\r\n                <div class=\"col-sm-7\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Sort Order\">\r\n                </div>\r\n              </div>\r\n              <!--Button-->\r\n              <div class=\"form-group row text-right\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-save\"></span> Save</button>\r\n                  <button type=\"\" class=\"btn btn-secondary\">\r\n                    <span class=\"fas fa-window-close\"></span> Close</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>\r\n  <div class=\"card mb-4\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          Per page: &nbsp;\r\n          <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n            <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col\">\r\n          <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n            class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form autocomplete=\"off\">\r\n        <div class=\"form-group\">\r\n          <div class=\"table-responsive mb-4\">\r\n            <table class=\"table table-hover table-striped mb-0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Salary Grade</th>\r\n                  <th></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                  <td>{{item}}</td>\r\n                  <td></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n  \r\n  \r\n          <!-- Pagination -->\r\n          <div class=\"card-body py-0\">\r\n  \r\n            <div class=\"row\">\r\n              <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n              </div>\r\n              <div class=\"col-sm pt-3\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                  (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                </ngb-pagination>\r\n              </div>\r\n            </div>\r\n  \r\n          </div>\r\n          <!-- / Pagination -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home/salary-setup/salary-grade/salary-grade.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-grade/salary-grade.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXNldHVwL3NhbGFyeS1ncmFkZS9zYWxhcnktZ3JhZGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/salary-setup/salary-grade/salary-grade.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-grade/salary-grade.component.ts ***!
  \**************************************************************************/
/*! exports provided: SalaryGradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryGradeComponent", function() { return SalaryGradeComponent; });
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


var SalaryGradeComponent = /** @class */ (function (_super) {
    __extends(SalaryGradeComponent, _super);
    function SalaryGradeComponent() {
        return _super.call(this) || this;
    }
    SalaryGradeComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    SalaryGradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-grade',
            template: __webpack_require__(/*! ./salary-grade.component.html */ "./src/app/home/salary-setup/salary-grade/salary-grade.component.html"),
            styles: [__webpack_require__(/*! ./salary-grade.component.scss */ "./src/app/home/salary-setup/salary-grade/salary-grade.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryGradeComponent);
    return SalaryGradeComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-setup/salary-head/salary-head.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-head/salary-head.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Create New Salary Head\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n          <form>\r\n              <!--Month-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Type</label>\r\n                <div class=\"col-sm-7\">\r\n                  <select class=\"form-control\">\r\n                    <option>Select</option>\r\n                    <option>Option-1</option>\r\n                    <option>Option-2</option>\r\n                    <option>Option-3</option>\r\n                    <option>Option-4</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!--SL NO-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">SL NO</label>\r\n                <div class=\"col-sm-7\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"SL NO\">\r\n                </div>\r\n              </div>\r\n              <!--Salary Head-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Head</label>\r\n                <div class=\"col-sm-7\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Salary Head\">\r\n                </div>\r\n              </div>\r\n              <!--Salary Code-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Salary code</label>\r\n                <div class=\"col-sm-7\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Salary Code\">\r\n                </div>\r\n              </div>\r\n              <!--Is Income Tex-->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-form-label col-sm-3 text-sm-right\">Is Income Tex</label>\r\n                <div class=\"col-sm-7\">\r\n                  <select class=\"form-control\">\r\n                    <option>Select</option>\r\n                    <option>Option-1</option>\r\n                    <option>Option-2</option>\r\n                    <option>Option-3</option>\r\n                    <option>Option-4</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!--Button-->\r\n              <div class=\"form-group row text-right\">\r\n                <div class=\"demo-inline-spacing mt-3 center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\">\r\n                    <span class=\"fas fa-save\"></span> Save</button>\r\n                  <button type=\"\" class=\"btn btn-secondary\">\r\n                    <span class=\"fas fa-window-close\"></span> Close</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>\r\n  <div class=\"card mb-4\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          Per page: &nbsp;\r\n          <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n            <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col\">\r\n          <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n            class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form autocomplete=\"off\">\r\n        <div class=\"form-group\">\r\n          <div class=\"table-responsive mb-4\">\r\n            <table class=\"table table-hover table-striped mb-0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Salary Head</th>\r\n                  <th>Code</th>\r\n                  <th> Type </th>\r\n                  <th></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"tempItems.length==0\">\r\n                  <td colspan=\"3\" class=\"font-italic text-center\">No item available</td>\r\n                </tr>\r\n                <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td>{{item}}</td>\r\n                  <td></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n  \r\n  \r\n          <!-- Pagination -->\r\n          <div class=\"card-body py-0\">\r\n  \r\n            <div class=\"row\">\r\n              <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n              </div>\r\n              <div class=\"col-sm pt-3\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                  (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                </ngb-pagination>\r\n              </div>\r\n            </div>\r\n  \r\n          </div>\r\n          <!-- / Pagination -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home/salary-setup/salary-head/salary-head.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-head/salary-head.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXNldHVwL3NhbGFyeS1oZWFkL3NhbGFyeS1oZWFkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/salary-setup/salary-head/salary-head.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-head/salary-head.component.ts ***!
  \************************************************************************/
/*! exports provided: SalaryHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryHeadComponent", function() { return SalaryHeadComponent; });
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


var SalaryHeadComponent = /** @class */ (function (_super) {
    __extends(SalaryHeadComponent, _super);
    function SalaryHeadComponent() {
        return _super.call(this) || this;
    }
    SalaryHeadComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    SalaryHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-head',
            template: __webpack_require__(/*! ./salary-head.component.html */ "./src/app/home/salary-setup/salary-head/salary-head.component.html"),
            styles: [__webpack_require__(/*! ./salary-head.component.scss */ "./src/app/home/salary-setup/salary-head/salary-head.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryHeadComponent);
    return SalaryHeadComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-setup/salary-period/salary-period.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-period/salary-period.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Create New Salary Period\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Year-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Year</label>\r\n              <div class=\"col-sm-7\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Year\">\r\n              </div>\r\n            </div>\r\n            <!--Month-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Month</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Period Name-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Period Name</label>\r\n              <div class=\"col-sm-7\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Period Name\">\r\n              </div>\r\n            </div>\r\n            <!--Tex Year-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Year</label>\r\n              <div class=\"col-sm-7\">\r\n                <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--Start Date-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Star Date</label>\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                    #d1=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                      <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--End Date-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">End Date</label>\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" name=\"toDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"toDate\"\r\n                    #d2=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                      <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Button-->\r\n            <div class=\"form-group row text-right\">\r\n              <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-save\"></span> Save</button>\r\n                <button type=\"\" class=\"btn btn-secondary\">\r\n                  <span class=\"fas fa-window-close\"></span> Close</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card mb-4\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        Per page: &nbsp;\r\n        <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n          <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n          class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form-group\">\r\n        <div class=\"table-responsive mb-4\">\r\n          <table class=\"table table-hover table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th>Period</th>\r\n                <th>Month</th>\r\n                <th> Year </th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"tempItems.length==0\">\r\n                <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td>{{item}}</td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <!-- Pagination -->\r\n        <div class=\"card-body py-0\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-setup/salary-period/salary-period.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-period/salary-period.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXNldHVwL3NhbGFyeS1wZXJpb2Qvc2FsYXJ5LXBlcmlvZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/salary-setup/salary-period/salary-period.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-period/salary-period.component.ts ***!
  \****************************************************************************/
/*! exports provided: SalaryPeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryPeriodComponent", function() { return SalaryPeriodComponent; });
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/paginate */ "./src/app/shared/paginate.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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


var SalaryPeriodComponent = /** @class */ (function (_super) {
    __extends(SalaryPeriodComponent, _super);
    function SalaryPeriodComponent() {
        return _super.call(this) || this;
    }
    SalaryPeriodComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    SalaryPeriodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-period',
            template: __webpack_require__(/*! ./salary-period.component.html */ "./src/app/home/salary-setup/salary-period/salary-period.component.html"),
            styles: [__webpack_require__(/*! ./salary-period.component.scss */ "./src/app/home/salary-setup/salary-period/salary-period.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryPeriodComponent);
    return SalaryPeriodComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_0__["Pagination"]));



/***/ }),

/***/ "./src/app/home/salary-setup/salary-setup-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-setup-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: SalarySetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalarySetupRoutingModule", function() { return SalarySetupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _other_allowance_other_allowance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other-allowance/other-allowance.component */ "./src/app/home/salary-setup/other-allowance/other-allowance.component.ts");
/* harmony import */ var _salary_year_setup_salary_year_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salary-year-setup/salary-year-setup.component */ "./src/app/home/salary-setup/salary-year-setup/salary-year-setup.component.ts");
/* harmony import */ var _salary_period_salary_period_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salary-period/salary-period.component */ "./src/app/home/salary-setup/salary-period/salary-period.component.ts");
/* harmony import */ var _salary_head_salary_head_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salary-head/salary-head.component */ "./src/app/home/salary-setup/salary-head/salary-head.component.ts");
/* harmony import */ var _salary_grade_salary_grade_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salary-grade/salary-grade.component */ "./src/app/home/salary-setup/salary-grade/salary-grade.component.ts");
/* harmony import */ var _payscale_grade_payscale_grade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payscale-grade/payscale-grade.component */ "./src/app/home/salary-setup/payscale-grade/payscale-grade.component.ts");
/* harmony import */ var _payscal_setup_payscal_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payscal-setup/payscal-setup.component */ "./src/app/home/salary-setup/payscal-setup/payscal-setup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SalarySetupRoutingModule = /** @class */ (function () {
    function SalarySetupRoutingModule() {
    }
    SalarySetupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'other-allowance', component: _other_allowance_other_allowance_component__WEBPACK_IMPORTED_MODULE_2__["OtherAllowanceComponent"] },
                    { path: 'salary-year-setup', component: _salary_year_setup_salary_year_setup_component__WEBPACK_IMPORTED_MODULE_3__["SalaryYearSetupComponent"] },
                    { path: 'salary-period', component: _salary_period_salary_period_component__WEBPACK_IMPORTED_MODULE_4__["SalaryPeriodComponent"] },
                    { path: 'salary-head', component: _salary_head_salary_head_component__WEBPACK_IMPORTED_MODULE_5__["SalaryHeadComponent"] },
                    { path: 'salary-grade', component: _salary_grade_salary_grade_component__WEBPACK_IMPORTED_MODULE_6__["SalaryGradeComponent"] },
                    { path: 'payscale-grade', component: _payscale_grade_payscale_grade_component__WEBPACK_IMPORTED_MODULE_7__["PayscaleGradeComponent"] },
                    { path: 'payscal-setup', component: _payscal_setup_payscal_setup_component__WEBPACK_IMPORTED_MODULE_8__["PayscalSetupComponent"] },
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SalarySetupRoutingModule);
    return SalarySetupRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/salary-setup/salary-setup.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/salary-setup/salary-setup.module.ts ***!
  \**********************************************************/
/*! exports provided: SalarySetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalarySetupModule", function() { return SalarySetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _other_allowance_other_allowance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other-allowance/other-allowance.component */ "./src/app/home/salary-setup/other-allowance/other-allowance.component.ts");
/* harmony import */ var _salary_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salary-setup-routing.module */ "./src/app/home/salary-setup/salary-setup-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _salary_year_setup_salary_year_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salary-year-setup/salary-year-setup.component */ "./src/app/home/salary-setup/salary-year-setup/salary-year-setup.component.ts");
/* harmony import */ var _salary_period_salary_period_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./salary-period/salary-period.component */ "./src/app/home/salary-setup/salary-period/salary-period.component.ts");
/* harmony import */ var _salary_head_salary_head_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./salary-head/salary-head.component */ "./src/app/home/salary-setup/salary-head/salary-head.component.ts");
/* harmony import */ var _salary_grade_salary_grade_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./salary-grade/salary-grade.component */ "./src/app/home/salary-setup/salary-grade/salary-grade.component.ts");
/* harmony import */ var _payscale_grade_payscale_grade_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payscale-grade/payscale-grade.component */ "./src/app/home/salary-setup/payscale-grade/payscale-grade.component.ts");
/* harmony import */ var _payscal_setup_payscal_setup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payscal-setup/payscal-setup.component */ "./src/app/home/salary-setup/payscal-setup/payscal-setup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SalarySetupModule = /** @class */ (function () {
    function SalarySetupModule() {
    }
    SalarySetupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _other_allowance_other_allowance_component__WEBPACK_IMPORTED_MODULE_2__["OtherAllowanceComponent"],
                _salary_year_setup_salary_year_setup_component__WEBPACK_IMPORTED_MODULE_6__["SalaryYearSetupComponent"],
                _salary_period_salary_period_component__WEBPACK_IMPORTED_MODULE_7__["SalaryPeriodComponent"],
                _salary_head_salary_head_component__WEBPACK_IMPORTED_MODULE_8__["SalaryHeadComponent"],
                _salary_grade_salary_grade_component__WEBPACK_IMPORTED_MODULE_9__["SalaryGradeComponent"],
                _payscale_grade_payscale_grade_component__WEBPACK_IMPORTED_MODULE_10__["PayscaleGradeComponent"],
                _payscal_setup_payscal_setup_component__WEBPACK_IMPORTED_MODULE_11__["PayscalSetupComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _salary_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SalarySetupRoutingModule"]
            ]
        })
    ], SalarySetupModule);
    return SalarySetupModule;
}());



/***/ }),

/***/ "./src/app/home/salary-setup/salary-year-setup/salary-year-setup.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-year-setup/salary-year-setup.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Create Salary Year\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n        <form>\r\n            <!--Salary Year Name-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Salary Year Name</label>\r\n              <div class=\"col-sm-7\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Salary Year Name\">\r\n              </div>\r\n            </div>\r\n            <!--Start Date-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">Star Date</label>\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" name=\"fromDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"fromDate\"\r\n                    #d1=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                      <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--End Date-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-form-label col-sm-3 text-sm-right\">End Date</label>\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" name=\"toDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"toDate\"\r\n                    #d2=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                      <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Button-->\r\n            <div class=\"form-group row text-right\">\r\n              <div class=\"demo-inline-spacing mt-3 center\">\r\n                <button type=\"submit\" class=\"btn btn-success\">\r\n                  <span class=\"fas fa-save\"></span> Save</button>\r\n                <button type=\"\" class=\"btn btn-secondary\">\r\n                  <span class=\"fas fa-window-close\"></span> Close</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"card mb-4\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        Per page: &nbsp;\r\n        <select [(ngModel)]=\"perPage\" (change)=\"update()\" class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n          <option *ngFor=\"let limit of [10, 20, 30, 40, 50]\">{{limit}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n          class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form-group\">\r\n        <div class=\"table-responsive mb-4\">\r\n          <table class=\"table table-hover table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th>Salary Year Name</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"tempItems.length==0\">\r\n                <td colspan=\"13\" class=\"font-italic text-center\">No item available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let item of tempItems; let i=index\">\r\n                <td>{{item}}</td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <!-- Pagination -->\r\n        <div class=\"card-body py-0\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm text-sm-left text-center pt-3\">\r\n              <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n            </div>\r\n            <div class=\"col-sm pt-3\">\r\n              <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n              </ngb-pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- / Pagination -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/salary-setup/salary-year-setup/salary-year-setup.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-year-setup/salary-year-setup.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2FsYXJ5LXNldHVwL3NhbGFyeS15ZWFyLXNldHVwL3NhbGFyeS15ZWFyLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/salary-setup/salary-year-setup/salary-year-setup.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/salary-setup/salary-year-setup/salary-year-setup.component.ts ***!
  \************************************************************************************/
/*! exports provided: SalaryYearSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryYearSetupComponent", function() { return SalaryYearSetupComponent; });
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


var SalaryYearSetupComponent = /** @class */ (function (_super) {
    __extends(SalaryYearSetupComponent, _super);
    function SalaryYearSetupComponent() {
        return _super.call(this) || this;
    }
    SalaryYearSetupComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update;
    };
    SalaryYearSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-year-setup',
            template: __webpack_require__(/*! ./salary-year-setup.component.html */ "./src/app/home/salary-setup/salary-year-setup/salary-year-setup.component.html"),
            styles: [__webpack_require__(/*! ./salary-year-setup.component.scss */ "./src/app/home/salary-setup/salary-year-setup/salary-year-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryYearSetupComponent);
    return SalaryYearSetupComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ })

}]);
//# sourceMappingURL=home-salary-setup-salary-setup-module.js.map