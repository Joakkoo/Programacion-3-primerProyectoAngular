import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servic/cliente.service';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [],
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'] // Corrigiendo 'styleUrl' a 'styleUrls'
})
export class ComponentComponent implements OnInit {
  clientesJson: string = ''; // Propiedad para almacenar la cadena JSON

  constructor(private service: ClienteService) { // Inyectando el servicio como 'private'
  }

  ngOnInit(): void {
    const clientes = this.service.getClientes(); // Obtener el array de clientes del servicio
    this.clientesJson = JSON.stringify(clientes, null, 2); // Convertir a JSON y formatear
  }
}
