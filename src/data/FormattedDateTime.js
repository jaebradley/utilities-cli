'use es6';

import {Record} from 'immutable';
import moment from 'moment-timezone';

import TimeUnit from './TimeUnit';

let defaults = {
  instant: moment(),
  unit: TimeUnit.SECOND
};

export default class FormattedDateTime extends Record(defaults){
  getFormattedTimestamp() {
    return unit == TimeUnit.MILLISECOND
      ? this.instant.valueOf()
      : this.instant.valueOf() / 1000;
  }

  getFormattedUtcDateTime() {
    return moment.clone(this.instant)
                 .tz('UTC')
                 .format(this.unit.format)
                 .toString();
  }

  getFormattedLocalDateTime(timezone) {
    return moment.clone(this.instant)
                 .tz(timezone)
                 .format(this.unit.format)
                 .toString();
  }
}
