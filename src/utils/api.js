import request from 'superagent';
import {promise} from 'when';

const proxy = 'http://crossorigin.me/';
const url = 'http://safe-woodland-6446.herokuapp.com/links?page=';

export function getLinks(page) {
  return promise((resolve, reject) => {
    request.get(`${proxy}${url}${page}`).end((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(res.text));
      }
    });
  });
}
