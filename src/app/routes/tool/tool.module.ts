import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VipSearchComponent } from './vip/vip-search/vip-search.component';
import { VipUploadComponent } from './vip/vip-upload/vip-upload.component';
import { ToolComponent } from './tool.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '~/shared/shared.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ToolComponent, children: [
    { path: '', redirectTo: 'vip/search', pathMatch: 'full' },
    // { path: 'vip', redirectTo: 'search', pathMatch: 'full' },
    { path: 'vip/search', component: VipSearchComponent}
  ]}
];


@NgModule({
  declarations: [VipSearchComponent, VipUploadComponent, ToolComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgZorroAntdModule,
    FormsModule
  ]
})
export class ToolModule { }
