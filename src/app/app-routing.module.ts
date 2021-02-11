import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './structure/home/home.component';
import { LoginComponent } from './structure/login/login.component';
import { CompanyCreateComponent } from './workflow/company-create/company-create.component';
import { CompanyListComponent } from './workflow/company-list/company-list.component';
import { EmployeeCreateComponent } from './workflow/employee-create/employee-create.component';
import { EmployeeListComponent } from './workflow/employee-list/employee-list.component';


const routes: Routes = [
  {path:"", redirectTo:'/login', pathMatch:'full'},
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"companylist", component: CompanyListComponent},
  {path:"companycreate", component: CompanyCreateComponent},
  {path:"employeelist", component: EmployeeListComponent},
  {path:"employeecreate", component: EmployeeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
