"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const s3Controller_1 = require("../controllers/s3Controller");
const router = express_1.default.Router();
router.post('/signup', authController_1.signUp);
router.post('/signin', authController_1.signIn);
router.post('/upload', s3Controller_1.uploadFileToS3);
exports.default = router;
