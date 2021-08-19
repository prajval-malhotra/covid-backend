const resourcesRouter = require('express').Router()
const Resources = require('../models/resource')
// const Resource = require('./models/resource.js')

resourcesRouter.get('/', (request, response) => {
  Resources.find({}).then(resources => {
    response.json(resources)
  })
})

resourcesRouter.get('/:id', (request, response, next) => {
  Resource.findById(request.params.id)
    .then(resource => {
      if (resource) {
        response.json(resource)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

// resourcesRouter.post('/', (request, response, next) => {
//   const body = request.body

//   const resource = new Resource({
//     name: body.name,
//     item: body.content,
//     phone: body.phone,
//     description: body.description,
//     cost: body.cost,
//     date: new Date()
//   })
  

//   resource.save()
//     .then(savedResource => {
//       response.json(savedResource)
//     })
//     .catch(error => next(error))
// })

resourcesRouter.post('/', (request, response, next) => {
  const body = request.body

  const temp = new Resources({
    name: body.name,
    item: body.content,
    description: body.description,
    cost: body.cost,
    date: new Date(),
  })

  temp.save()
    .then(savedResource => {
      response.json(savedResource)
    })
    .catch(error => next(error))
})

resourcesRouter.delete('/:id', (request, response, next) => {
    Resources.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

resourcesRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const resource = {
    content: body.content,
    important: body.important,
  }

  Resource.findByIdAndUpdate(request.params.id, resource, { new: true })
    .then(updatedResource => {
      response.json(updatedResource)
    })
    .catch(error => next(error))
})

module.exports = resourcesRouter