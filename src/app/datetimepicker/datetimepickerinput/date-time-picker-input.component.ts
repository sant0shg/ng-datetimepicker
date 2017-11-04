import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'ng-datetimepicker',
  templateUrl: './date-time-picker-input.component.html',
  styleUrls: ['./date-time-picker-input.component.css'],
  host:{ 'class': 'ng-datetimepicker'}
})
export class DateTimePickerInputComponent {
  /**
   * Hide and show the datepicker
   */
  show:boolean = false;
  /**
   * The selected date is stored
   */
  _selectedDate:string;

  /**
   * Input the date from outside
   */
  @Input('customDate') customFormatDate:Function;

  // get selectedDate(): string { return this._selectedDate; }  

  /**
   * Outputs when date is selected
   */
   @Output('onDateSelected') onDateSelected = new EventEmitter<any>();

  constructor() { }

  /**
   * Opens the datepicker modal
   */
  openDatePicker(){
    this.show = true;
  }

  /**
   * Closes the datepicker modal
   */
  closeDatePicker(){
    this.show = false;
  }

  /**
   * Event on date is selected
   * @param selectedDate accepts the date object
   */
  onDateSelect(selectedDate:any){
    if(this.customFormatDate){
      this._selectedDate = this.customFormatDate(selectedDate.date);
    }else{
      this._selectedDate = selectedDate.date;
    }
    
    // this.selectedDate = this.dateformatService.format(selectedDate,"dd-mm-yyyy",false);
    this.closeDatePicker();
    this.onDateSelected.emit({
      "date":this._selectedDate
    })
  }
}
