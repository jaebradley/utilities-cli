#!/usr/bin/env node

import program from 'commander';

import UtilitiesExecutionService from '../services/UtilitiesExecutionService';

program.arguments('<uri>')
       .option('-c, --copyToClipboard', 'copy output to clipboard')
       .action((uri, options) => {
         const copyToClipboard = options.copyToClipboard || false;
         UtilitiesExecutionService.executeUriEncodeCommand(uri, copyToClipboard);
       })
       .parse(process.argv);
