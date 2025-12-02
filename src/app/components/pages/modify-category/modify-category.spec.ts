import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCategory } from './modify-category';

describe('ModifyCategory', () => {
  let component: ModifyCategory;
  let fixture: ComponentFixture<ModifyCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
