import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ResumeJoueurComponent } from './resume-joueur/resume-joueur.component';
import { FormsModule } from '@angular/forms';
import { JoueurService } from './services/joueur.service';
import { PageEquipesComponent } from './page-equipes/page-equipes.component';
import { PageCoteJoueursComponent } from './page-cote-joueurs/page-cote-joueurs.component';
import { RouterModule, Routes} from '@angular/router';
import { JoueurComponent } from './joueur/joueur.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CoteFormatPipe } from './pipe/cote-format.pipe';
import { EnregistrerJoueurComponent } from './enregistrer-joueur/enregistrer-joueur.component';

const appRoutes: Routes = [
  { path: 'joueurs', component: PageCoteJoueursComponent },
  { path: 'joueurs/:id', component: JoueurComponent },
  { path: 'equipes', component: PageEquipesComponent },
  { path: '', component: PageCoteJoueursComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ResumeJoueurComponent,
    CoteFormatPipe,
    PageEquipesComponent,
    PageCoteJoueursComponent,
    JoueurComponent,
    FourOhFourComponent,
    EnregistrerJoueurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    JoueurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
