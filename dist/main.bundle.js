webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-sentence/add-sentence.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-sentence/add-sentence.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"accordion1\" class=\"accordionParent\">\n  <div class=\"card\">\n    <div class=\"card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseOne\">\n      <a class=\"card-title\">\n        <b>Aggiungi</b>\n      </a>\n    </div>\n\n    <div id=\"collapseOne\" class=\"card-body collapse\" data-parent=\"#accordion1\">\n\n      <form name=\"form\" (ngSubmit)=\"f.valid\" #f=\"ngForm\" novalidate>\n        <div class=\"form-row\">\n          <div class=\"col-md-3\">\n            <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Nome\" [(ngModel)]=\"model.name\" required [ngClass]=\"{ 'has-error': f.submitted  && !model.name.valid }\">\n          </div>\n          <div class=\"col-md-6\">\n            <textarea class=\"form-control\" id=\"sentence\" name=\"sentence\" [(ngModel)]=\"model.sentence\" required #sentence placeholder=\"Frase celebre\"\n              [ngClass]=\"{ 'has-error': f.submitted  && !model.sentence.valid }\" rows=\"1\"></textarea>\n          </div>\n          <div class=\"col-md-3\">\n            <input type=\"date\" class=\"form-control\" id=\"time\" name=\"time\" placeholder=\"time\" [(ngModel)]=\"model.time\" required [ngClass]=\"{ 'has-error': f.submitted  && !model.time.valid }\">\n          </div>\n\n\n        </div>\n        <div class=\"clearfix\">\n          <div class=\"row\">&nbsp;</div>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" [disabled]=\"!f.valid\" (click)=\"addSentence(model)\" class=\"btn btn-primary\">Aggiungi</button>\n        </div>\n      </form>\n\n\n    </div>\n  </div>\n</div>\n\n\n<div class=\"clearfix\">\n  <div class=\"row\">&nbsp;</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add-sentence/add-sentence.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSentenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_emit_service__ = __webpack_require__("../../../../../src/app/common/service/emit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import rxjs map operator

var AddSentenceComponent = (function () {
    function AddSentenceComponent(http, emitService) {
        this.http = http;
        this.emitService = emitService;
        // Link to our api, pointing to localhost 
        this.API = 'http://localhost:3000';
        // Declare empty list of sentences
        this.sentences = [];
        this.model = {};
    }
    AddSentenceComponent.prototype.ngOnInit = function () {
    };
    // Add one person to the API
    AddSentenceComponent.prototype.addSentence = function (model) {
        var _this = this;
        console.log(model);
        var name = model.name;
        var sentence = model.sentence;
        var time = model.time;
        this.http.post("sentences", { name: name, sentence: sentence, time: time })
            .map(function (res) { return res.json(); })
            .subscribe(function () {
            _this.emitService.startSearch(true);
        });
    };
    // Get all Sentences from the API
    AddSentenceComponent.prototype.getAllSentences = function () {
        var _this = this;
        this.http.get("sentences")
            .map(function (res) { return res.json(); })
            .subscribe(function (sentences) {
            console.log(sentences);
            _this.sentences = sentences;
        });
    };
    AddSentenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-sentence',
            template: __webpack_require__("../../../../../src/app/add-sentence/add-sentence.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-sentence/add-sentence.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__common_service_emit_service__["a" /* EmitService */]])
    ], AddSentenceComponent);
    return AddSentenceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navigator></navigator>\n\n<div class=\"clearfix\">\n  <div class=\"row\">&nbsp;</div>\n</div>\n\n\n<div class=\"container\">\n  <app-add-sentence></app-add-sentence>\n  <view-table></view-table>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_emit_service__ = __webpack_require__("../../../../../src/app/common/service/emit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import rxjs map operator

var AppComponent = (function () {
    function AppComponent(http, emitService) {
        this.http = http;
        this.emitService = emitService;
        // Link to our api, pointing to localhost
        this.API = 'http://localhost:3000';
        // Declare empty list of sentences
        this.sentences = [];
        this.model = {};
    }
    // Add one person to the API
    AppComponent.prototype.addSentence = function (model) {
        var _this = this;
        console.log(model);
        var name = model.name;
        var sentence = model.sentence;
        var time = model.time;
        this.http.post(this.API + "/sentences", { name: name, sentence: sentence, time: time })
            .map(function (res) { return res.json(); })
            .subscribe(function () {
            _this.emitService.startSearch(true);
        });
    };
    // Get all Sentences from the API
    AppComponent.prototype.getAllSentences = function () {
        var _this = this;
        this.http.get(this.API + "/sentences")
            .map(function (res) { return res.json(); })
            .subscribe(function (sentences) {
            console.log(sentences);
            _this.sentences = sentences;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__common_service_emit_service__["a" /* EmitService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_view_table_component__ = __webpack_require__("../../../../../src/app/view/view-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigator_navigator_component__ = __webpack_require__("../../../../../src/app/navigator/navigator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_service_emit_service__ = __webpack_require__("../../../../../src/app/common/service/emit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_sentence_add_sentence_component__ = __webpack_require__("../../../../../src/app/add-sentence/add-sentence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_6_datatable__ = __webpack_require__("../../../../angular-6-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_6_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular_6_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__view_view_table_component__["a" /* ViewTableComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navigator_navigator_component__["a" /* NavigatorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__add_sentence_add_sentence_component__["a" /* AddSentenceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_6_datatable__["DataTableModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__common_service_emit_service__["a" /* EmitService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/service/emit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmitService = (function () {
    function EmitService() {
        this.sentences = [];
        this.flagSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EmitService.prototype.startSearch = function (boo) {
        this.flagSearch.emit(boo);
    };
    EmitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EmitService);
    return EmitService;
}());



/***/ }),

/***/ "../../../../../src/app/navigator/navigator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-light{\n    background-color: rgb(147, 255, 47);\n}\n\n.navbar-light .navbar-brand {\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigator/navigator.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Bootstrap Navbar -->\n<nav class=\"navbar navbar-light bg-faded\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">\n      <b>Frasi celebri </b>\n      <i class=\"far fa-smile\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navigator/navigator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import rxjs map operator

var NavigatorComponent = (function () {
    function NavigatorComponent() {
    }
    NavigatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navigator',
            template: __webpack_require__("../../../../../src/app/navigator/navigator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigator/navigator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigatorComponent);
    return NavigatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/view-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".accordion .card-header:after{\n    font-family: FontAwesome;\n    content: \"\\F068\";\n    float:right;\n}\n.accordion .card-header.collapsed:after{\n    font-family: FontAwesome;\n    content: \"\\F067\";\n    float:right;\n}\n\n.card-body{\n   padding: 0\n}\n\nimg {\n    width: 50%\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/view-table.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"accordionTable\" class=\"accordionParent\">\n\n  <div class=\"card mb-0\">\n    <div class=\"card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseTable\">\n      <a class=\"card-title\">\n          <b>Visualizza</b>\n      </a>\n    </div>\n    <div id=\"collapseTable\" class=\"card-body collapse\" data-parent=\"#accordionTable\">\n      <div  class=\"card card-block col-md-12\" *ngFor=\"let sentence of sentences\">\n        <div class=\"row\">\n          <div class=\"col-md-7\">\n            <h4 class=\"card-title\"> {{sentence.name}} - {{sentence.sentence}}</h4>\n          </div>\n          <div class=\"col-md-3\">\n            <h4 class=\"card-title\"> {{sentence.time | date}} </h4>\n          </div>\n          <div class=\"col-md-1\">\n            <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"deleteSentence(sentence._id)\" [style.cursor]=\"pointer\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>-->\n<div id=\"accordionTable\" class=\"accordionParent\">\n  <div class=\"card mb-0\">\n    <div class=\"card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseTable\">\n      <a class=\"card-title\">\n        <b>Visualizza</b>\n      </a>\n    </div>\n    <div id=\"collapseTable\" class=\"card-body collapse\" data-parent=\"#accordionTable\">\n       <table class=\"table table-striped\" [mfData]=\"sentences\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n        <thead>\n          <tr>\n            <th style=\"width: 15%\">\n            </th>\n            <th style=\"width: 65%\">\n              <mfDefaultSorter by=\"sentence\">Frase celebre</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"time\">Quando</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"delete\"></mfDefaultSorter>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let sentence of sentences\">\n            <td><img src=\"{{sentence.srcPhoto}}\" /></td>\n            <td>{{sentence.sentence}}</td>\n            <td>{{sentence.time | date}}</td>\n            <td>\n              <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"deleteSentence(sentence._id)\" [style.cursor]=\"pointer\"></i>\n            </td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n            <td colspan=\"4\">\n              <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n            </td>\n          </tr>\n        </tfoot>\n      </table>\n\n<!--\n      <table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n        <thead>\n          <tr>\n            <th style=\"width: 20%\">\n              <mfDefaultSorter by=\"name\">UserName</mfDefaultSorter>\n            </th>\n            <th style=\"width: 50%\">\n              <mfDefaultSorter by=\"email\">UserEmail</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"age\">Age</mfDefaultSorter>\n            </th>\n            <th style=\"width: 20%\">\n              <mfDefaultSorter by=\"city\">User City</mfDefaultSorter>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of mf.data\">\n            <td>{{user.name}}</td>\n            <td>{{user.email}}</td>\n            <td class=\"text-right\">{{user.age}}</td>\n            <td>{{user.city | uppercase}}</td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n            <td colspan=\"4\">\n              <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n            </td>\n          </tr>\n        </tfoot>\n      </table>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view/view-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_emit_service__ = __webpack_require__("../../../../../src/app/common/service/emit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import rxjs map operator

var ViewTableComponent = (function () {
    function ViewTableComponent(http, emitService) {
        var _this = this;
        this.http = http;
        this.emitService = emitService;
        // Link to our api, pointing to localhost
        this.API = 'http://localhost:3000';
        // Declare empty list of sentences
        this.sentences = [];
        emitService.flagSearch.subscribe(function (item) {
            console.log(item);
            _this.getAllSentences();
        });
    }
    // Angular 2 Life Cycle event when component has been initialized
    ViewTableComponent.prototype.ngOnInit = function () {
        /*this.data = [{'name':'Anil', 'anil.singh581@gmail.com' :'ssd', 'age' :'34', 'city':'Noida, UP, India' },
        {'name':'Anil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
        {'name':'Sunil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
        {'name':'Alok', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
        {'name':'Tinku', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
        {'name':'XYZ', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
        {'name':'asas', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
        {'name':'erer', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
        {'name':'jhjh', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' }
        ]*/
        this.getAllSentences();
    };
    ViewTableComponent.prototype.deleteSentence = function (id) {
        var _this = this;
        this.http.delete("sentences/" + id)
            .map(function (res) { return res.json(); })
            .subscribe(function () {
            _this.getAllSentences();
        });
    };
    // Get all Sentences from the API
    ViewTableComponent.prototype.getAllSentences = function () {
        var _this = this;
        this.http.get("sentences")
            .map(function (res) { return res.json(); })
            .subscribe(function (sentences) {
            console.log(sentences);
            _this.emitService.sentences = sentences;
            sentences.map(function (sentence) {
                switch (sentence.name) {
                    case 'Manu':
                        sentence.srcPhoto = './../../assets/Manu_20180908_165339.jpg';
                        break;
                    case 'Noemi':
                        sentence.srcPhoto = './../../assets/Noemi_20180808.jpg';
                        break;
                }
            });
            _this.sentences = sentences;
        });
    };
    ViewTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'view-table',
            template: __webpack_require__("../../../../../src/app/view/view-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/view-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__common_service_emit_service__["a" /* EmitService */]])
    ], ViewTableComponent);
    return ViewTableComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map