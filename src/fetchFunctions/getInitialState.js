const axios = require("axios");

export const getArtists = (token, ids) => {
  return axios({
    url: `https://api.spotify.com/v1/artists?ids=${ids}`,
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.data)
    .then((res) => {
      const artistArray = res.artists.map((object) => {
        return {
          name: object.name,
          photo: object.images[0].url,
          uri: object.uri,
          description:
            object.name === "Dua Lipa"
              ? `イギリスの女性シンガーソングライター・ファッションモデル。両親はコソボ出身のアルバニア人で、彼女の名前"Dua"はアルバニア語で『愛』を表している.`
              : "現在実装中です",
        };
      });

      return artistArray;
    });
};

export const getAlbums = (token, ids) => {
  return axios({
    url: `https://api.spotify.com/v1/albums?ids=${ids}`,
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.data)
    .then((res) => {
      const albumArray = res.albums.map((object) => {
        return {
          name: object.name,
          artist: object.artists
            .map((artist) => {
              return {
                name: artist.name,
              };
            })
            .map((obj) => obj.name)
            .join(),
          releasedDate: object.release_date,
          photo: object.images[0].url,
          uri: object.uri,
          genre: object.genres.lenght === 0 ? "None" : object.genres.join(),
        };
      });

      return albumArray;
    });
};
