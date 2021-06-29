import { API_URL, HEADERS } from "./config";
import { toJSON } from "./utils";

const search = (q, type) =>  fetch(`${API_URL}search?q=${q}&type=${type}`, HEADERS)
    .then(toJSON)

const searchAlbums = (q) => search(q,'album');
const searchArtists = (q) => search(q,'artist');
const searchTracks = (q) => search(q,'track');
const searchPlaylists = (q) => search(q,'playlist');

export { search, searchAlbums, searchArtists, searchTracks, searchPlaylists };
