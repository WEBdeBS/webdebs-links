import request from 'superagent';
import when from 'when';

const user = 'MicheleBertoli';

export function getRepos() {
  return when.promise((resolve, reject) => {
    request.get(`https://api.github.com/users/${user}/repos`).end((err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.body);
    });
  });
}
