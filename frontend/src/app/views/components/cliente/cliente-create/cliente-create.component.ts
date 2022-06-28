
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';




@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    firstName: '',
    secondName:'',
    document: '',
    ddd: '81',
    numberPhone: null,
    mail: '',
    bornDate : '29/05/1993'
    
    
  }

  

  constructor(private clienteService: ClienteService,
    private router:Router) { }

  ngOnInit(): void {
    bornDate : ['29/05/1993']
  }

  createCliente():void{
    console.log(this.cliente)

    this.clienteService.create(this.cliente).subscribe(() =>{
     

      this.clienteService.showMessage('Cliente salvo com sucesso!!')

      this.router.navigate(['/clientes'])
    })

    
    
  }

  cancel():void{

    this.router.navigate(['clientes/read'])

  }
  

  


 

}
