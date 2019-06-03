(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-tour-tour-module"],{

/***/ "./src/app/home/tour/tour-apply/tour-apply.component.html":
/*!****************************************************************!*\
  !*** ./src/app/home/tour/tour-apply/tour-apply.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"empId\" class=\"col-md-4\">Employee Id</label>\r\n          <div class=\"input-group col-md-6\">\r\n            <input type=\"text\" name=\"employeeId\" id=\"empId\" class=\"form-control\" placeholder=\"Employee Id\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-info\">\r\n                <span class=\"fas fa-search\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"empName\" class=\"col-md-4\">Employee Name</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" name=\"employeeName\" id=\"empName\" class=\"form-control\" disabled>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"designation\" class=\"col-md-4\">Designation</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" name=\"designation\" id=\"designation\" class=\"form-control\" disabled>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"department\" class=\"col-md-4\">Department</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" name=\"department\" id=\"department\" class=\"form-control\" disabled>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"purpose\" class=\"col-md-4\">Tour Purpose</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" name=\"purpose\" id=\"purpose\" class=\"form-control\" placeholder=\"Tour Purpose\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"destination\" class=\"col-md-4\">Destination</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" name=\"destination\" id=\"destination\" class=\"form-control\" placeholder=\"Destination\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"form-label col-md-4\">From Date</label>\r\n          <div class=\"input-group col-md-8\">\r\n            <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" name=\"from\" ngbDatepicker [(ngModel)]=\"from\"\r\n              [displayMonths]=\"1\" #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"form-label col-md-4\">To Date</label>\r\n          <div class=\"input-group col-md-8\">\r\n            <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" name=\"to\" ngbDatepicker [(ngModel)]=\"to\"\r\n              [displayMonths]=\"1\" #d2=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"duration\" class=\"col-md-4\">Tour Duration</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" name=\"duration\" id=\"duration\" class=\"form-control\" disabled>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"applyDate\" class=\"form-label col-md-4\">Apply Date</label>\r\n          <div class=\"input-group col-md-8\">\r\n            <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" name=\"applyDate\" ngbDatepicker [(ngModel)]=\"applyDate\"\r\n              [displayMonths]=\"1\" #d3=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d3.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"contactNo\" class=\"col-md-4\">Contact No</label>\r\n          <div class=\"input-group col-md-8\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-info\">\r\n                <span class=\"ion ion-md-call\"></span>\r\n              </button>\r\n            </div>\r\n            <input type=\"text\" name=\"contactNo\" id=\"contactNo\" class=\"form-control\" placeholder=\"Contact Number\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Apply Date</th>\r\n              <th>Start Date</th>\r\n              <th>End Date</th>\r\n              <th>Duration</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n          <h6 class=\"card-header\">Apply to</h6>\r\n          <div class=\"card-body\">\r\n              <div class=\"form-group row\">\r\n                  <label for=\"empId\" class=\"col-md-4\">Employee Id</label>\r\n                  <div class=\"input-group col-md-6\">\r\n                    <input type=\"text\" name=\"employeeId\" id=\"empId\" class=\"form-control\" placeholder=\"Employee Id\">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-info\">\r\n                        <span class=\"fas fa-search\"></span>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"empName\" class=\"col-md-4\">Employee Name</label>\r\n                  <div class=\"col-md-8\">\r\n                    <input type=\"text\" name=\"employeeName\" id=\"empName\" class=\"form-control\" disabled>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"designation\" class=\"col-md-4\">Designation</label>\r\n                  <div class=\"col-md-8\">\r\n                    <input type=\"text\" name=\"designation\" id=\"designation\" class=\"form-control\" disabled>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <h6 class=\"card-header\">Duties will be performed by</h6>\r\n            <div class=\"card-body\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"empId\" class=\"col-md-4\">Employee Id</label>\r\n                    <div class=\"input-group col-md-6\">\r\n                      <input type=\"text\" name=\"employeeId\" id=\"empId\" class=\"form-control\" placeholder=\"Employee Id\">\r\n                      <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-info\">\r\n                          <span class=\"fas fa-search\"></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label for=\"empName\" class=\"col-md-4\">Employee Name</label>\r\n                    <div class=\"col-md-8\">\r\n                      <input type=\"text\" name=\"employeeName\" id=\"empName\" class=\"form-control\" disabled>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label for=\"designation\" class=\"col-md-4\">Designation</label>\r\n                    <div class=\"col-md-8\">\r\n                      <input type=\"text\" name=\"designation\" id=\"designation\" class=\"form-control\" disabled>\r\n                    </div>\r\n                  </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"></div>\r\n      <div class=\"col-md-6 demo-inline-spacing center\">\r\n        <button class=\"btn btn-success\">Apply</button>\r\n        <button class=\"btn btn-primary\"><span class=\"fas fa-print\"></span> Print</button>\r\n        <button class=\"btn btn-secondary\"><span class=\"ion ion-md-close\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/tour/tour-apply/tour-apply.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/home/tour/tour-apply/tour-apply.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG91ci90b3VyLWFwcGx5L3RvdXItYXBwbHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/tour/tour-apply/tour-apply.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/tour/tour-apply/tour-apply.component.ts ***!
  \**************************************************************/
/*! exports provided: TourApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourApplyComponent", function() { return TourApplyComponent; });
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

var TourApplyComponent = /** @class */ (function () {
    function TourApplyComponent() {
        this.title = "Tour Apply";
    }
    TourApplyComponent.prototype.ngOnInit = function () {
    };
    TourApplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tour-apply',
            template: __webpack_require__(/*! ./tour-apply.component.html */ "./src/app/home/tour/tour-apply/tour-apply.component.html"),
            styles: [__webpack_require__(/*! ./tour-apply.component.scss */ "./src/app/home/tour/tour-apply/tour-apply.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TourApplyComponent);
    return TourApplyComponent;
}());



/***/ }),

/***/ "./src/app/home/tour/tour-approve-hr/tour-approve-hr.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/tour/tour-approve-hr/tour-approve-hr.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n    <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n          <div class=\"card mb-4 center\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  Per page: &nbsp;\r\n                  <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                    class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                    <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                    class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body py-0\">\r\n              <div class=\"row\">\r\n                <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Id</th>\r\n                      <th>Employee Name</th>\r\n                      <th>Department</th>\r\n                      <th>Designation</th>\r\n                      <th>Start Date</th>\r\n                      <th>End Date</th>\r\n                      <th>Days</th>\r\n                      <th>Tour Purpose</th>\r\n                      <th>Recommend</th>\r\n                      <th>Approve</th>\r\n                      <th>Cancel</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"tempItems.length==0\">\r\n                      <td colspan=\"12\" class=\"font-italic text-center\">No Item available</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of tempItems\">\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                      <td>{{item}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- Pagination -->\r\n              <div class=\"row\">\r\n                <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                  <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n                </div>\r\n                <div class=\"col-sm pt-3\">\r\n                  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                    (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                  </ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / Pagination -->\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/tour/tour-approve-hr/tour-approve-hr.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/tour/tour-approve-hr/tour-approve-hr.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG91ci90b3VyLWFwcHJvdmUtaHIvdG91ci1hcHByb3ZlLWhyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/tour/tour-approve-hr/tour-approve-hr.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/tour/tour-approve-hr/tour-approve-hr.component.ts ***!
  \************************************************************************/
/*! exports provided: TourApproveHrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourApproveHrComponent", function() { return TourApproveHrComponent; });
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


var TourApproveHrComponent = /** @class */ (function (_super) {
    __extends(TourApproveHrComponent, _super);
    function TourApproveHrComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Tour Approve by HR";
        return _this;
    }
    TourApproveHrComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    TourApproveHrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tour-approve-hr',
            template: __webpack_require__(/*! ./tour-approve-hr.component.html */ "./src/app/home/tour/tour-approve-hr/tour-approve-hr.component.html"),
            styles: [__webpack_require__(/*! ./tour-approve-hr.component.scss */ "./src/app/home/tour/tour-approve-hr/tour-approve-hr.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TourApproveHrComponent);
    return TourApproveHrComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/tour/tour-approve/tour-approve.component.html":
/*!********************************************************************!*\
  !*** ./src/app/home/tour/tour-approve/tour-approve.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">{{title}}</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 center\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"empId\" class=\"col-md-4\">Forward to Id</label>\r\n          <div class=\"input-group col-md-8\">\r\n            <input type=\"text\" name=\"employeeId\" id=\"empId\" class=\"form-control\" placeholder=\"Forward to Id\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-info\">\r\n                <span class=\"fas fa-search\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"empName\" class=\"col-md-4\">Name</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" name=\"employeeName\" id=\"empName\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"designation\" class=\"col-md-4\">Designation</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" name=\"designation\" id=\"designation\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card mb-4 center\">\r\n          <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                Per page: &nbsp;\r\n                <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n                  class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n                  <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col\">\r\n                <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n                  class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body py-0\">\r\n            <div class=\"row\">\r\n              <table class=\"table table-hover table-striped mb-2 table-responsive\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Id</th>\r\n                    <th>Employee Name</th>\r\n                    <th>Department</th>\r\n                    <th>Designation</th>\r\n                    <th>Start Date</th>\r\n                    <th>End Date</th>\r\n                    <th>Days</th>\r\n                    <th>Tour Purpose</th>\r\n                    <th>Remarks</th>\r\n                    <th>Recommend</th>\r\n                    <th>Approve</th>\r\n                    <th>Cancel</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"tempItems.length==0\">\r\n                    <td colspan=\"12\" class=\"font-italic text-center\">No Item available</td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of tempItems\">\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                    <td>{{item}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- Pagination -->\r\n            <div class=\"row\">\r\n              <div class=\"col-sm text-sm-left text-center pt-3\">\r\n                <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n              </div>\r\n              <div class=\"col-sm pt-3\">\r\n                <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n                  (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n                </ngb-pagination>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- / Pagination -->\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/tour/tour-approve/tour-approve.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/home/tour/tour-approve/tour-approve.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG91ci90b3VyLWFwcHJvdmUvdG91ci1hcHByb3ZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/tour/tour-approve/tour-approve.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/tour/tour-approve/tour-approve.component.ts ***!
  \******************************************************************/
/*! exports provided: TourApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourApproveComponent", function() { return TourApproveComponent; });
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


var TourApproveComponent = /** @class */ (function (_super) {
    __extends(TourApproveComponent, _super);
    function TourApproveComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Tour Approve";
        return _this;
    }
    TourApproveComponent.prototype.ngOnInit = function () {
        this.items = [];
        this.update();
    };
    TourApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tour-approve',
            template: __webpack_require__(/*! ./tour-approve.component.html */ "./src/app/home/tour/tour-approve/tour-approve.component.html"),
            styles: [__webpack_require__(/*! ./tour-approve.component.scss */ "./src/app/home/tour/tour-approve/tour-approve.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TourApproveComponent);
    return TourApproveComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/tour/tour-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/tour/tour-routing.module.ts ***!
  \**************************************************/
/*! exports provided: TourRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourRoutingModule", function() { return TourRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tour_apply_tour_apply_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tour-apply/tour-apply.component */ "./src/app/home/tour/tour-apply/tour-apply.component.ts");
/* harmony import */ var _tour_approve_tour_approve_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tour-approve/tour-approve.component */ "./src/app/home/tour/tour-approve/tour-approve.component.ts");
/* harmony import */ var _tour_approve_hr_tour_approve_hr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tour-approve-hr/tour-approve-hr.component */ "./src/app/home/tour/tour-approve-hr/tour-approve-hr.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TourRoutingModule = /** @class */ (function () {
    function TourRoutingModule() {
    }
    TourRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
                    { path: 'tour-apply', component: _tour_apply_tour_apply_component__WEBPACK_IMPORTED_MODULE_3__["TourApplyComponent"] },
                    { path: 'tour-approve', component: _tour_approve_tour_approve_component__WEBPACK_IMPORTED_MODULE_4__["TourApproveComponent"] },
                    { path: 'tour-approve-hr', component: _tour_approve_hr_tour_approve_hr_component__WEBPACK_IMPORTED_MODULE_5__["TourApproveHrComponent"] },
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], TourRoutingModule);
    return TourRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/tour/tour.module.ts":
/*!******************************************!*\
  !*** ./src/app/home/tour/tour.module.ts ***!
  \******************************************/
/*! exports provided: TourModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourModule", function() { return TourModule; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tour_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tour-routing.module */ "./src/app/home/tour/tour-routing.module.ts");
/* harmony import */ var _tour_apply_tour_apply_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tour-apply/tour-apply.component */ "./src/app/home/tour/tour-apply/tour-apply.component.ts");
/* harmony import */ var _tour_approve_tour_approve_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tour-approve/tour-approve.component */ "./src/app/home/tour/tour-approve/tour-approve.component.ts");
/* harmony import */ var _tour_approve_hr_tour_approve_hr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tour-approve-hr/tour-approve-hr.component */ "./src/app/home/tour/tour-approve-hr/tour-approve-hr.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TourModule = /** @class */ (function () {
    function TourModule() {
    }
    TourModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_tour_apply_tour_apply_component__WEBPACK_IMPORTED_MODULE_5__["TourApplyComponent"], _tour_approve_tour_approve_component__WEBPACK_IMPORTED_MODULE_6__["TourApproveComponent"], _tour_approve_hr_tour_approve_hr_component__WEBPACK_IMPORTED_MODULE_7__["TourApproveHrComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"],
                _tour_routing_module__WEBPACK_IMPORTED_MODULE_4__["TourRoutingModule"]
            ]
        })
    ], TourModule);
    return TourModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-tour-tour-module.js.map