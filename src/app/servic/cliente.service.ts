import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes():Cliente[]{
    return [{
      apellido: "Apellido",
      cuit: "Cuit",
      id: 123,
      islive: true,
      nombre: "Nombre",
      edad: 34
    }
    ,{
      apellido: "Blanco",
      cuit: "32131321",
      id: 11,
      islive: false,
      nombre: "Tomas",
      edad: 15}
    ,{
      apellido: "Quiroga",
      cuit: "20 43609591 1",
      id: 11,
      islive: true,
      nombre: "Joaquin",
      edad: 24
    }];
  }
}
