import { AccountPageComponent } from './account-page/account-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ExceptionPageComponent } from './exception-page/exception-page.component';


export const routes = [
 { path: '', redirectTo: '/account', pathMatch: 'full'},
 { path: 'account', loadChildren: './account-page/account-page.module#AccountPageModule' },
 { path: 'login', component: LoginPageComponent },

// Not found
 { path: '**', redirectTo: '/exception/404', pathMatch: 'full'},
 // { path: 'exception/:code', component: ExceptionPageComponent}
];
