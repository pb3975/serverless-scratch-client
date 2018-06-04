export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-scratch-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://su9797gao3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Uc4jIeozu",
    APP_CLIENT_ID: "72pusj0kjrvifq3kl7h5fo398f",
    IDENTITY_POOL_ID: "us-east-1:7b4c9bb8-8eee-425b-91ba-ef575aebe104"
  }
};