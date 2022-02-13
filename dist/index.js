"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonServer = __importStar(require("json-server"));
const fs = __importStar(require("fs"));
const https = __importStar(require("https"));
const auth_1 = require("./auth");
const authz_1 = require("./authz");
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
server.use(middleware);
/*usa o bodyparser do json server para pegar o body das requisições
*/
server.use(jsonServer.bodyParser);
//middleware para login
server.post('/login', auth_1.handleAuthentication);
server.use('/orders', authz_1.handleAuthorization);
server.use(router);
const options = {
    cert: fs.readFileSync('./src/keys/cert.pem'),
    key: fs.readFileSync('./src/keys/key.pem')
};
https.createServer(options, server).listen(4000, () => {
    console.log("JSON server is running on https://localhost:4000");
});
