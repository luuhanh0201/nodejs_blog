const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OjectId = Schema.ObjectId;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const CourseSchema = new Schema(
    {
        id: OjectId,
        name: String,
        description: String,
        image: String,
        videoId: String,
        level: String,
        slug: { type: String, slug: "name", unique: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Course", CourseSchema, "courses");
