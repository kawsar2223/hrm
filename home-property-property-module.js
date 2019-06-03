(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-property-property-module"],{

/***/ "./src/app/home/property/asset-addition/asset-addition.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home/property/asset-addition/asset-addition.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Asset Setup Information\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n    <form>\r\n      <!--Category Name-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Category Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"form-control\">\r\n            <option>Select</option>\r\n            <option>Option-1</option>\r\n            <option>Option-2</option>\r\n            <option>Option-3</option>\r\n            <option>Option-4</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!--Assain Name-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Assain Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"form-control\">\r\n            <option>Select</option>\r\n            <option>Option-1</option>\r\n            <option>Option-2</option>\r\n            <option>Option-3</option>\r\n            <option>Option-4</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!--Model-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Model</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Model\">\r\n        </div>\r\n      </div>\r\n      <!--Serial No-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Serial No</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Serial No\">\r\n        </div>\r\n      </div>\r\n      <!--Purchase Price-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Purchase Price</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Purchase Price\">\r\n        </div>\r\n      </div>\r\n      <!--Configuration-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Configuration</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Configuration\">\r\n        </div>\r\n      </div>\r\n      <!--Warranty Type-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Warranty Type</label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"form-control\">\r\n            <option>Select</option>\r\n            <option>Yes</option>\r\n            <option>No</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!--Purchase Date-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Purchase Date</label>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" name=\"purchaseDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker\r\n              [(ngModel)]=\"purchaseDate\" #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Warranty Expire Date-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Warranty Expire Date</label>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" name=\"expireDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker\r\n              [(ngModel)]=\"expireDate\" #d2=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Note-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Note</label>\r\n        <div class=\"col-sm-8\">\r\n          <textarea class=\"form-control\" placeholder=\"Note\"></textarea>\r\n        </div>\r\n      </div>\r\n      <!--Button-->\r\n      <div class=\"form-group row\">\r\n        <div class=\"demo-inline-spacing mt-3 center\">\r\n          <button type=\"submit\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-save\"></span> Save</button>\r\n          <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button type=\"\" class=\"btn btn-secondary\">\r\n            <span class=\"far fa-window-close\"></span> Close</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    </div>\r\n    <!-- Table-->\r\n    <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n    <div class=\"demo-vertical-spacing\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Model</th>\r\n              <th>Serial</th>\r\n              <th>Configuration</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th>1</th>\r\n              <td>Hyundai Venue</td>\r\n              <td>Ka-154754</td>\r\n              <td>1999cc</td>\r\n            </tr>\r\n          </tbody>\r\n          <tbody>\r\n            <tr>\r\n              <th>2</th>\r\n              <td>Tata Harrier</td>\r\n              <td>Ka-154754</td>\r\n              <td>1999cc</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/property/asset-addition/asset-addition.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/property/asset-addition/asset-addition.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvcGVydHkvYXNzZXQtYWRkaXRpb24vYXNzZXQtYWRkaXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/property/asset-addition/asset-addition.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/property/asset-addition/asset-addition.component.ts ***!
  \**************************************************************************/
/*! exports provided: AssetAdditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetAdditionComponent", function() { return AssetAdditionComponent; });
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

var AssetAdditionComponent = /** @class */ (function () {
    function AssetAdditionComponent() {
    }
    AssetAdditionComponent.prototype.ngOnInit = function () {
    };
    AssetAdditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-addition',
            template: __webpack_require__(/*! ./asset-addition.component.html */ "./src/app/home/property/asset-addition/asset-addition.component.html"),
            styles: [__webpack_require__(/*! ./asset-addition.component.scss */ "./src/app/home/property/asset-addition/asset-addition.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssetAdditionComponent);
    return AssetAdditionComponent;
}());



/***/ }),

/***/ "./src/app/home/property/property-assaign/property-assaign.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/property/property-assaign/property-assaign.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Asset Name Setup</h4>\r\n  <div class=\"card-body row\">\r\n    <!--Left column-->\r\n    <div class=\"col-6\">\r\n      <!--Left column up row-->\r\n      <div class=\"p-3 text-center\" style=\"border: 1px solid lightgray;height: 768px;\">\r\n        <h5>Employee Information:</h5>\r\n        <!--Employee Id-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <!--Designation Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation Name\">\r\n          </div>\r\n        </div>\r\n        <!--Department Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Department Name\">\r\n          </div>\r\n        </div>\r\n        <!--Left column Down row-->\r\n        <h5 style=\"border-top:1px solid lightgray;padding-top: 15px\">Receive From</h5>\r\n        <!--Employee Id-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <!--Designation Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation Name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Left column-->\r\n\r\n    <!--Right column-->\r\n    <div class=\"col-6  text-center\" style=\"border: 1px solid lightgray\">\r\n      <h5 class=\"p-3 text-center\">Property Information</h5>\r\n      <!--Assain Type-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Assain Type</label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"form-control\">\r\n            <option>Select</option>\r\n            <option>Option-1</option>\r\n            <option>Option-2</option>\r\n            <option>Option-3</option>\r\n            <option>Option-4</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!--Category Name-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Category Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"form-control\">\r\n            <option>Select</option>\r\n            <option>Option-1</option>\r\n            <option>Option-2</option>\r\n            <option>Option-3</option>\r\n            <option>Option-4</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!--Property Name-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Property Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"form-control\">\r\n            <option>Select</option>\r\n            <option>Option-1</option>\r\n            <option>Option-2</option>\r\n            <option>Option-3</option>\r\n            <option>Option-4</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!--Model-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Model</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Model\">\r\n        </div>\r\n      </div>\r\n      <!--Serial-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Serial</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Serial\">\r\n        </div>\r\n      </div>\r\n      <!--Configuration-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Configuration</label>\r\n        <div class=\"col-sm-8\">\r\n          <textarea class=\"form-control\" placeholder=\"Configuration\"></textarea>\r\n        </div>\r\n      </div>\r\n      <!--Property Cost-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Property Cost</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Property Cost\">\r\n        </div>\r\n      </div>\r\n      <!--Interest Rate-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Interest Rate</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Interest Rate\">\r\n        </div>\r\n      </div>\r\n      <!--No Of Year-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">No Of Year</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"No Of Year\">\r\n        </div>\r\n      </div>\r\n      <!--Assign Date-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Assign Date</label>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" name=\"assignDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker\r\n              [(ngModel)]=\"assignDate\" #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Warranty Expire Date-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Warranty Expire Date</label>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" name=\"expireDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker\r\n              [(ngModel)]=\"expireDate\" #d2=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Button-->\r\n      <div class=\"form-group row m-auto\">\r\n        <label class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n        <div class=\"demo-inline-spacing mt-3\">\r\n          <button type=\"submit\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-save\"></span> Save</button>\r\n          <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button type=\"\" class=\"btn btn-secondary\">\r\n            <span class=\"far fa-window-close\"></span> Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--End right Column-->\r\n  </div>\r\n  <!-- Table-->\r\n  <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n  <div class=\"demo-vertical-spacing card-footer\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Model</th>\r\n            <th>Serial</th>\r\n            <th>Configuration</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td>Hyundai Venue</td>\r\n            <td>Ka-154754</td>\r\n            <td>1999cc</td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody>\r\n          <tr>\r\n            <th>2</th>\r\n            <td>Tata Harrier</td>\r\n            <td>Ka-154754</td>\r\n            <td>1999cc</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/property/property-assaign/property-assaign.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/property/property-assaign/property-assaign.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvcGVydHkvcHJvcGVydHktYXNzYWlnbi9wcm9wZXJ0eS1hc3NhaWduLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/property/property-assaign/property-assaign.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/property/property-assaign/property-assaign.component.ts ***!
  \******************************************************************************/
/*! exports provided: PropertyAssaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyAssaignComponent", function() { return PropertyAssaignComponent; });
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

var PropertyAssaignComponent = /** @class */ (function () {
    function PropertyAssaignComponent() {
    }
    PropertyAssaignComponent.prototype.ngOnInit = function () {
    };
    PropertyAssaignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-assaign',
            template: __webpack_require__(/*! ./property-assaign.component.html */ "./src/app/home/property/property-assaign/property-assaign.component.html"),
            styles: [__webpack_require__(/*! ./property-assaign.component.scss */ "./src/app/home/property/property-assaign/property-assaign.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertyAssaignComponent);
    return PropertyAssaignComponent;
}());



/***/ }),

/***/ "./src/app/home/property/property-category/property-category.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/property/property-category/property-category.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        Asset Category Setup\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n      <form>\r\n      <!--Asset Category Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Asset Category Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Asset Category Name\">\r\n          </div>\r\n        </div>\r\n      <!--Description-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Description</label>\r\n          <div class=\"col-sm-8\">\r\n            <textarea class=\"form-control\" placeholder=\"Description\"></textarea>\r\n          </div>\r\n        </div>\r\n      <!--Button-->\r\n        <div class=\"form-group row\">\r\n            <div class=\"demo-inline-spacing mt-3  center\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"></span> Save</button>\r\n            <button type=\"clear\" class=\"btn btn-info\">\r\n              <span class=\"ion ion-ios-refresh\"></span> Clear</button>\r\n            <button type=\"\" class=\"btn btn-danger\">\r\n              <span class=\"fas fa-trash\"></span> Delete</button>\r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n              <span class=\"fas fa-arrow-circle-left\"></span> Back</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n      <!-- Table-->\r\n      <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n\r\n<div class=\"demo-vertical-spacing\">\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Asset Category Name</th>\r\n                <th>Description</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th>1</th>\r\n                <td>Camera</td>\r\n                <td>Nikon</td>\r\n              </tr>\r\n            </tbody>\r\n            <tbody>\r\n              <tr>\r\n                <th>2</th>\r\n                <td>Laptop</td>\r\n                <td>Samsung</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n    </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/property/property-category/property-category.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/property/property-category/property-category.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvcGVydHkvcHJvcGVydHktY2F0ZWdvcnkvcHJvcGVydHktY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/property/property-category/property-category.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/property/property-category/property-category.component.ts ***!
  \********************************************************************************/
/*! exports provided: PropertyCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCategoryComponent", function() { return PropertyCategoryComponent; });
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

var PropertyCategoryComponent = /** @class */ (function () {
    function PropertyCategoryComponent() {
        this.loadingIndicator = true;
        this.rows = [];
        this.temp = [];
        this.selected = [];
    }
    PropertyCategoryComponent.prototype.ngOnInit = function () {
    };
    PropertyCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-category',
            template: __webpack_require__(/*! ./property-category.component.html */ "./src/app/home/property/property-category/property-category.component.html"),
            styles: [__webpack_require__(/*! ./property-category.component.scss */ "./src/app/home/property/property-category/property-category.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertyCategoryComponent);
    return PropertyCategoryComponent;
}());



/***/ }),

/***/ "./src/app/home/property/property-disposal/property-disposal.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/home/property/property-disposal/property-disposal.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">Asset Disposal</h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"row pt-3\" style=\"border: 1px solid lightgray;\">\r\n      <!--Left column-->\r\n      <div class=\"col-6\">\r\n\r\n        <h5 class=\"text-center\">Last User Information</h5>\r\n        <!--Employee Id-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                  <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Employee Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n          </div>\r\n        </div>\r\n        <!--Designation Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Designation Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Designation Name\">\r\n          </div>\r\n        </div>\r\n        <!--Department Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Department Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Department Name\">\r\n          </div>\r\n        </div>\r\n        <!--Disposal Date-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Disposal Date</label>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" name=\"disposalDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker\r\n                [(ngModel)]=\"disposalDate\" #d1=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Type-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Type</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Note-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Note</label>\r\n          <div class=\"col-sm-8\">\r\n            <textarea class=\"form-control\" placeholder=\"Note\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"vertical\"></div>\r\n      <!--Right column-->\r\n      <div class=\"col-6\">\r\n        <h5 class=\"text-center\">Property Information</h5>\r\n        <!--Category Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Category Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Property Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Property Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n              <option>Select</option>\r\n              <option>Option-1</option>\r\n              <option>Option-2</option>\r\n              <option>Option-3</option>\r\n              <option>Option-4</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!--Model-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Model</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Model\">\r\n          </div>\r\n        </div>\r\n        <!--Serial-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Serial</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Serial\">\r\n          </div>\r\n        </div>\r\n        <!--Configuration-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Configuration</label>\r\n          <div class=\"col-sm-8\">\r\n            <textarea class=\"form-control\" placeholder=\"Configuration\"></textarea>\r\n          </div>\r\n        </div>\r\n        <!--Button-->\r\n        <div class=\"form-group row m-auto\">\r\n          <label class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n          <div class=\"demo-inline-spacing mt-3\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"></span> Save</button>\r\n            <button type=\"clear\" class=\"btn btn-info\">\r\n              <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n              <span class=\"far fa-window-close\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--End row-->\r\n  </div>\r\n  <!--end body Card-->\r\n  <!-- Table-->\r\n  <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n  <div class=\"demo-vertical-spacing card-footer\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Model</th>\r\n            <th>Serial</th>\r\n            <th>Configuration</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>1</th>\r\n            <td>Hyundai Venue</td>\r\n            <td>Ka-154754</td>\r\n            <td>1999cc</td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody>\r\n          <tr>\r\n            <th>2</th>\r\n            <td>Tata Harrier</td>\r\n            <td>Ka-154754</td>\r\n            <td>1999cc</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/property/property-disposal/property-disposal.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/property/property-disposal/property-disposal.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vertical {\n  border-left: 1px solid lightgray;\n  height: 433px;\n  position: absolute;\n  left: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9wZXJ0eS9wcm9wZXJ0eS1kaXNwb3NhbC9DOlxcVXNlcnNcXEFuZHJvaWRcXERlc2t0b3BcXEdpdGJ1aWxkXFxIUk1TL3NyY1xcYXBwXFxob21lXFxwcm9wZXJ0eVxccHJvcGVydHktZGlzcG9zYWxcXHByb3BlcnR5LWRpc3Bvc2FsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixrQkFBaUI7RUFDakIsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9wZXJ0eS9wcm9wZXJ0eS1kaXNwb3NhbC9wcm9wZXJ0eS1kaXNwb3NhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbCB7IFxyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyYXk7IFxyXG4gICAgaGVpZ2h0OiA0MzNweDsgXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTsgXHJcbiAgICBsZWZ0OiA1MCU7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/property/property-disposal/property-disposal.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/property/property-disposal/property-disposal.component.ts ***!
  \********************************************************************************/
/*! exports provided: PropertyDisposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDisposalComponent", function() { return PropertyDisposalComponent; });
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

var PropertyDisposalComponent = /** @class */ (function () {
    function PropertyDisposalComponent() {
    }
    PropertyDisposalComponent.prototype.ngOnInit = function () {
    };
    PropertyDisposalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-disposal',
            template: __webpack_require__(/*! ./property-disposal.component.html */ "./src/app/home/property/property-disposal/property-disposal.component.html"),
            styles: [__webpack_require__(/*! ./property-disposal.component.scss */ "./src/app/home/property/property-disposal/property-disposal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertyDisposalComponent);
    return PropertyDisposalComponent;
}());



/***/ }),

/***/ "./src/app/home/property/property-name/property-name.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/property/property-name/property-name.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n        Asset Name Setup\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"col-md-7 center\">\r\n      <form>\r\n      <!--Asset Category Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Asset Category Name</label>\r\n          <div class=\"col-sm-8\">\r\n              <select class=\"form-control\">\r\n                  <option>Select</option>\r\n                  <option>Option-1</option>\r\n                  <option>Option-2</option>\r\n                  <option>Option-3</option>\r\n                  <option>Option-4</option>\r\n                </select>\r\n          </div>\r\n        </div>\r\n      <!--Asset Name-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Asset Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Asset Name\">\r\n          </div>\r\n        </div>\r\n      <!--Description-->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\">Description</label>\r\n          <div class=\"col-sm-8\">\r\n            <textarea class=\"form-control\" placeholder=\"Description\"></textarea>\r\n          </div>\r\n        </div>\r\n      <!--Button-->\r\n        <div class=\"form-group row\">\r\n            <div class=\"demo-inline-spacing mt-3 center\">\r\n            <button type=\"submit\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"></span> Save</button>\r\n            <button type=\"clear\" class=\"btn btn-info\">\r\n              <span class=\"ion ion-ios-refresh\"></span> Clear</button>\r\n            <button type=\"\" class=\"btn btn-danger\">\r\n              <span class=\"fas fa-trash\"></span> Delete</button>\r\n            <button type=\"\" class=\"btn btn-secondary\">\r\n              <span class=\"fas fa-arrow-circle-left\"></span> Back</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      </div>\r\n      <!-- Table-->\r\n      <hr class=\"border-light container-m--x mt-0 mb-4\">\r\n\r\n<div class=\"demo-vertical-spacing\">\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Asset Category Name</th>\r\n                <th>Description</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th>1</th>\r\n                <td>Camera</td>\r\n                <td>Nikon</td>\r\n              </tr>\r\n            </tbody>\r\n            <tbody>\r\n              <tr>\r\n                <th>2</th>\r\n                <td>Laptop</td>\r\n                <td>Samsung</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n    </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/property/property-name/property-name.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/property/property-name/property-name.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvcGVydHkvcHJvcGVydHktbmFtZS9wcm9wZXJ0eS1uYW1lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/property/property-name/property-name.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/property/property-name/property-name.component.ts ***!
  \************************************************************************/
/*! exports provided: PropertyNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyNameComponent", function() { return PropertyNameComponent; });
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

var PropertyNameComponent = /** @class */ (function () {
    function PropertyNameComponent() {
    }
    PropertyNameComponent.prototype.ngOnInit = function () {
    };
    PropertyNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-name',
            template: __webpack_require__(/*! ./property-name.component.html */ "./src/app/home/property/property-name/property-name.component.html"),
            styles: [__webpack_require__(/*! ./property-name.component.scss */ "./src/app/home/property/property-name/property-name.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertyNameComponent);
    return PropertyNameComponent;
}());



/***/ }),

/***/ "./src/app/home/property/property-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/property/property-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: PropertyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyRoutingModule", function() { return PropertyRoutingModule; });
/* harmony import */ var _vehicle_tax_assagin_vehicle_tax_assagin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-tax-assagin/vehicle-tax-assagin.component */ "./src/app/home/property/vehicle-tax-assagin/vehicle-tax-assagin.component.ts");
/* harmony import */ var _property_name_property_name_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-name/property-name.component */ "./src/app/home/property/property-name/property-name.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _property_category_property_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property-category/property-category.component */ "./src/app/home/property/property-category/property-category.component.ts");
/* harmony import */ var _asset_addition_asset_addition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset-addition/asset-addition.component */ "./src/app/home/property/asset-addition/asset-addition.component.ts");
/* harmony import */ var _property_assaign_property_assaign_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./property-assaign/property-assaign.component */ "./src/app/home/property/property-assaign/property-assaign.component.ts");
/* harmony import */ var _property_disposal_property_disposal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./property-disposal/property-disposal.component */ "./src/app/home/property/property-disposal/property-disposal.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./report/report.component */ "./src/app/home/property/report/report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PropertyRoutingModule = /** @class */ (function () {
    function PropertyRoutingModule() {
    }
    PropertyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'property-category', component: _property_category_property_category_component__WEBPACK_IMPORTED_MODULE_4__["PropertyCategoryComponent"] },
                    { path: 'property-name', component: _property_name_property_name_component__WEBPACK_IMPORTED_MODULE_1__["PropertyNameComponent"] },
                    { path: 'vehicle-tax-assagin', component: _vehicle_tax_assagin_vehicle_tax_assagin_component__WEBPACK_IMPORTED_MODULE_0__["VehicleTaxAssaginComponent"] },
                    { path: 'asset-addition', component: _asset_addition_asset_addition_component__WEBPACK_IMPORTED_MODULE_5__["AssetAdditionComponent"] },
                    { path: 'property-assaign', component: _property_assaign_property_assaign_component__WEBPACK_IMPORTED_MODULE_6__["PropertyAssaignComponent"] },
                    { path: 'property-disposal', component: _property_disposal_property_disposal_component__WEBPACK_IMPORTED_MODULE_7__["PropertyDisposalComponent"] },
                    { path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_8__["ReportComponent"] },
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], PropertyRoutingModule);
    return PropertyRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/property/property.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/property/property.module.ts ***!
  \**************************************************/
/*! exports provided: PropertyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyModule", function() { return PropertyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _property_category_property_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-category/property-category.component */ "./src/app/home/property/property-category/property-category.component.ts");
/* harmony import */ var _property_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-routing.module */ "./src/app/home/property/property-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _property_name_property_name_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property-name/property-name.component */ "./src/app/home/property/property-name/property-name.component.ts");
/* harmony import */ var _vehicle_tax_assagin_vehicle_tax_assagin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-tax-assagin/vehicle-tax-assagin.component */ "./src/app/home/property/vehicle-tax-assagin/vehicle-tax-assagin.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _asset_addition_asset_addition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset-addition/asset-addition.component */ "./src/app/home/property/asset-addition/asset-addition.component.ts");
/* harmony import */ var _property_assaign_property_assaign_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./property-assaign/property-assaign.component */ "./src/app/home/property/property-assaign/property-assaign.component.ts");
/* harmony import */ var _property_disposal_property_disposal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./property-disposal/property-disposal.component */ "./src/app/home/property/property-disposal/property-disposal.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./report/report.component */ "./src/app/home/property/report/report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PropertyModule = /** @class */ (function () {
    function PropertyModule() {
    }
    PropertyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _property_routing_module__WEBPACK_IMPORTED_MODULE_3__["PropertyRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [
                _property_category_property_category_component__WEBPACK_IMPORTED_MODULE_2__["PropertyCategoryComponent"],
                _property_name_property_name_component__WEBPACK_IMPORTED_MODULE_5__["PropertyNameComponent"],
                _vehicle_tax_assagin_vehicle_tax_assagin_component__WEBPACK_IMPORTED_MODULE_6__["VehicleTaxAssaginComponent"],
                _asset_addition_asset_addition_component__WEBPACK_IMPORTED_MODULE_8__["AssetAdditionComponent"],
                _property_assaign_property_assaign_component__WEBPACK_IMPORTED_MODULE_9__["PropertyAssaignComponent"],
                _property_disposal_property_disposal_component__WEBPACK_IMPORTED_MODULE_10__["PropertyDisposalComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_11__["ReportComponent"],
            ],
        })
    ], PropertyModule);
    return PropertyModule;
}());



/***/ }),

/***/ "./src/app/home/property/report/report.component.html":
/*!************************************************************!*\
  !*** ./src/app/home/property/report/report.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n      Property Report\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <form>\r\n      <div class=\"col-md-7 center\">\r\n    <!--Report Name-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Report Name</label>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"form-control\">\r\n                <option>Select</option>\r\n                <option>Option-1</option>\r\n                <option>Option-2</option>\r\n                <option>Option-3</option>\r\n                <option>Option-4</option>\r\n              </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Button-->\r\n      <div class=\"form-group row\">\r\n          <div class=\"demo-inline-spacing mt-3 center\">\r\n          <button type=\"submit\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n   \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/home/property/report/report.component.scss":
/*!************************************************************!*\
  !*** ./src/app/home/property/report/report.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvcGVydHkvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/property/report/report.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/property/report/report.component.ts ***!
  \**********************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
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

var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/home/property/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/home/property/report/report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/home/property/vehicle-tax-assagin/vehicle-tax-assagin.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/home/property/vehicle-tax-assagin/vehicle-tax-assagin.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Vehicle/Accommodation Tax Assagin\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-7 center\">\r\n    <form>\r\n      <!--Employee Id-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Employee ID</label>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Employee ID\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-primary\" type=\"button\">\r\n                <span class=\"fas fa-search\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Employee Name-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Employee Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Employee Name\">\r\n        </div>\r\n      </div>\r\n      <!--Department Name-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Department Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Department Name\">\r\n        </div>\r\n      </div>\r\n      <!--Designation Name-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Designation Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Designation Name\">\r\n        </div>\r\n      </div>\r\n      <!--Joining Date-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Joining Date</label>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" name=\"joiningDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"joiningDate\"\r\n              #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Property Type-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Property Type</label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"form-control\">\r\n            <option>Select</option>\r\n            <option>Option-1</option>\r\n            <option>Option-2</option>\r\n            <option>Option-3</option>\r\n            <option>Option-4</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!--Assain Type-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Assain Type</label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"form-control\">\r\n            <option>Select</option>\r\n            <option>Option-1</option>\r\n            <option>Option-2</option>\r\n            <option>Option-3</option>\r\n            <option>Option-4</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!--Assain Date-->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right\">Assain Date</label>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" name=\"toDate\" placeholder=\"dd-mm-yyyy\" ngbDatepicker [(ngModel)]=\"toDate\"\r\n              #d2=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"d2.toggle()\" type=\"button\">\r\n                <span class=\"ion ion-md-calendar\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Button-->\r\n      <div class=\"form-group row\">\r\n        <div class=\"demo-inline-spacing mt-3 center\">\r\n          <button type=\"submit\" class=\"btn btn-success\">\r\n            <span class=\"fas fa-save\"></span> Save</button>\r\n          <button type=\"clear\" class=\"btn btn-info\">\r\n            <span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n          <button type=\"\" class=\"btn btn-secondary\">\r\n            <span class=\"far fa-window-close\"></span> Close</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/property/vehicle-tax-assagin/vehicle-tax-assagin.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/home/property/vehicle-tax-assagin/vehicle-tax-assagin.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvcGVydHkvdmVoaWNsZS10YXgtYXNzYWdpbi92ZWhpY2xlLXRheC1hc3NhZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/property/vehicle-tax-assagin/vehicle-tax-assagin.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/property/vehicle-tax-assagin/vehicle-tax-assagin.component.ts ***!
  \************************************************************************************/
/*! exports provided: VehicleTaxAssaginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTaxAssaginComponent", function() { return VehicleTaxAssaginComponent; });
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

var VehicleTaxAssaginComponent = /** @class */ (function () {
    function VehicleTaxAssaginComponent() {
    }
    VehicleTaxAssaginComponent.prototype.ngOnInit = function () {
    };
    VehicleTaxAssaginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-tax-assagin',
            template: __webpack_require__(/*! ./vehicle-tax-assagin.component.html */ "./src/app/home/property/vehicle-tax-assagin/vehicle-tax-assagin.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-tax-assagin.component.scss */ "./src/app/home/property/vehicle-tax-assagin/vehicle-tax-assagin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VehicleTaxAssaginComponent);
    return VehicleTaxAssaginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-property-property-module.js.map