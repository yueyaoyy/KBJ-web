import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorys = [];

  constructor() {
    this.categorys = [
      {
        'categoryImg' : '',
        'categoryTitle' : '大家电，生活用品',
        'categoryContent' : [
          {'contentImg' : 'http://pic3.16pic.com/00/12/03/16pic_1203032_b.jpg',
          'contentTitle' : '平板电视'
          },
          {'contentImg' : '',
          'contentTitle' : '空调'
          },
          {'contentImg' : '',
          'contentTitle' : '冰箱'
          },
          {'contentImg' : '',
          'contentTitle' : '洗衣机'
          },
          {'contentImg' : '',
          'contentTitle' : '洗衣机'
          },
          {'contentImg' : '',
          'contentTitle' : '洗衣机'
          },
          {'contentImg' : '',
          'contentTitle' : '洗衣机'
          },
        ]
      },
      {
        'categoryImg' : '',
        'categoryTitle' : '电脑，配件',
        'categoryContent' : [
          {'contentImg' : '',
          'contentTitle' : '笔记本电脑'
          },
          {'contentImg' : '',
          'contentTitle' : '显示器'
          },
          {'contentImg' : '',
          'contentTitle' : 'U盘'
          }
        ]
      },
      {
        'categoryImg' : '',
        'categoryTitle' : '手机数码',
        'categoryContent' : [
          {'contentImg' : '',
          'contentTitle' : '手机'
          },
          {'contentImg' : '',
          'contentTitle' : '对讲机'
          }
        ]
      },
      {
        'categoryImg' : '',
        'categoryTitle' : '办公用品',
        'categoryContent' : [
          {'contentImg' : '',
          'contentTitle' : '打印机'
          },
          {'contentImg' : '',
          'contentTitle' : '路由'
          },
          {'contentImg' : '',
          'contentTitle' : '鼠标'
          },
          {'contentImg' : '',
          'contentTitle' : '计算器'
          }
        ]
      },
      {
        'categoryImg' : '',
        'categoryTitle' : '个户，健康产品',
        'categoryContent' : [
          {'contentImg' : '',
          'contentTitle' : '电动牙刷'
          },
          {'contentImg' : '',
          'contentTitle' : '体温计'
          },
          {'contentImg' : '',
          'contentTitle' : '榨汁机'
          },
          {'contentImg' : '',
          'contentTitle' : '血压计'
          }
        ]
      }
    ]
   }

  ngOnInit() {
  }
}
