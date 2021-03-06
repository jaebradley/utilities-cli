import { expect } from 'chai';

import moment from 'moment-timezone';

import FormattedDateTime from '../../../src/data/FormattedDateTime';
import TimeTableCreator from '../../../src/services/tables/TimeTableCreator';
import TimeUnit from '../../../src/data/TimeUnit';

describe('Test Time Table Creator', () => {
  const dateTime = moment()
    .year(2016)
    .month(0)
    .date(1)
    .startOf('day');

  const formattedDateTime = new FormattedDateTime({
    instant: dateTime,
    unit: TimeUnit.SECOND,
  });

  it('should test table creation', () => {
    const expected = '┌───────────┬─────────────────────────────────────────┐\n│ UTC       │ Fri., Jan. 5th, 2016 12:00:00 AM +00:00 │\n├───────────┼─────────────────────────────────────────┤\n│ UTC       │ Fri., Jan. 5th, 2016 12:00:00 AM +00:00 │\n├───────────┼─────────────────────────────────────────┤\n│ Timestamp │ 1451606400                              │\n├───────────┼─────────────────────────────────────────┤\n│ Unit      │ second                                  │\n└───────────┴─────────────────────────────────────────┘';
    const table = TimeTableCreator.createTimestampTable(formattedDateTime);

    console.log(expected); // eslint-disable-line no-console
    console.log(table); // eslint-disable-line no-console
    expect(table).to.eql(expected);
  });

  it('should test error when creating table', () => {
    expect(() => TimeTableCreator.createTimestampTable(1)).to.throw(TypeError);
  });
});
