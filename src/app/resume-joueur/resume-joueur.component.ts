import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-joueur',
  templateUrl: './resume-joueur.component.html',
  styleUrls: ['./resume-joueur.component.css']
})
export class ResumeJoueurComponent implements OnInit {

  @Input() joueurNom: string = '';
  @Input() joueurCote: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getJoueurCote(){
    return this.joueurCote;
  } 

  getColor(){
    return this.joueurCote > 220 ? 'green' : 'red';
  }
}
