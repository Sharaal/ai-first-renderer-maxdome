/* eslint-env mocha */

const assert = require('assert');
const renderer = require('../src/renderer');

describe('renderer.js', () => {
  const asset = {
    title: 'Criminal Minds: Beyond Borders',
    type: 'series',
  };
  const maxpert = {
    firstname: 'Felix',
    surname: 'Böhme',
  };
  const review = {
    headline: 'Weltweit den Tätern auf der Spur',
  };

  it('should get the title', () => {
    const actual = renderer({ asset }, ['title']);
    const expected = 'Criminal Minds: Beyond Borders';
    assert.equal(actual, expected);
  });

  it('should get the tip of the day with the typed title', () => {
    const actual = renderer({ asset }, ['tipOfTheDay', 'typedTitle'])
    const expected = 'Tipp des Tages: Die Serie Criminal Minds: Beyond Borders';
    assert.equal(actual, expected);
  });

  it('should get more info from the different models', () => {
    const actual = renderer({ asset, maxpert, review }, ['tipOfTheDay', 'maxpert', 'typedTitle', 'review']);
    const expected = 'Tipp des Tages von Felix Böhme: Die Serie Criminal Minds: Beyond Borders, Weltweit den Tätern auf der Spur';
    assert.equal(actual, expected);
  });
});
