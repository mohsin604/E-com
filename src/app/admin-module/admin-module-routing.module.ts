import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { ProductsAnalyticsComponent } from './admin-component/products-analytics/products-analytics.component';
import { ProductsComponent } from './admin-component/products/products.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent, children:[
  {path:'dashboard', component:DashboardComponent},
  {path:'products',component:ProductsComponent},
  {path:'products-analytics',component:ProductsAnalyticsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
