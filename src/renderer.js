const i18n = require('i18n');
i18n.configure({
  directory: `${__dirname}/../locales`,
  updateFiles: false,
  locales: ['en', 'de'],
});

module.exports = (data, parts, language = 'de') => {
  let asset;
  let maxpert;
  const review = data.review;
  if (review) {
    asset = review.asset || data.asset;
    maxpert = review.maxpert || data.maxpert;
  } else {
    asset = data.asset;
    maxpert = data.maxpert;
  }

  let string = '';

  if (parts.includes('title') || parts.includes('typedTitle')) {
    string = asset.title;
  }

  if (parts.includes('typedTitle')) {
    switch (asset.type) {
      case 'episode':
        string = i18n.__(
          { phrase: 'The series {{string}}', locale: language },
          { string }
        );
        if (asset.episodeTitle) {
          string = i18n.__(
            { phrase: '{{string}} - Episode {{episodeTitle}}', locale: language },
            { asset, string }
          );
        }
        break;
      case 'movie':
        string = i18n.__(
          { phrase: 'The movie {{string}}', locale: language },
          { string }
        );
        break;
      case 'season':
        string = i18n.__(
          { phrase: 'The series {{string}}', locale: language },
          { string }
        );
        if (asset.seasonNumber) {
          string = i18n.__(
            { phrase: '{{string}} - Season {{asset.seasonNumber}}', locale: language },
            { asset, string }
          );
        }
        break;
      case 'series':
        string = i18n.__(
          { phrase: 'The series {{string}}', locale: language },
          { string }
        );
        break;
      default:
        break;
    }
  }

  if (parts.includes('genres') && asset.genres) {
    string = i18n.__(
      { phrase: '{{string}}, Genres: {{asset.genres}}', locale: language },
      { asset: { genres: asset.genres.join(', ') }, string }
    );
  }

  if (parts.includes('tipOfTheDay')) {
    if (parts.includes('maxpert') && maxpert) {
      string = i18n.__(
        { phrase: 'Tip of the Day from {{maxpert.firstname}} {{maxpert.surname}}: {{string}}', locale: language },
        { maxpert, string }
      );
    } else {
      string = i18n.__(
        { phrase: 'Tip of the Day: {{string}}', locale: language },
        { string }
      );
    }
  }

  if (parts.includes('review') && review) {
    string = i18n.__(
      { phrase: '{{string}}, {{review.headline}}', locale: language },
      { review, string }
    );
  }

  if (parts.includes('description')) {
    if (string.length > 0) {
      string = i18n.__(
        { phrase: '{{string}}. {{asset.description}}', locale: language },
        { asset, string }
      );
    } else {
      string = asset.description;
    }
  }

  return string;
};
