import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountPageComponent } from './account-page.component';

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
    RouterModule.forChild(routes)
  ]
})
export class AccountPageModule { }

