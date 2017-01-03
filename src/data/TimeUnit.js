'use es6';

import {Enum} from 'enumify';

export default class TimeUnit extends Enum {};

TimeUnit.initEnum({
  SECOND: {
    format: 'ddd., MMM. do, YYYY h:m:s A Z'
  },
  MILLISECOND: {
    format: 'ddd., MMM. do, YYYY h:m:s.SS A Z'
  }
});
