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

/***/ "./src/app/admin/admin-bloques-registro/admin-bloques-registro.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/admin-bloques-registro/admin-bloques-registro.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csa-card{\n  max-width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  background: linear-gradient(to top left, #702082 38%, #993399 100%);\n}\n\n.care-card{\n  max-width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  background: linear-gradient(to top left, #ff671f 18%, #ff9900 78%);\n}\n\n.ejecutivo-card{\n  max-width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  background: linear-gradient(to bottom right, #41b6e6 38%, #3399ff 100%);\n}\n\np{\n  font-size: 20px;\n}\n\nh1{\n  color: black;\n  font-family: helvetica;\n}\n\nul{\n  list-style: none;\n  columns: 2;\n  -webkit-columns: 2;\n  -moz-columns: 2;\n}\n\n.card-title{\n  font-size: 40px;\n}\n\n*{\n  font-family: helvetica;\n  color: white;\n}\n\n.card-buttons {\n  text-align: center;\n}\n\n.edit-button{\n  background-color: #0d98ba;\n  display: inline-block;\n}\n\n.delete-button{\n  background-color: red;\n  display: inline-block;\n}\n"

/***/ }),

/***/ "./src/app/admin/admin-bloques-registro/admin-bloques-registro.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/admin/admin-bloques-registro/admin-bloques-registro.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar-admin></app-nav-bar-admin>\n\n<div class=\"title-button\">\n  <div class=\"title\" align=\"left\">\n    <h1>Administración de Bloques de Registro</h1>\n  </div>\n  <div class=\"button\" align=\"right\">\n    <button mat-raised-button class=\"create-button\">Crear Elección</button>\n  </div>\n</div>\n\n<mat-grid-list cols=\"1\" rowHeight=\"300px\" *ngFor=\"let bloque of arrDataBloques\">\n    <mat-card *ngIf=\"bloque.type === 'csa'\" class=\"csa-card\">\n      <mat-card-header>\n        <mat-card-title class=\"card-title\">{{bloque.name}}</mat-card-title>\n        <mat-card-subtitle>16/07/2018 9:00 AM - 6:00 PM</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>Grupos a elección</p>\n          <ul *ngFor=\"let grupo of bloque.gruposEstudiantiles\">\n            <li>{{grupo}}<li>\n          </ul>\n      </mat-card-content>\n      <mat-card-actions class=\"card-buttons\">\n        <button mat-raised-button class=\"edit-button\">Editar</button>\n        <button mat-raised-button class=\"delete-button\">Eliminar</button>\n      </mat-card-actions>\n    </mat-card>\n\n  <ng-template [ngIf]=\"bloque.type === 'care'\">\n    <mat-card class=\"care-card\">\n      <mat-card-header>\n        <mat-card-title class=\"card-title\">{{bloque.name}}</mat-card-title>\n        <mat-card-subtitle>16/07/2018 9:00 AM - 6:00 PM</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>Grupos a elección</p>\n          <ul *ngFor=\"let grupo of bloque.gruposEstudiantiles\">\n            <li>{{grupo}}<li>\n          </ul>\n      </mat-card-content>\n      <mat-card-actions class=\"card-buttons\">\n        <button mat-raised-button class=\"edit-button\">Editar</button>\n        <button mat-raised-button class=\"delete-button\">Eliminar</button>\n      </mat-card-actions>\n    </mat-card>\n  </ng-template>\n\n  <ng-template [ngIf]=\"bloque.type === 'ejecutivo'\">\n    <mat-card class=\"ejecutivo-card\">\n      <mat-card-header>\n        <mat-card-title class=\"card-title\">{{bloque.name}}</mat-card-title>\n        <mat-card-subtitle>16/07/2018 9:00 AM - 6:00 PM</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>Grupos a elección</p>\n          <ul *ngFor=\"let grupo of bloque.gruposEstudiantiles\">\n            <li>{{grupo}}<li>\n          </ul>\n      </mat-card-content>\n      <mat-card-actions class=\"card-buttons\">\n        <button mat-raised-button class=\"edit-button\">Editar</button>\n        <button mat-raised-button class=\"delete-button\">Eliminar</button>\n      </mat-card-actions>\n    </mat-card>\n  </ng-template>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/admin/admin-bloques-registro/admin-bloques-registro.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/admin-bloques-registro/admin-bloques-registro.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminBloquesRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBloquesRegistroComponent", function() { return AdminBloquesRegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminBloquesRegistroComponent = /** @class */ (function () {
    function AdminBloquesRegistroComponent(db, router) {
        this.db = db;
        this.router = router;
        this.arrDataBloques = [];
    }
    AdminBloquesRegistroComponent.prototype.ngOnInit = function () {
        this.fetchBloques();
    };
    AdminBloquesRegistroComponent.prototype.fetchBloques = function () {
        var _this = this;
        this.db.database.ref("Bloques de registro/2018/Ago-Dic").once('value').then(function (snap) {
            snap.forEach(function (element) {
                var arrGruposEstudiantiles = [];
                _this.nombreBloque = element.val().name;
                _this.type = element.val().type;
                _this.db.database.ref("Bloques de registro/2018/Ago-Dic/" + _this.nombreBloque + "/Elecciones").once('value').then(function (snap) {
                    snap.forEach(function (element) {
                        arrGruposEstudiantiles.push(element.val().name);
                    });
                });
                _this.arrDataBloques.push({ name: _this.nombreBloque, type: _this.type, gruposEstudiantiles: arrGruposEstudiantiles });
                console.log(_this.arrDataBloques);
            });
        });
    };
    AdminBloquesRegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-bloques-registro',
            template: __webpack_require__(/*! ./admin-bloques-registro.component.html */ "./src/app/admin/admin-bloques-registro/admin-bloques-registro.component.html"),
            styles: [__webpack_require__(/*! ./admin-bloques-registro.component.css */ "./src/app/admin/admin-bloques-registro/admin-bloques-registro.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminBloquesRegistroComponent);
    return AdminBloquesRegistroComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-db/admin-db.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/admin-db/admin-db.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n    margin: auto;\n    width: 50%;\n    padding: 10px;\n}\n\ninput{\n    /* background-color:#673ab7; */\n    color: black;\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n    margin: 20px;\n    font-size: 15px;\n}\n\ninput[type=\"file\" i]{\n    color:gray;\n}\n\n.upload-btn-wrapper {\n    position: relative;\n    overflow: hidden;\n    display: inline-block;\n  }\n\n.btn {\n    \n    color: white;\n    background-color: gray;\n    padding: 8px 20px;\n    font-size: 15px;\n  }\n\n.upload-btn-wrapper input[type=file] {\n    font-size: 100px;\n    position: absolute;\n    left: 0;\n    opacity: 0;\n  }"

/***/ }),

/***/ "./src/app/admin/admin-db/admin-db.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/admin-db/admin-db.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar-admin></app-nav-bar-admin>\n<div class=\"container center\">\n        <div class=\"upload-btn-wrapper\">\n                <button class=\"btn\">Upload a file</button>\n                <input type=\"file\" style=\"display: inline-block;\" (change)=\"incomingfile($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\n              </div>\n        <button style=\"position: absolute; display: block;\" mat-raised-button color=\"primary\" (click)=\"Upload()\">Upload</button>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-db/admin-db.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/admin-db/admin-db.component.ts ***!
  \******************************************************/
/*! exports provided: AdminDbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDbComponent", function() { return AdminDbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ts_xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-xlsx */ "./node_modules/ts-xlsx/lib/main.browser.js");
/* harmony import */ var ts_xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ts_xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminDbComponent = /** @class */ (function () {
    function AdminDbComponent(db) {
        this.db = db;
        this.filteredData = [];
    }
    AdminDbComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
    };
    AdminDbComponent.prototype.Upload = function () {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = ts_xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            _this.filterData(ts_xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(worksheet, { raw: true }));
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    AdminDbComponent.prototype.filterData = function (excelData) {
        var _this = this;
        excelData.forEach(function (element) {
            _this.filteredData[element.matricula] = {
                fname: element.Nombre + " " + element.ApPaterno + " " + element.ApMaterno,
                major: element.DescMajor,
                state: element.Estado
            };
        });
        this.db.database.ref('database/').set(this.filteredData);
    };
    AdminDbComponent.prototype.ngOnInit = function () {
    };
    AdminDbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-db',
            template: __webpack_require__(/*! ./admin-db.component.html */ "./src/app/admin/admin-db/admin-db.component.html"),
            styles: [__webpack_require__(/*! ./admin-db.component.css */ "./src/app/admin/admin-db/admin-db.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], AdminDbComponent);
    return AdminDbComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-elecciones/dashboard-elecciones/dashboard-elecciones.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/admin-elecciones/dashboard-elecciones/dashboard-elecciones.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: helvetica;\n  font-weight: 900;\n  font-size: 40px;\n}\n\n.title-button{\n  display: block;\n  width: 100%;\n}\n\n.title{\n  display: inline-block;\n  padding-left: 20px;\n}\n\n.button{\n  padding-right: 20px;\n}\n\n.create-button{\n  background-color: #198C19;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/admin/admin-elecciones/dashboard-elecciones/dashboard-elecciones.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/admin-elecciones/dashboard-elecciones/dashboard-elecciones.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar-admin></app-nav-bar-admin>\n\n<div class=\"title-button\">\n  <div class=\"title\" align=\"left\">\n    <p>Administración de Elecciones<p>\n  </div>\n  <div class=\"button\" align=\"right\">\n    <button mat-raised-button class=\"create-button\">Crear Elección</button>\n  </div>\n</div>\n<app-elecciones-grid></app-elecciones-grid>\n"

/***/ }),

/***/ "./src/app/admin/admin-elecciones/dashboard-elecciones/dashboard-elecciones.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/admin-elecciones/dashboard-elecciones/dashboard-elecciones.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DashboardEleccionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEleccionesComponent", function() { return DashboardEleccionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/database.service */ "./src/app/services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardEleccionesComponent = /** @class */ (function () {
    function DashboardEleccionesComponent(databaseService) {
        this.databaseService = databaseService;
    }
    DashboardEleccionesComponent.prototype.ngOnInit = function () {
        this.databaseService.getElecciones().subscribe(function (elecciones) {
            console.log(elecciones);
        });
    };
    DashboardEleccionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-elecciones',
            template: __webpack_require__(/*! ./dashboard-elecciones.component.html */ "./src/app/admin/admin-elecciones/dashboard-elecciones/dashboard-elecciones.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-elecciones.component.css */ "./src/app/admin/admin-elecciones/dashboard-elecciones/dashboard-elecciones.component.css")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], DashboardEleccionesComponent);
    return DashboardEleccionesComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-elecciones/eleccion-card/eleccion-card.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/admin-elecciones/eleccion-card/eleccion-card.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eleccion-card{\n  max-width: 500px;\n  background: linear-gradient(to top left, #702082 38%, #993399 100%);\n}\n\np{\n  font-size: 20px;\n}\n\nul{\n  list-style: none;\n  columns: 2;\n  -webkit-columns: 2;\n  -moz-columns: 2;\n}\n\n.card-title{\n  font-size: 40px;\n}\n\n*{\n  font-family: helvetica;\n  color: white;\n}\n\n.card-buttons {\n  text-align: center;\n}\n\n.edit-button{\n  background-color: #0d98ba;\n  display: inline-block;\n}\n\n.delete-button{\n  background-color: red;\n  display: inline-block;\n}\n"

/***/ }),

/***/ "./src/app/admin/admin-elecciones/eleccion-card/eleccion-card.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/admin-elecciones/eleccion-card/eleccion-card.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"eleccion-card\">\n  <mat-card-header>\n    <mat-card-title class=\"card-title\" >Bloque 1</mat-card-title>\n    <mat-card-subtitle>16/07/2018 9:00 AM - 6:00 PM</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>Grupos a elección</p>\n      <ul>\n        <li>Ing. en Tecno. Computacionales<li>\n        <li>Lic. en Economía<li>\n        <li>Arquitecto</li>\n        <li>Ing. Industrial y de Sistemas</li>\n        <li>Lic. en Comunicación y Med Dig</li>\n        <li>Lic. en Relaciones Internacion</li>\n        <li>Ing. en Innovación y Desarrollo</li>\n        <li>Lic. en Comunicación y Med Dig</li>\n      </ul>\n  </mat-card-content>\n  <mat-card-actions class=\"card-buttons\">\n    <button mat-raised-button class=\"edit-button\">Editar</button>\n    <button mat-raised-button class=\"delete-button\">Eliminar</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/admin/admin-elecciones/eleccion-card/eleccion-card.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/admin-elecciones/eleccion-card/eleccion-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EleccionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EleccionCardComponent", function() { return EleccionCardComponent; });
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

var EleccionCardComponent = /** @class */ (function () {
    function EleccionCardComponent() {
    }
    EleccionCardComponent.prototype.ngOnInit = function () {
    };
    EleccionCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eleccion-card',
            template: __webpack_require__(/*! ./eleccion-card.component.html */ "./src/app/admin/admin-elecciones/eleccion-card/eleccion-card.component.html"),
            styles: [__webpack_require__(/*! ./eleccion-card.component.css */ "./src/app/admin/admin-elecciones/eleccion-card/eleccion-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EleccionCardComponent);
    return EleccionCardComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-elecciones/elecciones-grid/elecciones-grid.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/admin-elecciones/elecciones-grid/elecciones-grid.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-elecciones/elecciones-grid/elecciones-grid.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-elecciones/elecciones-grid/elecciones-grid.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"400px\">\n  <mat-grid-tile>\n      <app-eleccion-card></app-eleccion-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n      <app-eleccion-card></app-eleccion-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n      <app-eleccion-card></app-eleccion-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n      <app-eleccion-card></app-eleccion-card>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/admin/admin-elecciones/elecciones-grid/elecciones-grid.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-elecciones/elecciones-grid/elecciones-grid.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EleccionesGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EleccionesGridComponent", function() { return EleccionesGridComponent; });
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

var EleccionesGridComponent = /** @class */ (function () {
    function EleccionesGridComponent() {
    }
    EleccionesGridComponent.prototype.ngOnInit = function () {
    };
    EleccionesGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-elecciones-grid',
            template: __webpack_require__(/*! ./elecciones-grid.component.html */ "./src/app/admin/admin-elecciones/elecciones-grid/elecciones-grid.component.html"),
            styles: [__webpack_require__(/*! ./elecciones-grid.component.css */ "./src/app/admin/admin-elecciones/elecciones-grid/elecciones-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EleccionesGridComponent);
    return EleccionesGridComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-registros/admin-registros.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-registros/admin-registros.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n\twidth: 100%;\n}"

/***/ }),

/***/ "./src/app/admin/admin-registros/admin-registros.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-registros/admin-registros.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar-admin></app-nav-bar-admin>\n\n<div id=\"title\">\n\t<h1>Registro de candidaturas</h1>\n</div>\n\n<div id=\"consejos\">\n\t<button mat-raised-button>CSA</button>\n\t<button mat-raised-button>CARE</button>\n\t<button mat-raised-button>General</button>\n</div>\n\n<div id=\"bloques\">\n\t<button mat-raised-button>Bloque 1</button>\n\t<button mat-raised-button>Bloque 2</button>\n\t<button mat-raised-button>Bloque 3</button>\n</div>\n\n<h2>Bloque 1</h2>\n\n<div id=\"candidaturas\">\n\t<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\t\t<!-- Columna: número de candidatura (id) -->\n\t\t<ng-container matColumnDef=\"numCandidatura\">\n\t\t\t<th mat-header-cell *matHeaderCellDef> N&uacute;mero de candidatura </th>\n\t\t\t<td mat-cell *matCellDef=\"let element\"> {{element.numCandidatura}} </td>\n\t\t</ng-container>\n\n\t\t<!-- Columna: grupo estudiantil al que se aplica -->\n\t\t<ng-container matColumnDef=\"grupoEstudiantil\">\n\t\t\t<th mat-header-cell *matHeaderCellDef> Grupo estudiantil </th>\n\t\t\t<td mat-cell *matCellDef=\"let element\"> {{element.grupoEstudiantil}} </td>\n\t\t</ng-container>\n\n\t\t<!-- Columna: nombre de la candidatura -->\n\t\t<ng-container matColumnDef=\"nombreCandidatura\">\n\t\t\t<th mat-header-cell *matHeaderCellDef> Nombre de candidatura </th>\n\t\t\t<td mat-cell *matCellDef=\"let element\"> {{element.nombreCandidatura}} </td>\n\t\t</ng-container>\n\n\t\t<!-- Columna: estatus de la candidatura -->\n\t\t<ng-container matColumnDef=\"estatusCandidatura\">\n\t\t\t<th mat-header-cell *matHeaderCellDef> Estatus </th>\n\t\t\t<td mat-cell *matCellDef=\"let element\"> {{element.estatusCandidatura}} </td>\n\t\t</ng-container>\n\n\t\t<!-- Columna: estatus de la candidatura -->\n\t\t<ng-container matColumnDef=\"detalleCandidatura\">\n\t\t\t<th mat-header-cell *matHeaderCellDef> Detalle </th>\n\t\t\t<td mat-cell *matCellDef=\"let element\"> {{element.detalleCandidatura}} </td>\n\t\t</ng-container>\n\n\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-registros/admin-registros.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-registros/admin-registros.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminRegistrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegistrosComponent", function() { return AdminRegistrosComponent; });
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

// Datos estáticos, cambiar cuando lo conecten con el backend.
// @Poncho: ¿nos puedes explicar los valores posibles de estatus?
var ELEMENT_DATA = [
    { numCandidatura: 1, grupoEstudiantil: 'Sociedad de Alumnos de ITC', nombreCandidatura: 'Switch', estatusCandidatura: 'Cancelado', detalleCandidatura: 'TBD' },
    { numCandidatura: 2, grupoEstudiantil: 'Sociedad de Alumnos de INT', nombreCandidatura: 'All Possible', estatusCandidatura: 'Modificación', detalleCandidatura: 'TBD' },
    { numCandidatura: 3, grupoEstudiantil: 'Sociedad de Alumnos de I2D', nombreCandidatura: 'Reinventa', estatusCandidatura: 'Baja', detalleCandidatura: 'TBD' },
    { numCandidatura: 4, grupoEstudiantil: 'Sociedad de Alumnos de ITC', nombreCandidatura: 'Reboot', estatusCandidatura: 'Aceptado', detalleCandidatura: 'TBD' },
    { numCandidatura: 5, grupoEstudiantil: 'Sociedad de Alumnos de INT', nombreCandidatura: 'SAINTs', estatusCandidatura: 'Esperando revisión', detalleCandidatura: 'TBD' },
];
var AdminRegistrosComponent = /** @class */ (function () {
    function AdminRegistrosComponent() {
        this.displayedColumns = ['numCandidatura', 'grupoEstudiantil', 'nombreCandidatura', 'estatusCandidatura', 'detalleCandidatura'];
        this.dataSource = ELEMENT_DATA;
    }
    AdminRegistrosComponent.prototype.ngOnInit = function () {
    };
    AdminRegistrosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-registros',
            template: __webpack_require__(/*! ./admin-registros.component.html */ "./src/app/admin/admin-registros/admin-registros.component.html"),
            styles: [__webpack_require__(/*! ./admin-registros.component.css */ "./src/app/admin/admin-registros/admin-registros.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminRegistrosComponent);
    return AdminRegistrosComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-resultados/admin-resultados.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/admin-resultados/admin-resultados.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-resultados/admin-resultados.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/admin-resultados/admin-resultados.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar-admin></app-nav-bar-admin>\n\n<!-- El usuario selecciona el año, periodo académico y elección que requiera consultar. -->\n<mat-form-field>\n\t<mat-select [(value)]=\"selectedYear\" placeholder=\"A&ntilde;o\">\n\t\t<mat-option>None</mat-option>\n\t\t<mat-option value=\"option1\">2018</mat-option>\n\t\t<mat-option value=\"option2\">2017</mat-option>\n\t\t<mat-option value=\"option3\">2016</mat-option>\n\t</mat-select>\n</mat-form-field>\n\n<mat-form-field>\n\t<mat-select [(value)]=\"selectedSemester\" placeholder=\"Semestre\">\n\t\t<mat-option>None</mat-option>\n\t\t<mat-option value=\"option1\">Ene-May</mat-option>\n\t\t<mat-option value=\"option2\">Ago-Dic</mat-option>\n\t</mat-select>\n</mat-form-field>\n\n<mat-form-field>\n\t<mat-select [(value)]=\"selectedElection\" placeholder=\"Tipo de elecci&oacute;n\">\n\t\t<mat-option>None</mat-option>\n\t\t<mat-option value=\"option1\">Sociedades de alumnos</mat-option>\n\t\t<mat-option value=\"option2\">Asociaciones regionales y extranjeras</mat-option>\n\t\t<mat-option value=\"option3\">Elecci&oacute;n general</mat-option>\n\t</mat-select>\n</mat-form-field>\n\n<!-- El usuario selecciona la carrera, estado o grupo estudiantil que requiera consultar. -->\n\n\t  \n\n<!-- El sistema presenta al usuario con un dashboard con los resultados  de la participación estudiantil en la elección seleccionada. -->"

/***/ }),

/***/ "./src/app/admin/admin-resultados/admin-resultados.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-resultados/admin-resultados.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminResultadosComponent", function() { return AdminResultadosComponent; });
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

var AdminResultadosComponent = /** @class */ (function () {
    function AdminResultadosComponent() {
    }
    AdminResultadosComponent.prototype.ngOnInit = function () {
    };
    AdminResultadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-resultados',
            template: __webpack_require__(/*! ./admin-resultados.component.html */ "./src/app/admin/admin-resultados/admin-resultados.component.html"),
            styles: [__webpack_require__(/*! ./admin-resultados.component.css */ "./src/app/admin/admin-resultados/admin-resultados.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminResultadosComponent);
    return AdminResultadosComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-roles/admin-roles.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-roles/admin-roles.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n\twidth: 100%;\n}"

/***/ }),

/***/ "./src/app/admin/admin-roles/admin-roles.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-roles/admin-roles.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar-admin></app-nav-bar-admin>\n\n<div id=\"title\">\n\t<h1>Administraci&oacute;n de roles</h1>\n</div>\n\n<div id=\"filtro-tipo-usuario\">\n\t<button mat-raised-button>Administrador</button>\n\t<button mat-raised-button>Asesor</button>\n</div>\n\n<button mat-fab color=\"primary\" id=\"agregar-rol\">+</button>\n\n<div id=\"resultados\">\n\t<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\t\t<!-- Columna: matrícula del usuario -->\n\t\t<ng-container matColumnDef=\"matricula\">\n\t\t\t<th mat-header-cell *matHeaderCellDef> Matr&iacute;cula </th>\n\t\t\t<td mat-cell *matCellDef=\"let element\"> {{element.matricula}} </td>\n\t\t</ng-container>\n\n\t\t<!-- Columna: nombre del usuario -->\n\t\t<ng-container matColumnDef=\"nombre\">\n\t\t\t<th mat-header-cell *matHeaderCellDef> Nombre </th>\n\t\t\t<td mat-cell *matCellDef=\"let element\"> {{element.nombre}} </td>\n\t\t</ng-container>\n\n\t\t<!-- Columna: tipo de rol del usuario -->\n\t\t<ng-container matColumnDef=\"rol\">\n\t\t\t<th mat-header-cell *matHeaderCellDef> Rol asignado </th>\n\t\t\t<td mat-cell *matCellDef=\"let element\"> {{element.rol}} </td>\n\t\t</ng-container>\n\n\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  \t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-roles/admin-roles.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-roles/admin-roles.component.ts ***!
  \************************************************************/
/*! exports provided: AdminRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRolesComponent", function() { return AdminRolesComponent; });
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

// Datos estáticos, cambiar cuando lo conecten con el backend.
var ELEMENT_DATA = [
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
    { matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador' },
];
var AdminRolesComponent = /** @class */ (function () {
    function AdminRolesComponent() {
        this.displayedColumns = ['matricula', 'nombre', 'rol'];
        this.dataSource = ELEMENT_DATA;
    }
    AdminRolesComponent.prototype.ngOnInit = function () {
    };
    AdminRolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-roles',
            template: __webpack_require__(/*! ./admin-roles.component.html */ "./src/app/admin/admin-roles/admin-roles.component.html"),
            styles: [__webpack_require__(/*! ./admin-roles.component.css */ "./src/app/admin/admin-roles/admin-roles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminRolesComponent);
    return AdminRolesComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-card/admin-card.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-card/admin-card.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eleccion-card{\n    max-width: 500px;\n    background: linear-gradient(to top left, #616161 38%, #9E9E9E 100%);\n  }\n  \n  p{\n    font-size: 20px;\n  }\n  \n  ul{\n    list-style: none;\n    columns: 2;\n    -webkit-columns: 2;\n    -moz-columns: 2;\n  }\n  \n  .card-title{\n    font-size: 40px;\n  }\n  \n  *{\n    font-family: helvetica;\n    color: white;\n  }\n  \n  .card-buttons {\n    text-align: center;\n  }\n  \n  .edit-button{\n    background-color: #212121;\n    display: inline-block;\n  }\n  \n  .delete-button{\n    background-color: red;\n    display: inline-block;\n  }"

/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-card/admin-card.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-card/admin-card.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"eleccion-card\">\n  <mat-card-header>\n    <mat-card-title class=\"card-title\" >Bloques</mat-card-title>\n    <mat-card-subtitle>Bloques activas a eleccion</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>Grupos a elección</p>\n      <ul>\n        <li>Ing. en Tecno. Computacionales<li>\n        <li>Lic. en Economía<li>\n        <li>Arquitecto</li>\n        <li>Ing. Industrial y de Sistemas</li>\n        <li>Lic. en Comunicación y Med Dig</li>\n        <li>Lic. en Relaciones Internacion</li>\n        <li>Ing. en Innovación y Desarrollo</li>\n        <li>Lic. en Comunicación y Med Dig</li>\n      </ul>\n  </mat-card-content>\n  <mat-card-actions class=\"card-buttons\">\n    <button mat-raised-button class=\"edit-button\">Administrar</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-card/admin-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-card/admin-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCardComponent", function() { return AdminCardComponent; });
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

var AdminCardComponent = /** @class */ (function () {
    function AdminCardComponent() {
    }
    AdminCardComponent.prototype.ngOnInit = function () {
    };
    AdminCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-card',
            template: __webpack_require__(/*! ./admin-card.component.html */ "./src/app/admin/home/admin-home/admin-card/admin-card.component.html"),
            styles: [__webpack_require__(/*! ./admin-card.component.css */ "./src/app/admin/home/admin-home/admin-card/admin-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminCardComponent);
    return AdminCardComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-dashboard/admin-dashboard.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-dashboard/admin-dashboard.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    font-family: helvetica;\n    font-weight: 900;\n    font-size: 40px;\n  }\n  \n  .title-button{\n    display: block;\n    width: 100%;\n  }\n  \n  .title{\n    display: inline-block;\n    padding-left: 20px;\n  }\n  \n  .button{\n    padding-right: 20px;\n  }\n  \n  .create-button{\n    background-color: #198C19;\n    color: white;\n  }\n  "

/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-dashboard/admin-dashboard.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-dashboard/admin-dashboard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar-admin></app-nav-bar-admin>\n\n<app-admin-grid></app-admin-grid>\n"

/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-dashboard/admin-dashboard.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-dashboard/admin-dashboard.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
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

var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin/home/admin-home/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin/home/admin-home/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-grid/admin-grid.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-grid/admin-grid.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bloque-card{\n    width: 100%;\n    height: 100%;\n    max-width: 500px;\n    max-height: 500px;\n    background: linear-gradient(to top left, #616161 38%, #9E9E9E 100%);\n}\n\n.grupo-card{\n    width: 100%;\n    height: 100%;\n    max-width: 500px;\n    max-height: 500px;\n    max-width: 500px;\n    background: linear-gradient(to top left, #BDBDBD 38%, #E0E0E0 100%);\n}\n\n.grafica-card{\n    width: 100%;\n    height: 100%;\n    max-width: 500px;\n    max-height: 500px;\n    background: linear-gradient(to top left, #616161 38%, #9E9E9E 100%);\n}\n\np{\n    font-size: 20px;    \n}\n\nul{\nlist-style: none;\ncolumns: 2;\n-webkit-columns: 2;\n-moz-columns: 2;\n}\n\n.card-title{\nfont-size: 40px;\n}\n\n*{\nfont-family: helvetica;\ncolor: white;\n}\n\n.card-buttons {\ntext-align: center;\n}\n\n.edit-button{\nbackground-color: #212121;\ndisplay: inline-block;\n}\n\n.delete-button{\nbackground-color: red;\ndisplay: inline-block;\n}\n\ntable {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-grid/admin-grid.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-grid/admin-grid.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"600px\">\n  <mat-grid-tile>\n    <mat-card class=\"bloque-card\">\n      <mat-card-header>\n        <mat-card-title class=\"card-title\" >Bloques</mat-card-title>\n        <mat-card-subtitle>Bloques activos a eleccion</mat-card-subtitle>\n      </mat-card-header>\n              <table mat-table [dataSource]=\"bloques\" class=\"mat-elevation-z8\">\n\n                  <!--- Note that these columns can be defined in any order.\n                        The actual rendered columns are set as a property on the row definition\" -->\n\n                  <!-- Name Column -->\n                  <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef> <b style=\"color:black\">Nombre</b> </th>\n                    <td mat-cell *matCellDef=\"let bloque\"> <p style=\"color:black\">{{bloque.name}}</p> </td>\n                  </ng-container>\n\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumnsBloques\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumnsBloques;\"(click)=\"selectRow(row)\"></tr>\n                </table>\n      <mat-card-actions class=\"card-buttons\">\n        <button mat-raised-button class=\"edit-button\" (click)=\"openDialog()\">Añadir bloque</button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n    <mat-card class=\"grupo-card\">\n      <mat-card-header>\n        <mat-card-title class=\"card-title\" >Grupos</mat-card-title>\n        <mat-card-subtitle>Grupos en el bloque: {{selectedBloque}}</mat-card-subtitle>\n      </mat-card-header>\n      <table mat-table [dataSource]=\"elecciones\" class=\"mat-elevation-z8\">\n\n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> <b style=\"color:black\">Nombre</b> </th>\n            <td mat-cell *matCellDef=\"let eleccion\"> <p style=\"color:black\">{{eleccion.name}}</p> </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumnsElecciones\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumnsElecciones;\"(click)=\"selectRow(row)\"></tr>\n        </table>\n      <mat-card-actions class=\"card-buttons\">\n        <button mat-raised-button class=\"edit-button\" (click)=\"openDialogGrupos()\">Agregar Grupos</button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n      <mat-card class=\"grafica-card\">\n        <div [chart]=\"chart\"></div>\n    </mat-card>\n  </mat-grid-tile>\n\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-grid/admin-grid.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-grid/admin-grid.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGridComponent", function() { return AdminGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _eleccion_dialog_eleccion_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../eleccion-dialog/eleccion-dialog.component */ "./src/app/admin/home/eleccion-dialog/eleccion-dialog.component.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _bloque_dialog_bloque_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bloque-dialog/bloque-dialog.component */ "./src/app/admin/home/bloque-dialog/bloque-dialog.component.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminGridComponent = /** @class */ (function () {
    function AdminGridComponent(dialog, db) {
        this.dialog = dialog;
        this.db = db;
        this.bloques = [];
        this.elecciones = [];
        this.displayedColumnsBloques = ['name'];
        this.displayedColumnsElecciones = ['name'];
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["Chart"]({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Linechart'
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'Carreras',
                    data: [1, 2, 3]
                }
            ]
        });
    }
    AdminGridComponent.prototype.ngOnInit = function () {
        this.fetchInfo();
    };
    AdminGridComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRefBloque = this.dialog.open(_bloque_dialog_bloque_dialog_component__WEBPACK_IMPORTED_MODULE_4__["BloqueDialogComponent"], {
            width: '600px',
            data: { name: this.result }
        });
        dialogRefBloque.afterClosed().subscribe(function (result) {
            _this.db.database.ref("2018Semestre2/" + result.name + "/").set({
                name: String(result.name),
                startDate: String(result.startDate),
                finishDate: String(result.finishDate),
                type: String(result.type),
                inProgress: true
            });
        });
    };
    AdminGridComponent.prototype.openDialogGrupos = function () {
        var _this = this;
        var dialogRefEleccion = this.dialog.open(_eleccion_dialog_eleccion_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EleccionDialogComponent"], {
            width: '600px',
            data: { name: this.result }
        });
        dialogRefEleccion.afterClosed().subscribe(function (result) {
            console.log(result);
            _this.result = result;
            _this.db.database.ref("2018Semestre2/" + _this.selectedBloque + "/Elecciones/" + result.name).set({
                name: String(result.name),
                inProgress: true,
                votos: 0,
                carreras: result.carreras,
            }).then(function () {
                _this.fetchInfo();
                _this.refreshBloques();
            });
        });
    };
    AdminGridComponent.prototype.selectRow = function (row) {
        this.elecciones = [];
        this.selectedBloque = row.name;
        if (this.bloquesJson[this.selectedBloque].Elecciones) {
            var elec = this.bloquesJson[row.name].Elecciones;
            for (var key in elec) {
                if (elec.hasOwnProperty(key)) {
                    this.elecciones.push({
                        name: key
                    });
                }
            }
            console.log(this.elecciones);
        }
    };
    AdminGridComponent.prototype.fetchInfo = function () {
        var _this = this;
        this.db.database.ref("2018Semestre2").on("value", function (snap) {
            _this.bloquesJson = snap.val();
            _this.bloques = [];
            snap.forEach(function (element) {
                _this.bloques.push({
                    name: element.key,
                    startDate: element.val().startDate,
                    finishDate: element.val().finishDate
                });
            });
            console.log(_this.bloques);
        });
    };
    AdminGridComponent.prototype.refreshBloques = function () {
        if (this.bloquesJson[this.selectedBloque].Elecciones) {
            var elec = this.bloquesJson[this.selectedBloque].Elecciones;
            for (var key in elec) {
                if (elec.hasOwnProperty(key)) {
                    this.elecciones.push({
                        name: key
                    });
                }
            }
            console.log(this.elecciones);
        }
    };
    AdminGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-grid',
            template: __webpack_require__(/*! ./admin-grid.component.html */ "./src/app/admin/home/admin-home/admin-grid/admin-grid.component.html"),
            styles: [__webpack_require__(/*! ./admin-grid.component.css */ "./src/app/admin/home/admin-home/admin-grid/admin-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], AdminGridComponent);
    return AdminGridComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-home.component.css":
/*!****************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-home.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-home.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-home.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav-bar></app-nav-bar>\n<app-elecciones-grid></app-elecciones-grid>"

/***/ }),

/***/ "./src/app/admin/home/admin-home/admin-home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/home/admin-home/admin-home.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
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

var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    AdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/admin/home/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin/home/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/bloque-dialog/bloque-dialog.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/home/bloque-dialog/bloque-dialog.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/admin/home/bloque-dialog/bloque-dialog.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/home/bloque-dialog/bloque-dialog.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<strong>Agregar bloque</strong>\n<br>\n<mat-form-field class=\"full-width\">\n  <input matInput placeholder=\"Nombre de bloque\" value=\"\" [(ngModel)]=\"nombre\">\n</mat-form-field>\n\n<mat-form-field class=\"full-width\">\n  <input matInput placeholder=\"Tipo (ex: csa)\" value=\"\" [(ngModel)]=\"type\">\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"startDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\"[(ngModel)]=\"finishDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n<br>\n<button mat-raised-button color=\"primary\" (click)=\"agregarbloque()\">Agregar</button>\n"

/***/ }),

/***/ "./src/app/admin/home/bloque-dialog/bloque-dialog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/home/bloque-dialog/bloque-dialog.component.ts ***!
  \*********************************************************************/
/*! exports provided: BloqueDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloqueDialogComponent", function() { return BloqueDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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


var BloqueDialogComponent = /** @class */ (function () {
    function BloqueDialogComponent(dialogRef, result) {
        this.dialogRef = dialogRef;
        this.result = result;
    }
    BloqueDialogComponent.prototype.ngOnInit = function () {
    };
    BloqueDialogComponent.prototype.agregarbloque = function () {
        this.dialogRef.close({
            name: this.nombre,
            startDate: this.startDate,
            finishDate: this.finishDate,
            type: this.type
        });
    };
    BloqueDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bloque-dialog',
            template: __webpack_require__(/*! ./bloque-dialog.component.html */ "./src/app/admin/home/bloque-dialog/bloque-dialog.component.html"),
            styles: [__webpack_require__(/*! ./bloque-dialog.component.css */ "./src/app/admin/home/bloque-dialog/bloque-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], BloqueDialogComponent);
    return BloqueDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/eleccion-dialog/eleccion-dialog.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/home/eleccion-dialog/eleccion-dialog.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/admin/home/eleccion-dialog/eleccion-dialog.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/home/eleccion-dialog/eleccion-dialog.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<strong>Agregar elección</strong>\n<br>\n<mat-form-field class=\"full-width\">\n  <input matInput placeholder=\"Nombre de la elección\" value=\"\" [(ngModel)]=\"name\">\n</mat-form-field>\n\n<mat-form-field>\n  <mat-select placeholder=\"Carreras\" [formControl]=\"majorsFormControl\" multiple>\n    <mat-option *ngFor=\"let major of majors\" [value]=\"major\">{{major}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<br>\n<button mat-raised-button color=\"primary\" (click)=\"agregareleccion()\">Agregar</button>\n"

/***/ }),

/***/ "./src/app/admin/home/eleccion-dialog/eleccion-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/home/eleccion-dialog/eleccion-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: EleccionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EleccionDialogComponent", function() { return EleccionDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
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




var EleccionDialogComponent = /** @class */ (function () {
    // selectedMajors : Array<string> =[];
    function EleccionDialogComponent(dialogRef, result, db) {
        this.dialogRef = dialogRef;
        this.result = result;
        this.db = db;
        this.majorsFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.majors = [];
    }
    EleccionDialogComponent.prototype.ngOnInit = function () {
        this.fetchMajors();
    };
    EleccionDialogComponent.prototype.fetchMajors = function () {
        var _this = this;
        this.db.database.ref('majors').once('value').then(function (snap) {
            snap.forEach(function (element) {
                _this.majors.push(element.val().name);
            });
        });
    };
    EleccionDialogComponent.prototype.agregareleccion = function () {
        var arrElecciones = this.majorsFormControl.value;
        this.dialogRef.close({
            name: this.name,
            carreras: arrElecciones,
        });
    };
    EleccionDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eleccion-dialog',
            template: __webpack_require__(/*! ./eleccion-dialog.component.html */ "./src/app/admin/home/eleccion-dialog/eleccion-dialog.component.html"),
            styles: [__webpack_require__(/*! ./eleccion-dialog.component.css */ "./src/app/admin/home/eleccion-dialog/eleccion-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], EleccionDialogComponent);
    return EleccionDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/nav-bar-admin/nav-bar-admin.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/nav-bar-admin/nav-bar-admin.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n}\n\n.button-row{\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n\n.navbar-brand {\n  font-family: \"helvetica\";\n  font-size: 20px;\n  color: white;\n  float: left;\n  display: block;\n  padding: 20px 20px;\n}\n\n.container-fuid {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n\tbackground-color: #212121;\n\theight: 100px;\n}\n\n.nabvar-button {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 30px 16px;\n\ttext-decoration: none;\n\tfont-weight: 300;\n\tletter-spacing: 3px;\n\tfont-size: 12px;\n}\n\n.nabvar-button:hover{\n  color: black;\n  background-color: #FFFFFF;\n}\n\na ul{\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n/* li a:hover {\n    background-color: white;\n    color: black;\n} */\n\n.nabvar-logout-button{\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 5px 22px;\n  margin-right: 14px;\n  margin-top: 25px;\n  text-decoration: none;\n  border-radius: 50px;\n  border-width: 2.5px;\n  font-weight: 300;\n  letter-spacing: 3px;\n  font-size: 12px;\n  height: 50px;\n}\n\n.nabvar-round-button{\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 5px 20px;\n  margin-right: 14px;\n  margin-top: 5px;\n  text-decoration: none;\n  border: 2px solid white;\n  border-radius: 300px;\n}\n\n.nabvar-round-button:hover{\n  color: black;\n  border-radius: 300px;\n  background-color: #FFFFFF;\n}\n"

/***/ }),

/***/ "./src/app/admin/nav-bar-admin/nav-bar-admin.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/nav-bar-admin/nav-bar-admin.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nabbar-default\">\n  <div class=\"container-fuid\">\n    <div>\n      <a class=\"navbar-brand\">COMIT&Eacute; <br> ELECTORAL <br> FEITESM</a>\n    </div>\n\n    <!-- MARK: Displayed only when ADMIN session is stablished -->\n\n\t<div class=\"button-row\">\n\t\t<button class=\"nabvar-button\" mat-button routerLink=\"/admin/home\">HOME</button>\n\n    <!-- <button class=\"nabvar-button\" mat-button [matMenuTriggerFor]=\"elecciones\">ELECCIONES</button>\n\t\t<mat-menu #elecciones=\"matMenu\" overlapTrigger=\"false\">\n\t\t  <button mat-menu-item routerLink=\"/admin/admin-elecciones\">Administraci&oacute;n de elecciones</button>\n\t\t  <button mat-menu-item routerLink=\"/admin/admin-resultados\">Resultados</button>\n\t\t</mat-menu> -->\n\n\t\t<button class=\"nabvar-button\" mat-button [matMenuTriggerFor]=\"registros\">REGISTROS</button>\n\t\t<mat-menu #registros=\"matMenu\" overlapTrigger=\"false\">\n\t\t\t<button mat-menu-item routerLink=\"/admin/admin-bloquesRegistro\">Administraci&oacute;n de bloques de registros</button>\n\t\t  <button mat-menu-item routerLink=\"/admin/admin-registros\">Tabla de registros</button>\n\t\t</mat-menu>\n\n\t\t<button class=\"nabvar-button\" mat-button [matMenuTriggerFor]=\"alumnos\">USUARIOS</button>\n\t\t<mat-menu #alumnos=\"matMenu\" overlapTrigger=\"false\">\n\t\t  <button mat-menu-item routerLink=\"/admin/admin-db\">Administraci&oacute;n de base de datos</button>\n\t\t  <button mat-menu-item routerLink=\"/admin/users\">Roles de usuario</button>\n\t\t</mat-menu>\n\n\t\t<button class=\"nabvar-logout-button\" mat-stroked-button (click)=\"logout()\">CERRAR SESI&Oacute;N</button>\n\t</div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/admin/nav-bar-admin/nav-bar-admin.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/nav-bar-admin/nav-bar-admin.component.ts ***!
  \****************************************************************/
/*! exports provided: NavBarAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarAdminComponent", function() { return NavBarAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarAdminComponent = /** @class */ (function () {
    function NavBarAdminComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavBarAdminComponent.prototype.ngOnInit = function () {
    };
    NavBarAdminComponent.prototype.logout = function () {
        var _this = this;
        this.auth.auth.signOut().then(function () {
            _this.router.navigateByUrl('login');
        });
    };
    NavBarAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar-admin',
            template: __webpack_require__(/*! ./nav-bar-admin.component.html */ "./src/app/admin/nav-bar-admin/nav-bar-admin.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar-admin.component.css */ "./src/app/admin/nav-bar-admin/nav-bar-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarAdminComponent);
    return NavBarAdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/add-role-dialog/add-role-dialog.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/users/add-role-dialog/add-role-dialog.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/admin/users/add-role-dialog/add-role-dialog.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/users/add-role-dialog/add-role-dialog.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<strong>Agregar Rol</strong>\n<br>\n\n<div *ngIf=\"newUser === true; else newUserCard\">\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Nombre\" disabled value=\"\" [(ngModel)]=\"nombre\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Matricula\" disabled value=\"\" [(ngModel)]=\"matricula\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Major\" disabled value=\"\" [(ngModel)]=\"major\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Estado\" disabled value=\"\" [(ngModel)]=\"estado\">\n  </mat-form-field>\n\n  <mat-form-field>\n      <mat-select [(value)]=\"selectedRol\" placeholder=\"Roles\">\n        <mat-option *ngFor=\"let rol of roles\" [value]=\"rol.value\">\n          {{rol.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n  <br>\n  <button mat-raised-button color=\"primary\" (click)=\"agregarRol()\">Agregar</button>\n\n</div>\n\n<ng-template #newUserCard>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Nombre\"  value=\"\" [(ngModel)]=\"nombre\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Matricula\"  value=\"\" [(ngModel)]=\"matricula\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Major\"  value=\"\" [(ngModel)]=\"major\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Estado\"  value=\"\" [(ngModel)]=\"estado\">\n  </mat-form-field>\n\n  <mat-form-field>\n      <mat-select [(ngModel)]=\"selectedRol\" placeholder=\"Roles\">\n        <mat-option *ngFor=\"let rol of roles\" [value]=\"rol.value\">\n          {{rol.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n  <br>\n  <button mat-raised-button color=\"primary\" (click)=\"agregarRol()\">Agregar</button>\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/admin/users/add-role-dialog/add-role-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/users/add-role-dialog/add-role-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddRoleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleDialogComponent", function() { return AddRoleDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
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



var AddRoleDialogComponent = /** @class */ (function () {
    function AddRoleDialogComponent(dialogRef, result, db) {
        this.dialogRef = dialogRef;
        this.result = result;
        this.db = db;
        this.roles = [
            { value: 'admin', viewValue: 'Admin' },
            { value: 'asesor', viewValue: 'Asesor' },
            { value: 'usuario', viewValue: 'Usuario' }
        ];
    }
    AddRoleDialogComponent.prototype.ngOnInit = function () {
        console.log(this.result);
        this.newUser = this.result['newUser'];
        if (this.newUser === true) {
            this.nombre = this.result['row']['fname'];
            this.matricula = this.result['row']['key'];
            this.major = this.result['row']['major'];
            this.estado = this.result['row']['state'];
            this.selectedRol = this.result['row']['role'];
        }
    };
    AddRoleDialogComponent.prototype.agregarRol = function () {
        console.log(this.selectedRol);
        if (this.newUser === true) {
            if (this.selectedRol) {
                this.db.database.ref("roles/" + this.matricula).set({
                    key: this.matricula,
                    fname: this.nombre,
                    major: this.major,
                    role: this.selectedRol,
                    state: this.estado
                });
                this.db.database.ref("database/" + this.matricula).update({ roll: this.selectedRol });
                this.dialogRef.close({});
            }
            else {
                alert("Debe seleccionar un rol");
            }
        }
        else {
            // this.matricula = document.getElementById('matricula').value;
            // this.nombre = document.getElementById('nombre').value;
            // this.major = document.getElementById('major').value;
            //this.selectedRol = document.getElementById('').value;
            // this.estado = document.getElementById('estado').value;
            this.db.database.ref("roles/" + this.matricula).set({
                key: this.matricula,
                fname: this.nombre,
                major: this.major,
                role: this.selectedRol,
                state: this.estado
            });
            this.db.database.ref("database/" + this.matricula).set({
                key: this.matricula,
                fname: this.nombre,
                major: this.major,
                roll: this.selectedRol,
                state: this.estado
            });
            this.dialogRef.close({});
        }
    };
    AddRoleDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-role-dialog',
            template: __webpack_require__(/*! ./add-role-dialog.component.html */ "./src/app/admin/users/add-role-dialog/add-role-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-role-dialog.component.css */ "./src/app/admin/users/add-role-dialog/add-role-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], AddRoleDialogComponent);
    return AddRoleDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/users/users.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\n    margin: auto;\n    width: 90%;\n}"

/***/ }),

/***/ "./src/app/admin/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar-admin></app-nav-bar-admin>\n\n<mat-tab-group>\n    <mat-tab label=\"BD Alumnos\">\n        <mat-form-field style=\"margin-left: 5%\">\n            <input matInput (keyup)=\"applyFilterUsers($event.target.value)\" placeholder=\"Buscar\">\n          </mat-form-field>\n\n          <button style=\"float: right; margin-right: 80px; background-color: green; color: white\" mat-fab matTooltip=\"Agregar nuevo usuario\" matTooltipPosition=\"before\" (click)=\"openDialog(row,false)\">+</button>\n\n          <table mat-table [dataSource]=\"dataSourceUsers\" class=\"table mat-elevation-z8\">\n            <!-- Matricula Column -->\n            <ng-container matColumnDef=\"key\">\n              <th mat-header-cell *matHeaderCellDef> Matricula </th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.key}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"fname\">\n              <th mat-header-cell *matHeaderCellDef> Nombre </th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.fname}} </td>\n            </ng-container>\n\n            <!-- Major Column -->\n            <ng-container matColumnDef=\"major\">\n              <th mat-header-cell *matHeaderCellDef> Major </th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.major}} </td>\n            </ng-container>\n\n            <!-- Role Column -->\n            <ng-container matColumnDef=\"role\">\n              <th mat-header-cell *matHeaderCellDef> Rol </th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.role}} </td>\n            </ng-container>\n\n            <!-- State Column -->\n            <ng-container matColumnDef=\"state\">\n                <th mat-header-cell *matHeaderCellDef> Estado </th>\n                <td mat-cell *matCellDef=\"let user\"> {{user.state}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsUsers\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsUsers;\" (click)=\"openDialog(row,true)\"></tr>\n          </table>\n    </mat-tab>\n    <mat-tab label=\"Roles\">\n        <mat-form-field style=\"margin-left: 5%\">\n            <input matInput (keyup)=\"applyFilterRoles($event.target.value)\" placeholder=\"Buscar\">\n          </mat-form-field>\n\n          <table mat-table [dataSource]=\"dataSourceRegistered\" class=\"table mat-elevation-z8\">\n            <!-- Matricula Column -->\n            <ng-container matColumnDef=\"key\">\n              <th mat-header-cell *matHeaderCellDef> Matricula </th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.key}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"fname\">\n              <th mat-header-cell *matHeaderCellDef> Nombre </th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.fname}} </td>\n            </ng-container>\n\n            <!-- Major Column -->\n            <ng-container matColumnDef=\"major\">\n              <th mat-header-cell *matHeaderCellDef> Major </th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.major}} </td>\n            </ng-container>\n\n            <!-- Role Column -->\n            <ng-container matColumnDef=\"role\">\n              <th mat-header-cell *matHeaderCellDef> Rol </th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.role}} </td>\n            </ng-container>\n\n            <!-- State Column -->\n            <ng-container matColumnDef=\"state\">\n                <th mat-header-cell *matHeaderCellDef> Estado </th>\n                <td mat-cell *matCellDef=\"let user\"> {{user.state}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsRegistered\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsRegistered;\" (click)=\"openDialog(row,true)\"></tr>\n          </table>\n    </mat-tab>\n    <mat-tab label=\"Usuarios Registrados\">\n        <mat-form-field style=\"margin-left: 5%\">\n            <input matInput (keyup)=\"applyFilterRegisteredUsers($event.target.value)\" placeholder=\"Buscar\">\n          </mat-form-field>\n\n          <table mat-table [dataSource]=\"dataSourceRegisteredUsers\" class=\"table mat-elevation-z8\">\n            <!-- Matricula Column -->\n            <ng-container matColumnDef=\"key\">\n              <th mat-header-cell *matHeaderCellDef> Matricula </th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.key}} </td>\n            </ng-container>\n\n            <!-- Major Column -->\n            <ng-container matColumnDef=\"email\">\n              <th mat-header-cell *matHeaderCellDef> Email </th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.email}} </td>\n            </ng-container>\n\n            <!-- Role Column -->\n            <!-- <ng-container matColumnDef=\"uid\">\n              <th mat-header-cell *matHeaderCellDef> Uid </th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.uid}} </td>\n            </ng-container> -->\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsRegisteredUsers\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsRegisteredUsers;\"></tr>\n          </table>\n    </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_role_dialog_add_role_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-role-dialog/add-role-dialog.component */ "./src/app/admin/users/add-role-dialog/add-role-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = /** @class */ (function () {
    function UsersComponent(dialog, db) {
        this.dialog = dialog;
        this.db = db;
        this.displayedColumnsUsers = ['key', 'fname', 'major', 'role', 'state'];
        this.displayedColumnsRegistered = ['key', 'fname', 'major', 'role', 'state'];
        this.displayedColumnsRegisteredUsers = ['key', 'email'];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.fetchDb();
    };
    UsersComponent.prototype.openDialog = function (row, newUser) {
        var _this = this;
        var dialogRefBloque = this.dialog.open(_add_role_dialog_add_role_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddRoleDialogComponent"], {
            width: '600px',
            data: { row: row, newUser: newUser }
        });
        dialogRefBloque.afterClosed().subscribe(function (result) {
            _this.fetchDb();
        });
    };
    UsersComponent.prototype.fetchDb = function () {
        var _this = this;
        this.db.database.ref('database').once('value').then(function (snap) {
            var arrDB = [];
            snap.forEach(function (element) {
                arrDB.push({
                    key: element.key,
                    fname: element.val().fname,
                    major: element.val().major,
                    role: element.val().roll,
                    state: element.val().state
                });
            });
            _this.dataSourceUsers = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arrDB);
        });
        this.db.database.ref('roles').once('value').then(function (snap) {
            var arrDB = [];
            snap.forEach(function (element) {
                arrDB.push({
                    key: element.key,
                    fname: element.val().fname,
                    major: element.val().major,
                    role: element.val().role,
                    state: element.val().state
                });
            });
            _this.dataSourceRegistered = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arrDB);
        });
        this.db.database.ref('registrados').once('value').then(function (snap) {
            var arrDB = [];
            snap.forEach(function (element) {
                arrDB.push({
                    key: element.key,
                    email: element.val().email,
                    uid: element.val().uid
                });
            });
            _this.dataSourceRegisteredUsers = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arrDB);
        });
    };
    UsersComponent.prototype.applyFilterUsers = function (filterValue) {
        this.dataSourceUsers.filter = filterValue.trim().toLowerCase();
    };
    UsersComponent.prototype.applyFilterRoles = function (filterValue) {
        this.dataSourceRegistered.filter = filterValue.trim().toLowerCase();
    };
    UsersComponent.prototype.applyFilterRegisteredUsers = function (filterValue) {
        this.dataSourceRegisteredUsers.filter = filterValue.trim().toLowerCase();
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/admin/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/admin/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
    function AppComponent() {
        this.title = 'comite-electoral';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _admin_home_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/home/admin-home/admin-home.component */ "./src/app/admin/home/admin-home/admin-home.component.ts");
/* harmony import */ var _user_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user/user-home/user-home.component */ "./src/app/user/user-home/user-home.component.ts");
/* harmony import */ var _admin_admin_elecciones_dashboard_elecciones_dashboard_elecciones_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/admin-elecciones/dashboard-elecciones/dashboard-elecciones.component */ "./src/app/admin/admin-elecciones/dashboard-elecciones/dashboard-elecciones.component.ts");
/* harmony import */ var _admin_admin_elecciones_eleccion_card_eleccion_card_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/admin-elecciones/eleccion-card/eleccion-card.component */ "./src/app/admin/admin-elecciones/eleccion-card/eleccion-card.component.ts");
/* harmony import */ var _admin_admin_elecciones_elecciones_grid_elecciones_grid_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/admin-elecciones/elecciones-grid/elecciones-grid.component */ "./src/app/admin/admin-elecciones/elecciones-grid/elecciones-grid.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _admin_admin_db_admin_db_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/admin-db/admin-db.component */ "./src/app/admin/admin-db/admin-db.component.ts");
/* harmony import */ var _admin_home_admin_home_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/home/admin-home/admin-dashboard/admin-dashboard.component */ "./src/app/admin/home/admin-home/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _admin_home_admin_home_admin_card_admin_card_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/home/admin-home/admin-card/admin-card.component */ "./src/app/admin/home/admin-home/admin-card/admin-card.component.ts");
/* harmony import */ var _admin_home_admin_home_admin_grid_admin_grid_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/home/admin-home/admin-grid/admin-grid.component */ "./src/app/admin/home/admin-home/admin-grid/admin-grid.component.ts");
/* harmony import */ var _admin_nav_bar_admin_nav_bar_admin_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/nav-bar-admin/nav-bar-admin.component */ "./src/app/admin/nav-bar-admin/nav-bar-admin.component.ts");
/* harmony import */ var _asesor_nav_bar_asesor_nav_bar_asesor_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./asesor/nav-bar-asesor/nav-bar-asesor.component */ "./src/app/asesor/nav-bar-asesor/nav-bar-asesor.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _admin_home_bloque_dialog_bloque_dialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/home/bloque-dialog/bloque-dialog.component */ "./src/app/admin/home/bloque-dialog/bloque-dialog.component.ts");
/* harmony import */ var _admin_home_eleccion_dialog_eleccion_dialog_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/home/eleccion-dialog/eleccion-dialog.component */ "./src/app/admin/home/eleccion-dialog/eleccion-dialog.component.ts");
/* harmony import */ var _admin_admin_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/admin-roles/admin-roles.component */ "./src/app/admin/admin-roles/admin-roles.component.ts");
/* harmony import */ var _admin_admin_registros_admin_registros_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/admin-registros/admin-registros.component */ "./src/app/admin/admin-registros/admin-registros.component.ts");
/* harmony import */ var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin/users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _admin_users_add_role_dialog_add_role_dialog_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./admin/users/add-role-dialog/add-role-dialog.component */ "./src/app/admin/users/add-role-dialog/add-role-dialog.component.ts");
/* harmony import */ var _asesor_asesor_dashboard_asesor_dashboard_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./asesor/asesor-dashboard/asesor-dashboard.component */ "./src/app/asesor/asesor-dashboard/asesor-dashboard.component.ts");
/* harmony import */ var _admin_admin_resultados_admin_resultados_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./admin/admin-resultados/admin-resultados.component */ "./src/app/admin/admin-resultados/admin-resultados.component.ts");
/* harmony import */ var _candidatos_candidatos_registro_candidatos_registro_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./candidatos/candidatos-registro/candidatos-registro.component */ "./src/app/candidatos/candidatos-registro/candidatos-registro.component.ts");
/* harmony import */ var _admin_admin_bloques_registro_admin_bloques_registro_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./admin/admin-bloques-registro/admin-bloques-registro.component */ "./src/app/admin/admin-bloques-registro/admin-bloques-registro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_27__["SignupComponent"] },
    { path: 'admin/admin-elecciones', component: _admin_admin_elecciones_dashboard_elecciones_dashboard_elecciones_component__WEBPACK_IMPORTED_MODULE_30__["DashboardEleccionesComponent"] },
    { path: 'admin/admin-db', component: _admin_admin_db_admin_db_component__WEBPACK_IMPORTED_MODULE_35__["AdminDbComponent"] },
    { path: 'admin/home', component: _admin_home_admin_home_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_36__["AdminDashboardComponent"] },
    { path: 'admin/admin-roles', component: _admin_admin_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_44__["AdminRolesComponent"] },
    { path: 'admin/users', component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_46__["UsersComponent"] },
    { path: 'admin/admin-registros', component: _admin_admin_registros_admin_registros_component__WEBPACK_IMPORTED_MODULE_45__["AdminRegistrosComponent"] },
    { path: 'admin/admin-bloquesRegistro', component: _admin_admin_bloques_registro_admin_bloques_registro_component__WEBPACK_IMPORTED_MODULE_51__["AdminBloquesRegistroComponent"] },
    { path: 'admin/admin-resultados', component: _admin_admin_resultados_admin_resultados_component__WEBPACK_IMPORTED_MODULE_49__["AdminResultadosComponent"] },
    { path: 'asesor/dashboard', component: _asesor_asesor_dashboard_asesor_dashboard_component__WEBPACK_IMPORTED_MODULE_48__["AsesorDashboardComponent"] },
    { path: 'candidatos/bloques', component: _candidatos_candidatos_registro_candidatos_registro_component__WEBPACK_IMPORTED_MODULE_50__["CandidatosRegistroComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_26__["NavBarComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_27__["SignupComponent"],
                _admin_home_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_28__["AdminHomeComponent"],
                _user_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_29__["UserHomeComponent"],
                _admin_admin_elecciones_eleccion_card_eleccion_card_component__WEBPACK_IMPORTED_MODULE_31__["EleccionCardComponent"],
                _admin_admin_elecciones_elecciones_grid_elecciones_grid_component__WEBPACK_IMPORTED_MODULE_32__["EleccionesGridComponent"],
                _admin_admin_elecciones_dashboard_elecciones_dashboard_elecciones_component__WEBPACK_IMPORTED_MODULE_30__["DashboardEleccionesComponent"],
                _admin_admin_db_admin_db_component__WEBPACK_IMPORTED_MODULE_35__["AdminDbComponent"],
                _admin_home_admin_home_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_36__["AdminDashboardComponent"],
                _admin_home_admin_home_admin_card_admin_card_component__WEBPACK_IMPORTED_MODULE_37__["AdminCardComponent"],
                _admin_home_admin_home_admin_grid_admin_grid_component__WEBPACK_IMPORTED_MODULE_38__["AdminGridComponent"],
                _admin_nav_bar_admin_nav_bar_admin_component__WEBPACK_IMPORTED_MODULE_39__["NavBarAdminComponent"],
                _asesor_nav_bar_asesor_nav_bar_asesor_component__WEBPACK_IMPORTED_MODULE_40__["NavBarAsesorComponent"],
                _admin_home_bloque_dialog_bloque_dialog_component__WEBPACK_IMPORTED_MODULE_42__["BloqueDialogComponent"],
                _admin_home_eleccion_dialog_eleccion_dialog_component__WEBPACK_IMPORTED_MODULE_43__["EleccionDialogComponent"],
                _admin_admin_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_44__["AdminRolesComponent"],
                _admin_admin_registros_admin_registros_component__WEBPACK_IMPORTED_MODULE_45__["AdminRegistrosComponent"],
                _admin_users_users_component__WEBPACK_IMPORTED_MODULE_46__["UsersComponent"],
                _admin_users_add_role_dialog_add_role_dialog_component__WEBPACK_IMPORTED_MODULE_47__["AddRoleDialogComponent"],
                _asesor_asesor_dashboard_asesor_dashboard_component__WEBPACK_IMPORTED_MODULE_48__["AsesorDashboardComponent"],
                _admin_admin_resultados_admin_resultados_component__WEBPACK_IMPORTED_MODULE_49__["AdminResultadosComponent"],
                _candidatos_candidatos_registro_candidatos_registro_component__WEBPACK_IMPORTED_MODULE_50__["CandidatosRegistroComponent"],
                _admin_admin_bloques_registro_admin_bloques_registro_component__WEBPACK_IMPORTED_MODULE_51__["AdminBloquesRegistroComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].config),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__["MatDialogModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_10__["ChartModule"]
            ],
            entryComponents: [_admin_home_bloque_dialog_bloque_dialog_component__WEBPACK_IMPORTED_MODULE_42__["BloqueDialogComponent"], _admin_home_eleccion_dialog_eleccion_dialog_component__WEBPACK_IMPORTED_MODULE_43__["EleccionDialogComponent"], _admin_users_add_role_dialog_add_role_dialog_component__WEBPACK_IMPORTED_MODULE_47__["AddRoleDialogComponent"]],
            providers: [_services_database_service__WEBPACK_IMPORTED_MODULE_34__["DatabaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/asesor/asesor-dashboard/asesor-dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/asesor/asesor-dashboard/asesor-dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#busqueda {\n\tbackground-color: #e8e8e8;\n    /* width: 50%; */\n    display: block;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    margin: auto;\n    position: relative;\n    padding: 25px;\n\n}\n\n#resultado {\n\t/*background-color: #e8e8e8;*/\n    /* width: 50%; */\n    display: block;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    margin: auto;\n    position: relative;\n\tpadding: 25px;\n\tfont-family: Roboto,\"Helvetica Neue\",sans-serif;\n}\n\nh1{\nfont-family: Roboto,\"Helvetica Neue\",sans-serif;\n}\n\np{\n\tfont-family: Roboto,\"Helvetica Neue\",sans-serif;\n}\n\nh3{\n\n}\n\ninput{\n\tbackground-color: white;\n\tpadding: 15px;\n}\n\nbutton{\n\tbackground-color: #673ab7;\n\tcolor: white;\n}\n\n.button-voted{\n\tbackground: #cccccc;\n\tcolor: #666666;\n\tpointer-events: none;\n}\n\n.button-notVoted{\n\tbackground-color: #673ab7;\n\tcolor: white;\n}\n"

/***/ }),

/***/ "./src/app/asesor/asesor-dashboard/asesor-dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/asesor/asesor-dashboard/asesor-dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar-asesor></app-nav-bar-asesor>\n\n<div id=\"busqueda\">\n\t<h1>B&uacute;squeda de alumnos</h1>\n\t<form>\n\t\t<mat-form-field>\n\t\t\t<input matInput placeholder=\"Matr&iacute;cula\" [formControl]=\"idFormControl\" [(ngModel)]=\"matriculaAlumno\"\n\t\t\t\t\t[errorStateMatcher]=\"matcher\">\n\t\t\t<mat-hint>Usando A0 o A00</mat-hint>\n\t\t\t<mat-error *ngIf=\"idFormControl.hasError('id') && !idFormControl.hasError('required')\">\n\t\t\tLa matr&iacute;cula no es v&aacute;lida. Intenta de nuevo.\n\t\t\t</mat-error>\n\t\t</mat-form-field>\n\t</form>\n\n\t<button mat-raised-button (click)=\"getAlumno()\">Buscar</button>\n\n\t<p>¿No encuentras al alumno?</p>\n\t<p>Reg&iacute;stralo como alumno irregular.</p>\n\n\t<button mat-raised-button>Registrar alumno irregular</button>\n</div>\n\n<div id=\"resultado\">\n\t<h1>{{nombreAlumno}}</h1>\n\n\t<h3>Puede votar para:</h3>\n\n<div *ngFor=\"let eleccion of arrEleccionesAVotar\">\n\t<div>\n\t\t<div>\n\t\t\t<h3>{{eleccion.eleccion}}</h3>\n\t\t\t<button mat-raised-button [ngClass]=\"{'button-voted': eleccion.isVoted, 'button-notVoted': !eleccion.isVoted}\" (click)=\"markAsVoted(eleccion.eleccion,eleccion.bloque)\">Registrar voto</button>\n\t\t</div>\n\t</div>\n</div>\n<!-- <div *ngFor=\"let eleccion of arrEleccionesAVotar\">\n\t<ng-template [ngIf]=\"eleccion.isVoted === true\">\n\t\t<div>\n\t\t\t<h3>{{eleccion.eleccion}}</h3>\n\t\t\t<button mat-raised-button [ngClass]=\"['bntStyle']\">Votado</button>\n\t\t</div>\n\t</ng-template>\n</div> -->\n\n\n\n\t<!-- <div *ngIf=\"hasVoted === false; else didVoteButton\">\n\t\t<div *ngFor=\"let eleccion of arrEleccionesAVotar\">\n\t\t\t<h3>{{eleccion.eleccion}}</h3>\n\t\t\t<button mat-raised-button (click)=\"markAsVoted(eleccion.eleccion,eleccion.bloque)\">Registrar voto</button>\n\t\t</div>\n\t</div>\n\n\t<ng-template #didVoteButton>\n\t\t<div *ngFor=\"let eleccion of arrEleccionesAVotar\">\n\t\t\t<h3>{{eleccion.eleccion}}</h3>\n\t\t\t<button mat-raised-button disabled style=\"background:green; color:white;\">Votado</button>\n\t\t</div>\n\t</ng-template> -->\n\n\t<!-- <div>\n\t\t<h3>Comité Ejecutivo</h3>\n\t\t<button mat-raised-button>Registrar voto</button>\n\t</div> -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/asesor/asesor-dashboard/asesor-dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/asesor/asesor-dashboard/asesor-dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: MyErrorStateMatcher, AsesorDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesorDashboardComponent", function() { return AsesorDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var AsesorDashboardComponent = /** @class */ (function () {
    function AsesorDashboardComponent(db, router) {
        this.db = db;
        this.router = router;
        this.arrEleccionesAVotar = [];
        this.alumnoExist = false;
        this.idFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    AsesorDashboardComponent.prototype.ngOnInit = function () {
        // this.btnStyle = 'button';
    };
    AsesorDashboardComponent.prototype.getAlumno = function () {
        var _this = this;
        this.hasVoted = false;
        var fueVotado = false;
        this.arrEleccionesAVotar = [];
        this.db.database.ref("database/" + this.matriculaAlumno + "/").once('value').then(function (snap) {
            // this.alumnoExist = true
            var arrAuxElecciones = [];
            _this.carreraAlumno = snap.val().major;
            _this.estadoAlumno = snap.val().state;
            _this.nombreAlumno = snap.val().fname;
            // if(this.alumnoExist){
            _this.db.database.ref('2018Semestre2').once('value').then(function (snap) {
                snap.forEach(function (element) {
                    // Elecion de carreras - bloque CSA
                    if (element.val().inProgress === true && element.val().type === "csa") {
                        var actualBloque = element.val().name;
                        // this.bloque = element.val().name
                        console.log(_this.bloque);
                        _this.db.database.ref("2018Semestre2/" + actualBloque + "/Elecciones").once('value').then(function (snap) {
                            snap.forEach(function (element) {
                                console.log(element.val().name);
                                _this.arrCarreras = element.val().carreras;
                                for (var _i = 0, _a = _this.arrCarreras; _i < _a.length; _i++) {
                                    var carrera = _a[_i];
                                    if (carrera === _this.carreraAlumno) {
                                        fueVotado = false;
                                        console.log(element.val().name);
                                        _this.searchiIfVoted(_this.matriculaAlumno, actualBloque, element.val().name).then(function (result) {
                                            if (result === "true") {
                                                fueVotado = true;
                                                console.log("SI JALOOOOO" + fueVotado);
                                            }
                                            arrAuxElecciones.push({ eleccion: element.val().name, bloque: actualBloque, isVoted: fueVotado });
                                            console.log(arrAuxElecciones);
                                        });
                                    }
                                }
                            });
                        });
                        // Eleccion general de Comite Ejecutivo FETEC
                    }
                    else if (element.val().inProgress === true && element.val().type === "ejecutivo") {
                        _this.db.database.ref("2018Semestre2/" + element.val().name).once('value').then(function (snap) {
                            _this.searchiIfVoted(_this.matriculaAlumno, element.val().name, snap.val().name).then(function (result) {
                                fueVotado = false;
                                if (result === "true") {
                                    fueVotado = true;
                                    console.log("SI JALOOOOO" + fueVotado);
                                }
                                arrAuxElecciones.push({ eleccion: element.val().name, bloque: snap.val().name, isVoted: fueVotado });
                                console.log(arrAuxElecciones);
                            });
                        });
                        // Eleccion general de CARES
                    }
                    else if (element.val().inProgress === true && element.val().type === "care") {
                        var nombreBloqueCare = element.val().name;
                        console.log(nombreBloqueCare);
                        _this.db.database.ref("2018Semestre2/" + element.val().name + "/Elecciones").once('value').then(function (snap) {
                            snap.forEach(function (element) {
                                _this.estado = element.val().estado;
                                if (_this.estado === _this.estadoAlumno) {
                                    fueVotado = false;
                                    _this.searchiIfVoted(_this.matriculaAlumno, nombreBloqueCare, element.val().name).then(function (result) {
                                        if (result === "true") {
                                            fueVotado = true;
                                            console.log("SI JALOOOOO" + fueVotado);
                                        }
                                        arrAuxElecciones.push({ eleccion: element.val().name, bloque: nombreBloqueCare, isVoted: fueVotado });
                                        console.log(arrAuxElecciones);
                                    });
                                }
                            });
                        });
                    }
                    else {
                        console.log("No hay elecciones disponibles para este usuario");
                    }
                });
            });
            console.log(arrAuxElecciones);
            _this.arrEleccionesAVotar = arrAuxElecciones;
        });
    };
    AsesorDashboardComponent.prototype.markAsVoted = function (eleccion, bloque) {
        var _this = this;
        this.votandoPara = eleccion;
        this.hasVoted = false;
        this.db.database.ref("2018Semestre2/" + bloque + "/Elecciones/" + this.votandoPara + "/votados/" + this.matriculaAlumno).once('value').then(function (snap) {
            if (snap.exists()) {
                _this.hasVoted = true;
            }
            else {
                console.log("no ha votado");
                if (_this.hasVoted == false) {
                    // Marcar el voto como registrado
                    _this.db.database.ref("2018Semestre2/" + bloque + "/Elecciones/" + _this.votandoPara + "/votados/" + _this.matriculaAlumno).set({
                        timestamp: new Date().toString(),
                        key: _this.matriculaAlumno
                    });
                    _this.db.database.ref("2018Semestre2/" + bloque + "/Elecciones/" + _this.votandoPara).once('value').then(function (snap) {
                        _this.db.database.ref("2018Semestre2/" + bloque + "/Elecciones/" + _this.votandoPara).update({ votos: snap.val().votos + 1 });
                    });
                    // this.btnStyle = 'button-voted';
                }
            }
        });
        this.getAlumno();
    };
    AsesorDashboardComponent.prototype.searchiIfVoted = function (matricula, bloque, eleccion) {
        var _this = this;
        var filterDataAccordingToDatePromise = new Promise(function (resolve, reject) {
            _this.db.database.ref("2018Semestre2/" + bloque + "/Elecciones/" + eleccion + "/votados/" + matricula).once('value').then(function (snap) {
                if (snap.exists()) {
                    resolve("true");
                }
                else {
                    resolve("false");
                }
            });
        });
        return filterDataAccordingToDatePromise;
    };
    AsesorDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asesor-dashboard',
            template: __webpack_require__(/*! ./asesor-dashboard.component.html */ "./src/app/asesor/asesor-dashboard/asesor-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./asesor-dashboard.component.css */ "./src/app/asesor/asesor-dashboard/asesor-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AsesorDashboardComponent);
    return AsesorDashboardComponent;
}());



/***/ }),

/***/ "./src/app/asesor/nav-bar-asesor/nav-bar-asesor.component.css":
/*!********************************************************************!*\
  !*** ./src/app/asesor/nav-bar-asesor/nav-bar-asesor.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n}\n\n.button-row{\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n\n.navbar-brand {\n  font-family: \"helvetica\";\n  font-size: 20px;\n  color: white;\n  float: left;\n  display: block;\n  padding: 20px 20px;\n}\n\n.container-fuid {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n\tbackground-color: #212121;\n\theight: 100px;\n}\n\n.nabvar-button {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 30px 16px;\n\ttext-decoration: none;\n\tfont-weight: 300;\n\tletter-spacing: 3px;\n\tfont-size: 12px;\n}\n\n.nabvar-button:hover{\n  color: black;\n  background-color: #FFFFFF;\n}\n\na ul{\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n/* li a:hover {\n    background-color: white;\n    color: black;\n} */\n\n.nabvar-logout-button{\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 5px 22px;\n  margin-right: 14px;\n  margin-top: 25px;\n  text-decoration: none;\n  border-radius: 50px;\n  border-width: 2.5px;\n  font-weight: 300;\n  letter-spacing: 3px;\n  font-size: 12px;\n  height: 50px;\n}\n\n.nabvar-round-button{\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 5px 20px;\n  margin-right: 14px;\n  margin-top: 5px;\n  text-decoration: none;\n  border: 2px solid white;\n  border-radius: 300px;\n}\n\n.nabvar-round-button:hover{\n  color: black;\n  border-radius: 300px;\n  background-color: #FFFFFF;\n}\n"

/***/ }),

/***/ "./src/app/asesor/nav-bar-asesor/nav-bar-asesor.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/asesor/nav-bar-asesor/nav-bar-asesor.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nabbar-default\">\n  <div class=\"container-fuid\">\n    <div>\n      <a class=\"navbar-brand\">COMIT&Eacute; <br> ELECTORAL <br> FEITESM</a>\n    </div>\n\n    <!-- MARK: Displayed only when ASESOR session is stablished -->\n    <div class=\"button-row\">\n      <button class=\"nabvar-button\" mat-button>Registro de votos</button>\n  \t\t<button class=\"nabvar-logout-button\" mat-stroked-button (click)=\"logout()\">CERRAR SESI&Oacute;N</button>\n  \t</div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/asesor/nav-bar-asesor/nav-bar-asesor.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/asesor/nav-bar-asesor/nav-bar-asesor.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavBarAsesorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarAsesorComponent", function() { return NavBarAsesorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarAsesorComponent = /** @class */ (function () {
    function NavBarAsesorComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavBarAsesorComponent.prototype.ngOnInit = function () {
    };
    NavBarAsesorComponent.prototype.logout = function () {
        var _this = this;
        this.auth.auth.signOut().then(function () {
            _this.router.navigateByUrl('login');
        });
    };
    NavBarAsesorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar-asesor',
            template: __webpack_require__(/*! ./nav-bar-asesor.component.html */ "./src/app/asesor/nav-bar-asesor/nav-bar-asesor.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar-asesor.component.css */ "./src/app/asesor/nav-bar-asesor/nav-bar-asesor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarAsesorComponent);
    return NavBarAsesorComponent;
}());



/***/ }),

/***/ "./src/app/candidatos/candidatos-registro/candidatos-registro.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/candidatos/candidatos-registro/candidatos-registro.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox {\n    margin-right: 2em;\n}\n\n.lista1 {\n    margin-right: 10em;\n    width: 20em;\n}\n\n.lista2 {\n    margin-right: 5em !important;\n    width: 15em !important;\n}\n\n.placeholder {\n    color:  #aaa;\n}\n\n.csa-card{\n  max-width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  background: linear-gradient(to top left, #702082 38%, #993399 100%);\n}\n\n.care-card{\n  max-width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  background: linear-gradient(to top left, #ff671f 18%, #ff9900 78%);\n}\n\n.ejecutivo-card{\n  max-width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  background: linear-gradient(to bottom right, #41b6e6 38%, #3399ff 100%);\n}\n\np{\n  font-size: 20px;\n}\n\nh1{\n  color: black;\n  font-family: helvetica;\n}\n\nul{\n  list-style: none;\n  columns: 2;\n  -webkit-columns: 2;\n  -moz-columns: 2;\n  color: white;\n}\n\n.card-title{\n  font-size: 40px;\n  color: white;\n}\n\n*{\n  font-family: helvetica;\n}\n\n.card-buttons {\n  text-align: center;\n  color: white;\n}\n\n.edit-button{\n  background-color: #0d98ba;\n  display: inline-block;\n  color: white;\n}\n\n.selectBloque-button{\n  background-color: green;\n  display: inline-block;\n  color: white;\n}\n\n.material-icons{\n  font-size: 200px;\n  color: green;\n  display: inherit;\n}\n\n.confirmacion{\n  text-align: center;\n}\n\n.content{\n  display: inherit;\n}\n\n.gruposAEleccion{\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/candidatos/candidatos-registro/candidatos-registro.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/candidatos/candidatos-registro/candidatos-registro.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar-asesor></app-nav-bar-asesor>\n\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\">\n<div *ngIf=\"bloqueIsSelected === false && isSubmitted === false\">\n  <h1>Registro de Candidatos</h1>\n  <h3>Selecciona el bloque al cual pertenece el grupo estudiantíl al cual te quieres registrar</h3>\n  <mat-grid-list cols=\"1\" rowHeight=\"300px\" *ngFor=\"let bloque of arrDataBloques\">\n      <mat-card *ngIf=\"bloque.type === 'csa'\" class=\"csa-card\">\n        <mat-card-header>\n          <mat-card-title class=\"card-title\">{{bloque.name}}</mat-card-title>\n          <mat-card-subtitle>16/07/2018 9:00 AM - 6:00 PM</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p class=\"gruposAEleccion\">Grupos a elección</p>\n            <ul *ngFor=\"let grupo of bloque.gruposEstudiantiles\">\n              <li>{{grupo}}<li>\n            </ul>\n        </mat-card-content>\n        <mat-card-actions class=\"card-buttons\">\n          <button mat-raised-button class=\"selectBloque-button\" (click)=\"selectBloque(bloque.name)\">Seleccionar Bloque</button>\n        </mat-card-actions>\n      </mat-card>\n\n    <ng-template [ngIf]=\"bloque.type === 'care'\">\n      <mat-card class=\"care-card\">\n        <mat-card-header>\n          <mat-card-title class=\"card-title\">{{bloque.name}}</mat-card-title>\n          <mat-card-subtitle>16/07/2018 9:00 AM - 6:00 PM</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p class=\"gruposAEleccion\">Grupos a elección</p>\n            <ul *ngFor=\"let grupo of bloque.gruposEstudiantiles\">\n              <li>{{grupo}}<li>\n            </ul>\n        </mat-card-content>\n        <mat-card-actions class=\"card-buttons\">\n          <button mat-raised-button class=\"selectBloque-button\" (click)=\"selectBloque(bloque.name)\">Seleccionar Bloque</button>\n        </mat-card-actions>\n      </mat-card>\n    </ng-template>\n\n    <ng-template [ngIf]=\"bloque.type === 'ejecutivo'\">\n      <mat-card class=\"ejecutivo-card\">\n        <mat-card-header>\n          <mat-card-title class=\"card-title\">{{bloque.name}}</mat-card-title>\n          <mat-card-subtitle>16/07/2018 9:00 AM - 6:00 PM</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p class=\"gruposAEleccion\">Grupos a elección</p>\n            <ul *ngFor=\"let grupo of bloque.gruposEstudiantiles\">\n              <li>{{grupo}}<li>\n            </ul>\n        </mat-card-content>\n        <mat-card-actions class=\"card-buttons\">\n          <button mat-raised-button class=\"selectBloque-button\" (click)=\"selectBloque(bloque.name)\">Seleccionar Bloque</button>\n        </mat-card-actions>\n      </mat-card>\n    </ng-template>\n  </mat-grid-list>\n\n</div>\n\n<ng-template [ngIf]=\"bloqueIsSelected === true && isSubmitted === false\">\n  <div class=\"container\">\n    <h1>Registro de Candidatos</h1>\n    <h3>Datos de Registro</h3>\n\n    <mat-horizontal-stepper #stepper>\n        <mat-step>\n          <form [formGroup]=\"candidatura\">\n            <ng-template matStepLabel>Informacion Grupo Estudiantil</ng-template>\n            <div class= \"row\">\n              <div class=\"col-md-6 col-lg-6\">\n                  <mat-form-field appearance = \"outline\" required>\n                    <mat-select placeholder=\"Grupo Estudiantil\" formControlName=\"grupoEstudiantil\">\n                      <mat-option *ngFor=\"let grupo of arrAvailableGruposEstudiantiles\" [value]=\"grupo\">\n                        {{grupo}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n              </div>\n              <div class=\"col-md-6 col-lg-6\">\n                  <mat-checkbox formControlName=\"periodo\" class=\"checkbox\" value=\"Enero-Diciembre\">Enero-Diciembre</mat-checkbox>\n                  <mat-checkbox formControlName=\"periodo\" class=\"checkbox\" value=\"Agosto-Mayo\">Agosto-Mayo</mat-checkbox>\n              </div>\n              <div class=\"col-md-6 col-lg-6\">\n                <mat-form-field appearance = \"outline\"  class=\"lista1\">\n                    <mat-label>Nombre de la candidatura</mat-label>\n                    <input matInput placeholder=\"Nombre de la candidatura\" formControlName=\"nombreCandidatura\" required>\n                </mat-form-field>\n              </div>\n            </div>\n            <br>\n            <div>\n              <button mat-button class=\"edit-button\" matStepperNext>Siguiente</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step>\n          <form [formGroup]=\"presidente\">\n            <ng-template matStepLabel>Informacion Candidato Presidente</ng-template>\n            <mat-grid-list cols=\"2\" rowHeight=\"4:3\">\n                <mat-form-field appearance = \"outline\"  class=\"lista1\">\n                    <mat-label>Nombre(s)</mat-label>\n                    <input matInput placeholder=\"Nombre(s)\" formControlName=\"nombresPresidente\" required>\n                </mat-form-field>\n                <mat-form-field appearance = \"outline\"  class=\"lista1\">\n                    <mat-label>Apellidos</mat-label>\n                    <input class=\"p-5\" matInput placeholder=\"Apellidos\" formControlName=\"apellidosPresidente\" required>\n                  </mat-form-field>\n            </mat-grid-list>\n\n            <mat-grid-list cols=\"4\" rowHeight=\"4:3\">\n                <mat-form-field appearance = \"outline\" class=\"lista2\">\n                    <mat-label>Matricula</mat-label>\n                    <input matInput placeholder=\"Matricula\" formControlName=\"matriculaPresidente\" required>\n                </mat-form-field>\n                <mat-form-field appearance = \"outline\" class=\"lista2\">\n                        <mat-select placeholder=\"Carrera\" formControlName=\"carreraPresidente\" required>\n                          <mat-option *ngFor=\"let carrera of arrMajors\" [value]=\"carrera\">\n                            {{carrera}}\n                          </mat-option>\n                        </mat-select>\n                </mat-form-field>\n                <mat-form-field appearance = \"outline\" class=\"lista2\">\n                        <mat-select placeholder=\"Semestre\" formControlName=\"semestrePresidente\" required>\n                          <mat-option value=\"1\">1</mat-option>\n                          <mat-option value=\"2\">2</mat-option>\n                          <mat-option value=\"3\">3</mat-option>\n                          <mat-option value=\"4\">4</mat-option>\n                          <mat-option value=\"5\">5</mat-option>\n                          <mat-option value=\"6\">6</mat-option>\n                          <mat-option value=\"7\">7</mat-option>\n                          <mat-option value=\"8\">8</mat-option>\n                          <mat-option value=\"9\">9</mat-option>\n                          <mat-option value=\"10\">10+</mat-option>\n                        </mat-select>\n                </mat-form-field>\n                <mat-form-field appearance = \"outline\" class=\"lista2\">\n                    <mat-label>Promedio</mat-label>\n                    <input class=\"p-5\" matInput placeholder=\"Promedio\" formControlName=\"promedioPresidente\" required>\n                </mat-form-field>\n            </mat-grid-list>\n\n            <mat-grid-list cols=\"2\" rowHeight=\"4:3\">\n                <mat-form-field appearance = \"outline\"  class=\"lista1\">\n                    <mat-label>Celular</mat-label>\n                    <input matInput placeholder=\"Celular\" formControlName=\"celularPresidente\" required>\n                </mat-form-field>\n                <mat-form-field appearance = \"outline\"  class=\"lista1\">\n                    <mat-label>E-Mail</mat-label>\n                    <input class=\"p-5\" matInput placeholder=\"E-Mail\" formControlName=\"emailPresidente\" required>\n                  </mat-form-field>\n            </mat-grid-list>\n            <button mat-button class=\"edit-button\" matStepperPrevious>Anterior</button>\n            <button mat-button class=\"edit-button\" matStepperNext>Siguiente</button>\n          </form>\n        </mat-step>\n        <mat-step>\n        <form [formGroup]=\"vice\">\n            <ng-template matStepLabel>Informacion Candidato Videpresidente</ng-template>\n            <mat-grid-list cols=\"2\" rowHeight=\"4:3\">\n                <mat-form-field appearance = \"outline\"  class=\"lista1\">\n                    <mat-label>Nombre(s)</mat-label>\n                    <input matInput placeholder=\"Nombre(s)\" formControlName=\"nombresVice\" required>\n                </mat-form-field>\n                <mat-form-field appearance = \"outline\"  class=\"lista1\">\n                    <mat-label>Apellidos</mat-label>\n                    <input class=\"p-5\" matInput placeholder=\"Apellidos\" formControlName=\"apellidosVice\" required>\n                  </mat-form-field>\n            </mat-grid-list>\n\n            <mat-grid-list cols=\"4\" rowHeight=\"4:3\">\n                <mat-form-field appearance = \"outline\" class=\"lista2\">\n                    <mat-label>Matricula</mat-label>\n                    <input matInput placeholder=\"Matricula\" formControlName=\"matriculaVice\" required>\n                </mat-form-field>\n                <mat-form-field appearance = \"outline\" class=\"lista2\">\n                    <mat-select placeholder=\"Carrera\" formControlName=\"carreraVice\" required>\n                      <mat-option *ngFor=\"let carrera of arrMajors\" [value]=\"carrera\">\n                        {{carrera}}\n                      </mat-option>\n                      </mat-select>\n                </mat-form-field>\n                <mat-form-field appearance = \"outline\" class=\"lista2\" required>\n                    <mat-select placeholder=\"Semestre\" formControlName=\"semestreVice\" required>\n                        <mat-option value=\"1\">1</mat-option>\n                        <mat-option value=\"2\">2</mat-option>\n                        <mat-option value=\"3\">3</mat-option>\n                        <mat-option value=\"4\">4</mat-option>\n                        <mat-option value=\"5\">5</mat-option>\n                        <mat-option value=\"6\">6</mat-option>\n                        <mat-option value=\"7\">7</mat-option>\n                        <mat-option value=\"8\">8</mat-option>\n                        <mat-option value=\"9\">9</mat-option>\n                        <mat-option value=\"10\">10+</mat-option>\n                      </mat-select>\n                </mat-form-field>\n                <mat-form-field appearance = \"outline\" class=\"lista2\">\n                    <mat-label>Promedio</mat-label>\n                    <input class=\"p-5\" matInput placeholder=\"Promedio\" formControlName=\"promedioVice\" required>\n                </mat-form-field>\n            </mat-grid-list>\n\n            <mat-grid-list cols=\"2\" rowHeight=\"4:3\">\n                <mat-form-field appearance = \"outline\"  class=\"lista1\">\n                    <mat-label>Celular</mat-label>\n                    <input matInput placeholder=\"Celular\" formControlName=\"celularVice\" required>\n                </mat-form-field>\n                <mat-form-field appearance = \"outline\"  class=\"lista1\">\n                    <mat-label>E-Mail</mat-label>\n                    <input class=\"p-5\" matInput placeholder=\"E-Mail\" formControlName=\"emailVice\" required>\n                  </mat-form-field>\n            </mat-grid-list>\n\n            <button mat-button class=\"edit-button\" matStepperPrevious>Anterior</button>\n            <button mat-button class=\"edit-button\" matStepperNext>Siguiente</button>\n          </form>\n        </mat-step>\n\n        <mat-step>\n            <ng-template matStepLabel>Documentos Registro</ng-template>\n            <p>DOCUMENTOS REGISTRO</p>\n            <button class=\"btn\">Carta director de carrera</button>\n            <input type=\"file\" style=\"display: inline-block;\" (change)=\"carta($event)\" placeholder=\"Upload file\">\n            <button class=\"btn\">Comprobante de pago</button>\n            <input type=\"file\" style=\"display: inline-block;\" (change)=\"comprobante($event)\" placeholder=\"Upload file\">\n            <button class=\"btn\">Licencia</button>\n            <input type=\"file\" style=\"display: inline-block;\" (change)=\"licencia($event)\" placeholder=\"Upload file\">\n            <br>\n            <button mat-button class=\"edit-button\" matStepperPrevious>Anterior</button>\n            <button mat-button class=\"edit-button\" (click)=terminar() >Terminar</button>\n        </mat-step>\n      </mat-horizontal-stepper>\n  </div>\n</ng-template>\n\n<ng-template [ngIf]=\"isSubmitted === true\">\n  <div class=\"confirmacion\">\n    <i class=\"material-icons\">check_circle</i>\n    <h1 class=\"content\">Todo listo, registro enviado exitosamente</h1>\n    <p class=\"content\">Hemos recibido tu registro, sin embargo no HA SIDO ACEPTADO, la Comisión de Participación Estudiantil y Elecciones\n    verificará tu información así como los documentos que anexaste y se pondra en contacto contigo para notificarte\n    sobre el estatus de tu registro.\n    </p>\n    <p class=\"content\">Para cualquier duda o aclaración, por favor envia un correo a hola@comiteelectoral.mx</p>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/candidatos/candidatos-registro/candidatos-registro.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/candidatos/candidatos-registro/candidatos-registro.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CandidatosRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatosRegistroComponent", function() { return CandidatosRegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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






var CandidatosRegistroComponent = /** @class */ (function () {
    function CandidatosRegistroComponent(_formBuilder, storage, auth, db) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.storage = storage;
        this.auth = auth;
        this.db = db;
        this.arrAvailableGruposEstudiantiles = [];
        this.arrMajors = [];
        this.arrDataBloques = [];
        auth.auth.onAuthStateChanged(function (user) {
            _this.currentUser = user;
        });
    }
    CandidatosRegistroComponent.prototype.ngOnInit = function () {
        this.bloqueIsSelected = false;
        this.isSubmitted = false;
        this.fetchBloques();
        this.fetchMajors();
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.candidatura = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            grupoEstudiantil: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            nombreCandidatura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            periodo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.presidente = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            carreraPresidente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            nombresPresidente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            apellidosPresidente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            semestrePresidente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            promedioPresidente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            celularPresidente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            matriculaPresidente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            emailPresidente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.vice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            carreraVice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            nombresVice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            apellidosVice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            semestreVice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            promedioVice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            celularVice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            matriculaVice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            emailVice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    CandidatosRegistroComponent.prototype.fetchMajors = function () {
        var _this = this;
        this.db.database.ref('majors').once('value').then(function (snap) {
            snap.forEach(function (element) {
                _this.arrMajors.push(element.val().name);
            });
        });
    };
    CandidatosRegistroComponent.prototype.fetchBloques = function () {
        var _this = this;
        this.db.database.ref("Bloques de registro/2018/Ago-Dic").once('value').then(function (snap) {
            snap.forEach(function (element) {
                var arrGruposEstudiantiles = [];
                _this.nombreBloque = element.val().name;
                _this.type = element.val().type;
                _this.db.database.ref("Bloques de registro/2018/Ago-Dic/" + _this.nombreBloque + "/Elecciones").once('value').then(function (snap) {
                    snap.forEach(function (element) {
                        arrGruposEstudiantiles.push(element.val().name);
                    });
                });
                _this.arrDataBloques.push({ name: _this.nombreBloque, type: _this.type, gruposEstudiantiles: arrGruposEstudiantiles });
                console.log(_this.arrDataBloques);
            });
        });
    };
    CandidatosRegistroComponent.prototype.selectBloque = function (bloque) {
        this.bloqueIsSelected = true;
        this.selectedBloque = bloque;
        for (var _i = 0, _a = this.arrDataBloques; _i < _a.length; _i++) {
            var bloque_1 = _a[_i];
            if (bloque_1.name === this.selectedBloque) {
                this.arrAvailableGruposEstudiantiles = bloque_1.gruposEstudiantiles;
            }
        }
    };
    CandidatosRegistroComponent.prototype.terminar = function () {
        var _this = this;
        // this.db.database.ref(`candidatura`).push({
        //   nombrePresidente:"Miguel Cuellar",
        //   nombresVice:"Carmelo Ramirez",
        //   carta:this.downloadURLCarta,
        //   comprobante:this.downloadURLComprobante,
        //   licencia:this.downloadURLLicencia
        // })
        var datosRegistro = __assign({}, this.candidatura.value, this.presidente.value, this.vice.value, { bloque: this.selectedBloque });
        var aux = false;
        console.log(datosRegistro);
        datosRegistro.carta = this.downloadURLCarta;
        datosRegistro.comprobante = this.downloadURLComprobante;
        datosRegistro.licencia = this.downloadURLLicencia;
        this.pushRegistro(datosRegistro).then(function (result) {
            if (result === "true") {
                aux = true;
            }
            _this.isSubmitted = aux;
        });
    };
    CandidatosRegistroComponent.prototype.pushRegistro = function (datosRegistro) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("candidaturas/" + _this.currentUser.uid).set(datosRegistro, function (error) {
                if (!error) {
                    resolve("true");
                    console.log("promise successfull");
                }
                else {
                    resolve("false");
                }
            });
        });
        return promise;
    };
    CandidatosRegistroComponent.prototype.carta = function (event) {
        var _this = this;
        var fileCarta = event.target.files[0];
        var filePath = "carta" + this.currentUser.uid;
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, fileCarta);
        // observe percentage changes
        this.uploadPercentCarta = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            fileRef.getDownloadURL().subscribe(function (url) {
                _this.downloadURLCarta = url;
            });
        }))
            .subscribe();
    };
    CandidatosRegistroComponent.prototype.comprobante = function (event) {
        var _this = this;
        var fileComprobante = event.target.files[0];
        var filePath = "comprobante" + this.currentUser.uid;
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, fileComprobante);
        // observe percentage changes
        this.uploadPercentComprobante = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            fileRef.getDownloadURL().subscribe(function (url) {
                _this.downloadURLComprobante = url;
            });
        }))
            .subscribe();
    };
    CandidatosRegistroComponent.prototype.licencia = function (event) {
        var _this = this;
        var fileLicencia = event.target.files[0];
        var filePath = "licencia" + this.currentUser.uid;
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, fileLicencia);
        // observe percentage changes
        this.uploadPercentLicencia = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            fileRef.getDownloadURL().subscribe(function (url) {
                _this.downloadURLLicencia = url;
                console.log(url);
            });
        }))
            .subscribe();
    };
    CandidatosRegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'candidatos-registro',
            template: __webpack_require__(/*! ./candidatos-registro.component.html */ "./src/app/candidatos/candidatos-registro/candidatos-registro.component.html"),
            styles: [__webpack_require__(/*! ./candidatos-registro.component.css */ "./src/app/candidatos/candidatos-registro/candidatos-registro.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], CandidatosRegistroComponent);
    return CandidatosRegistroComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\n}\n\n.center {\n    margin: auto;\n    width: 50%;\n    padding: 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<div class=\"container center\">\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"email\" placeholder=\"Correo institucional\" type='email' >\n  </mat-form-field>\n<br>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"password\" placeholder=\"Contrase&ntilde;a\" type='password'>\n  </mat-form-field>\n<br>\n\n<button mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
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




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, db, router) {
        this.auth = auth;
        this.db = db;
        this.router = router;
        this.email = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            if (user) {
                console.log("User logged in");
                //this.router.navigateByUrl('home');
            }
            else {
                _this.router.navigateByUrl('login');
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (user) {
            console.log(user);
            _this.db.database.ref('registrados').once('value').then(function (snap) {
                snap.forEach(function (element) {
                    if (_this.email == element.val().email) {
                        _this.matricula = element.val().matricula;
                        //function to fetch
                        _this.db.database.ref("roles/" + _this.matricula + "/").once('value').then(function (snap) {
                            if (snap.exists()) {
                                _this.rolAsignado = snap.val().role;
                                console.log(_this.rolAsignado);
                            }
                            if (_this.rolAsignado === "asesor") {
                                _this.router.navigateByUrl('/asesor/dashboard');
                            }
                            else if (_this.rolAsignado === "admin") {
                                _this.router.navigateByUrl('/admin/home');
                            }
                            else {
                                _this.router.navigateByUrl('/candidatos/bloques');
                            }
                        });
                    }
                });
            });
        }).catch(function (error) {
            alert(error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n}\n\n.button-row{\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n\n.navbar-brand {\n  font-family: \"helvetica\";\n  font-size: 20px;\n  color: white;\n  float: left;\n  display: block;\n  padding: 20px 20px;\n}\n\n.container-fuid {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n\tbackground-color: #212121;\n\theight: 100px;\n}\n\n.nabvar-button {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 30px 16px;\n\ttext-decoration: none;\n\tfont-weight: 300;\n\tletter-spacing: 3px;\n\tfont-size: 12px;\n}\n\n.nabvar-button:hover{\n  color: black;\n  background-color: #FFFFFF;\n}\n\na ul{\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n/* li a:hover {\n    background-color: white;\n    color: black;\n} */\n\n.nabvar-logout-button{\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 5px 22px;\n  margin-right: 14px;\n  margin-top: 25px;\n  text-decoration: none;\n  border-radius: 50px;\n  border-width: 2.5px;\n  font-weight: 300;\n  letter-spacing: 3px;\n  font-size: 12px;\n  height: 50px;\n}\n\n.nabvar-round-button{\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 5px 20px;\n  margin-right: 14px;\n  margin-top: 5px;\n  text-decoration: none;\n  border: 2px solid white;\n  border-radius: 300px;\n}\n\n.nabvar-round-button:hover{\n  color: black;\n  border-radius: 300px;\n  background-color: #FFFFFF;\n}\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nabbar-default\">\n  <div class=\"container-fuid\">\n    <div>\n      <a class=\"navbar-brand\">COMIT&Eacute; <br> ELECTORAL <br> FEITESM</a>\n    </div>\n\n    <!-- MARK: Displayed only when NO SESSION is stablished -->\n\n    <ul>\n      <button class=\"nabvar-round-button\" (click)=\"signup()\" mat-button>REGÍSTRATE</button>\n    </ul>\n\n    <!-- MARK: Displayed only when ADMIN session is stablished -->\n\n\t<!-- <div class=\"button-row\">\n\t\t<button class=\"nabvar-button\" mat-button [matMenuTriggerFor]=\"elecciones\">ELECCIONES</button>\n\t\t<mat-menu #elecciones=\"matMenu\" overlapTrigger=\"false\">\n\t\t  <button mat-menu-item routerLink=\"/admin/admin-elecciones\">Administraci&oacute;n de elecciones</button>\n\t\t  <button mat-menu-item>Resultados</button>\n\t\t</mat-menu>\n\n\t\t<button class=\"nabvar-button\" mat-button [matMenuTriggerFor]=\"registros\">REGISTROS</button>\n\t\t<mat-menu #registros=\"matMenu\" overlapTrigger=\"false\">\n\t\t  <button mat-menu-item>Administraci&oacute;n de bloques de registros</button>\n\t\t  <button mat-menu-item>Tabla de registros</button>\n\t\t</mat-menu>\n\n\t\t<button class=\"nabvar-button\" mat-button [matMenuTriggerFor]=\"alumnos\">USUARIOS</button>\n\t\t<mat-menu #alumnos=\"matMenu\" overlapTrigger=\"false\">\n\t\t  <button mat-menu-item routerLink=\"/admin/admin-db\">Administraci&oacute;n de base de datos</button>\n\t\t  <button mat-menu-item routerLink=\"/admin/users\">Roles de usuario</button>\n\t\t</mat-menu>\n\n\t\t<button class=\"nabvar-logout-button\" mat-stroked-button (click)=\"logout()\">CERRAR SESI&Oacute;N</button>\n\t</div> -->\n\n    <!-- MARK: Displayed only when ASESOR session is stablished -->\n    <!-- <ul>\n      <button class=\"nabvar-button\" mat-button>Registro de votos</button>\n    </ul>\n    <ul>\n      <button class=\"nabvar-logout-button\" mat-flat-button color=\"warn\">Cerrar Sesión</button>\n    </ul> -->\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.signup = function () {
        this.router.navigateByUrl('/signup');
    };
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        this.auth.auth.signOut().then(function () {
            _this.router.navigateByUrl('/login');
        });
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/services/database.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseService = /** @class */ (function () {
    function DatabaseService(afs) {
        this.afs = afs;
        this.eleccionesCollection = this.afs.collection('elecciones');
        this.elecciones = this.eleccionesCollection.valueChanges();
    }
    DatabaseService.prototype.getElecciones = function () {
        return this.elecciones;
    };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n    max-width: 250px;\n    text-align:  center;\n    margin: auto;   \n}\n\nmat-card-title {\n    text-align: center;\n}\n\ndiv[ng-view]{\n    height: 100%;\n}\n\ndiv {\n    height: 100%;\n    width: 100%;\n    background-color: darkgrey;\n    min-width: 100%;\n    min-height: 100%;\n    margin: 0;\n}\n\nhtml {\n    min-height: 100%;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\nbody{\n    margin: 0;\n    min-height: 100%;\n    width: 100%;\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"container center\" style=\"padding-top: 50px\" layout-align = \"center center\">\n  <mat-card>\n      <mat-card-title><b>Registro</b></mat-card-title>\n    <mat-card-content>\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Correo Institucional</mat-label>\n          <input matInput [(ngModel)]=\"email\" placeholder=\"Correo Institucional\">\n          <mat-hint>ej. a01234567@itesm.mx</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Matricula</mat-label>\n          <input matInput [(ngModel)]=\"matricula\" placeholder=\"Matricula\">\n          <mat-hint>ej. a0.....</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Contraseña</mat-label>\n          <input type = \"password\" matInput [(ngModel)]=\"password\" placeholder=\"Contraseña\">\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Confirmar Contraseña</mat-label>\n          <input type=\"password\" matInput [(ngModel)]=\"confPassword\" placeholder=\"Confirmar Contraseña\">\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" (click)=\"signUp()\">Registrarse</button>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
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




var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, db, router) {
        this.auth = auth;
        this.db = db;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        if (this.password === this.confPassword) {
            this.auth.auth.createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
                _this.db.database.ref("userId/" + user.user.uid).set({
                    matricula: _this.matricula
                });
                //Obtener datos de la base de datos de los registrados candidatos
                _this.db.database.ref("database/" + _this.matricula + "/").once('value').then(function (snap) {
                    //setear info de nuevo candidato
                    _this.state = snap.val().state;
                    _this.major = snap.val().major;
                    _this.fname = snap.val().fname;
                    _this.db.database.ref("registrados/" + _this.matricula).set({
                        matricula: _this.matricula,
                        email: _this.email,
                        uid: user.user.uid,
                        state: _this.state,
                        major: _this.major,
                        fname: _this.fname
                    });
                    _this.db.database.ref("roles/" + _this.matricula + "/").once('value').then(function (snap) {
                        if (snap.exists()) {
                            _this.rolAsignado = snap.val().role;
                            console.log(_this.rolAsignado);
                        }
                        if (_this.rolAsignado === "admin") {
                            _this.router.navigateByUrl('/admin/home');
                        }
                        else if (_this.rolAsignado === "asesor") {
                            _this.router.navigateByUrl('/asesor/dashboard');
                        }
                        else {
                            _this.router.navigateByUrl('/candidatos/bloques');
                        }
                    });
                });
            });
        }
        else {
            alert('Both passwords must match');
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user-home/user-home.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-home/user-home.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-home/user-home.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-home/user-home.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>"

/***/ }),

/***/ "./src/app/user/user-home/user-home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-home/user-home.component.ts ***!
  \*******************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
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

var UserHomeComponent = /** @class */ (function () {
    function UserHomeComponent() {
    }
    UserHomeComponent.prototype.ngOnInit = function () {
    };
    UserHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-home',
            template: __webpack_require__(/*! ./user-home.component.html */ "./src/app/user/user-home/user-home.component.html"),
            styles: [__webpack_require__(/*! ./user-home.component.css */ "./src/app/user/user-home/user-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserHomeComponent);
    return UserHomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    config: {
        apiKey: "AIzaSyA5-JOdqhE2ZcdFq5YOkYeZe8OTTz1NpUg",
        authDomain: "comite-electoral.firebaseapp.com",
        databaseURL: "https://comite-electoral.firebaseio.com",
        projectId: "comite-electoral",
        storageBucket: "comite-electoral.appspot.com",
        messagingSenderId: "949974661394"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/miguelcuellar/Desktop/Campus/9no Semestre/LabWeb/comite-electoral/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map