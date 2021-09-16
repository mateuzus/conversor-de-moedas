import { HttpClient } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';


import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      	ConversorService
      ],
      imports: [
      	HttpClient
      ]
    });
  });

  it('should ...', inject([ConversorService], (service: ConversorService) => {
    expect(service).toBeTruthy();
  }));
});
