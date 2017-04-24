import { NgModule,CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer, TooltipPosition } from '@angular/material';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

// CHART.JS MODULE
import  { ChartsModule as Ng2ChartModule } from 'ng2-charts';
import 'chart.js';


// CHARTS COMPONENTS
import { ChartJsSectionComponent, BarChartComponent, PolarAreaChartComponent, RadarChartComponent, LineChartComponent } from ".";
// CHARTS SERVICES


// CHARTS ROUTES
import { ChartsRoutingModule } from ".";


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2ChartModule,
    ChartsRoutingModule
  ],
  declarations: [
    ChartJsSectionComponent,
    BarChartComponent,
    PolarAreaChartComponent,
    RadarChartComponent,
    LineChartComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [OverlayContainer],

})
export class ChartsModule {
}
