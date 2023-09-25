import { S3 } from "aws-sdk";
require('dotenv').config()

const accessKeyId = process.env.REACT_STORJ_ACCESS_KEY ?? 'jumxzt4o5iprgrgmoztsbnenumcq';
const secretAccessKey = process.env.REACT_STORJ_SECRET_KEY ?? 'jzvw6qlkckywznmpyi5xgnedtimfxmnkaqcjb7wrth6ghplrnwhxa';
const endpoint = process.env.REACT_STORJ_ENT_POINT ?? 'https://gateway.storjshare.io';

export const s3 = new S3({
  accessKeyId,
  secretAccessKey,
  endpoint,
  s3ForcePathStyle: true,
  signatureVersion: "v4",
  connectTimeout: 0,
  httpOptions: { timeout: 0 }
});

export const storjImage = (bucket, object) => {
    const params = {
        Bucket: bucket,
        Key: object
    }
    const url = s3.getSignedUrl("getObject", params)
    return url
}
