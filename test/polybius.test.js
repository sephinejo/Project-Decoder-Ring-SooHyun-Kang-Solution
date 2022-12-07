// Write your tests here!
const expect = require('chai').expect;
const { polybius } = require('../src/polybius');

describe('polybius', () => {
  describe('encoding messages', () => {
    it('Should encode a message by translating each letter to number pairs', () => {
      const message = 'hello';
      const actual = polybius(message);
      const expected = '3251131343';

      expect(actual).to.equal(expected);
    });

    it('Should spaces be maintaine throughout', () => {
      const message = 'good morning';
      const actual = polybius(message);
      const expected = '22434341 23432433423322';

      expect(actual).to.equal(expected);
    });

    it('Should capital letters be ignored', () => {
      const message = 'Happy';
      const actual = polybius(message);
      const expected = '3211535345';

      expect(actual).to.equal(expected);
    });

    it('Should letters i and j share a space 42', () => {
      const message = 'I sell jewelry';
      const actual = polybius(message);
      const expected = '42 34511313 42512551132445';

      expect(actual).to.equal(expected);
    });
  });

  describe('decoding messages', () => {
    it('Should decode a message by translating each pair of numbers into a letter', () => {
      const message = '3211535345';
      const actual = polybius(message, false);
      const expected = 'happy';

      expect(actual).to.equal(expected);
    });

    it("Should translate 42 to both 'i' and 'j'", () => {
      const message = '42434233';
      const actual = polybius(message, false);
      const expected = '(i/j)o(i/j)n';

      expect(actual).to.equal(expected);
    });

    it('Should leave spaces as is', () => {
      const message = '42 34511313 42512551132445';
      const actual = polybius(message, false);
      const expected = '(i/j) sell (i/j)ewelry';

      expect(actual).to.equal(expected);
    });

    it('Should return false if the length of all numbers is odd', () => {
      const message = '44324233521254134';
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
