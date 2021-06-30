import { Multiplicacion } from './Utils';

test('multiplica bien', () => {
  expect(Multiplicacion(1, 3)).toBe(2);
  expect(Multiplicacion(2, 0)).toBe(0);
  expect(Multiplicacion(2, 2)).toBe(4);
});
