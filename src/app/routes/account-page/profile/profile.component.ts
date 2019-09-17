import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  tempInputValue = {
    // name: 'Phạm Thế Khịa',
    // email: 'khiavcl@gmailll.com',
    // password: '12345678',
    // facebook: 'facebook.com/phamthekhiaphanthanhmt15'

    name: 'Jack Sparrow',
    email: 'khiavcl@gmailll.com',
    password: '12345678',
    facebook: 'facebook.com/jacksparrow'
  };
  loading = false;

  constructor() { }

  ngOnInit() {
  }

  editProfile() {
    console.log(this.tempInputValue.password);
    
  }

}
