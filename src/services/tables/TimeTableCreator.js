import Table from 'cli-table3';
import jstz from 'jstimezonedetect';

export default class TimeTableCreator {
  static createTimestampTable(formattedDateTime) {
    const table = new Table();
    const localTimezone = jstz.determine().name();
    table.push(['UTC', formattedDateTime.getFormattedUtcDateTime()]);
    table.push([localTimezone, formattedDateTime.getFormattedLocalDateTime(localTimezone)]);
    table.push(['Timestamp', formattedDateTime.getFormattedTimestamp()]);
    table.push(['Unit', formattedDateTime.unit.name.toLowerCase()]);
    return table.toString();
  }
}
