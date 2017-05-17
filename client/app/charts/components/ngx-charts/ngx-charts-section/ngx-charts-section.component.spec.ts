import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartsSectionComponent } from './ngx-charts-section.component';

describe('NgxChartsSectionComponent', () => {
  let component: NgxChartsSectionComponent;
  let fixture: ComponentFixture<NgxChartsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChartsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
