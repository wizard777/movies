import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  txt = false;
  constructor(private themeService: ThemeService) { }

  // tslint:disable-next-line:typedef
  toggleTheme() {
    this.themeService.toggleStyle();
    this.txt = !this.txt;
  }


}
