import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DbService} from '../services/db.service';
import { AppComponent } from './app.component';
import {ProfileComponent} from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {TemperatureConverterPipe} from './pipes/temperature-converter.pipe';
import {MatAutocompleteModule,MatInputModule,MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ManageWeatherComponent } from './manage-weather/manage-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    TemperatureConverterPipe,
    ManageWeatherComponent


  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule


  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }


