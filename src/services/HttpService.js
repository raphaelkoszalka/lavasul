import superagent from 'superagent';

class HttpRequest {

    static get(url) {
        return superagent
            .get(url)
            .withCredentials()
            .set('Accept', 'application/json');
    }

    static post(url, payload) {
        return superagent
            .post(url)
            .send(payload)
            .withCredentials()
            .set('Accept', 'application/json');
    }

}

export default HttpRequest;