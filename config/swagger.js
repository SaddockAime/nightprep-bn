const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

module.exports = {
  specs: swaggerDocument,
  swaggerUi
};
