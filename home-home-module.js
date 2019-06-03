(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"font-weight-bold py-3 mb-4\">\r\n    Dashboard\r\n    <div class=\"text-muted text-tiny mt-1\"><small class=\"font-weight-normal\">Today is Tuesday, 8 February 2018</small></div>\r\n  </h4>\r\n  \r\n  <!-- Counters -->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-xl-3\">\r\n  \r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-body\">\r\n          <div class=\"d-flex align-items-center\">\r\n            <div class=\"lnr lnr-cart display-4 text-success\"></div>\r\n            <div class=\"ml-3\">\r\n              <div class=\"text-muted small\">Monthly sales</div>\r\n              <div class=\"text-large\">2362</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n    <div class=\"col-sm-6 col-xl-3\">\r\n  \r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-body\">\r\n          <div class=\"d-flex align-items-center\">\r\n            <div class=\"lnr lnr-earth display-4 text-info\"></div>\r\n            <div class=\"ml-3\">\r\n              <div class=\"text-muted small\">Monthly visits</div>\r\n              <div class=\"text-large\">687,123</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n    <div class=\"col-sm-6 col-xl-3\">\r\n  \r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-body\">\r\n          <div class=\"d-flex align-items-center\">\r\n            <div class=\"lnr lnr-gift display-4 text-danger\"></div>\r\n            <div class=\"ml-3\">\r\n              <div class=\"text-muted small\">Products</div>\r\n              <div class=\"text-large\">985</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n    <div class=\"col-sm-6 col-xl-3\">\r\n  \r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-body\">\r\n          <div class=\"d-flex align-items-center\">\r\n            <div class=\"lnr lnr-users display-4 text-warning\"></div>\r\n            <div class=\"ml-3\">\r\n              <div class=\"text-muted small\">Users</div>\r\n              <div class=\"text-large\">105,652</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>\r\n  <!-- / Counters -->\r\n\r\n\r\n   <div class=\"row\">  \r\n  <div class=\"col-md-3\">\r\n  <!-- Tasks -->\r\n          <div class=\"card mb-4\">\r\n            <h6 class=\"card-header with-elements\">\r\n              <div class=\"card-header-title\">Tasks</div>\r\n              <div class=\"card-header-elements ml-auto\">\r\n                <button type=\"button\" class=\"btn btn-default btn-xs md-btn-flat\">Show more</button>\r\n              </div>\r\n            </h6>\r\n            <div [perfectScrollbar] style=\"height: 234px\">\r\n              <div class=\"card-body\">\r\n                <p class=\"text-muted small\">Today</p>\r\n                <div class=\"custom-controls-stacked\">\r\n                  <label class=\"ui-todo-item custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-label\">Buy products</span>\r\n                    <span class=\"ui-todo-badge badge badge-outline-default font-weight-normal ml-2\">58 mins left</span>\r\n                  </label>\r\n                  <label class=\"ui-todo-item custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-label\">Reply to emails</span>\r\n                  </label>\r\n                  <label class=\"ui-todo-item custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-label\">Write blog post</span>\r\n                    <span class=\"ui-todo-badge badge badge-outline-default font-weight-normal ml-2\">20 hours left</span>\r\n                  </label>\r\n                  <label class=\"ui-todo-item custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked>\r\n                    <span class=\"custom-control-label\">Wash my car</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <hr class=\"m-0\">\r\n              <div class=\"card-body\">\r\n                <p class=\"text-muted small\">Tomorrow</p>\r\n                <div class=\"custom-controls-stacked\">\r\n                  <label class=\"ui-todo-item custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-label\">Buy antivirus</span>\r\n                  </label>\r\n                  <label class=\"ui-todo-item custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-label\">Jane's Happy Birthday</span>\r\n                  </label>\r\n                  <label class=\"ui-todo-item custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-label\">Call mom</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Type your task\">\r\n                <div class=\"input-group-append\">\r\n                  <button type=\"button\" class=\"btn btn-primary\">Add</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- / Tasks -->\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n              <!-- Traffic sources -->\r\n              <div class=\"card mb-4\">\r\n                  <h6 class=\"card-header with-elements\">\r\n                    <div class=\"card-header-title\">Accounts Receivable</div>\r\n                    <div class=\"card-header-elements ml-auto\">\r\n                      <button type=\"button\" class=\"btn btn-default btn-xs md-btn-flat\">More</button>\r\n                    </div>\r\n                  </h6>\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table card-table m-0\">\r\n                      <tbody >\r\n                          <div [perfectScrollbar] style=\"height: 210px\">\r\n                        <tr>\r\n                          <td class=\"border-top-0 text-nowrap align-middle\">\r\n                            <a href=\"http://www.google.com\" class=\"text-dark\">www.google.com</a>\r\n                          </td>\r\n                          <td class=\"w-100 border-top-0 align-middle\">\r\n                            <div class=\"progress\" style=\"height: 4px;\">\r\n                              <div class=\"progress-bar\" style=\"width: 29.77%;\"></div>\r\n                            </div>\r\n                          </td>\r\n                          <td class=\"border-top-0 text-nowrap align-middle\">\r\n                            11,963&nbsp;\r\n                            <span class=\"text-muted small\">29.77%</span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td class=\"text-nowrap align-middle\">\r\n                            <a href=\"http://www.google.de\" class=\"text-dark\">www.google.de</a>\r\n                          </td>\r\n                          <td class=\"align-middle\">\r\n                            <div class=\"progress\" style=\"height: 4px;\">\r\n                              <div class=\"progress-bar bg-success\" style=\"width: 28.39%;\"></div>\r\n                            </div>\r\n                          </td>\r\n                          <td class=\"text-nowrap align-middle\">\r\n                            11,963&nbsp;\r\n                            <span class=\"text-muted small\">28.39%</span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td class=\"text-nowrap align-middle\">\r\n                            <a href=\"http://www.twitter.com\" class=\"text-dark\">www.twitter.com</a>\r\n                          </td>\r\n                          <td class=\"align-middle\">\r\n                            <div class=\"progress\" style=\"height: 4px;\">\r\n                              <div class=\"progress-bar bg-info\" style=\"width: 23.65%;\"></div>\r\n                            </div>\r\n                          </td>\r\n                          <td class=\"text-nowrap align-middle\">\r\n                            9,965&nbsp;\r\n                            <span class=\"text-muted small\">23.65%</span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td class=\"text-nowrap align-middle\">\r\n                            <a href=\"http://www.facebook.com\" class=\"text-dark\">www.facebook.com</a>\r\n                          </td>\r\n                          <td class=\"align-middle\">\r\n                            <div class=\"progress\" style=\"height: 4px;\">\r\n                              <div class=\"progress-bar bg-warning\" style=\"width: 10.02%;\"></div>\r\n                            </div>\r\n                          </td>\r\n                          <td class=\"text-nowrap align-middle\">\r\n                            4,223&nbsp;\r\n                            <span class=\"text-muted small\">10.02%</span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td class=\"text-nowrap align-middle\">\r\n                            <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                          </td>\r\n                          <td class=\"align-middle\">\r\n                            <div class=\"progress\" style=\"height: 4px;\">\r\n                              <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                            </div>\r\n                          </td>\r\n                          <td class=\"text-nowrap align-middle\">\r\n                            3,437&nbsp;\r\n                            <span class=\"text-muted small\">8.15%</span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-nowrap align-middle\">\r\n                              <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                            </td>\r\n                            <td class=\"align-middle\">\r\n                              <div class=\"progress\" style=\"height: 4px;\">\r\n                                <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                              </div>\r\n                            </td>\r\n                            <td class=\"text-nowrap align-middle\">\r\n                              3,437&nbsp;\r\n                              <span class=\"text-muted small\">8.15%</span>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                              <td class=\"text-nowrap align-middle\">\r\n                                <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                              </td>\r\n                              <td class=\"align-middle\">\r\n                                <div class=\"progress\" style=\"height: 4px;\">\r\n                                  <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                                </div>\r\n                              </td>\r\n                              <td class=\"text-nowrap align-middle\">\r\n                                3,437&nbsp;\r\n                                <span class=\"text-muted small\">8.15%</span>\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-nowrap align-middle\">\r\n                                  <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                                </td>\r\n                                <td class=\"align-middle\">\r\n                                  <div class=\"progress\" style=\"height: 4px;\">\r\n                                    <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                                  </div>\r\n                                </td>\r\n                                <td class=\"text-nowrap align-middle\">\r\n                                  3,437&nbsp;\r\n                                  <span class=\"text-muted small\">8.15%</span>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td class=\"text-nowrap align-middle\">\r\n                                    <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                                  </td>\r\n                                  <td class=\"align-middle\">\r\n                                    <div class=\"progress\" style=\"height: 4px;\">\r\n                                      <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                                    </div>\r\n                                  </td>\r\n                                  <td class=\"text-nowrap align-middle\">\r\n                                    3,437&nbsp;\r\n                                    <span class=\"text-muted small\">8.15%</span>\r\n                                  </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-nowrap align-middle\">\r\n                                      <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                                    </td>\r\n                                    <td class=\"align-middle\">\r\n                                      <div class=\"progress\" style=\"height: 4px;\">\r\n                                        <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                                      </div>\r\n                                    </td>\r\n                                    <td class=\"text-nowrap align-middle\">\r\n                                      3,437&nbsp;\r\n                                      <span class=\"text-muted small\">8.15%</span>\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                      <td class=\"text-nowrap align-middle\">\r\n                                        <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                                      </td>\r\n                                      <td class=\"align-middle\">\r\n                                        <div class=\"progress\" style=\"height: 4px;\">\r\n                                          <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                                        </div>\r\n                                      </td>\r\n                                      <td class=\"text-nowrap align-middle\">\r\n                                        3,437&nbsp;\r\n                                        <span class=\"text-muted small\">8.15%</span>\r\n                                      </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-nowrap align-middle\">\r\n                                          <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                                        </td>\r\n                                        <td class=\"align-middle\">\r\n                                          <div class=\"progress\" style=\"height: 4px;\">\r\n                                            <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                                          </div>\r\n                                        </td>\r\n                                        <td class=\"text-nowrap align-middle\">\r\n                                          3,437&nbsp;\r\n                                          <span class=\"text-muted small\">8.15%</span>\r\n                                        </td>\r\n                                      </tr>\r\n                                      </div>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <!-- / Traffic sources -->       \r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n            <!-- Traffic sources -->\r\n            <div class=\"card mb-4\">\r\n                <h6 class=\"card-header with-elements\">\r\n                  <div class=\"card-header-title\">Accounts Payable</div>\r\n                  <div class=\"card-header-elements ml-auto\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-xs md-btn-flat\">More</button>\r\n                  </div>\r\n                </h6>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table card-table m-0\">\r\n                    <tbody >\r\n                        <div [perfectScrollbar] style=\"height: 210px\">\r\n                      <tr>\r\n                        <td class=\"border-top-0 text-nowrap align-middle\">\r\n                          <a href=\"http://www.google.com\" class=\"text-dark\">www.google.com</a>\r\n                        </td>\r\n                        <td class=\"w-100 border-top-0 align-middle\">\r\n                          <div class=\"progress\" style=\"height: 4px;\">\r\n                            <div class=\"progress-bar\" style=\"width: 29.77%;\"></div>\r\n                          </div>\r\n                        </td>\r\n                        <td class=\"border-top-0 text-nowrap align-middle\">\r\n                          11,963&nbsp;\r\n                          <span class=\"text-muted small\">29.77%</span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-nowrap align-middle\">\r\n                          <a href=\"http://www.google.de\" class=\"text-dark\">www.google.de</a>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                          <div class=\"progress\" style=\"height: 4px;\">\r\n                            <div class=\"progress-bar bg-success\" style=\"width: 28.39%;\"></div>\r\n                          </div>\r\n                        </td>\r\n                        <td class=\"text-nowrap align-middle\">\r\n                          11,963&nbsp;\r\n                          <span class=\"text-muted small\">28.39%</span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-nowrap align-middle\">\r\n                          <a href=\"http://www.twitter.com\" class=\"text-dark\">www.twitter.com</a>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                          <div class=\"progress\" style=\"height: 4px;\">\r\n                            <div class=\"progress-bar bg-info\" style=\"width: 23.65%;\"></div>\r\n                          </div>\r\n                        </td>\r\n                        <td class=\"text-nowrap align-middle\">\r\n                          9,965&nbsp;\r\n                          <span class=\"text-muted small\">23.65%</span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-nowrap align-middle\">\r\n                          <a href=\"http://www.facebook.com\" class=\"text-dark\">www.facebook.com</a>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                          <div class=\"progress\" style=\"height: 4px;\">\r\n                            <div class=\"progress-bar bg-warning\" style=\"width: 10.02%;\"></div>\r\n                          </div>\r\n                        </td>\r\n                        <td class=\"text-nowrap align-middle\">\r\n                          4,223&nbsp;\r\n                          <span class=\"text-muted small\">10.02%</span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-nowrap align-middle\">\r\n                          <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                          <div class=\"progress\" style=\"height: 4px;\">\r\n                            <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                          </div>\r\n                        </td>\r\n                        <td class=\"text-nowrap align-middle\">\r\n                          3,437&nbsp;\r\n                          <span class=\"text-muted small\">8.15%</span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <td class=\"text-nowrap align-middle\">\r\n                            <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                          </td>\r\n                          <td class=\"align-middle\">\r\n                            <div class=\"progress\" style=\"height: 4px;\">\r\n                              <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                            </div>\r\n                          </td>\r\n                          <td class=\"text-nowrap align-middle\">\r\n                            3,437&nbsp;\r\n                            <span class=\"text-muted small\">8.15%</span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-nowrap align-middle\">\r\n                              <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                            </td>\r\n                            <td class=\"align-middle\">\r\n                              <div class=\"progress\" style=\"height: 4px;\">\r\n                                <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                              </div>\r\n                            </td>\r\n                            <td class=\"text-nowrap align-middle\">\r\n                              3,437&nbsp;\r\n                              <span class=\"text-muted small\">8.15%</span>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                              <td class=\"text-nowrap align-middle\">\r\n                                <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                              </td>\r\n                              <td class=\"align-middle\">\r\n                                <div class=\"progress\" style=\"height: 4px;\">\r\n                                  <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                                </div>\r\n                              </td>\r\n                              <td class=\"text-nowrap align-middle\">\r\n                                3,437&nbsp;\r\n                                <span class=\"text-muted small\">8.15%</span>\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-nowrap align-middle\">\r\n                                  <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                                </td>\r\n                                <td class=\"align-middle\">\r\n                                  <div class=\"progress\" style=\"height: 4px;\">\r\n                                    <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                                  </div>\r\n                                </td>\r\n                                <td class=\"text-nowrap align-middle\">\r\n                                  3,437&nbsp;\r\n                                  <span class=\"text-muted small\">8.15%</span>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td class=\"text-nowrap align-middle\">\r\n                                    <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                                  </td>\r\n                                  <td class=\"align-middle\">\r\n                                    <div class=\"progress\" style=\"height: 4px;\">\r\n                                      <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                                    </div>\r\n                                  </td>\r\n                                  <td class=\"text-nowrap align-middle\">\r\n                                    3,437&nbsp;\r\n                                    <span class=\"text-muted small\">8.15%</span>\r\n                                  </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-nowrap align-middle\">\r\n                                      <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                                    </td>\r\n                                    <td class=\"align-middle\">\r\n                                      <div class=\"progress\" style=\"height: 4px;\">\r\n                                        <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                                      </div>\r\n                                    </td>\r\n                                    <td class=\"text-nowrap align-middle\">\r\n                                      3,437&nbsp;\r\n                                      <span class=\"text-muted small\">8.15%</span>\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                      <td class=\"text-nowrap align-middle\">\r\n                                        <a href=\"http://www.yahoo.com\" class=\"text-dark\">www.yahoo.com</a>\r\n                                      </td>\r\n                                      <td class=\"align-middle\">\r\n                                        <div class=\"progress\" style=\"height: 4px;\">\r\n                                          <div class=\"progress-bar bg-danger\" style=\"width: 8.15%;\"></div>\r\n                                        </div>\r\n                                      </td>\r\n                                      <td class=\"text-nowrap align-middle\">\r\n                                        3,437&nbsp;\r\n                                        <span class=\"text-muted small\">8.15%</span>\r\n                                      </td>\r\n                                    </tr>\r\n                                    </div>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <!-- / Traffic sources -->       \r\n      </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n      "

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/home/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ../../../vendor/libs/ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss */ "./src/vendor/libs/ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _startup_startup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startup/startup.component */ "./src/app/home/startup/startup.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _startup_startup_component__WEBPACK_IMPORTED_MODULE_2__["StartupComponent"] },
                    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
                    { path: 'startup', component: _startup_startup_component__WEBPACK_IMPORTED_MODULE_2__["StartupComponent"] }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _startup_startup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./startup/startup.component */ "./src/app/home/startup/startup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomeRoutingModule"]
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _startup_startup_component__WEBPACK_IMPORTED_MODULE_8__["StartupComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/startup/startup.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/startup/startup.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"form-group row m-auto\">\r\n  <label class=\"col-form-label col-sm-2 text-sm-right\"></label>\r\n  <div class=\"demo-inline-spacing mt-3\">\r\n    <button type=\"submit\" class=\"btn btn-success\">\r\n      <span class=\"fas fa-plus\"></span> Add</button>\r\n    <button type=\"submit\" class=\"btn btn-success\">\r\n      <span class=\"fas fa-save\"></span> Save</button>\r\n    <button type=\"submit\" class=\"btn btn-success\">\r\n      <span class=\"fas fa-file-download\"></span> Generate Report </button>\r\n    <button type=\"submit\" class=\"btn btn-success\">\r\n      <span class=\"fas fa-eye\"></span> Show </button>\r\n    <button type=\"submit\" class=\"btn btn-success\">\r\n      <span class=\"fas fa-spinner\"></span> Process </button>\r\n    <br>\r\n    <button type=\"clear\" class=\"btn btn-info\">\r\n      <span class=\"ion ion-ios-refresh\"></span> Reset / Refresh / Clear</button>\r\n    <br>\r\n    <button type=\"\" class=\"btn btn-secondary\">\r\n      <span class=\"far fa-window-close\"></span> Close</button>\r\n    <button type=\"\" class=\"btn btn-secondary\">\r\n      <span class=\"fas fa-arrow-circle-left\"></span> Back</button>\r\n    <br>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\">\r\n      <span class=\"fas fa-edit\"></span> Edit </button>\r\n    <button type=\"submit\" class=\"btn btn-primary\">\r\n      <span class=\"fas fa-search\"></span> Search </button>\r\n    <br>\r\n    <button type=\"submit\" class=\"btn btn-danger\">\r\n      <span class=\"fas fa-trash\"></span> Remove/Delete </button>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"section margin\">\r\n  <div class=\"section margin\">\r\n    <div class=\"section margin\">\r\n      <div class=\"section margin\">\r\n        <div class=\"section margin\">\r\n          <div class=\"section margin\">\r\n            <div class=\"section margin\">\r\n              <div class=\"section margin\">\r\n                <div class=\"section margin\">\r\n                  <div class=\"section margin text-center bg-dark\">\r\n                    <h3 class=\"text-white\">Welcome</h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/startup/startup.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/startup/startup.component.ts ***!
  \***************************************************/
/*! exports provided: StartupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupComponent", function() { return StartupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartupComponent = /** @class */ (function () {
    function StartupComponent(http) {
        this.http = http;
    }
    StartupComponent.prototype.call = function () {
        var _this = this;
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/users').subscribe(function (data) {
            _this.response = data.toString();
        });
    };
    StartupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-startup',
            template: __webpack_require__(/*! ./startup.component.html */ "./src/app/home/startup/startup.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StartupComponent);
    return StartupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map