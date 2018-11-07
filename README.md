[![Build Status](https://travis-ci.org/talenguyen/andev.svg?branch=master)](https://travis-ci.org/talenguyen/andev)
[![npm](https://img.shields.io/badge/npm-v1.1.6-blue.svg)](https://www.npmjs.com/package/@talenguyen/andev)

# Andev

A cli tools for Android Developer

## Features

 * [x] Open deeplink 
 * [x] Clear cache
 * [x] Install apk
 * [x] Uninstall package
 * [x] Send text to device
 * [ ] Connect device over WI-FI

## Install

```shell
$ npm i -g @talenguyen/andev
```

## Usage

```shell
Usage:
    $ andev --help
    Options:
      --deeplink, d     Open deep-link
      --clear, c        Clear cache
      --uninstall, u    Uninstall 
      --install, i      Find and install APK in directory 
      --text, t         Send text to device
    Example:
      $ andev --d https://google.com
      $ andev --c com.android.chrome
      $ andev --uninstall com.android.chrome
      $ andev --install app/buid/output
      $ andev --text "Hello world"
```

## Author
- Giang Nguyen <giangnguyen.tale@gmail.com> ([twitter](https://twitter.com/Tale_Nguyen))

## License

[MIT](LICENSE)
