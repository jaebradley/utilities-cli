import Table from 'cli-table2';
import FormattedDateTime from '../../data/FormattedDateTime';

export default class DecodedUriTableCreator {
  static create(decodedValue) {
    let table = new Table();
    table.push(['Decoded Value', decodedValue]);
    return table.toString();
  }
}
