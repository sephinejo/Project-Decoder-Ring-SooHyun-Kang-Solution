// Write your tests here!
const { caesar } = require('../src/caesar');
const expect = require('chai').expect;

describe('caesar', () => {
  describe('error handling', () => {
    it('Should return false if the shift amount is 0', () => {
      const message = 'hello';
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it('Should return false if the shift amount is less than -25', () => {
      const message = 'hello';
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it('Should return false if the shift amount is greater than 26', () => {
      const message = 'hello';
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe('encoding messages', () => {
    it('Should encode a message by shifting the letters', () => {
      const message = 'thinkful';
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = 'wklqnixo';

      expect(actual).to.equal(expected);
    });

    it('Should maintain spaces', () => {
      const message = 'this is a secret message';
      const shift = 8;
      const actual = caesar(message, shift);
      const expected = 'bpqa qa i amkzmb umaaiom';

      expect(actual).to.equal(expected);
    });

    it('Should maintain other nonalphabetic symbols', () => {
      const message = 'this is a secret message!';
      const shift = 8;
      const actual = caesar(message, shift);
      const expected = 'bpqa qa i amkzmb umaaiom!';

      expect(actual).to.equal(expected);
    });

    it('Should ignore capital letters', () => {
      const message = 'THIS IS A SECRET MESSAGE';
      const shift = 8;
      const actual = caesar(message, shift);
      const expected = 'bpqa qa i amkzmb umaaiom';

      expect(actual).to.equal(expected);
    });

    it('Should appropriately handle letters at the end of the alphabet', () => {
      const message = 'zebra magazine';
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = 'cheud pdjdclqh';

      expect(actual).to.equal(expected);
    });

    it('Should allow for a negative shift that will shift to the left', () => {
      const message = 'zebra magazine';
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = 'wbyox jxdxwfkb';

      expect(actual).to.equal(expected);
    });
  });

  describe('decoing messages', () => {
    it('Should decode a message by shifting the letters in the opposite direction', () => {
      const message = 'wklqnixo';
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = 'thinkful';

      expect(actual).to.equal(expected);
    });

    it('Should leave spaces and other symbols as is', () => {
      const message = 'amkzmb umaaiom!*';
      const shift = 8;
      const actual = caesar(message, shift, false);
      const expected = 'secret message!*';

      expect(actual).to.equal(expected);
    });

    it('Should appropriately handle letters at the end of the alphabet', () => {
      const message = 'cheud sdwwhuq';
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = 'zebra pattern';

      expect(actual).to.equal(expected);
    });

    it('Should allow for a negative shift that will shift to the left', () => {
      const message = 'ynnjc';
      const shift = -2;
      const actual = caesar(message, shift, false);
      const expected = 'apple';

      expect(actual).to.equal(expected);
    });
  });
});
