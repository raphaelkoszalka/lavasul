import superagent from 'superagent';

class HttpRequest {

  get(url) {
    return superagent
    .get(url)
    .withCredentials()
    .set('Accept', 'application/json');
  }

  post(url, payload) {
    return superagent
    .post(url)
    .send(payload)
    .withCredentials()
    .set('Accept', 'application/json');
  }

}

export default HttpRequest;