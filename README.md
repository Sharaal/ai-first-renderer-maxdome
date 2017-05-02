[![Build Status](https://travis-ci.org/dragonprojects/ai-renderer-maxdome.svg?branch=master)](https://travis-ci.org/dragonprojects/ai-renderer-maxdome)
[![Dependency Status](https://david-dm.org/dragonprojects/ai-renderer-maxdome/status.svg)](https://david-dm.org/dragonprojects/ai-renderer-maxdome)
[![devDependency Status](https://david-dm.org/dragonprojects/ai-renderer-maxdome/dev-status.svg)](https://david-dm.org/dragonprojects/ai-renderer-maxdome?type=dev)

# Installation

`npm i --save ai-renderer-maxdome`


# Examples

## Simplest usage, only the asset title

```javascript
const renderer = require('ai-renderer-maxdome');

const string = renderer({ asset }, ['title']);
// "Criminal Minds: Beyond Borders"
```


## Advanced usage, tip of the day with maxpert, typed title, genres and review

```javascript
const renderer = require('ai-renderer-maxdome');

const string = renderer({ asset }, ['tipOfTheDay', 'typedTitle']);
// "Tipp des Tages: Die Serie Criminal Minds: Beyond Borders"
```


## Advanced usage, tip of the day with maxpert, typed title, genres and review

```javascript
const renderer = require('ai-renderer-maxdome');

const string = renderer({ asset, maxpert, review }, ['tipOfTheDay', 'maxpert', 'typedTitle', 'review']);
// "Tipp des Tages von Felix Böhme: Die Serie Criminal Minds: Beyond Borders, Weltweit den Tätern auf der Spur"
```


# Documentation

`renderer(data, parts)`

## data

Object with the available data for the output (asset, maxpert, review).

* Component structure (asset and maxpert as part of review)

```javascript
const data = { 
  review: { 
    ...,
    asset: { ... }, 
    maxpert: { ... }, 
  }, 
};
```

* Separated structure

```javascript
const data = { 
  asset: { ... }, 
  maxpert: { ... }, 
  review: { ... }, 
};
```

## parts

Array with the enabled parts for the output. The order in the array doesn't influence the output.

* `title`: Title, e.g. "Criminal Minds: Beyond Borders"
* `typedTitle`: Title prefixed with the type, e.g. "Die Serie Criminal Minds: Beyond Borders"
* `genres`: Comma separated genres, e.g. ", Genres: Drama, Thriller"
* `tipOfTheDay`: Prefix for the tip of the day, e.g. "Tipp des Tages: " or if maxpert is enabled "Tipp des Tages von ${maxpert}"
* `maxpert`: Firstname and surname of the maxpert (only available with tipOfTheDay together), e.g. "Felix Böhme"
* `review`: The headline of the review, e.g. ", Weltweit den Tätern auf der Spur"
