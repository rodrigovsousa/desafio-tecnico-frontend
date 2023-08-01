import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldbankIndicatorsRoutingModule } from './worldbank-indicators-routing.module';
import { PovertyComponent } from './poverty/poverty.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    PovertyComponent
  ],
  imports: [
    CommonModule,
    WorldbankIndicatorsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class WorldbankIndicatorsModule { }
