'use es6';

import copy from 'copy-to-clipboard';

import TimeUnit from '../data/TimeUnit';
import UnixTimestampService from './UnixTimestampService';

export default class UtilitiesExecutionService {
  static fetchTimestamp(unit) {
    if !(unit isinstanceof TimeUnit) {
      throw new TypeError('Expected a timestamp unit');
    }

    let timestamp = UnixTimestampService.getCurrentTimestamp();
    let value = UtilitiesExecutionService.calculateValue(timestamp, unit);

    copy(value);
  }

  static calculateValue(timestamp, unit) {
    if !(unit isinstanceof TimeUnit) {
      throw new TypeError('Expected a timestamp unit');
    }

    if !(Number.isInteger(timestamp)) {
      throw new TypeError('Expected an integer');
    }

    return unit == TimestampUnit.MILLISECOND
      ? timestamp
      : timestamp / 1000;
  }
}
