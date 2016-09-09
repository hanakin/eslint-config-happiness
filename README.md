# Happiness - ESLint Shareable Config
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/hanakin/eslint-config-sane/master.svg
[travis-url]: https://travis-ci.org/hanakin/eslint-config-sane
[npm-image]: https://img.shields.io/npm/v/eslint-config-sane.svg
[npm-url]: https://npmjs.org/package/eslint-config-sane
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-sane.svg
[downloads-url]: https://npmjs.org/package/eslint-config-sane

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [JavaScript Happiness Style](https://github.com/hanakin/sane)

This module is for advanced users. You probably want to use [`sane`](https://github.com/hanakin/sane) instead :)

[![js-sane-style](https://cdn.rawgit.com/hanakin/sane/master/badge.svg)](https://github.com/hanakin/sane)

## Install

```bash
npm install eslint-config-sane
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Happiness Style shareable config, first run this:

```bash
npm install eslint-config-sane eslint-plugin-standard eslint-plugin-promise
```

Then, add this to your .eslintrc file:

```
{
  "extends": "sane"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

### Looking for something easier than this?

The easiest way to use JavaScript Happiness Style to check your code is to use the
[`sane`](https://github.com/hanakin/sane) package. This comes with a global
Node command line program (`sane`) that you can run or add to your `npm test` script
to quickly check your style.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the sane style.

[![js-sane-style](https://cdn.rawgit.com/hanakin/sane/master/badge.svg)](https://github.com/hanakin/sane)

```markdown
[![js-sane-style](https://cdn.rawgit.com/hanakin/sane/master/badge.svg)](https://github.com/hanakin/sane)
```

[![js-sane-style](https://img.shields.io/badge/code%20style-sane-brightgreen.svg)](https://github.com/hanakin/sane)

```markdown
[![js-sane-style](https://img.shields.io/badge/code%20style-sane-brightgreen.svg)](https://github.com/hanakin/sane)
```

## Learn more

For the full listing of rules, editor plugins, FAQs, and more, visit the main
[JavaScript Sane Style repo](https://github.com/hanakin/sane).

## License

MIT. Copyright (c) Michael Miday.
