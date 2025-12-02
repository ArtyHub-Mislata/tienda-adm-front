import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArtwork } from './card-artwork';

describe('CardArtwork', () => {
  let component: CardArtwork;
  let fixture: ComponentFixture<CardArtwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardArtwork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardArtwork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
