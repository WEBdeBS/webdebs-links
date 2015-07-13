import request from 'superagent';
import {promise} from 'when';

const user = 'MicheleBertoli';

export function getRepos() {
  return promise((resolve, reject) => {
    request.get(`https://api.github.com/users/${user}/repos`).end((err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.body);
    });
  });
}

export function getRepo(repo) {
  return promise((resolve, reject) => {
    request.get(`https://api.github.com/repos/${user}/${repo}`).end((err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.body);
    });
  });
}
