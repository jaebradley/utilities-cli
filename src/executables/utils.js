#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';

program
  .version(pkg.version)
  .command('timestamp', 'Get UNIX Timestamp')
  .command('uridecode', 'Decode URI')
  .command('uriencode', 'Encode URI')
  .parse(process.argv);
