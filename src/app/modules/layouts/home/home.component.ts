import { Component, OnInit } from '@angular/core';
import { HomeServicesService } from './home_services/home-services.service';
import { Films } from 'src/app/model/films';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
 public allFilms: Films[]=[];

  constructor( private homeService: HomeServicesService) { }

  ngOnInit(): void {
    this.getFilms();
  }
  public getFilms(): void {
    this.homeService.getFilms().subscribe((data: any) => {
      this.allFilms = data;
       console.log('arrRe', this.allFilms);
    })

  }

}
