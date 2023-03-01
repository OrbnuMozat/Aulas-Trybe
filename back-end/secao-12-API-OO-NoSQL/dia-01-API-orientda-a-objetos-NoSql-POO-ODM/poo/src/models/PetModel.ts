import { model } from "mongoose";
import { Ipet } from "../interfaces/Ipet";
import { petSchema } from "../schemas/petSchema";

const Pet = model<Ipet>('Pet', petSchema);