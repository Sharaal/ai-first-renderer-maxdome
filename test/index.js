/* eslint-env mocha */

const assert = require('assert');
const renderer = require('../index');

describe('renderer.js', () => {
  const asset = {
    title: 'Criminal Minds: Beyond Borders',
    type: 'series',
    description: 'A good description',
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

  it('should get the typed title correct if there are special characters', () => {
    const actual = renderer(
      { asset: { title: "Devil's Candy", type: 'movie' } },
      ['typedTitle']
    );
    const expected = "Der Film Devil's Candy";
    assert.equal(actual, expected);
  });

  it('should get the title correct for episodes', () => {
    const actual = renderer(
      {
        asset: {
          title: 'Criminal Minds: Beyond Borders',
          type: 'episode',
          episodeTitle: 'A good episode title',
        },
      },
      ['typedTitle']
    );
    const expected =
      'Die Serie Criminal Minds: Beyond Borders - Folge A good episode title';
    assert.equal(actual, expected);
  });

  it('should get the description', () => {
    const actual = renderer({ asset }, ['description']);
    const expected = 'A good description';
    assert.equal(actual, expected);
  });

  it('should get the tip of the day with the typed title', () => {
    const actual = renderer({ asset }, ['tipOfTheDay', 'typedTitle']);
    const expected = 'Tipp des Tages: Die Serie Criminal Minds: Beyond Borders';
    assert.equal(actual, expected);
  });

  it('should get more info from the different models', () => {
    const actual = renderer({ asset, maxpert, review }, [
      'tipOfTheDay',
      'maxpert',
      'typedTitle',
      'review',
    ]);
    const expected =
      'Tipp des Tages von Felix Böhme: Die Serie Criminal Minds: Beyond Borders, Weltweit den Tätern auf der Spur';
    assert.equal(actual, expected);
  });

  it('should also accept the maxdome data structure with asset and maxpert as attribute of review', () => {
    const review = {
      asset: {
        title: 'Criminal Minds: Beyond Borders',
        type: 'series',
      },
      headline: 'Weltweit den Tätern auf der Spur',
      maxpert: {
        firstname: 'Felix',
        surname: 'Böhme',
      },
    };
    const actual = renderer({ review }, [
      'tipOfTheDay',
      'maxpert',
      'typedTitle',
      'review',
    ]);
    const expected =
      'Tipp des Tages von Felix Böhme: Die Serie Criminal Minds: Beyond Borders, Weltweit den Tätern auf der Spur';
    assert.equal(actual, expected);
  });

  it('should also works in different language like english', () => {
    const actual = renderer(
      { asset, maxpert, review },
      ['tipOfTheDay', 'maxpert', 'typedTitle', 'review'],
      'en'
    );
    const expected =
      'Tip of the Day from Felix Böhme: The series Criminal Minds: Beyond Borders, Weltweit den Tätern auf der Spur';
    assert.equal(actual, expected);
  });
});
