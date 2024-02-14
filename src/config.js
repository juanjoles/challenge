"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWS_SECRET_KEY = exports.AWS_PUBLIC_KEY = exports.AWS_BUCKET_REGION = exports.AWS_BUCKET_NAME = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
exports.AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;
exports.AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY;
exports.AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
