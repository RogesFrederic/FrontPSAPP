import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  name: string = "Joueur";
  cote: number = 0;

  constructor(private joueurService: JoueurService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.joueurService.getJoueurById(id).name;
    this.cote = this.joueurService.getJoueurById(id).cote;
  }

}
