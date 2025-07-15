import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingPipe, AccountingFormatNumber, AccountingFormatMoney, DateFormatDot, DateFormatDot2, dateFormatSlash, DateFormatSlashHour, dateFormatFull, Code, AccountingFormatNumber2Decimal, LineBreak, dateFormatSlashNumber } from './accounting.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AccountingPipe,
    AccountingFormatNumber,
    AccountingFormatMoney,
    DateFormatDot,
    DateFormatDot2,
    dateFormatSlash,
    DateFormatSlashHour,
    dateFormatFull,
    Code,
    LineBreak,
    AccountingFormatNumber2Decimal,
    dateFormatSlashNumber
  ],
  providers: [
  ],
  exports: [
    AccountingPipe,
    AccountingFormatNumber,
    AccountingFormatMoney,
    DateFormatDot,
    DateFormatDot2,
    dateFormatSlash,
    DateFormatSlashHour,
    dateFormatFull,
    Code,
    LineBreak,
    AccountingFormatNumber2Decimal,
    dateFormatSlashNumber
  ]
})
export class PipeModule { }
