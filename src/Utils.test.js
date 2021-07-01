import { Multiplicacion } from './Utils';

test('multiplica bien', () => {
  expect(Multiplicacion(1, 2)).toBe(2);
  expect(Multiplicacion(2, 1)).toBe(0);
  expect(Multiplicacion(2, 2)).toBe(4);
});
