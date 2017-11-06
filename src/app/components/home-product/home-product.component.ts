import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeProduct',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

  products = [];
  constructor() {
    this.products = [
      {
        "img": "http://www.yiteng365.com/photos/65317_6.jpg?",
        "comment": "12982",
        "support": "2347",
        "nonsupport": "1223",
        "title": "双十一必看： 天猫双11大促抢红包、购物补贴券",
        "price": "3元",
        "platform": "京东商城",
        "time": "11-07"
      },
      {
        "img": "http://img10.360buyimg.com/n0/jfs/t1531/29/501435053/267248/16a16a0c/558a63fcNc8b1a857.jpg",
        "comment": "0",
        "support": "47",
        "nonsupport": "0",
        "title": "TYG楠竹实木家用砧板34*23*1.4cm",
        "price": "3元",
        "platform": "京东商城",
        "time": "11-07"
      },
      {
        "img": "http://imgsrc.baidu.com/imgad/pic/item/63d0f703918fa0ec2304ab0d2c9759ee3c6ddbeb.jpg",
        "comment": "4",
        "support": "23",
        "nonsupport": "0",
        "title": "OLAY 玉兰油 眼周精粹 提拉紧致眼部精华乳 15ml",
        "price": "3元",
        "platform": "京东商城",
        "time": "11-07"
      },
      {
        "img": "http://img000.hc360.cn/m6/M04/68/AA/wKhQoVV1MhKEbzwPAAAAAOKsReU561.jpg",
        "comment": "9",
        "support": "27",
        "nonsupport": "0",
        "title": "SUPER MILD 惠润 柔净洗发露 绿野芳香 600ml *3件",
        "price": "3元",
        "platform": "京东商城",
        "time": "11-07"
      },
      {
        "img": "http://img4.imgtn.bdimg.com/it/u=1052943421,226563819&fm=27&gp=0.jpg",
        "comment": "90",
        "support": "37",
        "nonsupport": "0",
        "title": "Teddy Bear 泰迪熊 超薄透气 婴儿纸尿裤 S28片【4-8公斤】",
        "price": "3元",
        "platform": "京东商城",
        "time": "11-07"
      },
      {
        "img": "http://www.tage365.com/images/201603/goods_img/1920_G_1458784340122.jpg",
        "comment": "88",
        "support": "247",
        "nonsupport": "0",
        "title": "限地区：蒙牛 优益C活菌型乳酸菌饮品 甜橙味 340ml",
        "price": "3元",
        "platform": "京东商城",
        "time": "11-07"
      }
    ]
   }

  ngOnInit() {
  }

}
