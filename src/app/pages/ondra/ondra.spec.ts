import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ondra } from './ondra';

describe('Ondra', () => {
  let component: Ondra;
  let fixture: ComponentFixture<Ondra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ondra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ondra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
