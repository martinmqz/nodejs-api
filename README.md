# Simple Node.js API
Simple and basic Node.js API using
### Getting Started
```
npm i
npm run start
```

### How to use example
```
// Fetching items
fetch('/api/items')
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
  })

// Adding an item
fetch('/api/items', {
  method: 'POST'
  body: JSON.stringify({
    name: 'New-item-name',
    description: 'New-item-description'
  })
})

// Updating an item
const url = `/api/items/${id}`
fetch(url, {
  method: 'PATCH'
  body: JSON.stringify({ description })
})

// Deleting an item
fetch('/api/items/1', {
  method: 'DELETE'
})

```
### Dependencies:
* Express - Node server
* Cors - To avoid CORS-related issues locally

![image](https://martinstack.dev/pixel?r=nodejs-api)

