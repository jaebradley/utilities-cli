import ncp from 'copy-paste';
import moment from 'moment-timezone';

import FormattedDateTime from '../data/FormattedDateTime';
import TimeTableCreator from './tables/TimeTableCreator';
import SingleValueTableCreator from './tables/SingleValueTableCreator';

export default class UtilitiesExecutionService {
  static executeTimestampCommand(unit, copyToClipboard) {
    const dateTime = new FormattedDateTime({
      instant: moment(),
      unit,
    });

    const timestamp = dateTime.getFormattedTimestamp();

    if (copyToClipboard) {
      const clipboardMessage = UtilitiesExecutionService.createCopyToClipboardMessage(timestamp);
      ncp.copy(timestamp, console.log(clipboardMessage)); // eslint-disable-line no-console
    }

    console.log(TimeTableCreator.createTimestampTable(dateTime)); // eslint-disable-line no-console
  }
  static executeUriDecodeCommand(uri, copyToClipboard) {
    try {
      const decodedValue = decodeURIComponent(uri);

      if (copyToClipboard) {
        const clipboardMessage = UtilitiesExecutionService
          .createCopyToClipboardMessage(decodedValue);
        ncp.copy(decodedValue, console.log(clipboardMessage)); // eslint-disable-line no-console
      }

      console.log(SingleValueTableCreator.create('Decoded Value', decodedValue)); // eslint-disable-line no-console
    } catch (e) {
      console.error('Could not decode URI'); // eslint-disable-line no-console
    }
  }

  static executeUriEncodeCommand(uri, copyToClipboard) {
    try {
      const encodedValue = encodeURIComponent(uri);

      if (copyToClipboard) {
        const clipboardMessage = UtilitiesExecutionService
          .createCopyToClipboardMessage(encodedValue);
        ncp.copy(encodedValue, console.log(clipboardMessage)); // eslint-disable-line no-console
      }

      console.log(SingleValueTableCreator.create('Encoded Value', encodedValue)); // eslint-disable-line no-console
    } catch (e) {
      console.error('Could not encode URI'); // eslint-disable-line no-console
    }
  }

  static createCopyToClipboardMessage(value) {
    return `Copied ${value} to clipboard`;
  }
}
