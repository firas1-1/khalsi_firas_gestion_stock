import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';




@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    AuthAdminLayoutComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule
    ,MatIconModule,
    BrowserModule,
  ],
  providers: [
    
  ],
})
export class LayoutModule { }
