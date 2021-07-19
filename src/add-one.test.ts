import {addOne} from './add-one';

test('1 + 1 = 2', () => {
  expect(addOne(1)).toBe(2);
});

test('100 + 1 = 101', () => {
  expect(addOne(100)).toBe(101);
});
