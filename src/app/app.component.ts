import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Theme, ThemeService } from '../app/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movies';

  theme: Observable<Theme>;

  constructor(private themeService: ThemeService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.theme = this.themeService.style$;
  }

}
