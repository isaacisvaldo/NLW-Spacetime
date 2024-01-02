import fastify from 'fastify'
import cors from '@fastify/cors'
import 'dotenv/config';
import jwt from '@fastify/jwt';
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth';
const app =fastify() 
app.register(memoriesRoutes)
app.register(authRoutes)
app.register(cors,{
    origin:true,
})
app.register(jwt,{
    secret:'#SpacetimeIsvaldo#', 
})
app.listen({
    port:3333
}).then(() => {
    console.log('HTTP server is  🚀  on http://localhost:3333')
})