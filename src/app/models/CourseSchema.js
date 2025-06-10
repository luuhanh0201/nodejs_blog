const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OjectId = Schema.ObjectId;

const CourseSchema = new Schema({
    id: OjectId,
    title: String,
    description: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Course", CourseSchema, "courses");
