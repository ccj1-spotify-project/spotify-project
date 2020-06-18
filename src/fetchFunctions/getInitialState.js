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
          photo: object.images[2].url,
          uri: object.uri,
          description: "still looking for the API",
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
            .join(),
          releaseData: object.release_date,
          photo: object.images[2].url,
          uri: object.uri,
          genre: object.genres,
        };
      });

      return albumArray;
    });
};
