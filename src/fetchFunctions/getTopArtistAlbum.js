//top50 playlistからaritstID, albumID を持ってくる
export const getTop50 = async (token, playlistId) => {
  const searchAPI = "https://api.spotify.com/v1/playlists/";
  const market = "market=US";

  return fetch(`${searchAPI}${playlistId}?${market}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      const artists = res.tracks.items.map((item) =>
        item.track.artists.map((artist) => artist.id)
      );

      let artistIDs = [];

      for (const id of artists) {
        artistIDs = artistIDs.concat(id);
      }

      artistIDs = Array.from(new Set(artistIDs));

      let albumIDs = res.tracks.items.map((item) => item.track.album.id);
      albumIDs = Array.from(new Set(albumIDs));

      return { artistIDs, albumIDs };
    });
};
