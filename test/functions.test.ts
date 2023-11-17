import { convert, validate } from '../src/functions';

describe('Test validate function', () => {
  test('must return true', () => {
    const precision = Math.random() * 11;

    expect(validate(Math.random() * 999999999999999.9, 'si', precision)).toBeTruthy();
    expect(validate(Math.random() * 999999999999999.9, 'iec', precision)).toBeTruthy();
    expect(validate(Math.random() * 999999999999999.9, 'SI', precision)).toBeTruthy();
    expect(validate(Math.random() * 999999999999999.9, 'IEC', precision)).toBeTruthy();
  });

  test('must return false', () => {
    expect(validate(Math.random() * 999999999999999.9, 'si', 11)).toBeFalsy();
    expect(validate(Math.random() * 999999999999999.9, 'foo', 10)).toBeFalsy();
    expect(validate(Infinity, 'iec', 10)).toBeFalsy();
    expect(validate(NaN, 'iec', 10)).toBeFalsy();
  });
});

describe('Test convert function', () => {
  test('must return specific value', () => {
    expect(convert(1459872, 'iec', 2)).toBe('1.39 MiB');
    expect(convert(124890, 'iec', 3)).toBe('121.963 KiB');
    expect(convert(7710092259001, 'si', 2)).toBe('7.71 TB');
    expect(convert(40054901000, 'iec', 8)).toBe('37.30403353 GiB');
    expect(convert(987102, 'si', 2)).toBe('987.10 kB');
    expect(convert(1024, 'si', 2)).toBe('1.02 kB');
    expect(convert(786600123, 'iec', 5)).toBe('750.16033 MiB');
  });
});
