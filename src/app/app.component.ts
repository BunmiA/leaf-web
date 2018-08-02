import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';

  updateTitle(title) {
    console.log('changing title to ', title);
    this.title = title;
  }


}
