import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },

    {
      path: 'register',
      component: RegisterComponent,
    },
    

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
