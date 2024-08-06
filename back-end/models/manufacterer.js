import mongoose from "mongoose";

const manufacturerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensure that the manufacturer name is unique
    min: 3,
    max: 100,
  },
  location: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  contact: {
    type: String,
    required: true,
    min: 10,
    max: 15, // Assuming a contact number format
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Simple email regex
      },
      message: props => `${props.value} is not a valid email!`
    },
  },
  establishedYear: {
    type: Number,
    required: true,
    min: 1900,
    max: new Date().getFullYear(), // Ensure the year is not in the future
  },
  website: {
    type: String,
    validate: {
      validator: function(v) {
        return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})[\/\w .-]*/.test(v); // Simple URL regex
      },
      message: props => `${props.value} is not a valid website!`
    },
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the created date
  },
});

// Create the Manufacturer model
const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);

export default Manufacturer;
