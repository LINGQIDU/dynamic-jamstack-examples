const graphql = require('./util/graphql');

exports.handler = async () => {
  const { signatures } = await graphql(`
      signatures {
        data {
          name
        }
      }
  `);

  return {
    statusCode: 200,
    body: JSON.stringify(signatures.data),
  };
};
