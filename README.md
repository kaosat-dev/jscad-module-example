# jscad-module-example

> Example of modular parts for [OpenJSCAD](https://github.com/Spiritdude/OpenJSCAD.org), using standard Node.js modules

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```
npm install @kaosat-dev/jscad-module-example
```

## Usage

```javascript
const {jscadLogo, coneWithCutouts} = require('@kaosat-dev/jscad-module-example')

const logo1 = jscadLogo()
const largerLogo = jscadLogo(20)

const aStrangePart = coneWithCutouts()

```


## Contribute

PRs accepted.

## License

MIT © Mark Moissette
