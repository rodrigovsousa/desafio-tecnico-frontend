import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PovertyComponent } from './poverty.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogHarness } from '@angular/material/dialog/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PovertyService } from '../service/poverty.service';
import { HarnessLoader } from '@angular/cdk/testing';

describe('PovertyComponent', () => {
  let component: PovertyComponent;
  let loader: HarnessLoader;
  let povertyServiceSpy: jasmine.SpyObj<PovertyService>;
  let fixture: ComponentFixture<PovertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [PovertyComponent],
    });
    fixture = TestBed.createComponent(PovertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with 1 field', () => {
    expect(component.form.contains('countryId')).toBeTruthy();
  });

  it('should open ErrorDialogComponent onError', async () => {
    loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    fixture.detectChanges();
    component.onError('Error');
    const dialogs = await loader.getAllHarnesses(MatDialogHarness);
    expect(dialogs.length).toBe(1);
    dialogs[0].close();
  });

  it('should call `PovertyService.save` when the form is submitted', () => {
    const saveSpy = spyOn(component, 'getIndicatorValue');
    const saveButton = fixture.debugElement.nativeElement.querySelector(
      'button[type="submit"]'
    );
    saveButton.dispatchEvent(new Event('click'));
    expect(saveSpy).toHaveBeenCalled();
  });
});
