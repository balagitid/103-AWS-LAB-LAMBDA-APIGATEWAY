Steps: 

1. Create Simple Lambda function using node runtime

```
export const handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};

```
2. Create API gateway with RestAPI GET method

## API Gateway 

####  CORS Configuration in API Gateway:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,OPTIONS
Access-Control-Allow-Headers: Content-Type
```

## Test API Endpoint Directly

```
curl -X GET https://your-api-gateway-id.execute-api.region.amazonaws.com/your-stage/resource-path
```

## Validate API URL

* Ensure the REACT_APP_API_URL is publicly accessible.
* Validate the endpoint in Postman or browser.

3. Frontend deployment with .env

## Frontend

```

npx create-react-app aws-api-gateway-app
cd aws-api-gateway-app
npm install @shadcn/ui
npm install bootstrap

```

## Build & Run

```
npm i
npm build
npm start
```

## Docker Build
```
docker build --no-cache -t lambda-apigateway .
docker run -it -p 3000:3000 lambda-react-frontend 
```