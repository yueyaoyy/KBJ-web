import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

 hotProducts = ["iphone X", "iphone 8", "小米", "华为p10", "iphone 7", "新ipad pro", "小米6"];

  constructor() { }

  ngOnInit() {
  }

}
