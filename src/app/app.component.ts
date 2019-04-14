import { Component } from '@angular/core';
import { catList } from './create-kitten/chatons';
import { Chatons } from './create-kitten/chatons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chatons';
  chatlist:Chatons[] = catList;
}
