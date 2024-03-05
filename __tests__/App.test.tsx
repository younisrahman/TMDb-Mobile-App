import {hp, wp} from '@utils';

test('return responsive height', () => {
  expect(hp(10)).toBeGreaterThan(70);
});

test('return responsive width', () => {
  expect(wp(10)).toBeGreaterThan(30);
});
