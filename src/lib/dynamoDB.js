import aws from 'aws-sdk';

import config from '../config';

const client = new aws.DynamoDB.DocumentClient({
  accessKeyId: config.dynamodb_accessKey,
  secretAccessKey: config.dynamodb_secretKey,
  region: config.dynamodb_region,
  params: {
    TableName: config.dynamodb_tableName
  }
});

export default {
  get: (params) => client.get(params).promise(),
  put: (params) => client.put(params).promise(),
  query: (params) => client.query(params).promise(),
  update: (params) => client.update(params).promise(),
  delete: (params) => client.delete(params).promise()
};