'use es6';

import ncp from 'copy-paste';
import moment from 'moment-timezone';

import FormattedDateTime from '../data/FormattedDateTime';
import TimeUnit from '../data/TimeUnit';
import TimeTableCreator from './tables/TimeTableCreator';
import DecodedUriTableCreator from './tables/DecodedUriTableCreator';
import EncodedUriTableCreator from './tables/EncodedUriTableCreator';

export default class UtilitiesExecutionService {
  static executeTimestampUtilityCommand(unit) {
    let dateTime = new FormattedDateTime({
      instant: moment(),
      unit: unit
    });

    let timestamp = dateTime.getFormattedTimestamp();
    ncp.copy(timestamp, console.log(UtilitiesExecutionService.createMessage(timestamp)));

    return TimeTableCreator.createTimestampTable(dateTime);
  }
  static executeUriDecodeCommand(uri, copyToClipboard) {
    try {
      const decodedValue = decodeURIComponent(uri);

      if (copyToClipboard) {
        ncp.copy(decodedValue, console.log(UtilitiesExecutionService.createMessage(decodedValue)));
      }

      console.log(DecodedUriTableCreator.create(decodedValue));
    } catch (e) {
      console.error('Could not decode URI');
    }
  }

  static executeUriEncodeCommand(uri, copyToClipboard) {
    try {
      const encodedValue = encodeURIComponent(uri);

      if (copyToClipboard) {
        ncp.copy(encodedValue, console.log(UtilitiesExecutionService.createMessage(encodedValue)));
      }

      console.log(EncodedUriTableCreator.create(encodedValue));
    } catch (e) {
      console.error('Could not encode URI');
    }
  }

  static createMessage(value) {
    return `Copied ${value} to clipboard`;
  }
}
