import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: string,
  content: string,
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
