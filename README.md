# Simple node js api 🛴
a simple api make with node js and mongo
## Server command
  ```
  npm start
  ```
  
## How to use 
- Clone this repository 👇
```
https://github.com/Farriq-mfq/node-js-api.git
```
- Setting database url on env file with name  `databseurl`
- Run server with `npm start`

## Endpoint
### Baseurl endponit and response
- / => Response 👇 

``
{
    "message": "welcome to my api 😀😀"
}
``

- /api => Response 👇 

``
{
    "message": "😏😏😏😏"
}
``

### Api book endpoint
- /book `GET`
- /book `POST`
- /book/:id `PUT`
- /book/:id `DELETE`
- /book/:id `GET`
