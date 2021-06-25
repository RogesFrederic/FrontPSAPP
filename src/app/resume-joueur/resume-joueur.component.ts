import { Component, Input, OnInit } from '@angular/core';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-resume-joueur',
  templateUrl: './resume-joueur.component.html',
  styleUrls: ['./resume-joueur.component.css']
})
export class ResumeJoueurComponent implements OnInit {

  @Input() joueurNom: string = '';
  @Input() joueurCote: number = 0;
  @Input() index: number = 0;
  @Input() id: number = 0;

  constructor(private joueurService: JoueurService) { }

  ngOnInit(): void {
  }

  getJoueurCote(){
    return this.joueurCote;
  } 

  setJoueurNom() {
    this.joueurService.setJoueurNom(this.index, this.joueurNom);
  }

  getColor(){
    return this.joueurCote > 220 ? 'green' : 'red';
  }

  onUpdate() {
    this.joueurService.updateOneService(this.index);
  }

}
