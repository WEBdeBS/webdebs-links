import request from 'superagent';
import {promise} from 'when';

export function getLinks(page) {
  return promise((resolve, reject) => {
    request.get(`http://safe-woodland-6446.herokuapp.com/links?page=${page}`).end((err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.body);
    });
  });
}
