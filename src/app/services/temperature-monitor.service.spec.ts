import { TestBed, inject } from '@angular/core/testing';

import { TemperatureMonitorService } from './temperature-monitor.service';

describe('TemperatureMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureMonitorService]
    });
  });

  it('should be created', inject([TemperatureMonitorService], (service: TemperatureMonitorService) => {
    expect(service).toBeTruthy();
  }));
  it('should add record ', inject([TemperatureMonitorService], (service: TemperatureMonitorService) => {

    service.add(1).subscribe(resp => {
      expect(resp.length).toBe(1);
    })

  }));
   it('should calculate median ', inject([TemperatureMonitorService], (service: TemperatureMonitorService) => {

   let median =  service.getMedian([1,2,3])
   expect(median).toBe(2);

  }));
});
