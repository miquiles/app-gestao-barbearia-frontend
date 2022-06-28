import { ProductService } from 'src/app/service/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductRead2DataSource } from '../product-read2/product-read2-datasource';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;

  products: Product[]
  displayedColumns = ['id','nome', 'preco', 'acoes']
  dataSource: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void 
  
  {
    this.dataSource = new ProductRead2DataSource();

    this.productService.read().subscribe(products =>{
      this.products = products
     
    })


  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
