"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseErr extends Error {
    constructor(status, msg) {
        super(msg);
        this.status = 0;
        this.status = status;
    }
    get getStatus() {
        return this.status;
    }
}
exports.default = ResponseErr;
