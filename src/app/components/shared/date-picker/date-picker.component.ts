import {
  animate, Component, ElementRef, EventEmitter, Input, keyframes, OnChanges,
  OnInit, Output, Renderer, SimpleChange, state, style, transition, trigger, OnDestroy
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Calendar } from './calendar';
import * as moment from 'moment';

/*interface DateFormatFunction {
  (date: Date): string;
}*/

 type DateFormatFunction = (date: Date) => string;

interface ValidationResult {
  [key: string]: boolean;
}
@Component({
  selector: 'pq-date-picker',
  animations: [
    trigger('calendarAnimation', [
      transition('* => left', [
        animate(180, keyframes([
          style({ transform: 'translateX(105%)', offset: 0.5 }),
          style({ transform: 'translateX(-130%)', offset: 0.51 }),
          style({ transform: 'translateX(0)', offset: 1 })
        ]))
      ]),
      transition('* => right', [
        animate(180, keyframes([
          style({ transform: 'translateX(-105%)', offset: 0.5 }),
          style({ transform: 'translateX(130%)', offset: 0.51 }),
          style({ transform: 'translateX(0)', offset: 1 })
        ]))
      ])
    ])
  ],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit, OnChanges, OnDestroy {

  private readonly DEFAULT_FORMAT = 'YYYY-MM-DD';

  @Input() top: any;
  @Input() sizeInput: any;
  @Input() weightInput: any;
  @Input() paddingInput: any;
  @Input() heightInput: any;
  @Input() color: boolean = true;
  private dateVal: Date;
  // two way bindings
  @Output() dateChange = new EventEmitter<Date>();

  @Output() fecha: EventEmitter<any> = new EventEmitter<any>();
  @Output() fechaFormat: EventEmitter<any> = new EventEmitter<any>();

  @Input() get date(): Date { return this.dateVal; }
  set date(val: Date) {
    this.dateVal = val;
    this.dateChange.emit(val);
  }
  // api bindings
  @Input() disabled: boolean;
  @Input() accentColor: string;
  @Input() altInputStyle: boolean;
  @Input() dateFormat: string | DateFormatFunction;
  @Input() fontFamily: string;
  @Input() rangeStart: Date;
  @Input() rangeEnd: Date;
  @Input() backGroundColor = 'rgba(255, 255, 255, 0)';
  @Input() fontColor = '$pqBlanco';
  @Input() borderInputColor = '';
  // data
  @Input() placeholder = 'dd/mm/aa';
  @Input() inputText: string;
  // view logic
  @Input() showCalendar: boolean;
  @Input() cancelText = 'CANCELAR';
  @Input() weekStart = 0;
  // events
  @Output() onSelect = new EventEmitter<Date>();
  // time
  @Input() calendarDays: Array<number>;
  @Input() currentMonth: string;
  @Input() dayNames: Array<String> = ['D', 'L', 'M', 'M', 'J', 'V', 'S']; // Default order: firstDayOfTheWeek = 0
  @Input() hoveredDay: Date;
  @Input() months: Array<string>;
  dayNamesOrdered: Array<String>;
  calendar: Calendar;
  currentMonthNumber: number;
  currentYear: number;
  currentDay: number;
  // animation
  animate: string;
  // colors
  colors: { [id: string]: string };
  // listeners
  clickListener: Function;
  // forms
  yearControl: FormControl;

  inputValue: number;

  validInput = false;


  constructor(private renderer: Renderer, private elementRef: ElementRef) {
    this.dateFormat = this.DEFAULT_FORMAT;
    // view logic
    this.showCalendar = false;
    // colors
    this.colors = {
      'black': '#424242',
      'blue': '#008895',
      'lightGrey': '#D5DEE2',
      'white': '#FFFFFF'
    };
    this.accentColor = this.colors['blue'];
    this.altInputStyle = false;
    // time
    this.updateDayNames();

    this.months = [
      'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO',
      'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', ' DICIEMBRE'
    ];
    // listeners
    this.clickListener = renderer.listenGlobal(
      'document',
      'click',
      (event: MouseEvent) => this.handleGlobalClick(event)
    );
    // form controls
    this.yearControl = new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(4),
      this.yearValidator,
      this.inRangeValidator.bind(this)
    ]));

    const date = new Date();
    date.setDate(date.getDate() - 1);
    // his.rangeStart = date;
  }

  ngOnInit() {
    this.updateDayNames();
    this.syncVisualsWithDate();
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if ((changes['date'] || changes['dateFormat'])) {
      this.syncVisualsWithDate();
    }
    if (changes['firstDayOfTheWeek'] || changes['dayNames']) {
      this.updateDayNames();
    }
    // console.log('--------------------------fecha valor-------------------------');
    // console.log(changes['date'].currentValue);
    if (changes['date'].currentValue !== null) {
      this.validInput = true;
    } else {
      this.validInput = false;
    }
  }

  ngOnDestroy() {
    this.clickListener();
  }

  // -------------------------------------------------------------------------------- //
  // -------------------------------- State Management ------------------------------ //
  // -------------------------------------------------------------------------------- //
  /**
   * Closes the calendar and syncs visual components with selected or current date.
   * This way if a user opens the calendar with this month, scrolls to two months from now,
   * closes the calendar, then reopens it, it will open with the current month
   * or month associated with the selected date
   */
  closeCalendar(): void {
    this.showCalendar = false;
    this.syncVisualsWithDate();
  }

  /**
   * Sets the date values associated with the ui
   */
  private setCurrentValues(date: Date) {
    this.currentMonthNumber = date.getMonth();
    this.currentMonth = this.months[this.currentMonthNumber];

    this.currentYear = date.getFullYear();
    this.inputValue = this.currentYear;

    const calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
    this.calendarDays = [].concat.apply([], calendarArray);
    this.calendarDays = this.filterInvalidDays(this.calendarDays);
  }

  /**
   * Update the day names order. The order can be modified with the firstDayOfTheWeek input, while 0 means that the
   * first day will be sunday.
   */
  private updateDayNames() {
    this.dayNamesOrdered = this.dayNames.slice(); // Copy DayNames with default value (weekStart = 0)
    if (this.weekStart < 0 || this.weekStart >= this.dayNamesOrdered.length) {
      // Out of range
      throw Error(`The weekStart is not in range between ${0} and ${this.dayNamesOrdered.length - 1}`);
    } else {
      this.calendar = new Calendar(this.weekStart);
      this.dayNamesOrdered = this.dayNamesOrdered.slice(this.weekStart, this.dayNamesOrdered.length)
        .concat(this.dayNamesOrdered.slice(0, this.weekStart)); // Append beginning to end
    }
  }

  /**
   * Visually syncs calendar and input to selected date or current day
   */
  syncVisualsWithDate(): void {
    if (this.date) {
      this.setInputText(this.date);
      this.setCurrentValues(this.date);
    } else {
      this.inputText = '';
      this.setCurrentValues(new Date());
    }
  }

  /**
   * Sets the currentMonth and creates new calendar days for the given month
   */
  setCurrentMonth(monthNumber: number): void {
    this.currentMonth = this.months[monthNumber];
    const calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
    this.calendarDays = [].concat.apply([], calendarArray);
    this.calendarDays = this.filterInvalidDays(this.calendarDays);
  }

  /**
   * Sets the currentYear and FormControl value associated with the year
   */
  setCurrentYear(year: number): void {
    this.currentYear = year;
    this.inputValue = year;
  }

  /**
   * Sets the visible input text
   */
  setInputText(date: Date): void {
    let inputText = '';
    const dateFormat: string | DateFormatFunction = this.dateFormat;
    if (dateFormat === undefined || dateFormat === null) {
      inputText = moment(date).format(this.DEFAULT_FORMAT);
    } else if (typeof dateFormat === 'string') {
      inputText = moment(date).format(dateFormat);
    } else if (typeof dateFormat === 'function') {
      inputText = dateFormat(date);
    }
    // console.log(dateFormat);
    if (dateFormat !== null) {
      this.fecha.emit(inputText);

      const dia = inputText.slice(6, 8);
      const mes = inputText.slice(4, 6);
      const año = inputText.slice(0, 4);
      this.inputText = dia + '/' + this.mesString(mes) + '/' + año;
      this.fechaFormat.emit(this.inputText);
      this.validInput = true;
      this.currentDay = Number(dia);
      // this.inputText = inputText;
    } else {
      this.validInput = false;
    }
    /* console.log('Clase active en input datePicker');
    console.log(this.validInput); */
  }

  // -------------------------------------------------------------------------------- //
  // --------------------------------- Click Handlers ------------------------------- //
  // -------------------------------------------------------------------------------- //
  /**
   * Sets the date values associated with the calendar.
   * Triggers animation if the month changes
   */
  onArrowClick(direction: string): void {
    const currentMonth = this.currentMonthNumber;
    let newYear = this.currentYear;
    let newMonth: number;
    // sets the newMonth
    // changes newYear is necessary
    if (direction === 'left') {
      if (currentMonth === 0) {
        newYear = this.currentYear - 1;
        newMonth = 11;
      } else {
        newMonth = currentMonth - 1;
      }
    } else if (direction === 'right') {
      if (currentMonth === 11) {
        newYear = this.currentYear + 1;
        newMonth = 0;
      } else {
        newMonth = currentMonth + 1;
      }
    }
    // check if new date would be within range
    const newDate = new Date(newYear, newMonth);
    let newDateValid: boolean;
    if (direction === 'left') {
      newDateValid = !this.rangeStart || newDate.getTime() >= this.rangeStart.getTime() || newDate.getMonth() >= this.rangeStart.getMonth();
    } else if (direction === 'right') {
      newDateValid = !this.rangeEnd || newDate.getTime() <= this.rangeEnd.getTime();
    }
    // console.log(newDateValid);
    if (newDateValid) {
      this.setCurrentYear(newYear);
      this.currentMonthNumber = newMonth;
      this.setCurrentMonth(newMonth);
      this.triggerAnimation(direction);
    }
  }

  /**
   * Check if a date is within the range.
   * @param date The date to check.
   * @return true if the date is within the range, false if not.
   */
  isDateValid(date: Date): boolean {
    return (!this.rangeStart || date.getTime() >= this.rangeStart.getTime()) &&
      (!this.rangeEnd || date.getTime() <= this.rangeEnd.getTime());
  }

  /**
   * Filter out the days that are not in the date range.
   * @param calendarDays The calendar days
   * @return {Array} The input with the invalid days replaced by 0
   */
  filterInvalidDays(calendarDays: Array<number>): Array<number> {
    const newCalendarDays = [];
    calendarDays.forEach((day: number | Date) => {
      if (day === 0 || !this.isDateValid(<Date>day)) {
        newCalendarDays.push(0);
      } else {
        newCalendarDays.push(day);
      }
    });
    return newCalendarDays;
  }

  /**
   * Closes the calendar when the cancel button is clicked
   */
  onCancel(): void {
    this.closeCalendar();
  }

  /**
   * Toggles the calendar when the date input is clicked
   */
  onInputClick(): void {
    this.showCalendar = !this.showCalendar;
  }

  /**
   * Returns the font color for a day
   */
  onSelectDay(day: Date): void {
    if (this.isDateValid(day)) {
      this.date = day;
      this.onSelect.emit(day);
      this.showCalendar = !this.showCalendar;
    }
  }

  /**
   * Sets the current year and current month if the year from
   * yearControl is valid
   */
  onYearSubmit(): void {
    if (this.inputValue > 2050 || this.inputValue < 1900) {
      const dates = new Date();
      this.inputValue = dates.getFullYear();
    }
    if (+this.inputValue !== this.currentYear) {
      this.setCurrentYear(+this.inputValue);
      this.setCurrentMonth(this.currentMonthNumber);
    } else {
      this.inputValue = this.currentYear;
    }

  }

  // -------------------------------------------------------------------------------- //
  // ----------------------------------- Listeners ---------------------------------- //
  // -------------------------------------------------------------------------------- //
  /**
   * Closes the calendar if a click is not within the datepicker component
   */
  handleGlobalClick(event: MouseEvent): void {
    const withinElement = this.elementRef.nativeElement.contains(event.target);
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeCalendar();
    }
  }

  // -------------------------------------------------------------------------------- //
  // ----------------------------------- Helpers ------------------------------------ //
  // -------------------------------------------------------------------------------- //
  /**
   * Returns the background color for a day
   */
  getDayBackgroundColor(day: Date): string {
    let color = this.colors['white'];
    if (this.isChosenDay(day)) {
      color = this.accentColor;
    } else if (this.isCurrentDay(day)) {
      color = this.colors['lightGrey'];
    }
    return color;
  }

  /**
   * Returns the font color for a day
   */
  getDayFontColor(day: Date): string {
    let color = this.colors['black'];
    if (this.isChosenDay(day)) {
      color = this.colors['white'];
    }
    return color;
  }

  /**
   * Returns whether a day is the chosen day
   */
  isChosenDay(day: Date): boolean {
    if (day) {
      return this.date ? day.toDateString() === this.date.toDateString() : false;
    } else {
      return false;
    }
  }

  /**
   * Returns whether a day is the current calendar day
   */
  isCurrentDay(day: Date): boolean {
    if (day) {
      return day.toDateString() === new Date().toDateString();
    } else {
      return false;
    }
  }

  /**
   * Returns whether a day is the day currently being hovered
   */
  isHoveredDay(day: Date): boolean {
    return this.hoveredDay ? this.hoveredDay === day && !this.isChosenDay(day) : false;
  }

  /**
   * Triggers an animation and resets to initial state after the duration of the animation
   */
  triggerAnimation(direction: string): void {
    this.animate = direction;
    setTimeout(() => this.animate = 'reset', 185);
  }

  // -------------------------------------------------------------------------------- //
  // ---------------------------------- Validators ---------------------------------- //
  // -------------------------------------------------------------------------------- //
  /**
   * Validates that a value is within the 'rangeStart' and/or 'rangeEnd' if specified
   */
  inRangeValidator(control: FormControl): ValidationResult {
    const value = control.value;

    if (this.currentMonthNumber) {
      const tentativeDate = new Date(+value, this.currentMonthNumber);
      if (this.rangeStart && tentativeDate.getTime() < this.rangeStart.getTime()) {
        return { 'yearBeforeRangeStart': true };
      }
      if (this.rangeEnd && tentativeDate.getTime() > this.rangeEnd.getTime()) {
        return { 'yearAfterRangeEnd': true };
      }
      return null;
    }

    return { 'currentMonthMissing': true };
  }

  /**
   * Validates that a value is a number greater than or equal to 1970
   */
  yearValidator(control: FormControl): ValidationResult {
    const value = control.value;
    const valid = !isNaN(value) && value >= 1970 && Math.floor(value) === +value;
    if (valid) {
      return null;
    }
    return { 'invalidYear': true };
  }

  mesString(num: any): String {
    let mes;
    switch (num) {
      case '01':
        mes = 'Ene';
        break;
      case '02':
        mes = 'Feb';
        break;
      case '03':
        mes = 'Mar';
        break;
      case '04':
        mes = 'Abr';
        break;
      case '05':
        mes = 'May';
        break;
      case '06':
        mes = 'Jun';
        break;
      case '07':
        mes = 'Jul';
        break;
      case '08':
        mes = 'Ago';
        break;
      case '09':
        mes = 'Sep';
        break;
      case '10':
        mes = 'Oct';
        break;
      case '11':
        mes = 'Nov';
        break;
      case '12':
        mes = 'Dic';
        break;
      default:
        break;
    }
    return mes;
  }

}
