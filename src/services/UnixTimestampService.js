'use es6';

import moment from 'moment-timezone';
import TimestampUnit from '../data/TimestampUnit';

export default class UnixTimestampService {
  static getCurrentTimestamp(unit) {
    if !(unit instanceof TimestampUnit) {
      throw new TypeError('unit is not a TimestampUnit');
    }

    return unit === TimestampUnit.SECOND
      ? moment().valueOf() / 1000
      : moment().valueOf();
  }
}
