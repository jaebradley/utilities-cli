'use es6';

import copy from 'copy-to-clipboard';
import moment from 'moment-timezone';

import FormattedDateTime from '../data/FormattedDateTime';
import TimeUnit from '../data/TimeUnit';
import TimeTableCreator from './tables/TimeTableCreator';

export default class UtilitiesExecutionService {
  static executeTimestampUtilityCommand(unit) {
    let dateTime = new FormattedDateTime({
      instant: moment(),
      unit: unit
    });

    copy(dateTime.getFormattedTimestamp());

    return TimeTableCreator.createTimestampTable(dateTime);
  }

  static identifyUnit(unit) {
    for (let timeUnit of TimeUnit.enumValues) {
      if (timeUnit.name === unit.toUpperCase()) {
        return timeUnit;
      }
    }

    throw new TypeError('Unable to identify Time Unit');
  }
}
