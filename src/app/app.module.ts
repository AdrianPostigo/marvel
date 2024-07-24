import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// components

// i18n
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './core/utils/i18n/translate-loader.config';

// modules
import { LoginModule } from './features/login/login.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

//Interceptors
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MarvelUrlInterceptor } from './core/interceptors/marvel-url.interceptor';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    LoginModule,
    DashboardModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync(),
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
    { provide: HTTP_INTERCEPTORS, useClass: MarvelUrlInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
