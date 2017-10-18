import { Record } from 'immutable';
import moment from 'moment-timezone';

import TimeUnit from './TimeUnit';

const defaults = {
  instant: moment(),
  unit: TimeUnit.SECOND,
};

class FormattedDateTime extends Record(defaults) {
  getFormattedTimestamp() {
    return this.unit === TimeUnit.MILLISECOND
      ? this.instant.valueOf()
      : Math.round(this.instant.valueOf() / 1000);
  }

  getFormattedUtcDateTime() {
    return this.instant
      .clone()
      .tz('UTC')
      .format(this.unit.format)
      .toString();
  }

  getFormattedLocalDateTime(timezone) {
    return this.instant
      .clone()
      .tz(timezone)
      .format(this.unit.format)
      .toString();
  }
}

export default FormattedDateTime;
