#!/usr/bin/env node

'use es6';

import program from 'commander';

import TimeUnit from '../data/TimeUnit';
import UtilitiesExecutionService from '../services/UtilitiesExecutionService';

program.version('0.0.1');

program.command('timestamp')
       .option('-m', '--millisecond', 'Return value in milliseconds')
       .action(function(cmd, options) {
         console.log(cmd);
         console.log(options);
         let unit = options.millisecond === true
           ? TimeUnit.MILLISECOND
           : TimeUnit.SECOND;
         try {
           Utilities.executeTimestampUtilityCommand(unit)
           .then(table => console.log(table));
         } catch (Error) {
           console.error('Could not get timestamp');
         }
       });

program.parse(process.argv);
