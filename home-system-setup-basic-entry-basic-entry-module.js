(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-system-setup-basic-entry-basic-entry-module"],{

/***/ "./src/app/home/system-setup/basic-entry/bank/bank.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/bank/bank.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2JhbmsvYmFuay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/bank/bank.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/bank/bank.component.ts ***!
  \**********************************************************************/
/*! exports provided: BankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankComponent", function() { return BankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var BankComponent = /** @class */ (function (_super) {
    __extends(BankComponent, _super);
    function BankComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Bank";
        return _this;
    }
    BankComponent.prototype.ngOnInit = function () {
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.items;
        this.perPage = 5;
        this.searchKeys = [];
        this.sortBy = "";
        this.sortDesc = false;
        this.totalItems;
        this.totalPages;
        this.currentPage = 1;
        this.update();
        this.filter(this.items);
        this.paginate(this.items);
        this.currentPage = 1;
        this.filterStatu(this.items);
        this.sort(this.items);
    };
    BankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./bank.component.scss */ "./src/app/home/system-setup/basic-entry/bank/bank.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BankComponent);
    return BankComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/basic-entry-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/basic-entry-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicEntryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicEntryRoutingModule", function() { return BasicEntryRoutingModule; });
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit/unit.component */ "./src/app/home/system-setup/basic-entry/unit/unit.component.ts");
/* harmony import */ var _signatory_signatory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signatory/signatory.component */ "./src/app/home/system-setup/basic-entry/signatory/signatory.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section/section.component */ "./src/app/home/system-setup/basic-entry/section/section.component.ts");
/* harmony import */ var _occupation_occupation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./occupation/occupation.component */ "./src/app/home/system-setup/basic-entry/occupation/occupation.component.ts");
/* harmony import */ var _misconduct_misconduct_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misconduct/misconduct.component */ "./src/app/home/system-setup/basic-entry/misconduct/misconduct.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location/location.component */ "./src/app/home/system-setup/basic-entry/location/location.component.ts");
/* harmony import */ var _job_type_job_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-type/job-type.component */ "./src/app/home/system-setup/basic-entry/job-type/job-type.component.ts");
/* harmony import */ var _institute_institute_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./institute/institute.component */ "./src/app/home/system-setup/basic-entry/institute/institute.component.ts");
/* harmony import */ var _designation_designation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./designation/designation.component */ "./src/app/home/system-setup/basic-entry/designation/designation.component.ts");
/* harmony import */ var _department_gl_department_gl_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./department-gl/department-gl.component */ "./src/app/home/system-setup/basic-entry/department-gl/department-gl.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./country/country.component */ "./src/app/home/system-setup/basic-entry/country/country.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/home/system-setup/basic-entry/branch/branch.component.ts");
/* harmony import */ var _blood_group_blood_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blood-group/blood-group.component */ "./src/app/home/system-setup/basic-entry/blood-group/blood-group.component.ts");
/* harmony import */ var _bank_bank_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bank/bank.component */ "./src/app/home/system-setup/basic-entry/bank/bank.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./department/department.component */ "./src/app/home/system-setup/basic-entry/department/department.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emp_info_emp_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./emp-info/emp-info.component */ "./src/app/home/system-setup/basic-entry/emp-info/emp-info.component.ts");
/* harmony import */ var _education_board_education_board_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./education-board/education-board.component */ "./src/app/home/system-setup/basic-entry/education-board/education-board.component.ts");
/* harmony import */ var _education_level_education_level_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./education-level/education-level.component */ "./src/app/home/system-setup/basic-entry/education-level/education-level.component.ts");
/* harmony import */ var _experience_type_experience_type_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./experience-type/experience-type.component */ "./src/app/home/system-setup/basic-entry/experience-type/experience-type.component.ts");
/* harmony import */ var _gender_gender_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gender/gender.component */ "./src/app/home/system-setup/basic-entry/gender/gender.component.ts");
/* harmony import */ var _nationality_nationality_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./nationality/nationality.component */ "./src/app/home/system-setup/basic-entry/nationality/nationality.component.ts");
/* harmony import */ var _passing_year_passing_year_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./passing-year/passing-year.component */ "./src/app/home/system-setup/basic-entry/passing-year/passing-year.component.ts");
/* harmony import */ var _prefix_prefix_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./prefix/prefix.component */ "./src/app/home/system-setup/basic-entry/prefix/prefix.component.ts");
/* harmony import */ var _suffix_suffix_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./suffix/suffix.component */ "./src/app/home/system-setup/basic-entry/suffix/suffix.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./project/project.component */ "./src/app/home/system-setup/basic-entry/project/project.component.ts");
/* harmony import */ var _publication_type_publication_type_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./publication-type/publication-type.component */ "./src/app/home/system-setup/basic-entry/publication-type/publication-type.component.ts");
/* harmony import */ var _punishment_punishment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./punishment/punishment.component */ "./src/app/home/system-setup/basic-entry/punishment/punishment.component.ts");
/* harmony import */ var _religion_religion_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./religion/religion.component */ "./src/app/home/system-setup/basic-entry/religion/religion.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./result/result.component */ "./src/app/home/system-setup/basic-entry/result/result.component.ts");
/* harmony import */ var _training_country_training_country_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./training-country/training-country.component */ "./src/app/home/system-setup/basic-entry/training-country/training-country.component.ts");
/* harmony import */ var _training_institute_training_institute_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./training-institute/training-institute.component */ "./src/app/home/system-setup/basic-entry/training-institute/training-institute.component.ts");
/* harmony import */ var _training_nature_training_nature_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./training-nature/training-nature.component */ "./src/app/home/system-setup/basic-entry/training-nature/training-nature.component.ts");
/* harmony import */ var _training_sponsor_by_training_sponsor_by_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./training-sponsor-by/training-sponsor-by.component */ "./src/app/home/system-setup/basic-entry/training-sponsor-by/training-sponsor-by.component.ts");
/* harmony import */ var _training_type_training_type_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./training-type/training-type.component */ "./src/app/home/system-setup/basic-entry/training-type/training-type.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var BasicEntryRoutingModule = /** @class */ (function () {
    function BasicEntryRoutingModule() {
    }
    BasicEntryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forChild([
                    { path: 'bank', component: _bank_bank_component__WEBPACK_IMPORTED_MODULE_13__["BankComponent"] },
                    { path: 'blood-group', component: _blood_group_blood_group_component__WEBPACK_IMPORTED_MODULE_12__["BloodGroupComponent"] },
                    { path: 'branch', component: _branch_branch_component__WEBPACK_IMPORTED_MODULE_11__["BranchComponent"] },
                    { path: 'country', component: _country_country_component__WEBPACK_IMPORTED_MODULE_10__["CountryComponent"] },
                    { path: 'department', component: _department_department_component__WEBPACK_IMPORTED_MODULE_14__["DepartmentComponent"] },
                    { path: 'department-gl', component: _department_gl_department_gl_component__WEBPACK_IMPORTED_MODULE_9__["DepartmentGlComponent"] },
                    { path: 'designation', component: _designation_designation_component__WEBPACK_IMPORTED_MODULE_8__["DesignationComponent"] },
                    { path: 'education-board', component: _education_board_education_board_component__WEBPACK_IMPORTED_MODULE_18__["EducationBoardComponent"] },
                    { path: 'education-level', component: _education_level_education_level_component__WEBPACK_IMPORTED_MODULE_19__["EducationLevelComponent"] },
                    { path: 'emp-info', component: _emp_info_emp_info_component__WEBPACK_IMPORTED_MODULE_17__["EmpInfoComponent"] },
                    { path: 'experience-type', component: _experience_type_experience_type_component__WEBPACK_IMPORTED_MODULE_20__["ExperienceTypeComponent"] },
                    { path: 'gender', component: _gender_gender_component__WEBPACK_IMPORTED_MODULE_21__["GenderComponent"] },
                    { path: 'institute', component: _institute_institute_component__WEBPACK_IMPORTED_MODULE_7__["InstituteComponent"] },
                    { path: 'job-type', component: _job_type_job_type_component__WEBPACK_IMPORTED_MODULE_6__["JobTypeComponent"] },
                    { path: 'location', component: _location_location_component__WEBPACK_IMPORTED_MODULE_5__["LocationComponent"] },
                    { path: 'misconduct', component: _misconduct_misconduct_component__WEBPACK_IMPORTED_MODULE_4__["MisconductComponent"] },
                    { path: 'nationality', component: _nationality_nationality_component__WEBPACK_IMPORTED_MODULE_22__["NationalityComponent"] },
                    { path: 'occupation', component: _occupation_occupation_component__WEBPACK_IMPORTED_MODULE_3__["OccupationComponent"] },
                    { path: 'passing-year', component: _passing_year_passing_year_component__WEBPACK_IMPORTED_MODULE_23__["PassingYearComponent"] },
                    { path: 'prefix', component: _prefix_prefix_component__WEBPACK_IMPORTED_MODULE_24__["PrefixComponent"] },
                    { path: 'project', component: _project_project_component__WEBPACK_IMPORTED_MODULE_26__["ProjectComponent"] },
                    { path: 'publication-type', component: _publication_type_publication_type_component__WEBPACK_IMPORTED_MODULE_27__["PublicationTypeComponent"] },
                    { path: 'punishment', component: _punishment_punishment_component__WEBPACK_IMPORTED_MODULE_28__["PunishmentComponent"] },
                    { path: 'religion', component: _religion_religion_component__WEBPACK_IMPORTED_MODULE_29__["ReligionComponent"] },
                    { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_30__["ResultComponent"] },
                    { path: 'section', component: _section_section_component__WEBPACK_IMPORTED_MODULE_2__["SectionComponent"] },
                    { path: 'signatory', component: _signatory_signatory_component__WEBPACK_IMPORTED_MODULE_1__["SignatoryComponent"] },
                    { path: 'suffix', component: _suffix_suffix_component__WEBPACK_IMPORTED_MODULE_25__["SuffixComponent"] },
                    { path: 'training-country', component: _training_country_training_country_component__WEBPACK_IMPORTED_MODULE_31__["TrainingCountryComponent"] },
                    { path: 'training-institute', component: _training_institute_training_institute_component__WEBPACK_IMPORTED_MODULE_32__["TrainingInstituteComponent"] },
                    { path: 'training-nature', component: _training_nature_training_nature_component__WEBPACK_IMPORTED_MODULE_33__["TrainingNatureComponent"] },
                    { path: 'training-sponsor-by', component: _training_sponsor_by_training_sponsor_by_component__WEBPACK_IMPORTED_MODULE_34__["TrainingSponsorByComponent"] },
                    { path: 'training-type', component: _training_type_training_type_component__WEBPACK_IMPORTED_MODULE_35__["TrainingTypeComponent"] },
                    { path: 'unit', component: _unit_unit_component__WEBPACK_IMPORTED_MODULE_0__["UnitComponent"] }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"]]
        })
    ], BasicEntryRoutingModule);
    return BasicEntryRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/basic-entry.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/basic-entry.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card section\">\r\n  <h4 class=\"card-header text-center bg-light\">\r\n    {{title}}\r\n  </h4>\r\n  <div class=\"card-body col-md-9\" style=\"margin: 0 auto\">\r\n    <form>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-2 text-sm-right\" for=\"sortOrder\">Sort Order</label>\r\n        <div class=\"col-sm-6\">\r\n          <select class=\"custom-select\" name=\"sortOrder\" id=\"sortOrder\">\r\n            <option>Select Sort Order</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label col-sm-2 text-sm-right\" for=\"description\">Description</label>\r\n        <div class=\"col-sm-6\">\r\n          <textarea class=\"form-control\" name=\"description\" id=\"description\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"row\">\r\n      <label for=\"\" class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n      <div class=\"demo-inline-spacing mt-3\">\r\n        <button type=\"submit\" class=\"btn btn-success\"><span class=\"fas fa-save\"></span> Save</button>\r\n        <button class=\"btn btn-info\"><span class=\"ion ion-ios-refresh\"></span> Reset</button>\r\n        <button class=\"btn btn-secondary\"><span class=\"fas fa-window-close\"></span> Close</button>\r\n        <button class=\"btn btn-danger\"><span class=\"fas fa-trash-alt\"></span> Delete</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"card mb-4\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            Per page: &nbsp;\r\n            <select [(ngModel)]=\"perPage\" (change)=\"update()\"\r\n              class=\"custom-select custom-select-md d-inline-block w-auto\">\r\n              <option *ngFor=\"let limit of [5, 10, 20, 30, 40, 50]\">{{limit}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"filterVal\" (input)=\"currentPage = 1; update()\"\r\n              class=\"form-control form-control-md d-inline-block w-auto float-sm-right\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <table class=\"table table-hover table-striped mb-0\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Description</th>\r\n            <th>Sort Order</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"tempItems.length==0\">\r\n            <td colspan=\"3\" class=\"font-italic text-center\">No Item available</td>\r\n          </tr>\r\n          <tr *ngFor=\"let item of tempItems\">\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n            <td>{{item}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- Pagination -->\r\n      <div class=\"card-body py-0\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm text-sm-left text-center pt-3\">\r\n            <span class=\"text-muted\" *ngIf=\"totalItems\">Page {{ currentPage }} of {{ totalPages }}</span>\r\n          </div>\r\n          <div class=\"col-sm pt-3\">\r\n            <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"perPage\" [(page)]=\"currentPage\"\r\n              (pageChange)=\"update()\" size=\"sm\" class=\"d-flex justify-content-center justify-content-sm-end m-0\">\r\n            </ngb-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- / Pagination -->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/basic-entry.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/basic-entry.module.ts ***!
  \*********************************************************************/
/*! exports provided: BasicEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicEntryModule", function() { return BasicEntryModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _basic_entry_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-entry-routing.module */ "./src/app/home/system-setup/basic-entry/basic-entry-routing.module.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department/department.component */ "./src/app/home/system-setup/basic-entry/department/department.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emp_info_emp_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emp-info/emp-info.component */ "./src/app/home/system-setup/basic-entry/emp-info/emp-info.component.ts");
/* harmony import */ var _designation_designation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./designation/designation.component */ "./src/app/home/system-setup/basic-entry/designation/designation.component.ts");
/* harmony import */ var _blood_group_blood_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blood-group/blood-group.component */ "./src/app/home/system-setup/basic-entry/blood-group/blood-group.component.ts");
/* harmony import */ var _nationality_nationality_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nationality/nationality.component */ "./src/app/home/system-setup/basic-entry/nationality/nationality.component.ts");
/* harmony import */ var _job_type_job_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./job-type/job-type.component */ "./src/app/home/system-setup/basic-entry/job-type/job-type.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/home/system-setup/basic-entry/branch/branch.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./section/section.component */ "./src/app/home/system-setup/basic-entry/section/section.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./location/location.component */ "./src/app/home/system-setup/basic-entry/location/location.component.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./unit/unit.component */ "./src/app/home/system-setup/basic-entry/unit/unit.component.ts");
/* harmony import */ var _gender_gender_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gender/gender.component */ "./src/app/home/system-setup/basic-entry/gender/gender.component.ts");
/* harmony import */ var _religion_religion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./religion/religion.component */ "./src/app/home/system-setup/basic-entry/religion/religion.component.ts");
/* harmony import */ var _bank_bank_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bank/bank.component */ "./src/app/home/system-setup/basic-entry/bank/bank.component.ts");
/* harmony import */ var _institute_institute_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./institute/institute.component */ "./src/app/home/system-setup/basic-entry/institute/institute.component.ts");
/* harmony import */ var _occupation_occupation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./occupation/occupation.component */ "./src/app/home/system-setup/basic-entry/occupation/occupation.component.ts");
/* harmony import */ var _education_level_education_level_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./education-level/education-level.component */ "./src/app/home/system-setup/basic-entry/education-level/education-level.component.ts");
/* harmony import */ var _passing_year_passing_year_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./passing-year/passing-year.component */ "./src/app/home/system-setup/basic-entry/passing-year/passing-year.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./project/project.component */ "./src/app/home/system-setup/basic-entry/project/project.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./result/result.component */ "./src/app/home/system-setup/basic-entry/result/result.component.ts");
/* harmony import */ var _training_country_training_country_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./training-country/training-country.component */ "./src/app/home/system-setup/basic-entry/training-country/training-country.component.ts");
/* harmony import */ var _training_institute_training_institute_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./training-institute/training-institute.component */ "./src/app/home/system-setup/basic-entry/training-institute/training-institute.component.ts");
/* harmony import */ var _training_nature_training_nature_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./training-nature/training-nature.component */ "./src/app/home/system-setup/basic-entry/training-nature/training-nature.component.ts");
/* harmony import */ var _training_sponsor_by_training_sponsor_by_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./training-sponsor-by/training-sponsor-by.component */ "./src/app/home/system-setup/basic-entry/training-sponsor-by/training-sponsor-by.component.ts");
/* harmony import */ var _training_type_training_type_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./training-type/training-type.component */ "./src/app/home/system-setup/basic-entry/training-type/training-type.component.ts");
/* harmony import */ var _signatory_signatory_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./signatory/signatory.component */ "./src/app/home/system-setup/basic-entry/signatory/signatory.component.ts");
/* harmony import */ var _misconduct_misconduct_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./misconduct/misconduct.component */ "./src/app/home/system-setup/basic-entry/misconduct/misconduct.component.ts");
/* harmony import */ var _department_gl_department_gl_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./department-gl/department-gl.component */ "./src/app/home/system-setup/basic-entry/department-gl/department-gl.component.ts");
/* harmony import */ var _punishment_punishment_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./punishment/punishment.component */ "./src/app/home/system-setup/basic-entry/punishment/punishment.component.ts");
/* harmony import */ var _prefix_prefix_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./prefix/prefix.component */ "./src/app/home/system-setup/basic-entry/prefix/prefix.component.ts");
/* harmony import */ var _suffix_suffix_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./suffix/suffix.component */ "./src/app/home/system-setup/basic-entry/suffix/suffix.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./country/country.component */ "./src/app/home/system-setup/basic-entry/country/country.component.ts");
/* harmony import */ var _education_board_education_board_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./education-board/education-board.component */ "./src/app/home/system-setup/basic-entry/education-board/education-board.component.ts");
/* harmony import */ var _publication_type_publication_type_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./publication-type/publication-type.component */ "./src/app/home/system-setup/basic-entry/publication-type/publication-type.component.ts");
/* harmony import */ var _experience_type_experience_type_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./experience-type/experience-type.component */ "./src/app/home/system-setup/basic-entry/experience-type/experience-type.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var BasicEntryModule = /** @class */ (function () {
    function BasicEntryModule() {
    }
    BasicEntryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _emp_info_emp_info_component__WEBPACK_IMPORTED_MODULE_6__["EmpInfoComponent"],
                _department_department_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentComponent"],
                _department_gl_department_gl_component__WEBPACK_IMPORTED_MODULE_31__["DepartmentGlComponent"],
                _section_section_component__WEBPACK_IMPORTED_MODULE_12__["SectionComponent"],
                _location_location_component__WEBPACK_IMPORTED_MODULE_13__["LocationComponent"],
                _country_country_component__WEBPACK_IMPORTED_MODULE_35__["CountryComponent"],
                _nationality_nationality_component__WEBPACK_IMPORTED_MODULE_9__["NationalityComponent"],
                _gender_gender_component__WEBPACK_IMPORTED_MODULE_15__["GenderComponent"],
                _religion_religion_component__WEBPACK_IMPORTED_MODULE_16__["ReligionComponent"],
                _blood_group_blood_group_component__WEBPACK_IMPORTED_MODULE_8__["BloodGroupComponent"],
                _education_level_education_level_component__WEBPACK_IMPORTED_MODULE_20__["EducationLevelComponent"],
                _education_board_education_board_component__WEBPACK_IMPORTED_MODULE_36__["EducationBoardComponent"],
                _institute_institute_component__WEBPACK_IMPORTED_MODULE_18__["InstituteComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_23__["ResultComponent"],
                _passing_year_passing_year_component__WEBPACK_IMPORTED_MODULE_21__["PassingYearComponent"],
                _training_type_training_type_component__WEBPACK_IMPORTED_MODULE_28__["TrainingTypeComponent"],
                _training_country_training_country_component__WEBPACK_IMPORTED_MODULE_24__["TrainingCountryComponent"],
                _training_institute_training_institute_component__WEBPACK_IMPORTED_MODULE_25__["TrainingInstituteComponent"],
                _training_nature_training_nature_component__WEBPACK_IMPORTED_MODULE_26__["TrainingNatureComponent"],
                _training_sponsor_by_training_sponsor_by_component__WEBPACK_IMPORTED_MODULE_27__["TrainingSponsorByComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_22__["ProjectComponent"],
                _job_type_job_type_component__WEBPACK_IMPORTED_MODULE_10__["JobTypeComponent"],
                _designation_designation_component__WEBPACK_IMPORTED_MODULE_7__["DesignationComponent"],
                _occupation_occupation_component__WEBPACK_IMPORTED_MODULE_19__["OccupationComponent"],
                _experience_type_experience_type_component__WEBPACK_IMPORTED_MODULE_38__["ExperienceTypeComponent"],
                _punishment_punishment_component__WEBPACK_IMPORTED_MODULE_32__["PunishmentComponent"],
                _bank_bank_component__WEBPACK_IMPORTED_MODULE_17__["BankComponent"],
                _branch_branch_component__WEBPACK_IMPORTED_MODULE_11__["BranchComponent"],
                _unit_unit_component__WEBPACK_IMPORTED_MODULE_14__["UnitComponent"],
                _signatory_signatory_component__WEBPACK_IMPORTED_MODULE_29__["SignatoryComponent"],
                _misconduct_misconduct_component__WEBPACK_IMPORTED_MODULE_30__["MisconductComponent"],
                _prefix_prefix_component__WEBPACK_IMPORTED_MODULE_33__["PrefixComponent"],
                _suffix_suffix_component__WEBPACK_IMPORTED_MODULE_34__["SuffixComponent"],
                _publication_type_publication_type_component__WEBPACK_IMPORTED_MODULE_37__["PublicationTypeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _basic_entry_routing_module__WEBPACK_IMPORTED_MODULE_1__["BasicEntryRoutingModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__["NgbModule"]
            ]
        })
    ], BasicEntryModule);
    return BasicEntryModule;
}());



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/blood-group/blood-group.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/blood-group/blood-group.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2Jsb29kLWdyb3VwL2Jsb29kLWdyb3VwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/blood-group/blood-group.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/blood-group/blood-group.component.ts ***!
  \************************************************************************************/
/*! exports provided: BloodGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodGroupComponent", function() { return BloodGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var BloodGroupComponent = /** @class */ (function (_super) {
    __extends(BloodGroupComponent, _super);
    function BloodGroupComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Blood Group";
        return _this;
    }
    BloodGroupComponent.prototype.ngOnInit = function () {
    };
    BloodGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blood-group',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./blood-group.component.scss */ "./src/app/home/system-setup/basic-entry/blood-group/blood-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BloodGroupComponent);
    return BloodGroupComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/branch/branch.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/branch/branch.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2JyYW5jaC9icmFuY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/branch/branch.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/branch/branch.component.ts ***!
  \**************************************************************************/
/*! exports provided: BranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchComponent", function() { return BranchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var BranchComponent = /** @class */ (function (_super) {
    __extends(BranchComponent, _super);
    function BranchComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Branch";
        return _this;
    }
    BranchComponent.prototype.ngOnInit = function () {
    };
    BranchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./branch.component.scss */ "./src/app/home/system-setup/basic-entry/branch/branch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BranchComponent);
    return BranchComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/country/country.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/country/country.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2NvdW50cnkvY291bnRyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/country/country.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/country/country.component.ts ***!
  \****************************************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var CountryComponent = /** @class */ (function (_super) {
    __extends(CountryComponent, _super);
    function CountryComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Country";
        return _this;
    }
    CountryComponent.prototype.ngOnInit = function () {
    };
    CountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./country.component.scss */ "./src/app/home/system-setup/basic-entry/country/country.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CountryComponent);
    return CountryComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/department-gl/department-gl.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/department-gl/department-gl.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2RlcGFydG1lbnQtZ2wvZGVwYXJ0bWVudC1nbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/department-gl/department-gl.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/department-gl/department-gl.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DepartmentGlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentGlComponent", function() { return DepartmentGlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var DepartmentGlComponent = /** @class */ (function (_super) {
    __extends(DepartmentGlComponent, _super);
    function DepartmentGlComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Department GL";
        return _this;
    }
    DepartmentGlComponent.prototype.ngOnInit = function () {
    };
    DepartmentGlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department-gl',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./department-gl.component.scss */ "./src/app/home/system-setup/basic-entry/department-gl/department-gl.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentGlComponent);
    return DepartmentGlComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/department/department.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/department/department.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2RlcGFydG1lbnQvZGVwYXJ0bWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/department/department.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/department/department.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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



var DepartmentComponent = /** @class */ (function (_super) {
    __extends(DepartmentComponent, _super);
    function DepartmentComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Department";
        return _this;
    }
    DepartmentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], DepartmentComponent.prototype, "table", void 0);
    DepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./department.component.scss */ "./src/app/home/system-setup/basic-entry/department/department.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentComponent);
    return DepartmentComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_2__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/designation/designation.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/designation/designation.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2Rlc2lnbmF0aW9uL2Rlc2lnbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/designation/designation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/designation/designation.component.ts ***!
  \************************************************************************************/
/*! exports provided: DesignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationComponent", function() { return DesignationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var DesignationComponent = /** @class */ (function (_super) {
    __extends(DesignationComponent, _super);
    function DesignationComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Designation";
        return _this;
    }
    DesignationComponent.prototype.ngOnInit = function () {
    };
    DesignationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-designation',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./designation.component.scss */ "./src/app/home/system-setup/basic-entry/designation/designation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DesignationComponent);
    return DesignationComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/education-board/education-board.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/education-board/education-board.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2VkdWNhdGlvbi1ib2FyZC9lZHVjYXRpb24tYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/education-board/education-board.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/education-board/education-board.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EducationBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationBoardComponent", function() { return EducationBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var EducationBoardComponent = /** @class */ (function (_super) {
    __extends(EducationBoardComponent, _super);
    function EducationBoardComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Education Board";
        return _this;
    }
    EducationBoardComponent.prototype.ngOnInit = function () {
    };
    EducationBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education-board',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./education-board.component.scss */ "./src/app/home/system-setup/basic-entry/education-board/education-board.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationBoardComponent);
    return EducationBoardComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/education-level/education-level.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/education-level/education-level.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2VkdWNhdGlvbi1sZXZlbC9lZHVjYXRpb24tbGV2ZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/education-level/education-level.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/education-level/education-level.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EducationLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationLevelComponent", function() { return EducationLevelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var EducationLevelComponent = /** @class */ (function (_super) {
    __extends(EducationLevelComponent, _super);
    function EducationLevelComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Education Level";
        return _this;
    }
    EducationLevelComponent.prototype.ngOnInit = function () {
        this.tempItems = [1, 2, 3];
    };
    EducationLevelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education-level',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./education-level.component.scss */ "./src/app/home/system-setup/basic-entry/education-level/education-level.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationLevelComponent);
    return EducationLevelComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/emp-info/emp-info.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/emp-info/emp-info.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2VtcC1pbmZvL2VtcC1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/emp-info/emp-info.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/emp-info/emp-info.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmpInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpInfoComponent", function() { return EmpInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var EmpInfoComponent = /** @class */ (function (_super) {
    __extends(EmpInfoComponent, _super);
    function EmpInfoComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Employee Basic Info Entry";
        return _this;
    }
    EmpInfoComponent.prototype.ngOnInit = function () {
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.update();
        this.filterVal;
    };
    EmpInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-info',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./emp-info.component.scss */ "./src/app/home/system-setup/basic-entry/emp-info/emp-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpInfoComponent);
    return EmpInfoComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/experience-type/experience-type.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/experience-type/experience-type.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2V4cGVyaWVuY2UtdHlwZS9leHBlcmllbmNlLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/experience-type/experience-type.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/experience-type/experience-type.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ExperienceTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceTypeComponent", function() { return ExperienceTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var ExperienceTypeComponent = /** @class */ (function (_super) {
    __extends(ExperienceTypeComponent, _super);
    function ExperienceTypeComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Experience Type";
        return _this;
    }
    ExperienceTypeComponent.prototype.ngOnInit = function () {
    };
    ExperienceTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience-type',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./experience-type.component.scss */ "./src/app/home/system-setup/basic-entry/experience-type/experience-type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceTypeComponent);
    return ExperienceTypeComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/gender/gender.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/gender/gender.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2dlbmRlci9nZW5kZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/gender/gender.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/gender/gender.component.ts ***!
  \**************************************************************************/
/*! exports provided: GenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderComponent", function() { return GenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var GenderComponent = /** @class */ (function (_super) {
    __extends(GenderComponent, _super);
    function GenderComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Gender";
        return _this;
    }
    GenderComponent.prototype.ngOnInit = function () {
    };
    GenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gender',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./gender.component.scss */ "./src/app/home/system-setup/basic-entry/gender/gender.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GenderComponent);
    return GenderComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/institute/institute.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/institute/institute.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2luc3RpdHV0ZS9pbnN0aXR1dGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/institute/institute.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/institute/institute.component.ts ***!
  \********************************************************************************/
/*! exports provided: InstituteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteComponent", function() { return InstituteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var InstituteComponent = /** @class */ (function (_super) {
    __extends(InstituteComponent, _super);
    function InstituteComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Institute";
        return _this;
    }
    InstituteComponent.prototype.ngOnInit = function () {
    };
    InstituteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-institute',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./institute.component.scss */ "./src/app/home/system-setup/basic-entry/institute/institute.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InstituteComponent);
    return InstituteComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/job-type/job-type.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/job-type/job-type.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2pvYi10eXBlL2pvYi10eXBlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/job-type/job-type.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/job-type/job-type.component.ts ***!
  \******************************************************************************/
/*! exports provided: JobTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobTypeComponent", function() { return JobTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var JobTypeComponent = /** @class */ (function (_super) {
    __extends(JobTypeComponent, _super);
    function JobTypeComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Job Type";
        return _this;
    }
    JobTypeComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    JobTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-type',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./job-type.component.scss */ "./src/app/home/system-setup/basic-entry/job-type/job-type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JobTypeComponent);
    return JobTypeComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/location/location.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/location/location.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/location/location.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/location/location.component.ts ***!
  \******************************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var LocationComponent = /** @class */ (function (_super) {
    __extends(LocationComponent, _super);
    function LocationComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Location";
        return _this;
    }
    LocationComponent.prototype.ngOnInit = function () {
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./location.component.scss */ "./src/app/home/system-setup/basic-entry/location/location.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/misconduct/misconduct.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/misconduct/misconduct.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L21pc2NvbmR1Y3QvbWlzY29uZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/misconduct/misconduct.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/misconduct/misconduct.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MisconductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisconductComponent", function() { return MisconductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var MisconductComponent = /** @class */ (function (_super) {
    __extends(MisconductComponent, _super);
    function MisconductComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Misconduct";
        return _this;
    }
    MisconductComponent.prototype.ngOnInit = function () {
    };
    MisconductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-misconduct',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./misconduct.component.scss */ "./src/app/home/system-setup/basic-entry/misconduct/misconduct.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MisconductComponent);
    return MisconductComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/nationality/nationality.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/nationality/nationality.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L25hdGlvbmFsaXR5L25hdGlvbmFsaXR5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/nationality/nationality.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/nationality/nationality.component.ts ***!
  \************************************************************************************/
/*! exports provided: NationalityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalityComponent", function() { return NationalityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var NationalityComponent = /** @class */ (function (_super) {
    __extends(NationalityComponent, _super);
    function NationalityComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Nationality";
        return _this;
    }
    NationalityComponent.prototype.ngOnInit = function () {
    };
    NationalityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nationality',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./nationality.component.scss */ "./src/app/home/system-setup/basic-entry/nationality/nationality.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NationalityComponent);
    return NationalityComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/occupation/occupation.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/occupation/occupation.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L29jY3VwYXRpb24vb2NjdXBhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/occupation/occupation.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/occupation/occupation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OccupationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupationComponent", function() { return OccupationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var OccupationComponent = /** @class */ (function (_super) {
    __extends(OccupationComponent, _super);
    function OccupationComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Occupation";
        return _this;
    }
    OccupationComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    OccupationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-occupation',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./occupation.component.scss */ "./src/app/home/system-setup/basic-entry/occupation/occupation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OccupationComponent);
    return OccupationComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/passing-year/passing-year.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/passing-year/passing-year.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3Bhc3NpbmcteWVhci9wYXNzaW5nLXllYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/passing-year/passing-year.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/passing-year/passing-year.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PassingYearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassingYearComponent", function() { return PassingYearComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var PassingYearComponent = /** @class */ (function (_super) {
    __extends(PassingYearComponent, _super);
    function PassingYearComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Passing year";
        return _this;
    }
    PassingYearComponent.prototype.ngOnInit = function () {
    };
    PassingYearComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passing-year',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./passing-year.component.scss */ "./src/app/home/system-setup/basic-entry/passing-year/passing-year.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PassingYearComponent);
    return PassingYearComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/prefix/prefix.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/prefix/prefix.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3ByZWZpeC9wcmVmaXguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/prefix/prefix.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/prefix/prefix.component.ts ***!
  \**************************************************************************/
/*! exports provided: PrefixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixComponent", function() { return PrefixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var PrefixComponent = /** @class */ (function (_super) {
    __extends(PrefixComponent, _super);
    function PrefixComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Prefix";
        return _this;
    }
    PrefixComponent.prototype.ngOnInit = function () {
    };
    PrefixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prefix',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./prefix.component.scss */ "./src/app/home/system-setup/basic-entry/prefix/prefix.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrefixComponent);
    return PrefixComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/project/project.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/project/project.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/project/project.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/project/project.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var ProjectComponent = /** @class */ (function (_super) {
    __extends(ProjectComponent, _super);
    function ProjectComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Project";
        return _this;
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/home/system-setup/basic-entry/project/project.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/publication-type/publication-type.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/publication-type/publication-type.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3B1YmxpY2F0aW9uLXR5cGUvcHVibGljYXRpb24tdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/publication-type/publication-type.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/publication-type/publication-type.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PublicationTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationTypeComponent", function() { return PublicationTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var PublicationTypeComponent = /** @class */ (function (_super) {
    __extends(PublicationTypeComponent, _super);
    function PublicationTypeComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Publication Type";
        return _this;
    }
    PublicationTypeComponent.prototype.ngOnInit = function () {
    };
    PublicationTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publication-type',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./publication-type.component.scss */ "./src/app/home/system-setup/basic-entry/publication-type/publication-type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicationTypeComponent);
    return PublicationTypeComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/punishment/punishment.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/punishment/punishment.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3B1bmlzaG1lbnQvcHVuaXNobWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/punishment/punishment.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/punishment/punishment.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PunishmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PunishmentComponent", function() { return PunishmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var PunishmentComponent = /** @class */ (function (_super) {
    __extends(PunishmentComponent, _super);
    function PunishmentComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Punishment";
        return _this;
    }
    PunishmentComponent.prototype.ngOnInit = function () {
    };
    PunishmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-punishment',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./punishment.component.scss */ "./src/app/home/system-setup/basic-entry/punishment/punishment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PunishmentComponent);
    return PunishmentComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/religion/religion.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/religion/religion.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3JlbGlnaW9uL3JlbGlnaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/religion/religion.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/religion/religion.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReligionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReligionComponent", function() { return ReligionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var ReligionComponent = /** @class */ (function (_super) {
    __extends(ReligionComponent, _super);
    function ReligionComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Religion";
        return _this;
    }
    ReligionComponent.prototype.ngOnInit = function () {
    };
    ReligionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-religion',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./religion.component.scss */ "./src/app/home/system-setup/basic-entry/religion/religion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReligionComponent);
    return ReligionComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/result/result.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/result/result.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/result/result.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/result/result.component.ts ***!
  \**************************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var ResultComponent = /** @class */ (function (_super) {
    __extends(ResultComponent, _super);
    function ResultComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Result";
        return _this;
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/home/system-setup/basic-entry/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultComponent);
    return ResultComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/section/section.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/section/section.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3NlY3Rpb24vc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/section/section.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/section/section.component.ts ***!
  \****************************************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var SectionComponent = /** @class */ (function (_super) {
    __extends(SectionComponent, _super);
    function SectionComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Section";
        return _this;
    }
    SectionComponent.prototype.ngOnInit = function () {
    };
    SectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./section.component.scss */ "./src/app/home/system-setup/basic-entry/section/section.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionComponent);
    return SectionComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/signatory/signatory.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/signatory/signatory.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3NpZ25hdG9yeS9zaWduYXRvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/signatory/signatory.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/signatory/signatory.component.ts ***!
  \********************************************************************************/
/*! exports provided: SignatoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatoryComponent", function() { return SignatoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var SignatoryComponent = /** @class */ (function (_super) {
    __extends(SignatoryComponent, _super);
    function SignatoryComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Signatory";
        return _this;
    }
    SignatoryComponent.prototype.ngOnInit = function () {
    };
    SignatoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signatory',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./signatory.component.scss */ "./src/app/home/system-setup/basic-entry/signatory/signatory.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignatoryComponent);
    return SignatoryComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/suffix/suffix.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/suffix/suffix.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3N1ZmZpeC9zdWZmaXguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/suffix/suffix.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/suffix/suffix.component.ts ***!
  \**************************************************************************/
/*! exports provided: SuffixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuffixComponent", function() { return SuffixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var SuffixComponent = /** @class */ (function (_super) {
    __extends(SuffixComponent, _super);
    function SuffixComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Suffix";
        return _this;
    }
    SuffixComponent.prototype.ngOnInit = function () {
    };
    SuffixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suffix',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./suffix.component.scss */ "./src/app/home/system-setup/basic-entry/suffix/suffix.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuffixComponent);
    return SuffixComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/training-country/training-country.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/training-country/training-country.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3RyYWluaW5nLWNvdW50cnkvdHJhaW5pbmctY291bnRyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/training-country/training-country.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/training-country/training-country.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TrainingCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingCountryComponent", function() { return TrainingCountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var TrainingCountryComponent = /** @class */ (function (_super) {
    __extends(TrainingCountryComponent, _super);
    function TrainingCountryComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Training Country";
        return _this;
    }
    TrainingCountryComponent.prototype.ngOnInit = function () {
    };
    TrainingCountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training-country',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./training-country.component.scss */ "./src/app/home/system-setup/basic-entry/training-country/training-country.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingCountryComponent);
    return TrainingCountryComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/training-institute/training-institute.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/training-institute/training-institute.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3RyYWluaW5nLWluc3RpdHV0ZS90cmFpbmluZy1pbnN0aXR1dGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/training-institute/training-institute.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/training-institute/training-institute.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TrainingInstituteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingInstituteComponent", function() { return TrainingInstituteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var TrainingInstituteComponent = /** @class */ (function (_super) {
    __extends(TrainingInstituteComponent, _super);
    function TrainingInstituteComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Training Institute";
        return _this;
    }
    TrainingInstituteComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    TrainingInstituteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training-institute',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./training-institute.component.scss */ "./src/app/home/system-setup/basic-entry/training-institute/training-institute.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingInstituteComponent);
    return TrainingInstituteComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/training-nature/training-nature.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/training-nature/training-nature.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3RyYWluaW5nLW5hdHVyZS90cmFpbmluZy1uYXR1cmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/training-nature/training-nature.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/training-nature/training-nature.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TrainingNatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingNatureComponent", function() { return TrainingNatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var TrainingNatureComponent = /** @class */ (function (_super) {
    __extends(TrainingNatureComponent, _super);
    function TrainingNatureComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Training Nature";
        return _this;
    }
    TrainingNatureComponent.prototype.ngOnInit = function () {
    };
    TrainingNatureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training-nature',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./training-nature.component.scss */ "./src/app/home/system-setup/basic-entry/training-nature/training-nature.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingNatureComponent);
    return TrainingNatureComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/training-sponsor-by/training-sponsor-by.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/training-sponsor-by/training-sponsor-by.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3RyYWluaW5nLXNwb25zb3ItYnkvdHJhaW5pbmctc3BvbnNvci1ieS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/training-sponsor-by/training-sponsor-by.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/training-sponsor-by/training-sponsor-by.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TrainingSponsorByComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingSponsorByComponent", function() { return TrainingSponsorByComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var TrainingSponsorByComponent = /** @class */ (function (_super) {
    __extends(TrainingSponsorByComponent, _super);
    function TrainingSponsorByComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Training Sponsor By";
        return _this;
    }
    TrainingSponsorByComponent.prototype.ngOnInit = function () {
        this.items = [];
    };
    TrainingSponsorByComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training-sponsor-by',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./training-sponsor-by.component.scss */ "./src/app/home/system-setup/basic-entry/training-sponsor-by/training-sponsor-by.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingSponsorByComponent);
    return TrainingSponsorByComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/training-type/training-type.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/training-type/training-type.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3RyYWluaW5nLXR5cGUvdHJhaW5pbmctdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/training-type/training-type.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/training-type/training-type.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TrainingTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingTypeComponent", function() { return TrainingTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var TrainingTypeComponent = /** @class */ (function (_super) {
    __extends(TrainingTypeComponent, _super);
    function TrainingTypeComponent() {
        var _this = _super.call(this) || this;
        _this.title = " Training Type";
        return _this;
    }
    TrainingTypeComponent.prototype.ngOnInit = function () {
    };
    TrainingTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training-type',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./training-type.component.scss */ "./src/app/home/system-setup/basic-entry/training-type/training-type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingTypeComponent);
    return TrainingTypeComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/unit/unit.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/unit/unit.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3lzdGVtLXNldHVwL2Jhc2ljLWVudHJ5L3VuaXQvdW5pdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/system-setup/basic-entry/unit/unit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/system-setup/basic-entry/unit/unit.component.ts ***!
  \**********************************************************************/
/*! exports provided: UnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitComponent", function() { return UnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/paginate */ "./src/app/shared/paginate.ts");
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


var UnitComponent = /** @class */ (function (_super) {
    __extends(UnitComponent, _super);
    function UnitComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Unit";
        return _this;
    }
    UnitComponent.prototype.ngOnInit = function () {
    };
    UnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unit',
            template: __webpack_require__(/*! ../basic-entry.component.html */ "./src/app/home/system-setup/basic-entry/basic-entry.component.html"),
            styles: [__webpack_require__(/*! ./unit.component.scss */ "./src/app/home/system-setup/basic-entry/unit/unit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UnitComponent);
    return UnitComponent;
}(_shared_paginate__WEBPACK_IMPORTED_MODULE_1__["Pagination"]));



/***/ })

}]);
//# sourceMappingURL=home-system-setup-basic-entry-basic-entry-module.js.map