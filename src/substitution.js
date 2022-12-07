// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const lookup = 'abcdefghijklmnopqrstuvwxyz';

  function substitution(input, alphabet, encode = true) {
    if (
      !alphabet ||
      alphabet.length !== 26 ||
      !checkDuplicateAlphabet(alphabet)
    )
      return false;
    input = input.toLowerCase();

    if (encode) {
      let result = [];
      for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') result.push(input[i]);
        for (let j = 0; j < lookup.length; j++) {
          if (input[i] === lookup[j]) result.push(j);
        }
      }

      let final = '';
      for (let i of result) {
        if (i === ' ') {
          final += i;
        } else {
          final += alphabet[i];
        }
      }

      return final;
    } else {
      let result = [];
      for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') result.push(input[i]);
        for (let j = 0; j < alphabet.length; j++) {
          if (input[i] === alphabet[j]) result.push(j);
        }
      }

      let final = '';
      for (let i of result) {
        if (i === ' ') {
          final += i;
        } else {
          final += lookup[i];
        }
      }

      return final;
    }
  }

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
