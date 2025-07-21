# Simple Node.js API
Simple and basic Node.js API using
### Getting Started
```
npm i
npm run start
```

### How to use example
```
// frontend.js
fetch('/api/items')
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
  })
```
### Dependencies:
* Express - Node server
* Cors - To avoid CORS-related issues locally
