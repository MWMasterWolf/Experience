import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';

@Pipe({
  name: 'timeFromNow'
})
export class TimeFromNowPipe implements PipeTransform {

  transform(value: string): string {
    // dayjs.locale('es');
    const date = new Date(parseInt(value));
    dayjs.extend(advancedFormat);
    const timeFromNow = dayjs(date).fromNow();
    return timeFromNow.charAt(0).toUpperCase() + timeFromNow.slice(1);
  }

}
