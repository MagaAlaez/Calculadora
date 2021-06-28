import { Multiplicacion } from './Utils';

test('multiplica bien', () => {
  expect(suma(0, 2)).toBe(0);
  expect(suma(2, 0)).toBe(0);
  expect(suma(2, 2)).toBe(4);
});
