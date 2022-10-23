import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interfaces/storage";

const StorageSchema = new Schema<Storage>(
  {
    fileName: {
      type: String,
    },
    path: {
      type: String,
    },
    idUser: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const StorageModel = model("storage", StorageSchema);

export default StorageModel;
