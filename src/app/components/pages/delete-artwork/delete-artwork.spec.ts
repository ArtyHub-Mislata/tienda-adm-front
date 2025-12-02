import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteArtwork } from './delete-artwork';

describe('DeleteArtwork', () => {
  let component: DeleteArtwork;
  let fixture: ComponentFixture<DeleteArtwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteArtwork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteArtwork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
