import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-search',
  templateUrl: './vip-search.component.html',
  styleUrls: ['./vip-search.component.less']
})
export class VipSearchComponent implements OnInit {

  searchInputValue = {
    name: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
