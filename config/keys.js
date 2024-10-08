const {
  PORT,
  MONGODB_CONNECTION_STRING,
  GMAIL,
  GMAIL_PASS,
  JWT_SECRET,
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
  AWS_REGION,
  GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  REDIRECT_URL,
  REFRESH_TOKEN
} = process.env;

module.exports = {
  port: PORT,
  ConnectionURL: MONGODB_CONNECTION_STRING,
  senderemail: GMAIL,
  email_password: GMAIL_PASS,
  JWT_SECRET,
  awsAccessKey: AWS_ACCESS_KEY,
  awsSecretAccessKey: AWS_SECRET_ACCESS_KEY,
  awsBucketName: AWS_BUCKET_NAME,
  awsRegion: AWS_REGION,
  googleClientEmail:GOOGLE_CLIENT_EMAIL,
  googlePrivateKey: GOOGLE_PRIVATE_KEY,
  googleClientId: GOOGLE_CLIENT_ID,
  googleClientSecret: GOOGLE_CLIENT_SECRET,
  redirectUrl: REDIRECT_URL,
  refreshToken: REFRESH_TOKEN
};
