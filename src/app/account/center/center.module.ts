import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from '~/shared/shared.module';
import { CenterRoutingModule } from './center-routing.module';
import { CenterComponent } from './center.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SharedModule,
    CenterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CenterComponent]
})
export class CenterModule { }
