# afinn-111

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[afinn-111][afinn111].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`afinn111`](#afinn111)
*   [Notes](#notes)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package gives you easy access to [afinn-111][afinn111].

## When should I use this?

You’re probably dealing with natural language, and know you need this, if
you’re here!

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, 16.0+), install with [npm][]:

```sh
npm install afinn-111
```

In Deno with [`esm.sh`][esmsh]:

```js
import {afinn111} from 'https://esm.sh/afinn-111@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {afinn111} from 'https://esm.sh/afinn-111@2?bundle'
</script>
```

## Use

```js
import {afinn111} from 'afinn-111'

afinn111.positive //=> 2
afinn111['self-deluded'] //=> -2
```

## API

This package exports the identifier `afinn111`.
There is no default export.

### `afinn111`

`afinn-111` maps entries to valence ratings (`Object.<string, number>`).

> 👉 **Note**:
> Be careful when accessing unknown properties on the `afinn-111` object, words
> such as “constructor” or “toString” might occur.
> It’s recommended to use a `hasOwnProperty` check beforehand.

## Notes

Note the AFINN entries are:

*   all lower case
*   can contain numbers (only case: `n00b`)
*   can contain spaces (cases: `can't stand`, `cashing in`,
    `cool stuff`, `does not work`, `dont like`, `fed up`, `green wash`,
    `green washing`, `messing up`, `no fun`, `not good`, `not working`,
    `right direction`, `screwed up`, `some kind`)
*   can contain apostrophes (only case: `can't stand`)
*   can contain diaeresis (only case: `naïve`)
*   can contain dashes (cases: `cover-up`, `made-up`,
    `once-in-a-lifetime`, `self-confident`, `self-deluded`,
    `short-sighted`, `short-sightedness`, `son-of-a-bitch`)

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+, 16.0+, and 18.0+.
It also works in Deno and modern browsers.

## Related

*   [`afinn-96`](https://github.com/words/afinn-96)
    — AFINN list from 2009, containing 1468 entries
*   [`afinn-165`](https://github.com/words/afinn-165)
    — AFINN list from 2015, containing 3382 entries
*   [`emoji-emotion`](https://github.com/words/emoji-emotion)
    — Like AFINN, but for emoji
*   [`polarity`](https://github.com/words/polarity)
    — Detect the polarity of text, based on `afinn-165` and `emoji-emotion`

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/afinn-111/workflows/main/badge.svg

[build]: https://github.com/words/afinn-111/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/afinn-111.svg

[coverage]: https://codecov.io/github/words/afinn-111

[downloads-badge]: https://img.shields.io/npm/dm/afinn-111.svg

[downloads]: https://www.npmjs.com/package/afinn-111

[size-badge]: https://img.shields.io/bundlephobia/minzip/afinn-111.svg

[size]: https://bundlephobia.com/result?p=afinn-111

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[afinn111]: https://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010
