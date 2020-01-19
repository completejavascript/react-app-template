const projectEnv = 'local';
// const projectEnv = 'dev';
// const projectEnv = 'stg';
// const projectEnv = 'prod';

let domain, baseAPI;

switch (projectEnv) {
  case 'dev':
    domain = 'your-dev-domain';
    baseAPI = 'your-dev-api-url';
    break;
  case 'stg':
    domain = 'your-stg-domain';
    baseAPI = 'your-stg-api-url';
    break;
  case 'prod':
    domain = 'your-prod-domain';
    baseAPI = 'your-prod-api-url';
    break;
  default:
    domain = 'localhost'; // local
    baseAPI = 'https://jsonplaceholder.typicode.com/';
    break;
}

export default {
  domain,
  baseAPI
};
