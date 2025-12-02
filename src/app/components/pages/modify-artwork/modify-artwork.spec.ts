import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyArtwork } from './modify-artwork';

describe('ModifyArtwork', () => {
  let component: ModifyArtwork;
  let fixture: ComponentFixture<ModifyArtwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyArtwork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyArtwork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
