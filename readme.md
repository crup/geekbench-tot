GeekTrust
========================

Tame of Thrones: A Golden Crown
--------------------------------

Shan, the gorilla king of the Space kingdom wants to rule all Six Kingdoms in the universe of Southeros.

There is no ruler today and pandemonium reigns. Shan is sending secret messages to all kingdoms to ask for their allegiance. The coding challenge is to help King Shan send the right message to the right kingdom to win them over. Each kingdom has their own emblem and the secret message should contain the letters of the emblem in it. Once Shan has the support of 3 other kingdoms, he is the ruler!

## Pre-requisites
- node: `v10.x.x`
- npm: `6.x.x`

## Installation
```sh
$ npm install
$ npm start
```

To update input messages update the `inputs.js` in `src/`:
Sample input

```js
module.exports = {
  rulerName: "King Shan",	
  messages: [
    {to: 'Air', message: 'oaaawaala'},
    {to: 'Land', message: 'a1d22n333a4444p'},
    {to: 'Ice', message: 'zmzmzmzaztzozh'}
  ]
};
```


## Unit tests
```sh
# Run tests
$ npm run test
# Run tests watcher
$ npm run test:watch
# Generate tests coverage report
$ npm run test:coverage
```

Test coverage report is located at: `coverage/lcov-report/index.html`

## Lint
```sh
$ npm run lint
```