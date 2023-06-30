# generator-lotkl [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
>
> A yeoman generator for create keyboard layout mapping for characters in json

## Installation

First, install [Yeoman](http://yeoman.io) and generator-lotkl using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-lotkl
```

Then run the generator:

```bash
yo lotkl
```

## Purpose

This generator will create a character map (language layout to another language layout) based on the string that you provided.

It can be useful when you need to convert one string comes from a keyboard layout to another keyboard layout.

## Usage

After ``yo lotkl``

There will be two options.For provide a base string, choose:

`Add / Change base string to compare`

This will be the base string that you provided. After that you will see that option automatically:

`Enter target string to create character map`

When you enter another string, you will see the output character map.

* **Base String**: `{}!'@%^&*()_+?></,[]`
* **Provided String**: `¶º!\\™%}^|*(?-_±§&,•`
* **Character Map**

```json
{
  '¶': '{',
  'º': '}',
  '\\': '@',
  '™': '%',
  '%': '^',
  '}': '&',
  '^': '*',
  '|': '(',
  '*': ')',
  '(': '_',
  '?': '+',
  '-': '?',
  _: '>',
  '±': '<',
  '§': '/',
  '&': ',',
  ',': '[',
  '•': ']'
}
```

## Getting To Know Yeoman

* Yeoman has a heart of gold.
* Yeoman is a person with feelings and opinions, but is very easy to work with.
* Yeoman can be too opinionated at times but is easily convinced not to be.
* Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Fatih Dogru]()

[npm-image]: https://badge.fury.io/js/generator-lotkl.svg
[npm-url]: https://npmjs.org/package/generator-lotkl
[travis-image]: https://travis-ci.com/wethil/generator-lotkl.svg?branch=master
[travis-url]: https://travis-ci.com/wethil/generator-lotkl
[daviddm-image]: https://david-dm.org/wethil/generator-lotkl.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/wethil/generator-lotkl
