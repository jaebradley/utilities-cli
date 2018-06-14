import Table from 'cli-table3';

export default class SingleValueTableCreator {
  static create(label, encodedValue) {
    const table = new Table();
    table.push([label, encodedValue]);
    return table.toString();
  }
}
