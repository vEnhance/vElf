# velf-standalone

Thin wrapper around the standalone `@unified-latex/unified-latex-velf`,
forked by vEnhance when he had better things to do but was sick of fixing
``$$ ... $$`` like freaking everywhere.

## Intro

Prettier is an opinionated code formatter.
It enforces a consistent style by parsing your code and
re-printing it with its own rules that take the maximum line length into account,
wrapping code when necessary.

This plugin adds support for the LaTex to Prettier.
While TeX itself cannot be parsed without being executed,
`prettier-plugin-latex` makes the assumption that your document uses "standard" LaTeX,
and parses it to the best of its ability.

## Use

### With Prettier

After cloning this repository, do

```bash
prettier --plugin=/path/to/velf/packages/velf-standalone/ sample.tex
```

### In the Browser

This package exposes a `standalone.js` that wraps prettier and exports a
`printPrettier` function that can be called as

```js
printPrettier(YOUR_CODE, {
    // example option
    tabWidth: 2,
});
```

## Options

The standard Prettier options (such as `tabWidth`) can be used.

## Development

To make a production build, run

```
npm run build
```

To develop, run

```
npm run watch
```

You can then execute Prettier as above.
