import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conditions2 } from './conditions-2';

describe('Conditions2', () => {
  let component: Conditions2;
  let fixture: ComponentFixture<Conditions2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conditions2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conditions2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
