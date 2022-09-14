import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  left_navs = [{text:"About", link:"home"},{text:"Contact", link:""},
  {text:"FAQ", link:""},]
  right_navs =[{text:"Pricing", link:"pricing"},
  {text:"Calendar", link:""},{text:"Gallery", link:""},]

  constructor() { }

  ngOnInit(): void {
  }

  displayRooster(index) {
    const element = <HTMLElement> document.getElementsByClassName('hover-rooster')[index];
    element.style.opacity = '100';
  }
  hideRooster(index){
    const element = <HTMLElement> document.getElementsByClassName('hover-rooster')[index];
    if (element.classList.contains('selected')) return
    element.style.opacity = '0';
  }
}
