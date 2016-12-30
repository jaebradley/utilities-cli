'use es6';

import jstz from 'jstz';
import {List} from 'immutable';
import Table from 'cli-table2';
import FormattedDateTime from '../../data/FormattedDateTime';

export default class TimeTableCreator {
  static createTimestampTable(formattedDateTime) {
    if !(formattedDateTime instanceof FormattedDateTime) {
      throw new TypeError('Expected a Formatted Date Time object');
    }

    let table = new Table();
    table.push(TimeTableCreator.buildRow(formattedDateTime).toJS());
    return table.toString();
  }

  static buildRow(formattedDateTime) {
    let localTimezone = jstz.determine().name();
    return List.of(
      List.of('UTC', formattedDateTime.getFormattedUtcDateTime()),
      List.of(localTimezone, formattedDateTime.getFormattedLocalDateTime(localTimezone)),
      List.of('Timestamp', formattedDateTime.getFormattedTimestamp()),
      List.of('Unit', formattedDateTime.unit.name.toLower())
    );
  }
}
