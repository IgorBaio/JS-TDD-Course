global.fetch = require('node-fetch')
import { searchAlbums } from "../src";

const albums = searchAlbums('Incubus')

albums.then(data =>  console.log(data))
//rodar arquivo com npx babel-node albums.js