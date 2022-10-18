import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  left_navs = [
    { text: "About", link: "home" },
    // { text: "FAQ", link: "" },
  ]
  right_navs = [
    { text: "Contact", link: "contact" },
    // { text: "Pricing", link: "pricing" },
    // { text: "Calendar", link: "" },
    // { text: "Gallery", link: "" },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayRooster(index) {
    const element = <HTMLElement>document.getElementsByClassName('hover-rooster')[index];
    element.style.opacity = '100';
  }
  hideRooster(index) {
    const element = <HTMLElement>document.getElementsByClassName('hover-rooster')[index];
    if (element.classList.contains('selected')) return
    element.style.opacity = '0';
  }
  navTo(link: string) {
    this.router.navigate(['/',link])
      .then(() => {
        if (link == 'contact') {
          window.location.reload();
        }
      });
  }
}
