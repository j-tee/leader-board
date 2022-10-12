/* eslint-disable linebreak-style */
const getUserScores = async (url) => {
  let scores;
  await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => (res.json()))
    .then((data) => {
      scores = data.result;
    })
    .catch((err) => err);
  return scores;
};

export default getUserScores;