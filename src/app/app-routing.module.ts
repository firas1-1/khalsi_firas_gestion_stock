import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
//import { FrontLayoutComponent } from './layout/test/front-layout.component';


//import { GuardadminGuard } from './views/guards/guardadmin.guard';
import { GuarduserGuard } from './views/guards/guarduser.guard';
import { NoguarduserGuard } from './views/guards/noguarduser.guard';

const routes: Routes = [

  {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule),},

{path:'',component:FrontLayoutComponent,children:[

  {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},


  {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule),canActivateChild:[NoguarduserGuard]},
  {path:'stockinitial',loadChildren:()=>import('./views/front/student/student.module').then(m=>m.StudentModule),canActivateChild:[GuarduserGuard]},
  {path:'stockdetails',loadChildren:()=>import('./views/front/studentdetails/studentdetails.module').then(m=>m.StudentdetailsModule),canActivateChild:[GuarduserGuard]},
  { path: 'datatable', loadChildren: () => import('./views/admin/datatable/datatable.module').then(m => m.DatatableModule),canActivateChild:[GuarduserGuard]},
  { path: 'profile', loadChildren: () => import('./views/front/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'addproduct', loadChildren: () => import('./views/front/addproduct/addproduct.module').then(m => m.AddproductModule) },
  { path: 'acceuil', loadChildren: () => import('./views/front/acceuil/acceuil.module').then(m => m.AcceuilModule) },



]},

  
{path:'admin',component:AdminLayoutComponent,
//canActivate:[GuardadminGuard],
children:[
  {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'allstudents',loadChildren:()=>import('./views/admin/allstudents/allstudents.module').then(m=>m.AllstudentsModule)},
  {path:'addstudent',loadChildren:()=>import('./views/admin/addstudent/addstudent.module').then(m=>m.AddstudentModule)},
  { path:'validationCommand', loadChildren: () => import('./views/admin/validation-command/validation-command.module').then(m => m.ValidationCommandModule) },
  { path: 'data', loadChildren: () => import('./views/admin/data/data.module').then(m => m.DataModule) },
  { path: 'Command', loadChildren: () => import('./views/admin/command/command.module').then(m => m.CommandModule) },
]},
{path:'admin/login',component:AuthAdminLayoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
