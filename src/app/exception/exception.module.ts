import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from '~/shared/shared.module';
import { ExceptionComponent } from './exception.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '404', pathMatch: 'full' },
  {
    path: '/:code',
    component: ExceptionComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExceptionComponent]
})
export class ExceptionModule { }
