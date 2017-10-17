#!/usr/bin/env node

import program from 'commander';

import TimeUnit from '../data/TimeUnit';
import UtilitiesExecutionService from '../services/UtilitiesExecutionService';

program.option('-m, --millisecond', 'Return value in milliseconds')
       .option('-c, --copyToClipboard', 'Copy value to clipboard')
       .parse(process.argv);

const unit = !!program.millisecond
   ? TimeUnit.MILLISECOND
   : TimeUnit.SECOND;

const copyToClipboard = !!program.copyToClipboard;

 try {
   UtilitiesExecutionService.executeTimestampUtilityCommand(unit, copyToClipboard);
 } catch (Error) {
   console.error('Could not get timestamp');
 }
