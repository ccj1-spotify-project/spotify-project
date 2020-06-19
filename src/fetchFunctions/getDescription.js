export const getDescription = (artistID) => {
  if (artistID === undefined || artistID.lenght === 0) {
    return new Error("Please input artist ID");
  }

  const targetURL = `https://open.spotify.com/artist/${artistID}/about`;

  return fetch(targetURL)
    .then((res) => res.text())
    .then((res) => {
      const artistRawDom = new DOMParser().parseFromString(res, "text/html");

      const descriptions = artistRawDom.getElementsByClassName(
        "ArtistAbout__paragraph"
      );

      const artistDescription = Array.from(descriptions).map(
        (desc) => desc.innerText
      );
      return artistDescription.join("");
    });
};
