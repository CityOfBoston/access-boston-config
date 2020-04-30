const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const {
  Buckets,
  Keys
} = require('./params.js');

exports.handler = async () => {
  const getAppsConfig = async () => {
    const config = await s3.getObject({
      Bucket: Buckets.source,
      Key: Keys.source
    }).promise();
    return config;
  };
  const s3Obj = await getAppsConfig();
  const Body = s3Obj.Body.toString('ascii');
  const updateAppsConfig = async () => {
    return await s3.putObject({
      Bucket: Buckets.target,
      Key: Keys.target,
      Body,
      ServerSideEncryption: "AES256",
    }).promise();
  };

  const s3PutRes = await updateAppsConfig();
  return s3PutRes;
};
