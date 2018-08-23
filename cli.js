#!/usr/bin/env node
'use strict'

const meow = require('meow')
const andev = require('./src/andev')

const cli = meow(`
  Usage:
    $ andev [<options> ...]
    
    Options:
      --help		      For help
      --install, -i 	Install apk from given path 
      --deeplink, -d  Open deeplink
`,
  {
    flags: {
      install: {
        type: 'boolean',
        alias: 'i'
      },
      deeplink: {
        type: 'boolean',
        alias: 'd'
      }
    }
  }
)

andev(cli.flags, cli.input)
