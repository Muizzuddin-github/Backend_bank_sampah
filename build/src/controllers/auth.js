"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authControl = {
    register(req, res, next) {
        try {
            res.status(200).json({
                msg: "ini rregister",
            });
        }
        catch (error) {
            next(error);
        }
    },
};
exports.default = authControl;
