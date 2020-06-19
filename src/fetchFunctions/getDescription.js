const nodeFetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export const getDescription = (artistID) => {
  if (artistID === undefined || artistID.lenght === 0) {
    return new Error("Please input artist ID");
  }

  const targetURL = `https://open.spotify.com/artist/${artistID}/about`;

  return nodeFetch(targetURL)
    .then((res) => res.text())
    .then((res) => {
      const dom = new JSDOM(res);
      let primary = dom.window.document.querySelector(".bio-primary").innerHTML;
      let secondary = dom.window.document.querySelector(".bio-secondary")
        .innerHTML;

      primary = primary.replace('<span dir="auto">', "").replace("</span>", "");
      secondary = secondary
        .replace('<span dir="auto">', "")
        .replace("</span>", "");

      return primary.concat(secondary);
    });
};
