function caesarCipher(str, num){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shiftedAlphabet = alphabet.slice(num) + alphabet.slice(0, num);

    return str
    .split('')
    .map(char => {
            const lowercaseChar = char.toLowerCase();
            const index = alphabet.indexOf(lowercaseChar);
        if(index === -1){
            return char
        }else{
            // Determine the case of the original character
            const isUpperCase = char !== lowercaseChar;
            const shiftedChar = shiftedAlphabet[index];

            return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
        }
    })
   .join('')
}




module.exports = {
    caesarCipher
}