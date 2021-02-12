import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Photo } from '../photo';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  photos: Photo[] = [];
  data!:any;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getPhotos();
    this.getAllPhotos();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getPhotos(): void {
    this.heroService.getPhotos()
    .subscribe(photos => this.photos);
    console.log(this.photos);
  }

  getAllPhotos() {
    this.heroService.getAllPhotos()._subscribe(this.data);
      console.log(this.data);
  }
}