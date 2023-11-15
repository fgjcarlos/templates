"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class ExpressServer {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.express = (0, express_1.default)();
    }
    getExpress() {
        return this.express;
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.httpServer = this.express.listen(this.port, this.host, () => {
                    console.log(`Use express server: App listening on ${this.host}:${this.port}`);
                    return resolve();
                });
            });
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (this.httpServer) {
                    this.httpServer.close(error => {
                        if (error) {
                            return reject(error);
                        }
                        return resolve();
                    });
                }
            });
        });
    }
}
exports.default = ExpressServer;
//# sourceMappingURL=expressServer.js.map