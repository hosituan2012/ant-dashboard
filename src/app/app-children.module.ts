import { NgModule } from '@angular/core';

import { ExceptionModule } from './exception/exception.module';
import { IndexModule } from './index/index.module';
import { LoginModule } from './login/login.module';
// import { PageModule } from './routes/page/page.module';
// import { AccountModule } from './account/account.module';
import { SystemModule } from './system/system.module';
// import { RoutesModule } from './routes/routes.module';

@NgModule({
  imports: [
    ExceptionModule,
    // IndexModule,
    LoginModule,
    // PageModule,
    // AccountModule,
    SystemModule,
    // RoutesModule
  ]
})
export class AppChildrenModule { }
