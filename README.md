# Exemplo

[![Build Status](https://travis-ci.org/jhonesgoncal/marvel-wrapper.svg?branch=master)](https://travis-ci.org/jhonesgoncal/marvel-wrapper) [![Coverage Status](https://coveralls.io/repos/github/jhonesgoncal/marvel-wrapper/badge.svg?branch=master)](https://coveralls.io/github/jhonesgoncal/marvel-wrapper?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A wrapper to work with the [Marvel Web API](https://developer.marvel.com).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Marvel Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install marvel-wrapper --save
```

## How to use

### ES6

```js
// to import a specific method
import MarvelWrapper from 'marvel-wrapper';

const marvel = new MarvelWrapper({
  privateKey: 'YOUR_PRIVATEKEY_HERE',
  publicKey: 'YOUR_PUBLICKEY_HERE',
  limit: 'OPTIONAL_LIMIT'
});

// using  method
marvel.comic.getComics();
```

### CommonJS

```js
const MarvelWrapper = require('marvel-wrapper').default;

const marvel = new MarvelWrapper({
  privateKey: 'YOUR_PRIVATEKEY_HERE',
  publicKey: 'YOUR_PUBLICKEY_HERE',
  limit: 'OPTIONAL_LIMIT'
});
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="marvel-wrapper.js"></script>

<!-- to import minified version -->
<script src="marvel-wrapper.min.js"></script>
```

After that the library will be available to the Global as `MarvelWrapper`. Follow an example:

```js

const marvel = new MarvelWrapper({
  privateKey: 'YOUR_PRIVATEKEY_HERE',
  publicKey: 'YOUR_PUBLICKEY_HERE',
  limit: 'OPTIONAL_LIMIT'
});

const comics = marvel.comic.getComics();
```

## Methods

> Follow the methods that the library provides.

> ## COMICS

### comic.getComics()

> Fetches lists of comics. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

--

**Example**

```js
marvel.comic.getComics()
  .then(reponse => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### comic.getComic(id)

> Fetch one comic by id. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.comic.getComic('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### comic.getCharacters(id)

> Fetched list characters by id references comic. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.comic.getCharacters('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### comic.getEvents(id)

> Fetched list events by id references comic. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.comic.getEvents('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### comic.getCreators(id)

> Fetched list creators by id references comic. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.comic.getCreators('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### comic.getStories(id)

> Fetched list stories by id references comic. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.comic.search('spider')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### comic.getStories(id)

> Fetched list stories by id references comic. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.comic.getStories('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### comic.search(startname)

> Fetched list comics by start name of search. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument  | Type    | Options            |
|-----------|---------|--------------------|
|`startname`|*string* |'Any search letter' |


**Example**

```js
marvel.comic.search('spider')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

> ## CHARACTERS

### character.getCharacters()

> Fetches lists of characters. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

--

**Example**

```js
marvel.character.getCharacters()
  .then(reponse => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### character.getCharacter(id)

> Fetch one character by id. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.character.getCharacter('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### character.getComics(id)

> Fetched list comics by id references character. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.character.getComics('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### character.getEvents(id)

> Fetched list events by id references character. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.character.getEvents('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### character.getSeries(id)

> Fetched list creators by id references character. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.character.getSeries('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### character.getStories(id)

> Fetched list stories by id references character. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.character.getStories('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### character.search(startname)

> Fetched list characters by start name of search. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument  | Type    | Options            |
|-----------|---------|--------------------|
|`startname`|*string* |'Any search letter' |


**Example**

```js
marvel.character.search('spider')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```


> ## CREATORS

### creator.getCreators()

> Fetches lists of creators. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

--

**Example**

```js
marvel.creator.getCreators()
  .then(reponse => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### creator.getCreator(id)

> Fetch one creator by id. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.creator.getCreator('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### creator.getComics(id)

> Fetched list comics by id references creator. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.creator.getComics('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### creator.getEvents(id)

> Fetched list events by id references creator. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.creator.getEvents('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### creator.getSeries(id)

> Fetched list creators by id references creator. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.creator.getSeries('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### creator.getStories(id)

> Fetched list stories by id references creator. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.creator.getStories('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### creator.search(startname)

> Fetched list creators by start name of search. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument  | Type    | Options            |
|-----------|---------|--------------------|
|`startname`|*string* |'Any search letter' |


**Example**

```js
marvel.creator.search('spider')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```



> ## EVENTS

### event.getEvents()

> Fetches lists of Events. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

--

**Example**

```js
marvel.event.getEvents()
  .then(reponse => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### event.getEvent(id)

> Fetch one event by id. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.event.getEvent('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```


### event.getCharacters(id)

> Fetched list characters by id references event. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.event.getCharacters('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### event.getComics(id)

> Fetched list comics by id references event. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.event.getComics('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### event.getCreators(id)

> Fetched list creators by id references event. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.event.getCreators('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### event.getSeries(id)

> Fetched list events by id references event. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.event.getSeries('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### event.getStories(id)

> Fetched list stories by id references event. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.event.getStories('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### event.search(startname)

> Fetched list events by start name of search. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument  | Type    | Options            |
|-----------|---------|--------------------|
|`startname`|*string* |'Any search letter' |


**Example**

```js
marvel.event.search('spider')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

> ## SERIES

### serie.getSeries()

> Fetches lists of series. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

--

**Example**

```js
marvel.serie.getSeries()
  .then(reponse => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### serie.getSerie(id)

> Fetch one serie by id. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.serie.getSerie('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```


### serie.getCharacters(id)

> Fetched list characters by id references serie. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.serie.getCharacters('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### serie.getComics(id)

> Fetched list comics by id references serie. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.serie.getComics('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### serie.getCreators(id)

> Fetched list creators by id references serie. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.serie.getCreators('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### serie.getEvents(id)

> Fetched list events by id references serie. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.serie.getEvents('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### serie.getStories(id)

> Fetched list stories by id references serie. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.serie.getStories('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### serie.search(startname)

> Fetched list series by start name of search. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument  | Type    | Options            |
|-----------|---------|--------------------|
|`startname`|*string* |'Any search letter' |


**Example**

```js
marvel.serie.search('spider')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

> ## STORIES

### storie.getStories()

> Fetches lists of stories. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

--

**Example**

```js
marvel.storie.getStories()
  .then(reponse => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### storie.getStorie(id)

> Fetch one storie by id. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.storie.getStorie('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```


### storie.getCharacters(id)

> Fetched list characters by id references storie. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.storie.getCharacters('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### storie.getComics(id)

> Fetched list comics by id references storie. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.storie.getComics('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### storie.getCreators(id)

> Fetched list creators by id references storie. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.storie.getCreators('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### storie.getEvents(id)

> Fetched list events by id references storie. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.storie.getEvents('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### storie.getSeries(id)

> Fetched list series by id references storie. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.storie.getStories('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### storie.search(startname)

> Fetched list stories by start name of search. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument  | Type    | Options            |
|-----------|---------|--------------------|
|`startname`|*string* |'Any search letter' |


**Example**

```js
marvel.storie.search('spider')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Jhones Gonçalves](https://avatars2.githubusercontent.com/u/23177787?s=400&u=21bdafe4c1b9da7c42b78d7269df068771299f0b&v=4)|
|:---------------------:|
|  [Jhones Gonçalves](https://github.com/jhonesgoncal/)   |

See also the list of [contributors](https://github.com/jhonesgoncal/marvel-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
