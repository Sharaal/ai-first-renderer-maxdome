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

const string = renderer({ asset, maxpert, review }, ['tipOfTheDay', 'maxpert', 'typedTitle', 'genres', 'review']);
// "Tipp des Tages von Felix Böhme: Die Serie Criminal Minds: Beyond Borders, Weltweit den Tätern auf der Spur"
```
