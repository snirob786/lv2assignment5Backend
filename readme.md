# Assignment 5

## _Steps to run the project_

1. Go to the project in cmd and run `npm install` to install all the dependencies.

2. You can run `npm install --force` to forcefully install all the dependencies if you find any error installing the dependent packages.

3. Then copy the **.env.example** file and rename it to **.env** and fill out all the environment variables like below:

```
NODE_ENV=[Enviroment for production or development] //example: development

PORT=[Port you want to run your project] //example: 5000

DATABASE_URL=[Your mongodb connection string] //example: mongodb+srv://**

BCRYPT_SALT_ROUNDS=[Your bcrypt rounds] //example: 10

DEFAULT_PASS=[Your default pass]  //example: 123456
JWT_ACCESS_SECRET=[Your jwt secret for access key] // example: nirob
JWT_REFRESH_SECRET=[Your jwt secret for refresh key] // example: nirob
JWT_ACCESS_EXPIRES_IN=[Your jwt expiry time for access key] // example: 30d
JWT_REFRESH_EXPIRES_IN=[Your jwt expiry time for access key] // example: 365d
```

4. Now run the command below
   `npm run dev`
   and your project will on the mentioned port in env like
   `localhost:5000`
