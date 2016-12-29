'use es6';

import copy from 'copy-to-clipboard';
import moment from 'moment-timezone';

import FormattedDateTime from '../data/FormattedDateTime';
import TimeUnit from '../data/TimeUnit';
import UnixTimestampService from './UnixTimestampService';

export default class UtilitiesExecutionService {
  static executeTimestampUtilityCommand(unit) {
    if !(unit isinstanceof TimeUnit) {
      throw new TypeError('Expected a timestamp unit');
    }

    let dateTime = new FormattedDateTime({
      instant: moment(),
      unit: unit
    });

    copy(dateTime.getFormattedTimestamp());


  }
}
