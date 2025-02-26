import { model, models, Schema } from "mongoose";

const UserSchemaa = new Schema(
  {
    _id: Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchemaa);

export default User;
