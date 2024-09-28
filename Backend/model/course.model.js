import mongoose from "mongoose";

const CourseSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
})
const Course =mongoose.model("Course", CourseSchema)

export default CourseSchema;