# jscad-module-example

> Example of modular parts for [OpenJSCAD](https://github.com/Spiritdude/OpenJSCAD.org), using standard Node.js modules

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

Not on npm yet, so just use the github install as follows:

```
npm install kaosat-dev/jscad-module-example
```

## Usage

```javascript
const {jscadLogo, coneWithCutouts} = require('jscad-module-example')

const logo1 = jscadLogo()
const largerLogo = jscadLogo(20)

const aStrangePart = coneWithCutouts()

```


## Contribute

PRs accepted.

## License

MIT © Mark Moissette
