const axios = require("axios");
const qs = require("qs");

export default function (id, secret) {
  const auth = "Basic " + new Buffer.from(id + ":" + secret).toString("base64");
  const data = qs.stringify({ grant_type: "client_credentials" });

  const opt = {
    method: "post",
    headers: {
      Authorization: auth,
    },
    url: "https://accounts.spotify.com/api/token",
    data: data,
  };

  return axios(opt).then((res) => {
    const token = res.data;
    console.log(token);
    return token;
  });
}
