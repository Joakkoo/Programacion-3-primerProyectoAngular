import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servic/cliente.service';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [],
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  clientes: Cliente[] = [];
 constructor(service:ClienteService) {
    this.clientes = service.getClientes();
  }
}
