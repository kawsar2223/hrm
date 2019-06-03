(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/addition/addition.module": [
		"./src/app/home/addition/addition.module.ts",
		"common",
		"home-addition-addition-module"
	],
	"./home/apprisal/apprisal.module": [
		"./src/app/home/apprisal/apprisal.module.ts",
		"home-apprisal-apprisal-module"
	],
	"./home/apps/apps.module": [
		"./src/app/home/apps/apps.module.ts",
		"home-apps-apps-module"
	],
	"./home/attendance/attendance.module": [
		"./src/app/home/attendance/attendance.module.ts",
		"default~home-attendance-attendance-module~home-hr-menu-hr-menu-module~home-system-setup-basic-entry-~e2fc26bb",
		"common",
		"home-attendance-attendance-module"
	],
	"./home/bonus/bonus.module": [
		"./src/app/home/bonus/bonus.module.ts",
		"home-bonus-bonus-module"
	],
	"./home/deduction/deduction.module": [
		"./src/app/home/deduction/deduction.module.ts",
		"common",
		"home-deduction-deduction-module"
	],
	"./home/disciplinary/disciplinary.module": [
		"./src/app/home/disciplinary/disciplinary.module.ts",
		"common",
		"home-disciplinary-disciplinary-module"
	],
	"./home/gl-integration/gl-integration.module": [
		"./src/app/home/gl-integration/gl-integration.module.ts",
		"common",
		"home-gl-integration-gl-integration-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"default~home-home-module~home-system-setup-setup-module",
		"common",
		"home-home-module"
	],
	"./home/hr-menu/hr-menu.module": [
		"./src/app/home/hr-menu/hr-menu.module.ts",
		"default~home-attendance-attendance-module~home-hr-menu-hr-menu-module~home-system-setup-basic-entry-~e2fc26bb",
		"common",
		"home-hr-menu-hr-menu-module"
	],
	"./home/incentive/incentive.module": [
		"./src/app/home/incentive/incentive.module.ts",
		"common",
		"home-incentive-incentive-module"
	],
	"./home/income-tax/income-tax.module": [
		"./src/app/home/income-tax/income-tax.module.ts",
		"home-income-tax-income-tax-module"
	],
	"./home/leave/leave.module": [
		"./src/app/home/leave/leave.module.ts",
		"common",
		"home-leave-leave-module"
	],
	"./home/loan/loan.module": [
		"./src/app/home/loan/loan.module.ts",
		"common",
		"home-loan-loan-module"
	],
	"./home/overtime/overtime.module": [
		"./src/app/home/overtime/overtime.module.ts",
		"home-overtime-overtime-module"
	],
	"./home/property/property.module": [
		"./src/app/home/property/property.module.ts",
		"home-property-property-module"
	],
	"./home/recruitment/recruitment.module": [
		"./src/app/home/recruitment/recruitment.module.ts",
		"home-recruitment-recruitment-module"
	],
	"./home/reports/reports.module": [
		"./src/app/home/reports/reports.module.ts",
		"home-reports-reports-module"
	],
	"./home/salary-process/salary-process.module": [
		"./src/app/home/salary-process/salary-process.module.ts",
		"common",
		"home-salary-process-salary-process-module"
	],
	"./home/salary-setup/salary-setup.module": [
		"./src/app/home/salary-setup/salary-setup.module.ts",
		"common",
		"home-salary-setup-salary-setup-module"
	],
	"./home/security/security.module": [
		"./src/app/home/security/security.module.ts",
		"common",
		"home-security-security-module"
	],
	"./home/settlement/settlement.module": [
		"./src/app/home/settlement/settlement.module.ts",
		"common",
		"home-settlement-settlement-module"
	],
	"./home/shift-allowance/shift-allowance.module": [
		"./src/app/home/shift-allowance/shift-allowance.module.ts",
		"common",
		"home-shift-allowance-shift-allowance-module"
	],
	"./home/subsistance-allowance/subsistance-allowance.module": [
		"./src/app/home/subsistance-allowance/subsistance-allowance.module.ts",
		"home-subsistance-allowance-subsistance-allowance-module"
	],
	"./home/system-setup/basic-entry/basic-entry.module": [
		"./src/app/home/system-setup/basic-entry/basic-entry.module.ts",
		"default~home-attendance-attendance-module~home-hr-menu-hr-menu-module~home-system-setup-basic-entry-~e2fc26bb",
		"common",
		"home-system-setup-basic-entry-basic-entry-module"
	],
	"./home/system-setup/setup.module": [
		"./src/app/home/system-setup/setup.module.ts",
		"default~home-home-module~home-system-setup-setup-module",
		"common",
		"home-system-setup-setup-module"
	],
	"./home/tour/tour.module": [
		"./src/app/home/tour/tour.module.ts",
		"common",
		"home-tour-tour-module"
	],
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/home.guard */ "./src/app/guards/home.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout-2/layout-2.component */ "./src/app/layout/layout-2/layout-2.component.ts");
/* harmony import */ var _layout_layout_blank_layout_blank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout-blank/layout-blank.component */ "./src/app/layout/layout-blank/layout-blank.component.ts");
/* harmony import */ var _error_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/no-page/no-page.component */ "./src/app/error/no-page/no-page.component.ts");
/* harmony import */ var _error_app_error_app_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/app-error/app-error.component */ "./src/app/error/app-error/app-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/home.module#HomeModule' },
    { path: 'user', component: _layout_layout_blank_layout_blank_component__WEBPACK_IMPORTED_MODULE_4__["LayoutBlankComponent"], loadChildren: './user/user.module#UserModule' },
    { path: 'property', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/property/property.module#PropertyModule' },
    { path: 'leave', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/leave/leave.module#LeaveModule' },
    { path: 'salary-setup', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/salary-setup/salary-setup.module#SalarySetupModule' },
    { path: 'salary-process', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/salary-process/salary-process.module#SalaryProcessModule' },
    { path: 'reports', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/reports/reports.module#ReportsModule' },
    { path: 'gl-integration', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/gl-integration/gl-integration.module#GlIntegrationModule' },
    { path: 'recruitment', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/recruitment/recruitment.module#RecruitmentModule' },
    { path: 'hr-menu', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/hr-menu/hr-menu.module#HrMenuModule' },
    { path: 'overtime', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/overtime/overtime.module#OvertimeModule' },
    { path: 'bonus', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/bonus/bonus.module#BonusModule' },
    { path: 'subsistance-allowance', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/subsistance-allowance/subsistance-allowance.module#SubsistanceAllowanceModule' },
    { path: 'income-tax', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/income-tax/income-tax.module#IncomeTaxModule' },
    { path: 'apprisal', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/apprisal/apprisal.module#ApprisalModule' },
    { path: 'apps', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/apps/apps.module#AppsModule' },
    { path: 'home', component: _layout_layout_blank_layout_blank_component__WEBPACK_IMPORTED_MODULE_4__["LayoutBlankComponent"], loadChildren: './home/home.module#HomeModule' },
    { path: 'system-setup', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/system-setup/setup.module#SetupModule' },
    { path: 'system-setup/basic-entry', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/system-setup/basic-entry/basic-entry.module#BasicEntryModule' },
    { path: 'attendance', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/attendance/attendance.module#AttendanceModule' },
    { path: 'shift-allowance', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/shift-allowance/shift-allowance.module#ShiftAllowanceModule' },
    { path: 'disciplinary', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/disciplinary/disciplinary.module#DisciplinaryModule' },
    { path: 'loan', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/loan/loan.module#LoanModule' },
    { path: 'addition', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/addition/addition.module#AdditionModule' },
    { path: 'deduction', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/deduction/deduction.module#DeductionModule' },
    { path: 'incentive', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/incentive/incentive.module#IncentiveModule' },
    { path: 'settlement', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/settlement/settlement.module#SettlementModule' },
    { path: 'security', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/security/security.module#SecurityModule' },
    { path: 'tour', component: _layout_layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_3__["Layout2Component"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__["HomeGuard"]], loadChildren: './home/tour/tour.module#TourModule' },
    { path: 'error', component: _error_app_error_app_error_component__WEBPACK_IMPORTED_MODULE_6__["AppErrorComponent"] },
    { path: '**', component: _error_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_5__["NoPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _layout_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, appService, layoutService) {
        this.router = router;
        this.appService = appService;
        this.layoutService = layoutService;
        // Subscribe to router events to handle page transition
        this.router.events.subscribe(this.navigationInterceptor.bind(this));
        // Disable animations and transitions in IE10 to increase performance
        if (typeof document['documentMode'] === 'number' && document['documentMode'] < 11) {
            var style = document.createElement('style');
            style.textContent = "\n        * {\n          -ms-animation: none !important;\n          animation: none !important;\n          -ms-transition: none !important;\n          transition: none !important;\n        }";
            document.head.appendChild(style);
        }
    }
    AppComponent.prototype.navigationInterceptor = function (e) {
        var _this = this;
        if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            // Set loading state
            document.body.classList.add('app-loading');
        }
        if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            // Scroll to top of the page
            this.appService.scrollTop(0, 0);
        }
        if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            // On small screens collapse sidenav
            if (this.layoutService.isSmallScreen() && !this.layoutService.isCollapsed()) {
                setTimeout(function () { return _this.layoutService.setCollapsed(true, true); }, 10);
            }
            // Remove loading state
            document.body.classList.remove('app-loading');
            // Remove initial splash screen
            var splashScreen_1 = document.querySelector('.app-splash-screen');
            if (splashScreen_1) {
                splashScreen_1['style'].opacity = 0;
                setTimeout(function () {
                    if (splashScreen_1.parentNode) {
                        splashScreen_1.parentNode.removeChild(splashScreen_1);
                    }
                }, 300);
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [":host { display: block; }"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _layout_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.error.handler.ts":
/*!**************************************!*\
  !*** ./src/app/app.error.handler.ts ***!
  \**************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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




var AppErrorHandler = /** @class */ (function (_super) {
    __extends(AppErrorHandler, _super);
    function AppErrorHandler(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    AppErrorHandler.prototype.handleError = function (error) {
        var toaster = this.injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]);
        var router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            // Server or connection error happened
            toaster.toastrConfig.preventDuplicates = true;
            toaster.toastrConfig.onActivateTick = true;
            if (!navigator.onLine) {
                // Handle offline error
                return toaster.error('Check your internet connection');
            }
            else {
                // Handle Http Error (error.status === 403, 404...)
                if (error.status === 0) {
                    return toaster.error('No response from server');
                }
                else {
                    return toaster.error(error.status + " - " + error.message);
                }
            }
        }
        else {
            // Handle Client Error (Angular Error, ReferenceError...)
            sessionStorage.setItem('error', error.message);
            router.navigate(['/error']);
        }
    };
    AppErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AppErrorHandler);
    return AppErrorHandler;
}(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-tour-ng-bootstrap */ "./node_modules/ngx-tour-ng-bootstrap/fesm5/ngx-tour-ng-bootstrap.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/index.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_block_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _vendor_libs_theme_settings_theme_settings_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../vendor/libs/theme-settings/theme-settings.module */ "./src/vendor/libs/theme-settings/theme-settings.module.ts");
/* harmony import */ var _error_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./error/no-page/no-page.component */ "./src/app/error/no-page/no-page.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/home.guard */ "./src/app/guards/home.guard.ts");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/login.guard */ "./src/app/guards/login.guard.ts");
/* harmony import */ var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/token.interceptor */ "./src/app/services/token.interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_error_handler__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.error.handler */ "./src/app/app.error.handler.ts");
/* harmony import */ var _shared_dateformat__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/dateformat */ "./src/app/shared/dateformat.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _error_app_error_app_error_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./error/app-error/app-error.component */ "./src/app/error/app-error/app-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// *******************************************************************************
// NgBootstrap

// *******************************************************************************
// Libs






// *******************************************************************************
// App
















// *******************************************************************************
//
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _error_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_16__["NoPageComponent"],
                _error_app_error_app_error_component__WEBPACK_IMPORTED_MODULE_26__["AppErrorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                // App
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
                _vendor_libs_theme_settings_theme_settings_module__WEBPACK_IMPORTED_MODULE_15__["ThemeSettingsModule"],
                // Libs
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_24__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-lg btn-primary',
                    cancelButtonClass: 'btn btn-lg btn-default'
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenuModule"].forRoot(),
                ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TourNgBootstrapModule"].forRoot(),
                ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__["adapterFactory"]
                })
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
                _app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"],
                _services_order_service__WEBPACK_IMPORTED_MODULE_25__["OrderService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _guards_home_guard__WEBPACK_IMPORTED_MODULE_18__["HomeGuard"],
                _guards_login_guard__WEBPACK_IMPORTED_MODULE_19__["LoginGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_20__["TokenInterceptor"], multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _app_error_handler__WEBPACK_IMPORTED_MODULE_22__["AppErrorHandler"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateParserFormatter"], useClass: _shared_dateformat__WEBPACK_IMPORTED_MODULE_23__["NgbDateCustomParserFormatter"] }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _vendor_libs_theme_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendor/libs/theme-settings/theme-settings.service */ "./src/vendor/libs/theme-settings/theme-settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppService = /** @class */ (function () {
    function AppService(titleService, themeSettingsService, router) {
        this.titleService = titleService;
        this.themeSettingsService = themeSettingsService;
        this.router = router;
    }
    Object.defineProperty(AppService.prototype, "pageTitle", {
        // Set page title
        set: function (value) {
            this.titleService.setTitle(value + " - Appwork");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "isRTL", {
        // Check for RTL layout
        get: function () {
            return document.documentElement.getAttribute('dir') === 'rtl' ||
                document.body.getAttribute('dir') === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "isIE10", {
        // Check if IE10
        get: function () {
            return typeof document['documentMode'] === 'number' && document['documentMode'] === 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "layoutNavbarBg", {
        // Layout navbar color
        get: function () {
            return this.themeSettingsService.getOption('navbarBg') || 'navbar-theme';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "layoutSidenavBg", {
        // Layout sidenav color
        get: function () {
            return this.themeSettingsService.getOption('sidenavBg') || 'sidenav-theme';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "layoutFooterBg", {
        // Layout footer color
        get: function () {
            return this.themeSettingsService.getOption('footerBg') || 'footer-theme';
        },
        enumerable: true,
        configurable: true
    });
    // Animate scrollTop
    AppService.prototype.scrollTop = function (to, duration, element) {
        if (element === void 0) { element = document.scrollingElement || document.documentElement; }
        if (element.scrollTop === to) {
            return;
        }
        var start = element.scrollTop;
        var change = to - start;
        var startDate = +new Date();
        // t = current time; b = start value; c = change in value; d = duration
        var easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) {
                return c / 2 * t * t + b;
            }
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        var animateScroll = function () {
            var currentDate = +new Date();
            var currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration), 10);
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
        animateScroll();
    };
    AppService.prototype.redirect = function (url) {
        this.router.navigate([url]);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _vendor_libs_theme_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["ThemeSettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/error/app-error/app-error.component.html":
/*!**********************************************************!*\
  !*** ./src/app/error/app-error/app-error.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overflow-hidden\">\r\n  <div class=\"container d-flex align-items-stretch ui-mh-100vh p-0\">\r\n    <div class=\"d-flex col-md justify-content-center align-items-center order-2 order-md-1 position-relative p-5\">\r\n      <div class=\"error-bg-skew bg-white\"></div>\r\n      <div class=\"text-md-left text-center\">\r\n        <h4 class=\"display-4 font-weight-light mb-4 error\">An error has occurred!</h4>\r\n        <div class=\"font-weight-normal mb-5\">\r\n        <p>{{errorText}}</p>  \r\n        </div>\r\n        <button type=\"button\" (click)=\"goBack()\"  class=\"btn btn-primary\">←&nbsp; Go Back</button>\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/error/app-error/app-error.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/error/app-error/app-error.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvYXBwLWVycm9yL0M6XFxVc2Vyc1xcQW5kcm9pZFxcRGVza3RvcFxcR2l0YnVpbGRcXEhSTVMvc3JjXFxhcHBcXGVycm9yXFxhcHAtZXJyb3JcXGFwcC1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2FwcC1lcnJvci9hcHAtZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/error/app-error/app-error.component.ts":
/*!********************************************************!*\
  !*** ./src/app/error/app-error/app-error.component.ts ***!
  \********************************************************/
/*! exports provided: AppErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorComponent", function() { return AppErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppErrorComponent = /** @class */ (function () {
    function AppErrorComponent(appService) {
        this.appService = appService;
        this.errorText = '';
        this.appService.pageTitle = 'Whoops...';
        var errorText = sessionStorage.getItem('error');
        if (errorText) {
            this.errorText = errorText;
        }
    }
    AppErrorComponent.prototype.goBack = function () {
        this.appService.redirect('/');
    };
    AppErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-error',
            template: __webpack_require__(/*! ./app-error.component.html */ "./src/app/error/app-error/app-error.component.html"),
            styles: [__webpack_require__(/*! ./app-error.component.scss */ "./src/app/error/app-error/app-error.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], AppErrorComponent);
    return AppErrorComponent;
}());



/***/ }),

/***/ "./src/app/error/no-page/no-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error/no-page/no-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overflow-hidden\">\r\n  <div class=\"container d-flex align-items-stretch ui-mh-100vh p-0\">\r\n    <div class=\"d-flex col-md justify-content-center align-items-center order-2 order-md-1 position-relative p-5\">\r\n      <div class=\"error-bg-skew bg-white\"></div>\r\n      <div class=\"text-md-left text-center\">\r\n        <h1 class=\"display-2 font-weight-bolder mb-4\">Whoops...</h1>\r\n        <div class=\"text-xlarge font-weight-light mb-5\">We couldn't find the page<br> you are looking for :(</div>\r\n        <button type=\"button\" (click)=\"goBack()\"  class=\"btn btn-primary\">←&nbsp; Go Back</button>\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/error/no-page/no-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error/no-page/no-page.component.ts ***!
  \****************************************************/
/*! exports provided: NoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageComponent", function() { return NoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoPageComponent = /** @class */ (function () {
    function NoPageComponent(appService) {
        this.appService = appService;
        this.appService.pageTitle = 'Whoops...';
    }
    NoPageComponent.prototype.goBack = function () {
        this.appService.redirect('/');
    };
    NoPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-page',
            template: __webpack_require__(/*! ./no-page.component.html */ "./src/app/error/no-page/no-page.component.html")
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], NoPageComponent);
    return NoPageComponent;
}());



/***/ }),

/***/ "./src/app/guards/home.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/home.guard.ts ***!
  \**************************************/
/*! exports provided: HomeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGuard", function() { return HomeGuard; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeGuard = /** @class */ (function () {
    function HomeGuard(authService, appService) {
        this.authService = authService;
        this.appService = appService;
    }
    HomeGuard.prototype.canActivate = function () {
        if (!this.authService.isAuthenticated()) {
            this.appService.redirect('user/login');
            return false;
        }
        if (this.authService.isLocked()) {
            this.appService.redirect('user/locked');
            return false;
        }
        return true;
    };
    HomeGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]])
    ], HomeGuard);
    return HomeGuard;
}());



/***/ }),

/***/ "./src/app/guards/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = /** @class */ (function () {
    function LoginGuard(authService, appService) {
        this.authService = authService;
        this.appService = appService;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this.authService.isLocked()) {
            this.appService.redirect('user/locked');
            return false;
        }
        if (this.authService.isAuthenticated()) {
            this.appService.redirect('');
            return false;
        }
        return true;
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/layout/layout-1/layout-1.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/layout-1/layout-1.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper layout-1\" [ngClass]=\"{'layout-loading': !initialized}\">\r\n  <div class=\"layout-inner\">\r\n    <app-layout-navbar></app-layout-navbar>\r\n\r\n    <div class=\"layout-container\">\r\n      <app-layout-sidenav></app-layout-sidenav>\r\n\r\n      <div class=\"layout-content\">\r\n        <div class=\"container-fluid router-transitions flex-grow-1 container-p-y\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <app-layout-footer></app-layout-footer>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"layout-overlay\" (click)=\"closeSidenav()\"></div>\r\n"

/***/ }),

/***/ "./src/app/layout/layout-1/layout-1.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/layout-1/layout-1.component.ts ***!
  \*******************************************************/
/*! exports provided: Layout1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout1Component", function() { return Layout1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Layout1Component = /** @class */ (function () {
    function Layout1Component(layoutService) {
        this.layoutService = layoutService;
        // Prevent "blink" effect
        this.initialized = false;
    }
    Layout1Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialized = true;
            _this.layoutService.init();
            _this.layoutService.update();
            _this.layoutService.setAutoUpdate(true);
        });
    };
    Layout1Component.prototype.ngOnDestroy = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.destroy();
        });
    };
    Layout1Component.prototype.closeSidenav = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.setCollapsed(true);
        });
    };
    Layout1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-1',
            template: __webpack_require__(/*! ./layout-1.component.html */ "./src/app/layout/layout-1/layout-1.component.html"),
            styles: [":host { display: block; }", ":host /deep/ .layout-loading .sidenav-link { transition: none !important; }"]
        }),
        __metadata("design:paramtypes", [_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], Layout1Component);
    return Layout1Component;
}());



/***/ }),

/***/ "./src/app/layout/layout-2/layout-2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/layout-2/layout-2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper layout-2\" [ngClass]=\"{'layout-loading': !initialized}\">\r\n  <div class=\"layout-inner\">\r\n    <app-layout-sidenav></app-layout-sidenav>\r\n\r\n    <div class=\"layout-container\">\r\n      <app-layout-navbar></app-layout-navbar>\r\n\r\n      <div class=\"layout-content\">\r\n        <div class=\"container-fluid router-transitions flex-grow-1 container-p-y\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <app-layout-footer></app-layout-footer>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"layout-overlay\" (click)=\"closeSidenav()\"></div>\r\n"

/***/ }),

/***/ "./src/app/layout/layout-2/layout-2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/layout-2/layout-2.component.ts ***!
  \*******************************************************/
/*! exports provided: Layout2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout2Component", function() { return Layout2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Layout2Component = /** @class */ (function () {
    function Layout2Component(layoutService) {
        this.layoutService = layoutService;
        // Prevent "blink" effect
        this.initialized = false;
    }
    Layout2Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialized = true;
            _this.layoutService.init();
            _this.layoutService.update();
            _this.layoutService.setAutoUpdate(true);
        });
    };
    Layout2Component.prototype.ngOnDestroy = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.destroy();
        });
    };
    Layout2Component.prototype.closeSidenav = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.setCollapsed(true);
        });
    };
    Layout2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-2',
            template: __webpack_require__(/*! ./layout-2.component.html */ "./src/app/layout/layout-2/layout-2.component.html"),
            styles: [":host { display: block; }", ":host /deep/ .layout-loading .sidenav-link { transition: none !important; }"]
        }),
        __metadata("design:paramtypes", [_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], Layout2Component);
    return Layout2Component;
}());



/***/ }),

/***/ "./src/app/layout/layout-blank/layout-blank.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/layout-blank/layout-blank.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"router-transitions\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/layout-blank/layout-blank.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/layout-blank/layout-blank.component.ts ***!
  \***************************************************************/
/*! exports provided: LayoutBlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutBlankComponent", function() { return LayoutBlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LayoutBlankComponent = /** @class */ (function () {
    function LayoutBlankComponent(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    LayoutBlankComponent.prototype.ngOnInit = function () {
        this.renderer.addClass(this.document.body, 'hide-theme-settings');
    };
    LayoutBlankComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, 'hide-theme-settings');
    };
    LayoutBlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-blank',
            template: __webpack_require__(/*! ./layout-blank.component.html */ "./src/app/layout/layout-blank/layout-blank.component.html"),
            styles: [":host { display: block; }"]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], LayoutBlankComponent);
    return LayoutBlankComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-footer/layout-footer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/layout-footer/layout-footer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"footer\" [ngClass]=\"currentBg()\">\r\n  <div class=\"container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3\">\r\n    <div class=\"pt-3\">\r\n      <span class=\"footer-text font-weight-bolder\">Appwork</span> ©\r\n    </div>\r\n    <div>\r\n      <a href=\"javascript:void(0)\" class=\"footer-link pt-3\">Developer</a>    \r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/layout/layout-footer/layout-footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/layout-footer/layout-footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: LayoutFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFooterComponent", function() { return LayoutFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutFooterComponent = /** @class */ (function () {
    function LayoutFooterComponent(appService) {
        this.appService = appService;
        this.hostClassMain = true;
    }
    LayoutFooterComponent.prototype.currentBg = function () {
        return "bg-" + this.appService.layoutFooterBg;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.layout-footer'),
        __metadata("design:type", Object)
    ], LayoutFooterComponent.prototype, "hostClassMain", void 0);
    LayoutFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-footer',
            template: __webpack_require__(/*! ./layout-footer.component.html */ "./src/app/layout/layout-footer/layout-footer.component.html"),
            styles: [":host { display: block; }"]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], LayoutFooterComponent);
    return LayoutFooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-navbar/layout-navbar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/layout-navbar/layout-navbar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg align-items-lg-center container-p-x\" [ngClass]=\"currentBg()\">\r\n\r\n  <!-- Brand demo (see demo.css) -->\r\n  <a routerLink=\"/\" class=\"navbar-brand app-brand demo d-lg-none py-0 mr-4\">\r\n    <span class=\"app-brand-logo demo bg-primary\">\r\n      <svg viewBox=\"0 0 148 80\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><linearGradient id=\"a\" x1=\"46.49\" x2=\"62.46\" y1=\"53.39\" y2=\"48.2\" gradientUnits=\"userSpaceOnUse\"><stop stop-opacity=\".25\" offset=\"0\"></stop><stop stop-opacity=\".1\" offset=\".3\"></stop><stop stop-opacity=\"0\" offset=\".9\"></stop></linearGradient><linearGradient id=\"e\" x1=\"76.9\" x2=\"92.64\" y1=\"26.38\" y2=\"31.49\" xlink:href=\"#a\"></linearGradient><linearGradient id=\"d\" x1=\"107.12\" x2=\"122.74\" y1=\"53.41\" y2=\"48.33\" xlink:href=\"#a\"></linearGradient></defs><path style=\"fill: #fff;\" transform=\"translate(-.1)\" d=\"M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z\"></path><path transform=\"translate(-.1)\" d=\"M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z\" fill=\"url(#a)\"></path><path transform=\"translate(-.1)\" d=\"M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z\" fill=\"url(#e)\"></path><path transform=\"translate(-.1)\" d=\"M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z\" fill=\"url(#d)\"></path></svg>\r\n    </span>\r\n    <span class=\"app-brand-text demo font-weight-normal ml-2\">Appwork</span>\r\n  </a>\r\n\r\n  <!-- Sidenav toggle (see demo.css) -->\r\n  <div class=\"layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto\" *ngIf=\"sidenavToggle\">\r\n    <a class=\"nav-item nav-link px-0 mr-lg-4\" href=\"javascript:void(0)\" (click)=\"toggleSidenav()\">\r\n      <i class=\"ion ion-md-menu text-large align-middle\"></i>\r\n    </a>\r\n  </div>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"isExpanded = !isExpanded\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"navbar-collapse collapse\" [ngbCollapse]=\"!isExpanded\">\r\n    <!-- Divider -->\r\n    <hr class=\"d-lg-none w-100 my-2\">\r\n\r\n    <div class=\"navbar-nav align-items-lg-center\">\r\n      <!-- Search -->\r\n      <label class=\"nav-item navbar-text navbar-search-box p-0 active\">\r\n        <i class=\"ion ion-ios-search navbar-icon align-middle\"></i>\r\n        <span class=\"navbar-search-input pl-2\">\r\n          <input type=\"text\" class=\"form-control navbar-text mx-2\" placeholder=\"Search...\" style=\"width:200px\">\r\n        </span>\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"navbar-nav align-items-lg-center ml-auto\">\r\n     \r\n      <!-- Divider -->\r\n      <div class=\"nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1\">|</div>\r\n\r\n      <div ngbDropdown [placement]=\"isRTL ? 'bottom-left' : 'bottom-right'\" class=\"demo-navbar-user nav-item\">\r\n        <a ngbDropdownToggle class=\"nav-link\" href=\"javascript:void(0)\">\r\n          <span class=\"d-inline-flex flex-lg-row-reverse align-items-center align-middle\">\r\n            <img src=\"assets/img/avatars/1.png\" alt class=\"d-block ui-w-30 rounded-circle\">\r\n            <span class=\"px-1 mr-lg-2 ml-2 ml-lg-0\">Developer</span>\r\n          </span>\r\n        </a>\r\n        <!-- <div ngbDropdownMenu [class.dropdown-menu-right]=\"!isRTL\">\r\n          <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"ion ion-ios-person text-lightest\"></i> &nbsp; My profile</a>\r\n          <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"ion ion-ios-mail text-lightest\"></i> &nbsp; Messages</a>\r\n          <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"ion ion-md-settings text-lightest\"></i> &nbsp; settings</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"javascript:void(0)\" (click) = \"locked()\" class=\"dropdown-item\"><i class=\"ion ion-md-desktop text-lightest\"></i> &nbsp; Lock</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"javascript:void(0)\" (click) = \"logout()\" class=\"dropdown-item\"><i class=\"ion ion-ios-log-out text-danger\"></i> &nbsp; Log Out</a>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/layout/layout-navbar/layout-navbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/layout-navbar/layout-navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: LayoutNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutNavbarComponent", function() { return LayoutNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _layout_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutNavbarComponent = /** @class */ (function () {
    function LayoutNavbarComponent(appService, layoutService) {
        this.appService = appService;
        this.layoutService = layoutService;
        this.isExpanded = false;
        this.sidenavToggle = true;
        this.hostClassMain = true;
        this.remember = false;
        this.isRTL = appService.isRTL;
        var rememberMe = localStorage.getItem('remember');
        if (rememberMe) {
            if (rememberMe === 'true') {
                this.remember = true;
            }
        }
    }
    LayoutNavbarComponent.prototype.currentBg = function () {
        return "bg-" + this.appService.layoutNavbarBg;
    };
    LayoutNavbarComponent.prototype.toggleSidenav = function () {
        this.layoutService.toggleCollapsed();
    };
    LayoutNavbarComponent.prototype.locked = function () {
        if (this.remember) {
            localStorage.setItem('locked', 'true');
        }
        else {
            sessionStorage.setItem('locked', 'true');
        }
        this.appService.redirect('user/locked');
    };
    LayoutNavbarComponent.prototype.logout = function () {
        if (this.remember) {
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('password');
            localStorage.removeItem('locked');
            localStorage.removeItem('remember');
        }
        else {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('password');
            sessionStorage.removeItem('locked');
        }
        this.appService.redirect('user/login');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LayoutNavbarComponent.prototype, "sidenavToggle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.layout-navbar'),
        __metadata("design:type", Object)
    ], LayoutNavbarComponent.prototype, "hostClassMain", void 0);
    LayoutNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-navbar',
            template: __webpack_require__(/*! ./layout-navbar.component.html */ "./src/app/layout/layout-navbar/layout-navbar.component.html"),
            styles: [":host { display: block; }"]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _layout_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], LayoutNavbarComponent);
    return LayoutNavbarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-sidenav/layout-sidenav.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/layout-sidenav/layout-sidenav.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sidenav [orientation]=\"orientation\" [ngClass]=\"getClasses()\">\r\n\r\n  <!-- Brand demo (see src/demo.css) -->\r\n  <div class=\"app-brand demo\" *ngIf=\"orientation !== 'horizontal'\">\r\n    <span class=\"app-brand-logo demo bg-primary\">\r\n      <svg viewBox=\"0 0 148 80\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n        <defs>\r\n          <linearGradient id=\"a\" x1=\"46.49\" x2=\"62.46\" y1=\"53.39\" y2=\"48.2\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop stop-opacity=\".25\" offset=\"0\"></stop>\r\n            <stop stop-opacity=\".1\" offset=\".3\"></stop>\r\n            <stop stop-opacity=\"0\" offset=\".9\"></stop>\r\n          </linearGradient>\r\n          <linearGradient id=\"e\" x1=\"76.9\" x2=\"92.64\" y1=\"26.38\" y2=\"31.49\" xlink:href=\"#a\"></linearGradient>\r\n          <linearGradient id=\"d\" x1=\"107.12\" x2=\"122.74\" y1=\"53.41\" y2=\"48.33\" xlink:href=\"#a\"></linearGradient>\r\n        </defs>\r\n        <path style=\"fill: #fff;\" transform=\"translate(-.1)\"\r\n          d=\"M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z\">\r\n        </path>\r\n        <path transform=\"translate(-.1)\" d=\"M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z\"\r\n          fill=\"url(#a)\"></path>\r\n        <path transform=\"translate(-.1)\" d=\"M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z\" fill=\"url(#e)\">\r\n        </path>\r\n        <path transform=\"translate(-.1)\" d=\"M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z\"\r\n          fill=\"url(#d)\"></path>\r\n      </svg>\r\n    </span>\r\n    <a routerLink=\"/\" class=\"app-brand-text demo sidenav-text font-weight-normal ml-2\">Appwork</a>\r\n    <a href=\"javascript:void(0)\" class=\"layout-sidenav-toggle sidenav-link text-large ml-auto\"\r\n      (click)=\"toggleSidenav()\">\r\n      <i class=\"ion ion-md-menu align-middle\"></i>\r\n    </a>\r\n  </div>\r\n  <div class=\"sidenav-divider mt-0\" *ngIf=\"orientation !== 'horizontal'\"></div>\r\n\r\n  <!-- Links -->\r\n\r\n  <!-- <sidenav-router-link icon=\"ion ion-md-speedometer\" route=\"/dashboard\"\r\n      [active]=\"isActive('/dashboard')\">Dashboard</sidenav-router-link> -->\r\n\r\n\r\n  <!-- <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Order\" [active]=\"isMenuActive('/order')\" [open]=\"isMenuOpen('/order')\">\r\n      <sidenav-router-link route=\"/order/order-place\" [active]=\"isActive('/order/order-place')\">Order Place</sidenav-router-link>\r\n      <sidenav-router-link route=\"/order/order-list\" [active]=\"isActive('/order/order-list')\">Order List</sidenav-router-link>\r\n      <sidenav-router-link route=\"/order/order-approval\" [active]=\"isActive('/order/order-approval')\">Order Approval</sidenav-router-link>\r\n      <sidenav-router-link route=\"/order/section4\" [active]=\"isActive('/module1/section4')\">Section 4</sidenav-router-link>\r\n    </sidenav-menu>   -->\r\n\r\n  <div class=\"sidenav-inner\" [ngClass]=\"{ 'py-1': orientation !== 'horizontal' }\">\r\n    <!--Home-->\r\n    <sidenav-router-link icon=\"ion ion-md-home\" route=\"/startup\" [active]=\"isActive('/startup')\">Home\r\n    </sidenav-router-link>\r\n    <!-- Dashboard -->\r\n    <sidenav-router-link icon=\"ion ion-md-pulse\" route=\"/dashboard\" [active]=\"isActive('/dashboard')\">Dashboard\r\n    </sidenav-router-link>\r\n\r\n    <!-- <sidenav-router-link icon=\"ion ion-md-speedometer\" route=\"/dashboard\" [active]=\"isActive('/dashboard')\">Dashboard</sidenav-router-link> -->\r\n \r\n  \r\n    <!-- <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Order\" [active]=\"isMenuActive('/order')\" [open]=\"isMenuOpen('/order')\">\r\n      <sidenav-router-link route=\"/order/order-place\" [active]=\"isActive('/order/order-place')\">Order Place</sidenav-router-link>\r\n      <sidenav-router-link route=\"/order/order-list\" [active]=\"isActive('/order/order-list')\">Order List</sidenav-router-link>\r\n      <sidenav-router-link route=\"/order/order-approval\" [active]=\"isActive('/order/order-approval')\">Order Approval</sidenav-router-link>\r\n      <sidenav-router-link route=\"/order/section4\" [active]=\"isActive('/module1/section4')\">Section 4</sidenav-router-link>\r\n    </sidenav-menu>    -->\r\n    \r\n    <!-- System-setup -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"System Setup\" [active]=\"isMenuActive('/system-setup')\"\r\n      [open]=\"isMenuOpen('/system-setup')\">\r\n      <sidenav-menu icon=\"ion ion-md-arrow-dropright\" text=\"Basic Entry\"\r\n        [active]=\"isMenuActive('/system-setup/basic-entry')\" [open]=\"isMenuOpen('/system-setup/basic-entry')\">\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/emp-info\"\r\n          [active]=\"isActive('/system-setup/basic-entry/emp-info')\">Employee Information</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/department\"\r\n          [active]=\"isActive('/system-setup/basic-entry/department')\">Department</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/department-gl\"\r\n          [active]=\"isActive('/system-setup/basic-entry/department-gl')\">Department GL</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/section\"\r\n          [active]=\"isActive('/system-setup/basic-entry/section')\">Section</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/location\"\r\n          [active]=\"isActive('/system-setup/basic-entry/location')\">Location</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/country\"\r\n          [active]=\"isActive('/system-setup/basic-entry/country')\">Country</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/nationality\"\r\n          [active]=\"isActive('/system-setup/basic-entry/nationality')\">Nationality</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/gender\"\r\n          [active]=\"isActive('/system-setup/basic-entry/gender')\">Gender</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/religion\"\r\n          [active]=\"isActive('/system-setup/basic-entry/religion')\">Religion</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/blood-group\"\r\n          [active]=\"isActive('/system-setup/basic-entry/blood-group')\">Blood Group</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/education-level\"\r\n          [active]=\"isActive('/system-setup/basic-entry/education-level')\">Education Level</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/education-board\"\r\n          [active]=\"isActive('/system-setup/basic-entry/education-board')\">Education Board</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/institute\"\r\n          [active]=\"isActive('/system-setup/basic-entry/institute')\">Institute</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/result\"\r\n          [active]=\"isActive('/system-setup/basic-entry/result')\">Result</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/passing-year\"\r\n          [active]=\"isActive('/system-setup/basic-entry/passing-year')\">Passing Year</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/training-type\"\r\n          [active]=\"isActive('/system-setup/basic-entry/training-type')\">Training Type</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/training-country\"\r\n          [active]=\"isActive('/system-setup/basic-entry/training-country')\">Training Country</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/training-institute\"\r\n          [active]=\"isActive('/system-setup/basic-entry/training-institute')\">Training Institute\r\n        </sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/training-nature\"\r\n          [active]=\"isActive('/system-setup/basic-entry/training-nature')\">Training Nature</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/training-sponsor-by\"\r\n          [active]=\"isActive('/system-setup/basic-entry/training-sponsor-by')\">Training Sponsor By\r\n        </sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/project\"\r\n          [active]=\"isActive('/system-setup/basic-entry/project')\">Project</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/job-type\"\r\n          [active]=\"isActive('/system-setup/basic-entry/job-type')\">Job Type</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/designation\"\r\n          [active]=\"isActive('/system-setup/basic-entry/designation')\">Designation</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/occupation\"\r\n          [active]=\"isActive('/system-setup/basic-entry/occupation')\">Occupation</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/experience-type\"\r\n          [active]=\"isActive('/system-setup/basic-entry/experience-type')\">Experience Type</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/punishment\"\r\n          [active]=\"isActive('/system-setup/basic-entry/punishment')\">Punishment</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/bank\"\r\n          [active]=\"isActive('/system-setup/basic-entry/bank')\">Bank</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/branch\"\r\n          [active]=\"isActive('/system-setup/basic-entry/branch')\">Branch</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/unit\"\r\n          [active]=\"isActive('/system-setup/basic-entry/unit')\">Unit</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/signatory\"\r\n          [active]=\"isActive('/system-setup/basic-entry/signatory')\">Signatory</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/misconduct\"\r\n          [active]=\"isActive('/system-setup/basic-entry/misconduct')\">Misconduct</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/prefix\"\r\n          [active]=\"isActive('/system-setup/basic-entry/prefix')\">Prefix</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/suffix\"\r\n          [active]=\"isActive('/system-setup/basic-entry/suffix')\">Suffix</sidenav-router-link>\r\n        <sidenav-router-link route=\"/system-setup/basic-entry/publication-type\"\r\n          [active]=\"isActive('/system-setup/basic-entry/publication-type')\">Publication Type</sidenav-router-link>\r\n      </sidenav-menu>\r\n      <sidenav-router-link route=\"/system-setup/bank-branch\" [active]=\"isActive('/system-setup/bank-branch')\">Bank\r\n        Branch</sidenav-router-link>\r\n      <sidenav-router-link route=\"/system-setup/division\" [active]=\"isActive('/system-setup/division')\">Division\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/system-setup/group\" [active]=\"isActive('/system-setup/group')\">Academic Decipline\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/system-setup/holyday-calender\" [active]=\"isActive('/system-setup/holyday-calender')\">\r\n        Holyday Calender</sidenav-router-link>\r\n      <sidenav-router-link route=\"/system-setup/assign-dept-gl\" [active]=\"isActive('/system-setup/assign-dept-gl')\">\r\n        Assign Department GL</sidenav-router-link>\r\n      <sidenav-router-link route=\"/system-setup/production-unit\" [active]=\"isActive('/system-setup/production-unit')\">\r\n        Production Unit</sidenav-router-link>\r\n      <sidenav-router-link route=\"/system-setup/production-floor\" [active]=\"isActive('/system-setup/production-floor')\">\r\n        Production Floor</sidenav-router-link>\r\n      <sidenav-router-link route=\"/system-setup/production-line\" [active]=\"isActive('/system-setup/production-line')\">\r\n        Production Line</sidenav-router-link>\r\n      <sidenav-router-link route=\"/system-setup/production-machine\"\r\n        [active]=\"isActive('/system-setup/production-machine')\">Production Machine</sidenav-router-link>\r\n    </sidenav-menu>\r\n\r\n    <!--HR Menu-->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"HR Menu\" [active]=\"isMenuActive('/hr-menu')\"\r\n      [open]=\"isMenuOpen('/hr-menu')\">\r\n      <sidenav-router-link route=\"/hr-menu/emp-gen-info\" [active]=\"isActive('/hr-menu/emp-gen-info')\">Employee\r\n        General\r\n        Information</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/employent-info\" [active]=\"isActive('/hr-menu/employent-info')\">Employment\r\n        Information</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/additional-duties\" [active]=\"isActive('/hr-menu/additional-duties')\">\r\n        Additional Duties</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/emp-company-transfer\" [active]=\"isActive('/hr-menu/emp-company-transfer')\">\r\n        Employee Company Transfer</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/emp-pro-info\" [active]=\"isActive('/hr-menu/emp-pro-info')\">Employee\r\n        Promotion\r\n        Information</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/holiday-info\" [active]=\"isActive('/hr-menu/holiday-info')\">Holiday\r\n        Information</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/casual-join-date\" [active]=\"isActive('/hr-menu/casual-join-date')\">\r\n        Non-Management Casual Date Of Joining</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/emp-block-info\" [active]=\"isActive('/hr-menu/emp-block-info')\">Employee\r\n        Block\r\n        Information</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/emp-for-attendance\" [active]=\"isActive('/hr-menu/emp-for-attendance')\">\r\n        Employee Select For Attendance</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/resignation-letter\" [active]=\"isActive('/hr-menu/resignation-letter')\">\r\n        Resignation Letter</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/resignation-letter-approve\"\r\n        [active]=\"isActive('/hr-menu/resignation-letter-approve')\">Resignation Letter Approve</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/emp-for-resignation\" [active]=\"isActive('/hr-menu/emp-for-resignation')\">\r\n        Employee For Resignation</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/notice-by-company\" [active]=\"isActive('/hr-menu/notice-by-company')\">\r\n        Notice\r\n        By Company</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/emp-separation-info\" [active]=\"isActive('/hr-menu/emp-separation-info')\">\r\n        Employee Separation Info</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/emp-objective-info\" [active]=\"isActive('/hr-menu/emp-objective-info')\">\r\n        Employee Objective Info</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/production-position-info\"\r\n        [active]=\"isActive('/hr-menu/production-position-info')\">Production Position Info</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/emp-certificate-upload\"\r\n        [active]=\"isActive('/hr-menu/emp-certificate-upload')\">Employee Certificate Upload</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/download-certificate\" [active]=\"isActive('/hr-menu/download-certificate')\">\r\n        Download Certificate</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/upload-file\" [active]=\"isActive('/hr-menu/upload-file')\">Upload\r\n        Word,Excle,Pdf,jpg,png Files</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/download-img-signature\"\r\n        [active]=\"isActive('/hr-menu/download-img-signature')\">Download Image And Signature</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/basic-hr-report\" [active]=\"isActive('/hr-menu/basic-hr-report')\">Basic HR\r\n        Report</sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/upload-files\" [active]=\"isActive('/hr-menu/upload-files')\">Upload\r\n        Files(JPG)\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/hr-menu/personal-file\" [active]=\"isActive('/hr-menu/personal-file')\">Personal\r\n        Information</sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Property -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Property\" [active]=\"isMenuActive('/property')\"\r\n      [open]=\"isMenuOpen('/property')\">\r\n      <sidenav-router-link route=\"/property/property-category\" [active]=\"isActive('/property/property-category')\">\r\n        Property Category</sidenav-router-link>\r\n      <sidenav-router-link route=\"/property/property-name\" [active]=\"isActive('/property/property-Name')\">Property\r\n        Name</sidenav-router-link>\r\n      <sidenav-router-link route=\"/property/vehicle-tax-assagin\" [active]=\"isActive('/property/vehicle-tax-assagin')\">\r\n        Vehicle Tax Assagin</sidenav-router-link>\r\n      <sidenav-router-link route=\"/property/asset-addition\" [active]=\"isActive('/property/asset-addition')\">Asset\r\n        Addition</sidenav-router-link>\r\n      <sidenav-router-link route=\"/property/property-assaign\" [active]=\"isActive('/property/property-assaign')\">\r\n        Property Assaign</sidenav-router-link>\r\n      <sidenav-router-link route=\"/property/property-disposal\" [active]=\"isActive('/property/property-disposal')\">\r\n        Property Disposal</sidenav-router-link>\r\n      <sidenav-router-link route=\"/property/report\" [active]=\"isActive('/property/report')\">Report\r\n      </sidenav-router-link>\r\n\r\n    </sidenav-menu>\r\n    <!-- Attendance -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Attendance\" [active]=\"isMenuActive('/attendance')\"\r\n      [open]=\"isMenuOpen('/attendance')\">\r\n      <sidenav-router-link route=\"/attendance/application\" [active]=\"isActive('/attendance/application')\">\r\n        Application\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/approve\" [active]=\"isActive('/attendance/approve')\">Approve\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/weekend-setup\" [active]=\"isActive('/attendance/weekend-setup')\">\r\n        Weekend\r\n        Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/weekend-update\" [active]=\"isActive('/attendance/weekend-update')\">\r\n        Weekend\r\n        Update\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/duty-hours-setup\" [active]=\"isActive('/attendance/duty-hours-setup')\">\r\n        Duty\r\n        Hours Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/manual-attendance\" [active]=\"isActive('/attendance/manual-attendance')\">\r\n        Manual Attendance\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/monthly-attendance\" [active]=\"isActive('/attendance/monthly-attendance')\">\r\n        Monthly Attendance\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/process-attendance\" [active]=\"isActive('/attendance/process-attendance')\">\r\n        Process Attendance\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/summery\" [active]=\"isActive('/attendance/summery')\">Summery\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/shift-setup\" [active]=\"isActive('/attendance/shift-setup')\">Shift\r\n        Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/assign-shift\" [active]=\"isActive('/attendance/assign-shift')\">Assign\r\n        Shift\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/monthly-data-process\"\r\n        [active]=\"isActive('/attendance/monthly-data-process')\">Monthly Data Process\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/attendance/import\" [active]=\"isActive('/attendance/import')\">Import\r\n      </sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Leave  -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Leave\" [active]=\"isMenuActive('/leave')\"\r\n      [open]=\"isMenuOpen('/leave')\">\r\n      <sidenav-router-link route=\"/leave/leave-setup\" [active]=\"isActive('/leave/leave-setup')\">Leave Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/leave-entry\" [active]=\"isActive('/leave/leave-entry')\">Leave Entry\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/manual-leave-entry\" [active]=\"isActive('/leave/manual-leave-entry')\">Manual\r\n        Leave Entry</sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/update-leave-entry\" [active]=\"isActive('/leave/update-leave-entry')\">Update\r\n        Leave Entry</sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/leave-approval\" [active]=\"isActive('/leave/leave-approval')\">Leave Approval\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/leave-approval-by-hr\" [active]=\"isActive('/leave/leave-approval-by-hr')\">\r\n        Leave Approval By HR</sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/emp-leave-opening-balance\"\r\n        [active]=\"isActive('/leave/emp-leave-opening-balance')\">Employee Leave Opening Balance</sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/leave-carry-forward\" [active]=\"isActive('/leave/leave-carry-forward')\">\r\n        Leave\r\n        Carry Forward</sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/leave-encashment\" [active]=\"isActive('/leave/leave-encashment')\">Leave\r\n        Encashment</sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/recreation-leave-encashment\"\r\n        [active]=\"isActive('/leave/recreation-leave-encashment')\">Recreation Leave Encashment</sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/substitute-leave\" [active]=\"isActive('/leave/substitute-leave')\">Substitute\r\n        Leave</sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/leave-report\" [active]=\"isActive('/leave/leave-report')\">Leave Report\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/leave/leave-info-details\" [active]=\"isActive('/leave/leave-info-details')\">Leave\r\n        Info Details</sidenav-router-link>\r\n\r\n    </sidenav-menu>\r\n    <!--Overtime-->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Overtime\" [active]=\"isMenuActive('/Overtime')\"\r\n      [open]=\"isMenuOpen('/overtime')\">\r\n      <sidenav-router-link route=\"/overtime/overtime-supervisor\" [active]=\"isActive('/overtime/overtime-supervisor')\">\r\n        Overtime Supervisor</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/application-for-overtime\"\r\n        [active]=\"isActive('/overtime/application-for-overtime')\">Application For Overtime</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/overtime-approve\" [active]=\"isActive('/overtime/overtime-approve')\">\r\n        Overtime\r\n        Approve</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/overtime-approve-by-hr\"\r\n        [active]=\"isActive('/overtime/overtime-approve-by-hr')\">Overtime Approve By HR</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/ot-method\" [active]=\"isActive('/overtime/ot-method')\">OT Method\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/entitle-over-time\" [active]=\"isActive('/overtime/entitle-over-time')\">\r\n        Entitle Overtime</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/update-over-time-allowance\"\r\n        [active]=\"isActive('/overtime/update-over-time-allowance')\">Update Overtime Allowance</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/assign-over-time-requisition\"\r\n        [active]=\"isActive('/overtime/assign-over-time-requisition')\">Assign overtime Requisition\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/update-over-time-requisition\"\r\n        [active]=\"isActive('/overtime/update-over-time-requisition')\">Update Overtime Requisition\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/over-time-requisition-approve\"\r\n        [active]=\"isActive('/overtime/over-time-requisition-approve')\">Over Time Requisition Approve\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/Over-time-setup\" [active]=\"isActive('/overtime/Over-time-setup')\">Over\r\n        Time\r\n        Setup</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/Over-time-condition-setup\"\r\n        [active]=\"isActive('/overtime/Over-time-condition-setup')\">Over Time Condition Setup</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/assign-over-time\" [active]=\"isActive('/overtime/assign-over-time')\">\r\n        Assign\r\n        Over Time</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/over-time-auto\" [active]=\"isActive('/overtime/over-time-auto')\">Over\r\n        Time\r\n        Auto</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/over-time-menual\" [active]=\"isActive('/overtime/over-time-menual')\">Over\r\n        Time Manual</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/over-time-payment-auto\"\r\n        [active]=\"isActive('/overtime/over-time-payment-auto')\">Over Time Payment Auto</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/over-time-payment-manual\"\r\n        [active]=\"isActive('/overtime/over-time-payment-manual')\">Over Time Payment Manual</sidenav-router-link>\r\n      <sidenav-router-link route=\"/overtime/over-time-report\" [active]=\"isActive('/overtime/over-time-report')\">Over\r\n        Time Report</sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- shift-allowance -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Shift Allowance\" [active]=\"isMenuActive('/shift-allowance')\"\r\n      [open]=\"isMenuOpen('/shift-allowance')\">\r\n      <sidenav-router-link route=\"/shift-allowance/setup\" [active]=\"isActive('/shift-allowance/setup')\">Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/shift-allowance/assign\" [active]=\"isActive('/shift-allowance/assign')\">Assign\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/shift-allowance/auto-payment\" [active]=\"isActive('/shift-allowance/auto-payment')\">\r\n        Auto Payment\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/shift-allowance/manual-payment\"\r\n        [active]=\"isActive('/shift-allowance/manual-payment')\">Manual Payment\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/shift-allowance/shift-allowance-report\"\r\n        [active]=\"isActive('/shift-allowance/shift-allowance-report')\">Report\r\n      </sidenav-router-link>\r\n    </sidenav-menu>\r\n\r\n    <!-- disciplinary -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Disciplinary Action\" [active]=\"isMenuActive('/disciplinary')\"\r\n      [open]=\"isMenuOpen('/disciplinary')\">\r\n      <sidenav-router-link route=\"/disciplinary/show-cause\" [active]=\"isActive('/disciplinary/show-cause')\">Show\r\n        Cause\r\n        Info\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/disciplinary/show-cause-result\"\r\n        [active]=\"isActive('/disciplinary/show-cause-result')\">Show Cause Result\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/disciplinary/notice-enquiry\" [active]=\"isActive('/disciplinary/notice-enquiry')\">\r\n        Notice Enquiry\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/disciplinary/punishment\" [active]=\"isActive('/disciplinary/punishment')\">\r\n        Punishment\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/disciplinary/disciplinary-report\"\r\n        [active]=\"isActive('/disciplinary/disciplinary-report')\">Report\r\n      </sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Loan -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Loan\" [active]=\"isMenuActive('/loan')\"\r\n      [open]=\"isMenuOpen('/loan')\">\r\n      <sidenav-router-link route=\"/loan/loan-info\" [active]=\"isActive('/loan/loan-info')\">Loan Information\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/loan/cash-receive\" [active]=\"isActive('/loan/cash-receive')\">Cash Receive\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/loan/stop-deduction\" [active]=\"isActive('/loan/stop-deduction')\">Stop Deduction\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/loan/loan-report\" [active]=\"isActive('/loan/loan-report')\">Report\r\n      </sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Salary Setup -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Salary Setup\" [active]=\"isMenuActive('/salary-setup')\"\r\n      [open]=\"isMenuOpen('/salary-setup')\">\r\n      <sidenav-router-link route=\"/salary-setup/other-allowance\" [active]=\"isActive('/salary-setup/other-allowance')\">\r\n        Other Allowance</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-setup/salary-year-setup\"\r\n        [active]=\"isActive('/salary-setup/salary-year-setup')\">Salary Year Setup</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-setup/salary-period\" [active]=\"isActive('/salary-setup/salary-period')\">\r\n        Salary Period</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-setup/salary-head\" [active]=\"isActive('/salary-setup/salary-head')\">Salary\r\n        Head</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-setup/salary-grade\" [active]=\"isActive('/salary-setup/salary-grade')\">\r\n        Salary\r\n        Grade</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-setup/payscale-grade\" [active]=\"isActive('/salary-setup/payscale-grade')\">\r\n        Payscale Grade</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-setup/payscal-setup\" [active]=\"isActive('/salary-setup/payscale-setup')\">\r\n        Payscale Setup</sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Salary-Process -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Salary Process\" [active]=\"isMenuActive('/salary-process')\"\r\n      [open]=\"isMenuOpen('/salary-process')\">\r\n      <sidenav-router-link route=\"/salary-process/enrolment-information\"\r\n        [active]=\"isActive('/salary-process/enrolment-information')\">Enrolment Information</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/allowance-add-deduct\"\r\n        [active]=\"isActive('/salary-process/allowance-add-deduct')\">Allowance Add Deduct</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/confirm-or-inc\" [active]=\"isActive('/salary-process/confirm-or-inc')\">\r\n        Confirmation Or Increment Information\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/salary-Inc\" [active]=\"isActive('/salary-process/salary-Inc')\">\r\n        Salary\r\n        Increment</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/salary-view\" [active]=\"isActive('/salary-process/salary-view')\">\r\n        Salary View</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/salary-structure\"\r\n        [active]=\"isActive('/salary-process/salary-structure')\">Salary Structure</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/emp-salary-structure\"\r\n        [active]=\"isActive('/salary-process/emp-salary-structure')\">Emp Salary Structure</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/edit-emp-salary-structure\"\r\n        [active]=\"isActive('/salary-process/edit-emp-salary-structure')\">Edit Emp Salary Structure\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/salary-process\" [active]=\"isActive('/salary-process/salary-process')\">\r\n        Salary Process</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/undo-salary-process\"\r\n        [active]=\"isActive('/salary-process/undo-salary-process')\">Undo Salary Process</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/block-salary-process\"\r\n        [active]=\"isActive('/salary-process/block-salary-process')\">Block Salary Process</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/update-salary\" [active]=\"isActive('/salary-process/update-salary')\">\r\n        Update Salary </sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/pay-slip-email\" [active]=\"isActive('/salary-process/pay-slip-email')\">\r\n        Pay Slip Email </sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/new-join\" [active]=\"isActive('/salary-process/new-join')\">New Join\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/change-report\" [active]=\"isActive('/salary-process/change-report')\">\r\n        Change Report</sidenav-router-link>\r\n      <sidenav-router-link route=\"/salary-process/extra-salary\" [active]=\"isActive('/salary-process/extra-salary')\">\r\n        Extra Salary</sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Addition -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Addition\" [active]=\"isMenuActive('/addition')\"\r\n      [open]=\"isMenuOpen('/addition')\">\r\n      <sidenav-router-link route=\"/addition/employee-allowance\" [active]=\"isActive('/addition/employee-allowance')\">\r\n        Employee Allowance\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/addition/driver-allowance\" [active]=\"isActive('/addition/driver-allowance')\">\r\n        Driver Allowance\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/addition/driver-bonus\" [active]=\"isActive('/addition/driver-bonus')\">Driver Bonus\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/addition/import-addition\" [active]=\"isActive('/addition/import-addition')\">Import\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/addition/process-import\" [active]=\"isActive('/addition/import-import')\"> Process\r\n        Salary Import\r\n      </sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Deduction -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Deduction\" [active]=\"isMenuActive('/deduction')\"\r\n      [open]=\"isMenuOpen('/deduction')\">\r\n      <sidenav-router-link route=\"/deduction/salary-deduct\" [active]=\"isActive('/deduction/salary-deduct')\">Salary\r\n        Deduct\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/deduction/loan-deduct\" [active]=\"isActive('/deduction/loan-deduct')\">Loan Deduct\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/deduction/lwp-deduct\" [active]=\"isActive('/deduction/lwp-deduct')\">LWP Deduct\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/deduction/other-deduct\" [active]=\"isActive('/deduction/other-deduct')\">Other\r\n        Deduct\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/deduction/import-deduction\" [active]=\"isActive('/deduction/import-deduction')\">\r\n        Import\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/addition/process-import\" [active]=\"isActive('/addition/import-import')\"> Process\r\n        Salary Import\r\n      </sidenav-router-link>\r\n    </sidenav-menu>\r\n\r\n    <!--Bonus-->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Bonus\" [active]=\"isMenuActive('/Overtime')\"\r\n      [open]=\"isMenuOpen('/overtime')\">\r\n      <sidenav-router-link route=\"/bonus/allowance-setup\" [active]=\"isActive('/bonus/allowance-setup')\">Bonus And\r\n        Allowance Setup</sidenav-router-link>\r\n      <sidenav-router-link route=\"/bonus/bonus-setup\" [active]=\"isActive('/bonus/bonus-setup')\">Bonus Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/bonus/emp-festival-bonus\" [active]=\"isActive('/bonus/emp-festival-bonus')\">\r\n        Employee\r\n        Festival Bonus Info</sidenav-router-link>\r\n      <sidenav-router-link route=\"/bonus/emp-performance-bonus\" [active]=\"isActive('/bonus/emp-performance-bonus')\">\r\n        Employee Performance Bonus Info</sidenav-router-link>\r\n      <sidenav-router-link route=\"/bonus/update-bonus\" [active]=\"isActive('/bonus/update-bonus')\">Update Bonus\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/bonus/upload-emp-payment\" [active]=\"isActive('/bonus/upload-emp-payment')\">Upload\r\n        Employee Bonus Payment</sidenav-router-link>\r\n      <sidenav-router-link route=\"/bonus/process-import-bonus\" [active]=\"isActive('/bonus/process-import-bonus')\">\r\n        Process Import Bonus</sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Incentive -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Incentive Other\" [active]=\"isMenuActive('/incentive')\"\r\n      [open]=\"isMenuOpen('/incentive')\">\r\n      <sidenav-router-link route=\"/incentive/leave-type-setup\" [active]=\"isActive('/incentive/leave-type-setup')\">\r\n        Leave\r\n        Type Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/incentive/leave-amount-setup\" [active]=\"isActive('/incentive/leave-amount-setup')\">\r\n        Leave Amount Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/incentive/leave-payment\" [active]=\"isActive('/incentive/leave-payment')\">Leave\r\n        Payment\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/incentive/sales-commission\" [active]=\"isActive('/incentive/sales-commission')\">\r\n        Sales\r\n        Commission\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/incentive/encashment-payment\" [active]=\"isActive('/incentive/encashment-payment')\">\r\n        Encashment Payment\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/incentive/arrear-payment-auto\" [active]=\"isActive('/incentive/arrear-payment-auto')\">\r\n        Arrear Payment Auto\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/incentive/arrear-payment-manual\"\r\n        [active]=\"isActive('/incentive/arrear-payment-manual')\">Arrear Payment Manual\r\n      </sidenav-router-link>\r\n    </sidenav-menu>\r\n\r\n    <!--Subsistence Allowance-->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Subsistance Allowance\"\r\n      [active]=\"isMenuActive('/subsistance-allowance')\" [open]=\"isMenuOpen('/subsistance-allowance')\">\r\n      <sidenav-router-link route=\"/subsistance-allowance/amount-setup\"\r\n        [active]=\"isActive('/subsistance-allowance/amount-setup')\">Subsistence Allowance Amount Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/subsistance-allowance/allowance-auto\"\r\n        [active]=\"isActive('/subsistance-allowance/allowance-auto')\">Subsistence Allowance Auto\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/subsistance-allowance/allowance-manual\"\r\n        [active]=\"isActive('/subsistance-allowance/allowance-manual')\">Subsistence Allowance Manual\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/subsistance-allowance/allowance-report\"\r\n        [active]=\"isActive('/subsistance-allowance/allowance-report')\">Subsistence Allowance Report\r\n      </sidenav-router-link>\r\n    </sidenav-menu>\r\n\r\n    <!--Income Tax-->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Income Tax\" [active]=\"isMenuActive('/income-tax')\"\r\n      [open]=\"isMenuOpen('/income-tax')\">\r\n      <sidenav-router-link route=\"/income-tax/tax-year-info\" [active]=\"isActive('/income-tax/tax-year-info')\">Tax\r\n        Year\r\n        Information</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/income-tax-slab\" [active]=\"isActive('/income-tax/income-tax-slab')\">\r\n        Income\r\n        Tax Slab</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/income-tax-setup\" [active]=\"isActive('/income-tax/income-tax-setup')\">\r\n        Income Tax Setup</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/minimum-tax-setup\" [active]=\"isActive('/income-tax/minimum-tax-setup')\">\r\n        Minimum Tax Setup</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/surcharge-assign\" [active]=\"isActive('/income-tax/surcharge-assign')\">\r\n        Surcharge Assign</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/search-charge-setup\"\r\n        [active]=\"isActive('/income-tax/search-charge-setup')\">Search Charge Setup</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/block-tax-calculation\"\r\n        [active]=\"isActive('/income-tax/block-tax-calculation')\">Block Tax Calculation</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/tax-challan\" [active]=\"isActive('/income-tax/tax-challan')\">Tax\r\n        Challan\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/additional-tax-info\"\r\n        [active]=\"isActive('/income-tax/additional-tax-info')\">Additional Tax Information</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/other-tax-calculation\"\r\n        [active]=\"isActive('/income-tax/other-tax-calculation')\">Other Tax Calculation</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/challan-prepare\" [active]=\"isActive('/income-tax/challan-prepare')\">\r\n        Challan Prepare</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/challan-number-assign\"\r\n        [active]=\"isActive('/income-tax/challan-number-assign')\">Challan Number Assign</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/txt-card-report\" [active]=\"isActive('/income-tax/txt-card-report')\">\r\n        Tax\r\n        Card Report</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/tax-report\" [active]=\"isActive('/income-tax/tax-report')\">Tax Report\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/tax-paid-payroll\" [active]=\"isActive('/income-tax/tax-paid-payroll')\">\r\n        Tax\r\n        Paid Payroll</sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/tax-adjust\" [active]=\"isActive('/income-tax/tax-adjust')\">Tax Adjust\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/income-tax/process-income-tax\" [active]=\"isActive('/income-tax/process-income-tax')\">\r\n        Process Income Tax</sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Settlement -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Settlement\" [active]=\"isMenuActive('/settlement')\"\r\n      [open]=\"isMenuOpen('/settlement')\">\r\n      <sidenav-router-link route=\"/settlement/notice-day-setup\" [active]=\"isActive('/settlement/notice-day-setup')\">\r\n        Notice\r\n        Day Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/settlement/notice-pay-amount\" [active]=\"isActive('/settlement/notice-pay-amount')\">\r\n        Notice\r\n        Pay Amount\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/settlement/gratuity-setup\" [active]=\"isActive('/settlement/gratuity-setup')\">\r\n        Gratuity Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/settlement/gratuity-year-setup\"\r\n        [active]=\"isActive('/settlement/gratuity-year-setup')\">\r\n        Gratuity Year Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/settlement/final-settlement\" [active]=\"isActive('/settlement/final-settlement')\">\r\n        Final Settlement\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/settlement/settlement-report\" [active]=\"isActive('/settlement/settlement-report')\">\r\n        Report\r\n      </sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Reports -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Reports\" [active]=\"isMenuActive('/reports')\"\r\n      [open]=\"isMenuOpen('/reports')\">\r\n      <sidenav-router-link route=\"/reports/salary-report\" [active]=\"isActive('/reports/salary-report')\">Salary\r\n        Report\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/bank-advice\" [active]=\"isActive('/reports/bank-advice')\">Bank Advice\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/salary-reconciliation\" [active]=\"isActive('/reports/salary-reconciliation')\">\r\n        Salary Reconciliation</sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/salary-summary\" [active]=\"isActive('/reports/salary-summary')\">Salary\r\n        Summary</sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/basic-information\" [active]=\"isActive('/reports/basic-information')\">\r\n        Basic\r\n        Information</sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/payslip\" [active]=\"isActive('/reports/payslip')\">PaySlip\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/employee-cv\" [active]=\"isActive('/reports/employee-cv')\">Employee CV\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/provident-fund\" [active]=\"isActive('/reports/provident-fund')\">Provident\r\n        Fund</sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/fooding-own\" [active]=\"isActive('/reports/fooding-own')\">Fooding Own\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/in-out-own\" [active]=\"isActive('/reports/in-out-own')\">In Out Own\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/asset-under-emp\" [active]=\"isActive('/reports/asset-under-emp')\">Asset\r\n        Under Employee</sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/bank-account\" [active]=\"isActive('/reports/bank-account')\">Bank Account\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/salary-yearly-detail\" [active]=\"isActive('/reports/salary-yearly-detail')\">\r\n        Salary Yearly Detail</sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/yearly-summary\" [active]=\"isActive('/reports/yearly-summary')\">Yearly\r\n        Summary</sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/employee-loan\" [active]=\"isActive('/reports/employee-loan')\">Employee\r\n        Loan\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/single-emp-salary\" [active]=\"isActive('/reports/single-emp-salary')\">\r\n        Single\r\n        Employee Salary</sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/single-emp-leave\" [active]=\"isActive('/reports/single-emp-leave')\">Single\r\n        Employee Leave</sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/single-emp-increment\" [active]=\"isActive('/reports/single-emp-increment')\">\r\n        Single Employee increment</sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/single-emp-income-tax\" [active]=\"isActive('/reports/single-emp-income-tax')\">\r\n        Single Emp Income Tax</sidenav-router-link>\r\n      <sidenav-router-link route=\"/reports/\" [active]=\"isActive('/reports/')\"></sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Security -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Security\" [active]=\"isMenuActive('/security')\"\r\n      [open]=\"isMenuOpen('/security')\">\r\n      <sidenav-router-link route=\"/security/create-user\" [active]=\"isActive('/security/create-user')\">Create User\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/security/create-user-type\" [active]=\"isActive('/security/create-user-type')\">\r\n        Create\r\n        User Type\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/security/create-company\" [active]=\"isActive('/security/create-company')\">Create\r\n        Company\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/security/log-history\" [active]=\"isActive('/security/log-history')\">Log History\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/security/assign-page-access\" [active]=\"isActive('/security/assign-page-access')\">\r\n        Assign Page Access\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/security/web-portal-page-access\"\r\n        [active]=\"isActive('/security/web-portal-page-access')\">Web Portal Page Access\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/security/change-password\" [active]=\"isActive('/security/change-password')\">Change\r\n        Password\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/security/lock-unlock-salary\" [active]=\"isActive('/security/lock-unlock-salary')\">\r\n        Lock/Unlock Salary Process\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/security/assign-company\" [active]=\"isActive('/security/assign-company')\">Assign\r\n        Company\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/security/assign-branch\" [active]=\"isActive('/security/assign-branch')\">Assign\r\n        Branch\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/security/password-show\" [active]=\"isActive('/security/password-show')\">Password\r\n        Show\r\n      </sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Gl-Integration -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Gl Integration\" [active]=\"isMenuActive('/gl-integration')\"\r\n      [open]=\"isMenuOpen('/gl-integration')\">\r\n      <sidenav-router-link route=\"/gl-integration/cost-head\" [active]=\"isActive('/gl-integration/cost-head')\">Cost\r\n        Head</sidenav-router-link>\r\n      <sidenav-router-link route=\"/gl-integration/gl-code\" [active]=\"isActive('/gl-integration/gl-code')\">GL-Code\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/gl-integration/salary-head-assign\"\r\n        [active]=\"isActive('/gl-integration/salary-head-assign')\">Salary Head Assign</sidenav-router-link>\r\n      <sidenav-router-link route=\"/gl-integration/gl-report\" [active]=\"isActive('/gl-integration/gl-report')\">GL\r\n        Report</sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!--Apprisal-->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Apprisal\" [active]=\"isMenuActive('/apprisal')\"\r\n      [open]=\"isMenuOpen('/apprisal')\">\r\n      <sidenav-router-link route=\"/apprisal/competencies-type\" [active]=\"isActive('/apprisal/competencies-type')\">\r\n        Competencies Type</sidenav-router-link>\r\n      <sidenav-router-link route=\"/apprisal/competencies\" [active]=\"isActive('/apprisal/competencies')\">Competencies\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/apprisal/point\" [active]=\"isActive('/apprisal/point')\">Point\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/apprisal/emp-apprisal\" [active]=\"isActive('/apprisal/emp-apprisal')\">Employee\r\n        Appraisal</sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!--Apps-->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Apps\" [active]=\"isMenuActive('/apps')\"\r\n      [open]=\"isMenuOpen('/apps')\">\r\n      <sidenav-router-link route=\"/apps/location-setup\" [active]=\"isActive('/apps/location-setup')\">Location Setup\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/apps/location-show\" [active]=\"isActive('/apps/location-show')\">Location Show\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/apps/active-lnactive\" [active]=\"isActive('/apps/active-lnactive')\">Employee\r\n        Active\r\n        Location Update</sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Recruitment -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Recruitment\" [active]=\"isMenuActive('/recruitment')\"\r\n      [open]=\"isMenuOpen('/recruitment')\">\r\n      <sidenav-router-link route=\"/recruitment/recruitment\" [active]=\"isActive('/recruitment/recruitment')\">\r\n        Recruitment</sidenav-router-link>\r\n      <sidenav-router-link route=\"/recruitment/recruitment-approval\"\r\n        [active]=\"isActive('/recruitment/recruitment-approval')\">Recruitment Approval</sidenav-router-link>\r\n      <sidenav-router-link route=\"/recruitment/approval-by-hr\" [active]=\"isActive('/recruitment/approval-by-hr')\">\r\n        Approval By HR </sidenav-router-link>\r\n      <sidenav-router-link route=\"/recruitment/approval-by-account\"\r\n        [active]=\"isActive('/recruitment/approval-by-account')\">Approval By Account </sidenav-router-link>\r\n    </sidenav-menu>\r\n    <!-- Tour -->\r\n    <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Tour\" [active]=\"isMenuActive('/tour')\"\r\n      [open]=\"isMenuOpen('/tour')\">\r\n      <sidenav-router-link route=\"/tour/tour-apply\" [active]=\"isActive('/tour/tour-apply')\">Apply\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/tour/tour-approve\" [active]=\"isActive('/tour/tour-approve')\">Approve\r\n      </sidenav-router-link>\r\n      <sidenav-router-link route=\"/tour/tour-approve-hr\" [active]=\"isActive('/tour/tour-approve-hr')\">Approve by HR\r\n      </sidenav-router-link>\r\n    </sidenav-menu>\r\n\r\n\r\n    <!-- Module1 -->\r\n    <!-- <sidenav-menu icon=\"ion ion-md-speedometer\" text=\"Module 1\" [active]=\"isMenuActive('/module1')\" [open]=\"isMenuOpen('/module1')\">\r\n    <sidenav-router-link route=\"/module1/section1\" [active]=\"isActive('/module1/section1')\">Section 1</sidenav-router-link>\r\n    <sidenav-router-link route=\"/module1/section2\" [active]=\"isActive('/module1/section2')\">Section 2</sidenav-router-link>\r\n    <sidenav-router-link route=\"/module1/section3\" [active]=\"isActive('/module1/section3')\">Section 3</sidenav-router-link>\r\n    </sidenav-menu> -->\r\n\r\n  </div>\r\n</sidenav>\r\n"

/***/ }),

/***/ "./src/app/layout/layout-sidenav/layout-sidenav.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/layout-sidenav/layout-sidenav.component.ts ***!
  \*******************************************************************/
/*! exports provided: LayoutSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSidenavComponent", function() { return LayoutSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutSidenavComponent = /** @class */ (function () {
    function LayoutSidenavComponent(router, appService, layoutService) {
        this.router = router;
        this.appService = appService;
        this.layoutService = layoutService;
        this.orientation = 'vertical';
        this.hostClassVertical = false;
        this.hostClassHorizontal = false;
        this.hostClassFlex = false;
        // Set host classes
        this.hostClassVertical = this.orientation !== 'horizontal';
        this.hostClassHorizontal = !this.hostClassVertical;
        this.hostClassFlex = this.hostClassHorizontal;
    }
    LayoutSidenavComponent.prototype.ngAfterViewInit = function () {
        // Safari bugfix
        this.layoutService._redrawLayoutSidenav();
    };
    LayoutSidenavComponent.prototype.getClasses = function () {
        var bg = this.appService.layoutSidenavBg;
        if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
            bg = bg
                .replace(' sidenav-dark', '')
                .replace(' sidenav-light', '')
                .replace('-darker', '')
                .replace('-dark', '');
        }
        return (this.orientation === 'horizontal' ? 'container-p-x ' : '') + " bg-" + bg;
    };
    LayoutSidenavComponent.prototype.isActive = function (url) {
        return this.router.isActive(url, true);
    };
    LayoutSidenavComponent.prototype.isMenuActive = function (url) {
        return this.router.isActive(url, false);
    };
    LayoutSidenavComponent.prototype.isMenuOpen = function (url) {
        return this.router.isActive(url, false) && this.orientation !== 'horizontal';
    };
    LayoutSidenavComponent.prototype.toggleSidenav = function () {
        this.layoutService.toggleCollapsed();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LayoutSidenavComponent.prototype, "orientation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.layout-sidenav'),
        __metadata("design:type", Object)
    ], LayoutSidenavComponent.prototype, "hostClassVertical", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.layout-sidenav-horizontal'),
        __metadata("design:type", Object)
    ], LayoutSidenavComponent.prototype, "hostClassHorizontal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.flex-grow-0'),
        __metadata("design:type", Object)
    ], LayoutSidenavComponent.prototype, "hostClassFlex", void 0);
    LayoutSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-sidenav',
            template: __webpack_require__(/*! ./layout-sidenav.component.html */ "./src/app/layout/layout-sidenav/layout-sidenav.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [":host { display: block; }"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]])
    ], LayoutSidenavComponent);
    return LayoutSidenavComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_1_layout_1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-1/layout-1.component */ "./src/app/layout/layout-1/layout-1.component.ts");
/* harmony import */ var _layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-2/layout-2.component */ "./src/app/layout/layout-2/layout-2.component.ts");
/* harmony import */ var _layout_blank_layout_blank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-blank/layout-blank.component */ "./src/app/layout/layout-blank/layout-blank.component.ts");
/* harmony import */ var _layout_navbar_layout_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-navbar/layout-navbar.component */ "./src/app/layout/layout-navbar/layout-navbar.component.ts");
/* harmony import */ var _layout_sidenav_layout_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout-sidenav/layout-sidenav.component */ "./src/app/layout/layout-sidenav/layout-sidenav.component.ts");
/* harmony import */ var _layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout-footer/layout-footer.component */ "./src/app/layout/layout-footer/layout-footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _vendor_libs_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../vendor/libs/sidenav/sidenav.module */ "./src/vendor/libs/sidenav/sidenav.module.ts");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// *******************************************************************************
// Layouts



// *******************************************************************************
// Components



// *******************************************************************************
// Libs


// *******************************************************************************
// Services

// *******************************************************************************
//
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _vendor_libs_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_10__["SidenavModule"],
            ],
            declarations: [
                _layout_1_layout_1_component__WEBPACK_IMPORTED_MODULE_3__["Layout1Component"],
                _layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_4__["Layout2Component"],
                _layout_blank_layout_blank_component__WEBPACK_IMPORTED_MODULE_5__["LayoutBlankComponent"],
                _layout_navbar_layout_navbar_component__WEBPACK_IMPORTED_MODULE_6__["LayoutNavbarComponent"],
                _layout_sidenav_layout_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["LayoutSidenavComponent"],
                _layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_8__["LayoutFooterComponent"]
            ],
            providers: [
                _layout_service__WEBPACK_IMPORTED_MODULE_11__["LayoutService"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.service.ts":
/*!******************************************!*\
  !*** ./src/app/layout/layout.service.ts ***!
  \******************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
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

var LayoutService = /** @class */ (function () {
    function LayoutService(zone) {
        this.zone = zone;
    }
    Object.defineProperty(LayoutService.prototype, "layoutHelpers", {
        get: function () {
            return window['layoutHelpers'];
        },
        enumerable: true,
        configurable: true
    });
    LayoutService.prototype.exec = function (fn) {
        return this.layoutHelpers && this.zone.runOutsideAngular(fn);
    };
    LayoutService.prototype.getLayoutSidenav = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.getLayoutSidenav(); }) || null;
    };
    LayoutService.prototype.getSidenav = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.getSidenav(); }) || null;
    };
    LayoutService.prototype.getLayoutNavbar = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.getLayoutNavbar(); }) || null;
    };
    LayoutService.prototype.getLayoutFooter = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.getLayoutFooter(); }) || null;
    };
    LayoutService.prototype.getLayoutContainer = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.getLayoutContainer(); }) || null;
    };
    LayoutService.prototype.isSmallScreen = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.isSmallScreen(); });
    };
    LayoutService.prototype.isLayout1 = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.isLayout1(); });
    };
    LayoutService.prototype.isCollapsed = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.isCollapsed(); });
    };
    LayoutService.prototype.isFixed = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.isFixed(); });
    };
    LayoutService.prototype.isOffcanvas = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.isOffcanvas(); });
    };
    LayoutService.prototype.isNavbarFixed = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.isNavbarFixed(); });
    };
    LayoutService.prototype.isFooterFixed = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.isFooterFixed(); });
    };
    LayoutService.prototype.isReversed = function () {
        var _this = this;
        return this.exec(function () { return _this.layoutHelpers.isReversed(); });
    };
    LayoutService.prototype.setCollapsed = function (collapsed, animate) {
        var _this = this;
        if (animate === void 0) { animate = true; }
        this.exec(function () { return _this.layoutHelpers.setCollapsed(collapsed, animate); });
    };
    LayoutService.prototype.toggleCollapsed = function (animate) {
        var _this = this;
        if (animate === void 0) { animate = true; }
        this.exec(function () { return _this.layoutHelpers.toggleCollapsed(animate); });
    };
    LayoutService.prototype.setPosition = function (fixed, offcanvas) {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers.setPosition(fixed, offcanvas); });
    };
    LayoutService.prototype.setNavbarFixed = function (fixed) {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers.setNavbarFixed(fixed); });
    };
    LayoutService.prototype.setFooterFixed = function (fixed) {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers.setFooterFixed(fixed); });
    };
    LayoutService.prototype.setReversed = function (reversed) {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers.setReversed(reversed); });
    };
    LayoutService.prototype.update = function () {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers.update(); });
    };
    LayoutService.prototype.setAutoUpdate = function (enable) {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers.setAutoUpdate(enable); });
    };
    LayoutService.prototype.on = function (event, callback) {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers.on(event, callback); });
    };
    LayoutService.prototype.off = function (event) {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers.off(event); });
    };
    LayoutService.prototype.init = function () {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers.init(); });
    };
    LayoutService.prototype.destroy = function () {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers.destroy(); });
    };
    // Internal
    //
    LayoutService.prototype._redrawLayoutSidenav = function () {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers._redrawLayoutSidenav(); });
    };
    LayoutService.prototype._removeClass = function (cls) {
        var _this = this;
        this.exec(function () { return _this.layoutHelpers._removeClass(cls); });
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.isAuthenticated = function () {
        var remember = localStorage.getItem('remember');
        var token = null;
        if (remember && remember === 'true') {
            token = localStorage.getItem('token');
        }
        else {
            token = sessionStorage.getItem('token');
        }
        if (token) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.isLocked = function () {
        var isLocked = null;
        var remember = localStorage.getItem('remember');
        if (remember && remember === 'true') {
            isLocked = localStorage.getItem('locked');
        }
        else {
            isLocked = sessionStorage.getItem('locked');
        }
        return isLocked === 'true';
    };
    AuthService.prototype.login = function (credentials) {
        var email = credentials.email;
        var password = credentials.password;
        var tokenUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/token';
        var data = 'username=' + email + '&password=' + password + '&grant_type=password';
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.post(tokenUrl, data, { headers: header });
    };
    AuthService.prototype.retrieve = function (email) {
        var retrieveUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/retrieve';
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('email', email);
        return this.http.post(retrieveUrl, body);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.getOrder = function (orderId) {
        var orderFetchUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/order/fetch';
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('orderId', orderId);
        return this.http.get(orderFetchUrl, { params: body });
    };
    OrderService.prototype.approve = function (id) {
        var orderApproveUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/order/approve';
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('orderId', id);
        return this.http.post(orderApproveUrl, body);
    };
    OrderService.prototype.reject = function (id) {
        var orderRejectlUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/order/reject';
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('orderId', id);
        return this.http.post(orderRejectlUrl, body);
    };
    OrderService.prototype.orderApprove = function () {
        var orderApproveUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/order/approvable';
        return this.http.get(orderApproveUrl);
    };
    OrderService.prototype.customer = function () {
        var customerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/order/customer';
        return this.http.get(customerUrl);
    };
    OrderService.prototype.orderItem = function () {
        var itemsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/order/items';
        return this.http.get(itemsUrl);
    };
    OrderService.prototype.paymentType = function () {
        var methodUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/order/method';
        return this.http.get(methodUrl);
    };
    OrderService.prototype.orders = function (fromDate, toDate, customerId) {
        var ordersUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/order/orders';
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('fromDate', fromDate.toLocaleDateString())
            .set('toDate', toDate.toLocaleDateString())
            .set('customerId', customerId.toString());
        return this.http.get(ordersUrl, { params: body });
    };
    OrderService.prototype.nextOrderNo = function () {
        var nextUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/order/next';
        return this.http.get(nextUrl);
    };
    OrderService.prototype.place = function (order, items) {
        var orderUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/order/place';
        var body = __assign({}, order, { Items: items });
        return this.http.post(orderUrl, body);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/token.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/token.interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/retry */ "./node_modules/rxjs-compat/_esm5/add/operator/retry.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
        this.remember = false;
        var rememberMe = localStorage.getItem('remember');
        if (rememberMe) {
            if (rememberMe === 'true') {
                this.remember = true;
            }
        }
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var token = null;
        if (this.remember) {
            token = localStorage.getItem('token');
        }
        else {
            token = sessionStorage.getItem('token');
        }
        if (token) {
            request = request.clone({
                setHeaders: { 'Authorization': 'Bearer ' + token }
            });
        }
        return next.handle(request).retry(1);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/dateformat.ts":
/*!**************************************!*\
  !*** ./src/app/shared/dateformat.ts ***!
  \**************************************/
/*! exports provided: NgbDateCustomParserFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateCustomParserFormatter", function() { return NgbDateCustomParserFormatter; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
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



var NgbDateCustomParserFormatter = /** @class */ (function (_super) {
    __extends(NgbDateCustomParserFormatter, _super);
    function NgbDateCustomParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateCustomParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('/');
            if (dateParts.length === 1 && Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(dateParts[0])) {
                return { day: this.toInteger(dateParts[0]), month: null, year: null };
            }
            else if (dateParts.length === 2 && Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(dateParts[0]) && Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(dateParts[1])) {
                return { day: this.toInteger(dateParts[0]), month: this.toInteger(dateParts[1]), year: null };
            }
            else if (dateParts.length === 3 && Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(dateParts[0]) && Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(dateParts[1]) && Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(dateParts[2])) {
                return { day: this.toInteger(dateParts[0]), month: this.toInteger(dateParts[1]), year: this.toInteger(dateParts[2]) };
            }
        }
        return null;
    };
    NgbDateCustomParserFormatter.prototype.format = function (date) {
        return date ?
            (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(date.day) ? this.padNumber(date.day) : '') + "/" + (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(date.month) ? this.padNumber(date.month) : '') + "/" + date.year :
            '';
    };
    NgbDateCustomParserFormatter.prototype.toInteger = function (value) {
        return parseInt("" + value, 10);
    };
    NgbDateCustomParserFormatter.prototype.isNumber = function (value) {
        return !isNaN(this.toInteger(value));
    };
    NgbDateCustomParserFormatter.prototype.isInteger = function (value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    };
    NgbDateCustomParserFormatter.prototype.padNumber = function (value) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(value)) {
            return ("0" + value).slice(-2);
        }
        else {
            return '';
        }
    };
    NgbDateCustomParserFormatter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NgbDateCustomParserFormatter);
    return NgbDateCustomParserFormatter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDateParserFormatter"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    apiUrl: 'http://localhost:4200/api'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




var options = {
    preserveWhitespaces: false
};
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
else {
    options.preserveWhitespaces = true;
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], options).catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/vendor/libs/ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss":
/*!**************************************************************************!*\
  !*** ./src/vendor/libs/ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ {\n  /*\n * Container style\n */\n  /*\n * Scrollbar rail styles\n */\n  /*\n * Scrollbar thumb styles\n */\n  /* MS supports */ }\n  :host /deep/ .ps {\n    overflow: hidden !important;\n    overflow-anchor: none;\n    -ms-overflow-style: none;\n    touch-action: auto;\n    -ms-touch-action: auto; }\n  :host /deep/ .ps__rail-x {\n    display: none;\n    opacity: 0;\n    transition: background-color .2s linear, opacity .2s linear;\n    -webkit-transition: background-color .2s linear, opacity .2s linear;\n    height: 15px;\n    /* there must be 'bottom' or 'top' for ps__rail-x */\n    bottom: 0px;\n    /* please don't change 'position' */\n    position: absolute; }\n  :host /deep/ .ps__rail-y {\n    display: none;\n    opacity: 0;\n    transition: background-color .2s linear, opacity .2s linear;\n    -webkit-transition: background-color .2s linear, opacity .2s linear;\n    width: 15px;\n    /* there must be 'right' or 'left' for ps__rail-y */\n    right: 0;\n    /* please don't change 'position' */\n    position: absolute; }\n  :host /deep/ .ps--active-x > .ps__rail-x,\n  :host /deep/ .ps--active-y > .ps__rail-y {\n    display: block;\n    background-color: transparent; }\n  :host /deep/ .ps:hover > .ps__rail-x,\n  :host /deep/ .ps:hover > .ps__rail-y,\n  :host /deep/ .ps--focus > .ps__rail-x,\n  :host /deep/ .ps--focus > .ps__rail-y,\n  :host /deep/ .ps--scrolling-x > .ps__rail-x,\n  :host /deep/ .ps--scrolling-y > .ps__rail-y {\n    opacity: 0.6; }\n  :host /deep/ .ps .ps__rail-x:hover,\n  :host /deep/ .ps .ps__rail-y:hover,\n  :host /deep/ .ps .ps__rail-x:focus,\n  :host /deep/ .ps .ps__rail-y:focus,\n  :host /deep/ .ps .ps__rail-x.ps--clicking,\n  :host /deep/ .ps .ps__rail-y.ps--clicking {\n    background-color: #eee;\n    opacity: 0.9; }\n  :host /deep/ .ps__thumb-x {\n    background-color: #aaa;\n    border-radius: 6px;\n    transition: background-color .2s linear, height .2s ease-in-out;\n    -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n    height: 6px;\n    /* there must be 'bottom' for ps__thumb-x */\n    bottom: 2px;\n    /* please don't change 'position' */\n    position: absolute; }\n  :host /deep/ .ps__thumb-y {\n    background-color: #aaa;\n    border-radius: 6px;\n    transition: background-color .2s linear, width .2s ease-in-out;\n    -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n    width: 6px;\n    /* there must be 'right' for ps__thumb-y */\n    right: 2px;\n    /* please don't change 'position' */\n    position: absolute; }\n  :host /deep/ .ps__rail-x:hover > .ps__thumb-x,\n  :host /deep/ .ps__rail-x:focus > .ps__thumb-x,\n  :host /deep/ .ps__rail-x.ps--clicking .ps__thumb-x {\n    background-color: #999;\n    height: 11px; }\n  :host /deep/ .ps__rail-y:hover > .ps__thumb-y,\n  :host /deep/ .ps__rail-y:focus > .ps__thumb-y,\n  :host /deep/ .ps__rail-y.ps--clicking .ps__thumb-y {\n    background-color: #999;\n    width: 11px; }\n  @supports (-ms-overflow-style: none) {\n    :host /deep/ .ps {\n      overflow: auto !important; } }\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    :host /deep/ .ps {\n      overflow: auto !important; } }\n  :host /deep/ .ps {\n  position: relative; }\n  :host /deep/ .ps__rail-x,\n:host /deep/ .ps__rail-y,\n:host /deep/ .ps__thumb-x,\n:host /deep/ .ps__thumb-y {\n  border-radius: 10rem; }\n  :host /deep/ .ps__rail-x {\n  height: 0.25rem; }\n  :host /deep/ .ps__rail-y {\n  width: 0.25rem; }\n  :host /deep/ .ps__thumb-x {\n  bottom: 0;\n  height: 0.25rem; }\n  :host /deep/ .ps__thumb-y {\n  right: 0;\n  width: 0.25rem; }\n  :host /deep/ .ps__rail-x:hover,\n:host /deep/ .ps__rail-x:focus,\n:host /deep/ .ps__rail-x.ps--clicking,\n:host /deep/ .ps__rail-x:hover > .ps__thumb-x,\n:host /deep/ .ps__rail-x:focus > .ps__thumb-x,\n:host /deep/ .ps__rail-x.ps--clicking > .ps__thumb-x {\n  height: 0.375rem; }\n  :host /deep/ .ps__rail-y:hover,\n:host /deep/ .ps__rail-y:focus,\n:host /deep/ .ps__rail-y.ps--clicking,\n:host /deep/ .ps__rail-y:hover > .ps__thumb-y,\n:host /deep/ .ps__rail-y:focus > .ps__thumb-y,\n:host /deep/ .ps__rail-y.ps--clicking > .ps__thumb-y {\n  width: 0.375rem; }\n  .default-style :host /deep/ .ps__rail-x:hover,\n.default-style :host /deep/ .ps__rail-y:hover,\n.default-style :host /deep/ .ps__rail-x:focus,\n.default-style :host /deep/ .ps__rail-y:focus,\n.default-style :host /deep/ .ps__rail-x.ps--clicking,\n.default-style :host /deep/ .ps__rail-y.ps--clicking {\n  background-color: rgba(24, 28, 33, 0.1); }\n  .default-style :host /deep/ .ps__thumb-x,\n.default-style :host /deep/ .ps__thumb-y {\n  background-color: rgba(24, 28, 33, 0.3); }\n  .default-style :host /deep/ .ps__rail-x:hover > .ps__thumb-x,\n.default-style :host /deep/ .ps__rail-y:hover > .ps__thumb-y,\n.default-style :host /deep/ .ps__rail-x:focus > .ps__thumb-x,\n.default-style :host /deep/ .ps__rail-y:focus > .ps__thumb-y,\n.default-style :host /deep/ .ps__rail-x.ps--clicking > .ps__thumb-x,\n.default-style :host /deep/ .ps__rail-y.ps--clicking > .ps__thumb-y {\n  background-color: rgba(24, 28, 33, 0.6); }\n  .default-style :host /deep/ .ps-inverted .ps__rail-x:hover,\n.default-style :host /deep/ .ps-inverted .ps__rail-y:hover,\n.default-style :host /deep/ .ps-inverted .ps__rail-x:focus,\n.default-style :host /deep/ .ps-inverted .ps__rail-y:focus,\n.default-style :host /deep/ .ps-inverted .ps__rail-x.ps--clicking,\n.default-style :host /deep/ .ps-inverted .ps__rail-y.ps--clicking {\n  background-color: rgba(255, 255, 255, 0.5); }\n  .default-style :host /deep/ .ps-inverted .ps__thumb-x,\n.default-style :host /deep/ .ps-inverted .ps__thumb-y {\n  background-color: rgba(255, 255, 255, 0.7); }\n  .default-style :host /deep/ .ps-inverted .ps__rail-x:hover > .ps__thumb-x,\n.default-style :host /deep/ .ps-inverted .ps__rail-y:hover > .ps__thumb-y,\n.default-style :host /deep/ .ps-inverted .ps__rail-x:focus > .ps__thumb-x,\n.default-style :host /deep/ .ps-inverted .ps__rail-y:focus > .ps__thumb-y,\n.default-style :host /deep/ .ps-inverted .ps__rail-x.ps--clicking > .ps__thumb-x,\n.default-style :host /deep/ .ps-inverted .ps__rail-y.ps--clicking > .ps__thumb-y {\n  background-color: #fff; }\n  .material-style :host /deep/ .ps__rail-x:hover,\n.material-style :host /deep/ .ps__rail-y:hover,\n.material-style :host /deep/ .ps__rail-x:focus,\n.material-style :host /deep/ .ps__rail-y:focus,\n.material-style :host /deep/ .ps__rail-x.ps--clicking,\n.material-style :host /deep/ .ps__rail-y.ps--clicking {\n  background-color: rgba(24, 28, 33, 0.1); }\n  .material-style :host /deep/ .ps__thumb-x,\n.material-style :host /deep/ .ps__thumb-y {\n  background-color: rgba(24, 28, 33, 0.3); }\n  .material-style :host /deep/ .ps__rail-x:hover > .ps__thumb-x,\n.material-style :host /deep/ .ps__rail-y:hover > .ps__thumb-y,\n.material-style :host /deep/ .ps__rail-x:focus > .ps__thumb-x,\n.material-style :host /deep/ .ps__rail-y:focus > .ps__thumb-y,\n.material-style :host /deep/ .ps__rail-x.ps--clicking > .ps__thumb-x,\n.material-style :host /deep/ .ps__rail-y.ps--clicking > .ps__thumb-y {\n  background-color: rgba(24, 28, 33, 0.6); }\n  .material-style :host /deep/ .ps-inverted .ps__rail-x:hover,\n.material-style :host /deep/ .ps-inverted .ps__rail-y:hover,\n.material-style :host /deep/ .ps-inverted .ps__rail-x:focus,\n.material-style :host /deep/ .ps-inverted .ps__rail-y:focus,\n.material-style :host /deep/ .ps-inverted .ps__rail-x.ps--clicking,\n.material-style :host /deep/ .ps-inverted .ps__rail-y.ps--clicking {\n  background-color: rgba(255, 255, 255, 0.5); }\n  .material-style :host /deep/ .ps-inverted .ps__thumb-x,\n.material-style :host /deep/ .ps-inverted .ps__thumb-y {\n  background-color: rgba(255, 255, 255, 0.7); }\n  .material-style :host /deep/ .ps-inverted .ps__rail-x:hover > .ps__thumb-x,\n.material-style :host /deep/ .ps-inverted .ps__rail-y:hover > .ps__thumb-y,\n.material-style :host /deep/ .ps-inverted .ps__rail-x:focus > .ps__thumb-x,\n.material-style :host /deep/ .ps-inverted .ps__rail-y:focus > .ps__thumb-y,\n.material-style :host /deep/ .ps-inverted .ps__rail-x.ps--clicking > .ps__thumb-x,\n.material-style :host /deep/ .ps-inverted .ps__rail-y.ps--clicking > .ps__thumb-y {\n  background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92ZW5kb3IvbGlicy9uZ3gtcGVyZmVjdC1zY3JvbGxiYXIvQzpcXFVzZXJzXFxBbmRyb2lkXFxEZXNrdG9wXFxHaXRidWlsZFxcSFJNUy9zcmNcXHZlbmRvclxcbGlic1xcbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyXFxuZ3gtcGVyZmVjdC1zY3JvbGxiYXIuc2NzcyIsInNyYy92ZW5kb3IvbGlicy9uZ3gtcGVyZmVjdC1zY3JvbGxiYXIvQzpcXFVzZXJzXFxBbmRyb2lkXFxEZXNrdG9wXFxHaXRidWlsZFxcSFJNUy9ub2RlX21vZHVsZXNcXHBlcmZlY3Qtc2Nyb2xsYmFyXFxjc3NcXHBlcmZlY3Qtc2Nyb2xsYmFyLmNzcyIsInNyYy92ZW5kb3IvbGlicy9uZ3gtcGVyZmVjdC1zY3JvbGxiYXIvbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyLnNjc3MiLCJzcmMvdmVuZG9yL2xpYnMvbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyL0M6XFxVc2Vyc1xcQW5kcm9pZFxcRGVza3RvcFxcR2l0YnVpbGRcXEhSTVMvc3JjXFx2ZW5kb3JcXHN0eWxlc1xcX2FwcHdvcmtcXF92YXJpYWJsZXMuc2NzcyIsInNyYy92ZW5kb3IvbGlicy9uZ3gtcGVyZmVjdC1zY3JvbGxiYXIvQzpcXFVzZXJzXFxBbmRyb2lkXFxEZXNrdG9wXFxHaXRidWlsZFxcSFJNUy9zcmNcXHZlbmRvclxcc3R5bGVzXFxfYXBwd29ya1xcX3ZhcmlhYmxlcy1tYXRlcmlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VDREE7O0VDR0U7RURRRjs7RUNMRTtFRHlERjs7RUN0REU7RUQrRkYsZ0JBQUEsRUFBaUI7RUR2R2pCO0lDR0UsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHNCQUFzQixFQUFBO0VEUHhCO0lDY0UsYUFBYTtJQUNiLFVBQVU7SUFDViwyREFBMkQ7SUFDM0QsbUVBQW1FO0lBQ25FLFlBQVk7SUFDWixtREFBQTtJQUNBLFdBQVc7SUFDWCxtQ0FBQTtJQUNBLGtCQUFrQixFQUFBO0VEdEJwQjtJQzBCRSxhQUFhO0lBQ2IsVUFBVTtJQUNWLDJEQUEyRDtJQUMzRCxtRUFBbUU7SUFDbkUsV0FBVztJQUNYLG1EQUFBO0lBQ0EsUUFBUTtJQUNSLG1DQUFBO0lBQ0Esa0JBQWtCLEVBQUE7RURsQ3BCOztJQ3VDRSxjQUFjO0lBQ2QsNkJBQTZCLEVBQUE7RUR4Qy9COzs7Ozs7SUNpREUsWUFBWSxFQUFBO0VEakRkOzs7Ozs7SUMwREUsc0JBQXNCO0lBQ3RCLFlBQVksRUFBQTtFRDNEZDtJQ2tFRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLCtEQUErRDtJQUMvRCx1RUFBdUU7SUFDdkUsV0FBVztJQUNYLDJDQUFBO0lBQ0EsV0FBVztJQUNYLG1DQUFBO0lBQ0Esa0JBQWtCLEVBQUE7RUQxRXBCO0lDOEVFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsOERBQThEO0lBQzlELHNFQUFzRTtJQUN0RSxVQUFVO0lBQ1YsMENBQUE7SUFDQSxVQUFVO0lBQ1YsbUNBQUE7SUFDQSxrQkFBa0IsRUFBQTtFRHRGcEI7OztJQzRGRSxzQkFBc0I7SUFDdEIsWUFBWSxFQUFBO0VEN0ZkOzs7SUNtR0Usc0JBQXNCO0lBQ3RCLFdBQVcsRUFBQTtFQUl1QjtJRHhHcEM7TUMwR0kseUJBQXlCLEVBQUEsRUFDMUI7RUFHSDtJRDlHQTtNQ2dISSx5QkFBeUIsRUFBQSxFQUMxQjtFRDVHSDtFQUNFLGtCQUFrQixFQUFBO0VBR3BCOzs7O0VBSUUsb0JBQW9CLEVBQUE7RUFHdEI7RUFDRSxlQWZ5QixFQUFBO0VBa0IzQjtFQUNFLGNBbkJ5QixFQUFBO0VBc0IzQjtFQUNFLFNBQVM7RUFDVCxlQXhCeUIsRUFBQTtFQTJCM0I7RUFDRSxRQUFRO0VBQ1IsY0E3QnlCLEVBQUE7RUFnQzNCOzs7Ozs7RUFNRSxnQkFyQ2dDLEVBQUE7RUF3Q2xDOzs7Ozs7RUFNRSxlQTlDZ0MsRUFBQTtFQWlEbEM7Ozs7OztFQVNJLHVDR3ZEa0IsRUFBQTtFSDhDdEI7O0VBY0ksdUNHNURrQixFQUFBO0VIOEN0Qjs7Ozs7O0VBdUJJLHVDR3JFa0IsRUFBQTtFSDhDdEI7Ozs7OztFQWlDTSwwQ0FBMkIsRUFBQTtFQWpDakM7O0VBc0NNLDBDQUEyQixFQUFBO0VBdENqQzs7Ozs7O0VBK0NNLHNCQUFzQixFQUFBO0VBSzVCOzs7Ozs7RUFTSSx1Q0kzR2tCLEVBQUE7RUprR3RCOztFQWNJLHVDSWhIa0IsRUFBQTtFSmtHdEI7Ozs7OztFQXVCSSx1Q0l6SGtCLEVBQUE7RUprR3RCOzs7Ozs7RUFpQ00sMENBQTJCLEVBQUE7RUFqQ2pDOztFQXNDTSwwQ0FBMkIsRUFBQTtFQXRDakM7Ozs7OztFQStDTSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvdmVuZG9yL2xpYnMvbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyL25neC1wZXJmZWN0LXNjcm9sbGJhci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnZlbmRvci9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMvbGlicyc7XHJcbjpob3N0IC9kZWVwLyB7IEBpbXBvcnQgXCJub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvY3NzL3BlcmZlY3Qtc2Nyb2xsYmFyXCI7IH1cclxuXHJcbiRwcy1zY3JvbGxiYXItd2lkdGg6IC4yNXJlbSAhZGVmYXVsdDtcclxuJHBzLXNjcm9sbGJhci1ob3Zlci13aWR0aDogLjM3NXJlbSAhZGVmYXVsdDtcclxuXHJcbjpob3N0IC9kZWVwLyAucHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC14LFxyXG46aG9zdCAvZGVlcC8gLnBzX19yYWlsLXksXHJcbjpob3N0IC9kZWVwLyAucHNfX3RodW1iLXgsXHJcbjpob3N0IC9kZWVwLyAucHNfX3RodW1iLXkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnBzX19yYWlsLXgge1xyXG4gIGhlaWdodDogJHBzLXNjcm9sbGJhci13aWR0aDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC15IHtcclxuICB3aWR0aDogJHBzLXNjcm9sbGJhci13aWR0aDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5wc19fdGh1bWIteCB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogJHBzLXNjcm9sbGJhci13aWR0aDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5wc19fdGh1bWIteSB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6ICRwcy1zY3JvbGxiYXItd2lkdGg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAucHNfX3JhaWwteDpob3ZlcixcclxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC14OmZvY3VzLFxyXG46aG9zdCAvZGVlcC8gLnBzX19yYWlsLXgucHMtLWNsaWNraW5nLFxyXG46aG9zdCAvZGVlcC8gLnBzX19yYWlsLXg6aG92ZXIgPiAucHNfX3RodW1iLXgsXHJcbjpob3N0IC9kZWVwLyAucHNfX3JhaWwteDpmb2N1cyA+IC5wc19fdGh1bWIteCxcclxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC14LnBzLS1jbGlja2luZyA+IC5wc19fdGh1bWIteCB7XHJcbiAgaGVpZ2h0OiAkcHMtc2Nyb2xsYmFyLWhvdmVyLXdpZHRoO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnBzX19yYWlsLXk6aG92ZXIsXHJcbjpob3N0IC9kZWVwLyAucHNfX3JhaWwteTpmb2N1cyxcclxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC15LnBzLS1jbGlja2luZyxcclxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC15OmhvdmVyID4gLnBzX190aHVtYi15LFxyXG46aG9zdCAvZGVlcC8gLnBzX19yYWlsLXk6Zm9jdXMgPiAucHNfX3RodW1iLXksXHJcbjpob3N0IC9kZWVwLyAucHNfX3JhaWwteS5wcy0tY2xpY2tpbmcgPiAucHNfX3RodW1iLXkge1xyXG4gIHdpZHRoOiAkcHMtc2Nyb2xsYmFyLWhvdmVyLXdpZHRoO1xyXG59XHJcblxyXG4uZGVmYXVsdC1zdHlsZSA6aG9zdCAvZGVlcC8ge1xyXG4gIEBpbXBvcnQgXCJ+dmVuZG9yL3N0eWxlcy9fYXBwd29yay9pbmNsdWRlXCI7XHJcblxyXG4gIC5wc19fcmFpbC14OmhvdmVyLFxyXG4gIC5wc19fcmFpbC15OmhvdmVyLFxyXG4gIC5wc19fcmFpbC14OmZvY3VzLFxyXG4gIC5wc19fcmFpbC15OmZvY3VzLFxyXG4gIC5wc19fcmFpbC14LnBzLS1jbGlja2luZyxcclxuICAucHNfX3JhaWwteS5wcy0tY2xpY2tpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMjAwO1xyXG4gIH1cclxuXHJcbiAgLnBzX190aHVtYi14LFxyXG4gIC5wc19fdGh1bWIteSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS00MDA7XHJcbiAgfVxyXG5cclxuICAucHNfX3JhaWwteDpob3ZlciA+IC5wc19fdGh1bWIteCxcclxuICAucHNfX3JhaWwteTpob3ZlciA+IC5wc19fdGh1bWIteSxcclxuICAucHNfX3JhaWwteDpmb2N1cyA+IC5wc19fdGh1bWIteCxcclxuICAucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteSxcclxuICAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcgPiAucHNfX3RodW1iLXgsXHJcbiAgLnBzX19yYWlsLXkucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi15IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTcwMDtcclxuICB9XHJcblxyXG4gIC5wcy1pbnZlcnRlZCB7XHJcbiAgICAucHNfX3JhaWwteDpob3ZlcixcclxuICAgIC5wc19fcmFpbC15OmhvdmVyLFxyXG4gICAgLnBzX19yYWlsLXg6Zm9jdXMsXHJcbiAgICAucHNfX3JhaWwteTpmb2N1cyxcclxuICAgIC5wc19fcmFpbC14LnBzLS1jbGlja2luZyxcclxuICAgIC5wc19fcmFpbC15LnBzLS1jbGlja2luZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wc19fdGh1bWIteCxcclxuICAgIC5wc19fdGh1bWIteSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wc19fcmFpbC14OmhvdmVyID4gLnBzX190aHVtYi14LFxyXG4gICAgLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksXHJcbiAgICAucHNfX3JhaWwteDpmb2N1cyA+IC5wc19fdGh1bWIteCxcclxuICAgIC5wc19fcmFpbC15OmZvY3VzID4gLnBzX190aHVtYi15LFxyXG4gICAgLnBzX19yYWlsLXgucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi14LFxyXG4gICAgLnBzX19yYWlsLXkucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi15IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1zdHlsZSA6aG9zdCAvZGVlcC8ge1xyXG4gIEBpbXBvcnQgXCJ+dmVuZG9yL3N0eWxlcy9fYXBwd29yay9pbmNsdWRlLW1hdGVyaWFsXCI7XHJcblxyXG4gIC5wc19fcmFpbC14OmhvdmVyLFxyXG4gIC5wc19fcmFpbC15OmhvdmVyLFxyXG4gIC5wc19fcmFpbC14OmZvY3VzLFxyXG4gIC5wc19fcmFpbC15OmZvY3VzLFxyXG4gIC5wc19fcmFpbC14LnBzLS1jbGlja2luZyxcclxuICAucHNfX3JhaWwteS5wcy0tY2xpY2tpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMjAwO1xyXG4gIH1cclxuXHJcbiAgLnBzX190aHVtYi14LFxyXG4gIC5wc19fdGh1bWIteSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS00MDA7XHJcbiAgfVxyXG5cclxuICAucHNfX3JhaWwteDpob3ZlciA+IC5wc19fdGh1bWIteCxcclxuICAucHNfX3JhaWwteTpob3ZlciA+IC5wc19fdGh1bWIteSxcclxuICAucHNfX3JhaWwteDpmb2N1cyA+IC5wc19fdGh1bWIteCxcclxuICAucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteSxcclxuICAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcgPiAucHNfX3RodW1iLXgsXHJcbiAgLnBzX19yYWlsLXkucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi15IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTcwMDtcclxuICB9XHJcblxyXG4gIC5wcy1pbnZlcnRlZCB7XHJcbiAgICAucHNfX3JhaWwteDpob3ZlcixcclxuICAgIC5wc19fcmFpbC15OmhvdmVyLFxyXG4gICAgLnBzX19yYWlsLXg6Zm9jdXMsXHJcbiAgICAucHNfX3JhaWwteTpmb2N1cyxcclxuICAgIC5wc19fcmFpbC14LnBzLS1jbGlja2luZyxcclxuICAgIC5wc19fcmFpbC15LnBzLS1jbGlja2luZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wc19fdGh1bWIteCxcclxuICAgIC5wc19fdGh1bWIteSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wc19fcmFpbC14OmhvdmVyID4gLnBzX190aHVtYi14LFxyXG4gICAgLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksXHJcbiAgICAucHNfX3JhaWwteDpmb2N1cyA+IC5wc19fdGh1bWIteCxcclxuICAgIC5wc19fcmFpbC15OmZvY3VzID4gLnBzX190aHVtYi15LFxyXG4gICAgLnBzX19yYWlsLXgucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi14LFxyXG4gICAgLnBzX19yYWlsLXkucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi15IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLypcbiAqIENvbnRhaW5lciBzdHlsZVxuICovXG4ucHMge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LWFuY2hvcjogbm9uZTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICB0b3VjaC1hY3Rpb246IGF1dG87XG4gIC1tcy10b3VjaC1hY3Rpb246IGF1dG87XG59XG5cbi8qXG4gKiBTY3JvbGxiYXIgcmFpbCBzdHlsZXNcbiAqL1xuLnBzX19yYWlsLXgge1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcbiAgaGVpZ2h0OiAxNXB4O1xuICAvKiB0aGVyZSBtdXN0IGJlICdib3R0b20nIG9yICd0b3AnIGZvciBwc19fcmFpbC14ICovXG4gIGJvdHRvbTogMHB4O1xuICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHNfX3JhaWwteSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICB3aWR0aDogMTVweDtcbiAgLyogdGhlcmUgbXVzdCBiZSAncmlnaHQnIG9yICdsZWZ0JyBmb3IgcHNfX3JhaWwteSAqL1xuICByaWdodDogMDtcbiAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzLS1hY3RpdmUteCA+IC5wc19fcmFpbC14LFxuLnBzLS1hY3RpdmUteSA+IC5wc19fcmFpbC15IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucHM6aG92ZXIgPiAucHNfX3JhaWwteCxcbi5wczpob3ZlciA+IC5wc19fcmFpbC15LFxuLnBzLS1mb2N1cyA+IC5wc19fcmFpbC14LFxuLnBzLS1mb2N1cyA+IC5wc19fcmFpbC15LFxuLnBzLS1zY3JvbGxpbmcteCA+IC5wc19fcmFpbC14LFxuLnBzLS1zY3JvbGxpbmcteSA+IC5wc19fcmFpbC15IHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4ucHMgLnBzX19yYWlsLXg6aG92ZXIsXG4ucHMgLnBzX19yYWlsLXk6aG92ZXIsXG4ucHMgLnBzX19yYWlsLXg6Zm9jdXMsXG4ucHMgLnBzX19yYWlsLXk6Zm9jdXMsXG4ucHMgLnBzX19yYWlsLXgucHMtLWNsaWNraW5nLFxuLnBzIC5wc19fcmFpbC15LnBzLS1jbGlja2luZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLypcbiAqIFNjcm9sbGJhciB0aHVtYiBzdHlsZXNcbiAqL1xuLnBzX190aHVtYi14IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIGhlaWdodCAuMnMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBoZWlnaHQgLjJzIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDZweDtcbiAgLyogdGhlcmUgbXVzdCBiZSAnYm90dG9tJyBmb3IgcHNfX3RodW1iLXggKi9cbiAgYm90dG9tOiAycHg7XG4gIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wc19fdGh1bWIteSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCB3aWR0aCAuMnMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCB3aWR0aCAuMnMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiA2cHg7XG4gIC8qIHRoZXJlIG11c3QgYmUgJ3JpZ2h0JyBmb3IgcHNfX3RodW1iLXkgKi9cbiAgcmlnaHQ6IDJweDtcbiAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzX19yYWlsLXg6aG92ZXIgPiAucHNfX3RodW1iLXgsXG4ucHNfX3JhaWwteDpmb2N1cyA+IC5wc19fdGh1bWIteCxcbi5wc19fcmFpbC14LnBzLS1jbGlja2luZyAucHNfX3RodW1iLXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICBoZWlnaHQ6IDExcHg7XG59XG5cbi5wc19fcmFpbC15OmhvdmVyID4gLnBzX190aHVtYi15LFxuLnBzX19yYWlsLXk6Zm9jdXMgPiAucHNfX3RodW1iLXksXG4ucHNfX3JhaWwteS5wcy0tY2xpY2tpbmcgLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgd2lkdGg6IDExcHg7XG59XG5cbi8qIE1TIHN1cHBvcnRzICovXG5Ac3VwcG9ydHMgKC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZSkge1xuICAucHMge1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgLnBzIHtcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4iLCI6aG9zdCAvZGVlcC8ge1xuICAvKlxuICogQ29udGFpbmVyIHN0eWxlXG4gKi9cbiAgLypcbiAqIFNjcm9sbGJhciByYWlsIHN0eWxlc1xuICovXG4gIC8qXG4gKiBTY3JvbGxiYXIgdGh1bWIgc3R5bGVzXG4gKi9cbiAgLyogTVMgc3VwcG9ydHMgKi8gfVxuICA6aG9zdCAvZGVlcC8gLnBzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctYW5jaG9yOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICB0b3VjaC1hY3Rpb246IGF1dG87XG4gICAgLW1zLXRvdWNoLWFjdGlvbjogYXV0bzsgfVxuICA6aG9zdCAvZGVlcC8gLnBzX19yYWlsLXgge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICAgIGhlaWdodDogMTVweDtcbiAgICAvKiB0aGVyZSBtdXN0IGJlICdib3R0b20nIG9yICd0b3AnIGZvciBwc19fcmFpbC14ICovXG4gICAgYm90dG9tOiAwcHg7XG4gICAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgLyogdGhlcmUgbXVzdCBiZSAncmlnaHQnIG9yICdsZWZ0JyBmb3IgcHNfX3JhaWwteSAqL1xuICAgIHJpZ2h0OiAwO1xuICAgIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICA6aG9zdCAvZGVlcC8gLnBzLS1hY3RpdmUteCA+IC5wc19fcmFpbC14LFxuICA6aG9zdCAvZGVlcC8gLnBzLS1hY3RpdmUteSA+IC5wc19fcmFpbC15IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICA6aG9zdCAvZGVlcC8gLnBzOmhvdmVyID4gLnBzX19yYWlsLXgsXG4gIDpob3N0IC9kZWVwLyAucHM6aG92ZXIgPiAucHNfX3JhaWwteSxcbiAgOmhvc3QgL2RlZXAvIC5wcy0tZm9jdXMgPiAucHNfX3JhaWwteCxcbiAgOmhvc3QgL2RlZXAvIC5wcy0tZm9jdXMgPiAucHNfX3JhaWwteSxcbiAgOmhvc3QgL2RlZXAvIC5wcy0tc2Nyb2xsaW5nLXggPiAucHNfX3JhaWwteCxcbiAgOmhvc3QgL2RlZXAvIC5wcy0tc2Nyb2xsaW5nLXkgPiAucHNfX3JhaWwteSB7XG4gICAgb3BhY2l0eTogMC42OyB9XG4gIDpob3N0IC9kZWVwLyAucHMgLnBzX19yYWlsLXg6aG92ZXIsXG4gIDpob3N0IC9kZWVwLyAucHMgLnBzX19yYWlsLXk6aG92ZXIsXG4gIDpob3N0IC9kZWVwLyAucHMgLnBzX19yYWlsLXg6Zm9jdXMsXG4gIDpob3N0IC9kZWVwLyAucHMgLnBzX19yYWlsLXk6Zm9jdXMsXG4gIDpob3N0IC9kZWVwLyAucHMgLnBzX19yYWlsLXgucHMtLWNsaWNraW5nLFxuICA6aG9zdCAvZGVlcC8gLnBzIC5wc19fcmFpbC15LnBzLS1jbGlja2luZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBvcGFjaXR5OiAwLjk7IH1cbiAgOmhvc3QgL2RlZXAvIC5wc19fdGh1bWIteCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBoZWlnaHQgLjJzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBoZWlnaHQgLjJzIGVhc2UtaW4tb3V0O1xuICAgIGhlaWdodDogNnB4O1xuICAgIC8qIHRoZXJlIG11c3QgYmUgJ2JvdHRvbScgZm9yIHBzX190aHVtYi14ICovXG4gICAgYm90dG9tOiAycHg7XG4gICAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIDpob3N0IC9kZWVwLyAucHNfX3RodW1iLXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgd2lkdGggLjJzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCB3aWR0aCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgd2lkdGg6IDZweDtcbiAgICAvKiB0aGVyZSBtdXN0IGJlICdyaWdodCcgZm9yIHBzX190aHVtYi15ICovXG4gICAgcmlnaHQ6IDJweDtcbiAgICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgOmhvc3QgL2RlZXAvIC5wc19fcmFpbC14OmhvdmVyID4gLnBzX190aHVtYi14LFxuICA6aG9zdCAvZGVlcC8gLnBzX19yYWlsLXg6Zm9jdXMgPiAucHNfX3RodW1iLXgsXG4gIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcgLnBzX190aHVtYi14IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICAgIGhlaWdodDogMTFweDsgfVxuICA6aG9zdCAvZGVlcC8gLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksXG4gIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteSxcbiAgOmhvc3QgL2RlZXAvIC5wc19fcmFpbC15LnBzLS1jbGlja2luZyAucHNfX3RodW1iLXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gICAgd2lkdGg6IDExcHg7IH1cbiAgQHN1cHBvcnRzICgtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmUpIHtcbiAgICA6aG9zdCAvZGVlcC8gLnBzIHtcbiAgICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7IH0gfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgIDpob3N0IC9kZWVwLyAucHMge1xuICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDsgfSB9XG5cbjpob3N0IC9kZWVwLyAucHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC14LFxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC15LFxuOmhvc3QgL2RlZXAvIC5wc19fdGh1bWIteCxcbjpob3N0IC9kZWVwLyAucHNfX3RodW1iLXkge1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTsgfVxuXG46aG9zdCAvZGVlcC8gLnBzX19yYWlsLXgge1xuICBoZWlnaHQ6IDAuMjVyZW07IH1cblxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC15IHtcbiAgd2lkdGg6IDAuMjVyZW07IH1cblxuOmhvc3QgL2RlZXAvIC5wc19fdGh1bWIteCB7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAwLjI1cmVtOyB9XG5cbjpob3N0IC9kZWVwLyAucHNfX3RodW1iLXkge1xuICByaWdodDogMDtcbiAgd2lkdGg6IDAuMjVyZW07IH1cblxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC14OmhvdmVyLFxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC14OmZvY3VzLFxuOmhvc3QgL2RlZXAvIC5wc19fcmFpbC14LnBzLS1jbGlja2luZyxcbjpob3N0IC9kZWVwLyAucHNfX3JhaWwteDpob3ZlciA+IC5wc19fdGh1bWIteCxcbjpob3N0IC9kZWVwLyAucHNfX3JhaWwteDpmb2N1cyA+IC5wc19fdGh1bWIteCxcbjpob3N0IC9kZWVwLyAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcgPiAucHNfX3RodW1iLXgge1xuICBoZWlnaHQ6IDAuMzc1cmVtOyB9XG5cbjpob3N0IC9kZWVwLyAucHNfX3JhaWwteTpob3Zlcixcbjpob3N0IC9kZWVwLyAucHNfX3JhaWwteTpmb2N1cyxcbjpob3N0IC9kZWVwLyAucHNfX3JhaWwteS5wcy0tY2xpY2tpbmcsXG46aG9zdCAvZGVlcC8gLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksXG46aG9zdCAvZGVlcC8gLnBzX19yYWlsLXk6Zm9jdXMgPiAucHNfX3RodW1iLXksXG46aG9zdCAvZGVlcC8gLnBzX19yYWlsLXkucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi15IHtcbiAgd2lkdGg6IDAuMzc1cmVtOyB9XG5cbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteDpob3Zlcixcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteTpob3Zlcixcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteDpmb2N1cyxcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteTpmb2N1cyxcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcsXG4uZGVmYXVsdC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzX19yYWlsLXkucHMtLWNsaWNraW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNCwgMjgsIDMzLCAwLjEpOyB9XG5cbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3RodW1iLXgsXG4uZGVmYXVsdC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNCwgMjgsIDMzLCAwLjMpOyB9XG5cbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteDpob3ZlciA+IC5wc19fdGh1bWIteCxcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteTpob3ZlciA+IC5wc19fdGh1bWIteSxcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteDpmb2N1cyA+IC5wc19fdGh1bWIteCxcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteSxcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcgPiAucHNfX3RodW1iLXgsXG4uZGVmYXVsdC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzX19yYWlsLXkucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNCwgMjgsIDMzLCAwLjYpOyB9XG5cbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX19yYWlsLXg6aG92ZXIsXG4uZGVmYXVsdC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzLWludmVydGVkIC5wc19fcmFpbC15OmhvdmVyLFxuLmRlZmF1bHQtc3R5bGUgOmhvc3QgL2RlZXAvIC5wcy1pbnZlcnRlZCAucHNfX3JhaWwteDpmb2N1cyxcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX19yYWlsLXk6Zm9jdXMsXG4uZGVmYXVsdC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzLWludmVydGVkIC5wc19fcmFpbC14LnBzLS1jbGlja2luZyxcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX19yYWlsLXkucHMtLWNsaWNraW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XG5cbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX190aHVtYi14LFxuLmRlZmF1bHQtc3R5bGUgOmhvc3QgL2RlZXAvIC5wcy1pbnZlcnRlZCAucHNfX3RodW1iLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7IH1cblxuLmRlZmF1bHQtc3R5bGUgOmhvc3QgL2RlZXAvIC5wcy1pbnZlcnRlZCAucHNfX3JhaWwteDpob3ZlciA+IC5wc19fdGh1bWIteCxcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksXG4uZGVmYXVsdC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzLWludmVydGVkIC5wc19fcmFpbC14OmZvY3VzID4gLnBzX190aHVtYi14LFxuLmRlZmF1bHQtc3R5bGUgOmhvc3QgL2RlZXAvIC5wcy1pbnZlcnRlZCAucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteSxcbi5kZWZhdWx0LXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX19yYWlsLXgucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi14LFxuLmRlZmF1bHQtc3R5bGUgOmhvc3QgL2RlZXAvIC5wcy1pbnZlcnRlZCAucHNfX3JhaWwteS5wcy0tY2xpY2tpbmcgPiAucHNfX3RodW1iLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG5cbi5tYXRlcmlhbC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzX19yYWlsLXg6aG92ZXIsXG4ubWF0ZXJpYWwtc3R5bGUgOmhvc3QgL2RlZXAvIC5wc19fcmFpbC15OmhvdmVyLFxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteDpmb2N1cyxcbi5tYXRlcmlhbC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzX19yYWlsLXk6Zm9jdXMsXG4ubWF0ZXJpYWwtc3R5bGUgOmhvc3QgL2RlZXAvIC5wc19fcmFpbC14LnBzLS1jbGlja2luZyxcbi5tYXRlcmlhbC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzX19yYWlsLXkucHMtLWNsaWNraW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNCwgMjgsIDMzLCAwLjEpOyB9XG5cbi5tYXRlcmlhbC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzX190aHVtYi14LFxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3RodW1iLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0LCAyOCwgMzMsIDAuMyk7IH1cblxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteDpob3ZlciA+IC5wc19fdGh1bWIteCxcbi5tYXRlcmlhbC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksXG4ubWF0ZXJpYWwtc3R5bGUgOmhvc3QgL2RlZXAvIC5wc19fcmFpbC14OmZvY3VzID4gLnBzX190aHVtYi14LFxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteSxcbi5tYXRlcmlhbC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzX19yYWlsLXgucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi14LFxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHNfX3JhaWwteS5wcy0tY2xpY2tpbmcgPiAucHNfX3RodW1iLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0LCAyOCwgMzMsIDAuNik7IH1cblxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX19yYWlsLXg6aG92ZXIsXG4ubWF0ZXJpYWwtc3R5bGUgOmhvc3QgL2RlZXAvIC5wcy1pbnZlcnRlZCAucHNfX3JhaWwteTpob3Zlcixcbi5tYXRlcmlhbC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzLWludmVydGVkIC5wc19fcmFpbC14OmZvY3VzLFxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX19yYWlsLXk6Zm9jdXMsXG4ubWF0ZXJpYWwtc3R5bGUgOmhvc3QgL2RlZXAvIC5wcy1pbnZlcnRlZCAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcsXG4ubWF0ZXJpYWwtc3R5bGUgOmhvc3QgL2RlZXAvIC5wcy1pbnZlcnRlZCAucHNfX3JhaWwteS5wcy0tY2xpY2tpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cblxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX190aHVtYi14LFxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpOyB9XG5cbi5tYXRlcmlhbC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzLWludmVydGVkIC5wc19fcmFpbC14OmhvdmVyID4gLnBzX190aHVtYi14LFxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksXG4ubWF0ZXJpYWwtc3R5bGUgOmhvc3QgL2RlZXAvIC5wcy1pbnZlcnRlZCAucHNfX3JhaWwteDpmb2N1cyA+IC5wc19fdGh1bWIteCxcbi5tYXRlcmlhbC1zdHlsZSA6aG9zdCAvZGVlcC8gLnBzLWludmVydGVkIC5wc19fcmFpbC15OmZvY3VzID4gLnBzX190aHVtYi15LFxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX19yYWlsLXgucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi14LFxuLm1hdGVyaWFsLXN0eWxlIDpob3N0IC9kZWVwLyAucHMtaW52ZXJ0ZWQgLnBzX19yYWlsLXkucHMtLWNsaWNraW5nID4gLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuIiwiLy8gVmFyaWFibGVzXHJcbi8vXHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogQ29sb3JzXHJcblxyXG4kd2hpdGU6ICAgICAgICAjZmZmICFkZWZhdWx0O1xyXG4kYmxhY2s6ICAgICAgICAjMTgxQzIxICFkZWZhdWx0O1xyXG4kZ3JheS0yNTogICAgICByZ2JhKCRibGFjaywgLjAxNSkgIWRlZmF1bHQ7XHJcbiRncmF5LTUwOiAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICAgICByZ2JhKCRibGFjaywgLjA2KSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuJGdyYXktMzAwOiAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcclxuJGdyYXktNDAwOiAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAgICAgcmdiYSgkYmxhY2ssIC40KSAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcclxuJGdyYXktNzAwOiAgICAgcmdiYSgkYmxhY2ssIC42KSAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAgICAgcmdiYSgkYmxhY2ssIC44KSAhZGVmYXVsdDtcclxuJGdyYXktOTAwOiAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcclxuXHJcbiRncmF5czogKFxyXG4gIFwiMjVcIjogJGdyYXktMjUsXHJcbiAgXCI1MFwiOiAkZ3JheS01MFxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGJsdWU6ICAgICAgICAgIzFlNzBjZCAhZGVmYXVsdDtcclxuJGluZGlnbzogICAgICAgIzY2MTBmMiAhZGVmYXVsdDtcclxuJHB1cnBsZTogICAgICAgIzZmNDJjMSAhZGVmYXVsdDtcclxuJHBpbms6ICAgICAgICAgI2U4M2U4YyAhZGVmYXVsdDtcclxuJHJlZDogICAgICAgICAgI2Q5NTM0ZiAhZGVmYXVsdDtcclxuJG9yYW5nZTogICAgICAgI0ZFQjc0NCAhZGVmYXVsdDtcclxuJHllbGxvdzogICAgICAgI0ZGRDk1MCAhZGVmYXVsdDtcclxuJGdyZWVuOiAgICAgICAgIzAyQkM3NyAhZGVmYXVsdDtcclxuJHRlYWw6ICAgICAgICAgIzIwYzk5NyAhZGVmYXVsdDtcclxuJGN5YW46ICAgICAgICAgIzI4YzNkNyAhZGVmYXVsdDtcclxuXHJcbiR0aGVtZS1jb2xvcnM6IChcclxuICBcInByaW1hcnlcIjogICAkaW5kaWdvLFxyXG4gIFwic2Vjb25kYXJ5XCI6ICM4ODk3QUEsXHJcbiAgXCJzdWNjZXNzXCI6ICAgJGdyZWVuLFxyXG4gIFwiaW5mb1wiOiAgICAgICRjeWFuLFxyXG4gIFwid2FybmluZ1wiOiAgICR5ZWxsb3csXHJcbiAgXCJkYW5nZXJcIjogICAgJHJlZCxcclxuICBcImRhcmtcIjogICAgICAkZ3JheS05MDBcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRib2R5LWNvbG9yOiAgICAgICAjNEU1MTU1ICFkZWZhdWx0OyAvLyM0YTRhNGFcclxuXHJcbi8vICMwNmNcclxuJGxpbmstY29sb3I6ICAgICAgICRibHVlICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1jb2xvcjogbGlnaHRlbigkbGluay1jb2xvciwgMTAlKSAhZGVmYXVsdDtcclxuXHJcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogRm9udHNcclxuXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIlJvYm90b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LXNlcmlmOiAgICAgIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgXCJTRk1vbm8tUmVndWxhclwiLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAuODk0cmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLXhsOiAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtc206ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUteHM6ICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtd2VpZ2h0LXNlbWlib2xkOiAgIDUwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlcjogICAgIDkwMCAhZGVmYXVsdDtcclxuXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAxLjQ3ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQteGw6ICAgICAgICAgMS41ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgMS41ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgMS41ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQteHM6ICAgICAgICAgMS41ICFkZWZhdWx0O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgIDIuMjVyZW0gIWRlZmF1bHQ7XHJcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAxLjgxM3JlbSAhZGVmYXVsdDtcclxuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgIDEuNTYzcmVtICFkZWZhdWx0O1xyXG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7XHJcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xyXG5cclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICRmb250LXdlaWdodC1zZW1pYm9sZCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgIDEuMSAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4kZGlzcGxheTEtc2l6ZTogICAgICAgICAgNHJlbSAhZGVmYXVsdDtcclxuJGRpc3BsYXkyLXNpemU6ICAgICAgICAgIDMuNXJlbSAhZGVmYXVsdDtcclxuJGRpc3BsYXkzLXNpemU6ICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XHJcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAycmVtICFkZWZhdWx0O1xyXG5cclxuJHRpbnktZm9udC1zaXplOiAgICAgICAgIDcwJSAhZGVmYXVsdDtcclxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgIDg1JSAhZGVmYXVsdDtcclxuJGJpZy1mb250LXNpemU6ICAgICAgICAgIDExMiUgIWRlZmF1bHQ7XHJcbiRsYXJnZS1mb250LXNpemU6ICAgICAgICAxNTAlICFkZWZhdWx0O1xyXG4keGxhcmdlLWZvbnQtc2l6ZTogICAgICAgMTcwJSAhZGVmYXVsdDtcclxuXHJcbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICByZ2JhLXRvLWhleCgkZ3JheS01MDApICFkZWZhdWx0O1xyXG4kdGV4dC1tdXRlZC1ob3ZlcjogICAgICAgcmdiYS10by1oZXgoJGdyYXktNjAwKSAhZGVmYXVsdDtcclxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6IHJnYmEtdG8taGV4KCRncmF5LTUwMCkgIWRlZmF1bHQ7XHJcbiR0ZXh0LWxpZ2h0OiAgICAgICAgICAgICByZ2JhLXRvLWhleCgkZ3JheS00MDApICFkZWZhdWx0O1xyXG4kdGV4dC1saWdodGVyOiAgICAgICAgICAgcmdiYS10by1oZXgoJGdyYXktMzAwKSAhZGVmYXVsdDtcclxuJHRleHQtbGlnaHRlc3Q6ICAgICAgICAgIHJnYmEtdG8taGV4KCRncmF5LTIwMCkgIWRlZmF1bHQ7XHJcblxyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBHcmlkXHJcblxyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDEuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRjb250YWluZXItcGFkZGluZy14OiAycmVtICFkZWZhdWx0O1xyXG4kY29udGFpbmVyLXBhZGRpbmcteC1zbTogMXJlbSAhZGVmYXVsdDtcclxuJGNvbnRhaW5lci1wYWRkaW5nLXk6IDEuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBDb21wb25lbnRzXHJcblxyXG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssLjA2KSAhZGVmYXVsdDtcclxuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXhsOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXhzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbiRjb21wb25lbnQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAxLjU0ICFkZWZhdWx0O1xyXG4kY29tcG9uZW50LWZvY3VzLXNoYWRvdy13aWR0aDogICAgMnB4ICFkZWZhdWx0O1xyXG5cclxuJGZsb2F0aW5nLWNvbXBvbmVudC1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xyXG4kZmxvYXRpbmctY29tcG9uZW50LXNoYWRvdzogICAgICAgMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgLjA5KSAhZGVmYXVsdDtcclxuXHJcbiRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlcmVkLXJvdy1ib3JkZXItY29sb3I6ICAgICAgICRoci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgLjQyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogWi1pbmRleCBtYXN0ZXIgbGlzdFxyXG5cclxuJHppbmRleC1sYXlvdXQtZml4ZWQ6ICAxMDgwICFkZWZhdWx0O1xyXG4kemluZGV4LW1vZGFsLXRvcDogICAgIDEwOTAgIWRlZmF1bHQ7XHJcbiR6aW5kZXgtbGF5b3V0LW1vYmlsZTogMTEwMCAhZGVmYXVsdDtcclxuJHppbmRleC1ub3RpZmljYXRpb246ICA5OTk5OTkgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogVGFibGVzXHJcblxyXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgLjMxMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtYmc6ICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDI1KSAhZGVmYXVsdDtcclxuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICByZ2JhKCRibGFjaywgLjAzNSkgIWRlZmF1bHQ7XHJcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgcmdiYS10by1oZXgoJHRhYmxlLWhvdmVyLWJnKSAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgcmdiYS10by1oZXgoJGdyYXktMTAwKSAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgJGdyYXktNTAgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICByZ2JhKCR3aGl0ZSwgLjAzKSAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiBsaWdodGVuKHJnYmEtdG8taGV4KCRncmF5LTkwMCksIDclKSAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogQnV0dG9uc1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgLjQzOHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgMS4xMjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgMS41NCAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXhzOiAgIDAgIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXhzOiAgIC41cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS14czogICAkZm9udC1zaXplLXhzICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXhzOiAkbGluZS1oZWlnaHQteHMgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAuMTg4cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAuNjg3NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgLjc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogICAxLjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICRsaW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXhsOiAgIC44NzVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXhsOiAgIDIuMTI1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS14bDogICAkZm9udC1zaXplLXhsICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXhsOiAkbGluZS1oZWlnaHQteGwgIWRlZmF1bHQ7XHJcblxyXG4kYnRuLWJvcmRlci1yYWRpdXMteHM6ICAgICAkYm9yZGVyLXJhZGl1cy14cyAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXhsOiAgICAgJGJvcmRlci1yYWRpdXMteGwgIWRlZmF1bHQ7XHJcblxyXG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAwIDAgMCAkY29tcG9uZW50LWZvY3VzLXNoYWRvdy13aWR0aCByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjI1KSAhZGVmYXVsdDtcclxuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbiRidG4tZGVmYXVsdC1iZzogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kYnRuLWRlZmF1bHQtYm9yZGVyOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRidG4tZGVmYXVsdC1jb2xvcjogICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGJ0bi10cmFuc2l0aW9uOiAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBGb3Jtc1xyXG5cclxuJGxhYmVsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAuODMxMjVyZW0gIWRlZmF1bHQ7XHJcbiRsYWJlbC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LXNlbWlib2xkICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAgICAgLjYyNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG4kaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhLXRvLWhleCgkZ3JheS0xMDApICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgJHRleHQtbGlnaHQgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgICAgIHB4LXRvLXJlbShmbG9vcihyZW0tdG8tcHgoKCRpbnB1dC1idG4tZm9udC1zaXplICogJGlucHV0LWJ0bi1saW5lLWhlaWdodCkgKyAoJGlucHV0LWJ0bi1wYWRkaW5nLXkgKiAyKSkpKSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1pbm5lci1zbTogICAgICAgICAgICAgICAgICAgICBweC10by1yZW0oZmxvb3IocmVtLXRvLXB4KCgkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAqICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20pICsgKCRpbnB1dC1idG4tcGFkZGluZy15LXNtICogMikpKSkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQtaW5uZXItbGc6ICAgICAgICAgICAgICAgICAgICAgcHgtdG8tcmVtKGZsb29yKHJlbS10by1weCgoJGZvbnQtc2l6ZS1sZyAqICRsaW5lLWhlaWdodC1sZykgKyAoJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgKiAyKSkpKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1pbnZlcnRlZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgjZmZmLCAuMykgIWRlZmF1bHQ7XHJcbiRpbnB1dC1pbnZlcnRlZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcclxuJGlucHV0LWludmVydGVkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtaW52ZXJ0ZWQtYmcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1pbnZlcnRlZC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgcmdiYSgjZmZmLCAuNykgIWRlZmF1bHQ7XHJcbiRpbnB1dC1pbnZlcnRlZC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgcmdiYSgjZmZmLCAuMSkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1pbnZlcnRlZC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAgJGlucHV0LWludmVydGVkLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xyXG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgIDEuMTI1cmVtICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICAgICAxcHggIWRlZmF1bHQ7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAgICAgKCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSArIC40MzhyZW0pICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAgICBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDkuNSA3LjUnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScwLjc1IDQuMzUgNC4xOCA2Ljc1IDguNzUgMC43NScgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6X0NPTE9SXztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjEuNXB4Jy8lM0UlM0Mvc3ZnJTNFXCIgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgICAgNjUlICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgIFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA0JyUzRSUzQ3BhdGggc3Ryb2tlPSdfQ09MT1JfJyBkPSdNMCAyaDQnLyUzRSUzQy9zdmclM0VcIiAhZGVmYXVsdDtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRldGVybWluYXRlLWJnLXNpemU6ICAgICAuNXJlbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAgICAgICBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzRSUzQ2NpcmNsZSByPSczJyBmaWxsPSdfQ09MT1JfJy8lM0UlM0Mvc3ZnJTNFXCIgIWRlZmF1bHQ7XHJcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJnLXNpemU6ICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgbm9uZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAgICAgICAgICAgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgMXJlbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbnZlcnRlZC1kaXNhYmxlZC1jb2xvcjogICAgICRpbnB1dC1pbnZlcnRlZC1kaXNhYmxlZC1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW52ZXJ0ZWQtZGlzYWJsZWQtYmc6ICAgICAgICAkaW5wdXQtaW52ZXJ0ZWQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICAgICAgICAgIDE3cHggMTJweCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgICAgICAgICB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0lBQUFBWUNBWUFBQUNmcGk4SkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFLQkpSRUZVU0EzdDFrRUtnQ0FRQlZDVER0Y2l1bEoycFdqUmlhcFRhUHdva1VFalJXMHpnYUhTT0k5UFFXTGJENE1oZnI3a3ovMXRlNGJZS080Sko4S0owQVRvdXFVYnFldXVINVRSZWt5cGI2U2NzcjJzNnpJckhCZ0xRUTFxczBFQWlNVThDTlJtaGNSZ1hFUVJ5QmNNUlJTRHZHRjhpS0lRSHlhRXdMT2l4bThBUG0yTXEySG9WZ01TNnUzdVovOXEzTU5qNWd5aGFYRWluQWhOZ0s1UHB6aEVPL2hTTUs0QUFBQUFTVVZPUks1Q1lJST0nKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWludmVydGVkOiAgICAgICAgICB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0lBQUFBWUNBWUFBQUNmcGk4SkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFKNUpSRUZVU0EzdDFHMEtnQ0FNQnVDTUR0Wmxvak9GaHpWZlVhRmxINDROLzB5SXNwdyt2R2hUQ0dIRk5RMXU4K0QxNi9JR3FWSGtCMHZFRXFFSjBQNUNYM0Q3OFYrMHg5cU5XZS9GTnF0ejdvZ0l6NEI0MUlwQkFHQmdFZ0sxb3BCT1RFV29RSDVpTGdnMXlBZm1obENGUEdDYUNJd1ZPNzZZck5Xd2dlUFJUcC95Wm00TjA0ZGcxVGRBVVltZm1qSng3OTBnTkRGTHhCS2hDZEQrQ1EzR0huZ3ZKVEdLQUFBQUFFbEZUa1N1UW1DQycpICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcnRsOiAgICAgICAgICAgICAgIHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDSUFBQUFZQ0FZQUFBQ2ZwaThKQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUtkSlJFRlVTQTN0bGxFS2dDQU1obE02WEEvUmxiSXJSUStkcURxRnhSOHB0RXdORkh1WUQrTGMzRDUrSENxcXdtTlp0eDBJc2pDSExjOGdWb3Byd1lxd0lsUUJhdGROMjZsZDY1NDZZbXdoNVRCUG80cUpEY1ZJSkVMQ1VDRDFwNFJBN3JOcnZzS2tockFnV01UQzVJQzRnY1RBNUlKNGdQaGdja0k0UVZ3d3VTRlFVMkI2RzJodCtGSzFxS3VPK1FaNFFWd0hVKzhaRUg3MHFMS3NDQ3RDRmFEMmIrN0lBWkdkUFB4dVdZR01BQUFBQUVsRlRrU3VRbUNDJykgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1pbnZlcnRlZC1ydGw6ICAgICAgdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNJQUFBQVlDQVlBQUFDZnBpOEpBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBSnRKUkVGVVNBM3RsbEVLd0NBSWhtZDBzRjFtN0V5anc3YU1DSExXV2hqdHdSNGlVMzQvZmhLQ2JmSHkzdStJWUJaejVQWUtrcTFJQjNWRUhhRU8wTmlHT1Q3RDVVRVRuYkVEZ0t1enRsbG1rcEJyVnZGSk1RaVVqMU16QUNNS2tVSHc4QUZHSEtJQTZZU1pBdkVBZVlHWkJzR0NWR0NtUW1CUGl4dTM4TTJFMFk2cDlINjRNckU3RUZNYUZOTC9TTTA0L1FaUVo5U1IzenB5QTFpWUhuYlNMUElRQUFBQUFFbEZUa1N1UW1DQycpICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIERyb3Bkb3duc1xyXG5cclxuJGRyb3Bkb3duLXBhZGRpbmcteTogICAgICAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGZsb2F0aW5nLWNvbXBvbmVudC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAgICAgICAgICAkZHJvcGRvd24tYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgJGZsb2F0aW5nLWNvbXBvbmVudC1zaGFkb3cgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgLjQzOHJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAkZHJvcGRvd24tbGluay1jb2xvciAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICRncmF5LTUwICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1saW5lLWhlaWdodDogICAgJGNvbXBvbmVudC1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1saWdodGVyICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIE5hdnNcclxuXHJcbiRuYXYtc3BhY2VyOiAgICAgICAgICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNjI1cmVtICFkZWZhdWx0O1xyXG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4kbmF2LWxpbmstbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAkY29tcG9uZW50LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG5cclxuJG5hdi1saW5rLXBhZGRpbmcteS1sZzogICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLXBhZGRpbmcteC1sZzogICAgICAgICAgICAgMS4zMTI1cmVtICFkZWZhdWx0O1xyXG4kbmF2LWxpbmstbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAkbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LWxpbmstcGFkZGluZy15LXNtOiAgICAgICAgICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLXBhZGRpbmcteC1zbTogICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuJG5hdi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJHRleHQtbXV0ZWQtaG92ZXIgIWRlZmF1bHQ7XHJcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICR0ZXh0LWxpZ2h0ZXIgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAjZmZmICFkZWZhdWx0O1xyXG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBOYXZiYXJcclxuXHJcbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuN3JlbSAhZGVmYXVsdDtcclxuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgLjYyNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuOCkgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjQpICFkZWZhdWx0O1xyXG5cclxuJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xyXG4kbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4wNikgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAuNjI1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgIC45Mzc1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgIDEgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgJHBhZ2luYXRpb24tYmcgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAkdGV4dC1saWdodGVyICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICRwYWdpbmF0aW9uLWJnICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICRncmF5LTEwMCAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLXNwYWNlcjogICAgICAgICAgICAgICAgLjE4NzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogQ2FyZHNcclxuXHJcbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXgtc206ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGNhcmQtaW5uZXItYm9yZGVyLWNvbG9yOiAgcmdiYSgkYmxhY2ssLjA2KSAhZGVmYXVsdDtcclxuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAxLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDRweCByZ2JhKCRibGFjaywuMDA5KSAhZGVmYXVsdDtcclxuLy8gJGNhcmQtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggNHB4IHJnYmEoJGJsYWNrLC4wMykgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogVG9vbHRpcHNcclxuXHJcbiR0b29sdGlwLWNvbG9yOiAgICAgICNmZmYgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWJnOiAgICAgICAgIHJnYmEtdG8taGV4KCRncmF5LTgwMCkgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW9wYWNpdHk6ICAgIDEgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWJveC1zaGFkb3c6IG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogUG9wb3ZlcnNcclxuXHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgJGZsb2F0aW5nLWNvbXBvbmVudC1zaGFkb3cgIWRlZmF1bHQ7XHJcblxyXG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAkZ3JheS01MCAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAuNjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogQmFkZ2VzXHJcblxyXG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAuODU4ZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICRmb250LXdlaWdodC1zZW1pYm9sZCAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgIC40MTdlbSAhZGVmYXVsdDtcclxuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgIC41ODNlbSAhZGVmYXVsdDtcclxuJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogICAgMTByZW0gIWRlZmF1bHQ7XHJcblxyXG4kYmFkZ2UtZGVmYXVsdC1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRiYWRnZS1vdXRsaW5lLWRlZmF1bHQtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIE1vZGFsc1xyXG5cclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgMS41NjI1cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAkbW9kYWwtaW5uZXItcGFkZGluZyAhZGVmYXVsdDtcclxuJG1vZGFsLWZvb3Rlci1wYWRkaW5nOiAgICAgICAgICAgMS4yNXJlbSAkbW9kYWwtaW5uZXItcGFkZGluZyAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgIDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgMXB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgJGZsb2F0aW5nLWNvbXBvbmVudC1zaGFkb3cgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICRmbG9hdGluZy1jb21wb25lbnQtc2hhZG93ICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgMzVyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgIDUwcmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAyMi41cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgLjUgIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtc2xpZGUtd2lkdGg6ICAgICAgICAgICAgICAyMHJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgIC4xNXMgIWRlZmF1bHQ7XHJcbiRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkbW9kYWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLW91dCAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBBbGVydHNcclxuXHJcbiRhbGVydC1wYWRkaW5nLXk6IDFyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogUHJvZ3Jlc3MgYmFyc1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgIC42MjVyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAkZ3JheS01MCAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6IDEwcmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgI2ZmZiAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgcmdiYS10by1oZXgoJGJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XHJcblxyXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAuNjI1cmVtICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAuOTM3NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LTI1ICFkZWZhdWx0O1xyXG5cclxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgJHRleHQtbGlnaHRlciAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XHJcblxyXG4kbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAkdGV4dC1tdXRlZC1ob3ZlciAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAkbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICRncmF5LTUwICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIEltYWdlIHRodW1ibmFpbHNcclxuXHJcbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgMCAhZGVmYXVsdDtcclxuJHRodW1ibmFpbC1iZzogICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAwcHggIWRlZmF1bHQ7XHJcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogMHB4ICFkZWZhdWx0O1xyXG4kdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgIG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogRmlndXJlc1xyXG5cclxuJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBCcmVhZGNydW1ic1xyXG5cclxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgMCAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgMCAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAkdGV4dC1saWdodGVyICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgXCIvXCIgIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWRpdmlkZXItcnRsOiAgIFwiL1wiICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIFN3aXRjaGVyc1xyXG5cclxuJHN3aXRjaGVyLXNwYWNlci14OiAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRzd2l0Y2hlci1zcGFjZXIteTogICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbiRzd2l0Y2hlci1ndXR0ZXI6ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbiRzd2l0Y2hlci1pbm5lci1zcGFjZXI6ICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJHN3aXRjaGVyLXNxdWFyZS1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbiRzd2l0Y2hlci1sYWJlbC1jb2xvcjogICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRzd2l0Y2hlci1sYWJlbC1kaXNhYmxlZC1jb2xvcjogJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJHN3aXRjaGVyLXdpZHRoOiAgICAgICAgICAgICAgICAyLjM3NXJlbSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWhlaWdodDogICAgICAgICAgICAgICAxLjM3NXJlbSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWZvbnQtc2l6ZTogICAgICAgICAgICAuNjI1cmVtICFkZWZhdWx0O1xyXG4kc3dpdGNoZXItbGFiZWwtZm9udC1zaXplOiAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWxhYmVsLWxpbmUtaGVpZ2h0OiAgICAxLjQgIWRlZmF1bHQ7XHJcblxyXG4kc3dpdGNoZXItd2lkdGgtc206ICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcbiRzd2l0Y2hlci1oZWlnaHQtc206ICAgICAgICAgICAgMS4xMjVyZW0gIWRlZmF1bHQ7XHJcbiRzd2l0Y2hlci1sYWJlbC1mb250LXNpemUtc206ICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWxhYmVsLWxpbmUtaGVpZ2h0LXNtOiAxLjQ4NiAhZGVmYXVsdDtcclxuXHJcbiRzd2l0Y2hlci13aWR0aC1sZzogICAgICAgICAgICAgMy4yNXJlbSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWhlaWdodC1sZzogICAgICAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xyXG4kc3dpdGNoZXItbGFiZWwtZm9udC1zaXplLWxnOiAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRzd2l0Y2hlci1sYWJlbC1saW5lLWhlaWdodC1sZzogMS40NyAhZGVmYXVsdDtcclxuXHJcbiRzd2l0Y2hlci1vZmYtY29sb3I6ICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xyXG4kc3dpdGNoZXItb2ZmLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWhvbGRlci1iZzogICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xyXG4kc3dpdGNoZXItaG9sZGVyLXNoYWRvdzogICAgICAgIDAgMCAwIDFweCByZ2JhKCRibGFjaywgLjA0KSwgMCAxcHggNnB4IHJnYmEoJGJsYWNrLCAuMDkpICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIENsb3NlXHJcblxyXG4kY2xvc2UtZm9udC13ZWlnaHQ6IDMwMCAhZGVmYXVsdDtcclxuJGNsb3NlLXRleHQtc2hhZG93OiBub25lICFkZWZhdWx0O1xyXG4kY2xvc2UtY29sb3I6IGluaGVyaXQgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogSnVtYm90cm9uXHJcblxyXG4kanVtYm90cm9uLXBhZGRpbmc6IDNyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogU2lkZW5hdlxyXG5cclxuJHNpZGVuYXYtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAxNS42MjVyZW0gIWRlZmF1bHQ7IC8vMjUwcHhcclxuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiAgICAgICAgICAgICAgICA0LjM3NXJlbSAhZGVmYXVsdDsgLy83MHB4XHJcblxyXG4kc2lkZW5hdi1pdGVtLXNwYWNlcjogICAgICAgICAgICAgICAgICAgIC4wNjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJHNpZGVuYXYtdmVydGljYWwtbGluay1wYWRkaW5nLXk6ICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LXZlcnRpY2FsLWxpbmstcGFkZGluZy14OiAgICAgICAgMnJlbSAhZGVmYXVsdDtcclxuJHNpZGVuYXYtdmVydGljYWwtbWVudS1saW5rLXBhZGRpbmcteTogICAuNjI1cmVtICFkZWZhdWx0O1xyXG4kc2lkZW5hdi12ZXJ0aWNhbC1tZW51LWxldmVsLXNwYWNlcjogICAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kc2lkZW5hdi1ob3Jpem9udGFsLWxpbmstcGFkZGluZy15OiAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LWhvcml6b250YWwtbGluay1wYWRkaW5nLXg6ICAgICAgMXJlbSAhZGVmYXVsdDtcclxuJHNpZGVuYXYtaG9yaXpvbnRhbC1tZW51LWxpbmstcGFkZGluZy15OiAuNjI1cmVtICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1ob3Jpem9udGFsLW1lbnUtbGV2ZWwtc3BhY2VyOiAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kc2lkZW5hdi1tZW51LXdpZHRoOiAgICAgICAgICAgICAgICAgICAgIDEyLjVyZW0gIWRlZmF1bHQ7OyAvLzIwMHB4XHJcbiRzaWRlbmF2LWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgICAgICAgMi4yNXJlbSAhZGVmYXVsdDtcclxuJHNpZGVuYXYtY29udHJvbC1hcnJvdy1zaXplOiAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRzaWRlbmF2LWljb24tZXhwYW5kZWQtd2lkdGg6ICAgICAgICAgICAgMS43NXJlbSAhZGVmYXVsdDtcclxuJHNpZGVuYXYtaWNvbi1leHBhbmRlZC1mb250LXNpemU6ICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1pY29uLWV4cGFuZGVkLXNwYWNlcjogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRzaWRlbmF2LWFuaW1hdGlvbi1kdXJhdGlvbjogICAgICAgICAgICAgLjJzICFkZWZhdWx0O1xyXG5cclxuJHNpZGVuYXYtbWF4LWxldmVsczogICAgICAgICAgICAgICAgICAgICA1ICFkZWZhdWx0O1xyXG5cclxuJHNpZGVuYXYtZGFyay1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSAhZGVmYXVsdDtcclxuJHNpZGVuYXYtZGFyay1tZW51LWJnOiAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNikgIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LWxpZ2h0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMDYpICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1saWdodC1tZW51LWJnOiAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbmZpZ1xyXG4kcnRsLXN1cHBvcnQ6IGZhbHNlICFkZWZhdWx0O1xyXG4kbWF0ZXJpYWwtc3R5bGU6IGZhbHNlO1xyXG4iLCIvLyBWYXJpYWJsZXMgLSBNYXRlcmlhbCBzdHlsZVxyXG4vL1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIENvbG9yc1xyXG5cclxuJHdoaXRlOiAgICAgICAgI2ZmZiAhZGVmYXVsdDtcclxuJGJsYWNrOiAgICAgICAgIzE4MUMyMSAhZGVmYXVsdDtcclxuJGdyYXktMjU6ICAgICAgcmdiYSgkYmxhY2ssIC4wMTUpICFkZWZhdWx0O1xyXG4kZ3JheS01MDogICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAgICAgcmdiYSgkYmxhY2ssIC4wNikgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbiRncmF5LTMwMDogICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XHJcbiRncmF5LTQwMDogICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogICAgIHJnYmEoJGJsYWNrLCAuNCkgIWRlZmF1bHQ7XHJcbiRncmF5LTYwMDogICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogICAgIHJnYmEoJGJsYWNrLCAuNikgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogICAgIHJnYmEoJGJsYWNrLCAuOCkgIWRlZmF1bHQ7XHJcbiRncmF5LTkwMDogICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheXM6IChcclxuICBcIjI1XCI6ICRncmF5LTI1LFxyXG4gIFwiNTBcIjogJGdyYXktNTBcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRibHVlOiAgICAgICAgICMxZTcwY2QgIWRlZmF1bHQ7XHJcbiRpbmRpZ286ICAgICAgICM2NjEwZjIgIWRlZmF1bHQ7XHJcbiRwdXJwbGU6ICAgICAgICM2ZjQyYzEgIWRlZmF1bHQ7XHJcbiRwaW5rOiAgICAgICAgICNlODNlOGMgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAgICAgICNkOTUzNGYgIWRlZmF1bHQ7XHJcbiRvcmFuZ2U6ICAgICAgICNGRUI3NDQgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICAgICAgICNGRkQ5NTAgIWRlZmF1bHQ7XHJcbiRncmVlbjogICAgICAgICMwMkJDNzcgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAgICAgICAgICMyMGM5OTcgIWRlZmF1bHQ7XHJcbiRjeWFuOiAgICAgICAgICMyOGMzZDcgIWRlZmF1bHQ7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoXHJcbiAgXCJwcmltYXJ5XCI6ICAgJGluZGlnbyxcclxuICBcInNlY29uZGFyeVwiOiAjODg5N0FBLFxyXG4gIFwic3VjY2Vzc1wiOiAgICRncmVlbixcclxuICBcImluZm9cIjogICAgICAkY3lhbixcclxuICBcIndhcm5pbmdcIjogICAkeWVsbG93LFxyXG4gIFwiZGFuZ2VyXCI6ICAgICRyZWQsXHJcbiAgXCJkYXJrXCI6ICAgICAgJGdyYXktOTAwXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kYm9keS1jb2xvcjogICAgICAgIzRFNTE1NSAhZGVmYXVsdDsgLy8jNGE0YTRhXHJcblxyXG4kbGluay1jb2xvcjogICAgICAgJGJsdWUgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBsaWdodGVuKCRsaW5rLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xyXG5cclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBGb250c1xyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwiUm9ib3RvXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktc2VyaWY6ICAgICAgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICBcIlNGTW9uby1SZWd1bGFyXCIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgIC44OTRyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUteGw6ICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS14czogICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcblxyXG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6ICAgNTAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgOTAwICFkZWZhdWx0O1xyXG5cclxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgIDEuNDcgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC14bDogICAgICAgICAxLjUgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAxLjUgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAxLjUgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC14czogICAgICAgICAxLjUgIWRlZmF1bHQ7XHJcblxyXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgMi4yNXJlbSAhZGVmYXVsdDtcclxuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgIDEuODEzcmVtICFkZWZhdWx0O1xyXG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgMS41NjNyZW0gIWRlZmF1bHQ7XHJcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAxLjMxM3JlbSAhZGVmYXVsdDtcclxuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XHJcblxyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgJGZvbnQtd2VpZ2h0LXNlbWlib2xkICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgMS4xICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogJHNwYWNlciAhZGVmYXVsdDtcclxuXHJcbiRkaXNwbGF5MS1zaXplOiAgICAgICAgICA0cmVtICFkZWZhdWx0O1xyXG4kZGlzcGxheTItc2l6ZTogICAgICAgICAgMy41cmVtICFkZWZhdWx0O1xyXG4kZGlzcGxheTMtc2l6ZTogICAgICAgICAgM3JlbSAhZGVmYXVsdDtcclxuJGRpc3BsYXk0LXNpemU6ICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XHJcblxyXG4kdGlueS1mb250LXNpemU6ICAgICAgICAgNzAlICFkZWZhdWx0O1xyXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgODUlICFkZWZhdWx0O1xyXG4kYmlnLWZvbnQtc2l6ZTogICAgICAgICAgMTEyJSAhZGVmYXVsdDtcclxuJGxhcmdlLWZvbnQtc2l6ZTogICAgICAgIDE1MCUgIWRlZmF1bHQ7XHJcbiR4bGFyZ2UtZm9udC1zaXplOiAgICAgICAxNzAlICFkZWZhdWx0O1xyXG5cclxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgIHJnYmEtdG8taGV4KCRncmF5LTUwMCkgIWRlZmF1bHQ7XHJcbiR0ZXh0LW11dGVkLWhvdmVyOiAgICAgICByZ2JhLXRvLWhleCgkZ3JheS02MDApICFkZWZhdWx0O1xyXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogcmdiYS10by1oZXgoJGdyYXktNTAwKSAhZGVmYXVsdDtcclxuJHRleHQtbGlnaHQ6ICAgICAgICAgICAgIHJnYmEtdG8taGV4KCRncmF5LTQwMCkgIWRlZmF1bHQ7XHJcbiR0ZXh0LWxpZ2h0ZXI6ICAgICAgICAgICByZ2JhLXRvLWhleCgkZ3JheS0zMDApICFkZWZhdWx0O1xyXG4kdGV4dC1saWdodGVzdDogICAgICAgICAgcmdiYS10by1oZXgoJGdyYXktMjAwKSAhZGVmYXVsdDtcclxuXHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICBub25lICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIEdyaWRcclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogMS41cmVtICFkZWZhdWx0O1xyXG5cclxuJGNvbnRhaW5lci1wYWRkaW5nLXg6IDJyZW0gIWRlZmF1bHQ7XHJcbiRjb250YWluZXItcGFkZGluZy14LXNtOiAxcmVtICFkZWZhdWx0O1xyXG4kY29udGFpbmVyLXBhZGRpbmcteTogMS41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIENvbXBvbmVudHNcclxuXHJcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XHJcblxyXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMteGw6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMteHM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJGNvbXBvbmVudC1saW5lLWhlaWdodDogICAgICAgICAgIDEuNTQgIWRlZmF1bHQ7XHJcbiRjb21wb25lbnQtZm9jdXMtc2hhZG93LXdpZHRoOiAgICAwICFkZWZhdWx0O1xyXG5cclxuJG1hdGVyaWFsLWNvbXBvbmVudC1zaGFkb3c6ICAgICAgIDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA3KSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjAzKSAhZGVmYXVsdDtcclxuXHJcbiRmbG9hdGluZy1jb21wb25lbnQtYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcclxuJGZsb2F0aW5nLWNvbXBvbmVudC1zaGFkb3c6ICAgICAgICRtYXRlcmlhbC1jb21wb25lbnQtc2hhZG93ICFkZWZhdWx0O1xyXG5cclxuJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcclxuJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kYm9yZGVyZWQtcm93LWJvcmRlci1jb2xvcjogICAgICAgJGhyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRjYXJldC13aWR0aDogICAgICAgICAgICAgICAgICAgICAuNDJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBaLWluZGV4IG1hc3RlciBsaXN0XHJcblxyXG4kemluZGV4LWxheW91dC1maXhlZDogIDEwODAgIWRlZmF1bHQ7XHJcbiR6aW5kZXgtbW9kYWwtdG9wOiAgICAgMTA5MCAhZGVmYXVsdDtcclxuJHppbmRleC1sYXlvdXQtbW9iaWxlOiAxMTAwICFkZWZhdWx0O1xyXG4kemluZGV4LW5vdGlmaWNhdGlvbjogIDk5OTk5OSAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBUYWJsZXNcclxuXHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgLjYyNXJlbSAhZGVmYXVsdDtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAuMzEyNXJlbSAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMjUpICFkZWZhdWx0O1xyXG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDM1KSAhZGVmYXVsdDtcclxuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICByZ2JhLXRvLWhleCgkdGFibGUtaG92ZXItYmcpICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAxcHggIWRlZmF1bHQ7XHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgcmdiYS10by1oZXgoJGdyYXktMTAwKSAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgJGdyYXktNTAgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICByZ2JhKCR3aGl0ZSwgLjAzKSAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiBsaWdodGVuKHJnYmEtdG8taGV4KCRncmF5LTkwMCksIDclKSAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogQnV0dG9uc1xyXG5cclxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgJGZvbnQtd2VpZ2h0LXNlbWlib2xkICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgIC44MTI1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAgICAxLjQ3ICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXkteHM6ICAgLjA2MjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXhzOiAgIC41cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS14czogICAuNjg3NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC14czogMS41NSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgIC4yNXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgLjY4NzVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAgIC42ODc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAxLjU1ICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgLjgxMjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgIDEuNXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXkteGw6ICAgLjkzNzVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXhsOiAgIDIuMTI1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS14bDogICAkZm9udC1zaXplLXhsICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXhsOiAkbGluZS1oZWlnaHQteGwgIWRlZmF1bHQ7XHJcblxyXG4kYnRuLWJvcmRlci1yYWRpdXMteHM6ICAgICAkYm9yZGVyLXJhZGl1cy14cyAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXhsOiAgICAgJGJvcmRlci1yYWRpdXMteGwgIWRlZmF1bHQ7XHJcblxyXG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAkbWF0ZXJpYWwtY29tcG9uZW50LXNoYWRvdyAhZGVmYXVsdDtcclxuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEwKSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDYpICFkZWZhdWx0O1xyXG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAwcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEwKSwgMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpICFkZWZhdWx0O1xyXG5cclxuJGJ0bi1kZWZhdWx0LWJnOiAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcclxuJGJ0bi1kZWZhdWx0LWJvcmRlcjogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kYnRuLWRlZmF1bHQtY29sb3I6ICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogRm9ybXNcclxuXHJcbiRsYWJlbC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC44MzEyNXJlbSAhZGVmYXVsdDtcclxuJGxhYmVsLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LXNlbWlib2xkICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgMHB4ICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAgICAgICAgIDBweCAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjMzICFkZWZhdWx0O1xyXG4kaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAxLjQxNyAhZGVmYXVsdDtcclxuJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbiRtYXRlcmlhbC1pbnB1dC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kbWF0ZXJpYWwtaW5wdXQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1saWdodCAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB4LXRvLXJlbShmbG9vcihyZW0tdG8tcHgoKCRpbnB1dC1idG4tZm9udC1zaXplICogJGlucHV0LWJ0bi1saW5lLWhlaWdodCkgKyAoJGlucHV0LWJ0bi1wYWRkaW5nLXkgKiAyKSkpKSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1pbm5lci1zbTogICAgICAgICAgICAgICAgICAgICAgICAgcHgtdG8tcmVtKGZsb29yKHJlbS10by1weCgoJGlucHV0LWJ0bi1mb250LXNpemUtc20gKiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtKSArICgkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAqIDIpKSkpICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyLXNtICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LWlubmVyLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICBweC10by1yZW0oZmxvb3IocmVtLXRvLXB4KCgkZm9udC1zaXplLWxnICogJGxpbmUtaGVpZ2h0LWxnKSArICgkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAqIDIpKSkpICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyLWxnICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWludmVydGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1pbnZlcnRlZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XHJcbiRpbnB1dC1pbnZlcnRlZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xyXG4kaW5wdXQtaW52ZXJ0ZWQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKCNmZmYsIC43KSAhZGVmYXVsdDtcclxuJGlucHV0LWludmVydGVkLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1pbnZlcnRlZC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNykgIWRlZmF1bHQ7XHJcbiRtYXRlcmlhbC1pbnB1dC1pbnZlcnRlZC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHJnYmEoJHdoaXRlLCAuMzUpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xyXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgMS4xMjVyZW0gIWRlZmF1bHQ7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICAgICAgICAgMnB4ICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgICAgICAgICAgKCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSArIC40MzhyZW0pICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAgICAgICAgXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDkuNSA3LjUnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScwLjI1IDQuMzUgNC4xOCA2Ljc1IDkuMjUgMC43NScgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6X0NPTE9SXztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjEuNXB4Jy8lM0UlM0Mvc3ZnJTNFXCIgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgICAgICAgIDc1JSAhZGVmYXVsdDtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgICAgXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDQnJTNFJTNDcGF0aCBzdHJva2U9J19DT0xPUl8nIGQ9J00wIDJoNCcvJTNFJTNDL3N2ZyUzRVwiICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUtYmctc2l6ZTogICAgICAgICAuNjI1cmVtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1iZzogICAgICAgICAgICAgICAgICAgICBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzRSUzQ2NpcmNsZSByPSczJyBmaWxsPSdfQ09MT1JfJy8lM0UlM0Mvc3ZnJTNFXCIgIWRlZmF1bHQ7XHJcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJnLXNpemU6ICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWludmVydGVkLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRpbnB1dC1pbnZlcnRlZC1kaXNhYmxlZC1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW52ZXJ0ZWQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGlucHV0LWludmVydGVkLWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgMTdweCAxMnB4ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICAgICAgICAgICAgICB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0lBQUFBWUNBWUFBQUNmcGk4SkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFJaEpSRUZVU0ExallCZ0ZveUV3R2dLaklVQlpDREJTcGgyaDI4UEhyK0gvdjMvMUNCSGlXWXhNVEkzTXhDdkhyL0xPclpzSFZOVTFHQm4rLzNmQXJ4SlZGdVNJSFZzMk5WRE5JU0RqU1hVTXpCRWd2VlIxQ0NtT1FYWUVUUnhDakdQUUhVRXpoK0J6RERaSDBOUWgyQnlEeXhFZ3RYUUJvS3dOd25TeGJOU1MwUkFZRFlFUkd3SUE0ZE0vSGt5U3U5VUFBQUFBU1VWT1JLNUNZSUk9JykgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1pbnZlcnRlZDogICAgICAgICAgICAgIHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDSUFBQUFZQ0FZQUFBQ2ZwaThKQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUhaSlJFRlVTQTFqWUJnRm95RXdHZ0tqSVVCWkNEQlNwaDJoKy8vLy8rbEFYaXBDaENUV2JLbzVCR1F0bVk2WnpjaklPSk9xRGlIRE1XQkhnUFJSM1NFa09BYnVDSm81aEFqSG9EaUNwZzdCNHhnTVI0RFUwaHlBRWpBUW40RmlVTTRhT0FCMXpNQTZZdUM4UDJyemFBaU1oZ0NkUWdBQTAyb3lqY2dVT1I0QUFBQUFTVVZPUks1Q1lJST0nKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXJ0bDogICAgICAgICAgICAgICAgICAgdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNJQUFBQVlDQVlBQUFDZnBpOEpBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBSUpKUkVGVVNBMWpZQmdGb3lFd0dnS2pJVUJaQ0RCNitQZzEvUC8zcjU0Y1l4aVptQnAzYk5uVVFJNWVkRDNNZDI3ZFBLQ3Fyc0hJOFArL0E3b2tQajQxSFFHeWh4bEVrT29ZYWpzQzdoQlNIRU1MUjZBNGhCakgwTW9SR0E3QjV4aGFPZ0tyUTdBNWh0YU9BTm1KRjRDeU5nampWVFFxT1JvQ295RXdHZ0tESkFRQVdpVkJ2UCszRjJVQUFBQUFTVVZPUks1Q1lJST0nKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWludmVydGVkLXJ0bDogICAgICAgICAgdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNJQUFBQVlDQVlBQUFDZnBpOEpBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBSFZKUkVGVVNBMWpZQmdGb3lFd0dnS2pJVUJaQ0REKy8vOC9IV2hFS3BuR3pHWmtaSnhKcGw0VWJZd2dIcG1Pb1pvalFHNEFPNFFNeDFEVkVTZ09JY0V4VkhjRWhrT0ljQXhOSElIVklYZ2NRek5IZ096RUNVQUpHSWpQUURFb1p3MGNnRHBtWUIweGNONGZ0WGswQkVaRFlJaUZBQUFZbkRNcHAxbW0rQUFBQUFCSlJVNUVya0pnZ2c9PScpICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIERyb3Bkb3duc1xyXG5cclxuJGRyb3Bkb3duLXBhZGRpbmcteTogICAgICAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgJGZsb2F0aW5nLWNvbXBvbmVudC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAgICAgICAgICAkZmxvYXRpbmctY29tcG9uZW50LXNoYWRvdyAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAuNXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAkZHJvcGRvd24tbGluay1jb2xvciAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICRncmF5LTUwICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1saW5lLWhlaWdodDogICAgJGNvbXBvbmVudC1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgJGdyYXktNTAgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogJHRleHQtbGlnaHRlciAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBOYXZzXHJcblxyXG4kbmF2LXNwYWNlcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICAxLjA2MjVyZW0gIWRlZmF1bHQ7XHJcbiRuYXYtbGluay1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuXHJcbiRuYXYtbGluay1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4kbmF2LWxpbmstcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgIDEuMzEyNXJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAkbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LWxpbmstcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgIC40Mzc1cmVtICFkZWZhdWx0O1xyXG4kbmF2LWxpbmstcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XHJcbiRuYXYtbGluay1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuJG5hdi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1tdXRlZC1ob3ZlciAhZGVmYXVsdDtcclxuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkdGV4dC1saWdodGVyICFkZWZhdWx0O1xyXG5cclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4kbWF0ZXJpYWwtbGlnaHQtbmF2LWxpbmstY29sb3I6ICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNyk7XHJcbiRtYXRlcmlhbC1saWdodC1uYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgcmdiYSgkd2hpdGUsIC40KTtcclxuJG1hdGVyaWFsLWxpZ2h0LW5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRtYXRlcmlhbC1saWdodC1uYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIE5hdmJhclxyXG5cclxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6ICAgICAgICAgIC43cmVtICFkZWZhdWx0O1xyXG4kbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAuNjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44KSAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuNCkgIWRlZmF1bHQ7XHJcblxyXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjA2KSAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBQYWdpbmF0aW9uXHJcblxyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAuNjI1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgLjM3NXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAuOTM3NXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAgICAgIDEgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgJHBhZ2luYXRpb24tYmcgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAkdGV4dC1saWdodGVyICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAkcGFnaW5hdGlvbi1iZyAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6IG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1zcGFjZXI6ICAgICAgICAgICAuMDYyNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBDYXJkc1xyXG5cclxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteC1zbTogICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kY2FyZC1pbm5lci1ib3JkZXItY29sb3I6ICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6IDEuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtc2hhZG93OiAgICAgICAgICAgICAgMCAycHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDMpLCAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDQpICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIFRvb2x0aXBzXHJcblxyXG4kdG9vbHRpcC1jb2xvcjogICAgICAjZmZmICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1iZzogICAgICAgICByZ2JhLXRvLWhleCgkZ3JheS04MDApICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1vcGFjaXR5OiAgICAxICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1ib3gtc2hhZG93OiAkZmxvYXRpbmctY29tcG9uZW50LXNoYWRvdyAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAkZmxvYXRpbmctY29tcG9uZW50LXNoYWRvdyAhZGVmYXVsdDtcclxuXHJcbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICRncmF5LTUwICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IC42MjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBCYWRnZXNcclxuXHJcbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgIC44NThlbSAhZGVmYXVsdDtcclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGZvbnQtd2VpZ2h0LXNlbWlib2xkICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAuMjVlbSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteDogICAgICAgICAgICAgLjQxN2VtICFkZWZhdWx0O1xyXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xyXG5cclxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgLjU4M2VtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAxMHJlbSAhZGVmYXVsdDtcclxuXHJcbiRiYWRnZS1kZWZhdWx0LWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJGJhZGdlLW91dGxpbmUtZGVmYXVsdC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogTW9kYWxzXHJcblxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAxLjU2MjVyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xyXG4kbW9kYWwtZm9vdGVyLXBhZGRpbmc6ICAgICAgICAgICAxcmVtIDEuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAwcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgIDM1cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgMjIuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgIC4yICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLXNsaWRlLXdpZHRoOiAgICAgICAgICAgICAgMjByZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAuMTVzICFkZWZhdWx0O1xyXG4kbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICB0cmFuc2Zvcm0gJG1vZGFsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1vdXQgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogQWxlcnRzXHJcblxyXG4kYWxlcnQtcGFkZGluZy15OiAgICAxcmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtcGFkZGluZy14OiAgICAxcmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogUHJvZ3Jlc3MgYmFyc1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgIC4wcHggIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAkZ3JheS01MCAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgcmdiYS10by1oZXgoJGJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgIDFweCAhZGVmYXVsdDtcclxuXHJcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgIC45Mzc1cmVtICFkZWZhdWx0O1xyXG5cclxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktMjUgIWRlZmF1bHQ7XHJcblxyXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAkdGV4dC1saWdodGVyICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcclxuXHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICR0ZXh0LW11dGVkLWhvdmVyICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvciAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgJGdyYXktNTAgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogSW1hZ2UgdGh1bWJuYWlsc1xyXG5cclxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAwICFkZWZhdWx0O1xyXG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kdGh1bWJuYWlsLWJvcmRlci13aWR0aDogIDBweCAhZGVmYXVsdDtcclxuJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAwcHggIWRlZmF1bHQ7XHJcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBGaWd1cmVzXHJcblxyXG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIEJyZWFkY3J1bWJzXHJcblxyXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAwICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAwICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6ICAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICR0ZXh0LWxpZ2h0ZXIgIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICBcIi9cIiAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItZGl2aWRlci1ydGw6ICAgXCIvXCIgIWRlZmF1bHQ7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogU3dpdGNoZXJzXHJcblxyXG4kc3dpdGNoZXItc3BhY2VyLXg6ICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLXNwYWNlci15OiAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWd1dHRlcjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWlubmVyLXNwYWNlcjogICAgICAgICAwcmVtICFkZWZhdWx0O1xyXG5cclxuJHN3aXRjaGVyLXNxdWFyZS1ib3JkZXItcmFkaXVzOiAuMTI1cmVtICFkZWZhdWx0O1xyXG5cclxuJHN3aXRjaGVyLWxhYmVsLWNvbG9yOiAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kc3dpdGNoZXItd2lkdGg6ICAgICAgICAgICAgICAgIDIuMjVyZW0gIWRlZmF1bHQ7XHJcbiRzd2l0Y2hlci1oZWlnaHQ6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWZvbnQtc2l6ZTogICAgICAgICAgICAuNjI1cmVtICFkZWZhdWx0O1xyXG4kc3dpdGNoZXItbGFiZWwtZm9udC1zaXplOiAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWxhYmVsLWxpbmUtaGVpZ2h0OiAgICAxLjQgIWRlZmF1bHQ7XHJcblxyXG4kc3dpdGNoZXItd2lkdGgtc206ICAgICAgICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XHJcbiRzd2l0Y2hlci1oZWlnaHQtc206ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWxhYmVsLWZvbnQtc2l6ZS1zbTogICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kc3dpdGNoZXItbGFiZWwtbGluZS1oZWlnaHQtc206IDEuNDg2ICFkZWZhdWx0O1xyXG5cclxuJHN3aXRjaGVyLXdpZHRoLWxnOiAgICAgICAgICAgICAyLjc1cmVtICFkZWZhdWx0O1xyXG4kc3dpdGNoZXItaGVpZ2h0LWxnOiAgICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWxhYmVsLWZvbnQtc2l6ZS1sZzogICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4kc3dpdGNoZXItbGFiZWwtbGluZS1oZWlnaHQtbGc6IDEuNDcgIWRlZmF1bHQ7XHJcblxyXG4kc3dpdGNoZXItb2ZmLWNvbG9yOiAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLW9mZi1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRzd2l0Y2hlci1ob2xkZXItYmc6ICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcclxuJHN3aXRjaGVyLWhvbGRlci1zaGFkb3c6ICAgICAgICAkbWF0ZXJpYWwtY29tcG9uZW50LXNoYWRvdyAhZGVmYXVsdDtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKiBDbG9zZVxyXG5cclxuJGNsb3NlLWZvbnQtd2VpZ2h0OiAzMDAgIWRlZmF1bHQ7XHJcbiRjbG9zZS10ZXh0LXNoYWRvdzogbm9uZSAhZGVmYXVsdDtcclxuJGNsb3NlLWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIEp1bWJvdHJvblxyXG5cclxuJGp1bWJvdHJvbi1wYWRkaW5nOiAzcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIFNpZGVuYXZcclxuXHJcbiRzaWRlbmF2LXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTUuNjI1cmVtICFkZWZhdWx0OyAvLzI1MHB4O1xyXG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6ICAgICAgICAgICAgICAgIDQuMzc1cmVtICFkZWZhdWx0OyAvLzcwcHg7XHJcblxyXG4kc2lkZW5hdi1pdGVtLXNwYWNlcjogICAgICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kc2lkZW5hdi12ZXJ0aWNhbC1saW5rLXBhZGRpbmcteTogICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJHNpZGVuYXYtdmVydGljYWwtbGluay1wYWRkaW5nLXg6ICAgICAgICAycmVtICFkZWZhdWx0O1xyXG4kc2lkZW5hdi12ZXJ0aWNhbC1tZW51LWxpbmstcGFkZGluZy15OiAgIC42MjVyZW0gIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LXZlcnRpY2FsLW1lbnUtbGV2ZWwtc3BhY2VyOiAgICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbiRzaWRlbmF2LWhvcml6b250YWwtbGluay1wYWRkaW5nLXk6ICAgICAgMXJlbSAhZGVmYXVsdDtcclxuJHNpZGVuYXYtaG9yaXpvbnRhbC1saW5rLXBhZGRpbmcteDogICAgICAxcmVtICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1ob3Jpem9udGFsLW1lbnUtbGluay1wYWRkaW5nLXk6IC42MjVyZW0gIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LWhvcml6b250YWwtbWVudS1sZXZlbC1zcGFjZXI6ICAgMXJlbSAhZGVmYXVsdDtcclxuXHJcbiRzaWRlbmF2LW1lbnUtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgMTIuNXJlbSAhZGVmYXVsdDsgLy8yMDBweDtcclxuJHNpZGVuYXYtY29udHJvbC13aWR0aDogICAgICAgICAgICAgICAgICAyLjI1cmVtICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1jb250cm9sLWFycm93LXNpemU6ICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG5cclxuJHNpZGVuYXYtaWNvbi1leHBhbmRlZC13aWR0aDogICAgICAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1pY29uLWV4cGFuZGVkLWZvbnQtc2l6ZTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LWljb24tZXhwYW5kZWQtc3BhY2VyOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJHNpZGVuYXYtYW5pbWF0aW9uLWR1cmF0aW9uOiAgICAgICAgICAgICAuMnMgIWRlZmF1bHQ7XHJcblxyXG4kc2lkZW5hdi1tYXgtbGV2ZWxzOiAgICAgICAgICAgICAgICAgICAgIDUgIWRlZmF1bHQ7XHJcblxyXG4kc2lkZW5hdi1kYXJrLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1kYXJrLW1lbnUtYmc6ICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjEpICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1saWdodC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1saWdodC1tZW51LWJnOiAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjIpICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlnXHJcbiRydGwtc3VwcG9ydDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRtYXRlcmlhbC1zdHlsZTogdHJ1ZTtcclxuIl19 */"

/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-block.component.ts":
/*!************************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-block.component.ts ***!
  \************************************************************/
/*! exports provided: SidenavBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavBlockComponent", function() { return SidenavBlockComponent; });
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

var SidenavBlockComponent = /** @class */ (function () {
    function SidenavBlockComponent() {
        this.hostClassMain = true;
        this.hostClassBlock = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sidenav-block'),
        __metadata("design:type", Object)
    ], SidenavBlockComponent.prototype, "hostClassMain", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.d-block'),
        __metadata("design:type", Object)
    ], SidenavBlockComponent.prototype, "hostClassBlock", void 0);
    SidenavBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-block',
            template: "\n  <ng-content></ng-content>\n  "
        })
    ], SidenavBlockComponent);
    return SidenavBlockComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-divider.component.ts":
/*!**************************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-divider.component.ts ***!
  \**************************************************************/
/*! exports provided: SidenavDividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavDividerComponent", function() { return SidenavDividerComponent; });
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

var SidenavDividerComponent = /** @class */ (function () {
    function SidenavDividerComponent() {
        this.hostClassMain = true;
        this.hostClassBlock = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sidenav-divider'),
        __metadata("design:type", Object)
    ], SidenavDividerComponent.prototype, "hostClassMain", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.d-block'),
        __metadata("design:type", Object)
    ], SidenavDividerComponent.prototype, "hostClassBlock", void 0);
    SidenavDividerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-divider',
            template: ''
        })
    ], SidenavDividerComponent);
    return SidenavDividerComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-header.component.ts ***!
  \*************************************************************/
/*! exports provided: SidenavHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavHeaderComponent", function() { return SidenavHeaderComponent; });
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

var SidenavHeaderComponent = /** @class */ (function () {
    function SidenavHeaderComponent() {
        this.hostClassMain = true;
        this.hostClassBlock = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sidenav-header'),
        __metadata("design:type", Object)
    ], SidenavHeaderComponent.prototype, "hostClassMain", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.d-block'),
        __metadata("design:type", Object)
    ], SidenavHeaderComponent.prototype, "hostClassBlock", void 0);
    SidenavHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-header',
            template: "\n  <ng-content></ng-content>\n  "
        })
    ], SidenavHeaderComponent);
    return SidenavHeaderComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-link.component.ts":
/*!***********************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-link.component.ts ***!
  \***********************************************************/
/*! exports provided: SidenavLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavLinkComponent", function() { return SidenavLinkComponent; });
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

var SidenavLinkComponent = /** @class */ (function () {
    function SidenavLinkComponent() {
        this.hostClassMain = true;
        this.hostClassBlock = true;
        this.target = '_self';
        this.linkClass = '';
        this.badge = null;
        this.badgeClass = '';
        this.disabled = false;
        this.active = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sidenav-item'),
        __metadata("design:type", Object)
    ], SidenavLinkComponent.prototype, "hostClassMain", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.d-block'),
        __metadata("design:type", Object)
    ], SidenavLinkComponent.prototype, "hostClassBlock", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavLinkComponent.prototype, "href", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavLinkComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavLinkComponent.prototype, "target", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavLinkComponent.prototype, "linkClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavLinkComponent.prototype, "badge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavLinkComponent.prototype, "badgeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.disabled'),
        __metadata("design:type", Object)
    ], SidenavLinkComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.active'),
        __metadata("design:type", Object)
    ], SidenavLinkComponent.prototype, "active", void 0);
    SidenavLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-link',
            template: "\n<a [href]=\"href\" [target]=\"target\" class=\"sidenav-link\" [ngClass]=\"linkClass\">\n  <i class=\"sidenav-icon\" *ngIf=\"icon\" [ngClass]=\"icon\"></i>\n  <div><ng-content></ng-content></div>\n  <div *ngIf=\"badge\" class=\"ml-auto pl-1\"><div class=\"badge\" [ngClass]=\"badgeClass\">{{badge}}</div></div>\n</a>\n  "
        })
    ], SidenavLinkComponent);
    return SidenavLinkComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: SidenavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenuComponent", function() { return SidenavMenuComponent; });
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

var SidenavMenuComponent = /** @class */ (function () {
    function SidenavMenuComponent() {
        this.hostClassMain = true;
        this.hostClassBlock = true;
        this.linkClass = '';
        this.badge = null;
        this.badgeClass = '';
        this.disabled = false;
        this.active = false;
        this.open = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sidenav-item'),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "hostClassMain", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.d-block'),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "hostClassBlock", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavMenuComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavMenuComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "linkClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "badge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "badgeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.disabled'),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.active'),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "open", void 0);
    SidenavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-menu',
            template: "\n<a href=\"#\" class=\"sidenav-link sidenav-toggle\" [ngClass]=\"linkClass\">\n  <i class=\"sidenav-icon\" *ngIf=\"icon\" [ngClass]=\"icon\"></i>\n  <div [innerHTML]=\"text\"></div>\n  <div *ngIf=\"badge\" class=\"ml-auto pl-1\"><div class=\"badge\" [ngClass]=\"badgeClass\">{{badge}}</div></div>\n</a>\n<div class=\"sidenav-menu\">\n  <ng-content></ng-content>\n</div>\n  "
        })
    ], SidenavMenuComponent);
    return SidenavMenuComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-router-link.component.ts":
/*!******************************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-router-link.component.ts ***!
  \******************************************************************/
/*! exports provided: SidenavRouterLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavRouterLinkComponent", function() { return SidenavRouterLinkComponent; });
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

var SidenavRouterLinkComponent = /** @class */ (function () {
    function SidenavRouterLinkComponent() {
        this.hostClassMain = true;
        this.hostClassBlock = true;
        this.linkClass = '';
        this.badge = null;
        this.badgeClass = '';
        this.disabled = false;
        this.active = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sidenav-item'),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "hostClassMain", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.d-block'),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "hostClassBlock", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavRouterLinkComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "linkClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "badge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "badgeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.disabled'),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.active'),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "route", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "queryParams", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavRouterLinkComponent.prototype, "fragment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "queryParamsHandling", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidenavRouterLinkComponent.prototype, "preserveFragment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidenavRouterLinkComponent.prototype, "skipLocationChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidenavRouterLinkComponent.prototype, "replaceUrl", void 0);
    SidenavRouterLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-router-link',
            template: "\n<a\n  [routerLink]=\"route\"\n  [queryParams]=\"queryParams\"\n  [fragment]=\"fragment\"\n  [queryParamsHandling]=\"queryParamsHandling\"\n  [preserveFragment]=\"preserveFragment\"\n  [skipLocationChange]=\"skipLocationChange\"\n  [replaceUrl]=\"replaceUrl\"\n  class=\"sidenav-link\"\n  [ngClass]=\"linkClass\">\n  <i class=\"sidenav-icon\" *ngIf=\"icon\" [ngClass]=\"icon\"></i>\n  <div><ng-content></ng-content></div>\n  <div *ngIf=\"badge\" class=\"ml-auto pl-1\"><div class=\"badge\" [ngClass]=\"badgeClass\">{{badge}}</div></div>\n</a>\n  "
        })
    ], SidenavRouterLinkComponent);
    return SidenavRouterLinkComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav.component.ts":
/*!******************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav.component.ts ***!
  \******************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideNav = __webpack_require__(/*! ./sidenav.js */ "./src/vendor/libs/sidenav/sidenav.js").SideNav;
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(el, zone, ref) {
        this.el = el;
        this.zone = zone;
        this.ref = ref;
        this.orientation = 'vertical';
        this.animate = true;
        this.accordion = true;
        this.closeChildren = false;
        this.showDropdownOnHover = false;
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hostClassMain = true;
        this.hostClassHorizontal = false;
        this.hostClassVertical = false;
        this.ref.detach();
        // Set host classes
        this.hostClassHorizontal = this.orientation === 'horizontal';
        this.hostClassVertical = !this.hostClassHorizontal;
    }
    SidenavComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.sidenav = new SideNav(_this.el.nativeElement, {
                orientation: _this.orientation,
                animate: _this.animate,
                accordion: _this.accordion,
                closeChildren: _this.closeChildren,
                showDropdownOnHover: _this.showDropdownOnHover,
                onOpen: _this.onOpen,
                onOpened: _this.onOpened,
                onClose: _this.onClose,
                onClosed: _this.onClosed
            }, perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"]);
        });
    };
    SidenavComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.destroy.emit(this);
        if (this.sidenav) {
            this.zone.runOutsideAngular(function () { return _this.sidenav.destroy(); });
        }
        this.sidenav = null;
        this.el = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "orientation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "animate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "accordion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "closeChildren", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "showDropdownOnHover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], SidenavComponent.prototype, "onOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], SidenavComponent.prototype, "onOpened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], SidenavComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], SidenavComponent.prototype, "onClosed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "destroy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sidenav'),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "hostClassMain", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sidenav-horizontal'),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "hostClassHorizontal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sidenav-vertical'),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "hostClassVertical", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav',
            exportAs: 'sidenav',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__(/*! ../ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss */ "./src/vendor/libs/ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav.js":
/*!********************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){var n=function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=209)}({209:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t),n.d(t,"SideNav",function(){return r});var s=["transitionend","webkitTransitionEnd","oTransitionEnd"],o=["transition","MozTransition","webkitTransition","WebkitTransition","OTransition"],r=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._el=t,this._horizontal="horizontal"===n.orientation,this._animate=!1!==n.animate&&this._supportsTransitionEnd(),this._accordion=!1!==n.accordion,this._closeChildren=Boolean(n.closeChildren),this._showDropdownOnHover=Boolean(n.showDropdownOnHover),this._rtl="rtl"===document.documentElement.getAttribute("dir")||"rtl"===document.body.getAttribute("dir"),this._lastWidth=this._horizontal?window.innerWidth:null,this._onOpen=n.onOpen||function(){},this._onOpened=n.onOpened||function(){},this._onClose=n.onClose||function(){},this._onClosed=n.onClosed||function(){},t.classList.add("sidenav"),t.classList[this._animate?"remove":"add"]("sidenav-no-animation"),this._horizontal){t.classList.add("sidenav-horizontal"),t.classList.remove("sidenav-vertical"),this._inner=t.querySelector(".sidenav-inner");var s=this._inner.parentNode;this._prevBtn=t.querySelector(".sidenav-horizontal-prev"),this._prevBtn||(this._prevBtn=document.createElement("a"),this._prevBtn.href="#",this._prevBtn.className="sidenav-horizontal-prev",s.appendChild(this._prevBtn)),this._wrapper=t.querySelector(".sidenav-horizontal-wrapper"),this._wrapper||(this._wrapper=document.createElement("div"),this._wrapper.className="sidenav-horizontal-wrapper",this._wrapper.appendChild(this._inner),s.appendChild(this._wrapper)),this._nextBtn=t.querySelector(".sidenav-horizontal-next"),this._nextBtn||(this._nextBtn=document.createElement("a"),this._nextBtn.href="#",this._nextBtn.className="sidenav-horizontal-next",s.appendChild(this._nextBtn)),this._innerPosition=0,this.update()}else{t.classList.add("sidenav-vertical"),t.classList.remove("sidenav-horizontal");var o=i||window.PerfectScrollbar;o&&(this._scrollbar=new o(t.querySelector(".sidenav-inner"),{suppressScrollX:!0,wheelPropagation:!0}))}this._bindEvents(),t.sidenavInstance=this}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"open",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._closeChildren,i=this._findUnopenedParent(this._getItem(e,!0),n);if(i){var s=this._getLink(i,!0);this._horizontal&&this._isRoot(i)?(this._onOpen(this,i,s,this._findMenu(i)),this._toggleDropdown(!0,i,n),this._onOpened(this,i,s,this._findMenu(i))):(this._animate?(this._onOpen(this,i,s,this._findMenu(i)),window.requestAnimationFrame(function(){return t._toggleAnimation(!0,i,!1)})):(this._onOpen(this,i,s,this._findMenu(i)),i.classList.add("open"),this._onOpened(this,i,s,this._findMenu(i))),this._accordion&&this._closeOther(i,n))}}},{key:"close",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._closeChildren,i=this._getItem(e,!0),s=this._getLink(e,!0);if(i.classList.contains("open")&&!i.classList.contains("disabled"))if(this._horizontal&&this._isRoot(i))this._onClose(this,i,s,this._findMenu(i)),this._toggleDropdown(!1,i,n),this._onClosed(this,i,s,this._findMenu(i));else if(this._animate)this._onClose(this,i,s,this._findMenu(i)),window.requestAnimationFrame(function(){return t._toggleAnimation(!1,i,n)});else{if(this._onClose(this,i,s,this._findMenu(i)),i.classList.remove("open"),n)for(var o=i.querySelectorAll(".sidenav-item.open"),r=0,l=o.length;r<l;r++)o[r].classList.remove("open");this._onClosed(this,i,s,this._findMenu(i))}}},{key:"toggle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._closeChildren,n=this._getItem(e,!0);this._getLink(e,!0),n.classList.contains("open")?this.close(n,t):this.open(n,t)}},{key:"closeAll",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._closeChildren,t=this._el.querySelectorAll(".sidenav-inner > .sidenav-item.open"),n=0,i=t.length;n<i;n++)this.close(t[n],e)}},{key:"setActive",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=this._getItem(e,!1);if(t&&i)for(var o=this._el.querySelectorAll(".sidenav-inner .sidenav-item.active"),r=0,l=o.length;r<l;r++)o[r].classList.remove("active");if(t&&n){var a=this._findParent(s,"sidenav-item",!1);a&&this.open(a)}for(;s;)s.classList[t?"add":"remove"]("active"),s=this._findParent(s,"sidenav-item",!1)}},{key:"setDisabled",value:function(e,t){this._getItem(e,!1).classList[t?"add":"remove"]("disabled")}},{key:"isActive",value:function(e){return this._getItem(e,!1).classList.contains("active")}},{key:"isOpened",value:function(e){return this._getItem(e,!1).classList.contains("open")}},{key:"isDisabled",value:function(e){return this._getItem(e,!1).classList.contains("disabled")}},{key:"update",value:function(){if(this._horizontal){this.closeAll();var e=Math.round(this._wrapper.getBoundingClientRect().width),t=this._innerWidth,n=this._innerPosition;e-n>t&&((n=e-t)>0&&(n=0),this._innerPosition=n),this._updateSlider(e,t,n)}else this._scrollbar&&this._scrollbar.update()}},{key:"_updateSlider",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=null!==e?e:Math.round(this._wrapper.getBoundingClientRect().width),s=null!==t?t:this._innerWidth,o=null!==n?n:this._innerPosition;0===o?this._prevBtn.classList.add("disabled"):this._prevBtn.classList.remove("disabled"),s+o<=i?this._nextBtn.classList.add("disabled"):this._nextBtn.classList.remove("disabled")}},{key:"destroy",value:function(){if(this._el){this._unbindEvents();for(var e=this._el.querySelectorAll(".sidenav-item"),t=0,n=e.length;t<n;t++)this._unbindAnimationEndEvent(e[t]),e[t].classList.remove("sidenav-item-animating"),e[t].classList.remove("open"),e[t].style.overflow=null,e[t].style.height=null;for(var i=this._el.querySelectorAll(".sidenav-menu"),s=0,o=i.length;s<o;s++)i[s].style.marginRight=null,i[s].style.marginLeft=null;this._el.classList.remove("sidenav-no-animation"),this._wrapper&&(this._prevBtn.parentNode.removeChild(this._prevBtn),this._nextBtn.parentNode.removeChild(this._nextBtn),this._wrapper.parentNode.insertBefore(this._inner,this._wrapper),this._wrapper.parentNode.removeChild(this._wrapper),this._inner.style.marginLeft=null,this._inner.style.marginRight=null),this._el.sidenavInstance=null,delete this._el.sidenavInstance,this._el=null,this._horizontal=null,this._animate=null,this._accordion=null,this._closeChildren=null,this._showDropdownOnHover=null,this._rtl=null,this._onOpen=null,this._onOpened=null,this._onClose=null,this._onClosed=null,this._scrollbar&&(this._scrollbar.destroy(),this._scrollbar=null),this._inner=null,this._prevBtn=null,this._wrapper=null,this._nextBtn=null}}},{key:"_getLink",value:function(e,t){var n=[],i=t?"sidenav-toggle":"sidenav-link";if(e.classList.contains(i)?n=[e]:e.classList.contains("sidenav-item")&&(n=this._findChild(e,[i])),!n.length)throw new Error("`".concat(i,"` element not found."));return n[0]}},{key:"_getItem",value:function(e,t){var n=null,i=t?"sidenav-toggle":"sidenav-link";if(e.classList.contains("sidenav-item")?this._findChild(e,[i]).length&&(n=e):e.classList.contains(i)&&(n=e.parentNode.classList.contains("sidenav-item")?e.parentNode:null),!n)throw new Error("".concat(t?"Toggable ":"","`.sidenav-item` element not found."));return n}},{key:"_findUnopenedParent",value:function(e,t){for(var n=[],i=null;e;)e.classList.contains("disabled")?(i=null,n=[]):(e.classList.contains("open")||(i=e),n.push(e)),e=this._findParent(e,"sidenav-item",!1);if(!i)return null;if(1===n.length)return i;for(var s=0,o=(n=n.slice(0,n.indexOf(i))).length;s<o;s++)if(n[s].classList.add("open"),this._accordion)for(var r=this._findChild(n[s].parentNode,["sidenav-item","open"]),l=0,a=r.length;l<a;l++)if(r[l]!==n[s]&&(r[l].classList.remove("open"),t))for(var d=r[l].querySelectorAll(".sidenav-item.open"),h=0,u=d.length;h<u;h++)d[h].classList.remove("open");return i}},{key:"_closeOther",value:function(e,t){for(var n=this._findChild(e.parentNode,["sidenav-item","open"]),i=0,s=n.length;i<s;i++)n[i]!==e&&this.close(n[i],t)}},{key:"_toggleAnimation",value:function(e,t,n){var i=this,s=this._getLink(t,!0),o=this._findMenu(t);this._unbindAnimationEndEvent(t);var r=Math.round(s.getBoundingClientRect().height);t.style.overflow="hidden";var l=function(){t.classList.remove("sidenav-item-animating"),t.classList.remove("sidenav-item-closing"),t.style.overflow=null,t.style.height=null,i._horizontal||i.update()};e?(t.style.height="".concat(r,"px"),t.classList.add("sidenav-item-animating"),t.classList.add("open"),this._bindAnimationEndEvent(t,function(){l(),i._onOpened(i,t,s,o)}),setTimeout(function(){return t.style.height="".concat(r+Math.round(o.getBoundingClientRect().height),"px")},50)):(t.style.height="".concat(r+Math.round(o.getBoundingClientRect().height),"px"),t.classList.add("sidenav-item-animating"),t.classList.add("sidenav-item-closing"),this._bindAnimationEndEvent(t,function(){if(t.classList.remove("open"),l(),n)for(var e=t.querySelectorAll(".sidenav-item.open"),r=0,a=e.length;r<a;r++)e[r].classList.remove("open");i._onClosed(i,t,s,o)}),setTimeout(function(){return t.style.height="".concat(r,"px")},50))}},{key:"_toggleDropdown",value:function(e,t,n){var i=this._findMenu(t);if(e){var s=Math.round(this._wrapper.getBoundingClientRect().width),o=(this._innerWidth,this._innerPosition),r=this._getItemOffset(t),l=Math.round(t.getBoundingClientRect().width);r-5<=-1*o?this._innerPosition=-1*r:r+o+l+5>=s&&(this._innerPosition=l>s?-1*r:-1*(r+l-s)),t.classList.add("open");var a=Math.round(i.getBoundingClientRect().width);r+this._innerPosition+a>s&&a<s&&a>l&&(i.style[this._rtl?"marginRight":"marginLeft"]="-".concat(a-l,"px")),this._closeOther(t,n),this._updateSlider()}else{var d=this._findChild(t,["sidenav-toggle"]);if(d.length&&d[0].removeAttribute("data-hover","true"),t.classList.remove("open"),i.style[this._rtl?"marginRight":"marginLeft"]=null,n)for(var h=i.querySelectorAll(".sidenav-item.open"),u=0,v=h.length;u<v;u++)h[u].classList.remove("open")}}},{key:"_slide",value:function(e){var t,n=Math.round(this._wrapper.getBoundingClientRect().width),i=this._innerWidth;this._innerPosition,"next"===e?(t=this._getSlideNextPos(),i+t<n&&(t=n-i)):(t=this._getSlidePrevPos())>0&&(t=0),this._innerPosition=t,this.update()}},{key:"_getSlideNextPos",value:function(){for(var e=Math.round(this._wrapper.getBoundingClientRect().width),t=this._innerPosition,n=this._inner.childNodes[0],i=0;n;){if(n.tagName){var s=Math.round(n.getBoundingClientRect().width);if(i+t-5<=e&&i+t+s+5>=e){s>e&&i===-1*t&&(i+=s);break}i+=s}n=n.nextSibling}return-1*i}},{key:"_getSlidePrevPos",value:function(){for(var e=Math.round(this._wrapper.getBoundingClientRect().width),t=this._innerPosition,n=this._inner.childNodes[0],i=0;n;){if(n.tagName){var s=Math.round(n.getBoundingClientRect().width);if(i-5<=-1*t&&i+s+5>=-1*t){s<=e&&(i=i+s-e);break}i+=s}n=n.nextSibling}return-1*i}},{key:"_getItemOffset",value:function(e){for(var t=this._inner.childNodes[0],n=0;t!==e;)t.tagName&&(n+=Math.round(t.getBoundingClientRect().width)),t=t.nextSibling;return n}},{key:"_bindAnimationEndEvent",value:function(e,t){var n=this,i=function(i){i.target===e&&(n._unbindAnimationEndEvent(e),t(i))},o=window.getComputedStyle(e).transitionDuration;o=parseFloat(o)*(-1!==o.indexOf("ms")?1:1e3),e._sideNavAnimationEndEventCb=i,s.forEach(function(t){return e.addEventListener(t,e._sideNavAnimationEndEventCb,!1)}),e._sideNavAnimationEndEventTimeout=setTimeout(function(){i({target:e})},o+50)}},{key:"_unbindAnimationEndEvent",value:function(e){var t=e._sideNavAnimationEndEventCb;e._sideNavAnimationEndEventTimeout&&(clearTimeout(e._sideNavAnimationEndEventTimeout),e._sideNavAnimationEndEventTimeout=null),t&&(s.forEach(function(n){return e.removeEventListener(n,t,!1)}),e._sideNavAnimationEndEventCb=null)}},{key:"_bindEvents",value:function(){var e=this;this._evntElClick=function(t){var n=t.target.classList.contains("sidenav-toggle")?t.target:e._findParent(t.target,"sidenav-toggle",!1);n&&(t.preventDefault(),"true"!==n.getAttribute("data-hover")&&e.toggle(n))},this._el.addEventListener("click",this._evntElClick),this._evntWindowResize=function(){e._horizontal?e._lastWidth!==window.innerWidth&&(e._lastWidth=window.innerWidth,e.update()):e.update()},window.addEventListener("resize",this._evntWindowResize),this._horizontal&&(this._evntPrevBtnClick=function(t){t.preventDefault(),e._prevBtn.classList.contains("disabled")||e._slide("prev")},this._prevBtn.addEventListener("click",this._evntPrevBtnClick),this._evntNextBtnClick=function(t){t.preventDefault(),e._nextBtn.classList.contains("disabled")||e._slide("next")},this._nextBtn.addEventListener("click",this._evntNextBtnClick),this._evntBodyClick=function(t){!e._inner.contains(t.target)&&e._el.querySelectorAll(".sidenav-inner > .sidenav-item.open").length&&e.closeAll()},document.body.addEventListener("click",this._evntBodyClick),this._evntHorizontalElClick=function(t){var n=t.target.classList.contains("sidenav-link")?t.target:e._findParent(t.target,"sidenav-link",!1);n&&!n.classList.contains("sidenav-toggle")&&e.closeAll()},this._el.addEventListener("click",this._evntHorizontalElClick),this._showDropdownOnHover&&(this._evntInnerMousemove=function(t){for(var n=e._findParent(t.target,"sidenav-item",!1),i=null;n;)i=n,n=e._findParent(n,"sidenav-item",!1);if(i&&!i.classList.contains("open")){var s=e._findChild(i,["sidenav-toggle"]);s.length&&(s[0].setAttribute("data-hover","true"),e.open(s[0],e._closeChildren,!0),setTimeout(function(){s[0].removeAttribute("data-hover")},500))}},this._inner.addEventListener("mousemove",this._evntInnerMousemove),this._evntInnerMouseleave=function(t){e.closeAll()},this._inner.addEventListener("mouseleave",this._evntInnerMouseleave)))}},{key:"_unbindEvents",value:function(){this._evntElClick&&(this._el.removeEventListener("click",this._evntElClick),this._evntElClick=null),this._evntWindowResize&&(window.removeEventListener("resize",this._evntWindowResize),this._evntWindowResize=null),this._evntPrevBtnClick&&(this._prevBtn.removeEventListener("click",this._evntPrevBtnClick),this._evntPrevBtnClick=null),this._evntNextBtnClick&&(this._nextBtn.removeEventListener("click",this._evntNextBtnClick),this._evntNextBtnClick=null),this._evntBodyClick&&(document.body.removeEventListener("click",this._evntBodyClick),this._evntBodyClick=null),this._evntHorizontalElClick&&(this._el.removeEventListener("click",this._evntHorizontalElClick),this._evntHorizontalElClick=null),this._evntInnerMousemove&&(this._inner.removeEventListener("mousemove",this._evntInnerMousemove),this._evntInnerMousemove=null),this._evntInnerMouseleave&&(this._inner.removeEventListener("mouseleave",this._evntInnerMouseleave),this._evntInnerMouseleave=null)}},{key:"_findMenu",value:function(e){for(var t=e.childNodes[0],n=null;t&&!n;)t.classList&&t.classList.contains("sidenav-menu")&&(n=t),t=t.nextSibling;if(!n)throw new Error("Cannot find `.sidenav-menu` element for the current `.sidenav-toggle`");return n}},{key:"_isRoot",value:function(e){return!this._findParent(e,"sidenav-item",!1)}},{key:"_findParent",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("BODY"===e.tagName.toUpperCase())return null;for(e=e.parentNode;"BODY"!==e.tagName.toUpperCase()&&!e.classList.contains(t);)e=e.parentNode;if(!(e="BODY"!==e.tagName.toUpperCase()?e:null)&&n)throw new Error("Cannot find `.".concat(t,"` parent element"));return e}},{key:"_findChild",value:function(e,t){for(var n=e.childNodes,i=[],s=0,o=n.length;s<o;s++)if(n[s].classList){for(var r=0,l=0;l<t.length;l++)n[s].classList.contains(t[l])&&r++;t.length===r&&i.push(n[s])}return i}},{key:"_supportsTransitionEnd",value:function(){if(window.QUnit)return!1;var e=document.body||document.documentElement,t=!1;return o.forEach(function(n){void 0!==e.style[n]&&(t=!0)}),t}},{key:"_innerWidth",get:function(){for(var e=this._inner.childNodes,t=0,n=0,i=e.length;n<i;n++)e[n].tagName&&(t+=Math.round(e[n].getBoundingClientRect().width));return t}},{key:"_innerPosition",get:function(){return parseInt(this._inner.style[this._rtl?"marginRight":"marginLeft"]||"0px")},set:function(e){return this._inner.style[this._rtl?"marginRight":"marginLeft"]="".concat(e,"px"),e}}]),e}()}});if("object"==typeof n){var i=[ true&&"object"==typeof module.exports?module.exports:null,"undefined"!=typeof window?window:null,e&&e!==window?e:null];for(var s in n)i[0]&&(i[0][s]=n[s]),i[1]&&"__esModule"!==s&&(i[1][s]=n[s]),i[2]&&(i[2][s]=n[s])}}(this);

/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav.module.ts":
/*!***************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav.module.ts ***!
  \***************************************************/
/*! exports provided: SidenavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavModule", function() { return SidenavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav.component */ "./src/vendor/libs/sidenav/sidenav.component.ts");
/* harmony import */ var _sidenav_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidenav-link.component */ "./src/vendor/libs/sidenav/sidenav-link.component.ts");
/* harmony import */ var _sidenav_router_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidenav-router-link.component */ "./src/vendor/libs/sidenav/sidenav-router-link.component.ts");
/* harmony import */ var _sidenav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidenav-menu.component */ "./src/vendor/libs/sidenav/sidenav-menu.component.ts");
/* harmony import */ var _sidenav_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidenav-block.component */ "./src/vendor/libs/sidenav/sidenav-block.component.ts");
/* harmony import */ var _sidenav_divider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidenav-divider.component */ "./src/vendor/libs/sidenav/sidenav-divider.component.ts");
/* harmony import */ var _sidenav_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidenav-header.component */ "./src/vendor/libs/sidenav/sidenav-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SidenavModule = /** @class */ (function () {
    function SidenavModule() {
    }
    SidenavModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [
                _sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"],
                _sidenav_link_component__WEBPACK_IMPORTED_MODULE_4__["SidenavLinkComponent"],
                _sidenav_router_link_component__WEBPACK_IMPORTED_MODULE_5__["SidenavRouterLinkComponent"],
                _sidenav_menu_component__WEBPACK_IMPORTED_MODULE_6__["SidenavMenuComponent"],
                _sidenav_block_component__WEBPACK_IMPORTED_MODULE_7__["SidenavBlockComponent"],
                _sidenav_divider_component__WEBPACK_IMPORTED_MODULE_8__["SidenavDividerComponent"],
                _sidenav_header_component__WEBPACK_IMPORTED_MODULE_9__["SidenavHeaderComponent"]
            ],
            exports: [
                _sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"],
                _sidenav_link_component__WEBPACK_IMPORTED_MODULE_4__["SidenavLinkComponent"],
                _sidenav_router_link_component__WEBPACK_IMPORTED_MODULE_5__["SidenavRouterLinkComponent"],
                _sidenav_menu_component__WEBPACK_IMPORTED_MODULE_6__["SidenavMenuComponent"],
                _sidenav_block_component__WEBPACK_IMPORTED_MODULE_7__["SidenavBlockComponent"],
                _sidenav_divider_component__WEBPACK_IMPORTED_MODULE_8__["SidenavDividerComponent"],
                _sidenav_header_component__WEBPACK_IMPORTED_MODULE_9__["SidenavHeaderComponent"]
            ]
        })
    ], SidenavModule);
    return SidenavModule;
}());



/***/ }),

/***/ "./src/vendor/libs/theme-settings/theme-settings.module.ts":
/*!*****************************************************************!*\
  !*** ./src/vendor/libs/theme-settings/theme-settings.module.ts ***!
  \*****************************************************************/
/*! exports provided: ThemeSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsModule", function() { return ThemeSettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-settings.service */ "./src/vendor/libs/theme-settings/theme-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// *******************************************************************************
// Services

// *******************************************************************************
//
var ThemeSettingsModule = /** @class */ (function () {
    function ThemeSettingsModule() {
    }
    ThemeSettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"]
            ]
        })
    ], ThemeSettingsModule);
    return ThemeSettingsModule;
}());



/***/ }),

/***/ "./src/vendor/libs/theme-settings/theme-settings.service.ts":
/*!******************************************************************!*\
  !*** ./src/vendor/libs/theme-settings/theme-settings.service.ts ***!
  \******************************************************************/
/*! exports provided: ThemeSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsService", function() { return ThemeSettingsService; });
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

var ThemeSettingsService = /** @class */ (function () {
    function ThemeSettingsService(zone) {
        this.zone = zone;
    }
    Object.defineProperty(ThemeSettingsService.prototype, "themeSettings", {
        get: function () {
            return window['themeSettings'];
        },
        enumerable: true,
        configurable: true
    });
    ThemeSettingsService.prototype.exec = function (fn) {
        return this.themeSettings && this.zone.runOutsideAngular(fn);
    };
    Object.defineProperty(ThemeSettingsService.prototype, "options", {
        get: function () {
            return (this.themeSettings && this.themeSettings.settings) || {};
        },
        enumerable: true,
        configurable: true
    });
    ThemeSettingsService.prototype.getOption = function (name) {
        return this.options[name] || null;
    };
    ThemeSettingsService.prototype.setRtl = function (rtl) {
        var _this = this;
        this.exec(function () { return _this.themeSettings.setRtl(rtl); });
    };
    ThemeSettingsService.prototype.setMaterial = function (rtl) {
        var _this = this;
        this.exec(function () { return _this.themeSettings.setMaterial(rtl); });
    };
    ThemeSettingsService.prototype.setTheme = function (themeName, updateStorage, cb) {
        var _this = this;
        if (updateStorage === void 0) { updateStorage = true; }
        if (cb === void 0) { cb = null; }
        this.exec(function () { return _this.themeSettings.setTheme(themeName, updateStorage, cb); });
    };
    ThemeSettingsService.prototype.setLayoutPosition = function (pos, updateStorage) {
        var _this = this;
        if (updateStorage === void 0) { updateStorage = true; }
        this.exec(function () { return _this.themeSettings.setLayoutPosition(pos, updateStorage); });
    };
    ThemeSettingsService.prototype.setLayoutNavbarFixed = function (fixed, updateStorage) {
        var _this = this;
        if (updateStorage === void 0) { updateStorage = true; }
        this.exec(function () { return _this.themeSettings.setLayoutNavbarFixed(fixed, updateStorage); });
    };
    ThemeSettingsService.prototype.setLayoutFooterFixed = function (fixed, updateStorage) {
        var _this = this;
        if (updateStorage === void 0) { updateStorage = true; }
        this.exec(function () { return _this.themeSettings.setLayoutFooterFixed(fixed, updateStorage); });
    };
    ThemeSettingsService.prototype.setLayoutReversed = function (reversed, updateStorage) {
        var _this = this;
        if (updateStorage === void 0) { updateStorage = true; }
        this.exec(function () { return _this.themeSettings.setLayoutReversed(reversed, updateStorage); });
    };
    ThemeSettingsService.prototype.setNavbarBg = function (bg, updateStorage) {
        var _this = this;
        if (updateStorage === void 0) { updateStorage = true; }
        this.exec(function () { return _this.themeSettings.setNavbarBg(bg, updateStorage); });
    };
    ThemeSettingsService.prototype.setSidenavBg = function (bg, updateStorage) {
        var _this = this;
        if (updateStorage === void 0) { updateStorage = true; }
        this.exec(function () { return _this.themeSettings.setSidenavBg(bg, updateStorage); });
    };
    ThemeSettingsService.prototype.setFooterBg = function (bg, updateStorage) {
        var _this = this;
        if (updateStorage === void 0) { updateStorage = true; }
        this.exec(function () { return _this.themeSettings.setFooterBg(bg, updateStorage); });
    };
    ThemeSettingsService.prototype.update = function () {
        var _this = this;
        this.exec(function () { return _this.themeSettings.update(); });
    };
    ThemeSettingsService.prototype.updateNavbarBg = function () {
        var _this = this;
        this.exec(function () { return _this.themeSettings.updateNavbarBg(); });
    };
    ThemeSettingsService.prototype.updateSidenavBg = function () {
        var _this = this;
        this.exec(function () { return _this.themeSettings.updateSidenavBg(); });
    };
    ThemeSettingsService.prototype.updateFooterBg = function () {
        var _this = this;
        this.exec(function () { return _this.themeSettings.updateFooterBg(); });
    };
    ThemeSettingsService.prototype.clearLocalStorage = function () {
        var _this = this;
        this.exec(function () { return _this.themeSettings.clearLocalStorage(); });
    };
    ThemeSettingsService.prototype.destroy = function () {
        var _this = this;
        this.exec(function () { return _this.themeSettings.destroy(); });
    };
    ThemeSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ThemeSettingsService);
    return ThemeSettingsService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Android\Desktop\Gitbuild\HRMS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map