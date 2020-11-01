import { Component, Input } from '@angular/core';
import { Movies } from '../../interfaces/movies';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  constructor() { }

  @Input() movie: Movies;

}
