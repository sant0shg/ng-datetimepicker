import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ng-datetimepicker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css'],
  host: { 'class':'ng-datetimepicker'}
})
export class DateTimePickerComponent implements OnInit {
  days = {
    day: [],
    pos:0
  }
  activeMonthYear = false;
  currentDate:any;
  selectedDate:any;
  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]
  @Output('selectDate')  clickedDate:any = new EventEmitter<any>();

  constructor() { 
    this.currentDate = this.getToday();
  }

  ngOnInit() {
    this.selectedDate = this.getToday();
    this.updateMonth(this.selectedDate);
  }

  /**
   * Go to previous month
   */
  previousMonth(){
    let tempMonth = this.selectedDate.getMonth();
    let tempYear = this.selectedDate.getFullYear();
    tempMonth--;
    if(tempMonth < 0){
      tempMonth = 11;
      tempYear--;
    }
    this.selectedDate.setMonth(tempMonth);
    this.selectedDate.setYear(tempYear);
    this.updateMonth(this.selectedDate);
  }

  /**
   * Go to next month
   */
  nextMonth(){
    let tempMonth = this.selectedDate.getMonth();
    let tempYear = this.selectedDate.getFullYear();
    tempMonth++;
    if(tempMonth > 11){
      tempMonth = 0;
      tempYear++;
    }
    this.selectedDate.setMonth(tempMonth);
    this.selectedDate.setYear(tempYear);
    this.updateMonth(this.selectedDate);
  }

  /**
   * Updates the month in UI.
   * @param date any date passed, can be previous month or 
   * current month
   */
  updateMonth(date:Date){
    let year = date.getFullYear();
    let month = date.getMonth();
    console.log(this.currentDate);
    if(year == this.currentDate.getFullYear() && month == this.currentDate.getMonth()){
      this.activeMonthYear = true;
    }else{
      this.activeMonthYear = false;
    }
    let monthStartingPosition:number = this.getMonthStartingPos(year,month);
    let noOfDaysInMonth:number = this.getNoOfDays(year,month);
    // array containing array of days
    // So Nov 2017 will contain 
    // weekArray
    // -1 -1 -1 1 2 3 4 --> daysArray
    // 5 6 7 8 9 10 --> daysArray
    // ...
    let weekArray = [];
    let daysArray = [];
    let offset = monthStartingPosition;
    for(let i=0;i<offset;i++){
      daysArray.push(-1);
    }
    for(let i=1;i<=noOfDaysInMonth;i++){
      
      if(daysArray.length != 7){
        daysArray.push(i);
      }
      if(daysArray.length == 7){
        weekArray.push(daysArray);
        daysArray = [];
      }
      
    }
    if(daysArray.length > 0){
      weekArray.push(daysArray);
    }
    
    this.days = {
      day:weekArray,
      pos:monthStartingPosition
    }
  }

  /**
   * Get number of days in a month and the starting position or "day of the week" of the month.
   * For example Nov 2017 starts on Wednesday ie 3 (0 is Sun,6 is Sat)
   * And Nov 2017 contains 30 days 
   * so it returns [30,3]
   * @param year Any year that is passed
   * @param month Any month that is passed
   */
  getMonthStartingPos(year,month):number{
    let daysPos:number = this.getArrayPos(year,month,1);
    return daysPos;
  }
  
  /**
   * Get the number of days in a month. Adjust for leap year.
   * @param year any year that is passed
   * @param month any month that is passed
   */
  getNoOfDays(year,month):number{
    var days = 
    [31,28,31,30,31,30,31,31,30,31,30,31];
    if(year%4 === 0){
    days[1] = 29;
    }
    return days[month];
  }
    
    /**
    * 0 - Sun
    * 6 - Sat
    */
  getArrayPos(year,month,date){
    let dat = new Date(year,month,date);
    return dat.getDay(); 
  }
    
  selectDate(date:number){
    this.selectedDate.setDate(date);
    this.clickedDate.emit({
      "date":this.selectedDate
    })
  }
  
  setHours(hours){
    this.selectedDate.setHours(hours);
  }

  setMinutes(minutes){
    this.selectedDate.setMinutes(minutes);
  }
  
  getToday(){
    return new Date();
  }
}
