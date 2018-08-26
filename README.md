[![Build Status](https://travis-ci.org/talenguyen/andev.svg?branch=master)](https://travis-ci.org/talenguyen/andev)
[![npm](https://img.shields.io/badge/npm-v1.1.2-blue.svg)](https://www.npmjs.com/package/@talenguyen/andev)

# Andev

A cli tools for Android Developer

## Features

 * [x] Open deeplink 
 * [x] Clear cache
 * [ ] Install apk
 * [x] Uninstall package
 
## Install

```shell
$ npm i -g @talenguyen/andev
```

## Usage

```shell
Usage:
  $ andev --help

  Options:
    --deeplink, d   Open deep-link
    --clear, c      Clear cache
    --uninstall, u  Uninstall 

  Example:
    $ andev --d https://google.com
    $ andev --c com.android.chrome
    $ andev --uninstall com.android.chrome
```

## Author
- Giang Nguyen <giangnguyen.tale@gmail.com> ([twitter](https://twitter.com/Tale_Nguyen))

## License

[MIT](LICENSE)
