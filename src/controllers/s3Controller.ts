import { Request, Response } from 'express';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { AWS_BUCKET_REGION, AWS_PUBLIC_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME } from '../config';

export const uploadFileToS3 = async (req: any, res: Response): Promise<void> => {
    try {
        const s3Client = new S3Client({
            region: AWS_BUCKET_REGION,
            credentials: {
                accessKeyId: AWS_PUBLIC_KEY,
                secretAccessKey: AWS_SECRET_KEY,
            }
        });
        const bucketName = AWS_BUCKET_NAME;
        const putObjectCommand = new PutObjectCommand({
            Bucket: bucketName,
            Key: 'archivo',
            Body: req.files.file
        });

        await s3Client.send(putObjectCommand);
        res.status(200).json({ message: 'Archivo subido correctamente' })

    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
};
