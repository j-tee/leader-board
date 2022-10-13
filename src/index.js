/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
import addUserScore from './modules/addUserScore.js';
import getUserScores from './modules/getUserScores.js';
import UserScore from './modules/userScore.js';
import './styles.css';

/* eslint-disable linebreak-style */
const apiKey = 'I5zwBYR8zVJFX6ZO7AFp';
const baseUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`;

const btnSave = document.getElementById('btn-save');
const btnGet = document.getElementById('btn-get');

btnGet.addEventListener('click', (e) => {
  // location.reload();
  e.preventDefault();
  const listTag = document.querySelector('ul');
  listTag.innerHTML = '';
  const userScores = getUserScores(baseUrl);
  userScores.then((data) => {
    [...data].forEach((score) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${score.user}   :</span> <span>${score.score}</span>`;
      listTag.insertAdjacentElement('beforeend', li);
    });
  });
});

btnSave.addEventListener('click', (e) => {
  e.preventDefault();
  const user = document.forms.frmScore.user.value;
  const score = document.forms.frmScore.score.value;
  const userScore = new UserScore(user, score);
  const resp = addUserScore(userScore, baseUrl);
  resp.then((result) => {
    const addScore = document.querySelector('.add-score');
    const msg = document.createElement('p');
    addScore.insertAdjacentElement('afterbegin', msg);
    msg.classList.add('msg');
    msg.textContent = result;
    setTimeout(hideElement, 3000);
    function hideElement() {
      msg.style.display = 'none';
    }
  });
});