import { NgModule } from '@angular/core';
import { AppartementComponent } from './appartement/appartement.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [AppartementComponent, WeatherComponent, SocialInfoComponent],
  imports: [BrowserModule, MaterialModule],
  exports: [AppartementComponent, WeatherComponent, SocialInfoComponent]
})
export class BodyModule {}
