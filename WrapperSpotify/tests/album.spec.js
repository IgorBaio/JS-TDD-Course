//getAlbum
//getAlbumTracks

import chai, { expect } from "chai";
import { getAlbum, getAlbumTracks, getAlbums } from "../src/album";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { API_URL } from "../src/config";

chai.use(sinonChai);
global.fetch = require("node-fetch");

describe("Album", () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, "fetch");
    promise = stubedFetch.resolves({ json: () => ({ body: "json" }) });
  });
  afterEach(() => {
    stubedFetch.restore();
  });
  describe("Smoke tests", () => {
    it("should have getAlbum method", () => {
      expect(getAlbum).to.exist;
    });
    it("should have getAlbumTracks method", () => {
      expect(getAlbumTracks).to.exist;
    });
  });
  describe("getAlbum", () => {
    //verifica se o fetch ocorre
    it("should call fetch method", () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    //verifica se o fetch ocorre com a url desejada
    it("should call fetch with the correct url", () => {
      const album = getAlbum("4aawyAB9vmqN3uQ7FjRGTy");
      expect(stubedFetch).to.have.been.calledWith(
        `${API_URL}albums/4aawyAB9vmqN3uQ7FjRGTy`
      );
      const album2 = getAlbum("4aawyAB9vmqN3uQ7FjRGTk");
      expect(stubedFetch).to.have.been.calledWith(
        `${API_URL}albums/4aawyAB9vmqN3uQ7FjRGTk`
      );
    });
    //verifica se o dado é recebido pela Promise
    it("should return the correct data from Promise", () => {
      promise.resolves({ body: "json" });
      const album = getAlbum("4aawyAB9vmqN3uQ7FjRGTk");
      album.then((data) => {
        expect(data).to.be.eql({ body: "json" });
      });
    });
  });
  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been
        .calledWith(`${API_URL}albums?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk`);
    });

    it('should return the correct data from Promise', () => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      albums.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbumsTracks', () => {
    it('should call fetch method', () => {
      const tracks = getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith(`${API_URL}albums/4aawyAB9vmqN3uQ7FjRGTy/tracks`);
    });

    it('should return the correct data from Promise', () => {
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      tracks.then((data) => {
        expect(data).to.be.eql({ album: 'name'});
      });
    });
  });

});
