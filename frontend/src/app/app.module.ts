import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component'


import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/components/product/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './views/components/product/product-create/product-create.component'
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule} from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './views/components/product/product-read/product-read.component';
import { ProductRead2Component } from './views/components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './views/components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './views/components/product/product-delete/product-delete.component';

import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteComponent } from './views/components/cliente/cliente-crud/cliente.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { ClienteQtdDiasAtendimentoComponent } from './views/components/cliente/cliente-qtd-dias-atendimento/cliente-qtd-dias-atendimento.component';
import { ClienteAniversarioComponent } from './views/components/cliente/cliente-aniversario/cliente-aniversario.component';
import { OSCreateComponent } from './views/components/OS/os-create/os-create.component';


import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ClientePesquisaComponent } from './views/components/cliente/cliente-pesquisa/cliente-pesquisa.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ClienteComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteQtdDiasAtendimentoComponent,
    ClienteAniversarioComponent,
    OSCreateComponent,
    ClientePesquisaComponent,

    
    
  ],
  imports: [
    FormsModule, 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatAutocompleteModule, 
    ReactiveFormsModule,
    MatNativeDateModule
  


  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt-BR'

  }],

  exports:[
    MatDatepickerModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
