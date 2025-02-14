import mongoose from 'mongoose';

import app from './app';
import { appConfig } from './config/app.config';
// import { createSuperAdmin } from './db';

const connectDB = async () => {
  try {
    await mongoose.connect(appConfig.database_url as string);
    // createSuperAdmin();

    console.log('📦 Connected to database');
  } catch (error) {
    console.error('❌ Failed to connect to database:', error);
    process.exit(1);
  }
};

app.listen(appConfig.port, () => {
  console.log(`🚀 Server running on port ${appConfig.port}`);
});

connectDB();
