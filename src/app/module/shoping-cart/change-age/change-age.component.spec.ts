import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAgeComponent } from './change-age.component';

describe('ChangeAgeComponent', () => {
  let component: ChangeAgeComponent;
  let fixture: ComponentFixture<ChangeAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
