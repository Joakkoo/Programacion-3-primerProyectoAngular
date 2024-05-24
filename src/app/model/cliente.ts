export class Cliente {
    nombre : string;
    apellido?: string
    edad?: number
    cuit?: string
    islive: boolean = false
    constructor() {
      this.nombre = "-";
    }
    fullName(): string {
        return this.nombre+", "+ this.apellido;
      }
    
      edadToString(): string {
        return this.edad + " Años"
      }
  }

  