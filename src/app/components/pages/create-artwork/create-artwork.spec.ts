import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArtwork } from './create-artwork';

describe('CreateArtwork', () => {
  let component: CreateArtwork;
  let fixture: ComponentFixture<CreateArtwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateArtwork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateArtwork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
