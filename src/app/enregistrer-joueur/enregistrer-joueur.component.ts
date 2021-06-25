import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-enregistrer-joueur',
  templateUrl: './enregistrer-joueur.component.html',
  styleUrls: ['./enregistrer-joueur.component.css']
})
export class EnregistrerJoueurComponent implements OnInit {

  constructor(private router: Router,
    private joueurService: JoueurService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.joueurService.enregistrerJoueurSurServeur(form.value);
    this.router.navigate(['/joueurs']);
  }
}
