import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Cliente>;

  dados: Cliente[] = [];
  displayedColumns = ['firstName', 'secondName', 'bornDate', 'numberPhone','acoes']
  dataSource: any;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void
   {

    this.clienteService.read().subscribe(dados =>{
      this.dados = dados
      
      console.log(dados)

    })

  

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
