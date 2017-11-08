import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  product = [
    '苹果',
    '荣耀',
    '小米',
    '魅族',
    '苹果',
    '荣耀',
    '小米',
    '魅族',
    '苹果',
    '荣耀',
    '小米',
    '魅族'
  ];
  size = [
    '全部6.0英寸及以上',
    '5.1英寸-5.9英寸',
    '5.0英寸',
    '4.5英寸-4.9英寸',
    '3.1英寸-4.4英寸',
    '3.0英寸及以下'
  ];

  constructor() { }

  ngOnInit() {
  }

}
