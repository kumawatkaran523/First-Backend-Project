# Backend Project For Learning Purpose

### 
![alt](./public/readme%20Image/basic.png)

### In Javascript based backend we majorly deal with
1. Data
2. File
3. Third party API


### Directory Structure for Backend
- **File**: Contains the main files of the project.
  - `index.js`: Entry point of the application.
  - `app.js`: Initializes and configures the app.
  - `config.js`: Configuration settings for the application.

- **Folder**: Contains various directories for organizing the project.
  - `db`: Database-related files.
  - `model`: Database models.
  - `controllers`: Business logic and controllers.
  - `route`: Route definitions.
  - `middleware`: Middleware functions.
  - `utils`: Utility functions and helpers.

### Now Come to write code 
First of all create empty Node Application likewise react application using 

```javascript
 npm init
```
This command will create a package.json file

Then you can add script command for run in package.json

```javascript 
script{
   "start":"node index.js"
}
```

run the file in terminal with command
```javascript
npm run start
```

If we have installed nodemon then 
```javascript
script{
  "dev":"nodemon src/index.js"
}
```
run the file in terminal with command
```javascript
npm run dev 
```

##  Removing CORS (Cross Origin Resource Sharing)

1. Either do whitelist in server or
2. Use Proxy

### proxy in create react app
```javascript 
proxy:"http://localhost:3000"
```

### proxy in vite
go to vite.confing file frontend code and add

```javascript 
server:{
   proxy:{
     '/app/books':"http://localhost:3000",
   }
}
```

### Model Structure used in ptoject
![Model Structure](./public/readme%20Image/model%20structure.jpg)


## HTTP Crash Course 

``` javascript
HTTP : Hyper Text Transfer Protocol

  URL:Uniform Resource Locator
  URI:Uniform Resource Identifier
  URN:Uniform Request Number
  
Most Commonly used HTTP Method :
  GET -Retrieve a resource
  DELETE - Remove a resource
  PUT - replace a resource
  PATCH - change part of a resource
  POST- interact with resource (Mostly add)
 
 
HTTP Status Code-

1xx -Informational
2xx -Success
3xx -Redirectional
4xx -Client error
5xx -Server error

```

## Important note for Import and Export

### if we export with default then we can import with any name eg.

``` javascript
import userRouter from './routes/user.routes.js'
```
``` javascript
export default routes

// here we are exporting with routes name but there we can import it with any name because of default 
```

### But if we export without default keyword then then we need to import it with same name eg.

``` javascript
import {userRouter} from './routes/user.routes.js'
```
``` javascript
export {userRouter}

// here we are exporting with {userRouter} name and we import it with same name. 
```

## Middleware 
###  '' Jane se Pahle Milkar Jana "
![alt](./public/readme%20Image/middleware.png)


