import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePickerComponent } from './datetimepicker/date-time-picker.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DateTimePickerComponent
  ],
  entryComponents:[],
  exports:[DateTimePickerComponent]
})
export class DateTimePickerModule { }
