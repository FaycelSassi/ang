import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: any;
  constructor(private CarService:CarService) { }

  ngOnInit(): void {
    this.CarService.getAllProperties().subscribe(
        data=>{
          this.Properties=data;
          console.log(data)
        }),console.error();
        ;

    // this.http.get('data/properties.json').subscribe(
    //   data=>{
    //     this.Properties=data;
    //     console.log(data)
    //   }

    // );
  }

}
