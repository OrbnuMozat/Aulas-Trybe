import { Schema } from "mongoose";
import { Ipet } from "../interfaces/Ipet";

export const petSchema = new Schema<Ipet>({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: false },
  weight: { type: Number, required: true },
  dailyMealsNumber: { type: Number, required: true, min: 2, max: 5 },
})