/* eslint-disable linebreak-style */

const addUserScore = async (userScore, url) => {
  let resp;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userScore),
  }).then((res) => res.json())
    .then((data) => {
      resp = data.result;
    })
    .catch((err) => err);
  return resp;
};

export default addUserScore;