// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const lookup = 'abcdefghijklmnopqrstuvwxyz';

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    input = input.toLowerCase();

    if (encode) {
      let result = '';

      for (let i = 0; i < input.length; i++) {
        if (!lookup.includes(input[i])) {
          result += input[i];
        }
        for (let j = 0; j < lookup.length; j++) {
          let foundLetter = lookup[j + shift];
          if (input[i] === lookup[j]) {
            if (j + shift > 25) {
              foundLetter = lookup[j + shift - lookup.length];
            } else if (j + shift < 0) {
              foundLetter = lookup[j + shift + lookup.length];
            }
            result += foundLetter;
          }
        }
      }

      return result;
    } else {
      let result = '';

      for (let i = 0; i < input.length; i++) {
        if (!lookup.includes(input[i])) {
          result += input[i];
        }
        for (let j = 0; j < lookup.length; j++) {
          let foundLetter = lookup[j - shift];
          if (input[i] === lookup[j]) {
            if (j - shift > 25) {
              foundLetter = lookup[j - shift - lookup.length];
            } else if (j - shift < 0) {
              foundLetter = lookup[j - shift + lookup.length];
            }
            result += foundLetter;
          }
        }
      }

      return result;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
