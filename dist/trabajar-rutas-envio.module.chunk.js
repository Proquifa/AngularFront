webpackJsonp(["trabajar-rutas-envio.module"],{

/***/ "./src/app/components/trabajar-ruta/file-upload-envio/file-upload-envio.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"flex-direction: row;height: 30px; display:flex; min-width:300px; padding-left: 103px;padding-left: 40px;\" class=\"content\">\n    <div class=\"boton_file\">\n        <a *ngIf=\"fileName == ''\">\n            <label style=\"padding-left: 20px;\" ; class=\"doc\" for=\"fileInput\">{{nombreArchivo}}</label>\n        </a>\n        <a *ngIf=\"fileName != ''\">\n            <label [ngStyle]=\"{'width':'calc(100% - 5px )','height':'12px'}\">{{nombreArchivo}} </label>\n        </a>\n        <input [disabled]=\"!disabled\" *ngIf=\"fileName == ''\" #fileInput type=\"file\" id=\"fileInput\" (change)=\"fileChange2($event)\" accept=\"{{formato}}\" #cursorPointer class=\"upload\">\n        <input *ngIf=\"fileName != ''\" #fileInput type=\"file\" id=\"fileInput\" (change)=\"fileChange2($event)\" accept=\"{{formato}}\" class=\"uploadC\">\n    </div>\n    <img *ngIf=\"fileName != ''\" for=\"file\" src=\"./assets/Images/editar-pieza/ojito.svg\" alt=\"\" style=\"margin-left:2px; width:30px; height:30px; cursor:pointer \" (click)=\"metodoMostrarSeleccion(fileName,paqDistinta)\">\n\n    <!-- <div *ngIf=\"paqDistinta\">\n\n        <img *ngIf=\"fileName != ''\" for=\"file\" src=\"./assets/Images/editar-pieza/ojito.svg\" alt=\"\" style=\"margin-left:2px; width:30px; height:30px; cursor:pointer \" (click)=\"metodoMostrarSeleccion(fileName,paqDistinta)\">\n\n    </div> -->\n\n</div>"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/file-upload-envio/file-upload-envio.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n.boton_file {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0px 0px;\n  border: 1px solid #D8D9DD; }\n.boton_file > a {\n    color: black;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-height: 28px;\n    background: #FFF;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 6px 5px;\n    z-index: 1;\n    font-family: 'Roboto';\n    font-weight: 200;\n    font-size: 11px !important;\n    color: #424242;\n    text-align: left;\n    width: calc(100% - 30px);\n    overflow-y: scroll; }\n.boton_file > a > .doc {\n      font-family: 'Roboto';\n      font-size: 16px;\n      color: #ABAAB0;\n      text-align: left; }\n.boton_file > .upload {\n    background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2210.74361mm%22 height%3D%2210.58507mm%22 viewBox%3D%220 0 30.45433 30.00493%22%3E%3Ctitle%3ERecurso 139%3C%2Ftitle%3E%3Cg id%3D%22Capa_2%22 data-name%3D%22Capa 2%22%3E%3Cg id%3D%22Capa_1-2%22 data-name%3D%22Capa 1%22%3E%3Crect width%3D%2230.45433%22 height%3D%2230.00493%22 style%3D%22fill%3A%23068a95%22%2F%3E%3Cpath d%3D%22M22.21542%2C17.28994H17.495v4.96475H12.98719V17.28994H8.2389V13.058h4.72042V8.09039h4.504V13.058h4.75215Z%22 style%3D%22fill%3A%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat right;\n    background-size: 30px;\n    height: 30px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 8px 0px;\n    outline: none;\n    width: 100%;\n    margin: -29px 0px;\n    min-width: 55px;\n    cursor: pointer; }\n.boton_file > .uploadC {\n    background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2210.58333mm%22 height%3D%2210.584mm%22 viewBox%3D%220 0 30 30.0019%22%3E%3Ctitle%3ERecurso 137%3C%2Ftitle%3E%3Cg id%3D%22Capa_2%22 data-name%3D%22Capa 2%22%3E%3Cg id%3D%22Capa_1-2%22 data-name%3D%22Capa 1%22%3E%3Crect width%3D%2230%22 height%3D%2230.0019%22 style%3D%22fill%3A%23058794%22%2F%3E%3Cpath d%3D%22M14.3243%2C6.6386a8.36331%2C8.36331%2C0%2C1%2C0%2C.0293%2C16.7266V20.5683a5.56743%2C5.56743%2C0%2C1%2C1%2C5.5214-5.7539H18.5l2.7637%2C3.8848%2C2.7656-3.8848H22.6739a8.36267%2C8.36267%2C0%2C0%2C0-8.3496-8.1758Z%22 style%3D%22fill%3A%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat right;\n    background-size: 30px;\n    height: 30px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 8px 40%;\n    outline: none;\n    cursor: pointer;\n    width: 100%;\n    margin: -29px 0px;\n    min-width: 255px; }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/file-upload-envio/file-upload-envio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadEnvioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileUploadEnvioComponent = /** @class */ (function () {
    function FileUploadEnvioComponent() {
        this.formato = ".pdf"; //tipo de formato a recibir .pdf, .png
        this.doc = '';
        this.enviarDocumento = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = true;
        this.file = null;
        this.modalAdd = false;
    }
    FileUploadEnvioComponent.prototype.ngOnInit = function () {
    };
    FileUploadEnvioComponent.prototype.fileChange2 = function ($event) {
        console.log($event);
        this.file = $event.target.files;
        this.fileName = $event.target.files[0].name;
        this.enviarDocumento.emit(this.file);
    };
    FileUploadEnvioComponent.prototype.ngOnChanges = function (change) {
        if (change.docR !== undefined) {
            this.recibeDoc();
        }
        console.log("paquetria" + this.paqDistinta);
    };
    FileUploadEnvioComponent.prototype.recibeDoc = function () {
        console.log(this.docR);
        if (this.docR.archivo !== undefined) {
            this.file = this.docR.archivo[0];
            this.fileName = this.docR.archivo[0].name;
            console.log("---------File----------");
            console.log(this.fileName);
        }
    };
    //   mostrarArchivoDistinto(fileInput: any) {
    //     fileInput = this.file;
    //     if(fileInput[0]== undefined){
    //     var reader = new FileReader();
    //     reader.onload = function(e: any) {
    //       const BrowserWindow = electron.remote.BrowserWindow;
    //       let newWin = new BrowserWindow({ width: 800, height: 600 })
    //       PDFWindow.addSupport(newWin)
    //       newWin.loadURL(fileInput.path);
    //       console.log("path");
    //       console.log(fileInput.path);
    //       reader.readAsDataURL(fileInput);
    //     }
    //   } else
    // {
    //      console.log("ARCHIVO LLEGANDO");
    //   console.log(fileInput);
    //   const BrowserWindow = electron.remote.BrowserWindow;
    //   let newWin = new BrowserWindow({ width: 800, height: 600 })
    //   PDFWindow.addSupport(newWin)
    //   newWin.loadURL(fileInput);
    //   }
    //   reader.readAsDataURL(fileInput);
    //   console.log("paque2"+  this.paqDistinta);
    // }
    FileUploadEnvioComponent.prototype.mostrarArchivoDistinto = function (fileInput) {
        fileInput = this.file;
        if (fileInput[0] == undefined) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var BrowserWindow = electron.remote.BrowserWindow;
                var newWin = new BrowserWindow({ width: 800, height: 600 });
                PDFWindow.addSupport(newWin);
                newWin.loadURL(fileInput.path);
            };
            reader.readAsDataURL(fileInput);
            console.log("pathi" + fileInput.path);
        }
        else {
            var reader = new FileReader();
            reader.onload = function (e) {
                var BrowserWindow = electron.remote.BrowserWindow;
                var newWin = new BrowserWindow({ width: 800, height: 600 });
                PDFWindow.addSupport(newWin);
                newWin.loadURL(fileInput[0].path);
            };
            reader.readAsDataURL(fileInput[0]);
            console.log("path" + fileInput[0].path);
        }
    };
    FileUploadEnvioComponent.prototype.mostrarArchivo = function (archivo) {
        console.log("ARCHIVO LLEGANDO");
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
        console.log("paque" + this.paqDistinta);
    };
    FileUploadEnvioComponent.prototype.metodoMostrarSeleccion = function (fileInput, paqDistinta) {
        console.log("llego" + paqDistinta);
        console.log(paqDistinta);
        console.log("distinc paq");
        console.log(this.paqDistinta);
        console.log(this.paqDistinta);
        if (this.paqDistinta === true) {
            console.log("distinto");
            this.mostrarArchivoDistinto(fileInput);
            this.paqDistinta = false;
        }
        else if (this.paqDistinta === false) {
            console.log(this.paqDistinta);
            if (this.paqDistinta === false) {
                console.log("normal");
                this.mostrarArchivo(fileInput);
            }
        }
        this.paqDistinta = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileUploadEnvioComponent.prototype, "formato", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileUploadEnvioComponent.prototype, "doc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FileUploadEnvioComponent.prototype, "enviarDocumento", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FileUploadEnvioComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploadEnvioComponent.prototype, "fileName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploadEnvioComponent.prototype, "nombreArchivo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploadEnvioComponent.prototype, "paqDistinta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FileUploadEnvioComponent.prototype, "mensajeria", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("cursorPointer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FileUploadEnvioComponent.prototype, "cursorPointer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploadEnvioComponent.prototype, "docR", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploadEnvioComponent.prototype, "ruta", void 0);
    FileUploadEnvioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-file-upload-envio',
            template: __webpack_require__("./src/app/components/trabajar-ruta/file-upload-envio/file-upload-envio.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/file-upload-envio/file-upload-envio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FileUploadEnvioComponent);
    return FileUploadEnvioComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/pop-up-localizar-numero-rastreo/pop-up-localizar-numero-rastreo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" class=\"btnControlPrincipal\" onclick=\"document.getElementById('id01').style.display='block'\">btn</button> -->\n\n<!--<img class=\"barra\" src='./assets/Images/Images/Recurso 266100.svg' class=\"btnControlPrincipal\" onclick=\"document.getElementById('pop-inf').style.display='flex'\" />-->\n\n<!-- <img src=\"./assets/Images/editar-pieza/cargar.svg\" alt=\"\" style=\"width:30px; height:30px; cursor:pointer;\" onclick=\"document.getElementById('pop-inf').style.display='block'\" > -->\n<div class=\"w3-container\">\n    <!--DIV INICIAL-->\n    <div id=\"pop-inf\" class=\"modal\" #pop>\n        <div class=\"modal-content\">\n            <header class=\"header\">\n                AMBIENTE\n                <!-- <img src=\"./assets/Images/Images/cerrar_blanco.svg\" alt=\"cerrar\" (click)=\"cerrar()\"> -->\n\n            </header>\n\n            <div class=\"contenido\">\n                <div class=\"datos\">\n\n                    <p><label> Localizando número de rastreo</label></p>\n\n                </div>\n\n            </div>\n\n            <div class=\"footer\">\n                <div type=\"submit\" class=\"btnOk\" (click)=\"cerrar()\"><label>OK</label></div>\n\n\n            </div>\n        </div>\n    </div>\n    <!--FIN DIV INICIO-->\n\n</div>"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/pop-up-localizar-numero-rastreo/pop-up-localizar-numero-rastreo.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  z-index: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.7);\n  font-family: 'Roboto', sans-serif; }\n\n.modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: auto;\n  text-align: center;\n  background-color: white;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  max-width: 630px;\n  width: 630px;\n  height: 385px;\n  max-height: 385px;\n  color: black;\n  border: 1px solid #008894;\n  border-radius: 20px;\n  font-family: 'Roboto', sans-serif; }\n\n.header {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  background-color: #008894;\n  border: 1px solid #008894;\n  border-radius: 19px 19px 0px 0px;\n  color: white;\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 27px;\n  height: 55px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0px 15px; }\n\n.contenido {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n      order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  width: 100%;\n  height: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  color: #424242; }\n\n.footer {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 15%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.datos {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: 40%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.datos > p {\n    font-family: 'Roboto';\n    font-weight: bold;\n    font-size: 25px;\n    color: #666666;\n    text-align: center;\n    padding: 10px 0px; }\n\n.btnOk {\n  width: 220px;\n  height: 30px;\n  background: #338A9C;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n\n.btnOk > label {\n    font-family: 'Novecento';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    height: 100%;\n    padding-top: 1.8%; }\n\n.btnControlPrincipal {\n  width: 37px;\n  height: 37px;\n  background-color: #008894;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/pop-up-localizar-numero-rastreo/pop-up-localizar-numero-rastreo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpLocalizarNumeroRastreoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopUpLocalizarNumeroRastreoComponent = /** @class */ (function () {
    function PopUpLocalizarNumeroRastreoComponent() {
        this.cambioIndex = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpLocalizarNumeroRastreoComponent.prototype.ngOnInit = function () {
    };
    PopUpLocalizarNumeroRastreoComponent.prototype.cerrar = function () {
        this.pop.nativeElement.style.display = 'none';
        this.cambio = true;
        this.cambioIndex.emit(this.cambio);
        console.log("llegue a cerrar pop- inf", this.cambio);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpLocalizarNumeroRastreoComponent.prototype, "cambioIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pop"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopUpLocalizarNumeroRastreoComponent.prototype, "pop", void 0);
    PopUpLocalizarNumeroRastreoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-localizar-numero-rastreo',
            template: __webpack_require__("./src/app/components/trabajar-ruta/pop-up-localizar-numero-rastreo/pop-up-localizar-numero-rastreo.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/pop-up-localizar-numero-rastreo/pop-up-localizar-numero-rastreo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpLocalizarNumeroRastreoComponent);
    return PopUpLocalizarNumeroRastreoComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-prioridades-trabajar-ruta-envio/barra-prioridades-trabajar-ruta-envio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inspeccionPorPrioridad\">\n    <h1>PRIORIDAD DE EMBALAJE</h1>\n    <div id=\"myProgress\">\n        <div id=\"Prioridad1\" [style.width]=\"porcentajeP1\" *ngIf=\"mostrarP1\">\n            <h2>Prioridad 1</h2>\n            <p><label>Por trabajar: </label>{{formatoPzaP1 | acFormatNumber}} <label>P· List</label></p>\n            <p><label *ngIf=\"!existo\">Tiempo Estimado de Trabajo: </label>{{TEIPrioridad1}}</p>\n        </div>\n        <div id=\"Prioridad2\" [style.width]=\"porcentajeP2\" *ngIf=\"mostrarP2\">\n\n            <div class=\"descripcionLargaP2\" *ngIf=\"descripcionLargaP2\">\n                <h2>Prioridad 2</h2>\n                <p><label>Por Inspeccionar: </label>{{formatoPzaP2 | acFormatNumber }} </p>\n                <p><label>Tiempo Estimado de Inspección: </label>{{TEIPrioridad2}}</p>\n            </div>\n\n            <div class=\"descripcionCortaP2\" *ngIf=\"descripcionCortaP2\">\n                <h2>P2</h2>\n                <p><label>PI: </label>{{formatoPzaP2 | acFormatNumber }} <label>P· List</label> </p>\n                <p><label>TEI: </label>{{TEIPrioridad2}}</p>\n            </div>\n\n        </div>\n\n        <div id=\"Prioridad3\" [style.width]=\"porcentajeP3\" *ngIf=\"mostrarP3\">\n\n            <div class=\"descripcionLargaP3\" *ngIf=\"descripcionLargaP3\">\n                <h2>Prioridad 3</h2>\n                <p><label>Por Inspeccionar: </label>{{formatoPzaP3}} <label>P· List</label></p>\n                <p><label>Tiempo Estimado de Inspección: </label>{{TEIPrioridad3}}</p>\n            </div>\n\n            <div class=\"descripcionCortaP3\" *ngIf=\"descripcionCortaP3\">\n                <h2>P3</h2>\n                <p><label>PI: </label>{{formatoPzaP3}} </p>\n                <p><label>TEI: </label>{{TEIPrioridad3}}</p>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-prioridades-trabajar-ruta-envio/barra-prioridades-trabajar-ruta-envio.component.scss":
/***/ (function(module, exports) {

module.exports = "#myProgress {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 123px;\n  color: #9B9B9B;\n  font-family: 'Novecento';\n  margin-left: 0%;\n  padding-top: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n#Prioridad1 {\n  height: 123px;\n  width: 45%;\n  background-color: #AF3634;\n  text-align: left;\n  line-height: 19px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px; }\n\n#Prioridad2 {\n  height: 123px;\n  width: 30%;\n  background-color: #EEB253;\n  text-align: left;\n  line-height: 19px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px; }\n\n#Prioridad3 {\n  height: 123px;\n  width: 30%;\n  background-color: #63B257;\n  text-align: left;\n  line-height: 19px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px; }\n\np {\n  font-size: 12px;\n  color: white;\n  margin-top: 1%; }\n\nh1 {\n  font-size: 22px;\n  color: #008895;\n  font-family: 'Novecento'; }\n\nh2 {\n  font-size: 20px;\n  color: white; }\n\n.tipoInspeccion {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  text-align: left;\n  font-size: 24px;\n  font-weight: bold; }\n\n.pedimento {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.imgPedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.txtPedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.tipoTexto {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-weight: 500;\n  font-family: 'Novecento'; }\n\n.datoTexto {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-family: 'Novecento'; }\n\n.ordenDeCompra {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: 121px; }\n\n.txtOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.tipoTextoOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-weight: 500;\n  font-family: 'Roboto', sans-serif;\n  padding-bottom: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.datoTextoOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-family: 'Novecento';\n  padding-left: 7%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n@media all and (min-height: 770px) and (max-height: 880px) and (min-width: 1300px) and (max-width: 2571px) {\n  h1 {\n    font-size: 13px; }\n  #Prioridad1 {\n    height: 100px; }\n  #Prioridad2 {\n    height: 100px; }\n  #Prioridad3 {\n    height: 100px; }\n  p {\n    font-size: 9px; }\n  h2 {\n    font-size: 11px; }\n  #myProgress {\n    padding-top: 10px; } }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-prioridades-trabajar-ruta-envio/barra-prioridades-trabajar-ruta-envio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraPrioridadesTrabajarRutaEnvioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trabajar_rutas_envio_trabajar_rutas_envio_informacion_trabajar_rutas_envio_services__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BarraPrioridadesTrabajarRutaEnvioComponent = /** @class */ (function () {
    function BarraPrioridadesTrabajarRutaEnvioComponent(router, _pzasAInspeccionar, coreComponent, _datosPrio) {
        this.router = router;
        this._pzasAInspeccionar = _pzasAInspeccionar;
        this.coreComponent = coreComponent;
        this._datosPrio = _datosPrio;
        this.inspector = "aHernandezM";
        this.PackingList = [];
        // Piezas por prioridad
        this.pzasP1 = 0;
        this.pzasP2 = 0;
        this.pzasP3 = 0;
    }
    BarraPrioridadesTrabajarRutaEnvioComponent.prototype.ngOnInit = function () {
        this.obtenerTiempoTrabajoEnvio();
    };
    BarraPrioridadesTrabajarRutaEnvioComponent.prototype.ngOnChanges = function (change) {
    };
    // Método para obtener el promedio por pieza de cada packing list.
    BarraPrioridadesTrabajarRutaEnvioComponent.prototype.obtenerTiempoTrabajoEnvio = function () {
        var _this = this;
        this._datosPrio.obtenerTiempoTrabajoEnvio().subscribe(function (data) {
            /*Calcular tiempo POR pieza*/
            var tiempoT;
            tiempoT = data.current.Tiempo[0].tiempo;
            /****************************/
            _this.PackingList = data.current.Piezas;
            _this.PackingList.forEach(function (element) {
                if (element.prioridad === 'P1') {
                    _this.pzasP1 = element.totalPiezas;
                }
                else if (element.prioridad === 'P2') {
                    _this.pzasP2 = element.totalPiezas;
                }
                else if (element.prioridad === 'P3') {
                    _this.pzasP3 = element.totalPiezas;
                }
            });
            _this.tiempo = tiempoT;
            _this.TEIPrioridad1 = _this.obtenerTiempoEstimado(_this.pzasP1, _this.tiempo);
            _this.TEIPrioridad2 = _this.obtenerTiempoEstimado(_this.pzasP2, _this.tiempo);
            _this.TEIPrioridad3 = _this.obtenerTiempoEstimado(_this.pzasP3, _this.tiempo);
            /******/
            _this.mostrarP1 = _this.visualizarP1(_this.pzasP1);
            _this.mostrarP2 = _this.visualizarP2(_this.pzasP2);
            _this.mostrarP3 = _this.visualizarP3(_this.pzasP3);
            /******/
            _this.formatoPzaP1 = (_this.pzasP1 == 1) ? _this.pzasP1 + ' pieza' : _this.pzasP1 + ' piezas';
            _this.formatoPzaP2 = (_this.pzasP2 == 1) ? _this.pzasP2 + ' pieza' : _this.pzasP2 + ' piezas';
            _this.formatoPzaP3 = (_this.pzasP3 == 1) ? _this.pzasP3 + ' pieza' : _this.pzasP3 + ' piezas';
            /******/
            _this.porcentajeP1 = _this.obtenerPorcentajeP1(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP2 = _this.obtenerPorcentajeP2(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP3 = _this.obtenerPorcentajeP3(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
        });
    };
    // Funciones para porcentajes
    BarraPrioridadesTrabajarRutaEnvioComponent.prototype.obtenerPorcentajeP1 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == true && value2 == true && value3 == false) {
            porcentaje = 70;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            porcentaje = 50;
        }
        else if (value1 == true && value2 == false && value3 == true) {
            porcentaje = 70;
        }
        return porcentaje;
    };
    BarraPrioridadesTrabajarRutaEnvioComponent.prototype.obtenerPorcentajeP2 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == false && value2 == true && value3 == true) {
            this.descripcionLargaP2 = true;
            this.descripcionCortaP2 = false;
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 70;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            this.descripcionLargaP2 = false;
            this.descripcionCortaP2 = true;
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 25;
        }
        else if (value1 == true && value2 == true && value3 == false) {
            this.descripcionCortaP2 = true;
            this.descripcionLargaP2 = false;
            porcentaje = 30;
        }
        return porcentaje;
    };
    BarraPrioridadesTrabajarRutaEnvioComponent.prototype.obtenerPorcentajeP3 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == true && value2 == false && value3 == true) {
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 30;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            porcentaje = 25;
        }
        else if (value1 == false && value2 == true && value3 == true) {
            porcentaje = 30;
        }
        return porcentaje;
    };
    //Funciones para visualizar los recuadros por prioridad
    BarraPrioridadesTrabajarRutaEnvioComponent.prototype.visualizarP1 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            return true;
    };
    BarraPrioridadesTrabajarRutaEnvioComponent.prototype.visualizarP2 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP2 = true;
        return true;
    };
    BarraPrioridadesTrabajarRutaEnvioComponent.prototype.visualizarP3 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP3 = true;
        return true;
    };
    BarraPrioridadesTrabajarRutaEnvioComponent.prototype.obtenerTiempoEstimado = function (piezas, tPromedio) {
        var tiempo = piezas * tPromedio;
        var hours;
        var minutes;
        var seconds;
        hours = Math.floor(tiempo / 3600);
        minutes = Math.floor((tiempo % 3600) / 60);
        seconds = tiempo % 60;
        //Anteponiendo un 0 a los minutos si son menos de 10
        minutes = minutes < 10 ? '0' + minutes : minutes;
        //Validacion de pruebas para cuando el tiempo es menor o igual a 1 min.
        if ((hours == 0 || hours == NaN) && minutes == 0) {
            var result = "1 min";
            return result;
            // console.log("1 minuto restante o menos  ");
        }
        else if (hours <= 0) {
            var result = minutes + " min";
            return result;
        }
        else {
            var result = hours + " hr " + minutes + " min";
            return result;
        }
    };
    BarraPrioridadesTrabajarRutaEnvioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-barra-prioridades-trabajar-ruta-envio',
            template: __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-prioridades-trabajar-ruta-envio/barra-prioridades-trabajar-ruta-envio.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-prioridades-trabajar-ruta-envio/barra-prioridades-trabajar-ruta-envio.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__["a" /* InspeccionService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_4__trabajar_rutas_envio_trabajar_rutas_envio_informacion_trabajar_rutas_envio_services__["a" /* TrabajarRutasEnvioService */]])
    ], BarraPrioridadesTrabajarRutaEnvioComponent);
    return BarraPrioridadesTrabajarRutaEnvioComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-progreso-trabajar-ruta-envio/barra-progreso-trabajar-ruta-envio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"barraProgreso\">\n\n    <div class=\"barra\">\n        <h1>PROGRESO DE {{evento| uppercase}}</h1>\n        <div class=\"datos\">\n            <div class=\"mensaje\">\n                <label class=\"mensajeBarra\">{{mensaje}}</label>\n            </div>\n            <div class=\"hora\">\n                <img src='./assets/Images/reloj.svg' style=\"margin-right: 10px;\" class=\"imagenReloj\"/>\n                <label>{{hora}}</label>\n            </div>\n        </div>\n\n\n        <div class=\"padreBarraProgreso\" style=\"position: relative\">\n            <div id=\"myProgress\">\n                <div id=\"myBar\" [style.width]=\"promedio\" [style.background]=\"colorBarra\">\n                    <!--<span class=\"tooltiptextleft\" *ngIf=\"tooltiptextLeft\">{{PzasInspeccionadas + \" piezas\"}}</span>-->\n                    <!--<label class=\"textLeft\" *ngIf=\"tooltiptextLeft\">{{formatoPzasInspeccionadas}}</label>\n\n                    <span  *ngIf=\"textLeft\" class=\"tooltiptext\" style=\"position: absolute;top:75px\">\n                            <label >{{formatoPzasInspeccionadas}}</label>  &lt;!&ndash;<label >{{formatoPzasInspeccionadas}}10 PackingList Trabajadas</label>&ndash;&gt;\n                    </span>-->\n                  <span class=\"tooltiptextleft\" *ngIf=\"tooltiptextLeft\">{{formatoPzasInspeccionadas}}</span>\n                  <label class=\"textLeft\" *ngIf=\"textLeft\">{{formatoPzasInspeccionadas}}</label>\n                </div>\n\n                <div id=\"myBar2\" [style.width]=\"restante\">\n                    <span class=\"tooltiptextRigth\" *ngIf=\"toolTipRigth\">{{formatoPzasRestantes}}</span>\n                    <label class=\"textRigth\" *ngIf=\"textRigth\">{{formatoPzasRestantes}}</label>\n                    <!-- <label class=\"textoBarraE\" style=\"font-size: 25px\">140 piezas (restantes)</label> -->\n                </div>\n            </div>\n            <div class=\"datosBarra\">\n                <div class=\"PzasIniciales\">\n                    0 Piezas\n                </div>\n                <div class=\"pzasTotales\">\n                    {{pzasTotales}} piezas\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-progreso-trabajar-ruta-envio/barra-progreso-trabajar-ruta-envio.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.barraProgreso {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: 20%;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: 'Roboto', sans-serif; }\n.barra {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  height: 100%;\n  width: 50%;\n  text-align: left;\n  font-family: 'Roboto', sans-serif; }\n#myProgress {\n  width: 100%;\n  background-color: #ddd;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 70px;\n  font-weight: bold;\n  margin-top: 1%;\n  color: #9B9B9B; }\n#myBar {\n  height: 100%;\n  background-color: #9DB83C;\n  text-align: center;\n  line-height: 30px;\n  color: #424242;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  position: relative;\n  display: inline-block; }\n.datosBarra {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 1%;\n  font-weight: bold;\n  font-size: 14px; }\n.PzasIniciales {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n.pzasTotales {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n.textLeft,\n.textRigth {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\nh1 {\n  font-size: 20px;\n  color: #008894; }\n.datos {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.mensaje {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n.hora {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-weight: bold;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.tooltip .tooltiptext::after {\n  content: \" \";\n  position: absolute;\n  bottom: 100%;\n  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent #4C4C4C transparent; }\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1; }\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 130px;\n  background-color: #4C4C4C;\n  color: #FFFFFF;\n  font-family: 'Roboto';\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 10px 0px 0px;\n  font-size: 9px;\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 2%;\n  margin-left: -60px;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1; }\n.mensajeBarra {\n  font-style: italic;\n  padding-top: 5px; }\n.imagenReloj {\n  width: 37px;\n  height: 37px; }\n.textLeft, .textRigth {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-family: 'Roboto'; }\n#myBar2 .tooltiptextRigth {\n  visibility: visibility;\n  width: 119px;\n  height: 17%;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: -10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 50%;\n  margin-left: -60px;\n  font-size: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n#myBar2 .tooltiptextRigth::after {\n  content: \" \";\n  position: absolute;\n  bottom: 100%;\n  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent black transparent; }\n#myBar {\n  height: 100%;\n  text-align: center;\n  line-height: 30px;\n  color: #FFFFFF;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  position: relative;\n  display: inline-block;\n  font-size: 25px; }\n#myBar2 {\n  height: 100%;\n  background-color: #ddd;\n  text-align: center;\n  line-height: 30px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: #9B9B9B;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-weight: bold;\n  font-size: 25px; }\n#myBar .tooltiptextleft {\n  visibility: visibility;\n  width: 119px;\n  height: 17%;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: -10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 50%;\n  margin-left: -60px;\n  font-size: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n#myBar .tooltiptextleft::after {\n  content: \" \";\n  position: absolute;\n  color: #424242;\n  bottom: 100%;\n  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent black transparent; }\n/******************MEDIA PARA EL TAMAÑO PEQUEÑO *************/\n@media all and (min-height: 770px) and (max-height: 880px) and (min-width: 1300px) and (max-width: 2571px) {\n  #myBar2 {\n    font-size: 16px; }\n  #myBar {\n    font-size: 16px; }\n  h1 {\n    font-size: 13px; }\n  .padreBarraProgreso {\n    width: 356px; }\n  #myProgress {\n    width: 356px;\n    height: 47px; }\n  .mensajeBarra {\n    font-size: 11px; }\n  .hora {\n    font-size: 12px; }\n  .imagenReloj {\n    width: 20px; } }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-progreso-trabajar-ruta-envio/barra-progreso-trabajar-ruta-envio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraProgresoTrabajarRutaEnvioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trabajar_rutas_envio_trabajar_rutas_envio_informacion_trabajar_rutas_envio_services__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarraProgresoTrabajarRutaEnvioComponent = /** @class */ (function () {
    function BarraProgresoTrabajarRutaEnvioComponent(router, _totalpzasInsp, _datosPrio) {
        this.router = router;
        this._totalpzasInsp = _totalpzasInsp;
        this._datosPrio = _datosPrio;
        // inspector:string = "aHernandezM";
        this.evento = "trabajo de ruta";
        this.mensaje = "Con el ritmo de inspección actual, lograrás cumplir el objetivo";
        //Estos son los valores centrales del componente, simplemente al modificar estos datos el comportamiento del componente cambia-
        this.PzasInspeccionadas = 10;
        this.pzasTotales = 150;
        this.PackingList = [];
        ///////////// variables de mensaje para barra de progreso y el color////////////////////////////////
        this.mensajeNaranja = 'Con el ritmo de Trabajo actual, no lograrás cumplir el objetivo.';
        this.mensajeAzul = 'Acelera el ritmo de Tabajo, para que logres el objetivo.';
        this.mensajeVerde = 'Con el ritmo de Trabajo actual, lograrás cumplir el objetivo.';
        this.naranja = '#FF6700';
        this.azul = '#0098DA';
        this.verde = '#94BA13 ';
    }
    BarraProgresoTrabajarRutaEnvioComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.pzasRestantes = (this.pzasTotales - this.PzasInspeccionadas);
        //   this.formatoPzasRestantes = (this.pzasRestantes == 1) ?  this.pzasRestantes + ' pieza (restante)' : this.pzasRestantes + ' piezas (restantes)' ;
        // this.obtenerDatosInspector(); //Descomentar la linea para conectar con el usuario de la sesion.
        // this.obtenerPiezasInspeccionadasHoy(this.inspector);
        console.log('Soy total de piezas barra---->', this.totPiezas);
        this.PzasInspeccionadas = this.totPiezas;
        this.pzasTotales = this.packingTotales;
        this.obtenerPiezasInspeccion(this.inspector);
        this.idHora = setInterval(function () {
            _this.hora = _this.obtenerHoraActual();
        }, 1000);
        this.obtenerTiempoTrabajoEnvio();
    };
    BarraProgresoTrabajarRutaEnvioComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.idHora);
    };
    BarraProgresoTrabajarRutaEnvioComponent.prototype.obtenerPiezasInspeccion = function (inspector) {
        //  this.obtenerRestante(this.pzasTotales);
        this.restante = this.obtenerRestante(this.pzasTotales) + "%";
        this.pzasRestantes = (this.pzasTotales - this.PzasInspeccionadas);
        this.formatoPzasRestantes = (this.pzasRestantes == 1) ? this.pzasRestantes + ' pieza (restante)' : this.pzasRestantes + ' Packing List (restantes)';
        this.promedio = this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas) + "%";
        this.formatoPzasInspeccionadas = (this.PzasInspeccionadas == 1) ? this.PzasInspeccionadas + ' pieza inspeccionada' : this.PzasInspeccionadas + ' Packing List enviados';
    };
    BarraProgresoTrabajarRutaEnvioComponent.prototype.obtenerPiezasInspeccionadasHoy = function (inspector) {
        this.formatoPzasInspeccionadas = (this.PzasInspeccionadas == 1) ? this.PzasInspeccionadas + ' pieza inspeccionada' : this.PzasInspeccionadas + ' Packin List Trabajadas';
        this.valorTooltip = this.PzasInspeccionadas + ' Packin List Trabajadas';
        console.log("Las piezas que ya han sido inspeccionadas hoy son : " + this.PzasInspeccionadas);
        return this.PzasInspeccionadas;
    };
    BarraProgresoTrabajarRutaEnvioComponent.prototype.obtenerHoraActual = function () {
        var fecha = new Date();
        var formatoMinutos = fecha.getMinutes();
        var minutes = (formatoMinutos < 10) ? '0' + formatoMinutos : formatoMinutos;
        var formatoHoras = fecha.getHours();
        var hours = (formatoHoras < 10) ? '0' + formatoHoras : formatoHoras;
        // let FormatoSegundos = fecha.getSeconds();
        // let seconds = (FormatoSegundos < 10) ? '0' + FormatoSegundos : FormatoSegundos;
        return hours + ":" + minutes + " Hrs.";
    };
    // Funcion para obtener el porcentaje de progreso además de mostrar y ocultar los tooltip y textos
    BarraProgresoTrabajarRutaEnvioComponent.prototype.obtenerPorcentaje = function (totales, inspeccionadas) {
        var porcentaje;
        if (totales < inspeccionadas) {
            alert("El numero de piezas inspeccionadas es mayor que las piezas totales");
        }
        else if (totales == inspeccionadas) {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
            // alert("El porcentaje es: " + porcentaje + "%" + "\nFelicidades has inspeccionado todas las piezas");
        }
        else {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
            if (porcentaje <= 25) {
                this.toolTipRigth = false;
                this.textRigth = true;
                this.tooltiptextLeft = true;
                this.textLeft = false;
            }
            else if (porcentaje >= 85 && porcentaje <= 100) {
                this.toolTipRigth = true;
                this.textRigth = false;
                this.tooltiptextLeft = false;
                this.textLeft = true;
            }
            else {
                this.toolTipRigth = false;
                this.textRigth = true;
                this.tooltiptextLeft = false;
                this.textLeft = true;
            }
        }
        return porcentaje;
    };
    // Funcion para obtener porcentaje restante
    BarraProgresoTrabajarRutaEnvioComponent.prototype.obtenerRestante = function (pzasTotales) {
        var restante = 100 - this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas);
        return restante;
    };
    // obtenerDatosInspector(){
    //     this.inspector=SessionUser.getInstance().getUser().getUsuario();
    //     // console.log(this.inspector);
    // }
    /*******************************************************************************************************/
    // Método para obtener el promedio por pieza de cada packing list.
    BarraProgresoTrabajarRutaEnvioComponent.prototype.obtenerTiempoTrabajoEnvio = function () {
        var _this = this;
        this._datosPrio.obtenerTiempoTrabajoEnvio().subscribe(function (data) {
            /*Calcular tiempo POR pieza*/
            var tiempoT;
            tiempoT = data.current.Tiempo[0].tiempo;
            /****************************/
            _this.PackingList = data.current.Piezas;
            _this.PackingList.forEach(function (element) {
                if (element.prioridad === 'P1') {
                    _this.pzasP1 = element.totalPiezas;
                }
                else if (element.prioridad === 'P2') {
                    _this.pzasP2 = element.totalPiezas;
                }
                else if (element.prioridad === 'P3') {
                    _this.pzasP3 = element.totalPiezas;
                }
            });
            _this.tiempo = tiempoT;
            _this.TEIPrioridad1 = _this.obtenerTiempoEstimado(_this.pzasP1, _this.tiempo);
            _this.TEIPrioridad2 = _this.obtenerTiempoEstimado(_this.pzasP2, _this.tiempo);
            _this.TEIPrioridad3 = _this.obtenerTiempoEstimado(_this.pzasP3, _this.tiempo);
            _this.obtenerTotalTiemporEstimado(_this.TEIPrioridad1, _this.TEIPrioridad2, _this.TEIPrioridad3);
        });
    };
    /////////////////////////////////////  METODO PARA OBTENER EL TIEMPO TOTAL ESTIMADO DE LAS TRES PRIORIDADES ///////////////
    BarraProgresoTrabajarRutaEnvioComponent.prototype.obtenerTotalTiemporEstimado = function (tiempoP1, tiempoP2, tiempoP3) {
        var tiempoEstimadoP1 = tiempoP1;
        var tiempoEstimadoP2 = tiempoP2;
        var tiempoEstimadoP3 = tiempoP3;
        var tiempoTot = [];
        var hrP1 = 0;
        var hrP2 = 0;
        var hrP3 = 0;
        var minP1 = 0;
        var minP2 = 0;
        var minP3 = 0;
        // console.log('p1::', tiempoEstimadoP1);
        // console.log('p2::', tiempoEstimadoP2);
        // console.log('p3::', tiempoEstimadoP3);
        ////// calcular prioridad uno
        if (this.pzasP1 > 0) {
            var arrayTE1 = tiempoEstimadoP1.split(' ');
            if (arrayTE1.length > 3) {
                hrP1 = Number(arrayTE1[0]); // 1
                minP1 = Number(arrayTE1[2]); // 15
            }
            else if (arrayTE1.length === 2) {
                hrP1 = 0; // 1
                var minP1_1 = Number(arrayTE1[0]); //
            }
            else {
                hrP1 = 0; // 1
                minP1 = 0; //
            }
        }
        else {
            hrP1 = 0; // 1
            minP1 = 0; //
        }
        /////// calcular la prioridad 2
        if (this.pzasP2 > 0) {
            var arrayTE2 = tiempoEstimadoP2.split(' ');
            if (arrayTE2.length > 3) {
                hrP2 = Number(arrayTE2[0]); // 1
                minP2 = Number(arrayTE2[2]); // 15
            }
            else if (arrayTE2.length === 2) {
                hrP2 = 0; // 0
                var minP2_1 = Number(arrayTE2[0]); //
            }
            else {
                hrP2 = 0; // 0
                minP2 = 0;
            }
        }
        else {
            hrP2 = 0; // 0
            minP2 = 0;
        }
        if (this.pzasP3 > 0) {
            /////// calcular la prioridad 3
            var arrayTE3 = tiempoEstimadoP3.split(' ');
            if (arrayTE3.length > 3) {
                hrP3 = Number(arrayTE3[0]); //
                minP3 = Number(arrayTE3[2]); //
            }
            else if (arrayTE3.length === 2) {
                hrP3 = 0; // 1
                minP3 = Number(arrayTE3[0]); //
            }
            else {
                hrP3 = 0; // 1
                minP3 = 0; //
            }
        }
        else {
            hrP3 = 0; // 1
            minP3 = 0; //
        }
        var sumHrs = hrP1 + hrP2 + hrP3;
        var sumMin = minP1 + minP2 + minP3;
        if (sumMin >= 60) {
            var hrAux = (Math.floor((sumMin * 60) / 3600)) + sumHrs;
            var minAux = Math.floor(((sumMin * 60) % 3600) / 60);
            tiempoTot.push(hrAux);
            tiempoTot.push(minAux);
        }
        else {
            tiempoTot.push(sumHrs);
            tiempoTot.push(sumMin);
        }
        console.log(' Total tiempo::', tiempoTot);
        // return tiempoTot;
        var horaActural = this.obtenerHoraActual();
        this.cambiarColorBarra(tiempoTot, horaActural);
    };
    ///////////////////// METODO PARA COLOCAR EL MENSAJE DE L BARRA DE PROGRESO SEGUN EL TIEMPO ESTIMADO Y LA HORA DE SALIDA////
    BarraProgresoTrabajarRutaEnvioComponent.prototype.cambiarColorBarra = function (tiempoE, horaActual) {
        console.log('Entre a cambiar color');
        console.log('Soy tiempo estimado', tiempoE);
        console.log('Soy tiempo eactual', horaActual);
        var hr = tiempoE[0];
        var min = tiempoE[1];
        //let tiempoEstimado:any = tiempoE;
        var tiempoRestante;
        // let hrSalida = '18:00 Hrs.'
        var hrSalida = '18:00 Hrs.';
        var hrRango = '17:00 Hrs.';
        ////////////////// SE CONVIERTE LA HORA DE SALIDA A NUMERICO //////////////////////////////////
        var partsSalida = hrSalida.split(':');
        var hrActualSalida = Number(partsSalida[0]);
        var auxSalida = partsSalida[1];
        var minSalida = auxSalida.split(' ');
        var minActualSalida = Number(minSalida[0]);
        var horaSalidaAComparar = Number(hrActualSalida + '.' + minActualSalida);
        var partsSalidaR = hrRango.split(':');
        var hrActualSalidaR = Number(partsSalidaR[0]);
        var auxSalidaR = partsSalidaR[1];
        var minSalidaR = auxSalidaR.split(' ');
        var minActualSalidaR = Number(minSalidaR[0]);
        var horaSalidaACompararR = Number(hrActualSalidaR + '.' + minActualSalidaR);
        /////////////// SE CONVIERTE LA HORA ACTUAL A NUMERICO ////////////////////////////////////
        var parts = horaActual.split(':');
        var hrActual = Number(parts[0]);
        var aux = parts[1];
        var partsmin = aux.split(' ');
        var minActual = Number(partsmin[0]);
        var sumaHoras = hrActual + hr;
        var sumaMin = minActual + min;
        // console.log('sum de hora + lo que fal-->', sumaHoras, ':', sumaMin);
        if (sumaMin >= 60) {
            var hrAux = (Math.floor((sumaMin * 60) / 3600)) + sumaHoras;
            var minAux = Math.floor(((sumaMin * 60) % 3600) / 60);
            tiempoRestante = Number(hrAux + '.' + minAux);
        }
        else {
            tiempoRestante = Number(sumaHoras + '.' + sumaMin); // 18:30 Hrs
        }
        if ((tiempoRestante > horaSalidaACompararR) && (tiempoRestante < horaSalidaAComparar)) {
            this.mensaje = this.mensajeAzul;
            this.colorBarra = this.azul;
        }
        else if (tiempoRestante > horaSalidaAComparar) {
            this.mensaje = this.mensajeNaranja;
            this.colorBarra = this.naranja;
        }
        else if (tiempoRestante < horaSalidaAComparar) {
            this.mensaje = this.mensajeVerde;
            this.colorBarra = this.verde;
        }
    };
    /*CALCULAR TIEMPO ESTIMADO*/
    BarraProgresoTrabajarRutaEnvioComponent.prototype.obtenerTiempoEstimado = function (piezas, tPromedio) {
        var tiempo = piezas * tPromedio;
        var hours;
        var minutes;
        var seconds;
        hours = Math.floor(tiempo / 3600);
        minutes = Math.floor((tiempo % 3600) / 60);
        seconds = tiempo % 60;
        //Anteponiendo un 0 a los minutos si son menos de 10
        minutes = minutes < 10 ? '0' + minutes : minutes;
        //Validacion de pruebas para cuando el tiempo es menor o igual a 1 min.
        if ((hours == 0 || hours == NaN) && minutes == 0) {
            var result = "1 min";
            return result;
            // console.log("1 minuto restante o menos  ");
        }
        else if (hours <= 0) {
            var result = minutes + " min";
            return result;
        }
        else {
            var result = hours + " hr " + minutes + " min";
            return result;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BarraProgresoTrabajarRutaEnvioComponent.prototype, "totPiezas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BarraProgresoTrabajarRutaEnvioComponent.prototype, "packingTotales", void 0);
    BarraProgresoTrabajarRutaEnvioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-barra-progreso-trabajar-ruta-envio',
            template: __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-progreso-trabajar-ruta-envio/barra-progreso-trabajar-ruta-envio.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-progreso-trabajar-ruta-envio/barra-progreso-trabajar-ruta-envio.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_inspeccion_inspeccion_service__["a" /* InspeccionService */], __WEBPACK_IMPORTED_MODULE_3__trabajar_rutas_envio_trabajar_rutas_envio_informacion_trabajar_rutas_envio_services__["a" /* TrabajarRutasEnvioService */]])
    ], BarraProgresoTrabajarRutaEnvioComponent);
    return BarraProgresoTrabajarRutaEnvioComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio-informacion.component.html":
/***/ (function(module, exports) {

module.exports = "<script src='http://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular-resource.js'></script>\n<script src='../../../../../../app/services/session/consume-rest.js'></script>\n<div class=\"content-area \">\n  <div id=\"principal\">\n    <div style=\" width: 100%; height: 100%; justify-content: space-between; display: flex;\">\n      <div id=\"encabezados\" style=\" height: 100%;\">\n        <div class=\"infoPL\" *ngIf=\"colectarElemtosAux.length > 0\">\n          <label class=\"label_estilo_encabezado \">INFORMACIÓN PACKING LIST</label>\n          <label class=\"label_nombre_lugar \">{{colectarElemtosAux[0].cliente}}</label>\n          <label class=\"label_cliente \"> {{contactoInfo}} </label>\n          <div style=\"\" class=\"ubicacion\">\n            <img id=\"ubicacion\" src=\"./assets/Images/Configuracion/Rutas/ubicacion.svg\"\n                 style=\"width: 14px\"/>\n            <span class=\"label_ubicacion\" style=\"padding-left: 10px;\"> {{colectarElemtosAux[0].ruta}} · {{colectarElemtosAux[0].mensajeria}}</span>\n          </div>\n        </div>\n        <div class=\"progresoTrabajo\">\n          <pn-barra-progreso-trabajar-ruta-envio *ngIf=\"activarBarraProgreso\" [totPiezas]=\"recibePiezasTot\"\n                                                 [packingTotales]=\"totalesPacking\"></pn-barra-progreso-trabajar-ruta-envio>\n        </div>\n        <div class=\"prioridadEmbalaje\">\n          <pn-barra-prioridades-trabajar-ruta-envio\n            *ngIf=\"activarBarraPrioridades\"></pn-barra-prioridades-trabajar-ruta-envio>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"contenedorFormulario\">\n    <div class=\"infoEnvio\">\n      <div style=\"display: flex; flex-direction: column; width: 50%;box-sizing: border-box;padding-right: 10px\">\n       <div>\n         <div class=\" subtituloPeque \"\n              style=\" padding-top: 10px; display: flex;\">Destino\n         </div>\n         <div class=\"rowFormulario\">\n           <div class=\"datosForm\">\n             <div class=\"estiloLabelData\">País:</div>\n             <div class=\"estiloLabelsContacto\">{{colectarElemtosAux[0].pais}}</div>\n           </div>\n           <div class=\"datosForm\">\n             <div class=\"estiloLabelData\">Estado:</div>\n             <div class=\"estiloLabelsContacto\">{{colectarElemtosAux[0].estado}}</div>\n           </div>\n           <div class=\"datosForm\">\n             <div class=\"estiloLabelData\">Calle / Nº / Colonia:</div>\n             <div class=\"estiloLabelsContacto\">{{colectarElemtosAux[0].calle}}</div>\n           </div>\n         </div>\n         <div class=\"rowFormulario\">\n           <div class=\"datosForm\">\n             <div class=\"estiloLabelData\">Delegación / Municipio:</div>\n             <div class=\"estiloLabelsContacto\">{{colectarElemtosAux[0].delegacion}}</div>\n           </div>\n           <div class=\"datosForm\">\n             <div class=\"estiloLabelData\">C.P:</div>\n             <div class=\"estiloLabelsContacto\">{{colectarElemtosAux[0].cp}}</div>\n           </div>\n           <div class=\"datosForm\">\n             <div class=\"estiloLabelData\">Ruta:</div>\n             <div class=\"estiloLabelsContacto\">{{colectarElemtosAux[0].ruta}}</div>\n           </div>\n           <div class=\"datosForm\" style=\"z-index: 3;\">\n             <div class=\"estiloLabelData\">Mensajeria:</div>\n             <div class=\"estiloLabelsContacto\" style=\"min-width: 136px\" *ngIf=\"!activarInputs\"><!--{{colectarElemtosAux[0].mensajeria}}-->\n               <pn-combo-flecha-verde [title]=\"'Seleccionar'\"  [itemSelect]=\"selectedEnvio\" id=\"cmbEnvio\"  (valueDropList)=\"recibeValosCombo($event,'envio')\" [items]=\"tiposEnvios\" [heightLi]=\"'35px'\"></pn-combo-flecha-verde>\n             </div>\n             <div class=\"estiloLabelsContacto\" *ngIf=\"activarInputs\">\n               {{this.mensajeria}}\n             </div>\n           </div>\n         </div>\n       </div>\n        <div class=\"comentarioEnvio\">\n          <div>\n            <label class=\"subtituloPeque\" style=\" padding-bottom: 10px; display: flex;\">Comentario\n              de envío</label>\n            <div>\n              <div class=\"estiloLabelData\" *ngIf=\"comentarios !== null\">\n                <textarea class=\"comentariosText\" readonly>{{comentarios}}</textarea>\n              </div>\n            </div>\n            <div>\n              <div *ngIf=\"comentarios == null\">\n                <div class=\"contenedorComentario\" *ngIf=\"comentarios == null\">\n                  <label>SIN COMENTARIOS</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div>\n            <label class=\" subtituloPeque \" style=\"display: flex;\">Datos del paquete</label>\n            <div class=\"datosPaq\">\n              <div style=\"padding-bottom: 5px;\">\n                <label class=\"estiloLabelData\">Peso:</label>\n                <input class=\"inputPaquete\" name=\"peso\" id=\"peso\"\n                       (input)=\"recibeContacto($event.target.value,'peso')\" [value]=\"valorInicial\"\n                       [disabled]=\"activarInputs\" style=\"z-index: 3\" [(ngModel)]=\"peso\">\n                <label class=\"estiloLabelData\">kg</label>\n              </div>\n              <div style=\"padding-bottom: 5px;\">\n                <label class=\"estiloLabelData\">Longitud:</label>\n                <input class=\"inputPaquete\" name=\"longitud\" id=\"longitud\"\n                       (input)=\"recibeContacto($event.target.value,'longitud')\" value=\" \" [disabled]=\"activarInputs\"\n                       style=\"z-index: 3\" [(ngModel)]=\"longitud\">\n                <label class=\"estiloLabelData\">cm</label>\n              </div>\n\n              <div style=\"padding-bottom: 5px;\">\n                <label class=\"estiloLabelData\">Altura:</label>\n                <input class=\"inputPaquete\" name=\"altura\" id=\"altura\"\n                       (input)=\"recibeContacto($event.target.value,'altura')\" value=\" \" [disabled]=\"activarInputs\"\n                       style=\"z-index: 3\" [(ngModel)]=\"altura\">\n                <label class=\"estiloLabelData\">cm</label>\n              </div>\n\n              <div style=\"padding-bottom: 5px;position: relative;z-index: 1;\">\n                <label class=\"estiloLabelData\">Ancho:</label>\n                <input class=\"inputPaquete\" name=\"ancho\" id=\"ancho\"\n                       (input)=\"recibeContacto($event.target.value, 'ancho')\" value=\" \" [readonly]=\"activarInputs\"\n                       style=\"z-index: 3\" [(ngModel)]=\"ancho\">\n                <label class=\"estiloLabelData\">cm</label>\n              </div>\n              <!-- <input class=\"inputPaquete\" name=\"ancho\" type=\"number\" (input)=\"recibeContacto($event.target.value,'ancho')\" value=\" \"> -->\n            </div>\n          </div>\n        </div>\n      </div>\n      <div style=\"width: 50%;box-sizing: border-box;padding-left: 10px;display: flex\">\n        <div class=\"contacto\">\n          <div>\n            <label class=\" subtituloPeque \" style=\" padding-top: 10px; display: flex;\"> Contacto</label>\n            <div class=\"rowFormulario\">\n              <div class=\"datosForm\">\n                <div class=\"estiloLabelData\">Nombre:</div>\n                <div class=\"estiloLabelsContacto\">{{colectarElemtosAux[0].contacto}}</div>\n              </div>\n              <div class=\"datosForm\">\n                <div class=\"estiloLabelData\">Puesto:</div>\n                <div class=\"estiloLabelsContacto\">{{colectarElemtosAux[0].puesto}}</div>\n              </div>\n            </div>\n            <div class=\"rowFormulario\">\n              <div class=\"datosForm\" style=\"position: relative;z-index: 1;\">\n                <div class=\"estiloLabelData\">Departamento:</div>\n                <div class=\"estiloLabelsContacto\">{{colectarElemtosAux[0].departamento}}</div>\n              </div>\n              <div class=\"datosForm\">\n                <label class=\"estiloLabelData\">Tel:</label>\n                <div class=\"estiloLabelsContacto\">{{colectarElemtosAux[0].tel}}</div>\n              </div>\n              <div class=\"datosForm\" style=\"position: relative;z-index: 1;\">\n                <label class=\"estiloLabelData\">Email:</label>\n                <div class=\"estiloLabelsContacto\">{{colectarElemtosAux[0].mail}}</div>\n              </div>\n            </div>\n          </div>\n          <div style=\"padding-top: 15px;\">\n            <label class=\"subtituloPeque\">Registro de envío</label>\n            <div id=\"archivo\" class=\"archivo\">\n              <div class=\"datosForm\" style=\"align-items: center;\">\n                <label class=\"estiloLabelData\" style=\"min-width: 140px;\"> Guía de envío:</label>\n                <div *ngIf=validarPaquteria>\n                  <input id=\"ingresoNumTracking\" class=\"estiloInputMensajero\" name=\"mensajero \" value=\" \" type=\"text \"\n                         maxlength=\"13\" [ngModel]=\"ingresoTracking\" (ngModelChange)=\"incluirTrackingArreglo($event)\"\n                         style=\"z-index: 3; position: relative\">\n                </div>\n                <div *ngIf=!validarPaquteria>\n                  <label class=\"estiloLabelData\" style=\"border-bottom: red;\">{{numeroTracking}}</label>\n                </div>\n                <label id=\"localizacion\"></label>\n                <div *ngIf=\"!validarPaquteria\">\n                  <!--GRIS-->\n                  <div *ngIf=\"activarBotonEnvio\">\n                    <img style=\"width: 40px; height: 40px;z-index: 4;position: relative\"\n                         src='./assets/Images/Images/Recurso 265100.svg' #dato\n                         (click)=\"realizarEnvioTipoMensajero(mensajeria, estado)\" *ngIf=\"activarBotonEnvio\"/>\n                  </div>\n                  <div *ngIf=\"popUpLocalizar\">\n                    <pn-pop-up-localizar-numero-rastreo></pn-pop-up-localizar-numero-rastreo>\n                  </div>\n                  <!--VERDE-->\n                  <div *ngIf=\"!activarBotonEnvio\">\n                    <img style=\"width: 40px; height: 40px;;z-index: 3\" src='./assets/Images/Images/Recurso 266100.svg'\n                         *ngIf=\"!activarBotonEnvio\"/>\n                  </div>\n                  <!--   <img style=\"width: 40px; height: 40px;\" src='./assets/Images/Images/Recurso 265100.svg' *ngIf=\"mostarPopUp\" /> -->\n                </div>\n              </div>\n              <div class=\"datosForm\" style=\"align-items: center;\">\n                <label class=\"estiloLabelData\"> Guía de envío escaneada:</label>\n                <div id=\"EstiloCargarArchivo\">\n\n                  <div *ngIf=\"activar\">\n                    <!--<pn-file-upload-envio [nombreArchivo]=valor_tracking [fileName]=cargarGuia\n                                          [mensajeria]=validarPaquteria (enviarDocumento)=\"recibeDocumentacion($event)\"\n                                          style=\"min-width: 260px;\" [paqDistinta]=paqDistinta\n                                          [ruta]=cargarGuia></pn-file-upload-envio>-->\n\n                    <pq-file-upload [disabled]=\"true\" [docR]=\"cargarGuia\" style=\"min-width: 260px;\"\n                                    (enviarDocumento)=\"recibeDocumentacion($event)\"\n                                    [activarOjito]=\"tipoEnvio\"></pq-file-upload>\n\n                  </div>\n                  <!--<div *ngIf=\"!activar\">\n                    <pn-file-upload-envio [nombreArchivo]=valor_tracking [fileName]=cargarGuia\n                                          [mensajeria]=validarPaquteria (enviarDocumento)=\"recibeDocumentacion($event)\"\n                                          style=\"min-width: 260px;\" [paqDistinta]=paqDistinta\n                                          [ruta]=cargarGuia></pn-file-upload-envio>\n                  </div>-->\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div style=\"height: 70%; width: 100%;display: flex;flex-direction: row\">\n      <div class=\"listaNueva\">\n        <label class=\"encabezadoLista\">PACKING LIST</label>\n        <div id=\"estilo_borde_verde_lista\" class=\"lista\">\n          <div [ngClass]=\"lstResultadoCotizaciones[i]\" *ngFor=\"let packing_list of encabezadosPasckinList; let i = index\" class=\"listaItem\" (click)=\"itemSelect(i)\">\n            <div class=\"ltSelect\"></div>\n            <div id=\"listaContent\" style=\"display: flex; flex-direction: column; justify-content: space-between; \">\n              <label class=\"numPacking_list \"> #{{i+1}}· <span\n                style=\" padding-bottom: 15px;\"\n                class=\"nombrePacking_list \"> {{packing_list.folio}}  </span></label>\n              <label class=\"piezasPacking_llist \"> {{packing_list.piezas}}&nbsp;{{'Piezas'}}</label>\n              <div style=\"display: flex; flex-direction: row \">\n                <label class=\"p1\"> P1 · {{packing_list.p1}} </label>\n                <label class=\"p2\"> P2 · {{packing_list.p2}} </label>\n                <label class=\"p3\"> P3 · {{packing_list.p3}} </label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div style=\"overflow-y: scroll\" class=\"segundaSeccion\">\n        <div class=\"escanearCodigos\">\n          <div class=\"tituloColectar\">\n          <span class=\"tituloColectarElem\">\n          COLECTAR ELEMENTO </span>\n            <span class=\"estiloNombreSeleccioncliente\"> {{datoPL}}</span>\n          </div>\n          <!-- div de tipos de elementos -->\n          <div class=\"elementosItems\">\n          <textarea type=\"text\" name=\"firstname\" autofocus=\"focus\" (keydown.enter)=\"enterAux()\" #textarea\n                    [(ngModel)]=\"codigosBarraElemento\" class=\"textArea\"\n                    style=\"width: 95%; position: absolute\"></textarea>\n            <div class=\"seccionUno\" [attr.id]=\"'div0'\" *ngIf=\"colectarElemtosAux.length>0\">\n              <div class=\"contenedorTarjeta\">\n                <div class=\"imagenTarjeta\">\n                  <label class=\"estiloTipoElemento\">DOCUMENTACIÓN</label>\n                  <img class=\"img\" src=\"./assets/Images/bolsa_doc.svg\" style=\" width: 68px; height: 74px;\"/>\n                  <div class=\"divColectarElementos\"\n                       style=\"border:1px solid #D8D8D8; display: flex; flex-direction: column; \">\n                    <label class=\"labelcolectarElementos\">{{datoPL}}</label>\n                    <label class=\"labelcolectarElementos\">Sobre</label>\n                    <label class=\"labelcolectarElementos\"></label>\n                  </div>\n                </div>\n                <div class=\"escanear\" style=\"flex-direction: row; display: flex; position: relative; \">\n                  <div class=\"imgEscanear\">\n                    <img src='./assets/Images/Images/codigo_gris.svg' *ngIf=\"!codigosValidos[indexPacking][0]\"/>\n                    <img src='./assets/Images/Images/codigobarras_verde.svg' *ngIf=\"codigosValidos[indexPacking][0]\"/>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"seccionUno\" class=\"seccionUno\" *ngFor=\"let elemento of colectarElemtosAux; let i = index \"\n                 [attr.id]=\"'div'+i\">\n              <div class=\"contenedorTarjeta\">\n                <div class=\"imagenTarjeta\">\n                  <label class=\"estiloTipoElemento\"> {{elemento.tipo}} </label>\n                  <img class=\"img\" [src]=\"imgTipoValidacionArr[i]\" style=\" width: 68px; height: 74px;\"/>\n                  <div class=\"divColectarElementos\"\n                       style=\"border:1px solid #D8D8D8; display: flex; flex-direction: column; \">\n                    <label class=\"labelcolectarElementos\">{{elemento.folio}}</label>\n                    <label class=\"labelcolectarElementos\">{{tipoDeProducto[i]}}</label>\n                    <label class=\"labelcolectarElementos\">{{elemento.cant}}&nbsp;{{'Piezas'}}</label>\n                  </div>\n                </div>\n                <div class=\"escanear\" style=\"flex-direction: row; display: flex; position: relative; \">\n                  <div class=\"imgEscanear\">\n                    <img src='./assets/Images/Images/codigo_gris.svg' *ngIf=\"!codigosValidos[indexPacking][i+1]\"/>\n                    <img src='./assets/Images/Images/codigobarras_verde.svg' *ngIf=\"codigosValidos[indexPacking][i+1]\"/>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- prueba-->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"totalFinalizar\">\n  <!--<label class=\"totalPacking_llist \" style=\"align-content: center ; padding-left: 70px; margin-top: 20px;\">{{'Total :'}}\n    {{packing_list.length}} {{'Packing list'}}</label>-->\n  <label class=\"totalPacking_llist \" style=\"align-content: center ; padding-left: 70px; margin-top: 20px;\">{{'Total :'}}\n    {{totalPacking}} {{'Packing list'}}</label>\n  <br>\n  <div class=\"botonFinalizar\" (click)=\"finalizar()\" [style.pointerEvents]=\"btnAceptar ? 'auto':'none'\"\n       [style.background]=\"btnAceptar ? '#008895':'#C2C3C9'\"> FINALIZAR\n  </div>\n</div>\n<footer class=\"footer \" style=\" border: none; border-top: solid;\">\n  <div class=\"datosFooter \" style=\"width: 100%;height: 100%;\">\n    <div class=\"Prioridad1 \">\n      <label class=\"p1 \">P1</label> Prioridad 1\n    </div>\n    <div class=\"Prioridad2 \">\n      <label class=\"p2 \">P2</label> Prioridad 2\n    </div>\n    <div class=\"Prioridad3 \">\n      <label class=\"p3 \">P3</label> Prioridad 3\n    </div>\n    <div class=\"Ambiente \">\n      <img class=\"img \" src='./assets/Images/ambiente.svg'/> Ambiente\n    </div>\n    <div class=\"Congelación \">\n      <img class=\"img \" src='./assets/Images/congelacion.svg'/> Congelación\n    </div>\n    <div class=\"Refrigeración \">\n      <img class=\"img \" src='./assets/Images/refrigeracion.svg'/> Refrigeración\n    </div>\n  </div>\n</footer>\n<div *ngIf=\"activarAlerta\">\n  <pq-alerta [alertaTxt]=\"mensaje\" (confirmacion)=\"cerrarAlert($event)\"></pq-alerta>\n</div>\n<div *ngIf=\"activarAlertExit\">\n  <pn-operacion-exitosa (desactivarPop)=\"cerrarPop($event)\" [label]=\"'Operación exitosa'\"\n                        [imagen]=\"true\"></pn-operacion-exitosa>\n</div>\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio-informacion.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.encabezadoCliente {\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 28px;\n  color: #424242;\n  text-align: left;\n  padding-left: 30px;\n  size: 150px;\n  height: 50px;\n  padding-top: 20px; }\n.area {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid #D8D8D8;\n  width: 100%;\n  min-width: 220px;\n  border-top: 1px solid #D8D8D8; }\n.bordeDatosC {\n  width: 100%; }\n.contenedor {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-right: 20px; }\n.label_estilo_encabezado {\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 22px;\n  color: #008895;\n  height: 28px;\n  padding-bottom: 5px; }\n.label_nombre_lugar {\n  font-family: 'Roboto';\n  font-weight: medium;\n  font-size: 18px;\n  color: #424242;\n  width: 369px;\n  height: 52px; }\n.label_cliente {\n  font-family: 'Roboto';\n  font-weight: 'Regular';\n  font-size: 16px;\n  color: #424242;\n  width: 369px;\n  height: 22px; }\n.label_ubicacion {\n  font-family: 'Roboto';\n  font-size: 16px;\n  color: #424242;\n  width: 369px; }\n.encabezadoLista {\n  font-family: Helvetica;\n  font-size: 25px;\n  color: #008895;\n  line-height: 22px;\n  font-weight: bold;\n  padding-bottom: 20px;\n  height: 42px; }\n.numPacking_list {\n  font-family: Helvetica;\n  font-size: 20px;\n  color: black;\n  line-height: 22px;\n  font-weight: bold;\n  padding-bottom: 12px; }\n.totalPacking_llist {\n  font-size: 12px;\n  color: #404040;\n  text-align: center;\n  font-family: 'Roboto';\n  width: 167px;\n  height: 16px; }\n.datosFooter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  min-width: 759px;\n  min-height: 56px;\n  max-height: 56px; }\n.comentariosText {\n  outline: none;\n  border: 1px solid #ECEEF0;\n  width: 220px;\n  height: 54px;\n  resize: none; }\n.Ambiente,\n.Congelación,\n.Prioridad1,\n.Prioridad2,\n.Prioridad3,\n.Refrigeración {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%; }\n.p1,\n.p2,\n.p3 {\n  margin-right: 10px; }\n.p1 {\n  color: #AF3634;\n  font-weight: bold; }\n.p2 {\n  color: #EEB253;\n  font-weight: bold; }\n.p3 {\n  color: #63B236;\n  font-weight: bold; }\n.img {\n  cursor: pointer; }\n.nombrePacking_list {\n  font-family: Helvetica-Bold;\n  font-size: 20px;\n  color: #008895;\n  line-height: 22px; }\n.seleccionLista {\n  font-family: Helvetica;\n  font-weight: bold;\n  font-size: 25px;\n  color: #008895;\n  width: 100%; }\n.contenedorComentario {\n  opacity: 0.18;\n  font-family: Novecento;\n  font-size: 20px;\n  color: #4A4A4A;\n  text-align: center;\n  font-weight: bold; }\n.estiloComentario {\n  font-family: Roboto;\n  color: #4A4A4A;\n  font-size: 15px; }\n.estiloNombreSeleccioncliente {\n  font-family: 'Novecento';\n  font-size: 25px;\n  color: #008895;\n  text-align: left;\n  line-height: 30px;\n  padding-left: 20px; }\n.subtitulos {\n  font-family: Roboto;\n  font-size: 18px;\n  color: #4A4A4A;\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n.subtituloPeque {\n  font-family: Roboto;\n  font-size: 18px;\n  color: #4A4A4A;\n  font-weight: bold; }\n.divColectarElemntos {\n  font-family: Roboto-Medium;\n  font-size: 14px;\n  color: #008895;\n  text-align: center;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  margin-top: 20px; }\n#encabezados {\n  width: 99%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  min-width: 800px; }\n.infoPL {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 429px;\n  max-width: 429px; }\n.progresoTrabajo {\n  min-width: 908px;\n  max-width: 908px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-left: 1px solid #D8D8D8;\n  border-right: 1px solid #D8D8D8;\n  padding-left: 25px;\n  padding-right: 25px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.prioridadEmbalaje {\n  min-width: 396px;\n  max-width: 396px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-left: 25px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n#principal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  min-height: 230px;\n  max-height: 230px !important;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-top: 1px solid #D8D8D8;\n  border-bottom: 1px solid #D8D8D8;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.mensajero {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0px 0px;\n  border: 1px solid #D8D9DD; }\n.estiloInputMensajero {\n  background-size: 30px;\n  height: 25px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  outline: none;\n  cursor: pointer;\n  width: 100%;\n  margin: -29px 0px;\n  min-width: 255px; }\n.contacto {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-right: 15px; }\n#error {\n  margin-top: 20%; }\n#error > ul > li {\n    background: grey;\n    padding: .5rem;\n    color: white;\n    font-weight: 0;\n    font-size: .8em;\n    text-align: center;\n    -webkit-animation: up 1s ease-in-out 1 backwards;\n            animation: up 1s ease-in-out 1 backwards; }\n.comentarioEnvio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 10px; }\n.lista {\n  height: 100%;\n  overflow: scroll;\n  border-bottom: solid 1px #ECEEF0; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    height: 101px;\n    background-color: #ECEEF0; }\n.lista > .divActive .ltSelect {\n      background: #008895 !important;\n      width: 10px !important; }\n.lista > .divFinalizar {\n    height: 101px;\n    background-color: #ECEEF0;\n    pointer-events: none;\n    opacity: 0.6; }\n#listaContent {\n  padding-top: 15px;\n  padding-bottom: 15.8px;\n  padding-left: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.listaItem {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 249px;\n  border-bottom: solid 1px #ECEEF0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.listaSeleccionada {\n  border-bottom: solid 1px #ECEEF0;\n  height: 100%;\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  padding: 19px 23px 18px 17px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-left: 6px solid #008895;\n  background-color: #ECEEF0; }\n.listaSeleccionada > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px;\n    color: #008895; }\n.listaSeleccionada > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    color: #008895; }\n.listaSeleccionada > .datosLst > p {\n      font-weight: normal;\n      color: #424242; }\n.content-area {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 100%; }\n.contenedorFormulario {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-top: 20px;\n  border-top: 1px solid #D8D8D8;\n  height: calc(100vh - 630px);\n  overflow-y: scroll;\n  min-height: 500px; }\n.formularioRutas {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10px 20px;\n  padding-right: 0px;\n  min-width: 450px;\n  width: calc(100% - 514px);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.tabla-clientes {\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 267px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  height: 100%;\n  min-height: 270px;\n  overflow-y: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 12px;\n  border-bottom: 1px solid #D8D8D8;\n  width: 15%; }\n.estiloTipoElemento {\n  font-family: Novecento;\n  font-size: 16px;\n  color: #008895;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 15px; }\n.textArea {\n  width: 100%;\n  z-index: 1;\n  opacity: 0;\n  bottom: 0px;\n  top: 0px; }\n.imgEscanear {\n  position: absolute; }\n.divColectarElementos {\n  opacity: 0.94;\n  background: #008895;\n  width: 181px;\n  height: 63px;\n  padding: 5px 0px;\n  border: 1px solid #D8D8D8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n.divColectarElementos .labelcolectarElementos {\n    font-family: Roboto;\n    font-size: 14px;\n    color: #FFFFFF;\n    text-align: center;\n    font-weight: medium; }\n.escanear {\n  font-family: 'Roboto';\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  height: 30px;\n  width: 100%;\n  margin-top: 22px; }\n.elementosItems {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  /*  overflow-x: hidden;\n  overflow-y: scroll;*/\n  height: calc(100vh - 581px); }\n.infoEnvio {\n  height: 30%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #D8D8D8;\n  min-height: 200px; }\n.escanearCodigos {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 20px;\n  min-width: 472px;\n  border-left: 1px solid #D8D8D8;\n  border-right: 1px solid #D8D8D8;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative; }\n.tituloColectar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 80px; }\n.seccionUno {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-bottom: 30px;\n  padding-top: 30px;\n  margin-left: 10px;\n  height: 260px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.contenedorTarjeta {\n  height: 100%; }\n.imagenTarjeta {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 1px solid #D8D8D8;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 181px;\n  max-height: 208px;\n  min-height: 208px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.datosForm {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.rowFormulario {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.estiloLabelsContacto {\n  font-family: Roboto-Light;\n  font-size: 15px;\n  color: #4A4A4A;\n  margin-right: 10px; }\n.estiloTxtAreaContacto {\n  font-family: Roboto-Light;\n  font-size: 15px;\n  color: #4A4A4A; }\n.estiloLabelData {\n  font-family: Roboto-Regular;\n  font-size: 15px;\n  color: #4A4A4A;\n  margin-right: 10px; }\n.botonFinalizar {\n  width: 170px;\n  height: 30px;\n  background: #C2C3C9;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold; }\n#EstiloCargarArchivo {\n  font-family: 'Roboto';\n  font-weight: lighter;\n  font-size: 14px;\n  color: #ABAAB0;\n  padding-left: 0px;\n  max-width: 350px; }\n.totalFinalizar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  margin: 15px 0;\n  padding-right: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.archivo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 10px;\n  padding-bottom: 20px; }\n.tituloColectarElem {\n  padding-bottom: 10px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  font-family: Helvetica-Bold;\n  font-weight: bold;\n  font-size: 25px;\n  color: #008895;\n  width: 100%;\n  padding-left: 20px; }\n.segundaSeccion {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #D8D8D8;\n  border-left: 1px solid #D8D8D8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  width: 85%;\n  height: 100%; }\n.ubicacion {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.piezasPacking_llist {\n  padding-bottom: 12px; }\n.listaNueva {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 20px;\n  min-width: 267px;\n  width: 15%; }\n.datosPaq {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 10px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  z-index: 1; }\n/deep/ .dropListSelect .container-drop .Title {\n  height: 20px !important; }\n/deep/ .dropListSelect .container-drop .Title > p {\n    font-size: 16px !important; }\n/deep/ .dropListSelect .container-drop .Title > img {\n    top: 4px !important;\n    height: 10px !important; }\n@media all and (min-height: 770px) and (max-height: 1130px) and (min-width: 1300px) and (max-width: 2572px) {\n  .label_estilo_encabezado {\n    font-size: 13px; }\n  .label_nombre_lugar, label_cliente {\n    font-size: 12px; }\n  #principal {\n    min-width: 194px;\n    min-height: 162px; }\n  .escanearCodigos, .formularioRutas {\n    height: 100%; }\n  .progresoTrabajo {\n    min-width: 480px; }\n  .infoPL {\n    min-width: 334px; }\n  /*.escanearCodigos{min-width: 0px;max-width: 0px;};\n  .formularioRutas{width: 0px;};*/\n  .encabezadoLista {\n    font-size: 13px;\n    padding-bottom: 0px; }\n  .estiloNombreSeleccioncliente {\n    font-size: 12px; }\n  .tituloColectarElem {\n    font-size: 13px; }\n  .seleccionLista {\n    font-size: 13px; }\n  .subtitulos {\n    font-size: 12px;\n    padding-bottom: 15px;\n    padding-top: 15px; }\n  .subtituloPeque {\n    font-size: 11px;\n    padding-top: 11px; }\n  .estiloLabelData {\n    font-size: 11px; }\n  .estiloLabelsContacto {\n    font-size: 11px;\n    /*min-width: 70px*/ }\n  .rowFormulario {\n    padding-top: 16px; }\n  .numPacking_list {\n    font-size: 12px;\n    padding-bottom: 6px; }\n  .nombrePacking_list {\n    font-size: 12px; }\n  .piezasPacking_llist {\n    font-size: 11px;\n    padding-bottom: 6px; }\n  .p1, .p2, .p3 {\n    font-size: 11px; }\n  .lista > .divActive {\n    height: 88px; }\n  .tabla-clientes {\n    min-width: 230px;\n    border-bottom: 1px solid #D8D8D8; }\n  .seccionUno {\n    padding-top: 0px; }\n  .estiloTipoElemento {\n    padding-bottom: 0px;\n    font-size: 11px; }\n  .imagenTarjeta {\n    max-width: 114.5px;\n    max-height: 159px; }\n  .divColectarElementos {\n    width: 116px;\n    height: 50px; }\n  .tituloColectar {\n    min-height: 60px; }\n  .divColectarElementos > .labelcolectarElementos {\n    font-size: 9px; }\n  .contenedorTarjeta {\n    max-width: 114.5px;\n    max-height: 159px; }\n  .ubicacion {\n    padding-top: 9px; }\n  .escanearCodigos {\n    min-width: 345px; }\n  .comentarioEnvio {\n    padding-top: initial; }\n  .formularioRutas {\n    width: calc(100% - 349px); } }\n.inputPaquete {\n  position: relative;\n  width: 50px; }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio-informacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasEnvioInformacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_envio_services__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TrabajarRutasEnvioInformacionComponent = /** @class */ (function () {
    function TrabajarRutasEnvioInformacionComponent(router, _trabajarRutasEnvioService, coreComponent, comunService) {
        this.router = router;
        this._trabajarRutasEnvioService = _trabajarRutasEnvioService;
        this.coreComponent = coreComponent;
        this.comunService = comunService;
        this.activar = false;
        this.pintarCodigo = false;
        this.validarPaquteria = false;
        this.regresarVistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activarBotonEnvio = false;
        this.popUp = false;
        this.numeroTracking = "";
        this.arreglo_numeros_tracking = [];
        this.arreglo_numeros_trackingCopia = [];
        this.lstResultadoCotizaciones = [];
        this.vistaInicialActiva = true;
        this.contadorM = 0;
        this.tiposEnvios = [
            /* { nombre: '--NINGUNO--', key: 0 }, */
            { nombre: 'DHL', key: 0 },
            { nombre: 'ESTAFETA', key: 1 },
            { nombre: 'FEDEX', key: 2 },
            { nombre: 'UPS', key: 3 }
        ];
        this.focus = true;
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.finalizarEnvio = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actualizarInformacion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.etiquetaComentarios = false;
        this.mostarPopUp = [];
        this.contacto = "";
        this.telefono = "";
        this.puesto = "";
        this.email = "";
        this.btnAceptar = false;
        this.contador = 0;
        this.activarInputs = false;
        this.texto = "";
        this.packing_list = [];
        this.listaAuxiliar = [];
        this.activarBtn = false;
        this.auxDataClientCurrent = [];
        this.indexPacking = 0;
        this.colectarElemtos = [];
        this.colectarElemtosAux = [];
        this.codigosValidos = [];
        this.datosFormulario = [];
        this.btnsFinalizar = [];
        this.encabezadosPasckinList = [];
        this.codigosBarra = [];
        this.imgTipoValidacionArr = [];
        this.labelComentarios = true;
        this.cantidadPL = 0;
        this.tipoDeProducto = [];
        this.valoresData = [];
        this.lstDesactivadas = [];
        this.valoresDataEnvio = [];
        this.validarnumerosEnvio = /^([0-9])*$/;
        this.popUpLocalizar = false;
        this.listaColectarElementosAuxiliar = [];
        this.dir = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        this.pahtDoc = this.dir.rutaGeneral;
        this.activarBarraProgreso = true;
        this.activarBarraPrioridades = true;
        this.val = 0;
        this.mensajeria = 'Seleccionar';
        this.lstPendientes = [];
        this.lstPacking = [];
        this.usuario = __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__["a" /* SessionUser */].getInstance().getUser();
        this.informacionCompaniaArray = [
            {
                nombre_compania: "",
                contacto_compania: "",
                cargo_compania: "",
                ubicacion: "",
                zona: ''
            }
        ];
        this.informacionEnvio = [
            {
                envio_numero_trackig: "",
                envio_archivo_generado: ""
            }
        ];
        this.contactoArray = [
            {
                pais: "",
                estado: "",
                direccion: "",
                delegacion_municipio: "",
                codigo_postal: "",
                ruta: "",
                mensajeria: "",
                formacion: ".",
                nombre: "",
                puesto: "",
                depTo: "",
                telefono: "",
                email: "",
                comentario_envio: ""
            }
        ];
    }
    TrabajarRutasEnvioInformacionComponent.prototype.ngOnInit = function () {
        this.estadoEnvio = '';
        this.obtenerPackingListClient();
        this.validarPaquteria = false;
        this.focus = true;
        this.vistaInicialActiva = true;
        console.log(this.packing_list);
        this.textArea.nativeElement.focus();
    };
    TrabajarRutasEnvioInformacionComponent.prototype.obtenerPackingListClient = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this._trabajarRutasEnvioService.obtenerPackingListClient().subscribe(function (data) {
            if (data.current && data.current !== null && data.current !== '') {
                console.log("valor de la lista :) " + data.current);
                _this.comentarios = data.current['Comentarios'];
                _this.colectarElemtosAux = [];
                _this.encabezadosPasckinList = [];
                _this.colectarElemtos = [];
                _this.codigosValidos = [];
                _this.lstPendientes = [];
                _this.lstPacking = [];
                _this.lstDesactivadas = [];
                _this.auxDataClientCurrent = data.current.PackingList;
                _this.infoCliente = data.current.Cliente;
                console.log("info 1 " + _this.auxDataClientCurrent);
                console.log("info 2" + _this.infoCliente);
                console.log("info 3" + data);
                console.log(data.current);
                console.log(_this.infoCliente);
                var array = Object.getOwnPropertyNames(_this.auxDataClientCurrent);
                _this.totalPacking = array.length;
                _this.sumaDePackingList = array.length;
                /***********************************************************/
                /*this.informacionCompaniaArray[0].nombre_compania = this.infoCliente.cliente;
                this.informacionCompaniaArray[0].contacto_compania = this.infoCliente.contacto;
                this.informacionCompaniaArray[0].cargo_compania = this.infoCliente.puesto;
                this.informacionCompaniaArray[0].zona = this.infoCliente.ruta;
                this.informacionCompaniaArray[0].ubicacion = this.infoCliente.zonaMensajeria;*/
                /***********************************************************/
                for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                    var datos = array_1[_i];
                    var objetoAux = {};
                    objetoAux["folio"] = datos;
                    objetoAux["piezas"] = 0;
                    objetoAux["p1"] = 0;
                    objetoAux["p2"] = 0;
                    objetoAux["p3"] = 0;
                    _this.colectarElemtos.push(_this.auxDataClientCurrent[datos]);
                    _this.codigosValidos.push(new Array(_this.auxDataClientCurrent[datos].length).fill(false));
                    _this.codigosValidos[_this.codigosValidos.length - 1].splice(0, 0, false);
                    console.log(_this.codigosValidos);
                    _this.codigosBarra.push(new Array(_this.auxDataClientCurrent[datos].length).fill(""));
                    _this.datosFormulario.push({ contacto: "", telefono: "", puesto: "", email: "" });
                    _this.btnsFinalizar.push(false);
                    for (var _a = 0, _b = _this.auxDataClientCurrent[datos]; _a < _b.length; _a++) {
                        var datos2 = _b[_a];
                        objetoAux["piezas"] += datos2.cant;
                        objetoAux["p1"] += datos2.p1;
                        objetoAux["p2"] += datos2.p2;
                        objetoAux["p3"] += datos2.p3;
                    }
                    _this.encabezadosPasckinList.push(objetoAux);
                }
                _this.colectarElemtos[0].forEach(function (element) {
                    if (element.tipo === "Hielera Congelacion" || element.tipo === "Hielera Congelación") {
                        element.tipo = "CONGELACIÓN";
                        _this.tipoDeProducto.push("Hielera");
                        _this.contador = element.cant;
                        _this.cantidadPL += _this.contador;
                        _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
                    }
                    else if (element.tipo === "Hielera Refrigeracion" || element.tipo === "Hielera Refrigeración") {
                        element.tipo = "CONGELACIÓN";
                        _this.tipoDeProducto.push("Hielera");
                        _this.contador = element.cant;
                        _this.cantidadPL += _this.contador;
                        _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
                    }
                    else if (element.tipo === "Bolsa de transito") {
                        element.tipo = "TRANSITO";
                        _this.tipoDeProducto.push("Bolsa");
                        _this.contador = element.cant;
                        _this.cantidadPL += _this.contador;
                        _this.imgTipoValidacionArr.push("./assets/Images/bolsa_ambiente.svg");
                    }
                    var comentario = element.comentario;
                    if (comentario.length > 0) {
                        _this.labelComentarios = false;
                    }
                    else {
                        _this.labelComentarios = true;
                    }
                });
                _this.itemSelect(0);
                _this.valoresData.forEach(function (element) {
                    _this.listaAuxiliar.push(element.folio);
                });
                _this.coreComponent.closeModal(0);
            }
            else {
                _this.coreComponent.closeModal(0);
                _this.regresarVistaP.emit(true);
            }
        }, function (error) {
            console.log(error);
            // terminar loading false
            _this.coreComponent.closeModal(0);
        });
    };
    TrabajarRutasEnvioInformacionComponent.prototype.cambiarPantalla = function () {
        this.vistaInicialActiva = false;
    };
    ////////////// Este metodo es para cambiar de packingList
    TrabajarRutasEnvioInformacionComponent.prototype.itemSelect = function (i) {
        var _this = this;
        this.indiceLts = i;
        this.indexAux = i;
        this.textArea.nativeElement.focus();
        this.mostrarListaImagenes(i); //// Se llama al metodo que muestra lo que trae la lista
        this.colectarElemtosAux = this.colectarElemtos[i];
        /// Agregar campo de inicio para la lista de mensajerias
        if (this.contadorM === 0) {
            var obj;
            obj = new Object;
            obj.nombre = this.colectarElemtosAux[0].mensajeria;
            this.selectedEnvio = obj;
            this.mensajeria = this.colectarElemtosAux[0].mensajeria;
        }
        /////
        this.idPendiente = "Guia-" + this.colectarElemtosAux[0].idPendiente;
        console.log(this.idPendiente);
        if (this.colectarElemtosAux[0].puesto === '' || this.colectarElemtosAux[0].puesto === undefined || this.colectarElemtosAux[0].puesto === null) {
            var separador = this.colectarElemtosAux[0].contacto.split('-');
            if (separador.lenght > 0) {
                this.contactoInfo = separador[2];
            }
            else {
                this.contactoInfo = separador[0];
            }
        }
        else {
            this.contactoInfo = this.colectarElemtosAux[0].contacto + '/' + this.colectarElemtosAux[0].puesto;
        }
        /****************************************************/
        this.datoPL = this.colectarElemtosAux[0].packingList;
        this.indexPacking = i;
        this.lstResultadoCotizaciones = [];
        this.listaAuxiliar = [];
        this.ingresoTracking = '';
        this.numeroTracking = '';
        this.valor_tracking = '';
        this.fileName = '';
        this.activarBtn = true;
        this.btnAceptar = false;
        this.datoRemove = 0;
        this.paqDistinta = false;
        /***************************/
        this.activar = false;
        this.peso = '';
        this.ancho = '';
        this.altura = '';
        this.longitud = '';
        this.valorInicial = '';
        /***************************/
        this.arreglo_numeros_tracking.forEach(function (element) {
            if (i === element.indexObjeto) {
                _this.pruebaIndex = i;
                _this.datoRemove = element.indexObjeto;
                _this.btnAceptar = true;
                _this.numeroTracking = element.numeroTracking;
                _this.valor_tracking = _this.numeroTracking + '.pdf';
                _this.activar = false;
                _this.activarBtn = element.valor;
                _this.pintarCodigo = true;
            }
        });
        this.recibioMensajeria = "";
        this.recibioEstadoEnvio_Abreviacion = null;
        this.folio_packing_list = this.folio_packing_list;
        this.activarBotonEnvio = false;
        this.contador = 0;
        if (this.lstResultadoCotizaciones[i] !== 'divFinalizar') {
            this.lstResultadoCotizaciones = [];
            this.lstResultadoCotizaciones = new Array(this.packing_list.length).fill("");
            for (var j = 0; j < this.lstDesactivadas.length; j++) {
                this.lstResultadoCotizaciones[this.lstDesactivadas[j]] = 'divFinalizar';
            }
            if (this.lstResultadoCotizaciones[i] !== 'divFinalizar') {
                this.lstResultadoCotizaciones[i] = 'divActive';
            }
        }
        this.listaAuxiliar = [];
        this.codigoValido = [];
        this.imgRealizaEnvio = [];
        /////Activar la funcion de envio
        if (this.contadorM === 0) {
            if (this.colectarElemtosAux[0].mensajeria == "UPS") {
                this.validarPaquteria = false;
                this.tipoEnvio = false;
            }
            else {
                if (this.colectarElemtosAux[0].mensajeria == "FEDEX") {
                    this.tipoGuardar = 'fedex';
                    this.validarPaquteria = false;
                    this.tipoEnvio = false;
                }
                else if (this.colectarElemtosAux[0].mensajeria == "DHL") {
                    this.validarPaquteria = true;
                    this.paqDistinta = true;
                    this.tipoEnvio = true;
                    this.tipoGuardar = 'paqueteria';
                }
                else {
                    this.validarPaquteria = true;
                    this.paqDistinta = true;
                    this.tipoEnvio = true;
                    this.tipoGuardar = 'paqueteria';
                }
            }
        }
        this.contadorM++;
        ///Disminuir el tamaño de la cadena
        this.numeroCaracteres = this.informacionCompaniaArray[0].nombre_compania;
        this.reducirCadena = this.numeroCaracteres.substring(0, 34);
        console.log("valor  del input" + this.ingresoTracking);
    };
    /////////// este metodo se encarga de mostrar los datos de acuerdo a la lista que se selecciona
    TrabajarRutasEnvioInformacionComponent.prototype.mostrarListaImagenes = function (index) {
        var _this = this;
        this.colectarElemtos[index].forEach(function (element) {
            if (element.tipo === "Hielera Congelacion" || element.tipo === "Hielera Congelación" || element.tipo === "CONGELACIÓN") {
                element.tipo = "CONGELACIÓN";
                _this.tipoDeProducto.push("Hielera");
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
            }
            else if (element.tipo === "Hielera Refrigeracion" || element.tipo === "Hielera Refrigeración" || element.tipo === "REFRIGERACIÓN") {
                element.tipo = "REFRIGERACIÓN";
                _this.tipoDeProducto.push("Hielera");
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
            }
            else if (element.tipo === "Bolsa de transito" || element.tipo === "TRANSITO") {
                element.tipo = "TRANSITO";
                _this.tipoDeProducto.push("Bolsa");
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push("./assets/Images/bolsa_ambiente.svg");
            }
            var comentario = element.comentario;
            if (comentario.length > 0) {
                _this.labelComentarios = false;
            }
            else {
                _this.labelComentarios = true;
            }
        });
    };
    /***********ESTE ES EL QUE TENIAN PARA FINALIZAR*********/
    TrabajarRutasEnvioInformacionComponent.prototype.onSubmitFinalizar = function (formValue) {
        if (this.numeroTracking.length > 0) {
            this.btnAceptar = true;
        }
        if (this.btnAceptar == true) {
            this.onRemove();
            //checar estoooo
            this.folio_packing_list = this.packing_list[0].folio;
            this.itemSelect(0);
            this.folio_packing_list = this.packing_list[0].folio;
            this.btnAceptar = false;
        }
        else {
        }
    };
    TrabajarRutasEnvioInformacionComponent.prototype.onRemove = function () {
        var indexRemove = this.packing_list.indexOf(this.numeroPosicion);
        console.log("Valor de indexRomove" + indexRemove);
        console.log("Se eliminara posicion " + this.datoRemove);
        alert(this.numeroPosicion); // I get correct index here
        this.packing_list.splice(this.numeroPosicion, 1);
        for (var eliminarDato = 0; eliminarDato < this.arreglo_numeros_tracking.length; eliminarDato++) {
            var element = this.arreglo_numeros_tracking[eliminarDato];
            console.log("elemet" + element.indexObjeto);
            console.log("dato1");
            console.log(eliminarDato);
            if (element.indexObjeto === this.numeroPosicion) {
                this.arreglo_numeros_tracking.splice(eliminarDato, 1);
                console.log("Eliminar DAto" + eliminarDato);
                console.log("Eliminar DAto" + element);
            }
            else {
            }
        }
        setTimeout(function () {
        }, 2000);
        this.numeroTracking = '';
        this.itemSelect(0);
        console.log("indexRemove" + this.numeroPosicion);
        this.activarBotonEnvio = false;
        for (var recorrido = 0; recorrido < this.packing_list.length; recorrido++) {
            var element = this.packing_list[recorrido];
            console.log(element.numeracion + "elemet");
        }
    };
    /****************************************************************/
    /*****************************NUEVO FINALIZAR************************/
    TrabajarRutasEnvioInformacionComponent.prototype.finalizar = function () {
        var _this = this;
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var id = parseInt(this.idUsuario);
        var obj = {
            idPendiente: this.colectarElemtosAux[0].idPendiente,
            idUsuario: id,
            numGuia: this.numGuia,
            packingList: this.colectarElemtosAux[0].packingList,
            mensajeria: this.mensajeria,
            lstPackingList: this.lstPacking,
            pendientes: this.lstPendientes
        };
        console.log('Soy lo qeu se va a enviar a finalizar-->', obj);
        this._trabajarRutasEnvioService.RegistrarTrEnvio(obj).subscribe(function (data) {
            if (_this.validarPaquteria) {
                var numGuia = _this.idPendiente;
                console.log('Soy numero de guia', numGuia);
                for (var i = 0; i < _this.lstPendientes.length; i++) {
                    numGuia = 'Guia-' + _this.lstPendientes[i];
                    _this._trabajarRutasEnvioService.uploadFile(numGuia, _this.cargarDocumento, _this.tipoGuardar).subscribe(function (dataFile) {
                    });
                }
            }
            if (data.current === true) {
                /**ACTIVAR ALERTA DE OPERACION EXITOSA**/
                _this.activarAlertExit = true;
            }
        });
    };
    /****************************************************************/
    TrabajarRutasEnvioInformacionComponent.prototype.ngAfterViewInit = function () {
        // this.elementRef.nativeElement.focus();
    };
    TrabajarRutasEnvioInformacionComponent.prototype.enterAux = function () {
        var contador = 0;
        var aux = this.codigosBarraElemento.trim();
        this.codigosBarraElemento = aux;
        console.log(this.codigosBarraElemento, this.colectarElemtosAux);
        var validarDup = this.validarCodigoDuplicado(this.codigosBarraElemento);
        if (validarDup) {
            if (this.datoPL == this.codigosBarraElemento) {
                this.codigosValidos[this.indexPacking][0] = true;
                this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento;
            }
            else {
                for (var i = 0; i < this.colectarElemtosAux.length; i++) {
                    if (this.colectarElemtosAux[i].folio === this.codigosBarraElemento) {
                        this.codigosValidos[this.indexPacking][i + 1] = true;
                        this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento; // Agregar a la lista auxiliar
                    }
                    else {
                        contador++;
                    }
                }
            }
            if (contador === this.colectarElemtosAux.length) {
                this.mensaje = 'Folio incorrecto';
                this.activarAlerta = true;
            }
        }
        else {
            // alert('Elemento duplicado');
            this.mensaje = 'Folio duplicado';
            this.activarAlerta = true;
        }
        this.codigosBarraElemento = '';
        this.validarBotonEnvio();
        this.validarEscaneo();
    };
    TrabajarRutasEnvioInformacionComponent.prototype.validarCodigoDuplicado = function (elemento) {
        var i;
        if (this.listaColectarElementosAuxiliar.length === 0) {
            return true;
        }
        else {
            for (i = 0; i < this.listaColectarElementosAuxiliar.length; i++) {
                console.log(this.listaColectarElementosAuxiliar[i], elemento);
                if (this.listaColectarElementosAuxiliar[i] === elemento) {
                    return false;
                }
            }
            return true;
        }
    };
    TrabajarRutasEnvioInformacionComponent.prototype.enter = function (i) {
        if (this.colectarElemtosAux[i].folio == this.codigosBarra[this.indexPacking][i].split("\n").join("").trim()) {
            this.codigosValidos[this.indexPacking][i] = true;
        }
        else {
            this.codigosValidos[this.indexPacking][i] = false;
            this.codigosBarra[this.indexPacking][i] = "";
        }
        this.validarFormulario();
        this.validarBotonEnvio();
    };
    TrabajarRutasEnvioInformacionComponent.prototype.validarFormulario = function () {
        this.contador = 0;
        for (var _i = 0, _a = this.codigosValidos[this.indexPacking]; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                this.contador++;
            }
        }
        if (this.contador == this.codigosValidos[this.indexPacking].length) {
            /// this.activarBotonEnvio = true; /*Se comento por que el boton se debe activar cuando ya se llenaron los input*/
        }
        else {
            this.activarBotonEnvio = false;
        }
    };
    TrabajarRutasEnvioInformacionComponent.prototype.validarBotonFinalizar = function (mensajeria, estado, indice) {
        if (this.codigosValidos[this.indexPacking].length == this.contador) {
            console.log("Puede hacer Envio....");
            this.realizarEnvioTipoMensajero(mensajeria, estado, indice);
        }
    };
    TrabajarRutasEnvioInformacionComponent.prototype.realizarEnvioTipoMensajero = function (mensajeria, estado, indice) {
        var _this = this;
        console.log("entro a realizar el envio....");
        this.activarBtn = false;
        this.btnAceptar = true;
        //this.recibioMensajeria = mensajeria;
        this.recibioMensajeria = this.colectarElemtosAux[0].packingList;
        console.log("el numero de folio pl es " + this.recibioMensajeria);
        estado = this.colectarElemtosAux[0].estado;
        console.log(this.colectarElemtosAux[0]);
        console.log("nunero  de folio " + this.colectarElemtosAux[0].folio);
        this.recibioEstadoEnvio_Abreviacion = estado;
        this.estadoEnvio = estado;
        if (estado == 'AGUASCALIENTES') {
            var infoEstado = 'AG';
            this.recibioEstadoEnvio_Abreviacion = infoEstado;
        }
        else {
            if (estado == 'BAJA CALIFORNIA NORTE') {
                var infoEstado = 'BN';
                this.recibioEstadoEnvio_Abreviacion = infoEstado;
            }
            else {
                if (estado == 'BAJA CALIFORNIA SUR') {
                    var infoEstado = 'BS';
                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                }
                else {
                    if (estado == 'COAHUILA') {
                        var infoEstado = 'CH';
                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                    }
                    else {
                        if (estado == 'CHIHUAHUA') {
                            var infoEstado = 'CI';
                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                        }
                        else {
                            if (estado == 'COLIMA') {
                                var infoEstado = 'CL';
                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                            }
                            else {
                                if (estado == 'CAMPECHE') {
                                    var infoEstado = 'CP';
                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                }
                                else {
                                    if (estado == 'CHIAPAS') {
                                        var infoEstado = 'CS';
                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                    }
                                    else {
                                        if (estado == 'DISTRITO FEDERAL') {
                                            var infoEstado = 'DF';
                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                        }
                                        else {
                                            if (estado == 'DURANGO') {
                                                var infoEstado = 'DG';
                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                            }
                                            else {
                                                if (estado == 'GUERRERO') {
                                                    var infoEstado = 'GE';
                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                }
                                                else {
                                                    if (estado == 'GUANAJUATO') {
                                                        var infoEstado = 'GJ';
                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                    }
                                                    else {
                                                        if (estado == 'HIDALGO') {
                                                            var infoEstado = 'HD';
                                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                        }
                                                        else {
                                                            if (estado == 'JALISCO') {
                                                                var infoEstado = 'JA';
                                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                            }
                                                            else {
                                                                if (estado == 'MICHOACAN') {
                                                                    var infoEstado = 'MC';
                                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                }
                                                                else {
                                                                    if (estado == 'MORELOS') {
                                                                        var infoEstado = 'MR';
                                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                    }
                                                                    else {
                                                                        if (estado == 'MEXICO') {
                                                                            var infoEstado = 'MX';
                                                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                        }
                                                                        else {
                                                                            if (estado == 'NAYARIT') {
                                                                                var infoEstado = 'NA';
                                                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                            }
                                                                            else {
                                                                                if (estado == 'NUEVO LEON') {
                                                                                    var infoEstado = 'NL';
                                                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                }
                                                                                else {
                                                                                    if (estado == 'OAXACA') {
                                                                                        var infoEstado = 'OA';
                                                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                    }
                                                                                    else {
                                                                                        if (estado == 'PUEBLA') {
                                                                                            var infoEstado = 'QE';
                                                                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                        }
                                                                                        else {
                                                                                            if (estado == 'QUERETARO') {
                                                                                                var infoEstado = 'QT';
                                                                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                            }
                                                                                            else {
                                                                                                if (estado == 'QUINTANA ROO') {
                                                                                                    var infoEstado = 'QI';
                                                                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                }
                                                                                                else {
                                                                                                    if (estado == 'SINALOA') {
                                                                                                        var infoEstado = 'SI';
                                                                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                    }
                                                                                                    else {
                                                                                                        if (estado == 'SAN LUIS POTOSI') {
                                                                                                            var infoEstado = 'SL';
                                                                                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                        }
                                                                                                        else {
                                                                                                            if (estado == 'SONORA') {
                                                                                                                var infoEstado = 'SO';
                                                                                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                            }
                                                                                                            else {
                                                                                                                if (estado == 'TAMAULIPAS') {
                                                                                                                    var infoEstado = 'TA';
                                                                                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                }
                                                                                                                else {
                                                                                                                    if (estado == 'TABASCO') {
                                                                                                                        var infoEstado = 'TB';
                                                                                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        if (estado == 'TLAXCALA') {
                                                                                                                            var infoEstado = 'TL';
                                                                                                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            if (estado == 'VERACRUZ') {
                                                                                                                                var infoEstado = 'VC';
                                                                                                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                if (estado == 'YUCATAN') {
                                                                                                                                    var infoEstado = 'YU';
                                                                                                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    if (estado == 'ZACATECAS') {
                                                                                                                                        var infoEstado = 'ZA';
                                                                                                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        var tipoM;
        if (this.mensajeria !== 'Seleccionar') {
            tipoM = this.mensajeria;
        }
        else {
            tipoM = this.colectarElemtosAux[0].mensajeria;
        }
        if (tipoM == "UPS") {
            console.log("/****** UPS *****//");
            this.getRealizarEnvioUps();
            this.index = indice;
            this.validarPaquteria = false;
            this.paqDistinta = false;
        }
        else {
            if (tipoM == "FEDEX") {
                console.log("/****** FEDEX *****//");
                this.getRealizarEnvioFedex();
                this.index = indice;
                this.validarPaquteria = false;
                this.paqDistinta = false;
            }
            else if (tipoM == "DHL") {
                this.mostarPopUp[indice] = true;
                this.validarPaquteria = false;
                this.paqDistinta = true;
            }
            else {
                this.paqDistinta = true;
                console.log("valor paqueteria" + this.paqDistinta);
                // .incluirTrackingArreglo();
                console.log(this.arreglo_numeros_tracking);
                this.validarPaquteria = true;
                this.mostarPopUp[indice] = true;
            }
            this.mostarPopUp[indice] = false;
        }
        setTimeout(function () {
            console.log("POSICIÓN", _this.numeroPosicion);
            var objeto = {
                numeroTracking: _this.numeroTracking,
                indexObjeto: _this.numeroPosicion,
                valor: false
            };
            console.log("OBJETO******");
            console.log(objeto);
            _this.arreglo_numeros_tracking.push(objeto);
            _this.arreglo_numeros_trackingCopia.push(objeto);
            // console.log(this.numeroTracking);
            console.log("ARREGLO******");
            console.log(_this.arreglo_numeros_tracking);
        }, 5000);
        this.mostarPopUp.push(false);
    };
    /******************Este metodo se ocupa para hacer la llamada a FEDEX***************/
    TrabajarRutasEnvioInformacionComponent.prototype.getRealizarEnvioFedex = function () {
        var _this = this;
        // this.activarBotonEnvio = true;
        this.mostarPopUp.push(true);
        this.popUp = true;
        var info2 = {
            contact: {
                personName: this.colectarElemtosAux[0].contacto,
                companyName: this.colectarElemtosAux[0].cliente,
                phoneNumber: this.colectarElemtosAux[0].tel == "ND" ? "" : this.colectarElemtosAux[0].tel == null ? "" : this.colectarElemtosAux[0].tel
            },
            address: {
                streetLines: [this.colectarElemtosAux[0].calle],
                city: this.colectarElemtosAux[0].delegacion,
                stateOrProvinceCode: this.estadoEnvio,
                postalCode: this.colectarElemtosAux[0].cp,
                countryCode: this.colectarElemtosAux[0].codPais
            },
            peso: this.peso,
            length: this.longitud,
            height: this.altura,
            width: this.ancho,
            customerReferenceClient: "",
            invoceNumber: "",
            poNumber: "",
            reintentos: 0,
            emisor: this.usuario["nombre"],
            idPendiente: this.idPendiente,
            pendientes: this.lstPendientes
        };
        for (var _i = 0, _a = this.colectarElemtosAux; _i < _a.length; _i++) {
            var item = _a[_i];
            if (info2.customerReferenceClient != "") {
                info2.customerReferenceClient += "," + item.factura;
            }
            else {
                info2.customerReferenceClient += item.factura;
            }
        }
        console.log(info2);
        this.coreComponent.openModal(0);
        this._trabajarRutasEnvioService.getRealizarEnvioFedex(info2).subscribe(function (data) {
            // console.log(data);
            if (data.current === false) {
                _this.coreComponent.closeModal(0);
                _this.mensaje = 'El servicio de Fedex no esta disponible en este momento, favor de hacer la carga manual';
                _this.activarAlerta = true;
                _this.validarPaquteria = true;
                _this.paqDistinta = true;
                _this.tipoEnvio = true;
            }
            else {
                console.log('Soy el numero de guia --->', _this.numGuia);
                _this.numGuia = data.current.TrackingNumber;
                // this.numeroTracking = data.current.TrackingNumber;
                _this.numeroTracking = _this.idPendiente;
                var url = _this.pahtDoc + 'DoctosCierre/RT/' + data.current.File;
                // let url = this.comunService.obtenerRuta();
                _this.cargarGuia = [{ path: url, name: data.current.File }];
                _this.activar = true;
                _this.activarBotonEnvio = false; /// Se desabilita el vboton de enviar
                _this.activarInputs = true; // Se desabilitan los inputs
                // this.getEnviarTrackingNumber();
                _this.coreComponent.closeModal(0);
            }
        }, function (error) {
            _this.coreComponent.closeModal(0);
            // console.log(error);
        });
    };
    TrabajarRutasEnvioInformacionComponent.prototype.getEnviarTrackingNumber = function () {
        // this.numeroTracking = "";
        var _this = this;
        this._trabajarRutasEnvioService.obtenerTrackingNumber().subscribe(function (data) {
            _this.numeroTracking = data.current;
            _this.numGuia = data.current;
            console.log("FEDEX********");
            console.log(data);
            _this.informacionEnvio[0].envio_numero_trackig == _this.numeroTracking;
            _this.valor_tracking = _this.numeroTracking + '.pdf';
            // console.log(this.contador + "valor de contador");
            _this.caracteres = _this.valor_tracking.length;
            // console.log("valor del tracking" + this.caracteres);
            // console.log(this.valor_tracking);
            if (_this.codigosBarra.length == _this.contador && _this.caracteres != 0) {
                // console.log("valor tracking" + this.valor_tracking);
                // console.log("Entro a la validacion (Estoy en FEDEX.....) ");
                // console.log(this.numeroTracking);
                _this.btnAceptar = true;
            }
            _this.enviarFileGuideShip();
        }, function (error) {
            // console.log(error);
        });
    };
    TrabajarRutasEnvioInformacionComponent.prototype.enviarFileGuideShip = function () {
        var _this = this;
        this._trabajarRutasEnvioService.enviarFileGuideShip().subscribe(function (data) {
            console.log(data);
            /* this.cargarGuia = [this.dataURLtoFile(data.current, 'GuiaEnvio.pdf')];
             // this.cargarGuia[0].path = "GuiaEnvio.pdf";
             console.log( this.cargarGuia);*/
            /// Se activa para mostrar la guia
            _this.activar = true;
            _this.activarBotonEnvio = false; /// Se desabilita el vboton de enviar
            _this.activarInputs = true; // Se desabilitan los inputs
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasEnvioInformacionComponent.prototype.dataURLtoFile = function (dataurl, filename) {
        var bstr = atob(dataurl);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        var file = new File([u8arr], filename, { type: "application/pdf" });
        return file;
    };
    TrabajarRutasEnvioInformacionComponent.prototype.incluirTrackingArreglo = function (tracking) {
        this.ingresoTracking = tracking;
        this.ingresoTrackingAux = this.ingresoTracking.trim();
        var guiaStrin = this.ingresoTrackingAux.toString();
        this.numGuia = guiaStrin;
        console.log("input");
        console.log("filename" + this.ingresoTracking);
        var objetoInput = {
            numeroTracking: this.ingresoTracking,
            indexObjeto: this.numeroPosicion,
            valor: false
        };
        console.log("tt" + this.ingresoTracking);
        if (this.ingresoTracking.length == 10) {
            this.fileName = this.ingresoTracking;
            console.log("formo objeto" + objetoInput);
            this.arreglo_numeros_tracking.push(objetoInput);
            console.log(this.arreglo_numeros_tracking);
        }
        console.log("valor paqueteria" + this.paqDistinta);
        this.validarBotonEnvio();
    };
    TrabajarRutasEnvioInformacionComponent.prototype.obtenerArchivoUPS = function () {
        var _this = this;
        this._trabajarRutasEnvioService.obtenerArchivoUPS().subscribe(function (data) {
            _this.guiaEnvio = data;
            _this.cargarGuia = [_this.guiaEnvio.current];
            _this.cargarGuia = [_this.dataURLtoFile(data.current, 'GuiaEnvio.pdf')];
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasEnvioInformacionComponent.prototype.getRealizarEnvioUps = function () {
        var _this = this;
        if (this.colectarElemtosAux[0].tel == null) {
            this.colectarElemtosAux[0].tel = "";
        }
        // this.activarBotonEnvio = true;
        console.log(this.usuario);
        this.nombre_envio = this.usuario["nombre"];
        this.mostarPopUp.push(true);
        this.popUp = true;
        var info_envio_ups = {
            UPSSecurity: {
                UsernameToken: {
                    Username: "ryndem.ups",
                    Password: "Mexico2018"
                },
                ServiceAccessToken: {
                    AccessLicenseNumber: "ED52772FFECE6EAC"
                }
            },
            ShipmentRequest: {
                Request: {
                    RequestOption: "validate",
                    TransactionReference: {
                        CustomerContext: "Your Customer Context"
                    }
                },
                Shipment: {
                    //La Descripción de Bienes para el envío. Se aplica a envíos internacionales y nacionales.
                    //Proporcione una descripción detallada de los artículos que se envían para documentos y no documentos.
                    //Ejemplos: "informes anuales" y "tornillos de acero de 9 mm".
                    Description: " ",
                    Shipper: {
                        Name: this.usuario["nombre"],
                        AttentionName: "PROQUIFA",
                        Phone: {
                            Number: "5513151498",
                            Extension: "111"
                        },
                        ShipperNumber: "6437V0",
                        FaxNumber: "",
                        Address: {
                            AddressLine: "Jose Maria Morelos 164, Nino Jesus",
                            City: "CDMX",
                            StateProvinceCode: "CDMX",
                            PostalCode: "14080",
                            CountryCode: "MX"
                        }
                    },
                    ShipTo: {
                        //Para envío hacia adelante se aceptan 35 caracteres
                        // pero solo se imprimirán 30 caracteres en la etiqueta.
                        // Name:this.informacionCompaniaArray[0].nombre_compania,
                        Name: this.colectarElemtosAux[0].contacto,
                        AttentionName: this.colectarElemtosAux[0].cliente,
                        Phone: {
                            Number: this.colectarElemtosAux[0].tel != "" ? this.colectarElemtosAux[0].tel.split(' ').join('+').substr(0, 15) : "N/D"
                        },
                        Address: {
                            AddressLine: this.colectarElemtosAux[0].calle.length > 35 ? this.colectarElemtosAux[0].calle.substr(0, 34) : this.colectarElemtosAux[0].calle,
                            City: this.colectarElemtosAux[0].delegacion,
                            StateProvinceCode: this.recibioEstadoEnvio_Abreviacion,
                            PostalCode: this.colectarElemtosAux[0].cp,
                            CountryCode: "MX"
                        }
                    },
                    ShipFrom: {
                        Name: this.usuario["nombre"],
                        AttentionName: "PROQUIFA",
                        Phone: {
                            Number: "5513151498"
                        },
                        FaxNumber: "",
                        Address: {
                            AddressLine: "Jose Maria Morelos 164, Nino Jesus",
                            City: "Mexico City",
                            StateProvinceCode: "DF",
                            //Length: 2...5
                            PostalCode: "42855",
                            CountryCode: "MX"
                        }
                    },
                    PaymentInformation: {
                        ShipmentCharge: {
                            Type: "01",
                            BillShipper: {
                                AccountNumber: "6437V0"
                            }
                        }
                    },
                    Service: {
                        Code: "65",
                        Description: "Express"
                    },
                    Package: {
                        Description: "Description",
                        Packaging: {
                            Code: "02",
                            Description: "Description"
                        },
                        Dimensions: {
                            UnitOfMeasurement: {
                                Code: "CM",
                                Description: "centimeters"
                            },
                            Length: "7",
                            Width: "5",
                            Height: "2"
                        },
                        PackageWeight: {
                            UnitOfMeasurement: {
                                Code: "KGS",
                                Description: "Kilograms"
                            },
                            Weight: "10"
                        }
                    }
                },
                LabelSpecification: {
                    LabelImageFormat: {
                        Code: "GIF",
                        Description: "GIF"
                    },
                    HTTPUserAgent: ""
                }
            }
        };
        console.log(info_envio_ups);
        console.log(info_envio_ups.ShipmentRequest.Shipment.ShipTo.Phone.Number);
        this._trabajarRutasEnvioService.getRealizarEnvioUps(info_envio_ups).subscribe(function (data) {
            console.log(data);
            _this.valor_tracking = data.ShipmentResponse.ShipmentResults.PackageResults.TrackingNumber;
            _this.valor_base64 = data.ShipmentResponse.ShipmentResults.PackageResults.ShippingLabel.GraphicImage;
            _this.guardarEtiquetaUPS();
            // this.obtenerArchivoUPS();
            _this.numeroTracking = _this.valor_tracking;
            _this.valor_tracking = _this.numeroTracking + '.pdf';
            console.log(_this.contador + "valor de contador");
            _this.caracteres = _this.valor_tracking.length;
            console.log("valor del tracking" + _this.caracteres);
            console.log(_this.valor_tracking);
        }, function (error) {
            console.log(error);
        });
        setTimeout(function () {
        }, 4000);
        if (this.codigosBarra.length == this.contador && this.caracteres != 0) {
            console.log("valor tracking" + this.valor_tracking);
            console.log("Entro a la validacion (Estoy en ups.....) ");
            console.log(this.numeroTracking);
            this.btnAceptar = true;
        }
    };
    TrabajarRutasEnvioInformacionComponent.prototype.recibeContacto = function (texto, tipoInput) {
        var obj;
        obj = new Object();
        obj.tipo = tipoInput;
        if (tipoInput == "peso") {
            if (this.validarnumerosEnvio.test(this.texto)) {
                this.peso = texto.trim();
                // console.log("valido");
            }
            // this.validarSiNumero(this.peso);
        }
        else if (tipoInput == "longitud") {
            if (this.validarnumerosEnvio.test(this.texto)) {
                this.longitud = texto.trim();
                // console.log("valido");
            }
        }
        else if (tipoInput == "altura") {
            if (this.validarnumerosEnvio.test(this.texto)) {
                this.altura = texto.trim();
                // console.log("valido");
            }
        }
        else if (tipoInput == "ancho") {
            if (this.validarnumerosEnvio.test(this.texto)) {
                this.ancho = texto.trim();
                /* // console.log("valido");
        
                 this.email = this.valoresDataEnvio[this.indexPacking].mail;
                 // console.log(this.email);
        
                 this.contacto = this.listaClientes[this.indexPacking].nombre;
                 // console.log(this.contacto);
                 this.nombreEnvio = this.valoresDataEnvio[this.indexPacking].contacto;
                 // console.log(this.nombreEnvio);
                 this.cityEnvio = this.listaClientes[this.indexPacking].pais;
                 // console.log(this.cityEnvio);
                 this.telefonoEnvio = this.valoresDataEnvio[this.indexPacking].tel;
                 // console.log(this.telefonoEnvio);
                 this.direccionEnvio = this.valoresDataEnvio[this.indexPacking].calle;
                 // console.log(this.direccionEnvio);
                 this.delegacionEnvio = this.valoresDataEnvio[
                   this.indexPacking
                   ].delegacion;
                 // console.log(this.delegacionEnvio);
                 this.provinciaEnvio = this.valoresDataEnvio[this.indexPacking].estado;
                 // console.log(this.provinciaEnvio);
                 this.codigoEnvio = this.valoresDataEnvio[this.indexPacking].cp;
                 // console.log(this.codigoEnvio);
                 this.codeEnvio = "MX";
                 // console.log(this.codeEnvio);*/
            }
        }
        this.validarBotonEnvio();
    };
    TrabajarRutasEnvioInformacionComponent.prototype.validarEscaneo = function () {
        var contador = 0;
        for (var _i = 0, _a = this.codigosValidos[this.indexPacking]; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                contador++;
            }
        }
        if (contador === this.codigosValidos[this.indexPacking].length) {
            if (this.lstResultadoCotizaciones[this.indiceLts] !== 'divFinalizar') {
                this.lstPendientes.push(this.colectarElemtosAux[0].idPendiente);
                this.lstDesactivadas.push(this.indiceLts);
                this.lstPacking.push(this.colectarElemtosAux[0].packingList);
            }
            this.lstResultadoCotizaciones[this.indiceLts] = 'divFinalizar';
        }
        this.validarBotonEnvio();
    };
    TrabajarRutasEnvioInformacionComponent.prototype.validarBotonEnvio = function () {
        var auxIndex = 1;
        var contador = 0;
        for (var _i = 0, _a = this.codigosValidos[this.indexPacking]; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                contador++;
            }
        }
        if (this.validarPaquteria) {
            if ((this.lstPacking.length === this.colectarElemtos.length) && (this.peso !== '') && (this.longitud !== '') && (this.altura !== '') && (this.ancho !== '') && (this.ingresoTracking !== '') && (this.peso !== undefined) && (this.longitud !== undefined) && (this.altura !== undefined) && (this.ancho !== undefined) && (this.ingresoTracking !== undefined)) {
                this.activar = true;
            }
            else {
                this.activar = false;
                this.archivo = undefined;
            }
            if (this.activar && this.archivo.length > 0) {
                this.btnAceptar = true;
            }
            else {
                this.btnAceptar = false;
            }
        }
        else {
            if ((this.lstPacking.length === this.colectarElemtos.length) && (this.peso !== '') && (this.longitud !== '') && (this.altura !== '') && (this.ancho !== '') && (this.peso !== undefined) && (this.longitud !== undefined) && (this.altura !== undefined) && (this.ancho !== undefined)) {
                this.activarBotonEnvio = true;
            }
            else {
                this.activarBotonEnvio = false;
            }
        }
    };
    TrabajarRutasEnvioInformacionComponent.prototype.recibeDocumentacion = function (archivo) {
        console.log(archivo);
        this.paqDistinta = true;
        this.cargarDocumento = archivo;
        this.archivo = archivo;
        this.validarBotonEnvio();
    };
    /******ESTE METODO VA A RECUPERAR EL NOMBRE DEL ARCHIVO A VISUALIZAR -- guardarArchivo****/
    TrabajarRutasEnvioInformacionComponent.prototype.guardarEtiquetaUPS = function () {
        var _this = this;
        var dataVal = {
            nombre: this.idPendiente,
            data1: this.valor_base64,
            pendientes: this.lstPendientes
        };
        console.log(this.idPendiente);
        var cargarAux;
        this._trabajarRutasEnvioService.guardaEtiquetaUPS(dataVal).subscribe(function (data) {
            _this.informacionEnvio[0].envio_numero_trackig === _this.numeroTracking;
            console.log("este es el numero de folio " + data.current.folio);
            //this.auxDataClientCurrent = data.current.PackingList;
            // this.infoCliente = data.current.Cliente;
            /*********SE RECUPERA EL NOMBRE DEL ARCHIVO*******/
            var url;
            _this.guiaEnvio = data.current;
            var guiaAux = _this.guiaEnvio;
            var arr = guiaAux.split('.');
            _this.numGuia = arr[0];
            console.log('Soy el numero de guia --->', _this.numGuia);
            url = _this.pahtDoc + 'DoctosCierre/RT/' + _this.guiaEnvio;
            _this.cargarGuia = [{ path: url, name: 'Guia.pdf' }];
            _this.activarBotonEnvio = false; /// Se desabilita el vboton de enviar
            _this.activarInputs = true; // Se desabilitan los inputs
            _this.activar = true;
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasEnvioInformacionComponent.prototype.cerrarAlert = function ($event) {
        this.activarAlerta = false;
        this.textArea.nativeElement.focus();
    };
    TrabajarRutasEnvioInformacionComponent.prototype.cerrarPop = function ($event) {
        var _this = this;
        this.val = 2;
        this.activarInputs = false;
        // this.limpiarVariables();
        this.finalizarEnvio.emit(true);
        setTimeout(function () {
            _this.activarBarraPrioridades = false;
            _this.activarBarraProgreso = false;
        }, 100);
        setTimeout(function () {
            _this.activarBarraPrioridades = true;
            _this.activarBarraProgreso = true;
        }, 100);
        this.obtenerPackingListClient();
        this.activarAlertExit = false;
    };
    /*Recibir tipo de envio*/
    TrabajarRutasEnvioInformacionComponent.prototype.recibeValosCombo = function (datos, tipo) {
        this.mensajeria = datos.nombre;
        ///// Activar la funcion de envio
        if (datos.nombre === 'UPS') {
            this.validarPaquteria = false;
            this.tipoEnvio = false;
        }
        else if (datos.nombre === 'FEDEX') {
            this.tipoGuardar = 'fedex';
            this.validarPaquteria = false;
            this.tipoEnvio = false;
        }
        else if (datos.nombre === 'DHL' || datos.nombre === 'ESTAFETA') {
            this.validarPaquteria = true;
            this.paqDistinta = true;
            this.tipoEnvio = true;
            this.tipoGuardar = 'paqueteria';
        }
        this.validarBotonEnvio();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TrabajarRutasEnvioInformacionComponent.prototype, "recibePiezasTot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TrabajarRutasEnvioInformacionComponent.prototype, "totalesPacking", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Boolean)
    ], TrabajarRutasEnvioInformacionComponent.prototype, "validarPaquteria", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasEnvioInformacionComponent.prototype, "regresarVistaP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Boolean)
    ], TrabajarRutasEnvioInformacionComponent.prototype, "paqDistinta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("textarea"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TrabajarRutasEnvioInformacionComponent.prototype, "textArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("dato"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TrabajarRutasEnvioInformacionComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasEnvioInformacionComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasEnvioInformacionComponent.prototype, "finalizarEnvio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasEnvioInformacionComponent.prototype, "actualizarInformacion", void 0);
    TrabajarRutasEnvioInformacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-trabajar-rutas-envio-informacion",
            template: __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio-informacion.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio-informacion.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_envio_services__["a" /* TrabajarRutasEnvioService */],
            __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__services_comun_comun_service__["a" /* ComunService */]])
    ], TrabajarRutasEnvioInformacionComponent);
    return TrabajarRutasEnvioInformacionComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animationZoom\" style=\"width: 100%; height: 100%; flex-direction: row; display: flex; min-width: 800px;\">  <!--overflow: scroll;-->\n\n <!-- <div class=\"aux\" *ngIf=\"true\" style=\"position:relative; display:flex;background: #E6E6E6;\">\n    <aside [ngClass]=\"classAsideMenuE\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcorE\">\n        <pn-menu-seccion [pendiente]=\"totalPendientes\" [items]=\"itemsMenu\" [titulo]=\"'GESTOR ENVÍO'\" [vistaInicialActiva]=\"vistaInicialActiva\" style=\"width: 100%;\"></pn-menu-seccion>\n      </div>\n    </aside>\n    <div style=\"position: absolute;  padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcorE\" (click)=\"mostarOcultarAcordeon()\" style=\"margin-right: 0px\"/>\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcorE\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>-->\n  <div style=\"position:relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcorE\">\n        <pn-menu-seccion-roles [pendiente]=\"totalPendientes\" [items]=\"itemsMenu\" [titulo]=\"'GESTOR ENVÍO'\" [vistaInicialActiva]=\"vistaInicialActiva\" style=\"width: 100%\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcorE\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcorE\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n\n  </div>\n  <!---->\n  <div id=\"divPrincipal\" >\n    <div class=\"bordeUno\"\n    [ngClass]=\"!vistaInicialActiva ? 'visitaTrabajo' : 'visitaInicial'\">\n      <div style=\"cursor: pointer; height: 35px; width: 20px; \" *ngIf=\"!vistaInicialActiva\" (click)=\"regresarVista()\">\n        <img class=\"img\" src='./assets/Images/regresar.svg' style=\"width: 100%; height: 100%;\" />\n      </div>\n      <label class=\"encabezadoCliente\" style=\"text-align: left; min-width: 800px;\"\n             class=\"etiqueta\">TRABAJAR RUTA. ENVÍO</label>\n    </div>\n\n\n    <div class=\"datosC\" style=\"display: flex; flex-direction:column; box-sizing: border-box; min-width: 950px;\" *ngIf=\"actualizarDatos\">\n      <div class=\"subPadre\">\n        <div style=\" flex-direction: row; display: flex; box-sizing: border-box; padding-top: 15px; padding-bottom: 15px; width: 100%\">\n          <div class=\"dvText\" style=\"width:165px; height:40px; display: flex; flex-direction: column; font-family: Roboto-Bold; color: #9B9B9B; position: 564px; \">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos\"> TU OBJETIVO </label>\n            <label style=\"height: 50%; width: 100% \" class=\" estiloDatos \"> DE PACKING LIST HOY </label>\n          </div>\n\n          <div class=\"dvNumber\" style=\"max-width: 85px; min-width: 30px; height:75px; font-family: Roboto; font-weight:bold; color: #39B54A; text-align: center;\">\n            <label class=\"estiloNumero\"> {{objetivoDeinspeccion}}</label>\n          </div>\n          <img class=\"img\" src='./assets/Images/objetivo.svg' style=\"width:22px; padding-bottom: 3px; padding-left: 10px;\" />\n          <div style=\"padding-left: 19px\">\n            <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\n          </div>\n          <div class=\"dvText\" style=\"width:145px; height:40px; display: flex; flex-direction:column; font-family: Roboto-Bold; color: #9B9B9B; padding-left: 17px; \">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> PACKING LIST </label>\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> TRABAJADAS HOY </label>\n          </div>\n          <div class=\"tooltip dvNumber\" style=\"max-width:85px; height:50px; font-family: Roboto; font-weight:bold; color: #008895; text-align: center;\">\n            <label class=\"estiloNumero\"> {{piezasInspeccionadas}}</label>\n          </div>\n          <div style=\"padding-left: 19px\">\n            <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\n          </div>\n\n          <div class=\"dvText\" style=\"width:120px; height:35px; display: flex; flex-direction: column; font-family: Roboto-Bold; color: #9B9B9B; padding-left: 17px;\">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> PACKING LIST</label>\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> DESEADAS </label>\n          </div>\n          <div class=\"tooltip dvNumber\" style=\"flex-direction: row; min-width: 45px; max-width: 100px; height:50px; position: relative; font-family: Roboto; font-weight:bold; color: #008895; text-align: center;\">\n            <label class=\"estiloNumero\"> {{inspeccionDeceada}}</label>\n            <label [style.color]=\"colorIndiceInspeccionDeceada\" style=\"font-size:16px; color:#D0021B; font-weight: bold; left: 57px; position: absolute; top: -7px\">\n              {{inspeccionDeceadaHastaElMomento}}</label>\n            <span class=\"tooltiptext\">{{mensajePackingDeseadas}}</span>\n          </div>\n          <div style=\"padding-left: 35px\"></div>\n          <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\n\n          <div class=\"dvText\" style=\"width:108px; height:40px; display: flex; flex-direction: column;font-family: Roboto-Bold; color: #9B9B9B; padding-left: 17px; \">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> MÍNIMO DE</label>\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> PACKING LIST </label>\n          </div>\n          <div class=\"tooltip dvNumber\" style=\"flex-direction: row; min-width: 45px; max-width: 100px; height:50px; position: relative; font-family: Roboto; font-weight:bold; color: #008895; text-align: center;\">\n            <label class=\"estiloNumero\"> {{minimoDeInspeccion}}</label>\n            <label [style.color]=\"colorMinimoInspeccion\" style=\"font-size:16px; color:#D0021B; font-weight: bold; left: 40px; position: absolute; top: -7px\">\n              {{valorSigno}}{{minimaInspeccionHastaElMomento}}</label>\n            <span class=\"tooltiptext\">{{mensajeEmbDeseado}}</span>\n          </div>\n          <div [ngStyle]=\"{'flex-direction':'column', 'display':'flex','padding-left': '2%'}\">\n            <pq-pop-up-estadisticas *ngIf=\"activarGraficasPrioEsta\" [tipo]=\"'Paking list'\" [muestraHallazgos]=\"false\" [tipoTotales]=\"'Paking list'\" [totalesPorInspector]= \"totales_estadisticas\" [donaChart] = \"dataPrioridadEstadisticas\" [tipoGrafica]=\"graficasEstadisticas\"></pq-pop-up-estadisticas>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- FIN DATOSC -->\n    <div style=\"calc(100% - 123px); width: 100%; flex-direction: column; display: flex; min-width: 950px;\" class=\"VistaInicial\" *ngIf=\"vistaInicialActiva\">\n      <div id=\"botonera\" style=\"width:100%\">\n        <pn-botonera-dias style=\"font-size: 21px; color: #4A4A4A; text-align: center; font-family: Roboto-Regular;\"\n                          [iniciarBotonera]=\"iniciarBotonera\" [tHoy]=\"valoresTabs[0]\" [tManana]=\"valoresTabs[1]\" [tPasadoM]=\"valoresTabs[2]\" [tTodo]=\"valoresTabs[4]\" [tFuturo]=\"valoresTabs[3]\" (event)=\"cambiarTab($event)\"></pn-botonera-dias>\n      </div>\n      <div  class=\"graficas\">\n        <div class=\"padreCliente_Prioridades\">\n          <div>\n            <div class=\"tituloGrafica\">\n              CLIENTES\n            </div>\n            <div id=\"donaCliente\" style=\"width: 100%; height: 100%; display: flex;\">\n              <pn-donut-chart *ngIf=\"dataCLienteReload\" [idGrafica]=\"'cliente'\" [data]=\"dataCLiente\" [tipoGrafica]=\"tiposGraficas[0]\" [height]=\"'auto'\">\n              </pn-donut-chart>\n            </div>\n          </div>\n          <div>\n            <div class=\"tituloGrafica\">\n              PRIORIDADES\n            </div>\n            <div id=\"donaPrioridades\" style=\"width: 100%; height: 100%; display: flex;\">\n              <pn-donut-chart *ngIf=\"dataPrioridadesReload\" [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridades\" [tipoGrafica]=\"tiposGraficas[1]\" [height]=\"'auto'\">\n              </pn-donut-chart>\n            </div>\n          </div>\n        </div>\n        <!-- fin grafica clientes y productos -->\n        <div class=\" padrePrioridades\">\n          <div>\n            <div class=\"tituloGPequenio\">\n              PRIORIDAD 1\n            </div>\n            <div id=\"donaPrioridadUno\" style=\"width: 100%; height: 100%; display: flex;\">\n              <pn-donut-chart *ngIf=\"dataPrioridadUnoReload\" [idGrafica]=\"'prioridadUno'\" [data]=\"dataPrioridadUno\" [tipoGrafica]=\"tiposGraficas[2]\"\n                              [height]=\"'auto'\"> </pn-donut-chart>\n            </div>\n          </div>\n          <div >\n            <div class=\"tituloGPequenio\">\n              PRIORIDAD 2\n            </div>\n            <div id=\"donaPrioridadDos\" style=\"width: 100%; height: 100%; display: flex;\">\n              <pn-donut-chart *ngIf=\"dataPrioridadDosReload\" [idGrafica]=\"'prioridadDos'\" [data]=\"dataPrioridadDos\" [tipoGrafica]=\"tiposGraficas[3]\"\n                              [height]=\"'auto'\"> </pn-donut-chart>\n            </div>\n          </div>\n          <div>\n            <div class=\"tituloGPequenio\">\n              PRIORIDAD 3\n            </div>\n            <div id=\"donaPrioridadTres\" style=\"width: 100%; height: 100%; display: flex;\">\n              <pn-donut-chart *ngIf=\"dataPrioridadTresReload\" [idGrafica]=\"'prioridadTres'\" [data]=\"dataPrioridadTres\" [tipoGrafica]=\"tiposGraficas[4]\"\n                              [height]=\"'auto'\"> </pn-donut-chart>\n            </div>\n          </div>\n          <!-- fin GRafica prioridad 1,2,3-->\n        </div>\n        <!-- fin div graficas -->\n      </div>\n      <div id=\"divBoton\" [style.pointerEvents] = \"activarBtnIngresar ? 'auto' : 'none'\">\n        <a class=\"botonIngresar\" (click)=\"cambiarPantalla()\" [style.background]=\"activarBtnIngresar?'#008894':'#E6E6E6'\">INGRESAR</a>\n      </div>\n    </div>\n    <div *ngIf=\"!vistaInicialActiva\" class=\"trabajarRutaEnvioInfo\">\n      <pn-trabajar-rutas-envio-informacion style=\"width: 100%; height: 100%; \" [recibePiezasTot]=\"piezasInspeccionadas\" [totalesPacking]=\"inspeccionDeceada\" (finalizarEnvio)=\"recargarBotonera($event)\" (regresarVistaP)=\"regresarVistaP($event)\"></pn-trabajar-rutas-envio-informacion>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.subPadre {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px; }\n.menuSeccion {\n  width: 321px;\n  background-color: #E6E6E6;\n  float: left;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n#divBoton {\n  width: 100%;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-right: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.botonIngresar {\n  width: 190px;\n  height: 40px;\n  background: #008894;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n.tituloGrafica {\n  width: 100px;\n  font-size: 36px;\n  font-weight: bold;\n  text-align: center; }\n.tituloGMediano {\n  width: 100px;\n  font-size: 24px;\n  font-weight: bold;\n  text-align: center; }\n.tituloGPequenio {\n  width: 100px;\n  font-size: 21px;\n  font-weight: bold;\n  text-align: center; }\n#prioridad1,\n#prioridad2,\n#prioridad3 {\n  width: 55%; }\n#donaProducto {\n  width: 75%; }\n/*Mixins tooltip*/\n/*& > .tooltipV {\n  & > .texto{\n    @include multiLineTextTruncate(1, 1.5em, 20px);\n  }\n  @include tooltip();\n}*/\n/*.tooltip .tooltiptext::after {\n  content: \" \";\n  position: absolute;\n  bottom: 100%;\n  !* At the top of the tooltip *!\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent #4C4C4C transparent;\n}*/\n/*.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 0%;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}*/\n.tooltip {\n  /* visibility: hidden;\n  width: 148px;\n  height: 42px;\n  background-color: #4C4C4C;\n  text-align: left;\n  //border-radius: 6px;\n  padding: 5px 10px 0px 0px;\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 2%;\n  margin-left: -60px;\n  font-size: 10px;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  !* Position the tooltip *!\n  position: absolute;\n  z-index: 1;\n  font-family: ArialMT;\n  font-size: 9px;\n  color: #FFFFFF;\n  text-align: center;*/\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n.tooltip > .tooltiptext::after {\n    content: \" \";\n    position: absolute;\n    bottom: 100%;\n    /* At the top of the tooltip */\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent #4C4C4C transparent; }\n.tooltip:hover > .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n    text-align: center;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n.tooltip > .tooltiptext {\n    visibility: hidden;\n    width: 130px;\n    background-color: #424242;\n    color: #FFFFFF;\n    font-family: 'Roboto';\n    text-align: left;\n    padding: 5px 10px 0px 0px;\n    font-size: 9px;\n    padding: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    left: 50%;\n    margin-top: 0px;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    /* Position the tooltip */\n    position: absolute;\n    z-index: 1; }\n/*Estilos nuevos*/\n.graficas {\n  width: 100%;\n  height: calc(100vh - 350px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n.graficas .padreCliente_Prioridades {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: 70%;\n    margin: 30px 0px; }\n.graficas .padreCliente_Prioridades > div {\n      min-width: 45%; }\n.graficas .padreCliente_Prioridades > div > div {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center; }\n.graficas .padrePrioridades {\n    width: 20%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 30px 0px; }\n.graficas .padrePrioridades > div {\n      width: 100%;\n      max-height: 25%;\n      margin: 6% 0px; }\n.graficas .padrePrioridades > div > div {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center; }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n#divPrincipal {\n  width: 100%;\n  height: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  overflow: scroll; }\n#divPrincipal .bordeUno {\n    height: 48px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-left: 18px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 2px solid black; }\n#divPrincipal .bordeUno.visitaTrabajo {\n      min-width: 1760px; }\n#divPrincipal .bordeUno.visitaInicial {\n      min-width: 950px; }\n#divPrincipal .bordeUno > label {\n      font-family: Novecento;\n      font-size: 20px;\n      font-weight: 300;\n      color: #5B5B5B;\n      font-size: calc( ((20) * 1px) + ((25) - (20)) * ((100vw - 1300px) / (2300 - 1300)));\n      font-size: 25px; }\n#divPrincipal .datosC {\n    height: calc( ((62) * 1px) + ((75) - (62)) * ((100vw - 1300px) / (2300 - 1300)));\n    height: 75px; }\n#divPrincipal .datosC .subPadre > div > div.dvText {\n      font-size: calc( ((12) * 1px) + ((16) - (12)) * ((100vw - 1300px) / (2300 - 1300)));\n      font-size: 16px; }\n#divPrincipal .datosC .subPadre > div > div.dvNumber {\n      font-size: calc( ((30) * 1px) + ((46) - (30)) * ((100vw - 1300px) / (2300 - 1300)));\n      font-size: 46px; }\n#divPrincipal .VistaInicial #botonera {\n    height: calc( ((30) * 1px) + ((50) - (30)) * ((100vw - 1300px) / (2300 - 1300)));\n    height: 50px;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n    border-bottom: 1px solid #88868A;\n    border-top: 1px solid #88868A;\n    position: relative; }\n.trabajarRutaEnvioInfo {\n  width: 100%;\n  height: 83%;\n  min-width: 1760px; }\n@media all and (min-height: 750px) and (max-height: 770px) {\n  .trabajarRutaEnvioInfo {\n    min-width: 1304px; }\n  #divPrincipal > .bordeUno.visitaTrabajo {\n    min-width: 1304px; } }\n.estiloDatosObjetivo, .estiloDatosTrabajado, .estiloDatos, .estiloDatosMinimo {\n  font-size: 16px;\n  font-family: Roboto;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasEnvioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_envio_informacion_trabajar_rutas_envio_services__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TrabajarRutasEnvioComponent = /** @class */ (function () {
    /**************/
    function TrabajarRutasEnvioComponent(comunService, router, _trabajarRutasEnvioService, _embalarS) {
        this.comunService = comunService;
        this.router = router;
        this._trabajarRutasEnvioService = _trabajarRutasEnvioService;
        this._embalarS = _embalarS;
        this.valoresTabs = [0, 0, 0, 0, 0];
        this.tiposGraficas = ["Gris", "Gris", "Gris", "Gris", "Gris"];
        this.listaPrioridades = new Array();
        this.datosGraficas = [];
        this.graficasValores = [];
        this.dataCLienteReload = true;
        this.dataCLiente = {
            titulo: "Clientes",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadesReload = true;
        this.dataPrioridades = {
            titulo: "Prioridades",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadUnoReload = true;
        this.dataPrioridadUno = {
            titulo: "Prioridad 1",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadDosReload = true;
        this.dataPrioridadDos = {
            titulo: "Prioridad 2",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadTresReload = true;
        this.dataPrioridadTres = {
            titulo: "Prioridad 3",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        ///////
        this.vistaInicialActiva = true;
        this.classAsideMenu = "asideNormalMenu";
        this.totalPendientes = 0;
        /////variables  para el html
        this.objetivoDeinspeccion = 0;
        this.piezasInspeccionadas = 0;
        this.inspeccionDeceada = 0;
        this.inspeccionDeceadaHastaElMomento = 0;
        this.inspeccionDeceadaHastaElMomentoMen = 0;
        this.minimoDeInspeccion = 0;
        this.minimaInspeccionHastaElMomento = 0;
        this.colorIndiceInspeccionDeceada = "#D0021B";
        this.colorMinimoInspeccion = "#D0021B";
        this.valAux = 1;
        /*+++++++++VARIABLES APRA LA GRAFICA ESTADISTICAS POR USUARIO++++++*/
        this.hechas = 3;
        this.inspeccionDeceadaVal = 1000;
        this.listaPorAnio = [];
        this.listaPorQuincena = [];
        this.listaPorMes = [];
        this.arrayDatosYear = [];
        this.arrayLabelYear = [];
        this.listaQuincena = [];
        this.listaMes = [];
        this.listaYear = [];
        this.arrayLabelQuincena = [];
        this.arrayDatosQuincena = [];
        this.arrayDatosMes = [];
        this.arrayLabelMes = [];
        this.filtroPrioUsuario = [];
        this.nuevaPrioridadEstadisticas = [];
        this.piezasH = 10;
        this.piezasMax = 10;
        this.totEmb = 0;
        this.totAlmacen = 0;
        this.totEnvio = 0;
        this.totEnvioXCliente = 0;
        this.actualizarDatos = true;
        this.classAsideMenuE = 'asidePrincipalMenuEmbalaje';
    }
    TrabajarRutasEnvioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'envio') {
                _this.activeMenu = false;
                _this.valAux = 1;
                _this.obtenerMetodos();
            }
        });
        this.obtenerMetodos();
    };
    TrabajarRutasEnvioComponent.prototype.obtenerMetodos = function () {
        var _this = this;
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var id = parseInt(this.idUsuario);
        var obj = {
            idUsuarioLogueado: id
        };
        this.ObtenerEstadisticaUsuarioEnvioPL(obj);
        if (this.inspeccionDeceadaHastaElMomento < 0) {
            this.colorIndiceInspeccionDeceada = "#D0021B";
        }
        else if (this.inspeccionDeceada > this.inspeccionDeceadaHastaElMomento) {
            this.colorIndiceInspeccionDeceada = "#39B54A"; ///// verde
        }
        if (this.minimaInspeccionHastaElMomento < 0) {
            this.colorMinimoInspeccion = "#D0021B"; //rojo
        }
        else if (this.minimoDeInspeccion > this.minimaInspeccionHastaElMomento) {
            this.colorMinimoInspeccion = "#39B54A";
        }
        this._trabajarRutasEnvioService.obtenerObjetivos().subscribe(function (data) {
            if (data.current["Hoy"] != undefined) {
                _this.piezasInspeccionadas = data.current["Hoy"];
            }
            if (data.current["Deseadas"] != undefined) {
                _this.inspeccionDeceada = data.current["Deseadas"];
                _this.inspeccionDeceadaHastaElMomento =
                    _this.piezasInspeccionadas - _this.inspeccionDeceada;
                _this.inspeccionDeceadaHastaElMomentoMen = -1 * _this.inspeccionDeceadaHastaElMomento;
                if (_this.inspeccionDeceadaHastaElMomentoMen === 0) {
                    _this.mensajePackingDeseadas = 'HAZ ALCANZADO LOS PAKING LIST DESEADOS';
                }
                else {
                    _this.mensajePackingDeseadas = 'ESTAS A' + ' ' + _this.inspeccionDeceadaHastaElMomentoMen + ' ' + 'PACKING LIST DESEADAS';
                }
            }
            if (data.current["Minimo"] != undefined) {
                _this.minimoDeInspeccion = data.current["Minimo"];
                /*this.minimaInspeccionHastaElMomento =
                  this.minimoDeInspeccion - this.piezasInspeccionadas;*/
                if (_this.piezasInspeccionadas > _this.minimoDeInspeccion) {
                    // this.cambiarColor = '#39B54A';
                    _this.minimaInspeccionHastaElMomento = _this.piezasInspeccionadas - _this.minimoDeInspeccion;
                    _this.valorSigno = '+';
                    _this.colorMinimoInspeccion = "#39B54A";
                    _this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE ENVÍOS';
                }
                else if (_this.minimoDeInspeccion > _this.piezasInspeccionadas) {
                    // this.cambiarColor = '#D0021B';
                    _this.minimaInspeccionHastaElMomento = _this.minimoDeInspeccion - _this.piezasInspeccionadas;
                    _this.valorSigno = '-';
                    _this.colorMinimoInspeccion = "#D0021B"; //rojo
                    if (_this.minimaInspeccionHastaElMomento > 1) {
                        _this.mensajeEmbDeseado = 'ESTAS A' + ' ' + _this.minimaInspeccionHastaElMomento + ' ' + 'PIEZAS DE SUPERAR EL MÌNIMO DE ENVÍO';
                    }
                    else {
                        _this.mensajeEmbDeseado = 'ESTAS A' + ' ' + _this.minimaInspeccionHastaElMomento + ' ' + 'PIEZA DE SUPERAR EL MÌNIMO DE ENVÍO';
                    }
                }
                else if (_this.piezasInspeccionadas === _this.minimoDeInspeccion) {
                    // this.cambiarColor = '#FBB03B';
                    _this.minimaInspeccionHastaElMomento = _this.piezasInspeccionadas - _this.minimoDeInspeccion;
                    _this.valorSigno = ' ';
                    _this.mensajeEmbDeseado = 'HAZ ALCANZADO EL MÍNIMO DE ENVÍOS';
                }
            }
            if (data.current["Objetivo"] != undefined) {
                _this.objetivoDeinspeccion = data.current["Objetivo"];
            }
            if (_this.piezasInspeccionadas < _this.inspeccionDeceada) {
                _this.activarBtnIngresar = true;
            }
            else {
                _this.activarBtnIngresar = false;
            }
        }, function (error) {
            console.log(error);
        });
        this._trabajarRutasEnvioService.obtenerMontosTab().subscribe(function (data) {
            console.log(data);
            _this.valoresTabs = [
                data.current["Hoy"],
                data.current["Mañana"],
                data.current["Pasado"],
                data.current["Futuro"],
                data.current["Todo"]
            ];
        }, function (error) {
            console.log(error);
        });
        this._trabajarRutasEnvioService.obtenerInfoGrafica().subscribe(function (data) {
            _this.datosGraficas = data.current;
            _this.llenarGraficas("Hoy");
        }, function (error) {
            console.log(error);
        });
        this.seleccionarHoy();
        this.obtenerTot();
    };
    TrabajarRutasEnvioComponent.prototype.obtenerTot = function () {
        var _this = this;
        this._embalarS.totalesGeneral().subscribe(function (data) {
            _this.totEmb = data.current.Embalar;
            _this.totAlmacen = data.current.Almacen;
            _this.totEnvio = data.current.Envio;
            _this.totEnvioXCliente = data.current.EnvioXCliente;
            _this.itemsMenu = [
                { rol: 'RESPONSABLE DE ALMACEN ', active: true, menu: [
                        { nombre: 'Salidas Almacén', tipo: 'valor', valor: _this.totEmb, url: 'embalar', select: false },
                        {
                            nombre: 'Trabajar rutas',
                            tipo: '',
                            valor: 0,
                            url: 'poolVisitas',
                            disable: true,
                            subMenu: [
                                { nombre: 'Almacén', tipo: 'valor', valor: _this.totAlmacen, url: 'almacen', select: false },
                                { nombre: 'Envío', tipo: 'valor', valor: _this.totEnvio, url: 'envio', select: true },
                                { nombre: 'Envio Pagado por cliente', tipo: 'valor', valor: _this.totEnvioXCliente, url: 'trabajarRutaCliente' }
                            ],
                            select: false
                        }
                    ] }
            ];
            _this.activeMenu = true;
        }, function (error) {
            console.log(error);
        });
    };
    /**MENU***/
    TrabajarRutasEnvioComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcorE = !this.ocultarAcorE;
        if (this.ocultarAcorE) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    TrabajarRutasEnvioComponent.prototype.ObtenerEstadisticaUsuarioEnvioPL = function (idUsuario) {
        var _this = this;
        this.activarGraficasPrioEsta = false;
        var totPza = 0;
        var totPartidas = 0;
        var totPzaPrio = 0;
        var totPzaPrio1 = 0;
        var totPzaPrio2 = 0;
        var totPzaPrio3 = 0;
        this.listaQuincena = { listaLabel: [''], listaDatos: [0] };
        this.listaMes = { listaLabel: [''], listaDatos: [0] };
        this.listaYear = { listaLabel: [''], listaDatos: [0] };
        this.listaPrioridadUsuarioEstadisticas = [];
        this._trabajarRutasEnvioService.ObtenerEstadisticaUsuarioEnvioPL(idUsuario).subscribe(function (data) {
            console.log('Soy data prioridades -->', data.current);
            /////////////////////////////////////////////////////////////////////
            if (data.current.Prioridad !== undefined) {
                if (data.current.AllYears) {
                    _this.listaAnios = data.current.AllYears;
                }
                if (data.current.Prioridad) {
                    _this.listaPrioridadEstadisticas = data.current.Prioridad;
                }
                if (data.current.Year) {
                    _this.listaPorAnio = data.current.Year;
                    _this.listaPorAnio.forEach(function (inde) {
                        _this.arrayLabelYear.push(inde.tiempo);
                        _this.arrayDatosYear.push(inde.totalPiezas);
                    });
                }
                if (data.current.Mes) {
                    _this.listaPorMes = data.current.Mes;
                    _this.listaPorMes.forEach(function (inde) {
                        _this.arrayLabelMes.push(inde.tiempo);
                        _this.arrayDatosMes.push(inde.totalPiezas);
                    });
                }
                if (data.current.Quincena) {
                    _this.listaPorQuincena = data.current.Quincena;
                    _this.listaPorQuincena.forEach(function (inde) {
                        _this.arrayLabelQuincena.push(inde.tiempo);
                        _this.arrayDatosQuincena.push(inde.totalPiezas);
                    });
                }
                _this.listaPrioridadEstadisticasDatos = data.current.Prioridad;
                ///// Se asignan a las listas los datos para la grafica de puntos
                _this.listaQuincena = { listaLabel: _this.arrayLabelQuincena, listaDatos: _this.arrayDatosQuincena };
                _this.listaMes = { listaLabel: _this.arrayLabelMes, listaDatos: _this.arrayDatosMes };
                _this.listaYear = { listaLabel: _this.arrayLabelYear, listaDatos: _this.arrayDatosYear };
                ////// Aqui termina
                for (var i = 0; i < _this.listaAnios.length; i++) {
                    totPza += _this.listaAnios[i].totalPiezas;
                    totPartidas += _this.listaAnios[i].totalPl;
                }
                for (var i = 0; i < _this.listaPrioridadEstadisticasDatos.length; i++) {
                    if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P1') {
                        totPzaPrio1 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                    else if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P2') {
                        totPzaPrio2 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                    else if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P3') {
                        totPzaPrio3 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                }
                //////////////////////////////////////// GRAFICAS DONUT CHARTS //////////////////7///////////////
                _this.listaPrioridadUsuarioEstadisticas = [{ 'prioridad': 'Prioridad 1', 'pieza': totPzaPrio1 },
                    { 'prioridad': 'Prioridad 2', 'pieza': totPzaPrio2 },
                    { 'prioridad': 'Prioridad 3', 'pieza': totPzaPrio3 }];
                _this.limpiarVariablesGraficaEstadisticas();
                _this.calcularDatosGraficaEstadisticas();
                _this.totales_estadisticas = { total_partidas: totPartidas, total_piezas: totPza, listaQuincena: _this.listaQuincena, listaMes: _this.listaMes, listaAnio: _this.listaYear };
            }
            else {
                //////////////////////////////////////// GRAFICAS DONUT CHARTS /////////////////////////////////
                _this.listaPrioridadUsuarioEstadisticas = [{ 'prioridad': 'Ninguna', 'pieza': 0 }];
                _this.totales_estadisticas = { total_partidas: totPartidas, total_piezas: totPza, listaQuincena: _this.listaQuincena, listaMes: _this.listaMes, listaAnio: _this.listaYear };
                _this.limpiarVariablesGraficaEstadisticas();
                _this.calcularDatosGraficaEstadisticas();
            }
        });
    };
    // Metodo para las variables de la graficas estadisticas
    TrabajarRutasEnvioComponent.prototype.limpiarVariablesGraficaEstadisticas = function () {
        this.filtroPrioUsuario = [];
        for (var _i = 0, _a = this.listaPrioridadUsuarioEstadisticas; _i < _a.length; _i++) {
            var valor = _a[_i];
            this.filtroPrioUsuario.push(valor.prioridad);
        }
        var valoresC = [];
        var valoresPrioEst = [];
        for (var _b = 0, _c = this.listaPrioridadUsuarioEstadisticas; _b < _c.length; _b++) {
            var nombre = _c[_b];
            valoresPrioEst.push([0]);
            valoresC.push(0);
        }
        if (this.listaPrioridadUsuarioEstadisticas.length > 1) {
            this.dataPrioridadEstadisticas = {
                titulo: 'Totales',
                labels: this.filtroPrioUsuario,
                valores: valoresC,
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: valoresPrioEst
            };
            this.graficasEstadisticas = 'Prioridades';
        }
        else {
            this.dataPrioridadEstadisticas = {
                titulo: 'Totales',
                labels: [""],
                valores: [1],
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: [[0], [0]]
            };
            this.graficasEstadisticas = 'Gris';
        }
    };
    TrabajarRutasEnvioComponent.prototype.calcularDatosGraficaEstadisticas = function () {
        for (var _i = 0, _a = this.listaPrioridadUsuarioEstadisticas; _i < _a.length; _i++) {
            var usuario = _a[_i];
            this.llenarTotales(this.dataPrioridadEstadisticas, usuario, 'PRIORIDADESESTADISTICAS');
        }
    };
    TrabajarRutasEnvioComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
        switch (graficaElegida) {
            case 'PRIORIDADESESTADISTICAS':
                var posicionP4 = this.filtroPrioUsuario.indexOf(elemento.prioridad);
                if (this.nuevaPrioridadEstadisticas.indexOf(elemento.prioridad) === -1) {
                    this.nuevaPrioridadEstadisticas.push(elemento.prioridad);
                }
                total.valuesExtrasHover[posicionP4][0] += elemento.pieza;
                total.valuesExtras[0] += elemento.pieza; // Total de Partidas
                total.valores[posicionP4] += elemento.pieza; // +(elemento.monto.toFixed(2)); //Monto total
                this.activarGraficasPrioEsta = true; // ACTIVAR EL COMPONENTE PARA LA GRAFICA DE DONA PRIORIDADES USUARIO
                break;
            default:
                break;
        }
    };
    //////////////////////////////////////////////////////////
    TrabajarRutasEnvioComponent.prototype.cambiarPantalla = function () {
        this.vistaInicialActiva = false;
    };
    TrabajarRutasEnvioComponent.prototype.regresarVista = function () {
        this.vistaInicialActiva = true;
        this.seleccionarHoy();
    };
    TrabajarRutasEnvioComponent.prototype.seleccionarHoy = function () {
        setTimeout(function () {
            var idHoy = document.getElementById('dhoy');
            if (idHoy) {
                document.getElementById('dhoy').click();
            }
            else {
                this.seleccionarHoy();
            }
        }, 100);
    };
    TrabajarRutasEnvioComponent.prototype.selectWallet = function () {
        this.router.navigate(["almacen"]);
    };
    TrabajarRutasEnvioComponent.prototype.cambiarTab = function ($event) {
        switch ($event) {
            case "hoy":
                this.llenarGraficas("Hoy");
                break;
            case "manana":
                this.llenarGraficas("Mañana");
                break;
            case "pasado":
                this.llenarGraficas("Pasado");
                break;
            case "futuro":
                this.llenarGraficas("futuro");
                break;
            case "todo":
                this.llenarGraficas("Todo");
                break;
        }
    };
    TrabajarRutasEnvioComponent.prototype.llenarGraficas = function (dia) {
        var _this = this;
        this.limpiarGraficas();
        if (this.datosGraficas[dia] != undefined) {
            var graficaHoy = this.datosGraficas[dia];
            console.log(graficaHoy);
            if (graficaHoy["Clientes"] != undefined) {
                var clientes = [];
                var monto = [];
                var piezasMonto = [];
                var sumPiezas = 0;
                var sumMonto = 0;
                var formatoMonto = void 0; /// Se agrego para darle formato al monto
                var formatoMontoTotal = void 0; /// Se agrego para darle formato al monto
                for (var _i = 0, _a = graficaHoy["Clientes"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    clientes.push(item.titulo);
                    monto.push(item.monto);
                    formatoMonto = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(item.monto);
                    piezasMonto.push([item.piezas, formatoMonto]); /*piezasMonto.push([item.piezas, "$" + item.monto]);*/
                    sumPiezas += item.piezas;
                    sumMonto += item.monto;
                }
                /*For para ordenar los datos de acuerdo al monto*/
                var montoAuxL = void 0;
                var band = false;
                while (!band) {
                    band = true;
                    for (var i = 0; i < monto.length - 1; i++) {
                        var aux = i + 1;
                        if (monto[i] < monto[aux]) {
                            montoAuxL = monto[i + 1];
                            monto[i + 1] = monto[i];
                            monto[i] = montoAuxL;
                            // band = false;
                            ///////////////////////
                            montoAuxL = piezasMonto[i + 1][1];
                            piezasMonto[i + 1][1] = piezasMonto[i][1];
                            piezasMonto[i][1] = montoAuxL;
                            /////////////////////
                            montoAuxL = piezasMonto[i + 1][0];
                            piezasMonto[i + 1][0] = piezasMonto[i][0];
                            piezasMonto[i][0] = montoAuxL;
                            /////////////////////////////
                            montoAuxL = clientes[i + 1];
                            clientes[i + 1] = clientes[i];
                            clientes[i] = montoAuxL;
                            band = false;
                        }
                    }
                }
                /**********************************************/
                formatoMontoTotal = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(sumMonto); /// Se asigna el formato al total del monto
                this.dataCLiente = {
                    titulo: "Clientes",
                    labels: clientes,
                    valores: monto,
                    labelsExtras: [["Piezas"], ["Monto"]],
                    labelsExtrasHover: ["Piezas", "Monto"],
                    valuesExtras: [sumPiezas, formatoMontoTotal],
                    valuesExtrasHover: piezasMonto
                };
                this.tiposGraficas[0] = "General";
                this.dataCLienteReload = false;
                setTimeout(function () {
                    _this.dataCLienteReload = true;
                }, 5);
            }
            else {
                this.tiposGraficas[0] = "Gris";
                this.dataCLienteReload = false;
                setTimeout(function () {
                    _this.dataCLienteReload = true;
                }, 5);
            }
            if (graficaHoy["Prioridades"] != undefined) {
                this.listaPrioridades = [];
                var prioridades = [];
                var monto = [];
                var piezas = [];
                var piezasMonto = [];
                var sumPiezas = 0;
                var sumMonto = 0;
                var arrayValoresAux = new Array();
                var formatoMonto = void 0; /// Se agrego para darle formato al monto
                var formatoMontoTotal = void 0; /// Se agrego para darle formato al monto
                var montoS = void 0;
                for (var _b = 0, _c = graficaHoy["Prioridades"]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    prioridades.push(item.titulo);
                    monto.push(item.monto);
                    formatoMonto = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(item.monto);
                    piezas.push(item.piezas);
                    piezasMonto.push([item.piezas, formatoMonto]); /*piezasMonto.push([item.piezas, "$" + item.monto]);*/
                    sumPiezas += item.piezas;
                    sumMonto += item.monto;
                }
                /***/
                /*For para ordenar los datos de acuerdo al monto*/
                var montoAuxL = void 0;
                var band = false;
                while (!band) {
                    band = true;
                    for (var i = 0; i < monto.length - 1; i++) {
                        var aux = i + 1;
                        if (monto[i] < monto[aux]) {
                            montoAuxL = monto[i + 1];
                            monto[i + 1] = monto[i];
                            monto[i] = montoAuxL;
                            // band = false;
                            /////////////PIEZAS/////////////
                            montoAuxL = piezas[i + 1];
                            piezas[i + 1] = piezas[i];
                            piezas[i] = montoAuxL;
                            ///////////////////////
                            montoAuxL = piezasMonto[i + 1][1];
                            piezasMonto[i + 1][1] = piezasMonto[i][1];
                            piezasMonto[i][1] = montoAuxL;
                            /////////////////////
                            montoAuxL = piezasMonto[i + 1][0];
                            piezasMonto[i + 1][0] = piezasMonto[i][0];
                            piezasMonto[i][0] = montoAuxL;
                            /////////////////////////////
                            montoAuxL = prioridades[i + 1];
                            prioridades[i + 1] = prioridades[i];
                            prioridades[i] = montoAuxL;
                            band = false;
                        }
                    }
                }
                /**********************************************/
                if (prioridades.length > 0 && this.valAux === 1) {
                    this.tipoGraficaPrioridades = 'prioridades';
                    var arrayPrio = ['P1', 'P2', 'P3'];
                    var arrayLabelAux = ['Prioridad 1', 'Prioridad 2', 'Prioridad 3'];
                    for (var i = 0; i < prioridades.length; i++) {
                        for (var j = 0; j < arrayPrio.length; j++) {
                            if (prioridades[i] === arrayPrio[j]) {
                                arrayValoresAux[j] = monto[i];
                                formatoMonto = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(monto[i]);
                                /* prioridades[j] = arrayLabelAux[j];
                                 piezasMonto[j] = [[piezas[i]], [formatoMonto]];*/
                                this.listaPrioridades[j] = ({ prioridad: arrayLabelAux[j], piezas: piezas[i], monto: formatoMonto, montoS: monto[i] });
                            }
                            else if (arrayValoresAux[j] === undefined) {
                                arrayValoresAux[j] = 0;
                                /*piezasMonto[j] = [[0], [0]];
                                prioridades[j] = arrayLabelAux[j];*/
                                this.listaPrioridades[j] = ({ prioridad: arrayLabelAux[j], piezas: 0, monto: 0, montoS: 0 });
                            }
                        }
                    }
                    this.valAux = 2;
                }
                /***/
                for (var i = 0; i < this.listaPrioridades.length; i++) {
                    piezasMonto[i] = [this.listaPrioridades[i].piezas, this.listaPrioridades[i].monto];
                    prioridades[i] = this.listaPrioridades[i].prioridad;
                    monto[i] = this.listaPrioridades[i].montoS;
                }
                /***/
                console.log('Soy lista de prioridades --->', this.listaPrioridades);
                formatoMontoTotal = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(sumMonto); /// Se asigna el formato al total del monto
                this.dataPrioridades = {
                    titulo: "Prioridades",
                    labels: prioridades,
                    valores: monto,
                    labelsExtras: [["Piezas"], ["Monto"]],
                    labelsExtrasHover: ["Piezas", "Monto"],
                    valuesExtras: [sumPiezas, formatoMontoTotal],
                    valuesExtrasHover: piezasMonto
                };
                this.tiposGraficas[1] = "Prioridades";
                this.dataPrioridadesReload = false;
                setTimeout(function () {
                    _this.dataPrioridadesReload = true;
                }, 5);
            }
            else {
                this.tiposGraficas[1] = "Gris";
                this.dataPrioridadesReload = false;
                setTimeout(function () {
                    _this.dataPrioridadesReload = true;
                }, 5);
            }
            if (graficaHoy["P1"] != undefined) {
                var clientes = [];
                var monto = [];
                var piezasMonto = [];
                var sumPiezas = 0;
                var sumMonto = 0;
                var formatoMonto = void 0; /// Se agrego para darle formato al monto
                var formatoMontoTotal = void 0; /// Se agrego para darle formato al monto
                for (var _d = 0, _e = graficaHoy["P1"]; _d < _e.length; _d++) {
                    var item = _e[_d];
                    clientes.push(item.titulo);
                    monto.push(item.monto);
                    formatoMonto = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(item.monto);
                    piezasMonto.push([item.piezas, formatoMonto]); /*piezasMonto.push([item.piezas, "$" + item.monto]);*/
                    sumPiezas += item.piezas;
                    sumMonto += item.monto;
                }
                /*For para ordenar los datos de acuerdo al monto*/
                var montoAuxL = void 0;
                var band = false;
                while (!band) {
                    band = true;
                    for (var i = 0; i < monto.length - 1; i++) {
                        var aux = i + 1;
                        if (monto[i] < monto[aux]) {
                            montoAuxL = monto[i + 1];
                            monto[i + 1] = monto[i];
                            monto[i] = montoAuxL;
                            // band = false;
                            ///////////////////////
                            montoAuxL = piezasMonto[i + 1][1];
                            piezasMonto[i + 1][1] = piezasMonto[i][1];
                            piezasMonto[i][1] = montoAuxL;
                            /////////////////////
                            montoAuxL = piezasMonto[i + 1][0];
                            piezasMonto[i + 1][0] = piezasMonto[i][0];
                            piezasMonto[i][0] = montoAuxL;
                            /////////////////////////////
                            montoAuxL = clientes[i + 1];
                            clientes[i + 1] = clientes[i];
                            clientes[i] = montoAuxL;
                            band = false;
                        }
                    }
                }
                /**********************************************/
                formatoMontoTotal = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(sumMonto); /// Se asigna el formato al total del monto
                this.dataPrioridadUno = {
                    titulo: "Prioridad 1",
                    labels: clientes,
                    valores: monto,
                    labelsExtras: [["Piezas"], ["Monto"]],
                    labelsExtrasHover: ["Piezas", "Monto"],
                    valuesExtras: [sumPiezas, formatoMontoTotal],
                    valuesExtrasHover: piezasMonto
                };
                this.tiposGraficas[2] = "PrioridadRoja";
                this.dataPrioridadUnoReload = false;
                setTimeout(function () {
                    _this.dataPrioridadUnoReload = true;
                }, 5);
            }
            else {
                this.tiposGraficas[2] = "Gris";
                this.dataPrioridadUnoReload = false;
                setTimeout(function () {
                    _this.dataPrioridadUnoReload = true;
                }, 5);
            }
            if (graficaHoy["P2"] != undefined) {
                var clientes = [];
                var monto = [];
                var piezasMonto = [];
                var sumPiezas = 0;
                var sumMonto = 0;
                var formatoMonto = void 0; /// Se agrego para darle formato al monto
                var formatoMontoTotal = void 0; /// Se agrego para darle formato al monto
                for (var _f = 0, _g = graficaHoy["P2"]; _f < _g.length; _f++) {
                    var item = _g[_f];
                    clientes.push(item.titulo);
                    monto.push(item.monto);
                    formatoMonto = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(item.monto);
                    piezasMonto.push([item.piezas, formatoMonto]); /*piezasMonto.push([item.piezas, "$" + item.monto]);*/
                    sumPiezas += item.piezas;
                    sumMonto += item.monto;
                }
                /*For para ordenar los datos de acuerdo al monto*/
                var montoAuxL = void 0;
                var band = false;
                while (!band) {
                    band = true;
                    for (var i = 0; i < monto.length - 1; i++) {
                        var aux = i + 1;
                        if (monto[i] < monto[aux]) {
                            montoAuxL = monto[i + 1];
                            monto[i + 1] = monto[i];
                            monto[i] = montoAuxL;
                            // band = false;
                            ///////////////////////
                            montoAuxL = piezasMonto[i + 1][1];
                            piezasMonto[i + 1][1] = piezasMonto[i][1];
                            piezasMonto[i][1] = montoAuxL;
                            /////////////////////
                            montoAuxL = piezasMonto[i + 1][0];
                            piezasMonto[i + 1][0] = piezasMonto[i][0];
                            piezasMonto[i][0] = montoAuxL;
                            /////////////////////////////
                            montoAuxL = clientes[i + 1];
                            clientes[i + 1] = clientes[i];
                            clientes[i] = montoAuxL;
                            band = false;
                        }
                    }
                }
                /**********************************************/
                formatoMontoTotal = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(sumMonto); /// Se asigna el formato al total del monto
                this.dataPrioridadDos = {
                    titulo: "Prioridad 2",
                    labels: clientes,
                    valores: monto,
                    labelsExtras: [["Piezas"], ["Monto"]],
                    labelsExtrasHover: ["Piezas", "Monto"],
                    valuesExtras: [sumPiezas, formatoMontoTotal],
                    valuesExtrasHover: piezasMonto
                };
                this.tiposGraficas[3] = "PrioridadNaranja";
                this.dataPrioridadDosReload = false;
                setTimeout(function () {
                    _this.dataPrioridadDosReload = true;
                }, 5);
            }
            else {
                this.tiposGraficas[3] = "Gris";
                this.dataPrioridadDosReload = false;
                setTimeout(function () {
                    _this.dataPrioridadDosReload = true;
                }, 5);
            }
            if (graficaHoy["P3"] != undefined) {
                var clientes = [];
                var monto = [];
                var piezasMonto = [];
                var sumPiezas = 0;
                var sumMonto = 0;
                var formatoMonto = void 0; /// Se agrego para darle formato al monto
                var formatoMontoTotal = void 0; /// Se agrego para darle formato al monto
                for (var _h = 0, _j = graficaHoy["P3"]; _h < _j.length; _h++) {
                    var item = _j[_h];
                    clientes.push(item.titulo);
                    monto.push(item.monto);
                    formatoMonto = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(item.monto);
                    piezasMonto.push([item.piezas, formatoMonto]); /*piezasMonto.push([item.piezas, "$" + item.monto]);*/
                    sumPiezas += item.piezas;
                    sumMonto += item.monto;
                }
                /*For para ordenar los datos de acuerdo al monto*/
                var montoAuxL = void 0;
                var band = false;
                while (!band) {
                    band = true;
                    for (var i = 0; i < monto.length - 1; i++) {
                        var aux = i + 1;
                        if (monto[i] < monto[aux]) {
                            montoAuxL = monto[i + 1];
                            monto[i + 1] = monto[i];
                            monto[i] = montoAuxL;
                            // band = false;
                            ///////////////////////
                            montoAuxL = piezasMonto[i + 1][1];
                            piezasMonto[i + 1][1] = piezasMonto[i][1];
                            piezasMonto[i][1] = montoAuxL;
                            /////////////////////
                            montoAuxL = piezasMonto[i + 1][0];
                            piezasMonto[i + 1][0] = piezasMonto[i][0];
                            piezasMonto[i][0] = montoAuxL;
                            /////////////////////////////
                            montoAuxL = clientes[i + 1];
                            clientes[i + 1] = clientes[i];
                            clientes[i] = montoAuxL;
                            band = false;
                        }
                    }
                }
                /**********************************************/
                formatoMontoTotal = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(sumMonto); /// Se asigna el formato al total del monto
                this.dataPrioridadTres = {
                    titulo: "Prioridad 3",
                    labels: clientes,
                    valores: monto,
                    labelsExtras: [["Piezas"], ["Monto"]],
                    labelsExtrasHover: ["Piezas", "Monto"],
                    valuesExtras: [sumPiezas, formatoMontoTotal],
                    valuesExtrasHover: piezasMonto
                };
                this.tiposGraficas[4] = "PrioridadVerde";
                this.dataPrioridadTresReload = false;
                setTimeout(function () {
                    _this.dataPrioridadTresReload = true;
                }, 5);
            }
            else {
                this.tiposGraficas[4] = "Gris";
                this.dataPrioridadTresReload = false;
                setTimeout(function () {
                    _this.dataPrioridadTresReload = true;
                }, 5);
            }
        }
    };
    TrabajarRutasEnvioComponent.prototype.limpiarGraficas = function () {
        var _this = this;
        this.dataCLiente = {
            titulo: "Clientes",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridades = {
            titulo: "Prioridades",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadUno = {
            titulo: "Prioridad 1",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadDos = {
            titulo: "Prioridad 2",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadTres = {
            titulo: "Prioridad 3",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.tiposGraficas = ["Gris", "Gris", "Gris", "Gris", "Gris"];
        this.dataCLienteReload = false;
        this.dataPrioridadesReload = false;
        this.dataPrioridadUnoReload = false;
        this.dataPrioridadDosReload = false;
        this.dataPrioridadTresReload = false;
        setTimeout(function () {
            _this.dataCLienteReload = true;
            _this.dataPrioridadesReload = true;
            _this.dataPrioridadUnoReload = true;
            _this.dataPrioridadDosReload = true;
            _this.dataPrioridadTresReload = true;
        }, 5);
    };
    TrabajarRutasEnvioComponent.prototype.recargarBotonera = function ($event) {
        this.obtenerTotales();
        this.graficasP();
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var id = parseInt(this.idUsuario);
        var obj = {
            idUsuarioLogueado: id
        };
        this.ObtenerEstadisticaUsuarioEnvioPL(obj);
    };
    TrabajarRutasEnvioComponent.prototype.obtenerTotales = function () {
        var _this = this;
        this._trabajarRutasEnvioService.obtenerObjetivos().subscribe(function (data) {
            if (data.current["Hoy"] != undefined) {
                _this.piezasInspeccionadas = data.current["Hoy"];
            }
            if (data.current["Deseadas"] != undefined) {
                _this.inspeccionDeceada = data.current["Deseadas"];
                _this.inspeccionDeceadaHastaElMomento =
                    _this.piezasInspeccionadas - _this.inspeccionDeceada;
                _this.inspeccionDeceadaHastaElMomentoMen = -1 * _this.inspeccionDeceadaHastaElMomento;
                if (_this.inspeccionDeceadaHastaElMomentoMen === 0) {
                    _this.mensajePackingDeseadas = 'HAZ ALCANZADO LOS PAKING LIST DESEADOS';
                }
                else {
                    _this.mensajePackingDeseadas = 'ESTAS A' + ' ' + _this.inspeccionDeceadaHastaElMomentoMen + ' ' + 'PACKING LIST DESEADAS';
                }
            }
            if (data.current["Minimo"] != undefined) {
                _this.minimoDeInspeccion = data.current["Minimo"];
                /*this.minimaInspeccionHastaElMomento =
                  this.minimoDeInspeccion - this.piezasInspeccionadas;*/
                if (_this.piezasInspeccionadas > _this.minimoDeInspeccion) {
                    // this.cambiarColor = '#39B54A';
                    _this.minimaInspeccionHastaElMomento = _this.piezasInspeccionadas - _this.minimoDeInspeccion;
                    _this.valorSigno = '+';
                    _this.colorMinimoInspeccion = "#39B54A";
                    _this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE ENVÍOS';
                }
                else if (_this.minimoDeInspeccion > _this.piezasInspeccionadas) {
                    // this.cambiarColor = '#D0021B';
                    _this.minimaInspeccionHastaElMomento = _this.minimoDeInspeccion - _this.piezasInspeccionadas;
                    _this.valorSigno = '-';
                    _this.colorMinimoInspeccion = "#D0021B"; //rojo
                    if (_this.minimaInspeccionHastaElMomento > 1) {
                        _this.mensajeEmbDeseado = 'ESTAS A' + ' ' + _this.minimaInspeccionHastaElMomento + ' ' + 'PIEZAS DE SUPERAR EL MÌNIMO DE ENVÍO';
                    }
                    else {
                        _this.mensajeEmbDeseado = 'ESTAS A' + ' ' + _this.minimaInspeccionHastaElMomento + ' ' + 'PIEZA DE SUPERAR EL MÌNIMO DE ENVÍO';
                    }
                }
                else if (_this.piezasInspeccionadas === _this.minimoDeInspeccion) {
                    // this.cambiarColor = '#FBB03B';
                    _this.minimaInspeccionHastaElMomento = _this.piezasInspeccionadas - _this.minimoDeInspeccion;
                    _this.valorSigno = ' ';
                    _this.mensajeEmbDeseado = 'HAZ ALCANZADO EL MÍNIMO DE ENVÍOS';
                }
            }
            if (data.current["Objetivo"] != undefined) {
                _this.objetivoDeinspeccion = data.current["Objetivo"];
            }
            if (_this.piezasInspeccionadas < _this.inspeccionDeceada) {
                _this.activarBtnIngresar = true;
            }
            else {
                _this.activarBtnIngresar = false;
            }
            setTimeout(function () {
                _this.actualizarDatos = false;
            }, 5000);
            setTimeout(function () {
                _this.actualizarDatos = true;
            }, 5000);
        }, function (error) {
            console.log(error);
        });
    };
    /*******Regresar a la vista cuando ya no hay packing list********/
    TrabajarRutasEnvioComponent.prototype.regresarVistaP = function () {
        this.valAux = 1;
        this.vistaInicialActiva = true;
        this.seleccionarHoy();
    };
    /*********Actualizar graficas***********/
    TrabajarRutasEnvioComponent.prototype.graficasP = function () {
        var _this = this;
        this._trabajarRutasEnvioService.obtenerMontosTab().subscribe(function (data) {
            console.log(data);
            _this.valoresTabs = [
                data.current["Hoy"],
                data.current["Mañana"],
                data.current["Pasado"],
                data.current["Futuro"],
                data.current["Todo"]
            ];
        }, function (error) {
            console.log(error);
        });
        this._trabajarRutasEnvioService.obtenerInfoGrafica().subscribe(function (data) {
            _this.datosGraficas = data.current;
            _this.llenarGraficas("Hoy");
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasEnvioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-trabajar-rutas-envio",
            template: __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_envio_informacion_trabajar_rutas_envio_services__["a" /* TrabajarRutasEnvioService */], __WEBPACK_IMPORTED_MODULE_5__services_embalar_embalar_service__["a" /* EmbalarService */]])
    ], TrabajarRutasEnvioComponent);
    return TrabajarRutasEnvioComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajarRutasEnvioModule", function() { return TrabajarRutasEnvioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trabajar_rutas_envio_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trabajar_rutas_envio_routing__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_barra_progreso_trabajar_ruta_envio_barra_progreso_trabajar_ruta_envio_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-progreso-trabajar-ruta-envio/barra-progreso-trabajar-ruta-envio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_barra_prioridades_trabajar_ruta_envio_barra_prioridades_trabajar_ruta_envio_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/barra-prioridades-trabajar-ruta-envio/barra-prioridades-trabajar-ruta-envio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trabajar_rutas_envio_informacion_trabajar_rutas_envio_informacion_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio-informacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_pop_up_estadisticas_pop_up_estadisticas_module__ = __webpack_require__("./src/app/components/shared/pop-up-estadisticas/pop-up-estadisticas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_grafica_puntos_grafica_puntos_module__ = __webpack_require__("./src/app/components/shared/grafica-puntos/grafica-puntos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__responsableae_componentes_botonera_dias_botonera_dias_module__ = __webpack_require__("./src/app/components/responsableae/componentes/botonera-dias/botonera-dias.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pop_up_localizar_numero_rastreo_pop_up_localizar_numero_rastreo_component__ = __webpack_require__("./src/app/components/trabajar-ruta/pop-up-localizar-numero-rastreo/pop-up-localizar-numero-rastreo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__file_upload_envio_file_upload_envio_component__ = __webpack_require__("./src/app/components/trabajar-ruta/file-upload-envio/file-upload-envio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_file_upload_file_upload_module__ = __webpack_require__("./src/app/components/shared/file-upload/file-upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_pop_ups_operacion_exitosa_operacion_exitosa_module__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/pop-ups/operacion-exitosa/operacion-exitosa.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var TrabajarRutasEnvioModule = /** @class */ (function () {
    function TrabajarRutasEnvioModule() {
    }
    TrabajarRutasEnvioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__trabajar_rutas_envio_routing__["a" /* TrabajarRutasEnvioRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_pop_up_estadisticas_pop_up_estadisticas_module__["a" /* PopUpEstadisticasModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_grafica_puntos_grafica_puntos_module__["a" /* GraficaPuntosModule */],
                __WEBPACK_IMPORTED_MODULE_13__responsableae_componentes_botonera_dias_botonera_dias_module__["a" /* BotoneraDiasModule */],
                __WEBPACK_IMPORTED_MODULE_16__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_17__shared_file_upload_file_upload_module__["a" /* FileUploadModule */],
                __WEBPACK_IMPORTED_MODULE_18__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_19__shared_alerta_alerta_module__["a" /* AlertaModule */],
                __WEBPACK_IMPORTED_MODULE_20__componentes_pop_ups_operacion_exitosa_operacion_exitosa_module__["a" /* OperacionExitosaModule */],
                __WEBPACK_IMPORTED_MODULE_21__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_22__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__trabajar_rutas_envio_component__["a" /* TrabajarRutasEnvioComponent */],
                __WEBPACK_IMPORTED_MODULE_9__trabajar_rutas_envio_informacion_trabajar_rutas_envio_informacion_component__["a" /* TrabajarRutasEnvioInformacionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__componentes_barra_progreso_trabajar_ruta_envio_barra_progreso_trabajar_ruta_envio_component__["a" /* BarraProgresoTrabajarRutaEnvioComponent */],
                __WEBPACK_IMPORTED_MODULE_8__componentes_barra_prioridades_trabajar_ruta_envio_barra_prioridades_trabajar_ruta_envio_component__["a" /* BarraPrioridadesTrabajarRutaEnvioComponent */],
                __WEBPACK_IMPORTED_MODULE_15__file_upload_envio_file_upload_envio_component__["a" /* FileUploadEnvioComponent */],
                // FileUploadComponent,
                __WEBPACK_IMPORTED_MODULE_14__pop_up_localizar_numero_rastreo_pop_up_localizar_numero_rastreo_component__["a" /* PopUpLocalizarNumeroRastreoComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__trabajar_rutas_envio_component__["a" /* TrabajarRutasEnvioComponent */]]
        })
    ], TrabajarRutasEnvioModule);
    return TrabajarRutasEnvioModule;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasEnvioRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_envio_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrabajarRutasEnvioRoutingModule = /** @class */ (function () {
    function TrabajarRutasEnvioRoutingModule() {
    }
    TrabajarRutasEnvioRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_envio_component__["a" /* TrabajarRutasEnvioComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], TrabajarRutasEnvioRoutingModule);
    return TrabajarRutasEnvioRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=trabajar-rutas-envio.module.chunk.js.map