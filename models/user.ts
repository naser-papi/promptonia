import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "email already exist"],
    require: [true, "email is required!"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "email address is not valid",
    ],
  },
  username: {
    type: String,
    require: [true, "user name is required"],
  },
  image: {
    type: String,
  },
});

// models : An array containing all models associated with this Mongoose instance.
const User = models.User || model("User", UserSchema);

export default User;
