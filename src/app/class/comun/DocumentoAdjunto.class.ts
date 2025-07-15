export class DocumentoAdjunto {
    nombre: string;
    titulo: string;
    ruta: string;
    archivo: File;
    idArchivoAdjunto: number;
    idServicio: number;
    extension: string;
    asunto: string;
    descripcion: string;
    cargadoPorSistema: boolean;


    public getNombre(): string {
        return this.nombre;
    }

    public setTitulo(value: string): void {
        this.titulo = value;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitutlo(value: string): void {
        this.titulo = value;
    }

    public getRuta(): string {
        return this.ruta;
    }

    public setRuta(value: string): void {
        this.ruta = value;
    }

    public getArchivo(): File {
        return this.archivo;
    }

    public setArchivo(value: File): void {
        this.archivo = value;
    }


    public getIdArchivoAdjunto(): number {
        return this.idArchivoAdjunto;
    }

    public setIdArchivoAdjunto(value: number): void {
        this.idArchivoAdjunto = value;
    }


    public getIdServicio(): number {
        return this.idServicio;
    }

    public setIdServicio(value: number): void {
        this.idServicio = value;
    }

    public getExtencion(): string {
        return this.extension;
    }

    public setExtencion(value: string): void {
        this.extension = value;
    }

    public getAsunto(): string {
        return this.asunto;
    }

    public setAsunto(value: string): void {
        this.asunto = value;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(value: string): void {
        this.descripcion = value;
    }


    public getCargadoPorSistema(): boolean {
        return this.cargadoPorSistema;
    }

    public setCargadoPorSistema(value: boolean): void {
        this.cargadoPorSistema = value;
    }

}