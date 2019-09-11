import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
// import { AccountPageComponent } from './account-page/account-page.component';
import { AccountPageModule } from './account-page/account-page.module';

import {routes} from './routes';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ExceptionPageComponent } from './exception-page/exception-page.component';

@NgModule({
  declarations: [LoginPageComponent, ExceptionPageComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    NgZorroAntdModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AccountPageModule
  ]
})
export class RoutesModule { }
