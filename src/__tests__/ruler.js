const ruler = require('../ruler');

test('Ruler has 3 allies', () => {
  const messages = [{
    to: 'Air',
    message: 'oaaawaala'
  }, {
    to: 'Land',
    message: 'a1d22n333a4444p'
  }, {
    to: 'Ice',
    message: 'zmzmzmzaztzozh'
  }];
  expect(ruler(messages, 'King Shan')).toEqual({
    ruler: 'King Shan',
    allies: ['Air', 'Land', 'Ice']
  });
});

test('Ruler has 4 allies', () => {
  const messages = [{
    to: 'Air',
    message: 'Let\'s swing the sword together'
  }, {
    to: 'Land',
    message: 'Die or play the tame of thrones'
  }, {
    to: 'Ice',
    message: 'Ahoy! Fight for me with men and money'
  }, {
    to: 'Water',
    message: 'Summer is coming'
  }, {
    to: 'Fire',
    message: 'Drag on Martin!'
  }, ];
  expect(ruler(messages, 'King Shan')).toEqual({
    ruler: 'King Shan',
    allies: ['Air', 'Land', 'Ice', 'Fire']
  });
});

test('Ruler has 2 allies', () => {
  const messages = [{
    to: 'Air',
    message: 'oaaawaala'
  }, {
    to: 'Land',
    message: 'a1d22n333a4444p'
  }, {
    to: 'Ice',
    message: 'zmzmzmzaztzzh'
  }];
  expect(ruler(messages, 'King Shan')).toEqual({
    ruler: 'None',
    allies: []
  });
});

test('sent null messages', () => {
  const messages = null;
  expect(ruler(messages, 'King Shan')).toEqual({
    ruler: 'None',
    allies: []
  });
});

test('sent undefined messages', () => {
  const messages = null;
  expect(ruler(messages, 'King Shan')).toEqual({
    ruler: 'None',
    allies: []
  });
});

test('sent number instead of messages', () => {
  const messages = 1;
  expect(ruler(messages, 'King Shan')).toEqual({
    ruler: 'None',
    allies: []
  });
});