import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationCommandComponent } from './validation-command.component';

const routes: Routes = [{ path: '', component: ValidationCommandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationCommandRoutingModule { }
