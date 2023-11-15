"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expressServer_1 = __importDefault(require("./src/server/expressServer"));
const HOST = process.env.HOST || 'localhost';
const PORT = Number(process.env.POR) || 3000;
const server = new expressServer_1.default(HOST, PORT);
try {
    server.listen();
}
catch (e) {
    console.log(e);
    process.exit(1);
}
//# sourceMappingURL=index.js.map