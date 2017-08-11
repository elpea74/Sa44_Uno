import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import {Card, UnoDeck} from './model/Uno'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  //title = 'app';

   card:Card[] = [];
   playerNum:number;


  ngOnInit() {
    this.playerNum=2;
  }

  public AddPlayers():void{
    if(this.playerNum<7){
      this.playerNum++;
    }
  }

  public RemovePlayers():void{
    if(this.playerNum>2){
      this.playerNum--;
    }
  }
  
  ngOnDestroy(){  
  }
}