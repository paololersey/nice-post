# nice-post

# run locally
# db
> sudo service mongod start
> sudo mongo

# backend
On c:/repositories/nicepost, start the backend
> node server.js

# frontend
In order to build the F.E. for development,
> cd angular-front-end
> npm start

# run prod environment
In order to build the F.E. for production,
> cd angular-front-end
> ng build --env=prod
Copy dist folder to angilar-front-end/dist
> git push heroku master