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
          description: `Spotify Technology S.A. (/ˈspɒtɪfaɪ/) is a Swedish music streaming and media services provider. It is legally domiciled in Luxembourg and is headquartered in Stockholm, Sweden.[6] Founded in 2006, the company's primary business is providing an audio streaming platform, the "Spotify" platform, that provides DRM-restricted music, videos and podcasts from record labels and media companies. As a freemium service, basic features are free with advertisements or automatic music videos, while additional features, such as offline listening and commercial-free listening, are offered via paid subscriptions.`,
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
