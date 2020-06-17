import getToken from "./getToken";
import { getTop50 } from "./getTopArtistAlbum";
import { getAlbums, getArtists } from "./getInitialState";

export default function (clientId, clientSecret) {
  return getToken(clientId, clientSecret)
    .then((res) => {
      const { access_token } = res;
      return access_token;
    })
    .then(async (token) => {
      const { artistIDs, albumIDs } = await getTop50(token);
      return { token, artistIDs, albumIDs };
    })
    .then(async ({ token, artistIDs, albumIDs }) => {
      // console.log("token", token, "artistIDs", artistIDs, "albumIDs", albumIDs);
      const artistArray = await getArtists(token, artistIDs.slice(0, 10));
      const albumArray = await getAlbums(token, albumIDs.slice(0, 10));
      // console.log(artistArray, albumArray);
      return { artistArray, albumArray };
    });
}
