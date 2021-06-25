import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ResumeJoueurComponent } from './resume-joueur/resume-joueur.component';
import { FormsModule } from '@angular/forms';
import { CoteFormatPipe } from './pipe/cote-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ResumeJoueurComponent,
    CoteFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
