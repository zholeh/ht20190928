import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { BodyComponent } from './body/body.component';
import { AppartementComponent } from './body/appartement/appartement.component';
import { WeatherComponent } from './body/weather/weather.component';
import { SocialInfoComponent } from './body/social-info/social-info.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    AppartementComponent,
    WeatherComponent,
    SocialInfoComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
