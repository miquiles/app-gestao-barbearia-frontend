import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';


@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OSCreateComponent implements OnInit {

  cliente: Cliente = {
    firstName: '',
    secondName:'',
    document: '',
    ddd: '81',
    numberPhone: null,
    mail: '',
    bornDate : '29/05/1993'
    
    
  }



  constructor() { }

  ngOnInit(): void {
  }

  
    

}
