import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Firestarter App Modules
import { CoreModule } from './core/core.module';
import { UploadsModule } from './uploads/uploads.module';
import { UiModule } from './ui/ui.module';
import { NotesModule } from './notes/notes.module';

// AngularFire2 Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireFunctionsModule } from 'angularfire2/functions';

import { AuthService } from './core/auth.service';
import { BtnNavbarOpenComponent } from './components/btn-navbar-open/btn-navbar-open.component';
import { BtnHomeGTextComponent } from './components/btn-home-g-text/btn-home-g-text.component';
import { BtnLoginLogoComponent } from './components/btn-login-logo/btn-login-logo.component';
import { TxtWellcomeComponent } from './components/txt-wellcome/txt-wellcome.component';
import { WinWellcomeComponent } from './components/win-wellcome/win-wellcome.component';
import { NavbarGComponent } from './components/navbar-g/navbar-g.component';
import { NavbarItemUserComponent } from './components/navbar-item-user/navbar-item-user.component';
import { NavbarItemRefreshComponent } from './components/navbar-item-refresh/navbar-item-refresh.component';
import { NavbarItemNotificationComponent } from './components/navbar-item-notification/navbar-item-notification.component';
import { NavbarItemExitComponent } from './components/navbar-item-exit/navbar-item-exit.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnNavbarOpenComponent,
    BtnHomeGTextComponent,
    BtnLoginLogoComponent,
    TxtWellcomeComponent,
    WinWellcomeComponent,
    NavbarGComponent,
    NavbarItemUserComponent,
    NavbarItemRefreshComponent,
    NavbarItemNotificationComponent,
    NavbarItemExitComponent,
    MainComponent
  ], providers: [
    AuthService,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    AppRoutingModule,
    CoreModule,
    UiModule,
    NotesModule,
    UploadsModule,
    AngularFireModule.initializeApp(environment.firebase, 'firestarter'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
