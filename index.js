import express from 'express';
import dotenv from 'dotenv';

import mongoose from 'mongoose';
// import courseRoute from './routes/course.route.js';
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

//connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected Successfully`);
  } catch (error) {
    console.error(error.message);
  }
}

connectDB();
//defining routes
// app.use("/course",  courseRoute);
// app.use(express.json());




app.listen(PORT, () => { 
  console.log(`Example app listening on port ${PORT}`)
});