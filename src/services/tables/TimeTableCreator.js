'use es6';

import jstztimezone from 'jstztimezone';
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
    return table;
  }

  static buildRow(formattedDateTime) {
    return List.of(
      List.of('UTC', formattedDateTime.getFormattedUtcDateTime()),
      List.of(jstztimezone.name(), formattedDateTime.getFormattedLocalDateTime(jstztimezone.name())),
      List.of('Timestamp', formattedDateTime.getFormattedTimestamp()),
      List.of('Unit', formattedDateTime.unit.name.toLower())
    );
  }
}
