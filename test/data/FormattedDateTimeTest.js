import chai from 'chai';

import moment from 'moment-timezone';

import FormattedDateTime from '../../src/data/FormattedDateTime';
import TimeUnit from '../../src/data/TimeUnit';

const { expect } = chai;

describe('Test Formatted Date Time Test', () => {
  const instant = moment()
    .year(2016)
    .month(1)
    .date(2)
    .startOf('day');
  const secondDateTime = new FormattedDateTime({
    unit: TimeUnit.SECOND,
    instant,
  });
  const millisecondDateTime = new FormattedDateTime({
    unit: TimeUnit.MILLISECOND,
    instant,
  });
  it('should return formatted timestamp', () => {
    const secondFormattedTimestamp = instant.valueOf() / 1000;
    expect(secondDateTime.getFormattedTimestamp()).to.equal(secondFormattedTimestamp);

    const millisecondFormattedTimestamp = instant.valueOf();
    expect(millisecondDateTime.getFormattedTimestamp()).to.equal(millisecondFormattedTimestamp);
  });
});
