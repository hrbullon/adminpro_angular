import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './main.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    MainComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})

export class PagesModule { }
