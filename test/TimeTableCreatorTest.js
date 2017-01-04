'use es6';

import {expect} from 'chai';

import moment from 'moment-timezone';

import FormattedDateTime from '../src/data/FormattedDateTime';
import TimeTableCreator from '../src/services/tables/TimeTableCreator';
import TimeUnit from '../src/data/TimeUnit';

describe('Test Time Table Creator', function() {
  let dateTime = moment().year(2016)
                         .month(1)
                         .date(1)
                         .startOf('day');

  let formattedDateTime = new FormattedDateTime({
    instant: dateTime,
    unit: TimeUnit.SECOND
  });

  it('should test table creation', function() {
    let expected = '\u001b[90m┌───────────\u001b[39m\u001b[90m┬───────────────────────────────────────┐\u001b[39m\n\u001b[90m│\u001b[39m UTC       \u001b[90m│\u001b[39m Mon., Feb. 1st, 2016 12:0:0 AM +00:00 \u001b[90m│\u001b[39m\n\u001b[90m├───────────\u001b[39m\u001b[90m┼───────────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m UTC       \u001b[90m│\u001b[39m Mon., Feb. 1st, 2016 12:0:0 AM +00:00 \u001b[90m│\u001b[39m\n\u001b[90m├───────────\u001b[39m\u001b[90m┼───────────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Timestamp \u001b[90m│\u001b[39m 1454284800                            \u001b[90m│\u001b[39m\n\u001b[90m├───────────\u001b[39m\u001b[90m┼───────────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Unit      \u001b[90m│\u001b[39m second                                \u001b[90m│\u001b[39m\n\u001b[90m└───────────\u001b[39m\u001b[90m┴───────────────────────────────────────┘\u001b[39m';
    let table = TimeTableCreator.createTimestampTable(formattedDateTime);

    console.log(expected);
    console.log(table);
    expect(table).to.eql(expected);
  });

  it('should test error when creating table', function() {
    expect(() => TimeTableCreator.createTimestampTable(1)).to.throw(TypeError);
  })
});
