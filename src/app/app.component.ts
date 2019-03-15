import { Component } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'connectFour';
  choise=true;
  Players={
    player1: "player1",
    player2:"player2"
  };
  win=false;
  name;
  final=[];
  column=[0,1,2,3,4,5,6];
  temp=[35,36,37,38,39,40,41];
  element = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
  SetPlayer(item){
    if(this.choise){
      let t = this.temp[item];
    while(this.element[t]!=""){
        t=t-7;
    }
    this.element[t]="set1";
    this.choise=!(this.choise);
    this.winner(t,"set1");
    //console.log(t);
    this.name=this.Players.player1;
    }else{
      let t = this.temp[item];
    while(this.element[t]!=""){
        t=t-7;
    }
    this.element[t]="set";
    //console.log(t);
    this.winner(t,"set");
    this.name=this.Players.player2;
    this.choise=!(this.choise);
    }
  }
  winner(position,value){
    //console.log("hello");
    this.horizontal(position,value);
    if(this.win===false){
      this.vertical(position,value);
    } 
    if(this.win===false){
      this.diagonal(value);
    } 
  }
horizontal(position,value){
  if(position%7<=3){
    let count=0;
    for(let i=0;i<4;i++){
      if(this.element[position+i]==value){
        count++;
        this.final.push(position+i);
        //console.log("hello");
      }
    }
    if(count==4){
      this.win=true;
      for(let k=0;k<42;k++){
        if(this.final.includes(k)){
          this.element[k]="win";
        }
      }
    }else{
      this.win=false;
      this.final=[];
    }
    //console.log(this.win);
  }

  if((position-3)%7<=3){
    let count=0;
    for(let i=0;i<4;i++){
      if(this.element[(position-3)+i]==value){
        count++;
        this.final.push((position-3)+i);
      }
    }
    if(count==4){
      this.win=true;
      for(let k=0;k<42;k++){
        if(this.final.includes(k)){
          this.element[k]="win";
        }
      }
    }else{
      this.win=false;
      this.final=[];
    }
    console.log(this.win);
  }
}
vertical(position,value){
  let t=position,count=0;
for(let i=0;i<4;i++){
  if(this.element[t]==value){
    //console.log("hello"+t);
    this.final.push(t);
    t=t+7;
    count++;
  }
}
if(count==4){
  this.win=true;
  for(let k=0;k<42;k++){
    if(this.final.includes(k)){
      this.element[k]="win";
    }
  }
}else{
  this.win=false;
  this.final=[];
}
}
diagonal(value){
  let j=0;
  while(this.win==false && j<21 ){
    let position=j;
    console.log(j);
    if(position%7<=3){
      let t=position,count=0;
      for(let i=0;i<4;i++){
        if(this.element[t]==value){
          this.final.push(t);
          t=t+8;
          count++;
        }
      }
      if(count==4){
        this.win=true;
        for(let k=0;k<42;k++){
          if(this.final.includes(k)){
            this.element[k]="win";
          }
        }
      }else{
        this.win=false;
        this.final=[];
      }
    }
    if(position%7>=3){
      let t=position,count=0;
      for(let i=0;i<4;i++){
        if(this.element[t]==value){
          console.log("hello"+t);
          this.final.push(t);
          t=t+6;
          count++;
        }
      }
      if(count==4){
        this.win=true;
        for(let k=0;k<42;k++){
          if(this.final.includes(k)){
            this.element[k]="win";
          }
        }
      }else{
        this.win=false;
        this.final=[];
      }
    }
j++
  }
  
}
}