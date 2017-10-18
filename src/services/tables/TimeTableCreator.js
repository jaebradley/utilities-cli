import jstz from 'jstimezonedetect';
import {List} from 'immutable';
import Table from 'cli-table2';
import FormattedDateTime from '../../data/FormattedDateTime';

export default class TimeTableCreator {
  static createTimestampTable(formattedDateTime) {
    let table = new Table();
    let localTimezone = jstz.determine().name();
    table.push(['UTC', formattedDateTime.getFormattedUtcDateTime()]);
    table.push([localTimezone, formattedDateTime.getFormattedLocalDateTime(localTimezone)])
    table.push(['Timestamp', formattedDateTime.getFormattedTimestamp()]);
    table.push(['Unit', formattedDateTime.unit.name.toLowerCase()]);
    return table.toString();
  }
}
