#!/usr/bin/env node
'use strict'

const meow = require('meow')
const andev = require('./src/andev')
const help = require('./src/help')

const cli = meow(help,
  {
    flags: {
      deeplink: {
        type: 'boolean',
        alias: 'd'
      },
      clear: {
        type: 'boolean',
        alias: 'c'
      },
    }
  }
)

andev(cli.flags, cli.input)
