import mongoose, { Schema } from "mongoose";

const CountrySchema = new Schema(
  {
    country: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
    year_of_independence: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Country = mongoose.model("db", CountrySchema, "db");

export default Country;
