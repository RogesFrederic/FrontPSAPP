import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeJoueurComponent } from './resume-joueur.component';

describe('ResumeJoueurComponent', () => {
  let component: ResumeJoueurComponent;
  let fixture: ComponentFixture<ResumeJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
