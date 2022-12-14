import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { ProductsComponent } from './admin-component/products/products.component';
import { ProductsAnalyticsComponent } from './admin-component/products-analytics/products-analytics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    ProductsComponent,
    ProductsAnalyticsComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModuleModule { }
