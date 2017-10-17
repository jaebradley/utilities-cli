import Table from 'cli-table2';

export default class EncodedUriTableCreator {
  static create(encodedValue) {
    let table = new Table();
    table.push(['Encoded Value', encodedValue]);
    return table.toString();
  }
}
