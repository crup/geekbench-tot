const {
  concat,
  alliesMessage,
  printRulerInfo
} = require('../utils');
const ruler = require('../ruler');

test('Concatinating array with comma', () => {
  expect(concat(['Air', 'Land', 'Ice'])).toBe('Air, Land, Ice');
});

test('Concatinate null', () => {
  expect(concat(null)).toBe('None');
});

test('Concatinate undefined', () => {
  expect(concat(undefined)).toBe('None');
});

test('Concatinate object', () => {
  expect(concat({})).toBe('None');
});

test('Concatinate empty array', () => {
  expect(concat([])).toBe('None');
});

test('Ruler has no name', () => {
  expect(alliesMessage(null)).toBe('Allies of Ruler?');
});

test('Ruler has name', () => {
  expect(alliesMessage('Lord Tyrion')).toBe('Allies of Lord Tyrion?');
});

test("Print ruler info without data", () => {
  const outputData = [];
  const storeLog = inputs => (outputData.push(inputs));
  console.log = jest.fn(storeLog);
  printRulerInfo(ruler());
  expect(outputData).toEqual([
    'Who is the ruler of Southeros?',
    'None',
    'Allies of None?',
    'None'
  ]);
});

test("Print ruler info with data", () => {
  const outputData = [];
  const storeLog = inputs => (outputData.push(inputs));
  console.log = jest.fn(storeLog);
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
  printRulerInfo(ruler(messages, "King Shan"));

  expect(outputData).toEqual([
    'Who is the ruler of Southeros?',
    'King Shan',
    'Allies of King Shan?',
    'Air, Land, Ice'
  ]);
});