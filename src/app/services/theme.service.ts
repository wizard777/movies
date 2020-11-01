import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  light = 'light',
  dark = 'dark'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private style: BehaviorSubject<Theme> = new BehaviorSubject(Theme.dark);
  constructor() { }

  // $ variables observable
  //  use $ sign at the end of variable to differentiate variables between regular and observable ones.
  // Adding a $ at the end of a property/variable, style$ , is a general convention used for denoting observable types.

  // tslint:disable-next-line:typedef
  get style$() {
    // asObservable() operator can be used to transform a subject into an observable
    return this.style.asObservable();
  }

  toggleStyle(): any {
    if (this.style.value === Theme.dark) {
     // passes a new value into style
     // To emit a new value to the BehaviorSubject we just call next()
     // Aby wyemitować nową wartość do tego, BehaviorSubject który właśnie wywołujemy next().
   // next , for setting new values.
      this.style.next(Theme.light);
    } else {
      this.style.next(Theme.dark);
    }
  }

}
