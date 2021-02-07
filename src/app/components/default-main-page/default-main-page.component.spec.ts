import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultMainPageComponent } from './default-main-page.component';

describe('DefaultMainPageComponent', () => {
  let component: DefaultMainPageComponent;
  let fixture: ComponentFixture<DefaultMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
