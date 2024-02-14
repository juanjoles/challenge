import { config } from "dotenv";

config();

export const AWS_BUCKET_NAME: any = process.env.AWS_BUCKET_NAME;
export const AWS_BUCKET_REGION: any = process.env.AWS_BUCKET_REGION;
export const AWS_PUBLIC_KEY: any = process.env.AWS_PUBLIC_KEY;
export const AWS_SECRET_KEY: any = process.env.AWS_SECRET_KEY;
