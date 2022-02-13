import * as jsonServer from 'json-server'
import { Express } from 'express'

import * as fs from 'fs'
import * as https from 'https'

import { handleAuthentication } from './auth'
import { handleAuthorization } from './authz'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()

server.use(middleware)

/*usa o bodyparser do json server para pegar o body das requisições
*/
server.use(jsonServer.bodyParser)

//middleware para login
server.post('/login', handleAuthentication)
server.use('/orders', handleAuthorization)
server.use(router)

const options = {
    cert : fs.readFileSync('./src/keys/cert.pem'),
    key : fs.readFileSync('./src/keys/key.pem')    
}

https.createServer(options, server).listen(4000, () => {
    console.log("JSON server is running on https://localhost:4000")
})