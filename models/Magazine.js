import mongoose from "mongoose";

const magazineSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  issueNumber: { type: Number, required: true, trim: true },
  publisher: { type: mongoose.Schema.Types.ObjectId, ref: "Publisher" },
});

const Magazine = mongoose.model("Magazine", magazineSchema);

export default Magazine;
