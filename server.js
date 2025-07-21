import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const items = [
  { id: 1, name: 'Item one', description: 'This is item-one description' },
  { id: 2, name: 'Item two', description: 'This is item-two description' },
  { id: 3, name: 'Item three', description: 'This is item-three description' },
  { id: 4, name: 'Item four', description: 'This is item-four description' },
  { id: 5, name: 'Item five', description: 'This is item-five description' },
  { id: 6, name: 'Item six', description: 'This is item-six description' },
  { id: 7, name: 'Item seven', description: 'This is item-seven description' },
  { id: 8, name: 'Item eight', description: 'This is item-eight description' },
  { id: 9, name: 'Item nine', description: 'This is item-nine description' },
  { id: 10, name: 'Item ten', description: 'This is item-ten description' }
]

// Get all items
app.get('/api/items', (request, response) => {
  response.json(items)
})

// Add new item
app.post('/api/items', (request, response) => {
  const newItem = { id: items.length + 1, ...request.body }
  items.push(newItem)

  response.json(newItem)
})

// Update item description
app.patch('/api/items/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const index = items.findIndex((item) => item.id === id)
  const item = items[index]
  const desc = request.body.description
  item.description = desc

  response.json(item)
})

// Delete item
app.delete('/api/items/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const index = items.findIndex((item) => item.id === id)
  items.splice(index, 1)

  response.json({ id })
})

// Start server
app.listen(5000, () => console.info('Server running on port 5000'))
