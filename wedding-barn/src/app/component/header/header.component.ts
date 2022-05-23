import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  left_navs = [{text:"About", link:"abc"},{text:"Contact", link:"abc"},
  {text:"FAQ", link:"def"},]
  right_navs =[{text:"Pricing", link:"123"},
  {text:"Calendar", link:"456"},{text:"Gallery", link:"abc"},]


  constructor() { }

  ngOnInit(): void {
  }

}
