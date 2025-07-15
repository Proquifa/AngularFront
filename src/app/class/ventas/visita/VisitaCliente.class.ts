import { Sprint } from "./Sprint.class";

export class VisitaCliente
{
     idVisitaCliente:number;
     nombreCliente:String;
     nombreContacto:String;
     idContacto:number;
     idCliente:number;
     idEmpleado:number;
     numSolicitud:number;
     numCRM:number;
     asunto:String;
     ruta:String;
     numDocumentos:number;
     nivelIngreso:String;
     fechaEstimadaVisita:Date;
     numVisitas:number;
     contacto: any;//Contacto;
     tipo:String;
     numFila:number;
     tipoVista:String;
     estado:String;
     idSprint:number;
     solicitudesVisita:any[];
     empleado:any;//Empleado;
     usuarioEV:String;
     valor:number;
     credito:number;
     sprint: Sprint;
     asistenciaEmpleado:Boolean;
    
     fechaVisita:Date;
     fechaVInicioMinuto:number;
     fechaVInicioHora:number;
     fechaVFinMinuto:number;
     fechaVFinHora:number;
    
     horaVisitaInicio:Date;
     horaVisitaFin:Date;
     fechaCheckIn:Date;
     fechaE:Date;
    
     numFinalizadas:number;
     numNoFinalizadas:number;
     numPendientes:number;
     calificacionEV:number;

     justificacionCancelacion:String;
     realizacionVisita:Boolean;
     tipoCancelacion:String;
     visitaExtemporanea:Boolean;
    
     tipoVisita:String;

     solicitud:any;//SolicitudVisita;
    
    ////////vista
     listaDocumentos:any[];
     documentosReporte:any[]; 
     motivo:String;
     reporte:String;
     acciones:any[];
     hallazgos:any[];
     motivos:any[];   
     estadoCodigo:String;
    
     cliente:any;//Cliente;
     idSprintAntiguo:number;
     noHallazgos:number;
     noHallazgosCompletados:number;

    
     reqRealizados:number;
     totalReq:number;
     noPendientes:number;
     noHallazgosVisita:number;
     noRequisiciones:number;
     noCotizaciones:number;
     noProductos:number;
     totalProductos:number;
     totalDocsCargados:number;
     calificacion:number;
     noVisita:number;
     notas:String;
     observaciones:String;
}