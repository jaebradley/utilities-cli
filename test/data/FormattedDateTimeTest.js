import chai from 'chai';

import moment from 'moment-timezone';

import FormattedDateTime from '../../src/data/FormattedDateTime';
import TimeUnit from '../../src/data/TimeUnit';

let expect = chai.expect;

describe('Test Formatted Date Time Test', function() {
  let instant = moment().year(2016).month(1).date(2).startOf('day');
  let secondDateTime = new FormattedDateTime({
    instant: instant,
    unit: TimeUnit.SECOND
  });
  let millisecondDateTime = new FormattedDateTime({
    instant: instant,
    unit: TimeUnit.MILLISECOND
  });
  it('should return formatted timestamp', function() {
    let secondFormattedTimestamp = instant.valueOf() / 1000;
    expect(secondDateTime.getFormattedTimestamp()).to.equal(secondFormattedTimestamp);

    let millisecondFormattedTimestamp = instant.valueOf();
    expect(millisecondDateTime.getFormattedTimestamp()).to.equal(millisecondFormattedTimestamp);
  });
});
