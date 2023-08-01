import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo: '/worldbank-indicators', pathMatch: 'full' },
  { path:'worldbank-indicators',
  loadChildren: () => import('./worldbank-indicators/worldbank-indicators.module').then(m => m.WorldbankIndicatorsModule) },
];

const mockMatMdcDialogData: any = {};

@NgModule({
  providers: [
    { provide: InjectionToken, useValue: mockMatMdcDialogData },
    ],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
