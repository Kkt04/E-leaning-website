import express from 'express';
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import courseRoute from  './routes/course.route';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

//connet to MongoDB
try {
    mongoose.connect(URI)
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}
//defining routes
app.use("/course",  courseRoute);


app.listen(PORT, () => { 
  console.log(`Example app listening on port ${PORT}`)
});