import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NgChartsModule } from 'ng2-charts';
const routes: Routes = [{ path: '', loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
