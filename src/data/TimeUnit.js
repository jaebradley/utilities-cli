import { Enum } from 'enumify';

class TimeUnit extends Enum {}

TimeUnit.initEnum({
  SECOND: {
    format: 'ddd., MMM. do, YYYY hh:mm:ss A Z',
  },
  MILLISECOND: {
    format: 'ddd., MMM. do, YYYY hh:mm:ss.SS A Z',
  },
});

export default TimeUnit;
