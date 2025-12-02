import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtWork } from './add-art-work';

describe('AddArtWork', () => {
  let component: AddArtWork;
  let fixture: ComponentFixture<AddArtWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddArtWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArtWork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
