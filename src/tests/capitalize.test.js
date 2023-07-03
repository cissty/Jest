const { capitalize } = require('../capitalize');

describe('capitalizeFirstLetter', () => {
    test('should capitalize the first letter of a string', () => {
      const input = 'hello';
      const result = capitalize(input);
      expect(result).toBe('Hello');
    });
  
    test('should return an empty string if the input is an empty string', () => {
      const input = '';
      const result = capitalize(input);
      expect(result).toBe('');
    });
    test('First Letter to be capitalized', () => {
        expect(capitalize('ceno')).toBe('Ceno');
    })
});
