  import superagent from 'superagent';

  class HttpRequest {

    // just a simple GET for now, will be a POST later on;

    get(url) {
      return superagent
      .get(url)
      .withCredentials()
      .set('Accept', 'application/json');
    }



  }

  export default HttpRequest;