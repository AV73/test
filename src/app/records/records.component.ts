import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import the forms

import { TemperatureMonitorService } from '../services/temperature-monitor.service' //Import the service

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
  providers: [TemperatureMonitorService] //The service should be added to  the component as provider

})
export class RecordsComponent implements OnInit {
  public temparature;
  public getRecords;
  public recordsCount:number=0;
  public activeTasks;
  
  records: any
  median: any
  constructor(private TemperatureMonitorService: TemperatureMonitorService) { } //supplied service by dependency injection
  
  ngOnInit() {
  
  }
  //created an addRecords method
  addRecords(heroForm) {
    this.TemperatureMonitorService.add( this.temparature )
      .subscribe((resp) => { //subscribe the return respone from add method in service.ts
        heroForm._submitted = false
        this.temparature = '';
        this.records = resp
        this.recordsCount = this.records.length; //Asssigning record lenght to records count for progress bar
        
        this.getMedian() 
      });
  }
// Created a method to get median value
  getMedian() {
    this.median = this.TemperatureMonitorService.getMedian(this.records)  // All the record values are pushed here from add method
  }
}
