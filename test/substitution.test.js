// Write your tests here!
const expect = require('chai').expect;
const { substitution, checkDuplicateAlphabet } = require('../src/substitution');

describe('substitution', () => {
  describe('error handling', () => {
    it('Should return false if alphabet is empty', () => {
      const message = 'thinkful';
      const actual = substitution(message);

      expect(actual).to.be.false;
    });

    it('Should return false if alphabet is not exactly 26 characters', () => {
      const message = 'thinkful';
      const actual = substitution(message, 'sliejfsia');

      expect(actual).to.be.false;
    });

    it('Should return false if alphabet does not contain unique characters', () => {
      const message = 'thinkful';
      const actual = substitution(message, 'xxxqmcgrukswaflnthdjpzibev');

      expect(actual).to.be.false;
    });
  });

  describe('encoding a message', () => {
    it('Should encode a message by using the given substitution alphabet', () => {
      const message = 'thinkful';
      const actual = substitution(message, 'xoyqmcgrukswaflnthdjpzibev');
      const expected = 'jrufscpw';

      expect(actual).to.equal(expected);
    });

    it('Should maintain spaces as is', () => {
      const message = 'you are an excellent spy';
      const actual = substitution(message, 'xoyqmcgrukswaflnthdjpzibev');
      const expected = 'elp xhm xf mbymwwmfj dne';

      expect(actual).to.equal(expected);
    });

    it('Should ignore capital letters', () => {
      const message = 'THINKFUL';
      const actual = substitution(message, 'xoyqmcgrukswaflnthdjpzibev');
      const expected = 'jrufscpw';

      expect(actual).to.equal(expected);
    });

    it('Should work with any kind of key with unique characters', () => {
      const message = 'thinkful';
      const actual = substitution(message, 'xoyqm*grukswaflnthdjpzibev');
      const expected = 'jrufs*pw';

      expect(actual).to.equal(expected);
    });
  });

  describe('decoding a message', () => {
    it('Should decode a message by using the given substitution alphabet', () => {
      const message = 'y&ii$r&';
      const actual = substitution(message, '$wae&zrdxtfcygvuhbijnokmpl', false);
      const expected = 'message';

      expect(actual).to.equal(expected);
    });

    it('Should work with any kind of key with unique characters', () => {
      const message = 'jrufs*pw';
      const actual = substitution(message, 'xoyqm*grukswaflnthdjpzibev', false);
      const expected = 'thinkful';

      expect(actual).to.equal(expected);
    });

    it('Should preserve spaces', () => {
      const message = 'elp xhm xf mbymwwmfj dne';
      const actual = substitution(message, 'xoyqmcgrukswaflnthdjpzibev', false);
      const expected = 'you are an excellent spy';

      expect(actual).to.equal(expected);
    });
  });
});
