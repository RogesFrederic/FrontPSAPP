import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrerJoueurComponent } from './enregistrer-joueur.component';

describe('EnregistrerJoueurComponent', () => {
  let component: EnregistrerJoueurComponent;
  let fixture: ComponentFixture<EnregistrerJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnregistrerJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrerJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
