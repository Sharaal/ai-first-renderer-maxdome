module.exports = ({ asset, maxpert, review }, parts) => {
  let string;

  if (parts.includes('title') || parts.includes('typedTitle')) {
    string = asset.title;
  }

  if (parts.includes('typedTitle')) {
    switch (asset.type) {
      case 'episode':
        string = `Die Serie ${string}`;
        if (asset.episodeTitle) {
          string = `${string} - Folge ${asset.episodeTitle}`;
        }
        break;
      case 'movie':
        string = `Der Film ${string}`;
        break;
      case 'season':
        string = `Die Serie ${string}`;
        if (asset.seasonNumber) {
          string = `${string} - Staffel ${asset.seasonNumber}`;
        }
        break;
      case 'series':
        string = `Die Serie ${string}`;
        break;
      default:
        break;
    }
  }

  if (parts.includes('genres') && asset.genres) {
    string = `${string}, Genres: ${asset.genres.join(', ')}`;
  }

  if (parts.includes('tipOfTheDay')) {
    if (parts.includes('maxpert') && maxpert) {
      string = `Tipp des Tages von ${maxpert.firstname} ${maxpert.surname}: ${string}`;
    } else {
      string = `Tipp des Tages: ${string}`;
    }
  }

  if (parts.includes('review') && review) {
    string = `${string}, ${review.headline}`;
  }

  if (parts.includes('description')) {
    if (string.length > 0) {
      string = `${string}, `;
    }
    string = `${string}${asset.description}`;
  }

  return string;
};
