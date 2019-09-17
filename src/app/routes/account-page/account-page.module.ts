import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountPageComponent } from './account-page.component';
import { PageModule } from '../page/page.module';
import { SharedModule } from './../../shared/shared.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AccountPageComponent, children: [
    {path: '', redirectTo: 'profile', pathMatch: 'full'},
    { path: 'profile', component: ProfileComponent }
  ]}
];

@NgModule({
  declarations: [ProfileComponent, AccountPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgZorroAntdModule,
    FormsModule
  ]
})
export class AccountPageModule { }

