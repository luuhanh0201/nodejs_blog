const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
mongoose.plugin(slug);
const CourseSchema = new Schema(
    {
        id: ObjectId,
        name: String,
        description: String,
        image: String,
        videoId: String,
        level: String,
        slug: { type: String, slug: "name", unique: true },
    },
    {
        timestamps: true,
    },
);
// Add plugin
CourseSchema.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });
module.exports = mongoose.model("Course", CourseSchema, "courses");
