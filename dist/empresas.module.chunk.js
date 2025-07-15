webpackJsonp(["empresas.module"],{

/***/ "./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"opcion\" [homePath]=\"homePath\"></pn-header-bc>\n<div class=\"container\">\n    <div class=\"containerTitle\">Datos Generales</div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">ID</label>\n            <input [(ngModel)]=\"empresa.nomenclaturaEmpresa\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Nombre</label>\n            <input [(ngModel)]=\"empresa.alias\" class=\"containerFormsInputsInput\" style=\"width:337px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[0] }}</span><!-- Factor Riesgo -->\n            <pq-drop-list style=\"width:307px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[0]\" [isSearch]=\"isSearchParent[0]\" [isCategory]=\"isCategoryParent[0]\" [size]=\"sizeParent[0]\" [align]=\"alignParent[0]\" [itemSelect]=\"itemSelectParent[0]\" [widthContent]=\"widthContentParent[0]\" [marginLeftContent]=\"marginLeftContentParent[0]\" [tooltip]=\"tooltipParent[0]\" [tipoDrop]=\"tipoDropParent[0]\" [campoLabel]=\"campoLabelParent[0]\" [heightDrop]=\"heightDropParent[0]\" [colorBorderDrop]=\"colorBorderDropParent[0]\" (valueDropList)=\"fnGetValueDropList($event, 0)\"></pq-drop-list>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Registro Patronal</label>\n            <input [(ngModel)]=\"empresa.registroPatronal\" class=\"containerFormsInputsInput\" style=\"width:240px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Sitio Web</label>\n            <input [(ngModel)]=\"empresa.sitioWeb\" class=\"containerFormsInputsInput\" style=\"width:390px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[1] }}</span><!-- Sector Empresarial -->\n            <pq-drop-list style=\"width:330px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[1]\" [isSearch]=\"isSearchParent[1]\" [isCategory]=\"isCategoryParent[1]\" [size]=\"sizeParent[1]\" [align]=\"alignParent[1]\" [itemSelect]=\"itemSelectParent[1]\" [widthContent]=\"widthContentParent[1]\" [marginLeftContent]=\"marginLeftContentParent[1]\" [tooltip]=\"tooltipParent[1]\" [tipoDrop]=\"tipoDropParent[1]\" [campoLabel]=\"campoLabelParent[1]\" [heightDrop]=\"heightDropParent[1]\" [colorBorderDrop]=\"colorBorderDropParent[1]\" (valueDropList)=\"fnGetValueDropList($event, 1)\"></pq-drop-list>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Calle</label>\n            <input [(ngModel)]=\"empresa.calle\" class=\"containerFormsInputsInput\" style=\"width:385px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número</label>\n            <input [(ngModel)]=\"empresa.numero\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Colonia</label>\n            <input [(ngModel)]=\"empresa.colonia\" class=\"containerFormsInputsInput\" style=\"width:539px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Código Postal</label>\n            <input [(ngModel)]=\"empresa.cp\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Estado</label>\n            <input [(ngModel)]=\"empresa.estado\" class=\"containerFormsInputsInput\" style=\"width:198px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Municipio/Delegación</label>\n            <input [(ngModel)]=\"empresa.delegacion\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"containerTitle\">Datos Fiscales</div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Razón Social</label>\n            <input [(ngModel)]=\"empresa.razonSocial\" class=\"containerFormsInputsInput\" style=\"width:400px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[2] }}</span><!-- Regimen Fiscal -->\n            <pq-drop-list style=\"width:400px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[2]\" [isSearch]=\"isSearchParent[2]\" [isCategory]=\"isCategoryParent[2]\" [size]=\"sizeParent[2]\" [align]=\"alignParent[2]\" [itemSelect]=\"itemSelectParent[2]\" [widthContent]=\"widthContentParent[2]\" [marginLeftContent]=\"marginLeftContentParent[2]\" [tooltip]=\"tooltipParent[2]\" [tipoDrop]=\"tipoDropParent[2]\" [campoLabel]=\"campoLabelParent[2]\" [heightDrop]=\"heightDropParent[2]\" [colorBorderDrop]=\"colorBorderDropParent[2]\" (valueDropList)=\"fnGetValueDropList($event, 2)\"></pq-drop-list>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">RFC</label>\n            <input [(ngModel)]=\"empresa.rfcEmpresa\" class=\"containerFormsInputsInput\" style=\"width:275px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Contraseña SAT</label>\n            <input [(ngModel)]=\"empresa.contraseniaSAT\" class=\"containerFormsInputsInput\" style=\"width:340px\" placeholder=\"Escribe Aquí\" type=\"password\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Serie</label>\n            <input [(ngModel)]=\"empresa.serie\" class=\"containerFormsInputsInput\" style=\"width:345px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Calle</label>\n            <input [(ngModel)]=\"empresa.calle2\" class=\"containerFormsInputsInput\" style=\"width:385px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número</label>\n            <input [(ngModel)]=\"empresa.numero2\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Colonia</label>\n            <input [(ngModel)]=\"empresa.colonia2\" class=\"containerFormsInputsInput\" style=\"width:539px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Código Postal</label>\n            <input [(ngModel)]=\"empresa.cp2\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Estado</label>\n            <input [(ngModel)]=\"empresa.estado2\" class=\"containerFormsInputsInput\" style=\"width:198px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Municipio/Delegación</label>\n            <input [(ngModel)]=\"empresa.delegacion2\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[3] }}</span><!-- Periodicidad de Pago -->\n            <pq-drop-list style=\"width:330px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[3]\" [isSearch]=\"isSearchParent[3]\" [isCategory]=\"isCategoryParent[3]\" [size]=\"sizeParent[3]\" [align]=\"alignParent[3]\" [itemSelect]=\"itemSelectParent[3]\" [widthContent]=\"widthContentParent[3]\" [marginLeftContent]=\"marginLeftContentParent[3]\" [tooltip]=\"tooltipParent[3]\" [tipoDrop]=\"tipoDropParent[3]\" [campoLabel]=\"campoLabelParent[3]\" [heightDrop]=\"heightDropParent[3]\" [colorBorderDrop]=\"colorBorderDropParent[3]\" (valueDropList)=\"fnGetValueDropList($event, 3)\"></pq-drop-list>\n        </div>\n    </div>\n    <div class=\"containerTitle\">Contacto</div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Nombre</label>\n            <input [(ngModel)]=\"empresa.nombre\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Apellido Paterno</label>\n            <input [(ngModel)]=\"empresa.apellidoPaterno\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Apellido Materno</label>\n            <input [(ngModel)]=\"empresa.apellidoMaterno\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Correo Electrónico</label>\n            <input [(ngModel)]=\"empresa.correoElectronico\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Lada</label>\n            <input [(ngModel)]=\"empresa.lada1\" class=\"containerFormsInputsInput\" style=\"width:75px\" placeholder=\"000\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Teléfono 1</label>\n            <input [(ngModel)]=\"empresa.telefono1\" class=\"containerFormsInputsInput\" style=\"width:145px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Lada</label>\n            <input [(ngModel)]=\"empresa.lada2\" class=\"containerFormsInputsInput\" style=\"width:75px\" placeholder=\"000\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Teléfono 2</label>\n            <input [(ngModel)]=\"empresa.telefono2\" class=\"containerFormsInputsInput\" style=\"width:145px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"containerTitle\">Carga de Documentación</div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Logotipo</label>\n            <input (change)=\"fnGetFile($event, 0)\" id=\"fileEmp0\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"image/*\">\n            <div class=\"containerFormsInputsFileBox\">\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[0] }} </div>\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[0]\">\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\n                </div>\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[0]\">\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\n                </div>\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[0]\">\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\n                </div>\n            </div>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Registro Patronal</label>\n            <input (change)=\"fnGetFile($event, 1)\" id=\"fileEmp1\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\n            <div class=\"containerFormsInputsFileBox\">\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[1] }} </div>\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[1]\">\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\n                </div>\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[1]\">\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\n                </div>\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[1]\">\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\n                </div>\n            </div>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Certificado SAT</label>\n            <input (change)=\"fnGetFile($event, 2)\" id=\"fileEmp2\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pkix-cert\">\n            <div class=\"containerFormsInputsFileBox\">\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[2] }} </div>\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[2]\">\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\n                </div>\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[2]\">\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\n                </div>\n            </div>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Llave SAT</label>\n            <input (change)=\"fnGetFile($event, 3)\" id=\"fileEmp3\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pkcs8\">\n            <div class=\"containerFormsInputsFileBox\">\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[3] }} </div>\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[3]\">\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\n                </div>\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[3]\">\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"containerTitle\">\n        <div class=\"containerTitleItem1\">Trabajadores</div>\n        <div class=\"containerTitleItem2\" *ngIf=\"lstTrabajadores.length > 0\">\n            <img src=\"./assets/Images/maximinar.svg\" alt=\"Maximizar\" class=\"containerTitleItem2Img\">\n        </div>\n    </div>\n    <div class=\"lstTrabajadores\" *ngIf=\"lstTrabajadores.length > 0\">\n        <div class=\"lstTrabajadoresHeader\">\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 20px;max-width: 20px;justify-content: center;\">#</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 115px;max-width: 340px;\">Nombre</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 100px;max-width: 190px;\">Departamento</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 90px;max-width: 190px;\">Puesto</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 95px;max-width: 130px;\">RFC</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 100px;max-width: 150px;\">Teléfono</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 130px;max-width: 240px;\">Correo Electrónico</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 120px;max-width: 200px;\">Fecha de Ingreso</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 115px;max-width: 160px;\">Tipo de Contrato</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 80px;max-width: 150px;\">Estado</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 15px;max-width: 15px;\">&nbsp;</div>\n        </div>\n        <div class=\"lstTrabajadoresItem\" *ngFor=\"let item of lstTrabajadores; let i = index\">\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 20px;max-width: 20px;justify-content: center;\">{{i + 1}}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 115px;max-width: 340px;\">{{ item.nombre + ' ' + item.apellidoPaterno + ' ' + item.apellidoMaterno }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 100px;max-width: 190px;font-weight: 400;font-size: 16px;color: #008894;\">{{ item.departamento }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 90px;max-width: 190px;\">{{ item.puesto }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 95px;max-width: 130px;\">{{ item.datoFiscal.rfc }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 100px;max-width: 150px;\">{{ item.telefonoFijo }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 130px;max-width: 240px;\">{{ item.email }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 120px;max-width: 200px;\">{{ item.fechaInicioRelLaboral }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 115px;max-width: 160px;\">{{ item.contrato.descripcion }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 80px;max-width: 150px;\" [ngStyle]=\"{'color': (item.activo) ? '#4DA72C' : '#C1272D' }\">{{ (item.activo) ? 'Activo' : 'Finiquitado' }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 15px;max-width: 15px;\" (click)=\"fnVerTrabajador(item.idTrabajador)\"><img class=\"lstTrabajadoresItemColImg\" src=\"./assets/Images/ir.svg\" alt=\"Ir\"></div>\n        </div>\n    </div>\n    <div class=\"lstTrabajadoresVacia\" *ngIf=\"lstTrabajadores.length === 0\">\n        <div class=\"lstTrabajadoresVaciaLabel\">NO HAS AGREGADO TRABAJADORES</div>\n        <div [ngClass]=\"classBtnAcceptTrab\">AGREGAR TRABAJADOR</div>\n        <div style=\"display: none;\">{{ empresa | json }}</div>\n    </div>\n    <div class=\"containerBtns\">\n        <div class=\"containerBtnsBtnCancel\" (click)=\"fnReturnView()\">CANCELAR</div>\n        <div [ngClass]=\"classBtnAccept\" (click)=\"fnSaveCompany()\">ACEPTAR</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: calc(100vh - 130px); }\n  :host pn-header-bc {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 41px; }\n  :host > .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0px 20px;\n    height: calc(100vh - 170px);\n    overflow: scroll; }\n  :host > .container > .containerTitle {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      min-height: 44px;\n      border-bottom: 1px solid #424242;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding-bottom: 5px;\n      font-size: 17px;\n      color: #424242;\n      font-weight: 700;\n      font-family: Novecento;\n      text-transform: uppercase;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n  :host > .container > .containerTitle > .containerTitleItem1 {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  :host > .container > .containerTitle > .containerTitleItem2 {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  :host > .container > .containerTitle > .containerTitleItem2 > img.containerTitleItem2Img {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          width: 30px;\n          cursor: pointer;\n          -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out; }\n  :host > .container > .containerTitle > .containerTitleItem2 > img.containerTitleItem2Img:hover {\n          opacity: 0.5; }\n  :host > .container > .containerTitle > .containerTitleItem2 > img.containerTitleItem2Img:active {\n          opacity: 0.75; }\n  :host > .container > .containerForms {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      min-height: -webkit-max-content;\n      min-height: -moz-max-content;\n      min-height: max-content;\n      width: 100%;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      margin: 15px 0px; }\n  :host > .container > .containerForms > .containerFormsInputs {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        min-height: 85px; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          margin-right: 20px; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksLabel {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            height: 30px;\n            margin-top: 5px;\n            cursor: pointer;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz > .containerFormsInputsChecksUncheck {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              width: 18px;\n              height: 18px;\n              margin-right: 10px;\n              border: 1px solid #424242;\n              -webkit-transition: all 0.2s ease-in-out;\n              transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz > .checked {\n              content: url(\"/assets/Images/checked20px.svg\"); }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz > span.containerFormsInputsChecksSpan {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              font-size: 16px;\n              color: #424242;\n              font-weight: 400; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz:hover {\n            opacity: 0.5; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz:active {\n            opacity: 0.75; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFile {\n          display: none; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          margin-right: 90px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxInput {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            width: 250px;\n            height: 28px;\n            display: flex;\n            border: 1px solid #D8D8D8;\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            cursor: pointer;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxInput:hover {\n            opacity: 0.5; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxInput:active {\n            opacity: 0.75; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxUpload {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            cursor: pointer;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxUpload > .containerFormsInputsFileBoxUploadImg {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxUpload:hover {\n            opacity: 0.5; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxUpload:active {\n            opacity: 0.75; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxReload {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            cursor: pointer;\n            margin-right: 10px;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxReload > .containerFormsInputsFileBoxReloadImg {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxReload:hover {\n            opacity: 0.5; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxReload:active {\n            opacity: 0.75; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxView {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            cursor: pointer;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxView > .containerFormsInputsFileBoxViewImg {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxView:hover {\n            opacity: 0.5; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxView:active {\n            opacity: 0.75; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsSpan {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          font-size: 16px;\n          color: #424242;\n          font-weight: 400; }\n  :host > .container > .containerForms > .containerFormsInputs > pq-drop-list {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n  :host > .container > .containerForms > .containerFormsInputs > label.containerFormsInputsLabel {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          font-size: 16px;\n          color: #424242;\n          font-weight: 400; }\n  :host > .container > .containerForms > .containerFormsInputs > input.containerFormsInputsInput {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          width: 100%;\n          height: 30px;\n          margin-right: 20px;\n          margin-top: 5px;\n          border: 1px solid #D8D8D8;\n          font-size: 16px;\n          color: #424242;\n          font-weight: 400; }\n  :host > .container > .containerForms > .containerFormsInputLabel {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 55px; }\n  :host > .container > .containerForms > .containerFormsInputLabel > .containerFormsInputLabelCheck {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n  :host > .container > .lstTrabajadores {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      min-height: 320px;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: hidden; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresHeader {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 15px;\n        color: #424242;\n        font-weight: 700;\n        padding-bottom: 4px;\n        border-bottom: 1px solid #424242;\n        min-height: 49px;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresHeader > .lstTrabajadoresHeaderCol {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          width: calc(100% - 10px);\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          margin: 0px 5px;\n          -webkit-box-pack: start;\n              -ms-flex-pack: start;\n                  justify-content: flex-start; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 16px;\n        color: #424242;\n        font-weight: 400;\n        padding-bottom: 4px;\n        border-bottom: 1px solid #424242;\n        background: white;\n        min-height: 43px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        border-bottom: 1px solid #ECEEF0;\n        cursor: pointer;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem > .lstTrabajadoresItemCol {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          width: calc(100% - 10px);\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          margin: 0px 5px;\n          -webkit-box-pack: start;\n              -ms-flex-pack: start;\n                  justify-content: flex-start;\n          display: inline-block;\n          text-overflow: ellipsis;\n          /* Required for text-overflow to do anything */\n          white-space: nowrap;\n          overflow: hidden; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem > .lstTrabajadoresItemCol > img.lstTrabajadoresItemColImg {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            width: 14px;\n            cursor: pointer;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem > .lstTrabajadoresItemCol > img.lstTrabajadoresItemColImg:hover {\n            opacity: 0.5; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem > .lstTrabajadoresItemCol > img.lstTrabajadoresItemColImg:active {\n            opacity: 0.75; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem:hover {\n        background: #ECEEF0; }\n  :host > .container > .lstTrabajadoresVacia {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      min-height: 396px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  :host > .container > .lstTrabajadoresVacia > .lstTrabajadoresVaciaLabel {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 36px;\n        color: #D8D9DD;\n        font-family: Novecento;\n        font-weight: 700;\n        padding: 25px 0px; }\n  :host > .container > .lstTrabajadoresVacia > .lstTrabajadoresVaciaBtn {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        background: #008894;\n        width: 293px;\n        height: 30px;\n        font-size: 21px;\n        color: #FFFFFF;\n        font-family: Novecento;\n        font-weight: 700;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        cursor: pointer;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out; }\n  :host > .container > .lstTrabajadoresVacia > .lstTrabajadoresVaciaBtn:hover {\n        opacity: 0.5; }\n  :host > .container > .lstTrabajadoresVacia > .lstTrabajadoresVaciaBtn:active {\n        opacity: 0.75; }\n  :host > .container > .lstTrabajadoresVacia > .lstTrabajadoresVaciaBtnDisabled {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        background: #C2C3C9;\n        width: 293px;\n        height: 30px;\n        font-size: 21px;\n        color: #FFFFFF;\n        font-family: Novecento;\n        font-weight: 700;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        pointer-events: none; }\n  :host > .container > .containerBtns {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      min-height: 68px;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      border-top: 2px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      font-size: 21px;\n      color: #FFFFFF;\n      font-weight: 700; }\n  :host > .container > .containerBtns > .containerBtnsBtnCancel {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-family: Novecento;\n        background: #008894;\n        cursor: pointer;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out;\n        width: 170px;\n        height: 30px;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  :host > .container > .containerBtns > .containerBtnsBtnCancel:hover {\n        opacity: 0.5; }\n  :host > .container > .containerBtns > .containerBtnsBtnCancel:active {\n        opacity: 0.75; }\n  :host > .container > .containerBtns > .containerBtnsBtnDisabled {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-family: Novecento;\n        background: #C2C3C9;\n        pointer-events: none;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out;\n        width: 170px;\n        height: 30px;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  :host > .container > .containerBtns > .containerBtnsBtnActive {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-family: Novecento;\n        background: #4DA72C;\n        cursor: pointer;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out;\n        width: 170px;\n        height: 30px;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  :host > .container > .containerBtns > .containerBtnsBtnActive:hover {\n        opacity: 0.5; }\n  :host > .container > .containerBtns > .containerBtnsBtnActive:active {\n        opacity: 0.75; }\n"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearEmpresaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__ = __webpack_require__("./src/app/class/catalogo/empresa.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
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





var CrearEmpresaComponent = /** @class */ (function () {
    function CrearEmpresaComponent(catalogoService, coreComponent, router) {
        this.catalogoService = catalogoService;
        this.coreComponent = coreComponent;
        this.router = router;
        this.empresa = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__["a" /* Empresa */]();
        this.homePath = '/protected/catalogo/';
        this.opcion = [
            {
                label: 'Patrones',
                path: '/protected/catalogo/empresas',
            },
            {
                label: 'Agregar Patrón',
                path: '/protected/catalogo/empresas/crear/',
            },
        ];
        this.classBtnAccept = 'containerBtnsBtnDisabled';
        this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtnDisabled';
        this.lstTrabajadores = [];
        /* Inicio de variables para los SELECTS
        0.- Factor Riesgo
        1.- Sector Empresarial
        2.- Regimen Fiscal
        3.- Periodicidad de Pago
        */
        this.cantSelects = 4; // Siempre más uno
        this.itemsParent = new Array(this.cantSelects).fill(null);
        this.isSearchParent = new Array(this.cantSelects).fill(false);
        this.isCategoryParent = new Array(this.cantSelects).fill(false);
        this.sizeParent = new Array(this.cantSelects).fill('');
        this.alignParent = new Array(this.cantSelects).fill('left');
        this.itemSelectParent = new Array(this.cantSelects).fill({ nombre: 'Escribe Aquí', id: -1 });
        this.widthContentParent = new Array(this.cantSelects).fill('100%');
        this.marginLeftContentParent = new Array(this.cantSelects).fill('0px');
        this.tooltipParent = new Array(this.cantSelects).fill(false);
        this.tipoDropParent = new Array(this.cantSelects).fill('');
        this.campoLabelParent = new Array(this.cantSelects).fill('');
        this.heightDropParent = new Array(this.cantSelects).fill('35px'); // sumar 5px no sé por qué jajaxD
        this.colorBorderDropParent = new Array(this.cantSelects).fill('#D8D9DD');
        this.selectsLabels = ['Factor Riesgo', 'Sector Empresarial', 'Regimen Fiscal', 'Periodicidad de Pago'];
        this.selectsAux = new Array(this.cantSelects).fill(false);
        this.lstSectores = [
            { nombre: 'Comerciales', id: 0 },
            { nombre: 'Industriales', id: 0 },
            { nombre: 'Autotransporte', id: 0 },
            { nombre: 'Agrícolas', id: 0 },
            { nombre: 'Ganaderas', id: 0 },
            { nombre: 'Pesca', id: 0 },
            { nombre: 'Silvícolas', id: 0 }
        ];
        this.fileEmp = new Array(4).fill(null);
        this.fileEmpName = ['.png/.jpg', '.pdf', '.cer', '.key'];
        this.fileEmpIsUp = new Array(4).fill(false);
        this.validSections = new Array(4).fill(false);
        this.idEmpresa = 0;
    }
    CrearEmpresaComponent.prototype.ngDoCheck = function () {
        if (this.empresa.nomenclaturaEmpresa !== undefined && this.empresa.nomenclaturaEmpresa !== null && this.empresa.nomenclaturaEmpresa !== '' &&
            this.empresa.alias !== undefined && this.empresa.alias !== null && this.empresa.alias !== '' &&
            this.empresa.registroPatronal !== undefined && this.empresa.registroPatronal !== null && this.empresa.registroPatronal !== '' &&
            this.empresa.sitioWeb !== undefined && this.empresa.sitioWeb !== null && this.empresa.sitioWeb !== '' &&
            this.empresa.calle !== undefined && this.empresa.calle !== null && this.empresa.calle !== '' &&
            this.empresa.numero !== undefined && this.empresa.numero !== null && this.empresa.numero !== '' &&
            this.empresa.colonia !== undefined && this.empresa.colonia !== null && this.empresa.colonia !== '' &&
            this.empresa.cp !== undefined && this.empresa.cp !== null && this.empresa.cp !== '' &&
            this.empresa.estado !== undefined && this.empresa.estado !== null && this.empresa.estado !== '' &&
            this.empresa.delegacion !== undefined && this.empresa.delegacion !== null && this.empresa.delegacion !== '' &&
            this.empresa.factorRiesgo.idNominaCatalogo > 0 &&
            this.empresa.sectorEmpresarial !== undefined && this.empresa.sectorEmpresarial !== null && this.empresa.sectorEmpresarial !== '') {
            this.validSections[0] = true;
        }
        else {
            this.validSections[0] = false;
        }
        if (this.empresa.razonSocial !== undefined && this.empresa.razonSocial !== null && this.empresa.razonSocial !== '' &&
            this.empresa.regimenFiscal !== undefined && this.empresa.regimenFiscal !== null && this.empresa.regimenFiscal !== '' &&
            this.empresa.rfcEmpresa !== undefined && this.empresa.rfcEmpresa !== null && this.empresa.rfcEmpresa !== '' &&
            this.empresa.contraseniaSAT !== undefined && this.empresa.contraseniaSAT !== null && this.empresa.contraseniaSAT !== '' &&
            this.empresa.serie !== undefined && this.empresa.serie !== null && this.empresa.serie !== '' &&
            this.empresa.calle2 !== undefined && this.empresa.calle2 !== null && this.empresa.calle2 !== '' &&
            this.empresa.numero2 !== undefined && this.empresa.numero2 !== null && this.empresa.numero2 !== '' &&
            this.empresa.colonia2 !== undefined && this.empresa.colonia2 !== null && this.empresa.colonia2 !== '' &&
            this.empresa.cp2 !== undefined && this.empresa.cp2 !== null && this.empresa.cp2 !== '' &&
            this.empresa.estado2 !== undefined && this.empresa.estado2 !== null && this.empresa.estado2 !== '' &&
            this.empresa.delegacion2 !== undefined && this.empresa.delegacion2 !== null && this.empresa.delegacion2 !== '' &&
            this.empresa.periodicidadPago.idNominaCatalogo > 0) {
            this.validSections[1] = true;
        }
        else {
            this.validSections[1] = false;
        }
        if (this.empresa.nombre !== undefined && this.empresa.nombre !== null && this.empresa.nombre !== '' &&
            this.empresa.apellidoPaterno !== undefined && this.empresa.apellidoPaterno !== null && this.empresa.apellidoPaterno !== '' &&
            this.empresa.apellidoMaterno !== undefined && this.empresa.apellidoMaterno !== null && this.empresa.apellidoMaterno !== '' &&
            this.empresa.correoElectronico !== undefined && this.empresa.correoElectronico !== null && this.empresa.correoElectronico !== '' &&
            this.empresa.lada1 !== undefined && this.empresa.lada1 !== null && this.empresa.lada1 !== '' &&
            this.empresa.telefono1 !== undefined && this.empresa.telefono1 !== null && this.empresa.telefono1 !== '' &&
            this.empresa.lada2 !== undefined && this.empresa.lada2 !== null && this.empresa.lada2 !== '' &&
            this.empresa.telefono2 !== undefined && this.empresa.telefono2 !== null && this.empresa.telefono2 !== '') {
            this.validSections[2] = true;
            this.empresa.telefono = this.empresa.lada1 + this.empresa.telefono1;
        }
        else {
            this.validSections[2] = false;
        }
        if (this.fileEmpIsUp[0] && this.fileEmpIsUp[1] && this.fileEmpIsUp[2] && this.fileEmpIsUp[3]) {
            this.validSections[3] = true;
        }
        else {
            this.validSections[3] = false;
        }
        if (this.validSections[0] && this.validSections[1] && this.validSections[2] && this.validSections[3]) {
            this.classBtnAccept = 'containerBtnsBtnActive';
        }
        else {
            this.classBtnAccept = 'containerBtnsBtnDisabled';
        }
    };
    CrearEmpresaComponent.prototype.ngOnInit = function () {
        this.coreComponent.openModal(0);
        for (var x = 0; x < this.cantSelects; x++) {
            this.fnFillSelects(x);
        }
    };
    CrearEmpresaComponent.prototype.fnSaveCompany = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this.catalogoService.guardarEmpresa(this.empresa).subscribe(function (emp) {
            console.log(emp);
            if (emp.current !== undefined && emp.current !== null && emp.current > 0) {
                var idEmpresa = emp.current.idEmpresa;
                _this.empresa.idEmpresa = idEmpresa;
                /* this.catalogoService.subirArchivosEmpresa('logo', this.fileEmp[0], idEmpresa).subscribe(resLogo => {
                    console.log('subirArchivosEmpresa LOGO: ', resLogo);
                    this.catalogoService.subirArchivosEmpresa('registroPatronal', this.fileEmp[1], idEmpresa).subscribe(resRegistro => {
                        console.log('subirArchivosEmpresa resRegistro: ', resRegistro);
                        this.catalogoService.subirArchivosEmpresa('cer', this.fileEmp[2], idEmpresa).subscribe(resCer => {
                            console.log('subirArchivosEmpresa resCer: ', resCer);
                            this.catalogoService.subirArchivosEmpresa('key', this.fileEmp[3], idEmpresa).subscribe(resKey => {
                                setTimeout(() => {
                                    console.log('subirArchivosEmpresa resKey: ', resKey);
                                    this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtn';
                                    this.coreComponent.closeModal(0);
                                }, 1500);
                            }, error => {
                                setTimeout(() => {
                                    console.log('ERROR subirArchivosEmpresa resKey: ', error);
                                    this.coreComponent.closeModal(0);
                                }, 1500);
                            });
                        }, error => {
                            setTimeout(() => {
                                console.log('ERROR subirArchivosEmpresa resCer: ', error);
                                this.coreComponent.closeModal(0);
                            }, 1500);
                        });
                    }, error => {
                        setTimeout(() => {
                            console.log('ERROR subirArchivosEmpresa resRegistro: ', error);
                            this.coreComponent.closeModal(0);
                        }, 1500);
                    });
                }, error => {
                    setTimeout(() => {
                        console.log('ERROR subirArchivosEmpresa LOGO: ', error);
                        this.coreComponent.closeModal(0);
                    }, 1500);
                }); */
                setTimeout(function () {
                    _this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtn';
                    _this.coreComponent.closeModal(0);
                }, 1500);
            }
            else {
                _this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtnDisabled';
            }
        }, function (error) {
            setTimeout(function () {
                console.log('Error: guardarEmpresa', error);
                _this.coreComponent.closeModal(0);
            }, 1500);
        });
    };
    CrearEmpresaComponent.prototype.fnGetValueDropList = function (value, index) {
        console.log(value, index);
        switch (index) {
            case 0:
                this.empresa.factorRiesgo.idNominaCatalogo = value.id;
                break;
            case 1:
                this.empresa.sectorEmpresarial = value.nombre;
                break;
            case 2:
                this.empresa.regimenFiscal = value.nombre.split(' - ')[0];
                break;
            case 3:
                this.empresa.periodicidadPago.idNominaCatalogo = value.id;
                break;
        }
    };
    CrearEmpresaComponent.prototype.fnSelectsAux = function () {
        var _this = this;
        var x = 0;
        for (var _i = 0, _a = this.selectsAux; _i < _a.length; _i++) {
            var sAux = _a[_i];
            if (sAux) {
                x++;
            }
            else {
                break;
            }
        }
        if (this.selectsAux.length === x) {
            setTimeout(function () {
                _this.coreComponent.closeModal(0);
            }, 1500);
        }
    };
    CrearEmpresaComponent.prototype.fnFillSelects = function (opc) {
        var _this = this;
        switch (opc) {
            case 0:
                this.catalogoService.obtenerNominaCatalogo('RiesgoPuesto').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - RiesgoPuesto: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                    console.log('obtenerNominaCatalogo - RiesgoPuesto Values: ', _this.itemsParent[opc]);
                }, function (error) {
                    console.log('ERROR obtenerNominaCatalogo - RiesgoPuesto: ', error);
                });
                break;
            case 1:
                this.itemsParent[opc] = [];
                for (var _i = 0, _a = this.lstSectores; _i < _a.length; _i++) {
                    var it = _a[_i];
                    this.itemsParent[opc].push(Object.assign({}, it));
                }
                break;
            case 2:
                this.catalogoService.obtenerNominaCatalogo('RegimenFiscal').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - RegimenFiscal: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                    console.log('obtenerNominaCatalogo - RegimenFiscal Values: ', _this.itemsParent[opc]);
                }, function (error) {
                    console.log('ERROR obtenerNominaCatalogo - RegimenFiscal: ', error);
                });
                break;
            case 3:
                this.catalogoService.obtenerNominaCatalogo('PeriodicidadPago').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - PeriodicidadPago: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                    console.log('obtenerNominaCatalogo - PeriodicidadPago Values: ', _this.itemsParent[opc]);
                }, function (error) {
                    console.log('ERROR obtenerNominaCatalogo - PeriodicidadPago: ', error);
                });
                break;
        }
        this.selectsAux[opc] = true;
        this.fnSelectsAux();
    };
    CrearEmpresaComponent.prototype.fnClickFile = function (opc) {
        document.getElementById('fileEmp' + opc).click();
    };
    CrearEmpresaComponent.prototype.fnGetFile = function ($event, opc) {
        console.log($event, opc);
        if ($event.target.files !== undefined && $event.target.files !== null && $event.target.files.length > 0) {
            this.fileEmp[opc] = $event.target.files;
            this.fileEmpIsUp[opc] = true;
            this.fileEmpName[opc] = (opc === 0) ? 'Logo.' + $event.target.files[0].type.split('/')[1] : $event.target.files[0].name;
        }
        else {
            this.fileEmp[opc] = null;
            this.fileEmpIsUp[opc] = false;
            this.fileEmpName[opc] = (opc === 0) ? '.png/.jpg' : (opc === 1) ? '.pdf' : (opc === 2) ? '.cer' : '.key';
        }
    };
    CrearEmpresaComponent.prototype.fnReturnView = function () {
        this.router.navigate(['/protected/catalogo/empresas']);
    };
    CrearEmpresaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pn-crear-empresa',
            template: __webpack_require__("./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], CrearEmpresaComponent);
    return CrearEmpresaComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"opcion\" [homePath]=\"homePath\"></pn-header-bc>\n<div class=\"container\">\n    <div class=\"containerTitle\">Datos Generales</div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <div class=\"containerFormsInputsChecks\" style=\"width: 170px;\">\n                <div class=\"containerFormsInputsChecksLabel\">&nbsp;</div>\n                <div class=\"containerFormsInputsChecksHoriz\" (click)=\"fnCheck(0)\">\n                    <div [ngClass]=\"checkBtn[0]\"></div>\n                    <span class=\"containerFormsInputsChecksSpan\" [style.font-weight]=\"'700'\">{{checkBtnLabel[0]}}</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">ID</label>\n            <input [(ngModel)]=\"empresa.nomenclaturaEmpresa\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Nombre</label>\n            <input [(ngModel)]=\"empresa.alias\" class=\"containerFormsInputsInput\" style=\"width:337px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[0] }}</span><!-- Factor Riesgo -->\n            <pq-drop-list style=\"width:307px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[0]\" [isSearch]=\"isSearchParent[0]\" [isCategory]=\"isCategoryParent[0]\" [size]=\"sizeParent[0]\" [align]=\"alignParent[0]\" [itemSelect]=\"itemSelectParent[0]\" [widthContent]=\"widthContentParent[0]\" [marginLeftContent]=\"marginLeftContentParent[0]\" [tooltip]=\"tooltipParent[0]\" [tipoDrop]=\"tipoDropParent[0]\" [campoLabel]=\"campoLabelParent[0]\" [heightDrop]=\"heightDropParent[0]\" [colorBorderDrop]=\"colorBorderDropParent[0]\" (valueDropList)=\"fnGetValueDropList($event, 0)\"></pq-drop-list>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Registro Patronal</label>\n            <input [(ngModel)]=\"empresa.registroPatronal\" class=\"containerFormsInputsInput\" style=\"width:240px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Sitio Web</label>\n            <input [(ngModel)]=\"empresa.sitioWeb\" class=\"containerFormsInputsInput\" style=\"width:390px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[1] }}</span><!-- Sector Empresarial -->\n            <pq-drop-list style=\"width:330px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[1]\" [isSearch]=\"isSearchParent[1]\" [isCategory]=\"isCategoryParent[1]\" [size]=\"sizeParent[1]\" [align]=\"alignParent[1]\" [itemSelect]=\"itemSelectParent[1]\" [widthContent]=\"widthContentParent[1]\" [marginLeftContent]=\"marginLeftContentParent[1]\" [tooltip]=\"tooltipParent[1]\" [tipoDrop]=\"tipoDropParent[1]\" [campoLabel]=\"campoLabelParent[1]\" [heightDrop]=\"heightDropParent[1]\" [colorBorderDrop]=\"colorBorderDropParent[1]\" (valueDropList)=\"fnGetValueDropList($event, 1)\"></pq-drop-list>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Calle</label>\n            <input [(ngModel)]=\"empresa.calle\" class=\"containerFormsInputsInput\" style=\"width:385px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número</label>\n            <input [(ngModel)]=\"empresa.numero\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Colonia</label>\n            <input [(ngModel)]=\"empresa.colonia\" class=\"containerFormsInputsInput\" style=\"width:539px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Código Postal</label>\n            <input [(ngModel)]=\"empresa.cp\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Estado</label>\n            <input [(ngModel)]=\"empresa.estado\" class=\"containerFormsInputsInput\" style=\"width:198px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Municipio/Delegación</label>\n            <input [(ngModel)]=\"empresa.delegacion\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"containerTitle\">Datos Fiscales</div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Razón Social</label>\n            <input [(ngModel)]=\"empresa.razonSocial\" class=\"containerFormsInputsInput\" style=\"width:400px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[2] }}</span><!-- Regimen Fiscal -->\n            <pq-drop-list style=\"width:400px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[2]\" [isSearch]=\"isSearchParent[2]\" [isCategory]=\"isCategoryParent[2]\" [size]=\"sizeParent[2]\" [align]=\"alignParent[2]\" [itemSelect]=\"itemSelectParent[2]\" [widthContent]=\"widthContentParent[2]\" [marginLeftContent]=\"marginLeftContentParent[2]\" [tooltip]=\"tooltipParent[2]\" [tipoDrop]=\"tipoDropParent[2]\" [campoLabel]=\"campoLabelParent[2]\" [heightDrop]=\"heightDropParent[2]\" [colorBorderDrop]=\"colorBorderDropParent[2]\" (valueDropList)=\"fnGetValueDropList($event, 2)\"></pq-drop-list>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">RFC</label>\n            <input [(ngModel)]=\"empresa.rfcEmpresa\" class=\"containerFormsInputsInput\" style=\"width:275px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Contraseña SAT</label>\n            <input [(ngModel)]=\"empresa.contraseniaSAT\" class=\"containerFormsInputsInput\" style=\"width:340px\" placeholder=\"Escribe Aquí\" type=\"password\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Serie</label>\n            <input [(ngModel)]=\"empresa.serie\" class=\"containerFormsInputsInput\" style=\"width:345px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Calle</label>\n            <input [(ngModel)]=\"empresa.calle2\" class=\"containerFormsInputsInput\" style=\"width:385px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número</label>\n            <input [(ngModel)]=\"empresa.numero2\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Colonia</label>\n            <input [(ngModel)]=\"empresa.colonia2\" class=\"containerFormsInputsInput\" style=\"width:539px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Código Postal</label>\n            <input [(ngModel)]=\"empresa.cp2\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Estado</label>\n            <input [(ngModel)]=\"empresa.estado2\" class=\"containerFormsInputsInput\" style=\"width:198px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Municipio/Delegación</label>\n            <input [(ngModel)]=\"empresa.delegacion2\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[3] }}</span><!-- Periodicidad de Pago -->\n            <pq-drop-list style=\"width:330px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[3]\" [isSearch]=\"isSearchParent[3]\" [isCategory]=\"isCategoryParent[3]\" [size]=\"sizeParent[3]\" [align]=\"alignParent[3]\" [itemSelect]=\"itemSelectParent[3]\" [widthContent]=\"widthContentParent[3]\" [marginLeftContent]=\"marginLeftContentParent[3]\" [tooltip]=\"tooltipParent[3]\" [tipoDrop]=\"tipoDropParent[3]\" [campoLabel]=\"campoLabelParent[3]\" [heightDrop]=\"heightDropParent[3]\" [colorBorderDrop]=\"colorBorderDropParent[3]\" (valueDropList)=\"fnGetValueDropList($event, 3)\"></pq-drop-list>\n        </div>\n    </div>\n    <div class=\"containerTitle\">Contacto</div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Nombre</label>\n            <input [(ngModel)]=\"empresa.nombre\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Apellido Paterno</label>\n            <input [(ngModel)]=\"empresa.apellidoPaterno\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Apellido Materno</label>\n            <input [(ngModel)]=\"empresa.apellidoMaterno\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Correo Electrónico</label>\n            <input [(ngModel)]=\"empresa.correoElectronico\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Lada</label>\n            <input [(ngModel)]=\"empresa.lada1\" class=\"containerFormsInputsInput\" style=\"width:75px\" placeholder=\"000\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Teléfono 1</label>\n            <input [(ngModel)]=\"empresa.telefono1\" class=\"containerFormsInputsInput\" style=\"width:145px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Lada</label>\n            <input [(ngModel)]=\"empresa.lada2\" class=\"containerFormsInputsInput\" style=\"width:75px\" placeholder=\"000\" type=\"text\">\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Teléfono 2</label>\n            <input [(ngModel)]=\"empresa.telefono2\" class=\"containerFormsInputsInput\" style=\"width:145px\" placeholder=\"Escribe Aquí\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"containerTitle\">Carga de Documentación</div>\n    <div class=\"containerForms\">\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Logotipo</label>\n            <input (change)=\"fnGetFile($event, 0)\" id=\"fileEmp0\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"image/*\">\n            <div class=\"containerFormsInputsFileBox\">\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[0] }} </div>\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[0]\">\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\n                </div>\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[0]\">\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\n                </div>\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[0]\">\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\n                </div>\n            </div>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Registro Patronal</label>\n            <input (change)=\"fnGetFile($event, 1)\" id=\"fileEmp1\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\n            <div class=\"containerFormsInputsFileBox\">\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[1] }} </div>\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[1]\">\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\n                </div>\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[1]\">\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\n                </div>\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[1]\">\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\n                </div>\n            </div>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Certificado SAT</label>\n            <input (change)=\"fnGetFile($event, 2)\" id=\"fileEmp2\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pkix-cert\">\n            <div class=\"containerFormsInputsFileBox\">\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[2] }} </div>\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[2]\">\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\n                </div>\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[2]\">\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\n                </div>\n            </div>\n        </div>\n        <div class=\"containerFormsInputs\">\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Llave SAT</label>\n            <input (change)=\"fnGetFile($event, 3)\" id=\"fileEmp3\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pkcs8\">\n            <div class=\"containerFormsInputsFileBox\">\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[3] }} </div>\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[3]\">\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\n                </div>\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[3]\">\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"containerTitle\">\n        <div class=\"containerTitleItem1\">Trabajadores</div>\n        <div class=\"containerTitleItem2\" *ngIf=\"lstTrabajadores.length > 0\">\n            <img src=\"./assets/Images/maximinar.svg\" alt=\"Maximizar\" class=\"containerTitleItem2Img\">\n        </div>\n    </div>\n    <div class=\"lstTrabajadores\" *ngIf=\"lstTrabajadores.length > 0\">\n        <div class=\"lstTrabajadoresHeader\">\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 20px;max-width: 20px;justify-content: center;\">#</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 115px;max-width: 340px;\">Nombre</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 100px;max-width: 190px;\">Departamento</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 90px;max-width: 190px;\">Puesto</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 95px;max-width: 130px;\">RFC</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 100px;max-width: 150px;\">Teléfono</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 130px;max-width: 240px;\">Correo Electrónico</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 120px;max-width: 200px;\">Fecha de Ingreso</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 115px;max-width: 160px;\">Tipo de Contrato</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 80px;max-width: 150px;\">Estado</div>\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 15px;max-width: 15px;\">&nbsp;</div>\n        </div>\n        <div class=\"lstTrabajadoresItem\" *ngFor=\"let item of lstTrabajadores; let i = index\">\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 20px;max-width: 20px;justify-content: center;\">{{i + 1}}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 115px;max-width: 340px;\">{{ item.nombre + ' ' + item.apellidoPaterno + ' ' + item.apellidoMaterno }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 100px;max-width: 190px;font-weight: 400;font-size: 16px;color: #008894;\">{{ item.departamento }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 90px;max-width: 190px;\">{{ item.puesto }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 95px;max-width: 130px;\">{{ item.datoFiscal.rfc }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 100px;max-width: 150px;\">{{ item.telefonoFijo }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 130px;max-width: 240px;\">{{ item.email }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 120px;max-width: 200px;\">{{ item.fechaInicioRelLaboral }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 115px;max-width: 160px;\">{{ item.contrato.descripcion }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 80px;max-width: 150px;\" [ngStyle]=\"{'color': (item.activo) ? '#4DA72C' : '#C1272D' }\">{{ (item.activo) ? 'Activo' : 'Finiquitado' }}</div>\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 15px;max-width: 15px;\" (click)=\"fnVerTrabajador(item.idTrabajador)\"><img class=\"lstTrabajadoresItemColImg\" src=\"./assets/Images/ir.svg\" alt=\"Ir\"></div>\n        </div>\n    </div>\n    <div class=\"lstTrabajadoresVacia\" *ngIf=\"lstTrabajadores.length === 0\">\n        <div class=\"lstTrabajadoresVaciaLabel\">NO HAS AGREGADO TRABAJADORES</div>\n        <div [ngClass]=\"classBtnAcceptTrab\">AGREGAR TRABAJADOR</div>\n        <div style=\"display: none;\">{{ empresa | json }}</div>\n    </div>\n    <div class=\"containerBtns\">\n        <div class=\"containerBtnsBtnCancel\" (click)=\"fnReturnView()\">CANCELAR</div>\n        <div [ngClass]=\"classBtnAccept\" (click)=\"fnSaveCompany()\">ACEPTAR</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: calc(100vh - 130px); }\n  :host pn-header-bc {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 41px; }\n  :host > .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0px 20px;\n    height: calc(100vh - 170px);\n    overflow: scroll; }\n  :host > .container > .containerTitle {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      min-height: 44px;\n      border-bottom: 1px solid #424242;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding-bottom: 5px;\n      font-size: 17px;\n      color: #424242;\n      font-weight: 700;\n      font-family: Novecento;\n      text-transform: uppercase;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n  :host > .container > .containerTitle > .containerTitleItem1 {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  :host > .container > .containerTitle > .containerTitleItem2 {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  :host > .container > .containerTitle > .containerTitleItem2 > img.containerTitleItem2Img {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          width: 30px;\n          cursor: pointer;\n          -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out; }\n  :host > .container > .containerTitle > .containerTitleItem2 > img.containerTitleItem2Img:hover {\n          opacity: 0.5; }\n  :host > .container > .containerTitle > .containerTitleItem2 > img.containerTitleItem2Img:active {\n          opacity: 0.75; }\n  :host > .container > .containerForms {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      min-height: -webkit-max-content;\n      min-height: -moz-max-content;\n      min-height: max-content;\n      width: 100%;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      margin: 15px 0px; }\n  :host > .container > .containerForms > .containerFormsInputs {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        min-height: 85px; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          margin-right: 20px; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksLabel {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            height: 30px;\n            margin-top: 5px;\n            cursor: pointer;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz > .containerFormsInputsChecksUncheck {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              width: 18px;\n              height: 18px;\n              margin-right: 10px;\n              border: 1px solid #424242;\n              -webkit-transition: all 0.2s ease-in-out;\n              transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz > .checked {\n              content: url(\"/assets/Images/checked20px.svg\"); }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz > span.containerFormsInputsChecksSpan {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              font-size: 16px;\n              color: #424242;\n              font-weight: 400; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz:hover {\n            opacity: 0.5; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsChecks > .containerFormsInputsChecksHoriz:active {\n            opacity: 0.75; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFile {\n          display: none; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          margin-right: 90px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxInput {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            width: 250px;\n            height: 28px;\n            display: flex;\n            border: 1px solid #D8D8D8;\n            font-size: 16px;\n            color: #424242;\n            font-weight: 400;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            cursor: pointer;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxInput:hover {\n            opacity: 0.5; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxInput:active {\n            opacity: 0.75; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxUpload {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            cursor: pointer;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxUpload > .containerFormsInputsFileBoxUploadImg {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxUpload:hover {\n            opacity: 0.5; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxUpload:active {\n            opacity: 0.75; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxReload {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            cursor: pointer;\n            margin-right: 10px;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxReload > .containerFormsInputsFileBoxReloadImg {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxReload:hover {\n            opacity: 0.5; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxReload:active {\n            opacity: 0.75; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxView {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            cursor: pointer;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxView > .containerFormsInputsFileBoxViewImg {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxView:hover {\n            opacity: 0.5; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsFileBox > .containerFormsInputsFileBoxView:active {\n            opacity: 0.75; }\n  :host > .container > .containerForms > .containerFormsInputs > .containerFormsInputsSpan {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          font-size: 16px;\n          color: #424242;\n          font-weight: 400; }\n  :host > .container > .containerForms > .containerFormsInputs > pq-drop-list {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n  :host > .container > .containerForms > .containerFormsInputs > label.containerFormsInputsLabel {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          font-size: 16px;\n          color: #424242;\n          font-weight: 400; }\n  :host > .container > .containerForms > .containerFormsInputs > input.containerFormsInputsInput {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          width: 100%;\n          height: 30px;\n          margin-right: 20px;\n          margin-top: 5px;\n          border: 1px solid #D8D8D8;\n          font-size: 16px;\n          color: #424242;\n          font-weight: 400; }\n  :host > .container > .containerForms > .containerFormsInputLabel {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 55px; }\n  :host > .container > .containerForms > .containerFormsInputLabel > .containerFormsInputLabelCheck {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n  :host > .container > .lstTrabajadores {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      min-height: 320px;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: hidden; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresHeader {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 15px;\n        color: #424242;\n        font-weight: 700;\n        padding-bottom: 4px;\n        border-bottom: 1px solid #424242;\n        min-height: 49px;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresHeader > .lstTrabajadoresHeaderCol {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          width: calc(100% - 10px);\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          margin: 0px 5px;\n          -webkit-box-pack: start;\n              -ms-flex-pack: start;\n                  justify-content: flex-start; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 16px;\n        color: #424242;\n        font-weight: 400;\n        padding-bottom: 4px;\n        border-bottom: 1px solid #424242;\n        background: white;\n        min-height: 43px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        border-bottom: 1px solid #ECEEF0;\n        cursor: pointer;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem > .lstTrabajadoresItemCol {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          width: calc(100% - 10px);\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          margin: 0px 5px;\n          -webkit-box-pack: start;\n              -ms-flex-pack: start;\n                  justify-content: flex-start;\n          display: inline-block;\n          text-overflow: ellipsis;\n          /* Required for text-overflow to do anything */\n          white-space: nowrap;\n          overflow: hidden; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem > .lstTrabajadoresItemCol > img.lstTrabajadoresItemColImg {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            width: 14px;\n            cursor: pointer;\n            -webkit-transition: all 0.2s ease-in-out;\n            transition: all 0.2s ease-in-out; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem > .lstTrabajadoresItemCol > img.lstTrabajadoresItemColImg:hover {\n            opacity: 0.5; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem > .lstTrabajadoresItemCol > img.lstTrabajadoresItemColImg:active {\n            opacity: 0.75; }\n  :host > .container > .lstTrabajadores > .lstTrabajadoresItem:hover {\n        background: #ECEEF0; }\n  :host > .container > .lstTrabajadoresVacia {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      min-height: 396px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  :host > .container > .lstTrabajadoresVacia > .lstTrabajadoresVaciaLabel {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 36px;\n        color: #D8D9DD;\n        font-family: Novecento;\n        font-weight: 700;\n        padding: 25px 0px; }\n  :host > .container > .lstTrabajadoresVacia > .lstTrabajadoresVaciaBtn {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        background: #008894;\n        width: 293px;\n        height: 30px;\n        font-size: 21px;\n        color: #FFFFFF;\n        font-family: Novecento;\n        font-weight: 700;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        cursor: pointer;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out; }\n  :host > .container > .lstTrabajadoresVacia > .lstTrabajadoresVaciaBtn:hover {\n        opacity: 0.5; }\n  :host > .container > .lstTrabajadoresVacia > .lstTrabajadoresVaciaBtn:active {\n        opacity: 0.75; }\n  :host > .container > .lstTrabajadoresVacia > .lstTrabajadoresVaciaBtnDisabled {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        background: #C2C3C9;\n        width: 293px;\n        height: 30px;\n        font-size: 21px;\n        color: #FFFFFF;\n        font-family: Novecento;\n        font-weight: 700;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        pointer-events: none; }\n  :host > .container > .containerBtns {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      min-height: 68px;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      border-top: 2px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      font-size: 21px;\n      color: #FFFFFF;\n      font-weight: 700; }\n  :host > .container > .containerBtns > .containerBtnsBtnCancel {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-family: Novecento;\n        background: #008894;\n        cursor: pointer;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out;\n        width: 170px;\n        height: 30px;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  :host > .container > .containerBtns > .containerBtnsBtnCancel:hover {\n        opacity: 0.5; }\n  :host > .container > .containerBtns > .containerBtnsBtnCancel:active {\n        opacity: 0.75; }\n  :host > .container > .containerBtns > .containerBtnsBtnDisabled {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-family: Novecento;\n        background: #C2C3C9;\n        pointer-events: none;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out;\n        width: 170px;\n        height: 30px;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  :host > .container > .containerBtns > .containerBtnsBtnActive {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-family: Novecento;\n        background: #4DA72C;\n        cursor: pointer;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out;\n        width: 170px;\n        height: 30px;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  :host > .container > .containerBtns > .containerBtnsBtnActive:hover {\n        opacity: 0.5; }\n  :host > .container > .containerBtns > .containerBtnsBtnActive:active {\n        opacity: 0.75; }\n"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarEmpresaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__ = __webpack_require__("./src/app/class/catalogo/empresa.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditarEmpresaComponent = /** @class */ (function () {
    function EditarEmpresaComponent(router, route, catalogoService, coreComponent) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.catalogoService = catalogoService;
        this.coreComponent = coreComponent;
        this.empresa = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__["a" /* Empresa */]();
        this.homePath = '/protected/catalogo/';
        this.idEmpresa = 0;
        this.opcion = [
            {
                label: 'Patrones',
                path: '/protected/catalogo/empresas/',
            }
        ];
        this.classBtnAccept = 'containerBtnsBtnDisabled';
        this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtnDisabled';
        this.lstTrabajadores = [];
        /* Inicio de variables para los SELECTS
        0.- Factor Riesgo
        1.- Sector Empresarial
        2.- Regimen Fiscal
        3.- Periodicidad de Pago
        */
        this.cantSelects = 4; // Siempre más uno
        this.itemsParent = new Array(this.cantSelects).fill(null);
        this.isSearchParent = new Array(this.cantSelects).fill(false);
        this.isCategoryParent = new Array(this.cantSelects).fill(false);
        this.sizeParent = new Array(this.cantSelects).fill('');
        this.alignParent = new Array(this.cantSelects).fill('left');
        this.itemSelectParent = new Array(this.cantSelects).fill({ nombre: 'Escribe Aquí', id: -1 });
        this.widthContentParent = new Array(this.cantSelects).fill('100%');
        this.marginLeftContentParent = new Array(this.cantSelects).fill('0px');
        this.tooltipParent = new Array(this.cantSelects).fill(false);
        this.tipoDropParent = new Array(this.cantSelects).fill('');
        this.campoLabelParent = new Array(this.cantSelects).fill('');
        this.heightDropParent = new Array(this.cantSelects).fill('35px'); // sumar 5px no sé por qué jajaxD
        this.colorBorderDropParent = new Array(this.cantSelects).fill('#D8D9DD');
        this.selectsLabels = ['Factor Riesgo', 'Sector Empresarial', 'Regimen Fiscal', 'Periodicidad de Pago'];
        this.lstSectores = [
            { nombre: 'Comerciales', id: 0 },
            { nombre: 'Industriales', id: 0 },
            { nombre: 'Autotransporte', id: 0 },
            { nombre: 'Agrícolas', id: 0 },
            { nombre: 'Ganaderas', id: 0 },
            { nombre: 'Pesca', id: 0 },
            { nombre: 'Silvícolas', id: 0 }
        ];
        this.fileEmp = new Array(4).fill(null);
        this.fileEmpName = ['.png/.jpg', '.pdf', '.cer', '.key'];
        this.fileEmpIsUp = new Array(4).fill(true);
        this.fileEmpIsUpUpdate = new Array(4).fill(false);
        this.validSections = new Array(4).fill(false);
        this.checkBtnCant = 1;
        this.checkBtn = new Array(this.checkBtnCant).fill('containerFormsInputsChecksUncheck checked');
        this.checkBtnLabel = new Array(this.checkBtnCant).fill('Deshabilitar Patrón');
        this.route.params.subscribe(function (params) {
            _this.idEmpresa = params['id'];
        });
    }
    EditarEmpresaComponent.prototype.ngDoCheck = function () {
        if (this.empresa.nomenclaturaEmpresa !== undefined && this.empresa.nomenclaturaEmpresa !== null && this.empresa.nomenclaturaEmpresa !== '' &&
            this.empresa.alias !== undefined && this.empresa.alias !== null && this.empresa.alias !== '' &&
            this.empresa.registroPatronal !== undefined && this.empresa.registroPatronal !== null && this.empresa.registroPatronal !== '' &&
            this.empresa.sitioWeb !== undefined && this.empresa.sitioWeb !== null && this.empresa.sitioWeb !== '' &&
            this.empresa.calle !== undefined && this.empresa.calle !== null && this.empresa.calle !== '' &&
            this.empresa.numero !== undefined && this.empresa.numero !== null && this.empresa.numero !== '' &&
            this.empresa.colonia !== undefined && this.empresa.colonia !== null && this.empresa.colonia !== '' &&
            this.empresa.cp !== undefined && this.empresa.cp !== null && this.empresa.cp !== '' &&
            this.empresa.estado !== undefined && this.empresa.estado !== null && this.empresa.estado !== '' &&
            this.empresa.delegacion !== undefined && this.empresa.delegacion !== null && this.empresa.delegacion !== '' &&
            this.empresa.factorRiesgo.idNominaCatalogo > 0 &&
            this.empresa.sectorEmpresarial !== undefined && this.empresa.sectorEmpresarial !== null && this.empresa.sectorEmpresarial !== '') {
            this.validSections[0] = true;
        }
        else {
            this.validSections[0] = false;
        }
        if (this.empresa.razonSocial !== undefined && this.empresa.razonSocial !== null && this.empresa.razonSocial !== '' &&
            this.empresa.regimenFiscal !== undefined && this.empresa.regimenFiscal !== null && this.empresa.regimenFiscal !== '' &&
            this.empresa.rfcEmpresa !== undefined && this.empresa.rfcEmpresa !== null && this.empresa.rfcEmpresa !== '' &&
            this.empresa.contraseniaSAT !== undefined && this.empresa.contraseniaSAT !== null && this.empresa.contraseniaSAT !== '' &&
            this.empresa.serie !== undefined && this.empresa.serie !== null && this.empresa.serie !== '' &&
            this.empresa.calle2 !== undefined && this.empresa.calle2 !== null && this.empresa.calle2 !== '' &&
            this.empresa.numero2 !== undefined && this.empresa.numero2 !== null && this.empresa.numero2 !== '' &&
            this.empresa.colonia2 !== undefined && this.empresa.colonia2 !== null && this.empresa.colonia2 !== '' &&
            this.empresa.cp2 !== undefined && this.empresa.cp2 !== null && this.empresa.cp2 !== '' &&
            this.empresa.estado2 !== undefined && this.empresa.estado2 !== null && this.empresa.estado2 !== '' &&
            this.empresa.delegacion2 !== undefined && this.empresa.delegacion2 !== null && this.empresa.delegacion2 !== '' &&
            this.empresa.periodicidadPago.idNominaCatalogo > 0) {
            this.validSections[1] = true;
        }
        else {
            this.validSections[1] = false;
        }
        if (this.empresa.nombre !== undefined && this.empresa.nombre !== null && this.empresa.nombre !== '' &&
            this.empresa.apellidoPaterno !== undefined && this.empresa.apellidoPaterno !== null && this.empresa.apellidoPaterno !== '' &&
            this.empresa.apellidoMaterno !== undefined && this.empresa.apellidoMaterno !== null && this.empresa.apellidoMaterno !== '' &&
            this.empresa.correoElectronico !== undefined && this.empresa.correoElectronico !== null && this.empresa.correoElectronico !== '' &&
            this.empresa.lada1 !== undefined && this.empresa.lada1 !== null && this.empresa.lada1 !== '' &&
            this.empresa.telefono1 !== undefined && this.empresa.telefono1 !== null && this.empresa.telefono1 !== '' &&
            this.empresa.lada2 !== undefined && this.empresa.lada2 !== null && this.empresa.lada2 !== '' &&
            this.empresa.telefono2 !== undefined && this.empresa.telefono2 !== null && this.empresa.telefono2 !== '') {
            this.validSections[2] = true;
            this.empresa.telefono = this.empresa.lada1 + this.empresa.telefono1;
        }
        else {
            this.validSections[2] = false;
        }
        if (this.fileEmpIsUp[0] && this.fileEmpIsUp[1] && this.fileEmpIsUp[2] && this.fileEmpIsUp[3]) {
            this.validSections[3] = true;
        }
        else {
            this.validSections[3] = false;
        }
        if (this.validSections[0] && this.validSections[1] && this.validSections[2] && this.validSections[3]) {
            this.classBtnAccept = 'containerBtnsBtnActive';
        }
        else {
            this.classBtnAccept = 'containerBtnsBtnDisabled';
        }
    };
    EditarEmpresaComponent.prototype.fnCheck = function (opc) {
        this.checkBtn[opc] = (this.checkBtn[opc].match('checked')) ? 'containerFormsInputsChecksUncheck' : 'containerFormsInputsChecksUncheck checked';
    };
    EditarEmpresaComponent.prototype.ngOnInit = function () {
        this.fnFillSelects();
        this.fnObtenerEmpresaID();
    };
    EditarEmpresaComponent.prototype.fnSaveCompany = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this.catalogoService.guardarEmpresa(this.empresa).subscribe(function (emp) {
            setTimeout(function () {
                console.log(emp);
                if (emp.current.idEmpresa > 0) {
                    _this.catalogoService.subirArchivosEmpresa('logo', _this.fileEmp[0], emp.current.idEmpresa).subscribe(function (resLogo) {
                        console.log('Respuesta Logo', resLogo);
                    });
                    _this.empresa.idEmpresa = emp.current.idEmpresa;
                    _this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtn';
                }
                else {
                    _this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtnDisabled';
                }
                _this.coreComponent.closeModal(0);
            }, 1500);
        }, function (error) {
            setTimeout(function () {
                console.log(error);
                _this.coreComponent.closeModal(0);
            }, 1500);
        });
    };
    EditarEmpresaComponent.prototype.fnGetValueDropList = function (value, index) {
        console.log(value, index);
        switch (index) {
            case 0:
                this.empresa.factorRiesgo.idNominaCatalogo = value.id;
                break;
            case 1:
                this.empresa.sectorEmpresarial = value.nombre;
                break;
            case 2:
                this.empresa.regimenFiscal = value.nombre;
                break;
        }
    };
    EditarEmpresaComponent.prototype.fnFillSelects = function () {
        var _this = this;
        this.itemsParent[1] = [];
        for (var _i = 0, _a = this.lstSectores; _i < _a.length; _i++) {
            var it = _a[_i];
            this.itemsParent[1].push(Object.assign({}, it));
        }
        this.catalogoService.obtenerNominaCatalogo('RiesgoPuesto').subscribe(function (lstRiesgo) {
            console.log('obtenerNominaCatalogo - RiesgoPuesto: ', lstRiesgo);
            _this.itemsParent[0] = [];
            if (lstRiesgo.current !== undefined && lstRiesgo.current !== null && lstRiesgo.current.length > 0) {
                for (var _i = 0, _a = lstRiesgo.current; _i < _a.length; _i++) {
                    var it = _a[_i];
                    var item = {
                        nombre: it.codigoSAT + ' - ' + it.descripcion,
                        id: it.idNominaCatalogo
                    };
                    _this.itemsParent[0].push(Object.assign({}, item));
                }
                _this.catalogoService.obtenerNominaCatalogo('RegimenFiscal').subscribe(function (lstRegFis) {
                    console.log('obtenerNominaCatalogo - RegimenFiscal: ', lstRegFis);
                    _this.itemsParent[2] = [];
                    if (lstRegFis.current !== undefined && lstRegFis.current !== null && lstRegFis.current.length > 0) {
                        for (var _i = 0, _a = lstRegFis.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[2].push(Object.assign({}, item));
                        }
                    }
                });
            }
        }, function (error) { });
    };
    EditarEmpresaComponent.prototype.fnClickFile = function (opc) {
        document.getElementById('fileEmp' + opc).click();
    };
    EditarEmpresaComponent.prototype.fnGetFile = function ($event, opc) {
        console.log($event, opc);
        if ($event.target.files !== undefined && $event.target.files !== null && $event.target.files.length > 0) {
            this.fileEmp[opc] = $event.target.files;
            this.fileEmpIsUp[opc] = true;
            this.fileEmpIsUpUpdate[opc] = true;
            this.fileEmpName[opc] = $event.target.files[0].name;
        }
        else {
            this.fileEmp[opc] = null;
            this.fileEmpIsUp[opc] = false;
            this.fileEmpIsUpUpdate[opc] = false;
            this.fileEmpName[opc] = (opc < 2) ? '.pdf' : (opc === 2) ? '.cer' : '.key';
        }
    };
    EditarEmpresaComponent.prototype.fnReturnView = function () {
        this.router.navigate(['/protected/catalogo/empresas']);
    };
    EditarEmpresaComponent.prototype.fnVerTrabajadores = function () {
        this.router.navigate(['/protected/catalogo/trabajadores', this.idEmpresa]);
    };
    EditarEmpresaComponent.prototype.fnVerTrabajador = function (id) {
        this.router.navigate(['/protected/catalogo/trabajadores/editar', id]);
    };
    EditarEmpresaComponent.prototype.fnObtenerEmpresaID = function () {
        var _this = this;
        this.lstTrabajadores = [];
        this.catalogoService.obtenerEmpresaID(this.idEmpresa).subscribe(function (emp) {
            console.log(emp.current);
            if (emp.current !== undefined && emp.current !== null) {
                _this.empresa = Object.assign(__WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__["a" /* Empresa */], emp.current);
                if (_this.empresa.activo) {
                    var item = {
                        label: 'Ver Patrón Habilitado',
                        path: '/protected/catalogo/empresas/editar',
                        id: _this.idEmpresa
                    };
                    _this.checkBtnLabel[0] = 'Deshabilitar Patrón';
                    _this.checkBtn[0] = 'containerFormsInputsChecksUncheck';
                    _this.opcion.push(item);
                }
                else {
                    var item = {
                        label: 'Ver Patrón Deshabilitado',
                        path: '/protected/catalogo/empresas/editar',
                        id: _this.idEmpresa
                    };
                    _this.checkBtnLabel[0] = 'Habilitar Patrón';
                    _this.checkBtn[0] = 'containerFormsInputsChecksUncheck';
                    _this.opcion.push(item);
                }
                // this.empresa.periodicidadPago
                _this.catalogoService.obtenerTrabajadoresNominaEmpresaID(_this.idEmpresa).subscribe(function (res) {
                    console.log('Trabajadores: ', res.current);
                    if (res.current !== undefined && res.current !== null && res.current.length > 0) {
                        _this.lstTrabajadores = res.current;
                    }
                    else {
                        _this.lstTrabajadores = [];
                    }
                    setTimeout(function () {
                        _this.coreComponent.closeModal(0);
                        console.log(res.current);
                    }, 1500);
                }, function (error) {
                    setTimeout(function () {
                        _this.coreComponent.closeModal(0);
                        console.log(error);
                    }, 1500);
                });
            }
            else {
                _this.empresa = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__["a" /* Empresa */]();
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditarEmpresaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pn-editar-empresa',
            template: __webpack_require__("./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], EditarEmpresaComponent);
    return EditarEmpresaComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/empresas/empresas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empresas_component__ = __webpack_require__("./src/app/components/catalogo/empresas/empresas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crear_empresa_crear_empresa_component__ = __webpack_require__("./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_empresa_editar_empresa_component__ = __webpack_require__("./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EmpresasRoutingModule = /** @class */ (function () {
    function EmpresasRoutingModule() {
    }
    EmpresasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__empresas_component__["a" /* EmpresasComponent */],
                    },
                    {
                        path: 'crear',
                        component: __WEBPACK_IMPORTED_MODULE_3__crear_empresa_crear_empresa_component__["a" /* CrearEmpresaComponent */],
                    },
                    {
                        path: 'editar/:id',
                        component: __WEBPACK_IMPORTED_MODULE_4__editar_empresa_editar_empresa_component__["a" /* EditarEmpresaComponent */],
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], EmpresasRoutingModule);
    return EmpresasRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/empresas/empresas.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"opcion\" [homePath]=\"homePath\"></pn-header-bc>\n<div class=\"catalogo\">\n    <div class=\"catalogoHeader\">\n        <div class=\"catalogoHeaderChecks\">\n            <div class=\"catalogoHeaderChecksItem\" (click)=\"fnToogleHeaderChecks()\">\n                <img class=\"catalogoHeaderChecksItemImg\" [src]=\"habilitadosSelected ? './assets/Images/radio_selected.svg' : './assets/Images/radio_unselected.svg' \" alt=\"Habilidar\">\n                <span class=\"catalogoHeaderChecksItemSpan\">Habilitados</span>\n            </div>\n            <div class=\"catalogoHeaderChecksItem\" (click)=\"fnToogleHeaderChecks()\">\n                <img class=\"catalogoHeaderChecksItemImg\" [src]=\"!habilitadosSelected ? './assets/Images/radio_selected.svg' : './assets/Images/radio_unselected.svg' \" alt=\"Deshabilitar\">\n                <span class=\"catalogoHeaderChecksItemSpan\">Deshabilitados</span>\n            </div>\n        </div>\n        <div class=\"catalogoHeaderBtn\" (click)=\"fnCreateCompany()\">AGREGAR PATRÓN</div>\n    </div>\n    <div class=\"catalogoSearch\">\n        <app-pn-search [searchPlaceholder]=\"searchPlaceholder\" (searchEmitter)=\"fnGetEmitSearch($event)\" ></app-pn-search>\n    </div>\n    <div class=\"catalogoLst\">\n        <app-pn-flip-card\n        [inpLogo]=\"item.parentLogo\"\n        [inpFrontValue]=\"item.parentFrontValue\"\n        [inpBackTitle]=\"item.parentBackTitle\"\n        [inpBackSubtitle]=\"item.parentBackSubtitle\"\n        [inpLstItemsBackBody]=\"item.parentLstItemsBackBody\"\n        [inpPath]=\"item.parentPath\"\n        [id]=\"item.id\"\n        *ngFor=\"let item of empresaSearched; let i = index\" ></app-pn-flip-card>\n    </div>\n    <div class=\"catalogoFooter\">\n        {{ (empresaSearched.length === 0 ) ? 'Sin Patrones' : '#' + empresaSearched.length + ' Patrones' }}\n    </div>\n\n</div>\n\n\n<!-- <div class=\"header-menu\">\n    <div class=\"white_space\"></div>\n    <div class=\"radiop\">\n        <img class=\"animationZoom\" (click)=\"Habilitar(0)\" [src]=\"habilidatosSelected ? 'assets/Images/radio_selected.svg ' : 'assets/Images/radio_unselected.svg' \" (click)=\"Habilitar(1)\" style=\" cursor:pointer\" width=\"14px\" height=\"14px\" alt=\"radioInactive\">\n        <p style=\"cursor: pointer; margin-left: 10px\" (click)=\"Habilitar(1)\">Habilitados</p>\n        <img class=\" animationZoom\" (click)=\"Habilitar(0)\" [src]=\"!habilidatosSelected ?'assets/Images/radio_selected.svg' : 'assets/Images/radio_unselected.svg' \" (click)=\"Habilitar(2)\" style=\"margin-left: 40px; cursor:pointer\" width=\"14px\" height=\"14px\" alt=\"radioInactive\">\n        <p style=\"cursor: pointer; margin-left: 10px\" (click)=\"Habilitar(0)\">Deshabilitados</p>\n    </div>\n    <div class=\"espacio_bco\"></div>\n    <div class=\"exportar\" (click)=\"fnCreateCompany()\" >AGREGAR PATRÓN</div>\n</div>\n<div class=\"container\" style=\"height: calc(80vh);\">\n    <div class=\"buscar\">\n        <div>\n            <div class=\"lupa\">\n                <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n            </div>\n            <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Patrones, RFC\" />\n        </div>\n    </div>\n</div>\n<div class=\"footer\" style=\"margin-top:10px\">\n    <div style=\"width: 100%;height: 90%;display: flex; justify-content: space-between; align-content: center;align-items: center; \">\n        <div style=\"width: 10%; text-align: left;\">&nbsp;</div>\n        <div style=\"width: 20%;\">\n            <div class=\"total\">\n                <p>Total: {{empresaSearched.length}} Empresas</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n<div class=\"container\" style=\"height: calc(80vh);\">\n    \n    \n    <div *ngIf=\"empresaSearched.length>0; else cargando\">\n        <div class=\"tabla-clientes \">\n            <div style=\"margin-top:5px;width: 100%; display: flex; flex-direction: row; flex-wrap: wrap; margin-left: 2.5%;\">\n                <div *ngFor=\"let empresa of empresaSearched; let i = index\" style=\"display: flex; flex-wrap: wrap\">\n                    <div class=\"cliente\">\n                        <div class=\"flip-container\" onclick=\"this.classList.toggle('hover');\">\n                            <div class=\"flipper\">\n                                <div class=\"front\">\n                                    <div class=\"headerContentFront\">\n                                    </div>\n                                    <div class=\"centerPagination\">\n                                        <img class=\" ima animationZoom\" src=\"assets/Images/clientes/default.png\" />\n                                    </div>\n                                    <div class=\"footContent\">\n                                        <span>{{empresa.valor}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"back\">\n                                    <div class=\"backContent\">\n                                        <div class=\"crossContent\" style=\"width: 100%;display: flex; justify-content: flex-end; align-content: center;align-items: center;\">\n                                            <img src=\"assets/Images/tachecito.png \" height=\"20px\" width=\"20px\" alt=\"Cerrar\">\n                                        </div>\n                                        <div class=\"headerBackCartera CVerde\">\n                                            {{empresa.valor}}\n                                        </div>\n                                        <hr>\n                                        <div class=\"backCenterContent\">\n                                            <p style=\"width:100%;font-weight: 100\">RFC: {{empresa.valor1}}</p>\n                                            <p style=\"width:100%;font-weight: 100\">Razón Social: {{empresa.valor2}}</p>\n                                            <p style=\"width:100%;font-weight: 100\">{{ (empresa.valor3 === 1) ? 'Trabajador: 1' : 'Trabajadores: ' + empresa.valor3 }}</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"footContentBack\">\n                                        <div class=\"iconsContent\">&nbsp;</div>\n                                    </div>\n                                    <a (click)=\"Entrar($event, empresa.llave)\">\n                                        <div class=\"buttonCardContent\">\n                                            <div class=\"buttonCardBtn\">\n                                                <h4>Entrar</h4>\n                                            </div>\n                                        </div>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"display: flex; justify-content: center;align-content: center;align-items: center; \">\n                        <hr [ngClass]=\"'v' + (i !== 0 && (i+1) % carterasPorFila === 0  ?' final': '')\" />\n                    </div>\n                    <hr [ngClass]=\"'h'\" />\n                    <ng-template #cargando>\n                        <div class=\"tabla-clientes\">\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/empresas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: calc(100vh - 130px); }\n:host > pn-header-bc {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 41px; }\n:host > .catalogo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0px 20px;\n    height: calc(100vh - 170px); }\n:host > .catalogo > .catalogoHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      border-bottom: 2px solid #424242;\n      min-height: 58px;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n:host > .catalogo > .catalogoHeader > .catalogoHeaderChecks {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 350px;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        font-size: 21px;\n        color: #424242;\n        font-weight: 400;\n        cursor: pointer;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out; }\n:host > .catalogo > .catalogoHeader > .catalogoHeaderChecks > .catalogoHeaderChecksItem {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > .catalogo > .catalogoHeader > .catalogoHeaderChecks > .catalogoHeaderChecksItem > img.catalogoHeaderChecksItemImg {\n            width: 20px;\n            height: 21px; }\n:host > .catalogo > .catalogoHeader > .catalogoHeaderChecks > .catalogoHeaderChecksItem > .catalogoHeaderChecksItemSpan {\n            padding: 0px 5px; }\n:host > .catalogo > .catalogoHeader > .catalogoHeaderChecks > .catalogoHeaderChecksItem:hover {\n          opacity: 0.5; }\n:host > .catalogo > .catalogoHeader > .catalogoHeaderChecks > .catalogoHeaderChecksItem:active {\n          opacity: 0.75; }\n:host > .catalogo > .catalogoHeader > .catalogoHeaderBtn {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 231px;\n        height: 30px;\n        color: white;\n        background: #008894;\n        font-weight: 700;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        cursor: pointer;\n        font-family: Novecento;\n        font-size: 21px;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out; }\n:host > .catalogo > .catalogoHeader > .catalogoHeaderBtn:hover {\n        opacity: 0.5; }\n:host > .catalogo > .catalogoHeader > .catalogoHeaderBtn:active {\n        opacity: 0.75; }\n:host > .catalogo > .catalogoSearch {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 100%;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      min-height: 110px;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n:host > .catalogo > .catalogoSearch > app-pn-search {\n        width: 430px; }\n:host > .catalogo > .catalogoLst {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      border-bottom: 1px solid #424242;\n      height: 100%;\n      -ms-flex-line-pack: start;\n          align-content: flex-start;\n      overflow: scroll;\n      padding-bottom: 74px; }\n@media only screen and (min-width: 1368px) and (max-width: 2316px) {\n        :host > .catalogo > .catalogoLst > app-pn-flip-card {\n          width: 100%;\n          height: 100%;\n          max-width: 276px;\n          max-height: 245px; } }\n@media only screen and (min-width: 2317px) and (max-width: 2559px) {\n        :host > .catalogo > .catalogoLst > app-pn-flip-card {\n          width: 100%;\n          height: 100%;\n          max-width: 342px;\n          max-height: 245px; } }\n@media only screen and (min-width: 2560px) {\n        :host > .catalogo > .catalogoLst > app-pn-flip-card {\n          width: 100%;\n          height: 100%;\n          max-width: 382px;\n          max-height: 245px; } }\n:host > .catalogo > .catalogoFooter {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      min-height: 51px;\n      font-size: 14px;\n      color: #424242;\n      font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/empresas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmpresasComponent = /** @class */ (function () {
    function EmpresasComponent(router, coreComponent, catalogoService) {
        this.router = router;
        this.coreComponent = coreComponent;
        this.catalogoService = catalogoService;
        this.habilitadosSelected = true;
        this.empresaSearched = [];
        this.empresaDisplay = [];
        this.empresaDisplayAux = [];
        this.empresaDisplayI = [];
        this.searchPlaceholder = 'Patrones, RFC';
        this.homePath = '/protected/catalogo/';
        this.opcion = [
            {
                label: 'Patrones',
                path: '/protected/catalogo/empresas',
            }
        ];
    }
    EmpresasComponent.prototype.fnGetEmitSearch = function ($event) {
        var searchArrayAux = [];
        var searchTerm = $event;
        if (searchTerm === '') {
            this.empresaSearched = (this.habilitadosSelected) ? this.empresaDisplayAux : this.empresaDisplayI;
        }
        else {
            this.empresaSearched.forEach(function (empresa) {
                if (empresa.valor.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || empresa.valor1.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(empresa);
                }
            });
            this.empresaSearched = searchArrayAux;
        }
    };
    EmpresasComponent.prototype.ngOnInit = function () {
        this.coreComponent.openModal(0);
        this.obtenerEmpresas();
    };
    EmpresasComponent.prototype.Habilitar = function (opc) {
        switch (opc) {
            case 1:
                this.habilitadosSelected = true;
                this.empresaSearched = this.empresaDisplayAux;
                this.empresaDisplay = this.empresaDisplayAux;
                break;
            case 0:
                this.habilitadosSelected = false;
                this.empresaSearched = this.empresaDisplayI;
                this.empresaDisplay = this.empresaDisplayI;
                break;
        }
    };
    EmpresasComponent.prototype.fnToogleHeaderChecks = function () {
        if (this.habilitadosSelected) {
            this.empresaSearched = this.empresaDisplayI;
            this.empresaDisplay = this.empresaDisplayI;
        }
        else {
            this.empresaSearched = this.empresaDisplayAux;
            this.empresaDisplay = this.empresaDisplayAux;
        }
        this.habilitadosSelected = !this.habilitadosSelected;
    };
    EmpresasComponent.prototype.obtenerEmpresas = function () {
        var _this = this;
        this.catalogoService.obtenerEmpresas().subscribe(function (empresas) {
            console.log(empresas.current);
            var lstH = [];
            var lstI = [];
            for (var _i = 0, _a = empresas.current; _i < _a.length; _i++) {
                var emp = _a[_i];
                emp.parentLogo = (emp.logo !== undefined && emp.logo !== null && emp.logo !== '') ? emp.logo : './assets/Images/logo_hover_proquifa.svg';
                emp.parentFrontValue = emp.valor;
                emp.parentBackTitle = emp.valor;
                emp.parentBackSubtitle = emp.valor1;
                emp.parentLstItemsBackBody = emp.lstValores;
                emp.parentPath = '/protected/catalogo/empresas/editar';
                emp.id = emp.llave;
                if (emp.activo) {
                    lstH.push(Object.assign({}, emp));
                }
                else {
                    lstI.push(Object.assign({}, emp));
                }
            }
            _this.empresaSearched = [];
            _this.empresaSearched = Object.assign([], lstH);
            _this.empresaDisplayI = [];
            _this.empresaDisplayI = Object.assign([], lstI);
            _this.empresaDisplayAux = [];
            _this.empresaDisplayAux = Object.assign([], lstH);
            setTimeout(function () {
                _this.coreComponent.closeModal(0);
            }, 1500);
        }, function (error) {
            setTimeout(function () {
                _this.coreComponent.closeModal(0);
            }, 1500);
        });
    };
    EmpresasComponent.prototype.fnCreateCompany = function () {
        this.router.navigate(['/protected/catalogo/empresas/crear']);
    };
    EmpresasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pn-empresas',
            template: __webpack_require__("./src/app/components/catalogo/empresas/empresas.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/empresas/empresas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__components_core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__["a" /* CatalogoService */]])
    ], EmpresasComponent);
    return EmpresasComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/empresas/empresas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasModule", function() { return EmpresasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__empresas_routing_module__ = __webpack_require__("./src/app/components/catalogo/empresas/empresas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__empresas_component__ = __webpack_require__("./src/app/components/catalogo/empresas/empresas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__crear_empresa_crear_empresa_component__ = __webpack_require__("./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editar_empresa_editar_empresa_component__ = __webpack_require__("./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var EmpresasModule = /** @class */ (function () {
    function EmpresasModule() {
    }
    EmpresasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__empresas_routing_module__["a" /* EmpresasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_drop_list_drop_list_module__["a" /* DropListModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__empresas_component__["a" /* EmpresasComponent */],
                __WEBPACK_IMPORTED_MODULE_9__crear_empresa_crear_empresa_component__["a" /* CrearEmpresaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__editar_empresa_editar_empresa_component__["a" /* EditarEmpresaComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_catalogo_catalogo_service__["a" /* CatalogoService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__empresas_component__["a" /* EmpresasComponent */]
            ]
        })
    ], EmpresasModule);
    return EmpresasModule;
}());



/***/ })

});
//# sourceMappingURL=empresas.module.chunk.js.map