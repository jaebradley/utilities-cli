#!/usr/bin/env node

'use es6';

import program from 'commander';

import TimeUnit from '../data/TimeUnit';
import UtilitiesExecutionService from '../services/UtilitiesExecutionService';

program.option('-m, --millisecond', 'Return value in milliseconds')
       .parse(process.argv);

let unit = program.millisecond === true
   ? TimeUnit.MILLISECOND
   : TimeUnit.SECOND;

 try {
   console.log(UtilitiesExecutionService.executeTimestampUtilityCommand(unit));
 } catch (Error) {
   console.error('Could not get timestamp');
 }
