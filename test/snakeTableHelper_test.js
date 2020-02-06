import { tableValues } from '../src/lib/SnakeTableHelper';

describe('Snake Table Values', () => {
  const ltr = true;
  const valueGen = tableValues(8, 1, 29, ltr);
  it('should generate the proper values', () => {
    const properValues = [
      [8, 9, 10, 11, 12],
      [17, 16, 15, 14, 13],
      [18, 19, 20, 21, 22],
      [27, 26, 25, 24, 23],
      [28, 29, null, null, null]
    ]
    expect([...valueGen]).toStrictEqual(properValues);
  });
});
