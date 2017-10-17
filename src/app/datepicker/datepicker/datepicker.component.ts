import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
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
  @Output('selectDate')  clickedDate:any = new EventEmitter<any>();;

  constructor() { 
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.selectedDate = this.currentDate;
    this.updateMonth(this.selectedDate);
    
  }

  previousMonth(){
    let tempMonth = this.selectedDate.getMonth();
    let tempYear = this.selectedDate.getFullYear();
    tempMonth--;
    if(tempMonth < 0){
      tempMonth = 11;
      tempYear--;
    }
    this.selectedDate = new Date(tempYear,tempMonth);
    this.updateMonth(this.selectedDate)
  }

  nextMonth(){
    let tempMonth = this.selectedDate.getMonth();
    let tempYear = this.selectedDate.getFullYear();
    tempMonth++;
    if(tempMonth > 11){
      tempMonth = 0;
      tempYear++;
    }
    this.selectedDate = new Date(tempYear,tempMonth);
    this.updateMonth(this.selectedDate)
  }

  updateMonth(date:Date){
    let year = date.getFullYear();
    let month = date.getMonth();
    if(year == this.currentDate.getFullYear() && month == this.currentDate.getMonth()){
      this.activeMonthYear = true;
    }else{
      this.activeMonthYear = false;
    }
    var d:any = this.getMonthStartingPos(year,month);
    var temp = [];
    var t = [];
    var offset = d[1];
    for(let i=0;i<offset;i++){
      t.push(-1);
    }
    for(let i=1;i<=d[0];i++){
      
      if(t.length != 7){
        t.push(i);
      }
      if(t.length == 7){
        temp.push(t);
        t = [];
      }
      
    }
    if(t.length > 0){
      temp.push(t);
    }
    
    this.days = {
      day:temp,
      pos:d[1]
    }
    console.log(this.days);
  }

  getMonthStartingPos(year,month){
    let noOfDays = this.getNoOfDays(year,month);
    let daysPos = this.getArrayPos(year,month,1);
    return [noOfDays,daysPos];
  }
    
  getNoOfDays(year,month){
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
    this.selectedDate = new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),date);
    this.clickedDate.emit({
      "date":this.selectedDate
    })
  }
  
  
}
