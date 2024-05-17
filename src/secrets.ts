import dotenv from 'dotenv';

dotenv.config({path:'.env'});

export const MONGO_URI = process.env.MONGO_URI_STR!
export const PORT = process.env.PORT;
export const SECRET = process.env.JWT_SECRET!;