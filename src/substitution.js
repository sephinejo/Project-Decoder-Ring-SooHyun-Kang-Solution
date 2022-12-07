// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const lookup = 'abcdefghijklmnopqrstuvwxyz';

  function substitution(input, alphabet, encode = true) {
    // If alphabet doesn't exist or is not exactly 26 characters or all the characters are not unique, return false.
    if (
      !alphabet ||
      alphabet.length !== 26 ||
      !checkDuplicateAlphabet(alphabet)
    )
      return false;
    // Capital letters are ignored.
    input = input.toLowerCase();

    // Encoding message part
    if (encode) {
      let result = [];
      // First, cross loop through each input letter and lookup alphabet.
      for (let i = 0; i < input.length; i++) {
        // Spaces maintain as are
        if (input[i] === ' ') result.push(input[i]);
        for (let j = 0; j < lookup.length; j++) {
          // If input[i] letter and lookup[j] alphabet are equal, store the index of lookup[j] in the result array.
          if (input[i] === lookup[j]) result.push(j);
        }
      }

      // Loop through each element of result array to match with the index of the given alphabet
      let final = '';
      for (let i of result) {
        if (i === ' ') {
          // Spaces are maintained
          final += i;
        } else {
          // Accumulate the character of the given alphabet which has the index of each element in the result
          final += alphabet[i];
        }
      }
      // Return the final value
      return final;
      // Decoding message part
    } else {
      let result = [];
      // First, cross loop through each input letter and the given alphabet.
      for (let i = 0; i < input.length; i++) {
        // Spaces are maintained as are
        if (input[i] === ' ') result.push(input[i]);
        for (let j = 0; j < alphabet.length; j++) {
          // If input[i] and alphabet[j] are equal, store the index of alphabet[j] in the result array.
          if (input[i] === alphabet[j]) result.push(j);
        }
      }

      // Loop through each element of result array to match with the index of lookup alphabet
      let final = '';
      for (let i of result) {
        // Spaces are maintained as are
        if (i === ' ') {
          final += i;
        } else {
          // Accumulate the lookup alphabet which has the index number as each element of the result
          final += lookup[i];
        }
      }
      // Return the final value
      return final;
    }
  }

  // Helper function to check if all characters in the given alphabets are unique.
  function checkDuplicateAlphabet(alphabet) {
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) {
        return false;
      }
    }
    return true;
  }

  return {
    substitution,
  };
})();

module.exports = {
  substitution: substitutionModule.substitution,
  checkDuplicateAlphabet: substitutionModule.checkDuplicateAlphabet,
};
