import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  joueurs = [
    {
      name: 'Mbappé',
      cote: 215
    },
    {
      name: 'Benzema',
      cote: 250
    },
    {
      name: 'Lukaku',
      cote: 280
    }
  ];

  constructor(){
    setTimeout(
      () =>{
        this.isAuth = true;
      } ,
      4000
    )
  } 

  updateAll(){
    console.log('On update tout');
  } 
}
