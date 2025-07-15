webpackJsonp(["polizas.module"],{

/***/ "./src/app/class/catalogo/centroCosto.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CentroCosto; });
var CentroCosto = /** @class */ (function () {
    function CentroCosto() {
        this.idCentroCosto = 0;
        this.tipo = '';
        this.descripcion = '';
        this.activo = true;
    }
    return CentroCosto;
}());



/***/ }),

/***/ "./src/app/class/catalogo/cuentaContable.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuentaContable; });
var CuentaContable = /** @class */ (function () {
    function CuentaContable() {
    }
    return CuentaContable;
}());



/***/ }),

/***/ "./src/app/class/catalogo/poliza.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Poliza; });
var Poliza = /** @class */ (function () {
    function Poliza() {
        this.idPoliza = 0;
        this.tipo = 0;
        this.folio = 'N/D';
        this.referencia = '';
        this.descripcion = '';
        this.fecha = null;
        this.empresa = null;
        this.cliente = null;
        this.proveedor = null;
        this.monto = 0;
        this.iva = 0;
        this.total = 0;
        this.aplicada = false;
        this.activa = true;
        this.lstPPoliza = new Array();
        this.fechaDate = new Date();
    }
    return Poliza;
}());

// Ingreso = 1, Egreso = 2, Diario = 3


/***/ }),

/***/ "./src/app/class/catalogo/ppoliza.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PPoliza; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cuentaContable_class__ = __webpack_require__("./src/app/class/catalogo/cuentaContable.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__centroCosto_class__ = __webpack_require__("./src/app/class/catalogo/centroCosto.class.ts");


var PPoliza = /** @class */ (function () {
    function PPoliza() {
        this.idPPoliza = 0;
        this.poliza = null;
        this.cuentaContable = new __WEBPACK_IMPORTED_MODULE_0__cuentaContable_class__["a" /* CuentaContable */]();
        this.centroCosto = new __WEBPACK_IMPORTED_MODULE_1__centroCosto_class__["a" /* CentroCosto */]();
        this.descripcion = null;
        this.monto = 0;
        this.montoIVA = 0;
        this.tipoIVA = false;
        this.tipo = false;
    }
    return PPoliza;
}());

// 0% = false, 16% = true;
// Cargo = false, Abono = true;


/***/ }),

/***/ "./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"containerHeader\">NUEVA PÓLIZA</div>\n    <div class=\"containerBody\">\n        <div class=\"containerBodyTitle\">DATOS DE PÓLIZA</div>\n        <div class=\"containerBodyForm\">\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\n                <div class=\"containerBodyFormColLabel\">Tipo de Póliza</div>\n                <div class=\"containerBodyFormColSelect\">\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[0]\" [lstItems]=\"lstItems[0]\" (outPutItem)=\"fnOutPutItem($event, 0)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\n                <div class=\"containerBodyFormColLabel\">Referencia</div>\n                <div class=\"containerBodyFormColInputs\">\n                    <input [(ngModel)]=\"poliza.referencia\" class=\"containerBodyFormColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPoliza()\">\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 15%;\">\n                <div class=\"containerBodyFormColLabel\">Descripción</div>\n                <div class=\"containerBodyFormColInputs\">\n                    <input [(ngModel)]=\"poliza.descripcion\" class=\"containerBodyFormColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPoliza()\">\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 170px;\">\n                <div class=\"containerBodyFormColLabel\">Fecha</div>\n                <div class=\"containerBodyFormColDate\">\n                    <pq-date-picker [borderInputColor]=\"'1px solid #D8D9DD'\" [fontColor]=\"'#424242'\" [backGroundColor]=\"white\" [disabled]=\"'false'\" [sizeInput]=\"'16px'\" [heightInput]=\"'30px'\" [(date)]=\"poliza.fecha\" dateFormat=\"YYYYMMDD\" (fecha)=\"fnGetFechaImpl($event)\"></pq-date-picker>\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 10%;\">\n                <div class=\"containerBodyFormColLabel\">Empresas del Grupo</div>\n                <div class=\"containerBodyFormColSelect\">\n                    <app-pf-selector [colorSelectedSimple]=\"'#008894'\" [inputHeight]=\"'30px'\" [viewSearch]=\"true\" [defaultItem]=\"defaultItem[1]\" [lstItems]=\"lstItems[1]\" (outPutItem)=\"fnOutPutItem($event, 1)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 10%;\">\n                <div class=\"containerBodyFormColLabel\">&nbsp;</div>\n                <div class=\"containerBodyFormColSelect\">\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[7]\" [lstItems]=\"lstItems[7]\" (outPutItem)=\"fnOutPutItem($event, 7)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 15%;max-width: 15%;\">\n                <div class=\"containerBodyFormColLabel\">{{ labelSelect2 }}</div>\n                <div class=\"containerBodyFormColSelect\">\n                    <app-pf-selector [isDisabled]=\"(lstItems[2] !== undefined && lstItems[2] !== null && lstItems[2].length > 0) ? false : true\" [isOpaque]=\"(lstItems[2] !== undefined && lstItems[2] !== null && lstItems[2].length > 0) ? false : true\"  [inputHeight]=\"'30px'\" [viewSearch]=\"true\" [defaultItem]=\"defaultItem[2]\" [lstItems]=\"lstItems[2]\" (outPutItem)=\"fnOutPutItem($event, 2)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\n                <div class=\"containerBodyFormColLabel\">Folio</div>\n                <div class=\"containerBodyFormColLabelValue\">{{ poliza.folio }}</div>\n            </div>\n        </div>\n        <div class=\"containerBodySubtitle\">AGREGAR CUENTA CONTABLE</div>\n        <div class=\"containerBodyFormColor\">\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 20%;max-width: 20%;\">\n                <div class=\"containerBodyFormColorColLabel\">Cuenta</div>\n                <div class=\"containerBodyFormColorColSelect\">\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[3]\" [isSimpleValue]=\"false\" [placeholder]=\"'Folio, Cuenta'\" [lstItems]=\"lstItems[3]\" [viewSearch]=\"true\" (outPutItem)=\"fnOutPutItem($event, 3)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 20%\">\n                <div class=\"containerBodyFormColorColLabel\">Descripción</div>\n                <div class=\"containerBodyFormColorColInputs\">\n                    <input [(ngModel)]=\"itemDescripcion\" class=\"containerBodyFormColorColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPPoliza()\">\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%\">\n                <div class=\"containerBodyFormColorColLabel\">Monto</div>\n                <div class=\"containerBodyFormColorColInputs\">\n                    <input [(ngModel)]=\"itemMonto\" class=\"containerBodyFormColorColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPPoliza()\" (focus)=\"fnFocusMonto()\" (blur)=\"fnBlurMonto()\" [ngStyle]=\"{'text-align': 'right', 'color': '#008894'}\">\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%;max-width: 10%;\">\n                <div class=\"containerBodyFormColorColLabel\">IVA</div>\n                <div class=\"containerBodyFormColorColSelect\">\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[4]\" [lstItems]=\"lstItems[4]\" (outPutItem)=\"fnOutPutItem($event, 4)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%;max-width: 10%;\">\n                <div class=\"containerBodyFormColorColLabel\">Tipo</div>\n                <div class=\"containerBodyFormColorColSelect\">\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[5]\" [lstItems]=\"lstItems[5]\" (outPutItem)=\"fnOutPutItem($event, 5)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 15%;max-width: 15%;\">\n                <div class=\"containerBodyFormColorColLabel\">Centro de Costos</div>\n                <div class=\"containerBodyFormColorColSelect\">\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[6]\" [lstItems]=\"lstItems[6]\" (outPutItem)=\"fnOutPutItem($event, 6)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 5%\">\n                <div class=\"containerBodyFormColorColLabel\">&nbsp;</div>\n                <div [ngClass]=\"classBtnAdd\" (click)=\"fnAddPPoliza()\">AGREGAR</div>\n            </div>\n        </div>\n        <div class=\"containerBodyTable\">\n            <div class=\"containerBodyTableHeader\">\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\">#</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 20%;text-align: left;\">Cuenta</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 20%;text-align: left;\">Descripción</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;text-align: left;\">Tipo</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 15%;text-align: left;\">Centro de Costos</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">Monto MXN</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">IVA</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">Total</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\">&nbsp;</div>\n            </div>\n            <div class=\"containerBodyTableBody\">\n                <div class=\"containerBodyTableBodyEmpty\" *ngIf=\"poliza.lstPPoliza.length === 0\">NO HAS GENERADO CUENTAS CONTABLES</div>\n                <div class=\"containerBodyTableBodyLst\" *ngIf=\"poliza.lstPPoliza.length > 0\">\n                    <div class=\"containerBodyTableBodyLstRow\" *ngFor=\"let item of poliza.lstPPoliza; let i = index\">\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;\">{{ i + 1 }}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 20%;text-align: left;\"><span class=\"containerBodyTableBodyLstRowColSpan\">{{ item.cuentaContable.descripcionAux + ' ' + item.cuentaContable.descripcionAuxSep + ' '}}</span><span class=\"containerBodyTableBodyLstRowColSpan\">{{ item.cuentaContable.descripcion }}</span></div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 20%;text-align: left;\">{{item.descripcion}}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;text-align: left;\">{{(item.tipo) ? 'Abono' : 'Cargo'}}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 15%;text-align: left;\">{{ item.centroCosto.descripcion }}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ item.monto | acFormatMoney }}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ (item.tipoIVA) ? '16%' : '0%'}}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ (item.monto + item.montoIVA) | acFormatMoney }}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;\" (click)=\"fnDeleteItem(i)\"><img src=\"./assets/Images/polizasEliminar.svg\" alt=\"\" class=\"containerBodyTableBodyLstRowColImg\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"containerBodyTableFooter\">\n                {{ (poliza.lstPPoliza.length === 1) ? '#1 Cuenta Contable' : '#' + poliza.lstPPoliza.length + ' Cuentas Contables' }}\n            </div>\n        </div>\n        <div class=\"containerBodySummary\">\n            <div class=\"containerBodySummaryTitle\">\n                <span class=\"containerBodySummaryTitleSpan\">Totales</span>\n            </div>\n            <div class=\"containerBodySummaryTitle\">\n                <div class=\"containerBodySummarySubtitle\">Subtotal</div>\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 23px;color: #424242;font-weight: 400;\">{{ poliza.monto | acFormatMoney }}</div>\n            </div>\n            <div class=\"containerBodySummaryTitle\">\n                <div class=\"containerBodySummarySubtitle\">IVA</div>\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 23px;color: #008894;font-weight: 400;\">{{ poliza.iva | acFormatMoney }}</div>\n            </div>\n            <div class=\"containerBodySummaryTitle\">\n                <div class=\"containerBodySummarySubtitle\">Total</div>\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 27px;color: #4BA92B;font-weight: 700;\">{{ poliza.total | acFormatMoney }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"containerFooter\">\n        <div class=\"containerFooterBtnAcepted\" (click)=\"fnCancel()\">Cancelar</div>\n        <div [ngClass]=\"classBtnAcept\" (click)=\"fnSave()\">Guardar</div>\n    </div>\n</div>\n\n<div [ngClass]=\"modalPromt\">\n    <div class=\"modalPromtContainer\">\n        <div class=\"modalPromtContainerHeader\">PROQUIFA NET</div>\n        <div class=\"modalPromtContainerBody\">\n            <img src=\"./assets/Images/polizasAlerta.svg\" alt=\"Alerta!\" class=\"modalPromtContainerBodyImg\">\n            <span class=\"modalPromtContainerBodySpan\">¿Estás seguro que deseas salir sin guardar los cambios?</span>\n        </div>\n        <div class=\"modalPromtContainerFooter\">\n            <div class=\"modalPromtContainerFooterBtn\" (click)=\"fnClosePrompt()\">CANCELAR</div>\n            <div class=\"modalPromtContainerFooterBtn\" (click)=\"fnViewReturn()\">ACEPTAR</div>\n        </div>\n    </div>\n</div>\n\n<div [ngClass]=\"modalSuccess\">\n    <div class=\"modalPromtContainer\">\n        <div class=\"modalPromtContainerHeader\">PROQUIFA NET</div>\n        <div class=\"modalPromtContainerBody\">\n            <img src=\"./assets/Images/polizasExito.svg\" alt=\"Alerta!\" class=\"modalPromtContainerBodyImg\">\n            <span class=\"modalPromtContainerBodySpan\"><span style=\"font-weight: 700;font-size: 29px;color: #008894;\" >¡Has guardado exitosamente </span><br /> una nueva póliza!</span>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  :host > .container {\n    overflow: scroll;\n    height: calc(100vh - 130px); }\n  :host > .container > .containerHeader {\n      font-family: Novecento;\n      font-size: 25px;\n      color: #424242;\n      font-weight: 400;\n      border-bottom: 2px solid #424242;\n      height: 58px;\n      line-height: 58px;\n      vertical-align: middle;\n      text-indent: 20px; }\n  :host > .container > .containerBody {\n      padding: 20px;\n      min-height: calc(100vh - 300px);\n      overflow: scroll; }\n  :host > .container > .containerBody > .containerBodyTitle {\n        font-family: Novecento;\n        font-size: 20px;\n        color: #424242;\n        font-weight: 700;\n        border-bottom: 1px solid #424242;\n        height: 39px;\n        line-height: 39px;\n        vertical-align: middle; }\n  :host > .container > .containerBody > .containerBodyForm {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        height: 80px;\n        margin: 20px 0px; }\n  :host > .container > .containerBody > .containerBodyForm > .containerBodyFormCol {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center; }\n  :host > .container > .containerBody > .containerBodyForm > .containerBodyFormCol > .containerBodyFormColInputs > input.containerBodyFormColInput {\n            width: 100%;\n            background: #FFFFFF;\n            border: 1px solid #D8D9DD;\n            height: 30px;\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400;\n            padding: 0 5px;\n            outline: none; }\n  :host > .container > .containerBody > .containerBodyForm > .containerBodyFormCol > .containerBodyFormColLabelValue {\n            font-size: 23px;\n            color: #008894;\n            font-weight: 700; }\n  :host > .container > .containerBody > .containerBodyForm > .containerBodyFormCol > .containerBodyFormColLabel {\n            width: 100%;\n            font-size: 16px;\n            height: 16px;\n            color: #424242;\n            font-weight: 400;\n            padding-bottom: 5px;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            overflow: hidden; }\n  :host > .container > .containerBody > .containerBodyForm > .containerBodyFormCol > .containerBodyFormColSelect {\n            width: 100%;\n            position: relative; }\n  :host > .container > .containerBody > .containerBodySubtitle {\n        font-size: 20px;\n        color: #424242;\n        font-weight: 700;\n        font-family: Novecento;\n        margin: 30px 0px 10px 0px; }\n  :host > .container > .containerBody > .containerBodyFormColor {\n        background: rgba(0, 136, 148, 0.07);\n        height: 113px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n        padding: 0px 15px;\n        margin: 15px 0px; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          margin: 0px 10px; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColInputs > .containerBodyFormColorColInput {\n            width: 100%;\n            background: #FFFFFF;\n            border: 1px solid #D8D9DD;\n            height: 30px;\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400;\n            padding: 0 5px;\n            outline: none; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColLabel {\n            width: 100%;\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400;\n            padding-bottom: 5px; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColSelect {\n            width: 100%;\n            position: relative; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColBtnDisabled {\n            width: 170px;\n            height: 30px;\n            background: #C2C3C9;\n            font-family: Novecento;\n            font-size: 21px;\n            color: #FFFFFF;\n            font-weight: 700;\n            line-height: 30px;\n            vertical-align: middle;\n            text-align: center;\n            pointer-events: none;\n            padding-bottom: 3px; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColBtnEnabled {\n            width: 170px;\n            height: 30px;\n            background: #4BA92B;\n            font-family: Novecento;\n            font-size: 21px;\n            color: #FFFFFF;\n            font-weight: 700;\n            line-height: 30px;\n            vertical-align: middle;\n            text-align: center;\n            cursor: pointer;\n            -webkit-transition: all 0.2 ease-in-out;\n            transition: all 0.2 ease-in-out;\n            padding-bottom: 3px; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColBtnEnabled:hover {\n            opacity: 0.5; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColBtnEnabled:active {\n            opacity: 0.75; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableHeader {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n        border-bottom: 1px solid #424242;\n        padding-bottom: 5px;\n        height: 25px; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableHeader > .containerBodyTableHeaderCol {\n          font-weight: 700;\n          font-size: 15px;\n          color: #424242;\n          text-align: center; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyEmpty {\n        font-family: Novecento;\n        font-size: 36px;\n        color: #D8D9DD;\n        font-weight: 700;\n        text-align: center;\n        min-height: calc(100vh - 876px);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        margin: 15px 0px; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst {\n        min-height: calc(100vh - 876px);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n          border-bottom: 1px solid #ECEEF0;\n          height: 49px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow > .containerBodyTableBodyLstRowCol {\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400;\n            text-align: center; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow > .containerBodyTableBodyLstRowCol > .containerBodyTableBodyLstRowColImg {\n              width: 15px;\n              height: 15px;\n              cursor: pointer;\n              -webkit-transition: all 0.2s ease-in-out;\n              transition: all 0.2s ease-in-out; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow > .containerBodyTableBodyLstRowCol > .containerBodyTableBodyLstRowColImg:hover {\n              opacity: 0.5; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow > .containerBodyTableBodyLstRowCol > .containerBodyTableBodyLstRowColImg:active {\n              opacity: 0.75; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow > .containerBodyTableBodyLstRowCol > .containerBodyTableBodyLstRowColSpan:nth-of-type(1) {\n              font-size: 16px;\n              color: #008894;\n              font-weight: 400; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow:hover {\n          background: #ECEEF0; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableFooter {\n        font-size: 14px;\n        color: #424242;\n        font-weight: 400;\n        text-align: center;\n        height: 45px;\n        line-height: 45px;\n        vertical-align: middle;\n        border-top: 1px solid #424242; }\n  :host > .container > .containerBody > .containerBodySummary {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n  :host > .container > .containerBody > .containerBodySummary > .containerBodySummaryTitle {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          width: 25%;\n          padding: 5px 0px;\n          max-width: 400px; }\n  :host > .container > .containerBody > .containerBodySummary > .containerBodySummaryTitle > .containerBodySummaryTitleSpan {\n            width: 100%;\n            font-family: Novecento;\n            font-weight: 700;\n            font-size: 23px;\n            color: #424242;\n            text-align: right; }\n  :host > .container > .containerBody > .containerBodySummary > .containerBodySummaryTitle > .containerBodySummarySubtitle {\n            width: 100%;\n            font-size: 23px;\n            color: #424242;\n            font-weight: 400; }\n  :host > .container > .containerBody > .containerBodySummary > .containerBodySummaryTitle > .containerBodySummaryAmount {\n            width: 100%;\n            text-align: right; }\n  :host > .container > .containerFooter {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 68px;\n      margin: 0px 20px;\n      border-top: 2px solid #424242; }\n  :host > .container > .containerFooter > .containerFooterBtnDisabled {\n        width: 170px;\n        height: 30px;\n        background: #C2C3C9;\n        font-family: Novecento;\n        font-size: 21px;\n        color: #FFFFFF;\n        font-weight: 700;\n        line-height: 30px;\n        vertical-align: middle;\n        text-align: center;\n        pointer-events: none;\n        padding-bottom: 3px; }\n  :host > .container > .containerFooter > .containerFooterBtnAcepted {\n        width: 170px;\n        height: 30px;\n        background: #008894;\n        font-family: Novecento;\n        font-size: 21px;\n        color: #FFFFFF;\n        font-weight: 700;\n        line-height: 30px;\n        vertical-align: middle;\n        text-align: center;\n        cursor: pointer;\n        -webkit-transition: all 0.2 ease-in-out;\n        transition: all 0.2 ease-in-out;\n        padding-bottom: 3px; }\n  :host > .container > .containerFooter > .containerFooterBtnAcepted:hover {\n        opacity: 0.5; }\n  :host > .container > .containerFooter > .containerFooterBtnAcepted:active {\n        opacity: 0.75; }\n  :host > .modalPromt {\n    z-index: 3;\n    display: none;\n    padding-top: 100px;\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background: rgba(255, 255, 255, 0.9);\n    -webkit-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out; }\n  :host > .modalPromt > .modalPromtContainer {\n      margin: auto;\n      background-color: #fff;\n      position: absolute;\n      outline: 0;\n      width: 580px;\n      height: 320px;\n      background: #FFFFFF;\n      border: 1px solid #008894;\n      border-radius: 22px;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      padding: 20px;\n      overflow: hidden; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerHeader {\n        background: #008894;\n        margin: -20px;\n        height: 55px;\n        font-family: Novecento;\n        font-size: 26px;\n        color: #FFFFFF;\n        font-weight: 700;\n        text-align: center;\n        line-height: 55px; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerBody {\n        height: 245px;\n        margin-top: 20px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerBody > .modalPromtContainerBodySpan {\n          padding: 15px 100px 0px 100px;\n          text-align: center;\n          font-size: 29px;\n          color: #001615; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerFooter {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerFooter > .modalPromtContainerFooterBtn {\n          background: #008894;\n          width: 170px;\n          height: 30px;\n          line-height: 30px;\n          text-align: center;\n          font-family: Novecento;\n          font-size: 21px;\n          color: #FFFFFF;\n          font-weight: 700;\n          cursor: pointer;\n          -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerFooter > .modalPromtContainerFooterBtn:hover {\n          opacity: 0.5; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerFooter > .modalPromtContainerFooterBtn:active {\n          opacity: 0.75; }\n  :host > .openModal {\n    display: block; }\n"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarPolizaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_poliza_class__ = __webpack_require__("./src/app/class/catalogo/poliza.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_option_class__ = __webpack_require__("./src/app/class/option.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__ = __webpack_require__("./src/app/class/catalogo/ppoliza.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_accounting__ = __webpack_require__("./node_modules/accounting/accounting.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_accounting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_accounting__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AgregarPolizaComponent = /** @class */ (function () {
    function AgregarPolizaComponent(router, serviceCatalogo, coreContainer) {
        this.router = router;
        this.serviceCatalogo = serviceCatalogo;
        this.coreContainer = coreContainer;
        /*
    
        Ingreso =   Emite: Grupo Proquifa, Recibe: Clientes;
        Egreso  =   Emite: Proveedores, Recibo Grupo Proquifa
        Diario  =   Emite: Grupo Proquifa, Recibe, Cliente/Proveedor/Ninguno
    
        */
        this.poliza = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_poliza_class__["a" /* Poliza */]();
        this.polizaAux = null;
        this.isPolizaValid = new Array(6).fill(false);
        this.lstCuentaCont = [];
        this.classBtnAcept = 'containerFooterBtnDisabled';
        this.classBtnAdd = 'containerBodyFormColorColBtnDisabled';
        this.itemDescripcion = '';
        this.itemMonto = '';
        this.cantSelects = 8;
        this.lstItems = new Array(this.cantSelects).fill(null);
        this.defaultItem = new Array(this.cantSelects).fill({ id: 0, texto: 'Seleccionar' });
        this.lstEmpresas = new Array();
        this.lstProveedores = new Array();
        this.lstClientes = new Array();
        this.ppoliza = new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */]();
        this.isPPolizaValid = new Array(6).fill(false);
        this.lstTipo = [
            { id: 1, texto: 'Ingreso' },
            { id: 2, texto: 'Engreso' },
            { id: 3, texto: 'Diario' }
        ];
        this.lstTipoPP = [
            { id: 0, texto: 'Cargo' },
            { id: 1, texto: 'Abono' }
        ];
        this.lstIVA = [
            { id: 0, texto: '0%' },
            { id: 1, texto: '16%' }
        ];
        this.lstNCliProv = [
            { id: 1, texto: 'Ninguno' },
            { id: 2, texto: 'Clientes' },
            { id: 3, texto: 'Proveedores' }
        ];
        this.labelSelect2 = null;
        this.isDiff = true;
        this.modalPromt = 'modalPromt';
        this.modalSuccess = 'modalPromt';
        /*
    
        Prefijo
        Tipo
        Año
        XXXXX
    
        */
        this.folio = new Array(4).fill('');
    }
    AgregarPolizaComponent.prototype.ngOnInit = function () {
        this.coreContainer.openModal(2);
        this.folio[2] = this.poliza.fechaDate.getFullYear().toString();
        this.lstItems[0] = this.lstTipo;
        this.lstItems[4] = this.lstIVA;
        this.lstItems[5] = this.lstTipoPP;
        this.lstItems[7] = this.lstNCliProv;
        this.fnGetInfo(0);
        this.polizaAux = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_poliza_class__["a" /* Poliza */](), this.poliza);
    };
    AgregarPolizaComponent.prototype.fnGetFolio = function (lstFolios) {
        console.log('fnGetFolio', lstFolios);
        if (lstFolios !== undefined && lstFolios !== null && lstFolios.length > 0) {
            for (var _i = 0, lstFolios_1 = lstFolios; _i < lstFolios_1.length; _i++) {
                var item = lstFolios_1[_i];
                if (item.nombre === this.folio[1]) {
                    var nFolio = Object.assign(item.valor3 + 1);
                    if (nFolio < 10) {
                        this.folio[3] = '0000' + nFolio;
                    }
                    if (nFolio > 9 && nFolio < 100) {
                        this.folio[3] = '000' + nFolio;
                    }
                    if (nFolio > 99 && nFolio < 1000) {
                        this.folio[3] = '00' + nFolio;
                    }
                    if (nFolio > 9999 && nFolio < 10000) {
                        this.folio[3] = '0' + nFolio;
                    }
                    if (nFolio > 99999) {
                        this.folio[3] = nFolio;
                    }
                }
                break;
            }
            this.poliza.folio = this.folio[0] + '-' + this.folio[1] + '-' + this.folio[2] + '-' + this.folio[3];
        }
        else {
            this.poliza.folio = 'N/D';
        }
    };
    AgregarPolizaComponent.prototype.fnCancel = function () {
        if (this.isDiff) {
            this.fnOpenPrompt();
        }
        else {
            this.fnViewReturn();
        }
    };
    AgregarPolizaComponent.prototype.fnOpenPrompt = function () {
        this.modalPromt = 'modalPromt openModal';
    };
    AgregarPolizaComponent.prototype.fnClosePrompt = function () {
        this.modalPromt = 'modalPromt';
    };
    AgregarPolizaComponent.prototype.ngDoCheck = function () {
        if (JSON.stringify(this.poliza) !== JSON.stringify(this.polizaAux)) {
            this.isDiff = true;
        }
        else {
            this.isDiff = false;
        }
    };
    AgregarPolizaComponent.prototype.fnUpdateAmounts = function () {
        this.poliza.monto = 0;
        this.poliza.iva = 0;
        this.poliza.total = 0;
        for (var _i = 0, _a = this.poliza.lstPPoliza; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.tipo) {
                this.poliza.monto += item.monto;
                this.poliza.iva += item.montoIVA;
            }
            else {
                this.poliza.monto -= item.monto;
                this.poliza.iva -= item.montoIVA;
            }
        }
        this.poliza.total = this.poliza.monto + this.poliza.iva;
        this.fnValidPoliza();
    };
    AgregarPolizaComponent.prototype.fnDeleteItem = function (i) {
        this.poliza.lstPPoliza.splice(i, 1);
        this.fnUpdateAmounts();
    };
    AgregarPolizaComponent.prototype.fnValidPoliza = function () {
        console.log('fnValidPoliza');
        if (this.poliza.referencia !== '' && this.poliza.descripcion !== '' && this.poliza.fecha !== null) {
            this.isPolizaValid[1] = true;
            this.isPolizaValid[2] = true;
            this.isPolizaValid[3] = true;
        }
        else {
            this.isPolizaValid[1] = false;
            this.isPolizaValid[2] = false;
            this.isPolizaValid[3] = false;
        }
        var x = 0;
        for (var _i = 0, _a = this.isPolizaValid; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                x++;
            }
            else {
                break;
            }
        }
        console.log('x ==>', x);
        if (x === 6) {
            this.poliza.folio = this.folio[0] + '-' + this.folio[1] + '-' + this.folio[2] + '-' + this.folio[3];
            console.log('lstPPoliza ==>', this.poliza.lstPPoliza);
            console.log('total ==>', this.poliza.total);
            this.classBtnAcept = (this.poliza.lstPPoliza !== undefined && this.poliza.lstPPoliza !== null && this.poliza.lstPPoliza.length > 0 && this.poliza.total === 0) ? 'containerFooterBtnAcepted' : 'containerFooterBtnDisabled';
        }
        else {
            this.classBtnAcept = 'containerFooterBtnDisabled';
        }
    };
    AgregarPolizaComponent.prototype.fnValidPPoliza = function () {
        this.isPPolizaValid[0] = (this.itemDescripcion !== '') ? true : false;
        this.isPPolizaValid[1] = (__WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto) > 0) ? true : false;
        var x = 0;
        for (var _i = 0, _a = this.isPPolizaValid; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                x++;
            }
            else {
                break;
            }
        }
        this.classBtnAdd = (x === 6) ? 'containerBodyFormColorColBtnEnabled' : 'containerBodyFormColorColBtnDisabled';
        this.fnValidPoliza();
    };
    AgregarPolizaComponent.prototype.fnBlurMonto = function () {
        this.itemMonto = __WEBPACK_IMPORTED_MODULE_7_accounting__["formatMoney"](this.itemMonto);
    };
    AgregarPolizaComponent.prototype.fnFocusMonto = function () {
        if (this.itemMonto !== '') {
            this.itemMonto = __WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto);
        }
    };
    AgregarPolizaComponent.prototype.fnAddPPoliza = function () {
        if (this.poliza.lstPPoliza !== undefined && this.poliza.lstPPoliza !== null) {
            this.ppoliza.monto = __WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto);
            this.ppoliza.montoIVA = (this.ppoliza.tipoIVA) ? this.ppoliza.monto * 0.16 : 0;
            this.ppoliza.descripcion = this.itemDescripcion;
            this.poliza.lstPPoliza.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */](), this.ppoliza));
            this.ppoliza = new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */]();
            this.itemDescripcion = '';
            this.itemMonto = '';
            this.isPPolizaValid.fill(false);
            var lstAux = Object.assign([], [this.lstItems[3], this.lstItems[4], this.lstItems[5], this.lstItems[6]]);
            this.lstItems[3] = null;
            this.lstItems[4] = null;
            this.lstItems[5] = null;
            this.lstItems[6] = null;
            this.lstItems[3] = Object.assign([], lstAux[0]);
            this.lstItems[4] = Object.assign([], lstAux[1]);
            this.lstItems[5] = Object.assign([], lstAux[2]);
            this.lstItems[6] = Object.assign([], lstAux[3]);
            this.classBtnAdd = 'containerBodyFormColorColBtnDisabled';
        }
        else {
            this.poliza.lstPPoliza = [];
            this.fnAddPPoliza();
        }
        this.fnUpdateAmounts();
    };
    AgregarPolizaComponent.prototype.fnGetInfo = function (opc) {
        var _this = this;
        switch (opc) {
            case 0:
                this.serviceCatalogo.obtenerEmpresasContabilidad().subscribe(function (resp) {
                    console.log('obtenerEmpresasContabilidad', resp);
                    _this.lstEmpresas = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (item.activo) {
                                var opt = {
                                    id: item.llave,
                                    texto: item.valor,
                                    texto1: item.valor,
                                    aux: item
                                };
                                _this.lstEmpresas.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                            }
                        }
                    }
                    _this.lstItems[1] = Object.assign([], _this.lstEmpresas);
                    _this.fnGetInfo(1);
                }, function (error) {
                    _this.fnGetInfo(1);
                    console.log('Error obtenerEmpresas', error);
                });
                break;
            case 1:
                this.serviceCatalogo.obtenerProveedoresCuentasContables('').subscribe(function (resp) {
                    console.log('obtenerProveedoresCuentasContables', resp);
                    _this.lstProveedores = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.llave,
                                texto: item.nombre
                            };
                            _this.lstProveedores.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    _this.fnGetInfo(2);
                }, function (error) {
                    _this.fnGetInfo(2);
                    console.log('Error obtenerProveedoresCuentasContables', error);
                });
                break;
            case 2:
                this.serviceCatalogo.obtenerClientesCuentasContables('').subscribe(function (resp) {
                    console.log('obtenerClientesCuentasContables', resp);
                    _this.lstClientes = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.llave,
                                texto: item.nombre
                            };
                            _this.lstClientes.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    _this.fnGetInfo(4);
                }, function (error) {
                    _this.fnGetInfo(4);
                    console.log('Error obtenerClientesCuentasContables', error);
                });
                break;
            case 3:
                this.serviceCatalogo.obtenerCuentasContablesEmpresa(this.poliza.empresa.idEmpresa).subscribe(function (resp) {
                    console.log('obtenerCuentasContables', resp);
                    _this.lstItems[3] = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        var lstAux1 = [];
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var nivel = null;
                            var nivel2 = null;
                            var nivel3 = null;
                            switch (item.nivel) {
                                case 1:
                                    nivel = item.nivel1 + '';
                                    break;
                                case 2:
                                    nivel2 = null;
                                    if (item.nivel2 < 10) {
                                        nivel2 = '00' + item.nivel2;
                                    }
                                    else if (item.nivel2 > 9 && item.nivel2 < 100) {
                                        nivel2 = '0' + item.nivel2;
                                    }
                                    else {
                                        nivel2 = item.nivel2;
                                    }
                                    nivel = item.nivel1 + '.' + nivel2;
                                    break;
                                case 3:
                                    nivel2 = null;
                                    if (item.nivel2 < 10) {
                                        nivel2 = '00' + item.nivel2;
                                    }
                                    else if (item.nivel2 > 9 && item.nivel2 < 100) {
                                        nivel2 = '0' + item.nivel2;
                                    }
                                    else {
                                        nivel2 = item.nivel2;
                                    }
                                    nivel3 = null;
                                    if (item.nivel3 < 10) {
                                        nivel3 = '00' + item.nivel3;
                                    }
                                    else if (item.nivel3 > 9 && item.nivel3 < 100) {
                                        nivel3 = '0' + item.nivel3;
                                    }
                                    else {
                                        nivel3 = item.nivel3;
                                    }
                                    nivel = item.nivel1 + '.' + nivel2 + '.' + nivel3;
                                    break;
                            }
                            var opt = {
                                id: item.idCuentaContable,
                                texto: nivel,
                                texto1: item.descripcion,
                                separador: '\u00B7',
                                aux: (item.nivel === 1) ? true : false
                            };
                            lstAux1.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                        _this.lstItems[3] = Object.assign(new Array(), lstAux1);
                    }
                }, function (error) {
                    console.log('Error obtenerCuentasContables', error);
                });
                break;
            case 4:
                this.serviceCatalogo.obtenerLstCentroCostos().subscribe(function (resp) {
                    console.log('obtenerLstCentroCostos', resp);
                    _this.lstItems[6] = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.idCentroCosto,
                                texto: item.descripcion
                            };
                            _this.lstItems[6].push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    setTimeout(function () {
                        _this.coreContainer.closeModal(2);
                    }, 1500);
                }, function (error) {
                    setTimeout(function () {
                        _this.coreContainer.closeModal(2);
                    }, 1500);
                    console.log('Error obtenerLstCentroCostos', error);
                });
                break;
        }
    };
    AgregarPolizaComponent.prototype.fnGetFechaImpl = function ($event) {
        this.fnValidPoliza();
    };
    AgregarPolizaComponent.prototype.fnOutPutItem = function ($event, opc) {
        console.log('fnOutPutItem', $event, opc);
        switch (opc) {
            case 0:
                this.poliza.proveedor = null;
                this.poliza.cliente = null;
                this.poliza.empresa = null;
                this.poliza.folio = 'N/D';
                this.poliza.tipo = $event.id;
                this.defaultItem[1] = { id: 0, texto: 'Seleccionar' };
                this.defaultItem[2] = { id: 0, texto: 'Seleccionar' };
                this.lstItems[2] = null;
                this.defaultItem[7] = { id: 0, texto: 'Seleccionar' };
                this.folio[1] = ($event.id === 1) ? 'I' : ($event.id === 2) ? 'E' : 'D';
                this.isPolizaValid[0] = true;
                this.isPolizaValid[4] = false;
                this.isPolizaValid[5] = false;
                this.fnValidPoliza();
                break;
            case 1:
                this.isPolizaValid[4] = ($event.texto !== 'Seleccionar') ? true : false;
                if ($event.id > 0) {
                    this.poliza.empresa = {
                        idEmpresa: $event.id
                    };
                    this.folio[0] = $event.aux.nombre;
                    this.fnGetFolio($event.aux.lstFoliosPoliza);
                    this.fnGetInfo(3);
                }
                this.fnValidPoliza();
                break;
            case 2:
                this.isPolizaValid[5] = ($event.texto !== 'Seleccionar') ? true : false;
                if ($event.id > 0) {
                    switch (this.tipoObjeto.id) {
                        case 1:
                            this.poliza.proveedor = null;
                            this.poliza.cliente = null;
                            break;
                        case 2:
                            this.poliza.cliente = {
                                idCliente: $event.id
                            };
                            break;
                        case 3:
                            this.poliza.proveedor = {
                                idProveedor: $event.id
                            };
                            break;
                    }
                    this.fnValidPoliza();
                }
                break;
            case 3:
                this.ppoliza.cuentaContable.idCuentaContable = $event.id;
                this.ppoliza.cuentaContable.descripcionAux = $event.texto;
                this.ppoliza.cuentaContable.descripcion = $event.texto1;
                this.ppoliza.cuentaContable.descripcionAuxSep = $event.separador;
                this.isPPolizaValid[2] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 4:
                this.ppoliza.tipoIVA = ($event.id === 0) ? false : true;
                this.isPPolizaValid[3] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 5:
                this.ppoliza.tipo = ($event.id === 0) ? false : true;
                this.isPPolizaValid[4] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 6:
                this.ppoliza.centroCosto.idCentroCosto = $event.id;
                this.ppoliza.centroCosto.descripcion = $event.texto;
                this.isPPolizaValid[5] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 7:
                if ($event.id > 0) {
                    this.tipoObjeto = $event;
                    switch ($event.id) {
                        case 1:
                            this.labelSelect2 = null;
                            this.lstItems[2] = null;
                            break;
                        case 2:
                            this.labelSelect2 = 'Clientes';
                            this.lstItems[2] = Object.assign([], this.lstClientes);
                            break;
                        case 3:
                            this.labelSelect2 = 'Proveedores';
                            this.lstItems[2] = Object.assign([], this.lstProveedores);
                            break;
                    }
                }
                break;
        }
    };
    AgregarPolizaComponent.prototype.fnViewReturn = function () {
        this.router.navigate(['/protected/contabilidad/polizas']);
    };
    AgregarPolizaComponent.prototype.fnSave = function () {
        var _this = this;
        console.log('Poliza:', JSON.stringify(this.poliza));
        this.coreContainer.openModal(2);
        this.serviceCatalogo.agregarPoliza(this.poliza).subscribe(function (resp) {
            console.log('agregarPoliza', resp.current);
            if (resp.current.idPoliza > 0) {
                setTimeout(function () {
                    _this.coreContainer.closeModal(2);
                    _this.modalSuccess = 'modalPromt openModal';
                }, 500);
                setTimeout(function () {
                    _this.modalSuccess = 'modalPromt';
                    _this.fnViewReturn();
                }, 3500);
            }
        }, function (error) {
            console.log('Error agregarPoliza', error);
            setTimeout(function () {
                _this.coreContainer.closeModal(2);
            }, 1500);
        });
    };
    AgregarPolizaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-agregar-poliza',
            template: __webpack_require__("./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.html"),
            styles: [__webpack_require__("./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], AgregarPolizaComponent);
    return AgregarPolizaComponent;
}());



/***/ }),

/***/ "./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"containerHeader\">EDITAR PÓLIZA</div>\n    <div class=\"containerBody\">\n        <div class=\"containerBodyGralData\">\n            <div class=\"containerBodyGralDataTitle\">{{title}}</div>\n            <div class=\"containerBodyGralDataSubtitles\">\n                <span class=\"containerBodyGralDataSubtitlesSpan\">{{poliza.folio}}&nbsp;&middot;&nbsp;</span>\n                <span class=\"containerBodyGralDataSubtitlesSpan\">Fecha de Referencia:&nbsp;{{poliza.fecha}}&nbsp;&middot;&nbsp;</span>\n                <span class=\"containerBodyGralDataSubtitlesSpan\">Tipo:&nbsp;{{(poliza.tipo === 1) ? 'Ingreso' : (poliza.tipo === 2) ? 'Egreso' : 'Diario'}}&nbsp;&middot;&nbsp;</span>\n                <span class=\"containerBodyGralDataSubtitlesSpan\">{{poliza.total | acFormatMoney}}</span>\n            </div>\n        </div>\n        <div class=\"containerBodyTitle\">DATOS DE PÓLIZA</div>\n        <div class=\"containerBodyForm\">\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\n                <div class=\"containerBodyFormColLabel\">Tipo de Póliza</div>\n                <div class=\"containerBodyFormColSelect\">\n                    <app-pf-selector [defaultItem]=\"defaultItem[0]\" [lstItems]=\"lstItems[0]\" (outPutItem)=\"fnOutPutItem($event, 0)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\n                <div class=\"containerBodyFormColLabel\">Referencia</div>\n                <div class=\"containerBodyFormColInputs\">\n                    <input [(ngModel)]=\"poliza.referencia\" class=\"containerBodyFormColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPoliza()\">\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 15%;\">\n                <div class=\"containerBodyFormColLabel\">Descripción</div>\n                <div class=\"containerBodyFormColInputs\">\n                    <input [(ngModel)]=\"poliza.descripcion\" class=\"containerBodyFormColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPoliza()\">\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 170px;\">\n                <div class=\"containerBodyFormColLabel\">Fecha</div>\n                <div class=\"containerBodyFormColDate\">\n                    <pq-date-picker [borderInputColor]=\"'1px solid #D8D9DD'\" [fontColor]=\"'#424242'\" [backGroundColor]=\"white\" [disabled]=\"'false'\" [sizeInput]=\"'16px'\" [heightInput]=\"'30px'\" [(date)]=\"poliza.fecha\" dateFormat=\"YYYYMMDD\" (fecha)=\"fnGetFechaImpl($event)\"></pq-date-picker>\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 10%;\">\n                <div class=\"containerBodyFormColLabel\">Empresas del Grupo</div>\n                <div class=\"containerBodyFormColSelect\">\n                    <app-pf-selector [colorSelectedSimple]=\"'#008894'\" [inputHeight]=\"'30px'\" [viewSearch]=\"true\" [defaultItem]=\"defaultItem[1]\" [lstItems]=\"lstItems[1]\" (outPutItem)=\"fnOutPutItem($event, 1)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 10%;\">\n                <div class=\"containerBodyFormColLabel\">&nbsp;</div>\n                <div class=\"containerBodyFormColSelect\">\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[7]\" [lstItems]=\"lstItems[7]\" (outPutItem)=\"fnOutPutItem($event, 7)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 15%;max-width: 15%;\">\n                <div class=\"containerBodyFormColLabel\">{{ labelSelect2 }}</div>\n                <div class=\"containerBodyFormColSelect\">\n                    <app-pf-selector [isDisabled]=\"(lstItems[2] !== undefined && lstItems[2] !== null && lstItems[2].length > 0) ? false : true\" [isOpaque]=\"(lstItems[2] !== undefined && lstItems[2] !== null && lstItems[2].length > 0) ? false : true\" [inputHeight]=\"'30px'\" [viewSearch]=\"true\" [defaultItem]=\"defaultItem[2]\" [lstItems]=\"lstItems[2]\" (outPutItem)=\"fnOutPutItem($event, 2)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\n                <div class=\"containerBodyFormColLabel\">Folio</div>\n                <div class=\"containerBodyFormColLabelValue\">{{ poliza.folio }}</div>\n            </div>\n        </div>\n        <div class=\"containerBodySubtitle\">AGREGAR CUENTA CONTABLE</div>\n        <div class=\"containerBodyFormColor\">\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 20%;max-width: 20%;\">\n                <div class=\"containerBodyFormColorColLabel\">Cuenta</div>\n                <div class=\"containerBodyFormColorColSelect\">\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[3]\" [isSimpleValue]=\"false\" [placeholder]=\"'Folio, Cuenta'\" [lstItems]=\"lstItems[3]\" [viewSearch]=\"true\" (outPutItem)=\"fnOutPutItem($event, 3)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 20%\">\n                <div class=\"containerBodyFormColorColLabel\">Descripción</div>\n                <div class=\"containerBodyFormColorColInputs\">\n                    <input [(ngModel)]=\"itemDescripcion\" class=\"containerBodyFormColorColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPPoliza()\">\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%\">\n                <div class=\"containerBodyFormColorColLabel\">Monto</div>\n                <div class=\"containerBodyFormColorColInputs\">\n                    <input [(ngModel)]=\"itemMonto\" class=\"containerBodyFormColorColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPPoliza()\" (focus)=\"fnFocusMonto()\" (blur)=\"fnBlurMonto()\">\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%;max-width: 10%;\">\n                <div class=\"containerBodyFormColorColLabel\">IVA</div>\n                <div class=\"containerBodyFormColorColSelect\">\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[4]\" [lstItems]=\"lstItems[4]\" (outPutItem)=\"fnOutPutItem($event, 4)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%;max-width: 10%;\">\n                <div class=\"containerBodyFormColorColLabel\">Tipo</div>\n                <div class=\"containerBodyFormColorColSelect\">\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[5]\" [lstItems]=\"lstItems[5]\" (outPutItem)=\"fnOutPutItem($event, 5)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 15%;max-width: 15%;\">\n                <div class=\"containerBodyFormColorColLabel\">Centro de Costos</div>\n                <div class=\"containerBodyFormColorColSelect\">\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[6]\" [lstItems]=\"lstItems[6]\" (outPutItem)=\"fnOutPutItem($event, 6)\"></app-pf-selector>\n                </div>\n            </div>\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 5%\">\n                <div class=\"containerBodyFormColorColLabel\">&nbsp;</div>\n                <div [ngClass]=\"classBtnAdd\" (click)=\"fnAddPPoliza()\">AGREGAR</div>\n            </div>\n        </div>\n        <div class=\"containerBodyTable\">\n            <div class=\"containerBodyTableHeader\">\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\">#</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 20%;text-align: left;\">Cuenta</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 20%;text-align: left;\">Descripción</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;text-align: left;\">Tipo</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 15%;text-align: left;\">Centro de Costos</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">Monto MXN</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">IVA</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">Total</div>\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\">&nbsp;</div>\n            </div>\n            <div class=\"containerBodyTableBody\">\n                <div class=\"containerBodyTableBodyEmpty\" *ngIf=\"poliza.lstPPoliza.length === 0\">NO HAS GENERADO CUENTAS CONTABLES</div>\n                <div class=\"containerBodyTableBodyLst\" *ngIf=\"poliza.lstPPoliza.length > 0\">\n                    <div class=\"containerBodyTableBodyLstRow\" *ngFor=\"let item of poliza.lstPPoliza; let i = index\">\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;\">{{ i + 1 }}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 20%;text-align: left;\"><span class=\"containerBodyTableBodyLstRowColSpan\">{{ item.cuentaContable.descripcionAux + ' ' + item.cuentaContable.descripcionAuxSep + ' '}}</span><span class=\"containerBodyTableBodyLstRowColSpan\">{{ item.cuentaContable.descripcion }}</span></div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 20%;text-align: left;\">{{item.descripcion}}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;text-align: left;\">{{(item.tipo) ? 'Abono' : 'Cargo'}}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 15%;text-align: left;\">{{ item.centroCosto.descripcion }}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ item.monto | acFormatMoney }}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ (item.tipoIVA) ? '16%' : '0%'}}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ (item.monto + item.montoIVA) | acFormatMoney }}</div>\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;\" (click)=\"fnDeleteItem(i)\"><img src=\"./assets/Images/polizasEliminar.svg\" alt=\"\" class=\"containerBodyTableBodyLstRowColImg\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"containerBodyTableFooter\">\n                {{ (poliza.lstPPoliza.length === 1) ? '#1 Cuenta Contable' : '#' + poliza.lstPPoliza.length + ' Cuentas Contables' }}\n            </div>\n        </div>\n        <div class=\"containerBodySummary\">\n            <div class=\"containerBodySummaryTitle\">\n                <span class=\"containerBodySummaryTitleSpan\">Totales</span>\n            </div>\n            <div class=\"containerBodySummaryTitle\">\n                <div class=\"containerBodySummarySubtitle\">Subtotal</div>\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 23px;color: #424242;font-weight: 400;\">{{ poliza.monto | acFormatMoney }}</div>\n            </div>\n            <div class=\"containerBodySummaryTitle\">\n                <div class=\"containerBodySummarySubtitle\">IVA</div>\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 23px;color: #008894;font-weight: 400;\">{{ poliza.iva | acFormatMoney }}</div>\n            </div>\n            <div class=\"containerBodySummaryTitle\">\n                <div class=\"containerBodySummarySubtitle\">Total</div>\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 27px;color: #4BA92B;font-weight: 700;\">{{ poliza.total | acFormatMoney }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"containerFooter\">\n        <div class=\"containerFooterBtnAcepted\" (click)=\"fnCancel()\">Cancelar</div>\n        <div [ngClass]=\"classBtnAcept\" (click)=\"fnSave()\">Guardar</div>\n    </div>\n</div>\n\n<div [ngClass]=\"modalPromt\">\n    <div class=\"modalPromtContainer\">\n        <div class=\"modalPromtContainerHeader\">PROQUIFA NET</div>\n        <div class=\"modalPromtContainerBody\">\n            <img src=\"./assets/Images/polizasAlerta.svg\" alt=\"Alerta!\" class=\"modalPromtContainerBodyImg\">\n            <span class=\"modalPromtContainerBodySpan\">¿Estás seguro que deseas salir sin guardar los cambios?</span>\n        </div>\n        <div class=\"modalPromtContainerFooter\">\n            <div class=\"modalPromtContainerFooterBtn\" (click)=\"fnClosePrompt()\">CANCELAR</div>\n            <div class=\"modalPromtContainerFooterBtn\" (click)=\"fnViewReturn()\">ACEPTAR</div>\n        </div>\n    </div>\n</div>\n\n<div [ngClass]=\"modalSuccess\">\n    <div class=\"modalPromtContainer\">\n        <div class=\"modalPromtContainerHeader\">PROQUIFA NET</div>\n        <div class=\"modalPromtContainerBody\">\n            <img src=\"./assets/Images/polizasExito.svg\" alt=\"Alerta!\" class=\"modalPromtContainerBodyImg\">\n            <span class=\"modalPromtContainerBodySpan\"><span style=\"font-weight: 700;font-size: 29px;color: #008894;\">¡Has guardado exitosamente </span><br /> una nueva póliza!</span>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  :host > .container {\n    overflow: scroll;\n    height: calc(100vh - 130px); }\n  :host > .container > .containerHeader {\n      font-family: Novecento;\n      font-size: 25px;\n      color: #424242;\n      font-weight: 400;\n      border-bottom: 2px solid #424242;\n      height: 58px;\n      line-height: 58px;\n      vertical-align: middle;\n      text-indent: 20px; }\n  :host > .container > .containerBody {\n      padding: 20px;\n      min-height: calc(100vh - 300px);\n      overflow: scroll; }\n  :host > .container > .containerBody > .containerBodyGralData {\n        padding-bottom: 20px;\n        margin-bottom: 20px;\n        border-bottom: 1px solid #424242; }\n  :host > .container > .containerBody > .containerBodyGralData > .containerBodyGralDataTitle {\n          font-family: Novecento;\n          font-weight: 700;\n          font-size: 24px;\n          color: #424242;\n          margin-bottom: 10px; }\n  :host > .container > .containerBody > .containerBodyGralData > .containerBodyGralDataSubtitles > .containerBodyGralDataSubtitlesSpan {\n          font-size: 16px;\n          color: #008894; }\n  :host > .container > .containerBody > .containerBodyGralData > .containerBodyGralDataSubtitles > .containerBodyGralDataSubtitlesSpan:nth-child(2n) {\n          color: #424242; }\n  :host > .container > .containerBody > .containerBodyTitle {\n        font-family: Novecento;\n        font-size: 20px;\n        color: #424242;\n        font-weight: 700;\n        border-bottom: 1px solid #424242;\n        height: 39px;\n        line-height: 39px;\n        vertical-align: middle; }\n  :host > .container > .containerBody > .containerBodyForm {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        height: 80px;\n        margin: 20px 0px; }\n  :host > .container > .containerBody > .containerBodyForm > .containerBodyFormCol {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center; }\n  :host > .container > .containerBody > .containerBodyForm > .containerBodyFormCol > .containerBodyFormColInputs > input.containerBodyFormColInput {\n            width: 100%;\n            background: #FFFFFF;\n            border: 1px solid #D8D9DD;\n            height: 30px;\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400;\n            padding: 0 5px;\n            outline: none; }\n  :host > .container > .containerBody > .containerBodyForm > .containerBodyFormCol > .containerBodyFormColLabelValue {\n            font-size: 23px;\n            color: #008894;\n            font-weight: 700; }\n  :host > .container > .containerBody > .containerBodyForm > .containerBodyFormCol > .containerBodyFormColLabel {\n            width: 100%;\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400;\n            padding-bottom: 5px; }\n  :host > .container > .containerBody > .containerBodyForm > .containerBodyFormCol > .containerBodyFormColSelect {\n            width: 100%;\n            position: relative; }\n  :host > .container > .containerBody > .containerBodySubtitle {\n        font-size: 20px;\n        color: #424242;\n        font-weight: 700;\n        font-family: Novecento;\n        margin: 30px 0px 10px 0px; }\n  :host > .container > .containerBody > .containerBodyFormColor {\n        background: rgba(0, 136, 148, 0.07);\n        height: 113px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n        padding: 0px 15px;\n        margin: 15px 0px; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          margin: 0px 10px; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColInputs > .containerBodyFormColorColInput {\n            width: 100%;\n            background: #FFFFFF;\n            border: 1px solid #D8D9DD;\n            height: 30px;\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400;\n            padding: 0 5px;\n            outline: none; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColLabel {\n            width: 100%;\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400;\n            padding-bottom: 5px; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColSelect {\n            width: 100%;\n            position: relative; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColBtnDisabled {\n            width: 170px;\n            height: 30px;\n            background: #C2C3C9;\n            font-family: Novecento;\n            font-size: 21px;\n            color: #FFFFFF;\n            font-weight: 700;\n            line-height: 30px;\n            vertical-align: middle;\n            text-align: center;\n            pointer-events: none;\n            padding-bottom: 3px; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColBtnEnabled {\n            width: 170px;\n            height: 30px;\n            background: #4BA92B;\n            font-family: Novecento;\n            font-size: 21px;\n            color: #FFFFFF;\n            font-weight: 700;\n            line-height: 30px;\n            vertical-align: middle;\n            text-align: center;\n            cursor: pointer;\n            -webkit-transition: all 0.2 ease-in-out;\n            transition: all 0.2 ease-in-out;\n            padding-bottom: 3px; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColBtnEnabled:hover {\n            opacity: 0.5; }\n  :host > .container > .containerBody > .containerBodyFormColor > .containerBodyFormColorCol > .containerBodyFormColorColBtnEnabled:active {\n            opacity: 0.75; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableHeader {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n        border-bottom: 1px solid #424242;\n        padding-bottom: 5px;\n        height: 25px; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableHeader > .containerBodyTableHeaderCol {\n          font-weight: 700;\n          font-size: 15px;\n          color: #424242;\n          text-align: center; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyEmpty {\n        font-family: Novecento;\n        font-size: 36px;\n        color: #D8D9DD;\n        font-weight: 700;\n        text-align: center;\n        min-height: calc(100vh - 940px);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        margin: 15px 0px; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst {\n        min-height: calc(100vh - 940px);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n          border-bottom: 1px solid #ECEEF0;\n          height: 49px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow > .containerBodyTableBodyLstRowCol {\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400;\n            text-align: center; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow > .containerBodyTableBodyLstRowCol > .containerBodyTableBodyLstRowColImg {\n              width: 15px;\n              height: 15px;\n              cursor: pointer;\n              -webkit-transition: all 0.2s ease-in-out;\n              transition: all 0.2s ease-in-out; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow > .containerBodyTableBodyLstRowCol > .containerBodyTableBodyLstRowColImg:hover {\n              opacity: 0.5; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow > .containerBodyTableBodyLstRowCol > .containerBodyTableBodyLstRowColImg:active {\n              opacity: 0.75; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow > .containerBodyTableBodyLstRowCol > .containerBodyTableBodyLstRowColSpan:nth-of-type(1) {\n              font-size: 16px;\n              color: #008894;\n              font-weight: 400; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyLst > .containerBodyTableBodyLstRow:hover {\n          background: #ECEEF0; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableFooter {\n        font-size: 14px;\n        color: #424242;\n        font-weight: 400;\n        text-align: center;\n        height: 45px;\n        line-height: 45px;\n        vertical-align: middle;\n        border-top: 1px solid #424242; }\n  :host > .container > .containerBody > .containerBodySummary {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n  :host > .container > .containerBody > .containerBodySummary > .containerBodySummaryTitle {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          width: 25%;\n          padding: 5px 0px;\n          max-width: 400px; }\n  :host > .container > .containerBody > .containerBodySummary > .containerBodySummaryTitle > .containerBodySummaryTitleSpan {\n            width: 100%;\n            font-family: Novecento;\n            font-weight: 700;\n            font-size: 23px;\n            color: #424242;\n            text-align: right; }\n  :host > .container > .containerBody > .containerBodySummary > .containerBodySummaryTitle > .containerBodySummarySubtitle {\n            width: 100%;\n            font-size: 23px;\n            color: #424242;\n            font-weight: 400; }\n  :host > .container > .containerBody > .containerBodySummary > .containerBodySummaryTitle > .containerBodySummaryAmount {\n            width: 100%;\n            text-align: right; }\n  :host > .container > .containerFooter {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 68px;\n      margin: 0px 20px;\n      border-top: 2px solid #424242; }\n  :host > .container > .containerFooter > .containerFooterBtnDisabled {\n        width: 170px;\n        height: 30px;\n        background: #C2C3C9;\n        font-family: Novecento;\n        font-size: 21px;\n        color: #FFFFFF;\n        font-weight: 700;\n        line-height: 30px;\n        vertical-align: middle;\n        text-align: center;\n        pointer-events: none;\n        padding-bottom: 3px; }\n  :host > .container > .containerFooter > .containerFooterBtnAcepted {\n        width: 170px;\n        height: 30px;\n        background: #008894;\n        font-family: Novecento;\n        font-size: 21px;\n        color: #FFFFFF;\n        font-weight: 700;\n        line-height: 30px;\n        vertical-align: middle;\n        text-align: center;\n        cursor: pointer;\n        -webkit-transition: all 0.2 ease-in-out;\n        transition: all 0.2 ease-in-out;\n        padding-bottom: 3px; }\n  :host > .container > .containerFooter > .containerFooterBtnAcepted:hover {\n        opacity: 0.5; }\n  :host > .container > .containerFooter > .containerFooterBtnAcepted:active {\n        opacity: 0.75; }\n  :host > .modalPromt {\n    z-index: 3;\n    display: none;\n    padding-top: 100px;\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background: rgba(255, 255, 255, 0.9);\n    -webkit-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out; }\n  :host > .modalPromt > .modalPromtContainer {\n      margin: auto;\n      background-color: #fff;\n      position: absolute;\n      outline: 0;\n      width: 580px;\n      height: 320px;\n      background: #FFFFFF;\n      border: 1px solid #008894;\n      border-radius: 22px;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      padding: 20px;\n      overflow: hidden; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerHeader {\n        background: #008894;\n        margin: -20px;\n        height: 55px;\n        font-family: Novecento;\n        font-size: 26px;\n        color: #FFFFFF;\n        font-weight: 700;\n        text-align: center;\n        line-height: 55px; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerBody {\n        height: 245px;\n        margin-top: 20px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerBody > .modalPromtContainerBodySpan {\n          padding: 15px 100px 0px 100px;\n          text-align: center;\n          font-size: 29px;\n          color: #001615; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerFooter {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerFooter > .modalPromtContainerFooterBtn {\n          background: #008894;\n          width: 170px;\n          height: 30px;\n          line-height: 30px;\n          text-align: center;\n          font-family: Novecento;\n          font-size: 21px;\n          color: #FFFFFF;\n          font-weight: 700;\n          cursor: pointer;\n          -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n          padding-bottom: 3px !important; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerFooter > .modalPromtContainerFooterBtn:hover {\n          opacity: 0.5; }\n  :host > .modalPromt > .modalPromtContainer > .modalPromtContainerFooter > .modalPromtContainerFooterBtn:active {\n          opacity: 0.75; }\n  :host > .openModal {\n    display: block; }\n"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPolizaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_poliza_class__ = __webpack_require__("./src/app/class/catalogo/poliza.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_option_class__ = __webpack_require__("./src/app/class/option.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__ = __webpack_require__("./src/app/class/catalogo/ppoliza.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_accounting__ = __webpack_require__("./node_modules/accounting/accounting.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_accounting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_accounting__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditarPolizaComponent = /** @class */ (function () {
    function EditarPolizaComponent(router, route, serviceCatalogo, coreContainer) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.serviceCatalogo = serviceCatalogo;
        this.coreContainer = coreContainer;
        /*
    
        Ingreso =   Emite: Grupo Proquifa, Recibe: Clientes;
        Egreso  =   Emite: Proveedores, Recibo Grupo Proquifa
        Diario  =   Emite: Grupo Proquifa, Recibe, Cliente/Proveedor/Ninguno
    
        */
        this.poliza = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_poliza_class__["a" /* Poliza */]();
        this.polizaAux = null;
        this.isPolizaValid = new Array(6).fill(false);
        this.lstCuentaCont = [];
        this.classBtnAcept = 'containerFooterBtnDisabled';
        this.classBtnAdd = 'containerBodyFormColorColBtnDisabled';
        this.itemDescripcion = '';
        this.itemMonto = '';
        this.cantSelects = 8;
        this.lstItems = new Array(this.cantSelects).fill(null);
        this.defaultItem = new Array(this.cantSelects).fill({ id: 0, texto: 'Seleccionar' });
        this.lstEmpresas = new Array();
        this.lstProveedores = new Array();
        this.lstClientes = new Array();
        this.ppoliza = new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */]();
        this.isPPolizaValid = new Array(6).fill(false);
        this.lstTipo = [
            { id: 1, texto: 'Ingreso' },
            { id: 2, texto: 'Engreso' },
            { id: 3, texto: 'Diario' },
        ];
        this.lstTipoPP = [
            { id: 0, texto: 'Cargo' },
            { id: 1, texto: 'Abono' }
        ];
        this.lstIVA = [
            { id: 0, texto: '0%' },
            { id: 1, texto: '16%' }
        ];
        this.lstNCliProv = [
            { id: 1, texto: 'Ninguno' },
            { id: 2, texto: 'Clientes' },
            { id: 3, texto: 'Proveedores' }
        ];
        this.labelSelect2 = null;
        this.isDiff = true;
        this.modalPromt = 'modalPromt';
        this.modalSuccess = 'modalPromt';
        /*
    
        Prefijo
        Tipo
        Año
        XXXXX
    
        */
        // public folio = new Array<string>(4).fill('');
        /*EDITAR PÓLIZA*/
        this.idPoliza = 0;
        this.isFirstTime = true;
        this.title = 'Ejemplo de Nombre de Empresa - Cliente - Proveedor';
        this.route.params.subscribe(function (params) {
            _this.idPoliza = params['id'];
        });
    }
    EditarPolizaComponent.prototype.ngOnInit = function () {
        this.coreContainer.openModal(2);
        // this.folio[2] = this.poliza.fechaDate.getFullYear().toString();
        this.lstItems[0] = this.lstTipo;
        this.lstItems[4] = this.lstIVA;
        this.lstItems[5] = this.lstTipoPP;
        this.lstItems[7] = this.lstNCliProv;
        this.fnGetInfo(0);
    };
    EditarPolizaComponent.prototype.fnFillSelects = function (opc) {
        var _this = this;
        console.log('fnFillSelects: ', opc);
        switch (opc) {
            case 0:
                this.lstItems[1] = Object.assign([], this.lstEmpresas);
                var tipoOpt = {
                    id: this.polizaAux.tipo,
                    texto: (this.polizaAux.tipo === 1) ? 'Ingreso' : (this.polizaAux.tipo === 2) ? 'Egreso' : 'Diario'
                };
                this.defaultItem[0] = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), tipoOpt);
                break;
            case 1:
                var empresaOpt = null;
                empresaOpt = {
                    id: this.polizaAux.empresa.idEmpresa,
                    texto: this.polizaAux.empresa.alias
                };
                this.defaultItem[1] = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), empresaOpt);
                break;
            case 2:
                var tipoObjetoOpt = (this.polizaAux.tipo === 1) ? this.lstNCliProv[1] :
                    (this.polizaAux.tipo === 2) ? this.lstNCliProv[2] :
                        (this.polizaAux.tipo === 3 && ((this.polizaAux.cliente === undefined || this.polizaAux.cliente === null) && (this.polizaAux.proveedor === undefined || this.polizaAux.proveedor === null))) ? this.lstNCliProv[3] :
                            (this.polizaAux.cliente !== undefined || this.polizaAux.cliente !== null) ? this.lstNCliProv[1] :
                                (this.polizaAux.proveedor !== undefined || this.polizaAux.proveedor !== null) ? this.lstNCliProv[2] : this.lstNCliProv[0];
                this.defaultItem[7] = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), tipoObjetoOpt);
                break;
            case 3:
                switch (this.polizaAux.tipo) {
                    case 1:
                        this.lstItems[2] = Object.assign([], this.lstClientes);
                        break;
                    case 2:
                        this.lstItems[2] = Object.assign([], this.lstProveedores);
                        break;
                    case 3:
                        if ((this.polizaAux.cliente === undefined || this.polizaAux.cliente === null) && (this.polizaAux.proveedor === undefined || this.polizaAux.proveedor === null)) {
                            this.lstItems[2] = null;
                        }
                        else if (this.polizaAux.cliente !== undefined || this.polizaAux.cliente !== null) {
                            this.lstItems[2] = Object.assign([], this.lstClientes);
                        }
                        else if (this.polizaAux.proveedor !== undefined || this.polizaAux.proveedor !== null) {
                            this.lstItems[2] = Object.assign([], this.lstProveedores);
                        }
                        break;
                }
                break;
            case 4:
                var defItem2 = null;
                switch (this.polizaAux.tipo) {
                    case 1:
                        defItem2 = {
                            id: this.polizaAux.empresa.idEmpresa,
                            texto: this.polizaAux.cliente.nombre
                        };
                        break;
                    case 2:
                        defItem2 = {
                            id: this.polizaAux.proveedor.idProveedor,
                            texto: this.polizaAux.proveedor.nombre
                        };
                        break;
                    case 3:
                        if ((this.polizaAux.cliente === undefined || this.polizaAux.cliente === null) && (this.polizaAux.proveedor === undefined || this.polizaAux.proveedor === null)) {
                            defItem2 = null;
                        }
                        else if (this.polizaAux.cliente !== undefined || this.polizaAux.cliente !== null) {
                            defItem2 = {
                                id: this.polizaAux.empresa.idEmpresa,
                                texto: this.polizaAux.cliente.nombre
                            };
                        }
                        else if (this.polizaAux.proveedor !== undefined || this.polizaAux.proveedor !== null) {
                            defItem2 = {
                                id: this.polizaAux.proveedor.idProveedor,
                                texto: this.polizaAux.proveedor.nombre
                            };
                        }
                        break;
                }
                this.defaultItem[2] = Object.assign({}, defItem2);
                break;
        }
        if (opc === 4) {
            setTimeout(function () {
                _this.coreContainer.closeModal(2);
            }, 1500);
        }
        else {
            setTimeout(function () {
                opc++;
                _this.fnFillSelects(opc);
            }, 500);
        }
    };
    EditarPolizaComponent.prototype.fnGetPoliza = function () {
        var _this = this;
        this.serviceCatalogo.obtenerPoliza(this.idPoliza).subscribe(function (resp) {
            console.log('obtenerPoliza', resp.current);
            if (resp.current.idPoliza > 0) {
                var pol = resp.current;
                var fechaAux = pol.fecha.split('-');
                pol.fecha = new Date(Number(fechaAux[0]), Number(fechaAux[1]) - 1, Number(fechaAux[2]));
                switch (pol.tipo) {
                    case 1:
                        _this.title = pol.cliente.razonSocial;
                        break;
                    case 2:
                        _this.title = pol.proveedor.razonSocial;
                        break;
                    case 3:
                        _this.title =
                            (pol.proveedor !== undefined && pol.proveedor !== null && pol.proveedor) ? pol.proveedor.razonSocial :
                                (pol.cliente !== undefined && pol.cliente !== null && pol.cliente) ? pol.cliente.razonSocial :
                                    pol.empresa.razonSocial;
                        break;
                }
                for (var _i = 0, _a = pol.lstPPoliza; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var nivel = null;
                    var nivel2 = null;
                    var nivel3 = null;
                    switch (item.cuentaContable.nivel) {
                        case 1:
                            nivel = item.cuentaContable.nivel1 + '';
                            break;
                        case 2:
                            nivel2 = null;
                            if (item.cuentaContable.nivel2 < 10) {
                                nivel2 = '00' + item.cuentaContable.nivel2;
                            }
                            else if (item.cuentaContable.nivel2 > 9 && item.cuentaContable.nivel2 < 100) {
                                nivel2 = '0' + item.cuentaContable.nivel2;
                            }
                            else {
                                nivel2 = item.cuentaContable.nivel2;
                            }
                            nivel = item.cuentaContable.nivel1 + '.' + nivel2;
                            break;
                        case 3:
                            nivel2 = null;
                            if (item.cuentaContable.nivel2 < 10) {
                                nivel2 = '00' + item.cuentaContable.nivel2;
                            }
                            else if (item.cuentaContable.nivel2 > 9 && item.cuentaContable.nivel2 < 100) {
                                nivel2 = '0' + item.cuentaContable.nivel2;
                            }
                            else {
                                nivel2 = item.cuentaContable.nivel2;
                            }
                            nivel3 = null;
                            if (item.cuentaContable.nivel3 < 10) {
                                nivel3 = '00' + item.cuentaContable.nivel3;
                            }
                            else if (item.cuentaContable.nivel3 > 9 && item.cuentaContable.nivel3 < 100) {
                                nivel3 = '0' + item.cuentaContable.nivel3;
                            }
                            else {
                                nivel3 = item.cuentaContable.nivel3;
                            }
                            nivel = item.cuentaContable.nivel1 + '.' + nivel2 + '.' + nivel3;
                            break;
                    }
                    item.cuentaContable.descripcionAux = nivel;
                    item.cuentaContable.descripcionAuxSep = '\u00B7';
                }
                _this.poliza = Object.assign({}, pol);
                _this.polizaAux = Object.assign({}, pol);
            }
            _this.fnFillSelects(0);
        }, function (error) {
            _this.fnFillSelects(0);
            console.log('Error obtenerPoliza', error);
        });
    };
    /*fnGetFolio(lstFolios: Array<any>) {
        console.log('fnGetFolio', lstFolios);
        if (lstFolios !== undefined && lstFolios !== null && lstFolios.length > 0) {
            for (let item of lstFolios) {
                if (item.nombre === this.folio[1]) {
                    let nFolio = Object.assign(item.valor3 + 1);
                    if (nFolio < 10) {
                        this.folio[3] = '0000' + nFolio;
                    }
                    if (nFolio > 9 && nFolio < 100) {
                        this.folio[3] = '000' + nFolio;
                    }
                    if (nFolio > 99 && nFolio < 1000) {
                        this.folio[3] = '00' + nFolio;
                    }
                    if (nFolio > 9999 && nFolio < 10000) {
                        this.folio[3] = '0' + nFolio;
                    }
                    if (nFolio > 99999) {
                        this.folio[3] = nFolio;
                    }
                }
                break;
            }
            this.poliza.folio = this.folio[0] + '-' + this.folio[1] + '-' + this.folio[2] + '-' + this.folio[3];
        } else {
            this.poliza.folio = 'N/D';
        }
    }*/
    EditarPolizaComponent.prototype.fnCancel = function () {
        if (this.isDiff) {
            this.fnOpenPrompt();
        }
        else {
            this.fnViewReturn();
        }
    };
    EditarPolizaComponent.prototype.fnOpenPrompt = function () {
        this.modalPromt = 'modalPromt openModal';
    };
    EditarPolizaComponent.prototype.fnClosePrompt = function () {
        this.modalPromt = 'modalPromt';
    };
    EditarPolizaComponent.prototype.ngDoCheck = function () {
        if (JSON.stringify(this.poliza) !== JSON.stringify(this.polizaAux)) {
            this.isDiff = true;
        }
        else {
            this.isDiff = false;
        }
    };
    EditarPolizaComponent.prototype.fnUpdateAmounts = function () {
        this.poliza.monto = 0;
        this.poliza.iva = 0;
        this.poliza.total = 0;
        for (var _i = 0, _a = this.poliza.lstPPoliza; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.tipo) {
                this.poliza.monto += item.monto;
                this.poliza.iva += item.montoIVA;
            }
            else {
                this.poliza.monto -= item.monto;
                this.poliza.iva -= item.montoIVA;
            }
        }
        this.poliza.total = this.poliza.monto + this.poliza.iva;
    };
    EditarPolizaComponent.prototype.fnDeleteItem = function (i) {
        this.poliza.lstPPoliza.splice(i, 1);
        this.fnUpdateAmounts();
    };
    EditarPolizaComponent.prototype.fnValidPoliza = function () {
        console.log('fnValidPoliza');
        if (this.poliza.referencia !== '' && this.poliza.descripcion !== '' && this.poliza.fecha !== null) {
            this.isPolizaValid[1] = true;
            this.isPolizaValid[2] = true;
            this.isPolizaValid[3] = true;
        }
        else {
            this.isPolizaValid[1] = false;
            this.isPolizaValid[2] = false;
            this.isPolizaValid[3] = false;
        }
        var x = 0;
        for (var _i = 0, _a = this.isPolizaValid; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                x++;
            }
            else {
                break;
            }
        }
        if (x === 6) {
            // this.poliza.folio = this.folio[0] + '-' + this.folio[1] + '-' + this.folio[2] + '-' + this.folio[3];
            this.classBtnAcept = (this.poliza.lstPPoliza !== undefined && this.poliza.lstPPoliza !== null && this.poliza.lstPPoliza.length > 0 && this.poliza.total === 0) ? 'containerFooterBtnAcepted' : 'containerFooterBtnDisabled';
        }
        else {
            this.classBtnAcept = 'containerFooterBtnDisabled';
        }
    };
    EditarPolizaComponent.prototype.fnValidPPoliza = function () {
        this.isPPolizaValid[0] = (this.itemDescripcion !== '') ? true : false;
        this.isPPolizaValid[1] = (__WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto) > 0) ? true : false;
        var x = 0;
        for (var _i = 0, _a = this.isPPolizaValid; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                x++;
            }
            else {
                break;
            }
        }
        this.classBtnAdd = (x === 6) ? 'containerBodyFormColorColBtnEnabled' : 'containerBodyFormColorColBtnDisabled';
        this.fnValidPoliza();
    };
    EditarPolizaComponent.prototype.fnBlurMonto = function () {
        this.itemMonto = __WEBPACK_IMPORTED_MODULE_7_accounting__["formatMoney"](this.itemMonto);
    };
    EditarPolizaComponent.prototype.fnFocusMonto = function () {
        if (this.itemMonto !== '') {
            this.itemMonto = __WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto);
        }
    };
    EditarPolizaComponent.prototype.fnAddPPoliza = function () {
        if (this.poliza.lstPPoliza !== undefined && this.poliza.lstPPoliza !== null) {
            this.ppoliza.monto = __WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto);
            this.ppoliza.montoIVA = (this.ppoliza.tipoIVA) ? this.ppoliza.monto * 0.16 : 0;
            this.ppoliza.descripcion = this.itemDescripcion;
            this.poliza.lstPPoliza.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */](), this.ppoliza));
            this.ppoliza = new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */]();
            this.itemDescripcion = '';
            this.itemMonto = '';
            this.isPPolizaValid.fill(false);
            var lstAux = Object.assign([], [this.lstItems[3], this.lstItems[4], this.lstItems[5], this.lstItems[6]]);
            this.lstItems[3] = null;
            this.lstItems[4] = null;
            this.lstItems[5] = null;
            this.lstItems[6] = null;
            this.lstItems[3] = Object.assign([], lstAux[0]);
            this.lstItems[4] = Object.assign([], lstAux[1]);
            this.lstItems[5] = Object.assign([], lstAux[2]);
            this.lstItems[6] = Object.assign([], lstAux[3]);
            this.classBtnAdd = 'containerBodyFormColorColBtnDisabled';
        }
        else {
            this.poliza.lstPPoliza = [];
            this.fnAddPPoliza();
        }
        this.fnUpdateAmounts();
    };
    EditarPolizaComponent.prototype.fnGetInfo = function (opc) {
        var _this = this;
        switch (opc) {
            case 0:
                this.serviceCatalogo.obtenerEmpresasContabilidad().subscribe(function (resp) {
                    console.log('obtenerEmpresas', resp);
                    _this.lstEmpresas = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (item.activo) {
                                var opt = {
                                    id: item.llave,
                                    texto: item.valor
                                };
                                _this.lstEmpresas.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                            }
                        }
                    }
                    _this.fnGetInfo(1);
                }, function (error) {
                    _this.fnGetInfo(1);
                    console.log('Error obtenerEmpresas', error);
                });
                break;
            case 1:
                this.serviceCatalogo.obtenerProveedoresCuentasContables('').subscribe(function (resp) {
                    console.log('obtenerProveedoresCuentasContables', resp);
                    _this.lstProveedores = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.llave,
                                texto: item.nombre
                            };
                            _this.lstProveedores.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    _this.fnGetInfo(2);
                }, function (error) {
                    _this.fnGetInfo(2);
                    console.log('Error obtenerProveedoresCuentasContables', error);
                });
                break;
            case 2:
                this.serviceCatalogo.obtenerClientesCuentasContables('').subscribe(function (resp) {
                    console.log('obtenerClientesCuentasContables', resp);
                    _this.lstClientes = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.llave,
                                texto: item.nombre
                            };
                            _this.lstClientes.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    _this.fnGetInfo(4);
                }, function (error) {
                    _this.fnGetInfo(4);
                    console.log('Error obtenerClientesCuentasContables', error);
                });
                break;
            case 3:
                this.serviceCatalogo.obtenerCuentasContablesEmpresa(this.poliza.empresa.idEmpresa).subscribe(function (resp) {
                    console.log('obtenerCuentasContables', resp);
                    _this.lstItems[3] = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        var lstAux1 = [];
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var nivel = null;
                            var nivel2 = null;
                            var nivel3 = null;
                            switch (item.nivel) {
                                case 1:
                                    nivel = item.nivel1 + '';
                                    break;
                                case 2:
                                    nivel2 = null;
                                    if (item.nivel2 < 10) {
                                        nivel2 = '00' + item.nivel2;
                                    }
                                    else if (item.nivel2 > 9 && item.nivel2 < 100) {
                                        nivel2 = '0' + item.nivel2;
                                    }
                                    else {
                                        nivel2 = item.nivel2;
                                    }
                                    nivel = item.nivel1 + '.' + nivel2;
                                    break;
                                case 3:
                                    nivel2 = null;
                                    if (item.nivel2 < 10) {
                                        nivel2 = '00' + item.nivel2;
                                    }
                                    else if (item.nivel2 > 9 && item.nivel2 < 100) {
                                        nivel2 = '0' + item.nivel2;
                                    }
                                    else {
                                        nivel2 = item.nivel2;
                                    }
                                    nivel3 = null;
                                    if (item.nivel3 < 10) {
                                        nivel3 = '00' + item.nivel3;
                                    }
                                    else if (item.nivel3 > 9 && item.nivel3 < 100) {
                                        nivel3 = '0' + item.nivel3;
                                    }
                                    else {
                                        nivel3 = item.nivel3;
                                    }
                                    nivel = item.nivel1 + '.' + nivel2 + '.' + nivel3;
                                    break;
                            }
                            var opt = {
                                id: item.idCuentaContable,
                                texto: nivel,
                                texto1: item.descripcion,
                                separador: '\u00B7',
                                aux: (item.nivel === 1) ? true : false
                            };
                            lstAux1.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                        _this.lstItems[3] = Object.assign(new Array(), lstAux1);
                    }
                }, function (error) {
                    console.log('Error obtenerCuentasContables', error);
                });
                break;
            case 4:
                this.serviceCatalogo.obtenerLstCentroCostos().subscribe(function (resp) {
                    console.log('obtenerLstCentroCostos', resp);
                    _this.lstItems[6] = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.idCentroCosto,
                                texto: item.descripcion
                            };
                            _this.lstItems[6].push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    _this.fnGetPoliza();
                }, function (error) {
                    _this.fnGetPoliza();
                    console.log('Error obtenerLstCentroCostos', error);
                });
                break;
        }
    };
    EditarPolizaComponent.prototype.fnGetFechaImpl = function ($event) {
        this.fnValidPoliza();
    };
    EditarPolizaComponent.prototype.fnOutPutItem = function ($event, opc) {
        console.log('fnOutPutItem', $event, opc);
        switch (opc) {
            case 0:
                this.poliza.proveedor = null;
                this.poliza.cliente = null;
                this.poliza.empresa = null;
                // this.poliza.folio = 'N/D';
                this.poliza.tipo = $event.id;
                this.defaultItem[1] = { id: 0, texto: 'Seleccionar' };
                this.defaultItem[2] = { id: 0, texto: 'Seleccionar' };
                this.lstItems[2] = null;
                this.defaultItem[7] = { id: 0, texto: 'Seleccionar' };
                // this.folio[1] = ($event.id === 1) ? 'I' : ($event.id === 2) ? 'E' : 'D';
                this.isPolizaValid[0] = true;
                this.isPolizaValid[4] = false;
                this.isPolizaValid[5] = false;
                this.fnValidPoliza();
                break;
            case 1:
                this.isPolizaValid[4] = ($event.texto !== 'Seleccionar') ? true : false;
                if ($event.id > 0) {
                    this.poliza.empresa = {
                        idEmpresa: $event.id
                    };
                    // this.folio[0] = $event.aux.nombre;
                    // this.fnGetFolio($event.aux.lstFoliosPoliza);
                    this.fnGetInfo(3);
                }
                this.fnValidPoliza();
                break;
            case 2:
                this.isPolizaValid[5] = ($event.texto !== 'Seleccionar') ? true : false;
                if ($event.id > 0) {
                    switch (this.tipoObjeto.id) {
                        case 1:
                            this.poliza.proveedor = null;
                            this.poliza.cliente = null;
                            break;
                        case 2:
                            this.poliza.cliente = {
                                idCliente: $event.id
                            };
                            break;
                        case 3:
                            this.poliza.proveedor = {
                                idProveedor: $event.id
                            };
                            break;
                    }
                    this.fnValidPoliza();
                }
                break;
            case 3:
                this.ppoliza.cuentaContable.idCuentaContable = $event.id;
                this.ppoliza.cuentaContable.descripcionAux = $event.texto;
                this.ppoliza.cuentaContable.descripcion = $event.texto1;
                this.ppoliza.cuentaContable.descripcionAuxSep = $event.separador;
                this.isPPolizaValid[2] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 4:
                this.ppoliza.tipoIVA = ($event.id === 0) ? false : true;
                this.isPPolizaValid[3] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 5:
                this.ppoliza.tipo = ($event.id === 0) ? false : true;
                this.isPPolizaValid[4] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 6:
                this.ppoliza.centroCosto.idCentroCosto = $event.id;
                this.ppoliza.centroCosto.descripcion = $event.texto;
                this.isPPolizaValid[5] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 7:
                if ($event.id > 0) {
                    this.tipoObjeto = $event;
                    switch ($event.id) {
                        case 1:
                            this.labelSelect2 = null;
                            this.lstItems[2] = null;
                            break;
                        case 2:
                            this.labelSelect2 = 'Clientes';
                            this.lstItems[2] = Object.assign([], this.lstClientes);
                            break;
                        case 3:
                            this.labelSelect2 = 'Proveedores';
                            this.lstItems[2] = Object.assign([], this.lstProveedores);
                            break;
                    }
                }
                break;
        }
    };
    EditarPolizaComponent.prototype.fnViewReturn = function () {
        this.router.navigate(['/protected/contabilidad/polizas']);
    };
    EditarPolizaComponent.prototype.fnSave = function () {
        var _this = this;
        console.log('Poliza:', JSON.stringify(this.poliza));
        this.coreContainer.openModal(2);
        this.serviceCatalogo.agregarPoliza(this.poliza).subscribe(function (resp) {
            console.log('agregarPoliza', resp.current);
            if (resp.current.idPoliza > 0) {
                setTimeout(function () {
                    _this.coreContainer.closeModal(2);
                    _this.modalSuccess = 'modalPromt openModal';
                }, 500);
                setTimeout(function () {
                    _this.modalSuccess = 'modalPromt';
                    _this.fnViewReturn();
                }, 3500);
            }
        }, function (error) {
            console.log('Error agregarPoliza', error);
            setTimeout(function () {
                _this.coreContainer.closeModal(2);
            }, 1500);
        });
    };
    EditarPolizaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-editar-poliza',
            template: __webpack_require__("./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.html"),
            styles: [__webpack_require__("./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], EditarPolizaComponent);
    return EditarPolizaComponent;
}());



/***/ }),

/***/ "./src/app/components/contabilidad/polizas/polizas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolizasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polizas_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/polizas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agregar_poliza_agregar_poliza_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_poliza_editar_poliza_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PolizasRoutingModule = /** @class */ (function () {
    function PolizasRoutingModule() {
    }
    PolizasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__polizas_component__["a" /* PolizasComponent */] },
                    { path: 'agregar', component: __WEBPACK_IMPORTED_MODULE_3__agregar_poliza_agregar_poliza_component__["a" /* AgregarPolizaComponent */] },
                    { path: 'editar/:id', component: __WEBPACK_IMPORTED_MODULE_4__editar_poliza_editar_poliza_component__["a" /* EditarPolizaComponent */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], PolizasRoutingModule);
    return PolizasRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/contabilidad/polizas/polizas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div [ngClass]=\"classBar\">\n    <div class=\"containerLateralBarItems\">\n      <img src=\"./assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\" class=\"containerLateralBarItemsImg\">\n      <div class=\"containerLateralBarItemsTitle\">CONSULTA</div>\n    </div>\n    <div class=\"containerLateralBarItems\">\n        <div style=\"min-width:20px\" ></div>\n      <div class=\"containerLateralBarItemsTitle\">PÓLIZAS</div>\n    </div>\n    <div class=\"containerLateralBarDates\">\n      <div class=\"containerLateralBarDate\">\n        <div class=\"containerLateralBarDateLabel\">Del</div>\n        <pq-date-picker [sizeInput]=\"'14px'\" [heightInput]=\"'30px'\" [(date)]=\"fechaInicio\" dateFormat=\"YYYYMMDD\" (fecha)=\"fnGetFechaImpl($event, 0)\"></pq-date-picker>\n      </div>\n      <div style=\"min-width:20px\" ></div>\n      <div class=\"containerLateralBarDate\">\n        <div class=\"containerLateralBarDateLabel\">Al</div>\n        <pq-date-picker [sizeInput]=\"'14px'\" [heightInput]=\"'30px'\" [(date)]=\"fechaFin\" dateFormat=\"YYYYMMDD\" (fecha)=\"fnGetFechaImpl($event, 1)\"></pq-date-picker>\n      </div>\n    </div>\n    <div class=\"containerLateralBarSelects\">\n      <div class=\"containerLateralBarSelectsLabel\">Empresas del Grupo</div>\n      <app-pf-selector [defaultItem]=\"defaultItem[3]\" [lstItems]=\"lstItems[3]\" (outPutItem)=\"fnOutPutItem($event, 3)\"></app-pf-selector>\n    </div>\n    <div class=\"containerLateralBarSelects\">\n      <div class=\"containerLateralBarSelectsLabel\">Tipo</div>\n      <app-pf-selector [defaultItem]=\"defaultItem[0]\" [lstItems]=\"lstItems[0]\" (outPutItem)=\"fnOutPutItem($event, 0)\"></app-pf-selector>\n    </div>\n    <div class=\"containerLateralBarSelects\">\n      <div class=\"containerLateralBarSelectsLabel\">Empresa que Emitió</div>\n      <app-pf-selector [defaultItem]=\"defaultItem[1]\" [lstItems]=\"lstItems[1]\" (outPutItem)=\"fnOutPutItem($event, 1)\"></app-pf-selector>\n    </div>\n    <div class=\"containerLateralBarSelects\">\n      <div class=\"containerLateralBarSelectsLabel\">Empresa que Recibió</div>\n      <app-pf-selector [defaultItem]=\"defaultItem[2]\" [lstItems]=\"lstItems[2]\" (outPutItem)=\"fnOutPutItem($event, 2)\"></app-pf-selector>\n    </div>\n    <div class=\"containerLateralBarBtns\">\n      <div class=\"containerLateralBarBtn\" (click)=\"fnFiltar()\" >\n        <img src=\"./assets/Images/actualizar.svg\" alt=\"\" class=\"containerLateralBarBtnImg\">\n      </div>\n    </div>\n  </div>\n  <div class=\"containerBtn\">\n    <img src=\"./assets/Images/flecha_cuadro.svg\" alt=\"\" [ngClass]=\"classBtn\" (click)=\"fnHideBar()\" >\n  </div>\n  <div class=\"containerBody\" [ngStyle]=\"{'width': (classBar.indexOf('closed') !== -1) ? '100%' : 'calc(100% - 321px)' }\" >\n    <div class=\"containerBodyHeader\">\n      <div class=\"containerBodyHeaderTitle\">RESULTADOS&nbsp;&middot;&nbsp;CARGAR INGRESOS&nbsp;&middot;&nbsp;EGRESOS</div>\n      <div class=\"containerBodyHeaderBtn\" (click)=\"fnAgregarPoliza()\" >NUEVA PÓLIZA</div>\n    </div>\n    <div class=\"containerBodyTable\">\n      <div class=\"containerBodyTableHeader\">\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\" >#</div>\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;justify-content: flex-start;\" >Folio</div>\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 15%;justify-content: flex-start;\" >Empresa</div>\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;justify-content: flex-start;\" >Tipo</div>\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 20%;\" >Fecha Referencia</div>\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;justify-content: flex-end;\" >Subtotal</div>\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 15%;justify-content: flex-end;\" >IVA</div>\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;justify-content: flex-end;\" >Total</div>\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\" >\n          <img src=\"./assets/Images/IngresosEgresosExportar.svg\" alt=\"\" class=\"containerBodyTableHeaderColImg\">\n        </div>\n      </div>\n      <div class=\"containerBodyTableBody\">\n        <div class=\"containerBodyTableBodyRow\" *ngFor=\"let item of lstPolizas; let i = index\">\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 5%;\" > {{ (i + 1) }} </div>\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 10%;justify-content: flex-start;\" > {{ item.folio }} </div>\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 15%;justify-content: flex-start;color: #008894;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;\" > {{ item.empresa }} </div>\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 10%;justify-content: flex-start;\" > {{ item.tipoTexto }} </div>\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 20%;\" > {{ item.fechaView | dateFormatSlash }} </div>\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 10%;justify-content: flex-end;\" > {{ item.monto | acFormatMoney }} </div>\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 15%;justify-content: flex-end;\" >\n            <span class=\"containerBodyTableBodyRowColSpan\" *ngIf=\"item.iva > 0\">{{ item.iva | acFormatMoney }}</span>\n            <span class=\"containerBodyTableBodyRowColSpan\" *ngIf=\"item.iva > 0\" >&nbsp;&middot;&nbsp;16%</span>\n            <span class=\"containerBodyTableBodyRowColSpan\" *ngIf=\"item.iva === 0\" >0%</span>\n          </div>\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 10%;justify-content: flex-end;color: #008894;\" > {{ item.total | acFormatMoney }} </div>\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 5%;\" >\n            <img [src]=\"item.imgSrc\" alt=\"\" [ngClass]=\"item.imgClass\" (click)=\"fnEditarPoliza(item.idPoliza)\" >\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"containerBodyFooter\">\n      {{ (lstPolizas.length === 1) ? '#1 Poliza' : '#' + lstPolizas.length + ' Polizas' }}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/polizas.component.scss":
/***/ (function(module, exports) {

module.exports = ":host > .container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host > .container > .containerLateralBar {\n    padding: 15px 20px;\n    width: 281px;\n    background: #E6E6E6;\n    height: calc(100vh - 160px);\n    overflow: scroll;\n    -webkit-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out; }\n  :host > .container > .containerLateralBar > .containerLateralBarItems {\n      border-bottom: 1px solid #424242;\n      height: 49px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      margin: 10px 0px 15px 0px; }\n  :host > .container > .containerLateralBar > .containerLateralBarItems > .containerLateralBarItemsImg {\n        width: 20px;\n        height: 30px; }\n  :host > .container > .containerLateralBar > .containerLateralBarItems > .containerLateralBarItemsTitle {\n        font-size: 27px;\n        color: #424242;\n        font-weight: 500;\n        font-family: Bank Gothic;\n        width: 100%;\n        text-align: center; }\n  :host > .container > .containerLateralBar > .containerLateralBarDates {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n  :host > .container > .containerLateralBar > .containerLateralBarDates > .containerLateralBarDate {\n        width: 100%; }\n  :host > .container > .containerLateralBar > .containerLateralBarDates > .containerLateralBarDate > .containerLateralBarDateLabel {\n          font-size: 15px;\n          color: #424242;\n          font-display: 700; }\n  :host > .container > .containerLateralBar > .containerLateralBarSelects {\n      margin: 15px 0px; }\n  :host > .container > .containerLateralBar > .containerLateralBarSelects > .containerLateralBarSelectsLabel {\n        font-size: 15px;\n        color: #424242;\n        font-weight: 700; }\n  :host > .container > .containerLateralBar > .containerLateralBarBtns {\n      border-bottom: 1px solid #424242;\n      padding: 15px 0px 35px 0px; }\n  :host > .container > .containerLateralBar > .containerLateralBarBtns > .containerLateralBarBtn {\n        background: #0F0F0F;\n        border-radius: 17px;\n        width: 281px;\n        height: 45px;\n        cursor: pointer;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out; }\n  :host > .container > .containerLateralBar > .containerLateralBarBtns > .containerLateralBarBtn > .containerLateralBarBtnImg {\n          height: 46px;\n          width: 20px;\n          margin: auto;\n          display: block; }\n  :host > .container > .containerLateralBar > .containerLateralBarBtns > .containerLateralBarBtn:hover {\n        opacity: 0.5; }\n  :host > .container > .containerLateralBar > .containerLateralBarBtns > .containerLateralBarBtn:active {\n        opacity: 0.75; }\n  :host > .container > .closed {\n    width: 0px !important;\n    padding: 15px 0px; }\n  :host > .container > .containerBtn {\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host > .container > .containerBtn > .containerBtnImg {\n      width: 18px;\n      height: 32px;\n      cursor: pointer;\n      -webkit-transition: all 0.2s ease-in-out;\n      transition: all 0.2s ease-in-out;\n      margin-left: -17px; }\n  :host > .container > .containerBtn > .containerBtnImg:hover {\n      opacity: 0.5; }\n  :host > .container > .containerBtn > .containerBtnImg:active {\n      opacity: 0.75; }\n  :host > .container > .containerBtn > .rotated {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n  :host > .container > .containerBody {\n    padding: 0px 15px;\n    background: #FFFFFF;\n    height: calc(100vh - 130px);\n    overflow: scroll; }\n  :host > .container > .containerBody > .containerBodyHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 58px;\n      border-bottom: 2px solid #424242; }\n  :host > .container > .containerBody > .containerBodyHeader > .containerBodyHeaderTitle {\n        font-family: Novecento;\n        font-size: 25px;\n        color: #424242;\n        font-weight: 400; }\n  :host > .container > .containerBody > .containerBodyHeader > .containerBodyHeaderBtn {\n        height: 30px;\n        width: 200px;\n        background: #008894;\n        line-height: 30px;\n        font-size: 21px;\n        color: #FFFFFF;\n        font-family: Novecento;\n        font-weight: 900;\n        vertical-align: middle;\n        text-align: center;\n        cursor: pointer;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out;\n        padding-bottom: 3px; }\n  :host > .container > .containerBody > .containerBodyHeader > .containerBodyHeaderBtn:hover {\n        opacity: 0.5; }\n  :host > .container > .containerBody > .containerBodyHeader > .containerBodyHeaderBtn:active {\n        opacity: 0.75; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableHeader {\n      height: 54px;\n      border-bottom: 1px solid #424242;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      margin-bottom: 5px;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableHeader > .containerBodyTableHeaderCol {\n        margin: 5px;\n        font-size: 15px;\n        color: #424242;\n        font-weight: 700;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableHeader > .containerBodyTableHeaderCol > .containerBodyTableHeaderColImg {\n          width: 30px;\n          height: 30px;\n          cursor: pointer;\n          -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableHeader > .containerBodyTableHeaderCol > .containerBodyTableHeaderColImg:hover {\n          opacity: 0.5; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableHeader > .containerBodyTableHeaderCol > .containerBodyTableHeaderColImg:active {\n          opacity: 0.75; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody {\n      height: calc(100vh - 300px);\n      border-bottom: 1px solid #424242;\n      overflow: scroll; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyRow {\n        height: 54px;\n        border-bottom: 1px solid #ECEEF0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyRow > .containerBodyTableBodyRowCol {\n          margin: 5px;\n          font-size: 16px;\n          color: #424242;\n          font-weight: 400;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyRow > .containerBodyTableBodyRowCol > .containerBodyTableBodyRowColSpan:nth-of-type(2) {\n            font-size: 16px;\n            color: #008894;\n            font-weight: 700; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyRow > .containerBodyTableBodyRowCol > .containerBodyTableBodyRowColImg {\n            width: 13px;\n            cursor: pointer;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyRow > .containerBodyTableBodyRowCol > .containerBodyTableBodyRowColImg:hover {\n            opacity: 0.5; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyRow > .containerBodyTableBodyRowCol > .containerBodyTableBodyRowColImg:active {\n            opacity: 0.75; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyRow > .containerBodyTableBodyRowCol > .imgDisabled {\n            pointer-events: none; }\n  :host > .container > .containerBody > .containerBodyTable > .containerBodyTableBody > .containerBodyTableBodyRow:hover {\n        background: #ECEEF0; }\n  :host > .container > .containerBody > .containerBodyFooter {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      height: 49px;\n      font-size: 14px;\n      color: #424242;\n      font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/polizas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolizasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_option_class__ = __webpack_require__("./src/app/class/option.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PolizasComponent = /** @class */ (function () {
    function PolizasComponent(router, catalogoService, coreContainer) {
        this.router = router;
        this.catalogoService = catalogoService;
        this.coreContainer = coreContainer;
        /*Variables para Contenedor Tabla*/
        this.lstPolizas = new Array();
        this.lstPolizasAux = new Array();
        /*Variables para Contenedor Filtros*/
        this.fechaInicio = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        this.fechaFin = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
        this.cantSelects = 4;
        this.lstEmpresaEmite = [];
        this.lstEmpresaRecibe = [];
        this.lstEmpresaEmiteAux = [];
        this.lstEmpresaRecibeAux = [];
        this.lstItems = new Array(this.cantSelects).fill(null);
        this.defaultItem = new Array(this.cantSelects).fill({ id: 0, texto: 'Seleccionar' });
        this.lstTipo = [
            { id: 0, texto: 'Todos' },
            { id: 1, texto: 'Ingreso' },
            { id: 2, texto: 'Engreso' },
            { id: 3, texto: 'Diario' },
        ];
        this.empresaEmite = null;
        this.empresaRecibe = null;
        this.tipo = null;
        this.classBar = 'containerLateralBar';
        this.classBtn = 'containerBtnImg';
        this.idEmpresa = 0;
    }
    PolizasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coreContainer.openModal(2);
        // this.fnObtenerLstPolizas();
        this.catalogoService.obtenerEmpresasContabilidad().subscribe(function (resp) {
            console.log('obtenerEmpresasContabilidad', resp);
            _this.lstItems[3] = new Array();
            if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var opt = new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */]();
                    opt.id = item.llave;
                    opt.texto = item.valor;
                    _this.lstItems[3].push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                }
                if (_this.lstItems[3].length > 0) {
                    _this.defaultItem[3] = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), _this.lstItems[3][0]);
                }
            }
        }, function (error) {
            console.log('Error obtenerEmpresasContabilidad', error);
        });
    };
    PolizasComponent.prototype.fnHideBar = function () {
        if (this.classBar.indexOf('closed') !== -1) {
            this.classBar = 'containerLateralBar';
            this.classBtn = 'containerBtnImg';
        }
        else {
            this.classBar = 'containerLateralBar closed';
            this.classBtn = 'containerBtnImg rotated';
        }
    };
    PolizasComponent.prototype.fnFiltar = function () {
        var _this = this;
        this.coreContainer.openModal(2);
        var lstAux = [];
        var lstAux1 = [];
        console.log(this.tipo, this.empresaEmite, this.empresaRecibe);
        for (var _i = 0, _a = this.lstPolizasAux; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.fechaDate.getTime() >= this.fechaInicio.getTime() && item.fechaDate.getTime() <= this.fechaFin.getTime()) {
                console.log('Encontró coincidencia entre fechas', item);
                lstAux.push(Object.assign({}, item));
            }
        }
        if (this.tipo !== null && this.tipo.texto !== 'Seleccionar') {
            if (this.tipo.id > 0) {
                for (var _b = 0, lstAux_1 = lstAux; _b < lstAux_1.length; _b++) {
                    var item = lstAux_1[_b];
                    if (item.tipo === this.tipo.id) {
                        console.log('Encontró coincidencia tipo', item);
                        lstAux1.push(Object.assign({}, item));
                    }
                }
                lstAux = Object.assign([], lstAux1);
                lstAux1 = [];
            }
        }
        if (this.empresaEmite !== null && this.empresaEmite.texto !== 'Seleccionar') {
            for (var _c = 0, lstAux_2 = lstAux; _c < lstAux_2.length; _c++) {
                var item = lstAux_2[_c];
                if (this.empresaEmite.texto === item.empresa) {
                    console.log('Encontró coincidencia empresa emite', item);
                    lstAux1.push(Object.assign({}, item));
                }
            }
            lstAux = Object.assign([], lstAux1);
            lstAux1 = [];
        }
        if (this.empresaRecibe !== null && this.empresaRecibe.texto !== 'Seleccionar') {
            for (var _d = 0, lstAux_3 = lstAux; _d < lstAux_3.length; _d++) {
                var item = lstAux_3[_d];
                if (this.empresaRecibe.texto === item.empresaRecibe) {
                    console.log('Encontró coincidencia empresa recibe', item);
                    lstAux1.push(Object.assign({}, item));
                }
            }
            lstAux = Object.assign([], lstAux1);
            lstAux1 = [];
        }
        this.lstPolizas = Object.assign([], lstAux);
        setTimeout(function () {
            _this.coreContainer.closeModal(2);
        }, 1500);
    };
    PolizasComponent.prototype.fnAgregarPoliza = function () {
        console.log('fnAgregarPoliza');
        this.router.navigate(['/protected/contabilidad/polizas/agregar']);
    };
    PolizasComponent.prototype.fnEditarPoliza = function (id) {
        console.log('fnEditarPoliza', id);
        this.router.navigate(['/protected/contabilidad/polizas/editar', id]);
    };
    PolizasComponent.prototype.fnOutPutItem = function ($event, opc) {
        console.log('fnOutPutItem', $event, opc);
        switch (opc) {
            case 0:
                this.lstItems[1] = new Array();
                this.lstItems[2] = new Array();
                this.empresaEmite = null;
                this.empresaRecibe = null;
                this.tipo = ($event.texto !== '' && $event.texto !== 'Selecionar') ? Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), $event) : null;
                switch ($event.id) {
                    case 0: break;
                    case 1:
                        this.lstItems[1] = Object.assign(this.lstEmpresaEmite);
                        this.lstItems[2] = Object.assign(this.lstEmpresaRecibe);
                        break;
                    case 2:
                        this.lstItems[1] = Object.assign(this.lstEmpresaRecibe);
                        this.lstItems[2] = Object.assign(this.lstEmpresaEmite);
                        break;
                    case 3:
                        this.lstItems[1] = Object.assign(this.lstEmpresaEmite);
                        this.lstItems[2] = Object.assign(this.lstEmpresaRecibe);
                        break;
                }
                break;
            case 1:
                this.empresaEmite = ($event.texto !== '' && $event.texto !== 'Selecionar') ? Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), $event) : null;
                break;
            case 2:
                this.empresaRecibe = ($event.texto !== '' && $event.texto !== 'Selecionar') ? Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), $event) : null;
                break;
            case 3:
                this.idEmpresa = $event.id;
                this.fnObtenerLstPolizasEmpresa();
                break;
        }
    };
    PolizasComponent.prototype.fnGetFechaImpl = function ($event, opc) {
        // console.log('fnGetFechaImpl', $event, typeof $event, opc);
    };
    PolizasComponent.prototype.fnObtenerLstPolizasEmpresa = function () {
        var _this = this;
        this.lstItems[0] = Object.assign(new Array(), this.lstTipo);
        this.lstPolizas.length = 0;
        this.lstPolizasAux.length = 0;
        this.lstEmpresaEmite = [];
        this.lstEmpresaRecibe = [];
        this.lstEmpresaEmiteAux = [];
        this.lstEmpresaRecibeAux = [];
        this.catalogoService.obtenerLstPolizasEmpresa(this.idEmpresa).subscribe(function (resLst) {
            console.log('obtenerLstPolizas', resLst.current);
            if (resLst.current !== undefined && resLst.current !== null && resLst.current.length > 0) {
                var x = 0;
                var lstAuxE = [];
                var lstAuxR = [];
                for (var _i = 0, _a = resLst.current; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var fechaAux = item.fecha.split('-');
                    item.fechaDate = new Date(Number(fechaAux[0]), Number(fechaAux[1]) - 1, Number(fechaAux[2]));
                    item.fechaView = fechaAux[0] + '/' + fechaAux[1] + '/' + fechaAux[2];
                    item.imgSrc = (item.aplicada) ? './assets/Images/IngresosEgresosEditar.svg' : './assets/Images/IngresosEgresosEditar.svg';
                    item.imgClass = (item.aplicada) ? 'containerBodyTableBodyRowColImg imgDisabled' : 'containerBodyTableBodyRowColImg';
                    item.tipoTexto = (item.tipo === 1) ? 'Ingreso' : (item.tipo === 2) ? 'Egreso' : 'Diario';
                    item.empresa = (item.tipo === 1) ? item.empresa.alias : (item.tipo === 2) ? item.proveedor.nombre : 'N/A';
                    item.empresaRecibe = (item.tipo === 1) ? item.cliente.nombre : (item.tipo === 2) ? item.empresa.alias : 'N/A';
                    lstAuxE.push(item.empresa);
                    lstAuxR.push(item.empresaRecibe);
                    _this.lstPolizas.push(Object.assign({}, item));
                    _this.lstPolizasAux.push(Object.assign({}, item));
                    x++;
                }
                _this.lstEmpresaEmiteAux = lstAuxE.filter(function (elem, index, self) {
                    return index === self.indexOf(elem);
                });
                _this.lstEmpresaRecibeAux = lstAuxR.filter(function (elem, index, self) {
                    return index === self.indexOf(elem);
                });
                x = 0;
                for (var _b = 0, _c = _this.lstEmpresaEmiteAux; _b < _c.length; _b++) {
                    var ee = _c[_b];
                    var opt = {
                        id: 0,
                        texto: ee
                    };
                    _this.lstEmpresaEmite.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                    x++;
                }
                x = 0;
                for (var _d = 0, _e = _this.lstEmpresaRecibeAux; _d < _e.length; _d++) {
                    var ee = _e[_d];
                    var opt = {
                        id: 0,
                        texto: ee
                    };
                    _this.lstEmpresaRecibe.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                    x++;
                }
            }
            setTimeout(function () {
                _this.coreContainer.closeModal(2);
            }, 1500);
        }, function (error) {
            console.log('Error obtenerLstPolizas', error);
            setTimeout(function () {
                _this.coreContainer.closeModal(2);
            }, 1500);
        });
    };
    PolizasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-polizas',
            template: __webpack_require__("./src/app/components/contabilidad/polizas/polizas.component.html"),
            styles: [__webpack_require__("./src/app/components/contabilidad/polizas/polizas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], PolizasComponent);
    return PolizasComponent;
}());



/***/ }),

/***/ "./src/app/components/contabilidad/polizas/polizas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolizasModule", function() { return PolizasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__polizas_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/polizas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__polizas_routing_module__ = __webpack_require__("./src/app/components/contabilidad/polizas/polizas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agregar_poliza_agregar_poliza_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editar_poliza_editar_poliza_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PolizasModule = /** @class */ (function () {
    function PolizasModule() {
    }
    PolizasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__polizas_routing_module__["a" /* PolizasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__polizas_component__["a" /* PolizasComponent */],
                __WEBPACK_IMPORTED_MODULE_10__agregar_poliza_agregar_poliza_component__["a" /* AgregarPolizaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__editar_poliza_editar_poliza_component__["a" /* EditarPolizaComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_catalogo_catalogo_service__["a" /* CatalogoService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__polizas_component__["a" /* PolizasComponent */]
            ]
        })
    ], PolizasModule);
    return PolizasModule;
}());



/***/ })

});
//# sourceMappingURL=polizas.module.chunk.js.map