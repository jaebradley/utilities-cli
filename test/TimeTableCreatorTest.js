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
    let expected = '';
    let table = TimeTableCreator.createTimestampTable(formattedDateTime);
    expect(table).to.eql(expected);
  });

  it('should test error when creating table', function() {
    expect(() => TimeTableCreator.createTimestampTable(1)).to.throw(TypeError);
  })
});
