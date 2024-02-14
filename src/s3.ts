// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import { Readable } from "stream";

// // Configuración del cliente S3
// const s3Client = new S3Client({
//     region: "tu-region-de-aws",
//     credentials: {
//         accessKeyId: "tu-access-key-id",
//         secretAccessKey: "tu-secret-access-key"
//     }
// });

// // Función para subir un archivo a AWS S3
// async function uploadFileToS3(bucketName: string, key: string, body: Readable): Promise<void> {
//     try {
//         // Crear el comando PutObject
//         const putObjectCommand = new PutObjectCommand({
//             Bucket: bucketName,
//             Key: key,
//             Body: body
//         });

//         // Ejecutar el comando para subir el archivo
//         const response = await s3Client.send(putObjectCommand);
//         console.log("Archivo subido exitosamente:", response);
//     } catch (error) {
//         console.error("Error al subir archivo a S3:", error);
//         throw error;
//     }
// }

// // Ejemplo de uso
// const bucketName = "nombre-de-tu-bucket";
// const key = "ruta/del/archivo/nombre-archivo.txt";
// const body = Readable.from("Contenido del archivo");

// uploadFileToS3(bucketName, key, body)
//     .then(() => console.log("Archivo subido correctamente a S3"))
//     .catch((error) => console.error("Error al subir archivo:", error));
