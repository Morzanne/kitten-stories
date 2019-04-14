import { Component, OnInit } from '@angular/core';
import { adoptedList } from '../create-kitten/chatons';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {
  adoptedList=adoptedList;
  constructor() { }

  ngOnInit() {
  }

}
