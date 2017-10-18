import ncp from 'copy-paste';
import moment from 'moment-timezone';

import FormattedDateTime from '../data/FormattedDateTime';
import TimeUnit from '../data/TimeUnit';
import TimeTableCreator from './tables/TimeTableCreator';
import DecodedUriTableCreator from './tables/DecodedUriTableCreator';
import EncodedUriTableCreator from './tables/EncodedUriTableCreator';
import SingleValueTableCreator from './tables/SingleValueTableCreator';

export default class UtilitiesExecutionService {
  static executeTimestampCommand(unit, copyToClipboard) {
    const dateTime = new FormattedDateTime({
      instant: moment(),
      unit: unit
    });

    const timestamp = dateTime.getFormattedTimestamp();

    if (copyToClipboard) {
      ncp.copy(timestamp, console.log(UtilitiesExecutionService.createCopyToClipboardMessage(timestamp)));
    }

    console.log(TimeTableCreator.createTimestampTable(dateTime));
  }
  static executeUriDecodeCommand(uri, copyToClipboard) {
    try {
      const decodedValue = decodeURIComponent(uri);

      if (copyToClipboard) {
        ncp.copy(decodedValue, console.log(UtilitiesExecutionService.createCopyToClipboardMessage(decodedValue)));
      }

      console.log(SingleValueTableCreator.create('Decoded Value', decodedValue));
    } catch (e) {
      console.error('Could not decode URI');
    }
  }

  static executeUriEncodeCommand(uri, copyToClipboard) {
    try {
      const encodedValue = encodeURIComponent(uri);

      if (copyToClipboard) {
        ncp.copy(encodedValue, console.log(UtilitiesExecutionService.createCopyToClipboardMessage(encodedValue)));
      }

      console.log(SingleValueTableCreator.create('Encoded Value', encodedValue));
    } catch (e) {
      console.error('Could not encode URI');
    }
  }

  static createCopyToClipboardMessage(value) {
    return `Copied ${value} to clipboard`;
  }
}
