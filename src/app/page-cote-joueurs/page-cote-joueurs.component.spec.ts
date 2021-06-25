import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCoteJoueursComponent } from './page-cote-joueurs.component';

describe('PageCoteJoueursComponent', () => {
  let component: PageCoteJoueursComponent;
  let fixture: ComponentFixture<PageCoteJoueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCoteJoueursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCoteJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
