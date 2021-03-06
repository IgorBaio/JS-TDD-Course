import chai, { expect } from "chai";
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from "../src/search";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { API_URL } from "../src/config";

chai.use(sinonChai);

global.fetch = require("node-fetch");

describe("SpotifyWrapper", () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, "fetch");
      promise = fetchedStub.resolves({ json: () => ({ body: "json" }) });
    });
    afterEach(() => {
      fetchedStub.restore();
    });

  describe("Smoke Tests", () => {
    //search (genérico) -> + de 1 tipo
    //searchAlbums
    //searchArtists
    //searchTracks
    //searchPlaylists

    it("should exist the search method", () => {
      expect(search).to.exist;
    });
    it("should exist the searchAlbums method", () => {
      expect(searchAlbums).to.exist;
    });
    it("should exist the searchArtists method", () => {
      expect(searchArtists).to.exist;
    });
    it("should exist the searchTracks method", () => {
      expect(searchTracks).to.exist;
    });
    it("should exist the searchPlaylists method", () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe("Generic search", () => {
    

    it("should fetch function", () => {
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it("should receive the correct url to fetch", () => {
      context("passing one type", () => {
        const artists = search("Incubus", "artist");
        expect(fetchedStub).to.have.been.calledWith(
          `${API_URL}search?q=Incubus&type=artist`
        );
        const albums = search("Incubus", "album");
        expect(fetchedStub).to.have.been.calledWith(
          `${API_URL}search?q=Incubus&type=album`
        );
      });
      context("passing more than one type", () => {
        const artistsAndAlbums = search("Incubus", ["artist", "album"]);
        expect(fetchedStub).to.have.been.calledWith(
          `${API_URL}search?q=Incubus&type=artist,album`
        );
      });
    });

    it("should return the JSON Data from the Promise", () => {
      promise.resolves({ body: "json" });
      const artists = search("Incubus", "artist");
      artists.then((data) => {
        expect(data).to.be.eql({ body: "json" });
      });
    });
  });
  
  describe("Artists search", () => {
   it('should call fetch function', ()=> {
       const artists = searchArtists('Incubus')
       expect(fetchedStub).to.have.been.calledOnce
   })
   it('should call fetch with the correct URL', ()=> {
       const artists = searchArtists('Incubus')
       expect(fetchedStub).to.have.been.calledWith(`${API_URL}search?q=Incubus&type=artist`)
       const artists2 = searchArtists('Muse')
       expect(fetchedStub).to.have.been.calledWith(`${API_URL}search?q=Muse&type=artist`)
   })
  });
  describe("Albums search", () => {
   it('should call fetch function', ()=> {
       const albums = searchAlbums('Incubus')
       expect(fetchedStub).to.have.been.calledOnce
   })
   it('should call fetch with the correct URL', ()=> {
       const albums = searchAlbums('Incubus')
       expect(fetchedStub).to.have.been.calledWith(`${API_URL}search?q=Incubus&type=album`)
       const albums2 = searchAlbums('Muse')
       expect(fetchedStub).to.have.been.calledWith(`${API_URL}search?q=Muse&type=album`)
   })
  });
  describe("Tracks search", () => {
   it('should call fetch function', ()=> {
       const tracks = searchTracks('Incubus')
       expect(fetchedStub).to.have.been.calledOnce
   })
   it('should call fetch with the correct URL', ()=> {
       const tracks = searchTracks('Incubus')
       expect(fetchedStub).to.have.been.calledWith(`${API_URL}search?q=Incubus&type=track`)
       const tracks2 = searchTracks('Muse')
       expect(fetchedStub).to.have.been.calledWith(`${API_URL}search?q=Muse&type=track`)
   })
  });
  describe("Playlists search", () => {
   it('should call fetch function', ()=> {
       const playlists = searchPlaylists('Incubus')
       expect(fetchedStub).to.have.been.calledOnce
   })
   it('should call fetch with the correct URL', ()=> {
       const playlists = searchPlaylists('Incubus')
       expect(fetchedStub).to.have.been.calledWith(`${API_URL}search?q=Incubus&type=playlist`)
       const playlists2 = searchPlaylists('Muse')
       expect(fetchedStub).to.have.been.calledWith(`${API_URL}search?q=Muse&type=playlist`)
   })
  });
});
