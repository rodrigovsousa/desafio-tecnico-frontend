import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PovertyComponent } from '../worldbank-indicators/poverty/poverty.component';
import { WorldbankIndicatorsModule } from '../worldbank-indicators/worldbank-indicators.module';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
