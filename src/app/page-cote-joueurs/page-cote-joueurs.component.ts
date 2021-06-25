import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-page-cote-joueurs',
  templateUrl: './page-cote-joueurs.component.html',
  styleUrls: ['./page-cote-joueurs.component.css']
})
export class PageCoteJoueursComponent implements OnInit, OnDestroy {
  isAuth: boolean = false;
  joueurs: any[] = [];
  joueurSubscription!: Subscription;

  constructor(private joueurService: JoueurService){

  } 

  ngOnInit() {
    this.joueurSubscription = this.joueurService.joueursSubject.subscribe(
      (joueurs: any[]) => {
        this.joueurs = joueurs;
      }
    );
    this.joueurService.emitJoueurSubject();
  }

  updateAll(){
    if (confirm('Voulez-vous mettre à jour tout les joueurs ?')) {
      this.joueurService.updateAllService();
    }
  } 
 
  ngOnDestroy() {
    this.joueurSubscription.unsubscribe();
  }

}
