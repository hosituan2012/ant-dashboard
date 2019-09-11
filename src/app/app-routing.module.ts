import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', redirectTo: 'account', pathMatch: 'full'},
      {path: 'account', loadChildren: './routes/account-page/account-page.module#AccountPageModule'}
    ]
  },
  {path: 'login', component: LoginPageComponent},
  {
    path: '**',
    redirectTo: 'exception/404',
    pathMatch: 'full'
  },
  // { path: 'exception', loadChildren: './exception/exception.module#ExceptionModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
