import { OSCreateComponent } from './views/components/OS/os-create/os-create.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ProductDeleteComponent } from './views/components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './views/components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/components/product/product-crud/product-crud.component";
import { ProductCreateComponent } from './views/components/product/product-create/product-create.component';


import { ClienteComponent } from './views/components/cliente/cliente-crud/cliente.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';




const routes: Routes = [

  {

  //raiz
  path: "",
  component: HomeComponent

},

{
  path: "atendimento",
  component: OSCreateComponent
},

{
  path: "clientes",
  component: ClienteComponent
},

{
  path:"clientes/create",
  component:ClienteCreateComponent
},

{
  path:"clientes/read",
  component:ClienteComponent
},


{

  path:"products",
  component: ProductCrudComponent

},

{

  path:"products/create",
  component: ProductCreateComponent

},

{

  path:"products/update/:id",
  component: ProductUpdateComponent

},
{

  path:"products/delete/:id",
  component: ProductDeleteComponent

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
