const { calculator } = require('../calculator');


test('add', () => {
    expect(calculator.add(5,20)).toBe(25)
});

test('subtract', () => {
    expect(calculator.subtract(30, 22)).toBe(8);
    expect(calculator.subtract(20, 25)).toBe(-5);
});

describe('divide', () => {
    test('should divide two positive numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });
  
    test('should divide positive and negative number correctly', () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
    });
  
    test('should return Infinity when dividing by zero', () => {
      expect(calculator.divide(10, 0)).toBe(Infinity);
    });
  });
  
  describe('multiply', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(5, 3)).toBe(15);
    });
  
    test('should multiply positive and negative number correctly', () => {
      expect(calculator.multiply(-5, 3)).toBe(-15);
    });
  
    test('should multiply a number by zero to get zero', () => {
      expect(calculator.multiply(10, 0)).toBe(0);
    });
  });