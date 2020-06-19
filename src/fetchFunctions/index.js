import getToken from "./getToken";
import { getTop50 } from "./getTopArtistAlbum";
import { getAlbums, getArtists } from "./getInitialState";
import { getDescription } from "./getDescription";

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
      const descriptionArray = await Promise.all(
        artistIDs.map((artistID) => getDescription(artistID))
      );
      return {
        token,
        artistIDs,
        albumIDs,
        playListImages,
        trackIDs,
        descriptionArray,
      };
    })
    .then(
      async ({
        token,
        artistIDs,
        albumIDs,
        playListImages,
        trackIDs,
        descriptionArray,
      }) => {
        const artistArray = await getArtists(token, artistIDs.slice(3, 20));
        // console.log(artistArray)
        const albumArray = await getAlbums(token, albumIDs.slice(3, 20));

        return { artistArray, albumArray, playListImages, descriptionArray };
      }
    );
}
