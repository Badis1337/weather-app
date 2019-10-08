import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {ManageWeatherComponent} from './manage-weather/manage-weather.component';

const appRoutes: Routes = [
  { path: 'login', component: ProfileComponent },
  { path: 'weather', component:HomeComponent},
  { path: 'manage_weather', component:ManageWeatherComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];



export const routing = RouterModule.forRoot(appRoutes);
