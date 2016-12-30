#!/usr/bin/env node

'use es6';

import program from 'commander';

import UtilitiesExecutionService from '../services/UtilitiesExecutionService';

program
  .option('-m', '--milliseconds', 'Return value in milliseconds')
  .option('-d', '--do-not-copy-value-to-clipboard', 'Do not copy value to clipboard')
  .arguments('[delta]')
  .action(delta => {
    try {
      return Utilities.executeTimestampUtilityCommand()
                                    .then(table => console.log(table));
    } catch (Error) {
      console.error('Could not get timestamp');
    }
  })
  .parse(process.argv);
