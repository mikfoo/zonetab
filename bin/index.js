#!/usr/bin/env node
const yargs = require('yargs')
const getZonetab = require('../lib/zonetab')

const argv = yargs
  .usage('Usage: $0 -f --source https://raw.githubusercontent.com/eggert/tz/master/zone.tab')
  .option('f', {
    alias: 'format',
    describe: 'Format output',
    type: 'boolean',
    demandOption: false
  })
  .option('s', {
    alias: 'source',
    describe: 'Source URL for zone.tab file',
    type: 'string',
    demandOption: false,
    default: 'https://data.iana.org/time-zones/tzdb/zone.tab'
  })
  .argv

getZonetab(argv.s).then(timezoneMap => {
  const output = argv.f
    ? JSON.stringify(timezoneMap, null, 2)
    : JSON.stringify(timezoneMap)

  process.stdout.write(output)
})