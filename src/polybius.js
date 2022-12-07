const polybiusModule = (function () {
  const lookup = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    // i and j share a space. Both characters are converted to 42
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  const lookupReverse = {
    11: 'a',
    21: 'b',
    31: 'c',
    41: 'd',
    51: 'e',
    12: 'f',
    22: 'g',
    32: 'h',
    // i and j share a space. Number 42 are converted to '(i/j)'
    42: '(i/j)',
    52: 'k',
    13: 'l',
    23: 'm',
    33: 'n',
    43: 'o',
    53: 'p',
    14: 'q',
    24: 'r',
    34: 's',
    44: 't',
    54: 'u',
    15: 'v',
    25: 'w',
    35: 'x',
    45: 'y',
    55: 'z',
  };

  function polybius(input, encode = true) {
    let result = '';
    // Capital letters are ignored.
    input = input.toLowerCase();
    // Encoding message part
    if (encode) {
      // Extract keys of lookup object in an array.
      let lookupKeys = Object.keys(lookup);
      // Cross loop through each input letter and each alphabet in the array of lookup keys.
      for (let i = 0; i < input.length; i++) {
        // Spaces are maintained as are
        if (input[i] === ' ') {
          result += input[i];
        }
        for (let j = 0; j < lookupKeys.length; j++) {
          // When input[i] and lookup keys' alphabet are equal,
          if (input[i] === lookupKeys[j]) {
            // Accumulate the number value of found lookup key alphabet.
            result += lookup[lookupKeys[j]];
          }
        }
      }
      // Return the result
      return result;
      // Decoding message part
    } else {
      // Extract keys of lookupReverse object in an array.
      let lookupReverseKeys = Object.keys(lookupReverse);
      // Remove spaces from input
      let noSpaceInput = input.replace(/ /g, ''); // trim() didn't work
      // The number of characters in the string excluding spaces should be even. Otherwise, return false.
      if (noSpaceInput.length % 2 !== 0) return false;
      // input numbers are increased by 2 for each loop, since each alphabet is made up of two numbers
      for (let i = 0; i < input.length; i += 2) {
        // Spaces are maintained
        if (input[i] === ' ') {
          result += input[i];
          i++;
        }
        for (let j = 0; j < lookupReverseKeys.length; j++) {
          // If the set of two numbers of input is equal to a key of lookup Reverse array,
          if (input[i] + input[i + 1] === lookupReverseKeys[j]) {
            // Accumulate the alphabet value of found lookup Reverse key number.
            result += lookupReverse[lookupReverseKeys[j]];
          }
        }
      }
      // Return the result
      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
