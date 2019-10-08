import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DbService} from '../../services/db.service';
import {User} from '../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  listCities = [];

  constructor(private router: Router, private db: DbService) {

    if (localStorage.length > 0) {
      this.user = JSON.parse(localStorage.getItem('details'));
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
    this.user.listeVilleFavortie.forEach(async e => {
      await Promise.all([await this.db.callWeather(e).subscribe((data: any[]) => {
        this.listCities.push(data);
        return this.listCities;
      })]);
    });
  }

}
