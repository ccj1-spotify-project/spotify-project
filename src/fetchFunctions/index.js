const axios = require("axios");

const getArtists = (token, ids) => {
  axios({
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
          imageUrl: object.images[2].url,
          uri: object.uri,
        };
      });

      return a;
    });
};

const getAlbums = (token, ids) => {
  axios({
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
          artists: object.artists.map((artist) => {
            return {
              name: artist.name,
            };
          }),
          release_data: object.release_date,
          imageUrl: object.images[2].url,
          uri: object.uri,
          genres: object.genres,
        };
      });

      return albumArray;
    });
};
