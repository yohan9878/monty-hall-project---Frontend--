import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationComponentComponent } from './simulation-component.component';

describe('SimulationComponentComponent', () => {
  let component: SimulationComponentComponent;
  let fixture: ComponentFixture<SimulationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimulationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
