<h1 align="center">Superbytes-cli</h1>
<p align="center">
  <b>This is CLI version of superbytes library</b>
</p>
<br>

![npm](https://img.shields.io/npm/dw/superbytes-cli) ![npm](https://img.shields.io/npm/v/superbytes-cli) ![NPM](https://img.shields.io/npm/l/superbytes-cli) ![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/superbytess/superbytes-cli/node.js.yml)
![GitHub contributors](https://img.shields.io/github/contributors/superbytess/superbytes-cli)



## Description
Superbytes-cli is a command line version of superbytes package. Just convert bytes in command line to a human readable values!

## Installation

Latest version:
```bash
npm i -g superbytes-cli@latest
```

## Usage


```javascript
$ superbytes <bytes-number>
$ sb <bytes-number>

Positionals:
  bytes  input bytes number                                [number] [default: 0]

Options:
      --help       Show help                                           [boolean]
      --version    Show version number                                 [boolean]
  -p, --precision  Set number precision (max 10)           [number] [default: 2]
  -m, --metric     Set metric standard (iec | si)      [string] [default: "iec"]
```

## Example

```javascript
$ sb 
// returns 0 B
$ sb 812341
// returns 793.30 KiB
$ sb 91231812341 -m si -p 0
// returns 91 GB
```

## See

Main superbytes package which is used here:

https://github.com/superbytess/superbytes
https://www.npmjs.com/package/superbytes

## License

MIT © Damian Polak
