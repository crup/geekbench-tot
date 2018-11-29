const winner = require('../winner');

test('"Die or play the tame of thrones" contains "Panda"', () => {
  expect(winner("Die or play the tame of thrones", "Panda")).toBe(true);
});

test('"Panda" contains "Panda"', () => {
  expect(winner("Panda", "Panda")).toBe(true);
});

test('"andap" contains "Panda"', () => {
  expect(winner("andap", "Panda")).toBe(true);
});

test('"Test string" contains "Panda"', () => {
  expect(winner("Test string", "Panda")).toBe(false);
});

test('"Pandx" contains "Panda"', () => {
  expect(winner("Pandx", "Panda")).toBe(false);
});

test('Handles null', () => {
  expect(winner(null, "Panda")).toBe(false);
});

test('Handles undefined', () => {
  expect(winner(undefined, "Panda")).toBe(false);
});

