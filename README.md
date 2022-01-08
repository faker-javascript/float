<h1 align="center">Float</h1>
<p align="center">
Float package provides functionality to generate a fake float value.
</p>

<p align="center">
<a href="https://github.com/faker-javascript/float/releases"><img alt="Version" src="https://img.shields.io/github/release/faker-javascript/float.svg?label=version&color=green"></a> <a href="https://github.com/faker-javascript/float"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a> <img src="https://github.com/faker-javascript/float/actions/workflows/tests.yml/badge.svg">

## Install

```
$ npm install --save @fakerjs/float
```

## Usage

```js
import randomFloat from '@fakerjs/random-float';

randomFloat();
//=> -120920142888.5024

randomFloat(0, 10);
//=> 7.6913

randomFloat(0, 10, 6);
//=> 7.691312
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/faker-javascript/float/blob/master/LICENSE.txt)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
