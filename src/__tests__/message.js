const message = require('../message');

test('"Die or play the tame of thrones" contains "Panda"', () => {
  expect(message("Die or play the tame of thrones", "Panda")).toBe(true);
});

test('"Panda" contains "Panda"', () => {
  expect(message("Panda", "Panda")).toBe(true);
});

test('"andap" contains "Panda"', () => {
  expect(message("andap", "Panda")).toBe(true);
});

test('"Test string" contains "Panda"', () => {
  expect(message("Test string", "Panda")).toBe(false);
});

test('"Pandx" contains "Panda"', () => {
  expect(message("Pandx", "Panda")).toBe(false);
});

test('Handles null', () => {
  expect(message(null, "Panda")).toBe(false);
});

test('Handles undefined', () => {
  expect(message(undefined, "Panda")).toBe(false);
});

