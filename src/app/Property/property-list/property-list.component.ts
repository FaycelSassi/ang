import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: Array <any>=[
    {
    "Id":1,
    "name":"Mercedes",
    "Points":447,
    "TeamPrincipal":"Toto Wolf "
  },{
    "Id":2,
    "name":"Red Bull",
    "Points":696,
    "TeamPrincipal":"Christian Horner "
  },{
    "Id":3,
    "name":"Ferrari",
    "Points":487,
    "TeamPrincipal":"Mattia Binotto"
  },{
    "Id":4,
    "name":"Mclaren",
    "Points":146,
    "TeamPrincipal":"Andreas Seidl"
  },{
    "Id":5,
    "name":"Aston Martin",
    "Points":49,
    "TeamPrincipal":"Mike Krack"
  },{
    "Id":6,
    "name":"Alpine",
    "Points":153,
    "TeamPrincipal":"Otmar Szafnauer"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
