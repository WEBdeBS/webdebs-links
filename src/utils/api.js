import request from 'superagent';
import {promise} from 'when';

const url = 'http://safe-woodland-6446.herokuapp.com/links?page=';

export function getLinks(page) {
  return promise((resolve, reject) => {
    request.get(`${url}${page}`).end((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(res.text));
      }
    });
  });
}
