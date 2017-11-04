import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimePickerComponent } from './date-time-picker.component';

describe('DatepickerComponent', () => {
  let component: DateTimePickerComponent;
  let fixture: ComponentFixture<DateTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should define months',() => {
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    expect(component.months).toEqual(months);
  })

  it("should define current date", () => {
    let today = new Date();
    expect(component.currentDate).toEqual(jasmine.objectContaining(today));
  })

  it("should goto previous month", () => {
    let today = new Date("2017-11-04");
    let previousMonth = new Date("2017-10-04");
    component.selectedDate = today;
    component.previousMonth();
    expect(component.selectedDate).toEqual(previousMonth);
  })  

  it("should goto next month", () => {
    let today = new Date("2017-11-04");
    let nextMonth = new Date("2017-12-04");
    component.selectedDate = today;
    component.nextMonth();
    expect(component.selectedDate).toEqual(nextMonth);
  })  

  it("should get 30 days for Nov 2017", () => {
    let noOfDays = component.getNoOfDays(2017,10);
    expect(noOfDays).toEqual(30);
  })

  it("should get 28 days for Feb 2017", () => {
    let noOfDays = component.getNoOfDays(2017,1);
    expect(noOfDays).toEqual(28);
  })

  it("should get 29 days for Feb 2016", () => {
    let noOfDays = component.getNoOfDays(2016,1);
    expect(noOfDays).toEqual(29);
  })

  it("should return starting position for Nov 2017 as 3", () => {
    expect(component.getMonthStartingPos(2017,10)).toBe(3);
  })

  it("should set hours for selected date", () => {
    component.setHours(23);
    var date:Date = component.selectedDate;
    var hours = date.getHours();
    expect(hours).toBe(23);
  })

  it("should set hour 24 as 0 for selected date", () => {
    component.setHours(24);
    var date:Date = component.selectedDate;
    var hours = date.getHours();
    expect(hours).toBe(0);
  })

  it("should set hour 26 as 2 for selected date", () => {
    component.setHours(26);
    var date:Date = component.selectedDate;
    var hours = date.getHours();
    expect(hours).toBe(2);
  })

  it("should set minute for selected date", () => {
    component.setMinutes(26);
    var date:Date = component.selectedDate;
    var minutes = date.getMinutes();
    expect(minutes).toBe(26);
  })

  it("should set minute 60 as 0 for selected date", () => {
    component.setMinutes(60);
    var date:Date = component.selectedDate;
    var minutes = date.getMinutes();
    expect(minutes).toBe(0);
  })

  it("should set minute 65 as 5 for selected date", () => {
    component.setMinutes(65);
    var date:Date = component.selectedDate;
    var minutes = date.getMinutes();
    expect(minutes).toBe(5);
  })

  it("should return today", () => {
    let today = new Date();
    expect(component.getToday()).toEqual(jasmine.objectContaining(today));
  })

  it("should return week days for month", () => {
    let weekDaysForNov2017 = 
    [
      [-1,-1,-1,1,2,3,4],
      [5,6,7,8,9,10,11],
      [12,13,14,15,16,17,18],
      [19,20,21,22,23,24,25],
      [26,27,28,29,30]
    ]
    let date = new Date(2017,10);
    component.updateMonth(date);
    expect(component.days.day).toEqual(
      jasmine.objectContaining(weekDaysForNov2017)
    )
  })
});
