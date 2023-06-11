import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Poster from "./Poster";
import Search from "./Search";
import Track from "./Track";

function Body({ spotifyApi, chooseTrack }) {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // Searching...
  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      setSearchResults(
        res.body.tracks.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            popularity: track.popularity,
          };
        })
      );
    });
  }, [search, accessToken]);

  // New Releases...
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getNewReleases().then((res) => {
      setNewReleases(
        res.body.albums.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  return (
    <section style={{ backgroundColor: 'black', marginLeft: '24px', paddingTop: '1rem', paddingBottom: '6rem' }}>
    <Search search={search} setSearch={setSearch} />
  
    <div style={{ display: 'grid', overflowY: 'scroll', scrollbarWidth: 'thin', scrollbarColor: 'gray', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gridGap: '2rem', padding: '1rem' }}>
      {searchResults.length === 0
        ? newReleases
            .slice(0, 4)
            .map((track) => (
              <Poster
                key={track.id}
                track={track}
                chooseTrack={chooseTrack}
              />
            ))
        : searchResults
            .slice(0, 4)
            .map((track) => (
              <Poster
                key={track.id}
                track={track}
                chooseTrack={chooseTrack}
              />
            ))}
    </div>
  
    <div style={{ display: 'flex', gap: '2rem', position: 'absolute', minWidth: '100%', marginLeft: '1.5rem' }}>
      {/* Genres */}
      <div className="max-w-[270px] xl:inline-block">
        <h2 style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.75rem' }}>Genres</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem', marginBottom: '0.75rem' }}>
          <div className="genre">Classic</div>
          <div className="genre">House</div>
          <div className="genre">Minimal</div>
          <div className="genre">Hip-hop</div>
          <div className="genre">Electronic</div>
          <div className="genre">Chillout</div>
          <div className="genre">Blues</div>
          <div className="genre">Country</div>
          <div className="genre">Techno</div>
        </div>
        <button className="btn">All Genres</button>
      </div>
  
      {/* Tracks */}
      <div>
        <h2 style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.75rem' }}>
          {searchResults.length === 0 ? "New Releases" : "Tracks"}
        </h2>
        <div style={{ marginBottom: '0.75rem', border: '2px solid #262626', borderRadius: '2xl', padding: '0.75rem', backgroundColor: '#0D0D0D', overflowY: 'scroll', height: '300px', width: '830px', scrollbarWidth: 'thin', scrollbarColor: 'gray' }}>
          {searchResults.length === 0
            ? newReleases
                .slice(4, newReleases.length)
                .map((track) => (
                  <Track
                    key={track.id}
                    track={track}
                    chooseTrack={chooseTrack}
                  />
                ))
            : searchResults
                .slice(4, searchResults.length)
                .map((track) => (
                  <Track
                    key={track.id}
                    track={track}
                    chooseTrack={chooseTrack}
                  />
                ))}
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Body;
