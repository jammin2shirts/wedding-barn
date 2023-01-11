import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  url ="https://www.honeybook.com/widget/the_wedding_barn_234791/cf_id/633da925dd2a5a0026b82a25"

  left_navs = [
    { text: "Home", link: "home" },
    { text: "About", link: "about" },
    // { text: "FAQ", link: "" },
  ]
  right_navs = [
    { text: "Packages", link: "packages" },
    { text: "Contact", link: "contact" },
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
    if (link == 'contact') {
      window.open(this.url, "_blank");
    } else {
      this.router.navigate(['/', link])
    }
  }
}
