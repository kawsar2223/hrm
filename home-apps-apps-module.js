(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-apps-apps-module"],{

/***/ "./src/app/home/apps/active-lnactive/active-lnactive.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/apps/active-lnactive/active-lnactive.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n    <h4 class=\"card-header text-center bg-light\">\r\n      Employee Location Setup\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <br />\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Code\r\n          </label>\r\n          <div class=\"input-group col-sm-4\">\r\n            <input class=\"form-control\" name=\"\" placeholder=\"Employee Code\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">\r\n              <span class=\"fas fa-search\"></span> Get Location </button>\r\n          </div>\r\n        </div>\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Location</th>\r\n                <th>Latitude</th>\r\n                <th>Longitude</th>\r\n                <th>Distance</th>\r\n                <th></th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n    \r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>0</td>\r\n                <td></td>\r\n                <td></td>\r\n               \r\n              </tr>\r\n              <tr>\r\n    \r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>0</td>\r\n                <td></td>\r\n                <td></td>\r\n               \r\n              </tr>\r\n              <tr>\r\n    \r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>0</td>\r\n                <td></td>\r\n                <td></td>\r\n               \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"row\">\r\n          <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n              <button type=\"\" class=\"btn btn-secondary \">\r\n                <span class=\"fas fa-window-close\"> Close</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/home/apps/active-lnactive/active-lnactive.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/apps/active-lnactive/active-lnactive.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwcy9hY3RpdmUtbG5hY3RpdmUvYWN0aXZlLWxuYWN0aXZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/apps/active-lnactive/active-lnactive.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/apps/active-lnactive/active-lnactive.component.ts ***!
  \************************************************************************/
/*! exports provided: ActiveLnactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveLnactiveComponent", function() { return ActiveLnactiveComponent; });
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

var ActiveLnactiveComponent = /** @class */ (function () {
    function ActiveLnactiveComponent() {
    }
    ActiveLnactiveComponent.prototype.ngOnInit = function () {
    };
    ActiveLnactiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-active-lnactive',
            template: __webpack_require__(/*! ./active-lnactive.component.html */ "./src/app/home/apps/active-lnactive/active-lnactive.component.html"),
            styles: [__webpack_require__(/*! ./active-lnactive.component.scss */ "./src/app/home/apps/active-lnactive/active-lnactive.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActiveLnactiveComponent);
    return ActiveLnactiveComponent;
}());



/***/ }),

/***/ "./src/app/home/apps/apps-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/apps/apps-routing.module.ts ***!
  \**************************************************/
/*! exports provided: AppsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsRoutingModule", function() { return AppsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _location_setup_location_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-setup/location-setup.component */ "./src/app/home/apps/location-setup/location-setup.component.ts");
/* harmony import */ var _active_lnactive_active_lnactive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active-lnactive/active-lnactive.component */ "./src/app/home/apps/active-lnactive/active-lnactive.component.ts");
/* harmony import */ var _location_show_location_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location-show/location-show.component */ "./src/app/home/apps/location-show/location-show.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppsRoutingModule = /** @class */ (function () {
    function AppsRoutingModule() {
    }
    AppsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'location-setup', component: _location_setup_location_setup_component__WEBPACK_IMPORTED_MODULE_2__["LocationSetupComponent"] },
                    { path: 'location-show', component: _location_show_location_show_component__WEBPACK_IMPORTED_MODULE_4__["LocationShowComponent"] },
                    { path: 'active-lnactive', component: _active_lnactive_active_lnactive_component__WEBPACK_IMPORTED_MODULE_3__["ActiveLnactiveComponent"] }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppsRoutingModule);
    return AppsRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/apps/apps.module.ts":
/*!******************************************!*\
  !*** ./src/app/home/apps/apps.module.ts ***!
  \******************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps-routing.module */ "./src/app/home/apps/apps-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _location_setup_location_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-setup/location-setup.component */ "./src/app/home/apps/location-setup/location-setup.component.ts");
/* harmony import */ var _location_show_location_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-show/location-show.component */ "./src/app/home/apps/location-show/location-show.component.ts");
/* harmony import */ var _active_lnactive_active_lnactive_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./active-lnactive/active-lnactive.component */ "./src/app/home/apps/active-lnactive/active-lnactive.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppsModule = /** @class */ (function () {
    function AppsModule() {
    }
    AppsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _location_setup_location_setup_component__WEBPACK_IMPORTED_MODULE_5__["LocationSetupComponent"],
                _location_show_location_show_component__WEBPACK_IMPORTED_MODULE_6__["LocationShowComponent"],
                _active_lnactive_active_lnactive_component__WEBPACK_IMPORTED_MODULE_7__["ActiveLnactiveComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppsRoutingModule"]
            ]
        })
    ], AppsModule);
    return AppsModule;
}());



/***/ }),

/***/ "./src/app/home/apps/location-setup/location-setup.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/apps/location-setup/location-setup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Location Setup\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <br />\r\n    <div class=\"col-md-7 center\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right\"> Employee Code\r\n            </label>\r\n            <div class=\"input-group col-sm-6\">\r\n              <input class=\"form-control\" name=\"\" placeholder=\"Employee Code\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"input-group-text btn btn-info\" type=\"button\">\r\n                  <span class=\"ion ion-md-search\" style=\"cursor: pointer;\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <button type=\"submit\" class=\"btn btn-primary\">\r\n                <span class=\"fas fa-search\"></span> Search </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Location\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Location\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Lotitude\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Lotitude\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Longitude\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Longitude\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label col-sm-4 text-sm-right \">Distance\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Distance\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n            <button type=\"\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"> Save</span>\r\n            </button>\r\n            <button type=\"clear\" class=\"btn btn-info\">\r\n                <span class=\"ion ion-ios-refresh\"></span> Reset\r\n              </button>\r\n            </div>\r\n\r\n          </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/apps/location-setup/location-setup.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/apps/location-setup/location-setup.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwcy9sb2NhdGlvbi1zZXR1cC9sb2NhdGlvbi1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/apps/location-setup/location-setup.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/apps/location-setup/location-setup.component.ts ***!
  \**********************************************************************/
/*! exports provided: LocationSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSetupComponent", function() { return LocationSetupComponent; });
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

var LocationSetupComponent = /** @class */ (function () {
    function LocationSetupComponent() {
    }
    LocationSetupComponent.prototype.ngOnInit = function () {
    };
    LocationSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location-setup',
            template: __webpack_require__(/*! ./location-setup.component.html */ "./src/app/home/apps/location-setup/location-setup.component.html"),
            styles: [__webpack_require__(/*! ./location-setup.component.scss */ "./src/app/home/apps/location-setup/location-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationSetupComponent);
    return LocationSetupComponent;
}());



/***/ }),

/***/ "./src/app/home/apps/location-show/location-show.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/home/apps/location-show/location-show.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    Employee Location show\r\n  </h4>\r\n  <div class=\"card-body\">\r\n    <br />\r\n    <div class=\"col-md-7 center\">\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-4 text-sm-right \">Enter Latitude\r\n        </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Latitude\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-form-label col-sm-4 text-sm-right \">Enter Longitude\r\n          </label>\r\n          <div class=\"col-sm-6\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Longitude\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"demo-inline-spacing mt-3\" style=\"margin:0 auto\">\r\n            <button type=\"\" class=\"btn btn-success\">\r\n              <span class=\"fas fa-save\"> Submit</span>\r\n            </button>\r\n            </div>\r\n\r\n          </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/apps/location-show/location-show.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/home/apps/location-show/location-show.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwcy9sb2NhdGlvbi1zaG93L2xvY2F0aW9uLXNob3cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/apps/location-show/location-show.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/apps/location-show/location-show.component.ts ***!
  \********************************************************************/
/*! exports provided: LocationShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationShowComponent", function() { return LocationShowComponent; });
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

var LocationShowComponent = /** @class */ (function () {
    function LocationShowComponent() {
    }
    LocationShowComponent.prototype.ngOnInit = function () {
    };
    LocationShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location-show',
            template: __webpack_require__(/*! ./location-show.component.html */ "./src/app/home/apps/location-show/location-show.component.html"),
            styles: [__webpack_require__(/*! ./location-show.component.scss */ "./src/app/home/apps/location-show/location-show.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationShowComponent);
    return LocationShowComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-apps-apps-module.js.map