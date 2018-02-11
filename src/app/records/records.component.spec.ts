import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//Import all the  mock componets

import { RecordsComponent } from './records.component';
import { TemperatureMonitorService } from '../services/temperature-monitor.service'
import { Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('RecordsComponent', () => {
  let component: RecordsComponent;
  let fixture: ComponentFixture<RecordsComponent>;
  let temparatureService

  let spy // Used because it injects the definition of real service by mocking
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [RecordsComponent],
      providers: [TemperatureMonitorService],
      schemas: [NO_ERRORS_SCHEMA],
      
      imports:[FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsComponent);
    let testRecords = [1]
    temparatureService = fixture.debugElement.injector.get(TemperatureMonitorService);
    spy = spyOn(temparatureService, 'add')//  tests add methods
      .and.returnValue(Observable.of(testRecords));
      spyOn(temparatureService, 'getMedian') // tests get median values
      .and.returnValue(10); // 10 is the median of the array [8,10,9]
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // mock the add record method 
  it('should add record with promise ', async(() => {
    component.addRecords({})
    fixture.detectChanges();

    fixture.whenStable().then(() => { // Waiting for async getQuote methods
      fixture.detectChanges();        // This will get the update view with the quote
      expect(component.recordsCount).toBe(1);
    });
  }));
  // mock the median method 
  it('should give median ', async(() => { 
    component.records=[8,10,9]
    component.getMedian()
    fixture.detectChanges(); 
    expect(component.median).toBe(10)
  }));
});
