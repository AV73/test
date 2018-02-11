import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
let records = []; // created an array to store temp values9

@Injectable()
export class TemperatureMonitorService {

  constructor() { }
 // Had an add method to push data 
  add(data) {
    records.push(data);
    return Observable.of(records)
  }
  
  getMedian(records) {
    
   //logic for median

    var half = Math.floor(records.length / 2);

    if (records.length % 2)
      return records[half];
    else
      return (records[half - 1] + records[half]) / 2.0;
  }
}
