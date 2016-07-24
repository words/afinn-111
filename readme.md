# afinn-111 [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Easy access to [afinn-111][afinn111].

## Installation

[npm][npm-install]:

```bash
npm install afinn-111
```

## Usage

```js
var afinn = require('afinn-111');

afinn.positive; // 2
afinn['self-deluded']; // -2
```

## API

### `afinn111`

**afinn-111** returns entries to valence ratings (`Object.<string, number>`).

> Note! Be careful when accessing unknown properties on the
> **afinn-111** object, words such as “constructor” or “toString”
> might occur.  It’s recommended to use a `hasOwnProperty` check
> beforehand.

## Musings

Note the AFINN entries are:

*   All lower case;
*   Can contain numbers (only case: `n00b`);
*   Can contain spaces (cases: `can't stand`, `cashing in`,
    `cool stuff`, `does not work`, `dont like`, `fed up`, `green wash`,
    `green washing`, `messing up`, `no fun`, `not good`, `not working`,
    `right direction`, `screwed up`, `some kind`);
*   Can contain apostrophes (only case: `can't stand`);
*   Can contain diaeresis (only case: `naïve`);
*   Can contain dashes (cases: `cover-up`, `made-up`,
    `once-in-a-lifetime`, `self-confident`, `self-deluded`,
    `short-sighted`, `short-sightedness`, `son-of-a-bitch`);

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/afinn-111.svg

[travis]: https://travis-ci.org/wooorm/afinn-111

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/afinn-111.svg

[codecov]: https://codecov.io/github/wooorm/afinn-111

[npm-install]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[afinn111]: http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010
