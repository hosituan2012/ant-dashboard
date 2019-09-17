import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadConfigComponent } from './upload-config.component';
import { ChannelManagerComponent } from './channel-manager/channel-manager.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '~/shared/shared.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChannelModalComponent } from './modal/channel-modal/channel-modal.component';

const routes: Routes = [
  { path: '', component: UploadConfigComponent, children: [
    {path: '', redirectTo: 'channel', pathMatch: 'full'},
    { path: 'channel', component:  ChannelManagerComponent}
  ]}
];

@NgModule({
  declarations: [UploadConfigComponent, ChannelManagerComponent, ChannelModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ], entryComponents: [ChannelModalComponent]
})
export class UploadConfigModule { }
