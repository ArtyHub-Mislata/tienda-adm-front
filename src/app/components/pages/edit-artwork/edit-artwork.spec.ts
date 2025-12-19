import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArtwork } from './edit-artwork';

describe('EditArtwork', () => {
  let component: EditArtwork;
  let fixture: ComponentFixture<EditArtwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditArtwork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditArtwork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
