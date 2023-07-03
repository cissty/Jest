const { reverseString } = require('../reverseString');

test('Reversed String', () => {
    expect(reverseString('David')).toBe('divaD');
});


test('Reversed String', () => {
    expect(reverseString('  HeLLo     ')).toBe('oLLeH');
});