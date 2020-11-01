import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/interfaces/movies';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute) {

  }

  movies$: Observable<Movies>;

  ngOnInit(): void {
   this.route.params.subscribe(params => {
    this.movies$ = this.api.getMovieByTitle(params.movie);
    console.log(params.movie);
    console.log(this.movies$);
   });
  }
}
