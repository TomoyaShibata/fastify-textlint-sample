const fastify = require('fastify')()
fastify.use(require('cors')())
fastify.register(require('fastify-formbody'), {}, (err)=> {
  if (err) throw err
})

const path = require('path')
const textlint = require('textlint')

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

fastify.post('/lint', (request, reply) => {
  const engine = new textlint.TextLintEngine({
    configFile: [path.join(__dirname, '.textlintrc')]
  })

  engine.executeOnText(request.body.content)
    .then((results) => {
      reply.send(results)
    })
})

fastify.listen(3000, (err) => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
