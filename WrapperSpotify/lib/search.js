"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = require("./config");

var _utils = require("./utils");

var search = function search(q, type) {
    return fetch(_config.API_URL + "search?q=" + q + "&type=" + type).then(_utils.toJSON);
};

var searchAlbums = function searchAlbums(q) {
    return search(q, 'album');
};
var searchArtists = function searchArtists(q) {
    return search(q, 'artist');
};
var searchTracks = function searchTracks(q) {
    return search(q, 'track');
};
var searchPlaylists = function searchPlaylists(q) {
    return search(q, 'playlist');
};

exports.search = search;
exports.searchAlbums = searchAlbums;
exports.searchArtists = searchArtists;
exports.searchTracks = searchTracks;
exports.searchPlaylists = searchPlaylists;