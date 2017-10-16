#!/usr/bin/env node

import program from 'commander';

import UtilitiesExecutionService from '../services/UtilitiesExecutionService';

program.arguments('<uri>')
       .action(uri => {
         try {
           console.log(UtilitiesExecutionService.executeUriDecodeCommand(uri));
         } catch (Error) {
           console.error('Could not decode URI');
         }
       })
       .parse(process.argv);
