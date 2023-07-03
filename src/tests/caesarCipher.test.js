const { caesarCipher } = require('../caesarCipher');

describe('caesarCipher', () => {
    test('should shift characters in the string by the given shift factor', () => {
      expect(caesarCipher('abc', 1)).toBe('bcd');
      expect(caesarCipher('hello', 3)).toBe('khoor');
      expect(caesarCipher('xyz', 5)).toBe('cde');
    });
  
    test('should maintain the case of the characters in the string', () => {
      expect(caesarCipher('ABC', 1)).toBe('BCD');
      expect(caesarCipher('HeLlO', 3)).toBe('KhOoR');
    });
  
    test('should handle non-alphabetic characters in the string', () => {
      expect(caesarCipher('hello world!', 1)).toBe('ifmmp xpsme!');
      expect(caesarCipher('123', 5)).toBe('123');
      expect(caesarCipher('!', 10)).toBe('!');
    });
  });