import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DbService} from '../../services/db.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {User} from '../models/User';

@Component({
  selector: 'app-manage-weather',
  templateUrl: './manage-weather.component.html',
  styleUrls: ['./manage-weather.component.css']
})
export class ManageWeatherComponent implements OnInit {
  user: User;
  submitted = false;
  filteredOptions: Observable<string[]>;
  cities: any[];
  myControl = new FormControl();
  selectedCity: any;
  options: string[] = ['Paris', 'Lyon', 'Marseille', 'Lille', 'Nice', 'Toulouse', 'Bordeaux', 'Rouen',
    'Strasbourg', 'Nantes', 'Metz', 'Grenoble', 'Toulon', 'Montpellier', 'Nancy', 'Saint-étienne', 'Melun',
    'LeHavre', 'Tours', 'Clermont-Ferrand', 'Mulhouse', 'Rennes', 'Reims', 'Caen', 'Angers', 'Dijon', 'Nieemes',
    'Limoges', 'Aix-en-Provence', 'Perpignan', 'Biarritz', 'Brest', 'LeMans', 'Amiens', 'Annemasse', 'Annecy', 'Calais', 'Poitiers',
    'Versailles', 'Kerbrient', 'LaRochelle', 'Roanne', 'Bourges', 'Arras', 'Troyes', 'Cherbourg', 'Agen', 'Tarbes', 'Ajaccio',
    'Saint-Brieuc','Nevers', 'Vichy', 'Dieppe', 'Auxerre', 'Bastia', 'Chalons-en-Champagne'];


  constructor(private router: Router, private dbService: DbService) {
    if (localStorage.length > 0) {
      this.user = JSON.parse(localStorage.getItem('details'));
      this.cities = this.user.listeVilleFavortie;
      this.options = this.options.filter(x => {
        return !this.user.listeVilleFavortie.includes(x);
      });

    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  changeCity(e) {
    if (e.target.value === '') {
      this.selectedCity = null;
    } else {
      this.dbService.callWeather(e.target.value).subscribe(data => {
        this.selectedCity = data;
      });

    }
  }

  deleteCity() {
    this.user.listeVilleFavortie = this.user
      .listeVilleFavortie.filter(x => x !== this.selectedCity.name);
    localStorage.clear();
    localStorage.setItem('details', JSON.stringify(this.user));
    location.reload();
  }

  addCity() {
    if (!this.options.find(x => x === this.myControl.value)) {
      this.submitted = true;
      return;
    } else {
      this.user.listeVilleFavortie.push(this.myControl.value);
      console.log(this.user.listeVilleFavortie);
      localStorage.clear();
      localStorage.setItem('details', JSON.stringify(this.user));
      location.reload();
    }
  }
}
