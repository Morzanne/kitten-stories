import { Component, OnInit } from '@angular/core';
import { Chatons } from './chatons';
import { catList } from './chatons';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
  
})
export class CreateKittenComponent implements OnInit {

   public cat:Chatons={
     name:null,
     race:null,
     birthdate:null,
     photo:null,

   }
   
  constructor() { }

  ngOnInit() {
  }

 

  createKitten(){

  catList.push({name:this.cat.name, race:this.cat.race,birthdate:this.cat.birthdate,photo:this.cat.photo});
    
    console.log(catList);
  }

}
