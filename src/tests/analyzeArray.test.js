const { analyzeArray } = require('../analyzeArray');

describe('analyzeArray', () => {
    test('should return an object with average, min, max, and length properties', () => {
      const array = [1, 8, 3, 4, 2, 6];
      const result = analyzeArray(array);
  
      expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      });
    });
  
    test('should return the correct values for an array with negative numbers', () => {
      const array = [-5, -2, -8, -3];
      const result = analyzeArray(array);
  
      expect(result).toEqual({
        average: -4.5,
        min: -8,
        max: -2,
        length: 4,
      });
    });
  
    test('should return the correct values for an array with duplicate numbers', () => {
      const array = [7, 5, 2, 7, 5];
      const result = analyzeArray(array);
  
      expect(result).toEqual({
        average: 5.2,
        min: 2,
        max: 7,
        length: 5,
      });
    });
  
    test('should return an empty object for an empty array', () => {
      const array = [];
      const result = analyzeArray(array);
  
      expect(result).toEqual({});
    });
  });