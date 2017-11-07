# afinn-111 [![Build Status][travis-badge]][travis]

Easy access to [afinn-111][afinn111].

## Installation

[npm][]:

```bash
npm install afinn-111
```

## Usage

```js
var afinn = require('afinn-111');

afinn.positive; //=> 2
afinn['self-deluded']; //=> -2
```

## API

### `afinn111`

**afinn-111** returns entries to valence ratings (`Object.<string, number>`).

> Note!  Be careful when accessing unknown properties on the
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

## Related

*   [`afinn-96`](https://github.com/wooorm/afinn-96)
    — AFINN list from 2009, containing 1468 entries
*   [`afinn-165`](https://github.com/wooorm/afinn-165)
    — AFINN list from 2015, containing 3382 entries
*   [`emoji-emotion`](https://github.com/wooorm/emoji-emotion)
    — Like AFINN, but for emoji
*   [`polarity`](https://github.com/wooorm/polarity)
    — Detect the polarity of text, based on `afinn-169` and `emoji-emotion`

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/words/afinn-111.svg

[travis]: https://travis-ci.org/words/afinn-111

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[afinn111]: http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010
