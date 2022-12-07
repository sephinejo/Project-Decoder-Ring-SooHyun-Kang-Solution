// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const lookup = 'abcdefghijklmnopqrstuvwxyz';

  function caesar(input, shift, encode = true) {
    // If the shift value isn't present, equal to 0, less than -25, or greater than 25, return false.
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    // Capital letters can be ignored.
    input = input.toLowerCase();

    // Encoding messages part
    if (encode) {
      let result = '';

      // Cross loop through each input letter and lookup alphabet
      for (let i = 0; i < input.length; i++) {
        // Spaces and symbols maintains as are.
        if (!lookup.includes(input[i])) {
          result += input[i];
        }

        // Each lookup alphabet should be shifted as the given shift number.
        for (let j = 0; j < lookup.length; j++) {
          let foundLetter = lookup[j + shift];
          // While both input[i] and lookup[j] are equal,
          if (input[i] === lookup[j]) {
            // if a letter is shifted so that is goes "off" the alphabet, it should wrap around to the front of the alphabet
            if (j + shift > 25) {
              foundLetter = lookup[j + shift - lookup.length];
              // or it should wrap around to the end of the alphabet
            } else if (j + shift < 0) {
              foundLetter = lookup[j + shift + lookup.length];
            }
            // Accumualate each found letter
            result += foundLetter;
          }
        }
      }
      // Return the result
      return result;
      // Decoding messages part
    } else {
      let result = '';

      // Cross loop through each input letter and lookup alphabet
      for (let i = 0; i < input.length; i++) {
        // Spaces and special characters are maintained.
        if (!lookup.includes(input[i])) {
          result += input[i];
        }
        // Each lookup alphabet shifted as the given shift number
        for (let j = 0; j < lookup.length; j++) {
          let foundLetter = lookup[j - shift];
          // While both input[i] and lookup[j] are equal,
          if (input[i] === lookup[j]) {
            // if a letter is shifted so that is goes "off" the alphabet, it should wrap around to the front of the alphabet
            if (j - shift > 25) {
              foundLetter = lookup[j - shift - lookup.length];
              // or it should wrap around to the end of the alphabet
            } else if (j - shift < 0) {
              foundLetter = lookup[j - shift + lookup.length];
            }
            // Accumulate each found letter
            result += foundLetter;
          }
        }
      }
      // Return the result
      return result;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
