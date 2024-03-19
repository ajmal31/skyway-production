"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = __importDefault(require("../socket.io/socket"));
const server = async (app, port) => {
    const temp_port = 5003;
    let response = app.listen(temp_port, (err) => {
        if (err)
            console.error(`Error starting the server: ${err}`);
        else {
            console.log(`Chat service listening on Port ${temp_port}`);
            console.log("chat service is started ci/cd is working fine💴💹💹");
        }
    });
    //invkoking socket configrations
    if (response)
        (0, socket_1.default)(response);
};
exports.default = server;
