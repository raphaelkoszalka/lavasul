import superagent from 'react-superagent';

class HttpRequest {

  constructor() {
  }

  get(url) {
    return superagent
    .get(url)
    .query(null)
    .set('Accept', 'application/json')
    .end ((error, response)=>{
      console.log(response);
    })


  }
}

export default HttpRequest;