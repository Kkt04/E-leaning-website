import express from 'express'; // Change from require() to import
import dotenv from 'dotenv';   // Change from require() to import
import mongoose from 'mongoose'; // Change from require() to import
import userRoutes from '../Backend/route/user.js'; // Add .js extension for ES modules
import authRoutes from '../Backend/route/auth.js';
// import courseRoutes from '../Backend/route/course.js'; // Add .js extension for ES modules

const app = express();

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/courses', courseRoutes);

app.listen(PORT, () => { 
  console.log(`Example app listening on port ${PORT}`)
});
