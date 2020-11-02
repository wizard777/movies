import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movies } from 'src/app/interfaces/movies';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   movies$: Observable<Movies[]>;



  constructor( private api: ApiService) { }

  ngOnInit(): void {
    this.movies$ =  this.api.getMovies();
  }

}
