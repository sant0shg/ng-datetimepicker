var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from '@angular/core';
var DatepickerInputComponent = (function () {
    function DatepickerInputComponent() {
        /**
         * Hide and show the datepicker
         */
        this.show = false;
        /**
         * Options
         */
        this.options = {
            "format": ""
        };
        // get selectedDate(): string { return this._selectedDate; }  
        /**
         * Outputs when date is selected
         */
        this.onDateSelected = new EventEmitter();
    }
    /**
     * Opens the datepicker modal
     */
    DatepickerInputComponent.prototype.openDatePicker = function () {
        this.show = true;
    };
    /**
     * Closes the datepicker modal
     */
    DatepickerInputComponent.prototype.closeDatePicker = function () {
        this.show = false;
    };
    /**
     * Event on date is selected
     * @param selectedDate accepts the date object
     */
    DatepickerInputComponent.prototype.onDateSelect = function (selectedDate) {
        if (this.customFormatDate) {
            this._selectedDate = this.customFormatDate(selectedDate.date);
        }
        else {
            this._selectedDate = selectedDate.date;
        }
        // this.selectedDate = this.dateformatService.format(selectedDate,"dd-mm-yyyy",false);
        this.closeDatePicker();
        this.onDateSelected.emit({
            "date": this._selectedDate
        });
    };
    return DatepickerInputComponent;
}());
__decorate([
    Input('customDate'),
    __metadata("design:type", Function)
], DatepickerInputComponent.prototype, "customFormatDate", void 0);
__decorate([
    Output('onDateSelected'),
    __metadata("design:type", Object)
], DatepickerInputComponent.prototype, "onDateSelected", void 0);
DatepickerInputComponent = __decorate([
    Component({
        selector: 'ng-datepicker',
        templateUrl: './datepicker-input.component.html',
        styleUrls: ['./datepicker-input.component.css'],
        host: { 'class': 'ng-datepicker' }
    }),
    __metadata("design:paramtypes", [])
], DatepickerInputComponent);
export { DatepickerInputComponent };
//# sourceMappingURL=datepicker-input.component.js.map