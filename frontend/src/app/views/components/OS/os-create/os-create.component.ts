import { ClienteService } from './../../../../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { Os } from 'src/app/model/os.model';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OSCreateComponent implements OnInit {

  title = 'autocomplete';

  formas_pagamento = ["CREDITO", "DEBITO", "DINHEIRO", "PIX"];
  
  status_pagamento = ["PAGO", "PENDENTE"];

  options = ["text", "text2", "text3"];

  filteredOptions;


  cliente : Cliente = {
    document: '',
    firstName: '',
    secondName: '',
    ddd: '',
    numberPhone: '',
    mail: '',
    bornDate: ''
  }

  os: Os = {
    paymentType: '',
    paymentsStatus: '',
    clientDocument: '',
    totalValue: 50.00,
    products: []
  }




  formGroup : FormGroup;
  dados: Cliente[];

  constructor(private clientService : ClienteService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.getNames();

  }

  initForm(){
    this.formGroup = this.fb.group({
      'cliente' : ['']
    })
    this.formGroup.get('cliente').valueChanges.subscribe(response => {
      console.log('date is', response);
      this.filterData(response);

    })
  }

  filterData(enteredData){
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })

  }

  getNames(){
    this.clientService.getData().subscribe(response => {
    
      this.options = response;
      this.filteredOptions = response;

     
      console.log(this.filteredOptions);
  
      
    })
  }


  

  
    

}
