export class OptionClass {
    id: number;
    texto: string;
    texto1?: string;
    separador?: string;
    aux?: any;

    constructor() {
        this.id = 0;
        this.texto = '';
        this.texto1 = '';
        this.separador = '';
        this.aux = '';
    }
}
