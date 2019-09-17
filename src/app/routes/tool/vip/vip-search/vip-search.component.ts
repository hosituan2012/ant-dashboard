import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-search',
  templateUrl: './vip-search.component.html',
  styleUrls: ['./vip-search.component.less']
})
export class VipSearchComponent implements OnInit {

  searchInputValue = {
    name: null
  };

  listOfData = {
    img: 'https://vcdn-vnexpress.vnecdn.net/2019/07/14/Honda-Winner-X-2019-VnE-3437-1563083779_680x0.jpg',
    title: 'Nuoc mat em lau bang nguoi yeu moi',
    language: 'EN/US',
    username: 'Phan Thanh Winner',
    duration: 150,
    view: 150,
    timestamp: '1568733293412'
  };

  constructor() { }

  ngOnInit() {
  }

}
