import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartJsSectionComponent } from ".";
// CHARTS COMPONENTS

import { Auth } from '../users';

const articlesRoutes: Routes = [{
  path: '', 
  component: ChartJsSectionComponent,
}];
  
@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChartsRoutingModule { }
