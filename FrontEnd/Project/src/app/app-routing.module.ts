import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component'

const routes: Routes = [
  //Navigation MenuBar
  {
    path: "MenuBar", component: MenubarComponent
  },

  {
    path: "AdminLogin", component: AdminloginComponent
  },
  {
  path: "AdminRegister", component: AdminregisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
