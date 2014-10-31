# afinn-111 [![Build Status](https://img.shields.io/travis/wooorm/afinn-111.svg?style=flat)](https://travis-ci.org/wooorm/afinn-111) [![Coverage Status](https://img.shields.io/coveralls/wooorm/afinn-111.svg?style=flat)](https://coveralls.io/r/wooorm/afinn-111?branch=master)

Easy access to [AFINN-111](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010).

## Installation

npm:
```sh
$ npm install afinn-111
```

Component:
```sh
$ component install wooorm/afinn-111
```

Bower:
```sh
$ bower install afinn-111
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

> Note! Be careful when accessing unknown properties on the AFINN object, words such as “constructor” or “toString” might occur.
> It’s recommended to use a `hasOwnProperty` check beforehand.

## API

**afinn-111** returns the AFINN word list as a javascript object.

## Supported words

**afinn-111** supports all AFINN-111 words/phrases. For a complete list, check out [Supported-words.md](Supported-words.md).

Note the AFINN entries are:

- All lower case;
- Can contain numbers (only case: `n00b`);
- Can contain spaces (cases: `can't stand`, `cashing in`, `cool stuff`, `does not work`, `dont like`, `fed up`, `green wash`, `green washing`, `messing up`, `no fun`, `not good`, `not working`, `right direction`, `screwed up`, `some kind`);
- Can contain apostrophes (only case: `can't stand`);
- Can contain diaeresis (only case: `naïve`);
- Can contain dashes (cases: `cover-up`, `made-up`, `once-in-a-lifetime`, `self-confident`, `self-deluded`, `short-sighted`, `short-sightedness`, `son-of-a-bitch`);

## License

### Data

The database (`data/AFINN-111.txt`), is licensed under ODbL;

> This database of words is copyright protected and distributed under
> "Open Database License (ODbL) v1.0"
> http://www.opendatacommons.org/licenses/odbl/1.0/ or a similar
> copyleft license.

### Everything else

MIT © Titus Wormer
