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
exports.Auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    if (authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith("Bearer")) {
        const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
        if (!token) {
            return res.json({ ErrMsg: "No token found" });
        }
        try {
            const decode = jsonwebtoken_1.default.verify(token, `${process.env.secret}`);
            const userID = decode.courier;
            req.courier = userID;
            return next();
        }
        catch (error) {
            console.log(error);
            return res.status(401).json({ ErrMsg: "Unauthorized - Invalid token" });
        }
    }
    else {
        return res.json({ ErrMsg: "An Error occured Not Authorized" });
    }
});
exports.Auth = Auth;
