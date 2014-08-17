# afinn-111 [![Build Status](https://travis-ci.org/wooorm/afinn-111.svg?branch=master)](https://travis-ci.org/wooorm/afinn-111) [![Coverage Status](https://img.shields.io/coveralls/wooorm/afinn-111.svg)](https://coveralls.io/r/wooorm/afinn-111?branch=master)

Easy access to [AFINN-111](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010).

## Installation

NPM:
```sh
$ npm install afinn-111
```

Component.js:
```sh
$ component install wooorm/afinn-111
```

## Usage

```js
var afinn = require('afinn-111');

afinn.positive; // 2
afinn['self-deluded']; // -2

afinn['cats']; // undefined
afinn['cats'] = Infinity;
afinn['cats']; // Infinity
```

## API

**afinn-111** returns the AFINN word list as a javascript object.

## Supported words

**afinn-111** supports all AFINN-111 words/phrases. For a complete list, check out [Supported-words.md](Supported-words.md).

Note the AFINN entries are:

- All lower case;
- Can contain numbers (only case: `n00b`);
- Can contain spaces (only case: `can't stand`);
- Can contain apostrophes (only case: `can't stand`);
- Can contain diaeresis (only case: `naïve`);
- Can contain dashes (`cover-up`, `made-up`, `once-in-a-lifetime`, `self-confident`, `self-deluded`, `short-sighted`, `short-sightedness`, `son-of-a-bitch`);

## License

### Data

The database (`data/AFINN-111.txt`), is licensed under ODbL;

> This database of words is copyright protected and distributed under
> "Open Database License (ODbL) v1.0"
> http://www.opendatacommons.org/licenses/odbl/1.0/ or a similar
> copyleft license.

### Everything else

MIT © Titus Wormer
