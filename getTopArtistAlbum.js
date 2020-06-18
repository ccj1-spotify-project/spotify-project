//top50 playlistからaritstID, albumID を持ってくる

export const getTop50 = async (token, playListId) => {
  const searchAPI = "https://api.spotify.com/v1/playlists/";
  const globalTop50ID = "37i9dQZEVXbMDoHDwVN2tF";

  if (playListId === undefined) {
    playListId = globalTop50ID;
  }

  return fetch(`${searchAPI}${playListId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      const playListImage = res.images.map((image) => image.url);

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

      const trackIDs = res.tracks.items.map((item) => item.track.id);

      return { playListImage, artistIDs, albumIDs, trackIDs };
    });
};
