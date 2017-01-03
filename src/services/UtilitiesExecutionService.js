'use es6';

import ncp from 'copy-paste';
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

    let timestamp = dateTime.getFormattedTimestamp();
    ncp.copy(timestamp, console.log(UtilitiesExecutionService.createMessage(timestamp)));

    return TimeTableCreator.createTimestampTable(dateTime);
  }

  static createMessage(value) {
    return `Copied ${value} to clipboard`;
  }
}
