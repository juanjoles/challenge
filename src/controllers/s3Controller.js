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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileToS3 = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const config_1 = require("../config");
const uploadFileToS3 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params.key);
        const s3Client = new client_s3_1.S3Client({
            region: config_1.AWS_BUCKET_REGION,
            credentials: {
                accessKeyId: config_1.AWS_PUBLIC_KEY,
                secretAccessKey: config_1.AWS_SECRET_KEY,
            }
        });
        const bucketName = config_1.AWS_BUCKET_NAME;
        console.log(req.files.file);
        const putObjectCommand = new client_s3_1.PutObjectCommand({
            Bucket: bucketName,
            Key: 'archivo',
            Body: req.files.file
        });
        yield s3Client.send(putObjectCommand);
        res.status(200).json({ message: 'Archivo subido correctamente' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error' });
    }
});
exports.uploadFileToS3 = uploadFileToS3;
