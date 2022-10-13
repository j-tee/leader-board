/* eslint-disable linebreak-style */
class UserScore {
  constructor(user, score) {
    this.user = user;
    this.score = parseInt(score.substring(0, 4), 10);
  }
}
export default UserScore;