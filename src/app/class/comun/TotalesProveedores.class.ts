export class TotalesProveedores {

    numPiezas:number;
    totalMonto:number;
    etiqueta:string; 


    public getNumPiezas():number
    {
        return this.numPiezas;
    }

    public setNumPiezas(value:number):void
    {
        this.numPiezas = value;
    }

    public getTotalMonto():number
    {
        return this.totalMonto;
    }

    public setTotalMonto(value:number):void
    {
        this.totalMonto = value;
    }

    public getEtiqueta():string
    {
        return this.etiqueta;
    }

    public setEtiqueta(value:string):void
    {
        this.etiqueta = value;
    }

}