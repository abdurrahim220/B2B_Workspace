import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export const appConfig = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  session_secret: process.env.SESSION_SECRET,
  fronted_url: process.env.FRONTED_URL,
  fronted_google_callback_url: process.env.FRONTED_GOOGLE_CALLBACK_URL,
  NODE_ENV: process.env.NODE_ENV,
  email_user: process.env.EMAIL_USER,
  email_password: process.env.EMAIL_PASSWORD,
  jWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  jWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN,
  super_admin_name: process.env.SUPER_ADMIN_NAME,
  super_admin_email: process.env.SUPER_ADMIN_EMAIL,
  super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
  super_admin_phone: process.env.SUPER_ADMIN_PHONE,
  super_admin_profile_picture: process.env.SUPER_ADMIN_PROFILE_PICTURE,
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
  SESSION_SECRET: process.env.SESSION_SECRET,
};
