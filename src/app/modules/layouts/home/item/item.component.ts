import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServicesService } from '../home_services/home-services.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() allFilms !: any;
  public itemId: string = '';
  constructor(private _router: Router, private homeService: HomeServicesService) { }

  ngOnInit(): void {

    // this.getPlaylist()

  }
  // public getPlaylist(): void {
  //   this.homeService.getFilmsId(this.itemId).subscribe((data: any) => {
  //     this.itemId = data;
  //     //console.log('Data:', data);
  //   }, (err) => {
  //     //console.log('Error:', err);
  //     //console.error(err.message);
  //   }, () => {
  //     //console.log('Complete!');
  //   });
  // }

}


