import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueResultPageComponent } from './unique-result-page.component';

describe('UniqueResultPageComponent', () => {
  let component: UniqueResultPageComponent;
  let fixture: ComponentFixture<UniqueResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueResultPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
