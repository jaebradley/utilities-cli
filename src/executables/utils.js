#!/usr/bin/env node

'use es6';

import program from 'commander';

program.version('0.0.1')
       .command('timestamp', 'get unix timestamp')
       .command('urldecode', 'decode url')
       .parse(process.argv);
