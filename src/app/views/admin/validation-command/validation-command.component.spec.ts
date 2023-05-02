import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCommandComponent } from './validation-command.component';

describe('ValidationCommandComponent', () => {
  let component: ValidationCommandComponent;
  let fixture: ComponentFixture<ValidationCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
