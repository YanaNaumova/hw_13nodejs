import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
});

const Publisher = mongoose.model("Publisher", publisherSchema);

export default Publisher;
