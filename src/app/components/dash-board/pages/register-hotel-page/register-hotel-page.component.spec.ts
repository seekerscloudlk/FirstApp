import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHotelPageComponent } from './register-hotel-page.component';

describe('RegisterHotelPageComponent', () => {
  let component: RegisterHotelPageComponent;
  let fixture: ComponentFixture<RegisterHotelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHotelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHotelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
