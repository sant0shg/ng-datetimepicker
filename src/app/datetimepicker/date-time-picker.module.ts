import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePickerComponent } from './datetimepicker/date-time-picker.component';
import { DateTimePickerInputComponent } from './datetimepickerinput/date-time-picker-input.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DateTimePickerComponent,
    DateTimePickerInputComponent
  ],
  entryComponents:[],
  exports:[DateTimePickerComponent,DateTimePickerInputComponent]
})
export class DateTimePickerModule { }
