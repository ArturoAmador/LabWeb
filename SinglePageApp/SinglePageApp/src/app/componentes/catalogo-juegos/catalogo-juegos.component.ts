import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo-juegos',
  templateUrl: './catalogo-juegos.component.html',
  styleUrls: ['./catalogo-juegos.component.css']
})

export class CatalogoJuegosComponent implements OnInit {

  console: String;
  catalog;

  constructor(private route: ActivatedRoute) {
    this.console = this.route.snapshot.queryParams.console;
    if (this.console === 'ps4') {
      this.catalog = [{
        'title': 'The Witcher Wild Hunt',
        'year': '2015',
        'image': 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheWitcher3WildHuntCompleteEdition_enGB.jpg',
        'developer': 'Arthur',
      },
        {
          'title': 'Blood-Borne',
          'year': '2015',
          'developer': 'Jesus H.',
          'image': 'https://media.vandal.net/i/1200x630/8-2018/201882713175_1.jpg',
        },
        {
          'title': 'Uncharted thief ends',
          'year': '2016',
          'developer': 'Arthur',
          'image': 'https://i.blogs.es/09a281/uncharted400/450_1000.jpg',
        }

      ];
    }else {

      this.catalog = [{
        'title': 'Gear of war 5',
        'year': '2019',
        'image': 'https://compass-ssl.xbox.com/assets/4d/d4/4dd4dc7e-964c-43cf-aac4-f7d03fc40172.jpg?n=1616161616_GLP-Page-Hero-1084_1920x1080.jpg',
        'developer': 'Arthur',
      },
        {
          'title': 'Halo Guardians',
          'year': '2015',
          'developer': 'Jesus H.',
          'image': 'https://store-images.s-microsoft.com/image/apps.50236.69279545232152045.f1a4a87c-fcc9-4b7c-a620-f6c56eb2d5ad.f0eeb1d4-a30c-4a21-8bcb-46ed84669b5c',
        },
        {
          'title': 'Shadow of the Tomb Raider',
          'year': '2016',
          'developer': 'Arthur',
          'image': 'https://steamcdn-a.akamaihd.net/steam/apps/750920/header.jpg?t=1576776941',
        }

      ];

    }
  }
  ngOnInit():void {}
}
