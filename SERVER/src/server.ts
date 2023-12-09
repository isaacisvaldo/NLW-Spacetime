import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const app =fastify() 
app.get('/',()=>{
    const users = prisma.users.findMany()
    return users
})
app.listen({
    port:3333
}).then(() => {
    console.log('HTTP server listening on http://localhost:3333')
})