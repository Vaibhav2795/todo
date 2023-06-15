import mongoose from 'mongoose';
import app from './app';
import { config } from 'dotenv';

config();

const port: number = parseInt(process.env.PORT) || 4000;

(async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log('Connected to MongoDB');

    const server = app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

    server.on('error', (error) => {
      console.error('Server error:', error);
      process.exit(1);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
})();
