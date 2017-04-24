import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartJsSectionComponent } from './chart-js-section.component';

describe('ChartJsSectionComponent', () => {
  let component: ChartJsSectionComponent;
  let fixture: ComponentFixture<ChartJsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartJsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartJsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
