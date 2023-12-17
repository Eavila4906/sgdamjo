import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiceventComponent } from './dynamicevent.component';

describe('DynamiceventComponent', () => {
  let component: DynamiceventComponent;
  let fixture: ComponentFixture<DynamiceventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiceventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiceventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
