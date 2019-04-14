import { Component, OnInit } from '@angular/core';
import { catList } from '../create-kitten/chatons';
import { adoptedList } from '../create-kitten/chatons';
import { Chatons } from '../create-kitten/chatons';


@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {
  catList=catList;
  adoptedList=adoptedList;

  constructor() { }

  ngOnInit() {
  }

  adopt(name:string,race:string,birthdate:string,photo:string, chat){
    this.adoptedList.push({name:name,race:race,birthdate:birthdate, photo:photo});
    this.catList.splice(this.catList.indexOf(chat),1);
    console.log(catList)
  }

}
