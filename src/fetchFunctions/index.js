import getToken from "./getToken";
import { getTop50 } from "./getTopArtistAlbum";
import { getAlbums, getArtists } from "./getInitialState";

export default function (clientId, clientSecret, playlistId) {
  return getToken(clientId, clientSecret)
    .then((res) => {
      const { access_token } = res;
      return access_token;
    })
    .then(async (token) => {
      const { playListImages, artistIDs, albumIDs, trackIDs } = await getTop50(
        token,
        playlistId
      );
      return { token, artistIDs, albumIDs, playListImages, trackIDs };
    })
    .then(async ({ token, artistIDs, albumIDs, playListImages, trackIDs }) => {
      const artistArray = await getArtists(token, artistIDs.slice(0, 20));
      const albumArray = await getAlbums(token, albumIDs.slice(0, 20));
      console.log(albumArray);
      return { artistArray, albumArray, playListImages };
    });
}
