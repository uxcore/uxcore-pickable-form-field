## uxcore-pickable-form-field

React pickable form field

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-pickable-form-field.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-pickable-form-field
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-pickable-form-field.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-pickable-form-field
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-pickable-form-field.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-pickable-form-field?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-pickable-form-field.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-pickable-form-field
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-pickable-form-field.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-pickable-form-field#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-pickable-form-field.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-pickable-form-field.svg
[sauce-url]: https://saucelabs.com/u/uxcore-pickable-form-field


### Development

```sh
git clone https://github.com/uxcore/uxcore-pickable-form-field
cd uxcore-pickable-form-field
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-pickable-form-field
cd uxcore-pickable-form-field
npm install
npm run dep
npm run start
```

### Test Case

```sh
npm run test
```

### Coverage

```sh
npm run coverage
```

## Demo

http://uxcore.github.io/components/pickable-form-field

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props


| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|multiple|boolean|optional|true|是否支持多选|
|value|string/number|required|-|pickable Item 对应的值|
|type|string|optional|normal|样式风格，可选值为normal,simple,hook|
|max|number|optional|99|最大显示的数字，超过 max，显示 max+|
