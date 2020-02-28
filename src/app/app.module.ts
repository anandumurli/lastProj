import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebcamModule } from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { UserInteractionComponent } from './components/user-interaction/user-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserInteractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
