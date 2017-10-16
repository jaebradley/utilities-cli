import Table from 'cli-table2';
import FormattedDateTime from '../../data/FormattedDateTime';

export default class DecodedUriTableCreator {
  static create(uri) {
    let table = new Table();
    table.push(['Decoded Value', decodeURIComponent(uri)]);
    return table.toString();
  }
}
