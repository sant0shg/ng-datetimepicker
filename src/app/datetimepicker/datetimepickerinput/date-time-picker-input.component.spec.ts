import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimePickerInputComponent } from './date-time-picker-input.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DatepickerInputComponent', () => {
  let component: DateTimePickerInputComponent;
  let fixture: ComponentFixture<DateTimePickerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimePickerInputComponent ],
      imports:[FormsModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimePickerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it("should set date on click of date in datepicker", () => {
    let selectedDate = {
      date: new Date().toString()
    }
    component.onDateSelect(selectedDate);
    expect(component._selectedDate).toEqual(selectedDate.date);
  })

  it("should close datepicker on click of date", () => {
    let selectedDate = {
      date: new Date().toString()
    }
    component.onDateSelect(selectedDate);
    expect(component.show).toBeFalsy();
  })

  it("should emit event onDateSelected on click of date", () => {
    let selectedDate = {
      date: new Date().toString()
    }
    spyOn(component.onDateSelected, 'emit');
    component.onDateSelect(selectedDate);
    fixture.detectChanges();    
    expect(component.onDateSelected.emit).toHaveBeenCalledWith(selectedDate);
  })

  it("should support custom format of date", () => {
    debugger;
    let customFormatDate = function(dateStr:string){
      let date = new Date(dateStr);
      // DD-MM-YYYY hh:mm:ss
      return date.getDate() + "-" 
          + date.getMonth() + "-" 
          + date.getFullYear() + " " 
          + date.getHours() + ":" 
          + date.getMinutes() + ":" 
          + date.getSeconds();
    }
    component.customFormatDate = customFormatDate;
    let today = new Date();
    let selectedDate = {
      date: today.toString()
    }
    component.onDateSelect(selectedDate);
    expect(component._selectedDate).toBe(customFormatDate(today.toString()));
  })
});
