global.fetch = require('node-fetch');

import MarvelWrapper from '../src/index';

let marvel = new MarvelWrapper({
  privateKey: '0f58ef56308890fca54f7c27129208333677efdf',
  publicKey: '113fe8d9f18142601caca4864045c804',
  limit: 100
});

const series = marvel.serie.getSeries();

series.then(response => response.data.results.map(item => console.log(item.title)));
