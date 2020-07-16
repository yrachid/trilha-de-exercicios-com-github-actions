import hello from './hello'

test('Says hello', () => {
  expect(hello()).toBe('Hello');
});
