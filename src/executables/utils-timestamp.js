'use es6';

import program from 'commander';

import TimeUnit from '../data/TimeUnit';
import UtilitiesExecutionService from '../services/UtilitiesExecutionService';

program.option('-m', '--millisecond', 'Return value in milliseconds');

program.parse(process.argv);

let unit = program.millisecond === true
   ? TimeUnit.MILLISECOND
   : TimeUnit.SECOND;

 console.log(unit);
 console.log(program);
 console.log(program.millisecond);
 console.log(program._events['-m']);

 try {
   Utilities.executeTimestampUtilityCommand(unit)
            .then(table => console.log(table));
 } catch (Error) {
   console.error('Could not get timestamp');
 }
