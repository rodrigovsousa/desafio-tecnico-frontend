import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';


import { PovertyService } from './poverty.service';
import { povertyMock } from './provertyMock.mock';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

describe('PovertyService', () => {
  let service: PovertyService;
  let httpTestingController: HttpTestingController;
  const API = '/api/v1/poverty-indicator/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [PovertyService]
    });
    service = TestBed.inject(PovertyService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should return poverty indicator data', () => {
    service.getPovertyIndicatorData('ZH').subscribe((data) => {
      expect(data.length).toBe(4);
      expect(data).toEqual(povertyMock);
    });

    const req = httpTestingController.expectOne(`${API}/ZH`);
    expect(req.request.method).toEqual('GET');
    req.flush(povertyMock);
  });

  it('should give an error if indicator does not exist', () => {
    service.getPovertyIndicatorData('AA').subscribe(
      () => {
        fail('Poverty indicator should not exist');
      },
      (error: HttpErrorResponse) => {
        expect(error.status).toBe(404);
      }
    );

    const req = httpTestingController.expectOne(`${API}/AA`);
    expect(req.request.method).toEqual('GET');
    req.flush('Poverty indicator not found', { status: 404, statusText: 'Not found' });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
