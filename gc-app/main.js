(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/sidebar/sidebar.component */ "./src/app/menu/sidebar/sidebar.component.ts");
/* harmony import */ var _menu_file_file_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/file/file.component */ "./src/app/menu/file/file.component.ts");





var routes = [
    { path: '', component: _menu_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"] },
    { path: 'upload', component: _menu_file_file_component__WEBPACK_IMPORTED_MODULE_4__["FileComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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

module.exports = "<div id=\"container\" class=\"h-100\">\r\n  <div class=\"row h-100\">\r\n    <div class=\"col-xl-8 col-lg-6 col-sm-12 h-100\" style=\"overflow: hidden;\">\r\n      <div id=\"main\" class=\"h-100 p-sm-0\">\r\n        <button (click)=\"openNav()\" class=\"d-sm-none d-block bg-dark\" style=\"position: absolute; top: 20px; right: 20px;\"><span class=\"mdi mdi-menu\"></span></button>\r\n        <gc-scene></gc-scene>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-6 col-sm-12\" style=\"overflow-y: scroll; min-height: 100%;\">\r\n      <div id=\"mySidenav\" class=\"sidenav h-100\">\r\n        <a href=\"javascript:void(0)\" class=\"closebtn d-sm-none d-block\" (click)=\"closeNav()\">&times;</a>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 560px) {\n  /* The side navigation menu */\n  .sidenav {\n    width: 0;\n    /* 0 width - change this with JavaScript */\n    position: fixed;\n    /* Stay in place */\n    z-index: 1;\n    /* Stay on top */\n    top: 0;\n    right: 0;\n    background-color: #111;\n    /* Black*/\n    overflow-x: hidden;\n    /* Disable horizontal scroll */\n    padding-top: 60px;\n    /* Place content 60px from the top */\n    transition: 0.5s;\n    /* 0.5 second transition effect to slide in the sidenav */ }\n  /* The navigation menu links */\n  .sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s; }\n  /* When you mouse over the navigation links, change their color */\n  .sidenav a:hover {\n    color: #f1f1f1; }\n  /* Position and style the close button (top right corner) */\n  .sidenav .closebtn {\n    position: absolute;\n    top: -16px;\n    right: 10px;\n    font-size: 3rem; }\n  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */\n  #main {\n    transition: margin-left .5s;\n    padding: 0px; } }\n  @media screen and (max-width: 560px) and (max-width: 560px) {\n    #main {\n      height: 100vh; } }\n  @media screen and (max-width: 560px) {\n  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */ }\n  @media screen and (max-width: 560px) and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px; }\n  .sidenav a {\n    font-size: 18px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxsdWthc1xcV2VicHJvamVjdHNcXGdjLWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQTtJQUNFLFFBQVE7SUFBRSwwQ0FBQTtJQUNWLGVBQWU7SUFBRSxrQkFBQTtJQUNqQixVQUFVO0lBQUUsZ0JBQUE7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLHNCQUFzQjtJQUFFLFNBQUE7SUFDeEIsa0JBQWtCO0lBQUUsOEJBQUE7SUFDcEIsaUJBQWlCO0lBQUUsb0NBQUE7SUFDbkIsZ0JBQWdCO0lBQUUseURBQUEsRUFBMEQ7RUFHOUUsOEJBQUE7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7RUFHbEIsaUVBQUE7RUFDQTtJQUNFLGNBQWMsRUFBQTtFQUdoQiwyREFBQTtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBSWpCLHNIQUFBO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsWUFBWSxFQUFBLEVBSWI7RUFIQztJQUhGO01BSUksYUFBYSxFQUFBLEVBRWhCO0VBN0NIO0VBK0NFLGdJQUFBLEVBQWlJO0VBQ2pJO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQTtFQUVuQjtJQUNFLGVBQWUsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XHJcbiAgLyogVGhlIHNpZGUgbmF2aWdhdGlvbiBtZW51ICovXHJcbiAgLnNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTsgLyogQmxhY2sqL1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xyXG4gICAgdHJhbnNpdGlvbjogMC41czsgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiB0aGUgc2lkZW5hdiAqL1xyXG4gIH1cclxuXHJcbiAgLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xyXG4gIC5zaWRlbmF2IGEge1xyXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuXHJcbiAgLyogV2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgbmF2aWdhdGlvbiBsaW5rcywgY2hhbmdlIHRoZWlyIGNvbG9yICovXHJcbiAgLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICB9XHJcblxyXG4gIC8qIFBvc2l0aW9uIGFuZCBzdHlsZSB0aGUgY2xvc2UgYnV0dG9uICh0b3AgcmlnaHQgY29ybmVyKSAqL1xyXG4gIC5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xNnB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAvL21hcmdpbi1yaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIC8qIFN0eWxlIHBhZ2UgY29udGVudCAtIHVzZSB0aGlzIGlmIHlvdSB3YW50IHRvIHB1c2ggdGhlIHBhZ2UgY29udGVudCB0byB0aGUgcmlnaHQgd2hlbiB5b3Ugb3BlbiB0aGUgc2lkZSBuYXZpZ2F0aW9uICovXHJcbiAgI21haW4ge1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpe1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogT24gc21hbGxlciBzY3JlZW5zLCB3aGVyZSBoZWlnaHQgaXMgbGVzcyB0aGFuIDQ1MHB4LCBjaGFuZ2UgdGhlIHN0eWxlIG9mIHRoZSBzaWRlbmF2IChsZXNzIHBhZGRpbmcgYW5kIGEgc21hbGxlciBmb250IHNpemUpICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGVuYXYgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Basic Component
 */
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    /**
     * Set the width of the side navigation
     * to 250px and the left margin of the
     * page content to 250px
     */
    AppComponent.prototype.openNav = function () {
        document.getElementById('mySidenav').style.width = '100%';
        document.getElementById('main').style.marginRight = '100%';
    };
    /** Set the width of the side navigation
     *  to 0 and the left margin of the page
     *  content to 0
     */
    AppComponent.prototype.closeNav = function () {
        document.getElementById('mySidenav').style.width = '0';
        document.getElementById('main').style.marginRight = '0';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gc-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _scene_scene_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene/scene.module */ "./src/app/scene/scene.module.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.module */ "./src/app/menu/menu.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _scene_scene_module__WEBPACK_IMPORTED_MODULE_4__["SceneModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu/components/overview/overview.component.html":
/*!******************************************************************!*\
  !*** ./src/app/menu/components/overview/overview.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"table-1\" class=\"teaser-tile p-3\">\n  <table class=\"table table-hover table-sm\">\n    <thead>\n    <tr>\n      <th scope=\"col\"></th>\n      <th scope=\"col\">Option</th>\n      <th scope=\"col\">Auswahl</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Größe</td>\n      <td> {{dataServ.size}} Liter </td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Anzahl</td>\n      <td>500 Stück</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td>Design</td>\n      <td>{{dataServ.designName}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">4</th>\n      <td>Eichstrich</td>\n      <td>Ja</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">5</th>\n      <td>Preis</td>\n      <td>9999€</td>\n    </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/menu/components/overview/overview.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/menu/components/overview/overview.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvY29tcG9uZW50cy9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/menu/components/overview/overview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/menu/components/overview/overview.component.ts ***!
  \****************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/data.service */ "./src/app/shared/service/data.service.ts");



/**
 * Overview Component
 */
var OverviewComponent = /** @class */ (function () {
    /**
     * Constructor for the Data Service
     * @param dataServ   Instance of the DataService
     */
    function OverviewComponent(dataServ) {
        this.dataServ = dataServ;
    }
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gc-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/menu/components/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/menu/components/overview/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/menu/components/size/size.component.html":
/*!**********************************************************!*\
  !*** ./src/app/menu/components/size/size.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <ng-container *ngFor=\"let size of sizes; let i = index\">\r\n            <div class=\"col-6 py-3\">\r\n                <a href=\"#\" id=\"{{size}}\" class=\"size d-flex flex-column align-items-center\" [class.active]=\"size == this.data.model\" (click)=\"this.data.setModel(size)\">\r\n                    <img [src]=\"'assets/images/' + (i+1)*100 + '.png'\">\r\n                    <p>{{size}}</p>\r\n                </a>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/menu/components/size/size.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/menu/components/size/size.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".size img {\n  border: 3px solid darkgrey;\n  position: relative; }\n  .size img:hover, .size img:focus, .size img:active {\n    border: 3px solid darkred;\n    transition: border ease-in-out .2s; }\n  .size img:hover + p, .size img:focus + p, .size img:active + p {\n      color: darkred;\n      font-weight: 500; }\n  .active img {\n  border: 3px solid darkred;\n  transition: border ease-in-out .2s; }\n  .active img + p {\n    color: darkred;\n    font-weight: 500; }\n  a {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9jb21wb25lbnRzL3NpemUvQzpcXFVzZXJzXFxsdWthc1xcV2VicHJvamVjdHNcXGdjLWFwcC9zcmNcXGFwcFxcbWVudVxcY29tcG9uZW50c1xcc2l6ZVxcc2l6ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0IsRUFBQTtFQUZwQjtJQUtJLHlCQUF5QjtJQUN6QixrQ0FBa0MsRUFBQTtFQU50QztNQVFNLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTtFQUt0QjtFQUNFLHlCQUF5QjtFQUN6QixrQ0FBa0MsRUFBQTtFQUZwQztJQUlJLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVudS9jb21wb25lbnRzL3NpemUvc2l6ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXplIGltZ3tcclxuICBib3JkZXI6IDNweCBzb2xpZCBkYXJrZ3JleTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6aG92ZXIsICY6Zm9jdXMsICY6YWN0aXZle1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgZGFya3JlZDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlciBlYXNlLWluLW91dCAuMnM7XHJcbiAgICArIHB7XHJcbiAgICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZSBpbWd7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgZGFya3JlZDtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgZWFzZS1pbi1vdXQgLjJzO1xyXG4gICsgcHtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbmF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/menu/components/size/size.component.ts":
/*!********************************************************!*\
  !*** ./src/app/menu/components/size/size.component.ts ***!
  \********************************************************/
/*! exports provided: SizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeComponent", function() { return SizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/data.service */ "./src/app/shared/service/data.service.ts");



/**
 * Size Component
 */
var SizeComponent = /** @class */ (function () {
    /**
     * Constructor for the Data Service
     * @param data   Instance of the DataService
     */
    function SizeComponent(data) {
        this.data = data;
        /**
         * All available Sizes of Cups
         */
        this.sizes = ['small', 'medium', 'normal', 'large'];
    }
    SizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gc-size',
            template: __webpack_require__(/*! ./size.component.html */ "./src/app/menu/components/size/size.component.html"),
            styles: [__webpack_require__(/*! ./size.component.scss */ "./src/app/menu/components/size/size.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SizeComponent);
    return SizeComponent;
}());



/***/ }),

/***/ "./src/app/menu/components/upload/upload.component.html":
/*!**************************************************************!*\
  !*** ./src/app/menu/components/upload/upload.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\nBitte wählen Sie ihr Design aus. Achten Sie auch auf die Druckvorgaben.\r\n  Zugelassen sind nur <span class=\"text-primary\">.png</span> Dateien!\r\n</p>\r\n<a id=\"uploadBtn\" class=\"btn btn-primary\" routerLink=\"/upload\">Design auswählen</a>\r\n"

/***/ }),

/***/ "./src/app/menu/components/upload/upload.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/menu/components/upload/upload.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\n  display: none; }\n\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9jb21wb25lbnRzL3VwbG9hZC9DOlxcVXNlcnNcXGx1a2FzXFxXZWJwcm9qZWN0c1xcZ2MtYXBwL3NyY1xcYXBwXFxtZW51XFxjb21wb25lbnRzXFx1cGxvYWRcXHVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbnUvY29tcG9uZW50cy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/menu/components/upload/upload.component.ts":
/*!************************************************************!*\
  !*** ./src/app/menu/components/upload/upload.component.ts ***!
  \************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/data.service */ "./src/app/shared/service/data.service.ts");



/**
 * Upload Component
 */
var UploadComponent = /** @class */ (function () {
    /**
     * Constructor for the Data Service
     * @param dataServ   Instance of the DataService
     */
    function UploadComponent(dataServ) {
        this.dataServ = dataServ;
    }
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gc-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/menu/components/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/menu/components/upload/upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/menu/file/DragDrop/drag-drop.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/menu/file/DragDrop/drag-drop.directive.ts ***!
  \***********************************************************/
/*! exports provided: DragDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDirective", function() { return DragDropDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Drop Directive
 */
var DragDropDirective = /** @class */ (function () {
    function DragDropDirective() {
        /**
         * Event as File
         */
        this.filesChangeEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Allowed Extentions for Upload
         */
        this.allowed_ext = [];
        /**
         * Bind the Bordercolor of the dropzone
         */
        this.borderColor = '#999';
    }
    /**
     * Hostlistener for Dragover
     */
    DragDropDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.borderColor = 'red';
    };
    /**
     * Hostlistener for Dragleave
     */
    DragDropDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.borderColor = '#999';
    };
    /**
     * Hostlistener for Drop
     */
    DragDropDirective.prototype.onDrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var files = evt.dataTransfer.files;
        var validFiles = [];
        if (files.length > 0) {
            this.borderColor = '#999';
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var ext = file.type;
                if (this.allowed_ext.includes(ext)) {
                    validFiles.push(file);
                    this.filesChangeEmiter.emit(validFiles);
                }
                else {
                    alert('Falsches Dateiformat! Bitte wähle eine .png-Datei aus.');
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DragDropDirective.prototype, "filesChangeEmiter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DragDropDirective.prototype, "allowed_ext", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.borderColor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DragDropDirective.prototype, "borderColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DragDropDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DragDropDirective.prototype, "onDragLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DragDropDirective.prototype, "onDrop", null);
    DragDropDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[gcDragDrop]'
        })
    ], DragDropDirective);
    return DragDropDirective;
}());



/***/ }),

/***/ "./src/app/menu/file/Select/select.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/menu/file/Select/select.directive.ts ***!
  \******************************************************/
/*! exports provided: SelectDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDirective", function() { return SelectDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Select Directive
 */
var SelectDirective = /** @class */ (function () {
    function SelectDirective() {
        /**
         * Event as File
         */
        this.filesChangeEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Allowed extentions of images for Upload
         */
        this.allowed_ext = [];
    }
    /**
     * Hostlistener for Change Event
     */
    SelectDirective.prototype.onChange = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var files = evt.target.files;
        var validFiles = [];
        if (files.length > 0) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var ext = file.type;
                if (this.allowed_ext.includes(ext)) {
                    validFiles.push(file);
                    this.filesChangeEmiter.emit(validFiles);
                    // Default export is a4 paper, portrait, using milimeters for units
                    var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
                    doc.text('Hello world!', 10, 10);
                    doc.addImage(file, 'PNG', 15, 40, 180, 180);
                    doc.save('a4.pdf');
                }
                else {
                    alert('Falsches Dateiformat! Bitte wähle eine .png-Datei aus.');
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SelectDirective.prototype, "filesChangeEmiter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectDirective.prototype, "allowed_ext", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SelectDirective.prototype, "onChange", null);
    SelectDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[gcSelect]'
        })
    ], SelectDirective);
    return SelectDirective;
}());



/***/ }),

/***/ "./src/app/menu/file/file.component.html":
/*!***********************************************!*\
  !*** ./src/app/menu/file/file.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"\" class=\"teaser-tile\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar navbar-default\">\r\n            <div class=\"navbar-header w-100\">\r\n                <a class=\"navbar-brand\" >Design hochladen</a>\r\n                <a class=\"navbar-brand float-right\" [routerLink]=\"'/'\" routerLinkActive=\"active\">\r\n                    <i class=\"mdi mdi-backspace text-dark\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-md-6 col-lg-12 \">\r\n                <div class=\"dropzone well my-drop-zone mb-4\"\r\n                     gcDragDrop\r\n                     [allowed_ext]=\"['image/png']\"\r\n                     (filesChangeEmiter)=\"onFilesChange($event)\">\r\n                    <div class=\"text-wrapper\">\r\n                        <div class=\"centered\">Ziehe das Design hierher!</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"custom-file p-0\">\r\n                    <input gcSelect\r\n                           (filesChangeEmiter)=\"onFilesChange($event)\"\r\n                           [allowed_ext]=\"['image/png']\"\r\n                           [accept]=\"'.png'\"\r\n                           id=\"design\"\r\n                           class=\"custom-file-input form-control-sm  p-0\"\r\n                           type=\"file\"/>\r\n                    <label id=\"designLabel\" class=\"custom-file-label py-0\" for=\"design\">\r\n                        {{showInputLabel()}}\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-6 col-lg-12\" style=\"margin-bottom: 40px\">\r\n                <table class=\"table my-3\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th width=\"50%\">Name</th>\r\n                        <th>Größe</th>\r\n                        <th>Status</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                        <td><strong>{{ this.data.designName }}</strong></td>\r\n                        <td>{{ this.data.designSize/1024/1024 | number:'0.2' }} MB</td>\r\n                        <td class=\"text-center\">\r\n                            <span><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n                <div>\r\n                    <a id=\"uploadButton\" class=\"btn btn-success btn-s text-white\" [ngClass]=\"isDisabled()\"\r\n                            (click)=\"this.data.loadDesign()\">\r\n                        <span class=\"glyphicon glyphicon-upload\"></span> Design rendern\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/menu/file/file.component.scss":
/*!***********************************************!*\
  !*** ./src/app/menu/file/file.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-drop-zone {\n  border: dotted 3px lightgray;\n  height: 30vh;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n/* Default class applied to drop zones on over */\n\n.another-file-over-class {\n  border: dotted 3px green; }\n\n:host > div {\n  background-color: #eee; }\n\n.btn-success {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content; }\n\n.custom-file-label,\n.custom-file-label::after {\n  height: auto;\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.custom-file-label,\n.custom-file-label::after {\n  height: auto;\n  padding-top: 0;\n  padding-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9maWxlL0M6XFxVc2Vyc1xcbHVrYXNcXFdlYnByb2plY3RzXFxnYy1hcHAvc3JjXFxhcHBcXG1lbnVcXGZpbGVcXGZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCLGdEQUFBOztBQUNBO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0IsRUFBQTs7QUFHcEI7O0VBRUUsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7O0VBRUUsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbnUvZmlsZS9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWRyb3Atem9uZSB7XHJcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4IGxpZ2h0Z3JheTtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5udi1maWxlLW92ZXIge1xyXG4gIGJvcmRlcjogZG90dGVkIDNweCByZWQ7XHJcbn1cclxuXHJcbi8qIERlZmF1bHQgY2xhc3MgYXBwbGllZCB0byBkcm9wIHpvbmVzIG9uIG92ZXIgKi9cclxuLmFub3RoZXItZmlsZS1vdmVyLWNsYXNzIHtcclxuICBib3JkZXI6IGRvdHRlZCAzcHggZ3JlZW47XHJcbn1cclxuXHJcbjpob3N0ID4gZGl2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUtbGFiZWwsXHJcbi5jdXN0b20tZmlsZS1sYWJlbDo6YWZ0ZXIge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLWxhYmVsLFxyXG4uY3VzdG9tLWZpbGUtbGFiZWw6OmFmdGVyIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/menu/file/file.component.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/file/file.component.ts ***!
  \*********************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/data.service */ "./src/app/shared/service/data.service.ts");



/**
 * File Component
 */
var FileComponent = /** @class */ (function () {
    /**
     * Constructor for the Data Service
     * @param data   Instance of the DataService
     */
    function FileComponent(data) {
        this.data = data;
    }
    /**
     * If file was selected or droped, the funtion save it to the DataService
     *
     * Save the file as BLOB URL
     * [BLOB URL]{@link https://developer.mozilla.org/de/docs/Web/API/URL/createObjectURL}
     * @param fileList   The selected File as Array
     */
    FileComponent.prototype.onFilesChange = function (fileList) {
        this.data.state = true;
        this.data.designName = fileList[0].name;
        this.data.designSize = fileList[0].size;
        this.data.selectedImage = window.URL.createObjectURL(fileList[0]) || window.webkitURL.createObjectURL(fileList[0]);
        console.log('Create Blob: ' + this.data.selectedImage);
    };
    /**
     * Check the State
     * @return string   The class for Disable a <a>-Tag
     */
    FileComponent.prototype.isDisabled = function () {
        if (this.data.state) {
            return;
        }
        else {
            return 'disabled';
        }
    };
    /**
     * Set the Input-File Label
     * @return designName   The Name of the uploaded File
     */
    FileComponent.prototype.showInputLabel = function () {
        if (this.data.designName === undefined) {
            return 'Design auswählen';
        }
        else {
            return this.data.designName;
        }
    };
    FileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gc-file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/menu/file/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.scss */ "./src/app/menu/file/file.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/overview/overview.component */ "./src/app/menu/components/overview/overview.component.ts");
/* harmony import */ var _components_size_size_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/size/size.component */ "./src/app/menu/components/size/size.component.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/upload/upload.component */ "./src/app/menu/components/upload/upload.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/menu/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file/file.component */ "./src/app/menu/file/file.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _file_DragDrop_drag_drop_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./file/DragDrop/drag-drop.directive */ "./src/app/menu/file/DragDrop/drag-drop.directive.ts");
/* harmony import */ var _file_Select_select_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./file/Select/select.directive */ "./src/app/menu/file/Select/select.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");













var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"], _components_size_size_component__WEBPACK_IMPORTED_MODULE_4__["SizeComponent"], _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _file_file_component__WEBPACK_IMPORTED_MODULE_8__["FileComponent"], _file_DragDrop_drag_drop_directive__WEBPACK_IMPORTED_MODULE_10__["DragDropDirective"], _file_Select_select_directive__WEBPACK_IMPORTED_MODULE_11__["SelectDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/menu/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/menu/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"\" class=\"teaser-tile bg-light\">\r\n  <gc-tabs>\r\n    <gc-tab id=\"accordion\" [tabTitle]=\"'Konfigurator'\">\r\n      <gc-accordion>\r\n        <gc-item id=\"testitem\" [itemTitle]=\"'Größe'\" [itemId]=\"'collapse1'\" [iconClass]=\"'mdi-cup'\">\r\n          <gc-size></gc-size>\r\n        </gc-item>\r\n        <gc-item [itemTitle]=\"'Upload Design'\" [itemId]=\"'collapse2'\" [iconClass]=\"'mdi-upload'\">\r\n          <gc-upload></gc-upload>\r\n        </gc-item>\r\n        <gc-item [itemTitle]=\"'Optionen'\" [itemId]=\"'collapse3'\" [iconClass]=\"'mdi-settings'\">\r\n          <p>Für diesen Becher sind zur Zeit noch keine weiteren Optionen verfügbar.</p>\r\n        </gc-item>\r\n      </gc-accordion>\r\n\r\n\r\n      <!--<ul class=\"nav flex-column\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link d-flex align-items-center collapsed\" data-toggle=\"collapse\" href=\"#collapseSize\" aria-expanded=\"true\" aria-controls=\"collapseSize\"></span>Größe</a>\r\n          <div class=\"collapse show\" id=\"collapseSize\" data-parent=\"#accordion\">\r\n            <gc-size></gc-size>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a id=\"design\" class=\"nav-link d-flex align-items-center collapsed\" data-toggle=\"collapse\" href=\"#collapseDesign\" aria-expanded=\"false\" aria-controls=\"collapseOptions\"><span class=\"mr-5 mdi mdi-upload\"></span>Design</a>\r\n          <div class=\"collapse\" id=\"collapseDesign\" data-parent=\"#accordion\">\r\n            <gc-upload></gc-upload>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link d-flex align-items-center collapsed\" data-toggle=\"collapse\" href=\"#collapseOptions\" aria-expanded=\"false\" aria-controls=\"collapseDesign\"><span class=\"mr-5 mdi mdi-settings\"></span>Optionen</a>\r\n          <div class=\"collapse\" id=\"collapseOptions\" data-parent=\"#accordion\">\r\n\r\n          </div>\r\n        </li>\r\n      </ul>-->\r\n    </gc-tab>\r\n    <gc-tab [tabTitle]=\"'Übersicht'\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <gc-overview></gc-overview>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </gc-tab>\r\n  </gc-tabs>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/menu/sidebar/sidebar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/menu/sidebar/sidebar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/menu/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Sidebar Component
 */
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gc-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/menu/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/menu/sidebar/sidebar.component.scss")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/scene/scene.module.ts":
/*!***************************************!*\
  !*** ./src/app/scene/scene.module.ts ***!
  \***************************************/
/*! exports provided: SceneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneModule", function() { return SceneModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _scene_scene_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene/scene.component */ "./src/app/scene/scene/scene.component.ts");




var SceneModule = /** @class */ (function () {
    function SceneModule() {
    }
    SceneModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_scene_scene_component__WEBPACK_IMPORTED_MODULE_3__["SceneComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_scene_scene_component__WEBPACK_IMPORTED_MODULE_3__["SceneComponent"]]
        })
    ], SceneModule);
    return SceneModule;
}());



/***/ }),

/***/ "./src/app/scene/scene/scene.component.html":
/*!**************************************************!*\
  !*** ./src/app/scene/scene/scene.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #canvas (mousedown)=\"this.three.onMouseDown($event)\"></canvas>\r\n<button (click)=\"zoomObject('left')\" class=\"bg-primary\" style=\"position: absolute; bottom: 50px; right: 120px;\"><span class=\"mdi mdi-rotate-left\"></span></button>\r\n<button (click)=\"zoomObject('right')\" class=\"bg-primary\" style=\"position: absolute; bottom: 50px; right: 20px;\"><span class=\"mdi mdi-rotate-right\"></span></button>\r\n\r\n"

/***/ }),

/***/ "./src/app/scene/scene/scene.component.scss":
/*!**************************************************!*\
  !*** ./src/app/scene/scene/scene.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  width: 100%;\n  height: 100%;\n  max-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NlbmUvc2NlbmUvQzpcXFVzZXJzXFxsdWthc1xcV2VicHJvamVjdHNcXGdjLWFwcC9zcmNcXGFwcFxcc2NlbmVcXHNjZW5lXFxzY2VuZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zY2VuZS9zY2VuZS9zY2VuZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/scene/scene/scene.component.ts":
/*!************************************************!*\
  !*** ./src/app/scene/scene/scene.component.ts ***!
  \************************************************/
/*! exports provided: SceneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneComponent", function() { return SceneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_three_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/three.service */ "./src/app/scene/service/three.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * Scene Component
 */
var SceneComponent = /** @class */ (function () {
    /**
     * Constructor for the Three Service
     * @param three   Instance of the ThreeService
     */
    function SceneComponent(three) {
        this.three = three;
    }
    Object.defineProperty(SceneComponent.prototype, "canvas", {
        /**
         * Getter-Method for the canvas
         * @return this.canvasRef.nativeElement   The canvas element of the DOM
         */
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * For Rotation the model
     * Fires the changeCameraPosition-Method in ThreeService
     */
    SceneComponent.prototype.zoomObject = function (direction) {
        this.three.changeCameraPosition(direction);
    };
    /**
     * Fires the CreateScene-Method on init
     */
    SceneComponent.prototype.ngOnInit = function () {
        this.three.createScene(this.canvas);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], SceneComponent.prototype, "canvasRef", void 0);
    SceneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'gc-scene',
            template: __webpack_require__(/*! ./scene.component.html */ "./src/app/scene/scene/scene.component.html"),
            styles: [__webpack_require__(/*! ./scene.component.scss */ "./src/app/scene/scene/scene.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_three_service__WEBPACK_IMPORTED_MODULE_1__["ThreeService"]])
    ], SceneComponent);
    return SceneComponent;
}());



/***/ }),

/***/ "./src/app/scene/service/three.service.ts":
/*!************************************************!*\
  !*** ./src/app/scene/service/three.service.ts ***!
  \************************************************/
/*! exports provided: ThreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeService", function() { return ThreeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_full__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-full */ "./node_modules/three-full/builds/Three.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





/**
 * ThreeService for Angular
 * [Three.js]{@link https://threejs.org/}
 */
var ThreeService = /** @class */ (function () {
    /**
     * Constructor for Renderer
     */
    function ThreeService() {
        /**
         * FOV for the camera
         */
        this.fieldOfView = 20;
        /**
         * NCP for the camera
         */
        this.nearClippingPane = 1;
        /**
         * FCP for the camera
         */
        this.farClippingPane = 2000;
        /**
         * Cylinder top radius
         */
        this.radiusTop = { 'small': .345, 'medium': .39, 'normal': .44, 'large': .435 };
        /**
         * Cylinder bottom radius
         */
        this.radiusBottom = { 'small': .235, 'medium': .285, 'normal': .31, 'large': .3 };
        /**
         * Cylinder height
         */
        this.cylinderHeight = { 'small': .885, 'medium': .885, 'normal': 1.05, 'large': 1.33 };
        /**
         * Radial Segments (horizontal)
         */
        this.radialSegments = 25;
        /**
         * Height Segments (vertical)
         */
        this.heightSegments = 25;
        /**
         * lenght of the Cylinder (360deg)
         */
        this.thetaLength = 2 * Math.PI;
        this.render = this.render.bind(this);
        this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
    }
    /**
     * @param canvas   The canvas element from the template
     * Create the Scene with Light, Camera and Controls in the canvas element
     */
    ThreeService.prototype.createScene = function (canvas) {
        // get the reference of the canvas element from HTML Template
        this.canvas = canvas;
        // create the scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        // set cupSize
        this.cupSize = 'small';
        var loader = new three_full__WEBPACK_IMPORTED_MODULE_2__["OBJLoader"](three__WEBPACK_IMPORTED_MODULE_1__["DefaultLoadingManager"]);
        loader.load('assets/model/' + this.cupSize + '.obj', this.onModelLoadingCompleted);
        this.createLight();
        this.createCamera();
        this.startRendering();
        this.addControls();
    };
    /**
     * @param object    The model which should be loaded to the scene
     * If the model is loaded, add it to the scene and render
     */
    ThreeService.prototype.onModelLoadingCompleted = function (object) {
        object.position.y = -.445;
        object.name = 'currentModel';
        this.scene.add(object);
        this.prevModel = object;
        this.render();
    };
    /**
     * Create the camera for the scene
     */
    ThreeService.prototype.createCamera = function () {
        var aspectRatio = this.getAspectRatio();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
        // Set position and look at
        this.camera.position.y = 2.2;
        this.camera.position.x = 0.15;
        this.camera.position.z = 6.1;
    };
    /**
     * Create the Lights for the scene
     *
     * Backlight, AmbientLight, KeyLight, FillLight
     */
    ThreeService.prototype.createLight = function () {
        this.lighting = true;
        this.ambient = new three__WEBPACK_IMPORTED_MODULE_1__["AmbientLight"](0xffffff, 1);
        this.scene.add(this.ambient);
        this.ambient.intensity = 0.5;
        var keyLight = new three__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"](new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0xf3f3f3), 0.4);
        keyLight.position.set(0, 100, 0);
        this.scene.add(keyLight);
        var fillLight = new three__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"](new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0xffffff), 0.2);
        fillLight.position.set(100, 0, 100);
        this.scene.add(fillLight);
        var backLight = new three__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"](0xffffff, 0.5);
        backLight.position.set(-100, 0, -100).normalize();
        this.scene.add(backLight);
    };
    /**
     * Get the aspect ratio of the current canvas element
     * @return aspectRatio    The aspect ratio of the canvas
     */
    ThreeService.prototype.getAspectRatio = function () {
        var height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    };
    /**
     * Start the Renderer with the scene and camera
     */
    ThreeService.prototype.startRendering = function () {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.setClearColor(0xffffff, 1);
    };
    /**
     * Render the Scene
     */
    ThreeService.prototype.render = function () {
        this.renderer.render(this.scene, this.camera);
    };
    /**
     * Add OrbitControls to the scene and set everything
     */
    ThreeService.prototype.addControls = function () {
        this.controls = new three_full__WEBPACK_IMPORTED_MODULE_2__["OrbitControls"](this.camera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.7;
        this.controls.enableZoom = true;
        this.controls.autoRotate = false;
        this.controls.autoRotateSpeed = 0.3;
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.maxDistance = 8;
        this.controls.minDistance = 3;
        this.controls.enablePan = false;
        this.controls.minPolarAngle = .55; // radians
        this.controls.maxPolarAngle = Math.PI / 1.25; // radians
        this.controls.addEventListener('change', this.render);
    };
    /**
     * Change the model, if the user want another
     * @param model   The choosen model of the user
     */
    ThreeService.prototype.reloadModel = function (model) {
        var prevModel1 = this.scene.getObjectByName('180ml_ColdCup_Circle.003_CUSTOM');
        var prevModel2 = this.scene.getObjectByName('180ml_ColdCup_Circle.003_paper');
        var currentModel = this.scene.getObjectByName('currentModel');
        var currentTexture = this.scene.getObjectByName('currentTexture');
        this.scene.remove(prevModel1, prevModel2, currentModel, currentTexture);
        var file = 'assets/model/' + model + '.obj';
        var loader = new three_full__WEBPACK_IMPORTED_MODULE_2__["OBJLoader"]();
        loader.load(file, this.onModelLoadingCompleted);
    };
    /**
     * Load or reload the texture the user has uploaded
     * and remove the previous
     * @param image   The uploaded File as BLOB URL
     */
    ThreeService.prototype.reloadTexture = function (image) {
        var _this = this;
        this.checkAspectRatio(image);
        this.removeTexture();
        var loader = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]();
        loader.load(image, function (texture) {
            var material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({
                map: texture,
                transparent: true
            });
            material.map.minFilter = three__WEBPACK_IMPORTED_MODULE_1__["LinearFilter"];
            var geometry = _this.createCylinder();
            var cylinder = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
            cylinder.name = 'currentTexture';
            _this.fixCylinderPosition(material, cylinder);
            _this.scene.add(cylinder);
            _this.render();
        }, undefined, function (err) {
            console.log('an error happened!');
        });
    };
    /**
     * Check, if the users image has the right aspect ratio
     * @param image   The uploaded File as BLOB URL
     */
    ThreeService.prototype.checkAspectRatio = function (image) {
        var img = new Image();
        img.src = image;
        img.onload = function () {
            var width = img.naturalWidth, height = img.naturalHeight;
            window.URL.revokeObjectURL(img.src);
            if (width !== 1183 || height !== 580) {
                alert('Warnung! Das hochgeladene Design ist nicht in der richtigen Auflösung!');
            }
        };
    };
    /**
     * remove the current Texture of the scene
     */
    ThreeService.prototype.removeTexture = function () {
        var currentTexture = this.scene.getObjectByName('currentTexture');
        if (currentTexture !== undefined) {
            this.scene.remove(currentTexture);
        }
    };
    /**
     * Create a cylinder for the users Design
     */
    ThreeService.prototype.createCylinder = function () {
        return new three__WEBPACK_IMPORTED_MODULE_1__["CylinderBufferGeometry"](this.radiusTop[this.cupSize], this.radiusBottom[this.cupSize], this.cylinderHeight[this.cupSize], this.radialSegments, this.heightSegments, true, 0, this.thetaLength);
    };
    /**
     * Fix the cylinder size
     * @param material   The current material (Texture)
     * @param cylinder   The current cylinder geometry
     */
    ThreeService.prototype.fixCylinderPosition = function (material, cylinder) {
        cylinder.rotation.y += 3;
        if (material.map !== undefined) {
            if (this.cupSize === 'normal') {
                cylinder.position.y = .09;
            }
            if (this.cupSize === 'large') {
                cylinder.position.y = .22;
            }
        }
        else {
            console.log('Texture can not be mapped!');
        }
    };
    /**
     * Setup the size of the current cup
     * @param cupSize   The size of the current cup
     */
    ThreeService.prototype.setCupSize = function (cupSize) {
        this.cupSize = cupSize;
    };
    /**
     * Rotate the model with the buttons
     * @param direction   The direction for rotate
     */
    ThreeService.prototype.changeCameraPosition = function (direction) {
        var currentModel = this.scene.getObjectByName('currentModel');
        var cylinder = this.scene.getObjectByName('currentTexture');
        if (direction === 'left') {
            cylinder.rotation.y -= 5 / (Math.PI);
        }
        else {
            cylinder.rotation.y += 5 / (Math.PI);
        }
        this.render();
    };
    /* EVENTS */
    /**
     * @ignore
     */
    ThreeService.prototype.onMouseDown = function (event) {
        /*console.log('onMouseDown');
        event.preventDefault();
    
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, this.camera);
    
        console.log('ControlDistance: ' + this.controls.distance);
    
    
        const obj: THREE.Object3D[] = [];
        this.findAllObjects(obj, this.scene);
        const intersects = raycaster.intersectObjects(obj);
        console.log('Scene has ' + obj.length + ' objects');
        console.log('Camera position ' + this.camera.position.x + ', ' + this.camera.position.y + ', ' + this.camera.position.z);
        console.log(intersects.length + ' intersected objects found');
        intersects.forEach((i) => {
          console.log(i.object); // do what you want to do with object
        });
        */
    };
    ThreeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThreeService);
    return ThreeService;
}());



/***/ }),

/***/ "./src/app/shared/components/accordion/accordion.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/accordion/accordion.component.ts ***!
  \********************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.component */ "./src/app/shared/components/accordion/item.component.ts");



/**
 * Accordion Component
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    /**
     * @ignore
     */
    AccordionComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        /**
         * collapsed items
         */
        var collapsedItem = this.items.filter(function (item) { return item.collapsed; });
        // if there is no active tab set, activate the first
        if (collapsedItem.length === 0) {
            this.selectItem(this.items.first);
        }
    };
    /**
     * @param item    The selected Accordion-Item
     * Collapse the selected Item
     */
    AccordionComponent.prototype.selectItem = function (item) {
        // deactivate all tabs
        this.items.toArray().forEach(function (item) { return item.collapsed = false; });
        // activate the tab the user has clicked on.
        item.collapsed = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_item_component__WEBPACK_IMPORTED_MODULE_2__["ItemComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], AccordionComponent.prototype, "items", void 0);
    AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gc-accordion',
            template: "\n    <ul class=\"nav flex-column\">\n      <ng-container *ngFor=\"let item of items\" (click)=\"selectItem(item)\">\n        <ng-content></ng-content>\n      </ng-container>\n    </ul>\n  "
        })
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/accordion/item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/accordion/item.component.ts ***!
  \***************************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Accordion-Item Component
 */
var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
        /**
         * If Collapsed then true
         */
        this.collapsed = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('itemTitle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ItemComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('itemId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ItemComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "collapsed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('iconClass'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ItemComponent.prototype, "iconClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ItemComponent.prototype, "template", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gc-item',
            template: "\n    <li class=\"nav-item\">\n      <a [class.active]=\"collapsed\"\n         class=\"nav-link d-flex align-items-center collapsed\"\n         data-toggle=\"collapse\"\n         [href]=\"'#' + id\"\n         [attr.aria-expanded]=\"collapsed\"\n         [attr.aria-controls]=\"id\">\n        <span class=\"mr-5 mdi\" [ngClass]=\"iconClass\"></span>\n        {{title}}\n      </a>\n      <div class=\"collapse\" [class.show]=\"collapsed\" id=\"{{id}}\" data-parent=\"#accordion\">\n        <ng-content></ng-content>\n      </div>\n    </li>\n  "
        })
        /**
         * @ignore
         */
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tabs/tab.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/tabs/tab.component.ts ***!
  \*********************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Tab-Item Component
 */
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        /**
         * Saves the active-state of the Tab
         */
        this.active = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tabTitle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabComponent.prototype, "active", void 0);
    TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gc-tab',
            template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tabs/tabs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.ts ***!
  \**********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab.component */ "./src/app/shared/components/tabs/tab.component.ts");



/**
 * Tabs Component
 */
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    /**
     * Check active Tab afterContentInit
     */
    TabsComponent.prototype.ngAfterContentInit = function () {
        /**
         * all active Tabs
         */
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    /**
     *
     * @param tab   The clicked Tab
     * set selected Tab to active
     */
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_tab_component__WEBPACK_IMPORTED_MODULE_2__["TabComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gc-tabs',
            template: "\n    <ul class=\"nav nav-tabs nav-fill\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\">\n        <a [class.active]=\"tab.active\" class=\"nav-link nav-title\" href=\"#\"><span class=\"mr-3 mdi mdi-gauge\"></span>{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  "
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/shared/service/data.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/service/data.service.ts ***!
  \************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scene_service_three_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scene/service/three.service */ "./src/app/scene/service/three.service.ts");



/**
 * DataService
 */
var DataService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param three  Implements the ThreeService for update the 3D View
     */
    function DataService(three) {
        this.three = three;
        /**
         * @ignore
         */
        this.count = 100;
        /**
         * The size of the selected cup
         */
        this.size = 0.2;
        /**
         * Is true if selectedImages is set,
         * but not uploaded
         */
        this.state = false;
        /**
         * @ignore
         */
        this.stroke = false;
        /**
         * @ignore
         */
        this.price = 99.99;
        /**
         * The selected 3D Model
         */
        this.model = 'small';
    }
    /**
     * loads a Design, if the user click the
     * upload button
     */
    DataService.prototype.loadDesign = function () {
        this.three.reloadTexture(this.selectedImage);
        this.state = false;
    };
    /**
     * reset the current File
     * update the model and cupSize
     */
    DataService.prototype.setModel = function (model) {
        // check if uploaded
        if (this.selectedImage !== undefined) {
            console.log('Texture will be deleted... ' + this.selectedImage);
        }
        this.selectedImage = undefined;
        this.designName = undefined;
        this.designSize = undefined;
        this.model = model;
        this.setSize(model);
        this.three.setCupSize(model);
        if (model !== undefined) {
            this.state = true;
        }
        this.three.reloadModel(model);
    };
    /**
     * Update the Size if model is changing
     */
    DataService.prototype.setSize = function (model) {
        switch (model) {
            case 'medium': {
                this.size = .3;
                break;
            }
            case 'normal': {
                this.size = .4;
                break;
            }
            case 'large': {
                this.size = .5;
                break;
            }
            default: {
                this.size = .2;
                break;
            }
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scene_service_three_service__WEBPACK_IMPORTED_MODULE_2__["ThreeService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _components_tabs_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs/tab.component */ "./src/app/shared/components/tabs/tab.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accordion/accordion.component */ "./src/app/shared/components/accordion/accordion.component.ts");
/* harmony import */ var _components_accordion_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/accordion/item.component */ "./src/app/shared/components/accordion/item.component.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tabs_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"], _components_accordion_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ],
            exports: [_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tabs_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"], _components_accordion_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/**
 * @ignore
 */
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lukas\Webprojects\gc-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map