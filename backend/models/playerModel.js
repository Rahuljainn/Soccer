import mongoose from "mongoose";
const PlayerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: false,
    required: [true, "Please add a first name"],
    trim: true,
    maxlength: [20, "First Name can not be more than 50 characters"],
  },
  lastName: {
    type: String,
    unique: false,
    required: [true, "Please add a last name"],
    trim: true,
    maxlength: [20, "Last Name can not be more than 50 characters"],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  phone: {
    type: Number,
    maxLength: [10, "Phone number can not be longer than 10.."],
  },
  isCoach: {
    type: Boolean,
    default: false,
  },
  team: {
    type: String,
  },
  speed: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
  speed: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
  strength: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
  endurance: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
  ability: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
  technique: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
  tactical: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

export default PlayerSchema;
