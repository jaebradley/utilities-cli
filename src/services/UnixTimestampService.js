'use es6';

import moment from 'moment-timezone';

export default class UnixTimestampService {
  static getCurrentTimestamp() {
    return moment().valueOf();
}
