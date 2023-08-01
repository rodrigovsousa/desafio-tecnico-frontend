import { BehaviorSubject, EMPTY, Observable, catchError, finalize, of, retry, tap } from 'rxjs';
import { Component } from '@angular/core';
import { PovertyIndicator } from '../model/poverty-indicator';
import { PovertyService } from '../service/poverty.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-poverty',
  templateUrl: './poverty.component.html',
  styleUrls: ['./poverty.component.scss'],
})
export class PovertyComponent {
  form: FormGroup = new FormGroup({});
  indicators$: Observable<PovertyIndicator[]> = new Observable();
  displayedColumns: string[] = ['indicatorId', 'country', 'indicator', 'date'];
  pageSize = 10;


  constructor(
    private povertyService: PovertyService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
    ) {
      this.pageSize = 10;
    }

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        countryId: ['', Validators.required]
      })
      console.log(this.form);
    }

  onError(error: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: error
    });

  }

  getIndicatorValue(countryId: string){
    if (this.form.invalid) {
      return;
    }
    this.indicators$ = this.povertyService.getPovertyIndicatorData(countryId)
    .pipe(
      tap(indicators => {
        if (indicators.length === 0) {
          this.onError("Não há dados para a sigla do País informada.");
        }
      }),
      catchError(error => {
        this.onError("Não foi possível carregar os dados.");
        return of([]);
      })
    );
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
  }

}
