import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { ComponentsModule, ServicesModule } from '~/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RoutesModule } from './routes/routes.module';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SDKBrowserModule } from './shared/sdk-build';
// import { PageModule } from './routes/page/page.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent, LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ComponentsModule,
    ServicesModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SDKBrowserModule.forRoot(),
    // PageModule
    // RoutesModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
