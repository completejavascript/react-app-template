const projectEnv = 'local';
// const projectEnv = 'dev';
// const projectEnv = 'stg';
// const projectEnv = 'prod';

let domain;

switch (projectEnv) {
  case 'dev':
    domain = 'your-dev-domain';
    break;
  case 'stg':
    domain = 'your-stg-domain';
    break;
  case 'prod':
    domain = 'your-prod-domain';
    break;
  default:
    domain = 'localhost'; // local
    break;
}

export default {
  domain
};
