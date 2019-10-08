import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})
export class DbService {

  constructor(private Http: HttpClient) {
  }
  db = [{
    listeVilleFavortie: ['Lyon',

      'Marseille',


      'Dijon',
    ],

    login: 'a',

    password: 'a'

  },

    {
      listeVilleFavortie: ['Rennes',

        'Paris',

        'Lille',

        'Nantes',

        'Bordeaux'

      ],

      login: 'bb@bb.bb',

      password: 'bb'

    },

    {
      listeVilleFavortie: ['Strasbourg',

        'Metz',

        'Nancy',

        'Amiens',

        'Bourges',

        'Tours'

      ],

      login: 'cc@cc.cc',

      password: 'cc'

    }

  ];

  callWeather(cityName) {
    const apicall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',fr&appid=3d32e5ea54d83c5d53afbeab1e165307';
    return this.Http.get(apicall);
  }
}
