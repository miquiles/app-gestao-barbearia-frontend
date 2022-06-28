import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Product } from 'src/app/model/product.model';
import { ProductRead2DataSource } from '../../product/product-read2/product-read2-datasource';

@Component({
  selector: 'app-cliente-aniversario',
  templateUrl: './cliente-aniversario.component.html',
  styleUrls: ['./cliente-aniversario.component.css']
})
export class ClienteAniversarioComponent implements OnInit {

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','nome', 'preco'];


  ngOnInit() {
    this.dataSource = new ProductRead2DataSource();
    
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
