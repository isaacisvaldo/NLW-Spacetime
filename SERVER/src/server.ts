import fastify from 'fastify'
const app =fastify()
app.get('/',()=>{
    return 'Testando o meu servidor !'
})
app.listen({
    port:3333
}).then(() => {
    console.log('HTTP server listening on http://localhost:3333')
})